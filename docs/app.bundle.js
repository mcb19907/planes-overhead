// Flight Tracker — Variant A bundle. Auto-generated; do not edit.
// Source: https://github.com/<your-user>/<repo>/tree/main/src
"use strict";

// ─────── flight-data.jsx ───────
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// flight-data.jsx
// Shared live flight data layer (adsb.lol) + airport lookups + geo helpers.
// All variants consume the same hook so they stay in sync.

// ─── Default location ──────────────────────────────────────────
// Used as a fallback if the user has not set one and geolocation is denied.
var DEFAULT_LOCATION = {
  lat: 37.7935,
  lon: -122.2310,
  label: 'Oakland, CA',
  source: 'default'
};
var LOCATION_KEY = 'ft.location.v1';

// Backwards-compat alias — older code used `HOUSE` for the fixed home pin.
// Now resolved at runtime via useLocation(). We keep an exported HOUSE that
// always reflects the *current* active location for any helpers that import it
// directly (it's mutated by the location hook).
var HOUSE = _objectSpread({}, DEFAULT_LOCATION);

// ─── Geocoding (Nominatim) ─────────────────────────────────────
// Free, no key, requires a User-Agent / Referer header — we send a Referer by
// virtue of being in a browser. Rate-limit: 1 req/sec, fine for interactive search.
function geocode(_x) {
  return _geocode.apply(this, arguments);
}
function _geocode() {
  _geocode = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
    var url, r, j;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          url = "https://nominatim.openstreetmap.org/search?format=json&limit=5&q=".concat(encodeURIComponent(query));
          _context3.n = 1;
          return fetch(url, {
            headers: {
              'Accept': 'application/json'
            }
          });
        case 1:
          r = _context3.v;
          if (r.ok) {
            _context3.n = 2;
            break;
          }
          throw new Error('geocode HTTP ' + r.status);
        case 2:
          _context3.n = 3;
          return r.json();
        case 3:
          j = _context3.v;
          return _context3.a(2, j.map(function (h) {
            return {
              lat: parseFloat(h.lat),
              lon: parseFloat(h.lon),
              label: h.display_name,
              "short": shortenLabel(h.display_name)
            };
          }));
      }
    }, _callee3);
  }));
  return _geocode.apply(this, arguments);
}
function reverseGeocode(_x2, _x3) {
  return _reverseGeocode.apply(this, arguments);
}
function _reverseGeocode() {
  _reverseGeocode = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(lat, lon) {
    var url, r, j, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(lat, "&lon=").concat(lon, "&zoom=14");
          _context4.n = 1;
          return fetch(url);
        case 1:
          r = _context4.v;
          if (r.ok) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, null);
        case 2:
          _context4.n = 3;
          return r.json();
        case 3:
          j = _context4.v;
          return _context4.a(2, shortenLabel(j.display_name) || "".concat(lat.toFixed(3), ", ").concat(lon.toFixed(3)));
        case 4:
          _context4.p = 4;
          _t3 = _context4.v;
          return _context4.a(2, null);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return _reverseGeocode.apply(this, arguments);
}
function shortenLabel(name) {
  if (!name) return null;
  // Take first 2-3 components: "3733, 13th Avenue, Oakland, ..." → "13th Avenue, Oakland"
  var parts = name.split(',').map(function (s) {
    return s.trim();
  }).filter(Boolean);
  if (parts.length <= 2) return parts.join(', ');
  // Skip leading number-only tokens
  var start = /^\d+$/.test(parts[0]) ? 1 : 0;
  return parts.slice(start, start + 2).join(', ');
}

// ─── Location hook ─────────────────────────────────────────────
// Returns: { location, status, setLocation, useGeolocation, search, results }
// Source priority: stored > geolocation > default.
function useLocation() {
  var _React$useState = React.useState(function () {
      try {
        var stored = JSON.parse(localStorage.getItem(LOCATION_KEY));
        if (stored && Number.isFinite(stored.lat) && Number.isFinite(stored.lon)) return stored;
      } catch (e) {}
      return DEFAULT_LOCATION;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    location = _React$useState2[0],
    setLocationState = _React$useState2[1];
  var _React$useState3 = React.useState('idle'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    status = _React$useState4[0],
    setStatus = _React$useState4[1]; // idle | locating | ok | denied | error

  // Keep the global HOUSE alias in sync.
  React.useEffect(function () {
    HOUSE.lat = location.lat;
    HOUSE.lon = location.lon;
    HOUSE.label = location.label;
  }, [location]);
  var setLocation = React.useCallback(function (loc) {
    var next = _objectSpread(_objectSpread({}, loc), {}, {
      source: loc.source || 'manual'
    });
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
  var useGeolocation = React.useCallback(function () {
    if (!navigator.geolocation) {
      setStatus('error');
      return;
    }
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(pos) {
        var lat, lon, label, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              lat = pos.coords.latitude, lon = pos.coords.longitude;
              _context.n = 1;
              return reverseGeocode(lat, lon);
            case 1:
              _t = _context.v;
              if (_t) {
                _context.n = 2;
                break;
              }
              _t = 'Current location';
            case 2:
              label = _t;
              setLocation({
                lat: lat,
                lon: lon,
                label: label,
                source: 'geo'
              });
              setStatus('ok');
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x4) {
        return _ref.apply(this, arguments);
      };
    }(), function (err) {
      setStatus(err.code === 1 ? 'denied' : 'error');
    }, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 5 * 60 * 1000
    });
  }, [setLocation]);
  var reset = React.useCallback(function () {
    try {
      localStorage.removeItem(LOCATION_KEY);
    } catch (e) {}
    setLocationState(DEFAULT_LOCATION);
    setStatus('idle');
  }, []);
  return {
    location: location,
    status: status,
    setLocation: setLocation,
    useGeolocation: useGeolocation,
    reset: reset
  };
}

// ─── Tiny airport lookup (IATA + city) ──────────────────────────
// Covers the busiest North-American + intl airports relevant to SFO/OAK/SJC traffic.
var AIRPORTS = {
  KSFO: {
    iata: 'SFO',
    city: 'San Francisco'
  },
  KOAK: {
    iata: 'OAK',
    city: 'Oakland'
  },
  KSJC: {
    iata: 'SJC',
    city: 'San Jose'
  },
  KLAX: {
    iata: 'LAX',
    city: 'Los Angeles'
  },
  KSAN: {
    iata: 'SAN',
    city: 'San Diego'
  },
  KSNA: {
    iata: 'SNA',
    city: 'Santa Ana'
  },
  KBUR: {
    iata: 'BUR',
    city: 'Burbank'
  },
  KLAS: {
    iata: 'LAS',
    city: 'Las Vegas'
  },
  KPHX: {
    iata: 'PHX',
    city: 'Phoenix'
  },
  KSEA: {
    iata: 'SEA',
    city: 'Seattle'
  },
  KPDX: {
    iata: 'PDX',
    city: 'Portland'
  },
  KDEN: {
    iata: 'DEN',
    city: 'Denver'
  },
  KSLC: {
    iata: 'SLC',
    city: 'Salt Lake City'
  },
  KORD: {
    iata: 'ORD',
    city: 'Chicago'
  },
  KDFW: {
    iata: 'DFW',
    city: 'Dallas'
  },
  KIAH: {
    iata: 'IAH',
    city: 'Houston'
  },
  KATL: {
    iata: 'ATL',
    city: 'Atlanta'
  },
  KJFK: {
    iata: 'JFK',
    city: 'New York'
  },
  KEWR: {
    iata: 'EWR',
    city: 'Newark'
  },
  KBOS: {
    iata: 'BOS',
    city: 'Boston'
  },
  KIAD: {
    iata: 'IAD',
    city: 'Washington'
  },
  KDCA: {
    iata: 'DCA',
    city: 'Washington'
  },
  KMIA: {
    iata: 'MIA',
    city: 'Miami'
  },
  KMSP: {
    iata: 'MSP',
    city: 'Minneapolis'
  },
  KDTW: {
    iata: 'DTW',
    city: 'Detroit'
  },
  KMCO: {
    iata: 'MCO',
    city: 'Orlando'
  },
  KAUS: {
    iata: 'AUS',
    city: 'Austin'
  },
  KSMF: {
    iata: 'SMF',
    city: 'Sacramento'
  },
  KFAT: {
    iata: 'FAT',
    city: 'Fresno'
  },
  KRNO: {
    iata: 'RNO',
    city: 'Reno'
  },
  KMRY: {
    iata: 'MRY',
    city: 'Monterey'
  },
  KSBA: {
    iata: 'SBA',
    city: 'Santa Barbara'
  },
  KHNL: {
    iata: 'HNL',
    city: 'Honolulu'
  },
  PHNL: {
    iata: 'HNL',
    city: 'Honolulu'
  },
  PHOG: {
    iata: 'OGG',
    city: 'Maui'
  },
  PHKO: {
    iata: 'KOA',
    city: 'Kona'
  },
  PHLI: {
    iata: 'LIH',
    city: 'Kauai'
  },
  CYVR: {
    iata: 'YVR',
    city: 'Vancouver'
  },
  CYYZ: {
    iata: 'YYZ',
    city: 'Toronto'
  },
  MMMX: {
    iata: 'MEX',
    city: 'Mexico City'
  },
  MMSD: {
    iata: 'SJD',
    city: 'Los Cabos'
  },
  MMPR: {
    iata: 'PVR',
    city: 'Puerto Vallarta'
  },
  RJTT: {
    iata: 'HND',
    city: 'Tokyo'
  },
  RJAA: {
    iata: 'NRT',
    city: 'Tokyo'
  },
  RKSI: {
    iata: 'ICN',
    city: 'Seoul'
  },
  ZBAA: {
    iata: 'PEK',
    city: 'Beijing'
  },
  ZSPD: {
    iata: 'PVG',
    city: 'Shanghai'
  },
  VHHH: {
    iata: 'HKG',
    city: 'Hong Kong'
  },
  WSSS: {
    iata: 'SIN',
    city: 'Singapore'
  },
  YSSY: {
    iata: 'SYD',
    city: 'Sydney'
  },
  EGLL: {
    iata: 'LHR',
    city: 'London'
  },
  LFPG: {
    iata: 'CDG',
    city: 'Paris'
  },
  EDDF: {
    iata: 'FRA',
    city: 'Frankfurt'
  },
  EHAM: {
    iata: 'AMS',
    city: 'Amsterdam'
  },
  KPSP: {
    iata: 'PSP',
    city: 'Palm Springs'
  },
  KSTS: {
    iata: 'STS',
    city: 'Santa Rosa'
  },
  KCIC: {
    iata: 'CIC',
    city: 'Chico'
  },
  KMOD: {
    iata: 'MOD',
    city: 'Modesto'
  },
  KSCK: {
    iata: 'SCK',
    city: 'Stockton'
  },
  KCCR: {
    iata: 'CCR',
    city: 'Concord'
  },
  KHWD: {
    iata: 'HWD',
    city: 'Hayward'
  },
  KLVK: {
    iata: 'LVK',
    city: 'Livermore'
  },
  KSQL: {
    iata: 'SQL',
    city: 'San Carlos'
  },
  KPAO: {
    iata: 'PAO',
    city: 'Palo Alto'
  }
};
function lookupAirport(icao) {
  if (!icao) return null;
  var a = AIRPORTS[icao.toUpperCase()];
  if (a) return a;
  // ICAO codes starting with K are US — strip the K to fake an IATA.
  if (icao.startsWith('K') && icao.length === 4) {
    return {
      iata: icao.slice(1),
      city: null
    };
  }
  return {
    iata: icao,
    city: null
  };
}

// Airline lookup from callsign prefix (3-letter ICAO).
var AIRLINES = {
  UAL: 'United',
  AAL: 'American',
  DAL: 'Delta',
  SWA: 'Southwest',
  ASA: 'Alaska',
  JBU: 'JetBlue',
  NKS: 'Spirit',
  FFT: 'Frontier',
  SKW: 'SkyWest',
  RPA: 'Republic',
  HAL: 'Hawaiian',
  ENY: 'Envoy',
  QXE: 'Horizon',
  EJA: 'NetJets',
  XOJ: 'XO',
  FDX: 'FedEx',
  UPS: 'UPS',
  GTI: 'Atlas',
  GEC: 'Lufthansa Cargo',
  ACA: 'Air Canada',
  WJA: 'WestJet',
  AMX: 'Aeroméxico',
  VOI: 'Volaris',
  ANA: 'ANA',
  JAL: 'JAL',
  KAL: 'Korean',
  SIA: 'Singapore',
  CPA: 'Cathay',
  BAW: 'British Airways',
  AFR: 'Air France',
  DLH: 'Lufthansa',
  KLM: 'KLM',
  QFA: 'Qantas',
  VIR: 'Virgin Atlantic',
  EVA: 'EVA Air',
  CCA: 'Air China',
  PAL: 'Philippine',
  THA: 'Thai',
  QTR: 'Qatar',
  UAE: 'Emirates'
};
function airlineFromCallsign(cs) {
  if (!cs) return null;
  var prefix = cs.slice(0, 3).toUpperCase();
  return AIRLINES[prefix] || null;
}

// ─── Geo math ───────────────────────────────────────────────────
function haversineNm(a, b) {
  var R = 3440.065; // nautical miles
  var toRad = function toRad(d) {
    return d * Math.PI / 180;
  };
  var dLat = toRad(b.lat - a.lat);
  var dLon = toRad(b.lon - a.lon);
  var lat1 = toRad(a.lat),
    lat2 = toRad(b.lat);
  var x = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
  return 2 * R * Math.asin(Math.sqrt(x));
}
function bearingFromPoint(from, to) {
  var toRad = function toRad(d) {
    return d * Math.PI / 180;
  };
  var toDeg = function toDeg(r) {
    return r * 180 / Math.PI;
  };
  var φ1 = toRad(from.lat),
    φ2 = toRad(to.lat);
  var λ1 = toRad(from.lon),
    λ2 = toRad(to.lon);
  var y = Math.sin(λ2 - λ1) * Math.cos(φ2);
  var x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
// Backwards-compat
function bearingFromHouse(p) {
  return bearingFromPoint(HOUSE, p);
}
function compassFromBearing(bearing) {
  var dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(bearing / 45) % 8];
}
function altCategory(altFt) {
  if (!altFt || altFt === 'ground') return 'ground';
  if (altFt < 5000) return 'low'; // very overhead, descending/climbing
  if (altFt < 15000) return 'mid';
  if (altFt < 30000) return 'high';
  return 'cruise';
}

// ─── Live data hook ─────────────────────────────────────────────
// Polls adsb.lol every `intervalMs` for aircraft within `radiusNm` of the house.
// Enriches each plane with: distNm, bearing, compass, airline, plus origin/dest
// (lazy-loaded from the route endpoint and cached).
var ROUTE_CACHE = new Map(); // callsign -> {origin, destination}
function fetchRoute(_x5, _x6, _x7) {
  return _fetchRoute.apply(this, arguments);
}
function _fetchRoute() {
  _fetchRoute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(callsign, lat, lon) {
    var cs, r, j, hit, route, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          if (callsign) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, null);
        case 1:
          cs = callsign.trim();
          if (cs) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, null);
        case 2:
          if (!ROUTE_CACHE.has(cs)) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, ROUTE_CACHE.get(cs));
        case 3:
          _context5.p = 3;
          _context5.n = 4;
          return fetch("https://api.adsb.lol/api/0/routeset", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              planes: [{
                callsign: cs,
                lat: lat,
                lng: lon
              }]
            })
          });
        case 4:
          r = _context5.v;
          if (r.ok) {
            _context5.n = 5;
            break;
          }
          ROUTE_CACHE.set(cs, null);
          return _context5.a(2, null);
        case 5:
          _context5.n = 6;
          return r.json();
        case 6:
          j = _context5.v;
          hit = Array.isArray(j) ? j[0] : null;
          if (!(hit && hit._airports && hit._airports.length >= 2)) {
            _context5.n = 7;
            break;
          }
          route = {
            origin: hit._airports[0],
            destination: hit._airports[hit._airports.length - 1]
          };
          ROUTE_CACHE.set(cs, route);
          return _context5.a(2, route);
        case 7:
          _context5.n = 9;
          break;
        case 8:
          _context5.p = 8;
          _t4 = _context5.v;
        case 9:
          ROUTE_CACHE.set(cs, null);
          return _context5.a(2, null);
      }
    }, _callee5, null, [[3, 8]]);
  }));
  return _fetchRoute.apply(this, arguments);
}
function useFlights() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$radiusNm = _ref2.radiusNm,
    radiusNm = _ref2$radiusNm === void 0 ? 25 : _ref2$radiusNm,
    _ref2$intervalMs = _ref2.intervalMs,
    intervalMs = _ref2$intervalMs === void 0 ? 8000 : _ref2$intervalMs,
    _ref2$demo = _ref2.demo,
    demo = _ref2$demo === void 0 ? false : _ref2$demo,
    _ref2$location = _ref2.location,
    location = _ref2$location === void 0 ? DEFAULT_LOCATION : _ref2$location,
    _ref2$trailLengthSec = _ref2.trailLengthSec,
    trailLengthSec = _ref2$trailLengthSec === void 0 ? 60 : _ref2$trailLengthSec;
  var _React$useState5 = React.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    planes = _React$useState6[0],
    setPlanes = _React$useState6[1];
  var _React$useState7 = React.useState('connecting'),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    status = _React$useState8[0],
    setStatus = _React$useState8[1]; // connecting | live | error | demo
  var _React$useState9 = React.useState(null),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    lastUpdate = _React$useState0[0],
    setLastUpdate = _React$useState0[1];
  var routesRef = React.useRef({}); // callsign -> route
  var trailsRef = React.useRef({}); // hex -> [{lat, lon, t}]
  var locRef = React.useRef(location);
  locRef.current = location;
  var tick = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var loc, url, r, j, list, now, cutoff, seen, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          loc = locRef.current;
          if (!demo) {
            _context2.n = 1;
            break;
          }
          setPlanes(generateDemoPlanes(loc));
          setStatus('demo');
          setLastUpdate(new Date());
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          url = "https://api.adsb.lol/v2/lat/".concat(loc.lat, "/lon/").concat(loc.lon, "/dist/").concat(radiusNm);
          _context2.n = 2;
          return fetch(url);
        case 2:
          r = _context2.v;
          if (r.ok) {
            _context2.n = 3;
            break;
          }
          throw new Error('HTTP ' + r.status);
        case 3:
          _context2.n = 4;
          return r.json();
        case 4:
          j = _context2.v;
          list = (j.ac || []).filter(function (a) {
            return a.lat != null && a.lon != null;
          }).map(function (a) {
            return normalizePlane(a, loc);
          }).sort(function (a, b) {
            return a.distNm - b.distNm;
          }); // Update trails: append current position, prune older than trailLengthSec.
          now = Date.now();
          cutoff = now - trailLengthSec * 1000;
          seen = new Set();
          list.forEach(function (p) {
            seen.add(p.hex);
            var arr = trailsRef.current[p.hex] || [];
            var last = arr[arr.length - 1];
            // Skip duplicate positions (no movement) to keep trails clean.
            if (!last || last.lat !== p.lat || last.lon !== p.lon) {
              arr.push({
                lat: p.lat,
                lon: p.lon,
                t: now
              });
            }
            // Prune old.
            while (arr.length && arr[0].t < cutoff) arr.shift();
            trailsRef.current[p.hex] = arr;
            p.trail = arr;
          });
          // Drop trails for planes no longer in view.
          Object.keys(trailsRef.current).forEach(function (h) {
            if (!seen.has(h)) delete trailsRef.current[h];
          });

          // Kick off route lookups in the background for the closest 12.
          list.slice(0, 12).forEach(function (p) {
            if (!p.flight) return;
            if (routesRef.current[p.flight] !== undefined) return;
            routesRef.current[p.flight] = null; // mark in-flight
            fetchRoute(p.flight, p.lat, p.lon).then(function (route) {
              routesRef.current[p.flight] = route;
              setPlanes(function (prev) {
                return prev.map(function (q) {
                  return q.flight === p.flight ? _objectSpread(_objectSpread({}, q), {}, {
                    route: route
                  }) : q;
                });
              });
            });
          });

          // Attach already-cached routes.
          list.forEach(function (p) {
            if (p.flight && routesRef.current[p.flight]) p.route = routesRef.current[p.flight];
          });
          setPlanes(list);
          setStatus('live');
          setLastUpdate(new Date());
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.warn('adsb.lol fetch failed', _t2);
          // Fall back to demo so the UI never goes blank.
          setPlanes(generateDemoPlanes(locRef.current));
          setStatus('error');
          setLastUpdate(new Date());
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5]]);
  })), [radiusNm, demo]);
  React.useEffect(function () {
    tick();
    var id = setInterval(tick, intervalMs);
    return function () {
      return clearInterval(id);
    };
  }, [tick, intervalMs, location.lat, location.lon]);
  return {
    planes: planes,
    status: status,
    lastUpdate: lastUpdate,
    house: HOUSE,
    refresh: tick
  };
}
function normalizePlane(a) {
  var _ref4, _a$alt_baro, _a$gs, _ref5, _a$track, _ref6, _a$baro_rate;
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HOUSE;
  var lat = a.lat,
    lon = a.lon;
  var altFt = a.alt_baro === 'ground' ? 0 : (_ref4 = (_a$alt_baro = a.alt_baro) !== null && _a$alt_baro !== void 0 ? _a$alt_baro : a.alt_geom) !== null && _ref4 !== void 0 ? _ref4 : null;
  var distNm = haversineNm(loc, {
    lat: lat,
    lon: lon
  });
  var bearing = bearingFromPoint(loc, {
    lat: lat,
    lon: lon
  });
  var callsign = (a.flight || '').trim();
  return {
    hex: a.hex,
    flight: callsign,
    registration: a.r,
    type: a.t,
    // ICAO aircraft type, e.g. "B738"
    description: a.desc || prettyAircraft(a.t),
    lat: lat,
    lon: lon,
    altFt: altFt,
    altCategory: altCategory(altFt),
    speedKt: (_a$gs = a.gs) !== null && _a$gs !== void 0 ? _a$gs : null,
    track: (_ref5 = (_a$track = a.track) !== null && _a$track !== void 0 ? _a$track : a.true_heading) !== null && _ref5 !== void 0 ? _ref5 : null,
    verticalRate: (_ref6 = (_a$baro_rate = a.baro_rate) !== null && _a$baro_rate !== void 0 ? _a$baro_rate : a.geom_rate) !== null && _ref6 !== void 0 ? _ref6 : null,
    squawk: a.squawk,
    onGround: a.alt_baro === 'ground',
    distNm: distNm,
    bearing: bearing,
    compass: compassFromBearing(bearing),
    airline: airlineFromCallsign(callsign),
    route: null
  };
}
function prettyAircraft(t) {
  if (!t) return null;
  var map = {
    B737: 'Boeing 737',
    B738: 'Boeing 737-800',
    B739: 'Boeing 737-900',
    B38M: 'Boeing 737 MAX 8',
    B39M: 'Boeing 737 MAX 9',
    B752: 'Boeing 757-200',
    B763: 'Boeing 767-300',
    B772: 'Boeing 777-200',
    B773: 'Boeing 777-300',
    B77W: 'Boeing 777-300ER',
    B788: 'Boeing 787-8',
    B789: 'Boeing 787-9',
    B78X: 'Boeing 787-10',
    A319: 'Airbus A319',
    A20N: 'Airbus A320neo',
    A320: 'Airbus A320',
    A321: 'Airbus A321',
    A21N: 'Airbus A321neo',
    A332: 'Airbus A330-200',
    A333: 'Airbus A330-300',
    A359: 'Airbus A350-900',
    A35K: 'Airbus A350-1000',
    E170: 'Embraer 170',
    E75L: 'Embraer 175',
    E75S: 'Embraer 175',
    E190: 'Embraer 190',
    E195: 'Embraer 195',
    CRJ2: 'CRJ-200',
    CRJ7: 'CRJ-700',
    CRJ9: 'CRJ-900',
    C172: 'Cessna 172',
    C208: 'Cessna 208',
    C25A: 'Citation CJ2',
    PC12: 'Pilatus PC-12',
    PC24: 'Pilatus PC-24',
    GLF5: 'Gulfstream G550',
    GLF6: 'Gulfstream G650'
  };
  return map[t] || t;
}

// ─── Demo data (used when API fails or demo flag set) ───────────
function generateDemoPlanes() {
  var loc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HOUSE;
  // Generate planes around the active location with realistic offsets.
  var seeds = [{
    off: [0.00, -0.02],
    altFt: 3200,
    speedKt: 210,
    track: 280,
    flight: 'UAL245',
    type: 'B738',
    route: {
      origin: {
        iata: 'OAK',
        name: 'Oakland'
      },
      destination: {
        iata: 'LAX',
        name: 'Los Angeles'
      }
    }
  }, {
    off: [0.04, 0.05],
    altFt: 8400,
    speedKt: 340,
    track: 120,
    flight: 'SWA1893',
    type: 'B38M',
    route: {
      origin: {
        iata: 'SAN',
        name: 'San Diego'
      },
      destination: {
        iata: 'OAK',
        name: 'Oakland'
      }
    }
  }, {
    off: [-0.05, -0.09],
    altFt: 14200,
    speedKt: 380,
    track: 355,
    flight: 'ASA512',
    type: 'A20N',
    route: {
      origin: {
        iata: 'SFO',
        name: 'San Francisco'
      },
      destination: {
        iata: 'SEA',
        name: 'Seattle'
      }
    }
  }, {
    off: [0.07, -0.11],
    altFt: 22000,
    speedKt: 430,
    track: 90,
    flight: 'DAL2104',
    type: 'B752',
    route: {
      origin: {
        iata: 'SFO',
        name: 'San Francisco'
      },
      destination: {
        iata: 'JFK',
        name: 'New York'
      }
    }
  }, {
    off: [-0.08, 0.05],
    altFt: 6800,
    speedKt: 280,
    track: 60,
    flight: 'FDX1290',
    type: 'B763',
    route: {
      origin: {
        iata: 'OAK',
        name: 'Oakland'
      },
      destination: {
        iata: 'MEM',
        name: 'Memphis'
      }
    }
  }, {
    off: [0.13, -0.19],
    altFt: 31000,
    speedKt: 460,
    track: 80,
    flight: 'JBU1842',
    type: 'A321',
    route: {
      origin: {
        iata: 'SFO',
        name: 'San Francisco'
      },
      destination: {
        iata: 'BOS',
        name: 'Boston'
      }
    }
  }, {
    off: [-0.01, 0.11],
    altFt: 11500,
    speedKt: 330,
    track: 200,
    flight: 'SKW3211',
    type: 'E75L',
    route: {
      origin: {
        iata: 'SMF',
        name: 'Sacramento'
      },
      destination: {
        iata: 'BUR',
        name: 'Burbank'
      }
    }
  }, {
    off: [-0.14, -0.17],
    altFt: 18000,
    speedKt: 400,
    track: 240,
    flight: 'HAL19',
    type: 'A332',
    route: {
      origin: {
        iata: 'OAK',
        name: 'Oakland'
      },
      destination: {
        iata: 'HNL',
        name: 'Honolulu'
      }
    }
  }];
  return seeds.map(function (s, i) {
    var lat = loc.lat + s.off[0];
    var lon = loc.lon + s.off[1];
    var distNm = haversineNm(loc, {
      lat: lat,
      lon: lon
    });
    var bearing = bearingFromPoint(loc, {
      lat: lat,
      lon: lon
    });
    // Synthesize a back-trail by walking ~7 steps backward along the heading.
    var trail = [];
    var θ = (s.track || 0) * Math.PI / 180;
    var stepDeg = 0.0035;
    var now = Date.now();
    for (var j = 7; j >= 0; j--) {
      trail.push({
        lat: lat - Math.cos(θ) * stepDeg * j,
        lon: lon - Math.sin(θ) * stepDeg * j / Math.cos(lat * Math.PI / 180),
        t: now - j * 8000
      });
    }
    return {
      hex: ('demo' + i).padStart(6, '0'),
      flight: s.flight,
      type: s.type,
      route: s.route,
      lat: lat,
      lon: lon,
      altFt: s.altFt,
      speedKt: s.speedKt,
      track: s.track,
      registration: 'N' + (1000 + i * 123).toString().slice(0, 4) + 'XY',
      description: prettyAircraft(s.type),
      altCategory: altCategory(s.altFt),
      verticalRate: (i % 3 - 1) * 200,
      onGround: false,
      distNm: distNm,
      bearing: bearing,
      compass: compassFromBearing(bearing),
      airline: airlineFromCallsign(s.flight),
      trail: trail
    };
  }).sort(function (a, b) {
    return a.distNm - b.distNm;
  });
}

// ─── Format helpers ─────────────────────────────────────────────
var fmt = {
  alt: function alt(ft) {
    return ft == null ? '—' : ft === 0 ? 'ground' : ft.toLocaleString() + ' ft';
  },
  altShort: function altShort(ft) {
    return ft == null ? '—' : ft === 0 ? 'GND' : Math.round(ft / 100) + ' FL';
  },
  speed: function speed(kt) {
    return kt == null ? '—' : Math.round(kt) + ' kt';
  },
  mph: function mph(kt) {
    return kt == null ? '—' : Math.round(kt * 1.151) + ' mph';
  },
  dist: function dist(nm) {
    return nm == null ? '—' : nm < 1 ? (nm * 6076 | 0) + ' ft' : nm.toFixed(1) + ' nm';
  },
  bearing: function bearing(deg) {
    return deg == null ? '—' : Math.round(deg) + '°';
  },
  flight: function flight(cs) {
    return cs ? cs.replace(/\s+/g, '') : '—';
  }
};

// ─── Aircraft photo lookup (planespotters.net) ─────────────────
// Free, no key, requires attribution per their terms.
var PHOTO_CACHE = new Map(); // hex -> { thumb, link, photographer } or null
function fetchAircraftPhoto(_x8) {
  return _fetchAircraftPhoto.apply(this, arguments);
}
function _fetchAircraftPhoto() {
  _fetchAircraftPhoto = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(hex) {
    var k, _p$thumbnail_large, _p$thumbnail, r, j, p, out, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          if (hex) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, null);
        case 1:
          k = hex.toLowerCase();
          if (!PHOTO_CACHE.has(k)) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, PHOTO_CACHE.get(k));
        case 2:
          _context6.p = 2;
          _context6.n = 3;
          return fetch("https://api.planespotters.net/pub/photos/hex/".concat(k));
        case 3:
          r = _context6.v;
          if (r.ok) {
            _context6.n = 4;
            break;
          }
          PHOTO_CACHE.set(k, null);
          return _context6.a(2, null);
        case 4:
          _context6.n = 5;
          return r.json();
        case 5:
          j = _context6.v;
          p = (j.photos || [])[0];
          if (p) {
            _context6.n = 6;
            break;
          }
          PHOTO_CACHE.set(k, null);
          return _context6.a(2, null);
        case 6:
          out = {
            thumb: ((_p$thumbnail_large = p.thumbnail_large) === null || _p$thumbnail_large === void 0 ? void 0 : _p$thumbnail_large.src) || ((_p$thumbnail = p.thumbnail) === null || _p$thumbnail === void 0 ? void 0 : _p$thumbnail.src),
            link: p.link,
            photographer: p.photographer
          };
          PHOTO_CACHE.set(k, out);
          return _context6.a(2, out);
        case 7:
          _context6.p = 7;
          _t5 = _context6.v;
          PHOTO_CACHE.set(k, null);
          return _context6.a(2, null);
      }
    }, _callee6, null, [[2, 7]]);
  }));
  return _fetchAircraftPhoto.apply(this, arguments);
}
function useAircraftPhoto(hex) {
  var _React$useState1 = React.useState(null),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    photo = _React$useState10[0],
    setPhoto = _React$useState10[1];
  React.useEffect(function () {
    var cancelled = false;
    setPhoto(null);
    if (!hex) return;
    fetchAircraftPhoto(hex).then(function (p) {
      if (!cancelled) setPhoto(p);
    });
    return function () {
      cancelled = true;
    };
  }, [hex]);
  return photo;
}
Object.assign(window, {
  useFlights: useFlights,
  useLocation: useLocation,
  useAircraftPhoto: useAircraftPhoto,
  fetchAircraftPhoto: fetchAircraftPhoto,
  HOUSE: HOUSE,
  DEFAULT_LOCATION: DEFAULT_LOCATION,
  lookupAirport: lookupAirport,
  airlineFromCallsign: airlineFromCallsign,
  haversineNm: haversineNm,
  bearingFromHouse: bearingFromHouse,
  bearingFromPoint: bearingFromPoint,
  compassFromBearing: compassFromBearing,
  altCategory: altCategory,
  fmt: fmt,
  generateDemoPlanes: generateDemoPlanes,
  geocode: geocode,
  reverseGeocode: reverseGeocode
});

// ─────── shared-map.jsx ───────
"use strict";

// shared-map.jsx
// Leaflet map shared by all variants. Imports Leaflet via global L (loaded in HTML).
// Renders: house marker, plane markers (rotated icons), optional flight paths,
// optional airspace circle, terrain/light/dark tile layers.
//
// Props:
//   planes, house, focusedHex, onSelect, mapStyle ('light'|'dark'|'terrain'),
//   showPaths, timeOfDay (0-1, 0=midnight, .5=noon), height

var TILE_LAYERS = {
  light: {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attr: '&copy; OSM &copy; CARTO',
    bgWrap: '#f6f4ef'
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attr: '&copy; OSM &copy; CARTO',
    bgWrap: '#0e0f12'
  },
  terrain: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attr: '&copy; OpenTopoMap',
    bgWrap: '#e5dfd0'
  }
};
function planeIcon(_ref) {
  var _ref$track = _ref.track,
    track = _ref$track === void 0 ? 0 : _ref$track,
    _ref$altCategory = _ref.altCategory,
    altCategory = _ref$altCategory === void 0 ? 'mid' : _ref$altCategory,
    _ref$focused = _ref.focused,
    focused = _ref$focused === void 0 ? false : _ref$focused,
    _ref$dim = _ref.dim,
    dim = _ref$dim === void 0 ? false : _ref$dim,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? null : _ref$color;
  // Default color from altitude — low=warm, high=cool. Override with `color`.
  var palette = color || {
    ground: '#9ca3af',
    low: '#dc6a3a',
    mid: '#d99a3a',
    high: '#5b9bd5',
    cruise: '#7a6fd0'
  }[altCategory] || '#444';
  var stroke = focused ? '#111' : 'rgba(0,0,0,0.4)';
  var sw = focused ? 1.6 : 1;
  var opacity = dim ? 0.35 : 1;
  var size = focused ? 30 : 20;
  var html = "\n    <div style=\"\n      width:".concat(size, "px;height:").concat(size, "px;\n      transform:rotate(").concat(track, "deg);\n      transition:transform .5s linear;\n      opacity:").concat(opacity, ";\n      filter:").concat(focused ? 'drop-shadow(0 0 6px rgba(0,0,0,.35))' : 'none', ";\n    \">\n      <svg viewBox=\"0 0 24 24\" width=\"").concat(size, "\" height=\"").concat(size, "\" style=\"overflow:visible\">\n        <path d=\"M12 2 L13.5 9 L22 11.2 L22 13 L13.5 12.2 L13 18 L16 19.5 L16 21 L12 20.2 L8 21 L8 19.5 L11 18 L10.5 12.2 L2 13 L2 11.2 L10.5 9 Z\"\n          fill=\"").concat(palette, "\" stroke=\"").concat(stroke, "\" stroke-width=\"").concat(sw, "\" stroke-linejoin=\"round\"/>\n        ").concat(focused ? "<circle cx=\"12\" cy=\"12\" r=\"14\" fill=\"none\" stroke=\"".concat(palette, "\" stroke-width=\"1.4\" stroke-dasharray=\"2 3\" opacity=\".7\"/>") : '', "\n      </svg>\n    </div>\n  ");
  return L.divIcon({
    html: html,
    className: 'plane-divicon',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}
function houseMarker() {
  var html = "\n    <div style=\"position:relative;width:34px;height:34px\">\n      <div style=\"position:absolute;inset:0;border-radius:50%;background:rgba(201,100,66,.18);animation:pulseRing 2.4s ease-out infinite\"></div>\n      <div style=\"position:absolute;left:7px;top:7px;width:20px;height:20px;border-radius:50%;background:#c96442;box-shadow:0 0 0 3px #fff,0 2px 6px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:#fff;font:600 11px ui-sans-serif,system-ui\">\u2302</div>\n    </div>\n  ";
  return L.divIcon({
    html: html,
    className: 'house-divicon',
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}
if (typeof document !== 'undefined' && !document.getElementById('shared-map-styles')) {
  var s = document.createElement('style');
  s.id = 'shared-map-styles';
  s.textContent = "\n    @keyframes pulseRing{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.6);opacity:0}}\n    .plane-divicon,.house-divicon{background:none!important;border:none!important}\n    .leaflet-container{font-family:ui-sans-serif,system-ui,-apple-system,sans-serif!important;background:#eee}\n    .leaflet-control-attribution{font-size:9px!important;background:rgba(255,255,255,.6)!important;padding:1px 4px!important}\n    .leaflet-tile-container img{transition:filter .3s}\n    .map-tint::after{content:'';position:absolute;inset:0;pointer-events:none;z-index:400;mix-blend-mode:multiply}\n  ";
  document.head.appendChild(s);
}
function SharedMap(_ref2) {
  var _ref2$planes = _ref2.planes,
    planes = _ref2$planes === void 0 ? [] : _ref2$planes,
    house = _ref2.house,
    focusedHex = _ref2.focusedHex,
    onSelect = _ref2.onSelect,
    _ref2$mapStyle = _ref2.mapStyle,
    mapStyle = _ref2$mapStyle === void 0 ? 'light' : _ref2$mapStyle,
    _ref2$showPaths = _ref2.showPaths,
    showPaths = _ref2$showPaths === void 0 ? false : _ref2$showPaths,
    _ref2$showTrails = _ref2.showTrails,
    showTrails = _ref2$showTrails === void 0 ? false : _ref2$showTrails,
    _ref2$timeOfDay = _ref2.timeOfDay,
    timeOfDay = _ref2$timeOfDay === void 0 ? 0.5 : _ref2$timeOfDay,
    _ref2$zoom = _ref2.zoom,
    zoom = _ref2$zoom === void 0 ? 11 : _ref2$zoom,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? 320 : _ref2$height,
    _ref2$planeColor = _ref2.planeColor,
    planeColor = _ref2$planeColor === void 0 ? null : _ref2$planeColor,
    _ref2$showAirspace = _ref2.showAirspace,
    showAirspace = _ref2$showAirspace === void 0 ? false : _ref2$showAirspace,
    _ref2$bgWrap = _ref2.bgWrap,
    bgWrap = _ref2$bgWrap === void 0 ? null : _ref2$bgWrap,
    _ref2$dimUnfocused = _ref2.dimUnfocused,
    dimUnfocused = _ref2$dimUnfocused === void 0 ? false : _ref2$dimUnfocused,
    _ref2$interactive = _ref2.interactive,
    interactive = _ref2$interactive === void 0 ? true : _ref2$interactive,
    _ref2$scrollWheelZoom = _ref2.scrollWheelZoom,
    scrollWheelZoom = _ref2$scrollWheelZoom === void 0 ? false : _ref2$scrollWheelZoom;
  var ref = React.useRef(null);
  var mapRef = React.useRef(null);
  var tileRef = React.useRef(null);
  var layersRef = React.useRef({});

  // Init map
  React.useEffect(function () {
    if (!ref.current || mapRef.current) return;
    var map = L.map(ref.current, {
      zoomControl: interactive,
      attributionControl: true,
      dragging: interactive,
      touchZoom: interactive,
      doubleClickZoom: interactive,
      scrollWheelZoom: scrollWheelZoom || interactive,
      boxZoom: false,
      keyboard: false,
      tap: interactive
    }).setView([house.lat, house.lon], zoom);
    mapRef.current = map;
    layersRef.current.tiles = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      attribution: TILE_LAYERS[mapStyle].attr,
      maxZoom: 18
    }).addTo(map);
    tileRef.current = layersRef.current.tiles;
    layersRef.current.house = L.marker([house.lat, house.lon], {
      icon: houseMarker(),
      interactive: false
    }).addTo(map);
    layersRef.current.airspace = L.circle([house.lat, house.lon], {
      radius: 5 * 1852,
      color: '#c96442',
      weight: 1,
      dashArray: '4 4',
      fill: false,
      opacity: 0.5
    });
    layersRef.current.planes = L.layerGroup().addTo(map);
    layersRef.current.paths = L.layerGroup().addTo(map);
    layersRef.current.trails = L.layerGroup().addTo(map);
    return function () {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Switch map style
  React.useEffect(function () {
    var map = mapRef.current;
    if (!map) return;
    if (tileRef.current) map.removeLayer(tileRef.current);
    tileRef.current = L.tileLayer(TILE_LAYERS[mapStyle].url, {
      attribution: TILE_LAYERS[mapStyle].attr,
      maxZoom: 18
    }).addTo(map);
  }, [mapStyle]);

  // Recenter when the user changes location (and move the house marker).
  React.useEffect(function () {
    var map = mapRef.current;
    if (!map) return;
    var ll = [house.lat, house.lon];
    map.setView(ll, zoom);
    if (layersRef.current.house) layersRef.current.house.setLatLng(ll);
    if (layersRef.current.airspace) layersRef.current.airspace.setLatLng(ll);
  }, [house.lat, house.lon]);

  // Time of day tint via CSS filter on tile pane.
  React.useEffect(function () {
    var map = mapRef.current;
    if (!map) return;
    var pane = map.getPane('tilePane');
    if (!pane) return;
    // 0 midnight, .25 dawn, .5 noon, .75 dusk, 1 night
    var t = timeOfDay;
    var filter = 'none';
    if (t < 0.2) filter = 'brightness(.6) saturate(.7) hue-rotate(220deg)';else if (t < 0.35) filter = 'brightness(.9) saturate(1.1) sepia(.15) hue-rotate(-10deg)';else if (t < 0.65) filter = 'none';else if (t < 0.8) filter = 'sepia(.25) saturate(1.1) brightness(.95) hue-rotate(-15deg)';else filter = 'brightness(.55) saturate(.6) hue-rotate(220deg)';
    pane.style.filter = filter;
  }, [timeOfDay, mapStyle]);

  // Airspace toggle
  React.useEffect(function () {
    var map = mapRef.current;
    if (!map) return;
    var a = layersRef.current.airspace;
    if (showAirspace && !map.hasLayer(a)) a.addTo(map);else if (!showAirspace && map.hasLayer(a)) map.removeLayer(a);
  }, [showAirspace]);

  // Update plane markers
  React.useEffect(function () {
    var grp = layersRef.current.planes;
    if (!grp) return;
    grp.clearLayers();
    planes.forEach(function (p) {
      var focused = p.hex === focusedHex;
      var m = L.marker([p.lat, p.lon], {
        icon: planeIcon({
          track: p.track || 0,
          altCategory: p.altCategory,
          focused: focused,
          dim: dimUnfocused && !focused,
          color: planeColor
        }),
        zIndexOffset: focused ? 1000 : 0,
        riseOnHover: true
      });
      m.on('click', function () {
        return onSelect && onSelect(p);
      });
      grp.addLayer(m);
    });
  }, [planes, focusedHex, planeColor, dimUnfocused, onSelect]);

  // Past trails (last ~60s of positions) — rendered as fading polylines.
  React.useEffect(function () {
    var grp = layersRef.current.trails;
    if (!grp) return;
    grp.clearLayers();
    if (!showTrails) return;
    var now = Date.now();
    planes.forEach(function (p) {
      var trail = p.trail;
      if (!trail || trail.length < 2) return;
      var focused = p.hex === focusedHex;
      // Build segments so we can fade each one.
      for (var i = 0; i < trail.length - 1; i++) {
        var a = trail[i],
          b = trail[i + 1];
        var ageRatio = 1 - (now - b.t) / 60000; // 1 = newest, 0 = oldest
        var opacity = Math.max(0.05, ageRatio * (focused ? 0.95 : 0.55));
        var weight = focused ? 2.4 : 1.6;
        var color = focused ? '#5fd3a3' : mapStyle === 'dark' ? '#9bb0c5' : '#8b95a3';
        L.polyline([[a.lat, a.lon], [b.lat, b.lon]], {
          color: color,
          weight: weight,
          opacity: opacity,
          lineCap: 'round',
          interactive: false
        }).addTo(grp);
      }
    });
  }, [planes, focusedHex, showTrails, mapStyle]);

  // Flight paths (forward projection)
  React.useEffect(function () {
    var grp = layersRef.current.paths;
    if (!grp) return;
    grp.clearLayers();
    if (!showPaths) return;
    planes.forEach(function (p) {
      if (!p.track || !p.speedKt) return;
      // Project a 5-min path forward from current position.
      var dist = p.speedKt * 5 / 60 / 60; // degrees-ish; rough but visual
      var rad = (p.track - 90) * Math.PI / 180; // track is heading from N
      var θ = p.track * Math.PI / 180;
      var dLat = Math.cos(θ) * dist;
      var dLon = Math.sin(θ) * dist / Math.cos(p.lat * Math.PI / 180);
      var focused = p.hex === focusedHex;
      L.polyline([[p.lat, p.lon], [p.lat + dLat, p.lon + dLon]], {
        color: focused ? '#c96442' : '#888',
        weight: focused ? 2 : 1,
        opacity: focused ? 0.9 : 0.45,
        dashArray: '3 4'
      }).addTo(grp);
    });
  }, [planes, focusedHex, showPaths]);
  var recenter = React.useCallback(function () {
    var map = mapRef.current;
    if (!map) return;
    map.setView([house.lat, house.lon], zoom, {
      animate: true
    });
  }, [house.lat, house.lon, zoom]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: height,
      background: bgWrap || TILE_LAYERS[mapStyle].bgWrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), interactive && /*#__PURE__*/React.createElement("button", {
    onClick: recenter,
    title: "Recenter on location",
    style: {
      position: 'absolute',
      right: 8,
      bottom: 8,
      zIndex: 500,
      width: 30,
      height: 30,
      borderRadius: 8,
      border: 'none',
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 6px rgba(0,0,0,.18)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1c1c1e',
      fontSize: 14,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "22",
    y2: "12"
  }))));
}
window.SharedMap = SharedMap;

// ─────── location-picker.jsx ───────
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// location-picker.jsx — small floating control to set the active location.
// Provides a search box + "use my location" button + reset to default.

function LocationPicker(_ref) {
  var location = _ref.location,
    status = _ref.status,
    onSet = _ref.onSet,
    onUseGeo = _ref.onUseGeo,
    onReset = _ref.onReset,
    _ref$accent = _ref.accent,
    accent = _ref$accent === void 0 ? '#c96442' : _ref$accent;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    q = _React$useState4[0],
    setQ = _React$useState4[1];
  var _React$useState5 = React.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    results = _React$useState6[0],
    setResults = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    searching = _React$useState8[0],
    setSearching = _React$useState8[1];
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (open) setTimeout(function () {
      var _inputRef$current;
      return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }, 50);
  }, [open]);
  var doSearch = React.useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
      var _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!query || query.trim().length < 2)) {
              _context.n = 1;
              break;
            }
            setResults([]);
            return _context.a(2);
          case 1:
            setSearching(true);
            _context.p = 2;
            _t = setResults;
            _context.n = 3;
            return geocode(query);
          case 3:
            _t(_context.v);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t2 = _context.v;
            setResults([]);
          case 5:
            _context.p = 5;
            setSearching(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);

  // Debounced search
  React.useEffect(function () {
    var t = setTimeout(function () {
      return doSearch(q);
    }, 350);
    return function () {
      return clearTimeout(t);
    };
  }, [q, doSearch]);
  var pick = function pick(r) {
    onSet({
      lat: r.lat,
      lon: r.lon,
      label: r["short"] || r.label,
      source: 'search'
    });
    setOpen(false);
    setQ('');
    setResults([]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 14,
      left: 14,
      zIndex: 2147483645,
      fontFamily: '-apple-system,BlinkMacSystemFont,system-ui,sans-serif',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      borderRadius: 999,
      background: 'rgba(250,249,247,.92)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '.5px solid rgba(0,0,0,.08)',
      boxShadow: '0 4px 16px rgba(0,0,0,.12)',
      cursor: 'pointer',
      color: '#29261b',
      fontFamily: 'inherit',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: accent,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      maxWidth: 180,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, location.label || "".concat(location.lat.toFixed(3), ", ").concat(location.lon.toFixed(3))), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4 L5 7 L8 4",
    fill: "none",
    stroke: "rgba(0,0,0,.4)",
    strokeWidth: "1.5"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      width: 300,
      padding: 10,
      borderRadius: 12,
      background: 'rgba(250,249,247,.96)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '.5px solid rgba(0,0,0,.08)',
      boxShadow: '0 12px 40px rgba(0,0,0,.18)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Search address, city, ZIP\u2026",
    style: {
      flex: 1,
      height: 30,
      padding: '0 10px',
      borderRadius: 8,
      border: '.5px solid rgba(0,0,0,.12)',
      background: 'rgba(255,255,255,.7)',
      outline: 'none',
      fontFamily: 'inherit',
      fontSize: 12,
      color: '#29261b'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onUseGeo,
    title: "Use my location",
    style: {
      width: 30,
      height: 30,
      padding: 0,
      borderRadius: 8,
      border: '.5px solid rgba(0,0,0,.12)',
      background: status === 'locating' ? accent : 'rgba(255,255,255,.7)',
      color: status === 'locating' ? '#fff' : '#29261b',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 1v3M12 20v3M1 12h3M20 12h3"
  })))), status === 'denied' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#a0522d'
    }
  }, "Location permission denied \u2014 please search above."), status === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#a0522d'
    }
  }, "Couldn't get your location."), searching && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(0,0,0,.5)'
    }
  }, "Searching\u2026"), results.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 240,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, results.map(function (r, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return pick(r);
      },
      style: {
        textAlign: 'left',
        padding: '7px 8px',
        borderRadius: 6,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 11,
        color: '#29261b',
        lineHeight: 1.3
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = 'rgba(0,0,0,.05)';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, r["short"]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'rgba(0,0,0,.5)',
        marginTop: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: '.5px solid rgba(0,0,0,.08)',
      paddingTop: 8,
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(0,0,0,.5)'
    }
  }, location.lat.toFixed(4), ", ", location.lon.toFixed(4), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginLeft: 4
    }
  }, "\xB7 ", location.source || 'manual')), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    style: {
      border: 'none',
      background: 'transparent',
      color: accent,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 10,
      fontWeight: 500
    }
  }, "Reset"))));
}
window.LocationPicker = LocationPicker;

// ─────── variants.jsx ───────
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// variants.jsx — three flight-tracker design directions.
// Each variant accepts: { planes, status, lastUpdate, house, mapStyle, showPaths,
//   timeOfDay, overheadTreatment, width, height }

// ─── Reusable bits ──────────────────────────────────────────────
function StatusDot(_ref) {
  var status = _ref.status;
  var c = status === 'live' ? '#34c759' : status === 'demo' ? '#f5a524' : status === 'error' ? '#f5a524' : '#9a9a9a';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c,
      boxShadow: "0 0 0 2px ".concat(c, "33"),
      animation: status === 'live' ? 'breath 2s ease-in-out infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes breath{0%,100%{box-shadow:0 0 0 0 ".concat(c, "55}50%{box-shadow:0 0 0 6px ").concat(c, "00}}")));
}
function tinyArrow(deg) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#444';
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 10 10",
    style: {
      transform: "rotate(".concat(deg, "deg)"),
      transition: 'transform .4s'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 0 L8 9 L5 7 L2 9 Z",
    fill: color
  }));
}
function timeAgo(d) {
  if (!d) return '—';
  var s = Math.floor((Date.now() - d.getTime()) / 1000);
  if (s < 5) return 'just now';
  if (s < 60) return s + 's ago';
  return Math.floor(s / 60) + 'm ago';
}

// ─── Shared focus hook ──────────────────────────────────────────
// Default = closest plane (planes[0]). User tap pins a specific plane and
// stops the auto-follow. Pin clears automatically if the plane leaves range.
function useFocus(planes) {
  var _planes$;
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pinnedHex = _React$useState2[0],
    setPinnedHex = _React$useState2[1];
  // Drop pin if the plane left range.
  React.useEffect(function () {
    if (pinnedHex && !planes.some(function (p) {
      return p.hex === pinnedHex;
    })) setPinnedHex(null);
  }, [planes, pinnedHex]);
  var focusedHex = pinnedHex || ((_planes$ = planes[0]) === null || _planes$ === void 0 ? void 0 : _planes$.hex) || null;
  var focusedPlane = planes.find(function (p) {
    return p.hex === focusedHex;
  }) || null;
  var select = function select(p) {
    if (!p) return setPinnedHex(null);
    // Tapping the already-pinned plane unpins → auto-follow.
    setPinnedHex(function (prev) {
      return prev === p.hex ? null : p.hex;
    });
  };
  return {
    focusedHex: focusedHex,
    focusedPlane: focusedPlane,
    isPinned: !!pinnedHex,
    select: select,
    clearPin: function clearPin() {
      return setPinnedHex(null);
    }
  };
}

// Small "pinned / auto" badge that doubles as an unpin button.
function FocusBadge(_ref2) {
  var isPinned = _ref2.isPinned,
    onClear = _ref2.onClear,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? '#c96442' : _ref2$color,
    _ref2$dark = _ref2.dark,
    dark = _ref2$dark === void 0 ? false : _ref2$dark;
  if (!isPinned) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,.55)' : 'rgba(0,0,0,.45)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: color,
        opacity: .7
      }
    }), "AUTO \xB7 CLOSEST");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#fff',
      background: color,
      padding: '3px 8px',
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'inherit'
    },
    title: "Click to unpin and follow closest"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 1 L7 4 L10 4 L7.5 6 L8.5 9.5 L6 7.5 L3.5 9.5 L4.5 6 L2 4 L5 4 Z"
  })), "PINNED \xB7 TAP TO RELEASE");
}
// ═══════════════════════════════════════════════════════════════
function TowerVariant(_ref3) {
  var planes = _ref3.planes,
    status = _ref3.status,
    lastUpdate = _ref3.lastUpdate,
    house = _ref3.house,
    mapStyle = _ref3.mapStyle,
    showPaths = _ref3.showPaths,
    showTrails = _ref3.showTrails,
    timeOfDay = _ref3.timeOfDay,
    overheadTreatment = _ref3.overheadTreatment,
    width = _ref3.width,
    height = _ref3.height;
  var _useFocus = useFocus(planes),
    focusedHex = _useFocus.focusedHex,
    focusedPlane = _useFocus.focusedPlane,
    isPinned = _useFocus.isPinned,
    select = _useFocus.select,
    clearPin = _useFocus.clearPin;
  var C = {
    bg: '#0c0e10',
    panel: '#13161a',
    panel2: '#1a1e23',
    line: '#252a31',
    text: '#d6dde5',
    dim: '#6b7682',
    accent: '#5fd3a3',
    warn: '#ffb15c',
    hot: '#ff6b6b',
    cool: '#7ec1ff',
    mono: 'ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace'
  };
  var overheadHero = overheadTreatment === 'hero' || overheadTreatment === 'fullscreen';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height,
      background: C.bg,
      color: C.text,
      fontFamily: C.mono,
      fontSize: 11,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 14px',
      borderBottom: "1px solid ".concat(C.line),
      fontSize: 10,
      letterSpacing: '.08em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      maxWidth: 160,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, (house.label || 'Site').split(',')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.dim,
      fontVariantNumeric: 'tabular-nums'
    }
  }, Math.abs(house.lat).toFixed(2), "\xB0", house.lat >= 0 ? 'N' : 'S', " ", Math.abs(house.lon).toFixed(2), "\xB0", house.lon >= 0 ? 'E' : 'W')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: C.dim
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: status
  }), /*#__PURE__*/React.createElement("span", null, status === 'live' ? 'LIVE' : status === 'demo' ? 'DEMO' : status === 'error' ? 'CACHED' : '…'), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, timeAgo(lastUpdate)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SharedMap, {
    planes: planes,
    house: house,
    focusedHex: focusedHex,
    onSelect: function onSelect(p) {
      return select(p);
    },
    mapStyle: mapStyle === 'light' ? 'dark' : mapStyle,
    showPaths: showPaths,
    showTrails: showTrails,
    timeOfDay: timeOfDay,
    height: Math.round(height * 0.48),
    planeColor: null,
    dimUnfocused: true,
    showAirspace: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 10,
      right: 10,
      display: 'flex',
      justifyContent: 'space-between',
      pointerEvents: 'none',
      fontSize: 9,
      letterSpacing: '.1em',
      color: C.dim
    }
  }, /*#__PURE__*/React.createElement("div", null, "RANGE 25NM"), /*#__PURE__*/React.createElement("div", null, "CONTACTS ", String(planes.length).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: height * 0.48,
      background: "".concat(C.accent, "10"),
      position: 'absolute'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 1,
      background: "".concat(C.accent, "10"),
      position: 'absolute'
    }
  }))), focusedPlane && overheadHero && /*#__PURE__*/React.createElement(TowerHero, {
    focusedPlane: focusedPlane,
    isPinned: isPinned,
    clearPin: clearPin,
    C: C
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px',
      fontSize: 9,
      letterSpacing: '.18em',
      color: C.dim,
      display: 'grid',
      gridTemplateColumns: '1fr 50px 50px 60px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "FLIGHT \xB7 AC"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "ALT"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "SPD"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "RANGE")), planes.map(function (p) {
    var _p$route$origin, _p$route$destination;
    var isF = p.hex === focusedHex;
    return /*#__PURE__*/React.createElement("div", {
      key: p.hex,
      onClick: function onClick() {
        return select(p);
      },
      style: {
        padding: '7px 14px',
        display: 'grid',
        gridTemplateColumns: '1fr 50px 50px 60px',
        gap: 8,
        cursor: 'pointer',
        background: isF ? "".concat(C.accent, "11") : 'transparent',
        borderLeft: isF ? "2px solid ".concat(C.accent) : '2px solid transparent',
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: isF ? C.accent : C.text,
        fontWeight: 600,
        letterSpacing: '.04em'
      }
    }, fmt.flight(p.flight) || p.registration || p.hex), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.dim,
        fontSize: 9,
        marginTop: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, p.route ? "".concat(((_p$route$origin = p.route.origin) === null || _p$route$origin === void 0 ? void 0 : _p$route$origin.iata) || '?', " \u2192 ").concat(((_p$route$destination = p.route.destination) === null || _p$route$destination === void 0 ? void 0 : _p$route$destination.iata) || '?') : p.type || '—')), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        color: C.cool,
        fontVariantNumeric: 'tabular-nums'
      }
    }, fmt.altShort(p.altFt)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        color: C.warn,
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1.1
      }
    }, p.speedKt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, Math.round(p.speedKt * 1.151), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        color: C.dim,
        marginLeft: 2,
        letterSpacing: '.05em'
      }
    }, "MPH")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        color: C.dim,
        letterSpacing: '.05em'
      }
    }, Math.round(p.speedKt), " kt")) : '—'), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        color: C.dim,
        fontVariantNumeric: 'tabular-nums',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, p.distNm.toFixed(1)), tinyArrow(p.bearing, C.dim, 8)));
  }), planes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: C.dim,
      fontSize: 10,
      letterSpacing: '.1em'
    }
  }, "NO CONTACTS IN RANGE")));
}
function Tele(_ref4) {
  var label = _ref4.label,
    value = _ref4.value,
    sub = _ref4.sub,
    accent = _ref4.accent;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      letterSpacing: '.18em',
      color: 'rgba(255,255,255,.4)',
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.1
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      color: 'rgba(255,255,255,.35)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 1,
      letterSpacing: '.05em'
    }
  }, sub));
}
function TowerHero(_ref5) {
  var _focusedPlane$hex, _focusedPlane$route$o, _focusedPlane$route$d;
  var focusedPlane = _ref5.focusedPlane,
    isPinned = _ref5.isPinned,
    clearPin = _ref5.clearPin,
    C = _ref5.C;
  var photo = useAircraftPhoto(focusedPlane === null || focusedPlane === void 0 ? void 0 : focusedPlane.hex);
  // Demo planes have synthetic hex like 'demo01' — skip the photo fetch then.
  var isDemo = focusedPlane === null || focusedPlane === void 0 || (_focusedPlane$hex = focusedPlane.hex) === null || _focusedPlane$hex === void 0 ? void 0 : _focusedPlane$hex.startsWith('demo');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 10px',
      borderBottom: "1px solid ".concat(C.line),
      background: "linear-gradient(180deg, ".concat(C.panel2, ", ").concat(C.panel, ")")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent,
      fontSize: 9,
      letterSpacing: '.18em',
      fontWeight: 700
    }
  }, isPinned ? '◉ PINNED' : '◉ OVERHEAD NOW'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.dim,
      fontSize: 9,
      letterSpacing: '.1em'
    }
  }, fmt.dist(focusedPlane.distNm), " \xB7 ", focusedPlane.compass)), isPinned && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(FocusBadge, {
    isPinned: true,
    onClear: clearPin,
    color: C.accent,
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, tinyArrow(focusedPlane.track || 0, C.accent, 16), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '.05em',
      color: '#fff',
      lineHeight: 1
    }
  }, fmt.flight(focusedPlane.flight) || focusedPlane.registration), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.dim,
      marginTop: 3,
      letterSpacing: '.05em',
      textTransform: 'uppercase'
    }
  }, focusedPlane.airline || '—', " \xB7 ", focusedPlane.description || focusedPlane.type || '—')), !isDemo && /*#__PURE__*/React.createElement("a", {
    href: (photo === null || photo === void 0 ? void 0 : photo.link) || "https://www.flightaware.com/live/flight/".concat((focusedPlane.flight || '').trim()),
    target: "_blank",
    rel: "noopener noreferrer",
    title: photo ? "Photo \xA9 ".concat(photo.photographer, " \u2014 planespotters.net") : 'Open in FlightAware',
    style: {
      width: 72,
      height: 54,
      flexShrink: 0,
      borderRadius: 4,
      overflow: 'hidden',
      border: "1px solid ".concat(C.line),
      background: "".concat(C.panel),
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, photo !== null && photo !== void 0 && photo.thumb ? /*#__PURE__*/React.createElement("img", {
    src: photo.thumb,
    alt: focusedPlane.type || 'aircraft',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: C.dim,
      letterSpacing: '.15em'
    }
  }, "NO IMG"), (photo === null || photo === void 0 ? void 0 : photo.thumb) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: 7,
      padding: '1px 3px',
      background: 'rgba(0,0,0,.55)',
      color: 'rgba(255,255,255,.7)',
      letterSpacing: '.05em'
    }
  }, "\u2197"))), focusedPlane.route && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 10,
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, ((_focusedPlane$route$o = focusedPlane.route.origin) === null || _focusedPlane$route$o === void 0 ? void 0 : _focusedPlane$route$o.iata) || '???'), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "linear-gradient(90deg, ".concat(C.accent, "88, ").concat(C.accent, "22)"),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -3,
      top: -4,
      width: 0,
      height: 0,
      borderLeft: "6px solid ".concat(C.accent, "88"),
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent
    }
  }, ((_focusedPlane$route$d = focusedPlane.route.destination) === null || _focusedPlane$route$d === void 0 ? void 0 : _focusedPlane$route$d.iata) || '???')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8,
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement(Tele, {
    label: "ALT",
    value: fmt.altShort(focusedPlane.altFt),
    accent: C.cool
  }), /*#__PURE__*/React.createElement(Tele, {
    label: "GS",
    value: focusedPlane.speedKt ? Math.round(focusedPlane.speedKt * 1.151) + ' mph' : '—',
    sub: focusedPlane.speedKt ? Math.round(focusedPlane.speedKt) + ' kt' : null,
    accent: C.warn
  }), /*#__PURE__*/React.createElement(Tele, {
    label: "HDG",
    value: focusedPlane.track ? Math.round(focusedPlane.track) + '°' : '—',
    accent: C.text
  }), /*#__PURE__*/React.createElement(Tele, {
    label: "V/S",
    value: focusedPlane.verticalRate ? (focusedPlane.verticalRate > 0 ? '↑' : '↓') + Math.abs(focusedPlane.verticalRate) : '—',
    accent: focusedPlane.verticalRate > 50 ? C.accent : focusedPlane.verticalRate < -50 ? C.hot : C.dim
  })), (photo === null || photo === void 0 ? void 0 : photo.photographer) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 8,
      color: C.dim,
      letterSpacing: '.08em',
      textAlign: 'right'
    }
  }, "PHOTO \xA9 ", photo.photographer.toUpperCase(), " \xB7 PLANESPOTTERS.NET"));
}

// ═══════════════════════════════════════════════════════════════
// VARIANT 2 — WEATHER  (Apple-Weather-style, soft, friendly cards)
// ═══════════════════════════════════════════════════════════════
function WeatherVariant(_ref6) {
  var planes = _ref6.planes,
    status = _ref6.status,
    lastUpdate = _ref6.lastUpdate,
    house = _ref6.house,
    mapStyle = _ref6.mapStyle,
    showPaths = _ref6.showPaths,
    showTrails = _ref6.showTrails,
    timeOfDay = _ref6.timeOfDay,
    overheadTreatment = _ref6.overheadTreatment,
    width = _ref6.width,
    height = _ref6.height;
  var _useFocus2 = useFocus(planes),
    focusedHex = _useFocus2.focusedHex,
    focusedPlane = _useFocus2.focusedPlane,
    isPinned = _useFocus2.isPinned,
    select = _useFocus2.select,
    clearPin = _useFocus2.clearPin;

  // Sky-gradient driven by timeOfDay
  var sky = function () {
    var t = timeOfDay;
    if (t < 0.2) return ['#0b1330', '#1d2a4a', '#3a4670']; // night
    if (t < 0.35) return ['#ff9d6e', '#ffc7a0', '#cfe0ff']; // dawn
    if (t < 0.65) return ['#76b6ff', '#a9d4ff', '#dceeff']; // day
    if (t < 0.8) return ['#ff8e6f', '#f4a672', '#7c8ec5']; // dusk
    return ['#0b1330', '#1d2a4a', '#3a4670'];
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height,
      background: "linear-gradient(180deg, ".concat(sky[0], " 0%, ").concat(sky[1], " 35%, ").concat(sky[2], " 100%)"),
      fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#1c1c1e'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 6px',
      color: '#fff',
      textShadow: '0 1px 2px rgba(0,0,0,.15)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .85,
      letterSpacing: '.02em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, (house.label || 'Current location').split(',').slice(0, 2).join(',')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      marginTop: 4,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: status
  }), /*#__PURE__*/React.createElement("span", null, status === 'live' ? 'Live' : status === 'demo' ? 'Demo' : 'Cached', " \xB7 updated ", timeAgo(lastUpdate)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 300,
      letterSpacing: '-.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, planes.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .85,
      fontWeight: 400,
      marginTop: 2,
      letterSpacing: '.02em'
    }
  }, "aircraft nearby"))), focusedPlane && /*#__PURE__*/React.createElement(WeatherHero, {
    focusedPlane: focusedPlane,
    isPinned: isPinned,
    clearPin: clearPin
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 14px 10px',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: '0 6px 24px rgba(0,0,0,.12)',
      border: '.5px solid rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement(SharedMap, {
    planes: planes,
    house: house,
    focusedHex: focusedHex,
    onSelect: function onSelect(p) {
      return select(p);
    },
    mapStyle: mapStyle,
    showPaths: showPaths,
    showTrails: showTrails,
    timeOfDay: timeOfDay,
    height: Math.round(height * 0.34)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 14px 14px',
      background: 'rgba(255,255,255,.7)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderRadius: 18,
      boxShadow: '0 4px 16px rgba(0,0,0,.08)',
      border: '.5px solid rgba(255,255,255,.5)',
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '.5px solid rgba(0,0,0,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.08em',
      color: 'rgba(0,0,0,.55)',
      textTransform: 'uppercase'
    }
  }, "Nearby Traffic"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(0,0,0,.4)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, planes.length, " aircraft")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, planes.map(function (p) {
    var _p$route$origin2, _p$route$destination2;
    var isF = p.hex === focusedHex;
    return /*#__PURE__*/React.createElement("div", {
      key: p.hex,
      onClick: function onClick() {
        return select(p);
      },
      style: {
        padding: '10px 16px',
        display: 'grid',
        gridTemplateColumns: '18px 1fr 56px 60px 56px',
        gap: 10,
        alignItems: 'center',
        cursor: 'pointer',
        background: isF ? 'rgba(201,100,66,.08)' : 'transparent',
        borderLeft: isF ? '3px solid #c96442' : '3px solid transparent',
        borderBottom: '.5px solid rgba(0,0,0,.04)',
        transition: 'background .15s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, tinyArrow(p.track || 0, isF ? '#c96442' : 'rgba(0,0,0,.55)', 14)), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '-.01em',
        color: isF ? '#c96442' : '#1c1c1e',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, fmt.flight(p.flight) || p.registration || p.hex.toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'rgba(0,0,0,.5)',
        marginTop: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, p.route ? "".concat(((_p$route$origin2 = p.route.origin) === null || _p$route$origin2 === void 0 ? void 0 : _p$route$origin2.iata) || '?', " \u2192 ").concat(((_p$route$destination2 = p.route.destination) === null || _p$route$destination2 === void 0 ? void 0 : _p$route$destination2.iata) || '?') : p.description || p.type || 'Unknown')), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: '#1c1c1e'
      }
    }, p.altFt != null ? p.altFt === 0 ? 'GND' : Math.round(p.altFt / 100) * 100 : '—'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'rgba(0,0,0,.45)',
        letterSpacing: '.04em',
        textTransform: 'uppercase'
      }
    }, "ft")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1.15
      }
    }, p.speedKt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: '#1c1c1e'
      }
    }, Math.round(p.speedKt * 1.151), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 400,
        color: 'rgba(0,0,0,.45)'
      }
    }, "mph")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'rgba(0,0,0,.4)'
      }
    }, Math.round(p.speedKt), " kt")) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(0,0,0,.3)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1.15
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: '#1c1c1e'
      }
    }, p.distNm.toFixed(1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'rgba(0,0,0,.45)',
        letterSpacing: '.04em',
        textTransform: 'uppercase'
      }
    }, "nm \xB7 ", p.compass)));
  }), planes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 16px',
      textAlign: 'center',
      color: 'rgba(0,0,0,.4)',
      fontSize: 12,
      fontStyle: 'italic'
    }
  }, "Quiet skies. No aircraft right now."))));
}
function WeatherHero(_ref7) {
  var _focusedPlane$hex2, _focusedPlane$route$o2, _focusedPlane$route$o3, _focusedPlane$route$d2, _focusedPlane$route$d3;
  var focusedPlane = _ref7.focusedPlane,
    isPinned = _ref7.isPinned,
    clearPin = _ref7.clearPin;
  var photo = useAircraftPhoto(focusedPlane === null || focusedPlane === void 0 ? void 0 : focusedPlane.hex);
  var isDemo = focusedPlane === null || focusedPlane === void 0 || (_focusedPlane$hex2 = focusedPlane.hex) === null || _focusedPlane$hex2 === void 0 ? void 0 : _focusedPlane$hex2.startsWith('demo');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 14px 8px',
      background: 'rgba(255,255,255,.78)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderRadius: 18,
      padding: '10px 14px 11px',
      boxShadow: '0 6px 24px rgba(0,0,0,.12)',
      border: '.5px solid rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.1em',
      color: '#c96442',
      textTransform: 'uppercase'
    }
  }, isPinned ? 'Pinned' : 'Overhead Now'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(0,0,0,.5)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, tinyArrow(focusedPlane.bearing, 'rgba(0,0,0,.5)', 9), /*#__PURE__*/React.createElement("span", null, focusedPlane.compass, " \xB7 ", fmt.dist(focusedPlane.distNm)))), isPinned && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(FocusBadge, {
    isPinned: true,
    onClear: clearPin
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: 'linear-gradient(135deg, #f6f4ef, #e9e5dc)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, tinyArrow(focusedPlane.track || 0, '#1c1c1e', 26)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.01em'
    }
  }, fmt.flight(focusedPlane.flight) || focusedPlane.registration), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(0,0,0,.55)',
      marginTop: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, focusedPlane.airline ? focusedPlane.airline + ' · ' : '', focusedPlane.description || focusedPlane.type || 'Unknown')), !isDemo && /*#__PURE__*/React.createElement("a", {
    href: (photo === null || photo === void 0 ? void 0 : photo.link) || "https://www.flightaware.com/live/flight/".concat((focusedPlane.flight || '').trim()),
    target: "_blank",
    rel: "noopener noreferrer",
    title: photo ? "Photo \xA9 ".concat(photo.photographer, " \u2014 planespotters.net") : 'Open in FlightAware',
    style: {
      width: 72,
      height: 54,
      flexShrink: 0,
      borderRadius: 10,
      overflow: 'hidden',
      border: '.5px solid rgba(0,0,0,.08)',
      background: 'rgba(255,255,255,.5)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, photo !== null && photo !== void 0 && photo.thumb ? /*#__PURE__*/React.createElement("img", {
    src: photo.thumb,
    alt: focusedPlane.type || 'aircraft',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'rgba(0,0,0,.35)',
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "No img"), (photo === null || photo === void 0 ? void 0 : photo.thumb) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: 8,
      padding: '1px 4px',
      background: 'rgba(0,0,0,.5)',
      color: 'rgba(255,255,255,.85)',
      letterSpacing: '.05em',
      borderTopLeftRadius: 6
    }
  }, "\u2197"))), focusedPlane.route && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RouteEnd, {
    code: (_focusedPlane$route$o2 = focusedPlane.route.origin) === null || _focusedPlane$route$o2 === void 0 ? void 0 : _focusedPlane$route$o2.iata,
    city: (_focusedPlane$route$o3 = focusedPlane.route.origin) === null || _focusedPlane$route$o3 === void 0 ? void 0 : _focusedPlane$route$o3.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 0,
      right: 0,
      height: 1,
      background: 'rgba(0,0,0,.15)',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 5,
      left: '50%',
      transform: 'translateX(-50%) rotate(90deg)'
    }
  }, tinyArrow(0, '#c96442', 9))), /*#__PURE__*/React.createElement(RouteEnd, {
    code: (_focusedPlane$route$d2 = focusedPlane.route.destination) === null || _focusedPlane$route$d2 === void 0 ? void 0 : _focusedPlane$route$d2.iata,
    city: (_focusedPlane$route$d3 = focusedPlane.route.destination) === null || _focusedPlane$route$d3 === void 0 ? void 0 : _focusedPlane$route$d3.name,
    right: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8,
      marginTop: 10,
      paddingTop: 8,
      borderTop: '.5px solid rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Altitude",
    value: fmt.alt(focusedPlane.altFt)
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Speed",
    value: focusedPlane.speedKt ? Math.round(focusedPlane.speedKt * 1.151) + ' mph' : '—',
    sub: focusedPlane.speedKt ? Math.round(focusedPlane.speedKt) + ' kt' : null
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Heading",
    value: focusedPlane.track != null ? Math.round(focusedPlane.track) + '° ' + focusedPlane.compass : '—'
  })), (photo === null || photo === void 0 ? void 0 : photo.photographer) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 9,
      color: 'rgba(0,0,0,.4)',
      letterSpacing: '.04em',
      textAlign: 'right'
    }
  }, "Photo \xA9 ", photo.photographer, " \xB7 planespotters.net"));
}
function RouteEnd(_ref8) {
  var code = _ref8.code,
    city = _ref8.city,
    right = _ref8.right;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: right ? 'right' : 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.02em'
    }
  }, code || '???'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(0,0,0,.5)',
      marginTop: 1
    }
  }, city || ''));
}
function Stat(_ref9) {
  var label = _ref9.label,
    value = _ref9.value,
    sub = _ref9.sub;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(0,0,0,.5)',
      fontWeight: 500,
      marginBottom: 2,
      letterSpacing: '.02em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '-.01em',
      lineHeight: 1.15
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(0,0,0,.4)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 1
    }
  }, sub));
}

// ═══════════════════════════════════════════════════════════════
// VARIANT 3 — CALM  (meditative, plane-spotting hobby, editorial)
// ═══════════════════════════════════════════════════════════════
function CalmVariant(_ref0) {
  var _focusedPlane$route$o4, _focusedPlane$route$o5, _focusedPlane$route$d4, _focusedPlane$route$d5;
  var planes = _ref0.planes,
    status = _ref0.status,
    lastUpdate = _ref0.lastUpdate,
    house = _ref0.house,
    mapStyle = _ref0.mapStyle,
    showPaths = _ref0.showPaths,
    showTrails = _ref0.showTrails,
    timeOfDay = _ref0.timeOfDay,
    overheadTreatment = _ref0.overheadTreatment,
    width = _ref0.width,
    height = _ref0.height;
  var _useFocus3 = useFocus(planes),
    focusedHex = _useFocus3.focusedHex,
    focusedPlane = _useFocus3.focusedPlane,
    isPinned = _useFocus3.isPinned,
    select = _useFocus3.select,
    clearPin = _useFocus3.clearPin;

  // Calm warm-paper palette, accent inspired by aged map ink
  var C = {
    paper: '#f3eee3',
    paper2: '#ebe4d3',
    ink: '#2a2620',
    ink2: '#5a5247',
    rule: '#d8d0bc',
    accent: '#b04a2a',
    serif: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif',
    sans: '"Inter", -apple-system, system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, Menlo, monospace'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height,
      background: C.paper,
      color: C.ink,
      fontFamily: C.sans,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "radial-gradient(circle at 20% 10%, rgba(176,74,42,.04), transparent 50%), radial-gradient(circle at 80% 80%, rgba(42,38,32,.04), transparent 50%)",
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 10px',
      borderBottom: ".5px solid ".concat(C.rule),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.mono,
      fontSize: 9,
      letterSpacing: '.2em',
      color: C.ink2,
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Vol. I \xB7 Issue ", String(Math.floor(Date.now() / 86400000) % 999).padStart(3, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: status
  }), status === 'live' ? 'Live' : 'Cached')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: C.serif,
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 34,
      letterSpacing: '-.01em',
      margin: '4px 0 2px',
      lineHeight: 1
    }
  }, "The Sky Above"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.serif,
      fontSize: 14,
      color: C.ink2,
      letterSpacing: '.02em'
    }
  }, (house.label || 'Current location').split(',').slice(0, 2).join(','), " \xB7 ", new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }))), focusedPlane ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 10px',
      borderBottom: ".5px solid ".concat(C.rule)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.mono,
      fontSize: 9,
      letterSpacing: '.18em',
      color: C.accent,
      textTransform: 'uppercase',
      marginBottom: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xB7 ", isPinned ? 'Pinned' : 'Passing now', " \xB7"), isPinned && /*#__PURE__*/React.createElement(FocusBadge, {
    isPinned: true,
    onClear: clearPin,
    color: C.accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      marginTop: 6
    }
  }, tinyArrow(focusedPlane.track || 0, C.ink, 36)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.serif,
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: '-.01em',
      lineHeight: 1.05,
      marginBottom: 4
    }
  }, focusedPlane.airline || 'An aircraft', " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: C.ink2
    }
  }, fmt.flight(focusedPlane.flight) || focusedPlane.registration || '')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: C.serif,
      fontSize: 15,
      lineHeight: 1.4,
      color: C.ink2,
      margin: 0
    }
  }, focusedPlane.description ? "A ".concat(focusedPlane.description) : 'An aircraft', focusedPlane.altFt ? ", cruising at ".concat(fmt.alt(focusedPlane.altFt), ",") : ',', " bearing ", focusedPlane.compass, focusedPlane.route ? /*#__PURE__*/React.createElement(React.Fragment, null, " from ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: C.ink
    }
  }, ((_focusedPlane$route$o4 = focusedPlane.route.origin) === null || _focusedPlane$route$o4 === void 0 ? void 0 : _focusedPlane$route$o4.name) || ((_focusedPlane$route$o5 = focusedPlane.route.origin) === null || _focusedPlane$route$o5 === void 0 ? void 0 : _focusedPlane$route$o5.iata) || 'parts unknown'), " toward ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: C.ink
    }
  }, ((_focusedPlane$route$d4 = focusedPlane.route.destination) === null || _focusedPlane$route$d4 === void 0 ? void 0 : _focusedPlane$route$d4.name) || ((_focusedPlane$route$d5 = focusedPlane.route.destination) === null || _focusedPlane$route$d5 === void 0 ? void 0 : _focusedPlane$route$d5.iata) || 'a distant city'), ".") : '.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0,
      marginTop: 14,
      paddingTop: 12,
      borderTop: ".5px dashed ".concat(C.rule)
    }
  }, /*#__PURE__*/React.createElement(CalmStat, {
    label: "Distance",
    value: fmt.dist(focusedPlane.distNm),
    mono: C.mono
  }), /*#__PURE__*/React.createElement(CalmStat, {
    label: "Altitude",
    value: fmt.alt(focusedPlane.altFt),
    mono: C.mono
  }), /*#__PURE__*/React.createElement(CalmStat, {
    label: "Speed",
    value: focusedPlane.speedKt ? Math.round(focusedPlane.speedKt * 1.151) + ' mph' : '—',
    mono: C.mono
  }), /*#__PURE__*/React.createElement(CalmStat, {
    label: "Heading",
    value: focusedPlane.track != null ? Math.round(focusedPlane.track) + '°' : '—',
    mono: C.mono
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 22px',
      textAlign: 'center',
      fontFamily: C.serif,
      fontStyle: 'italic',
      fontSize: 18,
      color: C.ink2
    }
  }, "The skies are quiet."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderBottom: ".5px solid ".concat(C.rule)
    }
  }, /*#__PURE__*/React.createElement(SharedMap, {
    planes: planes,
    house: house,
    focusedHex: focusedHex,
    onSelect: function onSelect(p) {
      return select(p);
    },
    mapStyle: mapStyle,
    showPaths: showPaths,
    showTrails: showTrails,
    timeOfDay: timeOfDay,
    height: Math.round(height * 0.26),
    bgWrap: C.paper2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 6,
      left: 10,
      fontFamily: C.mono,
      fontSize: 9,
      letterSpacing: '.15em',
      color: C.ink2,
      background: 'rgba(243,238,227,.85)',
      padding: '2px 6px'
    }
  }, "fig. 1 \u2014 current sightings, 25 nautical miles")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '10px 22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.mono,
      fontSize: 9,
      letterSpacing: '.2em',
      color: C.ink2,
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Also in the air"), planes.slice(1).map(function (p) {
    var _p$route$origin3, _p$route$destination3;
    var isF = p.hex === focusedHex;
    return /*#__PURE__*/React.createElement("div", {
      key: p.hex,
      onClick: function onClick() {
        return select(p);
      },
      style: {
        padding: '7px 0',
        borderBottom: ".5px dotted ".concat(C.rule),
        display: 'grid',
        gridTemplateColumns: '14px 1fr auto',
        gap: 10,
        alignItems: 'baseline',
        cursor: 'pointer',
        color: isF ? C.accent : C.ink
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: "translateY(2px)"
      }
    }, tinyArrow(p.track || 0, isF ? C.accent : C.ink2, 11)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: C.serif,
        fontSize: 14,
        lineHeight: 1.25,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, fmt.flight(p.flight) || p.registration || p.hex), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.ink2,
        fontStyle: 'italic'
      }
    }, p.route ? " \u2014 ".concat(((_p$route$origin3 = p.route.origin) === null || _p$route$origin3 === void 0 ? void 0 : _p$route$origin3.iata) || '?', " to ").concat(((_p$route$destination3 = p.route.destination) === null || _p$route$destination3 === void 0 ? void 0 : _p$route$destination3.iata) || '?') : p.description ? " \u2014 ".concat(p.description) : '')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: C.mono,
        fontSize: 10,
        color: C.ink2,
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, p.altFt ? Math.round(p.altFt / 1000) + 'k' : 'gnd', " \xB7 ", p.distNm.toFixed(1), "nm ", p.compass));
  }), planes.length <= 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: C.serif,
      fontStyle: 'italic',
      color: C.ink2,
      padding: '10px 0'
    }
  }, "Nothing else aloft just now.")));
}
function CalmStat(_ref1) {
  var label = _ref1.label,
    value = _ref1.value,
    mono = _ref1.mono;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 8,
      letterSpacing: '.18em',
      color: '#5a5247',
      textTransform: 'uppercase',
      marginBottom: 3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: 18,
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
Object.assign(window, {
  TowerVariant: TowerVariant,
  WeatherVariant: WeatherVariant,
  CalmVariant: CalmVariant
});

// ─────── app entry ───────
function App() {
  const { location, status: geoStatus, setLocation, useGeolocation, reset: resetLocation } = useLocation();
  const { planes, status, lastUpdate } = useFlights({
    radiusNm: 25, intervalMs: 8000, demo: false, location,
  });

  // First-load: prefer real geolocation when no override is stored.
  React.useEffect(function () {
    if (location.source === 'default') useGeolocation();
  // eslint-disable-next-line
  }, []);

  // Recompute viewport size on rotate / resize.
  const [size, setSize] = React.useState({ w: window.innerWidth, h: window.innerHeight });
  React.useEffect(function () {
    function onResize () { setSize({ w: window.innerWidth, h: window.innerHeight }); }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  return React.createElement(
    'div',
    { style: { height: '100vh', width: '100vw', overflow: 'hidden' } },
    React.createElement(WeatherVariant, {
      planes: planes, status: status, lastUpdate: lastUpdate, house: location,
      mapStyle: 'light', showPaths: false, showTrails: true, timeOfDay: 0.5,
      overheadTreatment: 'hero', width: size.w, height: size.h,
    }),
    React.createElement(LocationPicker, {
      location: location, status: geoStatus,
      onSet: setLocation, onUseGeo: useGeolocation, onReset: resetLocation,
    })
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
