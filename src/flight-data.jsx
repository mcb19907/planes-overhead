// flight-data.jsx
// Shared live flight data layer (adsb.lol) + airport lookups + geo helpers.
// All variants consume the same hook so they stay in sync.
import React from 'react'

// ─── Default location ──────────────────────────────────────────
// Used as a fallback if the user has not set one and geolocation is denied.
export const DEFAULT_LOCATION = { lat: 37.7935, lon: -122.2310, label: 'Oakland, CA', source: 'default' };
const LOCATION_KEY = 'ft.location.v1';

// adsb.lol does not return CORS headers, so direct browser fetches from
// github.io get blocked. corsproxy.io wraps the request and adds them.
// Format is `?<URL>` (raw, no `?url=` named param — that returns their homepage).
const ADSB_PROXY = 'https://corsproxy.io/?';

// Backwards-compat alias — older code used `HOUSE` for the fixed home pin.
// Now resolved at runtime via useLocation(). We keep an exported HOUSE that
// always reflects the *current* active location for any helpers that import it
// directly (it's mutated by the location hook).
export const HOUSE = { ...DEFAULT_LOCATION };

// ─── Geocoding (Nominatim) ─────────────────────────────────────
// Free, no key, requires a User-Agent / Referer header — we send a Referer by
// virtue of being in a browser. Rate-limit: 1 req/sec, fine for interactive search.
export async function geocode(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`;
  const r = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!r.ok) throw new Error('geocode HTTP ' + r.status);
  const j = await r.json();
  return j.map((h) => ({
    lat: parseFloat(h.lat),
    lon: parseFloat(h.lon),
    label: h.display_name,
    short: shortenLabel(h.display_name),
  }));
}

export async function reverseGeocode(lat, lon) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14`;
    const r = await fetch(url);
    if (!r.ok) return null;
    const j = await r.json();
    return shortenLabel(j.display_name) || `${lat.toFixed(3)}, ${lon.toFixed(3)}`;
  } catch (e) { return null; }
}

function shortenLabel(name) {
  if (!name) return null;
  // Take first 2-3 components: "3733, 13th Avenue, Oakland, ..." → "13th Avenue, Oakland"
  const parts = name.split(',').map(s => s.trim()).filter(Boolean);
  if (parts.length <= 2) return parts.join(', ');
  // Skip leading number-only tokens
  const start = /^\d+$/.test(parts[0]) ? 1 : 0;
  return parts.slice(start, start + 2).join(', ');
}

// ─── Location hook ─────────────────────────────────────────────
// Returns: { location, status, setLocation, useGeolocation, search, results }
// Source priority: stored > geolocation > default.
export function useLocation() {
  const [location, setLocationState] = React.useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(LOCATION_KEY));
      if (stored && Number.isFinite(stored.lat) && Number.isFinite(stored.lon)) return stored;
    } catch (e) {}
    return DEFAULT_LOCATION;
  });
  const [status, setStatus] = React.useState('idle'); // idle | locating | ok | denied | error

  // Keep the global HOUSE alias in sync.
  React.useEffect(() => {
    HOUSE.lat = location.lat; HOUSE.lon = location.lon; HOUSE.label = location.label;
  }, [location]);

  const setLocation = React.useCallback((loc) => {
    const next = { ...loc, source: loc.source || 'manual' };
    setLocationState(next);
    // Only persist explicit user picks (search/manual). Geo is re-requested
    // on every load so a moved device or a different visit gets fresh coords.
    try {
      if (next.source === 'geo') {
        localStorage.removeItem(LOCATION_KEY);
      } else {
        localStorage.setItem(LOCATION_KEY, JSON.stringify(next));
      }
    } catch (e) {}
  }, []);

  const useGeolocation = React.useCallback(() => {
    if (!navigator.geolocation) { setStatus('error'); return; }
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude, lon = pos.coords.longitude;
        const label = await reverseGeocode(lat, lon) || 'Current location';
        setLocation({ lat, lon, label, source: 'geo' });
        setStatus('ok');
      },
      (err) => { setStatus(err.code === 1 ? 'denied' : 'error'); },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 5*60*1000 },
    );
  }, [setLocation]);

  const reset = React.useCallback(() => {
    try { localStorage.removeItem(LOCATION_KEY); } catch (e) {}
    setLocationState(DEFAULT_LOCATION);
    setStatus('idle');
  }, []);

  return { location, status, setLocation, useGeolocation, reset };
}

// ─── Tiny airport lookup (IATA + city) ──────────────────────────
// Covers the busiest North-American + intl airports relevant to SFO/OAK/SJC traffic.
const AIRPORTS = {
  KSFO: { iata: 'SFO', city: 'San Francisco' },
  KOAK: { iata: 'OAK', city: 'Oakland' },
  KSJC: { iata: 'SJC', city: 'San Jose' },
  KLAX: { iata: 'LAX', city: 'Los Angeles' },
  KSAN: { iata: 'SAN', city: 'San Diego' },
  KSNA: { iata: 'SNA', city: 'Santa Ana' },
  KBUR: { iata: 'BUR', city: 'Burbank' },
  KLAS: { iata: 'LAS', city: 'Las Vegas' },
  KPHX: { iata: 'PHX', city: 'Phoenix' },
  KSEA: { iata: 'SEA', city: 'Seattle' },
  KPDX: { iata: 'PDX', city: 'Portland' },
  KDEN: { iata: 'DEN', city: 'Denver' },
  KSLC: { iata: 'SLC', city: 'Salt Lake City' },
  KORD: { iata: 'ORD', city: 'Chicago' },
  KDFW: { iata: 'DFW', city: 'Dallas' },
  KIAH: { iata: 'IAH', city: 'Houston' },
  KATL: { iata: 'ATL', city: 'Atlanta' },
  KJFK: { iata: 'JFK', city: 'New York' },
  KEWR: { iata: 'EWR', city: 'Newark' },
  KBOS: { iata: 'BOS', city: 'Boston' },
  KIAD: { iata: 'IAD', city: 'Washington' },
  KDCA: { iata: 'DCA', city: 'Washington' },
  KMIA: { iata: 'MIA', city: 'Miami' },
  KMSP: { iata: 'MSP', city: 'Minneapolis' },
  KDTW: { iata: 'DTW', city: 'Detroit' },
  KMCO: { iata: 'MCO', city: 'Orlando' },
  KAUS: { iata: 'AUS', city: 'Austin' },
  KSMF: { iata: 'SMF', city: 'Sacramento' },
  KFAT: { iata: 'FAT', city: 'Fresno' },
  KRNO: { iata: 'RNO', city: 'Reno' },
  KMRY: { iata: 'MRY', city: 'Monterey' },
  KSBA: { iata: 'SBA', city: 'Santa Barbara' },
  KHNL: { iata: 'HNL', city: 'Honolulu' },
  PHNL: { iata: 'HNL', city: 'Honolulu' },
  PHOG: { iata: 'OGG', city: 'Maui' },
  PHKO: { iata: 'KOA', city: 'Kona' },
  PHLI: { iata: 'LIH', city: 'Kauai' },
  CYVR: { iata: 'YVR', city: 'Vancouver' },
  CYYZ: { iata: 'YYZ', city: 'Toronto' },
  MMMX: { iata: 'MEX', city: 'Mexico City' },
  MMSD: { iata: 'SJD', city: 'Los Cabos' },
  MMPR: { iata: 'PVR', city: 'Puerto Vallarta' },
  RJTT: { iata: 'HND', city: 'Tokyo' },
  RJAA: { iata: 'NRT', city: 'Tokyo' },
  RKSI: { iata: 'ICN', city: 'Seoul' },
  ZBAA: { iata: 'PEK', city: 'Beijing' },
  ZSPD: { iata: 'PVG', city: 'Shanghai' },
  VHHH: { iata: 'HKG', city: 'Hong Kong' },
  WSSS: { iata: 'SIN', city: 'Singapore' },
  YSSY: { iata: 'SYD', city: 'Sydney' },
  EGLL: { iata: 'LHR', city: 'London' },
  LFPG: { iata: 'CDG', city: 'Paris' },
  EDDF: { iata: 'FRA', city: 'Frankfurt' },
  EHAM: { iata: 'AMS', city: 'Amsterdam' },
  KPSP: { iata: 'PSP', city: 'Palm Springs' },
  KSTS: { iata: 'STS', city: 'Santa Rosa' },
  KCIC: { iata: 'CIC', city: 'Chico' },
  KMOD: { iata: 'MOD', city: 'Modesto' },
  KSCK: { iata: 'SCK', city: 'Stockton' },
  KCCR: { iata: 'CCR', city: 'Concord' },
  KHWD: { iata: 'HWD', city: 'Hayward' },
  KLVK: { iata: 'LVK', city: 'Livermore' },
  KSQL: { iata: 'SQL', city: 'San Carlos' },
  KPAO: { iata: 'PAO', city: 'Palo Alto' },
};

export function lookupAirport(icao) {
  if (!icao) return null;
  const a = AIRPORTS[icao.toUpperCase()];
  if (a) return a;
  // ICAO codes starting with K are US — strip the K to fake an IATA.
  if (icao.startsWith('K') && icao.length === 4) {
    return { iata: icao.slice(1), city: null };
  }
  return { iata: icao, city: null };
}

// Airline lookup from callsign prefix (3-letter ICAO).
const AIRLINES = {
  UAL: 'United', AAL: 'American', DAL: 'Delta', SWA: 'Southwest', ASA: 'Alaska',
  JBU: 'JetBlue', NKS: 'Spirit', FFT: 'Frontier', SKW: 'SkyWest', RPA: 'Republic',
  HAL: 'Hawaiian', ENY: 'Envoy', QXE: 'Horizon', EJA: 'NetJets', XOJ: 'XO',
  FDX: 'FedEx', UPS: 'UPS', GTI: 'Atlas', GEC: 'Lufthansa Cargo',
  ACA: 'Air Canada', WJA: 'WestJet', AMX: 'Aeroméxico', VOI: 'Volaris',
  ANA: 'ANA', JAL: 'JAL', KAL: 'Korean', SIA: 'Singapore', CPA: 'Cathay',
  BAW: 'British Airways', AFR: 'Air France', DLH: 'Lufthansa', KLM: 'KLM',
  QFA: 'Qantas', VIR: 'Virgin Atlantic', EVA: 'EVA Air', CCA: 'Air China',
  PAL: 'Philippine', THA: 'Thai', QTR: 'Qatar', UAE: 'Emirates',
};

export function airlineFromCallsign(cs) {
  if (!cs) return null;
  const prefix = cs.slice(0, 3).toUpperCase();
  return AIRLINES[prefix] || null;
}

// ─── Geo math ───────────────────────────────────────────────────
export function haversineNm(a, b) {
  const R = 3440.065; // nautical miles
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

export function bearingFromPoint(from, to) {
  const toRad = (d) => (d * Math.PI) / 180;
  const toDeg = (r) => (r * 180) / Math.PI;
  const φ1 = toRad(from.lat), φ2 = toRad(to.lat);
  const λ1 = toRad(from.lon), λ2 = toRad(to.lon);
  const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
// Backwards-compat
export function bearingFromHouse(p) { return bearingFromPoint(HOUSE, p); }

export function compassFromBearing(bearing) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(bearing / 45) % 8];
}

export function altCategory(altFt) {
  if (!altFt || altFt === 'ground') return 'ground';
  if (altFt < 5000) return 'low';      // very overhead, descending/climbing
  if (altFt < 15000) return 'mid';
  if (altFt < 30000) return 'high';
  return 'cruise';
}

// ─── Live data hook ─────────────────────────────────────────────
// Polls adsb.lol every `intervalMs` for aircraft within `radiusNm` of the house.
// Enriches each plane with: distNm, bearing, compass, airline, plus origin/dest
// (lazy-loaded from the route endpoint and cached).
const ROUTE_CACHE = new Map(); // callsign -> {origin, destination}

// Origin/destination lookup via adsbdb.com (CORS-enabled, free, no key).
// 404 for unknown/private callsigns — cache null so we don't retry.
async function fetchRoute(callsign) {
  if (!callsign) return null;
  const cs = callsign.trim();
  if (!cs) return null;
  if (ROUTE_CACHE.has(cs)) return ROUTE_CACHE.get(cs);
  try {
    const r = await fetch(`https://api.adsbdb.com/v0/callsign/${encodeURIComponent(cs)}`);
    if (!r.ok) { ROUTE_CACHE.set(cs, null); return null; }
    const j = await r.json();
    const fr = j?.response?.flightroute;
    if (fr && fr.origin && fr.destination) {
      const route = {
        origin: {
          iata: fr.origin.iata_code,
          name: fr.origin.municipality || fr.origin.name,
        },
        destination: {
          iata: fr.destination.iata_code,
          name: fr.destination.municipality || fr.destination.name,
        },
      };
      ROUTE_CACHE.set(cs, route);
      return route;
    }
  } catch (e) { /* swallow */ }
  ROUTE_CACHE.set(cs, null);
  return null;
}

export function useFlights({ radiusNm = 25, intervalMs = 8000, demo = false, location = DEFAULT_LOCATION, trailLengthSec = 60 } = {}) {
  const [planes, setPlanes] = React.useState([]);
  const [status, setStatus] = React.useState('connecting'); // connecting | live | error | demo
  const [lastUpdate, setLastUpdate] = React.useState(null);
  const routesRef = React.useRef({}); // callsign -> route
  const trailsRef = React.useRef({}); // hex -> [{lat, lon, t}]
  const locRef = React.useRef(location);
  locRef.current = location;

  const tick = React.useCallback(async () => {
    const loc = locRef.current;
    if (demo) {
      setPlanes(generateDemoPlanes(loc));
      setStatus('demo');
      setLastUpdate(new Date());
      return;
    }
    try {
      const url = `https://api.adsb.lol/v2/lat/${loc.lat}/lon/${loc.lon}/dist/${radiusNm}`;
      const r = await fetch(ADSB_PROXY + encodeURIComponent(url));
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const j = await r.json();
      const list = (j.ac || [])
        .filter((a) => a.lat != null && a.lon != null)
        .map((a) => normalizePlane(a, loc))
        .sort((a, b) => a.distNm - b.distNm);

      // Update trails: append current position, prune older than trailLengthSec.
      const now = Date.now();
      const cutoff = now - trailLengthSec * 1000;
      const seen = new Set();
      list.forEach((p) => {
        seen.add(p.hex);
        const arr = trailsRef.current[p.hex] || [];
        const last = arr[arr.length - 1];
        // Skip duplicate positions (no movement) to keep trails clean.
        if (!last || last.lat !== p.lat || last.lon !== p.lon) {
          arr.push({ lat: p.lat, lon: p.lon, t: now });
        }
        // Prune old.
        while (arr.length && arr[0].t < cutoff) arr.shift();
        trailsRef.current[p.hex] = arr;
        p.trail = arr;
      });
      // Drop trails for planes no longer in view.
      Object.keys(trailsRef.current).forEach((h) => { if (!seen.has(h)) delete trailsRef.current[h]; });

      // Kick off route lookups in the background for the closest 12.
      list.slice(0, 12).forEach((p) => {
        if (!p.flight) return;
        if (routesRef.current[p.flight] !== undefined) return;
        routesRef.current[p.flight] = null; // mark in-flight
        fetchRoute(p.flight, p.lat, p.lon).then((route) => {
          routesRef.current[p.flight] = route;
          setPlanes((prev) => prev.map((q) => (q.flight === p.flight ? { ...q, route } : q)));
        });
      });

      // Attach already-cached routes.
      list.forEach((p) => { if (p.flight && routesRef.current[p.flight]) p.route = routesRef.current[p.flight]; });

      setPlanes(list);
      setStatus('live');
      setLastUpdate(new Date());
    } catch (e) {
      console.warn('adsb.lol fetch failed', e);
      // Fall back to demo so the UI never goes blank.
      setPlanes(generateDemoPlanes(locRef.current));
      setStatus('error');
      setLastUpdate(new Date());
    }
  }, [radiusNm, demo]);

  React.useEffect(() => {
    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [tick, intervalMs, location.lat, location.lon]);

  return { planes, status, lastUpdate, house: HOUSE, refresh: tick };
}

export function normalizePlane(a, loc = HOUSE) {
  const lat = a.lat, lon = a.lon;
  const altFt = a.alt_baro === 'ground' ? 0 : (a.alt_baro ?? a.alt_geom ?? null);
  const distNm = haversineNm(loc, { lat, lon });
  const bearing = bearingFromPoint(loc, { lat, lon });
  const callsign = (a.flight || '').trim();
  return {
    hex: a.hex,
    flight: callsign,
    registration: a.r,
    type: a.t,                       // ICAO aircraft type, e.g. "B738"
    description: a.desc || prettyAircraft(a.t),
    lat, lon,
    altFt,
    altCategory: altCategory(altFt),
    speedKt: a.gs ?? null,
    track: a.track ?? a.true_heading ?? null,
    verticalRate: a.baro_rate ?? a.geom_rate ?? null,
    squawk: a.squawk,
    onGround: a.alt_baro === 'ground',
    distNm,
    bearing,
    compass: compassFromBearing(bearing),
    airline: airlineFromCallsign(callsign),
    route: null,
  };
}

function prettyAircraft(t) {
  if (!t) return null;
  const map = {
    B737: 'Boeing 737', B738: 'Boeing 737-800', B739: 'Boeing 737-900',
    B38M: 'Boeing 737 MAX 8', B39M: 'Boeing 737 MAX 9',
    B752: 'Boeing 757-200', B763: 'Boeing 767-300',
    B772: 'Boeing 777-200', B773: 'Boeing 777-300', B77W: 'Boeing 777-300ER',
    B788: 'Boeing 787-8', B789: 'Boeing 787-9', B78X: 'Boeing 787-10',
    A319: 'Airbus A319', A20N: 'Airbus A320neo', A320: 'Airbus A320', A321: 'Airbus A321',
    A21N: 'Airbus A321neo', A332: 'Airbus A330-200', A333: 'Airbus A330-300',
    A359: 'Airbus A350-900', A35K: 'Airbus A350-1000',
    E170: 'Embraer 170', E75L: 'Embraer 175', E75S: 'Embraer 175',
    E190: 'Embraer 190', E195: 'Embraer 195',
    CRJ2: 'CRJ-200', CRJ7: 'CRJ-700', CRJ9: 'CRJ-900',
    C172: 'Cessna 172', C208: 'Cessna 208', C25A: 'Citation CJ2',
    PC12: 'Pilatus PC-12', PC24: 'Pilatus PC-24',
    GLF5: 'Gulfstream G550', GLF6: 'Gulfstream G650',
  };
  return map[t] || t;
}

// ─── Demo data (used when API fails or demo flag set) ───────────
export function generateDemoPlanes(loc = HOUSE) {
  // Generate planes around the active location with realistic offsets.
  const seeds = [
    { off:[ 0.00,-0.02], altFt:3200,  speedKt:210, track:280, flight:'UAL245',  type:'B738', route:{origin:{iata:'OAK',name:'Oakland'},destination:{iata:'LAX',name:'Los Angeles'}} },
    { off:[ 0.04, 0.05], altFt:8400,  speedKt:340, track:120, flight:'SWA1893', type:'B38M', route:{origin:{iata:'SAN',name:'San Diego'},destination:{iata:'OAK',name:'Oakland'}} },
    { off:[-0.05,-0.09], altFt:14200, speedKt:380, track:355, flight:'ASA512',  type:'A20N', route:{origin:{iata:'SFO',name:'San Francisco'},destination:{iata:'SEA',name:'Seattle'}} },
    { off:[ 0.07,-0.11], altFt:22000, speedKt:430, track:90,  flight:'DAL2104', type:'B752', route:{origin:{iata:'SFO',name:'San Francisco'},destination:{iata:'JFK',name:'New York'}} },
    { off:[-0.08, 0.05], altFt:6800,  speedKt:280, track:60,  flight:'FDX1290', type:'B763', route:{origin:{iata:'OAK',name:'Oakland'},destination:{iata:'MEM',name:'Memphis'}} },
    { off:[ 0.13,-0.19], altFt:31000, speedKt:460, track:80,  flight:'JBU1842', type:'A321', route:{origin:{iata:'SFO',name:'San Francisco'},destination:{iata:'BOS',name:'Boston'}} },
    { off:[-0.01, 0.11], altFt:11500, speedKt:330, track:200, flight:'SKW3211', type:'E75L', route:{origin:{iata:'SMF',name:'Sacramento'},destination:{iata:'BUR',name:'Burbank'}} },
    { off:[-0.14,-0.17], altFt:18000, speedKt:400, track:240, flight:'HAL19',   type:'A332', route:{origin:{iata:'OAK',name:'Oakland'},destination:{iata:'HNL',name:'Honolulu'}} },
  ];
  return seeds.map((s, i) => {
    const lat = loc.lat + s.off[0];
    const lon = loc.lon + s.off[1];
    const distNm = haversineNm(loc, { lat, lon });
    const bearing = bearingFromPoint(loc, { lat, lon });
    // Synthesize a back-trail by walking ~7 steps backward along the heading.
    const trail = [];
    const θ = (s.track||0) * Math.PI/180;
    const stepDeg = 0.0035;
    const now = Date.now();
    for (let j = 7; j >= 0; j--) {
      trail.push({
        lat: lat - Math.cos(θ) * stepDeg * j,
        lon: lon - (Math.sin(θ) * stepDeg * j) / Math.cos(lat*Math.PI/180),
        t: now - j*8000,
      });
    }
    return {
      hex: ('demo' + i).padStart(6, '0'),
      flight: s.flight, type: s.type, route: s.route,
      lat, lon, altFt: s.altFt, speedKt: s.speedKt, track: s.track,
      registration: 'N' + (1000 + i*123).toString().slice(0,4) + 'XY',
      description: prettyAircraft(s.type),
      altCategory: altCategory(s.altFt),
      verticalRate: ((i%3)-1)*200,
      onGround: false,
      distNm, bearing,
      compass: compassFromBearing(bearing),
      airline: airlineFromCallsign(s.flight),
      trail,
    };
  }).sort((a,b)=>a.distNm-b.distNm);
}

// ─── Format helpers ─────────────────────────────────────────────
export const fmt = {
  alt: (ft) => ft == null ? '—' : ft === 0 ? 'ground' : ft.toLocaleString() + ' ft',
  altShort: (ft) => ft == null ? '—' : ft === 0 ? 'GND' : Math.round(ft/100) + ' FL',
  speed: (kt) => kt == null ? '—' : Math.round(kt) + ' kt',
  mph: (kt) => kt == null ? '—' : Math.round(kt * 1.151) + ' mph',
  dist: (nm) => nm == null ? '—' : nm < 1 ? (nm*6076|0)+' ft' : nm.toFixed(1)+' nm',
  bearing: (deg) => deg == null ? '—' : Math.round(deg) + '°',
  flight: (cs) => cs ? cs.replace(/\s+/g,'') : '—',
};

// ─── Aircraft photo lookup (planespotters.net) ─────────────────
// Free, no key, requires attribution per their terms.
const PHOTO_CACHE = new Map(); // hex -> { thumb, link, photographer } or null
async function fetchAircraftPhoto(hex) {
  if (!hex) return null;
  const k = hex.toLowerCase();
  if (PHOTO_CACHE.has(k)) return PHOTO_CACHE.get(k);
  try {
    const r = await fetch(`https://api.planespotters.net/pub/photos/hex/${k}`);
    if (!r.ok) { PHOTO_CACHE.set(k, null); return null; }
    const j = await r.json();
    const p = (j.photos || [])[0];
    if (!p) { PHOTO_CACHE.set(k, null); return null; }
    const out = {
      thumb: p.thumbnail_large?.src || p.thumbnail?.src,
      link: p.link,
      photographer: p.photographer,
    };
    PHOTO_CACHE.set(k, out);
    return out;
  } catch (e) {
    PHOTO_CACHE.set(k, null);
    return null;
  }
}

export function useAircraftPhoto(hex) {
  const [photo, setPhoto] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    setPhoto(null);
    if (!hex) return;
    fetchAircraftPhoto(hex).then((p) => { if (!cancelled) setPhoto(p); });
    return () => { cancelled = true; };
  }, [hex]);
  return photo;
}

export { fetchAircraftPhoto };
