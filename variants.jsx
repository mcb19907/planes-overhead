// variants.jsx — three flight-tracker design directions.
// Each variant accepts: { planes, status, lastUpdate, house, mapStyle, showPaths,
//   timeOfDay, overheadTreatment, width, height }

// ─── Reusable bits ──────────────────────────────────────────────
function StatusDot({ status }) {
  const c = status === 'live' ? '#34c759' : status === 'demo' ? '#f5a524' : status === 'error' ? '#f5a524' : '#9a9a9a';
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:6}}>
      <span style={{width:7,height:7,borderRadius:'50%',background:c,boxShadow:`0 0 0 2px ${c}33`,animation:status==='live'?'breath 2s ease-in-out infinite':'none'}}/>
      <style>{`@keyframes breath{0%,100%{box-shadow:0 0 0 0 ${c}55}50%{box-shadow:0 0 0 6px ${c}00}}`}</style>
    </span>
  );
}

function tinyArrow(deg, color='#444', size=10) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={{transform:`rotate(${deg}deg)`, transition:'transform .4s'}}>
      <path d="M5 0 L8 9 L5 7 L2 9 Z" fill={color}/>
    </svg>
  );
}

function timeAgo(d) {
  if (!d) return '—';
  const s = Math.floor((Date.now() - d.getTime())/1000);
  if (s < 5) return 'just now';
  if (s < 60) return s + 's ago';
  return Math.floor(s/60) + 'm ago';
}

// ─── Shared focus hook ──────────────────────────────────────────
// Default = closest plane (planes[0]). User tap pins a specific plane and
// stops the auto-follow. Pin clears automatically if the plane leaves range.
function useFocus(planes) {
  const [pinnedHex, setPinnedHex] = React.useState(null);
  // Drop pin if the plane left range.
  React.useEffect(() => {
    if (pinnedHex && !planes.some(p => p.hex === pinnedHex)) setPinnedHex(null);
  }, [planes, pinnedHex]);
  const focusedHex = pinnedHex || planes[0]?.hex || null;
  const focusedPlane = planes.find(p => p.hex === focusedHex) || null;
  const select = (p) => {
    if (!p) return setPinnedHex(null);
    // Tapping the already-pinned plane unpins → auto-follow.
    setPinnedHex(prev => prev === p.hex ? null : p.hex);
  };
  return { focusedHex, focusedPlane, isPinned: !!pinnedHex, select, clearPin: () => setPinnedHex(null) };
}

// Small "pinned / auto" badge that doubles as an unpin button.
function FocusBadge({ isPinned, onClear, color = '#c96442', dark = false }) {
  if (!isPinned) {
    return (
      <span style={{
        fontSize:9, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase',
        color: dark ? 'rgba(255,255,255,.55)' : 'rgba(0,0,0,.45)',
        display:'inline-flex', alignItems:'center', gap:4,
      }}>
        <span style={{width:5,height:5,borderRadius:'50%',background:color,opacity:.7}}/>
        AUTO · CLOSEST
      </span>
    );
  }
  return (
    <button onClick={onClear} style={{
      appearance:'none', border:'none', cursor:'pointer',
      fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase',
      color: '#fff', background: color, padding:'3px 8px', borderRadius:999,
      display:'inline-flex', alignItems:'center', gap:5, fontFamily:'inherit',
    }} title="Click to unpin and follow closest">
      <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor"><path d="M6 1 L7 4 L10 4 L7.5 6 L8.5 9.5 L6 7.5 L3.5 9.5 L4.5 6 L2 4 L5 4 Z"/></svg>
      PINNED · TAP TO RELEASE
    </button>
  );
}
// ═══════════════════════════════════════════════════════════════
function TowerVariant({ planes, status, lastUpdate, house, mapStyle, showPaths, showTrails, timeOfDay, overheadTreatment, width, height }) {
  const { focusedHex, focusedPlane, isPinned, select, clearPin } = useFocus(planes);

  const C = {
    bg: '#0c0e10', panel:'#13161a', panel2:'#1a1e23', line:'#252a31',
    text:'#d6dde5', dim:'#6b7682', accent:'#5fd3a3', warn:'#ffb15c', hot:'#ff6b6b', cool:'#7ec1ff',
    mono:'ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace',
  };

  const overheadHero = overheadTreatment === 'hero' || overheadTreatment === 'fullscreen';

  return (
    <div style={{width, height, background:C.bg, color:C.text, fontFamily:C.mono, fontSize:11, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden'}}>
      {/* Top bar */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 14px', borderBottom:`1px solid ${C.line}`, fontSize:10, letterSpacing:'.08em'}}>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <span style={{color:C.accent, fontWeight:700, textTransform:'uppercase', letterSpacing:'.12em', maxWidth:160, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{(house.label||'Site').split(',')[0]}</span>
          <span style={{color:C.dim, fontVariantNumeric:'tabular-nums'}}>{Math.abs(house.lat).toFixed(2)}°{house.lat>=0?'N':'S'} {Math.abs(house.lon).toFixed(2)}°{house.lon>=0?'E':'W'}</span>
        </div>
        <div style={{display:'flex',gap:10,alignItems:'center', color:C.dim}}>
          <StatusDot status={status}/>
          <span>{status==='live'?'LIVE':status==='demo'?'DEMO':status==='error'?'CACHED':'…'}</span>
          <span>·</span>
          <span>{timeAgo(lastUpdate)}</span>
        </div>
      </div>

      {/* Map */}
      <div style={{position:'relative'}}>
        <SharedMap
          planes={planes} house={house} focusedHex={focusedHex} onSelect={(p)=>select(p)}
          mapStyle={mapStyle==='light'?'dark':mapStyle} showPaths={showPaths} showTrails={showTrails} timeOfDay={timeOfDay}
          height={Math.round(height * 0.48)} planeColor={null} dimUnfocused
          showAirspace
        />
        {/* HUD overlay */}
        <div style={{position:'absolute', top:8, left:10, right:10, display:'flex', justifyContent:'space-between', pointerEvents:'none', fontSize:9, letterSpacing:'.1em', color:C.dim}}>
          <div>RANGE 25NM</div>
          <div>CONTACTS {String(planes.length).padStart(2,'0')}</div>
        </div>
        {/* Crosshair */}
        <div style={{position:'absolute', inset:0, pointerEvents:'none', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div style={{width:1, height:height*0.48, background:`${C.accent}10`, position:'absolute'}}/>
          <div style={{width:'100%', height:1, background:`${C.accent}10`, position:'absolute'}}/>
        </div>
      </div>

      {/* OVERHEAD HERO */}
      {focusedPlane && overheadHero && (
        <TowerHero focusedPlane={focusedPlane} isPinned={isPinned} clearPin={clearPin} C={C}/>
      )}

      {/* TRAFFIC LIST */}
      <div style={{flex:1, overflow:'auto', padding:'8px 0'}}>
        <div style={{padding:'4px 14px', fontSize:9, letterSpacing:'.18em', color:C.dim, display:'grid', gridTemplateColumns:'1fr 50px 50px 60px', gap:8}}>
          <span>FLIGHT · AC</span><span style={{textAlign:'right'}}>ALT</span><span style={{textAlign:'right'}}>SPD</span><span style={{textAlign:'right'}}>RANGE</span>
        </div>
        {planes.map((p) => {
          const isF = p.hex === focusedHex;
          return (
            <div key={p.hex} onClick={()=>select(p)}
              style={{padding:'7px 14px', display:'grid', gridTemplateColumns:'1fr 50px 50px 60px', gap:8,
                cursor:'pointer', background: isF ? `${C.accent}11` : 'transparent',
                borderLeft: isF ? `2px solid ${C.accent}` : '2px solid transparent', fontSize:11}}>
              <div style={{minWidth:0, overflow:'hidden'}}>
                <div style={{color:isF?C.accent:C.text, fontWeight:600, letterSpacing:'.04em'}}>
                  {fmt.flight(p.flight) || p.registration || p.hex}
                </div>
                <div style={{color:C.dim, fontSize:9, marginTop:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                  {p.route ? `${p.route.origin?.iata||'?'} → ${p.route.destination?.iata||'?'}` : (p.type || '—')}
                </div>
              </div>
              <div style={{textAlign:'right', color:C.cool, fontVariantNumeric:'tabular-nums'}}>{fmt.altShort(p.altFt)}</div>
              <div style={{textAlign:'right', color:C.warn, fontVariantNumeric:'tabular-nums', lineHeight:1.1}}>
                {p.speedKt ? (
                  <>
                    <div>{Math.round(p.speedKt * 1.151)}<span style={{fontSize:8, color:C.dim, marginLeft:2, letterSpacing:'.05em'}}>MPH</span></div>
                    <div style={{fontSize:8, color:C.dim, letterSpacing:'.05em'}}>{Math.round(p.speedKt)} kt</div>
                  </>
                ) : '—'}
              </div>
              <div style={{textAlign:'right', color:C.dim, fontVariantNumeric:'tabular-nums', display:'flex', alignItems:'center', justifyContent:'flex-end', gap:4}}>
                <span>{p.distNm.toFixed(1)}</span>
                {tinyArrow(p.bearing, C.dim, 8)}
              </div>
            </div>
          );
        })}
        {planes.length === 0 && (
          <div style={{padding:'40px 14px', textAlign:'center', color:C.dim, fontSize:10, letterSpacing:'.1em'}}>NO CONTACTS IN RANGE</div>
        )}
      </div>
    </div>
  );
}
function Tele({ label, value, sub, accent }) {
  return (
    <div>
      <div style={{fontSize:8, letterSpacing:'.18em', color:'rgba(255,255,255,.4)', marginBottom:2}}>{label}</div>
      <div style={{color:accent, fontWeight:600, fontVariantNumeric:'tabular-nums', lineHeight:1.1}}>{value}</div>
      {sub && <div style={{fontSize:8, color:'rgba(255,255,255,.35)', fontVariantNumeric:'tabular-nums', marginTop:1, letterSpacing:'.05em'}}>{sub}</div>}
    </div>
  );
}

function TowerHero({ focusedPlane, isPinned, clearPin, C }) {
  const photo = useAircraftPhoto(focusedPlane?.hex);
  // Demo planes have synthetic hex like 'demo01' — skip the photo fetch then.
  const isDemo = focusedPlane?.hex?.startsWith('demo');
  return (
    <div style={{padding:'12px 14px 10px', borderBottom:`1px solid ${C.line}`, background:`linear-gradient(180deg, ${C.panel2}, ${C.panel})`}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
        <span style={{color:C.accent, fontSize:9, letterSpacing:'.18em', fontWeight:700}}>{isPinned ? '◉ PINNED' : '◉ OVERHEAD NOW'}</span>
        <span style={{color:C.dim, fontSize:9, letterSpacing:'.1em'}}>{fmt.dist(focusedPlane.distNm)} · {focusedPlane.compass}</span>
      </div>
      {isPinned && (
        <div style={{marginBottom:6}}><FocusBadge isPinned onClear={clearPin} color={C.accent} dark/></div>
      )}
      <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:8}}>
        {tinyArrow(focusedPlane.track||0, C.accent, 16)}
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontSize:22, fontWeight:700, letterSpacing:'.05em', color:'#fff', lineHeight:1}}>{fmt.flight(focusedPlane.flight) || focusedPlane.registration}</div>
          <div style={{fontSize:10, color:C.dim, marginTop:3, letterSpacing:'.05em', textTransform:'uppercase'}}>
            {focusedPlane.airline || '—'} · {focusedPlane.description || focusedPlane.type || '—'}
          </div>
        </div>
        {/* Aircraft photo (planespotters.net) */}
        {!isDemo && (
          <a href={photo?.link || `https://www.flightaware.com/live/flight/${(focusedPlane.flight||'').trim()}`}
             target="_blank" rel="noopener noreferrer"
             title={photo ? `Photo © ${photo.photographer} — planespotters.net` : 'Open in FlightAware'}
             style={{
               width:72, height:54, flexShrink:0, borderRadius:4, overflow:'hidden',
               border:`1px solid ${C.line}`, background:`${C.panel}`, position:'relative',
               display:'flex', alignItems:'center', justifyContent:'center',
               textDecoration:'none', cursor:'pointer',
             }}>
            {photo?.thumb ? (
              <img src={photo.thumb} alt={focusedPlane.type || 'aircraft'}
                   style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            ) : (
              <span style={{fontSize:8, color:C.dim, letterSpacing:'.15em'}}>NO IMG</span>
            )}
            {photo?.thumb && (
              <span style={{
                position:'absolute', bottom:0, right:0, fontSize:7, padding:'1px 3px',
                background:'rgba(0,0,0,.55)', color:'rgba(255,255,255,.7)', letterSpacing:'.05em',
              }}>↗</span>
            )}
          </a>
        )}
      </div>
      {focusedPlane.route && (
        <div style={{display:'flex', alignItems:'center', gap:8, fontSize:13, fontWeight:600, marginBottom:10, letterSpacing:'.04em'}}>
          <span>{focusedPlane.route.origin?.iata || '???'}</span>
          <span style={{flex:1, height:1, background:`linear-gradient(90deg, ${C.accent}88, ${C.accent}22)`, position:'relative'}}>
            <span style={{position:'absolute', right:-3, top:-4, width:0, height:0, borderLeft:`6px solid ${C.accent}88`, borderTop:'4px solid transparent', borderBottom:'4px solid transparent'}}/>
          </span>
          <span style={{color:C.accent}}>{focusedPlane.route.destination?.iata || '???'}</span>
        </div>
      )}
      {/* Telemetry grid */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:8, fontSize:10}}>
        <Tele label="ALT" value={fmt.altShort(focusedPlane.altFt)} accent={C.cool}/>
        <Tele label="GS" value={focusedPlane.speedKt ? Math.round(focusedPlane.speedKt*1.151)+' mph' : '—'} sub={focusedPlane.speedKt ? Math.round(focusedPlane.speedKt)+' kt' : null} accent={C.warn}/>
        <Tele label="HDG" value={focusedPlane.track?Math.round(focusedPlane.track)+'°':'—'} accent={C.text}/>
        <Tele label="V/S" value={focusedPlane.verticalRate?(focusedPlane.verticalRate>0?'↑':'↓')+Math.abs(focusedPlane.verticalRate):'—'} accent={focusedPlane.verticalRate>50?C.accent:focusedPlane.verticalRate<-50?C.hot:C.dim}/>
      </div>
      {photo?.photographer && (
        <div style={{marginTop:8, fontSize:8, color:C.dim, letterSpacing:'.08em', textAlign:'right'}}>
          PHOTO © {photo.photographer.toUpperCase()} · PLANESPOTTERS.NET
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// VARIANT 2 — WEATHER  (Apple-Weather-style, soft, friendly cards)
// ═══════════════════════════════════════════════════════════════
function WeatherVariant({ planes, status, lastUpdate, house, mapStyle, showPaths, showTrails, timeOfDay, overheadTreatment, width, height }) {
  const { focusedHex, focusedPlane, isPinned, select, clearPin } = useFocus(planes);

  // Sky-gradient driven by timeOfDay
  const sky = (() => {
    const t = timeOfDay;
    if (t < 0.2)  return ['#0b1330','#1d2a4a','#3a4670']; // night
    if (t < 0.35) return ['#ff9d6e','#ffc7a0','#cfe0ff']; // dawn
    if (t < 0.65) return ['#76b6ff','#a9d4ff','#dceeff']; // day
    if (t < 0.8)  return ['#ff8e6f','#f4a672','#7c8ec5']; // dusk
    return ['#0b1330','#1d2a4a','#3a4670'];
  })();

  return (
    <div style={{width, height, background:`linear-gradient(180deg, ${sky[0]} 0%, ${sky[1]} 35%, ${sky[2]} 100%)`,
      fontFamily:'-apple-system, "SF Pro Text", system-ui, sans-serif', display:'flex', flexDirection:'column', overflow:'hidden', color:'#1c1c1e'}}>

      {/* Header — location on left, count on right (mirrors the floating picker pill) */}
      <div style={{padding:'14px 20px 6px', color:'#fff', textShadow:'0 1px 2px rgba(0,0,0,.15)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12}}>
        <div style={{minWidth:0, flex:1}}>
          <div style={{fontSize:13, opacity:.85, letterSpacing:'.02em', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
            {(house.label||'Current location').split(',').slice(0,2).join(',')}
          </div>
          <div style={{fontSize:11, opacity:.7, marginTop:4, display:'flex', gap:8, alignItems:'center'}}>
            <StatusDot status={status}/>
            <span>{status==='live'?'Live':status==='demo'?'Demo':'Cached'} · updated {timeAgo(lastUpdate)}</span>
          </div>
        </div>
        <div style={{textAlign:'right', flexShrink:0}}>
          <div style={{fontSize:34, fontWeight:300, letterSpacing:'-.02em', lineHeight:1, fontVariantNumeric:'tabular-nums'}}>{planes.length}</div>
          <div style={{fontSize:11, opacity:.85, fontWeight:400, marginTop:2, letterSpacing:'.02em'}}>aircraft nearby</div>
        </div>
      </div>

      {/* OVERHEAD card */}
      {focusedPlane && (
        <WeatherHero focusedPlane={focusedPlane} isPinned={isPinned} clearPin={clearPin}/>
      )}

      {/* Map card */}
      <div style={{margin:'0 14px 10px', borderRadius:18, overflow:'hidden', boxShadow:'0 6px 24px rgba(0,0,0,.12)', border:'.5px solid rgba(255,255,255,.6)'}}>
        <SharedMap
          planes={planes} house={house} focusedHex={focusedHex} onSelect={(p)=>select(p)}
          mapStyle={mapStyle} showPaths={showPaths} showTrails={showTrails} timeOfDay={timeOfDay}
          height={Math.round(height * 0.34)}
        />
      </div>

      {/* Vertical traffic list */}
      <div style={{margin:'0 14px 14px', background:'rgba(255,255,255,.7)', backdropFilter:'blur(20px) saturate(180%)', WebkitBackdropFilter:'blur(20px) saturate(180%)', borderRadius:18, boxShadow:'0 4px 16px rgba(0,0,0,.08)', border:'.5px solid rgba(255,255,255,.5)', flex:1, minHeight:0, display:'flex', flexDirection:'column', overflow:'hidden'}}>
        <div style={{padding:'12px 16px 8px', display:'flex', justifyContent:'space-between', alignItems:'baseline', borderBottom:'.5px solid rgba(0,0,0,.06)'}}>
          <div style={{fontSize:11, fontWeight:600, letterSpacing:'.08em', color:'rgba(0,0,0,.55)', textTransform:'uppercase'}}>Nearby Traffic</div>
          <div style={{fontSize:10, color:'rgba(0,0,0,.4)', fontVariantNumeric:'tabular-nums'}}>{planes.length} aircraft</div>
        </div>
        <div style={{flex:1, overflow:'auto'}}>
          {planes.map((p) => {
            const isF = p.hex === focusedHex;
            return (
              <div key={p.hex} onClick={()=>select(p)}
                style={{padding:'10px 16px', display:'grid', gridTemplateColumns:'18px 1fr 56px 60px 56px', gap:10, alignItems:'center',
                  cursor:'pointer', background: isF ? 'rgba(201,100,66,.08)' : 'transparent',
                  borderLeft: isF ? '3px solid #c96442' : '3px solid transparent',
                  borderBottom:'.5px solid rgba(0,0,0,.04)',
                  transition:'background .15s'}}>
                <div style={{display:'flex', justifyContent:'center'}}>{tinyArrow(p.track||0, isF?'#c96442':'rgba(0,0,0,.55)', 14)}</div>
                <div style={{minWidth:0}}>
                  <div style={{fontSize:14, fontWeight:600, letterSpacing:'-.01em', color: isF?'#c96442':'#1c1c1e', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                    {fmt.flight(p.flight) || p.registration || p.hex.toUpperCase()}
                  </div>
                  <div style={{fontSize:11, color:'rgba(0,0,0,.5)', marginTop:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                    {p.route ? `${p.route.origin?.iata||'?'} → ${p.route.destination?.iata||'?'}` : (p.description || p.type || 'Unknown')}
                  </div>
                </div>
                <div style={{textAlign:'right', fontVariantNumeric:'tabular-nums', lineHeight:1.15}}>
                  <div style={{fontSize:13, fontWeight:500, color:'#1c1c1e'}}>{p.altFt!=null ? (p.altFt===0 ? 'GND' : Math.round(p.altFt/100)*100) : '—'}</div>
                  <div style={{fontSize:9, color:'rgba(0,0,0,.45)', letterSpacing:'.04em', textTransform:'uppercase'}}>ft</div>
                </div>
                <div style={{textAlign:'right', fontVariantNumeric:'tabular-nums', lineHeight:1.15}}>
                  {p.speedKt ? (
                    <>
                      <div style={{fontSize:13, fontWeight:500, color:'#1c1c1e'}}>{Math.round(p.speedKt*1.151)} <span style={{fontSize:9, fontWeight:400, color:'rgba(0,0,0,.45)'}}>mph</span></div>
                      <div style={{fontSize:9, color:'rgba(0,0,0,.4)'}}>{Math.round(p.speedKt)} kt</div>
                    </>
                  ) : <div style={{fontSize:13, color:'rgba(0,0,0,.3)'}}>—</div>}
                </div>
                <div style={{textAlign:'right', fontVariantNumeric:'tabular-nums', lineHeight:1.15}}>
                  <div style={{fontSize:13, fontWeight:500, color:'#1c1c1e'}}>{p.distNm.toFixed(1)}</div>
                  <div style={{fontSize:9, color:'rgba(0,0,0,.45)', letterSpacing:'.04em', textTransform:'uppercase'}}>nm · {p.compass}</div>
                </div>
              </div>
            );
          })}
          {planes.length===0 && <div style={{padding:'40px 16px', textAlign:'center', color:'rgba(0,0,0,.4)', fontSize:12, fontStyle:'italic'}}>Quiet skies. No aircraft right now.</div>}
        </div>
      </div>
    </div>
  );
}
function WeatherHero({ focusedPlane, isPinned, clearPin }) {
  const photo = useAircraftPhoto(focusedPlane?.hex);
  const isDemo = focusedPlane?.hex?.startsWith('demo');
  return (
    <div style={{margin:'6px 14px 8px', background:'rgba(255,255,255,.78)', backdropFilter:'blur(20px) saturate(180%)', WebkitBackdropFilter:'blur(20px) saturate(180%)', borderRadius:18, padding:'10px 14px 11px', boxShadow:'0 6px 24px rgba(0,0,0,.12)', border:'.5px solid rgba(255,255,255,.6)'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6}}>
        <div style={{fontSize:10, fontWeight:600, letterSpacing:'.1em', color:'#c96442', textTransform:'uppercase'}}>{isPinned ? 'Pinned' : 'Overhead Now'}</div>
        <div style={{fontSize:11, color:'rgba(0,0,0,.5)', display:'flex', alignItems:'center', gap:4}}>
          {tinyArrow(focusedPlane.bearing, 'rgba(0,0,0,.5)', 9)}
          <span>{focusedPlane.compass} · {fmt.dist(focusedPlane.distNm)}</span>
        </div>
      </div>
      {isPinned && <div style={{marginBottom:8}}><FocusBadge isPinned onClear={clearPin}/></div>}
      <div style={{display:'flex', alignItems:'center', gap:14}}>
        <div style={{width:48, height:48, borderRadius:14, background:'linear-gradient(135deg, #f6f4ef, #e9e5dc)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
          {tinyArrow(focusedPlane.track||0, '#1c1c1e', 26)}
        </div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontSize:20, fontWeight:600, letterSpacing:'-.01em'}}>{fmt.flight(focusedPlane.flight) || focusedPlane.registration}</div>
          <div style={{fontSize:12, color:'rgba(0,0,0,.55)', marginTop:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{focusedPlane.airline ? focusedPlane.airline + ' · ' : ''}{focusedPlane.description || focusedPlane.type || 'Unknown'}</div>
        </div>
        {!isDemo && (
          <a href={photo?.link || `https://www.flightaware.com/live/flight/${(focusedPlane.flight||'').trim()}`}
             target="_blank" rel="noopener noreferrer"
             title={photo ? `Photo © ${photo.photographer} — planespotters.net` : 'Open in FlightAware'}
             style={{
               width:72, height:54, flexShrink:0, borderRadius:10, overflow:'hidden',
               border:'.5px solid rgba(0,0,0,.08)', background:'rgba(255,255,255,.5)', position:'relative',
               display:'flex', alignItems:'center', justifyContent:'center',
               textDecoration:'none', cursor:'pointer',
             }}>
            {photo?.thumb ? (
              <img src={photo.thumb} alt={focusedPlane.type || 'aircraft'}
                   style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            ) : (
              <span style={{fontSize:9, color:'rgba(0,0,0,.35)', letterSpacing:'.1em', textTransform:'uppercase'}}>No img</span>
            )}
            {photo?.thumb && (
              <span style={{
                position:'absolute', bottom:0, right:0, fontSize:8, padding:'1px 4px',
                background:'rgba(0,0,0,.5)', color:'rgba(255,255,255,.85)', letterSpacing:'.05em',
                borderTopLeftRadius:6,
              }}>↗</span>
            )}
          </a>
        )}
      </div>
      {focusedPlane.route && (
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:10}}>
          <RouteEnd code={focusedPlane.route.origin?.iata} city={focusedPlane.route.origin?.name}/>
          <div style={{flex:1, position:'relative', height:18}}>
            <div style={{position:'absolute', top:9, left:0, right:0, height:1, background:'rgba(0,0,0,.15)', borderRadius:1}}/>
            <div style={{position:'absolute', top:5, left:'50%', transform:'translateX(-50%) rotate(90deg)'}}>{tinyArrow(0, '#c96442', 9)}</div>
          </div>
          <RouteEnd code={focusedPlane.route.destination?.iata} city={focusedPlane.route.destination?.name} right/>
        </div>
      )}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8, marginTop:10, paddingTop:8, borderTop:'.5px solid rgba(0,0,0,.08)'}}>
        <Stat label="Altitude" value={fmt.alt(focusedPlane.altFt)}/>
        <Stat label="Speed"    value={focusedPlane.speedKt?Math.round(focusedPlane.speedKt*1.151)+' mph':'—'} sub={focusedPlane.speedKt?Math.round(focusedPlane.speedKt)+' kt':null}/>
        <Stat label="Heading"  value={focusedPlane.track!=null?Math.round(focusedPlane.track)+'° '+focusedPlane.compass:'—'}/>
      </div>
      {photo?.photographer && (
        <div style={{marginTop:6, fontSize:9, color:'rgba(0,0,0,.4)', letterSpacing:'.04em', textAlign:'right'}}>
          Photo © {photo.photographer} · planespotters.net
        </div>
      )}
    </div>
  );
}

function RouteEnd({ code, city, right }) {
  return (
    <div style={{textAlign: right?'right':'left'}}>
      <div style={{fontSize:18, fontWeight:600, letterSpacing:'-.02em'}}>{code || '???'}</div>
      <div style={{fontSize:10, color:'rgba(0,0,0,.5)', marginTop:1}}>{city || ''}</div>
    </div>
  );
}
function Stat({ label, value, sub }) {
  return (
    <div>
      <div style={{fontSize:10, color:'rgba(0,0,0,.5)', fontWeight:500, marginBottom:2, letterSpacing:'.02em'}}>{label}</div>
      <div style={{fontSize:14, fontWeight:600, letterSpacing:'-.01em', lineHeight:1.15}}>{value}</div>
      {sub && <div style={{fontSize:10, color:'rgba(0,0,0,.4)', fontVariantNumeric:'tabular-nums', marginTop:1}}>{sub}</div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// VARIANT 3 — CALM  (meditative, plane-spotting hobby, editorial)
// ═══════════════════════════════════════════════════════════════
function CalmVariant({ planes, status, lastUpdate, house, mapStyle, showPaths, showTrails, timeOfDay, overheadTreatment, width, height }) {
  const { focusedHex, focusedPlane, isPinned, select, clearPin } = useFocus(planes);

  // Calm warm-paper palette, accent inspired by aged map ink
  const C = {
    paper:'#f3eee3', paper2:'#ebe4d3', ink:'#2a2620', ink2:'#5a5247',
    rule:'#d8d0bc', accent:'#b04a2a',
    serif:'"Cormorant Garamond", "Iowan Old Style", Georgia, serif',
    sans:'"Inter", -apple-system, system-ui, sans-serif',
    mono:'"IBM Plex Mono", ui-monospace, Menlo, monospace',
  };

  return (
    <div style={{width, height, background:C.paper, color:C.ink, fontFamily:C.sans, display:'flex', flexDirection:'column', overflow:'hidden', position:'relative'}}>
      {/* paper texture */}
      <div style={{position:'absolute', inset:0, backgroundImage:`radial-gradient(circle at 20% 10%, rgba(176,74,42,.04), transparent 50%), radial-gradient(circle at 80% 80%, rgba(42,38,32,.04), transparent 50%)`, pointerEvents:'none'}}/>

      {/* Masthead */}
      <div style={{padding:'18px 22px 10px', borderBottom:`.5px solid ${C.rule}`, position:'relative'}}>
        <div style={{fontFamily:C.mono, fontSize:9, letterSpacing:'.2em', color:C.ink2, textTransform:'uppercase', display:'flex', justifyContent:'space-between'}}>
          <span>Vol. I · Issue {String(Math.floor(Date.now()/86400000)%999).padStart(3,'0')}</span>
          <span style={{display:'flex', alignItems:'center', gap:6}}><StatusDot status={status}/>{status==='live'?'Live':'Cached'}</span>
        </div>
        <h1 style={{fontFamily:C.serif, fontWeight:500, fontStyle:'italic', fontSize:34, letterSpacing:'-.01em', margin:'4px 0 2px', lineHeight:1}}>The Sky Above</h1>
        <div style={{fontFamily:C.serif, fontSize:14, color:C.ink2, letterSpacing:'.02em'}}>{(house.label||'Current location').split(',').slice(0,2).join(',')} · {new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric'})}</div>
      </div>

      {/* Hero */}
      {focusedPlane ? (
        <div style={{padding:'18px 22px 10px', borderBottom:`.5px solid ${C.rule}`}}>
          <div style={{fontFamily:C.mono, fontSize:9, letterSpacing:'.18em', color:C.accent, textTransform:'uppercase', marginBottom:6, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span>· {isPinned ? 'Pinned' : 'Passing now'} ·</span>
            {isPinned && <FocusBadge isPinned onClear={clearPin} color={C.accent}/>}
          </div>
          <div style={{display:'flex', gap:14, alignItems:'flex-start'}}>
            <div style={{flexShrink:0, marginTop:6}}>{tinyArrow(focusedPlane.track||0, C.ink, 36)}</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontFamily:C.serif, fontWeight:500, fontSize:28, letterSpacing:'-.01em', lineHeight:1.05, marginBottom:4}}>
                {focusedPlane.airline || 'An aircraft'} <span style={{fontStyle:'italic', color:C.ink2}}>{fmt.flight(focusedPlane.flight) || focusedPlane.registration || ''}</span>
              </div>
              <p style={{fontFamily:C.serif, fontSize:15, lineHeight:1.4, color:C.ink2, margin:0}}>
                {focusedPlane.description ? `A ${focusedPlane.description}` : 'An aircraft'}
                {focusedPlane.altFt ? `, cruising at ${fmt.alt(focusedPlane.altFt)},` : ','} bearing {focusedPlane.compass}
                {focusedPlane.route ? <> from <em style={{color:C.ink}}>{focusedPlane.route.origin?.name || focusedPlane.route.origin?.iata || 'parts unknown'}</em> toward <em style={{color:C.ink}}>{focusedPlane.route.destination?.name || focusedPlane.route.destination?.iata || 'a distant city'}</em>.</> : '.'}
              </p>
            </div>
          </div>
          {/* Stat strip */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, marginTop:14, paddingTop:12, borderTop:`.5px dashed ${C.rule}`}}>
            <CalmStat label="Distance" value={fmt.dist(focusedPlane.distNm)} mono={C.mono}/>
            <CalmStat label="Altitude" value={fmt.alt(focusedPlane.altFt)} mono={C.mono}/>
            <CalmStat label="Speed"    value={focusedPlane.speedKt?Math.round(focusedPlane.speedKt*1.151)+' mph':'—'} mono={C.mono}/>
            <CalmStat label="Heading"  value={focusedPlane.track!=null?Math.round(focusedPlane.track)+'°':'—'} mono={C.mono}/>
          </div>
        </div>
      ) : (
        <div style={{padding:'40px 22px', textAlign:'center', fontFamily:C.serif, fontStyle:'italic', fontSize:18, color:C.ink2}}>
          The skies are quiet.
        </div>
      )}

      {/* Map */}
      <div style={{position:'relative', borderBottom:`.5px solid ${C.rule}`}}>
        <SharedMap
          planes={planes} house={house} focusedHex={focusedHex} onSelect={(p)=>select(p)}
          mapStyle={mapStyle} showPaths={showPaths} showTrails={showTrails} timeOfDay={timeOfDay}
          height={Math.round(height * 0.26)}
          bgWrap={C.paper2}
        />
        <div style={{position:'absolute', bottom:6, left:10, fontFamily:C.mono, fontSize:9, letterSpacing:'.15em', color:C.ink2, background:'rgba(243,238,227,.85)', padding:'2px 6px'}}>
          fig. 1 — current sightings, 25 nautical miles
        </div>
      </div>

      {/* Index */}
      <div style={{flex:1, overflow:'auto', padding:'10px 22px 16px'}}>
        <div style={{fontFamily:C.mono, fontSize:9, letterSpacing:'.2em', color:C.ink2, textTransform:'uppercase', marginBottom:6}}>Also in the air</div>
        {planes.slice(1).map((p) => {
          const isF = p.hex === focusedHex;
          return (
            <div key={p.hex} onClick={()=>select(p)}
              style={{padding:'7px 0', borderBottom:`.5px dotted ${C.rule}`, display:'grid', gridTemplateColumns:'14px 1fr auto', gap:10, alignItems:'baseline', cursor:'pointer', color: isF ? C.accent : C.ink}}>
              <div style={{transform:`translateY(2px)`}}>{tinyArrow(p.track||0, isF?C.accent:C.ink2, 11)}</div>
              <div style={{fontFamily:C.serif, fontSize:14, lineHeight:1.25, minWidth:0}}>
                <span style={{fontWeight:500}}>{fmt.flight(p.flight) || p.registration || p.hex}</span>
                <span style={{color:C.ink2, fontStyle:'italic'}}>
                  {p.route ? ` — ${p.route.origin?.iata||'?'} to ${p.route.destination?.iata||'?'}` : (p.description ? ` — ${p.description}` : '')}
                </span>
              </div>
              <div style={{fontFamily:C.mono, fontSize:10, color:C.ink2, fontVariantNumeric:'tabular-nums', whiteSpace:'nowrap'}}>
                {p.altFt?Math.round(p.altFt/1000)+'k':'gnd'} · {p.distNm.toFixed(1)}nm {p.compass}
              </div>
            </div>
          );
        })}
        {planes.length<=1 && <div style={{fontFamily:C.serif, fontStyle:'italic', color:C.ink2, padding:'10px 0'}}>Nothing else aloft just now.</div>}
      </div>
    </div>
  );
}
function CalmStat({ label, value, mono }) {
  return (
    <div>
      <div style={{fontFamily:mono, fontSize:8, letterSpacing:'.18em', color:'#5a5247', textTransform:'uppercase', marginBottom:3}}>{label}</div>
      <div style={{fontFamily:'"Cormorant Garamond", Georgia, serif', fontSize:18, fontWeight:500, fontVariantNumeric:'tabular-nums'}}>{value}</div>
    </div>
  );
}

Object.assign(window, { TowerVariant, WeatherVariant, CalmVariant });
