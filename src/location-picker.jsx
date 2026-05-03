// location-picker.jsx — small floating control to set the active location.
// Provides a search box + "use my location" button + reset to default.
import React from 'react'
import { geocode } from './flight-data.jsx'

export function LocationPicker({ location, status, onSet, onUseGeo, onReset, accent = '#c96442' }) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [searching, setSearching] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const doSearch = React.useCallback(async (query) => {
    if (!query || query.trim().length < 2) { setResults([]); return; }
    setSearching(true);
    try { setResults(await geocode(query)); }
    catch (e) { setResults([]); }
    finally { setSearching(false); }
  }, []);

  // Debounced search
  React.useEffect(() => {
    const t = setTimeout(() => doSearch(q), 350);
    return () => clearTimeout(t);
  }, [q, doSearch]);

  const pick = (r) => {
    onSet({ lat: r.lat, lon: r.lon, label: r.short || r.label, source: 'search' });
    setOpen(false); setQ(''); setResults([]);
  };

  return (
    <div style={{position:'fixed', top:14, left:14, zIndex:2147483645, fontFamily:'-apple-system,BlinkMacSystemFont,system-ui,sans-serif', fontSize:12}}>
      {/* Pill */}
      <button onClick={()=>setOpen(o=>!o)} style={{
        display:'flex', alignItems:'center', gap:8, padding:'8px 12px', borderRadius:999,
        background:'rgba(250,249,247,.92)', backdropFilter:'blur(20px) saturate(180%)',
        WebkitBackdropFilter:'blur(20px) saturate(180%)',
        border:'.5px solid rgba(0,0,0,.08)', boxShadow:'0 4px 16px rgba(0,0,0,.12)',
        cursor:'pointer', color:'#29261b', fontFamily:'inherit', fontSize:12,
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"/>
          <circle cx="12" cy="9" r="3"/>
        </svg>
        <span style={{fontWeight:500, maxWidth:180, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
          {location.label || `${location.lat.toFixed(3)}, ${location.lon.toFixed(3)}`}
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 4 L5 7 L8 4" fill="none" stroke="rgba(0,0,0,.4)" strokeWidth="1.5"/></svg>
      </button>

      {/* Drawer */}
      {open && (
        <div style={{
          marginTop:6, width:300, padding:10, borderRadius:12,
          background:'rgba(250,249,247,.96)', backdropFilter:'blur(20px) saturate(180%)',
          WebkitBackdropFilter:'blur(20px) saturate(180%)',
          border:'.5px solid rgba(0,0,0,.08)', boxShadow:'0 12px 40px rgba(0,0,0,.18)',
          display:'flex', flexDirection:'column', gap:8,
        }}>
          <div style={{display:'flex', gap:6}}>
            <input ref={inputRef} value={q} onChange={(e)=>setQ(e.target.value)}
              placeholder="Search address, city, ZIP…"
              style={{flex:1, height:30, padding:'0 10px', borderRadius:8,
                border:'.5px solid rgba(0,0,0,.12)', background:'rgba(255,255,255,.7)',
                outline:'none', fontFamily:'inherit', fontSize:12, color:'#29261b'}}/>
            <button onClick={onUseGeo} title="Use my location" style={{
              width:30, height:30, padding:0, borderRadius:8, border:'.5px solid rgba(0,0,0,.12)',
              background: status==='locating' ? accent : 'rgba(255,255,255,.7)',
              color: status==='locating' ? '#fff' : '#29261b', cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>
              </svg>
            </button>
          </div>
          {status === 'denied' && <div style={{fontSize:10, color:'#a0522d'}}>Location permission denied — please search above.</div>}
          {status === 'error' && <div style={{fontSize:10, color:'#a0522d'}}>Couldn't get your location.</div>}
          {searching && <div style={{fontSize:10, color:'rgba(0,0,0,.5)'}}>Searching…</div>}
          {results.length > 0 && (
            <div style={{maxHeight:240, overflow:'auto', display:'flex', flexDirection:'column', gap:1}}>
              {results.map((r, i) => (
                <button key={i} onClick={()=>pick(r)} style={{
                  textAlign:'left', padding:'7px 8px', borderRadius:6, border:'none',
                  background:'transparent', cursor:'pointer', fontFamily:'inherit', fontSize:11,
                  color:'#29261b', lineHeight:1.3,
                }} onMouseEnter={(e)=>e.currentTarget.style.background='rgba(0,0,0,.05)'}
                  onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
                  <div style={{fontWeight:500}}>{r.short}</div>
                  <div style={{fontSize:10, color:'rgba(0,0,0,.5)', marginTop:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{r.label}</div>
                </button>
              ))}
            </div>
          )}
          <div style={{display:'flex', justifyContent:'space-between', borderTop:'.5px solid rgba(0,0,0,.08)', paddingTop:8, fontSize:10}}>
            <span style={{color:'rgba(0,0,0,.5)'}}>{location.lat.toFixed(4)}, {location.lon.toFixed(4)} <span style={{textTransform:'uppercase', letterSpacing:'.06em', marginLeft:4}}>· {location.source||'manual'}</span></span>
            <button onClick={onReset} style={{border:'none', background:'transparent', color:accent, cursor:'pointer', fontFamily:'inherit', fontSize:10, fontWeight:500}}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
