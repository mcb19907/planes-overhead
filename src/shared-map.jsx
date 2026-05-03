// shared-map.jsx
// Leaflet map shared by all variants.
// Renders: house marker, plane markers (rotated icons), optional flight paths,
// optional airspace circle, terrain/light/dark tile layers.
//
// Props:
//   planes, house, focusedHex, onSelect, mapStyle ('light'|'dark'|'terrain'),
//   showPaths, timeOfDay (0-1, 0=midnight, .5=noon), height
import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const TILE_LAYERS = {
  light: {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attr: '&copy; OSM &copy; CARTO',
    bgWrap: '#f6f4ef',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attr: '&copy; OSM &copy; CARTO',
    bgWrap: '#0e0f12',
  },
  terrain: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attr: '&copy; OpenTopoMap',
    bgWrap: '#e5dfd0',
  },
};

function planeIcon({ track = 0, altCategory = 'mid', focused = false, dim = false, color = null }) {
  // Default color from altitude — low=warm, high=cool. Override with `color`.
  const palette = color || ({
    ground: '#9ca3af',
    low:    '#dc6a3a',
    mid:    '#d99a3a',
    high:   '#5b9bd5',
    cruise: '#7a6fd0',
  })[altCategory] || '#444';
  const stroke = focused ? '#111' : 'rgba(0,0,0,0.4)';
  const sw = focused ? 1.6 : 1;
  const opacity = dim ? 0.35 : 1;
  const size = focused ? 30 : 20;

  const html = `
    <div style="
      width:${size}px;height:${size}px;
      transform:rotate(${track}deg);
      transition:transform .5s linear;
      opacity:${opacity};
      filter:${focused ? 'drop-shadow(0 0 6px rgba(0,0,0,.35))' : 'none'};
    ">
      <svg viewBox="0 0 24 24" width="${size}" height="${size}" style="overflow:visible">
        <path d="M12 2 L13.5 9 L22 11.2 L22 13 L13.5 12.2 L13 18 L16 19.5 L16 21 L12 20.2 L8 21 L8 19.5 L11 18 L10.5 12.2 L2 13 L2 11.2 L10.5 9 Z"
          fill="${palette}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>
        ${focused ? `<circle cx="12" cy="12" r="14" fill="none" stroke="${palette}" stroke-width="1.4" stroke-dasharray="2 3" opacity=".7"/>` : ''}
      </svg>
    </div>
  `;
  return L.divIcon({
    html,
    className: 'plane-divicon',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
}

function houseMarker() {
  const html = `
    <div style="position:relative;width:34px;height:34px">
      <div style="position:absolute;inset:0;border-radius:50%;background:rgba(201,100,66,.18);animation:pulseRing 2.4s ease-out infinite"></div>
      <div style="position:absolute;left:7px;top:7px;width:20px;height:20px;border-radius:50%;background:#c96442;box-shadow:0 0 0 3px #fff,0 2px 6px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:#fff;font:600 11px ui-sans-serif,system-ui">⌂</div>
    </div>
  `;
  return L.divIcon({ html, className:'house-divicon', iconSize:[34,34], iconAnchor:[17,17] });
}

if (typeof document !== 'undefined' && !document.getElementById('shared-map-styles')) {
  const s = document.createElement('style');
  s.id = 'shared-map-styles';
  s.textContent = `
    @keyframes pulseRing{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.6);opacity:0}}
    .plane-divicon,.house-divicon{background:none!important;border:none!important}
    .leaflet-container{font-family:ui-sans-serif,system-ui,-apple-system,sans-serif!important;background:#eee}
    .leaflet-control-attribution{font-size:9px!important;background:rgba(255,255,255,.6)!important;padding:1px 4px!important}
    .leaflet-tile-container img{transition:filter .3s}
    .map-tint::after{content:'';position:absolute;inset:0;pointer-events:none;z-index:400;mix-blend-mode:multiply}
  `;
  document.head.appendChild(s);
}

export function SharedMap({
  planes = [], house, focusedHex, onSelect,
  mapStyle = 'light', showPaths = false, showTrails = false, timeOfDay = 0.5,
  zoom = 11, height = 320, planeColor = null, showAirspace = false,
  bgWrap = null, dimUnfocused = false, interactive = true, scrollWheelZoom = false,
}) {
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);
  const tileRef = React.useRef(null);
  const layersRef = React.useRef({});

  // Init map
  React.useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, {
      zoomControl: interactive, attributionControl: true,
      dragging: interactive, touchZoom: interactive, doubleClickZoom: interactive,
      scrollWheelZoom: scrollWheelZoom || interactive, boxZoom: false, keyboard: false, tap: interactive,
    }).setView([house.lat, house.lon], zoom);
    mapRef.current = map;

    layersRef.current.tiles = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      attribution: TILE_LAYERS[mapStyle].attr, maxZoom: 18,
    }).addTo(map);
    tileRef.current = layersRef.current.tiles;

    layersRef.current.house = L.marker([house.lat, house.lon], { icon: houseMarker(), interactive: false }).addTo(map);
    layersRef.current.airspace = L.circle([house.lat, house.lon], {
      radius: 5 * 1852, color: '#c96442', weight: 1, dashArray: '4 4',
      fill: false, opacity: 0.5,
    });
    layersRef.current.planes = L.layerGroup().addTo(map);
    layersRef.current.paths = L.layerGroup().addTo(map);
    layersRef.current.trails = L.layerGroup().addTo(map);

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  // Switch map style
  React.useEffect(() => {
    const map = mapRef.current; if (!map) return;
    if (tileRef.current) map.removeLayer(tileRef.current);
    tileRef.current = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      attribution: TILE_LAYERS[mapStyle].attr, maxZoom: 18,
    }).addTo(map);
  }, [mapStyle]);

  // Recenter when the user changes location (and move the house marker).
  React.useEffect(() => {
    const map = mapRef.current; if (!map) return;
    const ll = [house.lat, house.lon];
    map.setView(ll, zoom);
    if (layersRef.current.house) layersRef.current.house.setLatLng(ll);
    if (layersRef.current.airspace) layersRef.current.airspace.setLatLng(ll);
  }, [house.lat, house.lon]);

  // Time of day tint via CSS filter on tile pane.
  React.useEffect(() => {
    const map = mapRef.current; if (!map) return;
    const pane = map.getPane('tilePane');
    if (!pane) return;
    // 0 midnight, .25 dawn, .5 noon, .75 dusk, 1 night
    const t = timeOfDay;
    let filter = 'none';
    if (t < 0.2) filter = 'brightness(.6) saturate(.7) hue-rotate(220deg)';
    else if (t < 0.35) filter = 'brightness(.9) saturate(1.1) sepia(.15) hue-rotate(-10deg)';
    else if (t < 0.65) filter = 'none';
    else if (t < 0.8) filter = 'sepia(.25) saturate(1.1) brightness(.95) hue-rotate(-15deg)';
    else filter = 'brightness(.55) saturate(.6) hue-rotate(220deg)';
    pane.style.filter = filter;
  }, [timeOfDay, mapStyle]);

  // Airspace toggle
  React.useEffect(() => {
    const map = mapRef.current; if (!map) return;
    const a = layersRef.current.airspace;
    if (showAirspace && !map.hasLayer(a)) a.addTo(map);
    else if (!showAirspace && map.hasLayer(a)) map.removeLayer(a);
  }, [showAirspace]);

  // Update plane markers
  React.useEffect(() => {
    const grp = layersRef.current.planes; if (!grp) return;
    grp.clearLayers();
    planes.forEach((p) => {
      const focused = p.hex === focusedHex;
      const m = L.marker([p.lat, p.lon], {
        icon: planeIcon({ track: p.track || 0, altCategory: p.altCategory, focused, dim: dimUnfocused && !focused, color: planeColor }),
        zIndexOffset: focused ? 1000 : 0,
        riseOnHover: true,
      });
      m.on('click', () => onSelect && onSelect(p));
      grp.addLayer(m);
    });
  }, [planes, focusedHex, planeColor, dimUnfocused, onSelect]);

  // Past trails (last ~60s of positions) — rendered as fading polylines.
  React.useEffect(() => {
    const grp = layersRef.current.trails; if (!grp) return;
    grp.clearLayers();
    if (!showTrails) return;
    const now = Date.now();
    planes.forEach((p) => {
      const trail = p.trail;
      if (!trail || trail.length < 2) return;
      const focused = p.hex === focusedHex;
      // Build segments so we can fade each one.
      for (let i = 0; i < trail.length - 1; i++) {
        const a = trail[i], b = trail[i+1];
        const ageRatio = 1 - (now - b.t) / 60000; // 1 = newest, 0 = oldest
        const opacity = Math.max(0.05, ageRatio * (focused ? 0.95 : 0.55));
        const weight = focused ? 2.4 : 1.6;
        const color = focused ? '#5fd3a3' : (mapStyle === 'dark' ? '#9bb0c5' : '#8b95a3');
        L.polyline([[a.lat, a.lon],[b.lat, b.lon]], {
          color, weight, opacity, lineCap: 'round', interactive: false,
        }).addTo(grp);
      }
    });
  }, [planes, focusedHex, showTrails, mapStyle]);

  // Flight paths (forward projection)
  React.useEffect(() => {
    const grp = layersRef.current.paths; if (!grp) return;
    grp.clearLayers();
    if (!showPaths) return;
    planes.forEach((p) => {
      if (!p.track || !p.speedKt) return;
      // Project a 5-min path forward from current position.
      const dist = (p.speedKt * 5/60) / 60; // degrees-ish; rough but visual
      const rad = (p.track-90) * Math.PI/180; // track is heading from N
      const θ = p.track * Math.PI/180;
      const dLat = (Math.cos(θ) * dist);
      const dLon = (Math.sin(θ) * dist) / Math.cos(p.lat*Math.PI/180);
      const focused = p.hex === focusedHex;
      L.polyline([[p.lat, p.lon],[p.lat+dLat, p.lon+dLon]], {
        color: focused ? '#c96442' : '#888',
        weight: focused ? 2 : 1, opacity: focused ? 0.9 : 0.45, dashArray: '3 4',
      }).addTo(grp);
    });
  }, [planes, focusedHex, showPaths]);

  const recenter = React.useCallback(() => {
    const map = mapRef.current; if (!map) return;
    map.setView([house.lat, house.lon], zoom, { animate: true });
  }, [house.lat, house.lon, zoom]);

  return (
    <div style={{position:'relative', width:'100%', height, background: bgWrap || TILE_LAYERS[mapStyle].bgWrap}}>
      <div ref={ref} style={{position:'absolute', inset:0}} />
      {interactive && (
        <button onClick={recenter} title="Recenter on location"
          style={{
            position:'absolute', right:8, bottom:8, zIndex:500,
            width:30, height:30, borderRadius:8, border:'none',
            background:'rgba(255,255,255,.9)', backdropFilter:'blur(8px)',
            boxShadow:'0 2px 6px rgba(0,0,0,.18)', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#1c1c1e', fontSize:14, padding:0,
          }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
          </svg>
        </button>
      )}
    </div>
  );
}

