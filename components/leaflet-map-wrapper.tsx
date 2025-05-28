"use client"

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

// Dynamically import the LeafletMap component with no SSR
const LeafletMap = dynamic(() => import('./leaflet-map').then(mod => ({ default: mod.LeafletMap })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4">
        <Skeleton className="w-full h-full" />
        <p className="text-gray-500 text-sm">Loading map...</p>
      </div>
    </div>
  )
})

interface LeafletMapWrapperProps {
  className?: string
}

export function LeafletMapWrapper({ className }: LeafletMapWrapperProps) {
  return <LeafletMap className={className} />
} 