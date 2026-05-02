# Flight Tracker

An ambient mobile-friendly flight tracker that shows aircraft currently flying within ~25 nautical miles of your location. Tap any plane to pin it; the hero card shows aircraft type, route, telemetry, and a thumbnail photo.

All data comes from free, no-key APIs:
- **adsb.lol** — live aircraft positions
- **adsbdb.com** — origin/destination route lookup
- **planespotters.net** — aircraft photos (with attribution)
- **OpenStreetMap Nominatim** — geocoding (forward + reverse)
- **CartoDB Positron** — map tiles

## Run locally

Just open `docs/index.html` in a browser. No build step, no install.

```bash
# Optional: serve over HTTP so geolocation works (browsers block geo on file://)
cd docs && python3 -m http.server 8000
# → http://localhost:8000
```

## Host on GitHub Pages

This repo is already structured for GitHub Pages:

1. Push to GitHub
2. Settings → Pages → Source: **Deploy from a branch**
3. Branch: `main`, Folder: **`/docs`**
4. Save → live at `https://<you>.github.io/<repo>/`

That's it. Everything's static; no server, no build action, no API keys.

## How it's built

`docs/app.bundle.js` is a pre-compiled bundle of four source files:

- `src/flight-data.jsx` — data hooks (`useLocation`, `useFlights`, `useAircraftPhoto`) and helpers
- `src/shared-map.jsx` — Leaflet map component (`SharedMap`)
- `src/location-picker.jsx` — floating location pill + search drawer
- `src/variants.jsx` — `WeatherVariant` (this design)

To rebuild after editing any source file, run any JSX → JS transpiler (Babel, esbuild, swc) over the four files and concatenate them, then append the entry shim from the end of the existing `app.bundle.js` (the `function App() { … }` block).

A simple rebuild with esbuild:

```bash
npx esbuild src/*.jsx --bundle=false --loader=.jsx=jsx --outdir=build/
cat build/flight-data.js build/shared-map.js build/location-picker.js build/variants.js entry.js > docs/app.bundle.js
```

## Production notes

- **Nominatim rate limit.** Free tier asks for ≤1 req/s and a User-Agent header. The browser can't set User-Agent, so for serious traffic swap to Mapbox / Google Geocoding.
- **planespotters.net** is generous but not unlimited. Cache photo lookups by ICAO hex.
- Pan/zoom state survives the 8s data refreshes; the map only auto-recenters when the user changes location.
- Geolocation is re-requested on every cold load (not persisted) so a moved device gets fresh coords. Searched cities are persisted to `localStorage` until you tap the 📍 button.

## License

MIT.
