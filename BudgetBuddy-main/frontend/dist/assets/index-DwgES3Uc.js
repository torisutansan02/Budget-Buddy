function Xf(i, a) {
  for (var s = 0; s < a.length; s++) {
    const c = a[s];
    if (typeof c != 'string' && !Array.isArray(c)) {
      for (const f in c)
        if (f !== 'default' && !(f in i)) {
          const p = Object.getOwnPropertyDescriptor(c, f);
          p && Object.defineProperty(i, f, p.get ? p : { enumerable: !0, get: () => c[f] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const p of f)
      if (p.type === 'childList')
        for (const m of p.addedNodes) m.tagName === 'LINK' && m.rel === 'modulepreload' && c(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const p = {};
    return (
      f.integrity && (p.integrity = f.integrity),
      f.referrerPolicy && (p.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (p.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (p.credentials = 'omit')
          : (p.credentials = 'same-origin'),
      p
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const p = s(f);
    fetch(f.href, p);
  }
})();
function Tc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var Gi = { exports: {} },
  Lr = {},
  qi = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Gf() {
  if (sc) return re;
  sc = 1;
  var i = Symbol.for('react.element'),
    a = Symbol.for('react.portal'),
    s = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    p = Symbol.for('react.provider'),
    m = Symbol.for('react.context'),
    y = Symbol.for('react.forward_ref'),
    w = Symbol.for('react.suspense'),
    C = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    N = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != 'object'
      ? null
      : ((v = (N && v[N]) || v['@@iterator']), typeof v == 'function' ? v : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    R = {};
  function z(v, T, H) {
    (this.props = v), (this.context = T), (this.refs = R), (this.updater = H || $);
  }
  (z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (v, T) {
      if (typeof v != 'object' && typeof v != 'function' && v != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, v, T, 'setState');
    }),
    (z.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate');
    });
  function J() {}
  J.prototype = z.prototype;
  function q(v, T, H) {
    (this.props = v), (this.context = T), (this.refs = R), (this.updater = H || $);
  }
  var te = (q.prototype = new J());
  (te.constructor = q), F(te, z.prototype), (te.isPureReactComponent = !0);
  var b = Array.isArray,
    fe = Object.prototype.hasOwnProperty,
    ye = { current: null },
    ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(v, T, H) {
    var ne,
      Q = {},
      le = null,
      oe = null;
    if (T != null)
      for (ne in (T.ref !== void 0 && (oe = T.ref), T.key !== void 0 && (le = '' + T.key), T))
        fe.call(T, ne) && !ee.hasOwnProperty(ne) && (Q[ne] = T[ne]);
    var ce = arguments.length - 2;
    if (ce === 1) Q.children = H;
    else if (1 < ce) {
      for (var ae = Array(ce), We = 0; We < ce; We++) ae[We] = arguments[We + 2];
      Q.children = ae;
    }
    if (v && v.defaultProps)
      for (ne in ((ce = v.defaultProps), ce)) Q[ne] === void 0 && (Q[ne] = ce[ne]);
    return { $$typeof: i, type: v, key: le, ref: oe, props: Q, _owner: ye.current };
  }
  function nt(v, T) {
    return { $$typeof: i, type: v.type, key: T, ref: v.ref, props: v.props, _owner: v._owner };
  }
  function Le(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === i;
  }
  function Nt(v) {
    var T = { '=': '=0', ':': '=2' };
    return (
      '$' +
      v.replace(/[=:]/g, function (H) {
        return T[H];
      })
    );
  }
  var Je = /\/+/g;
  function Ue(v, T) {
    return typeof v == 'object' && v !== null && v.key != null ? Nt('' + v.key) : T.toString(36);
  }
  function Be(v, T, H, ne, Q) {
    var le = typeof v;
    (le === 'undefined' || le === 'boolean') && (v = null);
    var oe = !1;
    if (v === null) oe = !0;
    else
      switch (le) {
        case 'string':
        case 'number':
          oe = !0;
          break;
        case 'object':
          switch (v.$$typeof) {
            case i:
            case a:
              oe = !0;
          }
      }
    if (oe)
      return (
        (oe = v),
        (Q = Q(oe)),
        (v = ne === '' ? '.' + Ue(oe, 0) : ne),
        b(Q)
          ? ((H = ''),
            v != null && (H = v.replace(Je, '$&/') + '/'),
            Be(Q, T, H, '', function (We) {
              return We;
            }))
          : Q != null &&
            (Le(Q) &&
              (Q = nt(
                Q,
                H +
                  (!Q.key || (oe && oe.key === Q.key)
                    ? ''
                    : ('' + Q.key).replace(Je, '$&/') + '/') +
                  v
              )),
            T.push(Q)),
        1
      );
    if (((oe = 0), (ne = ne === '' ? '.' : ne + ':'), b(v)))
      for (var ce = 0; ce < v.length; ce++) {
        le = v[ce];
        var ae = ne + Ue(le, ce);
        oe += Be(le, T, H, ae, Q);
      }
    else if (((ae = P(v)), typeof ae == 'function'))
      for (v = ae.call(v), ce = 0; !(le = v.next()).done; )
        (le = le.value), (ae = ne + Ue(le, ce++)), (oe += Be(le, T, H, ae, Q));
    else if (le === 'object')
      throw (
        ((T = String(v)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (T === '[object Object]' ? 'object with keys {' + Object.keys(v).join(', ') + '}' : T) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return oe;
  }
  function rt(v, T, H) {
    if (v == null) return v;
    var ne = [],
      Q = 0;
    return (
      Be(v, ne, '', '', function (le) {
        return T.call(H, le, Q++);
      }),
      ne
    );
  }
  function Te(v) {
    if (v._status === -1) {
      var T = v._result;
      (T = T()),
        T.then(
          function (H) {
            (v._status === 0 || v._status === -1) && ((v._status = 1), (v._result = H));
          },
          function (H) {
            (v._status === 0 || v._status === -1) && ((v._status = 2), (v._result = H));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = T));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var me = { current: null },
    O = { transition: null },
    Y = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: O, ReactCurrentOwner: ye };
  return (
    (re.Children = {
      map: rt,
      forEach: function (v, T, H) {
        rt(
          v,
          function () {
            T.apply(this, arguments);
          },
          H
        );
      },
      count: function (v) {
        var T = 0;
        return (
          rt(v, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (v) {
        return (
          rt(v, function (T) {
            return T;
          }) || []
        );
      },
      only: function (v) {
        if (!Le(v))
          throw Error('React.Children.only expected to receive a single React element child.');
        return v;
      },
    }),
    (re.Component = z),
    (re.Fragment = s),
    (re.Profiler = f),
    (re.PureComponent = q),
    (re.StrictMode = c),
    (re.Suspense = w),
    (re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (re.cloneElement = function (v, T, H) {
      if (v == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + v + '.'
        );
      var ne = F({}, v.props),
        Q = v.key,
        le = v.ref,
        oe = v._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((le = T.ref), (oe = ye.current)),
          T.key !== void 0 && (Q = '' + T.key),
          v.type && v.type.defaultProps)
        )
          var ce = v.type.defaultProps;
        for (ae in T)
          fe.call(T, ae) &&
            !ee.hasOwnProperty(ae) &&
            (ne[ae] = T[ae] === void 0 && ce !== void 0 ? ce[ae] : T[ae]);
      }
      var ae = arguments.length - 2;
      if (ae === 1) ne.children = H;
      else if (1 < ae) {
        ce = Array(ae);
        for (var We = 0; We < ae; We++) ce[We] = arguments[We + 2];
        ne.children = ce;
      }
      return { $$typeof: i, type: v.type, key: Q, ref: le, props: ne, _owner: oe };
    }),
    (re.createContext = function (v) {
      return (
        (v = {
          $$typeof: m,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: p, _context: v }),
        (v.Consumer = v)
      );
    }),
    (re.createElement = Ce),
    (re.createFactory = function (v) {
      var T = Ce.bind(null, v);
      return (T.type = v), T;
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (v) {
      return { $$typeof: y, render: v };
    }),
    (re.isValidElement = Le),
    (re.lazy = function (v) {
      return { $$typeof: _, _payload: { _status: -1, _result: v }, _init: Te };
    }),
    (re.memo = function (v, T) {
      return { $$typeof: C, type: v, compare: T === void 0 ? null : T };
    }),
    (re.startTransition = function (v) {
      var T = O.transition;
      O.transition = {};
      try {
        v();
      } finally {
        O.transition = T;
      }
    }),
    (re.unstable_act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (re.useCallback = function (v, T) {
      return me.current.useCallback(v, T);
    }),
    (re.useContext = function (v) {
      return me.current.useContext(v);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (v) {
      return me.current.useDeferredValue(v);
    }),
    (re.useEffect = function (v, T) {
      return me.current.useEffect(v, T);
    }),
    (re.useId = function () {
      return me.current.useId();
    }),
    (re.useImperativeHandle = function (v, T, H) {
      return me.current.useImperativeHandle(v, T, H);
    }),
    (re.useInsertionEffect = function (v, T) {
      return me.current.useInsertionEffect(v, T);
    }),
    (re.useLayoutEffect = function (v, T) {
      return me.current.useLayoutEffect(v, T);
    }),
    (re.useMemo = function (v, T) {
      return me.current.useMemo(v, T);
    }),
    (re.useReducer = function (v, T, H) {
      return me.current.useReducer(v, T, H);
    }),
    (re.useRef = function (v) {
      return me.current.useRef(v);
    }),
    (re.useState = function (v) {
      return me.current.useState(v);
    }),
    (re.useSyncExternalStore = function (v, T, H) {
      return me.current.useSyncExternalStore(v, T, H);
    }),
    (re.useTransition = function () {
      return me.current.useTransition();
    }),
    (re.version = '18.2.0'),
    re
  );
}
var ac;
function as() {
  return ac || ((ac = 1), (qi.exports = Gf())), qi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function qf() {
  if (uc) return Lr;
  uc = 1;
  var i = as(),
    a = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    c = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(y, w, C) {
    var _,
      N = {},
      P = null,
      $ = null;
    C !== void 0 && (P = '' + C),
      w.key !== void 0 && (P = '' + w.key),
      w.ref !== void 0 && ($ = w.ref);
    for (_ in w) c.call(w, _) && !p.hasOwnProperty(_) && (N[_] = w[_]);
    if (y && y.defaultProps) for (_ in ((w = y.defaultProps), w)) N[_] === void 0 && (N[_] = w[_]);
    return { $$typeof: a, type: y, key: P, ref: $, props: N, _owner: f.current };
  }
  return (Lr.Fragment = s), (Lr.jsx = m), (Lr.jsxs = m), Lr;
}
var cc;
function Zf() {
  return cc || ((cc = 1), (Gi.exports = qf())), Gi.exports;
}
var d = Zf(),
  S = as();
const Dc = Tc(S),
  bf = Xf({ __proto__: null, default: Dc }, [S]);
var Gl = {},
  Zi = { exports: {} },
  tt = {},
  bi = { exports: {} },
  es = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc;
function ep() {
  return (
    dc ||
      ((dc = 1),
      (function (i) {
        function a(O, Y) {
          var v = O.length;
          O.push(Y);
          e: for (; 0 < v; ) {
            var T = (v - 1) >>> 1,
              H = O[T];
            if (0 < f(H, Y)) (O[T] = Y), (O[v] = H), (v = T);
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function c(O) {
          if (O.length === 0) return null;
          var Y = O[0],
            v = O.pop();
          if (v !== Y) {
            O[0] = v;
            e: for (var T = 0, H = O.length, ne = H >>> 1; T < ne; ) {
              var Q = 2 * (T + 1) - 1,
                le = O[Q],
                oe = Q + 1,
                ce = O[oe];
              if (0 > f(le, v))
                oe < H && 0 > f(ce, le)
                  ? ((O[T] = ce), (O[oe] = v), (T = oe))
                  : ((O[T] = le), (O[Q] = v), (T = Q));
              else if (oe < H && 0 > f(ce, v)) (O[T] = ce), (O[oe] = v), (T = oe);
              else break e;
            }
          }
          return Y;
        }
        function f(O, Y) {
          var v = O.sortIndex - Y.sortIndex;
          return v !== 0 ? v : O.id - Y.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var p = performance;
          i.unstable_now = function () {
            return p.now();
          };
        } else {
          var m = Date,
            y = m.now();
          i.unstable_now = function () {
            return m.now() - y;
          };
        }
        var w = [],
          C = [],
          _ = 1,
          N = null,
          P = 3,
          $ = !1,
          F = !1,
          R = !1,
          z = typeof setTimeout == 'function' ? setTimeout : null,
          J = typeof clearTimeout == 'function' ? clearTimeout : null,
          q = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function te(O) {
          for (var Y = s(C); Y !== null; ) {
            if (Y.callback === null) c(C);
            else if (Y.startTime <= O) c(C), (Y.sortIndex = Y.expirationTime), a(w, Y);
            else break;
            Y = s(C);
          }
        }
        function b(O) {
          if (((R = !1), te(O), !F))
            if (s(w) !== null) (F = !0), Te(fe);
            else {
              var Y = s(C);
              Y !== null && me(b, Y.startTime - O);
            }
        }
        function fe(O, Y) {
          (F = !1), R && ((R = !1), J(Ce), (Ce = -1)), ($ = !0);
          var v = P;
          try {
            for (te(Y), N = s(w); N !== null && (!(N.expirationTime > Y) || (O && !Nt())); ) {
              var T = N.callback;
              if (typeof T == 'function') {
                (N.callback = null), (P = N.priorityLevel);
                var H = T(N.expirationTime <= Y);
                (Y = i.unstable_now()),
                  typeof H == 'function' ? (N.callback = H) : N === s(w) && c(w),
                  te(Y);
              } else c(w);
              N = s(w);
            }
            if (N !== null) var ne = !0;
            else {
              var Q = s(C);
              Q !== null && me(b, Q.startTime - Y), (ne = !1);
            }
            return ne;
          } finally {
            (N = null), (P = v), ($ = !1);
          }
        }
        var ye = !1,
          ee = null,
          Ce = -1,
          nt = 5,
          Le = -1;
        function Nt() {
          return !(i.unstable_now() - Le < nt);
        }
        function Je() {
          if (ee !== null) {
            var O = i.unstable_now();
            Le = O;
            var Y = !0;
            try {
              Y = ee(!0, O);
            } finally {
              Y ? Ue() : ((ye = !1), (ee = null));
            }
          } else ye = !1;
        }
        var Ue;
        if (typeof q == 'function')
          Ue = function () {
            q(Je);
          };
        else if (typeof MessageChannel < 'u') {
          var Be = new MessageChannel(),
            rt = Be.port2;
          (Be.port1.onmessage = Je),
            (Ue = function () {
              rt.postMessage(null);
            });
        } else
          Ue = function () {
            z(Je, 0);
          };
        function Te(O) {
          (ee = O), ye || ((ye = !0), Ue());
        }
        function me(O, Y) {
          Ce = z(function () {
            O(i.unstable_now());
          }, Y);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            F || $ || ((F = !0), Te(fe));
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (nt = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(w);
          }),
          (i.unstable_next = function (O) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = P;
            }
            var v = P;
            P = Y;
            try {
              return O();
            } finally {
              P = v;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (O, Y) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var v = P;
            P = O;
            try {
              return Y();
            } finally {
              P = v;
            }
          }),
          (i.unstable_scheduleCallback = function (O, Y, v) {
            var T = i.unstable_now();
            switch (
              (typeof v == 'object' && v !== null
                ? ((v = v.delay), (v = typeof v == 'number' && 0 < v ? T + v : T))
                : (v = T),
              O)
            ) {
              case 1:
                var H = -1;
                break;
              case 2:
                H = 250;
                break;
              case 5:
                H = 1073741823;
                break;
              case 4:
                H = 1e4;
                break;
              default:
                H = 5e3;
            }
            return (
              (H = v + H),
              (O = {
                id: _++,
                callback: Y,
                priorityLevel: O,
                startTime: v,
                expirationTime: H,
                sortIndex: -1,
              }),
              v > T
                ? ((O.sortIndex = v),
                  a(C, O),
                  s(w) === null && O === s(C) && (R ? (J(Ce), (Ce = -1)) : (R = !0), me(b, v - T)))
                : ((O.sortIndex = H), a(w, O), F || $ || ((F = !0), Te(fe))),
              O
            );
          }),
          (i.unstable_shouldYield = Nt),
          (i.unstable_wrapCallback = function (O) {
            var Y = P;
            return function () {
              var v = P;
              P = Y;
              try {
                return O.apply(this, arguments);
              } finally {
                P = v;
              }
            };
          });
      })(es)),
    es
  );
}
var fc;
function tp() {
  return fc || ((fc = 1), (bi.exports = ep())), bi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function np() {
  if (pc) return tt;
  pc = 1;
  var i = as(),
    a = tp();
  function s(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var c = new Set(),
    f = {};
  function p(e, t) {
    m(e, t), m(e + 'Capture', t);
  }
  function m(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var y = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    w = Object.prototype.hasOwnProperty,
    C =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    N = {};
  function P(e) {
    return w.call(N, e) ? !0 : w.call(_, e) ? !1 : C.test(e) ? (N[e] = !0) : ((_[e] = !0), !1);
  }
  function $(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function F(e, t, n, r) {
    if (t === null || typeof t > 'u' || $(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function R(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var z = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      z[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      z[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      z[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (e) {
        z[e] = new R(e, 2, !1, e, null, !1, !1);
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        z[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      z[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      z[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      z[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      z[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var J = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(J, q);
      z[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(J, q);
        z[t] = new R(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(J, q);
      z[t] = new R(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      z[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (z.xlinkHref = new R('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      z[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function te(e, t, n, r) {
    var l = z.hasOwnProperty(t) ? z[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (F(t, n, l, r) && (n = null),
      r || l === null
        ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fe = Symbol.for('react.element'),
    ye = Symbol.for('react.portal'),
    ee = Symbol.for('react.fragment'),
    Ce = Symbol.for('react.strict_mode'),
    nt = Symbol.for('react.profiler'),
    Le = Symbol.for('react.provider'),
    Nt = Symbol.for('react.context'),
    Je = Symbol.for('react.forward_ref'),
    Ue = Symbol.for('react.suspense'),
    Be = Symbol.for('react.suspense_list'),
    rt = Symbol.for('react.memo'),
    Te = Symbol.for('react.lazy'),
    me = Symbol.for('react.offscreen'),
    O = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (O && e[O]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var v = Object.assign,
    T;
  function H(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || '';
      }
    return (
      `
` +
      T +
      e
    );
  }
  var ne = !1;
  function Q(e, t) {
    if (!e || ne) return '';
    ne = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var r = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            r = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          r = j;
        }
        e();
      }
    } catch (j) {
      if (j && r && typeof j.stack == 'string') {
        for (
          var l = j.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            h = o.length - 1;
          1 <= u && 0 <= h && l[u] !== o[h];

        )
          h--;
        for (; 1 <= u && 0 <= h; u--, h--)
          if (l[u] !== o[h]) {
            if (u !== 1 || h !== 1)
              do
                if ((u--, h--, 0 > h || l[u] !== o[h])) {
                  var g =
                    `
` + l[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      g.includes('<anonymous>') &&
                      (g = g.replace('<anonymous>', e.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= h);
            break;
          }
      }
    } finally {
      (ne = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? H(e) : '';
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H('Lazy');
      case 13:
        return H('Suspense');
      case 19:
        return H('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = Q(e.type, !1)), e;
      case 11:
        return (e = Q(e.type.render, !1)), e;
      case 1:
        return (e = Q(e.type, !0)), e;
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ee:
        return 'Fragment';
      case ye:
        return 'Portal';
      case nt:
        return 'Profiler';
      case Ce:
        return 'StrictMode';
      case Ue:
        return 'Suspense';
      case Be:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Nt:
          return (e.displayName || 'Context') + '.Consumer';
        case Le:
          return (e._context.displayName || 'Context') + '.Provider';
        case Je:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case rt:
          return (t = e.displayName || null), t !== null ? t : oe(e.type) || 'Memo';
        case Te:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function ce(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return oe(t);
      case 8:
        return t === Ce ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function ae(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function We(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function no(e) {
    var t = We(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = '' + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = '' + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function K(e) {
    e._valueTracker || (e._valueTracker = no(e));
  }
  function pe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = We(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function ie(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ke(e, t) {
    var n = t.checked;
    return v({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function wn(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function hs(e, t) {
    (t = t.checked), t != null && te(e, 'checked', t, !1);
  }
  function ro(e, t) {
    hs(e, t);
    var n = ae(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? lo(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && lo(e, t.type, ae(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ms(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function lo(e, t, n) {
    (t !== 'number' || ie(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Yn = Array.isArray;
  function xn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return v({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function vs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Yn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function gs(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function ws(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function io(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? ws(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var $r,
    xs = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          $r = $r || document.createElement('div'),
            $r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = $r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Kn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Zc = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Xn).forEach(function (e) {
    Zc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
    });
  });
  function Ss(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Cs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Ss(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var bc = v(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function so(e, t) {
    if (t) {
      if (bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(s(62));
    }
  }
  function ao(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fo = null,
    Sn = null,
    Cn = null;
  function Es(e) {
    if ((e = gr(e))) {
      if (typeof fo != 'function') throw Error(s(280));
      var t = e.stateNode;
      t && ((t = dl(t)), fo(e.stateNode, e.type, t));
    }
  }
  function ks(e) {
    Sn ? (Cn ? Cn.push(e) : (Cn = [e])) : (Sn = e);
  }
  function js() {
    if (Sn) {
      var e = Sn,
        t = Cn;
      if (((Cn = Sn = null), Es(e), t)) for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Ns(e, t) {
    return e(t);
  }
  function _s() {}
  var po = !1;
  function Ps(e, t, n) {
    if (po) return e(t, n);
    po = !0;
    try {
      return Ns(e, t, n);
    } finally {
      (po = !1), (Sn !== null || Cn !== null) && (_s(), js());
    }
  }
  function Gn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = dl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(s(231, t, typeof n));
    return n;
  }
  var ho = !1;
  if (y)
    try {
      var qn = {};
      Object.defineProperty(qn, 'passive', {
        get: function () {
          ho = !0;
        },
      }),
        window.addEventListener('test', qn, qn),
        window.removeEventListener('test', qn, qn);
    } catch {
      ho = !1;
    }
  function ed(e, t, n, r, l, o, u, h, g) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (I) {
      this.onError(I);
    }
  }
  var Zn = !1,
    Vr = null,
    Hr = !1,
    mo = null,
    td = {
      onError: function (e) {
        (Zn = !0), (Vr = e);
      },
    };
  function nd(e, t, n, r, l, o, u, h, g) {
    (Zn = !1), (Vr = null), ed.apply(td, arguments);
  }
  function rd(e, t, n, r, l, o, u, h, g) {
    if ((nd.apply(this, arguments), Zn)) {
      if (Zn) {
        var j = Vr;
        (Zn = !1), (Vr = null);
      } else throw Error(s(198));
      Hr || ((Hr = !0), (mo = j));
    }
  }
  function on(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ts(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ds(e) {
    if (on(e) !== e) throw Error(s(188));
  }
  function ld(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = on(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ds(l), e;
          if (o === r) return Ds(l), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, h = l.child; h; ) {
          if (h === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (h === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          h = h.sibling;
        }
        if (!u) {
          for (h = o.child; h; ) {
            if (h === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (h === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            h = h.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Is(e) {
    return (e = ld(e)), e !== null ? Ls(e) : null;
  }
  function Ls(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ls(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ms = a.unstable_scheduleCallback,
    zs = a.unstable_cancelCallback,
    od = a.unstable_shouldYield,
    id = a.unstable_requestPaint,
    je = a.unstable_now,
    sd = a.unstable_getCurrentPriorityLevel,
    vo = a.unstable_ImmediatePriority,
    Rs = a.unstable_UserBlockingPriority,
    Qr = a.unstable_NormalPriority,
    ad = a.unstable_LowPriority,
    Fs = a.unstable_IdlePriority,
    Jr = null,
    St = null;
  function ud(e) {
    if (St && typeof St.onCommitFiberRoot == 'function')
      try {
        St.onCommitFiberRoot(Jr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ht = Math.clz32 ? Math.clz32 : fd,
    cd = Math.log,
    dd = Math.LN2;
  function fd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((cd(e) / dd) | 0)) | 0;
  }
  var Yr = 64,
    Kr = 4194304;
  function bn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var h = u & ~l;
      h !== 0 ? (r = bn(h)) : ((o &= u), o !== 0 && (r = bn(o)));
    } else (u = n & ~l), u !== 0 ? (r = bn(u)) : o !== 0 && (r = bn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function pd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hd(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - ht(o),
        h = 1 << u,
        g = l[u];
      g === -1
        ? ((h & n) === 0 || (h & r) !== 0) && (l[u] = pd(h, t))
        : g <= t && (e.expiredLanes |= h),
        (o &= ~h);
    }
  }
  function go(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Os() {
    var e = Yr;
    return (Yr <<= 1), (Yr & 4194240) === 0 && (Yr = 64), e;
  }
  function yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function er(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ht(t)),
      (e[t] = n);
  }
  function md(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ht(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function wo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var de = 0;
  function As(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var Us,
    xo,
    Bs,
    Ws,
    $s,
    So = !1,
    Gr = [],
    Rt = null,
    Ft = null,
    Ot = null,
    tr = new Map(),
    nr = new Map(),
    At = [],
    vd =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Vs(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Rt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ft = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ot = null;
        break;
      case 'pointerover':
      case 'pointerout':
        tr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        nr.delete(t.pointerId);
    }
  }
  function rr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = gr(t)), t !== null && xo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function gd(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (Rt = rr(Rt, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Ft = rr(Ft, e, t, n, r, l)), !0;
      case 'mouseover':
        return (Ot = rr(Ot, e, t, n, r, l)), !0;
      case 'pointerover':
        var o = l.pointerId;
        return tr.set(o, rr(tr.get(o) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (o = l.pointerId), nr.set(o, rr(nr.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Hs(e) {
    var t = sn(e.target);
    if (t !== null) {
      var n = on(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ts(n)), t !== null)) {
            (e.blockedOn = t),
              $s(e.priority, function () {
                Bs(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (uo = r), n.target.dispatchEvent(r), (uo = null);
      } else return (t = gr(n)), t !== null && xo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Qs(e, t, n) {
    qr(e) && n.delete(t);
  }
  function yd() {
    (So = !1),
      Rt !== null && qr(Rt) && (Rt = null),
      Ft !== null && qr(Ft) && (Ft = null),
      Ot !== null && qr(Ot) && (Ot = null),
      tr.forEach(Qs),
      nr.forEach(Qs);
  }
  function lr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So || ((So = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, yd)));
  }
  function or(e) {
    function t(l) {
      return lr(l, e);
    }
    if (0 < Gr.length) {
      lr(Gr[0], e);
      for (var n = 1; n < Gr.length; n++) {
        var r = Gr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Rt !== null && lr(Rt, e),
        Ft !== null && lr(Ft, e),
        Ot !== null && lr(Ot, e),
        tr.forEach(t),
        nr.forEach(t),
        n = 0;
      n < At.length;
      n++
    )
      (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
      Hs(n), n.blockedOn === null && At.shift();
  }
  var En = b.ReactCurrentBatchConfig,
    Zr = !0;
  function wd(e, t, n, r) {
    var l = de,
      o = En.transition;
    En.transition = null;
    try {
      (de = 1), Co(e, t, n, r);
    } finally {
      (de = l), (En.transition = o);
    }
  }
  function xd(e, t, n, r) {
    var l = de,
      o = En.transition;
    En.transition = null;
    try {
      (de = 4), Co(e, t, n, r);
    } finally {
      (de = l), (En.transition = o);
    }
  }
  function Co(e, t, n, r) {
    if (Zr) {
      var l = Eo(e, t, n, r);
      if (l === null) Bo(e, t, r, br, n), Vs(e, r);
      else if (gd(l, e, t, n, r)) r.stopPropagation();
      else if ((Vs(e, r), t & 4 && -1 < vd.indexOf(e))) {
        for (; l !== null; ) {
          var o = gr(l);
          if (
            (o !== null && Us(o), (o = Eo(e, t, n, r)), o === null && Bo(e, t, r, br, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Bo(e, t, r, null, n);
    }
  }
  var br = null;
  function Eo(e, t, n, r) {
    if (((br = null), (e = co(r)), (e = sn(e)), e !== null))
      if (((t = on(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ts(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (br = e), null;
  }
  function Js(e) {
    switch (e) {
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
        return 1;
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
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (sd()) {
          case vo:
            return 1;
          case Rs:
            return 4;
          case Qr:
          case ad:
            return 16;
          case Fs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ut = null,
    ko = null,
    el = null;
  function Ys() {
    if (el) return el;
    var e,
      t = ko,
      n = t.length,
      r,
      l = 'value' in Ut ? Ut.value : Ut.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (el = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function tl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nl() {
    return !0;
  }
  function Ks() {
    return !1;
  }
  function lt(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var h in e) e.hasOwnProperty(h) && ((n = e[h]), (this[h] = n ? n(o) : o[h]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? nl
          : Ks),
        (this.isPropagationStopped = Ks),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = nl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = nl));
        },
        persist: function () {},
        isPersistent: nl,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    jo = lt(kn),
    ir = v({}, kn, { view: 0, detail: 0 }),
    Sd = lt(ir),
    No,
    _o,
    sr,
    rl = v({}, ir, {
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
      getModifierState: To,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== sr &&
              (sr && e.type === 'mousemove'
                ? ((No = e.screenX - sr.screenX), (_o = e.screenY - sr.screenY))
                : (_o = No = 0),
              (sr = e)),
            No);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : _o;
      },
    }),
    Xs = lt(rl),
    Cd = v({}, rl, { dataTransfer: 0 }),
    Ed = lt(Cd),
    kd = v({}, ir, { relatedTarget: 0 }),
    Po = lt(kd),
    jd = v({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nd = lt(jd),
    _d = v({}, kn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Pd = lt(_d),
    Td = v({}, kn, { data: 0 }),
    Gs = lt(Td),
    Dd = {
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
    Id = {
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
    Ld = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Md(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ld[e]) ? !!t[e] : !1;
  }
  function To() {
    return Md;
  }
  var zd = v({}, ir, {
      key: function (e) {
        if (e.key) {
          var t = Dd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = tl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Id[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: To,
      charCode: function (e) {
        return e.type === 'keypress' ? tl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? tl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Rd = lt(zd),
    Fd = v({}, rl, {
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
    qs = lt(Fd),
    Od = v({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: To,
    }),
    Ad = lt(Od),
    Ud = v({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bd = lt(Ud),
    Wd = v({}, rl, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    $d = lt(Wd),
    Vd = [9, 13, 27, 32],
    Do = y && 'CompositionEvent' in window,
    ar = null;
  y && 'documentMode' in document && (ar = document.documentMode);
  var Hd = y && 'TextEvent' in window && !ar,
    Zs = y && (!Do || (ar && 8 < ar && 11 >= ar)),
    bs = ' ',
    ea = !1;
  function ta(e, t) {
    switch (e) {
      case 'keyup':
        return Vd.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function na(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var jn = !1;
  function Qd(e, t) {
    switch (e) {
      case 'compositionend':
        return na(t);
      case 'keypress':
        return t.which !== 32 ? null : ((ea = !0), bs);
      case 'textInput':
        return (e = t.data), e === bs && ea ? null : e;
      default:
        return null;
    }
  }
  function Jd(e, t) {
    if (jn)
      return e === 'compositionend' || (!Do && ta(e, t))
        ? ((e = Ys()), (el = ko = Ut = null), (jn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Zs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Yd = {
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
  };
  function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Yd[e.type] : t === 'textarea';
  }
  function la(e, t, n, r) {
    ks(r),
      (t = al(t, 'onChange')),
      0 < t.length &&
        ((n = new jo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
  }
  var ur = null,
    cr = null;
  function Kd(e) {
    Ca(e, 0);
  }
  function ll(e) {
    var t = Dn(e);
    if (pe(t)) return e;
  }
  function Xd(e, t) {
    if (e === 'change') return t;
  }
  var oa = !1;
  if (y) {
    var Io;
    if (y) {
      var Lo = 'oninput' in document;
      if (!Lo) {
        var ia = document.createElement('div');
        ia.setAttribute('oninput', 'return;'), (Lo = typeof ia.oninput == 'function');
      }
      Io = Lo;
    } else Io = !1;
    oa = Io && (!document.documentMode || 9 < document.documentMode);
  }
  function sa() {
    ur && (ur.detachEvent('onpropertychange', aa), (cr = ur = null));
  }
  function aa(e) {
    if (e.propertyName === 'value' && ll(cr)) {
      var t = [];
      la(t, cr, e, co(e)), Ps(Kd, t);
    }
  }
  function Gd(e, t, n) {
    e === 'focusin'
      ? (sa(), (ur = t), (cr = n), ur.attachEvent('onpropertychange', aa))
      : e === 'focusout' && sa();
  }
  function qd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ll(cr);
  }
  function Zd(e, t) {
    if (e === 'click') return ll(t);
  }
  function bd(e, t) {
    if (e === 'input' || e === 'change') return ll(t);
  }
  function ef(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == 'function' ? Object.is : ef;
  function dr(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ua(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ca(e, t) {
    var n = ua(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ua(n);
    }
  }
  function da(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? da(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function fa() {
    for (var e = window, t = ie(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ie(e.document);
    }
    return t;
  }
  function Mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function tf(e) {
    var t = fa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && da(n.ownerDocument.documentElement, n)) {
      if (r !== null && Mo(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = ca(n, o));
          var u = ca(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var nf = y && 'documentMode' in document && 11 >= document.documentMode,
    Nn = null,
    zo = null,
    fr = null,
    Ro = !1;
  function pa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ro ||
      Nn == null ||
      Nn !== ie(r) ||
      ((r = Nn),
      'selectionStart' in r && Mo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fr && dr(fr, r)) ||
        ((fr = r),
        (r = al(zo, 'onSelect')),
        0 < r.length &&
          ((t = new jo('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Nn))));
  }
  function ol(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var _n = {
      animationend: ol('Animation', 'AnimationEnd'),
      animationiteration: ol('Animation', 'AnimationIteration'),
      animationstart: ol('Animation', 'AnimationStart'),
      transitionend: ol('Transition', 'TransitionEnd'),
    },
    Fo = {},
    ha = {};
  y &&
    ((ha = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete _n.animationend.animation,
      delete _n.animationiteration.animation,
      delete _n.animationstart.animation),
    'TransitionEvent' in window || delete _n.transitionend.transition);
  function il(e) {
    if (Fo[e]) return Fo[e];
    if (!_n[e]) return e;
    var t = _n[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ha) return (Fo[e] = t[n]);
    return e;
  }
  var ma = il('animationend'),
    va = il('animationiteration'),
    ga = il('animationstart'),
    ya = il('transitionend'),
    wa = new Map(),
    xa =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Bt(e, t) {
    wa.set(e, t), p(t, [e]);
  }
  for (var Oo = 0; Oo < xa.length; Oo++) {
    var Ao = xa[Oo],
      rf = Ao.toLowerCase(),
      lf = Ao[0].toUpperCase() + Ao.slice(1);
    Bt(rf, 'on' + lf);
  }
  Bt(ma, 'onAnimationEnd'),
    Bt(va, 'onAnimationIteration'),
    Bt(ga, 'onAnimationStart'),
    Bt('dblclick', 'onDoubleClick'),
    Bt('focusin', 'onFocus'),
    Bt('focusout', 'onBlur'),
    Bt(ya, 'onTransitionEnd'),
    m('onMouseEnter', ['mouseout', 'mouseover']),
    m('onMouseLeave', ['mouseout', 'mouseover']),
    m('onPointerEnter', ['pointerout', 'pointerover']),
    m('onPointerLeave', ['pointerout', 'pointerover']),
    p('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    p(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    p('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    p('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    p(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    p(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var pr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    of = new Set('cancel close invalid load scroll toggle'.split(' ').concat(pr));
  function Sa(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), rd(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ca(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var h = r[u],
              g = h.instance,
              j = h.currentTarget;
            if (((h = h.listener), g !== o && l.isPropagationStopped())) break e;
            Sa(l, h, j), (o = g);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((h = r[u]),
              (g = h.instance),
              (j = h.currentTarget),
              (h = h.listener),
              g !== o && l.isPropagationStopped())
            )
              break e;
            Sa(l, h, j), (o = g);
          }
      }
    }
    if (Hr) throw ((e = mo), (Hr = !1), (mo = null), e);
  }
  function ve(e, t) {
    var n = t[Jo];
    n === void 0 && (n = t[Jo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ea(t, e, 2, !1), n.add(r));
  }
  function Uo(e, t, n) {
    var r = 0;
    t && (r |= 4), Ea(n, e, r, t);
  }
  var sl = '_reactListening' + Math.random().toString(36).slice(2);
  function hr(e) {
    if (!e[sl]) {
      (e[sl] = !0),
        c.forEach(function (n) {
          n !== 'selectionchange' && (of.has(n) || Uo(n, !1, e), Uo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[sl] || ((t[sl] = !0), Uo('selectionchange', !1, t));
    }
  }
  function Ea(e, t, n, r) {
    switch (Js(t)) {
      case 1:
        var l = wd;
        break;
      case 4:
        l = xd;
        break;
      default:
        l = Co;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ho || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function Bo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var h = r.stateNode.containerInfo;
          if (h === l || (h.nodeType === 8 && h.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var g = u.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = u.stateNode.containerInfo),
                g === l || (g.nodeType === 8 && g.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; h !== null; ) {
            if (((u = sn(h)), u === null)) return;
            if (((g = u.tag), g === 5 || g === 6)) {
              r = o = u;
              continue e;
            }
            h = h.parentNode;
          }
        }
        r = r.return;
      }
    Ps(function () {
      var j = o,
        I = co(n),
        L = [];
      e: {
        var D = wa.get(e);
        if (D !== void 0) {
          var A = jo,
            B = e;
          switch (e) {
            case 'keypress':
              if (tl(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = Rd;
              break;
            case 'focusin':
              (B = 'focus'), (A = Po);
              break;
            case 'focusout':
              (B = 'blur'), (A = Po);
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Po;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              A = Xs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = Ed;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Ad;
              break;
            case ma:
            case va:
            case ga:
              A = Nd;
              break;
            case ya:
              A = Bd;
              break;
            case 'scroll':
              A = Sd;
              break;
            case 'wheel':
              A = $d;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = Pd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = qs;
          }
          var W = (t & 4) !== 0,
            Ne = !W && e === 'scroll',
            E = W ? (D !== null ? D + 'Capture' : null) : D;
          W = [];
          for (var x = j, k; x !== null; ) {
            k = x;
            var M = k.stateNode;
            if (
              (k.tag === 5 &&
                M !== null &&
                ((k = M), E !== null && ((M = Gn(x, E)), M != null && W.push(mr(x, M, k)))),
              Ne)
            )
              break;
            x = x.return;
          }
          0 < W.length && ((D = new A(D, B, null, n, I)), L.push({ event: D, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            D && n !== uo && (B = n.relatedTarget || n.fromElement) && (sn(B) || B[_t]))
          )
            break e;
          if (
            (A || D) &&
            ((D =
              I.window === I
                ? I
                : (D = I.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            A
              ? ((B = n.relatedTarget || n.toElement),
                (A = j),
                (B = B ? sn(B) : null),
                B !== null &&
                  ((Ne = on(B)), B !== Ne || (B.tag !== 5 && B.tag !== 6)) &&
                  (B = null))
              : ((A = null), (B = j)),
            A !== B)
          ) {
            if (
              ((W = Xs),
              (M = 'onMouseLeave'),
              (E = 'onMouseEnter'),
              (x = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((W = qs), (M = 'onPointerLeave'), (E = 'onPointerEnter'), (x = 'pointer')),
              (Ne = A == null ? D : Dn(A)),
              (k = B == null ? D : Dn(B)),
              (D = new W(M, x + 'leave', A, n, I)),
              (D.target = Ne),
              (D.relatedTarget = k),
              (M = null),
              sn(I) === j &&
                ((W = new W(E, x + 'enter', B, n, I)),
                (W.target = k),
                (W.relatedTarget = Ne),
                (M = W)),
              (Ne = M),
              A && B)
            )
              t: {
                for (W = A, E = B, x = 0, k = W; k; k = Pn(k)) x++;
                for (k = 0, M = E; M; M = Pn(M)) k++;
                for (; 0 < x - k; ) (W = Pn(W)), x--;
                for (; 0 < k - x; ) (E = Pn(E)), k--;
                for (; x--; ) {
                  if (W === E || (E !== null && W === E.alternate)) break t;
                  (W = Pn(W)), (E = Pn(E));
                }
                W = null;
              }
            else W = null;
            A !== null && ka(L, D, A, W, !1), B !== null && Ne !== null && ka(L, Ne, B, W, !0);
          }
        }
        e: {
          if (
            ((D = j ? Dn(j) : window),
            (A = D.nodeName && D.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && D.type === 'file'))
          )
            var V = Xd;
          else if (ra(D))
            if (oa) V = bd;
            else {
              V = qd;
              var X = Gd;
            }
          else
            (A = D.nodeName) &&
              A.toLowerCase() === 'input' &&
              (D.type === 'checkbox' || D.type === 'radio') &&
              (V = Zd);
          if (V && (V = V(e, j))) {
            la(L, V, n, I);
            break e;
          }
          X && X(e, D, j),
            e === 'focusout' &&
              (X = D._wrapperState) &&
              X.controlled &&
              D.type === 'number' &&
              lo(D, 'number', D.value);
        }
        switch (((X = j ? Dn(j) : window), e)) {
          case 'focusin':
            (ra(X) || X.contentEditable === 'true') && ((Nn = X), (zo = j), (fr = null));
            break;
          case 'focusout':
            fr = zo = Nn = null;
            break;
          case 'mousedown':
            Ro = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Ro = !1), pa(L, n, I);
            break;
          case 'selectionchange':
            if (nf) break;
          case 'keydown':
          case 'keyup':
            pa(L, n, I);
        }
        var G;
        if (Do)
          e: {
            switch (e) {
              case 'compositionstart':
                var Z = 'onCompositionStart';
                break e;
              case 'compositionend':
                Z = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Z = 'onCompositionUpdate';
                break e;
            }
            Z = void 0;
          }
        else
          jn
            ? ta(e, n) && (Z = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Z = 'onCompositionStart');
        Z &&
          (Zs &&
            n.locale !== 'ko' &&
            (jn || Z !== 'onCompositionStart'
              ? Z === 'onCompositionEnd' && jn && (G = Ys())
              : ((Ut = I), (ko = 'value' in Ut ? Ut.value : Ut.textContent), (jn = !0))),
          (X = al(j, Z)),
          0 < X.length &&
            ((Z = new Gs(Z, e, null, n, I)),
            L.push({ event: Z, listeners: X }),
            G ? (Z.data = G) : ((G = na(n)), G !== null && (Z.data = G)))),
          (G = Hd ? Qd(e, n) : Jd(e, n)) &&
            ((j = al(j, 'onBeforeInput')),
            0 < j.length &&
              ((I = new Gs('onBeforeInput', 'beforeinput', null, n, I)),
              L.push({ event: I, listeners: j }),
              (I.data = G)));
      }
      Ca(L, t);
    });
  }
  function mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function al(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Gn(e, n)),
        o != null && r.unshift(mr(e, o, l)),
        (o = Gn(e, t)),
        o != null && r.push(mr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function Pn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ka(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var h = n,
        g = h.alternate,
        j = h.stateNode;
      if (g !== null && g === r) break;
      h.tag === 5 &&
        j !== null &&
        ((h = j),
        l
          ? ((g = Gn(n, o)), g != null && u.unshift(mr(n, g, h)))
          : l || ((g = Gn(n, o)), g != null && u.push(mr(n, g, h)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var sf = /\r\n?/g,
    af = /\u0000|\uFFFD/g;
  function ja(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        sf,
        `
`
      )
      .replace(af, '');
  }
  function ul(e, t, n) {
    if (((t = ja(t)), ja(e) !== t && n)) throw Error(s(425));
  }
  function cl() {}
  var Wo = null,
    $o = null;
  function Vo(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ho = typeof setTimeout == 'function' ? setTimeout : void 0,
    uf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Na = typeof Promise == 'function' ? Promise : void 0,
    cf =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Na < 'u'
          ? function (e) {
              return Na.resolve(null).then(e).catch(df);
            }
          : Ho;
  function df(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), or(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    or(t);
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function _a(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Tn = Math.random().toString(36).slice(2),
    Ct = '__reactFiber$' + Tn,
    vr = '__reactProps$' + Tn,
    _t = '__reactContainer$' + Tn,
    Jo = '__reactEvents$' + Tn,
    ff = '__reactListeners$' + Tn,
    pf = '__reactHandles$' + Tn;
  function sn(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[_t] || n[Ct])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = _a(e); e !== null; ) {
            if ((n = e[Ct])) return n;
            e = _a(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function gr(e) {
    return (
      (e = e[Ct] || e[_t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Dn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function dl(e) {
    return e[vr] || null;
  }
  var Yo = [],
    In = -1;
  function $t(e) {
    return { current: e };
  }
  function ge(e) {
    0 > In || ((e.current = Yo[In]), (Yo[In] = null), In--);
  }
  function he(e, t) {
    In++, (Yo[In] = e.current), (e.current = t);
  }
  var Vt = {},
    $e = $t(Vt),
    Ge = $t(!1),
    an = Vt;
  function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function qe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function fl() {
    ge(Ge), ge($e);
  }
  function Pa(e, t, n) {
    if ($e.current !== Vt) throw Error(s(168));
    he($e, t), he(Ge, n);
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ce(e) || 'Unknown', l));
    return v({}, n, r);
  }
  function pl(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
      (an = $e.current),
      he($e, e),
      he(Ge, Ge.current),
      !0
    );
  }
  function Da(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = Ta(e, t, an)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ge(Ge),
        ge($e),
        he($e, e))
      : ge(Ge),
      he(Ge, n);
  }
  var Pt = null,
    hl = !1,
    Ko = !1;
  function Ia(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  function hf(e) {
    (hl = !0), Ia(e);
  }
  function Ht() {
    if (!Ko && Pt !== null) {
      Ko = !0;
      var e = 0,
        t = de;
      try {
        var n = Pt;
        for (de = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Pt = null), (hl = !1);
      } catch (l) {
        throw (Pt !== null && (Pt = Pt.slice(e + 1)), Ms(vo, Ht), l);
      } finally {
        (de = t), (Ko = !1);
      }
    }
    return null;
  }
  var Mn = [],
    zn = 0,
    ml = null,
    vl = 0,
    at = [],
    ut = 0,
    un = null,
    Tt = 1,
    Dt = '';
  function cn(e, t) {
    (Mn[zn++] = vl), (Mn[zn++] = ml), (ml = e), (vl = t);
  }
  function La(e, t, n) {
    (at[ut++] = Tt), (at[ut++] = Dt), (at[ut++] = un), (un = e);
    var r = Tt;
    e = Dt;
    var l = 32 - ht(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ht(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Tt = (1 << (32 - ht(t) + l)) | (n << l) | r),
        (Dt = o + e);
    } else (Tt = (1 << o) | (n << l) | r), (Dt = e);
  }
  function Xo(e) {
    e.return !== null && (cn(e, 1), La(e, 1, 0));
  }
  function Go(e) {
    for (; e === ml; ) (ml = Mn[--zn]), (Mn[zn] = null), (vl = Mn[--zn]), (Mn[zn] = null);
    for (; e === un; )
      (un = at[--ut]),
        (at[ut] = null),
        (Dt = at[--ut]),
        (at[ut] = null),
        (Tt = at[--ut]),
        (at[ut] = null);
  }
  var ot = null,
    it = null,
    we = !1,
    vt = null;
  function Ma(e, t) {
    var n = pt(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function za(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = Wt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = un !== null ? { id: Tt, overflow: Dt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ot = e),
              (it = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zo(e) {
    if (we) {
      var t = it;
      if (t) {
        var n = t;
        if (!za(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = Wt(n.nextSibling);
          var r = ot;
          t && za(e, t) ? Ma(r, n) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ot = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (we = !1), (ot = e);
      }
    }
  }
  function Ra(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function gl(e) {
    if (e !== ot) return !1;
    if (!we) return Ra(e), (we = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Vo(e.type, e.memoizedProps))),
      t && (t = it))
    ) {
      if (qo(e)) throw (Fa(), Error(s(418)));
      for (; t; ) Ma(e, t), (t = Wt(t.nextSibling));
    }
    if ((Ra(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                it = Wt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fa() {
    for (var e = it; e; ) e = Wt(e.nextSibling);
  }
  function Rn() {
    (it = ot = null), (we = !1);
  }
  function bo(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var mf = b.ReactCurrentBatchConfig;
  function gt(e, t) {
    if (e && e.defaultProps) {
      (t = v({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var yl = $t(null),
    wl = null,
    Fn = null,
    ei = null;
  function ti() {
    ei = Fn = wl = null;
  }
  function ni(e) {
    var t = yl.current;
    ge(yl), (e._currentValue = t);
  }
  function ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function On(e, t) {
    (wl = e),
      (ei = Fn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null));
  }
  function ct(e) {
    var t = e._currentValue;
    if (ei !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
        if (wl === null) throw Error(s(308));
        (Fn = e), (wl.dependencies = { lanes: 0, firstContext: e });
      } else Fn = Fn.next = e;
    return t;
  }
  var dn = null;
  function li(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function Oa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), li(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qt = !1;
  function oi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Aa(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), It(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), li(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function xl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
    }
  }
  function Ua(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Sl(e, t, n, r) {
    var l = e.updateQueue;
    Qt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      h = l.shared.pending;
    if (h !== null) {
      l.shared.pending = null;
      var g = h,
        j = g.next;
      (g.next = null), u === null ? (o = j) : (u.next = j), (u = g);
      var I = e.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (h = I.lastBaseUpdate),
        h !== u && (h === null ? (I.firstBaseUpdate = j) : (h.next = j), (I.lastBaseUpdate = g)));
    }
    if (o !== null) {
      var L = l.baseState;
      (u = 0), (I = j = g = null), (h = o);
      do {
        var D = h.lane,
          A = h.eventTime;
        if ((r & D) === D) {
          I !== null &&
            (I = I.next =
              {
                eventTime: A,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null,
              });
          e: {
            var B = e,
              W = h;
            switch (((D = t), (A = n), W.tag)) {
              case 1:
                if (((B = W.payload), typeof B == 'function')) {
                  L = B.call(A, L, D);
                  break e;
                }
                L = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = W.payload), (D = typeof B == 'function' ? B.call(A, L, D) : B), D == null)
                )
                  break e;
                L = v({}, L, D);
                break e;
              case 2:
                Qt = !0;
            }
          }
          h.callback !== null &&
            h.lane !== 0 &&
            ((e.flags |= 64), (D = l.effects), D === null ? (l.effects = [h]) : D.push(h));
        } else
          (A = {
            eventTime: A,
            lane: D,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            I === null ? ((j = I = A), (g = L)) : (I = I.next = A),
            (u |= D);
        if (((h = h.next), h === null)) {
          if (((h = l.shared.pending), h === null)) break;
          (D = h), (h = D.next), (D.next = null), (l.lastBaseUpdate = D), (l.shared.pending = null);
        }
      } while (!0);
      if (
        (I === null && (g = L),
        (l.baseState = g),
        (l.firstBaseUpdate = j),
        (l.lastBaseUpdate = I),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (hn |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function Ba(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var Wa = new i.Component().refs;
  function ii(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? on(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = Gt(e),
        o = Lt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Jt(e, o, l)),
        t !== null && (xt(t, e, l, r), xl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        l = Gt(e),
        o = Lt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Jt(e, o, l)),
        t !== null && (xt(t, e, l, r), xl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ke(),
        r = Gt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Jt(e, l, r)),
        t !== null && (xt(t, e, r, n), xl(t, e, r));
    },
  };
  function $a(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !dr(n, r) || !dr(l, o)
          : !0
    );
  }
  function Va(e, t, n) {
    var r = !1,
      l = Vt,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = ct(o))
        : ((l = qe(t) ? an : $e.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ln(e, l) : Vt)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ha(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
  }
  function si(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = Wa), oi(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (l.context = ct(o))
      : ((o = qe(t) ? an : $e.current), (l.context = Ln(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (ii(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
        t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
        Sl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function yr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          o = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var h = l.refs;
              h === Wa && (h = l.refs = {}), u === null ? delete h[o] : (h[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function El(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      ))
    );
  }
  function Qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ja(e) {
    function t(E, x) {
      if (e) {
        var k = E.deletions;
        k === null ? ((E.deletions = [x]), (E.flags |= 16)) : k.push(x);
      }
    }
    function n(E, x) {
      if (!e) return null;
      for (; x !== null; ) t(E, x), (x = x.sibling);
      return null;
    }
    function r(E, x) {
      for (E = new Map(); x !== null; )
        x.key !== null ? E.set(x.key, x) : E.set(x.index, x), (x = x.sibling);
      return E;
    }
    function l(E, x) {
      return (E = Zt(E, x)), (E.index = 0), (E.sibling = null), E;
    }
    function o(E, x, k) {
      return (
        (E.index = k),
        e
          ? ((k = E.alternate),
            k !== null ? ((k = k.index), k < x ? ((E.flags |= 2), x) : k) : ((E.flags |= 2), x))
          : ((E.flags |= 1048576), x)
      );
    }
    function u(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function h(E, x, k, M) {
      return x === null || x.tag !== 6
        ? ((x = Hi(k, E.mode, M)), (x.return = E), x)
        : ((x = l(x, k)), (x.return = E), x);
    }
    function g(E, x, k, M) {
      var V = k.type;
      return V === ee
        ? I(E, x, k.props.children, M, k.key)
        : x !== null &&
            (x.elementType === V ||
              (typeof V == 'object' && V !== null && V.$$typeof === Te && Qa(V) === x.type))
          ? ((M = l(x, k.props)), (M.ref = yr(E, x, k)), (M.return = E), M)
          : ((M = $l(k.type, k.key, k.props, null, E.mode, M)),
            (M.ref = yr(E, x, k)),
            (M.return = E),
            M);
    }
    function j(E, x, k, M) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== k.containerInfo ||
        x.stateNode.implementation !== k.implementation
        ? ((x = Qi(k, E.mode, M)), (x.return = E), x)
        : ((x = l(x, k.children || [])), (x.return = E), x);
    }
    function I(E, x, k, M, V) {
      return x === null || x.tag !== 7
        ? ((x = yn(k, E.mode, M, V)), (x.return = E), x)
        : ((x = l(x, k)), (x.return = E), x);
    }
    function L(E, x, k) {
      if ((typeof x == 'string' && x !== '') || typeof x == 'number')
        return (x = Hi('' + x, E.mode, k)), (x.return = E), x;
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case fe:
            return (
              (k = $l(x.type, x.key, x.props, null, E.mode, k)),
              (k.ref = yr(E, null, x)),
              (k.return = E),
              k
            );
          case ye:
            return (x = Qi(x, E.mode, k)), (x.return = E), x;
          case Te:
            var M = x._init;
            return L(E, M(x._payload), k);
        }
        if (Yn(x) || Y(x)) return (x = yn(x, E.mode, k, null)), (x.return = E), x;
        El(E, x);
      }
      return null;
    }
    function D(E, x, k, M) {
      var V = x !== null ? x.key : null;
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return V !== null ? null : h(E, x, '' + k, M);
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case fe:
            return k.key === V ? g(E, x, k, M) : null;
          case ye:
            return k.key === V ? j(E, x, k, M) : null;
          case Te:
            return (V = k._init), D(E, x, V(k._payload), M);
        }
        if (Yn(k) || Y(k)) return V !== null ? null : I(E, x, k, M, null);
        El(E, k);
      }
      return null;
    }
    function A(E, x, k, M, V) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return (E = E.get(k) || null), h(x, E, '' + M, V);
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case fe:
            return (E = E.get(M.key === null ? k : M.key) || null), g(x, E, M, V);
          case ye:
            return (E = E.get(M.key === null ? k : M.key) || null), j(x, E, M, V);
          case Te:
            var X = M._init;
            return A(E, x, k, X(M._payload), V);
        }
        if (Yn(M) || Y(M)) return (E = E.get(k) || null), I(x, E, M, V, null);
        El(x, M);
      }
      return null;
    }
    function B(E, x, k, M) {
      for (var V = null, X = null, G = x, Z = (x = 0), Re = null; G !== null && Z < k.length; Z++) {
        G.index > Z ? ((Re = G), (G = null)) : (Re = G.sibling);
        var ue = D(E, G, k[Z], M);
        if (ue === null) {
          G === null && (G = Re);
          break;
        }
        e && G && ue.alternate === null && t(E, G),
          (x = o(ue, x, Z)),
          X === null ? (V = ue) : (X.sibling = ue),
          (X = ue),
          (G = Re);
      }
      if (Z === k.length) return n(E, G), we && cn(E, Z), V;
      if (G === null) {
        for (; Z < k.length; Z++)
          (G = L(E, k[Z], M)),
            G !== null && ((x = o(G, x, Z)), X === null ? (V = G) : (X.sibling = G), (X = G));
        return we && cn(E, Z), V;
      }
      for (G = r(E, G); Z < k.length; Z++)
        (Re = A(G, E, Z, k[Z], M)),
          Re !== null &&
            (e && Re.alternate !== null && G.delete(Re.key === null ? Z : Re.key),
            (x = o(Re, x, Z)),
            X === null ? (V = Re) : (X.sibling = Re),
            (X = Re));
      return (
        e &&
          G.forEach(function (bt) {
            return t(E, bt);
          }),
        we && cn(E, Z),
        V
      );
    }
    function W(E, x, k, M) {
      var V = Y(k);
      if (typeof V != 'function') throw Error(s(150));
      if (((k = V.call(k)), k == null)) throw Error(s(151));
      for (
        var X = (V = null), G = x, Z = (x = 0), Re = null, ue = k.next();
        G !== null && !ue.done;
        Z++, ue = k.next()
      ) {
        G.index > Z ? ((Re = G), (G = null)) : (Re = G.sibling);
        var bt = D(E, G, ue.value, M);
        if (bt === null) {
          G === null && (G = Re);
          break;
        }
        e && G && bt.alternate === null && t(E, G),
          (x = o(bt, x, Z)),
          X === null ? (V = bt) : (X.sibling = bt),
          (X = bt),
          (G = Re);
      }
      if (ue.done) return n(E, G), we && cn(E, Z), V;
      if (G === null) {
        for (; !ue.done; Z++, ue = k.next())
          (ue = L(E, ue.value, M)),
            ue !== null && ((x = o(ue, x, Z)), X === null ? (V = ue) : (X.sibling = ue), (X = ue));
        return we && cn(E, Z), V;
      }
      for (G = r(E, G); !ue.done; Z++, ue = k.next())
        (ue = A(G, E, Z, ue.value, M)),
          ue !== null &&
            (e && ue.alternate !== null && G.delete(ue.key === null ? Z : ue.key),
            (x = o(ue, x, Z)),
            X === null ? (V = ue) : (X.sibling = ue),
            (X = ue));
      return (
        e &&
          G.forEach(function (Kf) {
            return t(E, Kf);
          }),
        we && cn(E, Z),
        V
      );
    }
    function Ne(E, x, k, M) {
      if (
        (typeof k == 'object' &&
          k !== null &&
          k.type === ee &&
          k.key === null &&
          (k = k.props.children),
        typeof k == 'object' && k !== null)
      ) {
        switch (k.$$typeof) {
          case fe:
            e: {
              for (var V = k.key, X = x; X !== null; ) {
                if (X.key === V) {
                  if (((V = k.type), V === ee)) {
                    if (X.tag === 7) {
                      n(E, X.sibling), (x = l(X, k.props.children)), (x.return = E), (E = x);
                      break e;
                    }
                  } else if (
                    X.elementType === V ||
                    (typeof V == 'object' && V !== null && V.$$typeof === Te && Qa(V) === X.type)
                  ) {
                    n(E, X.sibling),
                      (x = l(X, k.props)),
                      (x.ref = yr(E, X, k)),
                      (x.return = E),
                      (E = x);
                    break e;
                  }
                  n(E, X);
                  break;
                } else t(E, X);
                X = X.sibling;
              }
              k.type === ee
                ? ((x = yn(k.props.children, E.mode, M, k.key)), (x.return = E), (E = x))
                : ((M = $l(k.type, k.key, k.props, null, E.mode, M)),
                  (M.ref = yr(E, x, k)),
                  (M.return = E),
                  (E = M));
            }
            return u(E);
          case ye:
            e: {
              for (X = k.key; x !== null; ) {
                if (x.key === X)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === k.containerInfo &&
                    x.stateNode.implementation === k.implementation
                  ) {
                    n(E, x.sibling), (x = l(x, k.children || [])), (x.return = E), (E = x);
                    break e;
                  } else {
                    n(E, x);
                    break;
                  }
                else t(E, x);
                x = x.sibling;
              }
              (x = Qi(k, E.mode, M)), (x.return = E), (E = x);
            }
            return u(E);
          case Te:
            return (X = k._init), Ne(E, x, X(k._payload), M);
        }
        if (Yn(k)) return B(E, x, k, M);
        if (Y(k)) return W(E, x, k, M);
        El(E, k);
      }
      return (typeof k == 'string' && k !== '') || typeof k == 'number'
        ? ((k = '' + k),
          x !== null && x.tag === 6
            ? (n(E, x.sibling), (x = l(x, k)), (x.return = E), (E = x))
            : (n(E, x), (x = Hi(k, E.mode, M)), (x.return = E), (E = x)),
          u(E))
        : n(E, x);
    }
    return Ne;
  }
  var An = Ja(!0),
    Ya = Ja(!1),
    wr = {},
    Et = $t(wr),
    xr = $t(wr),
    Sr = $t(wr);
  function fn(e) {
    if (e === wr) throw Error(s(174));
    return e;
  }
  function ai(e, t) {
    switch ((he(Sr, t), he(xr, e), he(Et, wr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : io(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = io(t, e));
    }
    ge(Et), he(Et, t);
  }
  function Un() {
    ge(Et), ge(xr), ge(Sr);
  }
  function Ka(e) {
    fn(Sr.current);
    var t = fn(Et.current),
      n = io(t, e.type);
    t !== n && (he(xr, e), he(Et, n));
  }
  function ui(e) {
    xr.current === e && (ge(Et), ge(xr));
  }
  var xe = $t(0);
  function kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ci = [];
  function di() {
    for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
    ci.length = 0;
  }
  var jl = b.ReactCurrentDispatcher,
    fi = b.ReactCurrentBatchConfig,
    pn = 0,
    Se = null,
    De = null,
    Me = null,
    Nl = !1,
    Cr = !1,
    Er = 0,
    vf = 0;
  function Ve() {
    throw Error(s(321));
  }
  function pi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function hi(e, t, n, r, l, o) {
    if (
      ((pn = o),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (jl.current = e === null || e.memoizedState === null ? xf : Sf),
      (e = n(r, l)),
      Cr)
    ) {
      o = 0;
      do {
        if (((Cr = !1), (Er = 0), 25 <= o)) throw Error(s(301));
        (o += 1), (Me = De = null), (t.updateQueue = null), (jl.current = Cf), (e = n(r, l));
      } while (Cr);
    }
    if (
      ((jl.current = Tl),
      (t = De !== null && De.next !== null),
      (pn = 0),
      (Me = De = Se = null),
      (Nl = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function mi() {
    var e = Er !== 0;
    return (Er = 0), e;
  }
  function kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e), Me;
  }
  function dt() {
    if (De === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = Me === null ? Se.memoizedState : Me.next;
    if (t !== null) (Me = t), (De = e);
    else {
      if (e === null) throw Error(s(310));
      (De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e);
    }
    return Me;
  }
  function kr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function vi(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = De,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var h = (u = null),
        g = null,
        j = o;
      do {
        var I = j.lane;
        if ((pn & I) === I)
          g !== null &&
            (g = g.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (r = j.hasEagerState ? j.eagerState : e(r, j.action));
        else {
          var L = {
            lane: I,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          g === null ? ((h = g = L), (u = r)) : (g = g.next = L), (Se.lanes |= I), (hn |= I);
        }
        j = j.next;
      } while (j !== null && j !== o);
      g === null ? (u = r) : (g.next = h),
        mt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = g),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Se.lanes |= o), (hn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gi(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      mt(o, t.memoizedState) || (Ze = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Xa() {}
  function Ga(e, t) {
    var n = Se,
      r = dt(),
      l = t(),
      o = !mt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      yi(ba.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), jr(9, Za.bind(null, n, r, l, t), void 0, null), ze === null))
        throw Error(s(349));
      (pn & 30) !== 0 || qa(n, t, l);
    }
    return l;
  }
  function qa(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Se.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Za(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), eu(t) && tu(e);
  }
  function ba(e, t, n) {
    return n(function () {
      eu(t) && tu(e);
    });
  }
  function eu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function tu(e) {
    var t = It(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function nu(e) {
    var t = kt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = wf.bind(null, Se, e)),
      [t.memoizedState, e]
    );
  }
  function jr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ru() {
    return dt().memoizedState;
  }
  function _l(e, t, n, r) {
    var l = kt();
    (Se.flags |= e), (l.memoizedState = jr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Pl(e, t, n, r) {
    var l = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (De !== null) {
      var u = De.memoizedState;
      if (((o = u.destroy), r !== null && pi(r, u.deps))) {
        l.memoizedState = jr(t, n, o, r);
        return;
      }
    }
    (Se.flags |= e), (l.memoizedState = jr(1 | t, n, o, r));
  }
  function lu(e, t) {
    return _l(8390656, 8, e, t);
  }
  function yi(e, t) {
    return Pl(2048, 8, e, t);
  }
  function ou(e, t) {
    return Pl(4, 2, e, t);
  }
  function iu(e, t) {
    return Pl(4, 4, e, t);
  }
  function su(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function au(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Pl(4, 4, su.bind(null, t, e), n);
  }
  function wi() {}
  function uu(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function cu(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function du(e, t, n) {
    return (pn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (mt(n, t) || ((n = Os()), (Se.lanes |= n), (hn |= n), (e.baseState = !0)), t);
  }
  function gf(e, t) {
    var n = de;
    (de = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = fi.transition;
    fi.transition = {};
    try {
      e(!1), t();
    } finally {
      (de = n), (fi.transition = r);
    }
  }
  function fu() {
    return dt().memoizedState;
  }
  function yf(e, t, n) {
    var r = Gt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), pu(e)))
      hu(t, n);
    else if (((n = Oa(e, t, n, r)), n !== null)) {
      var l = Ke();
      xt(n, e, r, l), mu(n, t, r);
    }
  }
  function wf(e, t, n) {
    var r = Gt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pu(e)) hu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            h = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = h), mt(h, u))) {
            var g = t.interleaved;
            g === null ? ((l.next = l), li(t)) : ((l.next = g.next), (g.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Oa(e, t, l, r)), n !== null && ((l = Ke()), xt(n, e, r, l), mu(n, t, r));
    }
  }
  function pu(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function hu(e, t) {
    Cr = Nl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function mu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
    }
  }
  var Tl = {
      readContext: ct,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: ct,
      useCallback: function (e, t) {
        return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ct,
      useEffect: lu,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), _l(4194308, 4, su.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return _l(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return _l(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = kt();
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
        var r = kt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = yf.bind(null, Se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = kt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: nu,
      useDebugValue: wi,
      useDeferredValue: function (e) {
        return (kt().memoizedState = e);
      },
      useTransition: function () {
        var e = nu(!1),
          t = e[0];
        return (e = gf.bind(null, e[1])), (kt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Se,
          l = kt();
        if (we) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(s(349));
          (pn & 30) !== 0 || qa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          lu(ba.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          jr(9, Za.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = kt(),
          t = ze.identifierPrefix;
        if (we) {
          var n = Dt,
            r = Tt;
          (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Er++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = vf++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: ct,
      useCallback: uu,
      useContext: ct,
      useEffect: yi,
      useImperativeHandle: au,
      useInsertionEffect: ou,
      useLayoutEffect: iu,
      useMemo: cu,
      useReducer: vi,
      useRef: ru,
      useState: function () {
        return vi(kr);
      },
      useDebugValue: wi,
      useDeferredValue: function (e) {
        var t = dt();
        return du(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = vi(kr)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xa,
      useSyncExternalStore: Ga,
      useId: fu,
      unstable_isNewReconciler: !1,
    },
    Cf = {
      readContext: ct,
      useCallback: uu,
      useContext: ct,
      useEffect: yi,
      useImperativeHandle: au,
      useInsertionEffect: ou,
      useLayoutEffect: iu,
      useMemo: cu,
      useReducer: gi,
      useRef: ru,
      useState: function () {
        return gi(kr);
      },
      useDebugValue: wi,
      useDeferredValue: function (e) {
        var t = dt();
        return De === null ? (t.memoizedState = e) : du(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = gi(kr)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xa,
      useSyncExternalStore: Ga,
      useId: fu,
      unstable_isNewReconciler: !1,
    };
  function Bn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += le(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function xi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Si(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ef = typeof WeakMap == 'function' ? WeakMap : Map;
  function vu(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Fl || ((Fl = !0), (Fi = r)), Si(e, t);
      }),
      n
    );
  }
  function gu(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Si(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (n.callback = function () {
          Si(e, t), typeof r != 'function' && (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' });
        }),
      n
    );
  }
  function yu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ef();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Of.bind(null, e, t, n)), t.then(e, e));
  }
  function wu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Lt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var kf = b.ReactCurrentOwner,
    Ze = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? Ya(t, null, n, r) : An(t, e.child, n, r);
  }
  function Su(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = hi(e, t, n, r, o, l)),
      (n = mi()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (we && n && Xo(t), (t.flags |= 1), Ye(e, t, r, l), t.child)
    );
  }
  function Cu(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !Vi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Eu(e, t, o, r, l))
        : ((e = $l(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : dr), n(u, r) && e.ref === t.ref))
        return Mt(e, t, l);
    }
    return (t.flags |= 1), (e = Zt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Eu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (dr(o, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return (t.lanes = e.lanes), Mt(e, t, l);
    }
    return Ci(e, t, n, r, l);
  }
  function ku(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          he($n, st),
          (st |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            he($n, st),
            (st |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          he($n, st),
          (st |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        he($n, st),
        (st |= r);
    return Ye(e, t, l, n), t.child;
  }
  function ju(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ci(e, t, n, r, l) {
    var o = qe(n) ? an : $e.current;
    return (
      (o = Ln(t, o)),
      On(t, l),
      (n = hi(e, t, n, r, o, l)),
      (r = mi()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Mt(e, t, l))
        : (we && r && Xo(t), (t.flags |= 1), Ye(e, t, n, l), t.child)
    );
  }
  function Nu(e, t, n, r, l) {
    if (qe(n)) {
      var o = !0;
      pl(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null)) Il(e, t), Va(t, n, r), si(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        h = t.memoizedProps;
      u.props = h;
      var g = u.context,
        j = n.contextType;
      typeof j == 'object' && j !== null
        ? (j = ct(j))
        : ((j = qe(n) ? an : $e.current), (j = Ln(t, j)));
      var I = n.getDerivedStateFromProps,
        L = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function';
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((h !== r || g !== j) && Ha(t, u, r, j)),
        (Qt = !1);
      var D = t.memoizedState;
      (u.state = D),
        Sl(t, r, u, l),
        (g = t.memoizedState),
        h !== r || D !== g || Ge.current || Qt
          ? (typeof I == 'function' && (ii(t, n, I, r), (g = t.memoizedState)),
            (h = Qt || $a(t, n, h, r, D, g, j))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = g)),
            (u.props = r),
            (u.state = g),
            (u.context = j),
            (r = h))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
      (u = t.stateNode),
        Aa(e, t),
        (h = t.memoizedProps),
        (j = t.type === t.elementType ? h : gt(t.type, h)),
        (u.props = j),
        (L = t.pendingProps),
        (D = u.context),
        (g = n.contextType),
        typeof g == 'object' && g !== null
          ? (g = ct(g))
          : ((g = qe(n) ? an : $e.current), (g = Ln(t, g)));
      var A = n.getDerivedStateFromProps;
      (I = typeof A == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((h !== L || D !== g) && Ha(t, u, r, g)),
        (Qt = !1),
        (D = t.memoizedState),
        (u.state = D),
        Sl(t, r, u, l);
      var B = t.memoizedState;
      h !== L || D !== B || Ge.current || Qt
        ? (typeof A == 'function' && (ii(t, n, A, r), (B = t.memoizedState)),
          (j = Qt || $a(t, n, j, r, D, B, g) || !1)
            ? (I ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(r, B, g),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(r, B, g)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (h === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (h === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = B)),
          (u.props = r),
          (u.state = B),
          (u.context = g),
          (r = j))
        : (typeof u.componentDidUpdate != 'function' ||
            (h === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (h === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ei(e, t, n, r, o, l);
  }
  function Ei(e, t, n, r, l, o) {
    ju(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Da(t, n, !1), Mt(e, t, o);
    (r = t.stateNode), (kf.current = t);
    var h = u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, h, o)))
        : Ye(e, t, h, o),
      (t.memoizedState = r.state),
      l && Da(t, n, !0),
      t.child
    );
  }
  function _u(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Pa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Pa(e, t.context, !1),
      ai(e, t.containerInfo);
  }
  function Pu(e, t, n, r, l) {
    return Rn(), bo(l), (t.flags |= 256), Ye(e, t, n, r), t.child;
  }
  var ki = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ji(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tu(e, t, n) {
    var r = t.pendingProps,
      l = xe.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      h;
    if (
      ((h = u) || (h = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      h ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      he(xe, l & 1),
      e === null)
    )
      return (
        Zo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: 'hidden', children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Vl(u, r, 0, null)),
                (e = yn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ji(n)),
                (t.memoizedState = ki),
                e)
              : Ni(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((h = l.dehydrated), h !== null)))
      return jf(e, t, u, r, h, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (h = l.sibling);
      var g = { mode: 'hidden', children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = g), (t.deletions = null))
          : ((r = Zt(l, g)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        h !== null ? (o = Zt(h, o)) : ((o = yn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? ji(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ki),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Zt(o, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ni(e, t) {
    return (
      (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function Dl(e, t, n, r) {
    return (
      r !== null && bo(r),
      An(t, e.child, null, n),
      (e = Ni(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jf(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = xi(Error(s(422)))), Dl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Vl({ mode: 'visible', children: r.children }, l, 0, null)),
            (o = yn(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && An(t, e.child, null, u),
            (t.child.memoizedState = ji(u)),
            (t.memoizedState = ki),
            o);
    if ((t.mode & 1) === 0) return Dl(e, t, u, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var h = r.dgst;
      return (r = h), (o = Error(s(419))), (r = xi(o, r, void 0)), Dl(e, t, u, r);
    }
    if (((h = (u & e.childLanes) !== 0), Ze || h)) {
      if (((r = ze), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), It(e, l), xt(r, e, l, -1));
      }
      return $i(), (r = xi(Error(s(421)))), Dl(e, t, u, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Af.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (it = Wt(l.nextSibling)),
        (ot = t),
        (we = !0),
        (vt = null),
        e !== null &&
          ((at[ut++] = Tt),
          (at[ut++] = Dt),
          (at[ut++] = un),
          (Tt = e.id),
          (Dt = e.overflow),
          (un = t)),
        (t = Ni(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Du(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ri(e.return, t, n);
  }
  function _i(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Iu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ye(e, t, r.children, n), (r = xe.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
          else if (e.tag === 19) Du(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((he(xe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate), e !== null && kl(e) === null && (l = n), (n = n.sibling);
          (n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            _i(t, !1, l, n, o);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && kl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          _i(t, !0, n, null, o);
          break;
        case 'together':
          _i(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Il(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (hn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = Zt(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Nf(e, t, n) {
    switch (t.tag) {
      case 3:
        _u(t), Rn();
        break;
      case 5:
        Ka(t);
        break;
      case 1:
        qe(t.type) && pl(t);
        break;
      case 4:
        ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        he(yl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (he(xe, xe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Tu(e, t, n)
              : (he(xe, xe.current & 1), (e = Mt(e, t, n)), e !== null ? e.sibling : null);
        he(xe, xe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Iu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          he(xe, xe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ku(e, t, n);
    }
    return Mt(e, t, n);
  }
  var Lu, Pi, Mu, zu;
  (Lu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Pi = function () {}),
    (Mu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), fn(Et.current);
        var o = null;
        switch (n) {
          case 'input':
            (l = ke(e, l)), (r = ke(e, r)), (o = []);
            break;
          case 'select':
            (l = v({}, l, { value: void 0 })), (r = v({}, r, { value: void 0 })), (o = []);
            break;
          case 'textarea':
            (l = oo(e, l)), (r = oo(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = cl);
        }
        so(n, r);
        var u;
        n = null;
        for (j in l)
          if (!r.hasOwnProperty(j) && l.hasOwnProperty(j) && l[j] != null)
            if (j === 'style') {
              var h = l[j];
              for (u in h) h.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
            } else
              j !== 'dangerouslySetInnerHTML' &&
                j !== 'children' &&
                j !== 'suppressContentEditableWarning' &&
                j !== 'suppressHydrationWarning' &&
                j !== 'autoFocus' &&
                (f.hasOwnProperty(j) ? o || (o = []) : (o = o || []).push(j, null));
        for (j in r) {
          var g = r[j];
          if (
            ((h = l != null ? l[j] : void 0),
            r.hasOwnProperty(j) && g !== h && (g != null || h != null))
          )
            if (j === 'style')
              if (h) {
                for (u in h)
                  !h.hasOwnProperty(u) ||
                    (g && g.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ''));
                for (u in g) g.hasOwnProperty(u) && h[u] !== g[u] && (n || (n = {}), (n[u] = g[u]));
              } else n || (o || (o = []), o.push(j, n)), (n = g);
            else
              j === 'dangerouslySetInnerHTML'
                ? ((g = g ? g.__html : void 0),
                  (h = h ? h.__html : void 0),
                  g != null && h !== g && (o = o || []).push(j, g))
                : j === 'children'
                  ? (typeof g != 'string' && typeof g != 'number') || (o = o || []).push(j, '' + g)
                  : j !== 'suppressContentEditableWarning' &&
                    j !== 'suppressHydrationWarning' &&
                    (f.hasOwnProperty(j)
                      ? (g != null && j === 'onScroll' && ve('scroll', e), o || h === g || (o = []))
                      : (o = o || []).push(j, g));
        }
        n && (o = o || []).push('style', n);
        var j = o;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (zu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Nr(e, t) {
    if (!we)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function _f(e, t, n) {
    var r = t.pendingProps;
    switch ((Go(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return qe(t.type) && fl(), He(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Un(),
          ge(Ge),
          ge($e),
          di(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (gl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), vt !== null && (Ui(vt), (vt = null)))),
          Pi(e, t),
          He(t),
          null
        );
      case 5:
        ui(t);
        var l = fn(Sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Mu(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return He(t), null;
          }
          if (((e = fn(Et.current)), gl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Ct] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                ve('cancel', r), ve('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ve('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < pr.length; l++) ve(pr[l], r);
                break;
              case 'source':
                ve('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ve('error', r), ve('load', r);
                break;
              case 'details':
                ve('toggle', r);
                break;
              case 'input':
                wn(r, o), ve('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!o.multiple }), ve('invalid', r);
                break;
              case 'textarea':
                vs(r, o), ve('invalid', r);
            }
            so(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var h = o[u];
                u === 'children'
                  ? typeof h == 'string'
                    ? r.textContent !== h &&
                      (o.suppressHydrationWarning !== !0 && ul(r.textContent, h, e),
                      (l = ['children', h]))
                    : typeof h == 'number' &&
                      r.textContent !== '' + h &&
                      (o.suppressHydrationWarning !== !0 && ul(r.textContent, h, e),
                      (l = ['children', '' + h]))
                  : f.hasOwnProperty(u) && h != null && u === 'onScroll' && ve('scroll', r);
              }
            switch (n) {
              case 'input':
                K(r), ms(r, o, !0);
                break;
              case 'textarea':
                K(r), ys(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (r.onclick = cl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = ws(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = u.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === 'select' &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[Ct] = t),
              (e[vr] = r),
              Lu(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = ao(n, r)), n)) {
                case 'dialog':
                  ve('cancel', e), ve('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  ve('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < pr.length; l++) ve(pr[l], e);
                  l = r;
                  break;
                case 'source':
                  ve('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  ve('error', e), ve('load', e), (l = r);
                  break;
                case 'details':
                  ve('toggle', e), (l = r);
                  break;
                case 'input':
                  wn(e, r), (l = ke(e, r)), ve('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = v({}, r, { value: void 0 })),
                    ve('invalid', e);
                  break;
                case 'textarea':
                  vs(e, r), (l = oo(e, r)), ve('invalid', e);
                  break;
                default:
                  l = r;
              }
              so(n, l), (h = l);
              for (o in h)
                if (h.hasOwnProperty(o)) {
                  var g = h[o];
                  o === 'style'
                    ? Cs(e, g)
                    : o === 'dangerouslySetInnerHTML'
                      ? ((g = g ? g.__html : void 0), g != null && xs(e, g))
                      : o === 'children'
                        ? typeof g == 'string'
                          ? (n !== 'textarea' || g !== '') && Kn(e, g)
                          : typeof g == 'number' && Kn(e, '' + g)
                        : o !== 'suppressContentEditableWarning' &&
                          o !== 'suppressHydrationWarning' &&
                          o !== 'autoFocus' &&
                          (f.hasOwnProperty(o)
                            ? g != null && o === 'onScroll' && ve('scroll', e)
                            : g != null && te(e, o, g, u));
                }
              switch (n) {
                case 'input':
                  K(e), ms(e, r, !1);
                  break;
                case 'textarea':
                  K(e), ys(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ae(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? xn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && xn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = cl);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return He(t), null;
      case 6:
        if (e && t.stateNode != null) zu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((n = fn(Sr.current)), fn(Et.current), gl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ct] = t),
              (o = r.nodeValue !== n) && ((e = ot), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ul(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ul(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ct] = t),
              (t.stateNode = r);
        }
        return He(t), null;
      case 13:
        if (
          (ge(xe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (we && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Fa(), Rn(), (t.flags |= 98560), (o = !1);
          else if (((o = gl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[Ct] = t;
            } else Rn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            He(t), (o = !1);
          } else vt !== null && (Ui(vt), (vt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (xe.current & 1) !== 0 ? Ie === 0 && (Ie = 3) : $i())),
            t.updateQueue !== null && (t.flags |= 4),
            He(t),
            null);
      case 4:
        return Un(), Pi(e, t), e === null && hr(t.stateNode.containerInfo), He(t), null;
      case 10:
        return ni(t.type._context), He(t), null;
      case 17:
        return qe(t.type) && fl(), He(t), null;
      case 19:
        if ((ge(xe), (o = t.memoizedState), o === null)) return He(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) Nr(o, !1);
          else {
            if (Ie !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = kl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Nr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling);
                  return he(xe, (xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              je() > Vn &&
              ((t.flags |= 128), (r = !0), Nr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = kl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Nr(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !u.alternate && !we)
              )
                return He(t), null;
            } else
              2 * je() - o.renderingStartTime > Vn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Nr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last), n !== null ? (n.sibling = u) : (t.child = u), (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = je()),
            (t.sibling = null),
            (n = xe.current),
            he(xe, r ? (n & 1) | 2 : n & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          Wi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (st & 1073741824) !== 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Pf(e, t) {
    switch ((Go(t), t.tag)) {
      case 1:
        return (
          qe(t.type) && fl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Un(),
          ge(Ge),
          ge($e),
          di(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ui(t), null;
      case 13:
        if ((ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(s(340));
          Rn();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return ge(xe), null;
      case 4:
        return Un(), null;
      case 10:
        return ni(t.type._context), null;
      case 22:
      case 23:
        return Wi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ll = !1,
    Qe = !1,
    Tf = typeof WeakSet == 'function' ? WeakSet : Set,
    U = null;
  function Wn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ee(e, t, r);
        }
      else n.current = null;
  }
  function Ti(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var Ru = !1;
  function Df(e, t) {
    if (((Wo = Zr), (e = fa()), Mo(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              h = -1,
              g = -1,
              j = 0,
              I = 0,
              L = e,
              D = null;
            t: for (;;) {
              for (
                var A;
                L !== n || (l !== 0 && L.nodeType !== 3) || (h = u + l),
                  L !== o || (r !== 0 && L.nodeType !== 3) || (g = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  (A = L.firstChild) !== null;

              )
                (D = L), (L = A);
              for (;;) {
                if (L === e) break t;
                if (
                  (D === n && ++j === l && (h = u),
                  D === o && ++I === r && (g = u),
                  (A = L.nextSibling) !== null)
                )
                  break;
                (L = D), (D = L.parentNode);
              }
              L = A;
            }
            n = h === -1 || g === -1 ? null : { start: h, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for ($o = { focusedElem: e, selectionRange: n }, Zr = !1, U = t; U !== null; )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (U = e);
      else
        for (; U !== null; ) {
          t = U;
          try {
            var B = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (B !== null) {
                    var W = B.memoizedProps,
                      Ne = B.memoizedState,
                      E = t.stateNode,
                      x = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? W : gt(t.type, W),
                        Ne
                      );
                    E.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = '')
                    : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (M) {
            Ee(t, t.return, M);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (U = e);
            break;
          }
          U = t.return;
        }
    return (B = Ru), (Ru = !1), B;
  }
  function _r(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ti(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ml(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Di(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Fu(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Ct], delete t[vr], delete t[Jo], delete t[ff], delete t[pf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ou(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Au(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ou(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = cl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), (e = e.sibling);
  }
  var Fe = null,
    yt = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) Uu(e, t, n), (n = n.sibling);
  }
  function Uu(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(Jr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Qe || Wn(n, t);
      case 6:
        var r = Fe,
          l = yt;
        (Fe = null),
          Yt(e, t, n),
          (Fe = r),
          (yt = l),
          Fe !== null &&
            (yt
              ? ((e = Fe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Fe.removeChild(n.stateNode));
        break;
      case 18:
        Fe !== null &&
          (yt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? Qo(e.parentNode, n) : e.nodeType === 1 && Qo(e, n),
              or(e))
            : Qo(Fe, n.stateNode));
        break;
      case 4:
        (r = Fe),
          (l = yt),
          (Fe = n.stateNode.containerInfo),
          (yt = !0),
          Yt(e, t, n),
          (Fe = r),
          (yt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ti(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (!Qe && (Wn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
          } catch (h) {
            Ee(n, t, h);
          }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Qe = (r = Qe) || n.memoizedState !== null), Yt(e, t, n), (Qe = r))
          : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function Bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Tf()),
        t.forEach(function (r) {
          var l = Uf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            h = u;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 5:
                (Fe = h.stateNode), (yt = !1);
                break e;
              case 3:
                (Fe = h.stateNode.containerInfo), (yt = !0);
                break e;
              case 4:
                (Fe = h.stateNode.containerInfo), (yt = !0);
                break e;
            }
            h = h.return;
          }
          if (Fe === null) throw Error(s(160));
          Uu(o, u, l), (Fe = null), (yt = !1);
          var g = l.alternate;
          g !== null && (g.return = null), (l.return = null);
        } catch (j) {
          Ee(l, t, j);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wu(t, e), (t = t.sibling);
  }
  function Wu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((wt(t, e), jt(e), r & 4)) {
          try {
            _r(3, e, e.return), Ml(3, e);
          } catch (W) {
            Ee(e, e.return, W);
          }
          try {
            _r(5, e, e.return);
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 1:
        wt(t, e), jt(e), r & 512 && n !== null && Wn(n, n.return);
        break;
      case 5:
        if ((wt(t, e), jt(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Kn(l, '');
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            h = e.type,
            g = e.updateQueue;
          if (((e.updateQueue = null), g !== null))
            try {
              h === 'input' && o.type === 'radio' && o.name != null && hs(l, o), ao(h, u);
              var j = ao(h, o);
              for (u = 0; u < g.length; u += 2) {
                var I = g[u],
                  L = g[u + 1];
                I === 'style'
                  ? Cs(l, L)
                  : I === 'dangerouslySetInnerHTML'
                    ? xs(l, L)
                    : I === 'children'
                      ? Kn(l, L)
                      : te(l, I, L, j);
              }
              switch (h) {
                case 'input':
                  ro(l, o);
                  break;
                case 'textarea':
                  gs(l, o);
                  break;
                case 'select':
                  var D = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var A = o.value;
                  A != null
                    ? xn(l, !!o.multiple, A, !1)
                    : D !== !!o.multiple &&
                      (o.defaultValue != null
                        ? xn(l, !!o.multiple, o.defaultValue, !0)
                        : xn(l, !!o.multiple, o.multiple ? [] : '', !1));
              }
              l[vr] = o;
            } catch (W) {
              Ee(e, e.return, W);
            }
        }
        break;
      case 6:
        if ((wt(t, e), jt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (W) {
            Ee(e, e.return, W);
          }
        }
        break;
      case 3:
        if ((wt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            or(t.containerInfo);
          } catch (W) {
            Ee(e, e.return, W);
          }
        break;
      case 4:
        wt(t, e), jt(e);
        break;
      case 13:
        wt(t, e),
          jt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Ri = je())),
          r & 4 && Bu(e);
        break;
      case 22:
        if (
          ((I = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Qe = (j = Qe) || I), wt(t, e), (Qe = j)) : wt(t, e),
          jt(e),
          r & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null), (e.stateNode.isHidden = j) && !I && (e.mode & 1) !== 0)
          )
            for (U = e, I = e.child; I !== null; ) {
              for (L = U = I; U !== null; ) {
                switch (((D = U), (A = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _r(4, D, D.return);
                    break;
                  case 1:
                    Wn(D, D.return);
                    var B = D.stateNode;
                    if (typeof B.componentWillUnmount == 'function') {
                      (r = D), (n = D.return);
                      try {
                        (t = r),
                          (B.props = t.memoizedProps),
                          (B.state = t.memoizedState),
                          B.componentWillUnmount();
                      } catch (W) {
                        Ee(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    Wn(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Hu(L);
                      continue;
                    }
                }
                A !== null ? ((A.return = D), (U = A)) : Hu(L);
              }
              I = I.sibling;
            }
          e: for (I = null, L = e; ; ) {
            if (L.tag === 5) {
              if (I === null) {
                I = L;
                try {
                  (l = L.stateNode),
                    j
                      ? ((o = l.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((h = L.stateNode),
                        (g = L.memoizedProps.style),
                        (u = g != null && g.hasOwnProperty('display') ? g.display : null),
                        (h.style.display = Ss('display', u)));
                } catch (W) {
                  Ee(e, e.return, W);
                }
              }
            } else if (L.tag === 6) {
              if (I === null)
                try {
                  L.stateNode.nodeValue = j ? '' : L.memoizedProps;
                } catch (W) {
                  Ee(e, e.return, W);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) || L.memoizedState === null || L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              I === L && (I = null), (L = L.return);
            }
            I === L && (I = null), (L.sibling.return = L.return), (L = L.sibling);
          }
        }
        break;
      case 19:
        wt(t, e), jt(e), r & 4 && Bu(e);
        break;
      case 21:
        break;
      default:
        wt(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ou(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Kn(l, ''), (r.flags &= -33));
            var o = Au(e);
            Li(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              h = Au(e);
            Ii(e, h, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (g) {
        Ee(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function If(e, t, n) {
    (U = e), $u(e);
  }
  function $u(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Ll;
        if (!u) {
          var h = l.alternate,
            g = (h !== null && h.memoizedState !== null) || Qe;
          h = Ll;
          var j = Qe;
          if (((Ll = u), (Qe = g) && !j))
            for (U = l; U !== null; )
              (u = U),
                (g = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Qu(l)
                  : g !== null
                    ? ((g.return = u), (U = g))
                    : Qu(l);
          for (; o !== null; ) (U = o), $u(o), (o = o.sibling);
          (U = l), (Ll = h), (Qe = j);
        }
        Vu(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (U = o)) : Vu(e);
    }
  }
  function Vu(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || Ml(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Ba(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ba(t, u, n);
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      g.autoFocus && n.focus();
                      break;
                    case 'img':
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var I = j.memoizedState;
                    if (I !== null) {
                      var L = I.dehydrated;
                      L !== null && or(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Qe || (t.flags & 512 && Di(t));
        } catch (D) {
          Ee(t, t.return, D);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function Hu(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function Qu(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ml(4, t);
            } catch (g) {
              Ee(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                Ee(t, l, g);
              }
            }
            var o = t.return;
            try {
              Di(t);
            } catch (g) {
              Ee(t, o, g);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Di(t);
            } catch (g) {
              Ee(t, u, g);
            }
        }
      } catch (g) {
        Ee(t, t.return, g);
      }
      if (t === e) {
        U = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        (h.return = t.return), (U = h);
        break;
      }
      U = t.return;
    }
  }
  var Lf = Math.ceil,
    zl = b.ReactCurrentDispatcher,
    Mi = b.ReactCurrentOwner,
    ft = b.ReactCurrentBatchConfig,
    se = 0,
    ze = null,
    Pe = null,
    Oe = 0,
    st = 0,
    $n = $t(0),
    Ie = 0,
    Pr = null,
    hn = 0,
    Rl = 0,
    zi = 0,
    Tr = null,
    be = null,
    Ri = 0,
    Vn = 1 / 0,
    zt = null,
    Fl = !1,
    Fi = null,
    Kt = null,
    Ol = !1,
    Xt = null,
    Al = 0,
    Dr = 0,
    Oi = null,
    Ul = -1,
    Bl = 0;
  function Ke() {
    return (se & 6) !== 0 ? je() : Ul !== -1 ? Ul : (Ul = je());
  }
  function Gt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Oe !== 0
        ? Oe & -Oe
        : mf.transition !== null
          ? (Bl === 0 && (Bl = Os()), Bl)
          : ((e = de), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Js(e.type))), e);
  }
  function xt(e, t, n, r) {
    if (50 < Dr) throw ((Dr = 0), (Oi = null), Error(s(185)));
    er(e, n, r),
      ((se & 2) === 0 || e !== ze) &&
        (e === ze && ((se & 2) === 0 && (Rl |= n), Ie === 4 && qt(e, Oe)),
        et(e, r),
        n === 1 && se === 0 && (t.mode & 1) === 0 && ((Vn = je() + 500), hl && Ht()));
  }
  function et(e, t) {
    var n = e.callbackNode;
    hd(e, t);
    var r = Xr(e, e === ze ? Oe : 0);
    if (r === 0) n !== null && zs(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && zs(n), t === 1))
        e.tag === 0 ? hf(Yu.bind(null, e)) : Ia(Yu.bind(null, e)),
          cf(function () {
            (se & 6) === 0 && Ht();
          }),
          (n = null);
      else {
        switch (As(r)) {
          case 1:
            n = vo;
            break;
          case 4:
            n = Rs;
            break;
          case 16:
            n = Qr;
            break;
          case 536870912:
            n = Fs;
            break;
          default:
            n = Qr;
        }
        n = tc(n, Ju.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ju(e, t) {
    if (((Ul = -1), (Bl = 0), (se & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Xr(e, e === ze ? Oe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Wl(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var o = Xu();
      (ze !== e || Oe !== t) && ((zt = null), (Vn = je() + 500), vn(e, t));
      do
        try {
          Rf();
          break;
        } catch (h) {
          Ku(e, h);
        }
      while (!0);
      ti(), (zl.current = o), (se = l), Pe !== null ? (t = 0) : ((ze = null), (Oe = 0), (t = Ie));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = go(e)), l !== 0 && ((r = l), (t = Ai(e, l)))), t === 1))
        throw ((n = Pr), vn(e, 0), qt(e, r), et(e, je()), n);
      if (t === 6) qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Mf(l) &&
            ((t = Wl(e, r)),
            t === 2 && ((o = go(e)), o !== 0 && ((r = o), (t = Ai(e, o)))),
            t === 1))
        )
          throw ((n = Pr), vn(e, 0), qt(e, r), et(e, je()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            gn(e, be, zt);
            break;
          case 3:
            if ((qt(e, r), (r & 130023424) === r && ((t = Ri + 500 - je()), 10 < t))) {
              if (Xr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ke(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Ho(gn.bind(null, e, be, zt), t);
              break;
            }
            gn(e, be, zt);
            break;
          case 4:
            if ((qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - ht(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = je() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Lf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ho(gn.bind(null, e, be, zt), r);
              break;
            }
            gn(e, be, zt);
            break;
          case 5:
            gn(e, be, zt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return et(e, je()), e.callbackNode === n ? Ju.bind(null, e) : null;
  }
  function Ai(e, t) {
    var n = Tr;
    return (
      e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
      (e = Wl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Ui(t)),
      e
    );
  }
  function Ui(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function Mf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!mt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function qt(e, t) {
    for (
      t &= ~zi, t &= ~Rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ht(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Yu(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Hn();
    var t = Xr(e, 0);
    if ((t & 1) === 0) return et(e, je()), null;
    var n = Wl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = go(e);
      r !== 0 && ((t = r), (n = Ai(e, r)));
    }
    if (n === 1) throw ((n = Pr), vn(e, 0), qt(e, t), et(e, je()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, be, zt),
      et(e, je()),
      null
    );
  }
  function Bi(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      (se = n), se === 0 && ((Vn = je() + 500), hl && Ht());
    }
  }
  function mn(e) {
    Xt !== null && Xt.tag === 0 && (se & 6) === 0 && Hn();
    var t = se;
    se |= 1;
    var n = ft.transition,
      r = de;
    try {
      if (((ft.transition = null), (de = 1), e)) return e();
    } finally {
      (de = r), (ft.transition = n), (se = t), (se & 6) === 0 && Ht();
    }
  }
  function Wi() {
    (st = $n.current), ge($n);
  }
  function vn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((Go(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && fl();
            break;
          case 3:
            Un(), ge(Ge), ge($e), di();
            break;
          case 5:
            ui(r);
            break;
          case 4:
            Un();
            break;
          case 13:
            ge(xe);
            break;
          case 19:
            ge(xe);
            break;
          case 10:
            ni(r.type._context);
            break;
          case 22:
          case 23:
            Wi();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (Pe = e = Zt(e.current, null)),
      (Oe = st = t),
      (Ie = 0),
      (Pr = null),
      (zi = Rl = hn = 0),
      (be = Tr = null),
      dn !== null)
    ) {
      for (t = 0; t < dn.length; t++)
        if (((n = dn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      dn = null;
    }
    return e;
  }
  function Ku(e, t) {
    do {
      var n = Pe;
      try {
        if ((ti(), (jl.current = Tl), Nl)) {
          for (var r = Se.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Nl = !1;
        }
        if (
          ((pn = 0),
          (Me = De = Se = null),
          (Cr = !1),
          (Er = 0),
          (Mi.current = null),
          n === null || n.return === null)
        ) {
          (Ie = 1), (Pr = t), (Pe = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            h = n,
            g = t;
          if (
            ((t = Oe),
            (h.flags |= 32768),
            g !== null && typeof g == 'object' && typeof g.then == 'function')
          ) {
            var j = g,
              I = h,
              L = I.tag;
            if ((I.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var D = I.alternate;
              D
                ? ((I.updateQueue = D.updateQueue),
                  (I.memoizedState = D.memoizedState),
                  (I.lanes = D.lanes))
                : ((I.updateQueue = null), (I.memoizedState = null));
            }
            var A = wu(u);
            if (A !== null) {
              (A.flags &= -257), xu(A, u, h, o, t), A.mode & 1 && yu(o, j, t), (t = A), (g = j);
              var B = t.updateQueue;
              if (B === null) {
                var W = new Set();
                W.add(g), (t.updateQueue = W);
              } else B.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                yu(o, j, t), $i();
                break e;
              }
              g = Error(s(426));
            }
          } else if (we && h.mode & 1) {
            var Ne = wu(u);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256), xu(Ne, u, h, o, t), bo(Bn(g, h));
              break e;
            }
          }
          (o = g = Bn(g, h)), Ie !== 4 && (Ie = 2), Tr === null ? (Tr = [o]) : Tr.push(o), (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = vu(o, g, t);
                Ua(o, E);
                break e;
              case 1:
                h = g;
                var x = o.type,
                  k = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof x.getDerivedStateFromError == 'function' ||
                    (k !== null &&
                      typeof k.componentDidCatch == 'function' &&
                      (Kt === null || !Kt.has(k))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var M = gu(o, h, t);
                  Ua(o, M);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        qu(n);
      } catch (V) {
        (t = V), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xu() {
    var e = zl.current;
    return (zl.current = Tl), e === null ? Tl : e;
  }
  function $i() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
      ze === null || ((hn & 268435455) === 0 && (Rl & 268435455) === 0) || qt(ze, Oe);
  }
  function Wl(e, t) {
    var n = se;
    se |= 2;
    var r = Xu();
    (ze !== e || Oe !== t) && ((zt = null), vn(e, t));
    do
      try {
        zf();
        break;
      } catch (l) {
        Ku(e, l);
      }
    while (!0);
    if ((ti(), (se = n), (zl.current = r), Pe !== null)) throw Error(s(261));
    return (ze = null), (Oe = 0), Ie;
  }
  function zf() {
    for (; Pe !== null; ) Gu(Pe);
  }
  function Rf() {
    for (; Pe !== null && !od(); ) Gu(Pe);
  }
  function Gu(e) {
    var t = ec(e.alternate, e, st);
    (e.memoizedProps = e.pendingProps), t === null ? qu(e) : (Pe = t), (Mi.current = null);
  }
  function qu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _f(n, t, st)), n !== null)) {
          Pe = n;
          return;
        }
      } else {
        if (((n = Pf(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ie = 6), (Pe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
  }
  function gn(e, t, n) {
    var r = de,
      l = ft.transition;
    try {
      (ft.transition = null), (de = 1), Ff(e, t, n, r);
    } finally {
      (ft.transition = l), (de = r);
    }
    return null;
  }
  function Ff(e, t, n, r) {
    do Hn();
    while (Xt !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (md(e, o),
      e === ze && ((Pe = ze = null), (Oe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ol ||
        ((Ol = !0),
        tc(Qr, function () {
          return Hn(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = ft.transition), (ft.transition = null);
      var u = de;
      de = 1;
      var h = se;
      (se |= 4),
        (Mi.current = null),
        Df(e, n),
        Wu(n, e),
        tf($o),
        (Zr = !!Wo),
        ($o = Wo = null),
        (e.current = n),
        If(n),
        id(),
        (se = h),
        (de = u),
        (ft.transition = o);
    } else e.current = n;
    if (
      (Ol && ((Ol = !1), (Xt = e), (Al = l)),
      (o = e.pendingLanes),
      o === 0 && (Kt = null),
      ud(n.stateNode),
      et(e, je()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Fl) throw ((Fl = !1), (e = Fi), (Fi = null), e);
    return (
      (Al & 1) !== 0 && e.tag !== 0 && Hn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Oi ? Dr++ : ((Dr = 0), (Oi = e))) : (Dr = 0),
      Ht(),
      null
    );
  }
  function Hn() {
    if (Xt !== null) {
      var e = As(Al),
        t = ft.transition,
        n = de;
      try {
        if (((ft.transition = null), (de = 16 > e ? 16 : e), Xt === null)) var r = !1;
        else {
          if (((e = Xt), (Xt = null), (Al = 0), (se & 6) !== 0)) throw Error(s(331));
          var l = se;
          for (se |= 4, U = e.current; U !== null; ) {
            var o = U,
              u = o.child;
            if ((U.flags & 16) !== 0) {
              var h = o.deletions;
              if (h !== null) {
                for (var g = 0; g < h.length; g++) {
                  var j = h[g];
                  for (U = j; U !== null; ) {
                    var I = U;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _r(8, I, o);
                    }
                    var L = I.child;
                    if (L !== null) (L.return = I), (U = L);
                    else
                      for (; U !== null; ) {
                        I = U;
                        var D = I.sibling,
                          A = I.return;
                        if ((Fu(I), I === j)) {
                          U = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = A), (U = D);
                          break;
                        }
                        U = A;
                      }
                  }
                }
                var B = o.alternate;
                if (B !== null) {
                  var W = B.child;
                  if (W !== null) {
                    B.child = null;
                    do {
                      var Ne = W.sibling;
                      (W.sibling = null), (W = Ne);
                    } while (W !== null);
                  }
                }
                U = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) (u.return = o), (U = u);
            else
              e: for (; U !== null; ) {
                if (((o = U), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(9, o, o.return);
                  }
                var E = o.sibling;
                if (E !== null) {
                  (E.return = o.return), (U = E);
                  break e;
                }
                U = o.return;
              }
          }
          var x = e.current;
          for (U = x; U !== null; ) {
            u = U;
            var k = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && k !== null) (k.return = u), (U = k);
            else
              e: for (u = x; U !== null; ) {
                if (((h = U), (h.flags & 2048) !== 0))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ml(9, h);
                    }
                  } catch (V) {
                    Ee(h, h.return, V);
                  }
                if (h === u) {
                  U = null;
                  break e;
                }
                var M = h.sibling;
                if (M !== null) {
                  (M.return = h.return), (U = M);
                  break e;
                }
                U = h.return;
              }
          }
          if (((se = l), Ht(), St && typeof St.onPostCommitFiberRoot == 'function'))
            try {
              St.onPostCommitFiberRoot(Jr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (de = n), (ft.transition = t);
      }
    }
    return !1;
  }
  function Zu(e, t, n) {
    (t = Bn(n, t)),
      (t = vu(e, t, 1)),
      (e = Jt(e, t, 1)),
      (t = Ke()),
      e !== null && (er(e, 1, t), et(e, t));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) Zu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (Kt === null || !Kt.has(r)))
          ) {
            (e = Bn(n, e)),
              (e = gu(t, e, 1)),
              (t = Jt(t, e, 1)),
              (e = Ke()),
              t !== null && (er(t, 1, e), et(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Of(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (Oe & n) === n &&
        (Ie === 4 || (Ie === 3 && (Oe & 130023424) === Oe && 500 > je() - Ri)
          ? vn(e, 0)
          : (zi |= n)),
      et(e, t);
  }
  function bu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Kr), (Kr <<= 1), (Kr & 130023424) === 0 && (Kr = 4194304)));
    var n = Ke();
    (e = It(e, t)), e !== null && (er(e, t, n), et(e, n));
  }
  function Af(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), bu(e, n);
  }
  function Uf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), bu(e, n);
  }
  var ec;
  ec = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ge.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Ze = !1), Nf(e, t, n);
        Ze = (e.flags & 131072) !== 0;
      }
    else (Ze = !1), we && (t.flags & 1048576) !== 0 && La(t, vl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Il(e, t), (e = t.pendingProps);
        var l = Ln(t, $e.current);
        On(t, n), (l = hi(null, t, r, e, l, n));
        var o = mi();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              qe(r) ? ((o = !0), pl(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              oi(t),
              (l.updater = Cl),
              (t.stateNode = l),
              (l._reactInternals = t),
              si(t, r, e, n),
              (t = Ei(null, t, r, !0, o, n)))
            : ((t.tag = 0), we && o && Xo(t), Ye(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Il(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Wf(r)),
            (e = gt(r, e)),
            l)
          ) {
            case 0:
              t = Ci(null, t, r, e, n);
              break e;
            case 1:
              t = Nu(null, t, r, e, n);
              break e;
            case 11:
              t = Su(null, t, r, e, n);
              break e;
            case 14:
              t = Cu(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : gt(r, l)),
          Ci(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : gt(r, l)),
          Nu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((_u(t), e === null)) throw Error(s(387));
          (r = t.pendingProps), (o = t.memoizedState), (l = o.element), Aa(e, t), Sl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Bn(Error(s(423)), t)), (t = Pu(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Bn(Error(s(424)), t)), (t = Pu(e, t, r, n, l));
              break e;
            } else
              for (
                it = Wt(t.stateNode.containerInfo.firstChild),
                  ot = t,
                  we = !0,
                  vt = null,
                  n = Ya(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Rn(), r === l)) {
              t = Mt(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ka(t),
          e === null && Zo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Vo(r, l) ? (u = null) : o !== null && Vo(r, o) && (t.flags |= 32),
          ju(e, t),
          Ye(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Zo(t), null;
      case 13:
        return Tu(e, t, n);
      case 4:
        return (
          ai(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = An(t, null, r, n)) : Ye(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : gt(r, l)),
          Su(e, t, r, l, n)
        );
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            he(yl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (mt(o.value, u)) {
              if (o.children === l.children && !Ge.current) {
                t = Mt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var h = o.dependencies;
                if (h !== null) {
                  u = o.child;
                  for (var g = h.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (o.tag === 1) {
                        (g = Lt(-1, n & -n)), (g.tag = 2);
                        var j = o.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var I = j.pending;
                          I === null ? (g.next = g) : ((g.next = I.next), (I.next = g)),
                            (j.pending = g);
                        }
                      }
                      (o.lanes |= n),
                        (g = o.alternate),
                        g !== null && (g.lanes |= n),
                        ri(o.return, n, t),
                        (h.lanes |= n);
                      break;
                    }
                    g = g.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(s(341));
                  (u.lanes |= n),
                    (h = u.alternate),
                    h !== null && (h.lanes |= n),
                    ri(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Ye(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = ct(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ye(e, t, r, n),
          t.child
        );
      case 14:
        return (r = t.type), (l = gt(r, t.pendingProps)), (l = gt(r.type, l)), Cu(e, t, r, l, n);
      case 15:
        return Eu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : gt(r, l)),
          Il(e, t),
          (t.tag = 1),
          qe(r) ? ((e = !0), pl(t)) : (e = !1),
          On(t, n),
          Va(t, r, l),
          si(t, r, l, n),
          Ei(null, t, r, !0, e, n)
        );
      case 19:
        return Iu(e, t, n);
      case 22:
        return ku(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function tc(e, t) {
    return Ms(e, t);
  }
  function Bf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function pt(e, t, n, r) {
    return new Bf(e, t, n, r);
  }
  function Vi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wf(e) {
    if (typeof e == 'function') return Vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Je)) return 11;
      if (e === rt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = pt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function $l(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == 'function')) Vi(e) && (u = 1);
    else if (typeof e == 'string') u = 5;
    else
      e: switch (e) {
        case ee:
          return yn(n.children, l, o, t);
        case Ce:
          (u = 8), (l |= 8);
          break;
        case nt:
          return (e = pt(12, n, t, l | 2)), (e.elementType = nt), (e.lanes = o), e;
        case Ue:
          return (e = pt(13, n, t, l)), (e.elementType = Ue), (e.lanes = o), e;
        case Be:
          return (e = pt(19, n, t, l)), (e.elementType = Be), (e.lanes = o), e;
        case me:
          return Vl(n, l, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Le:
                u = 10;
                break e;
              case Nt:
                u = 9;
                break e;
              case Je:
                u = 11;
                break e;
              case rt:
                u = 14;
                break e;
              case Te:
                (u = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ''));
      }
    return (t = pt(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
  }
  function yn(e, t, n, r) {
    return (e = pt(7, e, r, t)), (e.lanes = n), e;
  }
  function Vl(e, t, n, r) {
    return (
      (e = pt(22, e, r, t)),
      (e.elementType = me),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Hi(e, t, n) {
    return (e = pt(6, e, null, t)), (e.lanes = n), e;
  }
  function Qi(e, t, n) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function $f(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = yo(0)),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ji(e, t, n, r, l, o, u, h, g) {
    return (
      (e = new $f(e, t, n, h, g)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = pt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      oi(o),
      e
    );
  }
  function Vf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ye,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function nc(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (on(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (qe(n)) return Ta(e, n, t);
    }
    return t;
  }
  function rc(e, t, n, r, l, o, u, h, g) {
    return (
      (e = Ji(n, r, !0, e, l, o, u, h, g)),
      (e.context = nc(null)),
      (n = e.current),
      (r = Ke()),
      (l = Gt(n)),
      (o = Lt(r, l)),
      (o.callback = t ?? null),
      Jt(n, o, l),
      (e.current.lanes = l),
      er(e, l, r),
      et(e, r),
      e
    );
  }
  function Hl(e, t, n, r) {
    var l = t.current,
      o = Ke(),
      u = Gt(l);
    return (
      (n = nc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Jt(l, t, u)),
      e !== null && (xt(e, l, u, o), xl(e, l, u)),
      u
    );
  }
  function Ql(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function lc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yi(e, t) {
    lc(e, t), (e = e.alternate) && lc(e, t);
  }
  function Hf() {
    return null;
  }
  var oc =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ki(e) {
    this._internalRoot = e;
  }
  (Jl.prototype.render = Ki.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Hl(e, t, null, null);
    }),
    (Jl.prototype.unmount = Ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          mn(function () {
            Hl(null, e, null, null);
          }),
            (t[_t] = null);
        }
      });
  function Jl(e) {
    this._internalRoot = e;
  }
  Jl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ws();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
      At.splice(n, 0, e), n === 0 && Hs(e);
    }
  };
  function Xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Yl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function ic() {}
  function Qf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var o = r;
        r = function () {
          var j = Ql(u);
          o.call(j);
        };
      }
      var u = rc(t, r, e, 0, null, !1, !1, '', ic);
      return (
        (e._reactRootContainer = u),
        (e[_t] = u.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var h = r;
      r = function () {
        var j = Ql(g);
        h.call(j);
      };
    }
    var g = Ji(e, 0, !1, null, null, !1, !1, '', ic);
    return (
      (e._reactRootContainer = g),
      (e[_t] = g.current),
      hr(e.nodeType === 8 ? e.parentNode : e),
      mn(function () {
        Hl(t, g, n, r);
      }),
      g
    );
  }
  function Kl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == 'function') {
        var h = l;
        l = function () {
          var g = Ql(u);
          h.call(g);
        };
      }
      Hl(t, u, e, l);
    } else u = Qf(n, t, e, l, r);
    return Ql(u);
  }
  (Us = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (wo(t, n | 1), et(t, je()), (se & 6) === 0 && ((Vn = je() + 500), Ht()));
        }
        break;
      case 13:
        mn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var l = Ke();
            xt(r, e, 1, l);
          }
        }),
          Yi(e, 1);
    }
  }),
    (xo = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ke();
          xt(t, e, 134217728, n);
        }
        Yi(e, 134217728);
      }
    }),
    (Bs = function (e) {
      if (e.tag === 13) {
        var t = Gt(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ke();
          xt(n, e, t, r);
        }
        Yi(e, t);
      }
    }),
    (Ws = function () {
      return de;
    }),
    ($s = function (e, t) {
      var n = de;
      try {
        return (de = e), t();
      } finally {
        de = n;
      }
    }),
    (fo = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((ro(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = dl(r);
                if (!l) throw Error(s(90));
                pe(r), ro(r, l);
              }
            }
          }
          break;
        case 'textarea':
          gs(e, n);
          break;
        case 'select':
          (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
      }
    }),
    (Ns = Bi),
    (_s = mn);
  var Jf = { usingClientEntryPoint: !1, Events: [gr, Dn, dl, ks, js, Bi] },
    Ir = {
      findFiberByHostInstance: sn,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom',
    },
    Yf = {
      bundleType: Ir.bundleType,
      version: Ir.version,
      rendererPackageName: Ir.rendererPackageName,
      rendererConfig: Ir.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Is(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ir.findFiberByHostInstance || Hf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xl.isDisabled && Xl.supportsFiber)
      try {
        (Jr = Xl.inject(Yf)), (St = Xl);
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf),
    (tt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xi(t)) throw Error(s(200));
      return Vf(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!Xi(e)) throw Error(s(299));
      var n = !1,
        r = '',
        l = oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ji(e, 1, !1, null, null, n, !1, r, l)),
        (e[_t] = t.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        new Ki(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(s(188))
          : ((e = Object.keys(e).join(',')), Error(s(268, e)));
      return (e = Is(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (tt.flushSync = function (e) {
      return mn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!Yl(t)) throw Error(s(200));
      return Kl(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!Xi(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        u = oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = rc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[_t] = t.current),
        hr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Jl(t);
    }),
    (tt.render = function (e, t, n) {
      if (!Yl(t)) throw Error(s(200));
      return Kl(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!Yl(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (mn(function () {
            Kl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = Bi),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Yl(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Kl(e, t, n, !1, r);
    }),
    (tt.version = '18.2.0-next-9e3b772b8-20220608'),
    tt
  );
}
var hc;
function Ic() {
  if (hc) return Zi.exports;
  hc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Zi.exports = np()), Zi.exports;
}
var mc;
function rp() {
  if (mc) return Gl;
  mc = 1;
  var i = Ic();
  return (Gl.createRoot = i.createRoot), (Gl.hydrateRoot = i.hydrateRoot), Gl;
}
var lp = rp();
const op = Tc(lp);
Ic();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fr() {
  return (
    (Fr = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (i[c] = s[c]);
          }
          return i;
        }),
    Fr.apply(this, arguments)
  );
}
var en;
(function (i) {
  (i.Pop = 'POP'), (i.Push = 'PUSH'), (i.Replace = 'REPLACE');
})(en || (en = {}));
const vc = 'popstate';
function ip(i) {
  i === void 0 && (i = {});
  function a(c, f) {
    let { pathname: p, search: m, hash: y } = c.location;
    return os(
      '',
      { pathname: p, search: m, hash: y },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || 'default'
    );
  }
  function s(c, f) {
    return typeof f == 'string' ? f : bl(f);
  }
  return ap(a, s, null, i);
}
function _e(i, a) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(a);
}
function Lc(i, a) {
  if (!i) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function sp() {
  return Math.random().toString(36).substr(2, 8);
}
function gc(i, a) {
  return { usr: i.state, key: i.key, idx: a };
}
function os(i, a, s, c) {
  return (
    s === void 0 && (s = null),
    Fr(
      { pathname: typeof i == 'string' ? i : i.pathname, search: '', hash: '' },
      typeof a == 'string' ? Qn(a) : a,
      { state: s, key: (a && a.key) || c || sp() }
    )
  );
}
function bl(i) {
  let { pathname: a = '/', search: s = '', hash: c = '' } = i;
  return (
    s && s !== '?' && (a += s.charAt(0) === '?' ? s : '?' + s),
    c && c !== '#' && (a += c.charAt(0) === '#' ? c : '#' + c),
    a
  );
}
function Qn(i) {
  let a = {};
  if (i) {
    let s = i.indexOf('#');
    s >= 0 && ((a.hash = i.substr(s)), (i = i.substr(0, s)));
    let c = i.indexOf('?');
    c >= 0 && ((a.search = i.substr(c)), (i = i.substr(0, c))), i && (a.pathname = i);
  }
  return a;
}
function ap(i, a, s, c) {
  c === void 0 && (c = {});
  let { window: f = document.defaultView, v5Compat: p = !1 } = c,
    m = f.history,
    y = en.Pop,
    w = null,
    C = _();
  C == null && ((C = 0), m.replaceState(Fr({}, m.state, { idx: C }), ''));
  function _() {
    return (m.state || { idx: null }).idx;
  }
  function N() {
    y = en.Pop;
    let z = _(),
      J = z == null ? null : z - C;
    (C = z), w && w({ action: y, location: R.location, delta: J });
  }
  function P(z, J) {
    y = en.Push;
    let q = os(R.location, z, J);
    C = _() + 1;
    let te = gc(q, C),
      b = R.createHref(q);
    try {
      m.pushState(te, '', b);
    } catch (fe) {
      if (fe instanceof DOMException && fe.name === 'DataCloneError') throw fe;
      f.location.assign(b);
    }
    p && w && w({ action: y, location: R.location, delta: 1 });
  }
  function $(z, J) {
    y = en.Replace;
    let q = os(R.location, z, J);
    C = _();
    let te = gc(q, C),
      b = R.createHref(q);
    m.replaceState(te, '', b), p && w && w({ action: y, location: R.location, delta: 0 });
  }
  function F(z) {
    let J = f.location.origin !== 'null' ? f.location.origin : f.location.href,
      q = typeof z == 'string' ? z : bl(z);
    return (
      (q = q.replace(/ $/, '%20')),
      _e(J, 'No window.location.(origin|href) available to create URL for href: ' + q),
      new URL(q, J)
    );
  }
  let R = {
    get action() {
      return y;
    },
    get location() {
      return i(f, m);
    },
    listen(z) {
      if (w) throw new Error('A history only accepts one active listener');
      return (
        f.addEventListener(vc, N),
        (w = z),
        () => {
          f.removeEventListener(vc, N), (w = null);
        }
      );
    },
    createHref(z) {
      return a(f, z);
    },
    createURL: F,
    encodeLocation(z) {
      let J = F(z);
      return { pathname: J.pathname, search: J.search, hash: J.hash };
    },
    push: P,
    replace: $,
    go(z) {
      return m.go(z);
    },
  };
  return R;
}
var yc;
(function (i) {
  (i.data = 'data'), (i.deferred = 'deferred'), (i.redirect = 'redirect'), (i.error = 'error');
})(yc || (yc = {}));
function up(i, a, s) {
  return s === void 0 && (s = '/'), cp(i, a, s);
}
function cp(i, a, s, c) {
  let f = typeof a == 'string' ? Qn(a) : a,
    p = us(f.pathname || '/', s);
  if (p == null) return null;
  let m = Mc(i);
  dp(m);
  let y = null;
  for (let w = 0; y == null && w < m.length; ++w) {
    let C = Ep(p);
    y = xp(m[w], C);
  }
  return y;
}
function Mc(i, a, s, c) {
  a === void 0 && (a = []), s === void 0 && (s = []), c === void 0 && (c = '');
  let f = (p, m, y) => {
    let w = {
      relativePath: y === void 0 ? p.path || '' : y,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: m,
      route: p,
    };
    w.relativePath.startsWith('/') &&
      (_e(
        w.relativePath.startsWith(c),
        'Absolute route path "' +
          w.relativePath +
          '" nested under path ' +
          ('"' + c + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (w.relativePath = w.relativePath.slice(c.length)));
    let C = tn([c, w.relativePath]),
      _ = s.concat(w);
    p.children &&
      p.children.length > 0 &&
      (_e(
        p.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + C + '".')
      ),
      Mc(p.children, a, _, C)),
      !(p.path == null && !p.index) && a.push({ path: C, score: yp(C, p.index), routesMeta: _ });
  };
  return (
    i.forEach((p, m) => {
      var y;
      if (p.path === '' || !((y = p.path) != null && y.includes('?'))) f(p, m);
      else for (let w of zc(p.path)) f(p, m, w);
    }),
    a
  );
}
function zc(i) {
  let a = i.split('/');
  if (a.length === 0) return [];
  let [s, ...c] = a,
    f = s.endsWith('?'),
    p = s.replace(/\?$/, '');
  if (c.length === 0) return f ? [p, ''] : [p];
  let m = zc(c.join('/')),
    y = [];
  return (
    y.push(...m.map((w) => (w === '' ? p : [p, w].join('/')))),
    f && y.push(...m),
    y.map((w) => (i.startsWith('/') && w === '' ? '/' : w))
  );
}
function dp(i) {
  i.sort((a, s) =>
    a.score !== s.score
      ? s.score - a.score
      : wp(
          a.routesMeta.map((c) => c.childrenIndex),
          s.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
const fp = /^:[\w-]+$/,
  pp = 3,
  hp = 2,
  mp = 1,
  vp = 10,
  gp = -2,
  wc = (i) => i === '*';
function yp(i, a) {
  let s = i.split('/'),
    c = s.length;
  return (
    s.some(wc) && (c += gp),
    a && (c += hp),
    s.filter((f) => !wc(f)).reduce((f, p) => f + (fp.test(p) ? pp : p === '' ? mp : vp), c)
  );
}
function wp(i, a) {
  return i.length === a.length && i.slice(0, -1).every((c, f) => c === a[f])
    ? i[i.length - 1] - a[a.length - 1]
    : 0;
}
function xp(i, a, s) {
  let { routesMeta: c } = i,
    f = {},
    p = '/',
    m = [];
  for (let y = 0; y < c.length; ++y) {
    let w = c[y],
      C = y === c.length - 1,
      _ = p === '/' ? a : a.slice(p.length) || '/',
      N = Sp({ path: w.relativePath, caseSensitive: w.caseSensitive, end: C }, _),
      P = w.route;
    if (!N) return null;
    Object.assign(f, N.params),
      m.push({
        params: f,
        pathname: tn([p, N.pathname]),
        pathnameBase: _p(tn([p, N.pathnameBase])),
        route: P,
      }),
      N.pathnameBase !== '/' && (p = tn([p, N.pathnameBase]));
  }
  return m;
}
function Sp(i, a) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, c] = Cp(i.path, i.caseSensitive, i.end),
    f = a.match(s);
  if (!f) return null;
  let p = f[0],
    m = p.replace(/(.)\/+$/, '$1'),
    y = f.slice(1);
  return {
    params: c.reduce((C, _, N) => {
      let { paramName: P, isOptional: $ } = _;
      if (P === '*') {
        let R = y[N] || '';
        m = p.slice(0, p.length - R.length).replace(/(.)\/+$/, '$1');
      }
      const F = y[N];
      return $ && !F ? (C[P] = void 0) : (C[P] = (F || '').replace(/%2F/g, '/')), C;
    }, {}),
    pathname: p,
    pathnameBase: m,
    pattern: i,
  };
}
function Cp(i, a, s) {
  a === void 0 && (a = !1),
    s === void 0 && (s = !0),
    Lc(
      i === '*' || !i.endsWith('*') || i.endsWith('/*'),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + i.replace(/\*$/, '/*') + '".')
    );
  let c = [],
    f =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (m, y, w) => (
            c.push({ paramName: y, isOptional: w != null }), w ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    i.endsWith('*')
      ? (c.push({ paramName: '*' }), (f += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : s
        ? (f += '\\/*$')
        : i !== '' && i !== '/' && (f += '(?:(?=\\/|$))'),
    [new RegExp(f, a ? void 0 : 'i'), c]
  );
}
function Ep(i) {
  try {
    return i
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      Lc(
        !1,
        'The URL path "' +
          i +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + a + ').')
      ),
      i
    );
  }
}
function us(i, a) {
  if (a === '/') return i;
  if (!i.toLowerCase().startsWith(a.toLowerCase())) return null;
  let s = a.endsWith('/') ? a.length - 1 : a.length,
    c = i.charAt(s);
  return c && c !== '/' ? null : i.slice(s) || '/';
}
function kp(i, a) {
  a === void 0 && (a = '/');
  let { pathname: s, search: c = '', hash: f = '' } = typeof i == 'string' ? Qn(i) : i;
  return { pathname: s ? (s.startsWith('/') ? s : jp(s, a)) : a, search: Pp(c), hash: Tp(f) };
}
function jp(i, a) {
  let s = a.replace(/\/+$/, '').split('/');
  return (
    i.split('/').forEach((f) => {
      f === '..' ? s.length > 1 && s.pop() : f !== '.' && s.push(f);
    }),
    s.length > 1 ? s.join('/') : '/'
  );
}
function ts(i, a, s, c) {
  return (
    "Cannot include a '" +
    i +
    "' character in a manually specified " +
    ('`to.' + a + '` field [' + JSON.stringify(c) + '].  Please separate it out to the ') +
    ('`to.' + s + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Np(i) {
  return i.filter((a, s) => s === 0 || (a.route.path && a.route.path.length > 0));
}
function cs(i, a) {
  let s = Np(i);
  return a
    ? s.map((c, f) => (f === s.length - 1 ? c.pathname : c.pathnameBase))
    : s.map((c) => c.pathnameBase);
}
function ds(i, a, s, c) {
  c === void 0 && (c = !1);
  let f;
  typeof i == 'string'
    ? (f = Qn(i))
    : ((f = Fr({}, i)),
      _e(!f.pathname || !f.pathname.includes('?'), ts('?', 'pathname', 'search', f)),
      _e(!f.pathname || !f.pathname.includes('#'), ts('#', 'pathname', 'hash', f)),
      _e(!f.search || !f.search.includes('#'), ts('#', 'search', 'hash', f)));
  let p = i === '' || f.pathname === '',
    m = p ? '/' : f.pathname,
    y;
  if (m == null) y = s;
  else {
    let N = a.length - 1;
    if (!c && m.startsWith('..')) {
      let P = m.split('/');
      for (; P[0] === '..'; ) P.shift(), (N -= 1);
      f.pathname = P.join('/');
    }
    y = N >= 0 ? a[N] : '/';
  }
  let w = kp(f, y),
    C = m && m !== '/' && m.endsWith('/'),
    _ = (p || m === '.') && s.endsWith('/');
  return !w.pathname.endsWith('/') && (C || _) && (w.pathname += '/'), w;
}
const tn = (i) => i.join('/').replace(/\/\/+/g, '/'),
  _p = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Pp = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  Tp = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i);
function Dp(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
const Rc = ['post', 'put', 'patch', 'delete'];
new Set(Rc);
const Ip = ['get', ...Rc];
new Set(Ip);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Or() {
  return (
    (Or = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (i[c] = s[c]);
          }
          return i;
        }),
    Or.apply(this, arguments)
  );
}
const fs = S.createContext(null),
  Lp = S.createContext(null),
  nn = S.createContext(null),
  eo = S.createContext(null),
  rn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = S.createContext(null);
function Mp(i, a) {
  let { relative: s } = a === void 0 ? {} : a;
  Jn() || _e(!1);
  let { basename: c, navigator: f } = S.useContext(nn),
    { hash: p, pathname: m, search: y } = Uc(i, { relative: s }),
    w = m;
  return (
    c !== '/' && (w = m === '/' ? c : tn([c, m])), f.createHref({ pathname: w, search: y, hash: p })
  );
}
function Jn() {
  return S.useContext(eo) != null;
}
function Ar() {
  return Jn() || _e(!1), S.useContext(eo).location;
}
function Oc(i) {
  S.useContext(nn).static || S.useLayoutEffect(i);
}
function Ac() {
  let { isDataRoute: i } = S.useContext(rn);
  return i ? Jp() : zp();
}
function zp() {
  Jn() || _e(!1);
  let i = S.useContext(fs),
    { basename: a, future: s, navigator: c } = S.useContext(nn),
    { matches: f } = S.useContext(rn),
    { pathname: p } = Ar(),
    m = JSON.stringify(cs(f, s.v7_relativeSplatPath)),
    y = S.useRef(!1);
  return (
    Oc(() => {
      y.current = !0;
    }),
    S.useCallback(
      function (C, _) {
        if ((_ === void 0 && (_ = {}), !y.current)) return;
        if (typeof C == 'number') {
          c.go(C);
          return;
        }
        let N = ds(C, JSON.parse(m), p, _.relative === 'path');
        i == null && a !== '/' && (N.pathname = N.pathname === '/' ? a : tn([a, N.pathname])),
          (_.replace ? c.replace : c.push)(N, _.state, _);
      },
      [a, c, m, p, i]
    )
  );
}
function Uc(i, a) {
  let { relative: s } = a === void 0 ? {} : a,
    { future: c } = S.useContext(nn),
    { matches: f } = S.useContext(rn),
    { pathname: p } = Ar(),
    m = JSON.stringify(cs(f, c.v7_relativeSplatPath));
  return S.useMemo(() => ds(i, JSON.parse(m), p, s === 'path'), [i, m, p, s]);
}
function Rp(i, a) {
  return Fp(i, a);
}
function Fp(i, a, s, c) {
  Jn() || _e(!1);
  let { navigator: f, static: p } = S.useContext(nn),
    { matches: m } = S.useContext(rn),
    y = m[m.length - 1],
    w = y ? y.params : {};
  y && y.pathname;
  let C = y ? y.pathnameBase : '/';
  y && y.route;
  let _ = Ar(),
    N;
  if (a) {
    var P;
    let J = typeof a == 'string' ? Qn(a) : a;
    C === '/' || ((P = J.pathname) != null && P.startsWith(C)) || _e(!1), (N = J);
  } else N = _;
  let $ = N.pathname || '/',
    F = $;
  if (C !== '/') {
    let J = C.replace(/^\//, '').split('/');
    F = '/' + $.replace(/^\//, '').split('/').slice(J.length).join('/');
  }
  let R = up(i, { pathname: F }),
    z = Wp(
      R &&
        R.map((J) =>
          Object.assign({}, J, {
            params: Object.assign({}, w, J.params),
            pathname: tn([
              C,
              f.encodeLocation ? f.encodeLocation(J.pathname).pathname : J.pathname,
            ]),
            pathnameBase:
              J.pathnameBase === '/'
                ? C
                : tn([
                    C,
                    f.encodeLocation ? f.encodeLocation(J.pathnameBase).pathname : J.pathnameBase,
                  ]),
          })
        ),
      m,
      s,
      c
    );
  return a && z
    ? S.createElement(
        eo.Provider,
        {
          value: {
            location: Or({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, N),
            navigationType: en.Pop,
          },
        },
        z
      )
    : z;
}
function Op() {
  let i = Qp(),
    a = Dp(i) ? i.status + ' ' + i.statusText : i instanceof Error ? i.message : JSON.stringify(i),
    s = i instanceof Error ? i.stack : null,
    f = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, a),
    s ? S.createElement('pre', { style: f }, s) : null,
    null
  );
}
const Ap = S.createElement(Op, null);
class Up extends S.Component {
  constructor(a) {
    super(a), (this.state = { location: a.location, revalidation: a.revalidation, error: a.error });
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, s) {
    return s.location !== a.location || (s.revalidation !== 'idle' && a.revalidation === 'idle')
      ? { error: a.error, location: a.location, revalidation: a.revalidation }
      : {
          error: a.error !== void 0 ? a.error : s.error,
          location: s.location,
          revalidation: a.revalidation || s.revalidation,
        };
  }
  componentDidCatch(a, s) {
    console.error('React Router caught the following error during render', a, s);
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          rn.Provider,
          { value: this.props.routeContext },
          S.createElement(Fc.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Bp(i) {
  let { routeContext: a, match: s, children: c } = i,
    f = S.useContext(fs);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = s.route.id),
    S.createElement(rn.Provider, { value: a }, c)
  );
}
function Wp(i, a, s, c) {
  var f;
  if (
    (a === void 0 && (a = []), s === void 0 && (s = null), c === void 0 && (c = null), i == null)
  ) {
    var p;
    if (!s) return null;
    if (s.errors) i = s.matches;
    else if (
      (p = c) != null &&
      p.v7_partialHydration &&
      a.length === 0 &&
      !s.initialized &&
      s.matches.length > 0
    )
      i = s.matches;
    else return null;
  }
  let m = i,
    y = (f = s) == null ? void 0 : f.errors;
  if (y != null) {
    let _ = m.findIndex((N) => N.route.id && (y == null ? void 0 : y[N.route.id]) !== void 0);
    _ >= 0 || _e(!1), (m = m.slice(0, Math.min(m.length, _ + 1)));
  }
  let w = !1,
    C = -1;
  if (s && c && c.v7_partialHydration)
    for (let _ = 0; _ < m.length; _++) {
      let N = m[_];
      if (((N.route.HydrateFallback || N.route.hydrateFallbackElement) && (C = _), N.route.id)) {
        let { loaderData: P, errors: $ } = s,
          F = N.route.loader && P[N.route.id] === void 0 && (!$ || $[N.route.id] === void 0);
        if (N.route.lazy || F) {
          (w = !0), C >= 0 ? (m = m.slice(0, C + 1)) : (m = [m[0]]);
          break;
        }
      }
    }
  return m.reduceRight((_, N, P) => {
    let $,
      F = !1,
      R = null,
      z = null;
    s &&
      (($ = y && N.route.id ? y[N.route.id] : void 0),
      (R = N.route.errorElement || Ap),
      w &&
        (C < 0 && P === 0
          ? (Yp('route-fallback'), (F = !0), (z = null))
          : C === P && ((F = !0), (z = N.route.hydrateFallbackElement || null))));
    let J = a.concat(m.slice(0, P + 1)),
      q = () => {
        let te;
        return (
          $
            ? (te = R)
            : F
              ? (te = z)
              : N.route.Component
                ? (te = S.createElement(N.route.Component, null))
                : N.route.element
                  ? (te = N.route.element)
                  : (te = _),
          S.createElement(Bp, {
            match: N,
            routeContext: { outlet: _, matches: J, isDataRoute: s != null },
            children: te,
          })
        );
      };
    return s && (N.route.ErrorBoundary || N.route.errorElement || P === 0)
      ? S.createElement(Up, {
          location: s.location,
          revalidation: s.revalidation,
          component: R,
          error: $,
          children: q(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
        })
      : q();
  }, null);
}
var Bc = (function (i) {
    return (
      (i.UseBlocker = 'useBlocker'),
      (i.UseRevalidator = 'useRevalidator'),
      (i.UseNavigateStable = 'useNavigate'),
      i
    );
  })(Bc || {}),
  Wc = (function (i) {
    return (
      (i.UseBlocker = 'useBlocker'),
      (i.UseLoaderData = 'useLoaderData'),
      (i.UseActionData = 'useActionData'),
      (i.UseRouteError = 'useRouteError'),
      (i.UseNavigation = 'useNavigation'),
      (i.UseRouteLoaderData = 'useRouteLoaderData'),
      (i.UseMatches = 'useMatches'),
      (i.UseRevalidator = 'useRevalidator'),
      (i.UseNavigateStable = 'useNavigate'),
      (i.UseRouteId = 'useRouteId'),
      i
    );
  })(Wc || {});
function $p(i) {
  let a = S.useContext(fs);
  return a || _e(!1), a;
}
function Vp(i) {
  let a = S.useContext(Lp);
  return a || _e(!1), a;
}
function Hp(i) {
  let a = S.useContext(rn);
  return a || _e(!1), a;
}
function $c(i) {
  let a = Hp(),
    s = a.matches[a.matches.length - 1];
  return s.route.id || _e(!1), s.route.id;
}
function Qp() {
  var i;
  let a = S.useContext(Fc),
    s = Vp(),
    c = $c();
  return a !== void 0 ? a : (i = s.errors) == null ? void 0 : i[c];
}
function Jp() {
  let { router: i } = $p(Bc.UseNavigateStable),
    a = $c(Wc.UseNavigateStable),
    s = S.useRef(!1);
  return (
    Oc(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (f, p) {
        p === void 0 && (p = {}),
          s.current &&
            (typeof f == 'number' ? i.navigate(f) : i.navigate(f, Or({ fromRouteId: a }, p)));
      },
      [i, a]
    )
  );
}
const xc = {};
function Yp(i, a, s) {
  xc[i] || (xc[i] = !0);
}
function Kp(i, a) {
  i == null || i.v7_startTransition, i == null || i.v7_relativeSplatPath;
}
function ns(i) {
  let { to: a, replace: s, state: c, relative: f } = i;
  Jn() || _e(!1);
  let { future: p, static: m } = S.useContext(nn),
    { matches: y } = S.useContext(rn),
    { pathname: w } = Ar(),
    C = Ac(),
    _ = ds(a, cs(y, p.v7_relativeSplatPath), w, f === 'path'),
    N = JSON.stringify(_);
  return (
    S.useEffect(() => C(JSON.parse(N), { replace: s, state: c, relative: f }), [C, N, f, s, c]),
    null
  );
}
function Rr(i) {
  _e(!1);
}
function Xp(i) {
  let {
    basename: a = '/',
    children: s = null,
    location: c,
    navigationType: f = en.Pop,
    navigator: p,
    static: m = !1,
    future: y,
  } = i;
  Jn() && _e(!1);
  let w = a.replace(/^\/*/, '/'),
    C = S.useMemo(
      () => ({ basename: w, navigator: p, static: m, future: Or({ v7_relativeSplatPath: !1 }, y) }),
      [w, y, p, m]
    );
  typeof c == 'string' && (c = Qn(c));
  let { pathname: _ = '/', search: N = '', hash: P = '', state: $ = null, key: F = 'default' } = c,
    R = S.useMemo(() => {
      let z = us(_, w);
      return z == null
        ? null
        : { location: { pathname: z, search: N, hash: P, state: $, key: F }, navigationType: f };
    }, [w, _, N, P, $, F, f]);
  return R == null
    ? null
    : S.createElement(
        nn.Provider,
        { value: C },
        S.createElement(eo.Provider, { children: s, value: R })
      );
}
function Gp(i) {
  let { children: a, location: s } = i;
  return Rp(is(a), s);
}
new Promise(() => {});
function is(i, a) {
  a === void 0 && (a = []);
  let s = [];
  return (
    S.Children.forEach(i, (c, f) => {
      if (!S.isValidElement(c)) return;
      let p = [...a, f];
      if (c.type === S.Fragment) {
        s.push.apply(s, is(c.props.children, p));
        return;
      }
      c.type !== Rr && _e(!1), !c.props.index || !c.props.children || _e(!1);
      let m = {
        id: c.props.id || p.join('-'),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        loader: c.props.loader,
        action: c.props.action,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary: c.props.ErrorBoundary != null || c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      c.props.children && (m.children = is(c.props.children, p)), s.push(m);
    }),
    s
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ss() {
  return (
    (ss = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (i[c] = s[c]);
          }
          return i;
        }),
    ss.apply(this, arguments)
  );
}
function qp(i, a) {
  if (i == null) return {};
  var s = {},
    c = Object.keys(i),
    f,
    p;
  for (p = 0; p < c.length; p++) (f = c[p]), !(a.indexOf(f) >= 0) && (s[f] = i[f]);
  return s;
}
function Zp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function bp(i, a) {
  return i.button === 0 && (!a || a === '_self') && !Zp(i);
}
const eh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  th = '6';
try {
  window.__reactRouterVersion = th;
} catch {}
const nh = 'startTransition',
  Sc = bf[nh];
function rh(i) {
  let { basename: a, children: s, future: c, window: f } = i,
    p = S.useRef();
  p.current == null && (p.current = ip({ window: f, v5Compat: !0 }));
  let m = p.current,
    [y, w] = S.useState({ action: m.action, location: m.location }),
    { v7_startTransition: C } = c || {},
    _ = S.useCallback(
      (N) => {
        C && Sc ? Sc(() => w(N)) : w(N);
      },
      [w, C]
    );
  return (
    S.useLayoutEffect(() => m.listen(_), [m, _]),
    S.useEffect(() => Kp(c), [c]),
    S.createElement(Xp, {
      basename: a,
      children: s,
      location: y.location,
      navigationType: y.action,
      navigator: m,
      future: c,
    })
  );
}
const lh =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rs = S.forwardRef(function (a, s) {
    let {
        onClick: c,
        relative: f,
        reloadDocument: p,
        replace: m,
        state: y,
        target: w,
        to: C,
        preventScrollReset: _,
        viewTransition: N,
      } = a,
      P = qp(a, eh),
      { basename: $ } = S.useContext(nn),
      F,
      R = !1;
    if (typeof C == 'string' && oh.test(C) && ((F = C), lh))
      try {
        let te = new URL(window.location.href),
          b = C.startsWith('//') ? new URL(te.protocol + C) : new URL(C),
          fe = us(b.pathname, $);
        b.origin === te.origin && fe != null ? (C = fe + b.search + b.hash) : (R = !0);
      } catch {}
    let z = Mp(C, { relative: f }),
      J = ih(C, {
        replace: m,
        state: y,
        target: w,
        preventScrollReset: _,
        relative: f,
        viewTransition: N,
      });
    function q(te) {
      c && c(te), te.defaultPrevented || J(te);
    }
    return S.createElement(
      'a',
      ss({}, P, { href: F || z, onClick: R || p ? c : q, ref: s, target: w })
    );
  });
var Cc;
(function (i) {
  (i.UseScrollRestoration = 'useScrollRestoration'),
    (i.UseSubmit = 'useSubmit'),
    (i.UseSubmitFetcher = 'useSubmitFetcher'),
    (i.UseFetcher = 'useFetcher'),
    (i.useViewTransitionState = 'useViewTransitionState');
})(Cc || (Cc = {}));
var Ec;
(function (i) {
  (i.UseFetcher = 'useFetcher'),
    (i.UseFetchers = 'useFetchers'),
    (i.UseScrollRestoration = 'useScrollRestoration');
})(Ec || (Ec = {}));
function ih(i, a) {
  let {
      target: s,
      replace: c,
      state: f,
      preventScrollReset: p,
      relative: m,
      viewTransition: y,
    } = a === void 0 ? {} : a,
    w = Ac(),
    C = Ar(),
    _ = Uc(i, { relative: m });
  return S.useCallback(
    (N) => {
      if (bp(N, s)) {
        N.preventDefault();
        let P = c !== void 0 ? c : bl(C) === bl(_);
        w(i, { replace: P, state: f, preventScrollReset: p, relative: m, viewTransition: y });
      }
    },
    [C, w, _, c, f, s, i, p, m, y]
  );
}
const Vc = S.createContext(),
  sh = (i, a) => {
    switch (a.type) {
      case 'LOGIN':
        return { user: a.payload };
      case 'LOGOUT':
        return { user: null };
      default:
        return i;
    }
  },
  ah = ({ children: i }) => {
    const [a, s] = S.useReducer(sh, { user: null });
    return (
      S.useEffect(() => {
        const c = JSON.parse(localStorage.getItem('user'));
        c && s({ type: 'LOGIN', payload: c });
      }, []),
      console.log('AuthContext state: ', a),
      d.jsx(Vc.Provider, { value: { ...a, dispatch: s }, children: i })
    );
  },
  Xe = () => {
    const i = S.useContext(Vc);
    if (!i) throw Error('useAuthContext must be used inside an AuthContextProvider');
    return i;
  },
  Hc = S.createContext(),
  uh = (i, a) => {
    switch (a.type) {
      case 'SET_INVESTMENTS':
        return { investments: a.payload };
      case 'CREATE_INVESTMENT':
        return { investments: [a.payload, ...i.investments] };
      case 'DELETE_INVESTMENT':
        return { investments: i.investments.filter((s) => s._id !== a.payload._id) };
      default:
        return i;
    }
  },
  ch = ({ children: i }) => {
    const [a, s] = S.useReducer(uh, { investments: null });
    return d.jsx(Hc.Provider, { value: { ...a, dispatch: s }, children: i });
  },
  ln = () => {
    const i = S.useContext(Hc);
    if (!i) throw Error('useInvestmentsContext must be used inside an InvestmentsContextProvider');
    return i;
  },
  Qc = S.createContext(),
  dh = (i, a) => {
    switch (a.type) {
      case 'SET_BUDGETS':
        return { budgets: a.payload };
      case 'CREATE_BUDGET':
        return { budgets: [a.payload, ...i.budgets] };
      case 'DELETE_BUDGET':
        return { budgets: i.budgets.filter((s) => s._id !== a.payload._id) };
      default:
        return i;
    }
  },
  fh = ({ children: i }) => {
    const [a, s] = S.useReducer(dh, { budgets: null });
    return d.jsx(Qc.Provider, { value: { ...a, budgetDispatch: s }, children: i });
  },
  to = () => {
    const i = S.useContext(Qc);
    if (!i) throw Error('useBudgetsContext must be used inside an BudgetsContextProvider');
    return i;
  },
  Jc = S.createContext(),
  ph = (i, a) => {
    switch (a.type) {
      case 'SET_INCOMES':
        return { incomes: a.payload };
      case 'CREATE_INCOME':
        return { incomes: [a.payload, ...i.incomes] };
      case 'DELETE_INCOME':
        return { incomes: i.incomes.filter((s) => s._id !== a.payload._id) };
      default:
        return i;
    }
  },
  hh = ({ children: i }) => {
    const [a, s] = S.useReducer(ph, { incomes: null });
    return d.jsx(Jc.Provider, { value: { ...a, incomeDispatch: s }, children: i });
  },
  Ur = () => {
    const i = S.useContext(Jc);
    if (!i) throw Error('useIncomesContext must be used inside an IncomesContextProvider');
    return i;
  },
  Yc = S.createContext(),
  mh = (i, a) => {
    switch (a.type) {
      case 'SET_FILES':
        return { ...i, files: a.payload };
      case 'CREATE_FILE':
        return { ...i, files: [a.payload, ...i.files] };
      case 'DELETE_FILE':
        return { ...i, files: i.files.filter((s) => s._id !== a.payload._id) };
      default:
        return i;
    }
  },
  vh = ({ children: i }) => {
    const [a, s] = S.useReducer(mh, { files: [] });
    return d.jsx(Yc.Provider, { value: { ...a, fileDispatch: s }, children: i });
  },
  ps = () => {
    const i = S.useContext(Yc);
    if (!i) throw Error('useBanksContext must be used inside an BanksContextProvider');
    return i;
  },
  Kc = S.createContext(),
  gh = (i, a) => {
    switch (a.type) {
      case 'SET_NOTIFICATIONS':
        return { notifications: a.payload };
      case 'CREATE_NOTIFICATION':
        return { notifications: [a.payload, ...i.notifications] };
      case 'DELETE_NOTIFICATION':
        return { notifications: i.notifications.filter((s) => s._id !== a.payload._id) };
      default:
        return i;
    }
  },
  yh = ({ children: i }) => {
    const [a, s] = S.useReducer(gh, { notifications: null });
    return d.jsx(Kc.Provider, { value: { ...a, notificationDispatch: s }, children: i });
  },
  Xc = () => {
    const i = S.useContext(Kc);
    if (!i)
      throw Error('useNotificationsContext must be used inside an NotificationsContextProvider');
    return i;
  },
  wh = ({ setActiveView: i, notifications: a }) => {
    const [s, c] = S.useState(null),
      f = a || [],
      p = f.length > 0,
      m = (w) => {
        i(w), c(w);
      },
      y = (w) => {
        let C = {
          padding: '10px 20px',
          backgroundColor: s === w ? 'grey' : 'white',
          color: s === w ? 'white' : 'green',
          border: 'none',
          cursor: 'pointer',
        };
        return (
          w === 'notifications' &&
            p &&
            ((C.backgroundColor = s === w ? 'grey' : 'red'), (C.color = 'white')),
          C
        );
      };
    return d.jsx('nav', {
      children: d.jsxs('ul', {
        className: 'sidebar',
        children: [
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsx('button', {
              style: y('investments'),
              onClick: () => m('investments'),
              children: 'Investments',
            }),
          }),
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsx('button', {
              style: y('budgets'),
              onClick: () => m('budgets'),
              children: 'Budgets',
            }),
          }),
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsx('button', {
              style: y('incomes'),
              onClick: () => m('incomes'),
              children: 'Incomes',
            }),
          }),
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsx('button', {
              style: y('statements'),
              onClick: () => m('statements'),
              children: 'Statements',
            }),
          }),
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsx('button', {
              style: y('spendingSummary'),
              onClick: () => m('spendingSummary'),
              children: 'Spending Summary',
            }),
          }),
          d.jsx('li', {
            className: 'sidebar',
            children: d.jsxs('button', {
              style: y('notifications'),
              onClick: () => m('notifications'),
              children: ['Notifications ', p && d.jsxs('span', { children: ['(', f.length, ')'] })],
            }),
          }),
        ],
      }),
    });
  },
  xh = ({ setActiveViewInvestment: i }) =>
    d.jsx('nav', {
      children: d.jsxs('ul', {
        className: 'investmentBar',
        children: [
          d.jsx('li', {
            className: 'investmentBar',
            children: d.jsx('button', {
              onClick: () => i('investmentAnalysis'),
              children: 'Investment Analysis',
            }),
          }),
          d.jsx('li', {
            className: 'investmentBar',
            children: d.jsx('button', {
              onClick: () => i('investmentForm'),
              children: 'Investment Form',
            }),
          }),
        ],
      }),
    });
function Sh(i, a) {
  return i instanceof Date ? new i.constructor(a) : new Date(a);
}
function Ch(i) {
  return Sh(i, Date.now());
}
function Ae(i) {
  const a = Object.prototype.toString.call(i);
  return i instanceof Date || (typeof i == 'object' && a === '[object Date]')
    ? new i.constructor(+i)
    : typeof i == 'number' ||
        a === '[object Number]' ||
        typeof i == 'string' ||
        a === '[object String]'
      ? new Date(i)
      : new Date(NaN);
}
function Zl(i, a) {
  const s = Ae(i),
    c = Ae(a),
    f = s.getTime() - c.getTime();
  return f < 0 ? -1 : f > 0 ? 1 : f;
}
const ql = 43200,
  kc = 1440;
function Eh(i, a) {
  const s = Ae(i),
    c = Ae(a),
    f = s.getFullYear() - c.getFullYear(),
    p = s.getMonth() - c.getMonth();
  return f * 12 + p;
}
function kh(i) {
  const a = Ae(i);
  return a.setHours(23, 59, 59, 999), a;
}
function jh(i) {
  const a = Ae(i),
    s = a.getMonth();
  return a.setFullYear(a.getFullYear(), s + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function Nh(i) {
  const a = Ae(i);
  return +kh(a) == +jh(a);
}
function _h(i, a) {
  const s = Ae(i),
    c = Ae(a),
    f = Zl(s, c),
    p = Math.abs(Eh(s, c));
  let m;
  if (p < 1) m = 0;
  else {
    s.getMonth() === 1 && s.getDate() > 27 && s.setDate(30), s.setMonth(s.getMonth() - f * p);
    let y = Zl(s, c) === -f;
    Nh(Ae(i)) && p === 1 && Zl(i, c) === 1 && (y = !1), (m = f * (p - Number(y)));
  }
  return m === 0 ? 0 : m;
}
function Ph(i) {
  return (a) => {
    const c = (i ? Math[i] : Math.trunc)(a);
    return c === 0 ? 0 : c;
  };
}
function Th(i, a) {
  return +Ae(i) - +Ae(a);
}
function Dh(i, a, s) {
  const c = Th(i, a) / 1e3;
  return Ph(s == null ? void 0 : s.roundingMethod)(c);
}
const Ih = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  Lh = (i, a, s) => {
    let c;
    const f = Ih[i];
    return (
      typeof f == 'string'
        ? (c = f)
        : a === 1
          ? (c = f.one)
          : (c = f.other.replace('{{count}}', a.toString())),
      s != null && s.addSuffix ? (s.comparison && s.comparison > 0 ? 'in ' + c : c + ' ago') : c
    );
  };
function ls(i) {
  return (a = {}) => {
    const s = a.width ? String(a.width) : i.defaultWidth;
    return i.formats[s] || i.formats[i.defaultWidth];
  };
}
const Mh = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  zh = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  Rh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Fh = {
    date: ls({ formats: Mh, defaultWidth: 'full' }),
    time: ls({ formats: zh, defaultWidth: 'full' }),
    dateTime: ls({ formats: Rh, defaultWidth: 'full' }),
  },
  Oh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  Ah = (i, a, s, c) => Oh[i];
function Mr(i) {
  return (a, s) => {
    const c = s != null && s.context ? String(s.context) : 'standalone';
    let f;
    if (c === 'formatting' && i.formattingValues) {
      const m = i.defaultFormattingWidth || i.defaultWidth,
        y = s != null && s.width ? String(s.width) : m;
      f = i.formattingValues[y] || i.formattingValues[m];
    } else {
      const m = i.defaultWidth,
        y = s != null && s.width ? String(s.width) : i.defaultWidth;
      f = i.values[y] || i.values[m];
    }
    const p = i.argumentCallback ? i.argumentCallback(a) : a;
    return f[p];
  };
}
const Uh = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  Bh = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  Wh = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  $h = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  Vh = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  Hh = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  Qh = (i, a) => {
    const s = Number(i),
      c = s % 100;
    if (c > 20 || c < 10)
      switch (c % 10) {
        case 1:
          return s + 'st';
        case 2:
          return s + 'nd';
        case 3:
          return s + 'rd';
      }
    return s + 'th';
  },
  Jh = {
    ordinalNumber: Qh,
    era: Mr({ values: Uh, defaultWidth: 'wide' }),
    quarter: Mr({ values: Bh, defaultWidth: 'wide', argumentCallback: (i) => i - 1 }),
    month: Mr({ values: Wh, defaultWidth: 'wide' }),
    day: Mr({ values: $h, defaultWidth: 'wide' }),
    dayPeriod: Mr({
      values: Vh,
      defaultWidth: 'wide',
      formattingValues: Hh,
      defaultFormattingWidth: 'wide',
    }),
  };
function zr(i) {
  return (a, s = {}) => {
    const c = s.width,
      f = (c && i.matchPatterns[c]) || i.matchPatterns[i.defaultMatchWidth],
      p = a.match(f);
    if (!p) return null;
    const m = p[0],
      y = (c && i.parsePatterns[c]) || i.parsePatterns[i.defaultParseWidth],
      w = Array.isArray(y) ? Kh(y, (N) => N.test(m)) : Yh(y, (N) => N.test(m));
    let C;
    (C = i.valueCallback ? i.valueCallback(w) : w), (C = s.valueCallback ? s.valueCallback(C) : C);
    const _ = a.slice(m.length);
    return { value: C, rest: _ };
  };
}
function Yh(i, a) {
  for (const s in i) if (Object.prototype.hasOwnProperty.call(i, s) && a(i[s])) return s;
}
function Kh(i, a) {
  for (let s = 0; s < i.length; s++) if (a(i[s])) return s;
}
function Xh(i) {
  return (a, s = {}) => {
    const c = a.match(i.matchPattern);
    if (!c) return null;
    const f = c[0],
      p = a.match(i.parsePattern);
    if (!p) return null;
    let m = i.valueCallback ? i.valueCallback(p[0]) : p[0];
    m = s.valueCallback ? s.valueCallback(m) : m;
    const y = a.slice(f.length);
    return { value: m, rest: y };
  };
}
const Gh = /^(\d+)(th|st|nd|rd)?/i,
  qh = /\d+/i,
  Zh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  bh = { any: [/^b/i, /^(a|c)/i] },
  em = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  tm = { any: [/1/i, /2/i, /3/i, /4/i] },
  nm = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  rm = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  lm = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  om = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  im = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  sm = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  am = {
    ordinalNumber: Xh({
      matchPattern: Gh,
      parsePattern: qh,
      valueCallback: (i) => parseInt(i, 10),
    }),
    era: zr({
      matchPatterns: Zh,
      defaultMatchWidth: 'wide',
      parsePatterns: bh,
      defaultParseWidth: 'any',
    }),
    quarter: zr({
      matchPatterns: em,
      defaultMatchWidth: 'wide',
      parsePatterns: tm,
      defaultParseWidth: 'any',
      valueCallback: (i) => i + 1,
    }),
    month: zr({
      matchPatterns: nm,
      defaultMatchWidth: 'wide',
      parsePatterns: rm,
      defaultParseWidth: 'any',
    }),
    day: zr({
      matchPatterns: lm,
      defaultMatchWidth: 'wide',
      parsePatterns: om,
      defaultParseWidth: 'any',
    }),
    dayPeriod: zr({
      matchPatterns: im,
      defaultMatchWidth: 'any',
      parsePatterns: sm,
      defaultParseWidth: 'any',
    }),
  },
  um = {
    code: 'en-US',
    formatDistance: Lh,
    formatLong: Fh,
    formatRelative: Ah,
    localize: Jh,
    match: am,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
let cm = {};
function dm() {
  return cm;
}
function jc(i) {
  const a = Ae(i),
    s = new Date(
      Date.UTC(
        a.getFullYear(),
        a.getMonth(),
        a.getDate(),
        a.getHours(),
        a.getMinutes(),
        a.getSeconds(),
        a.getMilliseconds()
      )
    );
  return s.setUTCFullYear(a.getFullYear()), +i - +s;
}
function fm(i, a, s) {
  const c = dm(),
    f = (s == null ? void 0 : s.locale) ?? c.locale ?? um,
    p = 2520,
    m = Zl(i, a);
  if (isNaN(m)) throw new RangeError('Invalid time value');
  const y = Object.assign({}, s, { addSuffix: s == null ? void 0 : s.addSuffix, comparison: m });
  let w, C;
  m > 0 ? ((w = Ae(a)), (C = Ae(i))) : ((w = Ae(i)), (C = Ae(a)));
  const _ = Dh(C, w),
    N = (jc(C) - jc(w)) / 1e3,
    P = Math.round((_ - N) / 60);
  let $;
  if (P < 2)
    return s != null && s.includeSeconds
      ? _ < 5
        ? f.formatDistance('lessThanXSeconds', 5, y)
        : _ < 10
          ? f.formatDistance('lessThanXSeconds', 10, y)
          : _ < 20
            ? f.formatDistance('lessThanXSeconds', 20, y)
            : _ < 40
              ? f.formatDistance('halfAMinute', 0, y)
              : _ < 60
                ? f.formatDistance('lessThanXMinutes', 1, y)
                : f.formatDistance('xMinutes', 1, y)
      : P === 0
        ? f.formatDistance('lessThanXMinutes', 1, y)
        : f.formatDistance('xMinutes', P, y);
  if (P < 45) return f.formatDistance('xMinutes', P, y);
  if (P < 90) return f.formatDistance('aboutXHours', 1, y);
  if (P < kc) {
    const F = Math.round(P / 60);
    return f.formatDistance('aboutXHours', F, y);
  } else {
    if (P < p) return f.formatDistance('xDays', 1, y);
    if (P < ql) {
      const F = Math.round(P / kc);
      return f.formatDistance('xDays', F, y);
    } else if (P < ql * 2) return ($ = Math.round(P / ql)), f.formatDistance('aboutXMonths', $, y);
  }
  if ((($ = _h(C, w)), $ < 12)) {
    const F = Math.round(P / ql);
    return f.formatDistance('xMonths', F, y);
  } else {
    const F = $ % 12,
      R = Math.trunc($ / 12);
    return F < 3
      ? f.formatDistance('aboutXYears', R, y)
      : F < 9
        ? f.formatDistance('overXYears', R, y)
        : f.formatDistance('almostXYears', R + 1, y);
  }
}
function Br(i, a) {
  return fm(i, Ch(i), a);
}
const pm = ({ investment: i }) => {
    const { dispatch: a } = ln(),
      { user: s } = Xe(),
      c = async () => {
        if (!s) return;
        const f = await fetch(
            'https://budget-buddy-production.up.railway.app/api/investments/' + i._id,
            { method: 'DELETE', headers: { Authorization: `Bearer ${s.token}` } }
          ),
          p = await f.json();
        f.ok && a({ type: 'DELETE_INVESTMENT', payload: p });
      };
    return d.jsxs('div', {
      className: 'investment-details',
      children: [
        d.jsx('h4', { children: i.title }),
        d.jsxs('p', { children: [d.jsx('strong', { children: 'Amount in $:' }), ' ', i.amount] }),
        d.jsxs('p', { children: [d.jsx('strong', { children: 'Type:' }), ' ', i.investmentType] }),
        d.jsxs('p', {
          children: [d.jsx('strong', { children: 'Description:' }), ' ', i.investmentDescription],
        }),
        i.isRecurring &&
          d.jsxs(d.Fragment, {
            children: [
              d.jsxs('p', { children: [d.jsx('strong', { children: 'Recurring:' }), ' Yes'] }),
              d.jsxs('p', {
                children: [d.jsx('strong', { children: 'Frequency:' }), ' ', i.recurrenceFrequency],
              }),
              d.jsxs('p', {
                children: [
                  d.jsx('strong', { children: 'Start Date:' }),
                  ' ',
                  new Date(i.startDate).toLocaleDateString(),
                ],
              }),
            ],
          }),
        d.jsx('p', { children: Br(new Date(i.createdAt), { addSuffix: !0 }) }),
        d.jsx('span', { className: 'material-symbols-outlined', onClick: c, children: 'delete' }),
      ],
    });
  },
  hm = () => {
    const { dispatch: i } = ln(),
      { user: a } = Xe(),
      [s, c] = S.useState(''),
      [f, p] = S.useState(''),
      [m, y] = S.useState(''),
      [w, C] = S.useState(''),
      [_, N] = S.useState(''),
      [P, $] = S.useState(!1),
      [F, R] = S.useState(''),
      [z, J] = S.useState(''),
      [q, te] = S.useState(null),
      [b, fe] = S.useState([]),
      ye = async (ee) => {
        if ((ee.preventDefault(), !a)) {
          te('You must be logged in');
          return;
        }
        let Ce = {
          title: s,
          amount: f,
          investmentType: m === 'other' ? w : m,
          investmentDescription: _,
          isRecurring: P,
        };
        if (P) {
          if (!F) {
            te('Recurrence frequency is required for recurring payments.'),
              fe(['recurrenceFrequency']);
            return;
          }
          if (!z) {
            te('Start date is required for recurring payments.'), fe(['startDate']);
            return;
          }
          (Ce.recurrenceFrequency = F), (Ce.startDate = z);
        }
        const nt = await fetch('https://budget-buddy-production.up.railway.app/api/investments', {
            method: 'POST',
            body: JSON.stringify(Ce),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${a.token}` },
          }),
          Le = await nt.json();
        nt.ok
          ? (c(''),
            p(''),
            y(''),
            C(''),
            N(''),
            $(!1),
            R(''),
            J(''),
            te(null),
            fe([]),
            console.log('New Investment Added', Le),
            i({ type: 'CREATE_INVESTMENT', payload: Le }))
          : (te(Le.error), fe(Le.emptyFields || []));
      };
    return d.jsxs('form', {
      className: 'create',
      onSubmit: ye,
      children: [
        d.jsx('h3', { children: 'Add a New Investment' }),
        d.jsx('label', { children: 'Investment Title:' }),
        d.jsx('input', {
          type: 'text',
          onChange: (ee) => c(ee.target.value),
          value: s,
          className: b.includes('title') ? 'error' : '',
        }),
        d.jsx('label', { children: 'Amount in $:' }),
        d.jsx('input', {
          type: 'number',
          onChange: (ee) => p(ee.target.value),
          value: f,
          min: '0',
          className: b.includes('amount') ? 'error' : '',
        }),
        d.jsx('label', { children: 'Type:' }),
        d.jsxs('select', {
          onChange: (ee) => y(ee.target.value),
          value: m,
          className: b.includes('investmentType') ? 'error' : '',
          children: [
            d.jsx('option', { value: '' }),
            d.jsx('option', { value: 'gas', children: 'Gas' }),
            d.jsx('option', { value: 'groceries', children: 'Groceries' }),
            d.jsx('option', { value: 'subscriptions', children: 'Subscriptions' }),
            d.jsx('option', { value: 'other', children: 'Other' }),
          ],
        }),
        m === 'other' &&
          d.jsxs(d.Fragment, {
            children: [
              d.jsx('label', { children: 'Custom Investment Type:' }),
              d.jsx('input', {
                type: 'text',
                onChange: (ee) => C(ee.target.value),
                value: w,
                className: b.includes('customInvestmentType') ? 'error' : '',
              }),
            ],
          }),
        d.jsx('label', { children: 'Is this a recurring payment?' }),
        d.jsx('input', {
          style: { width: '30px', height: '30px' },
          type: 'checkbox',
          onChange: (ee) => $(ee.target.checked),
          checked: P,
        }),
        P &&
          d.jsxs(d.Fragment, {
            children: [
              d.jsx('label', { children: 'Recurrence Frequency:' }),
              d.jsxs('select', {
                onChange: (ee) => R(ee.target.value),
                value: F,
                className: b.includes('recurrenceFrequency') ? 'error' : '',
                children: [
                  d.jsx('option', { value: '' }),
                  d.jsx('option', { value: 'weekly', children: 'Weekly' }),
                  d.jsx('option', { value: 'monthly', children: 'Monthly' }),
                  d.jsx('option', { value: 'yearly', children: 'Yearly' }),
                ],
              }),
              d.jsx('label', { children: 'Start Date:' }),
              d.jsx('input', {
                type: 'date',
                onChange: (ee) => J(ee.target.value),
                value: z,
                className: b.includes('startDate') ? 'error' : '',
              }),
            ],
          }),
        d.jsx('label', { children: 'Investment Description:' }),
        d.jsx('textarea', {
          type: 'text',
          onChange: (ee) => N(ee.target.value),
          value: _,
          className: b.includes('investmentDescription') ? 'error' : 'description',
        }),
        d.jsx('button', { children: 'Add Investment' }),
        q && d.jsx('div', { className: 'error', children: q }),
      ],
    });
  },
  mm = ({ budget: i }) => {
    const { budgetDispatch: a } = to(),
      { user: s } = Xe(),
      c = async () => {
        if (!s) return;
        const f = await fetch(
            'https://budget-buddy-production.up.railway.app/api/budgets/' + i._id,
            { method: 'DELETE', headers: { Authorization: `Bearer ${s.token}` } }
          ),
          p = await f.json();
        f.ok && a({ type: 'DELETE_BUDGET', payload: p });
      };
    return d.jsxs('div', {
      className: 'budget-details',
      children: [
        d.jsxs('p', {
          children: [d.jsx('strong', { children: ' Budget in $: ' }), ' ', i.amount, ' '],
        }),
        d.jsx('p', { children: Br(new Date(i.createdAt), { addSuffix: !0 }) }),
        d.jsx('span', { className: 'material-symbols-outlined', onClick: c, children: 'delete' }),
      ],
    });
  },
  vm = () => {
    const { budgetDispatch: i } = to(),
      { user: a } = Xe(),
      [s, c] = S.useState(''),
      [f, p] = S.useState(null),
      [m, y] = S.useState([]),
      w = async (C) => {
        if ((C.preventDefault(), !a)) {
          p('You must be logged in');
          return;
        }
        const N = await fetch('https://budget-buddy-production.up.railway.app/api/budgets', {
            method: 'POST',
            body: JSON.stringify({ amount: s }),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${a.token}` },
          }),
          P = await N.json();
        N.ok
          ? (c(''),
            p(null),
            y([]),
            console.log('New Budget Added', P),
            i({ type: 'CREATE_BUDGET', payload: P }))
          : (p(P.error), y(P.emptyFields || []));
      };
    return d.jsxs('form', {
      className: 'create',
      onSubmit: w,
      children: [
        d.jsx('h3', { children: ' Add a New Budget' }),
        d.jsx('label', { children: ' Budget in $: ' }),
        d.jsx('input', {
          type: 'number',
          onChange: (C) => c(C.target.value),
          value: s,
          min: '0',
          className: m.includes('amount') ? 'error' : '',
        }),
        d.jsx('button', { children: ' Add Budget ' }),
        f && d.jsx('div', { className: 'error', children: f }),
      ],
    });
  },
  gm = ({ income: i }) => {
    const { incomeDispatch: a } = Ur(),
      { user: s } = Xe(),
      c = async () => {
        if (!s) return;
        const f = await fetch(
            'https://budget-buddy-production.up.railway.app/api/incomes/' + i._id,
            { method: 'DELETE', headers: { Authorization: `Bearer ${s.token}` } }
          ),
          p = await f.json();
        f.ok && a({ type: 'DELETE_INCOME', payload: p });
      };
    return d.jsxs('div', {
      className: 'income-details',
      children: [
        d.jsx('h4', { children: i.incomeType }),
        d.jsxs('p', { children: [d.jsx('strong', { children: ' Amount in $: ' }), ' ', i.amount] }),
        d.jsx('p', { children: Br(new Date(i.createdAt), { addSuffix: !0 }) }),
        d.jsx('span', { className: 'material-symbols-outlined', onClick: c, children: 'delete' }),
      ],
    });
  },
  ym = () => {
    const { incomeDispatch: i } = Ur(),
      { user: a } = Xe(),
      [s, c] = S.useState(''),
      [f, p] = S.useState(null),
      [m, y] = S.useState(''),
      [w, C] = S.useState([]),
      _ = async (N) => {
        if ((N.preventDefault(), !a)) {
          p('You must be logged in');
          return;
        }
        const $ = await fetch('https://budget-buddy-production.up.railway.app/api/incomes', {
            method: 'POST',
            body: JSON.stringify({ amount: s, incomeType: m }),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${a.token}` },
          }),
          F = await $.json();
        $.ok
          ? (c(''),
            y(''),
            p(null),
            C([]),
            console.log('New Income Added', F),
            i({ type: 'CREATE_INCOME', payload: F }))
          : (p(F.error), C(F.EmptyFields || []));
      };
    return d.jsxs('form', {
      className: 'create',
      onSubmit: _,
      children: [
        d.jsx('h3', { children: ' Add a New Income Source ' }),
        d.jsx('label', { children: ' Amount in $: ' }),
        d.jsx('input', {
          type: 'number',
          onChange: (N) => c(N.target.value),
          value: s,
          min: '0',
          className: w.includes('amount') ? 'error' : '',
        }),
        d.jsx('label', { children: ' Income Type: ' }),
        d.jsxs('select', {
          onChange: (N) => y(N.target.value),
          value: m,
          className: w.includes('incomeType') ? 'error' : '',
          children: [
            d.jsx('option', { value: '', children: ' ' }),
            d.jsx('option', { value: 'active', children: ' Active ' }),
            d.jsx('option', { value: 'passive', children: ' Passive ' }),
          ],
        }),
        d.jsx('button', { children: ' Add Income ' }),
        f && d.jsxs('div', { className: 'error', children: [' ', f, ' '] }),
      ],
    });
  },
  wm = ({ file: i }) => {
    const { fileDispatch: a } = ps(),
      { user: s } = Xe(),
      c = (y) => {
        const w = new Date(y);
        return isNaN(w.getTime()) ? null : w;
      },
      f = async () => {
        if (!s) return;
        const y = await fetch('https://budget-buddy-production.up.railway.app/api/banks/' + i._id, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${s.token}` },
          }),
          w = await y.json();
        y.ok && a({ type: 'DELETE_FILE', payload: w });
      },
      p = c(i.createdAt),
      m = c(i.date);
    return d.jsxs('div', {
      className: 'investment-details',
      children: [
        d.jsx('h4', { children: i.title }),
        d.jsxs('p', { children: [d.jsx('strong', { children: 'Amount in $: ' }), i.amount] }),
        d.jsxs('p', {
          children: [
            d.jsx('strong', { children: 'Date: ' }),
            m ? m.toDateString() : 'Invalid date',
          ],
        }),
        d.jsxs('p', { children: [d.jsx('strong', { children: 'Description: ' }), i.description] }),
        d.jsx('p', { children: p ? Br(p, { addSuffix: !0 }) : 'Invalid date' }),
        d.jsx('span', { className: 'material-symbols-outlined', onClick: f, children: 'delete' }),
      ],
    });
  },
  xm = () => {
    const { fileDispatch: i } = ps(),
      { user: a } = Xe(),
      [s, c] = S.useState(null),
      [f, p] = S.useState(null),
      m = (w) => {
        c(w.target.files[0]);
      },
      y = async (w) => {
        if ((w.preventDefault(), !a)) {
          p('You must be logged in');
          return;
        }
        if (!s) {
          p('Please select a file to upload');
          return;
        }
        const C = new FormData();
        C.append('file', s);
        try {
          const _ = await fetch('https://budget-buddy-production.up.railway.app/api/banks', {
              method: 'POST',
              headers: { Authorization: `Bearer ${a.token}` },
              body: C,
            }),
            N = await _.json();
          if (!_.ok) {
            p(N.error || 'Upload failed');
            return;
          }
          console.log('New File Added', N), i({ type: 'CREATE_FILE', payload: N }), p(null);
        } catch (_) {
          p('An error occurred while uploading: ' + _.message);
        }
      };
    return d.jsxs('form', {
      className: 'upload-form',
      onSubmit: y,
      children: [
        d.jsx('h3', { children: 'Upload Bank Statement' }),
        d.jsx('label', { children: 'Choose QFX file:' }),
        d.jsx('input', { type: 'file', accept: '.qfx', onChange: m, className: f ? 'error' : '' }),
        d.jsx('button', { type: 'submit', children: 'Upload' }),
        f && d.jsx('div', { className: 'error-message', children: f }),
      ],
    });
  };
function Sm(i, a, s) {
  S.useEffect(() => {
    if (!document) return;
    const c = document.querySelector('script[src="'.concat(i, '"]'));
    if (c != null && c.dataset.loaded) {
      a == null || a();
      return;
    }
    const f = c || document.createElement('script');
    c || (f.src = i);
    const p = () => {
      (f.dataset.loaded = '1'), a == null || a();
    };
    f.addEventListener('load', p),
      s && f.addEventListener('error', s),
      c || document.head.append(f);
  }, []);
}
function Cm(i) {
  let {
    chartVersion: a = 'current',
    chartPackages: s = ['corechart', 'controls'],
    chartLanguage: c = 'en',
    mapsApiKey: f,
  } = i;
  const [p, m] = S.useState(null),
    [y, w] = S.useState(!1);
  return (
    Sm(
      'https://www.gstatic.com/charts/loader.js',
      () => {
        const C = window == null ? void 0 : window.google;
        C &&
          (C.charts.load(a, { packages: s, language: c, mapsApiKey: f }),
          C.charts.setOnLoadCallback(() => {
            m(C);
          }));
      },
      () => {
        w(!0);
      }
    ),
    [p, y]
  );
}
function Em(i) {
  let { onLoad: a, onError: s, ...c } = i;
  const [f, p] = Cm(c);
  return (
    S.useEffect(() => {
      f && a && a(f);
    }, [f]),
    S.useEffect(() => {
      p && s && s();
    }, [p]),
    null
  );
}
const Gc = {
  legend_toggle: !1,
  options: {},
  legendToggle: !1,
  getChartWrapper: () => {},
  spreadSheetQueryParameters: { headers: 1, gid: 1 },
  rootProps: {},
  chartWrapperParams: {},
};
let Nc = 0;
const km = () => ((Nc += 1), 'reactgooglegraph-'.concat(Nc)),
  jm = [
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#990099',
    '#3B3EAC',
    '#0099C6',
    '#DD4477',
    '#66AA00',
    '#B82E2E',
    '#316395',
    '#994499',
    '#22AA99',
    '#AAAA11',
    '#6633CC',
    '#E67300',
    '#8B0707',
    '#329262',
    '#5574A6',
    '#3B3EAC',
  ],
  Nm = async function (i, a) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise((c, f) => {
      const p = ''.concat(s.headers ? 'headers='.concat(s.headers) : 'headers=0'),
        m = ''.concat(s.query ? '&tq='.concat(encodeURIComponent(s.query)) : ''),
        y = ''.concat(s.gid ? '&gid='.concat(s.gid) : ''),
        w = ''.concat(s.sheet ? '&sheet='.concat(s.sheet) : ''),
        C = ''.concat(s.access_token ? '&access_token='.concat(s.access_token) : ''),
        _ = ''.concat(p).concat(y).concat(w).concat(m).concat(C),
        N = ''.concat(a, '/gviz/tq?').concat(_);
      new i.visualization.Query(N).send(($) => {
        $.isError()
          ? f('Error in query:  '.concat($.getMessage(), ' ').concat($.getDetailedMessage()))
          : c($.getDataTable());
      });
    });
  },
  { Provider: _m, Consumer: Pm } = S.createContext(Gc),
  Tm = (i) => {
    let { children: a, value: s } = i;
    return S.createElement(_m, { value: s }, a);
  },
  qc = (i) => {
    let { render: a } = i;
    return S.createElement(Pm, null, (s) => a(s));
  },
  Dm = '#CCCCCC';
class Im extends S.Component {
  componentDidMount() {
    this.draw(this.props),
      window.addEventListener('resize', this.onResize),
      (this.props.legend_toggle || this.props.legendToggle) && this.listenToLegendToggle();
  }
  componentWillUnmount() {
    const { google: a, googleChartWrapper: s } = this.props;
    window.removeEventListener('resize', this.onResize),
      a.visualization.events.removeAllListeners(s),
      s.getChartType() === 'Timeline' && s.getChart() && s.getChart().clearChart();
  }
  componentDidUpdate() {
    this.draw(this.props);
  }
  render() {
    return null;
  }
  constructor(...a) {
    super(...a),
      (this.state = { hiddenColumns: [] }),
      (this.listenToLegendToggle = () => {
        const { google: s, googleChartWrapper: c } = this.props;
        s.visualization.events.addListener(c, 'select', () => {
          const p = c.getChart().getSelection(),
            m = c.getDataTable();
          if (p.length === 0 || p[0].row || !m) return;
          const y = p[0].column,
            w = this.getColumnID(m, y);
          this.state.hiddenColumns.includes(w)
            ? this.setState((C) => ({
                ...C,
                hiddenColumns: [...C.hiddenColumns.filter((_) => _ !== w)],
              }))
            : this.setState((C) => ({ ...C, hiddenColumns: [...C.hiddenColumns, w] }));
        });
      }),
      (this.applyFormatters = (s, c) => {
        const { google: f } = this.props;
        for (let p of c)
          switch (p.type) {
            case 'ArrowFormat': {
              new f.visualization.ArrowFormat(p.options).format(s, p.column);
              break;
            }
            case 'BarFormat': {
              new f.visualization.BarFormat(p.options).format(s, p.column);
              break;
            }
            case 'ColorFormat': {
              const m = new f.visualization.ColorFormat(p.options),
                { ranges: y } = p;
              for (let w of y) m.addRange(...w);
              m.format(s, p.column);
              break;
            }
            case 'DateFormat': {
              new f.visualization.DateFormat(p.options).format(s, p.column);
              break;
            }
            case 'NumberFormat': {
              new f.visualization.NumberFormat(p.options).format(s, p.column);
              break;
            }
            case 'PatternFormat': {
              new f.visualization.PatternFormat(p.options).format(s, p.column);
              break;
            }
          }
      }),
      (this.getColumnID = (s, c) => s.getColumnId(c) || s.getColumnLabel(c)),
      (this.draw = async (s) => {
        let {
          data: c,
          diffdata: f,
          rows: p,
          columns: m,
          options: y,
          legend_toggle: w,
          legendToggle: C,
          chartType: _,
          formatters: N,
          spreadSheetUrl: P,
          spreadSheetQueryParameters: $,
        } = s;
        const { google: F, googleChartWrapper: R } = this.props;
        let z,
          J = null;
        if (f) {
          const ye = F.visualization.arrayToDataTable(f.old),
            ee = F.visualization.arrayToDataTable(f.new);
          J = F.visualization[_].prototype.computeDiff(ye, ee);
        }
        c
          ? Array.isArray(c)
            ? (z = F.visualization.arrayToDataTable(c))
            : (z = new F.visualization.DataTable(c))
          : p && m
            ? (z = F.visualization.arrayToDataTable([m, ...p]))
            : P
              ? (z = await Nm(F, P, $))
              : (z = F.visualization.arrayToDataTable([]));
        const q = z.getNumberOfColumns(),
          te = Array(q)
            .fill(0)
            .map((ye, ee) => {
              const Ce = this.getColumnID(z, ee);
              return this.state.hiddenColumns.includes(Ce)
                ? { label: z.getColumnLabel(ee), type: z.getColumnType(ee), calc: () => null }
                : ee;
            }),
          b = R.getChart();
        R.getChartType() === 'Timeline' && b && b.clearChart(),
          R.setChartType(_),
          R.setOptions(y || {});
        const fe = new F.visualization.DataView(z);
        fe.setColumns(te),
          R.setDataTable(fe),
          R.draw(),
          this.props.googleChartDashboard !== null && this.props.googleChartDashboard.draw(z),
          J && (R.setDataTable(J), R.draw()),
          N && (this.applyFormatters(z, N), R.setDataTable(z), R.draw()),
          (C === !0 || w === !0) && this.grayOutHiddenColumns({ options: y });
      }),
      (this.grayOutHiddenColumns = (s) => {
        let { options: c } = s;
        const { googleChartWrapper: f } = this.props,
          p = f.getDataTable();
        if (!p) return;
        const m = p.getNumberOfColumns();
        if (this.state.hiddenColumns.length > 0 === !1) return;
        const w = Array.from({ length: m - 1 }).map((C, _) => {
          const N = this.getColumnID(p, _ + 1);
          return this.state.hiddenColumns.includes(N) ? Dm : c && c.colors ? c.colors[_] : jm[_];
        });
        f.setOptions({ ...c, colors: w }), f.draw();
      }),
      (this.onResize = () => {
        const { googleChartWrapper: s } = this.props;
        s.draw();
      });
  }
}
class Lm extends S.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {
    return !1;
  }
  render() {
    const { google: a, googleChartWrapper: s, googleChartDashboard: c } = this.props;
    return S.createElement(qc, {
      render: (f) =>
        S.createElement(
          Im,
          Object.assign({}, f, { google: a, googleChartWrapper: s, googleChartDashboard: c })
        ),
    });
  }
}
class Mm extends S.Component {
  shouldComponentUpdate() {
    return !1;
  }
  listenToEvents(a) {
    let { chartEvents: s, google: c, googleChartWrapper: f } = a;
    if (s) {
      c.visualization.events.removeAllListeners(f);
      for (let m of s) {
        var p = this;
        const { eventName: y, callback: w } = m;
        c.visualization.events.addListener(f, y, function () {
          for (var C = arguments.length, _ = new Array(C), N = 0; N < C; N++) _[N] = arguments[N];
          w({ chartWrapper: f, props: p.props, google: c, eventArgs: _ });
        });
      }
    }
  }
  componentDidMount() {
    var a;
    const { google: s, googleChartWrapper: c } = this.props;
    this.listenToEvents({
      chartEvents:
        ((a = this.propsFromContext) === null || a === void 0 ? void 0 : a.chartEvents) || null,
      google: s,
      googleChartWrapper: c,
    });
  }
  render() {
    return this.props, S.createElement(qc, { render: (a) => ((this.propsFromContext = a), null) });
  }
  constructor(a) {
    super(a), (this.propsFromContext = null);
  }
}
let _c = 0;
class zm extends S.Component {
  componentDidMount() {
    const {
        options: a,
        google: s,
        chartType: c,
        chartWrapperParams: f,
        toolbarItems: p,
        getChartEditor: m,
        getChartWrapper: y,
      } = this.props,
      w = { chartType: c, options: a, containerId: this.getGraphID(), ...f },
      C = new s.visualization.ChartWrapper(w);
    C.setOptions(a || {}), y && y(C, s);
    const _ = new s.visualization.Dashboard(this.dashboard_ref),
      N = this.addControls(C, _);
    p && s.visualization.drawToolbar(this.toolbar_ref.current, p);
    let P = null;
    m &&
      ((P = new s.visualization.ChartEditor()), m({ chartEditor: P, chartWrapper: C, google: s })),
      this.setState({
        googleChartEditor: P,
        googleChartControls: N,
        googleChartDashboard: _,
        googleChartWrapper: C,
        isReady: !0,
      });
  }
  componentDidUpdate() {
    if (
      !this.state.googleChartWrapper ||
      !this.state.googleChartDashboard ||
      !this.state.googleChartControls
    )
      return;
    const { controls: a } = this.props;
    if (a)
      for (let s = 0; s < a.length; s += 1) {
        const { controlType: c, options: f, controlWrapperParams: p } = a[s];
        p && 'state' in p && this.state.googleChartControls[s].control.setState(p.state),
          this.state.googleChartControls[s].control.setOptions(f),
          this.state.googleChartControls[s].control.setControlType(c);
      }
  }
  shouldComponentUpdate(a, s) {
    return this.state.isReady !== s.isReady || a.controls !== this.props.controls;
  }
  render() {
    const { width: a, height: s, options: c, style: f } = this.props,
      p = { height: s || (c && c.height), width: a || (c && c.width), ...f };
    return this.props.render
      ? S.createElement(
          'div',
          { ref: this.dashboard_ref, style: p },
          S.createElement('div', { ref: this.toolbar_ref, id: 'toolbar' }),
          this.props.render({
            renderChart: this.renderChart,
            renderControl: this.renderControl,
            renderToolbar: this.renderToolBar,
          })
        )
      : S.createElement(
          'div',
          { ref: this.dashboard_ref, style: p },
          this.renderControl((m) => {
            let { controlProp: y } = m;
            return y.controlPosition !== 'bottom';
          }),
          this.renderChart(),
          this.renderControl((m) => {
            let { controlProp: y } = m;
            return y.controlPosition === 'bottom';
          }),
          this.renderToolBar()
        );
  }
  constructor(...a) {
    var s;
    super(...a),
      (s = this),
      (this.state = {
        googleChartWrapper: null,
        googleChartDashboard: null,
        googleChartControls: null,
        googleChartEditor: null,
        isReady: !1,
      }),
      (this.graphID = null),
      (this.dashboard_ref = S.createRef()),
      (this.toolbar_ref = S.createRef()),
      (this.getGraphID = () => {
        const { graphID: c, graph_id: f } = this.props;
        let p;
        return (
          !c && !f
            ? this.graphID
              ? (p = this.graphID)
              : (p = km())
            : c && !f
              ? (p = c)
              : f && !c
                ? (p = f)
                : (p = c),
          (this.graphID = p),
          this.graphID
        );
      }),
      (this.getControlID = (c, f) => {
        _c += 1;
        let p;
        return typeof c > 'u' ? (p = 'googlechart-control-'.concat(f, '-').concat(_c)) : (p = c), p;
      }),
      (this.addControls = (c, f) => {
        const { google: p, controls: m } = this.props,
          y = m
            ? m.map((C, _) => {
                const { controlID: N, controlType: P, options: $, controlWrapperParams: F } = C,
                  R = this.getControlID(N, _);
                return {
                  controlProp: C,
                  control: new p.visualization.ControlWrapper({
                    containerId: R,
                    controlType: P,
                    options: $,
                    ...F,
                  }),
                };
              })
            : null;
        if (!y) return null;
        f.bind(
          y.map((C) => {
            let { control: _ } = C;
            return _;
          }),
          c
        );
        for (let C of y) {
          const { control: _, controlProp: N } = C,
            { controlEvents: P = [] } = N;
          for (let $ of P) {
            var w = this;
            const { callback: F, eventName: R } = $;
            p.visualization.events.removeListener(_, R, F),
              p.visualization.events.addListener(_, R, function () {
                for (var z = arguments.length, J = new Array(z), q = 0; q < z; q++)
                  J[q] = arguments[q];
                F({ chartWrapper: c, controlWrapper: _, props: w.props, google: p, eventArgs: J });
              });
          }
        }
        return y;
      }),
      (this.renderChart = () => {
        const {
            width: c,
            height: f,
            options: p,
            style: m,
            className: y,
            rootProps: w,
            google: C,
          } = this.props,
          _ = { height: f || (p && p.height), width: c || (p && p.width), ...m };
        return S.createElement(
          'div',
          Object.assign({ id: this.getGraphID(), style: _, className: y }, w),
          this.state.isReady && this.state.googleChartWrapper !== null
            ? S.createElement(
                S.Fragment,
                null,
                S.createElement(Lm, {
                  googleChartWrapper: this.state.googleChartWrapper,
                  google: C,
                  googleChartDashboard: this.state.googleChartDashboard,
                }),
                S.createElement(Mm, {
                  googleChartWrapper: this.state.googleChartWrapper,
                  google: C,
                })
              )
            : null
        );
      }),
      (this.renderControl = function () {
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (f) => !0;
        return s.state.isReady && s.state.googleChartControls !== null
          ? S.createElement(
              S.Fragment,
              null,
              s.state.googleChartControls
                .filter((f) => {
                  let { controlProp: p, control: m } = f;
                  return c({ control: m, controlProp: p });
                })
                .map((f) => {
                  let { control: p, controlProp: m } = f;
                  return S.createElement('div', {
                    key: p.getContainerId(),
                    id: p.getContainerId(),
                  });
                })
            )
          : null;
      }),
      (this.renderToolBar = () =>
        this.props.toolbarItems ? S.createElement('div', { ref: this.toolbar_ref }) : null);
  }
}
class Wr extends S.Component {
  render() {
    const {
      chartLanguage: a,
      chartPackages: s,
      chartVersion: c,
      mapsApiKey: f,
      loader: p,
      errorElement: m,
    } = this.props;
    return S.createElement(
      Tm,
      { value: this.props },
      this.state.loadingStatus === 'ready' && this.state.google !== null
        ? S.createElement(zm, Object.assign({}, this.props, { google: this.state.google }))
        : this.state.loadingStatus === 'errored' && m
          ? m
          : p,
      S.createElement(Em, {
        chartLanguage: a,
        chartPackages: s,
        chartVersion: c,
        mapsApiKey: f,
        onLoad: this.onLoad,
        onError: this.onError,
      })
    );
  }
  componentDidMount() {
    this._isMounted = !0;
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  isFullyLoaded(a) {
    const { controls: s, toolbarItems: c, getChartEditor: f } = this.props;
    return (
      a &&
      a.visualization &&
      a.visualization.ChartWrapper &&
      a.visualization.Dashboard &&
      (!s || a.visualization.ChartWrapper) &&
      (!f || a.visualization.ChartEditor) &&
      (!c || a.visualization.drawToolbar)
    );
  }
  constructor(...a) {
    super(...a),
      (this._isMounted = !1),
      (this.state = { loadingStatus: 'loading', google: null }),
      (this.onLoad = (s) => {
        if ((this.props.onLoad && this.props.onLoad(s), this.isFullyLoaded(s))) this.onSuccess(s);
        else {
          const c = setInterval(() => {
            const f = window.google;
            this._isMounted
              ? f && this.isFullyLoaded(f) && (clearInterval(c), this.onSuccess(f))
              : clearInterval(c);
          }, 1e3);
        }
      }),
      (this.onSuccess = (s) => {
        this.setState({ loadingStatus: 'ready', google: s });
      }),
      (this.onError = () => {
        this.setState({ loadingStatus: 'errored' });
      });
  }
}
Wr.defaultProps = Gc;
var Pc;
(function (i) {
  (i.annotation = 'annotation'),
    (i.annotationText = 'annotationText'),
    (i.certainty = 'certainty'),
    (i.emphasis = 'emphasis'),
    (i.interval = 'interval'),
    (i.scope = 'scope'),
    (i.style = 'style'),
    (i.tooltip = 'tooltip'),
    (i.domain = 'domain');
})(Pc || (Pc = {}));
const Rm = ({ selectedMonth: i }) => {
    const { investments: a } = ln(),
      c = a
        .filter(
          (m) =>
            new Date(m.createdAt).toLocaleString('default', { month: 'long' }).toLowerCase() === i
        )
        .reduce((m, y) => {
          const { investmentType: w, amount: C } = y;
          return m[w] || (m[w] = 0), (m[w] += C), m;
        }, {}),
      f = [['Investment Type', 'Amount'], ...Object.entries(c).map(([m, y]) => [m, Number(y)])],
      p = {
        title: 'Spending By Type',
        backgroundColor: 'transparent',
        legend: { position: 'left' },
        hAxis: { title: 'Amount' },
        vAxis: { title: 'Investment Type' },
      };
    return d.jsx('div', {
      children:
        f.length > 1
          ? d.jsx(Wr, {
              chartType: 'BarChart',
              data: f,
              options: p,
              width: '100%',
              height: '400px',
            })
          : d.jsx('p', { children: 'Nothing spent for the selected month.' }),
    });
  },
  Fm = () => {
    const i = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      s = new Date().getMonth(),
      c = i[s],
      { investments: f } = ln(),
      [p, m] = S.useState(c),
      { incomes: y } = Ur(),
      w = f.filter(
        (F) =>
          new Date(F.createdAt).toLocaleString('default', { month: 'long' }).toLowerCase() === p
      ),
      C = (F) => {
        m(F.target.value);
      },
      _ = w.reduce((F, R) => F + R.amount, 0),
      N = y.reduce((F, R) => F + R.amount, 0),
      P = N - _,
      $ = N > 0 ? (_ / N) * 100 : 0;
    return d.jsxs('div', {
      className: 'spending-summary',
      children: [
        d.jsxs('p', { children: ['Total monthly investments: $', _.toFixed(2)] }),
        d.jsxs('form', {
          className: 'create',
          children: [
            d.jsx('label', { children: 'Month:' }),
            d.jsxs('select', {
              value: p,
              onChange: C,
              children: [
                d.jsx('option', { value: '' }),
                d.jsx('option', { value: 'january', children: 'January' }),
                d.jsx('option', { value: 'february', children: 'February' }),
                d.jsx('option', { value: 'march', children: 'March' }),
                d.jsx('option', { value: 'april', children: 'April' }),
                d.jsx('option', { value: 'may', children: 'May' }),
                d.jsx('option', { value: 'june', children: 'June' }),
                d.jsx('option', { value: 'july', children: 'July' }),
                d.jsx('option', { value: 'august', children: 'August' }),
                d.jsx('option', { value: 'september', children: 'September' }),
                d.jsx('option', { value: 'october', children: 'October' }),
                d.jsx('option', { value: 'november', children: 'November' }),
                d.jsx('option', { value: 'december', children: 'December' }),
              ],
            }),
          ],
        }),
        d.jsx(Rm, { selectedMonth: p }),
        d.jsx('label', { children: d.jsx('strong', { children: 'Year:' }) }),
        d.jsxs('p', { children: ['Percentage of income spent: ', $.toFixed(2), '%'] }),
        d.jsxs('p', { children: ['Remaining income after investments: $', P.toFixed(2)] }),
      ],
    });
  },
  Om = ({ notification: i }) => {
    const { notificationDispatch: a } = Xc(),
      { user: s } = Xe(),
      c = async () => {
        if (!s) return;
        const f = await fetch(
            'https://budget-buddy-production.up.railway.app/api/notifications/' + i._id,
            { method: 'DELETE', headers: { Authorization: `Bearer ${s.token}` } }
          ),
          p = await f.json();
        f.ok && a({ type: 'DELETE_NOTIFICATION', payload: p });
      };
    return d.jsxs('div', {
      className: 'investment-details',
      children: [
        d.jsx('p', { children: d.jsx('strong', { children: i.message }) }),
        d.jsx('p', { children: Br(new Date(i.createdAt), { addSuffix: !0 }) }),
        d.jsx('span', { className: 'material-symbols-outlined', onClick: c, children: 'delete' }),
      ],
    });
  },
  Am = ({ selectedMonth: i }) => {
    const { investments: a } = ln(),
      s = (m) => (typeof m != 'string' ? '' : m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()),
      c = a.filter((m) => {
        const y = new Date(m.createdAt);
        return s(y.toLocaleString('default', { month: 'long' })) === s(i);
      }),
      f = [
        ['Investment', 'Amount', { role: 'tooltip', type: 'string' }],
        ...(c
          ? c.map((m) => [
              m.title,
              m.amount,
              `Investment: ${m.title}
Amount: $${m.amount}`,
            ])
          : []),
      ],
      p = { backgroundColor: 'transparent', legend: { position: 'left' }, is3D: !1, pieHole: 0.4 };
    return d.jsx('div', {
      className: 'investment-chart-container',
      children: d.jsx(Wr, {
        chartType: 'PieChart',
        data: f,
        options: p,
        width: '100%',
        height: '100%',
      }),
    });
  },
  Um = ({ selectedMonth: i }) => {
    const { budgets: a } = to(),
      { investments: s } = ln(),
      c = (N) => (typeof N != 'string' ? '' : N.charAt(0).toUpperCase() + N.slice(1).toLowerCase()),
      f = a.filter((N) => {
        const P = new Date(N.createdAt);
        return c(P.toLocaleString('default', { month: 'long' })) === c(i);
      }),
      p = s.filter((N) => {
        const P = new Date(N.createdAt);
        return c(P.toLocaleString('default', { month: 'long' })) === c(i);
      }),
      m = f.reduce((N, P) => N + P.amount, 0),
      y = p.reduce((N, P) => N + P.amount, 0),
      w = [
        ['Category', 'Investment'],
        ['Total Budget', m],
      ],
      C = [
        ['Category', 'Investment'],
        ['Total Investment', y],
      ],
      _ = {
        title: 'Budget vs Investment',
        backgroundColor: 'transparent',
        isStacked: !0,
        colors: y > m ? ['red'] : ['green'],
        legend: { position: 'top', textStyle: { fontSize: 15 } },
      };
    return d.jsx('div', {
      children: d.jsx(Wr, {
        chartType: 'ColumnChart',
        diffdata: { old: w, new: C },
        options: _,
        width: '100%',
        height: '100%',
      }),
    });
  },
  Bm = ({ selectedMonth: i }) => {
    const { incomes: a } = Ur(),
      s = (y) => (typeof y != 'string' ? '' : y.charAt(0).toUpperCase() + y.slice(1).toLowerCase()),
      f = a
        .filter((y) => {
          const w = new Date(y.createdAt);
          return s(w.toLocaleString('default', { month: 'long' })) === s(i);
        })
        .reduce((y, w) => {
          const { incomeType: C, amount: _ } = w;
          return y[C] || (y[C] = 0), (y[C] += _), y;
        }, {}),
      p = [['Income Type', 'Amount'], ...Object.entries(f).map(([y, w]) => [y, Number(w)])],
      m = {
        title: 'Income By Type',
        backgroundColor: 'transparent',
        legend: { position: 'left' },
        is3D: !0,
        pieHole: 0.4,
      };
    return d.jsx('div', {
      className: 'income-chart-container',
      children: d.jsx(Wr, {
        chartType: 'PieChart',
        data: p,
        options: m,
        width: '100%',
        height: '400px',
      }),
    });
  },
  Wm = () => {
    const i = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      s = new Date().getMonth(),
      c = i[s],
      [f, p] = S.useState('investments'),
      [m, y] = S.useState('neither'),
      [w, C] = S.useState(c),
      [_, N] = S.useState(c),
      [P, $] = S.useState(0),
      [F, R] = S.useState(0),
      [z, J] = S.useState(0),
      [q, te] = S.useState(0),
      [b, fe] = S.useState([]),
      [ye, ee] = S.useState([]),
      [Ce, nt] = S.useState([]),
      [Le, Nt] = S.useState([]),
      { investments: Je, dispatch: Ue } = ln(),
      { budgets: Be, budgetDispatch: rt } = to(),
      { incomes: Te, incomeDispatch: me } = Ur(),
      { files: O, fileDispatch: Y } = ps(),
      { notifications: v, notificationDispatch: T } = Xc(),
      ne = localStorage.getItem('hasSentNotification') === 'true',
      { user: Q } = Xe(),
      le = (K) =>
        typeof K != 'string' ? '' : K.charAt(0).toUpperCase() + K.slice(1).toLowerCase();
    S.useEffect(() => {
      if (Je && Array.isArray(Je)) {
        const K = Je.filter((ie) => {
          const ke = new Date(ie.createdAt);
          return le(ke.toLocaleString('default', { month: 'long' })) === le(w);
        });
        fe(K);
        const pe = K.reduce((ie, ke) => ie + ke.amount, 0);
        $(pe);
      }
    }, [Je, w]),
      S.useEffect(() => {
        if (O && Array.isArray(O)) {
          const K = O.filter((ie) => {
            const ke = new Date(ie.date);
            return le(ke.toLocaleString('default', { month: 'long' })) === le(_);
          });
          ee(K);
          const pe = K.reduce((ie, ke) => ie - ke.amount, 0);
          R(pe);
        }
      }, [O, _]),
      S.useEffect(() => {
        if (Te && Array.isArray(Te)) {
          const K = Te.filter((ie) => {
            const ke = new Date(ie.createdAt);
            return le(ke.toLocaleString('default', { month: 'long' })) === le(_);
          });
          Nt(K);
          const pe = K.reduce((ie, ke) => ie + ke.amount, 0);
          J(pe);
        }
      }, [Te, _]),
      S.useEffect(() => {
        if (Be && Array.isArray(Be)) {
          const K = Be.filter((ie) => {
            const ke = new Date(ie.createdAt);
            return le(ke.toLocaleString('default', { month: 'long' })) === le(w);
          });
          nt(K);
          const pe = K.reduce((ie, ke) => ie + ke.amount, 0);
          te(pe);
        }
      }, [Be, w]);
    const oe = (K) => {
        C(K.target.value);
      },
      ce = (K) => {
        N(K.target.value);
      },
      ae = (K) => {
        p(K),
          (K === 'budgets' ||
            K === 'incomes' ||
            K === 'statements' ||
            K === 'spendingSummary' ||
            K === 'notifications') &&
            y('neither');
      },
      We = () => {
        switch (f) {
          case 'investments':
            return d.jsx('div', {
              className: 'home',
              children: d.jsx(xh, { setActiveViewInvestment: y }),
            });
          case 'budgets':
            return d.jsxs('div', {
              className: 'home',
              children: [
                d.jsxs('div', {
                  className: 'budgets',
                  children: [
                    d.jsx('h2', { children: 'Budget' }),
                    d.jsxs('form', {
                      className: 'create',
                      children: [
                        d.jsx('label', { children: 'Month:' }),
                        d.jsxs('select', {
                          value: w,
                          onChange: oe,
                          children: [
                            d.jsx('option', { value: '' }),
                            d.jsx('option', { value: 'January', children: 'January' }),
                            d.jsx('option', { value: 'February', children: 'February' }),
                            d.jsx('option', { value: 'March', children: 'March' }),
                            d.jsx('option', { value: 'April', children: 'April' }),
                            d.jsx('option', { value: 'May', children: 'May' }),
                            d.jsx('option', { value: 'June', children: 'June' }),
                            d.jsx('option', { value: 'July', children: 'July' }),
                            d.jsx('option', { value: 'August', children: 'August' }),
                            d.jsx('option', { value: 'September', children: 'September' }),
                            d.jsx('option', { value: 'October', children: 'October' }),
                            d.jsx('option', { value: 'November', children: 'November' }),
                            d.jsx('option', { value: 'December', children: 'December' }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx(Um, { selectedMonth: w }),
                    Ce && Ce.length > 0
                      ? Ce.map((K) => d.jsx(mm, { budget: K }, K._id))
                      : d.jsx('p', { children: 'No budgets for the selected month.' }),
                  ],
                }),
                d.jsx(vm, {}),
              ],
            });
          case 'incomes':
            return d.jsxs('div', {
              className: 'home',
              children: [
                d.jsxs('div', {
                  className: 'incomes',
                  children: [
                    d.jsx('h2', { children: 'Income' }),
                    d.jsxs('form', {
                      className: 'create',
                      children: [
                        d.jsx('label', { children: 'Month:' }),
                        d.jsxs('select', {
                          value: _,
                          onChange: ce,
                          children: [
                            d.jsx('option', { value: '' }),
                            d.jsx('option', { value: 'January', children: 'January' }),
                            d.jsx('option', { value: 'February', children: 'February' }),
                            d.jsx('option', { value: 'March', children: 'March' }),
                            d.jsx('option', { value: 'April', children: 'April' }),
                            d.jsx('option', { value: 'May', children: 'May' }),
                            d.jsx('option', { value: 'June', children: 'June' }),
                            d.jsx('option', { value: 'July', children: 'July' }),
                            d.jsx('option', { value: 'August', children: 'August' }),
                            d.jsx('option', { value: 'September', children: 'September' }),
                            d.jsx('option', { value: 'October', children: 'October' }),
                            d.jsx('option', { value: 'November', children: 'November' }),
                            d.jsx('option', { value: 'December', children: 'December' }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx(Bm, { selectedMonth: _ }),
                    Le && Le.length > 0
                      ? Le.map((K) => d.jsx(gm, { income: K }, K._id))
                      : d.jsx('p', { children: 'No incomes for the selected month.' }),
                  ],
                }),
                d.jsx(ym, {}),
              ],
            });
          case 'statements':
            return d.jsxs('div', {
              className: 'home',
              children: [
                d.jsxs('div', {
                  className: 'budgets',
                  children: [
                    d.jsx('h2', { children: 'Statements' }),
                    d.jsxs('form', {
                      className: 'create',
                      children: [
                        d.jsx('label', { children: 'Month:' }),
                        d.jsxs('select', {
                          value: _,
                          onChange: ce,
                          children: [
                            d.jsx('option', { value: '' }),
                            d.jsx('option', { value: 'January', children: 'January' }),
                            d.jsx('option', { value: 'February', children: 'February' }),
                            d.jsx('option', { value: 'March', children: 'March' }),
                            d.jsx('option', { value: 'April', children: 'April' }),
                            d.jsx('option', { value: 'May', children: 'May' }),
                            d.jsx('option', { value: 'June', children: 'June' }),
                            d.jsx('option', { value: 'July', children: 'July' }),
                            d.jsx('option', { value: 'August', children: 'August' }),
                            d.jsx('option', { value: 'September', children: 'September' }),
                            d.jsx('option', { value: 'October', children: 'October' }),
                            d.jsx('option', { value: 'November', children: 'November' }),
                            d.jsx('option', { value: 'December', children: 'December' }),
                          ],
                        }),
                      ],
                    }),
                    ye && ye.length > 0
                      ? ye.map((K) => d.jsx(wm, { file: K }, K._id))
                      : d.jsx('p', { children: 'No statements for the selected month.' }),
                  ],
                }),
                d.jsx(xm, {}),
              ],
            });
          case 'spendingSummary':
            return d.jsx('div', {
              className: 'home',
              children: d.jsxs('div', {
                children: [d.jsx('h2', { children: 'Spending Summary' }), d.jsx(Fm, {})],
              }),
            });
          case 'notifications':
            return d.jsx('div', {
              className: 'home',
              children: d.jsx('div', {
                className: 'investments',
                children: v && v.map((K) => d.jsx(Om, { notification: K }, K._id)),
              }),
            });
          default:
            return d.jsx('div', { className: 'home' });
        }
      },
      no = () => {
        switch (m) {
          case 'investmentAnalysis':
            return d.jsx('div', {
              className: 'home',
              children: d.jsxs('div', {
                className: 'investments',
                children: [
                  d.jsx('h2', { children: 'Investments' }),
                  d.jsxs('form', {
                    className: 'create',
                    children: [
                      d.jsx('label', { children: 'Month:' }),
                      d.jsxs('select', {
                        value: w,
                        onChange: oe,
                        children: [
                          d.jsx('option', { value: '' }),
                          d.jsx('option', { value: 'January', children: 'January' }),
                          d.jsx('option', { value: 'February', children: 'February' }),
                          d.jsx('option', { value: 'March', children: 'March' }),
                          d.jsx('option', { value: 'April', children: 'April' }),
                          d.jsx('option', { value: 'May', children: 'May' }),
                          d.jsx('option', { value: 'June', children: 'June' }),
                          d.jsx('option', { value: 'July', children: 'July' }),
                          d.jsx('option', { value: 'August', children: 'August' }),
                          d.jsx('option', { value: 'September', children: 'September' }),
                          d.jsx('option', { value: 'October', children: 'October' }),
                          d.jsx('option', { value: 'November', children: 'November' }),
                          d.jsx('option', { value: 'December', children: 'December' }),
                        ],
                      }),
                    ],
                  }),
                  d.jsx('div', {
                    className: 'chart-container',
                    children: d.jsx(Am, { selectedMonth: w }),
                  }),
                  b && b.length > 0
                    ? b.map((K) => d.jsx(pm, { investment: K }, K._id))
                    : d.jsx('p', { children: 'No investments for the selected month.' }),
                  d.jsxs('h3', { children: ['Total Investment Value: $', P.toFixed(2)] }),
                ],
              }),
            });
          case 'investmentForm':
            return d.jsx('div', {
              className: 'home',
              children: d.jsx('div', { className: 'investments', children: d.jsx(hm, {}) }),
            });
          case 'neither':
            return d.jsx('div', { className: 'home' });
          default:
            return d.jsx('div', { className: 'home' });
        }
      };
    return (
      S.useEffect(() => {
        Q &&
          (async () => {
            const pe = await fetch(
                'https://budget-buddy-production.up.railway.app/api/investments',
                { headers: { Authorization: `Bearer ${Q.token}` } }
              ),
              ie = await pe.json();
            pe.ok && Ue({ type: 'SET_INVESTMENTS', payload: ie });
          })();
      }, [Ue, Q]),
      S.useEffect(() => {
        Q &&
          (async () => {
            const pe = await fetch('https://budget-buddy-production.up.railway.app/api/budgets', {
                headers: { Authorization: `Bearer ${Q.token}` },
              }),
              ie = await pe.json();
            pe.ok && rt({ type: 'SET_BUDGETS', payload: ie });
          })();
      }, [rt, Q]),
      S.useEffect(() => {
        Q &&
          (async () => {
            const pe = await fetch('https://budget-buddy-production.up.railway.app/api/incomes', {
                headers: { Authorization: `Bearer ${Q.token}` },
              }),
              ie = await pe.json();
            pe.ok && me({ type: 'SET_INCOMES', payload: ie });
          })();
      }, [me, Q]),
      S.useEffect(() => {
        Q &&
          (async () => {
            const pe = await fetch('https://budget-buddy-production.up.railway.app/api/banks', {
                headers: { Authorization: `Bearer ${Q.token}` },
              }),
              ie = await pe.json();
            pe.ok && Y({ type: 'SET_FILES', payload: ie });
          })();
      }, [Y, Q]),
      S.useEffect(() => {
        (async () => {
          if (
            (P / q <= 0.75 && localStorage.setItem('hasSentNotification', 'false'),
            !ne && q > 0 && P / q >= 0.75)
          ) {
            const pe = {
                message: `Alert: Your investment of $${P.toFixed(2)} is 75% or more of your total budget of $${q.toFixed(2)}.`,
                sent: !0,
              },
              ie = await fetch('https://budget-buddy-production.up.railway.app/api/notifications', {
                method: 'POST',
                headers: { Authorization: `Bearer ${Q.token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(pe),
              }),
              ke = await ie.json();
            ie.ok &&
              (T({ type: 'CREATE_NOTIFICATION', payload: ke }),
              localStorage.setItem('hasSentNotification', 'true'));
          }
        })();
      }, [P, q, Q, v, T, ne]),
      S.useEffect(() => {
        Q &&
          (async () => {
            const pe = await fetch(
                'https://budget-buddy-production.up.railway.app/api/notifications',
                { method: 'GET', headers: { Authorization: `Bearer ${Q.token}` } }
              ),
              ie = await pe.json();
            pe.ok &&
              (T({ type: 'SET_NOTIFICATIONS', payload: ie }),
              localStorage.setItem('hasSentNotification', 'true'));
          })();
      }, [T, Q]),
      d.jsxs('div', {
        children: [
          d.jsx(wh, { setActiveView: ae, notifications: v }),
          d.jsxs('div', {
            style: { flex: 1, padding: '15px' },
            children: [
              d.jsx('h1', { children: 'Account Summary' }),
              d.jsxs('p', {
                children: [
                  'Your income is currently $',
                  z,
                  ' and you spent $',
                  F.toFixed(2),
                  ' in ',
                  _,
                  '.',
                ],
              }),
              d.jsxs('p', { children: ['You saved $', (z - F).toFixed(2), ' in ', _, '.'] }),
              d.jsxs('p', {
                children: ['Your budget is $', q, ' and you plan to spend $', P, ' in ', w, '.'],
              }),
              d.jsxs('p', { children: ['You plan to save $', q - P, ' in ', w, '.'] }),
              ne &&
                (P / q) * 100 > 75 &&
                d.jsxs('p', {
                  style: { marginTop: '20px', padding: '10px', color: 'red' },
                  children: [
                    'Your investments are currently ',
                    ((P / q) * 100).toFixed(2),
                    '% of your budget.',
                  ],
                }),
            ],
          }),
          We(),
          no(),
        ],
      })
    );
  },
  $m = () => {
    const [i, a] = S.useState(null),
      [s, c] = S.useState(null),
      { dispatch: f } = Xe();
    return {
      login: async (m, y) => {
        c(!0), a(null);
        const w = await fetch('https://budget-buddy-production.up.railway.app/api/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: m, password: y }),
        });
        let C;
        try {
          C = await w.json();
        } catch {
          c(!1), a('Invalid response from server');
          return;
        }
        w.ok || (c(!1), a(C.error || 'Login failed')),
          w.ok &&
            (localStorage.setItem('user', JSON.stringify(C)),
            f({ type: 'LOGIN', payload: C }),
            c(!1));
      },
      isLoading: s,
      error: i,
    };
  },
  Vm = () => {
    const [i, a] = S.useState(''),
      [s, c] = S.useState(''),
      { login: f, error: p, isLoading: m } = $m(),
      y = async (w) => {
        w.preventDefault(), await f(i, s);
      };
    return d.jsxs('form', {
      className: 'login',
      onSubmit: y,
      children: [
        d.jsx('h3', { children: 'Log In' }),
        d.jsx('label', { children: 'Email:' }),
        d.jsx('input', { type: 'email', onChange: (w) => a(w.target.value), value: i }),
        d.jsx('label', { children: 'Password:' }),
        d.jsx('input', { type: 'password', onChange: (w) => c(w.target.value), value: s }),
        d.jsx('button', { disabled: m, children: 'Log In' }),
        p && d.jsx('div', { className: 'error', children: p }),
      ],
    });
  },
  Hm = () => {
    const [i, a] = S.useState(null),
      [s, c] = S.useState(null),
      { dispatch: f } = Xe();
    return {
      signup: async (m, y) => {
        c(!0), a(null);
        try {
          const w = await fetch('https://budget-buddy-production.up.railway.app/api/user/signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: m, password: y }),
            }),
            C = await w.json();
          if (!w.ok) {
            c(!1), a(C.error || 'Signup failed');
            return;
          }
          localStorage.setItem('user', JSON.stringify(C)), f({ type: 'LOGIN', payload: C }), c(!1);
        } catch (w) {
          console.error('Signup error:', w), c(!1), a('Network error or server not responding.');
        }
      },
      isLoading: s,
      error: i,
    };
  },
  Qm = () => {
    const [i, a] = S.useState(''),
      [s, c] = S.useState(''),
      { signup: f, error: p, isLoading: m } = Hm(),
      y = async (w) => {
        w.preventDefault(), await f(i, s);
      };
    return d.jsxs('form', {
      className: 'signup',
      onSubmit: y,
      children: [
        d.jsx('h3', { children: 'Sign Up' }),
        d.jsx('label', { children: 'Email:' }),
        d.jsx('input', { type: 'email', onChange: (w) => a(w.target.value), value: i }),
        d.jsx('label', { children: 'Password:' }),
        d.jsx('input', { type: 'password', onChange: (w) => c(w.target.value), value: s }),
        d.jsx('button', { disabled: m, children: 'Sign Up' }),
        p && d.jsx('div', { className: 'error', children: p }),
      ],
    });
  },
  Jm = () => {
    const { dispatch: i } = Xe(),
      { dispatch: a } = ln();
    return {
      logout: () => {
        localStorage.removeItem('user'),
          localStorage.removeItem('hasSentNotification'),
          i({ type: 'LOGOUT' }),
          a({ type: 'SET_INVESTMENTS', payload: [] });
      },
    };
  },
  Ym = () => {
    const { logout: i } = Jm(),
      { user: a } = Xe(),
      s = () => {
        i();
      };
    return d.jsx('header', {
      children: d.jsxs('div', {
        className: 'container',
        children: [
          d.jsx(rs, { to: '/', children: d.jsx('h1', { children: ' Budget Buddy ' }) }),
          d.jsxs('nav', {
            children: [
              a &&
                d.jsxs('div', {
                  children: [
                    d.jsx('span', { children: a.email }),
                    d.jsx('button', { onClick: s, children: 'Log Out' }),
                  ],
                }),
              !a &&
                d.jsxs('div', {
                  children: [
                    d.jsx(rs, { to: '/login', children: 'Login' }),
                    d.jsx(rs, { to: '/signup', children: 'Signup' }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  };
function Km() {
  const { user: i } = Xe();
  return d.jsx('div', {
    className: 'App',
    children: d.jsxs(rh, {
      future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
      children: [
        d.jsx(Ym, {}),
        d.jsx('div', {
          className: 'pages',
          children: d.jsxs(Gp, {
            children: [
              d.jsx(Rr, { path: '/', element: i ? d.jsx(Wm, {}) : d.jsx(ns, { to: '/login' }) }),
              d.jsx(Rr, { path: '/login', element: i ? d.jsx(ns, { to: '/' }) : d.jsx(Vm, {}) }),
              d.jsx(Rr, { path: '/signup', element: i ? d.jsx(ns, { to: '/' }) : d.jsx(Qm, {}) }),
              d.jsx(Rr, { path: '*', element: d.jsx('div', { children: '404 - Page Not Found' }) }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Xm = op.createRoot(document.getElementById('root'));
Xm.render(
  d.jsx(Dc.StrictMode, {
    children: d.jsx(ah, {
      children: d.jsx(ch, {
        children: d.jsx(fh, {
          children: d.jsx(hh, {
            children: d.jsx(vh, { children: d.jsx(yh, { children: d.jsx(Km, {}) }) }),
          }),
        }),
      }),
    }),
  })
);
