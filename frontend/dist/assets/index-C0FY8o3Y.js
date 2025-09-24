;(function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) f(s)
  new MutationObserver(s => {
    for (const y of s)
      if (y.type === 'childList')
        for (const b of y.addedNodes) b.tagName === 'LINK' && b.rel === 'modulepreload' && f(b)
  }).observe(document, { childList: !0, subtree: !0 })
  function d(s) {
    const y = {}
    return (
      s.integrity && (y.integrity = s.integrity),
      s.referrerPolicy && (y.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (y.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (y.credentials = 'omit')
          : (y.credentials = 'same-origin'),
      y
    )
  }
  function f(s) {
    if (s.ep) return
    s.ep = !0
    const y = d(s)
    fetch(s.href, y)
  }
})()
function ui(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i
}
var Of = { exports: {} },
  zn = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd
function tv() {
  if (Kd) return zn
  Kd = 1
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment')
  function d(f, s, y) {
    var b = null
    if ((y !== void 0 && (b = '' + y), s.key !== void 0 && (b = '' + s.key), 'key' in s)) {
      y = {}
      for (var x in s) x !== 'key' && (y[x] = s[x])
    } else y = s
    return ((s = y.ref), { $$typeof: i, type: f, key: b, ref: s !== void 0 ? s : null, props: y })
  }
  return ((zn.Fragment = o), (zn.jsx = d), (zn.jsxs = d), zn)
}
var Jd
function ev() {
  return (Jd || ((Jd = 1), (Of.exports = tv())), Of.exports)
}
var H = ev(),
  xf = { exports: {} },
  et = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d
function lv() {
  if ($d) return et
  $d = 1
  var i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    y = Symbol.for('react.consumer'),
    b = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    T = Symbol.for('react.lazy'),
    D = Symbol.iterator
  function M(v) {
    return v === null || typeof v != 'object'
      ? null
      : ((v = (D && v[D]) || v['@@iterator']), typeof v == 'function' ? v : null)
  }
  var Y = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    X = {}
  function Z(v, q, Q) {
    ;((this.props = v), (this.context = q), (this.refs = X), (this.updater = Q || Y))
  }
  ;((Z.prototype.isReactComponent = {}),
    (Z.prototype.setState = function (v, q) {
      if (typeof v != 'object' && typeof v != 'function' && v != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, v, q, 'setState')
    }),
    (Z.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate')
    }))
  function B() {}
  B.prototype = Z.prototype
  function I(v, q, Q) {
    ;((this.props = v), (this.context = q), (this.refs = X), (this.updater = Q || Y))
  }
  var K = (I.prototype = new B())
  ;((K.constructor = I), L(K, Z.prototype), (K.isPureReactComponent = !0))
  var nt = Array.isArray,
    C = { H: null, A: null, T: null, S: null, V: null },
    rt = Object.prototype.hasOwnProperty
  function ct(v, q, Q, G, $, ot) {
    return ((Q = ot.ref), { $$typeof: i, type: v, key: q, ref: Q !== void 0 ? Q : null, props: ot })
  }
  function Tt(v, q) {
    return ct(v.type, q, void 0, void 0, void 0, v.props)
  }
  function Rt(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === i
  }
  function Gt(v) {
    var q = { '=': '=0', ':': '=2' }
    return (
      '$' +
      v.replace(/[=:]/g, function (Q) {
        return q[Q]
      })
    )
  }
  var kt = /\/+/g
  function Zt(v, q) {
    return typeof v == 'object' && v !== null && v.key != null ? Gt('' + v.key) : q.toString(36)
  }
  function Rl() {}
  function Al(v) {
    switch (v.status) {
      case 'fulfilled':
        return v.value
      case 'rejected':
        throw v.reason
      default:
        switch (
          (typeof v.status == 'string'
            ? v.then(Rl, Rl)
            : ((v.status = 'pending'),
              v.then(
                function (q) {
                  v.status === 'pending' && ((v.status = 'fulfilled'), (v.value = q))
                },
                function (q) {
                  v.status === 'pending' && ((v.status = 'rejected'), (v.reason = q))
                }
              )),
          v.status)
        ) {
          case 'fulfilled':
            return v.value
          case 'rejected':
            throw v.reason
        }
    }
    throw v
  }
  function Vt(v, q, Q, G, $) {
    var ot = typeof v
    ;(ot === 'undefined' || ot === 'boolean') && (v = null)
    var tt = !1
    if (v === null) tt = !0
    else
      switch (ot) {
        case 'bigint':
        case 'string':
        case 'number':
          tt = !0
          break
        case 'object':
          switch (v.$$typeof) {
            case i:
            case o:
              tt = !0
              break
            case T:
              return ((tt = v._init), Vt(tt(v._payload), q, Q, G, $))
          }
      }
    if (tt)
      return (
        ($ = $(v)),
        (tt = G === '' ? '.' + Zt(v, 0) : G),
        nt($)
          ? ((Q = ''),
            tt != null && (Q = tt.replace(kt, '$&/') + '/'),
            Vt($, q, Q, '', function (Pe) {
              return Pe
            }))
          : $ != null &&
            (Rt($) &&
              ($ = Tt(
                $,
                Q +
                  ($.key == null || (v && v.key === $.key)
                    ? ''
                    : ('' + $.key).replace(kt, '$&/') + '/') +
                  tt
              )),
            q.push($)),
        1
      )
    tt = 0
    var ae = G === '' ? '.' : G + ':'
    if (nt(v))
      for (var At = 0; At < v.length; At++)
        ((G = v[At]), (ot = ae + Zt(G, At)), (tt += Vt(G, q, Q, ot, $)))
    else if (((At = M(v)), typeof At == 'function'))
      for (v = At.call(v), At = 0; !(G = v.next()).done; )
        ((G = G.value), (ot = ae + Zt(G, At++)), (tt += Vt(G, q, Q, ot, $)))
    else if (ot === 'object') {
      if (typeof v.then == 'function') return Vt(Al(v), q, Q, G, $)
      throw (
        (q = String(v)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (q === '[object Object]' ? 'object with keys {' + Object.keys(v).join(', ') + '}' : q) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    }
    return tt
  }
  function N(v, q, Q) {
    if (v == null) return v
    var G = [],
      $ = 0
    return (
      Vt(v, G, '', '', function (ot) {
        return q.call(Q, ot, $++)
      }),
      G
    )
  }
  function w(v) {
    if (v._status === -1) {
      var q = v._result
      ;((q = q()),
        q.then(
          function (Q) {
            ;(v._status === 0 || v._status === -1) && ((v._status = 1), (v._result = Q))
          },
          function (Q) {
            ;(v._status === 0 || v._status === -1) && ((v._status = 2), (v._result = Q))
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = q)))
    }
    if (v._status === 1) return v._result.default
    throw v._result
  }
  var F =
    typeof reportError == 'function'
      ? reportError
      : function (v) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var q = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof v == 'object' && v !== null && typeof v.message == 'string'
                  ? String(v.message)
                  : String(v),
              error: v,
            })
            if (!window.dispatchEvent(q)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', v)
            return
          }
          console.error(v)
        }
  function St() {}
  return (
    (et.Children = {
      map: N,
      forEach: function (v, q, Q) {
        N(
          v,
          function () {
            q.apply(this, arguments)
          },
          Q
        )
      },
      count: function (v) {
        var q = 0
        return (
          N(v, function () {
            q++
          }),
          q
        )
      },
      toArray: function (v) {
        return (
          N(v, function (q) {
            return q
          }) || []
        )
      },
      only: function (v) {
        if (!Rt(v))
          throw Error('React.Children.only expected to receive a single React element child.')
        return v
      },
    }),
    (et.Component = Z),
    (et.Fragment = d),
    (et.Profiler = s),
    (et.PureComponent = I),
    (et.StrictMode = f),
    (et.Suspense = g),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
    (et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return C.H.useMemoCache(v)
      },
    }),
    (et.cache = function (v) {
      return function () {
        return v.apply(null, arguments)
      }
    }),
    (et.cloneElement = function (v, q, Q) {
      if (v == null) throw Error('The argument must be a React element, but you passed ' + v + '.')
      var G = L({}, v.props),
        $ = v.key,
        ot = void 0
      if (q != null)
        for (tt in (q.ref !== void 0 && (ot = void 0), q.key !== void 0 && ($ = '' + q.key), q))
          !rt.call(q, tt) ||
            tt === 'key' ||
            tt === '__self' ||
            tt === '__source' ||
            (tt === 'ref' && q.ref === void 0) ||
            (G[tt] = q[tt])
      var tt = arguments.length - 2
      if (tt === 1) G.children = Q
      else if (1 < tt) {
        for (var ae = Array(tt), At = 0; At < tt; At++) ae[At] = arguments[At + 2]
        G.children = ae
      }
      return ct(v.type, $, void 0, void 0, ot, G)
    }),
    (et.createContext = function (v) {
      return (
        (v = {
          $$typeof: b,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: y, _context: v }),
        v
      )
    }),
    (et.createElement = function (v, q, Q) {
      var G,
        $ = {},
        ot = null
      if (q != null)
        for (G in (q.key !== void 0 && (ot = '' + q.key), q))
          rt.call(q, G) && G !== 'key' && G !== '__self' && G !== '__source' && ($[G] = q[G])
      var tt = arguments.length - 2
      if (tt === 1) $.children = Q
      else if (1 < tt) {
        for (var ae = Array(tt), At = 0; At < tt; At++) ae[At] = arguments[At + 2]
        $.children = ae
      }
      if (v && v.defaultProps)
        for (G in ((tt = v.defaultProps), tt)) $[G] === void 0 && ($[G] = tt[G])
      return ct(v, ot, void 0, void 0, null, $)
    }),
    (et.createRef = function () {
      return { current: null }
    }),
    (et.forwardRef = function (v) {
      return { $$typeof: x, render: v }
    }),
    (et.isValidElement = Rt),
    (et.lazy = function (v) {
      return { $$typeof: T, _payload: { _status: -1, _result: v }, _init: w }
    }),
    (et.memo = function (v, q) {
      return { $$typeof: h, type: v, compare: q === void 0 ? null : q }
    }),
    (et.startTransition = function (v) {
      var q = C.T,
        Q = {}
      C.T = Q
      try {
        var G = v(),
          $ = C.S
        ;($ !== null && $(Q, G),
          typeof G == 'object' && G !== null && typeof G.then == 'function' && G.then(St, F))
      } catch (ot) {
        F(ot)
      } finally {
        C.T = q
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return C.H.useCacheRefresh()
    }),
    (et.use = function (v) {
      return C.H.use(v)
    }),
    (et.useActionState = function (v, q, Q) {
      return C.H.useActionState(v, q, Q)
    }),
    (et.useCallback = function (v, q) {
      return C.H.useCallback(v, q)
    }),
    (et.useContext = function (v) {
      return C.H.useContext(v)
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (v, q) {
      return C.H.useDeferredValue(v, q)
    }),
    (et.useEffect = function (v, q, Q) {
      var G = C.H
      if (typeof Q == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.')
      return G.useEffect(v, q)
    }),
    (et.useId = function () {
      return C.H.useId()
    }),
    (et.useImperativeHandle = function (v, q, Q) {
      return C.H.useImperativeHandle(v, q, Q)
    }),
    (et.useInsertionEffect = function (v, q) {
      return C.H.useInsertionEffect(v, q)
    }),
    (et.useLayoutEffect = function (v, q) {
      return C.H.useLayoutEffect(v, q)
    }),
    (et.useMemo = function (v, q) {
      return C.H.useMemo(v, q)
    }),
    (et.useOptimistic = function (v, q) {
      return C.H.useOptimistic(v, q)
    }),
    (et.useReducer = function (v, q, Q) {
      return C.H.useReducer(v, q, Q)
    }),
    (et.useRef = function (v) {
      return C.H.useRef(v)
    }),
    (et.useState = function (v) {
      return C.H.useState(v)
    }),
    (et.useSyncExternalStore = function (v, q, Q) {
      return C.H.useSyncExternalStore(v, q, Q)
    }),
    (et.useTransition = function () {
      return C.H.useTransition()
    }),
    (et.version = '19.1.1'),
    et
  )
}
var kd
function Kf() {
  return (kd || ((kd = 1), (xf.exports = lv())), xf.exports)
}
var O = Kf()
const av = ui(O)
var Df = { exports: {} },
  Mn = {},
  zf = { exports: {} },
  Mf = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd
function nv() {
  return (
    Wd ||
      ((Wd = 1),
      (function (i) {
        function o(N, w) {
          var F = N.length
          N.push(w)
          t: for (; 0 < F; ) {
            var St = (F - 1) >>> 1,
              v = N[St]
            if (0 < s(v, w)) ((N[St] = w), (N[F] = v), (F = St))
            else break t
          }
        }
        function d(N) {
          return N.length === 0 ? null : N[0]
        }
        function f(N) {
          if (N.length === 0) return null
          var w = N[0],
            F = N.pop()
          if (F !== w) {
            N[0] = F
            t: for (var St = 0, v = N.length, q = v >>> 1; St < q; ) {
              var Q = 2 * (St + 1) - 1,
                G = N[Q],
                $ = Q + 1,
                ot = N[$]
              if (0 > s(G, F))
                $ < v && 0 > s(ot, G)
                  ? ((N[St] = ot), (N[$] = F), (St = $))
                  : ((N[St] = G), (N[Q] = F), (St = Q))
              else if ($ < v && 0 > s(ot, F)) ((N[St] = ot), (N[$] = F), (St = $))
              else break t
            }
          }
          return w
        }
        function s(N, w) {
          var F = N.sortIndex - w.sortIndex
          return F !== 0 ? F : N.id - w.id
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var y = performance
          i.unstable_now = function () {
            return y.now()
          }
        } else {
          var b = Date,
            x = b.now()
          i.unstable_now = function () {
            return b.now() - x
          }
        }
        var g = [],
          h = [],
          T = 1,
          D = null,
          M = 3,
          Y = !1,
          L = !1,
          X = !1,
          Z = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          I = typeof clearTimeout == 'function' ? clearTimeout : null,
          K = typeof setImmediate < 'u' ? setImmediate : null
        function nt(N) {
          for (var w = d(h); w !== null; ) {
            if (w.callback === null) f(h)
            else if (w.startTime <= N) (f(h), (w.sortIndex = w.expirationTime), o(g, w))
            else break
            w = d(h)
          }
        }
        function C(N) {
          if (((X = !1), nt(N), !L))
            if (d(g) !== null) ((L = !0), rt || ((rt = !0), Zt()))
            else {
              var w = d(h)
              w !== null && Vt(C, w.startTime - N)
            }
        }
        var rt = !1,
          ct = -1,
          Tt = 5,
          Rt = -1
        function Gt() {
          return Z ? !0 : !(i.unstable_now() - Rt < Tt)
        }
        function kt() {
          if (((Z = !1), rt)) {
            var N = i.unstable_now()
            Rt = N
            var w = !0
            try {
              t: {
                ;((L = !1), X && ((X = !1), I(ct), (ct = -1)), (Y = !0))
                var F = M
                try {
                  e: {
                    for (nt(N), D = d(g); D !== null && !(D.expirationTime > N && Gt()); ) {
                      var St = D.callback
                      if (typeof St == 'function') {
                        ;((D.callback = null), (M = D.priorityLevel))
                        var v = St(D.expirationTime <= N)
                        if (((N = i.unstable_now()), typeof v == 'function')) {
                          ;((D.callback = v), nt(N), (w = !0))
                          break e
                        }
                        ;(D === d(g) && f(g), nt(N))
                      } else f(g)
                      D = d(g)
                    }
                    if (D !== null) w = !0
                    else {
                      var q = d(h)
                      ;(q !== null && Vt(C, q.startTime - N), (w = !1))
                    }
                  }
                  break t
                } finally {
                  ;((D = null), (M = F), (Y = !1))
                }
                w = void 0
              }
            } finally {
              w ? Zt() : (rt = !1)
            }
          }
        }
        var Zt
        if (typeof K == 'function')
          Zt = function () {
            K(kt)
          }
        else if (typeof MessageChannel < 'u') {
          var Rl = new MessageChannel(),
            Al = Rl.port2
          ;((Rl.port1.onmessage = kt),
            (Zt = function () {
              Al.postMessage(null)
            }))
        } else
          Zt = function () {
            B(kt, 0)
          }
        function Vt(N, w) {
          ct = B(function () {
            N(i.unstable_now())
          }, w)
        }
        ;((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (N) {
            N.callback = null
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Tt = 0 < N ? Math.floor(1e3 / N) : 5)
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return M
          }),
          (i.unstable_next = function (N) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var w = 3
                break
              default:
                w = M
            }
            var F = M
            M = w
            try {
              return N()
            } finally {
              M = F
            }
          }),
          (i.unstable_requestPaint = function () {
            Z = !0
          }),
          (i.unstable_runWithPriority = function (N, w) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                N = 3
            }
            var F = M
            M = N
            try {
              return w()
            } finally {
              M = F
            }
          }),
          (i.unstable_scheduleCallback = function (N, w, F) {
            var St = i.unstable_now()
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? St + F : St))
                : (F = St),
              N)
            ) {
              case 1:
                var v = -1
                break
              case 2:
                v = 250
                break
              case 5:
                v = 1073741823
                break
              case 4:
                v = 1e4
                break
              default:
                v = 5e3
            }
            return (
              (v = F + v),
              (N = {
                id: T++,
                callback: w,
                priorityLevel: N,
                startTime: F,
                expirationTime: v,
                sortIndex: -1,
              }),
              F > St
                ? ((N.sortIndex = F),
                  o(h, N),
                  d(g) === null && N === d(h) && (X ? (I(ct), (ct = -1)) : (X = !0), Vt(C, F - St)))
                : ((N.sortIndex = v), o(g, N), L || Y || ((L = !0), rt || ((rt = !0), Zt()))),
              N
            )
          }),
          (i.unstable_shouldYield = Gt),
          (i.unstable_wrapCallback = function (N) {
            var w = M
            return function () {
              var F = M
              M = w
              try {
                return N.apply(this, arguments)
              } finally {
                M = F
              }
            }
          }))
      })(Mf)),
    Mf
  )
}
var Fd
function uv() {
  return (Fd || ((Fd = 1), (zf.exports = nv())), zf.exports)
}
var Nf = { exports: {} },
  $t = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd
function iv() {
  if (Pd) return $t
  Pd = 1
  var i = Kf()
  function o(g) {
    var h = 'https://react.dev/errors/' + g
    if (1 < arguments.length) {
      h += '?args[]=' + encodeURIComponent(arguments[1])
      for (var T = 2; T < arguments.length; T++) h += '&args[]=' + encodeURIComponent(arguments[T])
    }
    return (
      'Minified React error #' +
      g +
      '; visit ' +
      h +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function d() {}
  var f = {
      d: {
        f: d,
        r: function () {
          throw Error(o(522))
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal')
  function y(g, h, T) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: s,
      key: D == null ? null : '' + D,
      children: g,
      containerInfo: h,
      implementation: T,
    }
  }
  var b = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function x(g, h) {
    if (g === 'font') return ''
    if (typeof h == 'string') return h === 'use-credentials' ? h : ''
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (g, h) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(o(299))
      return y(g, h, null, T)
    }),
    ($t.flushSync = function (g) {
      var h = b.T,
        T = f.p
      try {
        if (((b.T = null), (f.p = 2), g)) return g()
      } finally {
        ;((b.T = h), (f.p = T), f.d.f())
      }
    }),
    ($t.preconnect = function (g, h) {
      typeof g == 'string' &&
        (h
          ? ((h = h.crossOrigin),
            (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        f.d.C(g, h))
    }),
    ($t.prefetchDNS = function (g) {
      typeof g == 'string' && f.d.D(g)
    }),
    ($t.preinit = function (g, h) {
      if (typeof g == 'string' && h && typeof h.as == 'string') {
        var T = h.as,
          D = x(T, h.crossOrigin),
          M = typeof h.integrity == 'string' ? h.integrity : void 0,
          Y = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0
        T === 'style'
          ? f.d.S(g, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: D,
              integrity: M,
              fetchPriority: Y,
            })
          : T === 'script' &&
            f.d.X(g, {
              crossOrigin: D,
              integrity: M,
              fetchPriority: Y,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            })
      }
    }),
    ($t.preinitModule = function (g, h) {
      if (typeof g == 'string')
        if (typeof h == 'object' && h !== null) {
          if (h.as == null || h.as === 'script') {
            var T = x(h.as, h.crossOrigin)
            f.d.M(g, {
              crossOrigin: T,
              integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            })
          }
        } else h == null && f.d.M(g)
    }),
    ($t.preload = function (g, h) {
      if (typeof g == 'string' && typeof h == 'object' && h !== null && typeof h.as == 'string') {
        var T = h.as,
          D = x(T, h.crossOrigin)
        f.d.L(g, T, {
          crossOrigin: D,
          integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
          type: typeof h.type == 'string' ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == 'string' ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == 'string' ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == 'string' ? h.imageSizes : void 0,
          media: typeof h.media == 'string' ? h.media : void 0,
        })
      }
    }),
    ($t.preloadModule = function (g, h) {
      if (typeof g == 'string')
        if (h) {
          var T = x(h.as, h.crossOrigin)
          f.d.m(g, {
            as: typeof h.as == 'string' && h.as !== 'script' ? h.as : void 0,
            crossOrigin: T,
            integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          })
        } else f.d.m(g)
    }),
    ($t.requestFormReset = function (g) {
      f.d.r(g)
    }),
    ($t.unstable_batchedUpdates = function (g, h) {
      return g(h)
    }),
    ($t.useFormState = function (g, h, T) {
      return b.H.useFormState(g, h, T)
    }),
    ($t.useFormStatus = function () {
      return b.H.useHostTransitionStatus()
    }),
    ($t.version = '19.1.1'),
    $t
  )
}
var Id
function cv() {
  if (Id) return Nf.exports
  Id = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (o) {
        console.error(o)
      }
  }
  return (i(), (Nf.exports = iv()), Nf.exports)
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th
function fv() {
  if (th) return Mn
  th = 1
  var i = uv(),
    o = Kf(),
    d = cv()
  function f(t) {
    var e = 'https://react.dev/errors/' + t
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++) e += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
  }
  function y(t) {
    var e = t,
      l = t
    if (t.alternate) for (; e.return; ) e = e.return
    else {
      t = e
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return))
      while (t)
    }
    return e.tag === 3 ? l : null
  }
  function b(t) {
    if (t.tag === 13) {
      var e = t.memoizedState
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated
    }
    return null
  }
  function x(t) {
    if (y(t) !== t) throw Error(f(188))
  }
  function g(t) {
    var e = t.alternate
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(f(188))
      return e !== t ? null : t
    }
    for (var l = t, a = e; ; ) {
      var n = l.return
      if (n === null) break
      var u = n.alternate
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a
          continue
        }
        break
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (x(n), t)
          if (u === a) return (x(n), e)
          u = u.sibling
        }
        throw Error(f(188))
      }
      if (l.return !== a.return) ((l = n), (a = u))
      else {
        for (var c = !1, r = n.child; r; ) {
          if (r === l) {
            ;((c = !0), (l = n), (a = u))
            break
          }
          if (r === a) {
            ;((c = !0), (a = n), (l = u))
            break
          }
          r = r.sibling
        }
        if (!c) {
          for (r = u.child; r; ) {
            if (r === l) {
              ;((c = !0), (l = u), (a = n))
              break
            }
            if (r === a) {
              ;((c = !0), (a = u), (l = n))
              break
            }
            r = r.sibling
          }
          if (!c) throw Error(f(189))
        }
      }
      if (l.alternate !== a) throw Error(f(190))
    }
    if (l.tag !== 3) throw Error(f(188))
    return l.stateNode.current === l ? t : e
  }
  function h(t) {
    var e = t.tag
    if (e === 5 || e === 26 || e === 27 || e === 6) return t
    for (t = t.child; t !== null; ) {
      if (((e = h(t)), e !== null)) return e
      t = t.sibling
    }
    return null
  }
  var T = Object.assign,
    D = Symbol.for('react.element'),
    M = Symbol.for('react.transitional.element'),
    Y = Symbol.for('react.portal'),
    L = Symbol.for('react.fragment'),
    X = Symbol.for('react.strict_mode'),
    Z = Symbol.for('react.profiler'),
    B = Symbol.for('react.provider'),
    I = Symbol.for('react.consumer'),
    K = Symbol.for('react.context'),
    nt = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    rt = Symbol.for('react.suspense_list'),
    ct = Symbol.for('react.memo'),
    Tt = Symbol.for('react.lazy'),
    Rt = Symbol.for('react.activity'),
    Gt = Symbol.for('react.memo_cache_sentinel'),
    kt = Symbol.iterator
  function Zt(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (kt && t[kt]) || t['@@iterator']), typeof t == 'function' ? t : null)
  }
  var Rl = Symbol.for('react.client.reference')
  function Al(t) {
    if (t == null) return null
    if (typeof t == 'function') return t.$$typeof === Rl ? null : t.displayName || t.name || null
    if (typeof t == 'string') return t
    switch (t) {
      case L:
        return 'Fragment'
      case Z:
        return 'Profiler'
      case X:
        return 'StrictMode'
      case C:
        return 'Suspense'
      case rt:
        return 'SuspenseList'
      case Rt:
        return 'Activity'
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case Y:
          return 'Portal'
        case K:
          return (t.displayName || 'Context') + '.Provider'
        case I:
          return (t._context.displayName || 'Context') + '.Consumer'
        case nt:
          var e = t.render
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          )
        case ct:
          return ((e = t.displayName || null), e !== null ? e : Al(t.type) || 'Memo')
        case Tt:
          ;((e = t._payload), (t = t._init))
          try {
            return Al(t(e))
          } catch {}
      }
    return null
  }
  var Vt = Array.isArray,
    N = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    St = [],
    v = -1
  function q(t) {
    return { current: t }
  }
  function Q(t) {
    0 > v || ((t.current = St[v]), (St[v] = null), v--)
  }
  function G(t, e) {
    ;(v++, (St[v] = t.current), (t.current = e))
  }
  var $ = q(null),
    ot = q(null),
    tt = q(null),
    ae = q(null)
  function At(t, e) {
    switch ((G(tt, e), G(ot, t), G($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? bd(t) : 0
        break
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = bd(e)), (t = Ed(e, t)))
        else
          switch (t) {
            case 'svg':
              t = 1
              break
            case 'math':
              t = 2
              break
            default:
              t = 0
          }
    }
    ;(Q($), G($, t))
  }
  function Pe() {
    ;(Q($), Q(ot), Q(tt))
  }
  function oi(t) {
    t.memoizedState !== null && G(ae, t)
    var e = $.current,
      l = Ed(e, t.type)
    e !== l && (G(ot, t), G($, l))
  }
  function qn(t) {
    ;(ot.current === t && (Q($), Q(ot)), ae.current === t && (Q(ae), (An._currentValue = F)))
  }
  var si = Object.prototype.hasOwnProperty,
    di = i.unstable_scheduleCallback,
    hi = i.unstable_cancelCallback,
    Uh = i.unstable_shouldYield,
    Ch = i.unstable_requestPaint,
    Oe = i.unstable_now,
    jh = i.unstable_getCurrentPriorityLevel,
    If = i.unstable_ImmediatePriority,
    tr = i.unstable_UserBlockingPriority,
    Ln = i.unstable_NormalPriority,
    Hh = i.unstable_LowPriority,
    er = i.unstable_IdlePriority,
    qh = i.log,
    Lh = i.unstable_setDisableYieldValue,
    Na = null,
    ne = null
  function Ie(t) {
    if ((typeof qh == 'function' && Lh(t), ne && typeof ne.setStrictMode == 'function'))
      try {
        ne.setStrictMode(Na, t)
      } catch {}
  }
  var ue = Math.clz32 ? Math.clz32 : Gh,
    Bh = Math.log,
    Yh = Math.LN2
  function Gh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Bh(t) / Yh) | 0)) | 0)
  }
  var Bn = 256,
    Yn = 4194304
  function _l(t) {
    var e = t & 42
    if (e !== 0) return e
    switch (t & -t) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return t
    }
  }
  function Gn(t, e, l) {
    var a = t.pendingLanes
    if (a === 0) return 0
    var n = 0,
      u = t.suspendedLanes,
      c = t.pingedLanes
    t = t.warmLanes
    var r = a & 134217727
    return (
      r !== 0
        ? ((a = r & ~u),
          a !== 0
            ? (n = _l(a))
            : ((c &= r), c !== 0 ? (n = _l(c)) : l || ((l = r & ~t), l !== 0 && (n = _l(l)))))
        : ((r = a & ~u),
          r !== 0
            ? (n = _l(r))
            : c !== 0
              ? (n = _l(c))
              : l || ((l = a & ~t), l !== 0 && (n = _l(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n), (l = e & -e), u >= l || (u === 32 && (l & 4194048) !== 0))
          ? e
          : n
    )
  }
  function Ua(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
  }
  function wh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function lr() {
    var t = Bn
    return ((Bn <<= 1), (Bn & 4194048) === 0 && (Bn = 256), t)
  }
  function ar() {
    var t = Yn
    return ((Yn <<= 1), (Yn & 62914560) === 0 && (Yn = 4194304), t)
  }
  function mi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t)
    return e
  }
  function Ca(t, e) {
    ;((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)))
  }
  function Xh(t, e, l, a, n, u) {
    var c = t.pendingLanes
    ;((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0))
    var r = t.entanglements,
      m = t.expirationTimes,
      R = t.hiddenUpdates
    for (l = c & ~l; 0 < l; ) {
      var z = 31 - ue(l),
        j = 1 << z
      ;((r[z] = 0), (m[z] = -1))
      var A = R[z]
      if (A !== null)
        for (R[z] = null, z = 0; z < A.length; z++) {
          var _ = A[z]
          _ !== null && (_.lane &= -536870913)
        }
      l &= ~j
    }
    ;(a !== 0 && nr(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e)))
  }
  function nr(t, e, l) {
    ;((t.pendingLanes |= e), (t.suspendedLanes &= ~e))
    var a = 31 - ue(e)
    ;((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090)))
  }
  function ur(t, e) {
    var l = (t.entangledLanes |= e)
    for (t = t.entanglements; l; ) {
      var a = 31 - ue(l),
        n = 1 << a
      ;((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n))
    }
  }
  function yi(t) {
    switch (t) {
      case 2:
        t = 1
        break
      case 8:
        t = 4
        break
      case 32:
        t = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128
        break
      case 268435456:
        t = 134217728
        break
      default:
        t = 0
    }
    return t
  }
  function vi(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2)
  }
  function ir() {
    var t = w.p
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Gd(t.type))
  }
  function Qh(t, e) {
    var l = w.p
    try {
      return ((w.p = t), e())
    } finally {
      w.p = l
    }
  }
  var tl = Math.random().toString(36).slice(2),
    Kt = '__reactFiber$' + tl,
    Ft = '__reactProps$' + tl,
    Zl = '__reactContainer$' + tl,
    pi = '__reactEvents$' + tl,
    Zh = '__reactListeners$' + tl,
    Vh = '__reactHandles$' + tl,
    cr = '__reactResources$' + tl,
    ja = '__reactMarker$' + tl
  function gi(t) {
    ;(delete t[Kt], delete t[Ft], delete t[pi], delete t[Zh], delete t[Vh])
  }
  function Vl(t) {
    var e = t[Kt]
    if (e) return e
    for (var l = t.parentNode; l; ) {
      if ((e = l[Zl] || l[Kt])) {
        if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
          for (t = _d(t); t !== null; ) {
            if ((l = t[Kt])) return l
            t = _d(t)
          }
        return e
      }
      ;((t = l), (l = t.parentNode))
    }
    return null
  }
  function Kl(t) {
    if ((t = t[Kt] || t[Zl])) {
      var e = t.tag
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
    }
    return null
  }
  function Ha(t) {
    var e = t.tag
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode
    throw Error(f(33))
  }
  function Jl(t) {
    var e = t[cr]
    return (e || (e = t[cr] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e)
  }
  function qt(t) {
    t[ja] = !0
  }
  var fr = new Set(),
    rr = {}
  function Ol(t, e) {
    ;($l(t, e), $l(t + 'Capture', e))
  }
  function $l(t, e) {
    for (rr[t] = e, t = 0; t < e.length; t++) fr.add(e[t])
  }
  var Kh = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    or = {},
    sr = {}
  function Jh(t) {
    return si.call(sr, t)
      ? !0
      : si.call(or, t)
        ? !1
        : Kh.test(t)
          ? (sr[t] = !0)
          : ((or[t] = !0), !1)
  }
  function wn(t, e, l) {
    if (Jh(e))
      if (l === null) t.removeAttribute(e)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e)
            return
          case 'boolean':
            var a = e.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(e)
              return
            }
        }
        t.setAttribute(e, '' + l)
      }
  }
  function Xn(t, e, l) {
    if (l === null) t.removeAttribute(e)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e)
          return
      }
      t.setAttribute(e, '' + l)
    }
  }
  function je(t, e, l, a) {
    if (a === null) t.removeAttribute(l)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l)
          return
      }
      t.setAttributeNS(e, l, '' + a)
    }
  }
  var Si, dr
  function kl(t) {
    if (Si === void 0)
      try {
        throw Error()
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/)
        ;((Si = (e && e[1]) || ''),
          (dr =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''))
      }
    return (
      `
` +
      Si +
      t +
      dr
    )
  }
  var bi = !1
  function Ei(t, e) {
    if (!t || bi) return ''
    bi = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(j.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, [])
                } catch (_) {
                  var A = _
                }
                Reflect.construct(t, [], j)
              } else {
                try {
                  j.call()
                } catch (_) {
                  A = _
                }
                t.call(j.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (_) {
                A = _
              }
              ;(j = t()) && typeof j.catch == 'function' && j.catch(function () {})
            }
          } catch (_) {
            if (_ && A && typeof _.stack == 'string') return [_.stack, A.stack]
          }
          return [null, null]
        },
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name')
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        r = u[1]
      if (c && r) {
        var m = c.split(`
`),
          R = r.split(`
`)
        for (n = a = 0; a < m.length && !m[a].includes('DetermineComponentFrameRoot'); ) a++
        for (; n < R.length && !R[n].includes('DetermineComponentFrameRoot'); ) n++
        if (a === m.length || n === R.length)
          for (a = m.length - 1, n = R.length - 1; 1 <= a && 0 <= n && m[a] !== R[n]; ) n--
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== R[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || m[a] !== R[n])) {
                  var z =
                    `
` + m[a].replace(' at new ', ' at ')
                  return (
                    t.displayName &&
                      z.includes('<anonymous>') &&
                      (z = z.replace('<anonymous>', t.displayName)),
                    z
                  )
                }
              while (1 <= a && 0 <= n)
            break
          }
      }
    } finally {
      ;((bi = !1), (Error.prepareStackTrace = l))
    }
    return (l = t ? t.displayName || t.name : '') ? kl(l) : ''
  }
  function $h(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kl(t.type)
      case 16:
        return kl('Lazy')
      case 13:
        return kl('Suspense')
      case 19:
        return kl('SuspenseList')
      case 0:
      case 15:
        return Ei(t.type, !1)
      case 11:
        return Ei(t.type.render, !1)
      case 1:
        return Ei(t.type, !0)
      case 31:
        return kl('Activity')
      default:
        return ''
    }
  }
  function hr(t) {
    try {
      var e = ''
      do ((e += $h(t)), (t = t.return))
      while (t)
      return e
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      )
    }
  }
  function he(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t
      case 'object':
        return t
      default:
        return ''
    }
  }
  function mr(t) {
    var e = t.type
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio')
  }
  function kh(t) {
    var e = mr(t) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = '' + t[e]
    if (
      !t.hasOwnProperty(e) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var n = l.get,
        u = l.set
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this)
          },
          set: function (c) {
            ;((a = '' + c), u.call(this, c))
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (c) {
            a = '' + c
          },
          stopTracking: function () {
            ;((t._valueTracker = null), delete t[e])
          },
        }
      )
    }
  }
  function Qn(t) {
    t._valueTracker || (t._valueTracker = kh(t))
  }
  function yr(t) {
    if (!t) return !1
    var e = t._valueTracker
    if (!e) return !0
    var l = e.getValue(),
      a = ''
    return (
      t && (a = mr(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    )
  }
  function Zn(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var Wh = /[\n"\\]/g
  function me(t) {
    return t.replace(Wh, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' '
    })
  }
  function Ti(t, e, l, a, n, u, c, r) {
    ;((t.name = ''),
      c != null && typeof c != 'function' && typeof c != 'symbol' && typeof c != 'boolean'
        ? (t.type = c)
        : t.removeAttribute('type'),
      e != null
        ? c === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + he(e))
          : t.value !== '' + he(e) && (t.value = '' + he(e))
        : (c !== 'submit' && c !== 'reset') || t.removeAttribute('value'),
      e != null
        ? Ri(t, c, he(e))
        : l != null
          ? Ri(t, c, he(l))
          : a != null && t.removeAttribute('value'),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null && (t.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      r != null && typeof r != 'function' && typeof r != 'symbol' && typeof r != 'boolean'
        ? (t.name = '' + he(r))
        : t.removeAttribute('name'))
  }
  function vr(t, e, l, a, n, u, c, r) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) return
      ;((l = l != null ? '' + he(l) : ''),
        (e = e != null ? '' + he(e) : l),
        r || e === t.value || (t.value = e),
        (t.defaultValue = e))
    }
    ;((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = r ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (t.name = c))
  }
  function Ri(t, e, l) {
    ;(e === 'number' && Zn(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l)
  }
  function Wl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {}
      for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0))
    } else {
      for (l = '' + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ;((t[n].selected = !0), a && (t[n].defaultSelected = !0))
          return
        }
        e !== null || t[n].disabled || (e = t[n])
      }
      e !== null && (e.selected = !0)
    }
  }
  function pr(t, e, l) {
    if (e != null && ((e = '' + he(e)), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e)
      return
    }
    t.defaultValue = l != null ? '' + he(l) : ''
  }
  function gr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92))
        if (Vt(a)) {
          if (1 < a.length) throw Error(f(93))
          a = a[0]
        }
        l = a
      }
      ;(l == null && (l = ''), (e = l))
    }
    ;((l = he(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a))
  }
  function Fl(t, e) {
    if (e) {
      var l = t.firstChild
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e
        return
      }
    }
    t.textContent = e
  }
  var Fh = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function Sr(t, e, l) {
    var a = e.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : a
        ? t.setProperty(e, l)
        : typeof l != 'number' || l === 0 || Fh.has(e)
          ? e === 'float'
            ? (t.cssFloat = l)
            : (t[e] = ('' + l).trim())
          : (t[e] = l + 'px')
  }
  function br(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(f(62))
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? t.setProperty(a, '')
            : a === 'float'
              ? (t.cssFloat = '')
              : (t[a] = ''))
      for (var n in e) ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && Sr(t, n, a))
    } else for (var u in e) e.hasOwnProperty(u) && Sr(t, u, e[u])
  }
  function Ai(t) {
    if (t.indexOf('-') === -1) return !1
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Ph = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Ih =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Vn(t) {
    return Ih.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t
  }
  var _i = null
  function Oi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    )
  }
  var Pl = null,
    Il = null
  function Er(t) {
    var e = Kl(t)
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Ti(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === 'radio' && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode
            for (
              l = l.querySelectorAll('input[name="' + me('' + e) + '"][type="radio"]'), e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e]
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null
                if (!n) throw Error(f(90))
                Ti(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                )
              }
            }
            for (e = 0; e < l.length; e++) ((a = l[e]), a.form === t.form && yr(a))
          }
          break t
        case 'textarea':
          pr(t, l.value, l.defaultValue)
          break t
        case 'select':
          ;((e = l.value), e != null && Wl(t, !!l.multiple, e, !1))
      }
    }
  }
  var xi = !1
  function Tr(t, e, l) {
    if (xi) return t(e, l)
    xi = !0
    try {
      var a = t(e)
      return a
    } finally {
      if (
        ((xi = !1),
        (Pl !== null || Il !== null) &&
          (Mu(), Pl && ((e = Pl), (t = Il), (Il = Pl = null), Er(e), t)))
      )
        for (e = 0; e < t.length; e++) Er(t[e])
    }
  }
  function qa(t, e) {
    var l = t.stateNode
    if (l === null) return null
    var a = l[Ft] || null
    if (a === null) return null
    l = a[e]
    t: switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((a = !a.disabled) ||
          ((t = t.type),
          (a = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !a))
        break t
      default:
        t = !1
    }
    if (t) return null
    if (l && typeof l != 'function') throw Error(f(231, e, typeof l))
    return l
  }
  var He = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Di = !1
  if (He)
    try {
      var La = {}
      ;(Object.defineProperty(La, 'passive', {
        get: function () {
          Di = !0
        },
      }),
        window.addEventListener('test', La, La),
        window.removeEventListener('test', La, La))
    } catch {
      Di = !1
    }
  var el = null,
    zi = null,
    Kn = null
  function Rr() {
    if (Kn) return Kn
    var t,
      e = zi,
      l = e.length,
      a,
      n = 'value' in el ? el.value : el.textContent,
      u = n.length
    for (t = 0; t < l && e[t] === n[t]; t++);
    var c = l - t
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++);
    return (Kn = n.slice(t, 1 < a ? 1 - a : void 0))
  }
  function Jn(t) {
    var e = t.keyCode
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    )
  }
  function $n() {
    return !0
  }
  function Ar() {
    return !1
  }
  function Pt(t) {
    function e(l, a, n, u, c) {
      ;((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null))
      for (var r in t) t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(u) : u[r]))
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $n
          : Ar),
        (this.isPropagationStopped = Ar),
        this
      )
    }
    return (
      T(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = $n))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = $n))
        },
        persist: function () {},
        isPersistent: $n,
      }),
      e
    )
  }
  var xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    kn = Pt(xl),
    Ba = T({}, xl, { view: 0, detail: 0 }),
    tm = Pt(Ba),
    Mi,
    Ni,
    Ya,
    Wn = T({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Ya &&
              (Ya && t.type === 'mousemove'
                ? ((Mi = t.screenX - Ya.screenX), (Ni = t.screenY - Ya.screenY))
                : (Ni = Mi = 0),
              (Ya = t)),
            Mi)
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ni
      },
    }),
    _r = Pt(Wn),
    em = T({}, Wn, { dataTransfer: 0 }),
    lm = Pt(em),
    am = T({}, Ba, { relatedTarget: 0 }),
    Ui = Pt(am),
    nm = T({}, xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    um = Pt(nm),
    im = T({}, xl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData
      },
    }),
    cm = Pt(im),
    fm = T({}, xl, { data: 0 }),
    Or = Pt(fm),
    rm = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    om = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    sm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function dm(t) {
    var e = this.nativeEvent
    return e.getModifierState ? e.getModifierState(t) : (t = sm[t]) ? !!e[t] : !1
  }
  function Ci() {
    return dm
  }
  var hm = T({}, Ba, {
      key: function (t) {
        if (t.key) {
          var e = rm[t.key] || t.key
          if (e !== 'Unidentified') return e
        }
        return t.type === 'keypress'
          ? ((t = Jn(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? om[t.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function (t) {
        return t.type === 'keypress' ? Jn(t) : 0
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
      },
      which: function (t) {
        return t.type === 'keypress'
          ? Jn(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0
      },
    }),
    mm = Pt(hm),
    ym = T({}, Wn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xr = Pt(ym),
    vm = T({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    pm = Pt(vm),
    gm = T({}, xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sm = Pt(gm),
    bm = T({}, Wn, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Em = Pt(bm),
    Tm = T({}, xl, { newState: 0, oldState: 0 }),
    Rm = Pt(Tm),
    Am = [9, 13, 27, 32],
    ji = He && 'CompositionEvent' in window,
    Ga = null
  He && 'documentMode' in document && (Ga = document.documentMode)
  var _m = He && 'TextEvent' in window && !Ga,
    Dr = He && (!ji || (Ga && 8 < Ga && 11 >= Ga)),
    zr = ' ',
    Mr = !1
  function Nr(t, e) {
    switch (t) {
      case 'keyup':
        return Am.indexOf(e.keyCode) !== -1
      case 'keydown':
        return e.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Ur(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null)
  }
  var ta = !1
  function Om(t, e) {
    switch (t) {
      case 'compositionend':
        return Ur(e)
      case 'keypress':
        return e.which !== 32 ? null : ((Mr = !0), zr)
      case 'textInput':
        return ((t = e.data), t === zr && Mr ? null : t)
      default:
        return null
    }
  }
  function xm(t, e) {
    if (ta)
      return t === 'compositionend' || (!ji && Nr(t, e))
        ? ((t = Rr()), (Kn = zi = el = null), (ta = !1), t)
        : null
    switch (t) {
      case 'paste':
        return null
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char
          if (e.which) return String.fromCharCode(e.which)
        }
        return null
      case 'compositionend':
        return Dr && e.locale !== 'ko' ? null : e.data
      default:
        return null
    }
  }
  var Dm = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function Cr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return e === 'input' ? !!Dm[t.type] : e === 'textarea'
  }
  function jr(t, e, l, a) {
    ;(Pl ? (Il ? Il.push(a) : (Il = [a])) : (Pl = a),
      (e = qu(e, 'onChange')),
      0 < e.length &&
        ((l = new kn('onChange', 'change', null, l, a)), t.push({ event: l, listeners: e })))
  }
  var wa = null,
    Xa = null
  function zm(t) {
    yd(t, 0)
  }
  function Fn(t) {
    var e = Ha(t)
    if (yr(e)) return t
  }
  function Hr(t, e) {
    if (t === 'change') return e
  }
  var qr = !1
  if (He) {
    var Hi
    if (He) {
      var qi = 'oninput' in document
      if (!qi) {
        var Lr = document.createElement('div')
        ;(Lr.setAttribute('oninput', 'return;'), (qi = typeof Lr.oninput == 'function'))
      }
      Hi = qi
    } else Hi = !1
    qr = Hi && (!document.documentMode || 9 < document.documentMode)
  }
  function Br() {
    wa && (wa.detachEvent('onpropertychange', Yr), (Xa = wa = null))
  }
  function Yr(t) {
    if (t.propertyName === 'value' && Fn(Xa)) {
      var e = []
      ;(jr(e, Xa, t, Oi(t)), Tr(zm, e))
    }
  }
  function Mm(t, e, l) {
    t === 'focusin'
      ? (Br(), (wa = e), (Xa = l), wa.attachEvent('onpropertychange', Yr))
      : t === 'focusout' && Br()
  }
  function Nm(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Fn(Xa)
  }
  function Um(t, e) {
    if (t === 'click') return Fn(e)
  }
  function Cm(t, e) {
    if (t === 'input' || t === 'change') return Fn(e)
  }
  function jm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
  }
  var ie = typeof Object.is == 'function' ? Object.is : jm
  function Qa(t, e) {
    if (ie(t, e)) return !0
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1
    var l = Object.keys(t),
      a = Object.keys(e)
    if (l.length !== a.length) return !1
    for (a = 0; a < l.length; a++) {
      var n = l[a]
      if (!si.call(e, n) || !ie(t[n], e[n])) return !1
    }
    return !0
  }
  function Gr(t) {
    for (; t && t.firstChild; ) t = t.firstChild
    return t
  }
  function wr(t, e) {
    var l = Gr(t)
    t = 0
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e)) return { node: l, offset: e - t }
        t = a
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break t
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = Gr(l)
    }
  }
  function Xr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Xr(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1
  }
  function Qr(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window
    for (var e = Zn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) t = e.contentWindow
      else break
      e = Zn(t.document)
    }
    return e
  }
  function Li(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    )
  }
  var Hm = He && 'documentMode' in document && 11 >= document.documentMode,
    ea = null,
    Bi = null,
    Za = null,
    Yi = !1
  function Zr(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    Yi ||
      ea == null ||
      ea !== Zn(a) ||
      ((a = ea),
      'selectionStart' in a && Li(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Qa(Za, a)) ||
        ((Za = a),
        (a = qu(Bi, 'onSelect')),
        0 < a.length &&
          ((e = new kn('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ea))))
  }
  function Dl(t, e) {
    var l = {}
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    )
  }
  var la = {
      animationend: Dl('Animation', 'AnimationEnd'),
      animationiteration: Dl('Animation', 'AnimationIteration'),
      animationstart: Dl('Animation', 'AnimationStart'),
      transitionrun: Dl('Transition', 'TransitionRun'),
      transitionstart: Dl('Transition', 'TransitionStart'),
      transitioncancel: Dl('Transition', 'TransitionCancel'),
      transitionend: Dl('Transition', 'TransitionEnd'),
    },
    Gi = {},
    Vr = {}
  He &&
    ((Vr = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete la.animationend.animation,
      delete la.animationiteration.animation,
      delete la.animationstart.animation),
    'TransitionEvent' in window || delete la.transitionend.transition)
  function zl(t) {
    if (Gi[t]) return Gi[t]
    if (!la[t]) return t
    var e = la[t],
      l
    for (l in e) if (e.hasOwnProperty(l) && l in Vr) return (Gi[t] = e[l])
    return t
  }
  var Kr = zl('animationend'),
    Jr = zl('animationiteration'),
    $r = zl('animationstart'),
    qm = zl('transitionrun'),
    Lm = zl('transitionstart'),
    Bm = zl('transitioncancel'),
    kr = zl('transitionend'),
    Wr = new Map(),
    wi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  wi.push('scrollEnd')
  function Te(t, e) {
    ;(Wr.set(t, e), Ol(e, [t]))
  }
  var Fr = new WeakMap()
  function ye(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = Fr.get(t)
      return l !== void 0 ? l : ((e = { value: t, source: e, stack: hr(e) }), Fr.set(t, e), e)
    }
    return { value: t, source: e, stack: hr(e) }
  }
  var ve = [],
    aa = 0,
    Xi = 0
  function Pn() {
    for (var t = aa, e = (Xi = aa = 0); e < t; ) {
      var l = ve[e]
      ve[e++] = null
      var a = ve[e]
      ve[e++] = null
      var n = ve[e]
      ve[e++] = null
      var u = ve[e]
      if (((ve[e++] = null), a !== null && n !== null)) {
        var c = a.pending
        ;(c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)), (a.pending = n))
      }
      u !== 0 && Pr(l, n, u)
    }
  }
  function In(t, e, l, a) {
    ;((ve[aa++] = t),
      (ve[aa++] = e),
      (ve[aa++] = l),
      (ve[aa++] = a),
      (Xi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a))
  }
  function Qi(t, e, l, a) {
    return (In(t, e, l, a), tu(t))
  }
  function na(t, e) {
    return (In(t, null, null, e), tu(t))
  }
  function Pr(t, e, l) {
    t.lanes |= l
    var a = t.alternate
    a !== null && (a.lanes |= l)
    for (var n = !1, u = t.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return))
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ue(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null
  }
  function tu(t) {
    if (50 < vn) throw ((vn = 0), (kc = null), Error(f(185)))
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return))
    return t.tag === 3 ? t.stateNode : null
  }
  var ua = {}
  function Ym(t, e, l, a) {
    ;((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function ce(t, e, l, a) {
    return new Ym(t, e, l, a)
  }
  function Zi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent))
  }
  function qe(t, e) {
    var l = t.alternate
    return (
      l === null
        ? ((l = ce(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    )
  }
  function Ir(t, e) {
    t.flags &= 65011714
    var l = t.alternate
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    )
  }
  function eu(t, e, l, a, n, u) {
    var c = 0
    if (((a = t), typeof t == 'function')) Zi(t) && (c = 1)
    else if (typeof t == 'string')
      c = wy(t, l, $.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5
    else
      t: switch (t) {
        case Rt:
          return ((t = ce(31, l, e, n)), (t.elementType = Rt), (t.lanes = u), t)
        case L:
          return Ml(l.children, n, u, e)
        case X:
          ;((c = 8), (n |= 24))
          break
        case Z:
          return ((t = ce(12, l, e, n | 2)), (t.elementType = Z), (t.lanes = u), t)
        case C:
          return ((t = ce(13, l, e, n)), (t.elementType = C), (t.lanes = u), t)
        case rt:
          return ((t = ce(19, l, e, n)), (t.elementType = rt), (t.lanes = u), t)
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case B:
              case K:
                c = 10
                break t
              case I:
                c = 9
                break t
              case nt:
                c = 11
                break t
              case ct:
                c = 14
                break t
              case Tt:
                ;((c = 16), (a = null))
                break t
            }
          ;((c = 29), (l = Error(f(130, t === null ? 'null' : typeof t, ''))), (a = null))
      }
    return ((e = ce(c, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e)
  }
  function Ml(t, e, l, a) {
    return ((t = ce(7, t, a, e)), (t.lanes = l), t)
  }
  function Vi(t, e, l) {
    return ((t = ce(6, t, null, e)), (t.lanes = l), t)
  }
  function Ki(t, e, l) {
    return (
      (e = ce(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    )
  }
  var ia = [],
    ca = 0,
    lu = null,
    au = 0,
    pe = [],
    ge = 0,
    Nl = null,
    Le = 1,
    Be = ''
  function Ul(t, e) {
    ;((ia[ca++] = au), (ia[ca++] = lu), (lu = t), (au = e))
  }
  function to(t, e, l) {
    ;((pe[ge++] = Le), (pe[ge++] = Be), (pe[ge++] = Nl), (Nl = t))
    var a = Le
    t = Be
    var n = 32 - ue(a) - 1
    ;((a &= ~(1 << n)), (l += 1))
    var u = 32 - ue(e) + n
    if (30 < u) {
      var c = n - (n % 5)
      ;((u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Le = (1 << (32 - ue(e) + n)) | (l << n) | a),
        (Be = u + t))
    } else ((Le = (1 << u) | (l << n) | a), (Be = t))
  }
  function Ji(t) {
    t.return !== null && (Ul(t, 1), to(t, 1, 0))
  }
  function $i(t) {
    for (; t === lu; ) ((lu = ia[--ca]), (ia[ca] = null), (au = ia[--ca]), (ia[ca] = null))
    for (; t === Nl; )
      ((Nl = pe[--ge]),
        (pe[ge] = null),
        (Be = pe[--ge]),
        (pe[ge] = null),
        (Le = pe[--ge]),
        (pe[ge] = null))
  }
  var Wt = null,
    Dt = null,
    dt = !1,
    Cl = null,
    xe = !1,
    ki = Error(f(519))
  function jl(t) {
    var e = Error(f(418, ''))
    throw (Ja(ye(e, t)), ki)
  }
  function eo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps
    switch (((e[Kt] = t), (e[Ft] = a), l)) {
      case 'dialog':
        ;(it('cancel', e), it('close', e))
        break
      case 'iframe':
      case 'object':
      case 'embed':
        it('load', e)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < gn.length; l++) it(gn[l], e)
        break
      case 'source':
        it('error', e)
        break
      case 'img':
      case 'image':
      case 'link':
        ;(it('error', e), it('load', e))
        break
      case 'details':
        it('toggle', e)
        break
      case 'input':
        ;(it('invalid', e),
          vr(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          Qn(e))
        break
      case 'select':
        it('invalid', e)
        break
      case 'textarea':
        ;(it('invalid', e), gr(e, a.value, a.defaultValue, a.children), Qn(e))
    }
    ;((l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      e.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Sd(e.textContent, l)
        ? (a.popover != null && (it('beforetoggle', e), it('toggle', e)),
          a.onScroll != null && it('scroll', e),
          a.onScrollEnd != null && it('scrollend', e),
          a.onClick != null && (e.onclick = Lu),
          (e = !0))
        : (e = !1),
      e || jl(t))
  }
  function lo(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          xe = !1
          return
        case 27:
        case 3:
          xe = !0
          return
        default:
          Wt = Wt.return
      }
  }
  function Va(t) {
    if (t !== Wt) return !1
    if (!dt) return (lo(t), (dt = !0), !1)
    var e = t.tag,
      l
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type), (l = !(l !== 'form' && l !== 'button') || df(t.type, t.memoizedProps))),
        (l = !l)),
      l && Dt && jl(t),
      lo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(f(317))
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === '/$')) {
              if (e === 0) {
                Dt = Ae(t.nextSibling)
                break t
              }
              e--
            } else (l !== '$' && l !== '$!' && l !== '$?') || e++
          t = t.nextSibling
        }
        Dt = null
      }
    } else
      e === 27
        ? ((e = Dt), pl(t.type) ? ((t = vf), (vf = null), (Dt = t)) : (Dt = e))
        : (Dt = Wt ? Ae(t.stateNode.nextSibling) : null)
    return !0
  }
  function Ka() {
    ;((Dt = Wt = null), (dt = !1))
  }
  function ao() {
    var t = Cl
    return (t !== null && (ee === null ? (ee = t) : ee.push.apply(ee, t), (Cl = null)), t)
  }
  function Ja(t) {
    Cl === null ? (Cl = [t]) : Cl.push(t)
  }
  var Wi = q(null),
    Hl = null,
    Ye = null
  function ll(t, e, l) {
    ;(G(Wi, e._currentValue), (e._currentValue = l))
  }
  function Ge(t) {
    ;((t._currentValue = Wi.current), Q(Wi))
  }
  function Fi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break
      t = t.return
    }
  }
  function Pi(t, e, l, a) {
    var n = t.child
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies
      if (u !== null) {
        var c = n.child
        u = u.firstContext
        t: for (; u !== null; ) {
          var r = u
          u = n
          for (var m = 0; m < e.length; m++)
            if (r.context === e[m]) {
              ;((u.lanes |= l),
                (r = u.alternate),
                r !== null && (r.lanes |= l),
                Fi(u.return, l, t),
                a || (c = null))
              break t
            }
          u = r.next
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(f(341))
        ;((c.lanes |= l), (u = c.alternate), u !== null && (u.lanes |= l), Fi(c, l, t), (c = null))
      } else c = n.child
      if (c !== null) c.return = n
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null
            break
          }
          if (((n = c.sibling), n !== null)) {
            ;((n.return = c.return), (c = n))
            break
          }
          c = c.return
        }
      n = c
    }
  }
  function $a(t, e, l, a) {
    t = null
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var c = n.alternate
        if (c === null) throw Error(f(387))
        if (((c = c.memoizedProps), c !== null)) {
          var r = n.type
          ie(n.pendingProps.value, c.value) || (t !== null ? t.push(r) : (t = [r]))
        }
      } else if (n === ae.current) {
        if (((c = n.alternate), c === null)) throw Error(f(387))
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(An) : (t = [An]))
      }
      n = n.return
    }
    ;(t !== null && Pi(e, t, l, a), (e.flags |= 262144))
  }
  function nu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ie(t.context._currentValue, t.memoizedValue)) return !0
      t = t.next
    }
    return !1
  }
  function ql(t) {
    ;((Hl = t), (Ye = null), (t = t.dependencies), t !== null && (t.firstContext = null))
  }
  function Jt(t) {
    return no(Hl, t)
  }
  function uu(t, e) {
    return (Hl === null && ql(t), no(t, e))
  }
  function no(t, e) {
    var l = e._currentValue
    if (((e = { context: e, memoizedValue: l, next: null }), Ye === null)) {
      if (t === null) throw Error(f(308))
      ;((Ye = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288))
    } else Ye = Ye.next = e
    return l
  }
  var Gm =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a)
                },
              })
            this.abort = function () {
              ;((e.aborted = !0),
                t.forEach(function (l) {
                  return l()
                }))
            }
          },
    wm = i.unstable_scheduleCallback,
    Xm = i.unstable_NormalPriority,
    jt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function Ii() {
    return { controller: new Gm(), data: new Map(), refCount: 0 }
  }
  function ka(t) {
    ;(t.refCount--,
      t.refCount === 0 &&
        wm(Xm, function () {
          t.controller.abort()
        }))
  }
  var Wa = null,
    tc = 0,
    fa = 0,
    ra = null
  function Qm(t, e) {
    if (Wa === null) {
      var l = (Wa = [])
      ;((tc = 0),
        (fa = lf()),
        (ra = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a)
          },
        }))
    }
    return (tc++, e.then(uo, uo), e)
  }
  function uo() {
    if (--tc === 0 && Wa !== null) {
      ra !== null && (ra.status = 'fulfilled')
      var t = Wa
      ;((Wa = null), (fa = 0), (ra = null))
      for (var e = 0; e < t.length; e++) (0, t[e])()
    }
  }
  function Zm(t, e) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n)
        },
      }
    return (
      t.then(
        function () {
          ;((a.status = 'fulfilled'), (a.value = e))
          for (var n = 0; n < l.length; n++) (0, l[n])(e)
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0)
        }
      ),
      a
    )
  }
  var io = N.S
  N.S = function (t, e) {
    ;(typeof e == 'object' && e !== null && typeof e.then == 'function' && Qm(t, e),
      io !== null && io(t, e))
  }
  var Ll = q(null)
  function ec() {
    var t = Ll.current
    return t !== null ? t : Et.pooledCache
  }
  function iu(t, e) {
    e === null ? G(Ll, Ll.current) : G(Ll, e.pool)
  }
  function co() {
    var t = ec()
    return t === null ? null : { parent: jt._currentValue, pool: t }
  }
  var Fa = Error(f(460)),
    fo = Error(f(474)),
    cu = Error(f(542)),
    lc = { then: function () {} }
  function ro(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected')
  }
  function fu() {}
  function oo(t, e, l) {
    switch (
      ((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(fu, fu), (e = l)), e.status)
    ) {
      case 'fulfilled':
        return e.value
      case 'rejected':
        throw ((t = e.reason), ho(t), t)
      default:
        if (typeof e.status == 'string') e.then(fu, fu)
        else {
          if (((t = Et), t !== null && 100 < t.shellSuspendCounter)) throw Error(f(482))
          ;((t = e),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (e.status === 'pending') {
                  var n = e
                  ;((n.status = 'fulfilled'), (n.value = a))
                }
              },
              function (a) {
                if (e.status === 'pending') {
                  var n = e
                  ;((n.status = 'rejected'), (n.reason = a))
                }
              }
            ))
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value
          case 'rejected':
            throw ((t = e.reason), ho(t), t)
        }
        throw ((Pa = e), Fa)
    }
  }
  var Pa = null
  function so() {
    if (Pa === null) throw Error(f(459))
    var t = Pa
    return ((Pa = null), t)
  }
  function ho(t) {
    if (t === Fa || t === cu) throw Error(f(483))
  }
  var al = !1
  function ac(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function nc(t, e) {
    ;((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }))
  }
  function nl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function ul(t, e, l) {
    var a = t.updateQueue
    if (a === null) return null
    if (((a = a.shared), (mt & 2) !== 0)) {
      var n = a.pending
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = tu(t)),
        Pr(t, null, l),
        e
      )
    }
    return (In(t, a, e, l), tu(t))
  }
  function Ia(t, e, l) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))) {
      var a = e.lanes
      ;((a &= t.pendingLanes), (l |= a), (e.lanes = l), ur(t, l))
    }
  }
  function uc(t, e) {
    var l = t.updateQueue,
      a = t.alternate
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null }
          ;(u === null ? (n = u = c) : (u = u.next = c), (l = l.next))
        } while (l !== null)
        u === null ? (n = u = e) : (u = u.next = e)
      } else n = u = e
      ;((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l))
      return
    }
    ;((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e))
  }
  var ic = !1
  function tn() {
    if (ic) {
      var t = ra
      if (t !== null) throw t
    }
  }
  function en(t, e, l, a) {
    ic = !1
    var n = t.updateQueue
    al = !1
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      r = n.shared.pending
    if (r !== null) {
      n.shared.pending = null
      var m = r,
        R = m.next
      ;((m.next = null), c === null ? (u = R) : (c.next = R), (c = m))
      var z = t.alternate
      z !== null &&
        ((z = z.updateQueue),
        (r = z.lastBaseUpdate),
        r !== c && (r === null ? (z.firstBaseUpdate = R) : (r.next = R), (z.lastBaseUpdate = m)))
    }
    if (u !== null) {
      var j = n.baseState
      ;((c = 0), (z = R = m = null), (r = u))
      do {
        var A = r.lane & -536870913,
          _ = A !== r.lane
        if (_ ? (ft & A) === A : (a & A) === A) {
          ;(A !== 0 && A === fa && (ic = !0),
            z !== null &&
              (z = z.next =
                { lane: 0, tag: r.tag, payload: r.payload, callback: null, next: null }))
          t: {
            var P = t,
              k = r
            A = e
            var gt = l
            switch (k.tag) {
              case 1:
                if (((P = k.payload), typeof P == 'function')) {
                  j = P.call(gt, j, A)
                  break t
                }
                j = P
                break t
              case 3:
                P.flags = (P.flags & -65537) | 128
              case 0:
                if (
                  ((P = k.payload), (A = typeof P == 'function' ? P.call(gt, j, A) : P), A == null)
                )
                  break t
                j = T({}, j, A)
                break t
              case 2:
                al = !0
            }
          }
          ;((A = r.callback),
            A !== null &&
              ((t.flags |= 64),
              _ && (t.flags |= 8192),
              (_ = n.callbacks),
              _ === null ? (n.callbacks = [A]) : _.push(A)))
        } else
          ((_ = { lane: A, tag: r.tag, payload: r.payload, callback: r.callback, next: null }),
            z === null ? ((R = z = _), (m = j)) : (z = z.next = _),
            (c |= A))
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break
          ;((_ = r),
            (r = _.next),
            (_.next = null),
            (n.lastBaseUpdate = _),
            (n.shared.pending = null))
        }
      } while (!0)
      ;(z === null && (m = j),
        (n.baseState = m),
        (n.firstBaseUpdate = R),
        (n.lastBaseUpdate = z),
        u === null && (n.shared.lanes = 0),
        (hl |= c),
        (t.lanes = c),
        (t.memoizedState = j))
    }
  }
  function mo(t, e) {
    if (typeof t != 'function') throw Error(f(191, t))
    t.call(e)
  }
  function yo(t, e) {
    var l = t.callbacks
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) mo(l[t], e)
  }
  var oa = q(null),
    ru = q(0)
  function vo(t, e) {
    ;((t = Je), G(ru, t), G(oa, e), (Je = t | e.baseLanes))
  }
  function cc() {
    ;(G(ru, Je), G(oa, oa.current))
  }
  function fc() {
    ;((Je = ru.current), Q(oa), Q(ru))
  }
  var il = 0,
    lt = null,
    vt = null,
    Ut = null,
    ou = !1,
    sa = !1,
    Bl = !1,
    su = 0,
    ln = 0,
    da = null,
    Vm = 0
  function Mt() {
    throw Error(f(321))
  }
  function rc(t, e) {
    if (e === null) return !1
    for (var l = 0; l < e.length && l < t.length; l++) if (!ie(t[l], e[l])) return !1
    return !0
  }
  function oc(t, e, l, a, n, u) {
    return (
      (il = u),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Io : ts),
      (Bl = !1),
      (u = l(a, n)),
      (Bl = !1),
      sa && (u = go(e, l, a, n)),
      po(t),
      u
    )
  }
  function po(t) {
    N.H = pu
    var e = vt !== null && vt.next !== null
    if (((il = 0), (Ut = vt = lt = null), (ou = !1), (ln = 0), (da = null), e)) throw Error(f(300))
    t === null || Lt || ((t = t.dependencies), t !== null && nu(t) && (Lt = !0))
  }
  function go(t, e, l, a) {
    lt = t
    var n = 0
    do {
      if ((sa && (da = null), (ln = 0), (sa = !1), 25 <= n)) throw Error(f(301))
      if (((n += 1), (Ut = vt = null), t.updateQueue != null)) {
        var u = t.updateQueue
        ;((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0))
      }
      ;((N.H = Pm), (u = e(l, a)))
    } while (sa)
    return u
  }
  function Km() {
    var t = N.H,
      e = t.useState()[0]
    return (
      (e = typeof e.then == 'function' ? an(e) : e),
      (t = t.useState()[0]),
      (vt !== null ? vt.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    )
  }
  function sc() {
    var t = su !== 0
    return ((su = 0), t)
  }
  function dc(t, e, l) {
    ;((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l))
  }
  function hc(t) {
    if (ou) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue
        ;(e !== null && (e.pending = null), (t = t.next))
      }
      ou = !1
    }
    ;((il = 0), (Ut = vt = lt = null), (sa = !1), (ln = su = 0), (da = null))
  }
  function It() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return (Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut)
  }
  function Ct() {
    if (vt === null) {
      var t = lt.alternate
      t = t !== null ? t.memoizedState : null
    } else t = vt.next
    var e = Ut === null ? lt.memoizedState : Ut.next
    if (e !== null) ((Ut = e), (vt = t))
    else {
      if (t === null) throw lt.alternate === null ? Error(f(467)) : Error(f(310))
      ;((vt = t),
        (t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null,
        }),
        Ut === null ? (lt.memoizedState = Ut = t) : (Ut = Ut.next = t))
    }
    return Ut
  }
  function mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function an(t) {
    var e = ln
    return (
      (ln += 1),
      da === null && (da = []),
      (t = oo(da, t, e)),
      (e = lt),
      (Ut === null ? e.memoizedState : Ut.next) === null &&
        ((e = e.alternate), (N.H = e === null || e.memoizedState === null ? Io : ts)),
      t
    )
  }
  function du(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return an(t)
      if (t.$$typeof === K) return Jt(t)
    }
    throw Error(f(438, String(t)))
  }
  function yc(t) {
    var e = null,
      l = lt.updateQueue
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = lt.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice()
              }),
              index: 0,
            })))
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = mc()), (lt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Gt
    return (e.index++, l)
  }
  function we(t, e) {
    return typeof e == 'function' ? e(t) : e
  }
  function hu(t) {
    var e = Ct()
    return vc(e, vt, t)
  }
  function vc(t, e, l) {
    var a = t.queue
    if (a === null) throw Error(f(311))
    a.lastRenderedReducer = l
    var n = t.baseQueue,
      u = a.pending
    if (u !== null) {
      if (n !== null) {
        var c = n.next
        ;((n.next = u.next), (u.next = c))
      }
      ;((e.baseQueue = n = u), (a.pending = null))
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u
    else {
      e = n.next
      var r = (c = null),
        m = null,
        R = e,
        z = !1
      do {
        var j = R.lane & -536870913
        if (j !== R.lane ? (ft & j) === j : (il & j) === j) {
          var A = R.revertLane
          if (A === 0)
            (m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              j === fa && (z = !0))
          else if ((il & A) === A) {
            ;((R = R.next), A === fa && (z = !0))
            continue
          } else
            ((j = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              m === null ? ((r = m = j), (c = u)) : (m = m.next = j),
              (lt.lanes |= A),
              (hl |= A))
          ;((j = R.action), Bl && l(u, j), (u = R.hasEagerState ? R.eagerState : l(u, j)))
        } else
          ((A = {
            lane: j,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            m === null ? ((r = m = A), (c = u)) : (m = m.next = A),
            (lt.lanes |= j),
            (hl |= j))
        R = R.next
      } while (R !== null && R !== e)
      if (
        (m === null ? (c = u) : (m.next = r),
        !ie(u, t.memoizedState) && ((Lt = !0), z && ((l = ra), l !== null)))
      )
        throw l
      ;((t.memoizedState = u), (t.baseState = c), (t.baseQueue = m), (a.lastRenderedState = u))
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch])
  }
  function pc(t) {
    var e = Ct(),
      l = e.queue
    if (l === null) throw Error(f(311))
    l.lastRenderedReducer = t
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState
    if (n !== null) {
      l.pending = null
      var c = (n = n.next)
      do ((u = t(u, c.action)), (c = c.next))
      while (c !== n)
      ;(ie(u, e.memoizedState) || (Lt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u))
    }
    return [u, a]
  }
  function So(t, e, l) {
    var a = lt,
      n = Ct(),
      u = dt
    if (u) {
      if (l === void 0) throw Error(f(407))
      l = l()
    } else l = e()
    var c = !ie((vt || n).memoizedState, l)
    ;(c && ((n.memoizedState = l), (Lt = !0)), (n = n.queue))
    var r = To.bind(null, a, n, t)
    if (
      (nn(2048, 8, r, [t]), n.getSnapshot !== e || c || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), ha(9, mu(), Eo.bind(null, a, n, l, e), null), Et === null))
        throw Error(f(349))
      u || (il & 124) !== 0 || bo(a, e, l)
    }
    return l
  }
  function bo(t, e, l) {
    ;((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = lt.updateQueue),
      e === null
        ? ((e = mc()), (lt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)))
  }
  function Eo(t, e, l, a) {
    ;((e.value = l), (e.getSnapshot = a), Ro(e) && Ao(t))
  }
  function To(t, e, l) {
    return l(function () {
      Ro(e) && Ao(t)
    })
  }
  function Ro(t) {
    var e = t.getSnapshot
    t = t.value
    try {
      var l = e()
      return !ie(t, l)
    } catch {
      return !0
    }
  }
  function Ao(t) {
    var e = na(t, 2)
    e !== null && de(e, t, 2)
  }
  function gc(t) {
    var e = It()
    if (typeof t == 'function') {
      var l = t
      if (((t = l()), Bl)) {
        Ie(!0)
        try {
          l()
        } finally {
          Ie(!1)
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: t,
      }),
      e
    )
  }
  function _o(t, e, l, a) {
    return ((t.baseState = l), vc(t, vt, typeof a == 'function' ? a : we))
  }
  function Jm(t, e, l, a, n) {
    if (vu(t)) throw Error(f(485))
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c)
        },
      }
      ;(N.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), Oo(e, u))
          : ((u.next = l.next), (e.pending = l.next = u)))
    }
  }
  function Oo(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state
    if (e.isTransition) {
      var u = N.T,
        c = {}
      N.T = c
      try {
        var r = l(n, a),
          m = N.S
        ;(m !== null && m(c, r), xo(t, e, r))
      } catch (R) {
        Sc(t, e, R)
      } finally {
        N.T = u
      }
    } else
      try {
        ;((u = l(n, a)), xo(t, e, u))
      } catch (R) {
        Sc(t, e, R)
      }
  }
  function xo(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            Do(t, e, a)
          },
          function (a) {
            return Sc(t, e, a)
          }
        )
      : Do(t, e, l)
  }
  function Do(t, e, l) {
    ;((e.status = 'fulfilled'),
      (e.value = l),
      zo(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Oo(t, l))))
  }
  function Sc(t, e, l) {
    var a = t.pending
    if (((t.pending = null), a !== null)) {
      a = a.next
      do ((e.status = 'rejected'), (e.reason = l), zo(e), (e = e.next))
      while (e !== a)
    }
    t.action = null
  }
  function zo(t) {
    t = t.listeners
    for (var e = 0; e < t.length; e++) (0, t[e])()
  }
  function Mo(t, e) {
    return e
  }
  function No(t, e) {
    if (dt) {
      var l = Et.formState
      if (l !== null) {
        t: {
          var a = lt
          if (dt) {
            if (Dt) {
              e: {
                for (var n = Dt, u = xe; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null
                    break e
                  }
                  if (((n = Ae(n.nextSibling)), n === null)) {
                    n = null
                    break e
                  }
                }
                ;((u = n.data), (n = u === 'F!' || u === 'F' ? n : null))
              }
              if (n) {
                ;((Dt = Ae(n.nextSibling)), (a = n.data === 'F!'))
                break t
              }
            }
            jl(a)
          }
          a = !1
        }
        a && (e = l[0])
      }
    }
    return (
      (l = It()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mo,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Wo.bind(null, lt, a)),
      (a.dispatch = l),
      (a = gc(!1)),
      (u = Ac.bind(null, lt, !1, a.queue)),
      (a = It()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Jm.bind(null, lt, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    )
  }
  function Uo(t) {
    var e = Ct()
    return Co(e, vt, t)
  }
  function Co(t, e, l) {
    if (
      ((e = vc(t, e, Mo)[0]),
      (t = hu(we)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = an(e)
      } catch (c) {
        throw c === Fa ? cu : c
      }
    else a = e
    e = Ct()
    var n = e.queue,
      u = n.dispatch
    return (
      l !== e.memoizedState && ((lt.flags |= 2048), ha(9, mu(), $m.bind(null, n, l), null)),
      [a, u, t]
    )
  }
  function $m(t, e) {
    t.action = e
  }
  function jo(t) {
    var e = Ct(),
      l = vt
    if (l !== null) return Co(e, l, t)
    ;(Ct(), (e = e.memoizedState), (l = Ct()))
    var a = l.queue.dispatch
    return ((l.memoizedState = t), [e, a, !1])
  }
  function ha(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = mc()), (lt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    )
  }
  function mu() {
    return { destroy: void 0, resource: void 0 }
  }
  function Ho() {
    return Ct().memoizedState
  }
  function yu(t, e, l, a) {
    var n = It()
    ;((a = a === void 0 ? null : a), (lt.flags |= t), (n.memoizedState = ha(1 | e, mu(), l, a)))
  }
  function nn(t, e, l, a) {
    var n = Ct()
    a = a === void 0 ? null : a
    var u = n.memoizedState.inst
    vt !== null && a !== null && rc(a, vt.memoizedState.deps)
      ? (n.memoizedState = ha(e, u, l, a))
      : ((lt.flags |= t), (n.memoizedState = ha(1 | e, u, l, a)))
  }
  function qo(t, e) {
    yu(8390656, 8, t, e)
  }
  function Lo(t, e) {
    nn(2048, 8, t, e)
  }
  function Bo(t, e) {
    return nn(4, 2, t, e)
  }
  function Yo(t, e) {
    return nn(4, 4, t, e)
  }
  function Go(t, e) {
    if (typeof e == 'function') {
      t = t()
      var l = e(t)
      return function () {
        typeof l == 'function' ? l() : e(null)
      }
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null
        }
      )
  }
  function wo(t, e, l) {
    ;((l = l != null ? l.concat([t]) : null), nn(4, 4, Go.bind(null, e, t), l))
  }
  function bc() {}
  function Xo(t, e) {
    var l = Ct()
    e = e === void 0 ? null : e
    var a = l.memoizedState
    return e !== null && rc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t)
  }
  function Qo(t, e) {
    var l = Ct()
    e = e === void 0 ? null : e
    var a = l.memoizedState
    if (e !== null && rc(e, a[1])) return a[0]
    if (((a = t()), Bl)) {
      Ie(!0)
      try {
        t()
      } finally {
        Ie(!1)
      }
    }
    return ((l.memoizedState = [a, e]), a)
  }
  function Ec(t, e, l) {
    return l === void 0 || (il & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Ks()), (lt.lanes |= t), (hl |= t), l)
  }
  function Zo(t, e, l, a) {
    return ie(l, e)
      ? l
      : oa.current !== null
        ? ((t = Ec(t, l, a)), ie(t, e) || (Lt = !0), t)
        : (il & 42) === 0
          ? ((Lt = !0), (t.memoizedState = l))
          : ((t = Ks()), (lt.lanes |= t), (hl |= t), e)
  }
  function Vo(t, e, l, a, n) {
    var u = w.p
    w.p = u !== 0 && 8 > u ? u : 8
    var c = N.T,
      r = {}
    ;((N.T = r), Ac(t, !1, e, l))
    try {
      var m = n(),
        R = N.S
      if (
        (R !== null && R(r, m), m !== null && typeof m == 'object' && typeof m.then == 'function')
      ) {
        var z = Zm(m, a)
        un(t, e, z, se(t))
      } else un(t, e, a, se(t))
    } catch (j) {
      un(t, e, { then: function () {}, status: 'rejected', reason: j }, se())
    } finally {
      ;((w.p = u), (N.T = c))
    }
  }
  function km() {}
  function Tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476))
    var n = Ko(t).queue
    Vo(
      t,
      n,
      e,
      F,
      l === null
        ? km
        : function () {
            return (Jo(t), l(a))
          }
    )
  }
  function Ko(t) {
    var e = t.memoizedState
    if (e !== null) return e
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: F,
      },
      next: null,
    }
    var l = {}
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: we,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    )
  }
  function Jo(t) {
    var e = Ko(t).next.queue
    un(t, e, {}, se())
  }
  function Rc() {
    return Jt(An)
  }
  function $o() {
    return Ct().memoizedState
  }
  function ko() {
    return Ct().memoizedState
  }
  function Wm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = se()
          t = nl(l)
          var a = ul(e, t, l)
          ;(a !== null && (de(a, e, l), Ia(a, e, l)), (e = { cache: Ii() }), (t.payload = e))
          return
      }
      e = e.return
    }
  }
  function Fm(t, e, l) {
    var a = se()
    ;((l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      vu(t) ? Fo(e, l) : ((l = Qi(t, e, l, a)), l !== null && (de(l, t, a), Po(l, e, a))))
  }
  function Wo(t, e, l) {
    var a = se()
    un(t, e, l, a)
  }
  function un(t, e, l, a) {
    var n = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }
    if (vu(t)) Fo(e, n)
    else {
      var u = t.alternate
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var c = e.lastRenderedState,
            r = u(c, l)
          if (((n.hasEagerState = !0), (n.eagerState = r), ie(r, c)))
            return (In(t, e, n, 0), Et === null && Pn(), !1)
        } catch {
        } finally {
        }
      if (((l = Qi(t, e, n, a)), l !== null)) return (de(l, t, a), Po(l, e, a), !0)
    }
    return !1
  }
  function Ac(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: lf(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vu(t))
    ) {
      if (e) throw Error(f(479))
    } else ((e = Qi(t, l, a, 2)), e !== null && de(e, t, 2))
  }
  function vu(t) {
    var e = t.alternate
    return t === lt || (e !== null && e === lt)
  }
  function Fo(t, e) {
    sa = ou = !0
    var l = t.pending
    ;(l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e))
  }
  function Po(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes
      ;((a &= t.pendingLanes), (l |= a), (e.lanes = l), ur(t, l))
    }
  }
  var pu = {
      readContext: Jt,
      use: du,
      useCallback: Mt,
      useContext: Mt,
      useEffect: Mt,
      useImperativeHandle: Mt,
      useLayoutEffect: Mt,
      useInsertionEffect: Mt,
      useMemo: Mt,
      useReducer: Mt,
      useRef: Mt,
      useState: Mt,
      useDebugValue: Mt,
      useDeferredValue: Mt,
      useTransition: Mt,
      useSyncExternalStore: Mt,
      useId: Mt,
      useHostTransitionStatus: Mt,
      useFormState: Mt,
      useActionState: Mt,
      useOptimistic: Mt,
      useMemoCache: Mt,
      useCacheRefresh: Mt,
    },
    Io = {
      readContext: Jt,
      use: du,
      useCallback: function (t, e) {
        return ((It().memoizedState = [t, e === void 0 ? null : e]), t)
      },
      useContext: Jt,
      useEffect: qo,
      useImperativeHandle: function (t, e, l) {
        ;((l = l != null ? l.concat([t]) : null), yu(4194308, 4, Go.bind(null, e, t), l))
      },
      useLayoutEffect: function (t, e) {
        return yu(4194308, 4, t, e)
      },
      useInsertionEffect: function (t, e) {
        yu(4, 2, t, e)
      },
      useMemo: function (t, e) {
        var l = It()
        e = e === void 0 ? null : e
        var a = t()
        if (Bl) {
          Ie(!0)
          try {
            t()
          } finally {
            Ie(!1)
          }
        }
        return ((l.memoizedState = [a, e]), a)
      },
      useReducer: function (t, e, l) {
        var a = It()
        if (l !== void 0) {
          var n = l(e)
          if (Bl) {
            Ie(!0)
            try {
              l(e)
            } finally {
              Ie(!1)
            }
          }
        } else n = e
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = Fm.bind(null, lt, t)),
          [a.memoizedState, t]
        )
      },
      useRef: function (t) {
        var e = It()
        return ((t = { current: t }), (e.memoizedState = t))
      },
      useState: function (t) {
        t = gc(t)
        var e = t.queue,
          l = Wo.bind(null, lt, e)
        return ((e.dispatch = l), [t.memoizedState, l])
      },
      useDebugValue: bc,
      useDeferredValue: function (t, e) {
        var l = It()
        return Ec(l, t, e)
      },
      useTransition: function () {
        var t = gc(!1)
        return ((t = Vo.bind(null, lt, t.queue, !0, !1)), (It().memoizedState = t), [!1, t])
      },
      useSyncExternalStore: function (t, e, l) {
        var a = lt,
          n = It()
        if (dt) {
          if (l === void 0) throw Error(f(407))
          l = l()
        } else {
          if (((l = e()), Et === null)) throw Error(f(349))
          ;(ft & 124) !== 0 || bo(a, e, l)
        }
        n.memoizedState = l
        var u = { value: l, getSnapshot: e }
        return (
          (n.queue = u),
          qo(To.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          ha(9, mu(), Eo.bind(null, a, u, l, e), null),
          l
        )
      },
      useId: function () {
        var t = It(),
          e = Et.identifierPrefix
        if (dt) {
          var l = Be,
            a = Le
          ;((l = (a & ~(1 << (32 - ue(a) - 1))).toString(32) + l),
            (e = '«' + e + 'R' + l),
            (l = su++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '»'))
        } else ((l = Vm++), (e = '«' + e + 'r' + l.toString(32) + '»'))
        return (t.memoizedState = e)
      },
      useHostTransitionStatus: Rc,
      useFormState: No,
      useActionState: No,
      useOptimistic: function (t) {
        var e = It()
        e.memoizedState = e.baseState = t
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return ((e.queue = l), (e = Ac.bind(null, lt, !0, l)), (l.dispatch = e), [t, e])
      },
      useMemoCache: yc,
      useCacheRefresh: function () {
        return (It().memoizedState = Wm.bind(null, lt))
      },
    },
    ts = {
      readContext: Jt,
      use: du,
      useCallback: Xo,
      useContext: Jt,
      useEffect: Lo,
      useImperativeHandle: wo,
      useInsertionEffect: Bo,
      useLayoutEffect: Yo,
      useMemo: Qo,
      useReducer: hu,
      useRef: Ho,
      useState: function () {
        return hu(we)
      },
      useDebugValue: bc,
      useDeferredValue: function (t, e) {
        var l = Ct()
        return Zo(l, vt.memoizedState, t, e)
      },
      useTransition: function () {
        var t = hu(we)[0],
          e = Ct().memoizedState
        return [typeof t == 'boolean' ? t : an(t), e]
      },
      useSyncExternalStore: So,
      useId: $o,
      useHostTransitionStatus: Rc,
      useFormState: Uo,
      useActionState: Uo,
      useOptimistic: function (t, e) {
        var l = Ct()
        return _o(l, vt, t, e)
      },
      useMemoCache: yc,
      useCacheRefresh: ko,
    },
    Pm = {
      readContext: Jt,
      use: du,
      useCallback: Xo,
      useContext: Jt,
      useEffect: Lo,
      useImperativeHandle: wo,
      useInsertionEffect: Bo,
      useLayoutEffect: Yo,
      useMemo: Qo,
      useReducer: pc,
      useRef: Ho,
      useState: function () {
        return pc(we)
      },
      useDebugValue: bc,
      useDeferredValue: function (t, e) {
        var l = Ct()
        return vt === null ? Ec(l, t, e) : Zo(l, vt.memoizedState, t, e)
      },
      useTransition: function () {
        var t = pc(we)[0],
          e = Ct().memoizedState
        return [typeof t == 'boolean' ? t : an(t), e]
      },
      useSyncExternalStore: So,
      useId: $o,
      useHostTransitionStatus: Rc,
      useFormState: jo,
      useActionState: jo,
      useOptimistic: function (t, e) {
        var l = Ct()
        return vt !== null ? _o(l, vt, t, e) : ((l.baseState = t), [t, l.queue.dispatch])
      },
      useMemoCache: yc,
      useCacheRefresh: ko,
    },
    ma = null,
    cn = 0
  function gu(t) {
    var e = cn
    return ((cn += 1), ma === null && (ma = []), oo(ma, t, e))
  }
  function fn(t, e) {
    ;((e = e.props.ref), (t.ref = e !== void 0 ? e : null))
  }
  function Su(t, e) {
    throw e.$$typeof === D
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t
          )
        ))
  }
  function es(t) {
    var e = t._init
    return e(t._payload)
  }
  function ls(t) {
    function e(S, p) {
      if (t) {
        var E = S.deletions
        E === null ? ((S.deletions = [p]), (S.flags |= 16)) : E.push(p)
      }
    }
    function l(S, p) {
      if (!t) return null
      for (; p !== null; ) (e(S, p), (p = p.sibling))
      return null
    }
    function a(S) {
      for (var p = new Map(); S !== null; )
        (S.key !== null ? p.set(S.key, S) : p.set(S.index, S), (S = S.sibling))
      return p
    }
    function n(S, p) {
      return ((S = qe(S, p)), (S.index = 0), (S.sibling = null), S)
    }
    function u(S, p, E) {
      return (
        (S.index = E),
        t
          ? ((E = S.alternate),
            E !== null
              ? ((E = E.index), E < p ? ((S.flags |= 67108866), p) : E)
              : ((S.flags |= 67108866), p))
          : ((S.flags |= 1048576), p)
      )
    }
    function c(S) {
      return (t && S.alternate === null && (S.flags |= 67108866), S)
    }
    function r(S, p, E, U) {
      return p === null || p.tag !== 6
        ? ((p = Vi(E, S.mode, U)), (p.return = S), p)
        : ((p = n(p, E)), (p.return = S), p)
    }
    function m(S, p, E, U) {
      var V = E.type
      return V === L
        ? z(S, p, E.props.children, U, E.key)
        : p !== null &&
            (p.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === Tt && es(V) === p.type))
          ? ((p = n(p, E.props)), fn(p, E), (p.return = S), p)
          : ((p = eu(E.type, E.key, E.props, null, S.mode, U)), fn(p, E), (p.return = S), p)
    }
    function R(S, p, E, U) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== E.containerInfo ||
        p.stateNode.implementation !== E.implementation
        ? ((p = Ki(E, S.mode, U)), (p.return = S), p)
        : ((p = n(p, E.children || [])), (p.return = S), p)
    }
    function z(S, p, E, U, V) {
      return p === null || p.tag !== 7
        ? ((p = Ml(E, S.mode, U, V)), (p.return = S), p)
        : ((p = n(p, E)), (p.return = S), p)
    }
    function j(S, p, E) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number' || typeof p == 'bigint')
        return ((p = Vi('' + p, S.mode, E)), (p.return = S), p)
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case M:
            return ((E = eu(p.type, p.key, p.props, null, S.mode, E)), fn(E, p), (E.return = S), E)
          case Y:
            return ((p = Ki(p, S.mode, E)), (p.return = S), p)
          case Tt:
            var U = p._init
            return ((p = U(p._payload)), j(S, p, E))
        }
        if (Vt(p) || Zt(p)) return ((p = Ml(p, S.mode, E, null)), (p.return = S), p)
        if (typeof p.then == 'function') return j(S, gu(p), E)
        if (p.$$typeof === K) return j(S, uu(S, p), E)
        Su(S, p)
      }
      return null
    }
    function A(S, p, E, U) {
      var V = p !== null ? p.key : null
      if ((typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint')
        return V !== null ? null : r(S, p, '' + E, U)
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case M:
            return E.key === V ? m(S, p, E, U) : null
          case Y:
            return E.key === V ? R(S, p, E, U) : null
          case Tt:
            return ((V = E._init), (E = V(E._payload)), A(S, p, E, U))
        }
        if (Vt(E) || Zt(E)) return V !== null ? null : z(S, p, E, U, null)
        if (typeof E.then == 'function') return A(S, p, gu(E), U)
        if (E.$$typeof === K) return A(S, p, uu(S, E), U)
        Su(S, E)
      }
      return null
    }
    function _(S, p, E, U, V) {
      if ((typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint')
        return ((S = S.get(E) || null), r(p, S, '' + U, V))
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case M:
            return ((S = S.get(U.key === null ? E : U.key) || null), m(p, S, U, V))
          case Y:
            return ((S = S.get(U.key === null ? E : U.key) || null), R(p, S, U, V))
          case Tt:
            var at = U._init
            return ((U = at(U._payload)), _(S, p, E, U, V))
        }
        if (Vt(U) || Zt(U)) return ((S = S.get(E) || null), z(p, S, U, V, null))
        if (typeof U.then == 'function') return _(S, p, E, gu(U), V)
        if (U.$$typeof === K) return _(S, p, E, uu(p, U), V)
        Su(p, U)
      }
      return null
    }
    function P(S, p, E, U) {
      for (
        var V = null, at = null, J = p, W = (p = 0), Yt = null;
        J !== null && W < E.length;
        W++
      ) {
        J.index > W ? ((Yt = J), (J = null)) : (Yt = J.sibling)
        var st = A(S, J, E[W], U)
        if (st === null) {
          J === null && (J = Yt)
          break
        }
        ;(t && J && st.alternate === null && e(S, J),
          (p = u(st, p, W)),
          at === null ? (V = st) : (at.sibling = st),
          (at = st),
          (J = Yt))
      }
      if (W === E.length) return (l(S, J), dt && Ul(S, W), V)
      if (J === null) {
        for (; W < E.length; W++)
          ((J = j(S, E[W], U)),
            J !== null && ((p = u(J, p, W)), at === null ? (V = J) : (at.sibling = J), (at = J)))
        return (dt && Ul(S, W), V)
      }
      for (J = a(J); W < E.length; W++)
        ((Yt = _(J, S, W, E[W], U)),
          Yt !== null &&
            (t && Yt.alternate !== null && J.delete(Yt.key === null ? W : Yt.key),
            (p = u(Yt, p, W)),
            at === null ? (V = Yt) : (at.sibling = Yt),
            (at = Yt)))
      return (
        t &&
          J.forEach(function (Tl) {
            return e(S, Tl)
          }),
        dt && Ul(S, W),
        V
      )
    }
    function k(S, p, E, U) {
      if (E == null) throw Error(f(151))
      for (
        var V = null, at = null, J = p, W = (p = 0), Yt = null, st = E.next();
        J !== null && !st.done;
        W++, st = E.next()
      ) {
        J.index > W ? ((Yt = J), (J = null)) : (Yt = J.sibling)
        var Tl = A(S, J, st.value, U)
        if (Tl === null) {
          J === null && (J = Yt)
          break
        }
        ;(t && J && Tl.alternate === null && e(S, J),
          (p = u(Tl, p, W)),
          at === null ? (V = Tl) : (at.sibling = Tl),
          (at = Tl),
          (J = Yt))
      }
      if (st.done) return (l(S, J), dt && Ul(S, W), V)
      if (J === null) {
        for (; !st.done; W++, st = E.next())
          ((st = j(S, st.value, U)),
            st !== null &&
              ((p = u(st, p, W)), at === null ? (V = st) : (at.sibling = st), (at = st)))
        return (dt && Ul(S, W), V)
      }
      for (J = a(J); !st.done; W++, st = E.next())
        ((st = _(J, S, W, st.value, U)),
          st !== null &&
            (t && st.alternate !== null && J.delete(st.key === null ? W : st.key),
            (p = u(st, p, W)),
            at === null ? (V = st) : (at.sibling = st),
            (at = st)))
      return (
        t &&
          J.forEach(function (Iy) {
            return e(S, Iy)
          }),
        dt && Ul(S, W),
        V
      )
    }
    function gt(S, p, E, U) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === L &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case M:
            t: {
              for (var V = E.key; p !== null; ) {
                if (p.key === V) {
                  if (((V = E.type), V === L)) {
                    if (p.tag === 7) {
                      ;(l(S, p.sibling), (U = n(p, E.props.children)), (U.return = S), (S = U))
                      break t
                    }
                  } else if (
                    p.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === Tt && es(V) === p.type)
                  ) {
                    ;(l(S, p.sibling), (U = n(p, E.props)), fn(U, E), (U.return = S), (S = U))
                    break t
                  }
                  l(S, p)
                  break
                } else e(S, p)
                p = p.sibling
              }
              E.type === L
                ? ((U = Ml(E.props.children, S.mode, U, E.key)), (U.return = S), (S = U))
                : ((U = eu(E.type, E.key, E.props, null, S.mode, U)),
                  fn(U, E),
                  (U.return = S),
                  (S = U))
            }
            return c(S)
          case Y:
            t: {
              for (V = E.key; p !== null; ) {
                if (p.key === V)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === E.containerInfo &&
                    p.stateNode.implementation === E.implementation
                  ) {
                    ;(l(S, p.sibling), (U = n(p, E.children || [])), (U.return = S), (S = U))
                    break t
                  } else {
                    l(S, p)
                    break
                  }
                else e(S, p)
                p = p.sibling
              }
              ;((U = Ki(E, S.mode, U)), (U.return = S), (S = U))
            }
            return c(S)
          case Tt:
            return ((V = E._init), (E = V(E._payload)), gt(S, p, E, U))
        }
        if (Vt(E)) return P(S, p, E, U)
        if (Zt(E)) {
          if (((V = Zt(E)), typeof V != 'function')) throw Error(f(150))
          return ((E = V.call(E)), k(S, p, E, U))
        }
        if (typeof E.then == 'function') return gt(S, p, gu(E), U)
        if (E.$$typeof === K) return gt(S, p, uu(S, E), U)
        Su(S, E)
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint'
        ? ((E = '' + E),
          p !== null && p.tag === 6
            ? (l(S, p.sibling), (U = n(p, E)), (U.return = S), (S = U))
            : (l(S, p), (U = Vi(E, S.mode, U)), (U.return = S), (S = U)),
          c(S))
        : l(S, p)
    }
    return function (S, p, E, U) {
      try {
        cn = 0
        var V = gt(S, p, E, U)
        return ((ma = null), V)
      } catch (J) {
        if (J === Fa || J === cu) throw J
        var at = ce(29, J, null, S.mode)
        return ((at.lanes = U), (at.return = S), at)
      } finally {
      }
    }
  }
  var ya = ls(!0),
    as = ls(!1),
    Se = q(null),
    De = null
  function cl(t) {
    var e = t.alternate
    ;(G(Ht, Ht.current & 1),
      G(Se, t),
      De === null && (e === null || oa.current !== null || e.memoizedState !== null) && (De = t))
  }
  function ns(t) {
    if (t.tag === 22) {
      if ((G(Ht, Ht.current), G(Se, t), De === null)) {
        var e = t.alternate
        e !== null && e.memoizedState !== null && (De = t)
      }
    } else fl()
  }
  function fl() {
    ;(G(Ht, Ht.current), G(Se, Se.current))
  }
  function Xe(t) {
    ;(Q(Se), De === t && (De = null), Q(Ht))
  }
  var Ht = q(0)
  function bu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || yf(l))) return e
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e
      } else if (e.child !== null) {
        ;((e.child.return = e), (e = e.child))
        continue
      }
      if (e === t) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null
        e = e.return
      }
      ;((e.sibling.return = e.return), (e = e.sibling))
    }
    return null
  }
  function _c(t, e, l, a) {
    ;((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : T({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l))
  }
  var Oc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals
      var a = se(),
        n = nl(a)
      ;((n.payload = e),
        l != null && (n.callback = l),
        (e = ul(t, n, a)),
        e !== null && (de(e, t, a), Ia(e, t, a)))
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals
      var a = se(),
        n = nl(a)
      ;((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = ul(t, n, a)),
        e !== null && (de(e, t, a), Ia(e, t, a)))
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals
      var l = se(),
        a = nl(l)
      ;((a.tag = 2),
        e != null && (a.callback = e),
        (e = ul(t, a, l)),
        e !== null && (de(e, t, l), Ia(e, t, l)))
    },
  }
  function us(t, e, l, a, n, u, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(a, u, c)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Qa(l, a) || !Qa(n, u)
          : !0
    )
  }
  function is(t, e, l, a) {
    ;((t = e.state),
      typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Oc.enqueueReplaceState(e, e.state, null))
  }
  function Yl(t, e) {
    var l = e
    if ('ref' in e) {
      l = {}
      for (var a in e) a !== 'ref' && (l[a] = e[a])
    }
    if ((t = t.defaultProps)) {
      l === e && (l = T({}, l))
      for (var n in t) l[n] === void 0 && (l[n] = t[n])
    }
    return l
  }
  var Eu =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var e = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == 'object' && t !== null && typeof t.message == 'string'
                  ? String(t.message)
                  : String(t),
              error: t,
            })
            if (!window.dispatchEvent(e)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', t)
            return
          }
          console.error(t)
        }
  function cs(t) {
    Eu(t)
  }
  function fs(t) {
    console.error(t)
  }
  function rs(t) {
    Eu(t)
  }
  function Tu(t, e) {
    try {
      var l = t.onUncaughtError
      l(e.value, { componentStack: e.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function os(t, e, l) {
    try {
      var a = t.onCaughtError
      a(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null })
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  function xc(t, e, l) {
    return (
      (l = nl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tu(t, e)
      }),
      l
    )
  }
  function ss(t) {
    return ((t = nl(t)), (t.tag = 3), t)
  }
  function ds(t, e, l, a) {
    var n = l.type.getDerivedStateFromError
    if (typeof n == 'function') {
      var u = a.value
      ;((t.payload = function () {
        return n(u)
      }),
        (t.callback = function () {
          os(e, l, a)
        }))
    }
    var c = l.stateNode
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (t.callback = function () {
        ;(os(e, l, a),
          typeof n != 'function' && (ml === null ? (ml = new Set([this])) : ml.add(this)))
        var r = a.stack
        this.componentDidCatch(a.value, { componentStack: r !== null ? r : '' })
      })
  }
  function Im(t, e, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((e = l.alternate), e !== null && $a(e, l, n, !0), (l = Se.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              De === null ? Fc() : l.alternate === null && zt === 0 && (zt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === lc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Ic(t, a, n)),
              !1
            )
          case 22:
            return (
              (l.flags |= 65536),
              a === lc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Ic(t, a, n)),
              !1
            )
        }
        throw Error(f(435, l.tag))
      }
      return (Ic(t, a, n), Fc(), !1)
    }
    if (dt)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== ki && ((t = Error(f(422), { cause: a })), Ja(ye(t, l))))
          : (a !== ki && ((e = Error(f(423), { cause: a })), Ja(ye(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = ye(a, l)),
            (n = xc(t.stateNode, a, n)),
            uc(t, n),
            zt !== 4 && (zt = 2)),
        !1
      )
    var u = Error(f(520), { cause: a })
    if (((u = ye(u, l)), yn === null ? (yn = [u]) : yn.push(u), zt !== 4 && (zt = 2), e === null))
      return !0
    ;((a = ye(a, l)), (l = e))
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = xc(l.stateNode, a, t)),
            uc(l, t),
            !1
          )
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (ml === null || !ml.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ss(n)),
              ds(n, t, l, a),
              uc(l, n),
              !1
            )
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var hs = Error(f(461)),
    Lt = !1
  function wt(t, e, l, a) {
    e.child = t === null ? as(e, null, l, a) : ya(e, t.child, l, a)
  }
  function ms(t, e, l, a, n) {
    l = l.render
    var u = e.ref
    if ('ref' in a) {
      var c = {}
      for (var r in a) r !== 'ref' && (c[r] = a[r])
    } else c = a
    return (
      ql(e),
      (a = oc(t, e, l, c, u, n)),
      (r = sc()),
      t !== null && !Lt
        ? (dc(t, e, n), Qe(t, e, n))
        : (dt && r && Ji(e), (e.flags |= 1), wt(t, e, a, n), e.child)
    )
  }
  function ys(t, e, l, a, n) {
    if (t === null) {
      var u = l.type
      return typeof u == 'function' && !Zi(u) && u.defaultProps === void 0 && l.compare === null
        ? ((e.tag = 15), (e.type = u), vs(t, e, u, a, n))
        : ((t = eu(l.type, null, a, e, e.mode, n)), (t.ref = e.ref), (t.return = e), (e.child = t))
    }
    if (((u = t.child), !Hc(t, n))) {
      var c = u.memoizedProps
      if (((l = l.compare), (l = l !== null ? l : Qa), l(c, a) && t.ref === e.ref))
        return Qe(t, e, n)
    }
    return ((e.flags |= 1), (t = qe(u, a)), (t.ref = e.ref), (t.return = e), (e.child = t))
  }
  function vs(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps
      if (Qa(u, a) && t.ref === e.ref)
        if (((Lt = !1), (e.pendingProps = a = u), Hc(t, n))) (t.flags & 131072) !== 0 && (Lt = !0)
        else return ((e.lanes = t.lanes), Qe(t, e, n))
    }
    return Dc(t, e, l, a, n)
  }
  function ps(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      u = t !== null ? t.memoizedState : null
    if (a.mode === 'hidden') {
      if ((e.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null; )
            ((u = u | n.lanes | n.childLanes), (n = n.sibling))
          e.childLanes = u & ~a
        } else ((e.childLanes = 0), (e.child = null))
        return gs(t, e, a, l)
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && iu(e, u !== null ? u.cachePool : null),
          u !== null ? vo(e, u) : cc(),
          ns(e))
      else
        return ((e.lanes = e.childLanes = 536870912), gs(t, e, u !== null ? u.baseLanes | l : l, l))
    } else
      u !== null
        ? (iu(e, u.cachePool), vo(e, u), fl(), (e.memoizedState = null))
        : (t !== null && iu(e, null), cc(), fl())
    return (wt(t, e, n, l), e.child)
  }
  function gs(t, e, l, a) {
    var n = ec()
    return (
      (n = n === null ? null : { parent: jt._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && iu(e, null),
      cc(),
      ns(e),
      t !== null && $a(t, e, a, !0),
      null
    )
  }
  function Ru(t, e) {
    var l = e.ref
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284))
      ;(t === null || t.ref !== l) && (e.flags |= 4194816)
    }
  }
  function Dc(t, e, l, a, n) {
    return (
      ql(e),
      (l = oc(t, e, l, a, void 0, n)),
      (a = sc()),
      t !== null && !Lt
        ? (dc(t, e, n), Qe(t, e, n))
        : (dt && a && Ji(e), (e.flags |= 1), wt(t, e, l, n), e.child)
    )
  }
  function Ss(t, e, l, a, n, u) {
    return (
      ql(e),
      (e.updateQueue = null),
      (l = go(e, a, l, n)),
      po(t),
      (a = sc()),
      t !== null && !Lt
        ? (dc(t, e, u), Qe(t, e, u))
        : (dt && a && Ji(e), (e.flags |= 1), wt(t, e, l, u), e.child)
    )
  }
  function bs(t, e, l, a, n) {
    if ((ql(e), e.stateNode === null)) {
      var u = ua,
        c = l.contextType
      ;(typeof c == 'object' && c !== null && (u = Jt(c)),
        (u = new l(a, u)),
        (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Oc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        ac(e),
        (c = l.contextType),
        (u.context = typeof c == 'object' && c !== null ? Jt(c) : ua),
        (u.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == 'function' && (_c(e, l, c, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((c = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          c !== u.state && Oc.enqueueReplaceState(u, u.state, null),
          en(e, a, u, n),
          tn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0))
    } else if (t === null) {
      u = e.stateNode
      var r = e.memoizedProps,
        m = Yl(l, r)
      u.props = m
      var R = u.context,
        z = l.contextType
      ;((c = ua), typeof z == 'object' && z !== null && (c = Jt(z)))
      var j = l.getDerivedStateFromProps
      ;((z = typeof j == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (r = e.pendingProps !== r),
        z ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((r || R !== c) && is(e, u, a, c)),
        (al = !1))
      var A = e.memoizedState
      ;((u.state = A),
        en(e, a, u, n),
        tn(),
        (R = e.memoizedState),
        r || A !== R || al
          ? (typeof j == 'function' && (_c(e, l, j, a), (R = e.memoizedState)),
            (m = al || us(e, l, m, a, A, R, c))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = R)),
            (u.props = a),
            (u.state = R),
            (u.context = c),
            (a = m))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308), (a = !1)))
    } else {
      ;((u = e.stateNode),
        nc(t, e),
        (c = e.memoizedProps),
        (z = Yl(l, c)),
        (u.props = z),
        (j = e.pendingProps),
        (A = u.context),
        (R = l.contextType),
        (m = ua),
        typeof R == 'object' && R !== null && (m = Jt(R)),
        (r = l.getDerivedStateFromProps),
        (R = typeof r == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((c !== j || A !== m) && is(e, u, a, m)),
        (al = !1),
        (A = e.memoizedState),
        (u.state = A),
        en(e, a, u, n),
        tn())
      var _ = e.memoizedState
      c !== j || A !== _ || al || (t !== null && t.dependencies !== null && nu(t.dependencies))
        ? (typeof r == 'function' && (_c(e, l, r, a), (_ = e.memoizedState)),
          (z =
            al ||
            us(e, l, z, a, A, _, m) ||
            (t !== null && t.dependencies !== null && nu(t.dependencies)))
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, _, m),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, _, m)),
              typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (c === t.memoizedProps && A === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (c === t.memoizedProps && A === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = _)),
          (u.props = a),
          (u.state = _),
          (u.context = m),
          (a = z))
        : (typeof u.componentDidUpdate != 'function' ||
            (c === t.memoizedProps && A === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (c === t.memoizedProps && A === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1))
    }
    return (
      (u = a),
      Ru(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ya(e, t.child, null, n)), (e.child = ya(e, null, l, n)))
            : wt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Qe(t, e, n)),
      t
    )
  }
  function Es(t, e, l, a) {
    return (Ka(), (e.flags |= 256), wt(t, e, l, a), e.child)
  }
  var zc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function Mc(t) {
    return { baseLanes: t, cachePool: co() }
  }
  function Nc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= be), t)
  }
  function Ts(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      c
    if (
      ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      c && ((n = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (dt) {
        if ((n ? cl(e) : fl(), dt)) {
          var r = Dt,
            m
          if ((m = r)) {
            t: {
              for (m = r, r = xe; m.nodeType !== 8; ) {
                if (!r) {
                  r = null
                  break t
                }
                if (((m = Ae(m.nextSibling)), m === null)) {
                  r = null
                  break t
                }
              }
              r = m
            }
            r !== null
              ? ((e.memoizedState = {
                  dehydrated: r,
                  treeContext: Nl !== null ? { id: Le, overflow: Be } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (m = ce(18, null, null, 0)),
                (m.stateNode = r),
                (m.return = e),
                (e.child = m),
                (Wt = e),
                (Dt = null),
                (m = !0))
              : (m = !1)
          }
          m || jl(e)
        }
        if (((r = e.memoizedState), r !== null && ((r = r.dehydrated), r !== null)))
          return (yf(r) ? (e.lanes = 32) : (e.lanes = 536870912), null)
        Xe(e)
      }
      return (
        (r = a.children),
        (a = a.fallback),
        n
          ? (fl(),
            (n = e.mode),
            (r = Au({ mode: 'hidden', children: r }, n)),
            (a = Ml(a, n, l, null)),
            (r.return = e),
            (a.return = e),
            (r.sibling = a),
            (e.child = r),
            (n = e.child),
            (n.memoizedState = Mc(l)),
            (n.childLanes = Nc(t, c, l)),
            (e.memoizedState = zc),
            a)
          : (cl(e), Uc(e, r))
      )
    }
    if (((m = t.memoizedState), m !== null && ((r = m.dehydrated), r !== null))) {
      if (u)
        e.flags & 256
          ? (cl(e), (e.flags &= -257), (e = Cc(t, e, l)))
          : e.memoizedState !== null
            ? (fl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (fl(),
              (n = a.fallback),
              (r = e.mode),
              (a = Au({ mode: 'visible', children: a.children }, r)),
              (n = Ml(n, r, l, null)),
              (n.flags |= 2),
              (a.return = e),
              (n.return = e),
              (a.sibling = n),
              (e.child = a),
              ya(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = Mc(l)),
              (a.childLanes = Nc(t, c, l)),
              (e.memoizedState = zc),
              (e = n))
      else if ((cl(e), yf(r))) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var R = c.dgst
        ;((c = R),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = c),
          Ja({ value: a, source: null, stack: null }),
          (e = Cc(t, e, l)))
      } else if ((Lt || $a(t, e, l, !1), (c = (l & t.childLanes) !== 0), Lt || c)) {
        if (
          ((c = Et),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : yi(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== m.retryLane))
        )
          throw ((m.retryLane = a), na(t, a), de(c, t, a), hs)
        ;(r.data === '$?' || Fc(), (e = Cc(t, e, l)))
      } else
        r.data === '$?'
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = m.treeContext),
            (Dt = Ae(r.nextSibling)),
            (Wt = e),
            (dt = !0),
            (Cl = null),
            (xe = !1),
            t !== null &&
              ((pe[ge++] = Le),
              (pe[ge++] = Be),
              (pe[ge++] = Nl),
              (Le = t.id),
              (Be = t.overflow),
              (Nl = e)),
            (e = Uc(e, a.children)),
            (e.flags |= 4096))
      return e
    }
    return n
      ? (fl(),
        (n = a.fallback),
        (r = e.mode),
        (m = t.child),
        (R = m.sibling),
        (a = qe(m, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = m.subtreeFlags & 65011712),
        R !== null ? (n = qe(R, n)) : ((n = Ml(n, r, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = Mc(l))
          : ((m = r.cachePool),
            m !== null
              ? ((R = jt._currentValue), (m = m.parent !== R ? { parent: R, pool: R } : m))
              : (m = co()),
            (r = { baseLanes: r.baseLanes | l, cachePool: m })),
        (n.memoizedState = r),
        (n.childLanes = Nc(t, c, l)),
        (e.memoizedState = zc),
        a)
      : (cl(e),
        (l = t.child),
        (t = l.sibling),
        (l = qe(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions), c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l)
  }
  function Uc(t, e) {
    return ((e = Au({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e))
  }
  function Au(t, e) {
    return (
      (t = ce(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    )
  }
  function Cc(t, e, l) {
    return (
      ya(e, t.child, null, l),
      (t = Uc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    )
  }
  function Rs(t, e, l) {
    t.lanes |= e
    var a = t.alternate
    ;(a !== null && (a.lanes |= e), Fi(t.return, e, l))
  }
  function jc(t, e, l, a, n) {
    var u = t.memoizedState
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n))
  }
  function As(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail
    if ((wt(t, e, a.children, l), (a = Ht.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (e.flags |= 128))
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Rs(t, l, e)
          else if (t.tag === 19) Rs(t, l, e)
          else if (t.child !== null) {
            ;((t.child.return = t), (t = t.child))
            continue
          }
          if (t === e) break t
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t
            t = t.return
          }
          ;((t.sibling.return = t.return), (t = t.sibling))
        }
      a &= 1
    }
    switch ((G(Ht, a), n)) {
      case 'forwards':
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate), t !== null && bu(t) === null && (n = l), (l = l.sibling))
        ;((l = n),
          l === null ? ((n = e.child), (e.child = null)) : ((n = l.sibling), (l.sibling = null)),
          jc(e, !1, n, l, u))
        break
      case 'backwards':
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && bu(t) === null)) {
            e.child = n
            break
          }
          ;((t = n.sibling), (n.sibling = l), (l = n), (n = t))
        }
        jc(e, !0, l, null, u)
        break
      case 'together':
        jc(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
    return e.child
  }
  function Qe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (hl |= e.lanes), (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if (($a(t, e, l, !1), (l & e.childLanes) === 0)) return null
      } else return null
    if (t !== null && e.child !== t.child) throw Error(f(153))
    if (e.child !== null) {
      for (t = e.child, l = qe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        ((t = t.sibling), (l = l.sibling = qe(t, t.pendingProps)), (l.return = e))
      l.sibling = null
    }
    return e.child
  }
  function Hc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && nu(t)))
  }
  function ty(t, e, l) {
    switch (e.tag) {
      case 3:
        ;(At(e, e.stateNode.containerInfo), ll(e, jt, t.memoizedState.cache), Ka())
        break
      case 27:
      case 5:
        oi(e)
        break
      case 4:
        At(e, e.stateNode.containerInfo)
        break
      case 10:
        ll(e, e.type, e.memoizedProps.value)
        break
      case 13:
        var a = e.memoizedState
        if (a !== null)
          return a.dehydrated !== null
            ? (cl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? Ts(t, e, l)
              : (cl(e), (t = Qe(t, e, l)), t !== null ? t.sibling : null)
        cl(e)
        break
      case 19:
        var n = (t.flags & 128) !== 0
        if (
          ((a = (l & e.childLanes) !== 0),
          a || ($a(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return As(t, e, l)
          e.flags |= 128
        }
        if (
          ((n = e.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          G(Ht, Ht.current),
          a)
        )
          break
        return null
      case 22:
      case 23:
        return ((e.lanes = 0), ps(t, e, l))
      case 24:
        ll(e, jt, t.memoizedState.cache)
    }
    return Qe(t, e, l)
  }
  function _s(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Lt = !0
      else {
        if (!Hc(t, l) && (e.flags & 128) === 0) return ((Lt = !1), ty(t, e, l))
        Lt = (t.flags & 131072) !== 0
      }
    else ((Lt = !1), dt && (e.flags & 1048576) !== 0 && to(e, au, e.index))
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps
          var a = e.elementType,
            n = a._init
          if (((a = n(a._payload)), (e.type = a), typeof a == 'function'))
            Zi(a)
              ? ((t = Yl(a, t)), (e.tag = 1), (e = bs(null, e, a, t, l)))
              : ((e.tag = 0), (e = Dc(null, e, a, t, l)))
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === nt)) {
                ;((e.tag = 11), (e = ms(null, e, a, t, l)))
                break t
              } else if (n === ct) {
                ;((e.tag = 14), (e = ys(null, e, a, t, l)))
                break t
              }
            }
            throw ((e = Al(a) || a), Error(f(306, e, '')))
          }
        }
        return e
      case 0:
        return Dc(t, e, e.type, e.pendingProps, l)
      case 1:
        return ((a = e.type), (n = Yl(a, e.pendingProps)), bs(t, e, a, n, l))
      case 3:
        t: {
          if ((At(e, e.stateNode.containerInfo), t === null)) throw Error(f(387))
          a = e.pendingProps
          var u = e.memoizedState
          ;((n = u.element), nc(t, e), en(e, a, null, l))
          var c = e.memoizedState
          if (
            ((a = c.cache),
            ll(e, jt, a),
            a !== u.cache && Pi(e, [jt], l, !0),
            tn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Es(t, e, a, l)
              break t
            } else if (a !== n) {
              ;((n = ye(Error(f(424)), e)), Ja(n), (e = Es(t, e, a, l)))
              break t
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body
                  break
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t
              }
              for (
                Dt = Ae(t.firstChild),
                  Wt = e,
                  dt = !0,
                  Cl = null,
                  xe = !0,
                  l = as(e, null, a, l),
                  e.child = l;
                l;

              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling))
            }
          else {
            if ((Ka(), a === n)) {
              e = Qe(t, e, l)
              break t
            }
            wt(t, e, a, l)
          }
          e = e.child
        }
        return e
      case 26:
        return (
          Ru(t, e),
          t === null
            ? (l = zd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : dt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Bu(tt.current).createElement(l)),
                (a[Kt] = e),
                (a[Ft] = t),
                Qt(a, l, t),
                qt(a),
                (e.stateNode = a))
            : (e.memoizedState = zd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        )
      case 27:
        return (
          oi(e),
          t === null &&
            dt &&
            ((a = e.stateNode = Od(e.type, e.pendingProps, tt.current)),
            (Wt = e),
            (xe = !0),
            (n = Dt),
            pl(e.type) ? ((vf = n), (Dt = Ae(a.firstChild))) : (Dt = n)),
          wt(t, e, e.pendingProps.children, l),
          Ru(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        )
      case 5:
        return (
          t === null &&
            dt &&
            ((n = a = Dt) &&
              ((a = Dy(a, e.type, e.pendingProps, xe)),
              a !== null
                ? ((e.stateNode = a), (Wt = e), (Dt = Ae(a.firstChild)), (xe = !1), (n = !0))
                : (n = !1)),
            n || jl(e)),
          oi(e),
          (n = e.type),
          (u = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = u.children),
          df(n, u) ? (a = null) : c !== null && df(n, c) && (e.flags |= 32),
          e.memoizedState !== null && ((n = oc(t, e, Km, null, null, l)), (An._currentValue = n)),
          Ru(t, e),
          wt(t, e, a, l),
          e.child
        )
      case 6:
        return (
          t === null &&
            dt &&
            ((t = l = Dt) &&
              ((l = zy(l, e.pendingProps, xe)),
              l !== null ? ((e.stateNode = l), (Wt = e), (Dt = null), (t = !0)) : (t = !1)),
            t || jl(e)),
          null
        )
      case 13:
        return Ts(t, e, l)
      case 4:
        return (
          At(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ya(e, null, a, l)) : wt(t, e, a, l),
          e.child
        )
      case 11:
        return ms(t, e, e.type, e.pendingProps, l)
      case 7:
        return (wt(t, e, e.pendingProps, l), e.child)
      case 8:
        return (wt(t, e, e.pendingProps.children, l), e.child)
      case 12:
        return (wt(t, e, e.pendingProps.children, l), e.child)
      case 10:
        return ((a = e.pendingProps), ll(e, e.type, a.value), wt(t, e, a.children, l), e.child)
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          ql(e),
          (n = Jt(n)),
          (a = a(n)),
          (e.flags |= 1),
          wt(t, e, a, l),
          e.child
        )
      case 14:
        return ys(t, e, e.type, e.pendingProps, l)
      case 15:
        return vs(t, e, e.type, e.pendingProps, l)
      case 19:
        return As(t, e, l)
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Au(a, l)), (l.ref = e.ref), (e.child = l), (l.return = e), (e = l))
            : ((l = qe(t.child, a)), (l.ref = e.ref), (e.child = l), (l.return = e), (e = l)),
          e
        )
      case 22:
        return ps(t, e, l)
      case 24:
        return (
          ql(e),
          (a = Jt(jt)),
          t === null
            ? ((n = ec()),
              n === null &&
                ((n = Et),
                (u = Ii()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              ac(e),
              ll(e, jt, n))
            : ((t.lanes & l) !== 0 && (nc(t, e), en(e, null, null, l), tn()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n),
                  ll(e, jt, a))
                : ((a = u.cache), ll(e, jt, a), a !== n.cache && Pi(e, [jt], l, !0))),
          wt(t, e, e.pendingProps.children, l),
          e.child
        )
      case 29:
        throw e.pendingProps
    }
    throw Error(f(156, e.tag))
  }
  function Ze(t) {
    t.flags |= 4
  }
  function Os(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0) t.flags &= -16777217
    else if (((t.flags |= 16777216), !jd(e))) {
      if (
        ((e = Se.current),
        e !== null &&
          ((ft & 4194048) === ft
            ? De !== null
            : ((ft & 62914560) !== ft && (ft & 536870912) === 0) || e !== De))
      )
        throw ((Pa = lc), fo)
      t.flags |= 8192
    }
  }
  function _u(t, e) {
    ;(e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? ar() : 536870912), (t.lanes |= e), (Sa |= e)))
  }
  function rn(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail
          for (var l = null; e !== null; ) (e.alternate !== null && (l = e), (e = e.sibling))
          l === null ? (t.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = t.tail
          for (var a = null; l !== null; ) (l.alternate !== null && (a = l), (l = l.sibling))
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null)
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling))
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling))
    return ((t.subtreeFlags |= a), (t.childLanes = l), e)
  }
  function ey(t, e, l) {
    var a = e.pendingProps
    switch (($i(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ot(e), null)
      case 1:
        return (Ot(e), null)
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ge(jt),
          Pe(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Va(e)
              ? Ze(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ao())),
          Ot(e),
          null
        )
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ze(e), l !== null ? (Ot(e), Os(e, l)) : (Ot(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (Ze(e), Ot(e), Os(e, l))
                : (Ot(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && Ze(e), Ot(e), (e.flags &= -16777217)),
          null
        )
      case 27:
        ;(qn(e), (l = tt.current))
        var n = e.type
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ze(e)
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166))
            return (Ot(e), null)
          }
          ;((t = $.current), Va(e) ? eo(e) : ((t = Od(n, a, l)), (e.stateNode = t), Ze(e)))
        }
        return (Ot(e), null)
      case 5:
        if ((qn(e), (l = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== a && Ze(e)
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166))
            return (Ot(e), null)
          }
          if (((t = $.current), Va(e))) eo(e)
          else {
            switch (((n = Bu(tt.current)), t)) {
              case 1:
                t = n.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                t = n.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    t = n.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    t = n.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                    break
                  case 'script':
                    ;((t = n.createElement('div')),
                      (t.innerHTML = '<script><\/script>'),
                      (t = t.removeChild(t.firstChild)))
                    break
                  case 'select':
                    ;((t =
                      typeof a.is == 'string'
                        ? n.createElement('select', { is: a.is })
                        : n.createElement('select')),
                      a.multiple ? (t.multiple = !0) : a.size && (t.size = a.size))
                    break
                  default:
                    t =
                      typeof a.is == 'string'
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l)
                }
            }
            ;((t[Kt] = e), (t[Ft] = a))
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ;((n.child.return = n), (n = n.child))
                continue
              }
              if (n === e) break t
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t
                n = n.return
              }
              ;((n.sibling.return = n.return), (n = n.sibling))
            }
            e.stateNode = t
            t: switch ((Qt(t, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!a.autoFocus
                break t
              case 'img':
                t = !0
                break t
              default:
                t = !1
            }
            t && Ze(e)
          }
        }
        return (Ot(e), (e.flags &= -16777217), null)
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ze(e)
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(f(166))
          if (((t = tt.current), Va(e))) {
            if (((t = e.stateNode), (l = e.memoizedProps), (a = null), (n = Wt), n !== null))
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps
              }
            ;((t[Kt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Sd(t.nodeValue, l)
              )),
              t || jl(e))
          } else ((t = Bu(t).createTextNode(a)), (t[Kt] = e), (e.stateNode = t))
        }
        return (Ot(e), null)
      case 13:
        if (
          ((a = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Va(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318))
              if (((n = e.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
                throw Error(f(317))
              n[Kt] = e
            } else (Ka(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4))
            ;(Ot(e), (n = !1))
          } else
            ((n = ao()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (n = !0))
          if (!n) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null)
        }
        if ((Xe(e), (e.flags & 128) !== 0)) return ((e.lanes = l), e)
        if (((l = a !== null), (t = t !== null && t.memoizedState !== null), l)) {
          ;((a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool))
          var u = null
          ;(a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048))
        }
        return (l !== t && l && (e.child.flags |= 8192), _u(e, e.updateQueue), Ot(e), null)
      case 4:
        return (Pe(), t === null && cf(e.stateNode.containerInfo), Ot(e), null)
      case 10:
        return (Ge(e.type), Ot(e), null)
      case 19:
        if ((Q(Ht), (n = e.memoizedState), n === null)) return (Ot(e), null)
        if (((a = (e.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) rn(n, !1)
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = bu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      rn(n, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      _u(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    (Ir(l, t), (l = l.sibling))
                  return (G(Ht, (Ht.current & 1) | 2), e.child)
                }
                t = t.sibling
              }
            n.tail !== null &&
              Oe() > Du &&
              ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304))
          }
        else {
          if (!a)
            if (((t = bu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                _u(e, t),
                rn(n, !0),
                n.tail === null && n.tailMode === 'hidden' && !u.alternate && !dt)
              )
                return (Ot(e), null)
            } else
              2 * Oe() - n.renderingStartTime > Du &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), rn(n, !1), (e.lanes = 4194304))
          n.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = n.last), t !== null ? (t.sibling = u) : (e.child = u), (n.last = u))
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Oe()),
            (e.sibling = null),
            (t = Ht.current),
            G(Ht, a ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null)
      case 22:
      case 23:
        return (
          Xe(e),
          fc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (l = e.updateQueue),
          l !== null && _u(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Q(Ll),
          null
        )
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ge(jt),
          Ot(e),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(f(156, e.tag))
  }
  function ly(t, e) {
    switch (($i(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null)
      case 3:
        return (
          Ge(jt),
          Pe(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        )
      case 26:
      case 27:
      case 5:
        return (qn(e), null)
      case 13:
        if ((Xe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(f(340))
          Ka()
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null)
      case 19:
        return (Q(Ht), null)
      case 4:
        return (Pe(), null)
      case 10:
        return (Ge(e.type), null)
      case 22:
      case 23:
        return (
          Xe(e),
          fc(),
          t !== null && Q(Ll),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        )
      case 24:
        return (Ge(jt), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function xs(t, e) {
    switch (($i(e), e.tag)) {
      case 3:
        ;(Ge(jt), Pe())
        break
      case 26:
      case 27:
      case 5:
        qn(e)
        break
      case 4:
        Pe()
        break
      case 13:
        Xe(e)
        break
      case 19:
        Q(Ht)
        break
      case 10:
        Ge(e.type)
        break
      case 22:
      case 23:
        ;(Xe(e), fc(), t !== null && Q(Ll))
        break
      case 24:
        Ge(jt)
    }
  }
  function on(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null
      if (a !== null) {
        var n = a.next
        l = n
        do {
          if ((l.tag & t) === t) {
            a = void 0
            var u = l.create,
              c = l.inst
            ;((a = u()), (c.destroy = a))
          }
          l = l.next
        } while (l !== n)
      }
    } catch (r) {
      bt(e, e.return, r)
    }
  }
  function rl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null
      if (n !== null) {
        var u = n.next
        a = u
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              r = c.destroy
            if (r !== void 0) {
              ;((c.destroy = void 0), (n = e))
              var m = l,
                R = r
              try {
                R()
              } catch (z) {
                bt(n, m, z)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (z) {
      bt(e, e.return, z)
    }
  }
  function Ds(t) {
    var e = t.updateQueue
    if (e !== null) {
      var l = t.stateNode
      try {
        yo(e, l)
      } catch (a) {
        bt(t, t.return, a)
      }
    }
  }
  function zs(t, e, l) {
    ;((l.props = Yl(t.type, t.memoizedProps)), (l.state = t.memoizedState))
    try {
      l.componentWillUnmount()
    } catch (a) {
      bt(t, e, a)
    }
  }
  function sn(t, e) {
    try {
      var l = t.ref
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode
            break
          case 30:
            a = t.stateNode
            break
          default:
            a = t.stateNode
        }
        typeof l == 'function' ? (t.refCleanup = l(a)) : (l.current = a)
      }
    } catch (n) {
      bt(t, e, n)
    }
  }
  function ze(t, e) {
    var l = t.ref,
      a = t.refCleanup
    if (l !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (n) {
          bt(t, e, n)
        } finally {
          ;((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null))
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (n) {
          bt(t, e, n)
        }
      else l.current = null
  }
  function Ms(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus()
          break t
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
      }
    } catch (n) {
      bt(t, t.return, n)
    }
  }
  function qc(t, e, l) {
    try {
      var a = t.stateNode
      ;(Ry(a, t.type, l, e), (a[Ft] = e))
    } catch (n) {
      bt(t, t.return, n)
    }
  }
  function Ns(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && pl(t.type)) || t.tag === 4
  }
  function Lc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ns(t.return)) return null
        t = t.return
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if ((t.tag === 27 && pl(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t
        ;((t.child.return = t), (t = t.child))
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }
  function Bc(t, e, l) {
    var a = t.tag
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Lu)))
    else if (
      a !== 4 &&
      (a === 27 && pl(t.type) && ((l = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (Bc(t, e, l), t = t.sibling; t !== null; ) (Bc(t, e, l), (t = t.sibling))
  }
  function Ou(t, e, l) {
    var a = t.tag
    if (a === 5 || a === 6) ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t))
    else if (a !== 4 && (a === 27 && pl(t.type) && (l = t.stateNode), (t = t.child), t !== null))
      for (Ou(t, e, l), t = t.sibling; t !== null; ) (Ou(t, e, l), (t = t.sibling))
  }
  function Us(t) {
    var e = t.stateNode,
      l = t.memoizedProps
    try {
      for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0])
      ;(Qt(e, a, l), (e[Kt] = t), (e[Ft] = l))
    } catch (u) {
      bt(t, t.return, u)
    }
  }
  var Ve = !1,
    Nt = !1,
    Yc = !1,
    Cs = typeof WeakSet == 'function' ? WeakSet : Set,
    Bt = null
  function ay(t, e) {
    if (((t = t.containerInfo), (of = Zu), (t = Qr(t)), Li(t))) {
      if ('selectionStart' in t) var l = { start: t.selectionStart, end: t.selectionEnd }
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window
          var a = l.getSelection && l.getSelection()
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode
            var n = a.anchorOffset,
              u = a.focusNode
            a = a.focusOffset
            try {
              ;(l.nodeType, u.nodeType)
            } catch {
              l = null
              break t
            }
            var c = 0,
              r = -1,
              m = -1,
              R = 0,
              z = 0,
              j = t,
              A = null
            e: for (;;) {
              for (
                var _;
                j !== l || (n !== 0 && j.nodeType !== 3) || (r = c + n),
                  j !== u || (a !== 0 && j.nodeType !== 3) || (m = c + a),
                  j.nodeType === 3 && (c += j.nodeValue.length),
                  (_ = j.firstChild) !== null;

              )
                ((A = j), (j = _))
              for (;;) {
                if (j === t) break e
                if (
                  (A === l && ++R === n && (r = c),
                  A === u && ++z === a && (m = c),
                  (_ = j.nextSibling) !== null)
                )
                  break
                ;((j = A), (A = j.parentNode))
              }
              j = _
            }
            l = r === -1 || m === -1 ? null : { start: r, end: m }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (sf = { focusedElem: t, selectionRange: l }, Zu = !1, Bt = e; Bt !== null; )
      if (((e = Bt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null))
        ((t.return = e), (Bt = t))
      else
        for (; Bt !== null; ) {
          switch (((e = Bt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ;((t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode))
                try {
                  var P = Yl(l.type, n, l.elementType === l.type)
                  ;((t = a.getSnapshotBeforeUpdate(P, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t))
                } catch (k) {
                  bt(l, l.return, k)
                }
              }
              break
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) mf(t)
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      mf(t)
                      break
                    default:
                      t.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((t & 1024) !== 0) throw Error(f(163))
          }
          if (((t = e.sibling), t !== null)) {
            ;((t.return = e.return), (Bt = t))
            break
          }
          Bt = e.return
        }
  }
  function js(t, e, l) {
    var a = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ;(ol(t, l), a & 4 && on(5, l))
        break
      case 1:
        if ((ol(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount()
            } catch (c) {
              bt(l, l.return, c)
            }
          else {
            var n = Yl(l.type, e.memoizedProps)
            e = e.memoizedState
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
            } catch (c) {
              bt(l, l.return, c)
            }
          }
        ;(a & 64 && Ds(l), a & 512 && sn(l, l.return))
        break
      case 3:
        if ((ol(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode
                break
              case 1:
                e = l.child.stateNode
            }
          try {
            yo(t, e)
          } catch (c) {
            bt(l, l.return, c)
          }
        }
        break
      case 27:
        e === null && a & 4 && Us(l)
      case 26:
      case 5:
        ;(ol(t, l), e === null && a & 4 && Ms(l), a & 512 && sn(l, l.return))
        break
      case 12:
        ol(t, l)
        break
      case 13:
        ;(ol(t, l),
          a & 4 && Ls(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((l = dy.bind(null, l)), My(t, l)))))
        break
      case 22:
        if (((a = l.memoizedState !== null || Ve), !a)) {
          ;((e = (e !== null && e.memoizedState !== null) || Nt), (n = Ve))
          var u = Nt
          ;((Ve = a),
            (Nt = e) && !u ? sl(t, l, (l.subtreeFlags & 8772) !== 0) : ol(t, l),
            (Ve = n),
            (Nt = u))
        }
        break
      case 30:
        break
      default:
        ol(t, l)
    }
  }
  function Hs(t) {
    var e = t.alternate
    ;(e !== null && ((t.alternate = null), Hs(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && gi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null))
  }
  var _t = null,
    te = !1
  function Ke(t, e, l) {
    for (l = l.child; l !== null; ) (qs(t, e, l), (l = l.sibling))
  }
  function qs(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == 'function')
      try {
        ne.onCommitFiberUnmount(Na, l)
      } catch {}
    switch (l.tag) {
      case 26:
        ;(Nt || ze(l, e),
          Ke(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)))
        break
      case 27:
        Nt || ze(l, e)
        var a = _t,
          n = te
        ;(pl(l.type) && ((_t = l.stateNode), (te = !1)),
          Ke(t, e, l),
          bn(l.stateNode),
          (_t = a),
          (te = n))
        break
      case 5:
        Nt || ze(l, e)
      case 6:
        if (((a = _t), (n = te), (_t = null), Ke(t, e, l), (_t = a), (te = n), _t !== null))
          if (te)
            try {
              ;(_t.nodeType === 9
                ? _t.body
                : _t.nodeName === 'HTML'
                  ? _t.ownerDocument.body
                  : _t
              ).removeChild(l.stateNode)
            } catch (u) {
              bt(l, e, u)
            }
          else
            try {
              _t.removeChild(l.stateNode)
            } catch (u) {
              bt(l, e, u)
            }
        break
      case 18:
        _t !== null &&
          (te
            ? ((t = _t),
              Ad(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                l.stateNode
              ),
              Dn(t))
            : Ad(_t, l.stateNode))
        break
      case 4:
        ;((a = _t),
          (n = te),
          (_t = l.stateNode.containerInfo),
          (te = !0),
          Ke(t, e, l),
          (_t = a),
          (te = n))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(Nt || rl(2, l, e), Nt || rl(4, l, e), Ke(t, e, l))
        break
      case 1:
        ;(Nt ||
          (ze(l, e), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && zs(l, e, a)),
          Ke(t, e, l))
        break
      case 21:
        Ke(t, e, l)
        break
      case 22:
        ;((Nt = (a = Nt) || l.memoizedState !== null), Ke(t, e, l), (Nt = a))
        break
      default:
        Ke(t, e, l)
    }
  }
  function Ls(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Dn(t)
      } catch (l) {
        bt(e, e.return, l)
      }
  }
  function ny(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode
        return (e === null && (e = t.stateNode = new Cs()), e)
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Cs()),
          e
        )
      default:
        throw Error(f(435, t.tag))
    }
  }
  function Gc(t, e) {
    var l = ny(t)
    e.forEach(function (a) {
      var n = hy.bind(null, t, a)
      l.has(a) || (l.add(a), a.then(n, n))
    })
  }
  function fe(t, e) {
    var l = e.deletions
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          c = e,
          r = c
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (pl(r.type)) {
                ;((_t = r.stateNode), (te = !1))
                break t
              }
              break
            case 5:
              ;((_t = r.stateNode), (te = !1))
              break t
            case 3:
            case 4:
              ;((_t = r.stateNode.containerInfo), (te = !0))
              break t
          }
          r = r.return
        }
        if (_t === null) throw Error(f(160))
        ;(qs(u, c, n),
          (_t = null),
          (te = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null))
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) (Bs(e, t), (e = e.sibling))
  }
  var Re = null
  function Bs(t, e) {
    var l = t.alternate,
      a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(fe(e, t), re(t), a & 4 && (rl(3, t, t.return), on(3, t), rl(5, t, t.return)))
        break
      case 1:
        ;(fe(e, t),
          re(t),
          a & 512 && (Nt || l === null || ze(l, l.return)),
          a & 64 &&
            Ve &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))))
        break
      case 26:
        var n = Re
        if ((fe(e, t), re(t), a & 512 && (Nt || l === null || ze(l, l.return)), a & 4)) {
          var u = l !== null ? l.memoizedState : null
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ;((a = t.type), (l = t.memoizedProps), (n = n.ownerDocument || n))
                  e: switch (a) {
                    case 'title':
                      ;((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[ja] ||
                          u[Kt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(u, n.querySelector('head > title'))),
                        Qt(u, a, l),
                        (u[Kt] = t),
                        qt(u),
                        (a = u))
                      break t
                    case 'link':
                      var c = Ud('link', 'href', n).get(a + (l.href || ''))
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') === (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(r, 1)
                            break e
                          }
                      }
                      ;((u = n.createElement(a)), Qt(u, a, l), n.head.appendChild(u))
                      break
                    case 'meta':
                      if ((c = Ud('meta', 'content', n).get(a + (l.content || '')))) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((u = c[r]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') === (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(r, 1)
                            break e
                          }
                      }
                      ;((u = n.createElement(a)), Qt(u, a, l), n.head.appendChild(u))
                      break
                    default:
                      throw Error(f(468, a))
                  }
                  ;((u[Kt] = t), qt(u), (a = u))
                }
                t.stateNode = a
              } else Cd(n, t.type, t.stateNode)
            else t.stateNode = Nd(n, a, t.memoizedProps)
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null ? Cd(n, t.type, t.stateNode) : Nd(n, a, t.memoizedProps))
              : a === null && t.stateNode !== null && qc(t, t.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        ;(fe(e, t),
          re(t),
          a & 512 && (Nt || l === null || ze(l, l.return)),
          l !== null && a & 4 && qc(t, t.memoizedProps, l.memoizedProps))
        break
      case 5:
        if ((fe(e, t), re(t), a & 512 && (Nt || l === null || ze(l, l.return)), t.flags & 32)) {
          n = t.stateNode
          try {
            Fl(n, '')
          } catch (_) {
            bt(t, t.return, _)
          }
        }
        ;(a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), qc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Yc = !0))
        break
      case 6:
        if ((fe(e, t), re(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162))
          ;((a = t.memoizedProps), (l = t.stateNode))
          try {
            l.nodeValue = a
          } catch (_) {
            bt(t, t.return, _)
          }
        }
        break
      case 3:
        if (
          ((wu = null),
          (n = Re),
          (Re = Yu(e.containerInfo)),
          fe(e, t),
          (Re = n),
          re(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Dn(e.containerInfo)
          } catch (_) {
            bt(t, t.return, _)
          }
        Yc && ((Yc = !1), Ys(t))
        break
      case 4:
        ;((a = Re), (Re = Yu(t.stateNode.containerInfo)), fe(e, t), re(t), (Re = a))
        break
      case 12:
        ;(fe(e, t), re(t))
        break
      case 13:
        ;(fe(e, t),
          re(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (Kc = Oe()),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Gc(t, a))))
        break
      case 22:
        n = t.memoizedState !== null
        var m = l !== null && l.memoizedState !== null,
          R = Ve,
          z = Nt
        if (((Ve = R || n), (Nt = z || m), fe(e, t), (Nt = z), (Ve = R), re(t), a & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || m || Ve || Nt || Gl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e
                try {
                  if (((u = m.stateNode), n))
                    ((c = u.style),
                      typeof c.setProperty == 'function'
                        ? c.setProperty('display', 'none', 'important')
                        : (c.display = 'none'))
                  else {
                    r = m.stateNode
                    var j = m.memoizedProps.style,
                      A = j != null && j.hasOwnProperty('display') ? j.display : null
                    r.style.display = A == null || typeof A == 'boolean' ? '' : ('' + A).trim()
                  }
                } catch (_) {
                  bt(m, m.return, _)
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e
                try {
                  m.stateNode.nodeValue = n ? '' : m.memoizedProps
                } catch (_) {
                  bt(m, m.return, _)
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ;((e.child.return = e), (e = e.child))
              continue
            }
            if (e === t) break t
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t
              ;(l === e && (l = null), (e = e.return))
            }
            ;(l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling))
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Gc(t, l))))
        break
      case 19:
        ;(fe(e, t),
          re(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Gc(t, a))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(fe(e, t), re(t))
    }
  }
  function re(t) {
    var e = t.flags
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ns(a)) {
            l = a
            break
          }
          a = a.return
        }
        if (l == null) throw Error(f(160))
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Lc(t)
            Ou(t, u, n)
            break
          case 5:
            var c = l.stateNode
            l.flags & 32 && (Fl(c, ''), (l.flags &= -33))
            var r = Lc(t)
            Ou(t, r, c)
            break
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              R = Lc(t)
            Bc(t, R, m)
            break
          default:
            throw Error(f(161))
        }
      } catch (z) {
        bt(t, t.return, z)
      }
      t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
  }
  function Ys(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t
        ;(Ys(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling))
      }
  }
  function ol(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (js(t, e.alternate, e), (e = e.sibling))
  }
  function Gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(rl(4, e, e.return), Gl(e))
          break
        case 1:
          ze(e, e.return)
          var l = e.stateNode
          ;(typeof l.componentWillUnmount == 'function' && zs(e, e.return, l), Gl(e))
          break
        case 27:
          bn(e.stateNode)
        case 26:
        case 5:
          ;(ze(e, e.return), Gl(e))
          break
        case 22:
          e.memoizedState === null && Gl(e)
          break
        case 30:
          Gl(e)
          break
        default:
          Gl(e)
      }
      t = t.sibling
    }
  }
  function sl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        c = u.flags
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ;(sl(n, u, l), on(4, u))
          break
        case 1:
          if ((sl(n, u, l), (a = u), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount()
            } catch (R) {
              bt(a, a.return, R)
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode
            try {
              var m = n.shared.hiddenCallbacks
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) mo(m[n], r)
            } catch (R) {
              bt(a, a.return, R)
            }
          }
          ;(l && c & 64 && Ds(u), sn(u, u.return))
          break
        case 27:
          Us(u)
        case 26:
        case 5:
          ;(sl(n, u, l), l && a === null && c & 4 && Ms(u), sn(u, u.return))
          break
        case 12:
          sl(n, u, l)
          break
        case 13:
          ;(sl(n, u, l), l && c & 4 && Ls(n, u))
          break
        case 22:
          ;(u.memoizedState === null && sl(n, u, l), sn(u, u.return))
          break
        case 30:
          break
        default:
          sl(n, u, l)
      }
      e = e.sibling
    }
  }
  function wc(t, e) {
    var l = null
    ;(t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && ka(l)))
  }
  function Xc(t, e) {
    ;((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ka(t)))
  }
  function Me(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Gs(t, e, l, a), (e = e.sibling))
  }
  function Gs(t, e, l, a) {
    var n = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ;(Me(t, e, l, a), n & 2048 && on(9, e))
        break
      case 1:
        Me(t, e, l, a)
        break
      case 3:
        ;(Me(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ka(t))))
        break
      case 12:
        if (n & 2048) {
          ;(Me(t, e, l, a), (t = e.stateNode))
          try {
            var u = e.memoizedProps,
              c = u.id,
              r = u.onPostCommit
            typeof r == 'function' &&
              r(c, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0)
          } catch (m) {
            bt(e, e.return, m)
          }
        } else Me(t, e, l, a)
        break
      case 13:
        Me(t, e, l, a)
        break
      case 23:
        break
      case 22:
        ;((u = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Me(t, e, l, a)
              : dn(t, e)
            : u._visibility & 2
              ? Me(t, e, l, a)
              : ((u._visibility |= 2), va(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && wc(c, e))
        break
      case 24:
        ;(Me(t, e, l, a), n & 2048 && Xc(e.alternate, e))
        break
      default:
        Me(t, e, l, a)
    }
  }
  function va(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        c = e,
        r = l,
        m = a,
        R = c.flags
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ;(va(u, c, r, m, n), on(8, c))
          break
        case 23:
          break
        case 22:
          var z = c.stateNode
          ;(c.memoizedState !== null
            ? z._visibility & 2
              ? va(u, c, r, m, n)
              : dn(u, c)
            : ((z._visibility |= 2), va(u, c, r, m, n)),
            n && R & 2048 && wc(c.alternate, c))
          break
        case 24:
          ;(va(u, c, r, m, n), n && R & 2048 && Xc(c.alternate, c))
          break
        default:
          va(u, c, r, m, n)
      }
      e = e.sibling
    }
  }
  function dn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags
        switch (a.tag) {
          case 22:
            ;(dn(l, a), n & 2048 && wc(a.alternate, a))
            break
          case 24:
            ;(dn(l, a), n & 2048 && Xc(a.alternate, a))
            break
          default:
            dn(l, a)
        }
        e = e.sibling
      }
  }
  var hn = 8192
  function pa(t) {
    if (t.subtreeFlags & hn) for (t = t.child; t !== null; ) (ws(t), (t = t.sibling))
  }
  function ws(t) {
    switch (t.tag) {
      case 26:
        ;(pa(t),
          t.flags & hn && t.memoizedState !== null && Qy(Re, t.memoizedState, t.memoizedProps))
        break
      case 5:
        pa(t)
        break
      case 3:
      case 4:
        var e = Re
        ;((Re = Yu(t.stateNode.containerInfo)), pa(t), (Re = e))
        break
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = hn), (hn = 16777216), pa(t), (hn = e))
            : pa(t))
        break
      default:
        pa(t)
    }
  }
  function Xs(t) {
    var e = t.alternate
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null
      do ((e = t.sibling), (t.sibling = null), (t = e))
      while (t !== null)
    }
  }
  function mn(t) {
    var e = t.deletions
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l]
          ;((Bt = a), Zs(a, t))
        }
      Xs(t)
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Qs(t), (t = t.sibling))
  }
  function Qs(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(mn(t), t.flags & 2048 && rl(9, t, t.return))
        break
      case 3:
        mn(t)
        break
      case 12:
        mn(t)
        break
      case 22:
        var e = t.stateNode
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), xu(t))
          : mn(t)
        break
      default:
        mn(t)
    }
  }
  function xu(t) {
    var e = t.deletions
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l]
          ;((Bt = a), Zs(a, t))
        }
      Xs(t)
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ;(rl(8, e, e.return), xu(e))
          break
        case 22:
          ;((l = e.stateNode), l._visibility & 2 && ((l._visibility &= -3), xu(e)))
          break
        default:
          xu(e)
      }
      t = t.sibling
    }
  }
  function Zs(t, e) {
    for (; Bt !== null; ) {
      var l = Bt
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          rl(8, l, e)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          ka(l.memoizedState.cache)
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Bt = a))
      else
        t: for (l = t; Bt !== null; ) {
          a = Bt
          var n = a.sibling,
            u = a.return
          if ((Hs(a), a === l)) {
            Bt = null
            break t
          }
          if (n !== null) {
            ;((n.return = u), (Bt = n))
            break t
          }
          Bt = u
        }
    }
  }
  var uy = {
      getCacheForType: function (t) {
        var e = Jt(jt),
          l = e.data.get(t)
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l)
      },
    },
    iy = typeof WeakMap == 'function' ? WeakMap : Map,
    mt = 0,
    Et = null,
    ut = null,
    ft = 0,
    yt = 0,
    oe = null,
    dl = !1,
    ga = !1,
    Qc = !1,
    Je = 0,
    zt = 0,
    hl = 0,
    wl = 0,
    Zc = 0,
    be = 0,
    Sa = 0,
    yn = null,
    ee = null,
    Vc = !1,
    Kc = 0,
    Du = 1 / 0,
    zu = null,
    ml = null,
    Xt = 0,
    yl = null,
    ba = null,
    Ea = 0,
    Jc = 0,
    $c = null,
    Vs = null,
    vn = 0,
    kc = null
  function se() {
    if ((mt & 2) !== 0 && ft !== 0) return ft & -ft
    if (N.T !== null) {
      var t = fa
      return t !== 0 ? t : lf()
    }
    return ir()
  }
  function Ks() {
    be === 0 && (be = (ft & 536870912) === 0 || dt ? lr() : 536870912)
    var t = Se.current
    return (t !== null && (t.flags |= 32), be)
  }
  function de(t, e, l) {
    ;(((t === Et && (yt === 2 || yt === 9)) || t.cancelPendingCommit !== null) &&
      (Ta(t, 0), vl(t, ft, be, !1)),
      Ca(t, l),
      ((mt & 2) === 0 || t !== Et) &&
        (t === Et && ((mt & 2) === 0 && (wl |= l), zt === 4 && vl(t, ft, be, !1)), Ne(t)))
  }
  function Js(t, e, l) {
    if ((mt & 6) !== 0) throw Error(f(327))
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ua(t, e),
      n = a ? ry(t, e) : Pc(t, e, !0),
      u = a
    do {
      if (n === 0) {
        ga && !a && vl(t, e, 0, !1)
        break
      } else {
        if (((l = t.current.alternate), u && !cy(l))) {
          ;((n = Pc(t, e, !1)), (u = !1))
          continue
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var c = 0
          else
            ((c = t.pendingLanes & -536870913), (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0))
          if (c !== 0) {
            e = c
            t: {
              var r = t
              n = yn
              var m = r.current.memoizedState.isDehydrated
              if ((m && (Ta(r, c).flags |= 256), (c = Pc(r, c, !1)), c !== 2)) {
                if (Qc && !m) {
                  ;((r.errorRecoveryDisabledLanes |= u), (wl |= u), (n = 4))
                  break t
                }
                ;((u = ee), (ee = n), u !== null && (ee === null ? (ee = u) : ee.push.apply(ee, u)))
              }
              n = c
            }
            if (((u = !1), n !== 2)) continue
          }
        }
        if (n === 1) {
          ;(Ta(t, 0), vl(t, e, 0, !0))
          break
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345))
            case 4:
              if ((e & 4194048) !== e) break
            case 6:
              vl(a, e, be, !dl)
              break t
            case 2:
              ee = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(f(329))
          }
          if ((e & 62914560) === e && ((n = Kc + 300 - Oe()), 10 < n)) {
            if ((vl(a, e, be, !dl), Gn(a, 0, !0) !== 0)) break t
            a.timeoutHandle = Td($s.bind(null, a, l, ee, zu, Vc, e, be, wl, Sa, dl, u, 2, -0, 0), n)
            break t
          }
          $s(a, l, ee, zu, Vc, e, be, wl, Sa, dl, u, 0, -0, 0)
        }
      }
      break
    } while (!0)
    Ne(t)
  }
  function $s(t, e, l, a, n, u, c, r, m, R, z, j, A, _) {
    if (
      ((t.timeoutHandle = -1),
      (j = e.subtreeFlags),
      (j & 8192 || (j & 16785408) === 16785408) &&
        ((Rn = { stylesheets: null, count: 0, unsuspend: Xy }), ws(e), (j = Zy()), j !== null))
    ) {
      ;((t.cancelPendingCommit = j(ed.bind(null, t, e, u, l, a, n, c, r, m, z, 1, A, _))),
        vl(t, u, c, !R))
      return
    }
    ed(t, e, u, l, a, n, c, r, m)
  }
  function cy(t) {
    for (var e = t; ; ) {
      var l = e.tag
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot
          n = n.value
          try {
            if (!ie(u(), n)) return !1
          } catch {
            return !1
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) ((l.return = e), (e = l))
      else {
        if (e === t) break
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0
          e = e.return
        }
        ;((e.sibling.return = e.return), (e = e.sibling))
      }
    }
    return !0
  }
  function vl(t, e, l, a) {
    ;((e &= ~Zc),
      (e &= ~wl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes))
    for (var n = e; 0 < n; ) {
      var u = 31 - ue(n),
        c = 1 << u
      ;((a[u] = -1), (n &= ~c))
    }
    l !== 0 && nr(t, l, e)
  }
  function Mu() {
    return (mt & 6) === 0 ? (pn(0), !1) : !0
  }
  function Wc() {
    if (ut !== null) {
      if (yt === 0) var t = ut.return
      else ((t = ut), (Ye = Hl = null), hc(t), (ma = null), (cn = 0), (t = ut))
      for (; t !== null; ) (xs(t.alternate, t), (t = t.return))
      ut = null
    }
  }
  function Ta(t, e) {
    var l = t.timeoutHandle
    ;(l !== -1 && ((t.timeoutHandle = -1), _y(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Wc(),
      (Et = t),
      (ut = l = qe(t.current, null)),
      (ft = e),
      (yt = 0),
      (oe = null),
      (dl = !1),
      (ga = Ua(t, e)),
      (Qc = !1),
      (Sa = be = Zc = wl = hl = zt = 0),
      (ee = yn = null),
      (Vc = !1),
      (e & 8) !== 0 && (e |= e & 32))
    var a = t.entangledLanes
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ue(a),
          u = 1 << n
        ;((e |= t[n]), (a &= ~u))
      }
    return ((Je = e), Pn(), l)
  }
  function ks(t, e) {
    ;((lt = null),
      (N.H = pu),
      e === Fa || e === cu
        ? ((e = so()), (yt = 3))
        : e === fo
          ? ((e = so()), (yt = 4))
          : (yt =
              e === hs
                ? 8
                : e !== null && typeof e == 'object' && typeof e.then == 'function'
                  ? 6
                  : 1),
      (oe = e),
      ut === null && ((zt = 1), Tu(t, ye(e, t.current))))
  }
  function Ws() {
    var t = N.H
    return ((N.H = pu), t === null ? pu : t)
  }
  function Fs() {
    var t = N.A
    return ((N.A = uy), t)
  }
  function Fc() {
    ;((zt = 4),
      dl || ((ft & 4194048) !== ft && Se.current !== null) || (ga = !0),
      ((hl & 134217727) === 0 && (wl & 134217727) === 0) || Et === null || vl(Et, ft, be, !1))
  }
  function Pc(t, e, l) {
    var a = mt
    mt |= 2
    var n = Ws(),
      u = Fs()
    ;((Et !== t || ft !== e) && ((zu = null), Ta(t, e)), (e = !1))
    var c = zt
    t: do
      try {
        if (yt !== 0 && ut !== null) {
          var r = ut,
            m = oe
          switch (yt) {
            case 8:
              ;(Wc(), (c = 6))
              break t
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0)
              var R = yt
              if (((yt = 0), (oe = null), Ra(t, r, m, R), l && ga)) {
                c = 0
                break t
              }
              break
            default:
              ;((R = yt), (yt = 0), (oe = null), Ra(t, r, m, R))
          }
        }
        ;(fy(), (c = zt))
        break
      } catch (z) {
        ks(t, z)
      }
    while (!0)
    return (
      e && t.shellSuspendCounter++,
      (Ye = Hl = null),
      (mt = a),
      (N.H = n),
      (N.A = u),
      ut === null && ((Et = null), (ft = 0), Pn()),
      c
    )
  }
  function fy() {
    for (; ut !== null; ) Ps(ut)
  }
  function ry(t, e) {
    var l = mt
    mt |= 2
    var a = Ws(),
      n = Fs()
    Et !== t || ft !== e ? ((zu = null), (Du = Oe() + 500), Ta(t, e)) : (ga = Ua(t, e))
    t: do
      try {
        if (yt !== 0 && ut !== null) {
          e = ut
          var u = oe
          e: switch (yt) {
            case 1:
              ;((yt = 0), (oe = null), Ra(t, e, u, 1))
              break
            case 2:
            case 9:
              if (ro(u)) {
                ;((yt = 0), (oe = null), Is(e))
                break
              }
              ;((e = function () {
                ;((yt !== 2 && yt !== 9) || Et !== t || (yt = 7), Ne(t))
              }),
                u.then(e, e))
              break t
            case 3:
              yt = 7
              break t
            case 4:
              yt = 5
              break t
            case 7:
              ro(u) ? ((yt = 0), (oe = null), Is(e)) : ((yt = 0), (oe = null), Ra(t, e, u, 7))
              break
            case 5:
              var c = null
              switch (ut.tag) {
                case 26:
                  c = ut.memoizedState
                case 5:
                case 27:
                  var r = ut
                  if (!c || jd(c)) {
                    ;((yt = 0), (oe = null))
                    var m = r.sibling
                    if (m !== null) ut = m
                    else {
                      var R = r.return
                      R !== null ? ((ut = R), Nu(R)) : (ut = null)
                    }
                    break e
                  }
              }
              ;((yt = 0), (oe = null), Ra(t, e, u, 5))
              break
            case 6:
              ;((yt = 0), (oe = null), Ra(t, e, u, 6))
              break
            case 8:
              ;(Wc(), (zt = 6))
              break t
            default:
              throw Error(f(462))
          }
        }
        oy()
        break
      } catch (z) {
        ks(t, z)
      }
    while (!0)
    return (
      (Ye = Hl = null),
      (N.H = a),
      (N.A = n),
      (mt = l),
      ut !== null ? 0 : ((Et = null), (ft = 0), Pn(), zt)
    )
  }
  function oy() {
    for (; ut !== null && !Uh(); ) Ps(ut)
  }
  function Ps(t) {
    var e = _s(t.alternate, t, Je)
    ;((t.memoizedProps = t.pendingProps), e === null ? Nu(t) : (ut = e))
  }
  function Is(t) {
    var e = t,
      l = e.alternate
    switch (e.tag) {
      case 15:
      case 0:
        e = Ss(l, e, e.pendingProps, e.type, void 0, ft)
        break
      case 11:
        e = Ss(l, e, e.pendingProps, e.type.render, e.ref, ft)
        break
      case 5:
        hc(e)
      default:
        ;(xs(l, e), (e = ut = Ir(e, Je)), (e = _s(l, e, Je)))
    }
    ;((t.memoizedProps = t.pendingProps), e === null ? Nu(t) : (ut = e))
  }
  function Ra(t, e, l, a) {
    ;((Ye = Hl = null), hc(e), (ma = null), (cn = 0))
    var n = e.return
    try {
      if (Im(t, n, e, l, ft)) {
        ;((zt = 1), Tu(t, ye(l, t.current)), (ut = null))
        return
      }
    } catch (u) {
      if (n !== null) throw ((ut = n), u)
      ;((zt = 1), Tu(t, ye(l, t.current)), (ut = null))
      return
    }
    e.flags & 32768
      ? (dt || a === 1
          ? (t = !0)
          : ga || (ft & 536870912) !== 0
            ? (t = !1)
            : ((dl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Se.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        td(e, t))
      : Nu(e)
  }
  function Nu(t) {
    var e = t
    do {
      if ((e.flags & 32768) !== 0) {
        td(e, dl)
        return
      }
      t = e.return
      var l = ey(e.alternate, e, Je)
      if (l !== null) {
        ut = l
        return
      }
      if (((e = e.sibling), e !== null)) {
        ut = e
        return
      }
      ut = e = t
    } while (e !== null)
    zt === 0 && (zt = 5)
  }
  function td(t, e) {
    do {
      var l = ly(t.alternate, t)
      if (l !== null) {
        ;((l.flags &= 32767), (ut = l))
        return
      }
      if (
        ((l = t.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t
        return
      }
      ut = t = l
    } while (t !== null)
    ;((zt = 6), (ut = null))
  }
  function ed(t, e, l, a, n, u, c, r, m) {
    t.cancelPendingCommit = null
    do Uu()
    while (Xt !== 0)
    if ((mt & 6) !== 0) throw Error(f(327))
    if (e !== null) {
      if (e === t.current) throw Error(f(177))
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Xi),
        Xh(t, l, u, c, r, m),
        t === Et && ((ut = Et = null), (ft = 0)),
        (ba = e),
        (yl = t),
        (Ea = l),
        (Jc = u),
        ($c = n),
        (Vs = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            my(Ln, function () {
              return (id(), null)
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ;((a = N.T), (N.T = null), (n = w.p), (w.p = 2), (c = mt), (mt |= 4))
        try {
          ay(t, e, l)
        } finally {
          ;((mt = c), (w.p = n), (N.T = a))
        }
      }
      ;((Xt = 1), ld(), ad(), nd())
    }
  }
  function ld() {
    if (Xt === 1) {
      Xt = 0
      var t = yl,
        e = ba,
        l = (e.flags & 13878) !== 0
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ;((l = N.T), (N.T = null))
        var a = w.p
        w.p = 2
        var n = mt
        mt |= 4
        try {
          Bs(e, t)
          var u = sf,
            c = Qr(t.containerInfo),
            r = u.focusedElem,
            m = u.selectionRange
          if (c !== r && r && r.ownerDocument && Xr(r.ownerDocument.documentElement, r)) {
            if (m !== null && Li(r)) {
              var R = m.start,
                z = m.end
              if ((z === void 0 && (z = R), 'selectionStart' in r))
                ((r.selectionStart = R), (r.selectionEnd = Math.min(z, r.value.length)))
              else {
                var j = r.ownerDocument || document,
                  A = (j && j.defaultView) || window
                if (A.getSelection) {
                  var _ = A.getSelection(),
                    P = r.textContent.length,
                    k = Math.min(m.start, P),
                    gt = m.end === void 0 ? k : Math.min(m.end, P)
                  !_.extend && k > gt && ((c = gt), (gt = k), (k = c))
                  var S = wr(r, k),
                    p = wr(r, gt)
                  if (
                    S &&
                    p &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== S.node ||
                      _.anchorOffset !== S.offset ||
                      _.focusNode !== p.node ||
                      _.focusOffset !== p.offset)
                  ) {
                    var E = j.createRange()
                    ;(E.setStart(S.node, S.offset),
                      _.removeAllRanges(),
                      k > gt
                        ? (_.addRange(E), _.extend(p.node, p.offset))
                        : (E.setEnd(p.node, p.offset), _.addRange(E)))
                  }
                }
              }
            }
            for (j = [], _ = r; (_ = _.parentNode); )
              _.nodeType === 1 && j.push({ element: _, left: _.scrollLeft, top: _.scrollTop })
            for (typeof r.focus == 'function' && r.focus(), r = 0; r < j.length; r++) {
              var U = j[r]
              ;((U.element.scrollLeft = U.left), (U.element.scrollTop = U.top))
            }
          }
          ;((Zu = !!of), (sf = of = null))
        } finally {
          ;((mt = n), (w.p = a), (N.T = l))
        }
      }
      ;((t.current = e), (Xt = 2))
    }
  }
  function ad() {
    if (Xt === 2) {
      Xt = 0
      var t = yl,
        e = ba,
        l = (e.flags & 8772) !== 0
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ;((l = N.T), (N.T = null))
        var a = w.p
        w.p = 2
        var n = mt
        mt |= 4
        try {
          js(t, e.alternate, e)
        } finally {
          ;((mt = n), (w.p = a), (N.T = l))
        }
      }
      Xt = 3
    }
  }
  function nd() {
    if (Xt === 4 || Xt === 3) {
      ;((Xt = 0), Ch())
      var t = yl,
        e = ba,
        l = Ea,
        a = Vs
      ;(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Xt = 5)
        : ((Xt = 0), (ba = yl = null), ud(t, t.pendingLanes))
      var n = t.pendingLanes
      if (
        (n === 0 && (ml = null),
        vi(l),
        (e = e.stateNode),
        ne && typeof ne.onCommitFiberRoot == 'function')
      )
        try {
          ne.onCommitFiberRoot(Na, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
      if (a !== null) {
        ;((e = N.T), (n = w.p), (w.p = 2), (N.T = null))
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c]
            u(r.value, { componentStack: r.stack })
          }
        } finally {
          ;((N.T = e), (w.p = n))
        }
      }
      ;((Ea & 3) !== 0 && Uu(),
        Ne(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0 ? (t === kc ? vn++ : ((vn = 0), (kc = t))) : (vn = 0),
        pn(0))
    }
  }
  function ud(t, e) {
    ;(t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ka(e)))
  }
  function Uu(t) {
    return (ld(), ad(), nd(), id())
  }
  function id() {
    if (Xt !== 5) return !1
    var t = yl,
      e = Jc
    Jc = 0
    var l = vi(Ea),
      a = N.T,
      n = w.p
    try {
      ;((w.p = 32 > l ? 32 : l), (N.T = null), (l = $c), ($c = null))
      var u = yl,
        c = Ea
      if (((Xt = 0), (ba = yl = null), (Ea = 0), (mt & 6) !== 0)) throw Error(f(331))
      var r = mt
      if (
        ((mt |= 4),
        Qs(u.current),
        Gs(u, u.current, c, l),
        (mt = r),
        pn(0, !1),
        ne && typeof ne.onPostCommitFiberRoot == 'function')
      )
        try {
          ne.onPostCommitFiberRoot(Na, u)
        } catch {}
      return !0
    } finally {
      ;((w.p = n), (N.T = a), ud(t, e))
    }
  }
  function cd(t, e, l) {
    ;((e = ye(l, e)),
      (e = xc(t.stateNode, e, 2)),
      (t = ul(t, e, 2)),
      t !== null && (Ca(t, 2), Ne(t)))
  }
  function bt(t, e, l) {
    if (t.tag === 3) cd(t, t, l)
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          cd(e, t, l)
          break
        } else if (e.tag === 1) {
          var a = e.stateNode
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (ml === null || !ml.has(a)))
          ) {
            ;((t = ye(l, t)),
              (l = ss(2)),
              (a = ul(e, l, 2)),
              a !== null && (ds(l, a, e, t), Ca(a, 2), Ne(a)))
            break
          }
        }
        e = e.return
      }
  }
  function Ic(t, e, l) {
    var a = t.pingCache
    if (a === null) {
      a = t.pingCache = new iy()
      var n = new Set()
      a.set(e, n)
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)))
    n.has(l) || ((Qc = !0), n.add(l), (t = sy.bind(null, t, e, l)), e.then(t, t))
  }
  function sy(t, e, l) {
    var a = t.pingCache
    ;(a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Et === t &&
        (ft & l) === l &&
        (zt === 4 || (zt === 3 && (ft & 62914560) === ft && 300 > Oe() - Kc)
          ? (mt & 2) === 0 && Ta(t, 0)
          : (Zc |= l),
        Sa === ft && (Sa = 0)),
      Ne(t))
  }
  function fd(t, e) {
    ;(e === 0 && (e = ar()), (t = na(t, e)), t !== null && (Ca(t, e), Ne(t)))
  }
  function dy(t) {
    var e = t.memoizedState,
      l = 0
    ;(e !== null && (l = e.retryLane), fd(t, l))
  }
  function hy(t, e) {
    var l = 0
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState
        n !== null && (l = n.retryLane)
        break
      case 19:
        a = t.stateNode
        break
      case 22:
        a = t.stateNode._retryCache
        break
      default:
        throw Error(f(314))
    }
    ;(a !== null && a.delete(e), fd(t, l))
  }
  function my(t, e) {
    return di(t, e)
  }
  var Cu = null,
    Aa = null,
    tf = !1,
    ju = !1,
    ef = !1,
    Xl = 0
  function Ne(t) {
    ;(t !== Aa && t.next === null && (Aa === null ? (Cu = Aa = t) : (Aa = Aa.next = t)),
      (ju = !0),
      tf || ((tf = !0), vy()))
  }
  function pn(t, e) {
    if (!ef && ju) {
      ef = !0
      do
        for (var l = !1, a = Cu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes
            if (n === 0) var u = 0
            else {
              var c = a.suspendedLanes,
                r = a.pingedLanes
              ;((u = (1 << (31 - ue(42 | t) + 1)) - 1),
                (u &= n & ~(c & ~r)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0))
            }
            u !== 0 && ((l = !0), dd(a, u))
          } else
            ((u = ft),
              (u = Gn(
                a,
                a === Et ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ua(a, u) || ((l = !0), dd(a, u)))
          a = a.next
        }
      while (l)
      ef = !1
    }
  }
  function yy() {
    rd()
  }
  function rd() {
    ju = tf = !1
    var t = 0
    Xl !== 0 && (Ay() && (t = Xl), (Xl = 0))
    for (var e = Oe(), l = null, a = Cu; a !== null; ) {
      var n = a.next,
        u = od(a, e)
      ;(u === 0
        ? ((a.next = null), l === null ? (Cu = n) : (l.next = n), n === null && (Aa = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (ju = !0)),
        (a = n))
    }
    pn(t)
  }
  function od(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ue(u),
        r = 1 << c,
        m = n[c]
      ;(m === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (n[c] = wh(r, e))
        : m <= e && (t.expiredLanes |= r),
        (u &= ~r))
    }
    if (
      ((e = Et),
      (l = ft),
      (l = Gn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (a = t.callbackNode),
      l === 0 || (t === e && (yt === 2 || yt === 9)) || t.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && hi(a), (t.callbackNode = null), (t.callbackPriority = 0))
    if ((l & 3) === 0 || Ua(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e
      switch ((a !== null && hi(a), vi(l))) {
        case 2:
        case 8:
          l = tr
          break
        case 32:
          l = Ln
          break
        case 268435456:
          l = er
          break
        default:
          l = Ln
      }
      return (
        (a = sd.bind(null, t)),
        (l = di(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      )
    }
    return (a !== null && a !== null && hi(a), (t.callbackPriority = 2), (t.callbackNode = null), 2)
  }
  function sd(t, e) {
    if (Xt !== 0 && Xt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null)
    var l = t.callbackNode
    if (Uu() && t.callbackNode !== l) return null
    var a = ft
    return (
      (a = Gn(t, t === Et ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Js(t, a, e),
          od(t, Oe()),
          t.callbackNode != null && t.callbackNode === l ? sd.bind(null, t) : null)
    )
  }
  function dd(t, e) {
    if (Uu()) return null
    Js(t, e, !0)
  }
  function vy() {
    Oy(function () {
      ;(mt & 6) !== 0 ? di(If, yy) : rd()
    })
  }
  function lf() {
    return (Xl === 0 && (Xl = lr()), Xl)
  }
  function hd(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : Vn('' + t)
  }
  function md(t, e) {
    var l = e.ownerDocument.createElement('input')
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute('form', t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    )
  }
  function py(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var u = hd((n[Ft] || null).action),
        c = a.submitter
      c &&
        ((e = (e = c[Ft] || null) ? hd(e.formAction) : c.getAttribute('formAction')),
        e !== null && ((u = e), (c = null)))
      var r = new kn('action', 'action', null, a, n)
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Xl !== 0) {
                  var m = c ? md(n, c) : new FormData(n)
                  Tc(l, { pending: !0, data: m, method: n.method, action: u }, null, m)
                }
              } else
                typeof u == 'function' &&
                  (r.preventDefault(),
                  (m = c ? md(n, c) : new FormData(n)),
                  Tc(l, { pending: !0, data: m, method: n.method, action: u }, u, m))
            },
            currentTarget: n,
          },
        ],
      })
    }
  }
  for (var af = 0; af < wi.length; af++) {
    var nf = wi[af],
      gy = nf.toLowerCase(),
      Sy = nf[0].toUpperCase() + nf.slice(1)
    Te(gy, 'on' + Sy)
  }
  ;(Te(Kr, 'onAnimationEnd'),
    Te(Jr, 'onAnimationIteration'),
    Te($r, 'onAnimationStart'),
    Te('dblclick', 'onDoubleClick'),
    Te('focusin', 'onFocus'),
    Te('focusout', 'onBlur'),
    Te(qm, 'onTransitionRun'),
    Te(Lm, 'onTransitionStart'),
    Te(Bm, 'onTransitionCancel'),
    Te(kr, 'onTransitionEnd'),
    $l('onMouseEnter', ['mouseout', 'mouseover']),
    $l('onMouseLeave', ['mouseout', 'mouseover']),
    $l('onPointerEnter', ['pointerout', 'pointerover']),
    $l('onPointerLeave', ['pointerout', 'pointerover']),
    Ol('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ol(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ol('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ol('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ol(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ol(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ))
  var gn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    by = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(gn)
    )
  function yd(t, e) {
    e = (e & 4) !== 0
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event
      a = a.listeners
      t: {
        var u = void 0
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var r = a[c],
              m = r.instance,
              R = r.currentTarget
            if (((r = r.listener), m !== u && n.isPropagationStopped())) break t
            ;((u = r), (n.currentTarget = R))
            try {
              u(n)
            } catch (z) {
              Eu(z)
            }
            ;((n.currentTarget = null), (u = m))
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((r = a[c]),
              (m = r.instance),
              (R = r.currentTarget),
              (r = r.listener),
              m !== u && n.isPropagationStopped())
            )
              break t
            ;((u = r), (n.currentTarget = R))
            try {
              u(n)
            } catch (z) {
              Eu(z)
            }
            ;((n.currentTarget = null), (u = m))
          }
      }
    }
  }
  function it(t, e) {
    var l = e[pi]
    l === void 0 && (l = e[pi] = new Set())
    var a = t + '__bubble'
    l.has(a) || (vd(e, t, 2, !1), l.add(a))
  }
  function uf(t, e, l) {
    var a = 0
    ;(e && (a |= 4), vd(l, t, a, e))
  }
  var Hu = '_reactListening' + Math.random().toString(36).slice(2)
  function cf(t) {
    if (!t[Hu]) {
      ;((t[Hu] = !0),
        fr.forEach(function (l) {
          l !== 'selectionchange' && (by.has(l) || uf(l, !1, t), uf(l, !0, t))
        }))
      var e = t.nodeType === 9 ? t : t.ownerDocument
      e === null || e[Hu] || ((e[Hu] = !0), uf('selectionchange', !1, e))
    }
  }
  function vd(t, e, l, a) {
    switch (Gd(e)) {
      case 2:
        var n = Jy
        break
      case 8:
        n = $y
        break
      default:
        n = Ef
    }
    ;((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Di || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1))
  }
  function ff(t, e, l, a, n) {
    var u = a
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return
        var c = a.tag
        if (c === 3 || c === 4) {
          var r = a.stateNode.containerInfo
          if (r === n) break
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var m = c.tag
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === n) return
              c = c.return
            }
          for (; r !== null; ) {
            if (((c = Vl(r)), c === null)) return
            if (((m = c.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              a = u = c
              continue t
            }
            r = r.parentNode
          }
        }
        a = a.return
      }
    Tr(function () {
      var R = u,
        z = Oi(l),
        j = []
      t: {
        var A = Wr.get(t)
        if (A !== void 0) {
          var _ = kn,
            P = t
          switch (t) {
            case 'keypress':
              if (Jn(l) === 0) break t
            case 'keydown':
            case 'keyup':
              _ = mm
              break
            case 'focusin':
              ;((P = 'focus'), (_ = Ui))
              break
            case 'focusout':
              ;((P = 'blur'), (_ = Ui))
              break
            case 'beforeblur':
            case 'afterblur':
              _ = Ui
              break
            case 'click':
              if (l.button === 2) break t
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              _ = _r
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              _ = lm
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              _ = pm
              break
            case Kr:
            case Jr:
            case $r:
              _ = um
              break
            case kr:
              _ = Sm
              break
            case 'scroll':
            case 'scrollend':
              _ = tm
              break
            case 'wheel':
              _ = Em
              break
            case 'copy':
            case 'cut':
            case 'paste':
              _ = cm
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              _ = xr
              break
            case 'toggle':
            case 'beforetoggle':
              _ = Rm
          }
          var k = (e & 4) !== 0,
            gt = !k && (t === 'scroll' || t === 'scrollend'),
            S = k ? (A !== null ? A + 'Capture' : null) : A
          k = []
          for (var p = R, E; p !== null; ) {
            var U = p
            if (
              ((E = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                E === null ||
                S === null ||
                ((U = qa(p, S)), U != null && k.push(Sn(p, U, E))),
              gt)
            )
              break
            p = p.return
          }
          0 < k.length && ((A = new _(A, P, null, l, z)), j.push({ event: A, listeners: k }))
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((A = t === 'mouseover' || t === 'pointerover'),
            (_ = t === 'mouseout' || t === 'pointerout'),
            A && l !== _i && (P = l.relatedTarget || l.fromElement) && (Vl(P) || P[Zl]))
          )
            break t
          if (
            (_ || A) &&
            ((A =
              z.window === z
                ? z
                : (A = z.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            _
              ? ((P = l.relatedTarget || l.toElement),
                (_ = R),
                (P = P ? Vl(P) : null),
                P !== null &&
                  ((gt = y(P)), (k = P.tag), P !== gt || (k !== 5 && k !== 27 && k !== 6)) &&
                  (P = null))
              : ((_ = null), (P = R)),
            _ !== P)
          ) {
            if (
              ((k = _r),
              (U = 'onMouseLeave'),
              (S = 'onMouseEnter'),
              (p = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((k = xr), (U = 'onPointerLeave'), (S = 'onPointerEnter'), (p = 'pointer')),
              (gt = _ == null ? A : Ha(_)),
              (E = P == null ? A : Ha(P)),
              (A = new k(U, p + 'leave', _, l, z)),
              (A.target = gt),
              (A.relatedTarget = E),
              (U = null),
              Vl(z) === R &&
                ((k = new k(S, p + 'enter', P, l, z)),
                (k.target = E),
                (k.relatedTarget = gt),
                (U = k)),
              (gt = U),
              _ && P)
            )
              e: {
                for (k = _, S = P, p = 0, E = k; E; E = _a(E)) p++
                for (E = 0, U = S; U; U = _a(U)) E++
                for (; 0 < p - E; ) ((k = _a(k)), p--)
                for (; 0 < E - p; ) ((S = _a(S)), E--)
                for (; p--; ) {
                  if (k === S || (S !== null && k === S.alternate)) break e
                  ;((k = _a(k)), (S = _a(S)))
                }
                k = null
              }
            else k = null
            ;(_ !== null && pd(j, A, _, k, !1), P !== null && gt !== null && pd(j, gt, P, k, !0))
          }
        }
        t: {
          if (
            ((A = R ? Ha(R) : window),
            (_ = A.nodeName && A.nodeName.toLowerCase()),
            _ === 'select' || (_ === 'input' && A.type === 'file'))
          )
            var V = Hr
          else if (Cr(A))
            if (qr) V = Cm
            else {
              V = Nm
              var at = Mm
            }
          else
            ((_ = A.nodeName),
              !_ || _.toLowerCase() !== 'input' || (A.type !== 'checkbox' && A.type !== 'radio')
                ? R && Ai(R.elementType) && (V = Hr)
                : (V = Um))
          if (V && (V = V(t, R))) {
            jr(j, V, l, z)
            break t
          }
          ;(at && at(t, A, R),
            t === 'focusout' &&
              R &&
              A.type === 'number' &&
              R.memoizedProps.value != null &&
              Ri(A, 'number', A.value))
        }
        switch (((at = R ? Ha(R) : window), t)) {
          case 'focusin':
            ;(Cr(at) || at.contentEditable === 'true') && ((ea = at), (Bi = R), (Za = null))
            break
          case 'focusout':
            Za = Bi = ea = null
            break
          case 'mousedown':
            Yi = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((Yi = !1), Zr(j, l, z))
            break
          case 'selectionchange':
            if (Hm) break
          case 'keydown':
          case 'keyup':
            Zr(j, l, z)
        }
        var J
        if (ji)
          t: {
            switch (t) {
              case 'compositionstart':
                var W = 'onCompositionStart'
                break t
              case 'compositionend':
                W = 'onCompositionEnd'
                break t
              case 'compositionupdate':
                W = 'onCompositionUpdate'
                break t
            }
            W = void 0
          }
        else
          ta
            ? Nr(t, l) && (W = 'onCompositionEnd')
            : t === 'keydown' && l.keyCode === 229 && (W = 'onCompositionStart')
        ;(W &&
          (Dr &&
            l.locale !== 'ko' &&
            (ta || W !== 'onCompositionStart'
              ? W === 'onCompositionEnd' && ta && (J = Rr())
              : ((el = z), (zi = 'value' in el ? el.value : el.textContent), (ta = !0))),
          (at = qu(R, W)),
          0 < at.length &&
            ((W = new Or(W, t, null, l, z)),
            j.push({ event: W, listeners: at }),
            J ? (W.data = J) : ((J = Ur(l)), J !== null && (W.data = J)))),
          (J = _m ? Om(t, l) : xm(t, l)) &&
            ((W = qu(R, 'onBeforeInput')),
            0 < W.length &&
              ((at = new Or('onBeforeInput', 'beforeinput', null, l, z)),
              j.push({ event: at, listeners: W }),
              (at.data = J))),
          py(j, t, R, l, z))
      }
      yd(j, e)
    })
  }
  function Sn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l }
  }
  function qu(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var n = t,
        u = n.stateNode
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = qa(t, l)),
          n != null && a.unshift(Sn(t, n, u)),
          (n = qa(t, e)),
          n != null && a.push(Sn(t, n, u))),
        t.tag === 3)
      )
        return a
      t = t.return
    }
    return []
  }
  function _a(t) {
    if (t === null) return null
    do t = t.return
    while (t && t.tag !== 5 && t.tag !== 27)
    return t || null
  }
  function pd(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var r = l,
        m = r.alternate,
        R = r.stateNode
      if (((r = r.tag), m !== null && m === a)) break
      ;((r !== 5 && r !== 26 && r !== 27) ||
        R === null ||
        ((m = R),
        n
          ? ((R = qa(l, u)), R != null && c.unshift(Sn(l, R, m)))
          : n || ((R = qa(l, u)), R != null && c.push(Sn(l, R, m)))),
        (l = l.return))
    }
    c.length !== 0 && t.push({ event: e, listeners: c })
  }
  var Ey = /\r\n?/g,
    Ty = /\u0000|\uFFFD/g
  function gd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Ey,
        `
`
      )
      .replace(Ty, '')
  }
  function Sd(t, e) {
    return ((e = gd(e)), gd(t) === e)
  }
  function Lu() {}
  function pt(t, e, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? e === 'body' || (e === 'textarea' && a === '') || Fl(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && e !== 'body' && Fl(t, '' + a)
        break
      case 'className':
        Xn(t, 'class', a)
        break
      case 'tabIndex':
        Xn(t, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Xn(t, l, a)
        break
      case 'style':
        br(t, a, u)
        break
      case 'data':
        if (e !== 'object') {
          Xn(t, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l)
          break
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l)
          break
        }
        ;((a = Vn('' + a)), t.setAttribute(l, a))
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (e !== 'input' && pt(t, e, 'name', n.name, n, null),
                pt(t, e, 'formEncType', n.formEncType, n, null),
                pt(t, e, 'formMethod', n.formMethod, n, null),
                pt(t, e, 'formTarget', n.formTarget, n, null))
              : (pt(t, e, 'encType', n.encType, n, null),
                pt(t, e, 'method', n.method, n, null),
                pt(t, e, 'target', n.target, n, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l)
          break
        }
        ;((a = Vn('' + a)), t.setAttribute(l, a))
        break
      case 'onClick':
        a != null && (t.onclick = Lu)
        break
      case 'onScroll':
        a != null && it('scroll', t)
        break
      case 'onScrollEnd':
        a != null && it('scrollend', t)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60))
            t.innerHTML = l
          }
        }
        break
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          t.removeAttribute('xlink:href')
          break
        }
        ;((l = Vn('' + a)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l))
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '' + a)
          : t.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '')
          : t.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        a === !0
          ? t.setAttribute(l, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? t.setAttribute(l, a)
            : t.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a)
        break
      case 'popover':
        ;(it('beforetoggle', t), it('toggle', t), wn(t, 'popover', a))
        break
      case 'xlinkActuate':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        wn(t, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Ph.get(l) || l), wn(t, l, a))
    }
  }
  function rf(t, e, l, a, n, u) {
    switch (l) {
      case 'style':
        br(t, a, u)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61))
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60))
            t.innerHTML = l
          }
        }
        break
      case 'children':
        typeof a == 'string'
          ? Fl(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Fl(t, '' + a)
        break
      case 'onScroll':
        a != null && it('scroll', t)
        break
      case 'onScrollEnd':
        a != null && it('scrollend', t)
        break
      case 'onClick':
        a != null && (t.onclick = Lu)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!rr.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Ft] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && t.removeEventListener(e, u, n),
              typeof a == 'function')
            ) {
              ;(typeof u != 'function' &&
                u !== null &&
                (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n))
              break t
            }
            l in t ? (t[l] = a) : a === !0 ? t.setAttribute(l, '') : wn(t, l, a)
          }
    }
  }
  function Qt(t, e, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ;(it('error', t), it('load', t))
        var a = !1,
          n = !1,
          u
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u]
            if (c != null)
              switch (u) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  n = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, e))
                default:
                  pt(t, e, u, c, l, null)
              }
          }
        ;(n && pt(t, e, 'srcSet', l.srcSet, l, null), a && pt(t, e, 'src', l.src, l, null))
        return
      case 'input':
        it('invalid', t)
        var r = (u = c = n = null),
          m = null,
          R = null
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a]
            if (z != null)
              switch (a) {
                case 'name':
                  n = z
                  break
                case 'type':
                  c = z
                  break
                case 'checked':
                  m = z
                  break
                case 'defaultChecked':
                  R = z
                  break
                case 'value':
                  u = z
                  break
                case 'defaultValue':
                  r = z
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (z != null) throw Error(f(137, e))
                  break
                default:
                  pt(t, e, a, z, l, null)
              }
          }
        ;(vr(t, u, r, m, R, c, n, !1), Qn(t))
        return
      case 'select':
        ;(it('invalid', t), (a = c = u = null))
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case 'value':
                u = r
                break
              case 'defaultValue':
                c = r
                break
              case 'multiple':
                a = r
              default:
                pt(t, e, n, r, l, null)
            }
        ;((e = u),
          (l = c),
          (t.multiple = !!a),
          e != null ? Wl(t, !!a, e, !1) : l != null && Wl(t, !!a, l, !0))
        return
      case 'textarea':
        ;(it('invalid', t), (u = n = a = null))
        for (c in l)
          if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
            switch (c) {
              case 'value':
                a = r
                break
              case 'defaultValue':
                n = r
                break
              case 'children':
                u = r
                break
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(f(91))
                break
              default:
                pt(t, e, c, r, l, null)
            }
        ;(gr(t, a, n, u), Qn(t))
        return
      case 'option':
        for (m in l)
          if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
            switch (m) {
              case 'selected':
                t.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                pt(t, e, m, a, l, null)
            }
        return
      case 'dialog':
        ;(it('beforetoggle', t), it('toggle', t), it('cancel', t), it('close', t))
        break
      case 'iframe':
      case 'object':
        it('load', t)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < gn.length; a++) it(gn[a], t)
        break
      case 'image':
        ;(it('error', t), it('load', t))
        break
      case 'details':
        it('toggle', t)
        break
      case 'embed':
      case 'source':
      case 'link':
        ;(it('error', t), it('load', t))
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (R in l)
          if (l.hasOwnProperty(R) && ((a = l[R]), a != null))
            switch (R) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, e))
              default:
                pt(t, e, R, a, l, null)
            }
        return
      default:
        if (Ai(e)) {
          for (z in l)
            l.hasOwnProperty(z) && ((a = l[z]), a !== void 0 && rf(t, e, z, a, l, void 0))
          return
        }
    }
    for (r in l) l.hasOwnProperty(r) && ((a = l[r]), a != null && pt(t, e, r, a, l, null))
  }
  function Ry(t, e, l, a) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var n = null,
          u = null,
          c = null,
          r = null,
          m = null,
          R = null,
          z = null
        for (_ in l) {
          var j = l[_]
          if (l.hasOwnProperty(_) && j != null)
            switch (_) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                m = j
              default:
                a.hasOwnProperty(_) || pt(t, e, _, null, a, j)
            }
        }
        for (var A in a) {
          var _ = a[A]
          if (((j = l[A]), a.hasOwnProperty(A) && (_ != null || j != null)))
            switch (A) {
              case 'type':
                u = _
                break
              case 'name':
                n = _
                break
              case 'checked':
                R = _
                break
              case 'defaultChecked':
                z = _
                break
              case 'value':
                c = _
                break
              case 'defaultValue':
                r = _
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(f(137, e))
                break
              default:
                _ !== j && pt(t, e, A, _, a, j)
            }
        }
        Ti(t, c, r, m, R, z, u, n)
        return
      case 'select':
        _ = c = r = A = null
        for (u in l)
          if (((m = l[u]), l.hasOwnProperty(u) && m != null))
            switch (u) {
              case 'value':
                break
              case 'multiple':
                _ = m
              default:
                a.hasOwnProperty(u) || pt(t, e, u, null, a, m)
            }
        for (n in a)
          if (((u = a[n]), (m = l[n]), a.hasOwnProperty(n) && (u != null || m != null)))
            switch (n) {
              case 'value':
                A = u
                break
              case 'defaultValue':
                r = u
                break
              case 'multiple':
                c = u
              default:
                u !== m && pt(t, e, n, u, a, m)
            }
        ;((e = r),
          (l = c),
          (a = _),
          A != null
            ? Wl(t, !!l, A, !1)
            : !!a != !!l && (e != null ? Wl(t, !!l, e, !0) : Wl(t, !!l, l ? [] : '', !1)))
        return
      case 'textarea':
        _ = A = null
        for (r in l)
          if (((n = l[r]), l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r)))
            switch (r) {
              case 'value':
                break
              case 'children':
                break
              default:
                pt(t, e, r, null, a, n)
            }
        for (c in a)
          if (((n = a[c]), (u = l[c]), a.hasOwnProperty(c) && (n != null || u != null)))
            switch (c) {
              case 'value':
                A = n
                break
              case 'defaultValue':
                _ = n
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(f(91))
                break
              default:
                n !== u && pt(t, e, c, n, a, u)
            }
        pr(t, A, _)
        return
      case 'option':
        for (var P in l)
          if (((A = l[P]), l.hasOwnProperty(P) && A != null && !a.hasOwnProperty(P)))
            switch (P) {
              case 'selected':
                t.selected = !1
                break
              default:
                pt(t, e, P, null, a, A)
            }
        for (m in a)
          if (((A = a[m]), (_ = l[m]), a.hasOwnProperty(m) && A !== _ && (A != null || _ != null)))
            switch (m) {
              case 'selected':
                t.selected = A && typeof A != 'function' && typeof A != 'symbol'
                break
              default:
                pt(t, e, m, A, a, _)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var k in l)
          ((A = l[k]),
            l.hasOwnProperty(k) && A != null && !a.hasOwnProperty(k) && pt(t, e, k, null, a, A))
        for (R in a)
          if (((A = a[R]), (_ = l[R]), a.hasOwnProperty(R) && A !== _ && (A != null || _ != null)))
            switch (R) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(f(137, e))
                break
              default:
                pt(t, e, R, A, a, _)
            }
        return
      default:
        if (Ai(e)) {
          for (var gt in l)
            ((A = l[gt]),
              l.hasOwnProperty(gt) &&
                A !== void 0 &&
                !a.hasOwnProperty(gt) &&
                rf(t, e, gt, void 0, a, A))
          for (z in a)
            ((A = a[z]),
              (_ = l[z]),
              !a.hasOwnProperty(z) ||
                A === _ ||
                (A === void 0 && _ === void 0) ||
                rf(t, e, z, A, a, _))
          return
        }
    }
    for (var S in l)
      ((A = l[S]),
        l.hasOwnProperty(S) && A != null && !a.hasOwnProperty(S) && pt(t, e, S, null, a, A))
    for (j in a)
      ((A = a[j]),
        (_ = l[j]),
        !a.hasOwnProperty(j) || A === _ || (A == null && _ == null) || pt(t, e, j, A, a, _))
  }
  var of = null,
    sf = null
  function Bu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function bd(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Ed(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return t === 1 && e === 'foreignObject' ? 0 : t
  }
  function df(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    )
  }
  var hf = null
  function Ay() {
    var t = window.event
    return t && t.type === 'popstate' ? (t === hf ? !1 : ((hf = t), !0)) : ((hf = null), !1)
  }
  var Td = typeof setTimeout == 'function' ? setTimeout : void 0,
    _y = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rd = typeof Promise == 'function' ? Promise : void 0,
    Oy =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Rd < 'u'
          ? function (t) {
              return Rd.resolve(null).then(t).catch(xy)
            }
          : Td
  function xy(t) {
    setTimeout(function () {
      throw t
    })
  }
  function pl(t) {
    return t === 'head'
  }
  function Ad(t, e) {
    var l = e,
      a = 0,
      n = 0
    do {
      var u = l.nextSibling
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a
            var c = t.ownerDocument
            if ((l & 1 && bn(c.documentElement), l & 2 && bn(c.body), l & 4))
              for (l = c.head, bn(l), c = l.firstChild; c; ) {
                var r = c.nextSibling,
                  m = c.nodeName
                ;(c[ja] ||
                  m === 'SCRIPT' ||
                  m === 'STYLE' ||
                  (m === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(c),
                  (c = r))
              }
          }
          if (n === 0) {
            ;(t.removeChild(u), Dn(e))
            return
          }
          n--
        } else l === '$' || l === '$?' || l === '$!' ? n++ : (a = l.charCodeAt(0) - 48)
      else a = 0
      l = u
    } while (l)
    Dn(e)
  }
  function mf(t) {
    var e = t.firstChild
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          ;(mf(l), gi(l))
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      t.removeChild(l)
    }
  }
  function Dy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break
      } else if (a) {
        if (!t[ja])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break
              return t
            case 'link':
              if (
                ((u = t.getAttribute('rel')),
                u === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break
              if (
                u !== n.rel ||
                t.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                t.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break
              return t
            case 'style':
              if (t.hasAttribute('data-precedence')) break
              return t
            case 'script':
              if (
                ((u = t.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  t.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break
              return t
            default:
              return t
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name
        if (n.type === 'hidden' && t.getAttribute('name') === u) return t
      } else return t
      if (((t = Ae(t.nextSibling)), t === null)) break
    }
    return null
  }
  function zy(t, e, l) {
    if (e === '') return null
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null
    return t
  }
  function yf(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete')
  }
  function My(t, e) {
    var l = t.ownerDocument
    if (t.data !== '$?' || l.readyState === 'complete') e()
    else {
      var a = function () {
        ;(e(), l.removeEventListener('DOMContentLoaded', a))
      }
      ;(l.addEventListener('DOMContentLoaded', a), (t._reactRetry = a))
    }
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType
      if (e === 1 || e === 3) break
      if (e === 8) {
        if (((e = t.data), e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')) break
        if (e === '/$') return null
      }
    }
    return t
  }
  var vf = null
  function _d(t) {
    t = t.previousSibling
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (e === 0) return t
          e--
        } else l === '/$' && e++
      }
      t = t.previousSibling
    }
    return null
  }
  function Od(t, e, l) {
    switch (((e = Bu(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(f(452))
        return t
      case 'head':
        if (((t = e.head), !t)) throw Error(f(453))
        return t
      case 'body':
        if (((t = e.body), !t)) throw Error(f(454))
        return t
      default:
        throw Error(f(451))
    }
  }
  function bn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0])
    gi(t)
  }
  var Ee = new Map(),
    xd = new Set()
  function Yu(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument
  }
  var $e = w.d
  w.d = { f: Ny, r: Uy, D: Cy, C: jy, L: Hy, m: qy, X: By, S: Ly, M: Yy }
  function Ny() {
    var t = $e.f(),
      e = Mu()
    return t || e
  }
  function Uy(t) {
    var e = Kl(t)
    e !== null && e.tag === 5 && e.type === 'form' ? Jo(e) : $e.r(t)
  }
  var Oa = typeof document > 'u' ? null : document
  function Dd(t, e, l) {
    var a = Oa
    if (a && typeof e == 'string' && e) {
      var n = me(e)
      ;((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        xd.has(n) ||
          (xd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')), Qt(e, 'link', t), qt(e), a.head.appendChild(e))))
    }
  }
  function Cy(t) {
    ;($e.D(t), Dd('dns-prefetch', t, null))
  }
  function jy(t, e) {
    ;($e.C(t, e), Dd('preconnect', t, e))
  }
  function Hy(t, e, l) {
    $e.L(t, e, l)
    var a = Oa
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]'
      e === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (n += '[imagesizes="' + me(l.imageSizes) + '"]'))
        : (n += '[href="' + me(t) + '"]')
      var u = n
      switch (e) {
        case 'style':
          u = xa(t)
          break
        case 'script':
          u = Da(t)
      }
      Ee.has(u) ||
        ((t = T(
          { rel: 'preload', href: e === 'image' && l && l.imageSrcSet ? void 0 : t, as: e },
          l
        )),
        Ee.set(u, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(En(u))) ||
          (e === 'script' && a.querySelector(Tn(u))) ||
          ((e = a.createElement('link')), Qt(e, 'link', t), qt(e), a.head.appendChild(e)))
    }
  }
  function qy(t, e) {
    $e.m(t, e)
    var l = Oa
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        n = 'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
        u = n
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Da(t)
      }
      if (
        !Ee.has(u) &&
        ((t = T({ rel: 'modulepreload', href: t }, e)), Ee.set(u, t), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Tn(u))) return
        }
        ;((a = l.createElement('link')), Qt(a, 'link', t), qt(a), l.head.appendChild(a))
      }
    }
  }
  function Ly(t, e, l) {
    $e.S(t, e, l)
    var a = Oa
    if (a && t) {
      var n = Jl(a).hoistableStyles,
        u = xa(t)
      e = e || 'default'
      var c = n.get(u)
      if (!c) {
        var r = { loading: 0, preload: null }
        if ((c = a.querySelector(En(u)))) r.loading = 5
        else {
          ;((t = T({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)),
            (l = Ee.get(u)) && pf(t, l))
          var m = (c = a.createElement('link'))
          ;(qt(m),
            Qt(m, 'link', t),
            (m._p = new Promise(function (R, z) {
              ;((m.onload = R), (m.onerror = z))
            })),
            m.addEventListener('load', function () {
              r.loading |= 1
            }),
            m.addEventListener('error', function () {
              r.loading |= 2
            }),
            (r.loading |= 4),
            Gu(c, e, a))
        }
        ;((c = { type: 'stylesheet', instance: c, count: 1, state: r }), n.set(u, c))
      }
    }
  }
  function By(t, e) {
    $e.X(t, e)
    var l = Oa
    if (l && t) {
      var a = Jl(l).hoistableScripts,
        n = Da(t),
        u = a.get(n)
      u ||
        ((u = l.querySelector(Tn(n))),
        u ||
          ((t = T({ src: t, async: !0 }, e)),
          (e = Ee.get(n)) && gf(t, e),
          (u = l.createElement('script')),
          qt(u),
          Qt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function Yy(t, e) {
    $e.M(t, e)
    var l = Oa
    if (l && t) {
      var a = Jl(l).hoistableScripts,
        n = Da(t),
        u = a.get(n)
      u ||
        ((u = l.querySelector(Tn(n))),
        u ||
          ((t = T({ src: t, async: !0, type: 'module' }, e)),
          (e = Ee.get(n)) && gf(t, e),
          (u = l.createElement('script')),
          qt(u),
          Qt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u))
    }
  }
  function zd(t, e, l, a) {
    var n = (n = tt.current) ? Yu(n) : null
    if (!n) throw Error(f(446))
    switch (t) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((e = xa(l.href)),
            (l = Jl(n).hoistableStyles),
            (a = l.get(e)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          t = xa(l.href)
          var u = Jl(n).hoistableStyles,
            c = u.get(t)
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, c),
              (u = n.querySelector(En(t))) && !u._p && ((c.instance = u), (c.state.loading = 5)),
              Ee.has(t) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ee.set(t, l),
                u || Gy(n, t, l, c.state))),
            e && a === null)
          )
            throw Error(f(528, ''))
          return c
        }
        if (e && a !== null) throw Error(f(529, ''))
        return null
      case 'script':
        return (
          (e = l.async),
          (l = l.src),
          typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol'
            ? ((e = Da(l)),
              (l = Jl(n).hoistableScripts),
              (a = l.get(e)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(e, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(f(444, t))
    }
  }
  function xa(t) {
    return 'href="' + me(t) + '"'
  }
  function En(t) {
    return 'link[rel="stylesheet"][' + t + ']'
  }
  function Md(t) {
    return T({}, t, { 'data-precedence': t.precedence, precedence: null })
  }
  function Gy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (a.loading = 1)
      : ((e = t.createElement('link')),
        (a.preload = e),
        e.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        e.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        Qt(e, 'link', l),
        qt(e),
        t.head.appendChild(e))
  }
  function Da(t) {
    return '[src="' + me(t) + '"]'
  }
  function Tn(t) {
    return 'script[async]' + t
  }
  function Nd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + me(l.href) + '"]')
          if (a) return ((e.instance = a), qt(a), a)
          var n = T({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          })
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            qt(a),
            Qt(a, 'style', n),
            Gu(a, l.precedence, t),
            (e.instance = a)
          )
        case 'stylesheet':
          n = xa(l.href)
          var u = t.querySelector(En(n))
          if (u) return ((e.state.loading |= 4), (e.instance = u), qt(u), u)
          ;((a = Md(l)),
            (n = Ee.get(n)) && pf(a, n),
            (u = (t.ownerDocument || t).createElement('link')),
            qt(u))
          var c = u
          return (
            (c._p = new Promise(function (r, m) {
              ;((c.onload = r), (c.onerror = m))
            })),
            Qt(u, 'link', a),
            (e.state.loading |= 4),
            Gu(u, l.precedence, t),
            (e.instance = u)
          )
        case 'script':
          return (
            (u = Da(l.src)),
            (n = t.querySelector(Tn(u)))
              ? ((e.instance = n), qt(n), n)
              : ((a = l),
                (n = Ee.get(u)) && ((a = T({}, l)), gf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement('script')),
                qt(n),
                Qt(n, 'link', a),
                t.head.appendChild(n),
                (e.instance = n))
          )
        case 'void':
          return null
        default:
          throw Error(f(443, e.type))
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gu(a, l.precedence, t))
    return e.instance
  }
  function Gu(t, e, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var r = a[c]
      if (r.dataset.precedence === e) u = r
      else if (u !== n) break
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild))
  }
  function pf(t, e) {
    ;(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title))
  }
  function gf(t, e) {
    ;(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity))
  }
  var wu = null
  function Ud(t, e, l) {
    if (wu === null) {
      var a = new Map(),
        n = (wu = new Map())
      n.set(l, a)
    } else ((n = wu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)))
    if (a.has(t)) return a
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n]
      if (
        !(u[ja] || u[Kt] || (t === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var c = u.getAttribute(e) || ''
        c = t + c
        var r = a.get(c)
        r ? r.push(u) : a.set(c, [u])
      }
    }
    return a
  }
  function Cd(t, e, l) {
    ;((t = t.ownerDocument || t),
      t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null))
  }
  function wy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1
    switch (t) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break
        return !0
      case 'link':
        if (
          typeof e.rel != 'string' ||
          typeof e.href != 'string' ||
          e.href === '' ||
          e.onLoad ||
          e.onError
        )
          break
        switch (e.rel) {
          case 'stylesheet':
            return ((t = e.disabled), typeof e.precedence == 'string' && t == null)
          default:
            return !0
        }
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0
    }
    return !1
  }
  function jd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0)
  }
  var Rn = null
  function Xy() {}
  function Qy(t, e, l) {
    if (Rn === null) throw Error(f(475))
    var a = Rn
    if (
      e.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = xa(l.href),
          u = t.querySelector(En(n))
        if (u) {
          ;((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (a.count++, (a = Xu.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = u),
            qt(u))
          return
        }
        ;((u = t.ownerDocument || t),
          (l = Md(l)),
          (n = Ee.get(n)) && pf(l, n),
          (u = u.createElement('link')),
          qt(u))
        var c = u
        ;((c._p = new Promise(function (r, m) {
          ;((c.onload = r), (c.onerror = m))
        })),
          Qt(u, 'link', l),
          (e.instance = u))
      }
      ;(a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Xu.bind(a)),
          t.addEventListener('load', e),
          t.addEventListener('error', e)))
    }
  }
  function Zy() {
    if (Rn === null) throw Error(f(475))
    var t = Rn
    return (
      t.stylesheets && t.count === 0 && Sf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Sf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend
                ;((t.unsuspend = null), a())
              }
            }, 6e4)
            return (
              (t.unsuspend = e),
              function () {
                ;((t.unsuspend = null), clearTimeout(l))
              }
            )
          }
        : null
    )
  }
  function Xu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Sf(this, this.stylesheets)
      else if (this.unsuspend) {
        var t = this.unsuspend
        ;((this.unsuspend = null), t())
      }
    }
  }
  var Qu = null
  function Sf(t, e) {
    ;((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Qu = new Map()), e.forEach(Vy, t), (Qu = null), Xu.call(t)))
  }
  function Vy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Qu.get(t)
      if (l) var a = l.get(null)
      else {
        ;((l = new Map()), Qu.set(t, l))
        for (
          var n = t.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u]
          ;(c.nodeName === 'LINK' || c.getAttribute('media') !== 'not all') &&
            (l.set(c.dataset.precedence, c), (a = c))
        }
        a && l.set(null, a)
      }
      ;((n = e.instance),
        (c = n.getAttribute('data-precedence')),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Xu.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4))
    }
  }
  var An = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  }
  function Ky(t, e, l, a, n, u, c, r) {
    ;((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = mi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = mi(0)),
      (this.hiddenUpdates = mi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map()))
  }
  function Hd(t, e, l, a, n, u, c, r, m, R, z, j) {
    return (
      (t = new Ky(t, e, l, c, r, m, R, j)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ce(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Ii()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ac(u),
      t
    )
  }
  function qd(t) {
    return t ? ((t = ua), t) : ua
  }
  function Ld(t, e, l, a, n, u) {
    ;((n = qd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = nl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ul(t, a, e)),
      l !== null && (de(l, t, e), Ia(l, t, e)))
  }
  function Bd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane
      t.retryLane = l !== 0 && l < e ? l : e
    }
  }
  function bf(t, e) {
    ;(Bd(t, e), (t = t.alternate) && Bd(t, e))
  }
  function Yd(t) {
    if (t.tag === 13) {
      var e = na(t, 67108864)
      ;(e !== null && de(e, t, 67108864), bf(t, 67108864))
    }
  }
  var Zu = !0
  function Jy(t, e, l, a) {
    var n = N.T
    N.T = null
    var u = w.p
    try {
      ;((w.p = 2), Ef(t, e, l, a))
    } finally {
      ;((w.p = u), (N.T = n))
    }
  }
  function $y(t, e, l, a) {
    var n = N.T
    N.T = null
    var u = w.p
    try {
      ;((w.p = 8), Ef(t, e, l, a))
    } finally {
      ;((w.p = u), (N.T = n))
    }
  }
  function Ef(t, e, l, a) {
    if (Zu) {
      var n = Tf(a)
      if (n === null) (ff(t, e, a, Vu, l), wd(t, a))
      else if (Wy(n, t, e, l, a)) a.stopPropagation()
      else if ((wd(t, a), e & 4 && -1 < ky.indexOf(t))) {
        for (; n !== null; ) {
          var u = Kl(n)
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = _l(u.pendingLanes)
                  if (c !== 0) {
                    var r = u
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var m = 1 << (31 - ue(c))
                      ;((r.entanglements[1] |= m), (c &= ~m))
                    }
                    ;(Ne(u), (mt & 6) === 0 && ((Du = Oe() + 500), pn(0)))
                  }
                }
                break
              case 13:
                ;((r = na(u, 2)), r !== null && de(r, u, 2), Mu(), bf(u, 2))
            }
          if (((u = Tf(a)), u === null && ff(t, e, a, Vu, l), u === n)) break
          n = u
        }
        n !== null && a.stopPropagation()
      } else ff(t, e, a, null, l)
    }
  }
  function Tf(t) {
    return ((t = Oi(t)), Rf(t))
  }
  var Vu = null
  function Rf(t) {
    if (((Vu = null), (t = Vl(t)), t !== null)) {
      var e = y(t)
      if (e === null) t = null
      else {
        var l = e.tag
        if (l === 13) {
          if (((t = b(e)), t !== null)) return t
          t = null
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null
          t = null
        } else e !== t && (t = null)
      }
    }
    return ((Vu = t), null)
  }
  function Gd(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (jh()) {
          case If:
            return 2
          case tr:
            return 8
          case Ln:
          case Hh:
            return 32
          case er:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Af = !1,
    gl = null,
    Sl = null,
    bl = null,
    _n = new Map(),
    On = new Map(),
    El = [],
    ky =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function wd(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        gl = null
        break
      case 'dragenter':
      case 'dragleave':
        Sl = null
        break
      case 'mouseover':
      case 'mouseout':
        bl = null
        break
      case 'pointerover':
      case 'pointerout':
        _n.delete(e.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        On.delete(e.pointerId)
    }
  }
  function xn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Kl(e)), e !== null && Yd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t)
  }
  function Wy(t, e, l, a, n) {
    switch (e) {
      case 'focusin':
        return ((gl = xn(gl, t, e, l, a, n)), !0)
      case 'dragenter':
        return ((Sl = xn(Sl, t, e, l, a, n)), !0)
      case 'mouseover':
        return ((bl = xn(bl, t, e, l, a, n)), !0)
      case 'pointerover':
        var u = n.pointerId
        return (_n.set(u, xn(_n.get(u) || null, t, e, l, a, n)), !0)
      case 'gotpointercapture':
        return ((u = n.pointerId), On.set(u, xn(On.get(u) || null, t, e, l, a, n)), !0)
    }
    return !1
  }
  function Xd(t) {
    var e = Vl(t.target)
    if (e !== null) {
      var l = y(e)
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = b(l)), e !== null)) {
            ;((t.blockedOn = e),
              Qh(t.priority, function () {
                if (l.tag === 13) {
                  var a = se()
                  a = yi(a)
                  var n = na(l, a)
                  ;(n !== null && de(n, l, a), bf(l, a))
                }
              }))
            return
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    t.blockedOn = null
  }
  function Ku(t) {
    if (t.blockedOn !== null) return !1
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Tf(t.nativeEvent)
      if (l === null) {
        l = t.nativeEvent
        var a = new l.constructor(l.type, l)
        ;((_i = a), l.target.dispatchEvent(a), (_i = null))
      } else return ((e = Kl(l)), e !== null && Yd(e), (t.blockedOn = l), !1)
      e.shift()
    }
    return !0
  }
  function Qd(t, e, l) {
    Ku(t) && l.delete(e)
  }
  function Fy() {
    ;((Af = !1),
      gl !== null && Ku(gl) && (gl = null),
      Sl !== null && Ku(Sl) && (Sl = null),
      bl !== null && Ku(bl) && (bl = null),
      _n.forEach(Qd),
      On.forEach(Qd))
  }
  function Ju(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Af || ((Af = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Fy)))
  }
  var $u = null
  function Zd(t) {
    $u !== t &&
      (($u = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        $u === t && ($u = null)
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2]
          if (typeof a != 'function') {
            if (Rf(a || l) === null) continue
            break
          }
          var u = Kl(l)
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Tc(u, { pending: !0, data: n, method: l.method, action: a }, a, n))
        }
      }))
  }
  function Dn(t) {
    function e(m) {
      return Ju(m, t)
    }
    ;(gl !== null && Ju(gl, t),
      Sl !== null && Ju(Sl, t),
      bl !== null && Ju(bl, t),
      _n.forEach(e),
      On.forEach(e))
    for (var l = 0; l < El.length; l++) {
      var a = El[l]
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < El.length && ((l = El[0]), l.blockedOn === null); )
      (Xd(l), l.blockedOn === null && El.shift())
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[Ft] || null
        if (typeof u == 'function') c || Zd(l)
        else if (c) {
          var r = null
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (c = u[Ft] || null))) r = c.formAction
            else if (Rf(n) !== null) continue
          } else r = c.action
          ;(typeof r == 'function' ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)), Zd(l))
        }
      }
  }
  function _f(t) {
    this._internalRoot = t
  }
  ;((ku.prototype.render = _f.prototype.render =
    function (t) {
      var e = this._internalRoot
      if (e === null) throw Error(f(409))
      var l = e.current,
        a = se()
      Ld(l, a, t, e, null, null)
    }),
    (ku.prototype.unmount = _f.prototype.unmount =
      function () {
        var t = this._internalRoot
        if (t !== null) {
          this._internalRoot = null
          var e = t.containerInfo
          ;(Ld(t.current, 2, null, t, null, null), Mu(), (e[Zl] = null))
        }
      }))
  function ku(t) {
    this._internalRoot = t
  }
  ku.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ir()
      t = { blockedOn: null, target: t, priority: e }
      for (var l = 0; l < El.length && e !== 0 && e < El[l].priority; l++);
      ;(El.splice(l, 0, t), l === 0 && Xd(t))
    }
  }
  var Vd = o.version
  if (Vd !== '19.1.1') throw Error(f(527, Vd, '19.1.1'))
  w.findDOMNode = function (t) {
    var e = t._reactInternals
    if (e === void 0)
      throw typeof t.render == 'function'
        ? Error(f(188))
        : ((t = Object.keys(t).join(',')), Error(f(268, t)))
    return ((t = g(e)), (t = t !== null ? h(t) : null), (t = t === null ? null : t.stateNode), t)
  }
  var Py = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.1.1',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Wu.isDisabled && Wu.supportsFiber)
      try {
        ;((Na = Wu.inject(Py)), (ne = Wu))
      } catch {}
  }
  return (
    (Mn.createRoot = function (t, e) {
      if (!s(t)) throw Error(f(299))
      var l = !1,
        a = '',
        n = cs,
        u = fs,
        c = rs,
        r = null
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks)),
        (e = Hd(t, 1, !1, null, null, l, a, n, u, c, r, null)),
        (t[Zl] = e.current),
        cf(t),
        new _f(e)
      )
    }),
    (Mn.hydrateRoot = function (t, e, l) {
      if (!s(t)) throw Error(f(299))
      var a = !1,
        n = '',
        u = cs,
        c = fs,
        r = rs,
        m = null,
        R = null
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (R = l.formState)),
        (e = Hd(t, 1, !0, e, l ?? null, a, n, u, c, r, m, R)),
        (e.context = qd(null)),
        (l = e.current),
        (a = se()),
        (a = yi(a)),
        (n = nl(a)),
        (n.callback = null),
        ul(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ca(e, l),
        Ne(e),
        (t[Zl] = e.current),
        cf(t),
        new ku(e)
      )
    }),
    (Mn.version = '19.1.1'),
    Mn
  )
}
var eh
function rv() {
  if (eh) return Df.exports
  eh = 1
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
      } catch (o) {
        console.error(o)
      }
  }
  return (i(), (Df.exports = fv()), Df.exports)
}
var ov = rv()
const sv = ui(ov)
/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var lh = 'popstate'
function dv(i = {}) {
  function o(f, s) {
    let { pathname: y, search: b, hash: x } = f.location
    return Yf(
      '',
      { pathname: y, search: b, hash: x },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    )
  }
  function d(f, s) {
    return typeof s == 'string' ? s : Un(s)
  }
  return mv(o, d, null, i)
}
function xt(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o)
}
function Ue(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function hv() {
  return Math.random().toString(36).substring(2, 10)
}
function ah(i, o) {
  return { usr: i.state, key: i.key, idx: o }
}
function Yf(i, o, d = null, f) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? za(o) : o),
    state: d,
    key: (o && o.key) || f || hv(),
  }
}
function Un({ pathname: i = '/', search: o = '', hash: d = '' }) {
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    d && d !== '#' && (i += d.charAt(0) === '#' ? d : '#' + d),
    i
  )
}
function za(i) {
  let o = {}
  if (i) {
    let d = i.indexOf('#')
    d >= 0 && ((o.hash = i.substring(d)), (i = i.substring(0, d)))
    let f = i.indexOf('?')
    ;(f >= 0 && ((o.search = i.substring(f)), (i = i.substring(0, f))), i && (o.pathname = i))
  }
  return o
}
function mv(i, o, d, f = {}) {
  let { window: s = document.defaultView, v5Compat: y = !1 } = f,
    b = s.history,
    x = 'POP',
    g = null,
    h = T()
  h == null && ((h = 0), b.replaceState({ ...b.state, idx: h }, ''))
  function T() {
    return (b.state || { idx: null }).idx
  }
  function D() {
    x = 'POP'
    let Z = T(),
      B = Z == null ? null : Z - h
    ;((h = Z), g && g({ action: x, location: X.location, delta: B }))
  }
  function M(Z, B) {
    x = 'PUSH'
    let I = Yf(X.location, Z, B)
    h = T() + 1
    let K = ah(I, h),
      nt = X.createHref(I)
    try {
      b.pushState(K, '', nt)
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C
      s.location.assign(nt)
    }
    y && g && g({ action: x, location: X.location, delta: 1 })
  }
  function Y(Z, B) {
    x = 'REPLACE'
    let I = Yf(X.location, Z, B)
    h = T()
    let K = ah(I, h),
      nt = X.createHref(I)
    ;(b.replaceState(K, '', nt), y && g && g({ action: x, location: X.location, delta: 0 }))
  }
  function L(Z) {
    return yv(Z)
  }
  let X = {
    get action() {
      return x
    },
    get location() {
      return i(s, b)
    },
    listen(Z) {
      if (g) throw new Error('A history only accepts one active listener')
      return (
        s.addEventListener(lh, D),
        (g = Z),
        () => {
          ;(s.removeEventListener(lh, D), (g = null))
        }
      )
    },
    createHref(Z) {
      return o(s, Z)
    },
    createURL: L,
    encodeLocation(Z) {
      let B = L(Z)
      return { pathname: B.pathname, search: B.search, hash: B.hash }
    },
    push: M,
    replace: Y,
    go(Z) {
      return b.go(Z)
    },
  }
  return X
}
function yv(i, o = !1) {
  let d = 'http://localhost'
  ;(typeof window < 'u' &&
    (d = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    xt(d, 'No window.location.(origin|href) available to create URL'))
  let f = typeof i == 'string' ? i : Un(i)
  return ((f = f.replace(/ $/, '%20')), !o && f.startsWith('//') && (f = d + f), new URL(f, d))
}
function hh(i, o, d = '/') {
  return vv(i, o, d, !1)
}
function vv(i, o, d, f) {
  let s = typeof o == 'string' ? za(o) : o,
    y = We(s.pathname || '/', d)
  if (y == null) return null
  let b = mh(i)
  pv(b)
  let x = null
  for (let g = 0; x == null && g < b.length; ++g) {
    let h = Dv(y)
    x = Ov(b[g], h, f)
  }
  return x
}
function mh(i, o = [], d = [], f = '', s = !1) {
  let y = (b, x, g = s, h) => {
    let T = {
      relativePath: h === void 0 ? b.path || '' : h,
      caseSensitive: b.caseSensitive === !0,
      childrenIndex: x,
      route: b,
    }
    if (T.relativePath.startsWith('/')) {
      if (!T.relativePath.startsWith(f) && g) return
      ;(xt(
        T.relativePath.startsWith(f),
        `Absolute route path "${T.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (T.relativePath = T.relativePath.slice(f.length)))
    }
    let D = ke([f, T.relativePath]),
      M = d.concat(T)
    ;(b.children &&
      b.children.length > 0 &&
      (xt(
        b.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${D}".`
      ),
      mh(b.children, o, M, D, g)),
      !(b.path == null && !b.index) && o.push({ path: D, score: Av(D, b.index), routesMeta: M }))
  }
  return (
    i.forEach((b, x) => {
      if (b.path === '' || !b.path?.includes('?')) y(b, x)
      else for (let g of yh(b.path)) y(b, x, !0, g)
    }),
    o
  )
}
function yh(i) {
  let o = i.split('/')
  if (o.length === 0) return []
  let [d, ...f] = o,
    s = d.endsWith('?'),
    y = d.replace(/\?$/, '')
  if (f.length === 0) return s ? [y, ''] : [y]
  let b = yh(f.join('/')),
    x = []
  return (
    x.push(...b.map(g => (g === '' ? y : [y, g].join('/')))),
    s && x.push(...b),
    x.map(g => (i.startsWith('/') && g === '' ? '/' : g))
  )
}
function pv(i) {
  i.sort((o, d) =>
    o.score !== d.score
      ? d.score - o.score
      : _v(
          o.routesMeta.map(f => f.childrenIndex),
          d.routesMeta.map(f => f.childrenIndex)
        )
  )
}
var gv = /^:[\w-]+$/,
  Sv = 3,
  bv = 2,
  Ev = 1,
  Tv = 10,
  Rv = -2,
  nh = i => i === '*'
function Av(i, o) {
  let d = i.split('/'),
    f = d.length
  return (
    d.some(nh) && (f += Rv),
    o && (f += bv),
    d.filter(s => !nh(s)).reduce((s, y) => s + (gv.test(y) ? Sv : y === '' ? Ev : Tv), f)
  )
}
function _v(i, o) {
  return i.length === o.length && i.slice(0, -1).every((f, s) => f === o[s])
    ? i[i.length - 1] - o[o.length - 1]
    : 0
}
function Ov(i, o, d = !1) {
  let { routesMeta: f } = i,
    s = {},
    y = '/',
    b = []
  for (let x = 0; x < f.length; ++x) {
    let g = f[x],
      h = x === f.length - 1,
      T = y === '/' ? o : o.slice(y.length) || '/',
      D = ni({ path: g.relativePath, caseSensitive: g.caseSensitive, end: h }, T),
      M = g.route
    if (
      (!D &&
        h &&
        d &&
        !f[f.length - 1].route.index &&
        (D = ni({ path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 }, T)),
      !D)
    )
      return null
    ;(Object.assign(s, D.params),
      b.push({
        params: s,
        pathname: ke([y, D.pathname]),
        pathnameBase: Uv(ke([y, D.pathnameBase])),
        route: M,
      }),
      D.pathnameBase !== '/' && (y = ke([y, D.pathnameBase])))
  }
  return b
}
function ni(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [d, f] = xv(i.path, i.caseSensitive, i.end),
    s = o.match(d)
  if (!s) return null
  let y = s[0],
    b = y.replace(/(.)\/+$/, '$1'),
    x = s.slice(1)
  return {
    params: f.reduce((h, { paramName: T, isOptional: D }, M) => {
      if (T === '*') {
        let L = x[M] || ''
        b = y.slice(0, y.length - L.length).replace(/(.)\/+$/, '$1')
      }
      const Y = x[M]
      return (D && !Y ? (h[T] = void 0) : (h[T] = (Y || '').replace(/%2F/g, '/')), h)
    }, {}),
    pathname: y,
    pathnameBase: b,
    pattern: i,
  }
}
function xv(i, o = !1, d = !0) {
  Ue(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`
  )
  let f = [],
    s =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (b, x, g) => (
            f.push({ paramName: x, isOptional: g != null }),
            g ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2')
  return (
    i.endsWith('*')
      ? (f.push({ paramName: '*' }), (s += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : d
        ? (s += '\\/*$')
        : i !== '' && i !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, o ? void 0 : 'i'), f]
  )
}
function Dv(i) {
  try {
    return i
      .split('/')
      .map(o => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/')
  } catch (o) {
    return (
      Ue(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      i
    )
  }
}
function We(i, o) {
  if (o === '/') return i
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null
  let d = o.endsWith('/') ? o.length - 1 : o.length,
    f = i.charAt(d)
  return f && f !== '/' ? null : i.slice(d) || '/'
}
function zv(i, o = '/') {
  let { pathname: d, search: f = '', hash: s = '' } = typeof i == 'string' ? za(i) : i
  return { pathname: d ? (d.startsWith('/') ? d : Mv(d, o)) : o, search: Cv(f), hash: jv(s) }
}
function Mv(i, o) {
  let d = o.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach(s => {
      s === '..' ? d.length > 1 && d.pop() : s !== '.' && d.push(s)
    }),
    d.length > 1 ? d.join('/') : '/'
  )
}
function Uf(i, o, d, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Nv(i) {
  return i.filter((o, d) => d === 0 || (o.route.path && o.route.path.length > 0))
}
function vh(i) {
  let o = Nv(i)
  return o.map((d, f) => (f === o.length - 1 ? d.pathname : d.pathnameBase))
}
function ph(i, o, d, f = !1) {
  let s
  typeof i == 'string'
    ? (s = za(i))
    : ((s = { ...i }),
      xt(!s.pathname || !s.pathname.includes('?'), Uf('?', 'pathname', 'search', s)),
      xt(!s.pathname || !s.pathname.includes('#'), Uf('#', 'pathname', 'hash', s)),
      xt(!s.search || !s.search.includes('#'), Uf('#', 'search', 'hash', s)))
  let y = i === '' || s.pathname === '',
    b = y ? '/' : s.pathname,
    x
  if (b == null) x = d
  else {
    let D = o.length - 1
    if (!f && b.startsWith('..')) {
      let M = b.split('/')
      for (; M[0] === '..'; ) (M.shift(), (D -= 1))
      s.pathname = M.join('/')
    }
    x = D >= 0 ? o[D] : '/'
  }
  let g = zv(s, x),
    h = b && b !== '/' && b.endsWith('/'),
    T = (y || b === '.') && d.endsWith('/')
  return (!g.pathname.endsWith('/') && (h || T) && (g.pathname += '/'), g)
}
var ke = i => i.join('/').replace(/\/\/+/g, '/'),
  Uv = i => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Cv = i => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  jv = i => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i)
function Hv(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  )
}
var gh = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(gh)
var qv = ['GET', ...gh]
new Set(qv)
var Ma = O.createContext(null)
Ma.displayName = 'DataRouter'
var ii = O.createContext(null)
ii.displayName = 'DataRouterState'
O.createContext(!1)
var Sh = O.createContext({ isTransitioning: !1 })
Sh.displayName = 'ViewTransition'
var Lv = O.createContext(new Map())
Lv.displayName = 'Fetchers'
var Bv = O.createContext(null)
Bv.displayName = 'Await'
var Ce = O.createContext(null)
Ce.displayName = 'Navigation'
var Cn = O.createContext(null)
Cn.displayName = 'Location'
var Fe = O.createContext({ outlet: null, matches: [], isDataRoute: !1 })
Fe.displayName = 'Route'
var Jf = O.createContext(null)
Jf.displayName = 'RouteError'
function Yv(i, { relative: o } = {}) {
  xt(jn(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: d, navigator: f } = O.useContext(Ce),
    { hash: s, pathname: y, search: b } = Hn(i, { relative: o }),
    x = y
  return (
    d !== '/' && (x = y === '/' ? d : ke([d, y])),
    f.createHref({ pathname: x, search: b, hash: s })
  )
}
function jn() {
  return O.useContext(Cn) != null
}
function Ql() {
  return (
    xt(jn(), 'useLocation() may be used only in the context of a <Router> component.'),
    O.useContext(Cn).location
  )
}
var bh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Eh(i) {
  O.useContext(Ce).static || O.useLayoutEffect(i)
}
function Th() {
  let { isDataRoute: i } = O.useContext(Fe)
  return i ? Pv() : Gv()
}
function Gv() {
  xt(jn(), 'useNavigate() may be used only in the context of a <Router> component.')
  let i = O.useContext(Ma),
    { basename: o, navigator: d } = O.useContext(Ce),
    { matches: f } = O.useContext(Fe),
    { pathname: s } = Ql(),
    y = JSON.stringify(vh(f)),
    b = O.useRef(!1)
  return (
    Eh(() => {
      b.current = !0
    }),
    O.useCallback(
      (g, h = {}) => {
        if ((Ue(b.current, bh), !b.current)) return
        if (typeof g == 'number') {
          d.go(g)
          return
        }
        let T = ph(g, JSON.parse(y), s, h.relative === 'path')
        ;(i == null && o !== '/' && (T.pathname = T.pathname === '/' ? o : ke([o, T.pathname])),
          (h.replace ? d.replace : d.push)(T, h.state, h))
      },
      [o, d, y, s, i]
    )
  )
}
O.createContext(null)
function Hn(i, { relative: o } = {}) {
  let { matches: d } = O.useContext(Fe),
    { pathname: f } = Ql(),
    s = JSON.stringify(vh(d))
  return O.useMemo(() => ph(i, JSON.parse(s), f, o === 'path'), [i, s, f, o])
}
function wv(i, o) {
  return Rh(i, o)
}
function Rh(i, o, d, f) {
  xt(jn(), 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: s } = O.useContext(Ce),
    { matches: y } = O.useContext(Fe),
    b = y[y.length - 1],
    x = b ? b.params : {},
    g = b ? b.pathname : '/',
    h = b ? b.pathnameBase : '/',
    T = b && b.route
  {
    let B = (T && T.path) || ''
    Ah(
      g,
      !T || B.endsWith('*') || B.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B === '/' ? '*' : `${B}/*`}">.`
    )
  }
  let D = Ql(),
    M
  if (o) {
    let B = typeof o == 'string' ? za(o) : o
    ;(xt(
      h === '/' || B.pathname?.startsWith(h),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${B.pathname}" was given in the \`location\` prop.`
    ),
      (M = B))
  } else M = D
  let Y = M.pathname || '/',
    L = Y
  if (h !== '/') {
    let B = h.replace(/^\//, '').split('/')
    L = '/' + Y.replace(/^\//, '').split('/').slice(B.length).join('/')
  }
  let X = hh(i, { pathname: L })
  ;(Ue(T || X != null, `No routes matched location "${M.pathname}${M.search}${M.hash}" `),
    Ue(
      X == null ||
        X[X.length - 1].route.element !== void 0 ||
        X[X.length - 1].route.Component !== void 0 ||
        X[X.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ))
  let Z = Kv(
    X &&
      X.map(B =>
        Object.assign({}, B, {
          params: Object.assign({}, x, B.params),
          pathname: ke([h, s.encodeLocation ? s.encodeLocation(B.pathname).pathname : B.pathname]),
          pathnameBase:
            B.pathnameBase === '/'
              ? h
              : ke([
                  h,
                  s.encodeLocation ? s.encodeLocation(B.pathnameBase).pathname : B.pathnameBase,
                ]),
        })
      ),
    y,
    d,
    f
  )
  return o && Z
    ? O.createElement(
        Cn.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...M },
            navigationType: 'POP',
          },
        },
        Z
      )
    : Z
}
function Xv() {
  let i = Fv(),
    o = Hv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
    d = i instanceof Error ? i.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: f },
    y = { padding: '2px 4px', backgroundColor: f },
    b = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (b = O.createElement(
      O.Fragment,
      null,
      O.createElement('p', null, '💿 Hey developer 👋'),
      O.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        O.createElement('code', { style: y }, 'ErrorBoundary'),
        ' or',
        ' ',
        O.createElement('code', { style: y }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    O.createElement(
      O.Fragment,
      null,
      O.createElement('h2', null, 'Unexpected Application Error!'),
      O.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      d ? O.createElement('pre', { style: s }, d) : null,
      b
    )
  )
}
var Qv = O.createElement(Xv, null),
  Zv = class extends O.Component {
    constructor(i) {
      ;(super(i),
        (this.state = { location: i.location, revalidation: i.revalidation, error: i.error }))
    }
    static getDerivedStateFromError(i) {
      return { error: i }
    }
    static getDerivedStateFromProps(i, o) {
      return o.location !== i.location || (o.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          }
    }
    componentDidCatch(i, o) {
      console.error('React Router caught the following error during render', i, o)
    }
    render() {
      return this.state.error !== void 0
        ? O.createElement(
            Fe.Provider,
            { value: this.props.routeContext },
            O.createElement(Jf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children
    }
  }
function Vv({ routeContext: i, match: o, children: d }) {
  let f = O.useContext(Ma)
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    O.createElement(Fe.Provider, { value: i }, d)
  )
}
function Kv(i, o = [], d = null, f = null) {
  if (i == null) {
    if (!d) return null
    if (d.errors) i = d.matches
    else if (o.length === 0 && !d.initialized && d.matches.length > 0) i = d.matches
    else return null
  }
  let s = i,
    y = d?.errors
  if (y != null) {
    let g = s.findIndex(h => h.route.id && y?.[h.route.id] !== void 0)
    ;(xt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(y).join(',')}`
    ),
      (s = s.slice(0, Math.min(s.length, g + 1))))
  }
  let b = !1,
    x = -1
  if (d)
    for (let g = 0; g < s.length; g++) {
      let h = s[g]
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (x = g), h.route.id)) {
        let { loaderData: T, errors: D } = d,
          M = h.route.loader && !T.hasOwnProperty(h.route.id) && (!D || D[h.route.id] === void 0)
        if (h.route.lazy || M) {
          ;((b = !0), x >= 0 ? (s = s.slice(0, x + 1)) : (s = [s[0]]))
          break
        }
      }
    }
  return s.reduceRight((g, h, T) => {
    let D,
      M = !1,
      Y = null,
      L = null
    d &&
      ((D = y && h.route.id ? y[h.route.id] : void 0),
      (Y = h.route.errorElement || Qv),
      b &&
        (x < 0 && T === 0
          ? (Ah(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (M = !0),
            (L = null))
          : x === T && ((M = !0), (L = h.route.hydrateFallbackElement || null))))
    let X = o.concat(s.slice(0, T + 1)),
      Z = () => {
        let B
        return (
          D
            ? (B = Y)
            : M
              ? (B = L)
              : h.route.Component
                ? (B = O.createElement(h.route.Component, null))
                : h.route.element
                  ? (B = h.route.element)
                  : (B = g),
          O.createElement(Vv, {
            match: h,
            routeContext: { outlet: g, matches: X, isDataRoute: d != null },
            children: B,
          })
        )
      }
    return d && (h.route.ErrorBoundary || h.route.errorElement || T === 0)
      ? O.createElement(Zv, {
          location: d.location,
          revalidation: d.revalidation,
          component: Y,
          error: D,
          children: Z(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
        })
      : Z()
  }, null)
}
function $f(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Jv(i) {
  let o = O.useContext(Ma)
  return (xt(o, $f(i)), o)
}
function $v(i) {
  let o = O.useContext(ii)
  return (xt(o, $f(i)), o)
}
function kv(i) {
  let o = O.useContext(Fe)
  return (xt(o, $f(i)), o)
}
function kf(i) {
  let o = kv(i),
    d = o.matches[o.matches.length - 1]
  return (xt(d.route.id, `${i} can only be used on routes that contain a unique "id"`), d.route.id)
}
function Wv() {
  return kf('useRouteId')
}
function Fv() {
  let i = O.useContext(Jf),
    o = $v('useRouteError'),
    d = kf('useRouteError')
  return i !== void 0 ? i : o.errors?.[d]
}
function Pv() {
  let { router: i } = Jv('useNavigate'),
    o = kf('useNavigate'),
    d = O.useRef(!1)
  return (
    Eh(() => {
      d.current = !0
    }),
    O.useCallback(
      async (s, y = {}) => {
        ;(Ue(d.current, bh),
          d.current &&
            (typeof s == 'number' ? i.navigate(s) : await i.navigate(s, { fromRouteId: o, ...y })))
      },
      [i, o]
    )
  )
}
var uh = {}
function Ah(i, o, d) {
  !o && !uh[i] && ((uh[i] = !0), Ue(!1, d))
}
O.memo(Iv)
function Iv({ routes: i, future: o, state: d }) {
  return Rh(i, void 0, d, o)
}
function ti(i) {
  xt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function t0({
  basename: i = '/',
  children: o = null,
  location: d,
  navigationType: f = 'POP',
  navigator: s,
  static: y = !1,
}) {
  xt(
    !jn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  )
  let b = i.replace(/^\/*/, '/'),
    x = O.useMemo(() => ({ basename: b, navigator: s, static: y, future: {} }), [b, s, y])
  typeof d == 'string' && (d = za(d))
  let { pathname: g = '/', search: h = '', hash: T = '', state: D = null, key: M = 'default' } = d,
    Y = O.useMemo(() => {
      let L = We(g, b)
      return L == null
        ? null
        : { location: { pathname: L, search: h, hash: T, state: D, key: M }, navigationType: f }
    }, [b, g, h, T, D, M, f])
  return (
    Ue(
      Y != null,
      `<Router basename="${b}"> is not able to match the URL "${g}${h}${T}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Y == null
      ? null
      : O.createElement(
          Ce.Provider,
          { value: x },
          O.createElement(Cn.Provider, { children: o, value: Y })
        )
  )
}
function e0({ children: i, location: o }) {
  return wv(Gf(i), o)
}
function Gf(i, o = []) {
  let d = []
  return (
    O.Children.forEach(i, (f, s) => {
      if (!O.isValidElement(f)) return
      let y = [...o, s]
      if (f.type === O.Fragment) {
        d.push.apply(d, Gf(f.props.children, y))
        return
      }
      ;(xt(
        f.type === ti,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xt(!f.props.index || !f.props.children, 'An index route cannot have child routes.'))
      let b = {
        id: f.props.id || y.join('-'),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      }
      ;(f.props.children && (b.children = Gf(f.props.children, y)), d.push(b))
    }),
    d
  )
}
var ei = 'get',
  li = 'application/x-www-form-urlencoded'
function ci(i) {
  return i != null && typeof i.tagName == 'string'
}
function l0(i) {
  return ci(i) && i.tagName.toLowerCase() === 'button'
}
function a0(i) {
  return ci(i) && i.tagName.toLowerCase() === 'form'
}
function n0(i) {
  return ci(i) && i.tagName.toLowerCase() === 'input'
}
function u0(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function i0(i, o) {
  return i.button === 0 && (!o || o === '_self') && !u0(i)
}
var Fu = null
function c0() {
  if (Fu === null)
    try {
      ;(new FormData(document.createElement('form'), 0), (Fu = !1))
    } catch {
      Fu = !0
    }
  return Fu
}
var f0 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function Cf(i) {
  return i != null && !f0.has(i)
    ? (Ue(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`
      ),
      null)
    : i
}
function r0(i, o) {
  let d, f, s, y, b
  if (a0(i)) {
    let x = i.getAttribute('action')
    ;((f = x ? We(x, o) : null),
      (d = i.getAttribute('method') || ei),
      (s = Cf(i.getAttribute('enctype')) || li),
      (y = new FormData(i)))
  } else if (l0(i) || (n0(i) && (i.type === 'submit' || i.type === 'image'))) {
    let x = i.form
    if (x == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let g = i.getAttribute('formaction') || x.getAttribute('action')
    if (
      ((f = g ? We(g, o) : null),
      (d = i.getAttribute('formmethod') || x.getAttribute('method') || ei),
      (s = Cf(i.getAttribute('formenctype')) || Cf(x.getAttribute('enctype')) || li),
      (y = new FormData(x, i)),
      !c0())
    ) {
      let { name: h, type: T, value: D } = i
      if (T === 'image') {
        let M = h ? `${h}.` : ''
        ;(y.append(`${M}x`, '0'), y.append(`${M}y`, '0'))
      } else h && y.append(h, D)
    }
  } else {
    if (ci(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    ;((d = ei), (f = null), (s = li), (b = i))
  }
  return (
    y && s === 'text/plain' && ((b = y), (y = void 0)),
    { action: f, method: d.toLowerCase(), encType: s, formData: y, body: b }
  )
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
function Wf(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o)
}
function o0(i, o, d) {
  let f =
    typeof i == 'string'
      ? new URL(i, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : i
  return (
    f.pathname === '/'
      ? (f.pathname = `_root.${d}`)
      : o && We(f.pathname, o) === '/'
        ? (f.pathname = `${o.replace(/\/$/, '')}/_root.${d}`)
        : (f.pathname = `${f.pathname.replace(/\/$/, '')}.${d}`),
    f
  )
}
async function s0(i, o) {
  if (i.id in o) return o[i.id]
  try {
    let d = await import(i.module)
    return ((o[i.id] = d), d)
  } catch (d) {
    return (
      console.error(`Error loading route module \`${i.module}\`, reloading page...`),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    )
  }
}
function d0(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === 'preload' && typeof i.imageSrcSet == 'string' && typeof i.imageSizes == 'string'
      : typeof i.rel == 'string' && typeof i.href == 'string'
}
async function h0(i, o, d) {
  let f = await Promise.all(
    i.map(async s => {
      let y = o.routes[s.route.id]
      if (y) {
        let b = await s0(y, d)
        return b.links ? b.links() : []
      }
      return []
    })
  )
  return p0(
    f
      .flat(1)
      .filter(d0)
      .filter(s => s.rel === 'stylesheet' || s.rel === 'preload')
      .map(s =>
        s.rel === 'stylesheet' ? { ...s, rel: 'prefetch', as: 'style' } : { ...s, rel: 'prefetch' }
      )
  )
}
function ih(i, o, d, f, s, y) {
  let b = (g, h) => (d[h] ? g.route.id !== d[h].route.id : !0),
    x = (g, h) =>
      d[h].pathname !== g.pathname ||
      (d[h].route.path?.endsWith('*') && d[h].params['*'] !== g.params['*'])
  return y === 'assets'
    ? o.filter((g, h) => b(g, h) || x(g, h))
    : y === 'data'
      ? o.filter((g, h) => {
          let T = f.routes[g.route.id]
          if (!T || !T.hasLoader) return !1
          if (b(g, h) || x(g, h)) return !0
          if (g.route.shouldRevalidate) {
            let D = g.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: d[0]?.params || {},
              nextUrl: new URL(i, window.origin),
              nextParams: g.params,
              defaultShouldRevalidate: !0,
            })
            if (typeof D == 'boolean') return D
          }
          return !0
        })
      : []
}
function m0(i, o, { includeHydrateFallback: d } = {}) {
  return y0(
    i
      .map(f => {
        let s = o.routes[f.route.id]
        if (!s) return []
        let y = [s.module]
        return (
          s.clientActionModule && (y = y.concat(s.clientActionModule)),
          s.clientLoaderModule && (y = y.concat(s.clientLoaderModule)),
          d && s.hydrateFallbackModule && (y = y.concat(s.hydrateFallbackModule)),
          s.imports && (y = y.concat(s.imports)),
          y
        )
      })
      .flat(1)
  )
}
function y0(i) {
  return [...new Set(i)]
}
function v0(i) {
  let o = {},
    d = Object.keys(i).sort()
  for (let f of d) o[f] = i[f]
  return o
}
function p0(i, o) {
  let d = new Set()
  return (
    new Set(o),
    i.reduce((f, s) => {
      let y = JSON.stringify(v0(s))
      return (d.has(y) || (d.add(y), f.push({ key: y, link: s })), f)
    }, [])
  )
}
function _h() {
  let i = O.useContext(Ma)
  return (Wf(i, 'You must render this element inside a <DataRouterContext.Provider> element'), i)
}
function g0() {
  let i = O.useContext(ii)
  return (
    Wf(i, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    i
  )
}
var Ff = O.createContext(void 0)
Ff.displayName = 'FrameworkContext'
function Oh() {
  let i = O.useContext(Ff)
  return (Wf(i, 'You must render this element inside a <HydratedRouter> element'), i)
}
function S0(i, o) {
  let d = O.useContext(Ff),
    [f, s] = O.useState(!1),
    [y, b] = O.useState(!1),
    { onFocus: x, onBlur: g, onMouseEnter: h, onMouseLeave: T, onTouchStart: D } = o,
    M = O.useRef(null)
  ;(O.useEffect(() => {
    if ((i === 'render' && b(!0), i === 'viewport')) {
      let X = B => {
          B.forEach(I => {
            b(I.isIntersecting)
          })
        },
        Z = new IntersectionObserver(X, { threshold: 0.5 })
      return (
        M.current && Z.observe(M.current),
        () => {
          Z.disconnect()
        }
      )
    }
  }, [i]),
    O.useEffect(() => {
      if (f) {
        let X = setTimeout(() => {
          b(!0)
        }, 100)
        return () => {
          clearTimeout(X)
        }
      }
    }, [f]))
  let Y = () => {
      s(!0)
    },
    L = () => {
      ;(s(!1), b(!1))
    }
  return d
    ? i !== 'intent'
      ? [y, M, {}]
      : [
          y,
          M,
          {
            onFocus: Nn(x, Y),
            onBlur: Nn(g, L),
            onMouseEnter: Nn(h, Y),
            onMouseLeave: Nn(T, L),
            onTouchStart: Nn(D, Y),
          },
        ]
    : [!1, M, {}]
}
function Nn(i, o) {
  return d => {
    ;(i && i(d), d.defaultPrevented || o(d))
  }
}
function b0({ page: i, ...o }) {
  let { router: d } = _h(),
    f = O.useMemo(() => hh(d.routes, i, d.basename), [d.routes, i, d.basename])
  return f ? O.createElement(T0, { page: i, matches: f, ...o }) : null
}
function E0(i) {
  let { manifest: o, routeModules: d } = Oh(),
    [f, s] = O.useState([])
  return (
    O.useEffect(() => {
      let y = !1
      return (
        h0(i, o, d).then(b => {
          y || s(b)
        }),
        () => {
          y = !0
        }
      )
    }, [i, o, d]),
    f
  )
}
function T0({ page: i, matches: o, ...d }) {
  let f = Ql(),
    { manifest: s, routeModules: y } = Oh(),
    { basename: b } = _h(),
    { loaderData: x, matches: g } = g0(),
    h = O.useMemo(() => ih(i, o, g, s, f, 'data'), [i, o, g, s, f]),
    T = O.useMemo(() => ih(i, o, g, s, f, 'assets'), [i, o, g, s, f]),
    D = O.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return []
      let L = new Set(),
        X = !1
      if (
        (o.forEach(B => {
          let I = s.routes[B.route.id]
          !I ||
            !I.hasLoader ||
            ((!h.some(K => K.route.id === B.route.id) &&
              B.route.id in x &&
              y[B.route.id]?.shouldRevalidate) ||
            I.hasClientLoader
              ? (X = !0)
              : L.add(B.route.id))
        }),
        L.size === 0)
      )
        return []
      let Z = o0(i, b, 'data')
      return (
        X &&
          L.size > 0 &&
          Z.searchParams.set(
            '_routes',
            o
              .filter(B => L.has(B.route.id))
              .map(B => B.route.id)
              .join(',')
          ),
        [Z.pathname + Z.search]
      )
    }, [b, x, f, s, h, o, i, y]),
    M = O.useMemo(() => m0(T, s), [T, s]),
    Y = E0(T)
  return O.createElement(
    O.Fragment,
    null,
    D.map(L => O.createElement('link', { key: L, rel: 'prefetch', as: 'fetch', href: L, ...d })),
    M.map(L => O.createElement('link', { key: L, rel: 'modulepreload', href: L, ...d })),
    Y.map(({ key: L, link: X }) => O.createElement('link', { key: L, nonce: d.nonce, ...X }))
  )
}
function R0(...i) {
  return o => {
    i.forEach(d => {
      typeof d == 'function' ? d(o) : d != null && (d.current = o)
    })
  }
}
var xh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
try {
  xh && (window.__reactRouterVersion = '7.8.1')
} catch {}
function A0({ basename: i, children: o, window: d }) {
  let f = O.useRef()
  f.current == null && (f.current = dv({ window: d, v5Compat: !0 }))
  let s = f.current,
    [y, b] = O.useState({ action: s.action, location: s.location }),
    x = O.useCallback(
      g => {
        O.startTransition(() => b(g))
      },
      [b]
    )
  return (
    O.useLayoutEffect(() => s.listen(x), [s, x]),
    O.createElement(t0, {
      basename: i,
      children: o,
      location: y.location,
      navigationType: y.action,
      navigator: s,
    })
  )
}
var Dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pf = O.forwardRef(function (
    {
      onClick: o,
      discover: d = 'render',
      prefetch: f = 'none',
      relative: s,
      reloadDocument: y,
      replace: b,
      state: x,
      target: g,
      to: h,
      preventScrollReset: T,
      viewTransition: D,
      ...M
    },
    Y
  ) {
    let { basename: L } = O.useContext(Ce),
      X = typeof h == 'string' && Dh.test(h),
      Z,
      B = !1
    if (typeof h == 'string' && X && ((Z = h), xh))
      try {
        let Rt = new URL(window.location.href),
          Gt = h.startsWith('//') ? new URL(Rt.protocol + h) : new URL(h),
          kt = We(Gt.pathname, L)
        Gt.origin === Rt.origin && kt != null ? (h = kt + Gt.search + Gt.hash) : (B = !0)
      } catch {
        Ue(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        )
      }
    let I = Yv(h, { relative: s }),
      [K, nt, C] = S0(f, M),
      rt = x0(h, {
        replace: b,
        state: x,
        target: g,
        preventScrollReset: T,
        relative: s,
        viewTransition: D,
      })
    function ct(Rt) {
      ;(o && o(Rt), Rt.defaultPrevented || rt(Rt))
    }
    let Tt = O.createElement('a', {
      ...M,
      ...C,
      href: Z || I,
      onClick: B || y ? o : ct,
      ref: R0(Y, nt),
      target: g,
      'data-discover': !X && d === 'render' ? 'true' : void 0,
    })
    return K && !X ? O.createElement(O.Fragment, null, Tt, O.createElement(b0, { page: I })) : Tt
  })
Pf.displayName = 'Link'
var ai = O.forwardRef(function (
  {
    'aria-current': o = 'page',
    caseSensitive: d = !1,
    className: f = '',
    end: s = !1,
    style: y,
    to: b,
    viewTransition: x,
    children: g,
    ...h
  },
  T
) {
  let D = Hn(b, { relative: h.relative }),
    M = Ql(),
    Y = O.useContext(ii),
    { navigator: L, basename: X } = O.useContext(Ce),
    Z = Y != null && U0(D) && x === !0,
    B = L.encodeLocation ? L.encodeLocation(D).pathname : D.pathname,
    I = M.pathname,
    K = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null
  ;(d || ((I = I.toLowerCase()), (K = K ? K.toLowerCase() : null), (B = B.toLowerCase())),
    K && X && (K = We(K, X) || K))
  const nt = B !== '/' && B.endsWith('/') ? B.length - 1 : B.length
  let C = I === B || (!s && I.startsWith(B) && I.charAt(nt) === '/'),
    rt = K != null && (K === B || (!s && K.startsWith(B) && K.charAt(B.length) === '/')),
    ct = { isActive: C, isPending: rt, isTransitioning: Z },
    Tt = C ? o : void 0,
    Rt
  typeof f == 'function'
    ? (Rt = f(ct))
    : (Rt = [f, C ? 'active' : null, rt ? 'pending' : null, Z ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '))
  let Gt = typeof y == 'function' ? y(ct) : y
  return O.createElement(
    Pf,
    { ...h, 'aria-current': Tt, className: Rt, ref: T, style: Gt, to: b, viewTransition: x },
    typeof g == 'function' ? g(ct) : g
  )
})
ai.displayName = 'NavLink'
var _0 = O.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: o,
      navigate: d,
      reloadDocument: f,
      replace: s,
      state: y,
      method: b = ei,
      action: x,
      onSubmit: g,
      relative: h,
      preventScrollReset: T,
      viewTransition: D,
      ...M
    },
    Y
  ) => {
    let L = M0(),
      X = N0(x, { relative: h }),
      Z = b.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof x == 'string' && Dh.test(x),
      I = K => {
        if ((g && g(K), K.defaultPrevented)) return
        K.preventDefault()
        let nt = K.nativeEvent.submitter,
          C = nt?.getAttribute('formmethod') || b
        L(nt || K.currentTarget, {
          fetcherKey: o,
          method: C,
          navigate: d,
          replace: s,
          state: y,
          relative: h,
          preventScrollReset: T,
          viewTransition: D,
        })
      }
    return O.createElement('form', {
      ref: Y,
      method: Z,
      action: X,
      onSubmit: f ? g : I,
      ...M,
      'data-discover': !B && i === 'render' ? 'true' : void 0,
    })
  }
)
_0.displayName = 'Form'
function O0(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function zh(i) {
  let o = O.useContext(Ma)
  return (xt(o, O0(i)), o)
}
function x0(
  i,
  { target: o, replace: d, state: f, preventScrollReset: s, relative: y, viewTransition: b } = {}
) {
  let x = Th(),
    g = Ql(),
    h = Hn(i, { relative: y })
  return O.useCallback(
    T => {
      if (i0(T, o)) {
        T.preventDefault()
        let D = d !== void 0 ? d : Un(g) === Un(h)
        x(i, { replace: D, state: f, preventScrollReset: s, relative: y, viewTransition: b })
      }
    },
    [g, x, h, d, f, o, i, s, y, b]
  )
}
var D0 = 0,
  z0 = () => `__${String(++D0)}__`
function M0() {
  let { router: i } = zh('useSubmit'),
    { basename: o } = O.useContext(Ce),
    d = Wv()
  return O.useCallback(
    async (f, s = {}) => {
      let { action: y, method: b, encType: x, formData: g, body: h } = r0(f, o)
      if (s.navigate === !1) {
        let T = s.fetcherKey || z0()
        await i.fetch(T, d, s.action || y, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: h,
          formMethod: s.method || b,
          formEncType: s.encType || x,
          flushSync: s.flushSync,
        })
      } else
        await i.navigate(s.action || y, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: h,
          formMethod: s.method || b,
          formEncType: s.encType || x,
          replace: s.replace,
          state: s.state,
          fromRouteId: d,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        })
    },
    [i, o, d]
  )
}
function N0(i, { relative: o } = {}) {
  let { basename: d } = O.useContext(Ce),
    f = O.useContext(Fe)
  xt(f, 'useFormAction must be used inside a RouteContext')
  let [s] = f.matches.slice(-1),
    y = { ...Hn(i || '.', { relative: o }) },
    b = Ql()
  if (i == null) {
    y.search = b.search
    let x = new URLSearchParams(y.search),
      g = x.getAll('index')
    if (g.some(T => T === '')) {
      ;(x.delete('index'), g.filter(D => D).forEach(D => x.append('index', D)))
      let T = x.toString()
      y.search = T ? `?${T}` : ''
    }
  }
  return (
    (!i || i === '.') &&
      s.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, '?index&') : '?index'),
    d !== '/' && (y.pathname = y.pathname === '/' ? d : ke([d, y.pathname])),
    Un(y)
  )
}
function U0(i, { relative: o } = {}) {
  let d = O.useContext(Sh)
  xt(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  )
  let { basename: f } = zh('useViewTransitionState'),
    s = Hn(i, { relative: o })
  if (!d.isTransitioning) return !1
  let y = We(d.currentLocation.pathname, f) || d.currentLocation.pathname,
    b = We(d.nextLocation.pathname, f) || d.nextLocation.pathname
  return ni(s.pathname, b) != null || ni(s.pathname, y) != null
}
function C0() {
  return H.jsxs('div', {
    className: 'title-sec',
    children: [
      H.jsx('p', { className: 'title-sub', children: 'SISTEMA DE REDACCIÓN DE QUEJAS PARA' }),
      H.jsx('h1', {
        className: 'title-main',
        children: 'ENTIDADES PÚBLICAS DEL DEPARTAMENTO DE BOYACÁ',
      }),
    ],
  })
}
const fi = 'http://localhost:3000/api'
async function j0(i, o) {
  let d = `${fi}/complaints`
  i && i !== 'Todas' && (d += `?entity_name=${encodeURIComponent(i)}`)
  const f = await fetch(d, { signal: o })
  if (!f.ok) throw new Error('Error al obtener quejas')
  return f.json()
}
async function Mh(i) {
  const o = await fetch(`${fi}/entities`, { signal: i })
  if (!o.ok) throw new Error('Error al obtener entidades')
  return o.json()
}
async function H0(i) {
  const o = await fetch(`${fi}/reports`, { signal: i })
  if (!o.ok) throw new Error('Error al obtener reportes')
  return o.json()
}
async function q0({ entity_id: i, title: o, description: d, captcha: f }) {
  const s = await fetch(`${fi}/complaints`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id: i, title: o, description: d, captcha: f }),
  })
  if (!s.ok) throw new Error('Error al enviar la queja')
  return s.json()
}
const Pu = 'Todas',
  L0 = ({ onChange: i }) => {
    const [o, d] = O.useState([Pu]),
      [f, s] = O.useState(Pu),
      [y, b] = O.useState(!0),
      [x, g] = O.useState(null)
    O.useEffect(() => {
      const T = new AbortController()
      return (
        b(!0),
        g(null),
        Mh(T.signal)
          .then(D => {
            d([Pu, ...D.map(M => M.name)])
          })
          .catch(D => {
            D.name !== 'AbortError' && (g(D.message), d([Pu]))
          })
          .finally(() => b(!1)),
        () => T.abort()
      )
    }, [])
    const h = T => {
      ;(s(T), i && i(T))
    }
    return y
      ? H.jsx('div', {
          className: 'message loading',
          children: H.jsx('h3', { children: 'Cargando reportes...' }),
        })
      : x
        ? H.jsx('div', {
            className: 'message error',
            children: H.jsxs('h3', { children: ['⚠️ ', x] }),
          })
        : H.jsxs('div', {
            className: 'sidebar-filter',
            children: [
              H.jsx('h3', { children: 'ENTIDADES' }),
              o.map(T =>
                H.jsxs(
                  'label',
                  {
                    className: 'radio-label',
                    children: [
                      H.jsx('input', {
                        type: 'radio',
                        name: 'entity',
                        value: T,
                        checked: f === T,
                        onChange: () => h(T),
                      }),
                      T,
                    ],
                  },
                  T
                )
              ),
            ],
          })
  },
  B0 = ({ complaint: i }) => {
    const [o, d] = O.useState(!1),
      f = () => d(!o)
    return H.jsxs('div', {
      className: 'container',
      children: [
        H.jsxs('div', {
          className: 'header',
          onClick: f,
          children: [
            H.jsxs('div', {
              className: 'title',
              children: [
                H.jsx('figure', {
                  className: 'entity-icon',
                  children: H.jsx('img', {
                    src: `/entity_logos/${i.logo}`,
                    alt: `Logo de ${i.entity_name}`,
                    width: '30',
                    height: '30',
                  }),
                }),
                H.jsx('strong', { children: i.title }),
                H.jsxs('span', { className: 'entity-name', children: ['(', i.entity_name, ')'] }),
              ],
            }),
            H.jsx('button', { className: 'expand-button', children: o ? '<' : '>' }),
          ],
        }),
        o &&
          H.jsx('div', {
            className: `description ${o ? 'open' : ''}`,
            children: H.jsx('p', { children: i.description }),
          }),
      ],
    })
  },
  Y0 = ({ entity: i }) => {
    const [o, d] = O.useState([]),
      [f, s] = O.useState(!0),
      [y, b] = O.useState(null)
    return (
      O.useEffect(() => {
        const x = new AbortController()
        return (
          s(!0),
          b(null),
          j0(i, x.signal)
            .then(g => d(g))
            .catch(g => {
              g.name !== 'AbortError' && (b(g.message), d([]))
            })
            .finally(() => s(!1)),
          () => x.abort()
        )
      }, [i]),
      f
        ? H.jsx('div', {
            className: 'message loading',
            children: H.jsx('h3', { children: 'Cargando reportes...' }),
          })
        : y
          ? H.jsx('div', {
              className: 'message error',
              children: H.jsxs('h3', { children: ['⚠️ ', y] }),
            })
          : H.jsxs('div', {
              className: 'list-container',
              children: [
                o.length === 0 && H.jsx('p', { children: 'No hay quejas registradas.' }),
                o.map(x => H.jsx(B0, { complaint: x }, x.id)),
              ],
            })
    )
  }
function G0() {
  const [i, o] = O.useState('Todas')
  return H.jsxs('div', {
    className: 'home-page',
    children: [
      H.jsx('header', { className: 'title', children: H.jsx(C0, {}) }),
      H.jsxs('main', {
        className: 'main-content',
        children: [
          H.jsx('div', { className: 'filter-bar', children: H.jsx(L0, { onChange: o }) }),
          H.jsx('div', { className: 'content', children: H.jsx(Y0, { entity: i }) }),
        ],
      }),
      H.jsxs('footer', {
        className: 'footer',
        children: [H.jsx('h3', { children: 'Footer' }), H.jsx('h3', { children: 'Footer' })],
      }),
    ],
  })
}
var jf = { exports: {} },
  Hf,
  ch
function w0() {
  if (ch) return Hf
  ch = 1
  var i = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  return ((Hf = i), Hf)
}
var qf, fh
function X0() {
  if (fh) return qf
  fh = 1
  var i = w0()
  function o() {}
  function d() {}
  return (
    (d.resetWarningCache = o),
    (qf = function () {
      function f(b, x, g, h, T, D) {
        if (D !== i) {
          var M = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          )
          throw ((M.name = 'Invariant Violation'), M)
        }
      }
      f.isRequired = f
      function s() {
        return f
      }
      var y = {
        array: f,
        bigint: f,
        bool: f,
        func: f,
        number: f,
        object: f,
        string: f,
        symbol: f,
        any: f,
        arrayOf: s,
        element: f,
        elementType: f,
        instanceOf: s,
        node: f,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: d,
        resetWarningCache: o,
      }
      return ((y.PropTypes = y), y)
    }),
    qf
  )
}
var rh
function Q0() {
  return (rh || ((rh = 1), (jf.exports = X0()())), jf.exports)
}
var Z0 = Q0()
const le = ui(Z0)
var V0 = [
  'sitekey',
  'onChange',
  'theme',
  'type',
  'tabindex',
  'onExpired',
  'onErrored',
  'size',
  'stoken',
  'grecaptcha',
  'badge',
  'hl',
  'isolated',
]
function wf() {
  return (
    (wf = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var o = 1; o < arguments.length; o++) {
            var d = arguments[o]
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (i[f] = d[f])
          }
          return i
        }),
    wf.apply(this, arguments)
  )
}
function K0(i, o) {
  if (i == null) return {}
  var d = {},
    f = Object.keys(i),
    s,
    y
  for (y = 0; y < f.length; y++) ((s = f[y]), !(o.indexOf(s) >= 0) && (d[s] = i[s]))
  return d
}
function Iu(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return i
}
function J0(i, o) {
  ;((i.prototype = Object.create(o.prototype)), (i.prototype.constructor = i), Xf(i, o))
}
function Xf(i, o) {
  return (
    (Xf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (f, s) {
          return ((f.__proto__ = s), f)
        }),
    Xf(i, o)
  )
}
var ri = (function (i) {
  J0(o, i)
  function o() {
    var f
    return (
      (f = i.call(this) || this),
      (f.handleExpired = f.handleExpired.bind(Iu(f))),
      (f.handleErrored = f.handleErrored.bind(Iu(f))),
      (f.handleChange = f.handleChange.bind(Iu(f))),
      (f.handleRecaptchaRef = f.handleRecaptchaRef.bind(Iu(f))),
      f
    )
  }
  var d = o.prototype
  return (
    (d.getCaptchaFunction = function (s) {
      return this.props.grecaptcha
        ? this.props.grecaptcha.enterprise
          ? this.props.grecaptcha.enterprise[s]
          : this.props.grecaptcha[s]
        : null
    }),
    (d.getValue = function () {
      var s = this.getCaptchaFunction('getResponse')
      return s && this._widgetId !== void 0 ? s(this._widgetId) : null
    }),
    (d.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0 ? this._widgetId : null
    }),
    (d.execute = function () {
      var s = this.getCaptchaFunction('execute')
      if (s && this._widgetId !== void 0) return s(this._widgetId)
      this._executeRequested = !0
    }),
    (d.executeAsync = function () {
      var s = this
      return new Promise(function (y, b) {
        ;((s.executionResolve = y), (s.executionReject = b), s.execute())
      })
    }),
    (d.reset = function () {
      var s = this.getCaptchaFunction('reset')
      s && this._widgetId !== void 0 && s(this._widgetId)
    }),
    (d.forceReset = function () {
      var s = this.getCaptchaFunction('reset')
      s && s()
    }),
    (d.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
    }),
    (d.handleErrored = function () {
      ;(this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(), delete this.executionResolve, delete this.executionReject))
    }),
    (d.handleChange = function (s) {
      ;(this.props.onChange && this.props.onChange(s),
        this.executionResolve &&
          (this.executionResolve(s), delete this.executionReject, delete this.executionResolve))
    }),
    (d.explicitRender = function () {
      var s = this.getCaptchaFunction('render')
      if (s && this._widgetId === void 0) {
        var y = document.createElement('div')
        ;((this._widgetId = s(y, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          'expired-callback': this.handleExpired,
          'error-callback': this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(y))
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute())
    }),
    (d.componentDidMount = function () {
      this.explicitRender()
    }),
    (d.componentDidUpdate = function () {
      this.explicitRender()
    }),
    (d.handleRecaptchaRef = function (s) {
      this.captcha = s
    }),
    (d.render = function () {
      var s = this.props
      ;(s.sitekey,
        s.onChange,
        s.theme,
        s.type,
        s.tabindex,
        s.onExpired,
        s.onErrored,
        s.size,
        s.stoken,
        s.grecaptcha,
        s.badge,
        s.hl,
        s.isolated)
      var y = K0(s, V0)
      return O.createElement('div', wf({}, y, { ref: this.handleRecaptchaRef }))
    }),
    o
  )
})(O.Component)
ri.displayName = 'ReCAPTCHA'
ri.propTypes = {
  sitekey: le.string.isRequired,
  onChange: le.func,
  grecaptcha: le.object,
  theme: le.oneOf(['dark', 'light']),
  type: le.oneOf(['image', 'audio']),
  tabindex: le.number,
  onExpired: le.func,
  onErrored: le.func,
  size: le.oneOf(['compact', 'normal', 'invisible']),
  stoken: le.string,
  hl: le.string,
  badge: le.oneOf(['bottomright', 'bottomleft', 'inline']),
  isolated: le.bool,
}
ri.defaultProps = {
  onChange: function () {},
  theme: 'light',
  type: 'image',
  tabindex: 0,
  size: 'normal',
  badge: 'bottomright',
}
var Lf = { exports: {} },
  ht = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oh
function $0() {
  if (oh) return ht
  oh = 1
  var i = typeof Symbol == 'function' && Symbol.for,
    o = i ? Symbol.for('react.element') : 60103,
    d = i ? Symbol.for('react.portal') : 60106,
    f = i ? Symbol.for('react.fragment') : 60107,
    s = i ? Symbol.for('react.strict_mode') : 60108,
    y = i ? Symbol.for('react.profiler') : 60114,
    b = i ? Symbol.for('react.provider') : 60109,
    x = i ? Symbol.for('react.context') : 60110,
    g = i ? Symbol.for('react.async_mode') : 60111,
    h = i ? Symbol.for('react.concurrent_mode') : 60111,
    T = i ? Symbol.for('react.forward_ref') : 60112,
    D = i ? Symbol.for('react.suspense') : 60113,
    M = i ? Symbol.for('react.suspense_list') : 60120,
    Y = i ? Symbol.for('react.memo') : 60115,
    L = i ? Symbol.for('react.lazy') : 60116,
    X = i ? Symbol.for('react.block') : 60121,
    Z = i ? Symbol.for('react.fundamental') : 60117,
    B = i ? Symbol.for('react.responder') : 60118,
    I = i ? Symbol.for('react.scope') : 60119
  function K(C) {
    if (typeof C == 'object' && C !== null) {
      var rt = C.$$typeof
      switch (rt) {
        case o:
          switch (((C = C.type), C)) {
            case g:
            case h:
            case f:
            case y:
            case s:
            case D:
              return C
            default:
              switch (((C = C && C.$$typeof), C)) {
                case x:
                case T:
                case L:
                case Y:
                case b:
                  return C
                default:
                  return rt
              }
          }
        case d:
          return rt
      }
    }
  }
  function nt(C) {
    return K(C) === h
  }
  return (
    (ht.AsyncMode = g),
    (ht.ConcurrentMode = h),
    (ht.ContextConsumer = x),
    (ht.ContextProvider = b),
    (ht.Element = o),
    (ht.ForwardRef = T),
    (ht.Fragment = f),
    (ht.Lazy = L),
    (ht.Memo = Y),
    (ht.Portal = d),
    (ht.Profiler = y),
    (ht.StrictMode = s),
    (ht.Suspense = D),
    (ht.isAsyncMode = function (C) {
      return nt(C) || K(C) === g
    }),
    (ht.isConcurrentMode = nt),
    (ht.isContextConsumer = function (C) {
      return K(C) === x
    }),
    (ht.isContextProvider = function (C) {
      return K(C) === b
    }),
    (ht.isElement = function (C) {
      return typeof C == 'object' && C !== null && C.$$typeof === o
    }),
    (ht.isForwardRef = function (C) {
      return K(C) === T
    }),
    (ht.isFragment = function (C) {
      return K(C) === f
    }),
    (ht.isLazy = function (C) {
      return K(C) === L
    }),
    (ht.isMemo = function (C) {
      return K(C) === Y
    }),
    (ht.isPortal = function (C) {
      return K(C) === d
    }),
    (ht.isProfiler = function (C) {
      return K(C) === y
    }),
    (ht.isStrictMode = function (C) {
      return K(C) === s
    }),
    (ht.isSuspense = function (C) {
      return K(C) === D
    }),
    (ht.isValidElementType = function (C) {
      return (
        typeof C == 'string' ||
        typeof C == 'function' ||
        C === f ||
        C === h ||
        C === y ||
        C === s ||
        C === D ||
        C === M ||
        (typeof C == 'object' &&
          C !== null &&
          (C.$$typeof === L ||
            C.$$typeof === Y ||
            C.$$typeof === b ||
            C.$$typeof === x ||
            C.$$typeof === T ||
            C.$$typeof === Z ||
            C.$$typeof === B ||
            C.$$typeof === I ||
            C.$$typeof === X))
      )
    }),
    (ht.typeOf = K),
    ht
  )
}
var sh
function k0() {
  return (sh || ((sh = 1), (Lf.exports = $0())), Lf.exports)
}
var Bf, dh
function W0() {
  if (dh) return Bf
  dh = 1
  var i = k0(),
    o = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    d = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    f = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    y = {}
  ;((y[i.ForwardRef] = f), (y[i.Memo] = s))
  function b(L) {
    return i.isMemo(L) ? s : y[L.$$typeof] || o
  }
  var x = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    h = Object.getOwnPropertySymbols,
    T = Object.getOwnPropertyDescriptor,
    D = Object.getPrototypeOf,
    M = Object.prototype
  function Y(L, X, Z) {
    if (typeof X != 'string') {
      if (M) {
        var B = D(X)
        B && B !== M && Y(L, B, Z)
      }
      var I = g(X)
      h && (I = I.concat(h(X)))
      for (var K = b(L), nt = b(X), C = 0; C < I.length; ++C) {
        var rt = I[C]
        if (!d[rt] && !(Z && Z[rt]) && !(nt && nt[rt]) && !(K && K[rt])) {
          var ct = T(X, rt)
          try {
            x(L, rt, ct)
          } catch {}
        }
      }
    }
    return L
  }
  return ((Bf = Y), Bf)
}
var F0 = W0()
const P0 = ui(F0)
function Qf() {
  return (
    (Qf =
      Object.assign ||
      function (i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o]
          for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (i[f] = d[f])
        }
        return i
      }),
    Qf.apply(this, arguments)
  )
}
function I0(i, o) {
  if (i == null) return {}
  var d = {},
    f = Object.keys(i),
    s,
    y
  for (y = 0; y < f.length; y++) ((s = f[y]), !(o.indexOf(s) >= 0) && (d[s] = i[s]))
  return d
}
function tp(i, o) {
  ;((i.prototype = Object.create(o.prototype)), (i.prototype.constructor = i), (i.__proto__ = o))
}
var _e = {},
  ep = 0
function lp(i, o) {
  return (
    (o = o || {}),
    function (f) {
      var s = f.displayName || f.name || 'Component',
        y = (function (x) {
          tp(g, x)
          function g(T, D) {
            var M
            return ((M = x.call(this, T, D) || this), (M.state = {}), (M.__scriptURL = ''), M)
          }
          var h = g.prototype
          return (
            (h.asyncScriptLoaderGetScriptLoaderID = function () {
              return (
                this.__scriptLoaderID || (this.__scriptLoaderID = 'async-script-loader-' + ep++),
                this.__scriptLoaderID
              )
            }),
            (h.setupScriptURL = function () {
              return ((this.__scriptURL = typeof i == 'function' ? i() : i), this.__scriptURL)
            }),
            (h.asyncScriptLoaderHandleLoad = function (D) {
              var M = this
              this.setState(D, function () {
                return M.props.asyncScriptOnLoad && M.props.asyncScriptOnLoad(M.state)
              })
            }),
            (h.asyncScriptLoaderTriggerOnScriptLoaded = function () {
              var D = _e[this.__scriptURL]
              if (!D || !D.loaded) throw new Error('Script is not loaded.')
              for (var M in D.observers) D.observers[M](D)
              delete window[o.callbackName]
            }),
            (h.componentDidMount = function () {
              var D = this,
                M = this.setupScriptURL(),
                Y = this.asyncScriptLoaderGetScriptLoaderID(),
                L = o,
                X = L.globalName,
                Z = L.callbackName,
                B = L.scriptId
              if ((X && typeof window[X] < 'u' && (_e[M] = { loaded: !0, observers: {} }), _e[M])) {
                var I = _e[M]
                if (I && (I.loaded || I.errored)) {
                  this.asyncScriptLoaderHandleLoad(I)
                  return
                }
                I.observers[Y] = function (ct) {
                  return D.asyncScriptLoaderHandleLoad(ct)
                }
                return
              }
              var K = {}
              ;((K[Y] = function (ct) {
                return D.asyncScriptLoaderHandleLoad(ct)
              }),
                (_e[M] = { loaded: !1, observers: K }))
              var nt = document.createElement('script')
              ;((nt.src = M), (nt.async = !0))
              for (var C in o.attributes) nt.setAttribute(C, o.attributes[C])
              B && (nt.id = B)
              var rt = function (Tt) {
                if (_e[M]) {
                  var Rt = _e[M],
                    Gt = Rt.observers
                  for (var kt in Gt) Tt(Gt[kt]) && delete Gt[kt]
                }
              }
              ;(Z &&
                typeof window < 'u' &&
                (window[Z] = function () {
                  return D.asyncScriptLoaderTriggerOnScriptLoaded()
                }),
                (nt.onload = function () {
                  var ct = _e[M]
                  ct &&
                    ((ct.loaded = !0),
                    rt(function (Tt) {
                      return Z ? !1 : (Tt(ct), !0)
                    }))
                }),
                (nt.onerror = function () {
                  var ct = _e[M]
                  ct &&
                    ((ct.errored = !0),
                    rt(function (Tt) {
                      return (Tt(ct), !0)
                    }))
                }),
                document.body.appendChild(nt))
            }),
            (h.componentWillUnmount = function () {
              var D = this.__scriptURL
              if (o.removeOnUnmount === !0)
                for (var M = document.getElementsByTagName('script'), Y = 0; Y < M.length; Y += 1)
                  M[Y].src.indexOf(D) > -1 && M[Y].parentNode && M[Y].parentNode.removeChild(M[Y])
              var L = _e[D]
              L &&
                (delete L.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                o.removeOnUnmount === !0 && delete _e[D])
            }),
            (h.render = function () {
              var D = o.globalName,
                M = this.props
              M.asyncScriptOnLoad
              var Y = M.forwardedRef,
                L = I0(M, ['asyncScriptOnLoad', 'forwardedRef'])
              return (
                D && typeof window < 'u' && (L[D] = typeof window[D] < 'u' ? window[D] : void 0),
                (L.ref = Y),
                O.createElement(f, L)
              )
            }),
            g
          )
        })(O.Component),
        b = O.forwardRef(function (x, g) {
          return O.createElement(y, Qf({}, x, { forwardedRef: g }))
        })
      return (
        (b.displayName = 'AsyncScriptLoader(' + s + ')'),
        (b.propTypes = { asyncScriptOnLoad: le.func }),
        P0(b, f)
      )
    }
  )
}
var Zf = 'onloadcallback',
  ap = 'grecaptcha'
function Vf() {
  return (typeof window < 'u' && window.recaptchaOptions) || {}
}
function np() {
  var i = Vf(),
    o = i.useRecaptchaNet ? 'recaptcha.net' : 'www.google.com'
  return i.enterprise
    ? 'https://' + o + '/recaptcha/enterprise.js?onload=' + Zf + '&render=explicit'
    : 'https://' + o + '/recaptcha/api.js?onload=' + Zf + '&render=explicit'
}
const Nh = lp(np, {
  callbackName: Zf,
  globalName: ap,
  attributes: Vf().nonce ? { nonce: Vf().nonce } : {},
})(ri)
function up() {
  const [i, o] = O.useState([]),
    [d, f] = O.useState(!0),
    [s, y] = O.useState(null),
    [b, x] = O.useState(null),
    g = h => {
      x(h)
    }
  return (
    O.useEffect(() => {
      if (!b) return
      const h = new AbortController()
      return (
        f(!0),
        y(null),
        H0(h.signal)
          .then(T => o(T))
          .catch(T => {
            T.name !== 'AbortError' && (y(T.message), o([]))
          })
          .finally(() => f(!1)),
        () => h.abort()
      )
    }, [b]),
    b
      ? d
        ? H.jsx('div', {
            className: 'message loading',
            children: H.jsx('h3', { children: 'Cargando reportes...' }),
          })
        : s
          ? H.jsx('div', {
              className: 'message error',
              children: H.jsxs('h3', { children: ['⚠️ ', s] }),
            })
          : H.jsxs('div', {
              className: 'reports-page',
              children: [
                H.jsx('header', { children: H.jsx('h1', { children: 'TABLA DE REPORTES' }) }),
                H.jsx('div', {
                  className: 'table-container',
                  children: H.jsxs('table', {
                    className: 'reports-table',
                    children: [
                      H.jsx('thead', {
                        children: H.jsxs('tr', {
                          children: [
                            H.jsx('th', { children: '#' }),
                            H.jsx('th', { children: 'Nombre de la Entidad' }),
                            H.jsx('th', { children: 'Número de Quejas' }),
                          ],
                        }),
                      }),
                      H.jsx('tbody', {
                        children: i.map(h =>
                          H.jsxs(
                            'tr',
                            {
                              children: [
                                H.jsx('td', { children: h.id }),
                                H.jsx('td', { children: h.name }),
                                H.jsx('td', { children: h.complaints }),
                              ],
                            },
                            h.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                H.jsxs('footer', {
                  className: 'footer',
                  children: [
                    H.jsx('h3', { children: 'Footer' }),
                    H.jsx('h3', { children: 'Footer' }),
                  ],
                }),
              ],
            })
      : H.jsxs('div', {
          className: 'captcha-container',
          children: [
            H.jsx('h3', { children: 'Por favor valida el captcha para ver los reportes:' }),
            H.jsx(Nh, { sitekey: '6LfEW6orAAAAAAUIw3B0k13R7CZatIljI2YYR1nO', onChange: g }),
          ],
        })
  )
}
function ip() {
  const i = Th(),
    [o, d] = O.useState(''),
    [f, s] = O.useState(''),
    [y, b] = O.useState(''),
    [x, g] = O.useState([]),
    [h, T] = O.useState(!0),
    D = O.useRef()
  O.useEffect(() => {
    const Y = new AbortController()
    return (
      Mh(Y.signal)
        .then(L => g(L))
        .catch(L => {
          L.name !== 'AbortError' && g([])
        })
        .finally(() => T(!1)),
      () => Y.abort()
    )
  }, [])
  const M = async Y => {
    Y.preventDefault()
    const L = D.current.getValue()
    if (!L) {
      alert('Por favor, verifica el captcha.')
      return
    }
    try {
      ;(await q0({ entity_id: parseInt(o, 10), title: f, description: y, captcha: L }),
        alert('¡Queja enviada exitosamente!'),
        d(''),
        s(''),
        b(''),
        D.current.reset())
    } catch (X) {
      alert(X.message)
    }
  }
  return H.jsxs('div', {
    className: 'write-page',
    children: [
      H.jsx('header', { children: H.jsx('h1', { children: 'REDACTAR NUEVA QUEJA' }) }),
      H.jsxs('form', {
        className: 'form-section',
        onSubmit: M,
        children: [
          H.jsxs('div', {
            className: 'entity-form',
            children: [
              H.jsx('label', { children: 'Entidad' }),
              h
                ? H.jsx('span', { children: 'Cargando entidades...' })
                : H.jsxs('select', {
                    value: o,
                    onChange: Y => d(Y.target.value),
                    required: !0,
                    children: [
                      H.jsx('option', { value: '', children: 'Seleccione una entidad' }),
                      x.map(Y => H.jsx('option', { value: Y.id, children: Y.name }, Y.id)),
                    ],
                  }),
            ],
          }),
          H.jsxs('div', {
            className: 'title-form',
            children: [
              H.jsx('label', { children: 'Título de la queja' }),
              H.jsx('input', {
                type: 'text',
                value: f,
                onChange: Y => s(Y.target.value),
                maxLength: 100,
                placeholder: 'Escribe un título',
                required: !0,
              }),
            ],
          }),
          H.jsxs('div', {
            className: 'description-form',
            children: [
              H.jsx('label', { children: 'Descripción y detalles' }),
              H.jsx('textarea', {
                value: y,
                onChange: Y => b(Y.target.value),
                maxLength: 1500,
                placeholder: 'Escribe la descripción de la queja',
                required: !0,
              }),
              H.jsxs('p', { className: 'chars_counter', children: [y.length, '/1500'] }),
            ],
          }),
          H.jsx(Nh, {
            className: 'recaptcha',
            ref: D,
            sitekey: '6LfEW6orAAAAAAUIw3B0k13R7CZatIljI2YYR1nO',
          }),
          H.jsxs('div', {
            className: 'buttons',
            children: [
              H.jsx('button', { className: 'accept', type: 'submit', children: 'Aceptar' }),
              H.jsx('button', {
                className: 'cancel',
                type: 'button',
                onClick: () => i('/'),
                children: 'Cancelar',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
const cp = '/assets/chat-DeD00oHE.png'
function fp() {
  return H.jsx('header', {
    className: 'nav',
    children: H.jsxs('div', {
      className: 'nav__inner',
      children: [
        H.jsxs(Pf, {
          to: '/',
          className: 'brand',
          'aria-label': 'Inicio',
          children: [
            H.jsx('span', {
              className: 'brand__icon',
              'aria-hidden': !0,
              children: H.jsx('img', { src: cp, alt: 'Logo', width: '30', height: '30' }),
            }),
            H.jsx('span', { className: 'brand__text', children: 'SISTEMA DE QUEJAS SYX' }),
          ],
        }),
        H.jsxs('nav', {
          className: 'menu',
          children: [
            H.jsx(ai, {
              to: '/',
              className: ({ isActive: i }) => (i ? 'menu__link is-active' : 'menu__link'),
              children: 'Quejas',
            }),
            H.jsx(ai, {
              to: '/reports',
              className: ({ isActive: i }) => (i ? 'menu__link is-active' : 'menu__link'),
              children: 'Reportes',
            }),
            H.jsxs(ai, {
              to: '/write',
              className: ({ isActive: i }) => (i ? 'write__link is-active' : 'write__link'),
              'aria-label': 'Redactar',
              children: [
                H.jsx('span', {
                  className: 'write__icon',
                  'aria-hidden': !0,
                  children: H.jsx('svg', {
                    width: '20',
                    height: '20',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    children: H.jsx('path', {
                      d: 'M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z',
                    }),
                  }),
                }),
                H.jsx('span', { className: 'write__text', children: 'Escribir' }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function rp() {
  return H.jsxs(A0, {
    children: [
      H.jsx(fp, {}),
      H.jsxs(e0, {
        children: [
          H.jsx(ti, { path: '/', element: H.jsx(G0, {}) }),
          H.jsx(ti, { path: '/reports', element: H.jsx(up, {}) }),
          H.jsx(ti, { path: '/write', element: H.jsx(ip, {}) }),
        ],
      }),
    ],
  })
}
sv.createRoot(document.getElementById('root')).render(
  H.jsx(av.StrictMode, { children: H.jsx(rp, {}) })
)
