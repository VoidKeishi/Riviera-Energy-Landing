'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// ─── Location Data ─────────────────────────────────────────────

interface Location {
  name: string;
  label: string;
  position: [number, number];
  city: string;
  address?: string;
  phone?: string;
  isHQ: boolean;
}

const locations: Location[] = [
  {
    name: 'Singapore',
    label: 'Headquarters',
    position: [1.3521, 103.8198],
    city: 'Singapore',
    address: '152 Beach Road, #10-07 Gateway East',
    phone: '+65 9040 4928',
    isHQ: true,
  },
  {
    name: 'Americas',
    label: 'Regional Operations',
    position: [29.76, -95.37],
    city: 'Houston, Texas',
    isHQ: false,
  },
  {
    name: 'Europe',
    label: 'Regional Operations',
    position: [57.15, -2.09],
    city: 'Aberdeen, United Kingdom',
    isHQ: false,
  },
  {
    name: 'Middle East',
    label: 'Regional Operations',
    position: [25.2, 55.27],
    city: 'Dubai, UAE',
    isHQ: false,
  },
  {
    name: 'Africa',
    label: 'Regional Operations',
    position: [6.52, 3.38],
    city: 'Lagos, Nigeria',
    isHQ: false,
  },
  {
    name: 'Australia',
    label: 'Regional Operations',
    position: [-31.95, 115.86],
    city: 'Perth, Western Australia',
    isHQ: false,
  },
];

// ─── Custom Marker Icons ───────────────────────────────────────

const hqIcon = L.divIcon({
  className: 'leaflet-marker-hq',
  html: `
    <div class="re-marker re-marker--hq">
      <span class="re-marker__pulse"></span>
      <span class="re-marker__dot re-marker__dot--hq"></span>
      <span class="re-marker__badge">HQ</span>
    </div>
  `,
  iconSize: [52, 60],
  iconAnchor: [26, 30],
  popupAnchor: [0, -34],
});

const regionIcon = L.divIcon({
  className: 'leaflet-marker-region',
  html: `
    <div class="re-marker re-marker--region">
      <span class="re-marker__glow"></span>
      <span class="re-marker__dot re-marker__dot--region"></span>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -18],
});

// ─── Map Controller ────────────────────────────────────────────
// Dynamically sets minZoom so the world tiles always fill the container
// (prevents the wrap/repeat at low zoom). Also fits all markers on load.

function MapController() {
  const map = useMap();

  useEffect(() => {
    function updateMinZoom() {
      const containerWidth = map.getContainer().offsetWidth;
      // At zoom N, world width = 256 * 2^N pixels.
      // We need 256 * 2^N >= containerWidth → N >= log2(containerWidth / 256)
      const safeMin = Math.ceil(Math.log2(containerWidth / 256));
      map.setMinZoom(safeMin);

      // If current zoom is below the new minimum, bump it up
      if (map.getZoom() < safeMin) {
        map.setZoom(safeMin, { animate: false });
      }
    }

    updateMinZoom();

    // Fit all markers
    const bounds = L.latLngBounds(locations.map((loc) => loc.position));
    map.fitBounds(bounds, { padding: [20, 30], maxZoom: 5, animate: false });

    // Recalculate on resize so it stays correct
    map.on('resize', updateMinZoom);
    return () => {
      map.off('resize', updateMinZoom);
    };
  }, [map]);

  return null;
}

// ─── Map Component ─────────────────────────────────────────────

export default function GlobalReachMapInner() {
  return (
    <MapContainer
      center={[15, 40]}
      zoom={3}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%', background: '#e8ecf0' }}
      className="re-global-map"
      minZoom={2}
      maxZoom={8}
      maxBounds={[
        [-60, -140],
        [72, 160],
      ]}
      maxBoundsViscosity={1.0}
    >
      {/* Light gray tile layer — CartoDB Positron */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      <MapController />

      {/* Location markers */}
      {locations.map((loc) => (
        <Marker
          key={loc.name}
          position={loc.position}
          icon={loc.isHQ ? hqIcon : regionIcon}
        >
          <Popup className="re-popup">
            <div className="re-popup__content">
              <div className="re-popup__header">
                <span className="re-popup__name">{loc.name}</span>
                {loc.isHQ && <span className="re-popup__hq-tag">HQ</span>}
              </div>
              <span className="re-popup__label">{loc.label}</span>
              <span className="re-popup__city">{loc.city}</span>
              {loc.address && (
                <span className="re-popup__address">{loc.address}</span>
              )}
              {loc.phone && (
                <span className="re-popup__phone">{loc.phone}</span>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
