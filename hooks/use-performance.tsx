"use client"

import { useEffect, useRef } from 'react'

interface PerformanceMetrics {
  pageLoadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

export function usePerformance() {
  const metricsRef = useRef<PerformanceMetrics>({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
  })

  useEffect(() => {
    // Measure page load time
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          metricsRef.current.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
        }
      }
    }

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            metricsRef.current.firstContentfulPaint = fcpEntry.startTime
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            metricsRef.current.largestContentfulPaint = lastEntry.startTime
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          metricsRef.current.cumulativeLayoutShift = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        return () => {
          fcpObserver.disconnect()
          lcpObserver.disconnect()
          clsObserver.disconnect()
        }
      }
    }

    // Track user interactions
    const trackInteraction = (eventType: string) => {
      return (event: Event) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(`User interaction: ${eventType}`, {
            timestamp: Date.now(),
            target: (event.target as HTMLElement)?.tagName,
            metrics: metricsRef.current,
          })
        }
      }
    }

    // Set up event listeners
    const clickHandler = trackInteraction('click')
    const scrollHandler = trackInteraction('scroll')

    document.addEventListener('click', clickHandler)
    document.addEventListener('scroll', scrollHandler, { passive: true })

    // Measure metrics after page load
    if (document.readyState === 'complete') {
      measurePageLoad()
    } else {
      window.addEventListener('load', measurePageLoad)
    }

    const cleanup = measureWebVitals()

    return () => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('load', measurePageLoad)
      cleanup?.()
    }
  }, [])

  const getMetrics = (): PerformanceMetrics => {
    return { ...metricsRef.current }
  }

  const logMetrics = () => {
    if (process.env.NODE_ENV === 'development') {
      console.table(metricsRef.current)
    }
  }

  return {
    getMetrics,
    logMetrics,
  }
} 