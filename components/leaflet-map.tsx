"use client"

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Clock, Car, RotateCcw } from 'lucide-react'
import { LOCATIONS } from '@/lib/constants'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
interface IconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}
delete (L.Icon.Default.prototype as IconDefault)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom marker icons
const createCustomIcon = (label: string) => {
  return L.divIcon({
    html: `
      <div style="
        background-color: #ef4444;
        color: white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        ${label}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

// Component to fit bounds to show both locations
function FitBounds() {
  const map = useMap()
  
  useEffect(() => {
    const bounds = L.latLngBounds(
      LOCATIONS.map(location => [location.coordinates.lat, location.coordinates.lng])
    )
    
    // Check if it's mobile view and set appropriate padding
    const isMobile = window.innerWidth < 768
    const paddingOptions = isMobile 
      ? { padding: [50, 50] as L.PointTuple }
      : { padding: [20, 20] as L.PointTuple }
    
    map.fitBounds(bounds, paddingOptions)
  }, [map])
  
  return null
}

// Component to handle map reset functionality
function MapResetControl() {
  const map = useMap()
  
  useEffect(() => {
    // Store the reset function on the map instance so it can be called from outside
    interface MapWithReset extends L.Map {
      resetView?: () => void;
    }
    (map as MapWithReset).resetView = () => {
      const bounds = L.latLngBounds(
        LOCATIONS.map(location => [location.coordinates.lat, location.coordinates.lng])
      )
      
      // Use same mobile-responsive padding as FitBounds
      const isMobile = window.innerWidth < 768
      const paddingOptions = isMobile 
        ? { padding: [50, 50] as L.PointTuple }
        : { padding: [20, 20] as L.PointTuple }
      
      map.fitBounds(bounds, paddingOptions)
      map.closePopup() // Close any open popups
    }
  }, [map])
  
  return null
}

// Component to handle Ctrl+scroll zoom functionality
function ScrollWheelZoomControl() {
  const map = useMap()
  
  useEffect(() => {
    let ctrlPressed = false

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        ctrlPressed = true
        map.scrollWheelZoom.enable()
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        ctrlPressed = false
        map.scrollWheelZoom.disable()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!ctrlPressed) {
        // Allow normal page scrolling when Ctrl is not pressed
        // Don't prevent default - let the page scroll normally
        return
      }
      // When Ctrl is pressed, let the map handle the zoom
    }

    const handleBlur = () => {
      // Reset when window loses focus
      ctrlPressed = false
      map.scrollWheelZoom.disable()
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)
    
    const mapContainer = map.getContainer()
    mapContainer.addEventListener('wheel', handleWheel, { passive: true })

    // Initial state - disabled
    map.scrollWheelZoom.disable()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
      mapContainer.removeEventListener('wheel', handleWheel)
    }
  }, [map])
  
  return null
}

interface LeafletMapProps {
  className?: string;
}

export function LeafletMap({ className }: LeafletMapProps) {
  const mapRef = useRef<L.Map>(null)

  const handleReset = () => {
    if (mapRef.current) {
      interface MapWithReset extends L.Map {
        resetView?: () => void;
      }
      const map = mapRef.current as MapWithReset
      if (map.resetView) {
        map.resetView()
      }
    }
  }

  return (
    <div className={className}>
      <MapContainer
        ref={mapRef}
        center={[38.975, -77.25]}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
        scrollWheelZoom={false}
        doubleClickZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <FitBounds />
        <MapResetControl />
        <ScrollWheelZoomControl />
        
        {LOCATIONS.map((location) => (
          <Marker
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={createCustomIcon(location.id === 'alexandria' ? 'A' : 'G')}
          >
            <Popup
              maxWidth={320}
              className="custom-popup"
              closeButton={true}
              autoClose={false}
              closeOnEscapeKey={true}
            >
              <div className="p-2">
                {/* Location Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {location.id === 'alexandria' ? 'A' : 'G'}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{location.name}</h3>
                    <p className="text-gray-600 text-sm">{location.city}</p>
                  </div>
                </div>
                
                {/* Location Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">{location.address}</div>
                      <div className="text-gray-600 text-sm">{location.city}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`} 
                      className="text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-700 text-sm">
                      {location.hours.weekdays ? (
                        // Old format (Gaithersburg)
                        <>
                          <div>Mon-Fri: {location.hours.weekdays}</div>
                          <div>Sat-Sun: {location.hours.weekends}</div>
                        </>
                      ) : (
                        // New format (Alexandria)
                        <>
                          <div>Sun: {location.hours.sunday}</div>
                          <div>Mon-Fri: {location.hours.monday}</div>
                          <div>Sat: {location.hours.saturday}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {location.features.slice(0, 3).map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs bg-red-50 text-red-700 border border-red-200"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white text-xs flex-1"
                  >
                    <a href={`tel:${location.phone}`}>
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-700 hover:bg-gray-100 text-xs flex-1"
                  >
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address + ', ' + location.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Car className="w-3 h-3 mr-1" />
                      Directions
                    </a>
                  </Button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Reset Button */}
      <Button
        onClick={handleReset}
        size="sm"
        variant="outline"
        className="absolute top-4 right-4 z-[1000] bg-white hover:bg-gray-50 border-gray-300 shadow-lg"
        title="Reset map view"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset View
      </Button>

      {/* Scroll Zoom Instruction */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 text-xs text-gray-600 border border-gray-200">
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono">Ctrl</kbd>
          <span>+ scroll to zoom</span>
        </div>
      </div>
    </div>
  )
} 