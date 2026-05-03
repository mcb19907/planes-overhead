import React, { useEffect, useState } from 'react'
import { useLocation, useFlights } from './flight-data.jsx'
import { WeatherVariant } from './variants.jsx'
import { LocationPicker } from './location-picker.jsx'

export default function App() {
  const { location, status: geoStatus, setLocation, useGeolocation, reset: resetLocation } = useLocation()
  const { planes, status, lastUpdate } = useFlights({
    radiusNm: 25,
    intervalMs: 8000,
    demo: false,
    location,
  })

  // First-load: prefer real geolocation when no override is stored.
  useEffect(() => {
    if (location.source === 'default') useGeolocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Recompute viewport size on rotate / resize.
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [])

  // Time of day (0..1) drives the sky gradient and map tint.
  const now = new Date()
  const tod = (now.getHours() * 60 + now.getMinutes()) / (24 * 60)

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <LocationPicker
        location={location}
        status={geoStatus}
        onSet={setLocation}
        onUseGeo={useGeolocation}
        onReset={resetLocation}
      />
      <WeatherVariant
        planes={planes}
        status={status}
        lastUpdate={lastUpdate}
        house={location}
        mapStyle="light"
        showPaths={false}
        showTrails={true}
        timeOfDay={tod}
        overheadTreatment="closest"
        width={size.w}
        height={size.h}
      />
    </div>
  )
}
