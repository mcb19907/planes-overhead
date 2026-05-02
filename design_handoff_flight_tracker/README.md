# Handoff: Flight Tracker — Variant A (Weather)

## Overview

A mobile-first ambient flight tracker that shows aircraft currently flying within a configurable radius (default 25 nautical miles) of the user's location. Visual language is modeled on Apple's Weather app: a colored sky-gradient background, frosted-glass cards, soft typography, and a single accent color (terracotta orange).

The app has three primary regions, top to bottom:

1. **Header** — location name (left), aircraft count (right)
2. **Overhead Now hero card** — the closest (or user-pinned) aircraft, with a route line, telemetry, and a thumbnail photo of the aircraft
3. **Map** — a soft-styled tile map showing the user's home pin, a radius ring, plane markers as rotated arrows, and optional 60-second past-trail polylines
4. **Nearby Traffic list** — a vertical scrollable list of all aircraft in radius

Plus a floating **Location Picker pill** in the upper-left that lets the user search any city or use device geolocation.

## About the Design Files

The files in `source_html/` are **design references created in HTML/JSX prototypes**. They are not production code to ship as-is. Your task is to **recreate this design in the target codebase's environment** — for an iOS app that likely means SwiftUI; for an Android app, Jetpack Compose; for React Native, native components — using that platform's idioms and the codebase's existing patterns. If no codebase exists yet and the user wants a mobile app, **SwiftUI on iOS or Jetpack Compose on Android** are the natural targets given the Apple-Weather aesthetic.

The HTML prototype is fully functional (live API calls, real geolocation, real photos) and is the source of truth for visual design, interaction behavior, and data shape.

## Fidelity

**High-fidelity.** Colors, typography sizes, spacing, border radii, and shadows are all final. Recreate pixel-for-pixel using the target platform's equivalent primitives (e.g. SwiftUI `.ultraThinMaterial` for the frosted cards instead of CSS `backdrop-filter: blur()`).

## Screens / Views

This is a **single-screen app**. There is no navigation stack — everything happens on one scrolling layout. Tapping a plane swaps the hero card; tapping the location pill opens an overlay drawer.

### Main Screen Layout

Vertical stack inside a full-bleed sky-gradient background:

```
┌──────────────────────────────────────┐
│ [📍 Location pill]                   │ ← floats absolute, top:14 left:14
│                                      │
│  Highland Park, Oakland          8   │ ← header
│  • Live · updated 4s ago    aircraft │
│                              nearby  │
│                                      │
│  ╭──────────────────────────────╮    │
│  │ OVERHEAD NOW       ◀ W · 5.7nm│   │
│  │                              │    │
│  │ →  UAL245     [photo thumb]  │    │ ← hero card
│  │    United · Boeing 737-800   │    │
│  │                              │    │
│  │ OAK ─────▶─────────────  LAX │    │
│  │ Oakland               Los... │    │
│  │ ─────────────────────────── │    │
│  │ Altitude   Speed    Heading  │    │
│  │ 3,200 ft   242 mph  280° W   │    │
│  │            210 kt            │    │
│  ╰──────────────────────────────╯    │
│                                      │
│  ╭──────────────────────────────╮    │
│  │                              │    │
│  │     [light tile map]         │    │ ← map card
│  │                              │    │
│  ╰──────────────────────────────╯    │
│                                      │
│  ╭──────────────────────────────╮    │
│  │ NEARBY TRAFFIC      8 aircraft│   │
│  │ ────────────────────────────  │   │
│  │ ↗  UAL245      3,200  242mph  │   │ ← list
│  │    OAK → LAX    ft    210 kt  │   │
│  │ ────────────────────────────  │   │
│  │ ↘  SWA1893     8,400  391mph  │   │
│  │    SAN → OAK    ft    340 kt  │   │
│  │ ...                          │    │
│  ╰──────────────────────────────╯    │
└──────────────────────────────────────┘
```

### Background — Sky Gradient

Full-bleed vertical gradient on the root container. The colors animate based on a `timeOfDay` value (0–1) so the sky matches roughly the time of day. There are five bands; pick by `timeOfDay`:

| Time band       | t range     | Top → mid → bottom                            |
|-----------------|-------------|-----------------------------------------------|
| Night           | t < 0.20    | `#0b1330` → `#1d2a4a` → `#3a4670`             |
| Dawn            | 0.20–0.35   | `#ff9d6e` → `#ffc7a0` → `#cfe0ff`             |
| Day             | 0.35–0.65   | `#76b6ff` → `#a9d4ff` → `#dceeff`             |
| Dusk            | 0.65–0.80   | `#ff8e6f` → `#f4a672` → `#7c8ec5`             |
| Night           | t > 0.80    | `#0b1330` → `#1d2a4a` → `#3a4670`             |

Stops are at 0%, 35%, 100%. In production, derive `timeOfDay` from the device clock + the user's lat/lon so dawn/dusk roughly track real local conditions, OR keep it as user-controllable for ambient/dimming preference.

### Header (top of screen)

- Padding: 14px top / 20px sides / 6px bottom
- Flex row, items aligned to top, space-between, gap 12
- Text color `#ffffff` with subtle text-shadow `0 1px 2px rgba(0,0,0,.15)` (so it reads against any sky color)

**Left column (location info):**
- Line 1 — location label (truncated to first two comma-separated parts of the geocoded name): font-size 13, opacity .85, single line with ellipsis
- Line 2 — status indicator + freshness: font-size 11, opacity .7
  - Animated dot: 7px circle, color `#34c759` if live, `#f5a524` if cached/error/demo, `#9a9a9a` if disconnected, with a 2px halo and a 2-second "breathe" animation when live
  - Text: `Live · updated 4s ago` / `Cached · updated 2m ago`

**Right column (count):**
- Line 1 — number of aircraft: font-size 34, font-weight 300, tabular numerals, line-height 1
- Line 2 — `aircraft nearby`: font-size 11, opacity .85

### Location Picker Pill (floating, upper-left)

Position: `fixed`, top: 14px, left: 14px, z-index above everything.

**Pill (collapsed):**
- Background: `rgba(250,249,247,.92)` with `backdrop-filter: blur(20px) saturate(180%)`
- Border-radius: 999 (full pill)
- Border: `.5px solid rgba(0,0,0,.08)`
- Shadow: `0 4px 16px rgba(0,0,0,.12)`
- Padding: 8px 12px
- Contents (flex row, gap 8):
  - 13px pin icon, stroke `#c96442` (accent), stroke-width 2.5
  - Location label, font-size 12, weight 500, color `#29261b`, max-width 180px ellipsis
  - 10px chevron-down, stroke `rgba(0,0,0,.4)`

**Drawer (when expanded):**
- Margin-top 6 from pill
- Width 300px
- Padding 10
- Same blur/border/shadow as pill but rounded 12px (not full pill)
- Contents top-to-bottom:
  1. Search row (flex, gap 6):
     - Text input, height 30, padding 0 10, border-radius 8, `.5px solid rgba(0,0,0,.12)`, bg `rgba(255,255,255,.7)`. Placeholder: "Search address, city, ZIP…"
     - 30×30 button, square-rounded 8, with crosshair icon. Active state: solid accent fill while geolocation is in flight.
  2. Search results list (scrolling). Each result: rounded 6, padding 8 10, hover bg `rgba(0,0,0,.04)`. Two lines: bold short name + dim full address.
  3. Footer row: small text-button "Reset to default location" on the right

**Behavior:**
- Type in input → debounced 350ms → query OpenStreetMap Nominatim API
- Tap result → set as location, close drawer, persist to local storage
- Tap crosshair → request browser geolocation, reverse-geocode the coords, set location (do NOT persist; geo is re-requested on every fresh load)
- Pill click toggles drawer open/closed

### Hero Card — "Overhead Now"

Container:
- Margin: 6px 14px 8px (top right/left bottom)
- Background: `rgba(255,255,255,.78)` with `backdrop-filter: blur(20px) saturate(180%)`
- Border-radius: 18
- Border: `.5px solid rgba(255,255,255,.6)`
- Shadow: `0 6px 24px rgba(0,0,0,.12)`
- Padding: 10px 14px 11px

**Top row** (flex, space-between, marginBottom 6):
- Left: `OVERHEAD NOW` (or `PINNED` when user has tapped a plane to pin it). Font-size 10, weight 600, letter-spacing .1em, uppercase, color `#c96442`.
- Right: tiny rotated arrow (9px) showing the bearing from user to aircraft, then `W · 5.7 nm` (compass + distance). Font-size 11, color `rgba(0,0,0,.5)`.

**Pinned-state badge** (only when user has explicitly pinned a plane, not just auto-following the closest):
- Below the top row, a small inline pill: `Pinned · tap to release`. Tapping it clears the pin and resumes auto-follow-closest.

**Aircraft row** (flex row, gap 14, items center):
- 48×48 rounded-square arrow tile:
  - Border-radius 14
  - Background: `linear-gradient(135deg, #f6f4ef, #e9e5dc)`
  - Contains a single black 26px arrow rotated to match the aircraft's track
- Middle column (flex 1, min-width 0):
  - Flight number: font-size 20, weight 600, letter-spacing -.01em (e.g. "UAL245"). Falls back to registration if no callsign.
  - Subtitle: `{airline} · {aircraft type}` — font-size 12, color `rgba(0,0,0,.55)`, single-line ellipsis
- 72×54 photo thumbnail tile (right side, when not a demo plane):
  - Border-radius 10
  - Border: `.5px solid rgba(0,0,0,.08)`
  - Background fallback: `rgba(255,255,255,.5)` with "No img" centered (font-size 9, uppercase)
  - When loaded: `<img>` with object-fit cover. Tappable — opens planespotters.net page in a new tab/sheet. Bottom-right corner has a tiny 8px `↗` badge on a `rgba(0,0,0,.5)` background indicating external link.

**Route line** (only if route data is available; flex row, gap 10, marginTop 8):
- Origin block (left-aligned): IATA code (font-size 18, weight 600, letter-spacing -.02em) above city name (font-size 10, color `rgba(0,0,0,.5)`)
- Middle: 18px-tall flex-1 column with a horizontal `rgba(0,0,0,.15)` 1px line at y=9, and a 9px rotated accent-color arrow (`#c96442`) centered horizontally at y=5
- Destination block (right-aligned): same as origin

**Telemetry strip** (3-column grid, marginTop 10, paddingTop 8, borderTop `.5px solid rgba(0,0,0,.08)`):
Each cell is a `<Stat>` with:
- Label: font-size 10, weight 500, color `rgba(0,0,0,.5)`, marginBottom 2
- Value: font-size 14, weight 600, letter-spacing -.01em, line-height 1.15
- Optional sub-line: font-size 10, color `rgba(0,0,0,.4)`, tabular numerals, marginTop 1

The three stats are:
| Label    | Value example       | Sub example |
|----------|---------------------|-------------|
| Altitude | `3,200 ft`          | (none)      |
| Speed    | `242 mph`           | `210 kt`    |
| Heading  | `280° W`            | (none)      |

**Photo attribution** (only if photo loaded, marginTop 6):
Right-aligned, font-size 9, color `rgba(0,0,0,.4)`, letter-spacing .04em.
Format: `Photo © {photographer} · planespotters.net`

### Map Card

Container:
- Margin: 0 14px 10px
- Border-radius: 18
- Overflow hidden, with shadow `0 6px 24px rgba(0,0,0,.12)` and `.5px solid rgba(255,255,255,.6)` border
- Height: **34% of total screen height** (i.e. `Math.round(viewportHeight * 0.34)`)

Map contents (Leaflet in HTML; native `MKMapView` / `MapKit` / `Google Maps SDK` in mobile):

**Tile layer:**
- "Light": CartoDB Positron (`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`)
- Wrap in a CSS filter that maps to `timeOfDay`:
  - Night: `brightness(.6) saturate(.7) hue-rotate(220deg)`
  - Dawn: `brightness(.9) saturate(1.1) sepia(.15) hue-rotate(-10deg)`
  - Day: `none`
  - Dusk: `sepia(.25) saturate(1.1) brightness(.95) hue-rotate(-15deg)`

**House marker** (user's location):
- 28×28 circular tile, `#c96442` (accent) background with white house icon. Border `2px solid #fff`, shadow `0 2px 6px rgba(0,0,0,.3)`.
- Non-interactive.

**Airspace ring** (the radius circle):
- Centered on house, radius = `radiusNm * 1852` meters (1 nm = 1852 m)
- Stroke `#c96442`, weight 1, dashArray `4 4`, opacity 0.5, no fill

**Plane markers:**
- Custom rotated SVG arrow icons. Color depends on altitude category:
  - Ground: `#888`
  - Low (<10k ft): `#5fd3a3` (green)
  - Mid (10k–25k): `#f5d76e` (yellow)
  - High (>25k): `#9bb0c5` (light blue)
- Focused/pinned plane: rendered larger (24px vs 18px) and in accent color `#c96442`
- Tap → pin/unpin

**60-second trails** (default ON):
- For each plane, render the past 60 seconds of position as a series of polyline segments
- Each segment fades in opacity from 1 (newest) to 0 (oldest) — formula: `Math.max(0.05, ageRatio * (focused ? 0.95 : 0.55))` where ageRatio = `1 - (now - segmentTime) / 60000`
- Stroke weight 1.6 normal / 2.4 focused
- Color: `#5fd3a3` if focused, `#8b95a3` (or `#9bb0c5` on dark map) otherwise

**Map controls:**
- Zoom in/out (+/−) buttons in upper-left (Leaflet default style is fine)
- Recenter button in lower-right: 30×30 rounded-8 button, white-ish bg with blur, target/crosshair icon. Tapping snaps map back to home location at default zoom.

**Map gestures:**
- Drag to pan, pinch to zoom, double-tap to zoom in, scroll-wheel zoom on desktop
- Pan/zoom state survives data refreshes (don't auto-recenter on every poll)

### Nearby Traffic list

Container:
- Margin: 0 14px 14px
- Background `rgba(255,255,255,.7)` with same blur as hero
- Border-radius 18, `.5px solid rgba(255,255,255,.5)` border, shadow `0 4px 16px rgba(0,0,0,.08)`
- Flex 1 (fills remaining vertical space), min-height 0, vertical scroll inside

**Header** (sticky-ish; padding 12px 16px 8px, borderBottom `.5px solid rgba(0,0,0,.06)`):
- Left: `NEARBY TRAFFIC`, font-size 11, weight 600, letter-spacing .08em, uppercase, color `rgba(0,0,0,.55)`
- Right: `8 aircraft`, font-size 10, color `rgba(0,0,0,.4)`, tabular numerals

**Each row** (5-column CSS grid; padding 10px 16px; gap 10; alignItems center; borderBottom `.5px solid rgba(0,0,0,.04)`):

Column widths: `18px 1fr 56px 60px 56px`

1. **Heading arrow** (col 1, 18px, centered): 14px tinyArrow rotated to plane's track. Color `#c96442` if focused, else `rgba(0,0,0,.55)`.
2. **Flight + route** (col 2, flex 1): two lines
   - Top: flight number/registration, font-size 14, weight 600, letter-spacing -.01em, color `#c96442` if focused else `#1c1c1e`. Single-line ellipsis.
   - Bottom: route (`OAK → LAX`) or aircraft type if no route. Font-size 11, color `rgba(0,0,0,.5)`. Single-line ellipsis.
3. **Altitude** (col 3, right-aligned): two lines, tabular numerals
   - Top: rounded-to-100 ft value (e.g. `3,200`), font-size 13, weight 500, color `#1c1c1e`. Or `GND` for ground.
   - Bottom: `ft`, font-size 9, color `rgba(0,0,0,.45)`, letter-spacing .04em, uppercase.
4. **Speed** (col 4, right-aligned): two lines, tabular numerals
   - Top: mph value with small `mph` suffix (font-size 9, weight 400 inside the same line)
   - Bottom: kt value `210 kt`, font-size 9, color `rgba(0,0,0,.4)`
   - If no speed: single `—` (font-size 13)
5. **Range** (col 5, right-aligned): two lines, tabular numerals
   - Top: distance (e.g. `4.7`), font-size 13, weight 500, color `#1c1c1e`
   - Bottom: `nm · W` (unit + compass bearing), font-size 9, color `rgba(0,0,0,.45)`, uppercase

**Selected row state:**
- Background `rgba(201,100,66,.08)` (accent at 8% opacity)
- Border-left `3px solid #c96442` (accent), replacing the transparent default

**Empty state** (no aircraft in radius):
- Centered italic message: `Quiet skies. No aircraft right now.` Padding 40 16, color `rgba(0,0,0,.4)`, font-size 12.

## Interactions & Behavior

**Tap a plane** (on map or in list):
- Pins that plane as the focused aircraft. Hero card swaps to it. Selection persists across data refreshes.
- Header label switches from `OVERHEAD NOW` → `PINNED` and a small "tap to release" badge appears.
- If the pinned plane leaves the radius, the pin clears automatically and auto-follow-closest resumes.

**Tap location pill** → toggles search drawer.

**Tap crosshair button (in drawer)** → request device location permission, get coords, reverse-geocode with Nominatim for a label, replace location.

**Tap a search result** → sets location, closes drawer, persists to storage.

**Tap "Reset to default location"** → clears any stored location, returns to fallback (Oakland) and re-prompts geolocation.

**Map controls:**
- Drag/pinch/scroll-wheel — pan and zoom freely
- Recenter button — snap back to home

**Data refresh:**
- Poll the live API every 8 seconds
- During the request, keep showing previous data (don't blank out)
- After response, append each plane's current position to its 60s trail buffer; prune anything older than 60 seconds
- If a plane disappears (out of range, landed, or transponder off), drop its trail

**Animations / transitions:**
- Status dot "breath" pulse — 2s ease-in-out infinite, animates the box-shadow halo
- Plane marker rotation — `transform: rotate()` with 0.4s ease transition (so heading changes don't snap)
- Card and pill backgrounds use real backdrop-filter blur, not flat tints — DON'T fake this with `rgba`-only

## State Management

**Top-level state (single screen):**
- `location: { lat, lon, label, source }` — `source` is one of `default | search | manual | geo`
- `geoStatus: 'idle' | 'locating' | 'ok' | 'denied' | 'error'`
- `planes: Plane[]` — live list, sorted ascending by distance
- `dataStatus: 'connecting' | 'live' | 'error' | 'demo'`
- `lastUpdate: Date | null`
- `pinnedHex: string | null` — overrides "auto-follow closest"

**Derived:**
- `focusedHex = pinnedHex || planes[0]?.hex`
- `focusedPlane = planes.find(p => p.hex === focusedHex)`
- `isPinned = pinnedHex !== null && planes.some(p => p.hex === pinnedHex)`

**Persistence (localStorage / UserDefaults / equivalent):**
- Persist `location` ONLY when `source ∈ {search, manual}`. Geo locations are NOT persisted; we re-request fresh coords on every cold start.
- Persist key: `ft.location.v1` (JSON)

**On cold start:**
1. Load persisted location if any → use it
2. Otherwise → DEFAULT_LOCATION = `{ lat: 37.7935, lon: -122.231, label: 'Oakland, CA', source: 'default' }`
3. If `location.source === 'default'` → auto-request device geolocation in the background. If granted, swap to those coords (without persisting).

## Data sources / APIs

All free, no API key required.

### 1. Live aircraft positions — `adsb.lol`

- Endpoint: `https://api.adsb.lol/v2/lat/{lat}/lon/{lon}/dist/{nm}`
- Returns JSON `{ ac: [...] }`. Each `ac` entry has at least:
  - `hex` (ICAO 24-bit hex string, used as stable ID)
  - `lat`, `lon`, `alt_baro` (ft, can be `"ground"` string), `gs` (ground speed in knots), `track` (degrees true), `flight` (callsign), `r` (registration), `t` (aircraft type code), `baro_rate` (vertical rate in fpm)
- Filter out entries with no `lat`/`lon`. Some fields may be missing — code defensively.

### 2. Origin/destination route — `adsbdb.com`

- Endpoint: `https://api.adsbdb.com/v0/callsign/{callsign}`
- Returns flight route metadata. Lazy-load per-callsign and cache (callsigns repeat for hours).
- Maps `_airports[0]` → origin and `_airports[N-1]` → destination, where each airport has `iata` and `name`.
- 404s are common (small/private flights). Treat as "no route data" — the hero card hides the route line and the list shows aircraft type instead.

### 3. Aircraft photos — `planespotters.net`

- Endpoint: `https://api.planespotters.net/pub/photos/hex/{icao24}`
- Returns `{ photos: [{ thumbnail_large: { src }, link, photographer }, ...] }`
- Use the first photo. Cache aggressively per-hex. If 404 or empty, fall back to "No img" placeholder.
- **Required: display photographer attribution** in the hero card whenever a photo is shown. Format: `Photo © {photographer} · planespotters.net`. The photo tile must link to the planespotters page (`photo.link`).

### 4. Forward + reverse geocoding — `OpenStreetMap Nominatim`

- Search: `https://nominatim.openstreetmap.org/search?q={query}&format=json&addressdetails=1&limit=8`
- Reverse: `https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json`
- **Add a User-Agent header** with your app name + contact email — Nominatim requires it for production use. They also rate-limit (1 req/s); debounce search input by 350ms.
- For production volume, consider switching to a paid service (Mapbox / Google) — Nominatim is fine for ambient-traffic levels.

## Design Tokens

### Colors

| Token            | Value             | Usage |
|------------------|-------------------|-------|
| `accent`         | `#c96442`         | Primary brand accent (terracotta) — pins, focus state, route arrow, location-pin icon |
| `text/primary`   | `#1c1c1e`         | Default text on light cards |
| `text/inverse`   | `#ffffff`         | Header text on sky background |
| `text/secondary` | `rgba(0,0,0,.55)` | Subtitle text |
| `text/tertiary`  | `rgba(0,0,0,.5)`  | Stat labels |
| `text/quaternary`| `rgba(0,0,0,.4)`  | Metadata, attribution |
| `card/bg`        | `rgba(255,255,255,.78)` (hero) / `rgba(255,255,255,.7)` (list) | Always WITH backdrop blur |
| `card/border`    | `rgba(255,255,255,.6)` (hero) / `rgba(255,255,255,.5)` (list) | .5px hairline |
| `card/shadow`    | `0 6px 24px rgba(0,0,0,.12)` (hero) / `0 4px 16px rgba(0,0,0,.08)` (list) | |
| `divider`        | `rgba(0,0,0,.04)` row / `rgba(0,0,0,.06)` header / `rgba(0,0,0,.08)` heavier | |
| `selection/bg`   | `rgba(201,100,66,.08)` | Selected row |
| `status/live`    | `#34c759` | Green status dot |
| `status/warn`    | `#f5a524` | Orange (cached/error) |
| `status/idle`    | `#9a9a9a` | Gray |
| `alt/low`        | `#5fd3a3` | <10k ft plane marker |
| `alt/mid`        | `#f5d76e` | 10k–25k ft |
| `alt/high`       | `#9bb0c5` | >25k ft |
| `alt/ground`     | `#888888` | On ground |

### Spacing scale

Multiples of 2: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.
Most card paddings are 10–14; outer gutters are 14; vertical rhythm inside cards is 6/8/10/14.

### Typography

System sans-serif throughout. The HTML uses `-apple-system, "SF Pro Text", system-ui, sans-serif`. On iOS use SF Pro Text/Display, on Android use Roboto/Default.

| Role             | Size | Weight | Letter-spacing | Notes |
|------------------|------|--------|----------------|-------|
| Header count #   | 34   | 300    | -.02em         | Light/thin |
| Hero flight #    | 20   | 600    | -.01em         | |
| Route IATA       | 18   | 600    | -.02em         | |
| Stat value       | 14   | 600    | -.01em         | line-height 1.15 |
| List flight #    | 14   | 600    | -.01em         | |
| List value       | 13   | 500    | (default)      | tabular nums |
| Hero subtitle    | 12   | 400    | (default)      | `rgba(0,0,0,.55)` |
| Pill label       | 12   | 500    | (default)      | |
| Section eyebrow  | 11   | 600    | .08em uppercase| Used for `OVERHEAD NOW`, `NEARBY TRAFFIC` |
| Status text      | 11   | 400    | (default)      | opacity .7 on white-on-color |
| Stat sub         | 10   | 400    | (default)      | tabular nums |
| Stat label       | 10   | 500    | .02em          | |
| Photo attribution| 9    | 400    | .04em          | |
| Unit suffix      | 9    | 400    | .04em uppercase| `ft`, `nm`, etc |

Use **tabular numerals** wherever values change in real time (telemetry, list values, status timestamp).

### Border radius

| Element        | Radius |
|----------------|--------|
| Cards          | 18     |
| Pill           | 999 (full) |
| Drawer         | 12     |
| Inputs/buttons | 8 or 10 |
| Photo thumb    | 10     |
| Arrow tile     | 14     |

### Shadows

| Element  | Shadow                              |
|----------|-------------------------------------|
| Hero     | `0 6px 24px rgba(0,0,0,.12)`        |
| List     | `0 4px 16px rgba(0,0,0,.08)`        |
| Pill     | `0 4px 16px rgba(0,0,0,.12)`        |
| Drawer   | `0 12px 40px rgba(0,0,0,.18)`       |
| House marker | `0 2px 6px rgba(0,0,0,.3)`      |

### Materials (frosted blur)

Wherever cards/pill use `rgba(255,255,255,.x)` they MUST also have a real backdrop blur (web: `backdrop-filter: blur(20px) saturate(180%)`; iOS SwiftUI: `.background(.ultraThinMaterial)`; Android: `Modifier.blur(...)` or a frosted background). DO NOT replace the blur with a flat tint — the design relies on the gradient sky reading through.

## Assets

- **Aircraft photos** — fetched live from planespotters.net per-aircraft. No bundled image assets.
- **Map tiles** — fetched live from CartoDB. No bundled tile cache.
- **Icons** — all rendered inline as SVG (location pin, chevron, crosshair, recenter target, plane arrow, house, route arrow). Recreate as native vector or icon-font in target platform. Spec is in the components above.

## Files in this bundle

```
design_handoff_flight_tracker/
├── README.md                          ← this file
├── source_html/
│   ├── variant_a_standalone.html     ← runnable standalone Variant A (open in browser)
│   ├── flight-data.jsx                ← data hooks: useLocation, useFlights, useAircraftPhoto + helpers
│   ├── shared-map.jsx                 ← Leaflet wrapper: SharedMap component
│   ├── location-picker.jsx            ← floating LocationPicker pill + drawer
│   └── variants.jsx                   ← WeatherVariant (this design), plus B and C for context (ignore B and C)
└── screenshots/
    └── variant_a_overview.png         ← reference rendering
```

To preview the design: open `source_html/variant_a_standalone.html` in a browser. Allow location permission when prompted (or use the search pill to set a busy airspace like "London" or "near LAX").

The other variant components (`TowerVariant`, `CalmVariant`) are in the same `variants.jsx` for reference. They're alternate designs the user explored — **only Variant A (`WeatherVariant`) ships in this handoff**.

## Implementation notes for native mobile

- **Layout** translates cleanly to a vertical `ScrollView`/`LazyColumn`/SwiftUI `ScrollView` of stacked cards. The Nearby Traffic list itself should scroll independently (so the hero stays visible), or the whole screen scrolls together — both work; the prototype does the former.
- **Map** — use the platform-native map view (MKMapView or Google Maps SDK) instead of porting Leaflet. Polyline trails, custom annotation views for planes, and a circular MKOverlay for the radius ring are all natively supported.
- **Backdrop blur** — use system materials (`.ultraThinMaterial` on iOS, `BlurEffect` / `RenderEffect` / hazeJetpack on Android). Don't roll your own.
- **Geolocation** — request "when in use" precision permission. The web prototype accepts low-accuracy results to keep the prompt friendly; do the same on mobile.
- **Background refresh** — the prototype polls every 8s while the screen is visible. On mobile, suspend polling when the app backgrounds; resume on foreground. Don't run in background — this is an ambient-while-watching app, not a notification engine.
- **Photo loading** — cache aggressively (the same airframe will be over your house many times). Disk cache by ICAO hex.
