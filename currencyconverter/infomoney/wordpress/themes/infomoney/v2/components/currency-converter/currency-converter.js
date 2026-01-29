function mf(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var F4 = { exports: {} }, Y2 = {};
var Bi;
function sf() {
  if (Bi) return Y2;
  Bi = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(h, p, N) {
    var Y = null;
    if (N !== void 0 && (Y = "" + N), p.key !== void 0 && (Y = "" + p.key), "key" in p) {
      N = {};
      for (var X in p)
        X !== "key" && (N[X] = p[X]);
    } else N = p;
    return p = N.ref, {
      $$typeof: m,
      type: h,
      key: Y,
      ref: p !== void 0 ? p : null,
      props: N
    };
  }
  return Y2.Fragment = i, Y2.jsx = u, Y2.jsxs = u, Y2;
}
var Ti;
function vf() {
  return Ti || (Ti = 1, F4.exports = sf()), F4.exports;
}
var y = vf(), S4 = { exports: {} }, K = {}, Li;
function df() {
  if (Li) return K;
  Li = 1;
  var m = { env: {} };
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), p = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), X = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), Z = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), Ze = Symbol.iterator;
  function se(z) {
    return z === null || typeof z != "object" ? null : (z = Ze && z[Ze] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var Se = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, De = Object.assign, le = {};
  function j(z, A, C) {
    this.props = z, this.context = A, this.refs = le, this.updater = C || Se;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(z, A) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, A, "setState");
  }, j.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function Me() {
  }
  Me.prototype = j.prototype;
  function xe(z, A, C) {
    this.props = z, this.context = A, this.refs = le, this.updater = C || Se;
  }
  var Re = xe.prototype = new Me();
  Re.constructor = xe, De(Re, j.prototype), Re.isPureReactComponent = !0;
  var ve = Array.isArray;
  function Ve() {
  }
  var ae = { H: null, A: null, T: null, S: null }, Qe = Object.prototype.hasOwnProperty;
  function at(z, A, C) {
    var R = C.ref;
    return {
      $$typeof: i,
      type: z,
      key: A,
      ref: R !== void 0 ? R : null,
      props: C
    };
  }
  function Ht(z, A) {
    return at(z.type, A, z.props);
  }
  function tt(z) {
    return typeof z == "object" && z !== null && z.$$typeof === i;
  }
  function dt(z) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(C) {
      return A[C];
    });
  }
  var r1 = /\/+/g;
  function He(z, A) {
    return typeof z == "object" && z !== null && z.key != null ? dt("" + z.key) : A.toString(36);
  }
  function T(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(Ve, Ve) : (z.status = "pending", z.then(
          function(A) {
            z.status === "pending" && (z.status = "fulfilled", z.value = A);
          },
          function(A) {
            z.status === "pending" && (z.status = "rejected", z.reason = A);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function B(z, A, C, R, $) {
    var I = typeof z;
    (I === "undefined" || I === "boolean") && (z = null);
    var ue = !1;
    if (z === null) ue = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case i:
            case u:
              ue = !0;
              break;
            case Z:
              return ue = z._init, B(
                ue(z._payload),
                A,
                C,
                R,
                $
              );
          }
      }
    if (ue)
      return $ = $(z), ue = R === "" ? "." + He(z, 0) : R, ve($) ? (C = "", ue != null && (C = ue.replace(r1, "$&/") + "/"), B($, A, C, "", function(h1) {
        return h1;
      })) : $ != null && (tt($) && ($ = Ht(
        $,
        C + ($.key == null || z && z.key === $.key ? "" : ("" + $.key).replace(
          r1,
          "$&/"
        ) + "/") + ue
      )), A.push($)), 1;
    ue = 0;
    var Ue = R === "" ? "." : R + ":";
    if (ve(z))
      for (var Fe = 0; Fe < z.length; Fe++)
        R = z[Fe], I = Ue + He(R, Fe), ue += B(
          R,
          A,
          C,
          I,
          $
        );
    else if (Fe = se(z), typeof Fe == "function")
      for (z = Fe.call(z), Fe = 0; !(R = z.next()).done; )
        R = R.value, I = Ue + He(R, Fe++), ue += B(
          R,
          A,
          C,
          I,
          $
        );
    else if (I === "object") {
      if (typeof z.then == "function")
        return B(
          T(z),
          A,
          C,
          R,
          $
        );
      throw A = String(z), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function L(z, A, C) {
    if (z == null) return z;
    var R = [], $ = 0;
    return B(z, R, "", "", function(I) {
      return A.call(C, I, $++);
    }), R;
  }
  function P(z) {
    if (z._status === -1) {
      var A = z._result;
      A = A(), A.then(
        function(C) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = C);
        },
        function(C) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = C);
        }
      ), z._status === -1 && (z._status = 0, z._result = A);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var fe = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof m == "object" && typeof m.emit == "function") {
      m.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, nt = {
    map: L,
    forEach: function(z, A, C) {
      L(
        z,
        function() {
          A.apply(this, arguments);
        },
        C
      );
    },
    count: function(z) {
      var A = 0;
      return L(z, function() {
        A++;
      }), A;
    },
    toArray: function(z) {
      return L(z, function(A) {
        return A;
      }) || [];
    },
    only: function(z) {
      if (!tt(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return K.Activity = q, K.Children = nt, K.Component = j, K.Fragment = h, K.Profiler = N, K.PureComponent = xe, K.StrictMode = p, K.Suspense = H, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return ae.H.useMemoCache(z);
    }
  }, K.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(z, A, C) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var R = De({}, z.props), $ = z.key;
    if (A != null)
      for (I in A.key !== void 0 && ($ = "" + A.key), A)
        !Qe.call(A, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && A.ref === void 0 || (R[I] = A[I]);
    var I = arguments.length - 2;
    if (I === 1) R.children = C;
    else if (1 < I) {
      for (var ue = Array(I), Ue = 0; Ue < I; Ue++)
        ue[Ue] = arguments[Ue + 2];
      R.children = ue;
    }
    return at(z.type, $, R);
  }, K.createContext = function(z) {
    return z = {
      $$typeof: X,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: Y,
      _context: z
    }, z;
  }, K.createElement = function(z, A, C) {
    var R, $ = {}, I = null;
    if (A != null)
      for (R in A.key !== void 0 && (I = "" + A.key), A)
        Qe.call(A, R) && R !== "key" && R !== "__self" && R !== "__source" && ($[R] = A[R]);
    var ue = arguments.length - 2;
    if (ue === 1) $.children = C;
    else if (1 < ue) {
      for (var Ue = Array(ue), Fe = 0; Fe < ue; Fe++)
        Ue[Fe] = arguments[Fe + 2];
      $.children = Ue;
    }
    if (z && z.defaultProps)
      for (R in ue = z.defaultProps, ue)
        $[R] === void 0 && ($[R] = ue[R]);
    return at(z, I, $);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(z) {
    return { $$typeof: O, render: z };
  }, K.isValidElement = tt, K.lazy = function(z) {
    return {
      $$typeof: Z,
      _payload: { _status: -1, _result: z },
      _init: P
    };
  }, K.memo = function(z, A) {
    return {
      $$typeof: _,
      type: z,
      compare: A === void 0 ? null : A
    };
  }, K.startTransition = function(z) {
    var A = ae.T, C = {};
    ae.T = C;
    try {
      var R = z(), $ = ae.S;
      $ !== null && $(C, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Ve, fe);
    } catch (I) {
      fe(I);
    } finally {
      A !== null && C.types !== null && (A.types = C.types), ae.T = A;
    }
  }, K.unstable_useCacheRefresh = function() {
    return ae.H.useCacheRefresh();
  }, K.use = function(z) {
    return ae.H.use(z);
  }, K.useActionState = function(z, A, C) {
    return ae.H.useActionState(z, A, C);
  }, K.useCallback = function(z, A) {
    return ae.H.useCallback(z, A);
  }, K.useContext = function(z) {
    return ae.H.useContext(z);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(z, A) {
    return ae.H.useDeferredValue(z, A);
  }, K.useEffect = function(z, A) {
    return ae.H.useEffect(z, A);
  }, K.useEffectEvent = function(z) {
    return ae.H.useEffectEvent(z);
  }, K.useId = function() {
    return ae.H.useId();
  }, K.useImperativeHandle = function(z, A, C) {
    return ae.H.useImperativeHandle(z, A, C);
  }, K.useInsertionEffect = function(z, A) {
    return ae.H.useInsertionEffect(z, A);
  }, K.useLayoutEffect = function(z, A) {
    return ae.H.useLayoutEffect(z, A);
  }, K.useMemo = function(z, A) {
    return ae.H.useMemo(z, A);
  }, K.useOptimistic = function(z, A) {
    return ae.H.useOptimistic(z, A);
  }, K.useReducer = function(z, A, C) {
    return ae.H.useReducer(z, A, C);
  }, K.useRef = function(z) {
    return ae.H.useRef(z);
  }, K.useState = function(z) {
    return ae.H.useState(z);
  }, K.useSyncExternalStore = function(z, A, C) {
    return ae.H.useSyncExternalStore(
      z,
      A,
      C
    );
  }, K.useTransition = function() {
    return ae.H.useTransition();
  }, K.version = "19.2.3", K;
}
var Ci;
function L4() {
  return Ci || (Ci = 1, S4.exports = df()), S4.exports;
}
var Be = L4();
const a = /* @__PURE__ */ mf(Be), Zi = () => {
  const m = /* @__PURE__ */ new Date(), i = String(m.getDate()).padStart(2, "0"), u = String(m.getMonth() + 1).padStart(2, "0"), h = m.getFullYear(), p = String(m.getHours()).padStart(2, "0"), N = String(m.getMinutes()).padStart(2, "0");
  return `${i}/${u}/${h} ${p}:${N}`;
};
var D4 = { exports: {} }, lt = {};
var Oi;
function of() {
  if (Oi) return lt;
  Oi = 1;
  var m = L4();
  function i(O) {
    var H = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      H += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        H += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + O + "; visit " + H + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var h = {
    d: {
      f: u,
      r: function() {
        throw Error(i(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, p = /* @__PURE__ */ Symbol.for("react.portal");
  function N(O, H, _) {
    var Z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: Z == null ? null : "" + Z,
      children: O,
      containerInfo: H,
      implementation: _
    };
  }
  var Y = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(O, H) {
    if (O === "font") return "";
    if (typeof H == "string")
      return H === "use-credentials" ? H : "";
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, lt.createPortal = function(O, H) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!H || H.nodeType !== 1 && H.nodeType !== 9 && H.nodeType !== 11)
      throw Error(i(299));
    return N(O, H, null, _);
  }, lt.flushSync = function(O) {
    var H = Y.T, _ = h.p;
    try {
      if (Y.T = null, h.p = 2, O) return O();
    } finally {
      Y.T = H, h.p = _, h.d.f();
    }
  }, lt.preconnect = function(O, H) {
    typeof O == "string" && (H ? (H = H.crossOrigin, H = typeof H == "string" ? H === "use-credentials" ? H : "" : void 0) : H = null, h.d.C(O, H));
  }, lt.prefetchDNS = function(O) {
    typeof O == "string" && h.d.D(O);
  }, lt.preinit = function(O, H) {
    if (typeof O == "string" && H && typeof H.as == "string") {
      var _ = H.as, Z = X(_, H.crossOrigin), q = typeof H.integrity == "string" ? H.integrity : void 0, Ze = typeof H.fetchPriority == "string" ? H.fetchPriority : void 0;
      _ === "style" ? h.d.S(
        O,
        typeof H.precedence == "string" ? H.precedence : void 0,
        {
          crossOrigin: Z,
          integrity: q,
          fetchPriority: Ze
        }
      ) : _ === "script" && h.d.X(O, {
        crossOrigin: Z,
        integrity: q,
        fetchPriority: Ze,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0
      });
    }
  }, lt.preinitModule = function(O, H) {
    if (typeof O == "string")
      if (typeof H == "object" && H !== null) {
        if (H.as == null || H.as === "script") {
          var _ = X(
            H.as,
            H.crossOrigin
          );
          h.d.M(O, {
            crossOrigin: _,
            integrity: typeof H.integrity == "string" ? H.integrity : void 0,
            nonce: typeof H.nonce == "string" ? H.nonce : void 0
          });
        }
      } else H == null && h.d.M(O);
  }, lt.preload = function(O, H) {
    if (typeof O == "string" && typeof H == "object" && H !== null && typeof H.as == "string") {
      var _ = H.as, Z = X(_, H.crossOrigin);
      h.d.L(O, _, {
        crossOrigin: Z,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0,
        type: typeof H.type == "string" ? H.type : void 0,
        fetchPriority: typeof H.fetchPriority == "string" ? H.fetchPriority : void 0,
        referrerPolicy: typeof H.referrerPolicy == "string" ? H.referrerPolicy : void 0,
        imageSrcSet: typeof H.imageSrcSet == "string" ? H.imageSrcSet : void 0,
        imageSizes: typeof H.imageSizes == "string" ? H.imageSizes : void 0,
        media: typeof H.media == "string" ? H.media : void 0
      });
    }
  }, lt.preloadModule = function(O, H) {
    if (typeof O == "string")
      if (H) {
        var _ = X(H.as, H.crossOrigin);
        h.d.m(O, {
          as: typeof H.as == "string" && H.as !== "script" ? H.as : void 0,
          crossOrigin: _,
          integrity: typeof H.integrity == "string" ? H.integrity : void 0
        });
      } else h.d.m(O);
  }, lt.requestFormReset = function(O) {
    h.d.r(O);
  }, lt.unstable_batchedUpdates = function(O, H) {
    return O(H);
  }, lt.useFormState = function(O, H, _) {
    return Y.H.useFormState(O, H, _);
  }, lt.useFormStatus = function() {
    return Y.H.useHostTransitionStatus();
  }, lt.version = "19.2.3", lt;
}
var Vi;
function Ki() {
  if (Vi) return D4.exports;
  Vi = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (i) {
        console.error(i);
      }
  }
  return m(), D4.exports = of(), D4.exports;
}
var Ef = Ki(), pf = ["title"], zf = ["title"], gf = ["title"], Mf = ["title"], xf = ["title"], wf = ["title"], yf = ["title"], Hf = ["title"], Ff = ["title"], Sf = ["title"], Df = ["title"], bf = ["title"], Af = ["title"], Bf = ["title"], Tf = ["title"], Lf = ["title"], Cf = ["title"], Of = ["title"], Vf = ["title"], Nf = ["title"], _f = ["title"], Rf = ["title"], Uf = ["title"], jf = ["title"], Gf = ["title"], Yf = ["title"], qf = ["title"], Qf = ["title"], Xf = ["title"], Zf = ["title"], Kf = ["title"], Jf = ["title"], Wf = ["title"], kf = ["title"], $f = ["title"], If = ["title"], Pf = ["title"], em = ["title"], tm = ["title"], lm = ["title"], am = ["title"], nm = ["title"], cm = ["title"], im = ["title"], um = ["title"], rm = ["title"], hm = ["title"], fm = ["title"], mm = ["title"], sm = ["title"], vm = ["title"], dm = ["title"], om = ["title"], Em = ["title"], pm = ["title"], zm = ["title"], gm = ["title"], Mm = ["title"], xm = ["title"], wm = ["title"], ym = ["title"], Hm = ["title"], Fm = ["title"], Sm = ["title"], Dm = ["title"], bm = ["title"], Am = ["title"], Bm = ["title"], Tm = ["title"], Lm = ["title"], Cm = ["title"], Om = ["title"], Vm = ["title"], Nm = ["title"], _m = ["title"], Rm = ["title"], Um = ["title"], jm = ["title"], Gm = ["title"], Ym = ["title"], qm = ["title"], Qm = ["title"], Xm = ["title"], Zm = ["title"], Km = ["title"], Jm = ["title"], Wm = ["title"], km = ["title"], $m = ["title"], Im = ["title"], Pm = ["title"], es = ["title"], ts = ["title"], ls = ["title"], as = ["title"], ns = ["title"], cs = ["title"], is = ["title"], us = ["title"], rs = ["title"], hs = ["title"], fs = ["title"], ms = ["title"], ss = ["title"], vs = ["title"], ds = ["title"], os = ["title"], Es = ["title"], ps = ["title"], zs = ["title"], gs = ["title"], Ms = ["title"], xs = ["title"], ws = ["title"], ys = ["title"], Hs = ["title"], Fs = ["title"], Ss = ["title"], Ds = ["title"], bs = ["title"], As = ["title"], Bs = ["title"], Ts = ["title"], Ls = ["title"], Cs = ["title"], Os = ["title"], Vs = ["title"], Ns = ["title"], _s = ["title"], Rs = ["title"], Us = ["title"], js = ["title"], Gs = ["title"], Ys = ["title"], qs = ["title"], Qs = ["title"], Xs = ["title"], Zs = ["title"], Ks = ["title"], Js = ["title"], Ws = ["title"], ks = ["title"], $s = ["title"], Is = ["title"], Ps = ["title"], ev = ["title"], tv = ["title"], lv = ["title"], av = ["title"], nv = ["title"], cv = ["title"], iv = ["title"], uv = ["title"], rv = ["title"], hv = ["title"], fv = ["title"], mv = ["title"], sv = ["title"], vv = ["title"], dv = ["title"], ov = ["title"], Ev = ["title"], pv = ["title"], zv = ["title"], gv = ["title"], Mv = ["title"], xv = ["title"], wv = ["title"], yv = ["title"], Hv = ["title"], Fv = ["title"], Sv = ["title"], Dv = ["title"], bv = ["title"], Av = ["title"], Bv = ["title"], Tv = ["title"], Lv = ["title"], Cv = ["title"], Ov = ["title"], Vv = ["title"], Nv = ["title"], _v = ["title"], Rv = ["title"], Uv = ["title"], jv = ["title"], Gv = ["title"], Yv = ["title"], qv = ["title"], Qv = ["title"], Xv = ["title"], Zv = ["title"], Kv = ["title"], Jv = ["title"], Wv = ["title"], kv = ["title"], $v = ["title"], Iv = ["title"], Pv = ["title"], ed = ["title"], td = ["title"], ld = ["title"], ad = ["title"], nd = ["title"], cd = ["title"], id = ["title"], ud = ["title"], rd = ["title"], hd = ["title"], fd = ["title"], md = ["title"], sd = ["title"], vd = ["title"], dd = ["title"], od = ["title"], Ed = ["title"], pd = ["title"], zd = ["title"], gd = ["title"], Md = ["title"], xd = ["title"], wd = ["title"], yd = ["title"], Hd = ["title"], Fd = ["title"], Sd = ["title"], Dd = ["title"], bd = ["title"], Ad = ["title"], Bd = ["title"], Td = ["title"], Ld = ["title"], Cd = ["title"], Od = ["title"], Vd = ["title"], Nd = ["title"], _d = ["title"], Rd = ["title"], Ud = ["title"], jd = ["title"], Gd = ["title"], Yd = ["title"], qd = ["title"], Qd = ["title"], Xd = ["title"], Zd = ["title"], Kd = ["title"], Jd = ["title"], Wd = ["title"], kd = ["title"], $d = ["title"], Id = ["title"], Pd = ["title"], eo = ["title"], to = ["title"], lo = ["title"], ao = ["title"], no = ["title"], co = ["title"], io = ["title"], uo = ["title"], ro = ["title"], ho = ["title"], fo = ["title"], mo = ["title"];
function v() {
  return v = Object.assign || function(m) {
    for (var i = 1; i < arguments.length; i++) {
      var u = arguments[i];
      for (var h in u)
        Object.prototype.hasOwnProperty.call(u, h) && (m[h] = u[h]);
    }
    return m;
  }, v.apply(this, arguments);
}
function d(m, i) {
  if (m == null) return {};
  var u = so(m, i), h, p;
  if (Object.getOwnPropertySymbols) {
    var N = Object.getOwnPropertySymbols(m);
    for (p = 0; p < N.length; p++)
      h = N[p], !(i.indexOf(h) >= 0) && Object.prototype.propertyIsEnumerable.call(m, h) && (u[h] = m[h]);
  }
  return u;
}
function so(m, i) {
  if (m == null) return {};
  var u = {}, h = Object.keys(m), p, N;
  for (N = 0; N < h.length; N++)
    p = h[N], !(i.indexOf(p) >= 0) && (u[p] = m[p]);
  return u;
}
var Ji = function(i) {
  var u = i.title, h = d(i, pf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#5CC85C",
    d: "M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-82.3 291.431 225.686)",
    fill: "#F7A226",
    cx: 291.4,
    cy: 225.7,
    rx: 48.7,
    ry: 15.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.099 303.087 164.67)",
    fill: "#DDC7AB",
    cx: 303.1,
    cy: 164.7,
    rx: 11.7,
    ry: 7.2
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-81.738 291.697 271.697)",
    fill: "#DDC7AB",
    cx: 291.7,
    cy: 271.7,
    rx: 11.4,
    ry: 3.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)",
    fill: "#DDC7AB",
    cx: 299.6,
    cy: 269.4,
    rx: 3.3,
    ry: 11
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.518 314.54 201.06)",
    fill: "#DDC7AB",
    cx: 314.5,
    cy: 201.1,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.518 317.511 178.077)",
    fill: "#DDC7AB",
    cx: 317.5,
    cy: 178.1,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-7.7 473.781 225.857)",
    fill: "#F7A226",
    cx: 473.6,
    cy: 225.9,
    rx: 15.7,
    ry: 48.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-21.901 462.057 164.866)",
    fill: "#DDC7AB",
    cx: 462,
    cy: 164.9,
    rx: 7.2,
    ry: 11.7
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-8.27 473.27 271.908)",
    fill: "#DDC7AB",
    cx: 473.4,
    cy: 271.9,
    rx: 3.3,
    ry: 11.4
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "matrix(.05353 -.9986 .9986 .05353 171.34 719.998)",
    fill: "#DDC7AB",
    cx: 465.5,
    cy: 269.6,
    rx: 11,
    ry: 3.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.482 450.552 201.247)",
    fill: "#DDC7AB",
    cx: 450.6,
    cy: 201.2,
    rx: 13.7,
    ry: 4.1
  }), /* @__PURE__ */ a.createElement("ellipse", {
    transform: "rotate(-68.482 447.58 178.265)",
    fill: "#DDC7AB",
    cx: 447.6,
    cy: 178.3,
    rx: 4.1,
    ry: 13.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#B0C6CC",
    d: "M373.3 130.3 356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }));
}, Wi = function(i) {
  var u = i.title, h = d(i, zf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M267.6 113.6v64.7m16.6-64.7v64.7m16.6-64.7v64.7",
    stroke: "#D80027",
    strokeWidth: 7
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M247.4 178.4v64.7m-13.3-64.7v64.7m-13.3-64.6v53.9m-13.7-53.9v47.1",
    stroke: "#D80027",
    strokeWidth: 5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m199.9 146 27.6-32.4 28.5 32.3-28.1 32.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#BC8B00",
    d: "M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M264.4 188.9h29.5v8.6h-29.5zm0 17.6h29.5v8.6h-29.5z"
  }));
}, ki = function(i) {
  var u = i.title, h = d(i, gf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009e49",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h171v342H0z"
  }));
}, $i = function(i) {
  var u = i.title, h = d(i, Mf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#DB3E00",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#479900",
    d: "M331 0h182v342H331z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h181.8v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z"
  }));
}, Ii = function(i) {
  var u = i.title, h = d(i, xf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0072c6",
    d: "M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#ce1126"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256.5 342 0 0v342z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M513 342V0L256 342z"
  })));
}, Pi = function(i) {
  var u = i.title, h = d(i, wf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 0 1-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8DCCFF",
    d: "M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D87B00",
    d: "M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zm249.2 0v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z"
  }));
}, e6 = function(i) {
  var u = i.title, h = d(i, yf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED2024",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#212121",
    d: "M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z",
    fill: "#212121"
  }));
}, t6 = function(i) {
  var u = i.title, h = d(i, Hf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M0 228h513v114H0z"
  }));
}, l6 = function(i) {
  var u = i.title, h = d(i, Ff);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m332.7 135.6 17.5-8.6-7.4-19-18.7 6.2zm-45.6-56 5.5-18.8-19.1-7.2-8 18zm29.4 23.2 12.2-15.3-14.9-13.9-14.2 13.6zm19.4 68.9 19.5-.8v-21.3l-22.9.2zm-12.6 38.1 18.8 5.5 7.3-19-18-8zm-29 32.4 14.9 12.7 14.4-14.4-13.1-14.7zm-47-147.7 9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m250.8 61.3-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#000",
    d: "m291.9 223.4-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zm47.7 99.1 7.3 18.2 19.5-6-4.8-19.1zm-40.4-3.7-2 19.5 20.1 3.6 4.5-19.1zm-35.7-21.2L167.4 248l16.4 12.1 12.5-15.2z"
  })));
}, a6 = function(i) {
  var u = i.title, h = d(i, Sf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 744 496"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#3A7DCE",
    d: "M0 0h744v496H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "m120 125 90 63 54-14 23-81 61-36 92 14 105 55 6 90 34 12v92l-65 115-78 24-72-17 18-30-8-32-10 9-162-25-49-85 20-46-49-62z"
  }));
}, n6 = function(i) {
  var u = i.title, h = d(i, Df);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h512v114H0zm0 228h512v114H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    stroke: "#d6ab00",
    strokeWidth: 5,
    cx: 256.5,
    cy: 171,
    r: 40
  }));
}, c6 = function(i) {
  var u = i.title, h = d(i, bf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 33 95.3 171 513 310.76V342L0 171 513 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 287.18v24.58L81.72 171 513 30v24.16"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "m476.98 140.21-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#EFC100",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "m317.89 238.41-22.24-11.11 22.24-11.11h144.46v22.22z"
  }));
}, i6 = function(i) {
  var u = i.title, h = d(i, Af);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0zm0 228h513v114H0z"
  }));
}, u6 = function(i) {
  var u = i.title, h = d(i, Bf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm42.5 49.7 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m154.6 115 100.2 55.7v-15.8L183 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m154.6 115 100.2 55.7v-15.8L183 115zm-83.9 0-71.9 39.9v15.8L99 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M99 55.7-1.2 0v15.7l71.9 40z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M99 55.7-1.2 0v15.7l71.9 40zm84 0 71.8-40V0L154.6 55.7z",
    fill: "#D80027"
  }));
}, r6 = function(i) {
  var u = i.title, h = d(i, Tf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 363 242"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h363v242H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M57 96.9 14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f30028",
    d: "m75.6 40.6 11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 152.2h363v15.7H0zm0 31.4h363v15.7H0z",
    fill: "#FFDA44"
  }));
}, h6 = function(i) {
  var u = i.title, h = d(i, Lf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 210.9H202.2V342h-79.8V210.9H0v-79.8h122.4V0h79.8v131.1H513v61.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z"
  }));
}, f6 = function(i) {
  var u = i.title, h = d(i, Cf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef3340",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00b5e2",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#509e2f",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"
  })));
}, m6 = function(i) {
  var u = i.title, h = d(i, Of);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#10338C",
    d: "M0 0h513.1v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F6C500",
    d: "M99.9 0h342v342"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M19.9 21.1 40.3 6.2 60.9 21 54 0H26.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M92.3 25.5 84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m136.3 69.2-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m179.4 112.3-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m222.5 155.3-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m265.6 198.4-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m308.7 241.5-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m351.7 284.6-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m387 303.5-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z"
  })));
}, s6 = function(i) {
  var u = i.title, h = d(i, Vf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc726",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#00267f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m325.74 101.02-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z"
  }));
}, v6 = function(i) {
  var u = i.title, h = d(i, Nf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#2d6e41",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#F40B32",
    cx: 218.902,
    cy: 256.5,
    r: 115
  }));
}, d6 = function(i) {
  var u = i.title, h = d(i, _f);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#fdda25",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef3340",
    d: "M342 0h171v342H342z"
  }));
}, o6 = function(i) {
  var u = i.title, h = d(i, Rf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#3d944f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 102.6 16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z"
  }));
}, E6 = function(i) {
  var u = i.title, h = d(i, Uf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#00966e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d62612",
    d: "M0 228h513v114H0z"
  }));
}, p6 = function(i) {
  var u = i.title, h = d(i, jf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m222.8 34.3-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.8H0V0h137.6z"
  }));
}, z6 = function(i) {
  var u = i.title, h = d(i, Gf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M215.9 170.7 0 314.6V26.8zM513 26.8v287.8L297.1 170.7z",
    fill: "#47a644"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 170.7 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 26.8 297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 251.6,
    cy: 170.7,
    r: 100.2
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m251.4 103.6 7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zm38.8 66.7 7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zm-77.2 0 7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z",
    fill: "#D80027",
    stroke: "#47a644",
    strokeWidth: 3
  }));
}, g6 = function(i) {
  var u = i.title, h = d(i, Yf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#008751",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fcd116",
    d: "M196.666 85.333H513v171H196.666z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e8112d",
    d: "M196.666 256H513v171H196.666z"
  }));
}, M6 = function(i) {
  var u = i.title, h = d(i, qf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BC00",
    d: "M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zm11.33-165.69s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ADADAD",
    d: "M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E6BC00",
    d: "M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#125ECC",
    d: "M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFE600",
    d: "M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D60537",
    d: "M157.31 175.36H359.1v57.65H157.31v-57.65z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#EACE00",
    d: "M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7A6920",
    d: "M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ADADAD",
    d: "M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 258.2,
    cy: 204.19,
    r: 16.93
  }));
}, x6 = function(i) {
  var u = i.title, h = d(i, Qf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012169",
    d: "M0 .1h256.5v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#c8102e",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ a.createElement("g", {
    transform: "translate(13 5)"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2F8F22",
    d: "M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#65B5D2",
    cx: 383.65,
    cy: 214.56,
    r: 39.88
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 343.77,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 423.52,
    cy: 194.63,
    r: 19.94
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c8102e",
    cx: 383.65,
    cy: 154.75,
    r: 19.94
  })));
}, w6 = function(i) {
  var u = i.title, h = d(i, Xf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m0 193.74 513 127.19V214.26L0 97.08z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 234.26v-86.67L0 20.41v86.67"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027",
    stroke: "#231F20",
    strokeWidth: 3,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M306.4 134.01a50.28 50.28 0 0 1 6.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zm-69.22-93.63h20.88l24.93 27.26v73.45h-26.28v-68.37zm270.76 0h-20.88l-24.93 27.26v73.45h26.27v-68.37z"
  })));
}, y6 = function(i) {
  var u = i.title, h = d(i, Zf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#d52b1e",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9e300",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007934",
    d: "M0 228h513v114H0z"
  }));
}, H6 = function(i) {
  var u = i.title, h = d(i, Kf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012a87",
    d: "M0 342h513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9d90f",
    d: "M250.4 0H0v166.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#dc171d",
    d: "m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "none",
    stroke: "#000",
    strokeWidth: 9,
    strokeMiterlimit: 10,
    cx: 140.4,
    cy: 160.6,
    r: 57.7
  }));
}, F6 = function(i) {
  var u = i.title, h = d(i, Jf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#DC171D",
    d: "M512 342H0V.7h512V342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012A87",
    d: "M512 342H0V171.3h512V342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 342 0 171.3 256 .7l256 170.7L256 342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F9D90F",
    d: "m199.2 249.5 21.7-66.8-56.8-41.2h70.5L256 74.7l21.7 66.8h70.2l-56.8 41.2 21.7 66.8-56.8-41.3z"
  }));
}, S6 = function(i) {
  var u = i.title, h = d(i, Wf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    width: 900,
    height: 600
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h900v600H0z",
    fill: "#dc171d"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M450 168.787 215.691 300 450 431.213 684.309 300z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M281.477 336.852V376h69.961l290.727-52.4V376h-93.668z",
    fill: "#dc171f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M188 288H20V20h418v128zm524 0h168V20H462v128zm-524 24H20v268h418V452zm524 0h168v268H462V452z",
    fill: "#012a87"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m450 199.5 8.068 24.827h26.105l-21.12 15.346 8.067 24.827L450 249.157 428.88 264.5l8.066-24.827-21.119-15.345 26.105-.001z",
    fill: "#f9d90f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M281.477 336.852c2.712-8.848 8.614-12.77 16.594-10.995 4.94-18.73 27.739-22.07 36.786-12.857l22.273 22.37c4.837 2.251 12.207 3.095 17.326 3.095 6.33.1 5.621 3.005 10.91 3.106 14.096.27 51.143.458 57.857 0 2.75-.187 64.134-67.857 64.134-67.857 5.12-6.31 18.453-8.333 25.714-3.214 6.786 6.429 13.929 7.143 18.929 2.857 4.405-6.547 14.392-7.309 20.714-3.571l69.45 53.815L548.497 376H351.438l-69.96-39.148z",
    fill: "#008830"
  }));
}, D6 = function(i) {
  var u = i.title, h = d(i, kf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#012a87",
    d: "M0 342h513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9d90f",
    d: "M250.4 0H0v166.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#dc171d",
    d: "m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "none",
    stroke: "#000",
    strokeWidth: 9,
    strokeMiterlimit: 10,
    cx: 140.4,
    cy: 160.6,
    r: 57.7
  }));
}, b6 = function(i) {
  var u = i.title, h = d(i, $f);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#009b3a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fedf00",
    d: "m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 80.4
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002776",
    d: "M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"
  }));
}, A6 = function(i) {
  var u = i.title, h = d(i, If);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc72c",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#00778b"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 171 0 342V0z"
  }));
}, B6 = function(i) {
  var u = i.title, h = d(i, Pf);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF7415",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 0H0v342"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 42,
    strokeMiterlimit: 10,
    d: "M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6"
  }));
}, T6 = function(i) {
  var u = i.title, h = d(i, em);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 33.333 1100 733.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef2b2d",
    d: "M0 0h1100v800H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M300 0h200v800H300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 300h1100v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M350 0h100v800H350z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M0 350h1100v100H0z"
  }));
}, L6 = function(i) {
  var u = i.title, h = d(i, tm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 238h513v104H0zM0 0h513v104H0z",
    fill: "#6da9d2"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 125.5h513v89.656H0z"
  }));
}, C6 = function(i) {
  var u = i.title, h = d(i, lm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#007C30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1720",
    d: "M0 230h513V0H0"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100 230V0H0v342h513-413z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M28 159.6 8.6 128.2 28 97.4l19.3 30.8zm44.6 0-19.3-31.4 19.3-30.8L92 128.2zM28 241.2 8.6 209.8 28 179l19.3 30.8zm44.6 0-19.3-31.4L72.6 179 92 209.8z",
    fill: "#CE1720"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m28 73.8-16.1-26L28 22.2l16 25.6zm44.6 0-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zm44.6 0-16-26.1 16-25.6 16.1 25.6z",
    fill: "none",
    stroke: "#CE1720",
    strokeWidth: 7
  }));
}, O6 = function(i) {
  var u = i.title, h = d(i, am);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#003e87",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 260.9,
    cy: 170.9,
    r: 118.9
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "none",
    stroke: "#6DA544",
    strokeWidth: 18,
    strokeMiterlimit: 10,
    cx: 261.9,
    cy: 173.1,
    r: 94.5
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#003e87",
    d: "m261.9 151.5-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M211.3 128.1h101.3v46.7H211.3z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v35H0zm0 306h513v35H0z",
    fill: "#ce1127"
  }));
}, V6 = function(i) {
  var u = i.title, h = d(i, nm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h142v342H0zm371 0h142v342H371zm-64.5 206 50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z",
    fill: "red"
  }));
}, N6 = function(i) {
  var u = i.title, h = d(i, cm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "green",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m422.7 252.4 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zm-46.6-136.3 6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zm37-77.8 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zm51.8 58.4 6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zm-28 68.1 4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6zM306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zm.2.4-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z"
  }));
}, _6 = function(i) {
  var u = i.title, h = d(i, im);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 66.9V0H411.7L0 274.4V342h100.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 0v40.1L60.2 342H0v-40.8L451.8 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m93.6 31.2 16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z"
  }));
}, R6 = function(i) {
  var u = i.title, h = d(i, um);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#d21034",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 171h211.5v85.3H0zm300.5 0H512v85.3H300.5z",
    fill: "#3a9927"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#003082",
    d: "M0 0v85.3h211.5V0h89v85.3H513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M300.5 342h-89v-86H0v86h513v-86H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z",
    fill: "#ffce00"
  }));
}, U6 = function(i) {
  var u = i.title, h = d(i, rm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#da1a35",
    d: "M0 85.331h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009543",
    d: "M443.726 85.331 102.4 426.657H0V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fbde4a",
    d: "M500.124 85.331 158.798 426.657H11.876L353.202 85.331z"
  }));
}, j6 = function(i) {
  var u = i.title, h = d(i, hm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "red",
    d: "M0 85.337h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
  }));
}, G6 = function(i) {
  var u = i.title, h = d(i, fm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#009e60",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f77f00",
    d: "M0 0h171v342H0z"
  }));
}, Y6 = function(i) {
  var u = i.title, h = d(i, mm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#01237a",
    d: "M0 85.332h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m384 156.705 5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zm-70.209 29.081 15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zm-29.081 70.209 16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zm29.081 70.209 7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zm70.209-29.08-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zm29.081-70.209-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zm-29.081-70.207-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zm80-117.331 80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zm-16 170.665h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915 73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M80 138.665 0 85.331v15.082l57.377 38.252zm96 0h22.623L256 100.413V85.331zm-118.623 64L0 240.917v15.081l80-53.333zm118.623 0 80 53.333v-15.081l-57.377-38.252z"
  })));
}, q6 = function(i) {
  var u = i.title, h = d(i, sm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M196 0h317v171H196z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0037A1",
    d: "M0 0h196v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M98 24.5 113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z"
  }));
}, Q6 = function(i) {
  var u = i.title, h = d(i, vm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007a5e",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M342 0h171v342H342zm-86 102.2 17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z",
    fill: "#fcd116"
  }));
}, X6 = function(i) {
  var u = i.title, h = d(i, dm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m226.8 239.2-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zm-54.4-56.6-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zm56.6 136.4-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z",
    fill: "#FFDA44"
  }));
}, Z6 = function(i) {
  var u = i.title, h = d(i, om);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256.5h513V342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 171h513v85.5H0z"
  }));
}, K6 = function(i) {
  var u = i.title, h = d(i, Em);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 285h513v57H0zM0 0h513v57H0z"
  }));
}, J6 = function(i) {
  var u = i.title, h = d(i, pm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M0-40.8v422.9-211.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v68.3H0zm0 136.5h513v68.3H0zm0 136.6h513v68.3H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m86.5 111.4 12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z"
  }));
}, W6 = function(i) {
  var u = i.title, h = d(i, zm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#003893",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cf2027",
    d: "M0 182.2h513v41.4H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 140.8h513v41.4H0zm0 82.8h513V265H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m150.4 70 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zm0 209.7 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zm-97.6-70.9 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zm-66.3 71H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zm48.4 148.9 6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zm66.4 71h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zm-48.4 148.9-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z",
    fill: "#f7d116",
    stroke: "#000"
  }));
}, k6 = function(i) {
  var u = i.title, h = d(i, gm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#002b7f",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9e814",
    d: "M0 233.5h513v51H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m168.7 86.5 12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zm-83.3-54 7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z",
    fill: "#FFF"
  }));
}, $6 = function(i) {
  var u = i.title, h = d(i, Mm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0021ad",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1c8a42",
    d: "M0 0h513v342"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m77.6 272 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zm-37.1-98.9 5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zm37.1-80.9 5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zm46.1 62.9 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zm-32.9 54 4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#ffc639",
    cx: 267.1,
    cy: 170.7,
    r: 74.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1c8a42",
    d: "M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc639",
    d: "M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z"
  }));
}, I6 = function(i) {
  var u = i.title, h = d(i, xm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#DB7D00",
    d: "M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#006651"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zm37.9-14.7c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zm18.2-6.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zm16.9-7.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zm16.9-10.6c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zm13.5-10.7c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zm10.8-2.8c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zm-10.5 12.2c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zm-17.7 8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zm-16.3 9.2c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zm-14.9 4.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zm-4 9.4c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zm-37.9-14.7c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zm-18.2-6.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zm-16.9-7.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zm-13.5-10.7c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zm-10.8-2.8c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zm10.5 12.2c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zm17.7 8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zm16.3 9.2c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zm14.9 4.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z"
  })));
}, P6 = function(i) {
  var u = i.title, h = d(i, wm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#11457e",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d7141a",
    d: "M513 171v171H0l256.5-171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H256.5L0 0z"
  }));
}, e7 = function(i) {
  var u = i.title, h = d(i, ym);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 228h513v114H0z"
  }));
}, t7 = function(i) {
  var u = i.title, h = d(i, Hm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#12ad2b",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6ab2e7",
    d: "M513 0v166.7L0 170.8V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 170.7 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#d7141a",
    d: "m89.8 92.5 17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z"
  }));
}, l7 = function(i) {
  var u = i.title, h = d(i, Fm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#c60c30",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M190 0h-60v140H0v60h130v142h60V200h323v-60H190z"
  }));
}, a7 = function(i) {
  var u = i.title, h = d(i, Sm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 110.7v120h513v-120z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 110.7h513v40H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 190.7h513v40H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M196 0h120v342H196z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M196 0h40v342h-40z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M274.7 0h40v342h-40z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 256,
    cy: 170.7,
    r: 123.1
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 58.6 4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zm-40.7 56h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zm0 69.3 12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zm40.7 56.1 4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zm65.9 21.4-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zm65.9-21.4-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zm40.7-56.1h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zm0-69.3-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zm-40.7-56-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8zM279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z",
    fill: "#496E2D"
  }));
}, n7 = function(i) {
  var u = i.title, h = d(i, Dm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 216h211v126H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h211v126H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M302 0h211v126H302z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M302 216h211v126H302z"
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#FFF",
    strokeWidth: 5,
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 130h-49.9v49.4s19.5 6 49.9 6V130z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z"
  })));
}, c7 = function(i) {
  var u = i.title, h = d(i, bm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#41662E",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.5 0H513v342H256.5z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m341.5 105.3-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z"
  })));
}, i7 = function(i) {
  var u = i.title, h = d(i, Am);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 170.7h513V256H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256h513v85.3H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 256,
    cy: 171,
    r: 60
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#4C1F00",
    d: "M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#57BA17",
    d: "M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z"
  }));
}, u7 = function(i) {
  var u = i.title, h = d(i, Bm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#111",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#368FD8",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 228h513v114H0z"
  }));
}, r7 = function(i) {
  var u = i.title, h = d(i, Tm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#C09300",
    d: "M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z"
  }));
}, h7 = function(i) {
  var u = i.title, h = d(i, Lm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#428823",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256 171 0 342V0zm53.1 0c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-5.1-34.6-24.2-34.6-46.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m365 129.2 10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z"
  })));
}, f7 = function(i) {
  var u = i.title, h = d(i, Cm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#56AF35",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m0 342 513-171L0 0v342z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#ffc945"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 119.5,
    cy: 148.3,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 148.9,
    cy: 158.5,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 134.7,
    cy: 135.2,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 119.5,
    cy: 172.7,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 149.9,
    cy: 182.8,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 122.5,
    cy: 198,
    r: 17.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 145.9,
    cy: 205.2,
    r: 17.5
  })));
}, m7 = function(i) {
  var u = i.title, h = d(i, Om);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    width: 810,
    height: 540
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FCDD09",
    d: "M0 0h810v540H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#DA121A",
    strokeWidth: 60,
    d: "M0 90h810m0 120H0m0 120h810m0 120H0"
  }));
}, s7 = function(i) {
  var u = i.title, h = d(i, Vm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D03433",
    d: "M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FBCA46",
    d: "M0 4h22.5v7H0V4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M7.8 7h1v.5h-1V7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A41517",
    d: "M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A41517",
    d: "M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z"
  }));
}, v7 = function(i) {
  var u = i.title, h = d(i, Nm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#20AA46",
    d: "M0 0h22.5v5H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E92F3B",
    d: "M0 10h22.5v5H0v-5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FADF50",
    d: "M0 5h22.5v5H0V5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#205CCA",
    cx: 11.3,
    cy: 7.5,
    r: 5.2
  }), /* @__PURE__ */ a.createElement("g", {
    stroke: "#FFDB3D",
    fill: "none"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m11.3 8.8-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zm-1-2.4h1.9M9.9 7.8l1.3 1m.8-2.6.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1",
    strokeWidth: 0.5
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m8.7 3.9 1.1 1.6m4-1.7-1 1.6m-1.5 4.7V12M8.9 8.3 7.1 9m8.4 0-1.8-.7",
    strokeWidth: 0.25
  })));
}, d7 = function(i) {
  var u = i.title, h = d(i, _m);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 810 540"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#039",
    d: "M0 0h810v540H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FC0",
    d: "m404.951 59.865 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-90 24 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-66 66 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-24 89.999 6.735 20.719h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm24 90.001 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm66 66 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm180-312 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm66 66 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm24 90 6.735 20.718h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm-24 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm-156 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm90-24.001 6.735 20.719h21.894l-17.633 12.812 6.639 20.74-17.635-12.812-17.633 12.812 6.735-20.73-17.633-12.811h21.797z"
  }));
}, o7 = function(i) {
  var u = i.title, h = d(i, Rm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M513 129.3V212H203.7v130H121V212H0v-82.7h121V0h82.7v129.3z"
  }));
}, E7 = function(i) {
  var u = i.title, h = d(i, Um);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#62B5E5",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h256.5v170.6H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m155.9 115 100.6 55.6v-15.8L184.6 115h-28.7zm-55.7-59.3L0 0v15.8l71.8 39.9h28.4z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "m196.9 115 59.6 32.9V115h-59.6zm-41 0 100.6 55.6v-15.8L184.6 115h-28.7zm73.4 55.6-73.5-40.9v40.9h73.5zM45.2 115 0 140.1V115h45.2zm55 7.1v48.6H12.8l87.4-48.6zM59.1 55.7 0 22.8v32.8s59.1 0 59.1.1zm41.1 0L0 0v15.8l71.8 39.9h28.4zM26.7 0l73.5 40.8V0H26.7zm184.2 55.7 45.6-25.1v25.1h-45.6zm-55-7.2V0h87.4l-87.4 48.5z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144.3-.2h-32.1v69.5H0v32.1h112.2v69.5h32.1v-69.5h112.2V69.3H144.3V-.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m155.9 115 100.6 55.6v-15.8L184.6 115h-28.7zm-84.1 0L0 154.9v15.8L100.2 115H71.8zm28.4-59.3L0 0v15.8l71.8 39.9h28.4zm83.9 0 72.4-39.9V0L155.9 55.7h28.2z"
  })));
}, p7 = function(i) {
  var u = i.title, h = d(i, jm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1F8BDE",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#187536",
    d: "M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zm-1.4 91.6c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z"
  }));
}, z7 = function(i) {
  var u = i.title, h = d(i, Gm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 37.9 10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zm132.8-132.8-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z",
    fill: "#FFF"
  }));
}, g7 = function(i) {
  var u = i.title, h = d(i, Ym);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0F61A5",
    d: "M513 214.5H206.2V342h-87.8V214.5H0v-87.7h118.4V0h87.8v126.8H513V192z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E50E3D",
    d: "M513 149.3V192H183.7v150H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, M7 = function(i) {
  var u = i.title, h = d(i, qm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318A",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, x7 = function(i) {
  var u = i.title, h = d(i, Qm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }));
}, w7 = function(i) {
  var u = i.title, h = d(i, Xm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 136h513v70H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M221.5 0h70v342h-70z"
  }));
}, y7 = function(i) {
  var u = i.title, h = d(i, Zm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 136h513v70H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M221.5 0h70v342h-70z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "m256.5 87.8-24 41.4h-48.8l24.7 42.1-24.7 42.1h48.8l24 42.1 24-42.1h48.8l-24.7-42.1 24.7-42.1h-48.8l-24-41.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M258.6 130.6c-3.3 0-3.3 3.3-3.3 3.3V160h-2v-22s0-4-3.3-4c-4 0-4 4-4 4v23.4l-2 .7v-16.7s0-4-3.3-4c-4 0-4 4-4 4V174c0 6.7 3.3 13.4 8 17.4v14h24V194c6-3.3 10.7-9.4 12-16.7 0-4 1.3-7.3 2.7-10.7l2.7-9.4s.7-3.3-2.7-4.7-4.7 2-4.7 2l-5.3 12.7h-2v-31.4s0-3.3-3.3-3.3c-4 0-4 3.3-4 3.3v24h-1.3v-26.1c-.2.2-.2-3.1-4.2-3.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "M249.2 25.7V33h-7.3v14.7h7.3v14c-4-4-9.4-6-14.7-6-12.2-.1-22.1 9.6-22.3 21.8-.1 6.1 2.4 12 6.9 16.3v13.4h74.8V93.8c4-4.7 6.7-10 6.7-16-.2-12.2-10.3-21.9-22.4-21.6-5.3.1-10.4 2.1-14.3 5.6v-14h7.3V33.1h-7.3v-7.3l-14.7-.1z"
  }));
}, H7 = function(i) {
  var u = i.title, h = d(i, Km);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#005EB8",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 302.1V342h59.9l196.6-131.1L453.1 342H513v-39.9L316.4 171 513 39.9V0h-59.9L256.5 131.1 59.9 0H0v39.9L196.7 171z"
  }));
}, F7 = function(i) {
  var u = i.title, h = d(i, Jm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#529E3C",
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D11C1C",
    d: "m201 259.8 28.2-4.8-21.8-10.3 14.9-8.4s25.2 21.2 25.2 14.4c0-7.3 23.7-4.1 22.7-14.4-1.3-14.1-26.2-1-30.6-18.7-2.5-9.9-10.3-8.6-10.3-8.6l-25.1 8.6-12.5 18.7-6.2-18.7s-14.6 11.9-19.5 18.7c-5.2 7.3-10.7 23.5-10.7 23.5l25.6 10.7-37.3-6.6-27.2 6.6-16.7 4.6 7.3-7.7-15-7.6 15-9-7.3-6.1 32.3 6.1s11.8-1.2 16.3-6.1c5.6-6.2 10.1-27.1 10.1-27.1l-14.8-8.6-11.6 21s-8-19.9-15.6-31c-5.7-8.3-24.3-27.3-24.3-27.3l-24 12.6 13.4-26.7s10.6-9.3 3.9-18.8c-6.8-9.5-12.4-30.9-12.4-30.9s14.1 24.4 19.2 22.5c7.2-2.7-9-25 0-28.9 6.5-2.9 7.6 25.5 7.6 25.5l7.3-13.9v17.3s-4.3 20.7 3 33c7.2 12.3 28.7 20.9 28.7 20.9s-5.6-12.3 0-36c3.8-16 17.2-43.4 23.6-52.1 3.3-4.6-26.7 17-26.7 17v-17l-28.6-2.9-7.3 8.3-18.3-30L104 83.1h34.6l-6.7-8.3H104s5.9-12.1 34.6-12.1l13.6-9.2s18.6.5 29 .9c9.3.4 26.1-11.5 26.1-11.5l4.7 11.5-11 17.3 11.1 11.4-4.7 7 8.1 11.5H201l11.1 17.9-11.1-6.3 6.4 17.3-6.4 17.8 28.2-9.5s0-25.6 10.3-37.2C271.1 69.2 322.6 43 322.6 43s-2.7 23.5 4.9 25.4c11.1 2.7 59.4-19.4 59.4-19.4s-29 31.3-23.1 34.1c3.2 1.5 8.5 7 8.5 7s-25.1 20.5-29.3 29.3c-4.2 8.8 6.1 19.4 6.1 19.4s-21.7 0-32.5 9.5c32.5 0 59.1 15.4 74.8 4 10.5-7.6-37.7-2.9-31.4-21.9 2.4-7.1 8.5-15.2 22.6-17.3s19.1 6.3 19.1 6.3l7.6-11.5h-22.4l40.6-39.6 5.3 51.1-13.7-11.4-6.2 19.2c14.6 44.6-52.8 54.1-52.8 54.1l41.6 27.8-14.8 4.2-4.2 41.7 19.1 15.5-25-6.6-49.2 11.2 9.8-15.3-20.6 4.1 13.7-13.1-13.7-6.1 17.6-4.9 22.1 15.2s11-14.2 12.2-21.7c1.3-7.8-4.8-24.2-4.8-24.2s-32.6-.7-44.1-3.5-18.2-11.9-18.2-11.9l-13.1 15.4s45.5 17.1 34.1 24.2c-2.6 1.7-15.7-3.2-15.7-3.2s-22.4 26.2-36.8 29.7c-6.5 1.6 18.3 10.7 18.3 10.7s-21.2-3.4-32-6.6c-11.3-3.4-44.4 6.6-44.4 6.6l-11-10.7zM383.9 138c3.1 0 5.7-2.6 5.7-5.7s-2.6-5.7-5.7-5.7-5.7 2.6-5.7 5.7 2.5 5.7 5.7 5.7z"
  }));
}, S7 = function(i) {
  var u = i.title, h = d(i, Wm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v341.3H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"
  })));
}, D7 = function(i) {
  var u = i.title, h = d(i, km);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#c60a0a",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3E8446",
    d: "m256.5 170.7-212 126.1V44.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256.5 170.7 211 126.1h-423zm211-126.2-211 126.2-212-126.2z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3E8446",
    d: "M467.5 44.5v252.3l-211-126.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256.5 10.4 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.4 293.8 2.8 10.2H270l-8.6 6.3 3.3 10.2-8.2-6.3-9.2 6.3 3.3-10.2-8.6-6.3h10.7zm-86.4 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#c60a0a",
    cx: 244.5,
    cy: 170.7,
    r: 76.2
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m244.5 110.1 13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zm-136.8 57.7c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 99.1,
    cy: 182.1,
    r: 7.4
  }));
}, b7 = function(i) {
  var u = i.title, h = d(i, $m);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 0h22.5v15H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#eb000e",
    d: "M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#eb000e",
    d: "m17.3 2.7-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
  }));
}, A7 = function(i) {
  var u = i.title, h = d(i, Im);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FDEB01",
    d: "m0 0 90 60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#58A846",
    d: "M90 0v60L0 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED3D24",
    d: "m50.7 33.3 9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z"
  }));
}, B7 = function(i) {
  var u = i.title, h = d(i, Pm);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m368.6 188 26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z"
  }));
}, T7 = function(i) {
  var u = i.title, h = d(i, es);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m255.9 113.8 14.1 43.4 40.4 3.2-37 26.9 19.5 40.3-37-26.9-37 26.9 14.1-43.5-36.9-26.9h45.7z"
  }));
}, L7 = function(i) {
  var u = i.title, h = d(i, ts);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 230h513v112H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "m264.9 235.5-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zm-69.1 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm151.8 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm8.4-77.7v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zm-78.8 0v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zm-73 0v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z"
  }));
}, C7 = function(i) {
  var u = i.title, h = d(i, ls);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 0v171H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 185.8,
    cy: 171.2,
    r: 117.8
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8"
  }));
}, O7 = function(i) {
  var u = i.title, h = d(i, as);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cf0d19",
    d: "M0 0h513v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 121h513v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1a7e25",
    d: "M0 242h513v100H0z"
  }));
}, V7 = function(i) {
  var u = i.title, h = d(i, ns);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h171v342H0z"
  }));
}, N7 = function(i) {
  var u = i.title, h = d(i, cs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318A",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, _7 = function(i) {
  var u = i.title, h = d(i, is);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v113.8H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 227.6h513V342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0070C8",
    d: "M126 171 0 342V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    d: "M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#786145",
    d: "M264.5 179.8h9.8l4 25.8h-17.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m230.7 120 1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.8 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm16 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm15 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z",
    fill: "#FFDA00",
    stroke: "#000",
    strokeMiterlimit: 10
  }));
}, R7 = function(i) {
  var u = i.title, h = d(i, us);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#0d5eaf"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h190v190H0z"
  })), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 76h190v38H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M76 0h38v190H76z"
  })));
}, U7 = function(i) {
  var u = i.title, h = d(i, rs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFF",
    cx: 443.4,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 406.9,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFCE00",
    cx: 364,
    cy: 317.7,
    rx: 22,
    ry: 9.3
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#39B200",
    d: "m342 190.1 43.4 86.9 43.5-86.9z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#9B9B9B",
    cx: 327.5,
    cy: 233.6,
    rx: 29,
    ry: 43.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#757575",
    d: "m371 175.6-14.5 14.5h57.9l-14.5-14.5 14.5-43.5s-13-29-29-29-29 29-29 29l14.6 43.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#C6B56F",
    cx: 385.4,
    cy: 67,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A54A00",
    cx: 386,
    cy: 88.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 443.4,
    cy: 117.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0049FF",
    cx: 342.2,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0041F9",
    cx: 429.8,
    cy: 146.7,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#F7D71E",
    cx: 386,
    cy: 233.6,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#CEC851",
    cx: 457.9,
    cy: 190.1,
    r: 29
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 385.4,
    cy: 289.5,
    r: 29
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7C0B29",
    d: "m371 135.7 14.5-3.5 14.5 3.5c0 7.5-14.5 11-14.5 11s-14.5-3.5-14.5-11z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 327.5,
    cy: 117.4,
    r: 29
  }));
}, j7 = function(i) {
  var u = i.title, h = d(i, hs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h171v342H0zm342 0h171v342H342z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#DCC26D",
    cx: 256,
    cy: 155.8,
    r: 25.5
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#628A40",
    d: "M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z"
  }));
}, G7 = function(i) {
  var u = i.title, h = d(i, fs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M11.1 11.1h489.7v319.1H11.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#7DBEF1",
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1C8AE6",
    d: "M179.8 180.7h152.6l-29.3 64.9h-95.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF042",
    d: "M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#259C7B",
    d: "m256 157.5-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8E5715",
    d: "M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m217.8 170.7 25.5 38.2h-25.5v-38.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#D80027",
    strokeWidth: 12,
    strokeMiterlimit: 10,
    d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
  }));
}, Y7 = function(i) {
  var u = i.title, h = d(i, ms);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h512v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h182v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m98.3 109.8 15.1 46.5h48.9L122.8 185l15.1 46.5-39.6-28.7-39.5 28.7L73.9 185l-39.6-28.7h48.9z"
  }));
}, q7 = function(i) {
  var u = i.title, h = d(i, ss);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#009E49",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m0 0 947 300L0 600V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFD00D",
    d: "M0 26.1 870 300 0 573.9V26.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2D2D2D",
    d: "m0 0 450 300L0 600V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D3132F",
    d: "m0 35 397.5 265L0 565V35z"
  }));
}, Q7 = function(i) {
  var u = i.title, h = d(i, vs);
  return /* @__PURE__ */ a.createElement("svg", v({
    viewBox: "0 0.5 21 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ee1c25",
    d: "M0 0h21v15H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5zM13.25 7a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5zm-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438.341 1.05-.021 2.11-.809 2.366-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582zm.566 1.13a.25.25 0 1 0 .476-.154.25.25 0 0 0-.476.154zM9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477zm-.899.888a.25.25 0 1 0 .294.405.25.25 0 0 0-.294-.405zm.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286zm-1.124-.58a.25.25 0 1 0-.293.404.25.25 0 0 0 .293-.404zm2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272zm.205-1.247a.25.25 0 1 0-.475-.155.25.25 0 0 0 .475.155z",
    fill: "#FFF"
  })));
}, X7 = function(i) {
  var u = i.title, h = d(i, ds);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M223.4 170.7c.3-.3.5-.6.8-.9-.3.3-.5.6-.8.9zm-34.2 41.9 11 22.9 24.7-5.7-11.1 22.8 19.9 15.8L209 274v25.4l-19.8-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.9-2.6 9.5-7.5-5.3-10.9 11.9 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6v-12.1l-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9 11.9 2.7zm42.4 49.7 5.3 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.5-7.6-9.4 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-30.3 57.9 4.1 12.7h13.3l-10.8 7.8 4.1 12.6-10.7-7.8-10.8 7.8 4.1-12.6-10.7-7.8h13.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
    fill: "#D80027"
  }));
}, Z7 = function(i) {
  var u = i.title, h = d(i, os);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0zm203.5-110.1 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm-52.5 29.7 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z",
    fill: "#338AF3"
  }));
}, K7 = function(i) {
  var u = i.title, h = d(i, Es);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zm-105.6 0v-44l-17.3-14.4-17.9 14.4v44zm35.2 0v-44l17.6-14.4 17.6 14.4v44z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zm-70.4 0h-35.2v-44l17.5-14.4 17.7 14.4z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#D80027",
    fill: "#FFF",
    d: "M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M168.5 113.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm35.2 35.2h35.2V254h-35.2zm35.2-35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-35.2 35.2h35.2V254h-35.2zm35.2 55.5c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zm57.2 0v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z",
    fill: "#D80027"
  }));
}, J7 = function(i) {
  var u = i.title, h = d(i, ps);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 0h513v172H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 172h513v172H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m381.4 251.5-110.7-13.8-110.8 13.8V85.4h221.5z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0052B4",
    cx: 270.7,
    cy: 182.3,
    r: 55.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 270.7,
    cy: 182.3,
    r: 27.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M229.1 113.1h83.1l-41.5 41.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256.8 140.8h27.7v83h-27.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M314.9 215.5h-88.5l-66.5 36h221.5z"
  }));
}, W7 = function(i) {
  var u = i.title, h = d(i, zs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }));
}, k7 = function(i) {
  var u = i.title, h = d(i, gs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 200"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#fc0",
    d: "M0 0h300v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0768a9",
    d: "M0 0h200v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 0h100v200H0z"
  }));
}, $7 = function(i) {
  var u = i.title, h = d(i, Ms);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E00",
    d: "M0 0h513v171H0z"
  }));
}, I7 = function(i) {
  var u = i.title, h = d(i, xs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M342 0h171v342H342z"
  }));
}, P7 = function(i) {
  var u = i.title, h = d(i, ws);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171 276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8 11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4 13-22.1 11.9 22.1h-24.9zm58.3 37.5-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zm0 256h512V320H0z",
    fill: "#2E52B2"
  }));
}, e8 = function(i) {
  var u = i.title, h = d(i, ys);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#E52D42",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F8DD4E",
    d: "M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z"
  }));
}, t8 = function(i) {
  var u = i.title, h = d(i, Hs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#F93",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fff",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#138808",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256.5,
    cy: 171,
    r: 34.2,
    stroke: "navy",
    strokeWidth: 4,
    fill: "none"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256.5,
    cy: 171,
    r: 3.42,
    fill: "navy"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m265.3 138.159-17.6 65.682m17.6-65.682-17.6 65.682m25.8-62.286-34 58.89m41.042-53.487-48.084 48.084M285.945 154l-58.89 34m62.286-25.8-65.682 17.6M290.5 171h-68m66.841 8.8-65.682-17.6m62.286 25.8-58.89-34m53.487 41.042-48.084-48.084m41.042 53.487-34-58.89m25.8 62.286-17.6-65.682M256.5 205v-68m-8.8 66.841 17.6-65.682m-25.8 62.286 34-58.89m-41.042 53.487 48.084-48.084M227.055 188l58.89-34m-62.286 25.8 65.682-17.6M222.5 171h68m-66.841-8.8 65.682 17.6M227.055 154l58.89 34m-53.487-41.042 48.084 48.084M239.5 141.555l34 58.89m-25.8-62.286 17.6 65.682",
    stroke: "navy",
    strokeWidth: 2
  }));
}, l8 = function(i) {
  var u = i.title, h = d(i, Fs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h513V342H0V-.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0-.3h256v171H0V-.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z",
    fill: "#A2001D"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zm256 0v-15l-57-38h-23l80 53z"
  })), /* @__PURE__ */ a.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zm160-23v-30h-46l46 30zm-96 23v-49l73 49h-73z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#5DA51E",
    stroke: "#45602C",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#E2DD24",
    stroke: "#525625",
    strokeWidth: 4,
    strokeMiterlimit: 10,
    d: "M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z"
  }));
}, a8 = function(i) {
  var u = i.title, h = d(i, Ss);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zm49.6 29.8v-59.6H249v79.5h33.1v-19.9zm66.2 0v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z",
    fill: "#547C31"
  }));
}, n8 = function(i) {
  var u = i.title, h = d(i, Ds);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 227.9h513v114H0zm278.8-93.1c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zm89.2 0h22.3v24.4H89.2zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4H223zm44.7 0H290v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0H513v24.4h-22.3zm-446.1 118h22.3v25.5H44.6zm-44.6 0h22.3v25.5H0zm89.2 0h22.3v25.5H89.2zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5H223zm44.7 0H290v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0H513v25.5h-22.3z",
    fill: "#FFF",
    opacity: 0.5
  }));
}, c8 = function(i) {
  var u = i.title, h = d(i, bs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 210.6H202.2v130.7h-79.8V210.6H0v-79.8h122.4V0h79.8v130.8H513v18.5l-1 42.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M513 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z"
  }));
}, i8 = function(i) {
  var u = i.title, h = d(i, As);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#F4F5F0",
    d: "M342 0H0v341.3h512V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#008C45",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#CD212A",
    d: "M342 0h171v342H342z"
  }));
}, u8 = function(i) {
  var u = i.title, h = d(i, Bs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M301.8 171 513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m233.7 44.6 22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z"
  }));
}, r8 = function(i) {
  var u = i.title, h = d(i, Ts);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M215.9 171 0 314.6V26.8zM513 26.8v287.8L296.1 171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M513 26.8 296.1 171 513 314.6V342h-41.1L256 197.4 40.1 342H0v-27.4L215.9 171 0 26.8V0h40.1L256 143.9 471.9 0H513z"
  }));
}, h8 = function(i) {
  var u = i.title, h = d(i, Ls);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256.5 170.7 0 341.3V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m77.9 139.5 7.9 16.4 17.8-4.1-8 16.5 14.3 11.3-17.8 4 .1 18.3-14.3-11.5-14.2 11.5v-18.3l-17.8-4 14.3-11.3-7.9-16.5 17.7 4.1z"
  }));
}, f8 = function(i) {
  var u = i.title, h = d(i, Cs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 256.5,
    cy: 171,
    r: 96
  }));
}, m8 = function(i) {
  var u = i.title, h = d(i, Os);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h512v90.579H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 251h513v91H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m323.3 54.5-25.6-11.8L256 137l-41.7-94.3-25.6 11.8 51.8 116.2-51.8 116.2 25.6 11.8 41.7-94.4 41.7 94.4 25.6-11.8-51.8-116.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M273.4 65.6c-9.9-10.8-17.4-17-17.4-17s-7.5 6.2-17.4 17v210.1c9.9 10.8 17.4 17 17.4 17s7.5-6.2 17.4-17V65.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M209 105.9v129.5c10.5 18.5 23.3 33.7 32.9 43.8V62.1c-9.6 10.1-22.4 25.3-32.9 43.8zm94 0c-10.5-18.5-23.3-33.7-32.9-43.8v217.2c9.6-10.1 22.4-25.3 32.9-43.8V105.9z",
    fill: "#A2001D"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M303 105.9v129.5c10.6-18.8 18.8-41 18.8-64.8s-8.2-45.9-18.8-64.7zm-94 0v129.5c-10.6-18.8-18.8-41-18.8-64.8s8.2-45.9 18.8-64.7z"
  }));
}, s8 = function(i) {
  var u = i.title, h = d(i, Vs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256,
    cy: 170.7,
    r: 170.7
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M382.4 170.7 330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#D80027",
    cx: 257.4,
    cy: 170.7,
    r: 71.6
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zm26.6 46.5c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zm59.4-71.2c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zm-21.7 28.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z",
    fill: "#FFDA44"
  }));
}, v8 = function(i) {
  var u = i.title, h = d(i, Ns);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v114H0zm0 228h513v114H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M303.5 196.6v-17.8h-11.9v-23.7l-11.9-11.9-11.8 11.9v-23.8L256 119.5l-11.9 11.8v23.8l-11.8-11.9-11.9 11.9v23.7h-11.9v17.8h-11.9v17.8h118.8v-17.8z"
  }));
}, d8 = function(i) {
  var u = i.title, h = d(i, _s);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 450 300"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#CE1126",
    d: "M0 0h450v300H0V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FCD116"
  }, /* @__PURE__ */ a.createElement("circle", {
    cx: 227.6,
    cy: 161.2,
    r: 56.2
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m254.1 73.4-23.7 26 28.6 6.5zm-51.5.2-4.8 33.1 28.5-8zm94.3 26.7-34.7 8.5 20.1 23.7zm-138.3-1.8 15.5 32.7 20.2-22.7zm159 45.3-34.4-9.9 5.6 29.5zm-182-2.6 31.9 19.8 5.2-27.7z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#003F87",
    d: "M0 175h450v125H0V175z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z"
  }), /* @__PURE__ */ a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FCD116",
    d: "m183.2 48.3-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z"
  }));
}, o8 = function(i) {
  var u = i.title, h = d(i, Rs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v85.5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513V171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 171h513v85.5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M256.5 171 0 342V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M68.6 170.7c0-24.9 17.5-45.6 40.8-50.7-3.6-.8-7.3-1.2-11.1-1.2-28.7 0-51.9 23.3-51.9 51.9s23.3 51.9 51.9 51.9c3.8 0 7.5-.4 11.1-1.2-23.3-5.1-40.8-25.9-40.8-50.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m108.9 126.1 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.3h8.9zm0 22.3 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m108.9 170.7 2.7 8.5h9l-7.3 5.2 2.8 8.5-7.2-5.2-7.3 5.2 2.8-8.5-7.2-5.2h8.9zm0 22.2 2.7 8.5h9l-7.3 5.3 2.8 8.5-7.2-5.3-7.3 5.3 2.8-8.5-7.2-5.3h8.9z"
  })));
}, E8 = function(i) {
  var u = i.title, h = d(i, Us);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 0H0v342"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M307.7 0 0 194.5V342h206.9L513 148.5V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M513 0H385.2L0 249.4V341l126.2 1L513 91.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m141.1 187 31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z",
    fill: "#FFF"
  }));
}, p8 = function(i) {
  var u = i.title, h = d(i, js);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#91DC5A",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v57.188H0zm0 284.1h513v57.177H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 79.9h513v181.582H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 190.33,
    cy: 171,
    r: 65.668
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m190.3 105 14.8 45.3h47.7l-38.6 28.1 14.8 45.5-38.7-28.2-38.6 28.1 14.8-45.4-38.6-28.1h47.7z"
  }));
}, z8 = function(i) {
  var u = i.title, h = d(i, Gs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    transform: "rotate(-56.31)"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M-75 228.3H75m-150 37.5H75m-150 37.5H75m-150 475H75m-150 37.5H75m-150 37.5H75",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "M0 753.3v125"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#ca163a",
    cy: 540.8,
    r: 150
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0e4896",
    d: "M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "m231.56 535.73-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006-83.205-124.808m478.43-138.675-83.205-124.807M720.39 209.843 637.184 85.036m114.407 104.006L668.386 64.234",
    stroke: "#000",
    strokeWidth: 25
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#FFF",
    strokeWidth: 12.5,
    d: "m205.6 462.897 31.202-20.8m389.981-259.989 36.444-24.296m31.202-20.801 31.202-20.801"
  }));
}, g8 = function(i) {
  var u = i.title, h = d(i, Ys);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M167 227.6 0 341.3V0l167 113.8z"
  }));
}, M8 = function(i) {
  var u = i.title, h = d(i, qs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#6DA544",
    cx: 384,
    cy: 96.5,
    r: 29.7
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M332.1 89H436v44.5H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M435.9 170.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M332.1 200.3V230h15.6c9.4 9.2 22.2 14.8 36.3 14.8 14.1 0 27-5.7 36.3-14.8h15.6v-29.7H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M332.1 126.1v44.5c0 39.8 51.9 51.9 51.9 51.9s51.9-12.2 51.9-51.9v-44.5H332.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M384 149.9c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9zm0-41.6c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9v20.8c13 0 13 11.9 26 11.9s13-11.9 26-11.9 13 11.9 26 11.9 13-11.9 26-11.9v-20.8c-13 0-13 11.9-26 11.9s-13-11.9-26-11.9z",
    fill: "#F3F3F3"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
  })));
}, x8 = function(i) {
  var u = i.title, h = d(i, Qs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#36B6CC",
    d: "M0 0h513v342H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFD400",
    cx: 256.5,
    cy: 170.9,
    r: 68.4
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFD400",
    d: "m256.5 251.5-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z"
  }));
}, w8 = function(i) {
  var u = i.title, h = d(i, Xs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 .1h513v90.7H0zm0 251.2h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256.5,
    cy: 171,
    r: 65.9
  }));
}, y8 = function(i) {
  var u = i.title, h = d(i, Zs);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 .2h513v90.7H0zm.5 251.1H513V342H.5z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M290.3 193.5 256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#14AF5A",
    d: "M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z"
  }));
}, H8 = function(i) {
  var u = i.title, h = d(i, Ks);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#55B2FF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M148.5 298.1h216l-108-254.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#333",
    d: "m186 272.7 70.5-160.3L327 272.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M148.5 298.1h216l-108-101.7z"
  }));
}, F8 = function(i) {
  var u = i.title, h = d(i, Js);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z"
  }));
}, S8 = function(i) {
  var u = i.title, h = d(i, Ws);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M222.6 22.3h267.1v296.8H222.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M22.3 22.3h200.3v296.8H22.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M200.3 0h22.3v342h-22.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M22.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M111.3 22.3h89v296.8h-89z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zm-136-124.5c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zm248.4-.1c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zm.1 276.9c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zm-248.2-.1c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFDA44",
    strokeWidth: 6,
    strokeMiterlimit: 10,
    d: "M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4"
  }));
}, D8 = function(i) {
  var u = i.title, h = d(i, ks);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v31.1H0zm0 62.2h513v31.1H0zm0 62.3h513v31.1H0zm0 62.3h513v31.1H0zm0 62.5h513v31.1H0zm0 61.6h513V342H0z",
    fill: "#bf0a30"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#002868",
    d: "M0 0h155.6v155.6H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m77.8 30.2 10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z"
  }));
}, b8 = function(i) {
  var u = i.title, h = d(i, $s);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 227.6h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m245.2 171 7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z"
  }));
}, A8 = function(i) {
  var u = i.title, h = d(i, Is);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 228h513v114H0z"
  }));
}, B8 = function(i) {
  var u = i.title, h = d(i, Ps);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 228h513v114H0z"
  }));
}, T8 = function(i) {
  var u = i.title, h = d(i, ev);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    className: "prefix__st1",
    d: "M0 0h513v127.6H0zm0 214.4h513V342H0z",
    fill: "#A2001D"
  }));
}, L8 = function(i) {
  var u = i.title, h = d(i, tv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m281.4 150.7 9 12.3 14.5-4.7-9 12.4 9 12.3-14.5-4.7-9 12.3v-15.2l-14.5-4.7 14.5-4.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M257 201.5c-17 0-30.9-13.8-30.9-30.9s13.8-30.9 30.9-30.9c5.3 0 10.3 1.3 14.7 3.7-6.9-6.7-16.2-10.8-26.6-10.8-21 0-38 17-38 38s17 38 38 38c10.3 0 19.7-4.1 26.6-10.8-4.4 2.4-9.4 3.7-14.7 3.7z"
  })));
}, C8 = function(i) {
  var u = i.title, h = d(i, lv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#d12a46",
    d: "M0 .3V342h513V.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#316525",
    d: "M359.8 148.9h-73.3l-22.7-69.7-22.7 69.7h-73.3l59.3 43.1-22.7 69.7 59.3-43.1 59.3 43.1-22.5-69.7 59.3-43.1zm-116.1 37.7 7.7-23.6h24.8l7.7 23.6-20.1 14.6-20.1-14.6zm27.9-37.7H256l7.8-24 7.8 24zm24.3 29-4.8-14.9h25.3l-20.5 14.9zM236.6 163l-4.8 14.9-20.5-14.9h25.3zm-5.3 61.8 7.8-24 12.6 9.2-20.4 14.8zm44.5-14.9 12.6-9.2 7.8 24-20.4-14.8z"
  }));
}, O8 = function(i) {
  var u = i.title, h = d(i, av);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M0 0h513v171H0z"
  }));
}, V8 = function(i) {
  var u = i.title, h = d(i, nv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#AF7F59",
    stroke: "#231F20",
    strokeWidth: 3,
    strokeMiterlimit: 10,
    d: "m240.4 105.7 9.7 11.6-7.5 17.4-26.1-24.3-12.7 13.2v106.1l24.6-36 20.6 12.4-18 27.8 25.2 15.8 26.5-15.8-19.7-27.8 22.3-12.4 23.9 33.8v-106l-12.4-12-26.8 24.7-6.5-16.5 3.5-12.3-11.7-7.5z"
  }));
}, N8 = function(i) {
  var u = i.title, h = d(i, cv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc000",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e30000",
    d: "M20 20h473v302H20z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc000",
    d: "M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c3-1 6.9-7.5 10.8-7.5 3.9 0 7.8 6.5 10.8 7.5l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9l-6.8-6.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0371ba",
    d: "M275 201.3h-37c-4.9 0-8.8-3.9-8.8-8.8v-34.2c0-4.9 3.9-8.8 8.8-8.8h37c4.9 0 8.8 3.9 8.8 8.8v34.2c0 4.8-3.9 8.8-8.8 8.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#39B54A",
    d: "m230.8 212.8 24.4 17.9c.8.6 1.8.6 2.6 0l24.4-17.9c2.1-1.6 1.2-5.4-1.3-5.4h-48.8c-2.5 0-3.4 3.9-1.3 5.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc000",
    d: "M262.8 186.5h-12.5c-3.3 0-5.9-2.6-5.9-5.9V170c0-3.3 2.6-5.9 5.9-5.9h12.5c3.3 0 5.9 2.6 5.9 5.9v10.6c-.1 3.3-2.7 5.9-5.9 5.9z"
  }));
}, _8 = function(i) {
  var u = i.title, h = d(i, iv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 108 72"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h108v72H0z",
    fill: "#003787"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h108L60 48v24H48V48z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 54,
    cy: 30,
    r: 8,
    fill: "#f9d90f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M44 30h20L54 48z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M54 48 38 33h32z",
    fill: "#cf142b"
  }));
}, R8 = function(i) {
  var u = i.title, h = d(i, uv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#f9423a",
    d: "M0 0h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00843d",
    d: "M0 171h513v171H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h171v342H0z"
  }));
}, U8 = function(i) {
  var u = i.title, h = d(i, rv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#1E509C",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M513 176.1V81.3L0 342l513-165.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F18D36",
    d: "M513 0v81.3L0 342 513 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m126.7 99.3-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z"
  }));
}, j8 = function(i) {
  var u = i.title, h = d(i, hv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M384.6 342 256.5 167.3 283.4 342zM133.8 0l122.7 167.3L230.8 0zm95.8 342 26.9-174.7L128.4 342zM0 0v127.8l256.5 39.5L28.4 0zm0 342h18.2l238.3-174.7L0 206.7zm256.5-174.7L513 127.8V0h-28.4zM282.2 0l-25.7 167.3L379.2 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M513 342V206.7l-256.5-39.4L494.8 342z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 256.5,
    cy: 171,
    r: 59.5
  })), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 256.5,
    cy: 171,
    r: 44.5
  }));
}, G8 = function(i) {
  var u = i.title, h = d(i, fv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#14b53a",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#fcd116",
    d: "M171 0h171v342H171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ce1126",
    d: "M342 0h171v342H342z"
  }));
}, Y8 = function(i) {
  var u = i.title, h = d(i, mv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#fecb00",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#34b233",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ea2839",
    d: "M0 228h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M384.8 142.2h-98L256.5 49l-30.3 93.2h-98l79.3 57.6-30.3 93.2 79.3-56.9 79.3 56.9-30.3-93.2 79.3-57.6z"
  }));
}, q8 = function(i) {
  var u = i.title, h = d(i, sv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0066b2",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M342 0h171v342H342zM0 0h171v342H0z",
    fill: "#da2031"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#ffd300"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M108.3 166.3h14.8v74.2h-14.8zm-59.4 0h14.8v74.2H48.9z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 86,
    cy: 203.4,
    r: 14.8
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M71.2 225.7h29.7v14.8H71.2zm0-59.4h29.7v14.8H71.2z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 86,
    cy: 144,
    r: 14.8
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M76.3 123.9h19.5L86 108.3z"
  })));
}, Q8 = function(i) {
  var u = i.title, h = d(i, vv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#00745a",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m256 152.111 4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zm-53.888 23.572 8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zm-39.45 39.449 11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zm147.227-39.449-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zm39.449 39.449-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zm-68.023-44.522a74.138 74.138 0 0 0 8.85 15.073h118.345a74.13 74.13 0 0 0 8.85-15.073H187.977z",
    fill: "#FFF"
  }));
}, X8 = function(i) {
  var u = i.title, h = d(i, dv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 500"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0071BC",
    d: "M0 0h750v500H0V0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF",
    stroke: "#000",
    strokeWidth: 1.9
  }, /* @__PURE__ */ a.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 225,
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 375,
    cy: 245,
    r: 165,
    fill: "#0071BC"
  })), /* @__PURE__ */ a.createElement("g", {
    stroke: "#000"
  }, /* @__PURE__ */ a.createElement("path", {
    fill: "#8C8A8C",
    strokeWidth: 1.9,
    d: "M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    strokeWidth: 2,
    strokeLinejoin: "round",
    d: "m373 114 30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z"
  })));
}, Z8 = function(i) {
  var u = i.title, h = d(i, ov);
  return /* @__PURE__ */ a.createElement("svg", v({
    viewBox: "0 0 900 600",
    xmlns: "http://www.w3.org/2000/svg"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#231f1e",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00a650",
    d: "M0 0h900v300H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ef1923",
    d: "m0 0 450 300L0 600z"
  }));
}, K8 = function(i) {
  var u = i.title, h = d(i, Ev);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 100 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#006233",
    d: "M0 100h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cd2a3e",
    d: "M0 100h513v46H0zm0 296h513v46H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc400",
    d: "M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 0 0 160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffc400",
    d: "m255.999 171.994 8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z"
  }));
}, J8 = function(i) {
  var u = i.title, h = d(i, pv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#1B4991",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00A2B8",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A35023",
    d: "M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.8 115 256 170.7v-15.8L184.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z"
  }));
}, W8 = function(i) {
  var u = i.title, h = d(i, zv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#C31B28",
    d: "M256 0h256.5v342H256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    stroke: "#C31B28",
    strokeWidth: 2,
    d: "M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z"
  }));
}, k8 = function(i) {
  var u = i.title, h = d(i, gv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#f7ce00",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e32737",
    d: "M0 85.331h512v85.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#191f6a",
    d: "M0 170.657h512v85.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00a04e",
    d: "M0 341.331h512v85.337H0z"
  }));
}, $8 = function(i) {
  var u = i.title, h = d(i, Mv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#d01920",
    d: "M0 85.331h512v341.333H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#017c3b",
    d: "M144.696 174.375h222.609v163.25H144.696z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z"
  }));
}, I8 = function(i) {
  var u = i.title, h = d(i, xv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#272727",
    d: "M0 0h512v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e40112",
    d: "M0 114h512v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#07893f",
    d: "M0 228h512v114H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#e40112",
    cx: 256,
    cy: 125,
    r: 95
  }));
}, P8 = function(i) {
  var u = i.title, h = d(i, wv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#dc2339",
    d: "M342 0H0v341.3h513V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#11865d",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M171 0h171v342H171z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#8C9157",
    d: "M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#C59262",
    cx: 256.5,
    cy: 159.1,
    rx: 24.3,
    ry: 36.4
  }));
}, eu = function(i) {
  var u = i.title, h = d(i, yv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0zm0 48.9h513V171H0zm0 48.8h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0z",
    fill: "#c00"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#006",
    d: "M0 0h256.5v195.4H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z",
    fill: "#fc0"
  }));
}, tu = function(i) {
  var u = i.title, h = d(i, Hv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f4d900",
    d: "M0 323.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#006d66",
    d: "M0 85.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 204.333h513v104H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cb0f31",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#f4d900",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, lu = function(i) {
  var u = i.title, h = d(i, Fv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m187.737 189.212-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z"
  }));
}, au = function(i) {
  var u = i.title, h = d(i, Sv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 426.7"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#009543",
    d: "M0 293h640v133.7H0V293z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ED4135",
    d: "M0 132h640v161.3H0V132z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0035AD",
    d: "M0 0h640v133.3H0V0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FAE600",
    stroke: "#000",
    strokeWidth: 5.3,
    cx: 240,
    cy: 213.3,
    r: 157.3
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m307.9 354.5-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m212.727 102.375 42.955-21.418 5.577 11.187-42.955 21.417z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    cx: 237.8,
    cy: 280.5,
    rx: 16.8,
    ry: 26.5
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 237.4,
    cy: 143.4,
    r: 20.9
  }), /* @__PURE__ */ a.createElement("ellipse", {
    cx: 238.4,
    cy: 211.1,
    rx: 19.9,
    ry: 12.1
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M213.8 177h47v10h-47zm0 57h47v10h-47z"
  }));
}, nu = function(i) {
  var u = i.title, h = d(i, Dv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e05206",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0db02b",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#e05206",
    cx: 256,
    cy: 256,
    r: 32
  }));
}, cu = function(i) {
  var u = i.title, h = d(i, bv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342zm-38 226.495-48-152.001-48 152.001h36v39.999h24v-39.999z",
    fill: "#007b23"
  }));
}, iu = function(i) {
  var u = i.title, h = d(i, Av);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.5h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.5h171v342H0zm342 0h171v342H342z",
    fill: "#007b23"
  }));
}, uu = function(i) {
  var u = i.title, h = d(i, Bv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#338AF3"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M276.563 261.936 256 256l-20.563 5.936-6.855 11.873h54.836z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "m256 226.32-13.709 23.744L256 256l13.709-5.936z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M235.437 261.936h41.126l-6.854-11.872h-27.418z"
  }));
}, ru = function(i) {
  var u = i.title, h = d(i, Tv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 114h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#cd1f2a",
    d: "M0 0h513v114H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1d4185",
    d: "M0 228h513v114H0z"
  }));
}, hu = function(i) {
  var u = i.title, h = d(i, Lv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, fu = function(i) {
  var u = i.title, h = d(i, Cv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M244.769 249.888 10.199 103.71v312.754h234.57L61.193 249.888z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m98.003 324.433-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zm-9.735-132.771-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165"
  })));
}, mu = function(i) {
  var u = i.title, h = d(i, Ov);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 239.994h512v32H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m174.802 341.329-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z"
  }));
}, su = function(i) {
  var u = i.title, h = d(i, Vv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80z"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.329v15.083l57.377 38.251H80z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 85.329v15.083l-57.377 38.251H176z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 255.997v-15.082l57.377-38.252H80z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 233.376v-30.713h46.069zm96 22.618v-48.912l-73.372 48.912z",
    fill: "#2E52B2"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 255.997v-15.082l-57.377-38.252H176z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#2E52B2"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M256 233.376v-30.713h-46.069zm-96 22.618v-48.912l73.372 48.912z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 170.66,
    r: 22.627
  })), /* @__PURE__ */ a.createElement("path", {
    d: "m128 154.663 3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zm0 65.14 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm0-117.334 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm69.931 58.667 2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zm-139.862 0 2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z",
    fill: "#FFDA44"
  }));
}, vu = function(i) {
  var u = i.title, h = d(i, Nv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zm-39.194 75.072 5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zm1.481-122.846 4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zm-37.712 47.32 5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915zm-83.98 0L0 240.259v15.739l100.174-55.654z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.983 0 85.33v15.738l71.847 39.915zm83.98 0L256 101.068V85.33l-100.174 55.653z",
    fill: "#D80027"
  }));
}, du = function(i) {
  var u = i.title, h = d(i, _v);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M138 0h377v114H138z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#4A7C3A",
    d: "M138 230h377v114H138z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 10,
    strokeMiterlimit: 2
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8m17.1-30.1h37.9M70.7 35.2v30.1"
  })));
}, ou = function(i) {
  var u = i.title, h = d(i, Rv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256v170.663H0V256h256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H256V85.337h256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "m128 123.034 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m384 293.697 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
  }));
}, Eu = function(i) {
  var u = i.title, h = d(i, Uv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.331h170.663v341.337H0zm341.337 0H512v341.337H341.337z",
    fill: "#D80027"
  }));
}, pu = function(i) {
  var u = i.title, h = d(i, jv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M232.259 246.506h9.498v19h-9.498zm37.988 0h9.498v19h-9.498zm-19-14.247h9.498v33.243h-9.498z",
    fill: "#D80027"
  }));
}, zu = function(i) {
  var u = i.title, h = d(i, Gv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 85.33h512v341.332"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m204.631 326.488 2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zm-22.834-81.622 4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zm0 103.883 4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zm43.566-66.782 4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zm-87.133 0 4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 0 0-11.396-19.511l-12.593 25.186a18.47 18.47 0 0 0-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 0 0 4.197 3.148l-25.186 12.593a44.303 44.303 0 0 0 19.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 0 1 7.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 0 1 3.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0 1 13.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z"
  }));
}, gu = function(i) {
  var u = i.title, h = d(i, Yv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M512 85.337V256H256L0 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 256v170.663H0L256 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m161.908 256-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zm0 235.923 9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zm188.606-117.961-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z",
    fill: "#FFDA44"
  }));
}, Mu = function(i) {
  var u = i.title, h = d(i, qv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m393.508 170.516 17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.343h512v341.326H0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#01411c",
    d: "M128 85.331h384v341.337H128z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zm-1.329-125.904 17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z",
    fill: "#FFF"
  }));
}, xu = function(i) {
  var u = i.title, h = d(i, Qv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V256H0z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 256h512v170.663H0z"
  }));
}, wu = function(i) {
  var u = i.title, h = d(i, Xv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318A",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, yu = function(i) {
  var u = i.title, h = d(i, Zv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    d: "M400.696 219.822 384 225.387l-16.696-5.565-5.565-13.913 5.565-13.913h33.392l-5.566 13.913z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M345.043 219.822v61.217c0 29.821 38.957 38.957 38.957 38.957s38.957-9.137 38.957-38.957v-61.217h-77.914z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M348.555 295.541C358.131 313.927 384 319.996 384 319.996s25.869-6.069 35.445-24.455L384 236.518l-35.445 59.023z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M422.957 280.421 384 219.822l-38.957 60.599v.618c0 5.518 1.337 10.328 3.512 14.503L384 240.405l35.445 55.137c2.175-4.175 3.512-8.983 3.512-14.503v-.618z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, Hu = function(i) {
  var u = i.title, h = d(i, Kv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V153.6H0zm0 136.526h512v68.263H0zM0 358.4h512v68.263H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
  }));
}, Fu = function(i) {
  var u = i.title, h = d(i, Jv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#268024",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e4312b",
    d: "M256 256.006 0 426.668V85.331z"
  }));
}, Su = function(i) {
  var u = i.title, h = d(i, Wv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M196.641 85.337v341.326H0V85.337z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 196.641,
    cy: 256,
    r: 64
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"
  }));
}, Du = function(i) {
  var u = i.title, h = d(i, kv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFDA44",
    cx: 218.902,
    cy: 255.994,
    r: 74.207
  }));
}, bu = function(i) {
  var u = i.title, h = d(i, $v);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "m289.579 216.738-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 232.51 4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z"
  }));
}, Au = function(i) {
  var u = i.title, h = d(i, Iv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#751A46",
    d: "M0 0h512v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z"
  }));
}, Bu = function(i) {
  var u = i.title, h = d(i, Pv);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318A",
    d: "M0 0h171v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M342 0h171v342H342z"
  }));
}, Tu = function(i) {
  var u = i.title, h = d(i, ed);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, Lu = function(i) {
  var u = i.title, h = d(i, td);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 312.882h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zm85.526 82.148-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M241.16 233.734h-22.504a14.74 14.74 0 0 0 2.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0 0 18.149 3.544 48.079 48.079 0 0 0 18.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z"
  }));
}, Cu = function(i) {
  var u = i.title, h = d(i, ld);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.33v341.332h512V85.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.333h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 312.884h512v113.775H0z"
  }));
}, Ou = function(i) {
  var u = i.title, h = d(i, ad);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 255.994h512v81.619H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 337.614h512v89.043H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m278.261 185.209 20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z"
  }));
}, Vu = function(i) {
  var u = i.title, h = d(i, nd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#055e1c",
    d: "M0 85.333h512v341.333H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M207.093 248.57h32.601v22.261h-32.601z"
  })));
}, Nu = function(i) {
  var u = i.title, h = d(i, cd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 426.663V85.329h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m85.688 108.787 5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zm84.624 0 5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zm-84.624 82.502 5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zm84.624 0 5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z",
    fill: "#FFF"
  }));
}, _u = function(i) {
  var u = i.title, h = d(i, id);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M235.454 85.337 0 426.663 427.345 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 329.393 0 426.663h512z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337h-84.655L0 426.663l512-204.512z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337v341.326L235.454 85.337z"
  }));
}, Ru = function(i) {
  var u = i.title, h = d(i, ud);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 426.668V85.331l256 170.675z"
  }));
}, Uu = function(i) {
  var u = i.title, h = d(i, rd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
  }));
}, ju = function(i) {
  var u = i.title, h = d(i, hd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512V256H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"
  })));
}, Gu = function(i) {
  var u = i.title, h = d(i, fd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffda44",
    d: "M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#BF521B",
    d: "m369.5 204.5.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#474747",
    d: "m436.6 192.5-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z"
  }));
}, Yu = function(i) {
  var u = i.title, h = d(i, md);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 199.112h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z"
  }));
}, qu = function(i) {
  var u = i.title, h = d(i, sd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
  }));
}, Qu = function(i) {
  var u = i.title, h = d(i, vd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 196.641h512v118.717H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 315.359h512v111.304H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 0 0-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 0 0-5.682-.657 24.88 24.88 0 0 0-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z"
  }));
}, Xu = function(i) {
  var u = i.title, h = d(i, dd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 312.888h512v113.775H0z"
  }));
}, Zu = function(i) {
  var u = i.title, h = d(i, od);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.34h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M512 85.334v166.69L0 256.175V85.334z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M323.744 203.099 256 270.843l-67.744-67.744a81.156 81.156 0 0 0-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 0 0-13.881-45.483z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 0 0-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 0 0-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z"
  }));
}, Ku = function(i) {
  var u = i.title, h = d(i, Ed);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M330.207 85.331H512v341.337H330.207z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.331h181.793v341.337H0zm255.999 111.301 14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z",
    fill: "#496E2D"
  }));
}, Ju = function(i) {
  var u = i.title, h = d(i, pd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m256 157.273 22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z"
  }));
}, Wu = function(i) {
  var u = i.title, h = d(i, zd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 196.636h512v118.728H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256.742 218.003 9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"
  }));
}, ku = function(i) {
  var u = i.title, h = d(i, gd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m73.178 209.188 20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z"
  }));
}, $u = function(i) {
  var u = i.title, h = d(i, Md);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m302.049 226.318 7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zm74.203 0 7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z"
  }));
}, Iu = function(i) {
  var u = i.title, h = d(i, xd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
    fill: "#0052B4"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M228.582 261.936 256 214.447l27.418 47.489z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M291.616 277.616 256 295.425l-35.616-17.809v-23.744h71.232z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m289.579 216.485-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z"
  }));
}, Pu = function(i) {
  var u = i.title, h = d(i, wd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.331v166.69L0 256.173V85.331z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 256.006 0 426.668V85.331z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M59.621 256a59.546 59.546 0 0 0-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 118.862,
    cy: 210.287,
    r: 18.286
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#F3F3F3",
    d: "M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z"
  }));
}, e9 = function(i) {
  var u = i.title, h = d(i, yd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h900v600H0z",
    fill: "#0f0f0f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h900v400H0z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h900v200H0z",
    fill: "#047a3f"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m176.26 375 48.738-150 48.738 150-127.6-92.705h157.72M626.256 375l48.738-150 48.738 150-127.6-92.705h157.72M401.252 375l48.738-150 48.738 150-127.6-92.705h157.72",
    fill: "#ce1126"
  }));
}, t9 = function(i) {
  var u = i.title, h = d(i, Hd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#2B5DEA",
    d: "M0 0h900v600H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDF29",
    d: "M0 100h900v400H0V100z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D70000",
    d: "M0 150h900v300H0V150z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M346.3 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M477.8 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
  }));
}, l9 = function(i) {
  var u = i.title, h = d(i, Fd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 22.7v30.7h-46.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#29DBFF",
    d: "m385.4 251.7-22.9-43h45.8z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m385.4 165.8-22.9 42.9h45.8z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 474.8,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#FFBE57",
    cx: 295.3,
    cy: 236.8,
    rx: 16.8,
    ry: 43.3
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m385.4 31.5-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z"
  }), /* @__PURE__ */ a.createElement("ellipse", {
    fill: "#A5A5A5",
    cx: 386.3,
    cy: 104.3,
    rx: 34.3,
    ry: 23.3
  }));
}, a9 = function(i) {
  var u = i.title, h = d(i, Sd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#A2001D",
    d: "M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 0 0 9.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
    fill: "#D80027"
  }));
}, n9 = function(i) {
  var u = i.title, h = d(i, Dd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 85.331H512v341.337H341.337z"
  }));
}, c9 = function(i) {
  var u = i.title, h = d(i, bd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h21v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0A388A",
    d: "M0 0h22.5v15H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h11.3v7.5H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M7.1 0h3.6v7H7.1V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0A388A",
    d: "M0 0h3.6v7H0V0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M3.6 0h3.6v7H3.6V0zm10.9 6h5L19 7h-1.5v.5h1l-.5 1h-.5V10h-1V7H15l-.5-1zm4 2.5 1 1.5h-2l1-1.5zm-3 0 1 1.5h-2l1-1.5zm1.5 3L16 10h2l-1 1.5zM20 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-6 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm1 4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-2 1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
  }));
}, i9 = function(i) {
  var u = i.title, h = d(i, Ad);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zm0-136.537h512v68.263H0z",
    fill: "#496E2D"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h204.054v204.054H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m102.026 133.938 13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"
  }));
}, u9 = function(i) {
  var u = i.title, h = d(i, Bd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.334h512V426.66H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 194.056h512v123.882H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.334h512v54.522H0zm0 286.809h512v54.522H0z",
    fill: "#D80027"
  }));
}, r9 = function(i) {
  var u = i.title, h = d(i, Td);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 312.888h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zm-33.963-29.682 2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zm8.566-29.68 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm24.488-22.261 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm94.236 51.941-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zm-8.566-29.68-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zm-24.488-22.261-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z",
    fill: "#FFDA44"
  }));
}, h9 = function(i) {
  var u = i.title, h = d(i, Ld);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m210.715 174.377 3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zm-93.899 107.594 4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zm27.88-162.292 4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zm-75.157 55.652 4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zm-365.585 11.586c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z",
    fill: "#FFDA44"
  }));
}, f9 = function(i) {
  var u = i.title, h = d(i, Cd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 256 0 90.691v44.242L155.826 256 0 377.067v44.242z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 90.691v330.618L189.217 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m44.184 213.36 24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z"
  }));
}, m9 = function(i) {
  var u = i.title, h = d(i, Od);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0 1 10.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 0 1-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zm-46.571-67.95-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m330.338 146.448-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zm-.799 35.189-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zm33.484 12.013-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M83.478 85.337h89.043v341.326H83.478z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m117.458 175.191-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M128 137.276h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.105v-8.012H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m117.458 374.725-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M128 336.81h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.106v-8.011H128z",
    fill: "#FF9811"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m117.458 274.957-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zm36.513 24.434h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zm0-99.768h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z",
    fill: "#496E2D"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M120.576 248.576h14.84v14.84h-14.84z"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 206.113,
    r: 7.421
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 128,
    cy: 305.887,
    r: 7.421
  })));
}, s9 = function(i) {
  var u = i.title, h = d(i, Vd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 255.994,
    r: 96
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z"
  })));
}, v9 = function(i) {
  var u = i.title, h = d(i, Nd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z"
  }));
}, d9 = function(i) {
  var u = i.title, h = d(i, _d);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#E30A17",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z"
  }));
}, o9 = function(i) {
  var u = i.title, h = d(i, Rd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m6.066 85.337 207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M43.364 85.337 384.69 426.663h83.946L127.31 85.337z"
  }));
}, E9 = function(i) {
  var u = i.title, h = d(i, Ud);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h900v600H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00B2EE",
    d: "M0 300h450V0h450v600H0V300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m345.3 480.9 29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zm106.4-78.5 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm0-224.1 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M449.9 39.9v53.9h-81z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zm437.1.1v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m719.9 131.6 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm30 242.9 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zm0 132 29.4 90.6-77.1-56h95.3l-77.1 56L488 464z"
  }));
}, p9 = function(i) {
  var u = i.title, h = d(i, jd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.337h256V256H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M186.435 170.669 162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#0052B4",
    cx: 128,
    cy: 170.674,
    r: 29.006
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z"
  }));
}, z9 = function(i) {
  var u = i.title, h = d(i, Gd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 426.663V85.337h512"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
  }));
}, g9 = function(i) {
  var u = i.title, h = d(i, Yd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512V256H0z"
  }));
}, M9 = function(i) {
  var u = i.title, h = d(i, qd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#232323",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 56.9h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D32300",
    d: "M0 113.8h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 227.6h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D32300",
    d: "M0 284.4h512v56.9H0z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 256,
    cy: 170.7,
    r: 80.7
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z"
  }));
}, x9 = function(i) {
  var u = i.title, h = d(i, Qd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, w9 = function(i) {
  var u = i.title, h = d(i, Xd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M0 0h256.5v184.1H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
    fill: "#FFF"
  }));
}, y9 = function(i) {
  var u = i.title, h = d(i, Zd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 38h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z",
    fill: "#0038a8"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h256.5v190H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FED443",
    d: "m128.3 138.7-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z"
  }));
}, H9 = function(i) {
  var u = i.title, h = d(i, Kd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M0 322.783h512v103.88H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 210.877h512v89.656H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.337h512v104.515H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 0 0-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177 2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0 2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0 2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z",
    fill: "#FFF"
  }));
}, F9 = function(i) {
  var u = i.title, h = d(i, Jd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.331h256v341.337H256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ACABB1",
    d: "m321.353 233.837 32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 1 1 8.95 11.84 7.421 7.421 0 0 1-8.95-11.84z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m376.367 247.24 17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 1 1-11.84-8.95 7.42 7.42 0 0 1 11.84 8.95z"
  }));
}, S9 = function(i) {
  var u = i.title, h = d(i, Wd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#338AF3",
    d: "M0 85.331h170.663v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zm83.478 0-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z",
    fill: "#6DA544"
  }));
}, D9 = function(i) {
  var u = i.title, h = d(i, kd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFCE00",
    d: "M0 0h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#203899",
    d: "M0 5h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D82B2B",
    d: "M0 10h22.5v5H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m12.13 5.38.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zm-1.77 0 .27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zm3.44.56-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zm-5.11.02.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zm6.55 1.17-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zm.19 1.12.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zm.31-1.15.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z"
  }));
}, b9 = function(i) {
  var u = i.title, h = d(i, $d);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.334h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#D80027"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#2E52B2",
    d: "M256 107.951v30.712h-46.069z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m384 259.706-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M332.058 178.084v81.624c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M372.87 215.181h22.261v59.359H372.87z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#A2001D",
    cx: 384,
    cy: 215.181,
    r: 11.13
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M346.902 192.92h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84zm59.359-66.783h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84z",
    fill: "#FFDA44"
  }));
}, A9 = function(i) {
  var u = i.title, h = d(i, Id);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h512v341.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m397.7 166.3-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m404.9 188-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m379 181.3-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#409347",
    d: "M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFD836",
    stroke: "#231F20",
    strokeMiterlimit: 10
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m466.1 48.4-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z"
  })), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    d: "M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zm71.6 0V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M201.3 111.8h119.4v37.9H201.3z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#1583C4",
    d: "m60.1 210.5-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zm391.4-58.6h18.9v81.7h-18.9z"
  }));
}, B9 = function(i) {
  var u = i.title, h = d(i, Pd);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M196.641 85.337H0v341.326h512V85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m256 157.279 22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z"
  }));
}, T9 = function(i) {
  var u = i.title, h = d(i, eo);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#6DA544",
    d: "M512 256v170.663H0L215.185 256z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M512 85.337V256H215.185L0 85.337z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M221.001 239.304 26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z"
  }), /* @__PURE__ */ a.createElement("g", {
    fill: "#FFDA44"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 0 0 4.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z"
  })));
}, L9 = function(i) {
  var u = i.title, h = d(i, to);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 100"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80B30",
    d: "M0 0h150v100H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#00318A",
    d: "M0 0h20v44.33H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M20 0h20v44.33H20z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "none",
    stroke: "#FFF",
    strokeWidth: 3,
    d: "M0 44.33h62.75V0"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M108.08 43.29 87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71 20.13-20.13v40.25L114.79 50z"
  }));
}, C9 = function(i) {
  var u = i.title, h = d(i, lo);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 85.331h256v170.663H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m165.483 181.79 2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zm-44.904-66.783 4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zm44.522 14.841 4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zm-35.192 59.363 4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zm-39.01-37.103 4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z",
    fill: "#FFF"
  }));
}, O9 = function(i) {
  var u = i.title, h = d(i, ao);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h513v342H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h513v48.8H0zm0 97.5h513v48.8H0zM0 195h513v48.8H0zm0 97.6h513v48.8H0z",
    fill: "#6DA544"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 0h256.5v146.3H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "m116.9 114.4-7.5-14.8V69.9L128 59l18.6 10.9v22.3l7.4-7.4 4.2 3-4.2 11.8-14.9 14.8z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 82,
    cy: 82.8,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 90.8,
    cy: 61.7,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 106.6,
    cy: 46.2,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 128,
    cy: 40.8,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 149.4,
    cy: 46.2,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 165.2,
    cy: 61.7,
    r: 5.4
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FFF",
    cx: 174,
    cy: 82.8,
    r: 5.4
  }));
}, V9 = function(i) {
  var u = i.title, h = d(i, no);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    fill: "#e30a17"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 0h900v600H0z",
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 300,
    cy: 300,
    r: 150
  }), /* @__PURE__ */ a.createElement("circle", {
    cx: 337.5,
    cy: 300,
    r: 120,
    fill: "#fff"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 60h900v60H0zm0 420h900v60H0zm417.5-180 135.676-44.084-83.852 115.413V228.671l83.852 115.413z"
  }));
}, N9 = function(i) {
  var u = i.title, h = d(i, co);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#0052B4",
    d: "M0 0h512v341.34H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "m220.72 42.63 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zm70.56-.06 7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zm62.08 11.36 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zm63.01 18.3 7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zm-257.73-18.3 7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zm-63.01 18.3 7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z",
    fill: "#FFF"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m217.53 259.33-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z"
  }));
}, _9 = function(i) {
  var u = i.title, h = d(i, io);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 450 300"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h450v300H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "red",
    d: "M0 100h450v200H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDF00",
    d: "M0 200h450v100H0z"
  }));
}, R9 = function(i) {
  var u = i.title, h = d(i, uo);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M0 85.337h512v113.775H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 312.888h512v113.775H0z"
  }));
}, U9 = function(i) {
  var u = i.title, h = d(i, ro);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 0h90v60H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    stroke: "#7f7f7f",
    strokeWidth: 0.25,
    fill: "#ABABAB",
    d: "M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zm-64.9 4c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#DE393A",
    d: "M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#3951A3",
    d: "M31 13.1h28v15.7H31z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z"
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FEE05F",
    cx: 39.1,
    cy: 36.5,
    r: 3
  }), /* @__PURE__ */ a.createElement("circle", {
    fill: "#FEE05F",
    cx: 50.9,
    cy: 36.5,
    r: 3
  }));
}, j9 = function(i) {
  var u = i.title, h = d(i, ho);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M0 85.337h512v341.326H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M114.024 256.001 0 141.926v228.17z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#ffb915",
    d: "M161.192 256 0 94.7v47.226l114.024 114.075L0 370.096v47.138z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#007847",
    d: "M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#000c8a",
    d: "M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#e1392d",
    d: "M503.181 189.217H512V85.337H132.552l103.881 103.88z"
  }));
}, G9 = function(i) {
  var u = i.title, h = d(i, fo);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    fill: "#496E2D",
    d: "M0 85.331h512v341.337H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "M341.337 255.994h56.888v170.663h-56.888z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FF9811",
    d: "M455.112 255.994H512v170.663h-56.888z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M398.225 255.994h56.888v170.663h-56.888z"
  }));
}, Y9 = function(i) {
  var u = i.title, h = d(i, mo);
  return /* @__PURE__ */ a.createElement("svg", v({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333"
  }, h), u && /* @__PURE__ */ a.createElement("title", null, u), /* @__PURE__ */ a.createElement("path", {
    d: "M0 85.333h512V426.67H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 134.196h512v48.868H0zm0 195.472h512v48.868H0z",
    fill: "#FFDA44"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#057f44",
    d: "M0 85.333h512v48.868H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M0 183.069h512v48.868H0zm0 97.737h512v48.868H0z",
    fill: "#D80027"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#057f44",
    d: "M0 378.542h512v48.128H0z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFF",
    d: "M276.992 255.996 106.329 426.659H0V85.333h106.329z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M256 255.996 85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#D80027",
    d: "m102.465 202.57 13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z"
  }), /* @__PURE__ */ a.createElement("path", {
    fill: "#FFDA44",
    d: "m138.94 259.335-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 0 0 1.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z"
  }));
};
const vo = {
  AC: Ji,
  AD: Wi,
  AE: ki,
  AF: $i,
  AG: Ii,
  AI: Pi,
  AL: e6,
  AM: t6,
  AO: l6,
  AQ: a6,
  AR: n6,
  AS: c6,
  AT: i6,
  AU: u6,
  AW: r6,
  AX: h6,
  AZ: f6,
  BA: m6,
  BB: s6,
  BD: v6,
  BE: d6,
  BF: o6,
  BG: E6,
  BH: p6,
  BI: z6,
  BJ: g6,
  BL: M6,
  BM: x6,
  BN: w6,
  BO: y6,
  BQ_BO: H6,
  BQ_SA: F6,
  BQ_SE: S6,
  BQ: D6,
  BR: b6,
  BS: A6,
  BT: B6,
  BV: T6,
  BW: L6,
  BY: C6,
  BZ: O6,
  CA: V6,
  CC: N6,
  CD: _6,
  CF: R6,
  CG: U6,
  CH: j6,
  CI: G6,
  CK: Y6,
  CL: q6,
  CM: Q6,
  CN: X6,
  CO: Z6,
  CR: K6,
  CU: J6,
  CV: W6,
  CW: k6,
  CX: $6,
  CY: I6,
  CZ: P6,
  DE: e7,
  DJ: t7,
  DK: l7,
  DM: a7,
  DO: n7,
  DZ: c7,
  EC: i7,
  EE: u7,
  EG: r7,
  EH: h7,
  ER: f7,
  ES_CT: m7,
  ES: s7,
  ET: v7,
  EU: d7,
  FI: o7,
  FJ: E7,
  FK: p7,
  FM: z7,
  FO: g7,
  FR: M7,
  GA: x7,
  GB_ENG: w7,
  GB_NIR: y7,
  GB_SCT: H7,
  GB_WLS: F7,
  GB: S7,
  GD: D7,
  GE: b7,
  GF: A7,
  GG: B7,
  GH: T7,
  GI: L7,
  GL: C7,
  GM: O7,
  GN: V7,
  GP: N7,
  GQ: _7,
  GR: R7,
  GS: U7,
  GT: j7,
  GU: G7,
  GW: Y7,
  GY: q7,
  HK: Q7,
  HM: X7,
  HN: Z7,
  HR: K7,
  HT: J7,
  HU: W7,
  IC: k7,
  ID: $7,
  IE: I7,
  IL: P7,
  IM: e8,
  IN: t8,
  IO: l8,
  IQ: a8,
  IR: n8,
  IS: c8,
  IT: i8,
  JE: u8,
  JM: r8,
  JO: h8,
  JP: f8,
  KE: m8,
  KG: s8,
  KH: v8,
  KI: d8,
  KM: o8,
  KN: E8,
  KP: p8,
  KR: z8,
  KW: g8,
  KY: M8,
  KZ: x8,
  LA: w8,
  LB: y8,
  LC: H8,
  LI: F8,
  LK: S8,
  LR: D8,
  LS: b8,
  LT: A8,
  LU: B8,
  LV: T8,
  LY: L8,
  MA: C8,
  MC: O8,
  MD: V8,
  ME: N8,
  MF: _8,
  MG: R8,
  MH: U8,
  MK: j8,
  ML: G8,
  MM: Y8,
  MN: q8,
  MO: Q8,
  MP: X8,
  MQ: Z8,
  MR: K8,
  MS: J8,
  MT: W8,
  MU: k8,
  MV: $8,
  MW: I8,
  MX: P8,
  MY: eu,
  MZ: tu,
  NA: lu,
  NC: au,
  NE: nu,
  NF: cu,
  NG: iu,
  NI: uu,
  NL: ru,
  NO: hu,
  NP: fu,
  NR: mu,
  NU: su,
  NZ: vu,
  OM: du,
  PA: ou,
  PE: Eu,
  PF: pu,
  PG: zu,
  PH: gu,
  PK: Mu,
  PL: xu,
  PM: wu,
  PN: yu,
  PR: Hu,
  PS: Fu,
  PT: Su,
  PW: Du,
  PY: bu,
  QA: Au,
  RE: Bu,
  RO: Tu,
  RS: Lu,
  RU: Cu,
  RW: Ou,
  SA: Vu,
  SB: Nu,
  SC: _u,
  SD: Ru,
  SE: Uu,
  SG: ju,
  SH: Gu,
  SI: Yu,
  SJ: qu,
  SK: Qu,
  SL: Xu,
  SM: Zu,
  SN: Ku,
  SO: Ju,
  SR: Wu,
  SS: ku,
  ST: $u,
  SV: Iu,
  SX: Pu,
  SY: e9,
  SZ: t9,
  TA: l9,
  TC: a9,
  TD: n9,
  TF: c9,
  TG: i9,
  TH: u9,
  TJ: r9,
  TK: h9,
  TL: f9,
  TM: m9,
  TN: s9,
  TO: v9,
  TR: d9,
  TT: o9,
  TV: E9,
  TW: p9,
  TZ: z9,
  UA: g9,
  UG: M9,
  UM: x9,
  US: w9,
  UY: y9,
  UZ: H9,
  VA: F9,
  VC: S9,
  VE: D9,
  VG: b9,
  VI: A9,
  VN: B9,
  VU: T9,
  WF: L9,
  WS: C9,
  XA: O9,
  XC: V9,
  XK: N9,
  XO: _9,
  YE: R9,
  YT: U9,
  ZA: j9,
  ZM: G9,
  ZW: Y9
}, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AC: Ji,
  AD: Wi,
  AE: ki,
  AF: $i,
  AG: Ii,
  AI: Pi,
  AL: e6,
  AM: t6,
  AO: l6,
  AQ: a6,
  AR: n6,
  AS: c6,
  AT: i6,
  AU: u6,
  AW: r6,
  AX: h6,
  AZ: f6,
  BA: m6,
  BB: s6,
  BD: v6,
  BE: d6,
  BF: o6,
  BG: E6,
  BH: p6,
  BI: z6,
  BJ: g6,
  BL: M6,
  BM: x6,
  BN: w6,
  BO: y6,
  BQ: D6,
  BQ_BO: H6,
  BQ_SA: F6,
  BQ_SE: S6,
  BR: b6,
  BS: A6,
  BT: B6,
  BV: T6,
  BW: L6,
  BY: C6,
  BZ: O6,
  CA: V6,
  CC: N6,
  CD: _6,
  CF: R6,
  CG: U6,
  CH: j6,
  CI: G6,
  CK: Y6,
  CL: q6,
  CM: Q6,
  CN: X6,
  CO: Z6,
  CR: K6,
  CU: J6,
  CV: W6,
  CW: k6,
  CX: $6,
  CY: I6,
  CZ: P6,
  DE: e7,
  DJ: t7,
  DK: l7,
  DM: a7,
  DO: n7,
  DZ: c7,
  EC: i7,
  EE: u7,
  EG: r7,
  EH: h7,
  ER: f7,
  ES: s7,
  ES_CT: m7,
  ET: v7,
  EU: d7,
  FI: o7,
  FJ: E7,
  FK: p7,
  FM: z7,
  FO: g7,
  FR: M7,
  GA: x7,
  GB: S7,
  GB_ENG: w7,
  GB_NIR: y7,
  GB_SCT: H7,
  GB_WLS: F7,
  GD: D7,
  GE: b7,
  GF: A7,
  GG: B7,
  GH: T7,
  GI: L7,
  GL: C7,
  GM: O7,
  GN: V7,
  GP: N7,
  GQ: _7,
  GR: R7,
  GS: U7,
  GT: j7,
  GU: G7,
  GW: Y7,
  GY: q7,
  HK: Q7,
  HM: X7,
  HN: Z7,
  HR: K7,
  HT: J7,
  HU: W7,
  IC: k7,
  ID: $7,
  IE: I7,
  IL: P7,
  IM: e8,
  IN: t8,
  IO: l8,
  IQ: a8,
  IR: n8,
  IS: c8,
  IT: i8,
  JE: u8,
  JM: r8,
  JO: h8,
  JP: f8,
  KE: m8,
  KG: s8,
  KH: v8,
  KI: d8,
  KM: o8,
  KN: E8,
  KP: p8,
  KR: z8,
  KW: g8,
  KY: M8,
  KZ: x8,
  LA: w8,
  LB: y8,
  LC: H8,
  LI: F8,
  LK: S8,
  LR: D8,
  LS: b8,
  LT: A8,
  LU: B8,
  LV: T8,
  LY: L8,
  MA: C8,
  MC: O8,
  MD: V8,
  ME: N8,
  MF: _8,
  MG: R8,
  MH: U8,
  MK: j8,
  ML: G8,
  MM: Y8,
  MN: q8,
  MO: Q8,
  MP: X8,
  MQ: Z8,
  MR: K8,
  MS: J8,
  MT: W8,
  MU: k8,
  MV: $8,
  MW: I8,
  MX: P8,
  MY: eu,
  MZ: tu,
  NA: lu,
  NC: au,
  NE: nu,
  NF: cu,
  NG: iu,
  NI: uu,
  NL: ru,
  NO: hu,
  NP: fu,
  NR: mu,
  NU: su,
  NZ: vu,
  OM: du,
  PA: ou,
  PE: Eu,
  PF: pu,
  PG: zu,
  PH: gu,
  PK: Mu,
  PL: xu,
  PM: wu,
  PN: yu,
  PR: Hu,
  PS: Fu,
  PT: Su,
  PW: Du,
  PY: bu,
  QA: Au,
  RE: Bu,
  RO: Tu,
  RS: Lu,
  RU: Cu,
  RW: Ou,
  SA: Vu,
  SB: Nu,
  SC: _u,
  SD: Ru,
  SE: Uu,
  SG: ju,
  SH: Gu,
  SI: Yu,
  SJ: qu,
  SK: Qu,
  SL: Xu,
  SM: Zu,
  SN: Ku,
  SO: Ju,
  SR: Wu,
  SS: ku,
  ST: $u,
  SV: Iu,
  SX: Pu,
  SY: e9,
  SZ: t9,
  TA: l9,
  TC: a9,
  TD: n9,
  TF: c9,
  TG: i9,
  TH: u9,
  TJ: r9,
  TK: h9,
  TL: f9,
  TM: m9,
  TN: s9,
  TO: v9,
  TR: d9,
  TT: o9,
  TV: E9,
  TW: p9,
  TZ: z9,
  UA: g9,
  UG: M9,
  UM: x9,
  US: w9,
  UY: y9,
  UZ: H9,
  VA: F9,
  VC: S9,
  VE: D9,
  VG: b9,
  VI: A9,
  VN: B9,
  VU: T9,
  WF: L9,
  WS: C9,
  XA: O9,
  XC: V9,
  XK: N9,
  XO: _9,
  YE: R9,
  YT: U9,
  ZA: j9,
  ZM: G9,
  ZW: Y9,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), ll = 30, f0 = ({ countryCode: m }) => {
  const i = m?.toUpperCase() || "", u = oo[i];
  return u ? /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "flex items-center justify-center rounded-full overflow-hidden shrink-0",
      style: {
        width: `${ll}px`,
        height: `${ll}px`,
        minWidth: `${ll}px`,
        minHeight: `${ll}px`
      },
      children: /* @__PURE__ */ y.jsx(
        u,
        {
          className: "w-full h-full",
          style: {
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            borderRadius: "50%"
          },
          title: m
        }
      )
    }
  ) : /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "flex items-center justify-center rounded-full overflow-hidden shrink-0 bg-gray-200",
      style: {
        width: `${ll}px`,
        height: `${ll}px`,
        fontSize: `${ll * 0.6}px`
      },
      title: `Bandeira não disponível: ${i}`,
      children: "🌏"
    }
  );
}, Eo = {
  BRL: "BR",
  USD: "US",
  EUR: "EU",
  GBP: "GB",
  JPY: "JP"
}, m0 = (m) => Eo[m], q9 = ({
  size: m = 20,
  color: i = "#525252",
  onClick: u,
  className: h = ""
}) => {
  const p = /* @__PURE__ */ y.jsx(
    "svg",
    {
      width: m,
      height: m,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "shrink-0",
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M5 7.5L10 12.5L15 7.5",
          stroke: i,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
  return u ? /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      onClick: u,
      className: `chevron-button inline-flex items-center justify-center p-0 m-0 border-0 bg-transparent cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-0 active:bg-transparent ${h}`,
      style: {
        width: m,
        height: m,
        minWidth: m,
        minHeight: m,
        backgroundColor: "transparent",
        background: "transparent",
        border: "none",
        outline: "none",
        boxShadow: "none"
      },
      "aria-label": "Abrir dropdown",
      children: p
    }
  ) : /* @__PURE__ */ y.jsx("span", { className: h, children: p });
}, po = a.forwardRef(
  (m, i) => /* @__PURE__ */ y.jsxs(
    "svg",
    {
      ...m,
      ref: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "swap-icon-mobile",
      style: {
        display: "block",
        width: "24px",
        height: "24px"
      },
      children: [
        /* @__PURE__ */ y.jsx(
          "path",
          {
            d: "M7 16L3 12L7 8",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ y.jsx(
          "path",
          {
            d: "M17 8L21 12L17 16",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ y.jsx(
          "line",
          {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  )
);
po.displayName = "SwapIconMobile";
const X2 = ({
  currency: m,
  currencies: i,
  onCurrencyChange: u
}) => {
  const [h, p] = Be.useState(!1), [N, Y] = Be.useState({ top: 0, left: 0 }), [X, O] = Be.useState(null), H = Be.useRef(null), _ = Be.useRef(null), Z = Be.useRef(null), q = Be.useRef(null), Ze = Be.useRef(null), se = Be.useRef(/* @__PURE__ */ new Map()), Se = [...i].sort(
    (j, Me) => j.code.localeCompare(Me.code)
  ), De = (j) => {
    u(j), p(!1);
  };
  Be.useEffect(() => {
    if (h && H.current) {
      const j = H.current.getBoundingClientRect(), xe = X || 100, Re = j.right - xe;
      Y({
        top: j.bottom + 12,
        // 12px de margem abaixo da borda
        left: Re
      });
    }
  }, [h, X]), Be.useEffect(() => {
    const j = (Me) => {
      h && H.current && !H.current.contains(Me.target) && _.current && !_.current.contains(Me.target) && p(!1);
    };
    if (h)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [h]), Be.useEffect(() => {
    if (h && Z.current && H.current && _.current) {
      const j = Z.current.scrollWidth, Me = Math.max(j + 2, 100);
      O(Me);
      const xe = H.current.getBoundingClientRect();
      if (xe) {
        const Re = xe.right - Me;
        Y({
          top: xe.bottom + 12,
          left: Re
        });
      }
    }
  }, [h, Se]), Be.useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "InputcurrencyDropdown.tsx:scroll-effect", message: "Scroll effect - ENTRY", data: { isOpen: h, hasDropdownRef: !!_.current, currencyCode: m.code, refsSize: se.current.size }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H2" }) }).catch(() => {
    }), h && _.current && (_.current.style.opacity = "0", _.current.style.transform = "translateY(-8px) scale(0.98)", requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (_.current) {
          _.current.style.opacity = "1", _.current.style.transform = "translateY(0) scale(1)";
          const j = se.current.get(m.code);
          fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "InputcurrencyDropdown.tsx:scroll-effect", message: "Scroll attempt", data: { hasSelectedItemRef: !!j, hasListboxInnerRef: !!Z.current, currencyCode: m.code, scrollHeight: Z.current?.scrollHeight, clientHeight: Z.current?.clientHeight }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H2" }) }).catch(() => {
          }), j && Z.current && (fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "InputcurrencyDropdown.tsx:scroll-effect", message: "Calling scrollIntoView", data: { currencyCode: m.code }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H2" }) }).catch(() => {
          }), j.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          }));
        }
      });
    }));
  }, [h, m.code]);
  const le = h ? /* @__PURE__ */ y.jsx(
    "div",
    {
      ref: _,
      role: "listbox",
      "aria-label": "Selecionar moeda",
      className: "fixed bg-white border border-gray-200 rounded-lg shadow-lg",
      style: {
        top: `${N.top}px`,
        left: `${N.left}px`,
        width: X ? `${X}px` : "auto",
        minWidth: "100px",
        maxHeight: "400px",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: 9999,
        opacity: 0,
        transform: "translateY(-8px) scale(0.98)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
        scrollbarWidth: "thin",
        scrollbarColor: "#cbd5e0 #f7fafc"
      },
      children: /* @__PURE__ */ y.jsx("div", { ref: Z, className: "py-1", children: Se.map((j) => /* @__PURE__ */ y.jsxs(
        "button",
        {
          ref: (Me) => {
            Me ? (se.current.set(j.code, Me), j.code === m.code && fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "InputcurrencyDropdown.tsx:ref-callback", message: "Selected item ref set", data: { currencyCode: j.code, isSelected: j.code === m.code }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H2" }) }).catch(() => {
            })) : se.current.delete(j.code);
          },
          type: "button",
          role: "option",
          "aria-selected": j.code === m.code,
          onClick: (Me) => {
            Me.stopPropagation(), De(j);
          },
          className: `w-full py-2 bg-white hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors ${j.code === m.code ? "font-semibold" : ""}`,
          style: {
            minHeight: "40px",
            backgroundColor: "white",
            paddingLeft: "12px",
            paddingRight: "12px"
          },
          children: [
            /* @__PURE__ */ y.jsx("div", { className: "w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ y.jsx(
              f0,
              {
                countryCode: m0(j.code)
              }
            ) }),
            /* @__PURE__ */ y.jsx("span", { className: "font-inter text-sm text-center", children: j.code })
          ]
        },
        j.code
      )) })
    }
  ) : null;
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: H,
        role: "combobox",
        "aria-expanded": h,
        "aria-haspopup": "listbox",
        "aria-label": "Selecionar moeda",
        className: "relative w-auto min-w-[90px] sm:min-w-[100px] h-5 flex items-center justify-end gap-1 shrink-0 cursor-pointer",
        style: { overflow: "visible" },
        onClick: (j) => {
          j.stopPropagation(), p(!h);
        },
        children: [
          /* @__PURE__ */ y.jsx(
            "div",
            {
              ref: q,
              className: "w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center",
              children: /* @__PURE__ */ y.jsx(
                f0,
                {
                  countryCode: m0(m.code)
                }
              )
            }
          ),
          /* @__PURE__ */ y.jsx(
            "span",
            {
              ref: Ze,
              className: "font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 whitespace-nowrap",
              style: { minWidth: "fit-content" },
              children: m.code
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              type: "button",
              onClick: (j) => {
                j.stopPropagation(), p(!h);
              },
              className: "cursor-pointer bg-transparent border-0 p-0 m-0 outline-none",
              "aria-label": "Abrir menu de seleção de moeda",
              "aria-expanded": h,
              children: /* @__PURE__ */ y.jsx(
                q9,
                {
                  color: "#525252"
                }
              )
            }
          )
        ]
      }
    ),
    typeof document < "u" && Ef.createPortal(le, document.body)
  ] });
}, zo = (m) => {
  const [i, u] = Be.useState(() => m || (typeof window < "u" && window.innerWidth < 768 ? "mobile" : "web")), [h, p] = Be.useState(() => typeof window < "u" ? window.innerWidth : 1024);
  return Be.useEffect(() => {
    const N = () => {
      const Y = window.innerWidth;
      if (p(Y), !m) {
        const X = Y < 768 ? "mobile" : "web";
        u(X);
      }
    };
    return N(), window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, [m]), {
    device: i,
    isMobile: i === "mobile",
    isWeb: i === "web",
    width: h,
    setDevice: u
  };
}, go = () => {
  const [m, i] = Be.useState(!1);
  return { isLoading: m, setIsLoading: i };
}, Mo = {
  JPY: 0,
  KRW: 0,
  VND: 0,
  HUF: 0,
  CLP: 0,
  ISK: 0,
  TWD: 0,
  KWD: 3,
  BHD: 3,
  JOD: 3,
  OMR: 3,
  TND: 3,
  LYD: 3
}, al = (m) => Mo[m] ?? 2, Q9 = (m, i) => {
  const u = m.lastIndexOf(","), h = m.lastIndexOf(".");
  return u > h && u !== -1 ? "," : h > u && h !== -1 ? "." : i;
}, q2 = (m, i, u, h) => {
  if (m === 0)
    return i > 0 ? `0${u}${"0".repeat(i)}` : "0";
  const p = m.toFixed(i), [N, Y = ""] = p.split("."), X = N.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    h
  );
  return Y ? `${X}${u}${Y}` : X;
}, Ni = (m, i, u) => {
  let h = m.replace(/[^\d.,]/g, "");
  if (h === "") return "";
  if (i === 0) return h;
  const p = Q9(h, u), N = h.split(p), Y = N[0], X = N.slice(1).join("");
  return N.length === 1 ? Y : X === "" ? `${Y}${p}` : `${Y}${p}${X}`;
}, _i = (m, i, u) => {
  const h = m.trim();
  if (h === "" || h === u) return 0;
  if (i === 0) {
    const H = h.replace(/[^\d]/g, "");
    if (H === "") return 0;
    const _ = parseInt(H, 10);
    return Number.isNaN(_) ? 0 : _;
  }
  const p = Q9(h, u), N = p === "," ? "." : ",", X = h.replace(new RegExp(`\\${N}`, "g"), "").replace(new RegExp(`\\${p}`), "."), O = parseFloat(X);
  return Number.isNaN(O) ? 0 : O;
}, xo = () => /* @__PURE__ */ y.jsxs(
  "svg",
  {
    width: 50,
    height: 50,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ y.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#007bff" }),
      /* @__PURE__ */ y.jsx("line", { x1: "18", y1: "18", x2: "30", y2: "18", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M20 16 L18 18 L20 20",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      ),
      /* @__PURE__ */ y.jsx("line", { x1: "18", y1: "30", x2: "30", y2: "30", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M28 28 L30 30 L28 32",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      )
    ]
  }
), wo = () => /* @__PURE__ */ y.jsxs(
  "svg",
  {
    width: 50,
    height: 50,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { transform: "none" },
    children: [
      /* @__PURE__ */ y.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#007bff" }),
      /* @__PURE__ */ y.jsx("line", { x1: "18", y1: "18", x2: "30", y2: "18", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M20 16 L18 18 L20 20",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      ),
      /* @__PURE__ */ y.jsx("line", { x1: "18", y1: "30", x2: "30", y2: "30", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M28 28 L30 30 L28 32",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      )
    ]
  }
), yo = ({ onClick: m }) => /* @__PURE__ */ y.jsx(
  "button",
  {
    type: "button",
    onClick: m,
    title: "Trocar moedas",
    className: "inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer",
    style: {
      width: 50,
      height: 50,
      boxShadow: "none",
      background: "transparent",
      border: "none",
      padding: 0,
      margin: 0
    },
    "aria-label": "Trocar moedas",
    children: /* @__PURE__ */ y.jsx(xo, {})
  }
), Ho = ({ onClick: m }) => /* @__PURE__ */ y.jsx(
  "button",
  {
    type: "button",
    onClick: m,
    title: "Trocar moedas",
    className: "inline-flex items-center justify-center p-0 m-0 bg-transparent border-0 outline-none appearance-none cursor-pointer",
    style: {
      width: 50,
      height: 50,
      transform: "none",
      boxShadow: "none",
      background: "transparent",
      border: "none",
      padding: 0,
      margin: 0
    },
    "aria-label": "Trocar moedas",
    children: /* @__PURE__ */ y.jsx(wo, {})
  }
), T4 = ({
  fromValue: m,
  toValue: i,
  fromCurrency: u,
  toCurrency: h,
  rate: p,
  currencies: N,
  exchangeRates: Y,
  device: X = "web",
  lastUpdated: O,
  onFromValueChange: H,
  onToValueChange: _,
  onFromCurrencyChange: Z,
  onToCurrencyChange: q,
  onSwap: Ze,
  converterData: se
}) => {
  const Se = se?.currencies ?? N, De = se?.exchangeRates ?? Y, le = se?.lastUpdated ?? O, j = p ?? (De ? (De[h.code] ?? 1) / (De[u.code] ?? 1) : 1), Me = le ?? Zi(), Re = (navigator.language || "pt-BR").startsWith("pt"), ve = Re ? "," : ".", Ve = Re ? "." : ",", [ae, Qe] = a.useState(""), [at, Ht] = a.useState(""), tt = (J) => {
    const we = al(u.code), Le = Ni(
      J.target.value,
      we,
      ve
    );
    if (Qe(Le), Le.trim() === "" || Le === ve) {
      H(0);
      return;
    }
    const ct = _i(
      Le,
      we,
      ve
    );
    if (Number.isNaN(ct)) {
      H(0);
      return;
    }
    H(ct);
  }, dt = (J) => {
    if (!_) return;
    const we = al(h.code), Le = Ni(
      J.target.value,
      we,
      ve
    );
    if (Ht(Le), Le.trim() === "" || Le === ve) {
      _(0);
      return;
    }
    const ct = _i(
      Le,
      we,
      ve
    );
    if (Number.isNaN(ct)) {
      _(0);
      return;
    }
    _(ct);
  }, { isMobile: r1 } = zo(X), He = X === "mobile" ? !0 : X === "web" ? !1 : r1, { isLoading: T, setIsLoading: B } = go(), L = a.useRef(null);
  a.useEffect(() => {
    const J = "Conversor de moedas", we = (Ft) => {
      Ft && Ft.textContent !== J && Ft.innerText !== J && (Ft.textContent = J);
    }, Le = (Ft) => {
      if (!Ft) return null;
      const Wl = new MutationObserver((ul) => {
        ul.forEach((K2) => {
          (K2.type === "childList" || K2.type === "characterData") && (Ft.textContent || "") !== J && (Ft.textContent = J);
        });
      });
      return Wl.observe(Ft, {
        childList: !0,
        characterData: !0,
        subtree: !0
      }), Wl;
    };
    we(f1.current), we(m1.current);
    const ct = Le(f1.current), We = Le(m1.current), Jl = setInterval(() => {
      we(f1.current), we(m1.current);
    }, 100);
    return () => {
      ct?.disconnect(), We?.disconnect(), clearInterval(Jl);
    };
  }, [T]), a.useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:skeleton-init", message: "Skeleton initialization check", data: { hasConverterData: !!se, isLoading: T }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H1" }) }).catch(() => {
    });
  }, [se, T]), a.useLayoutEffect(() => (fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:useLayoutEffect", message: "useLayoutEffect ENTRY", data: { hasConverterData: !!se, isLoading: T, note: "Entrada do useLayoutEffect - forçando skeleton" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-FLOW" }) }).catch(() => {
  }), B(!0), fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:useLayoutEffect", message: "Skeleton - forcing loading state", data: { isLoading: !0, hasConverterData: !!se, note: "FORÇANDO isLoading=true por 2.5s" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-LOAD" }) }).catch(() => {
  }), L.current && (clearTimeout(L.current), L.current = null), L.current = window.setTimeout(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:useLayoutEffect", message: "Skeleton - delay ended, hiding skeleton", data: { delay: 2500, hasConverterData: !!se, note: "Delay de 2.5s terminou, escondendo skeleton" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-DELAY" }) }).catch(() => {
    }), B(!1), L.current = null;
  }, 2500), () => {
    L.current && (clearTimeout(L.current), L.current = null);
  }), []), a.useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render-check", message: "Render check - isLoading state", data: { isLoading: T, willShowSkeleton: T }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H1" }) }).catch(() => {
    });
  }, [T]), a.useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render-check", message: "Render check - isLoading state", data: { isLoading: T, willShowSkeleton: T }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "H1" }) }).catch(() => {
    });
  }, [T]);
  const P = a.useRef(!1), fe = a.useRef(!1), nt = a.useRef(null), z = a.useRef(null), A = a.useRef(null), C = a.useRef(null), R = ae.trim() !== "", $ = at.trim() !== "", I = m, ue = i, Ue = q2(
    m,
    al(u.code),
    ve,
    Ve
  ), Fe = q2(
    i,
    al(h.code),
    ve,
    Ve
  );
  a.useEffect(() => {
    if (!P.current)
      if (m === 0)
        Qe("");
      else {
        const J = q2(
          m,
          al(u.code),
          ve,
          Ve
        );
        Qe(J);
      }
  }, [m, u.code, ve, Ve]), a.useEffect(() => {
    if (!fe.current)
      if (i === 0)
        Ht("");
      else {
        const J = q2(
          i,
          al(h.code),
          ve,
          Ve
        );
        Ht(J);
      }
  }, [i, h.code, ve, Ve]);
  const h1 = (J, we) => J === 0 ? "" : q2(
    J,
    al(we),
    ve,
    Ve
  ), cl = (J, we, Le, ct) => {
    Qe(h1(J, Le)), Ht(h1(we, ct));
  }, il = () => {
    const J = {
      fromValue: I,
      toValue: ue,
      hasFromInput: R,
      hasToInput: $
    };
    cl(
      J.toValue,
      J.fromValue,
      h.code,
      u.code
    ), Ze(J);
  }, Zl = {
    overflow: "visible",
    wordBreak: "normal",
    textOverflow: "clip",
    whiteSpace: "normal",
    hyphens: "none",
    textWrap: "wrap",
    display: "block"
  }, Nt = {
    overflow: "visible",
    maxWidth: "none",
    width: "100%"
  }, f1 = a.useRef(null), m1 = a.useRef(null), Ee = ({ width: J = "100%", height: we = "1rem", className: Le = "", variant: ct = "rectangular" }) => {
    const We = {
      width: typeof J == "number" ? `${J}px` : J,
      height: typeof we == "number" ? `${we}px` : we,
      borderRadius: ct === "circular" ? "50%" : ct === "text" ? "4px" : "8px"
    }, Jl = {
      text: "rounded",
      circular: "rounded-full",
      rectangular: "rounded-lg"
    };
    return /* @__PURE__ */ y.jsx(
      "div",
      {
        role: "status",
        "aria-label": "Carregando...",
        className: `bg-gray-200 dark:bg-gray-700 animate-pulse ${Jl[ct]} ${Le}`,
        style: We
      }
    );
  };
  a.useEffect(() => {
    const J = document.querySelector(".infomoney-currency-converter-wrapper") || document.querySelector('[class*="currency-converter"]');
    if (J) {
      const we = window.getComputedStyle(J), Le = J.getBoundingClientRect();
      fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:container-size", message: "Container size debug", data: { isMobile: He, width: Le.width, height: Le.height, maxWidth: we.maxWidth, windowWidth: window.innerWidth, containerClasses: J.className, note: "Verificando tamanho do container" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SIZE-DEBUG" }) }).catch(() => {
      });
    }
  }, [He]);
  const _1 = He ? "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-md mx-auto p-4 sm:p-6 overflow-visible" : "flex flex-col gap-5 bg-white border-2 border-wl-neutral-200 rounded-2xl shadow-lg w-full max-w-6xl mx-auto p-4 sm:p-6 overflow-visible", Kl = {
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: "2px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    // Garantir max-width via inline style para versão web (sobrescreve qualquer CSS do WordPress)
    ...He ? {} : { maxWidth: "72rem" },
    // 72rem = 1152px = max-w-6xl
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  };
  return a.useEffect(() => {
    fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render", message: "Skeleton render decision", data: { isLoading: T, isMobile: He, hasConverterData: !!se, willShowSkeleton: T, note: "Decisão de renderização: skeleton ou conteúdo real" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-RENDER" }) }).catch(() => {
    }), T && setTimeout(() => {
      const J = document.querySelectorAll('[role="status"][aria-label="Carregando..."]');
      fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render", message: "Skeleton DOM verification", data: { skeletonElementsCount: J.length, isLoading: T, isMobile: He, note: "Verificando se elementos skeleton estão no DOM" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-DOM" }) }).catch(() => {
      });
    }, 100);
  }, [T, He, se]), a.useEffect(() => {
    if (!He) {
      const J = document.querySelector(`.${_1.split(" ")[0]}`) || document.querySelector('[class*="max-w-6xl"]');
      if (J) {
        const we = J.getBoundingClientRect(), Le = window.getComputedStyle(J);
        fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:web-render", message: "Web container render check", data: { isMobile: He, containerClassName: _1, width: we.width, height: we.height, maxWidth: Le.maxWidth, expectedMaxWidth: "72rem (1152px)", windowWidth: window.innerWidth, containerClasses: J.className, note: "Verificando renderização do container web" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "WEB-RENDER" }) }).catch(() => {
        });
      }
    }
  }, [He, _1]), /* @__PURE__ */ y.jsx("div", { className: _1, style: Kl, children: T ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    (fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render-skeleton-mobile", message: "Skeleton mobile render", data: { isLoading: T, isMobile: He, note: "Renderizando skeleton versão mobile" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-MOBILE" }) }).catch(() => {
    }), null),
    He ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx("div", { className: "w-full px-3 sm:px-4", children: /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "60%", height: "28px" }) }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-2 w-full", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md", style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "45%", height: "20px" }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
            /* @__PURE__ */ y.jsx(Ee, { variant: "circular", width: 24, height: 24 }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "35px", height: "18px" }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "10px", height: "10px" })
          ] })
        ] }),
        /* @__PURE__ */ y.jsx(Ee, { variant: "rectangular", width: 48, height: 48, className: "rounded-full" }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md", style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "45%", height: "20px" }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
            /* @__PURE__ */ y.jsx(Ee, { variant: "circular", width: 24, height: 24 }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "35px", height: "18px" }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "10px", height: "10px" })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-1 w-full mt-2", children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "75%", height: "16px" }),
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "65%", height: "14px" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      (fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "CurrencyConverter.tsx:render-skeleton-web", message: "Skeleton web render", data: { isLoading: T, isMobile: He, note: "Renderizando skeleton versão web" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "SKELETON-WEB" }) }).catch(() => {
      }), null),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "w-full px-3 sm:px-4",
          style: { ...Nt, textAlign: "justify" },
          children: /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "40%", height: "28px" })
        }
      ),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden", style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "55%", height: "20px" }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1 ml-auto shrink-0", children: [
            /* @__PURE__ */ y.jsx(Ee, { variant: "circular", width: 24, height: 24 }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "35px", height: "18px" }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "10px", height: "10px" })
          ] })
        ] }),
        /* @__PURE__ */ y.jsx("div", { className: "flex justify-center sm:justify-start", children: /* @__PURE__ */ y.jsx(Ee, { variant: "rectangular", width: 48, height: 48, className: "rounded-full" }) }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden", style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "55%", height: "20px" }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1 ml-auto shrink-0", children: [
            /* @__PURE__ */ y.jsx(Ee, { variant: "circular", width: 24, height: 24 }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "35px", height: "18px" }),
            /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "10px", height: "10px" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-2 w-full", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2", children: [
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "130px", height: "44px", className: "sm:h-12 lg:h-16" }),
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "24px", height: "36px", className: "sm:h-8" }),
          /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "130px", height: "44px", className: "sm:h-12 lg:h-16" })
        ] }),
        /* @__PURE__ */ y.jsx("div", { className: "flex flex-col gap-1 w-full", children: /* @__PURE__ */ y.jsx(Ee, { variant: "text", width: "65%", height: "16px" }) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: He ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      "div",
      {
        className: "w-full px-3 sm:px-4",
        style: { ...Nt, textAlign: "justify" },
        children: /* @__PURE__ */ y.jsx(
          "h2",
          {
            ref: f1,
            className: "font-inter font-medium text-xl leading-7 tracking-tight-xs text-wl-neutral-950 m-0",
            style: { ...Zl, textAlign: "justify" },
            children: "Conversor de moedas"
          }
        )
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-2 w-full", children: [
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          ref: nt,
          className: "flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden",
          style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
          children: [
            /* @__PURE__ */ y.jsx(
              "input",
              {
                type: "text",
                inputMode: "decimal",
                id: "currency-converter-from-input",
                name: "fromValue",
                value: ae,
                onChange: tt,
                onFocus: () => {
                  P.current = !0;
                },
                onBlur: () => {
                  P.current = !1;
                },
                placeholder: "0,00",
                className: "font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full max-w-[calc(100%-90px)] h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
              }
            ),
            /* @__PURE__ */ y.jsx(
              X2,
              {
                currency: u,
                currencies: Se,
                onCurrencyChange: Z,
                exchangeRates: De
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ y.jsx(Ho, { onClick: il }),
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          ref: z,
          className: "flex flex-row items-center gap-2 w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md relative transition-all overflow-hidden",
          style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
          children: [
            /* @__PURE__ */ y.jsx(
              "input",
              {
                type: "text",
                inputMode: "decimal",
                id: "currency-converter-to-input",
                name: "toValue",
                value: at,
                onChange: dt,
                onFocus: () => {
                  fe.current = !0;
                },
                onBlur: () => {
                  fe.current = !1;
                },
                placeholder: "0,00",
                className: "font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 w-full max-w-[calc(100%-90px)] h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
              }
            ),
            /* @__PURE__ */ y.jsx(
              X2,
              {
                currency: h,
                currencies: Se,
                onCurrencyChange: q,
                exchangeRates: De
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-1 w-full", children: [
        /* @__PURE__ */ y.jsxs("p", { className: "font-inter font-semibold text-xs leading-4 text-wl-neutral-700 text-center m-0 px-2", children: [
          u.symbol,
          " ",
          Ue,
          " = ",
          h.symbol,
          " ",
          Fe
        ] }, `summary-text-${Ue}-${Fe}`),
        /* @__PURE__ */ y.jsxs("p", { className: "font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2 whitespace-nowrap", children: [
          "1 ",
          u.code,
          " = ",
          j.toFixed(2),
          " ",
          h.code,
          " em ",
          Me
        ] })
      ] }, `summary-mobile-${m}-${i}-${u.code}-${h.code}`)
    ] })
  ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      "div",
      {
        className: "w-full px-3 sm:px-4",
        style: { ...Nt, textAlign: "justify" },
        children: /* @__PURE__ */ y.jsx(
          "h2",
          {
            ref: m1,
            className: "font-inter font-medium text-xl leading-7 tracking-tight-xs text-wl-neutral-950 m-0",
            style: { ...Zl, textAlign: "justify" },
            children: "Conversor de moedas"
          }
        )
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full", children: [
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          ref: A,
          className: "flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden",
          style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
          children: [
            /* @__PURE__ */ y.jsx(
              "input",
              {
                type: "text",
                inputMode: "decimal",
                id: "currency-converter-from-input-web",
                name: "fromValue",
                value: ae,
                onChange: tt,
                onFocus: () => {
                  P.current = !0;
                },
                onBlur: () => {
                  P.current = !1;
                },
                placeholder: "0,00",
                className: "font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 flex-1 h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
              }
            ),
            /* @__PURE__ */ y.jsx("div", { className: "shrink-0 ml-2", children: /* @__PURE__ */ y.jsx(
              X2,
              {
                currency: u,
                currencies: Se,
                onCurrencyChange: Z,
                exchangeRates: De
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ y.jsx("div", { className: "flex justify-center sm:justify-start", children: /* @__PURE__ */ y.jsx(yo, { onClick: il }) }),
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          ref: C,
          className: "flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md transition-all overflow-hidden",
          style: { borderColor: "rgba(0, 0, 0, 0.35)", borderWidth: "2px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
          children: [
            _ ? /* @__PURE__ */ y.jsx(
              "input",
              {
                type: "text",
                inputMode: "decimal",
                id: "currency-converter-to-input-web",
                name: "toValue",
                value: at,
                onChange: dt,
                onFocus: () => {
                  fe.current = !0;
                },
                onBlur: () => {
                  fe.current = !1;
                },
                placeholder: "0,00",
                className: "font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600 min-w-0 flex-1 h-5 border-0 outline-none bg-transparent placeholder-wl-neutral-400"
              }
            ) : /* @__PURE__ */ y.jsx("span", { className: "min-w-0 flex-1 font-inter font-semibold text-sm sm:text-base leading-5 text-wl-neutral-600", children: at }),
            /* @__PURE__ */ y.jsx("div", { className: "shrink-0 ml-2", children: /* @__PURE__ */ y.jsx(
              X2,
              {
                currency: h,
                currencies: Se,
                onCurrencyChange: q,
                exchangeRates: De
              }
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center gap-2 w-full", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2", children: [
        /* @__PURE__ */ y.jsxs("span", { className: "font-inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-8 sm:leading-9 lg:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap", children: [
          u.symbol,
          " ",
          Ue
        ] }, `from-${Ue}-${u.code}`),
        /* @__PURE__ */ y.jsx("span", { className: "font-inter font-semibold text-xl sm:text-2xl leading-7 sm:leading-8 tracking-tight-sm text-wl-neutral-600 whitespace-nowrap", children: "=" }),
        /* @__PURE__ */ y.jsxs("span", { className: "font-inter font-bold text-2xl sm:text-3xl lg:text-4xl leading-8 sm:leading-9 lg:leading-10 tracking-tight-md text-wl-neutral-600 text-center whitespace-nowrap", children: [
          h.symbol,
          " ",
          Fe
        ] }, `to-${Fe}-${h.code}`)
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "flex flex-col gap-1 w-full", children: /* @__PURE__ */ y.jsxs("p", { className: "font-inter font-normal text-xs leading-4 text-wl-neutral-600 text-center m-0 px-2 whitespace-nowrap", children: [
        "1 ",
        u.code,
        " = ",
        j.toFixed(2),
        " ",
        h.code,
        " em ",
        Me
      ] }) })
    ] }, `summary-${m}-${i}-${u.code}-${h.code}`)
  ] }) }) });
}, Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CurrencyConverter: T4
}, Symbol.toStringTag, { value: "Module" })), So = (m) => [
  "flex",
  "flex-row",
  "items-center",
  "gap-2",
  "w-[525px]",
  "h-11",
  "px-4",
  "py-3",
  "bg-white",
  "border",
  "border-[#525252]",
  "rounded-[12px]",
  "transition-all",
  "hover:ring-2",
  "hover:ring-black",
  "focus-within:ring-2",
  "focus-within:ring-black",
  "ring-offset-0",
  m ? "bg-[#F5F5F5] cursor-not-allowed" : "cursor-text"
].join(" "), Do = (m) => [
  "flex-1",
  "bg-transparent",
  "font-inter",
  "font-semibold",
  "text-base",
  "leading-5",
  "placeholder-[#ABABA8]",
  "focus:outline-none",
  "border-none",
  m ? "cursor-not-allowed text-[#AAAAAA]" : ""
].filter(Boolean).join(" "), _o = ({
  value: m,
  currency: i,
  currencies: u,
  disabled: h = !1,
  onValueChange: p,
  onCurrencyChange: N
}) => {
  const Y = (X) => {
    p(Number(X.target.value) || 0);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: So(h), children: [
    /* @__PURE__ */ y.jsx(
      X2,
      {
        currency: i,
        currencies: u,
        onCurrencyChange: N
      }
    ),
    /* @__PURE__ */ y.jsx("div", { className: "w-px h-6 bg-[#cccccc] shrink-0" }),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: "number",
        value: m || "",
        onChange: Y,
        disabled: h,
        placeholder: "0,00",
        className: Do(h),
        style: {
          color: "var(--colors-Content-one, #525252)",
          opacity: 1
        }
      }
    )
  ] });
}, bo = (m, i, u) => {
  const h = u[m], p = u[i];
  return !h || !p ? "-" : (p / h).toFixed(2);
}, Ro = ({
  currency: m,
  currencies: i,
  onCurrencyChange: u,
  listWidth: h,
  fromValue: p = 1,
  exchangeRates: N = {}
}) => {
  const [Y, X] = Be.useState(!1), [O, H] = Be.useState(-1), _ = Be.useRef(null), Z = Be.useMemo(
    () => [...i].sort((le, j) => le.code.localeCompare(j.code)),
    [i]
  ), q = m0(m.code), Ze = (le) => {
    _.current && (_.current.contains(le.target) || X(!1));
  };
  Be.useEffect(() => (document.addEventListener("mousedown", Ze), () => {
    document.removeEventListener("mousedown", Ze);
  }), []);
  const se = () => {
    X((le) => !le), H(-1);
  }, Se = (le) => {
    u(le), X(!1), H(-1);
  }, De = (le) => {
    if (le.key === "Enter") {
      if (le.preventDefault(), !Y) {
        X(!0), H(0);
        return;
      }
      const j = Z[O];
      j && Se(j);
      return;
    }
    if (Y) {
      if (le.key === "Escape") {
        X(!1), H(-1);
        return;
      }
      if (le.key === "ArrowDown") {
        le.preventDefault(), H((j) => (j + 1) % Z.length);
        return;
      }
      if (le.key === "ArrowUp") {
        le.preventDefault(), H((j) => (j - 1 + Z.length) % Z.length);
        return;
      }
    }
  };
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "cs-root", ref: _, onKeyDown: De, children: [
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          className: "cs-trigger",
          role: "combobox",
          "aria-expanded": Y,
          "aria-haspopup": "listbox",
          children: [
            /* @__PURE__ */ y.jsx("span", { className: "cs-flag", "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(f0, { countryCode: q }) }),
            /* @__PURE__ */ y.jsx("span", { className: "cs-code", children: m.code }),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Abrir lista de moedas",
                "aria-expanded": Y,
                onClick: se,
                className: "cs-chevron",
                children: /* @__PURE__ */ y.jsx(q9, { size: 20, color: "#525252" })
              }
            )
          ]
        }
      ),
      Y && /* @__PURE__ */ y.jsx(
        "div",
        {
          role: "listbox",
          "aria-label": "Selecionar moeda",
          className: "cs-popover",
          style: {
            background: "#fff",
            width: h ? `${h}px` : void 0
          },
          children: /* @__PURE__ */ y.jsx("ul", { className: "cs-list", children: Z.map((le, j) => {
            const Me = m0(le.code), xe = le.code === m.code, Re = j === O, ve = bo(
              m.code,
              le.code,
              N
            );
            return /* @__PURE__ */ y.jsxs(
              "li",
              {
                role: "option",
                "aria-selected": xe,
                className: "cs-option",
                "data-active": Re ? "true" : "false",
                onMouseEnter: () => H(j),
                onClick: () => Se(le),
                children: [
                  /* @__PURE__ */ y.jsx("div", { className: "w-5 h-5 shrink-0 rounded-full overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ y.jsx(f0, { countryCode: Me }) }),
                  /* @__PURE__ */ y.jsx("span", { className: "cs-option-code", children: le.code }),
                  ve !== "-" && /* @__PURE__ */ y.jsxs("span", { className: "cs-option-rate", children: [
                    p,
                    " ",
                    m.code,
                    " = ",
                    ve,
                    " ",
                    le.code
                  ] })
                ]
              },
              le.code
            );
          }) })
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "text-xs text-[#888888] mt-2", children: [
      "Atualizado em ",
      Zi()
    ] })
  ] });
};
var b4 = { exports: {} }, Q2 = {}, A4 = { exports: {} }, B4 = {};
var Ri;
function Ao() {
  return Ri || (Ri = 1, (function(m) {
    function i(T, B) {
      var L = T.length;
      T.push(B);
      e: for (; 0 < L; ) {
        var P = L - 1 >>> 1, fe = T[P];
        if (0 < p(fe, B))
          T[P] = B, T[L] = fe, L = P;
        else break e;
      }
    }
    function u(T) {
      return T.length === 0 ? null : T[0];
    }
    function h(T) {
      if (T.length === 0) return null;
      var B = T[0], L = T.pop();
      if (L !== B) {
        T[0] = L;
        e: for (var P = 0, fe = T.length, nt = fe >>> 1; P < nt; ) {
          var z = 2 * (P + 1) - 1, A = T[z], C = z + 1, R = T[C];
          if (0 > p(A, L))
            C < fe && 0 > p(R, A) ? (T[P] = R, T[C] = L, P = C) : (T[P] = A, T[z] = L, P = z);
          else if (C < fe && 0 > p(R, L))
            T[P] = R, T[C] = L, P = C;
          else break e;
        }
      }
      return B;
    }
    function p(T, B) {
      var L = T.sortIndex - B.sortIndex;
      return L !== 0 ? L : T.id - B.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      m.unstable_now = function() {
        return N.now();
      };
    } else {
      var Y = Date, X = Y.now();
      m.unstable_now = function() {
        return Y.now() - X;
      };
    }
    var O = [], H = [], _ = 1, Z = null, q = 3, Ze = !1, se = !1, Se = !1, De = !1, le = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    function xe(T) {
      for (var B = u(H); B !== null; ) {
        if (B.callback === null) h(H);
        else if (B.startTime <= T)
          h(H), B.sortIndex = B.expirationTime, i(O, B);
        else break;
        B = u(H);
      }
    }
    function Re(T) {
      if (Se = !1, xe(T), !se)
        if (u(O) !== null)
          se = !0, ve || (ve = !0, tt());
        else {
          var B = u(H);
          B !== null && He(Re, B.startTime - T);
        }
    }
    var ve = !1, Ve = -1, ae = 5, Qe = -1;
    function at() {
      return De ? !0 : !(m.unstable_now() - Qe < ae);
    }
    function Ht() {
      if (De = !1, ve) {
        var T = m.unstable_now();
        Qe = T;
        var B = !0;
        try {
          e: {
            se = !1, Se && (Se = !1, j(Ve), Ve = -1), Ze = !0;
            var L = q;
            try {
              t: {
                for (xe(T), Z = u(O); Z !== null && !(Z.expirationTime > T && at()); ) {
                  var P = Z.callback;
                  if (typeof P == "function") {
                    Z.callback = null, q = Z.priorityLevel;
                    var fe = P(
                      Z.expirationTime <= T
                    );
                    if (T = m.unstable_now(), typeof fe == "function") {
                      Z.callback = fe, xe(T), B = !0;
                      break t;
                    }
                    Z === u(O) && h(O), xe(T);
                  } else h(O);
                  Z = u(O);
                }
                if (Z !== null) B = !0;
                else {
                  var nt = u(H);
                  nt !== null && He(
                    Re,
                    nt.startTime - T
                  ), B = !1;
                }
              }
              break e;
            } finally {
              Z = null, q = L, Ze = !1;
            }
            B = void 0;
          }
        } finally {
          B ? tt() : ve = !1;
        }
      }
    }
    var tt;
    if (typeof Me == "function")
      tt = function() {
        Me(Ht);
      };
    else if (typeof MessageChannel < "u") {
      var dt = new MessageChannel(), r1 = dt.port2;
      dt.port1.onmessage = Ht, tt = function() {
        r1.postMessage(null);
      };
    } else
      tt = function() {
        le(Ht, 0);
      };
    function He(T, B) {
      Ve = le(function() {
        T(m.unstable_now());
      }, B);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, m.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ae = 0 < T ? Math.floor(1e3 / T) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, m.unstable_next = function(T) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = q;
      }
      var L = q;
      q = B;
      try {
        return T();
      } finally {
        q = L;
      }
    }, m.unstable_requestPaint = function() {
      De = !0;
    }, m.unstable_runWithPriority = function(T, B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = q;
      q = T;
      try {
        return B();
      } finally {
        q = L;
      }
    }, m.unstable_scheduleCallback = function(T, B, L) {
      var P = m.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? P + L : P) : L = P, T) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return fe = L + fe, T = {
        id: _++,
        callback: B,
        priorityLevel: T,
        startTime: L,
        expirationTime: fe,
        sortIndex: -1
      }, L > P ? (T.sortIndex = L, i(H, T), u(O) === null && T === u(H) && (Se ? (j(Ve), Ve = -1) : Se = !0, He(Re, L - P))) : (T.sortIndex = fe, i(O, T), se || Ze || (se = !0, ve || (ve = !0, tt()))), T;
    }, m.unstable_shouldYield = at, m.unstable_wrapCallback = function(T) {
      var B = q;
      return function() {
        var L = q;
        q = B;
        try {
          return T.apply(this, arguments);
        } finally {
          q = L;
        }
      };
    };
  })(B4)), B4;
}
var Ui;
function Bo() {
  return Ui || (Ui = 1, A4.exports = Ao()), A4.exports;
}
var ji;
function To() {
  if (ji) return Q2;
  ji = 1;
  var m = { env: {} };
  var i = Bo(), u = L4(), h = Ki();
  function p(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Y(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function X(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function H(e) {
    if (Y(e) !== e)
      throw Error(p(188));
  }
  function _(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Y(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var c = l.return;
      if (c === null) break;
      var r = c.alternate;
      if (r === null) {
        if (n = c.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (c.child === r.child) {
        for (r = c.child; r; ) {
          if (r === l) return H(c), e;
          if (r === n) return H(c), t;
          r = r.sibling;
        }
        throw Error(p(188));
      }
      if (l.return !== n.return) l = c, n = r;
      else {
        for (var f = !1, s = c.child; s; ) {
          if (s === l) {
            f = !0, l = c, n = r;
            break;
          }
          if (s === n) {
            f = !0, n = c, l = r;
            break;
          }
          s = s.sibling;
        }
        if (!f) {
          for (s = r.child; s; ) {
            if (s === l) {
              f = !0, l = r, n = c;
              break;
            }
            if (s === n) {
              f = !0, n = r, l = c;
              break;
            }
            s = s.sibling;
          }
          if (!f) throw Error(p(189));
        }
      }
      if (l.alternate !== n) throw Error(p(190));
    }
    if (l.tag !== 3) throw Error(p(188));
    return l.stateNode.current === l ? e : t;
  }
  function Z(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = Z(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var q = Object.assign, Ze = /* @__PURE__ */ Symbol.for("react.element"), se = /* @__PURE__ */ Symbol.for("react.transitional.element"), Se = /* @__PURE__ */ Symbol.for("react.portal"), De = /* @__PURE__ */ Symbol.for("react.fragment"), le = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), Me = /* @__PURE__ */ Symbol.for("react.consumer"), xe = /* @__PURE__ */ Symbol.for("react.context"), Re = /* @__PURE__ */ Symbol.for("react.forward_ref"), ve = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), Qe = /* @__PURE__ */ Symbol.for("react.lazy"), at = /* @__PURE__ */ Symbol.for("react.activity"), Ht = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function dt(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var r1 = /* @__PURE__ */ Symbol.for("react.client.reference");
  function He(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === r1 ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case De:
        return "Fragment";
      case j:
        return "Profiler";
      case le:
        return "StrictMode";
      case ve:
        return "Suspense";
      case Ve:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return "Portal";
        case xe:
          return e.displayName || "Context";
        case Me:
          return (e._context.displayName || "Context") + ".Consumer";
        case Re:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ae:
          return t = e.displayName || null, t !== null ? t : He(e.type) || "Memo";
        case Qe:
          t = e._payload, e = e._init;
          try {
            return He(e(t));
          } catch {
          }
      }
    return null;
  }
  var T = Array.isArray, B = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fe = [], nt = -1;
  function z(e) {
    return { current: e };
  }
  function A(e) {
    0 > nt || (e.current = fe[nt], fe[nt] = null, nt--);
  }
  function C(e, t) {
    nt++, fe[nt] = e.current, e.current = t;
  }
  var R = z(null), $ = z(null), I = z(null), ue = z(null);
  function Ue(e, t) {
    switch (C(I, t), C($, e), C(R, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Pc(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Pc(t), e = ei(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    A(R), C(R, e);
  }
  function Fe() {
    A(R), A($), A(I);
  }
  function h1(e) {
    e.memoizedState !== null && C(ue, e);
    var t = R.current, l = ei(t, e.type);
    t !== l && (C($, e), C(R, l));
  }
  function cl(e) {
    $.current === e && (A(R), A($)), ue.current === e && (A(ue), R2._currentValue = P);
  }
  var il, Zl;
  function Nt(e) {
    if (il === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        il = t && t[1] || "", Zl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + il + e + Zl;
  }
  var f1 = !1;
  function m1(e, t) {
    if (!e || f1) return "";
    f1 = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var b = function() {
                throw Error();
              };
              if (Object.defineProperty(b.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (F) {
                  var w = F;
                }
                Reflect.construct(e, [], b);
              } else {
                try {
                  b.call();
                } catch (F) {
                  w = F;
                }
                e.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                w = F;
              }
              (b = e()) && typeof b.catch == "function" && b.catch(function() {
              });
            }
          } catch (F) {
            if (F && w && typeof F.stack == "string")
              return [F.stack, w.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = n.DetermineComponentFrameRoot(), f = r[0], s = r[1];
      if (f && s) {
        var o = f.split(`
`), x = s.split(`
`);
        for (c = n = 0; n < o.length && !o[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; c < x.length && !x[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (n === o.length || c === x.length)
          for (n = o.length - 1, c = x.length - 1; 1 <= n && 0 <= c && o[n] !== x[c]; )
            c--;
        for (; 1 <= n && 0 <= c; n--, c--)
          if (o[n] !== x[c]) {
            if (n !== 1 || c !== 1)
              do
                if (n--, c--, 0 > c || o[n] !== x[c]) {
                  var S = `
` + o[n].replace(" at new ", " at ");
                  return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
                }
              while (1 <= n && 0 <= c);
            break;
          }
      }
    } finally {
      f1 = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Nt(l) : "";
  }
  function Ee(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Nt(e.type);
      case 16:
        return Nt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Nt("Suspense Fallback") : Nt("Suspense");
      case 19:
        return Nt("SuspenseList");
      case 0:
      case 15:
        return m1(e.type, !1);
      case 11:
        return m1(e.type.render, !1);
      case 1:
        return m1(e.type, !0);
      case 31:
        return Nt("Activity");
      default:
        return "";
    }
  }
  function _1(e) {
    try {
      var t = "", l = null;
      do
        t += Ee(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Kl = Object.prototype.hasOwnProperty, J = i.unstable_scheduleCallback, we = i.unstable_cancelCallback, Le = i.unstable_shouldYield, ct = i.unstable_requestPaint, We = i.unstable_now, Jl = i.unstable_getCurrentPriorityLevel, Ft = i.unstable_ImmediatePriority, Wl = i.unstable_UserBlockingPriority, ul = i.unstable_NormalPriority, K2 = i.unstable_LowPriority, s0 = i.unstable_IdlePriority, Z9 = i.log, K9 = i.unstable_setDisableYieldValue, kl = null, ot = null;
  function s1(e) {
    if (typeof Z9 == "function" && K9(e), ot && typeof ot.setStrictMode == "function")
      try {
        ot.setStrictMode(kl, e);
      } catch {
      }
  }
  var Et = Math.clz32 ? Math.clz32 : k9, J9 = Math.log, W9 = Math.LN2;
  function k9(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (J9(e) / W9 | 0) | 0;
  }
  var J2 = 256, W2 = 262144, k2 = 4194304;
  function R1(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function $2(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var c = 0, r = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var s = n & 134217727;
    return s !== 0 ? (n = s & ~r, n !== 0 ? c = R1(n) : (f &= s, f !== 0 ? c = R1(f) : l || (l = s & ~e, l !== 0 && (c = R1(l))))) : (s = n & ~r, s !== 0 ? c = R1(s) : f !== 0 ? c = R1(f) : l || (l = n & ~e, l !== 0 && (c = R1(l)))), c === 0 ? 0 : t !== 0 && t !== c && (t & r) === 0 && (r = c & -c, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : c;
  }
  function $l(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $9(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function C4() {
    var e = k2;
    return k2 <<= 1, (k2 & 62914560) === 0 && (k2 = 4194304), e;
  }
  function v0(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Il(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function I9(e, t, l, n, c, r) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var s = e.entanglements, o = e.expirationTimes, x = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var S = 31 - Et(l), b = 1 << S;
      s[S] = 0, o[S] = -1;
      var w = x[S];
      if (w !== null)
        for (x[S] = null, S = 0; S < w.length; S++) {
          var F = w[S];
          F !== null && (F.lane &= -536870913);
        }
      l &= ~b;
    }
    n !== 0 && O4(e, n, 0), r !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t));
  }
  function O4(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - Et(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function V4(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - Et(l), c = 1 << n;
      c & t | e[n] & t && (e[n] |= t), l &= ~c;
    }
  }
  function N4(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : d0(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function d0(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function o0(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _4() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : yi(e.type));
  }
  function R4(e, t) {
    var l = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = l;
    }
  }
  var v1 = Math.random().toString(36).slice(2), ke = "__reactFiber$" + v1, ut = "__reactProps$" + v1, rl = "__reactContainer$" + v1, E0 = "__reactEvents$" + v1, P9 = "__reactListeners$" + v1, er = "__reactHandles$" + v1, U4 = "__reactResources$" + v1, Pl = "__reactMarker$" + v1;
  function p0(e) {
    delete e[ke], delete e[ut], delete e[E0], delete e[P9], delete e[er];
  }
  function hl(e) {
    var t = e[ke];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[rl] || l[ke]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = ui(e); e !== null; ) {
            if (l = e[ke]) return l;
            e = ui(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function fl(e) {
    if (e = e[ke] || e[rl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function e2(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(p(33));
  }
  function ml(e) {
    var t = e[U4];
    return t || (t = e[U4] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[Pl] = !0;
  }
  var j4 = /* @__PURE__ */ new Set(), G4 = {};
  function U1(e, t) {
    sl(e, t), sl(e + "Capture", t);
  }
  function sl(e, t) {
    for (G4[e] = t, e = 0; e < t.length; e++)
      j4.add(t[e]);
  }
  var tr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Y4 = {}, q4 = {};
  function lr(e) {
    return Kl.call(q4, e) ? !0 : Kl.call(Y4, e) ? !1 : tr.test(e) ? q4[e] = !0 : (Y4[e] = !0, !1);
  }
  function I2(e, t, l) {
    if (lr(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function P2(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Qt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function St(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Q4(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ar(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var c = n.get, r = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(f) {
          l = "" + f, r.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(f) {
          l = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function z0(e) {
    if (!e._valueTracker) {
      var t = Q4(e) ? "checked" : "value";
      e._valueTracker = ar(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function X4(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Q4(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function e3(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var nr = /[\n"\\]/g;
  function Dt(e) {
    return e.replace(
      nr,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function g0(e, t, l, n, c, r, f, s) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? M0(e, f, St(t)) : l != null ? M0(e, f, St(l)) : n != null && e.removeAttribute("value"), c == null && r != null && (e.defaultChecked = !!r), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + St(s) : e.removeAttribute("name");
  }
  function Z4(e, t, l, n, c, r, f, s) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        z0(e);
        return;
      }
      l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? c, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = s ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), z0(e);
  }
  function M0(e, t, l) {
    t === "number" && e3(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function vl(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < l.length; c++)
        t["$" + l[c]] = !0;
      for (l = 0; l < e.length; l++)
        c = t.hasOwnProperty("$" + e[l].value), e[l].selected !== c && (e[l].selected = c), c && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + St(l), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === l) {
          e[c].selected = !0, n && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function K4(e, t, l) {
    if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function J4(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(p(92));
        if (T(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = St(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), z0(e);
  }
  function dl(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function W4(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || cr.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function k4(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(p(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var c in t)
        n = t[c], t.hasOwnProperty(c) && l[c] !== n && W4(e, c, n);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && W4(e, r, t[r]);
  }
  function x0(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ir = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ur = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function t3(e) {
    return ur.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Xt() {
  }
  var w0 = null;
  function y0(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ol = null, El = null;
  function $4(e) {
    var t = fl(e);
    if (t && (e = t.stateNode)) {
      var l = e[ut] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (g0(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Dt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var c = n[ut] || null;
                if (!c) throw Error(p(90));
                g0(
                  n,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && X4(n);
          }
          break e;
        case "textarea":
          K4(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && vl(e, !!l.multiple, t, !1);
      }
    }
  }
  var H0 = !1;
  function I4(e, t, l) {
    if (H0) return e(t, l);
    H0 = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (H0 = !1, (ol !== null || El !== null) && (Y3(), ol && (t = ol, e = El, El = ol = null, $4(t), e)))
        for (t = 0; t < e.length; t++) $4(e[t]);
    }
  }
  function t2(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[ut] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        p(231, t, typeof l)
      );
    return l;
  }
  var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F0 = !1;
  if (Zt)
    try {
      var l2 = {};
      Object.defineProperty(l2, "passive", {
        get: function() {
          F0 = !0;
        }
      }), window.addEventListener("test", l2, l2), window.removeEventListener("test", l2, l2);
    } catch {
      F0 = !1;
    }
  var d1 = null, S0 = null, l3 = null;
  function P4() {
    if (l3) return l3;
    var e, t = S0, l = t.length, n, c = "value" in d1 ? d1.value : d1.textContent, r = c.length;
    for (e = 0; e < l && t[e] === c[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === c[r - n]; n++) ;
    return l3 = c.slice(e, 1 < n ? 1 - n : void 0);
  }
  function a3(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function n3() {
    return !0;
  }
  function e5() {
    return !1;
  }
  function rt(e) {
    function t(l, n, c, r, f) {
      this._reactName = l, this._targetInst = c, this.type = n, this.nativeEvent = r, this.target = f, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (l = e[s], this[s] = l ? l(r) : r[s]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? n3 : e5, this.isPropagationStopped = e5, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = n3);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = n3);
      },
      persist: function() {
      },
      isPersistent: n3
    }), t;
  }
  var j1 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, c3 = rt(j1), a2 = q({}, j1, { view: 0, detail: 0 }), rr = rt(a2), D0, b0, n2, i3 = q({}, a2, {
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
    getModifierState: B0,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== n2 && (n2 && e.type === "mousemove" ? (D0 = e.screenX - n2.screenX, b0 = e.screenY - n2.screenY) : b0 = D0 = 0, n2 = e), D0);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : b0;
    }
  }), t5 = rt(i3), hr = q({}, i3, { dataTransfer: 0 }), fr = rt(hr), mr = q({}, a2, { relatedTarget: 0 }), A0 = rt(mr), sr = q({}, j1, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vr = rt(sr), dr = q({}, j1, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), or = rt(dr), Er = q({}, j1, { data: 0 }), l5 = rt(Er), pr = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, zr = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, gr = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = gr[e]) ? !!t[e] : !1;
  }
  function B0() {
    return Mr;
  }
  var xr = q({}, a2, {
    key: function(e) {
      if (e.key) {
        var t = pr[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = a3(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zr[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: B0,
    charCode: function(e) {
      return e.type === "keypress" ? a3(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? a3(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), wr = rt(xr), yr = q({}, i3, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), a5 = rt(yr), Hr = q({}, a2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: B0
  }), Fr = rt(Hr), Sr = q({}, j1, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dr = rt(Sr), br = q({}, i3, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ar = rt(br), Br = q({}, j1, {
    newState: 0,
    oldState: 0
  }), Tr = rt(Br), Lr = [9, 13, 27, 32], T0 = Zt && "CompositionEvent" in window, c2 = null;
  Zt && "documentMode" in document && (c2 = document.documentMode);
  var Cr = Zt && "TextEvent" in window && !c2, n5 = Zt && (!T0 || c2 && 8 < c2 && 11 >= c2), c5 = " ", i5 = !1;
  function u5(e, t) {
    switch (e) {
      case "keyup":
        return Lr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function r5(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pl = !1;
  function Or(e, t) {
    switch (e) {
      case "compositionend":
        return r5(t);
      case "keypress":
        return t.which !== 32 ? null : (i5 = !0, c5);
      case "textInput":
        return e = t.data, e === c5 && i5 ? null : e;
      default:
        return null;
    }
  }
  function Vr(e, t) {
    if (pl)
      return e === "compositionend" || !T0 && u5(e, t) ? (e = P4(), l3 = S0 = d1 = null, pl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return n5 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nr = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0
  };
  function h5(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nr[e.type] : t === "textarea";
  }
  function f5(e, t, l, n) {
    ol ? El ? El.push(n) : El = [n] : ol = n, t = W3(t, "onChange"), 0 < t.length && (l = new c3(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var i2 = null, u2 = null;
  function _r(e) {
    Kc(e, 0);
  }
  function u3(e) {
    var t = e2(e);
    if (X4(t)) return e;
  }
  function m5(e, t) {
    if (e === "change") return t;
  }
  var s5 = !1;
  if (Zt) {
    var L0;
    if (Zt) {
      var C0 = "oninput" in document;
      if (!C0) {
        var v5 = document.createElement("div");
        v5.setAttribute("oninput", "return;"), C0 = typeof v5.oninput == "function";
      }
      L0 = C0;
    } else L0 = !1;
    s5 = L0 && (!document.documentMode || 9 < document.documentMode);
  }
  function d5() {
    i2 && (i2.detachEvent("onpropertychange", o5), u2 = i2 = null);
  }
  function o5(e) {
    if (e.propertyName === "value" && u3(u2)) {
      var t = [];
      f5(
        t,
        u2,
        e,
        y0(e)
      ), I4(_r, t);
    }
  }
  function Rr(e, t, l) {
    e === "focusin" ? (d5(), i2 = t, u2 = l, i2.attachEvent("onpropertychange", o5)) : e === "focusout" && d5();
  }
  function Ur(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return u3(u2);
  }
  function jr(e, t) {
    if (e === "click") return u3(t);
  }
  function Gr(e, t) {
    if (e === "input" || e === "change")
      return u3(t);
  }
  function Yr(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var pt = typeof Object.is == "function" ? Object.is : Yr;
  function r2(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var c = l[n];
      if (!Kl.call(t, c) || !pt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function E5(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function p5(e, t) {
    var l = E5(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = E5(l);
    }
  }
  function z5(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? z5(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function g5(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = e3(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = e3(e.document);
    }
    return t;
  }
  function O0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qr = Zt && "documentMode" in document && 11 >= document.documentMode, zl = null, V0 = null, h2 = null, N0 = !1;
  function M5(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    N0 || zl == null || zl !== e3(n) || (n = zl, "selectionStart" in n && O0(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), h2 && r2(h2, n) || (h2 = n, n = W3(V0, "onSelect"), 0 < n.length && (t = new c3(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = zl)));
  }
  function G1(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var gl = {
    animationend: G1("Animation", "AnimationEnd"),
    animationiteration: G1("Animation", "AnimationIteration"),
    animationstart: G1("Animation", "AnimationStart"),
    transitionrun: G1("Transition", "TransitionRun"),
    transitionstart: G1("Transition", "TransitionStart"),
    transitioncancel: G1("Transition", "TransitionCancel"),
    transitionend: G1("Transition", "TransitionEnd")
  }, _0 = {}, x5 = {};
  Zt && (x5 = document.createElement("div").style, "AnimationEvent" in window || (delete gl.animationend.animation, delete gl.animationiteration.animation, delete gl.animationstart.animation), "TransitionEvent" in window || delete gl.transitionend.transition);
  function Y1(e) {
    if (_0[e]) return _0[e];
    if (!gl[e]) return e;
    var t = gl[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in x5)
        return _0[e] = t[l];
    return e;
  }
  var w5 = Y1("animationend"), y5 = Y1("animationiteration"), H5 = Y1("animationstart"), Qr = Y1("transitionrun"), Xr = Y1("transitionstart"), Zr = Y1("transitioncancel"), F5 = Y1("transitionend"), S5 = /* @__PURE__ */ new Map(), R0 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  R0.push("scrollEnd");
  function _t(e, t) {
    S5.set(e, t), U1(t, [e]);
  }
  var r3 = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof m == "object" && typeof m.emit == "function") {
      m.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, bt = [], Ml = 0, U0 = 0;
  function h3() {
    for (var e = Ml, t = U0 = Ml = 0; t < e; ) {
      var l = bt[t];
      bt[t++] = null;
      var n = bt[t];
      bt[t++] = null;
      var c = bt[t];
      bt[t++] = null;
      var r = bt[t];
      if (bt[t++] = null, n !== null && c !== null) {
        var f = n.pending;
        f === null ? c.next = c : (c.next = f.next, f.next = c), n.pending = c;
      }
      r !== 0 && D5(l, c, r);
    }
  }
  function f3(e, t, l, n) {
    bt[Ml++] = e, bt[Ml++] = t, bt[Ml++] = l, bt[Ml++] = n, U0 |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function j0(e, t, l, n) {
    return f3(e, t, l, n), m3(e);
  }
  function q1(e, t) {
    return f3(e, null, null, t), m3(e);
  }
  function D5(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var c = !1, r = e.return; r !== null; )
      r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (c = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, c && t !== null && (c = 31 - Et(l), e = r.hiddenUpdates, n = e[c], n === null ? e[c] = [t] : n.push(t), t.lane = l | 536870912), r) : null;
  }
  function m3(e) {
    if (50 < T2)
      throw T2 = 0, Wa = null, Error(p(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xl = {};
  function Kr(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, l, n) {
    return new Kr(e, t, l, n);
  }
  function G0(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Kt(e, t) {
    var l = e.alternate;
    return l === null ? (l = zt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function b5(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function s3(e, t, l, n, c, r) {
    var f = 0;
    if (n = e, typeof e == "function") G0(e) && (f = 1);
    else if (typeof e == "string")
      f = Ih(
        e,
        l,
        R.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case at:
          return e = zt(31, l, t, c), e.elementType = at, e.lanes = r, e;
        case De:
          return Q1(l.children, c, r, t);
        case le:
          f = 8, c |= 24;
          break;
        case j:
          return e = zt(12, l, t, c | 2), e.elementType = j, e.lanes = r, e;
        case ve:
          return e = zt(13, l, t, c), e.elementType = ve, e.lanes = r, e;
        case Ve:
          return e = zt(19, l, t, c), e.elementType = Ve, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xe:
                f = 10;
                break e;
              case Me:
                f = 9;
                break e;
              case Re:
                f = 11;
                break e;
              case ae:
                f = 14;
                break e;
              case Qe:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            p(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = zt(f, l, t, c), t.elementType = e, t.type = n, t.lanes = r, t;
  }
  function Q1(e, t, l, n) {
    return e = zt(7, e, n, t), e.lanes = l, e;
  }
  function Y0(e, t, l) {
    return e = zt(6, e, null, t), e.lanes = l, e;
  }
  function A5(e) {
    var t = zt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function q0(e, t, l) {
    return t = zt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var B5 = /* @__PURE__ */ new WeakMap();
  function At(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = B5.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: _1(t)
      }, B5.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _1(t)
    };
  }
  var wl = [], yl = 0, v3 = null, f2 = 0, Bt = [], Tt = 0, o1 = null, jt = 1, Gt = "";
  function Jt(e, t) {
    wl[yl++] = f2, wl[yl++] = v3, v3 = e, f2 = t;
  }
  function T5(e, t, l) {
    Bt[Tt++] = jt, Bt[Tt++] = Gt, Bt[Tt++] = o1, o1 = e;
    var n = jt;
    e = Gt;
    var c = 32 - Et(n) - 1;
    n &= ~(1 << c), l += 1;
    var r = 32 - Et(t) + c;
    if (30 < r) {
      var f = c - c % 5;
      r = (n & (1 << f) - 1).toString(32), n >>= f, c -= f, jt = 1 << 32 - Et(t) + c | l << c | n, Gt = r + e;
    } else
      jt = 1 << r | l << c | n, Gt = e;
  }
  function Q0(e) {
    e.return !== null && (Jt(e, 1), T5(e, 1, 0));
  }
  function X0(e) {
    for (; e === v3; )
      v3 = wl[--yl], wl[yl] = null, f2 = wl[--yl], wl[yl] = null;
    for (; e === o1; )
      o1 = Bt[--Tt], Bt[Tt] = null, Gt = Bt[--Tt], Bt[Tt] = null, jt = Bt[--Tt], Bt[Tt] = null;
  }
  function L5(e, t) {
    Bt[Tt++] = jt, Bt[Tt++] = Gt, Bt[Tt++] = o1, jt = t.id, Gt = t.overflow, o1 = e;
  }
  var $e = null, be = null, ie = !1, E1 = null, Lt = !1, Z0 = Error(p(519));
  function p1(e) {
    var t = Error(
      p(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw m2(At(t, e)), Z0;
  }
  function C5(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[ke] = e, t[ut] = n, l) {
      case "dialog":
        te("cancel", t), te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        te("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < C2.length; l++)
          te(C2[l], t);
        break;
      case "source":
        te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        te("error", t), te("load", t);
        break;
      case "details":
        te("toggle", t);
        break;
      case "input":
        te("invalid", t), Z4(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        te("invalid", t);
        break;
      case "textarea":
        te("invalid", t), J4(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || $c(t.textContent, l) ? (n.popover != null && (te("beforetoggle", t), te("toggle", t)), n.onScroll != null && te("scroll", t), n.onScrollEnd != null && te("scrollend", t), n.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || p1(e, !0);
  }
  function O5(e) {
    for ($e = e.return; $e; )
      switch ($e.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          $e = $e.return;
      }
  }
  function Hl(e) {
    if (e !== $e) return !1;
    if (!ie) return O5(e), ie = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || f4(e.type, e.memoizedProps)), l = !l), l && be && p1(e), O5(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      be = ii(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      be = ii(e);
    } else
      t === 27 ? (t = be, T1(e.type) ? (e = o4, o4 = null, be = e) : be = t) : be = $e ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function X1() {
    be = $e = null, ie = !1;
  }
  function K0() {
    var e = E1;
    return e !== null && (st === null ? st = e : st.push.apply(
      st,
      e
    ), E1 = null), e;
  }
  function m2(e) {
    E1 === null ? E1 = [e] : E1.push(e);
  }
  var J0 = z(null), Z1 = null, Wt = null;
  function z1(e, t, l) {
    C(J0, t._currentValue), t._currentValue = l;
  }
  function kt(e) {
    e._currentValue = J0.current, A(J0);
  }
  function W0(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function k0(e, t, l, n) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var r = c.dependencies;
      if (r !== null) {
        var f = c.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var s = r;
          r = c;
          for (var o = 0; o < t.length; o++)
            if (s.context === t[o]) {
              r.lanes |= l, s = r.alternate, s !== null && (s.lanes |= l), W0(
                r.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          r = s.next;
        }
      } else if (c.tag === 18) {
        if (f = c.return, f === null) throw Error(p(341));
        f.lanes |= l, r = f.alternate, r !== null && (r.lanes |= l), W0(f, l, e), f = null;
      } else f = c.child;
      if (f !== null) f.return = c;
      else
        for (f = c; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (c = f.sibling, c !== null) {
            c.return = f.return, f = c;
            break;
          }
          f = f.return;
        }
      c = f;
    }
  }
  function Fl(e, t, l, n) {
    e = null;
    for (var c = t, r = !1; c !== null; ) {
      if (!r) {
        if ((c.flags & 524288) !== 0) r = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var f = c.alternate;
        if (f === null) throw Error(p(387));
        if (f = f.memoizedProps, f !== null) {
          var s = c.type;
          pt(c.pendingProps.value, f.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (c === ue.current) {
        if (f = c.alternate, f === null) throw Error(p(387));
        f.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(R2) : e = [R2]);
      }
      c = c.return;
    }
    e !== null && k0(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function d3(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function K1(e) {
    Z1 = e, Wt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ie(e) {
    return V5(Z1, e);
  }
  function o3(e, t) {
    return Z1 === null && K1(e), V5(e, t);
  }
  function V5(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Wt === null) {
      if (e === null) throw Error(p(308));
      Wt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Wt = Wt.next = t;
    return l;
  }
  var Jr = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Wr = i.unstable_scheduleCallback, kr = i.unstable_NormalPriority, je = {
    $$typeof: xe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $0() {
    return {
      controller: new Jr(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function s2(e) {
    e.refCount--, e.refCount === 0 && Wr(kr, function() {
      e.controller.abort();
    });
  }
  var v2 = null, I0 = 0, Sl = 0, Dl = null;
  function $r(e, t) {
    if (v2 === null) {
      var l = v2 = [];
      I0 = 0, Sl = t4(), Dl = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return I0++, t.then(N5, N5), t;
  }
  function N5() {
    if (--I0 === 0 && v2 !== null) {
      Dl !== null && (Dl.status = "fulfilled");
      var e = v2;
      v2 = null, Sl = 0, Dl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ir(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        l.push(c);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var c = 0; c < l.length; c++) (0, l[c])(t);
      },
      function(c) {
        for (n.status = "rejected", n.reason = c, c = 0; c < l.length; c++)
          (0, l[c])(void 0);
      }
    ), n;
  }
  var _5 = B.S;
  B.S = function(e, t) {
    xc = We(), typeof t == "object" && t !== null && typeof t.then == "function" && $r(e, t), _5 !== null && _5(e, t);
  };
  var J1 = z(null);
  function P0() {
    var e = J1.current;
    return e !== null ? e : ye.pooledCache;
  }
  function E3(e, t) {
    t === null ? C(J1, J1.current) : C(J1, t.pool);
  }
  function R5() {
    var e = P0();
    return e === null ? null : { parent: je._currentValue, pool: e };
  }
  var bl = Error(p(460)), ea = Error(p(474)), p3 = Error(p(542)), z3 = { then: function() {
  } };
  function U5(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function j5(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Xt, Xt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Y5(e), e;
      default:
        if (typeof t.status == "string") t.then(Xt, Xt);
        else {
          if (e = ye, e !== null && 100 < e.shellSuspendCounter)
            throw Error(p(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Y5(e), e;
        }
        throw k1 = t, bl;
    }
  }
  function W1(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (k1 = l, bl) : l;
    }
  }
  var k1 = null;
  function G5() {
    if (k1 === null) throw Error(p(459));
    var e = k1;
    return k1 = null, e;
  }
  function Y5(e) {
    if (e === bl || e === p3)
      throw Error(p(483));
  }
  var Al = null, d2 = 0;
  function g3(e) {
    var t = d2;
    return d2 += 1, Al === null && (Al = []), j5(Al, e, t);
  }
  function o2(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function M3(e, t) {
    throw t.$$typeof === Ze ? Error(p(525)) : (e = Object.prototype.toString.call(t), Error(
      p(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function q5(e) {
    function t(g, E) {
      if (e) {
        var M = g.deletions;
        M === null ? (g.deletions = [E], g.flags |= 16) : M.push(E);
      }
    }
    function l(g, E) {
      if (!e) return null;
      for (; E !== null; )
        t(g, E), E = E.sibling;
      return null;
    }
    function n(g) {
      for (var E = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? E.set(g.key, g) : E.set(g.index, g), g = g.sibling;
      return E;
    }
    function c(g, E) {
      return g = Kt(g, E), g.index = 0, g.sibling = null, g;
    }
    function r(g, E, M) {
      return g.index = M, e ? (M = g.alternate, M !== null ? (M = M.index, M < E ? (g.flags |= 67108866, E) : M) : (g.flags |= 67108866, E)) : (g.flags |= 1048576, E);
    }
    function f(g) {
      return e && g.alternate === null && (g.flags |= 67108866), g;
    }
    function s(g, E, M, D) {
      return E === null || E.tag !== 6 ? (E = Y0(M, g.mode, D), E.return = g, E) : (E = c(E, M), E.return = g, E);
    }
    function o(g, E, M, D) {
      var G = M.type;
      return G === De ? S(
        g,
        E,
        M.props.children,
        D,
        M.key
      ) : E !== null && (E.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Qe && W1(G) === E.type) ? (E = c(E, M.props), o2(E, M), E.return = g, E) : (E = s3(
        M.type,
        M.key,
        M.props,
        null,
        g.mode,
        D
      ), o2(E, M), E.return = g, E);
    }
    function x(g, E, M, D) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== M.containerInfo || E.stateNode.implementation !== M.implementation ? (E = q0(M, g.mode, D), E.return = g, E) : (E = c(E, M.children || []), E.return = g, E);
    }
    function S(g, E, M, D, G) {
      return E === null || E.tag !== 7 ? (E = Q1(
        M,
        g.mode,
        D,
        G
      ), E.return = g, E) : (E = c(E, M), E.return = g, E);
    }
    function b(g, E, M) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Y0(
          "" + E,
          g.mode,
          M
        ), E.return = g, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case se:
            return M = s3(
              E.type,
              E.key,
              E.props,
              null,
              g.mode,
              M
            ), o2(M, E), M.return = g, M;
          case Se:
            return E = q0(
              E,
              g.mode,
              M
            ), E.return = g, E;
          case Qe:
            return E = W1(E), b(g, E, M);
        }
        if (T(E) || dt(E))
          return E = Q1(
            E,
            g.mode,
            M,
            null
          ), E.return = g, E;
        if (typeof E.then == "function")
          return b(g, g3(E), M);
        if (E.$$typeof === xe)
          return b(
            g,
            o3(g, E),
            M
          );
        M3(g, E);
      }
      return null;
    }
    function w(g, E, M, D) {
      var G = E !== null ? E.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return G !== null ? null : s(g, E, "" + M, D);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case se:
            return M.key === G ? o(g, E, M, D) : null;
          case Se:
            return M.key === G ? x(g, E, M, D) : null;
          case Qe:
            return M = W1(M), w(g, E, M, D);
        }
        if (T(M) || dt(M))
          return G !== null ? null : S(g, E, M, D, null);
        if (typeof M.then == "function")
          return w(
            g,
            E,
            g3(M),
            D
          );
        if (M.$$typeof === xe)
          return w(
            g,
            E,
            o3(g, M),
            D
          );
        M3(g, M);
      }
      return null;
    }
    function F(g, E, M, D, G) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return g = g.get(M) || null, s(E, g, "" + D, G);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case se:
            return g = g.get(
              D.key === null ? M : D.key
            ) || null, o(E, g, D, G);
          case Se:
            return g = g.get(
              D.key === null ? M : D.key
            ) || null, x(E, g, D, G);
          case Qe:
            return D = W1(D), F(
              g,
              E,
              M,
              D,
              G
            );
        }
        if (T(D) || dt(D))
          return g = g.get(M) || null, S(E, g, D, G, null);
        if (typeof D.then == "function")
          return F(
            g,
            E,
            M,
            g3(D),
            G
          );
        if (D.$$typeof === xe)
          return F(
            g,
            E,
            M,
            o3(E, D),
            G
          );
        M3(E, D);
      }
      return null;
    }
    function V(g, E, M, D) {
      for (var G = null, re = null, U = E, k = E = 0, ce = null; U !== null && k < M.length; k++) {
        U.index > k ? (ce = U, U = null) : ce = U.sibling;
        var he = w(
          g,
          U,
          M[k],
          D
        );
        if (he === null) {
          U === null && (U = ce);
          break;
        }
        e && U && he.alternate === null && t(g, U), E = r(he, E, k), re === null ? G = he : re.sibling = he, re = he, U = ce;
      }
      if (k === M.length)
        return l(g, U), ie && Jt(g, k), G;
      if (U === null) {
        for (; k < M.length; k++)
          U = b(g, M[k], D), U !== null && (E = r(
            U,
            E,
            k
          ), re === null ? G = U : re.sibling = U, re = U);
        return ie && Jt(g, k), G;
      }
      for (U = n(U); k < M.length; k++)
        ce = F(
          U,
          g,
          k,
          M[k],
          D
        ), ce !== null && (e && ce.alternate !== null && U.delete(
          ce.key === null ? k : ce.key
        ), E = r(
          ce,
          E,
          k
        ), re === null ? G = ce : re.sibling = ce, re = ce);
      return e && U.forEach(function(N1) {
        return t(g, N1);
      }), ie && Jt(g, k), G;
    }
    function Q(g, E, M, D) {
      if (M == null) throw Error(p(151));
      for (var G = null, re = null, U = E, k = E = 0, ce = null, he = M.next(); U !== null && !he.done; k++, he = M.next()) {
        U.index > k ? (ce = U, U = null) : ce = U.sibling;
        var N1 = w(g, U, he.value, D);
        if (N1 === null) {
          U === null && (U = ce);
          break;
        }
        e && U && N1.alternate === null && t(g, U), E = r(N1, E, k), re === null ? G = N1 : re.sibling = N1, re = N1, U = ce;
      }
      if (he.done)
        return l(g, U), ie && Jt(g, k), G;
      if (U === null) {
        for (; !he.done; k++, he = M.next())
          he = b(g, he.value, D), he !== null && (E = r(he, E, k), re === null ? G = he : re.sibling = he, re = he);
        return ie && Jt(g, k), G;
      }
      for (U = n(U); !he.done; k++, he = M.next())
        he = F(U, g, k, he.value, D), he !== null && (e && he.alternate !== null && U.delete(he.key === null ? k : he.key), E = r(he, E, k), re === null ? G = he : re.sibling = he, re = he);
      return e && U.forEach(function(ff) {
        return t(g, ff);
      }), ie && Jt(g, k), G;
    }
    function ge(g, E, M, D) {
      if (typeof M == "object" && M !== null && M.type === De && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case se:
            e: {
              for (var G = M.key; E !== null; ) {
                if (E.key === G) {
                  if (G = M.type, G === De) {
                    if (E.tag === 7) {
                      l(
                        g,
                        E.sibling
                      ), D = c(
                        E,
                        M.props.children
                      ), D.return = g, g = D;
                      break e;
                    }
                  } else if (E.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Qe && W1(G) === E.type) {
                    l(
                      g,
                      E.sibling
                    ), D = c(E, M.props), o2(D, M), D.return = g, g = D;
                    break e;
                  }
                  l(g, E);
                  break;
                } else t(g, E);
                E = E.sibling;
              }
              M.type === De ? (D = Q1(
                M.props.children,
                g.mode,
                D,
                M.key
              ), D.return = g, g = D) : (D = s3(
                M.type,
                M.key,
                M.props,
                null,
                g.mode,
                D
              ), o2(D, M), D.return = g, g = D);
            }
            return f(g);
          case Se:
            e: {
              for (G = M.key; E !== null; ) {
                if (E.key === G)
                  if (E.tag === 4 && E.stateNode.containerInfo === M.containerInfo && E.stateNode.implementation === M.implementation) {
                    l(
                      g,
                      E.sibling
                    ), D = c(E, M.children || []), D.return = g, g = D;
                    break e;
                  } else {
                    l(g, E);
                    break;
                  }
                else t(g, E);
                E = E.sibling;
              }
              D = q0(M, g.mode, D), D.return = g, g = D;
            }
            return f(g);
          case Qe:
            return M = W1(M), ge(
              g,
              E,
              M,
              D
            );
        }
        if (T(M))
          return V(
            g,
            E,
            M,
            D
          );
        if (dt(M)) {
          if (G = dt(M), typeof G != "function") throw Error(p(150));
          return M = G.call(M), Q(
            g,
            E,
            M,
            D
          );
        }
        if (typeof M.then == "function")
          return ge(
            g,
            E,
            g3(M),
            D
          );
        if (M.$$typeof === xe)
          return ge(
            g,
            E,
            o3(g, M),
            D
          );
        M3(g, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, E !== null && E.tag === 6 ? (l(g, E.sibling), D = c(E, M), D.return = g, g = D) : (l(g, E), D = Y0(M, g.mode, D), D.return = g, g = D), f(g)) : l(g, E);
    }
    return function(g, E, M, D) {
      try {
        d2 = 0;
        var G = ge(
          g,
          E,
          M,
          D
        );
        return Al = null, G;
      } catch (U) {
        if (U === bl || U === p3) throw U;
        var re = zt(29, U, null, g.mode);
        return re.lanes = D, re.return = g, re;
      }
    };
  }
  var $1 = q5(!0), Q5 = q5(!1), g1 = !1;
  function ta(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function la(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function M1(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function x1(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (me & 2) !== 0) {
      var c = n.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), n.pending = t, t = m3(e), D5(e, null, l), t;
    }
    return f3(e, n, t, l), m3(e);
  }
  function E2(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, V4(e, l);
    }
  }
  function aa(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var c = null, r = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          r === null ? c = r = f : r = r.next = f, l = l.next;
        } while (l !== null);
        r === null ? c = r = t : r = r.next = t;
      } else c = r = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: r,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var na = !1;
  function p2() {
    if (na) {
      var e = Dl;
      if (e !== null) throw e;
    }
  }
  function z2(e, t, l, n) {
    na = !1;
    var c = e.updateQueue;
    g1 = !1;
    var r = c.firstBaseUpdate, f = c.lastBaseUpdate, s = c.shared.pending;
    if (s !== null) {
      c.shared.pending = null;
      var o = s, x = o.next;
      o.next = null, f === null ? r = x : f.next = x, f = o;
      var S = e.alternate;
      S !== null && (S = S.updateQueue, s = S.lastBaseUpdate, s !== f && (s === null ? S.firstBaseUpdate = x : s.next = x, S.lastBaseUpdate = o));
    }
    if (r !== null) {
      var b = c.baseState;
      f = 0, S = x = o = null, s = r;
      do {
        var w = s.lane & -536870913, F = w !== s.lane;
        if (F ? (ne & w) === w : (n & w) === w) {
          w !== 0 && w === Sl && (na = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var V = e, Q = s;
            w = t;
            var ge = l;
            switch (Q.tag) {
              case 1:
                if (V = Q.payload, typeof V == "function") {
                  b = V.call(ge, b, w);
                  break e;
                }
                b = V;
                break e;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = Q.payload, w = typeof V == "function" ? V.call(ge, b, w) : V, w == null) break e;
                b = q({}, b, w);
                break e;
              case 2:
                g1 = !0;
            }
          }
          w = s.callback, w !== null && (e.flags |= 64, F && (e.flags |= 8192), F = c.callbacks, F === null ? c.callbacks = [w] : F.push(w));
        } else
          F = {
            lane: w,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, S === null ? (x = S = F, o = b) : S = S.next = F, f |= w;
        if (s = s.next, s === null) {
          if (s = c.shared.pending, s === null)
            break;
          F = s, s = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      S === null && (o = b), c.baseState = o, c.firstBaseUpdate = x, c.lastBaseUpdate = S, r === null && (c.shared.lanes = 0), S1 |= f, e.lanes = f, e.memoizedState = b;
    }
  }
  function X5(e, t) {
    if (typeof e != "function")
      throw Error(p(191, e));
    e.call(t);
  }
  function Z5(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        X5(l[e], t);
  }
  var Bl = z(null), x3 = z(0);
  function K5(e, t) {
    e = c1, C(x3, e), C(Bl, t), c1 = e | t.baseLanes;
  }
  function ca() {
    C(x3, c1), C(Bl, Bl.current);
  }
  function ia() {
    c1 = x3.current, A(Bl), A(x3);
  }
  var gt = z(null), Ct = null;
  function w1(e) {
    var t = e.alternate;
    C(Ne, Ne.current & 1), C(gt, e), Ct === null && (t === null || Bl.current !== null || t.memoizedState !== null) && (Ct = e);
  }
  function ua(e) {
    C(Ne, Ne.current), C(gt, e), Ct === null && (Ct = e);
  }
  function J5(e) {
    e.tag === 22 ? (C(Ne, Ne.current), C(gt, e), Ct === null && (Ct = e)) : y1();
  }
  function y1() {
    C(Ne, Ne.current), C(gt, gt.current);
  }
  function Mt(e) {
    A(gt), Ct === e && (Ct = null), A(Ne);
  }
  var Ne = z(0);
  function w3(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || v4(l) || d4(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var $t = 0, W = null, pe = null, Ge = null, y3 = !1, Tl = !1, I1 = !1, H3 = 0, g2 = 0, Ll = null, Pr = 0;
  function Ce() {
    throw Error(p(321));
  }
  function ra(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!pt(e[l], t[l])) return !1;
    return !0;
  }
  function ha(e, t, l, n, c, r) {
    return $t = r, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? Ln : Ha, I1 = !1, r = l(n, c), I1 = !1, Tl && (r = k5(
      t,
      l,
      n,
      c
    )), W5(e), r;
  }
  function W5(e) {
    B.H = w2;
    var t = pe !== null && pe.next !== null;
    if ($t = 0, Ge = pe = W = null, y3 = !1, g2 = 0, Ll = null, t) throw Error(p(300));
    e === null || Ye || (e = e.dependencies, e !== null && d3(e) && (Ye = !0));
  }
  function k5(e, t, l, n) {
    W = e;
    var c = 0;
    do {
      if (Tl && (Ll = null), g2 = 0, Tl = !1, 25 <= c) throw Error(p(301));
      if (c += 1, Ge = pe = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      B.H = Cn, r = t(l, n);
    } while (Tl);
    return r;
  }
  function eh() {
    var e = B.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? M2(t) : t, e = e.useState()[0], (pe !== null ? pe.memoizedState : null) !== e && (W.flags |= 1024), t;
  }
  function fa() {
    var e = H3 !== 0;
    return H3 = 0, e;
  }
  function ma(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function sa(e) {
    if (y3) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      y3 = !1;
    }
    $t = 0, Ge = pe = W = null, Tl = !1, g2 = H3 = 0, Ll = null;
  }
  function it() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ge === null ? W.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
  }
  function _e() {
    if (pe === null) {
      var e = W.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var t = Ge === null ? W.memoizedState : Ge.next;
    if (t !== null)
      Ge = t, pe = e;
    else {
      if (e === null)
        throw W.alternate === null ? Error(p(467)) : Error(p(310));
      pe = e, e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null
      }, Ge === null ? W.memoizedState = Ge = e : Ge = Ge.next = e;
    }
    return Ge;
  }
  function F3() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function M2(e) {
    var t = g2;
    return g2 += 1, Ll === null && (Ll = []), e = j5(Ll, e, t), t = W, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? Ln : Ha), e;
  }
  function S3(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return M2(e);
      if (e.$$typeof === xe) return Ie(e);
    }
    throw Error(p(438, String(e)));
  }
  function va(e) {
    var t = null, l = W.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = W.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = F3(), W.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ht;
    return t.index++, l;
  }
  function It(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function D3(e) {
    var t = _e();
    return da(t, pe, e);
  }
  function da(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = l;
    var c = e.baseQueue, r = n.pending;
    if (r !== null) {
      if (c !== null) {
        var f = c.next;
        c.next = r.next, r.next = f;
      }
      t.baseQueue = c = r, n.pending = null;
    }
    if (r = e.baseState, c === null) e.memoizedState = r;
    else {
      t = c.next;
      var s = f = null, o = null, x = t, S = !1;
      do {
        var b = x.lane & -536870913;
        if (b !== x.lane ? (ne & b) === b : ($t & b) === b) {
          var w = x.revertLane;
          if (w === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), b === Sl && (S = !0);
          else if (($t & w) === w) {
            x = x.next, w === Sl && (S = !0);
            continue;
          } else
            b = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, o === null ? (s = o = b, f = r) : o = o.next = b, W.lanes |= w, S1 |= w;
          b = x.action, I1 && l(r, b), r = x.hasEagerState ? x.eagerState : l(r, b);
        } else
          w = {
            lane: b,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, o === null ? (s = o = w, f = r) : o = o.next = w, W.lanes |= b, S1 |= b;
        x = x.next;
      } while (x !== null && x !== t);
      if (o === null ? f = r : o.next = s, !pt(r, e.memoizedState) && (Ye = !0, S && (l = Dl, l !== null)))
        throw l;
      e.memoizedState = r, e.baseState = f, e.baseQueue = o, n.lastRenderedState = r;
    }
    return c === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function oa(e) {
    var t = _e(), l = t.queue;
    if (l === null) throw Error(p(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, c = l.pending, r = t.memoizedState;
    if (c !== null) {
      l.pending = null;
      var f = c = c.next;
      do
        r = e(r, f.action), f = f.next;
      while (f !== c);
      pt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
    }
    return [r, n];
  }
  function $5(e, t, l) {
    var n = W, c = _e(), r = ie;
    if (r) {
      if (l === void 0) throw Error(p(407));
      l = l();
    } else l = t();
    var f = !pt(
      (pe || c).memoizedState,
      l
    );
    if (f && (c.memoizedState = l, Ye = !0), c = c.queue, za(en.bind(null, n, c, e), [
      e
    ]), c.getSnapshot !== t || f || Ge !== null && Ge.memoizedState.tag & 1) {
      if (n.flags |= 2048, Cl(
        9,
        { destroy: void 0 },
        P5.bind(
          null,
          n,
          c,
          l,
          t
        ),
        null
      ), ye === null) throw Error(p(349));
      r || ($t & 127) !== 0 || I5(n, t, l);
    }
    return l;
  }
  function I5(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = W.updateQueue, t === null ? (t = F3(), W.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function P5(e, t, l, n) {
    t.value = l, t.getSnapshot = n, tn(t) && ln(e);
  }
  function en(e, t, l) {
    return l(function() {
      tn(t) && ln(e);
    });
  }
  function tn(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !pt(e, l);
    } catch {
      return !0;
    }
  }
  function ln(e) {
    var t = q1(e, 2);
    t !== null && vt(t, e, 2);
  }
  function Ea(e) {
    var t = it();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), I1) {
        s1(!0);
        try {
          l();
        } finally {
          s1(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: It,
      lastRenderedState: e
    }, t;
  }
  function an(e, t, l, n) {
    return e.baseState = l, da(
      e,
      pe,
      typeof n == "function" ? n : It
    );
  }
  function th(e, t, l, n, c) {
    if (B3(e)) throw Error(p(485));
    if (e = t.action, e !== null) {
      var r = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          r.listeners.push(f);
        }
      };
      B.T !== null ? l(!0) : r.isTransition = !1, n(r), l = t.pending, l === null ? (r.next = t.pending = r, nn(t, r)) : (r.next = l.next, t.pending = l.next = r);
    }
  }
  function nn(e, t) {
    var l = t.action, n = t.payload, c = e.state;
    if (t.isTransition) {
      var r = B.T, f = {};
      B.T = f;
      try {
        var s = l(c, n), o = B.S;
        o !== null && o(f, s), cn(e, t, s);
      } catch (x) {
        pa(e, t, x);
      } finally {
        r !== null && f.types !== null && (r.types = f.types), B.T = r;
      }
    } else
      try {
        r = l(c, n), cn(e, t, r);
      } catch (x) {
        pa(e, t, x);
      }
  }
  function cn(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        un(e, t, n);
      },
      function(n) {
        return pa(e, t, n);
      }
    ) : un(e, t, l);
  }
  function un(e, t, l) {
    t.status = "fulfilled", t.value = l, rn(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, nn(e, l)));
  }
  function pa(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, rn(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function rn(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hn(e, t) {
    return t;
  }
  function fn(e, t) {
    if (ie) {
      var l = ye.formState;
      if (l !== null) {
        e: {
          var n = W;
          if (ie) {
            if (be) {
              t: {
                for (var c = be, r = Lt; c.nodeType !== 8; ) {
                  if (!r) {
                    c = null;
                    break t;
                  }
                  if (c = Ot(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                r = c.data, c = r === "F!" || r === "F" ? c : null;
              }
              if (c) {
                be = Ot(
                  c.nextSibling
                ), n = c.data === "F!";
                break e;
              }
            }
            p1(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = it(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hn,
      lastRenderedState: t
    }, l.queue = n, l = An.bind(
      null,
      W,
      n
    ), n.dispatch = l, n = Ea(!1), r = ya.bind(
      null,
      W,
      !1,
      n.queue
    ), n = it(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = c, l = th.bind(
      null,
      W,
      c,
      r,
      l
    ), c.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function mn(e) {
    var t = _e();
    return sn(t, pe, e);
  }
  function sn(e, t, l) {
    if (t = da(
      e,
      t,
      hn
    )[0], e = D3(It)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = M2(t);
      } catch (f) {
        throw f === bl ? p3 : f;
      }
    else n = t;
    t = _e();
    var c = t.queue, r = c.dispatch;
    return l !== t.memoizedState && (W.flags |= 2048, Cl(
      9,
      { destroy: void 0 },
      lh.bind(null, c, l),
      null
    )), [n, r, e];
  }
  function lh(e, t) {
    e.action = t;
  }
  function vn(e) {
    var t = _e(), l = pe;
    if (l !== null)
      return sn(t, l, e);
    _e(), t = t.memoizedState, l = _e();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Cl(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = W.updateQueue, t === null && (t = F3(), W.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function dn() {
    return _e().memoizedState;
  }
  function b3(e, t, l, n) {
    var c = it();
    W.flags |= e, c.memoizedState = Cl(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function A3(e, t, l, n) {
    var c = _e();
    n = n === void 0 ? null : n;
    var r = c.memoizedState.inst;
    pe !== null && n !== null && ra(n, pe.memoizedState.deps) ? c.memoizedState = Cl(t, r, l, n) : (W.flags |= e, c.memoizedState = Cl(
      1 | t,
      r,
      l,
      n
    ));
  }
  function on(e, t) {
    b3(8390656, 8, e, t);
  }
  function za(e, t) {
    A3(2048, 8, e, t);
  }
  function ah(e) {
    W.flags |= 4;
    var t = W.updateQueue;
    if (t === null)
      t = F3(), W.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function En(e) {
    var t = _e().memoizedState;
    return ah({ ref: t, nextImpl: e }), function() {
      if ((me & 2) !== 0) throw Error(p(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function pn(e, t) {
    return A3(4, 2, e, t);
  }
  function zn(e, t) {
    return A3(4, 4, e, t);
  }
  function gn(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Mn(e, t, l) {
    l = l != null ? l.concat([e]) : null, A3(4, 4, gn.bind(null, t, e), l);
  }
  function ga() {
  }
  function xn(e, t) {
    var l = _e();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && ra(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function wn(e, t) {
    var l = _e();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && ra(t, n[1]))
      return n[0];
    if (n = e(), I1) {
      s1(!0);
      try {
        e();
      } finally {
        s1(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Ma(e, t, l) {
    return l === void 0 || ($t & 1073741824) !== 0 && (ne & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = yc(), W.lanes |= e, S1 |= e, l);
  }
  function yn(e, t, l, n) {
    return pt(l, t) ? l : Bl.current !== null ? (e = Ma(e, l, n), pt(e, t) || (Ye = !0), e) : ($t & 42) === 0 || ($t & 1073741824) !== 0 && (ne & 261930) === 0 ? (Ye = !0, e.memoizedState = l) : (e = yc(), W.lanes |= e, S1 |= e, t);
  }
  function Hn(e, t, l, n, c) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var f = B.T, s = {};
    B.T = s, ya(e, !1, t, l);
    try {
      var o = c(), x = B.S;
      if (x !== null && x(s, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var S = Ir(
          o,
          n
        );
        x2(
          e,
          t,
          S,
          yt(e)
        );
      } else
        x2(
          e,
          t,
          n,
          yt(e)
        );
    } catch (b) {
      x2(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: b },
        yt()
      );
    } finally {
      L.p = r, f !== null && s.types !== null && (f.types = s.types), B.T = f;
    }
  }
  function nh() {
  }
  function xa(e, t, l, n) {
    if (e.tag !== 5) throw Error(p(476));
    var c = Fn(e).queue;
    Hn(
      e,
      c,
      t,
      P,
      l === null ? nh : function() {
        return Sn(e), l(n);
      }
    );
  }
  function Fn(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: P
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Sn(e) {
    var t = Fn(e);
    t.next === null && (t = e.alternate.memoizedState), x2(
      e,
      t.next.queue,
      {},
      yt()
    );
  }
  function wa() {
    return Ie(R2);
  }
  function Dn() {
    return _e().memoizedState;
  }
  function bn() {
    return _e().memoizedState;
  }
  function ch(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = yt();
          e = M1(l);
          var n = x1(t, e, l);
          n !== null && (vt(n, t, l), E2(n, t, l)), t = { cache: $0() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ih(e, t, l) {
    var n = yt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, B3(e) ? Bn(t, l) : (l = j0(e, t, l, n), l !== null && (vt(l, e, n), Tn(l, t, n)));
  }
  function An(e, t, l) {
    var n = yt();
    x2(e, t, l, n);
  }
  function x2(e, t, l, n) {
    var c = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (B3(e)) Bn(t, c);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var f = t.lastRenderedState, s = r(f, l);
          if (c.hasEagerState = !0, c.eagerState = s, pt(s, f))
            return f3(e, t, c, 0), ye === null && h3(), !1;
        } catch {
        }
      if (l = j0(e, t, c, n), l !== null)
        return vt(l, e, n), Tn(l, t, n), !0;
    }
    return !1;
  }
  function ya(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: t4(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, B3(e)) {
      if (t) throw Error(p(479));
    } else
      t = j0(
        e,
        l,
        n,
        2
      ), t !== null && vt(t, e, 2);
  }
  function B3(e) {
    var t = e.alternate;
    return e === W || t !== null && t === W;
  }
  function Bn(e, t) {
    Tl = y3 = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Tn(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, V4(e, l);
    }
  }
  var w2 = {
    readContext: Ie,
    use: S3,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useLayoutEffect: Ce,
    useInsertionEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    useHostTransitionStatus: Ce,
    useFormState: Ce,
    useActionState: Ce,
    useOptimistic: Ce,
    useMemoCache: Ce,
    useCacheRefresh: Ce
  };
  w2.useEffectEvent = Ce;
  var Ln = {
    readContext: Ie,
    use: S3,
    useCallback: function(e, t) {
      return it().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ie,
    useEffect: on,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, b3(
        4194308,
        4,
        gn.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return b3(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      b3(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = it();
      t = t === void 0 ? null : t;
      var n = e();
      if (I1) {
        s1(!0);
        try {
          e();
        } finally {
          s1(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = it();
      if (l !== void 0) {
        var c = l(t);
        if (I1) {
          s1(!0);
          try {
            l(t);
          } finally {
            s1(!1);
          }
        }
      } else c = t;
      return n.memoizedState = n.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, n.queue = e, e = e.dispatch = ih.bind(
        null,
        W,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = it();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ea(e);
      var t = e.queue, l = An.bind(null, W, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ga,
    useDeferredValue: function(e, t) {
      var l = it();
      return Ma(l, e, t);
    },
    useTransition: function() {
      var e = Ea(!1);
      return e = Hn.bind(
        null,
        W,
        e.queue,
        !0,
        !1
      ), it().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = W, c = it();
      if (ie) {
        if (l === void 0)
          throw Error(p(407));
        l = l();
      } else {
        if (l = t(), ye === null)
          throw Error(p(349));
        (ne & 127) !== 0 || I5(n, t, l);
      }
      c.memoizedState = l;
      var r = { value: l, getSnapshot: t };
      return c.queue = r, on(en.bind(null, n, r, e), [
        e
      ]), n.flags |= 2048, Cl(
        9,
        { destroy: void 0 },
        P5.bind(
          null,
          n,
          r,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = it(), t = ye.identifierPrefix;
      if (ie) {
        var l = Gt, n = jt;
        l = (n & ~(1 << 32 - Et(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = H3++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Pr++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: wa,
    useFormState: fn,
    useActionState: fn,
    useOptimistic: function(e) {
      var t = it();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = ya.bind(
        null,
        W,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: va,
    useCacheRefresh: function() {
      return it().memoizedState = ch.bind(
        null,
        W
      );
    },
    useEffectEvent: function(e) {
      var t = it(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((me & 2) !== 0)
          throw Error(p(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ha = {
    readContext: Ie,
    use: S3,
    useCallback: xn,
    useContext: Ie,
    useEffect: za,
    useImperativeHandle: Mn,
    useInsertionEffect: pn,
    useLayoutEffect: zn,
    useMemo: wn,
    useReducer: D3,
    useRef: dn,
    useState: function() {
      return D3(It);
    },
    useDebugValue: ga,
    useDeferredValue: function(e, t) {
      var l = _e();
      return yn(
        l,
        pe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = D3(It)[0], t = _e().memoizedState;
      return [
        typeof e == "boolean" ? e : M2(e),
        t
      ];
    },
    useSyncExternalStore: $5,
    useId: Dn,
    useHostTransitionStatus: wa,
    useFormState: mn,
    useActionState: mn,
    useOptimistic: function(e, t) {
      var l = _e();
      return an(l, pe, e, t);
    },
    useMemoCache: va,
    useCacheRefresh: bn
  };
  Ha.useEffectEvent = En;
  var Cn = {
    readContext: Ie,
    use: S3,
    useCallback: xn,
    useContext: Ie,
    useEffect: za,
    useImperativeHandle: Mn,
    useInsertionEffect: pn,
    useLayoutEffect: zn,
    useMemo: wn,
    useReducer: oa,
    useRef: dn,
    useState: function() {
      return oa(It);
    },
    useDebugValue: ga,
    useDeferredValue: function(e, t) {
      var l = _e();
      return pe === null ? Ma(l, e, t) : yn(
        l,
        pe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = oa(It)[0], t = _e().memoizedState;
      return [
        typeof e == "boolean" ? e : M2(e),
        t
      ];
    },
    useSyncExternalStore: $5,
    useId: Dn,
    useHostTransitionStatus: wa,
    useFormState: vn,
    useActionState: vn,
    useOptimistic: function(e, t) {
      var l = _e();
      return pe !== null ? an(l, pe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: va,
    useCacheRefresh: bn
  };
  Cn.useEffectEvent = En;
  function Fa(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : q({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Sa = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = yt(), c = M1(n);
      c.payload = t, l != null && (c.callback = l), t = x1(e, c, n), t !== null && (vt(t, e, n), E2(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = yt(), c = M1(n);
      c.tag = 1, c.payload = t, l != null && (c.callback = l), t = x1(e, c, n), t !== null && (vt(t, e, n), E2(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = yt(), n = M1(l);
      n.tag = 2, t != null && (n.callback = t), t = x1(e, n, l), t !== null && (vt(t, e, l), E2(t, e, l));
    }
  };
  function On(e, t, l, n, c, r, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, f) : t.prototype && t.prototype.isPureReactComponent ? !r2(l, n) || !r2(c, r) : !0;
  }
  function Vn(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Sa.enqueueReplaceState(t, t.state, null);
  }
  function P1(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = q({}, l));
      for (var c in e)
        l[c] === void 0 && (l[c] = e[c]);
    }
    return l;
  }
  function Nn(e) {
    r3(e);
  }
  function _n(e) {
    console.error(e);
  }
  function Rn(e) {
    r3(e);
  }
  function T3(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Un(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Da(e, t, l) {
    return l = M1(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      T3(e, t);
    }, l;
  }
  function jn(e) {
    return e = M1(e), e.tag = 3, e;
  }
  function Gn(e, t, l, n) {
    var c = l.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var r = n.value;
      e.payload = function() {
        return c(r);
      }, e.callback = function() {
        Un(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Un(t, l, n), typeof c != "function" && (D1 === null ? D1 = /* @__PURE__ */ new Set([this]) : D1.add(this));
      var s = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function uh(e, t, l, n, c) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && Fl(
        t,
        l,
        c,
        !0
      ), l = gt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ct === null ? q3() : l.alternate === null && Oe === 0 && (Oe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = c, n === z3 ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Ia(e, n, c)), !1;
          case 22:
            return l.flags |= 65536, n === z3 ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Ia(e, n, c)), !1;
        }
        throw Error(p(435, l.tag));
      }
      return Ia(e, n, c), q3(), !1;
    }
    if (ie)
      return t = gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, n !== Z0 && (e = Error(p(422), { cause: n }), m2(At(e, l)))) : (n !== Z0 && (t = Error(p(423), {
        cause: n
      }), m2(
        At(t, l)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, n = At(n, l), c = Da(
        e.stateNode,
        n,
        c
      ), aa(e, c), Oe !== 4 && (Oe = 2)), !1;
    var r = Error(p(520), { cause: n });
    if (r = At(r, l), B2 === null ? B2 = [r] : B2.push(r), Oe !== 4 && (Oe = 2), t === null) return !0;
    n = At(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = c & -c, l.lanes |= e, e = Da(l.stateNode, n, e), aa(l, e), !1;
        case 1:
          if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (D1 === null || !D1.has(r))))
            return l.flags |= 65536, c &= -c, l.lanes |= c, c = jn(c), Gn(
              c,
              e,
              l,
              n
            ), aa(l, c), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ba = Error(p(461)), Ye = !1;
  function Pe(e, t, l, n) {
    t.child = e === null ? Q5(t, null, l, n) : $1(
      t,
      e.child,
      l,
      n
    );
  }
  function Yn(e, t, l, n, c) {
    l = l.render;
    var r = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var s in n)
        s !== "ref" && (f[s] = n[s]);
    } else f = n;
    return K1(t), n = ha(
      e,
      t,
      l,
      f,
      r,
      c
    ), s = fa(), e !== null && !Ye ? (ma(e, t, c), Pt(e, t, c)) : (ie && s && Q0(t), t.flags |= 1, Pe(e, t, n, c), t.child);
  }
  function qn(e, t, l, n, c) {
    if (e === null) {
      var r = l.type;
      return typeof r == "function" && !G0(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, Qn(
        e,
        t,
        r,
        n,
        c
      )) : (e = s3(
        l.type,
        null,
        n,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !Na(e, c)) {
      var f = r.memoizedProps;
      if (l = l.compare, l = l !== null ? l : r2, l(f, n) && e.ref === t.ref)
        return Pt(e, t, c);
    }
    return t.flags |= 1, e = Kt(r, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qn(e, t, l, n, c) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (r2(r, n) && e.ref === t.ref)
        if (Ye = !1, t.pendingProps = n = r, Na(e, c))
          (e.flags & 131072) !== 0 && (Ye = !0);
        else
          return t.lanes = e.lanes, Pt(e, t, c);
    }
    return Aa(
      e,
      t,
      l,
      n,
      c
    );
  }
  function Xn(e, t, l, n) {
    var c = n.children, r = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, c = 0; n !== null; )
            c = c | n.lanes | n.childLanes, n = n.sibling;
          n = c & ~r;
        } else n = 0, t.child = null;
        return Zn(
          e,
          t,
          r,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && E3(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? K5(t, r) : ca(), J5(t);
      else
        return n = t.lanes = 536870912, Zn(
          e,
          t,
          r !== null ? r.baseLanes | l : l,
          l,
          n
        );
    } else
      r !== null ? (E3(t, r.cachePool), K5(t, r), y1(), t.memoizedState = null) : (e !== null && E3(t, null), ca(), y1());
    return Pe(e, t, c, l), t.child;
  }
  function y2(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Zn(e, t, l, n, c) {
    var r = P0();
    return r = r === null ? null : { parent: je._currentValue, pool: r }, t.memoizedState = {
      baseLanes: l,
      cachePool: r
    }, e !== null && E3(t, null), ca(), J5(t), e !== null && Fl(e, t, n, !0), t.childLanes = c, null;
  }
  function L3(e, t) {
    return t = O3(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Kn(e, t, l) {
    return $1(t, e.child, null, l), e = L3(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function rh(e, t, l) {
    var n = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ie) {
        if (n.mode === "hidden")
          return e = L3(t, n), t.lanes = 536870912, y2(null, e);
        if (ua(t), (e = be) ? (e = ci(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: o1 !== null ? { id: jt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = A5(e), l.return = t, t.child = l, $e = t, be = null)) : e = null, e === null) throw p1(t);
        return t.lanes = 536870912, null;
      }
      return L3(t, n);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if (ua(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Kn(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(p(558));
      else if (Ye || Fl(e, t, l, !1), c = (l & e.childLanes) !== 0, Ye || c) {
        if (n = ye, n !== null && (f = N4(n, l), f !== 0 && f !== r.retryLane))
          throw r.retryLane = f, q1(e, f), vt(n, e, f), ba;
        q3(), t = Kn(
          e,
          t,
          l
        );
      } else
        e = r.treeContext, be = Ot(f.nextSibling), $e = t, ie = !0, E1 = null, Lt = !1, e !== null && L5(t, e), t = L3(t, n), t.flags |= 4096;
      return t;
    }
    return e = Kt(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function C3(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(p(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Aa(e, t, l, n, c) {
    return K1(t), l = ha(
      e,
      t,
      l,
      n,
      void 0,
      c
    ), n = fa(), e !== null && !Ye ? (ma(e, t, c), Pt(e, t, c)) : (ie && n && Q0(t), t.flags |= 1, Pe(e, t, l, c), t.child);
  }
  function Jn(e, t, l, n, c, r) {
    return K1(t), t.updateQueue = null, l = k5(
      t,
      n,
      l,
      c
    ), W5(e), n = fa(), e !== null && !Ye ? (ma(e, t, r), Pt(e, t, r)) : (ie && n && Q0(t), t.flags |= 1, Pe(e, t, l, r), t.child);
  }
  function Wn(e, t, l, n, c) {
    if (K1(t), t.stateNode === null) {
      var r = xl, f = l.contextType;
      typeof f == "object" && f !== null && (r = Ie(f)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sa, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, ta(t), f = l.contextType, r.context = typeof f == "object" && f !== null ? Ie(f) : xl, r.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Fa(
        t,
        l,
        f,
        n
      ), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && Sa.enqueueReplaceState(r, r.state, null), z2(t, n, r, c), p2(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      r = t.stateNode;
      var s = t.memoizedProps, o = P1(l, s);
      r.props = o;
      var x = r.context, S = l.contextType;
      f = xl, typeof S == "object" && S !== null && (f = Ie(S));
      var b = l.getDerivedStateFromProps;
      S = typeof b == "function" || typeof r.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, S || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (s || x !== f) && Vn(
        t,
        r,
        n,
        f
      ), g1 = !1;
      var w = t.memoizedState;
      r.state = w, z2(t, n, r, c), p2(), x = t.memoizedState, s || w !== x || g1 ? (typeof b == "function" && (Fa(
        t,
        l,
        b,
        n
      ), x = t.memoizedState), (o = g1 || On(
        t,
        l,
        o,
        n,
        w,
        x,
        f
      )) ? (S || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = x), r.props = n, r.state = x, r.context = f, n = o) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      r = t.stateNode, la(e, t), f = t.memoizedProps, S = P1(l, f), r.props = S, b = t.pendingProps, w = r.context, x = l.contextType, o = xl, typeof x == "object" && x !== null && (o = Ie(x)), s = l.getDerivedStateFromProps, (x = typeof s == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== b || w !== o) && Vn(
        t,
        r,
        n,
        o
      ), g1 = !1, w = t.memoizedState, r.state = w, z2(t, n, r, c), p2();
      var F = t.memoizedState;
      f !== b || w !== F || g1 || e !== null && e.dependencies !== null && d3(e.dependencies) ? (typeof s == "function" && (Fa(
        t,
        l,
        s,
        n
      ), F = t.memoizedState), (S = g1 || On(
        t,
        l,
        S,
        n,
        w,
        F,
        o
      ) || e !== null && e.dependencies !== null && d3(e.dependencies)) ? (x || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, F, o), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        n,
        F,
        o
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = F), r.props = n, r.state = F, r.context = o, n = S) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return r = n, C3(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = $1(
      t,
      e.child,
      null,
      c
    ), t.child = $1(
      t,
      null,
      l,
      c
    )) : Pe(e, t, l, c), t.memoizedState = r.state, e = t.child) : e = Pt(
      e,
      t,
      c
    ), e;
  }
  function kn(e, t, l, n) {
    return X1(), t.flags |= 256, Pe(e, t, l, n), t.child;
  }
  var Ba = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ta(e) {
    return { baseLanes: e, cachePool: R5() };
  }
  function La(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= wt), e;
  }
  function $n(e, t, l) {
    var n = t.pendingProps, c = !1, r = (t.flags & 128) !== 0, f;
    if ((f = r) || (f = e !== null && e.memoizedState === null ? !1 : (Ne.current & 2) !== 0), f && (c = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ie) {
        if (c ? w1(t) : y1(), (e = be) ? (e = ci(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: o1 !== null ? { id: jt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = A5(e), l.return = t, t.child = l, $e = t, be = null)) : e = null, e === null) throw p1(t);
        return d4(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var s = n.children;
      return n = n.fallback, c ? (y1(), c = t.mode, s = O3(
        { mode: "hidden", children: s },
        c
      ), n = Q1(
        n,
        c,
        l,
        null
      ), s.return = t, n.return = t, s.sibling = n, t.child = s, n = t.child, n.memoizedState = Ta(l), n.childLanes = La(
        e,
        f,
        l
      ), t.memoizedState = Ba, y2(null, n)) : (w1(t), Ca(t, s));
    }
    var o = e.memoizedState;
    if (o !== null && (s = o.dehydrated, s !== null)) {
      if (r)
        t.flags & 256 ? (w1(t), t.flags &= -257, t = Oa(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (y1(), t.child = e.child, t.flags |= 128, t = null) : (y1(), s = n.fallback, c = t.mode, n = O3(
          { mode: "visible", children: n.children },
          c
        ), s = Q1(
          s,
          c,
          l,
          null
        ), s.flags |= 2, n.return = t, s.return = t, n.sibling = s, t.child = n, $1(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = Ta(l), n.childLanes = La(
          e,
          f,
          l
        ), t.memoizedState = Ba, t = y2(null, n));
      else if (w1(t), d4(s)) {
        if (f = s.nextSibling && s.nextSibling.dataset, f) var x = f.dgst;
        f = x, n = Error(p(419)), n.stack = "", n.digest = f, m2({ value: n, source: null, stack: null }), t = Oa(
          e,
          t,
          l
        );
      } else if (Ye || Fl(e, t, l, !1), f = (l & e.childLanes) !== 0, Ye || f) {
        if (f = ye, f !== null && (n = N4(f, l), n !== 0 && n !== o.retryLane))
          throw o.retryLane = n, q1(e, n), vt(f, e, n), ba;
        v4(s) || q3(), t = Oa(
          e,
          t,
          l
        );
      } else
        v4(s) ? (t.flags |= 192, t.child = e.child, t = null) : (e = o.treeContext, be = Ot(
          s.nextSibling
        ), $e = t, ie = !0, E1 = null, Lt = !1, e !== null && L5(t, e), t = Ca(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (y1(), s = n.fallback, c = t.mode, o = e.child, x = o.sibling, n = Kt(o, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = o.subtreeFlags & 65011712, x !== null ? s = Kt(
      x,
      s
    ) : (s = Q1(
      s,
      c,
      l,
      null
    ), s.flags |= 2), s.return = t, n.return = t, n.sibling = s, t.child = n, y2(null, n), n = t.child, s = e.child.memoizedState, s === null ? s = Ta(l) : (c = s.cachePool, c !== null ? (o = je._currentValue, c = c.parent !== o ? { parent: o, pool: o } : c) : c = R5(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: c
    }), n.memoizedState = s, n.childLanes = La(
      e,
      f,
      l
    ), t.memoizedState = Ba, y2(e.child, n)) : (w1(t), l = e.child, e = l.sibling, l = Kt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Ca(e, t) {
    return t = O3(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function O3(e, t) {
    return e = zt(22, e, null, t), e.lanes = 0, e;
  }
  function Oa(e, t, l) {
    return $1(t, e.child, null, l), e = Ca(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function In(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), W0(e.return, t, l);
  }
  function Va(e, t, l, n, c, r) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: c,
      treeForkCount: r
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = l, f.tailMode = c, f.treeForkCount = r);
  }
  function Pn(e, t, l) {
    var n = t.pendingProps, c = n.revealOrder, r = n.tail;
    n = n.children;
    var f = Ne.current, s = (f & 2) !== 0;
    if (s ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, C(Ne, f), Pe(e, t, n, l), n = ie ? f2 : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && In(e, l, t);
        else if (e.tag === 19)
          In(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (c) {
      case "forwards":
        for (l = t.child, c = null; l !== null; )
          e = l.alternate, e !== null && w3(e) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = t.child, t.child = null) : (c = l.sibling, l.sibling = null), Va(
          t,
          !1,
          c,
          l,
          r,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && w3(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = l, l = c, c = e;
        }
        Va(
          t,
          !0,
          l,
          null,
          r,
          n
        );
        break;
      case "together":
        Va(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), S1 |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Fl(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, l = Kt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Kt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Na(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && d3(e)));
  }
  function hh(e, t, l) {
    switch (t.tag) {
      case 3:
        Ue(t, t.stateNode.containerInfo), z1(t, je, e.memoizedState.cache), X1();
        break;
      case 27:
      case 5:
        h1(t);
        break;
      case 4:
        Ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        z1(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ua(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (w1(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? $n(e, t, l) : (w1(t), e = Pt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        w1(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (Fl(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), c) {
          if (n)
            return Pn(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), C(Ne, Ne.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Xn(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        z1(t, je, e.memoizedState.cache);
    }
    return Pt(e, t, l);
  }
  function ec(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ye = !0;
      else {
        if (!Na(e, l) && (t.flags & 128) === 0)
          return Ye = !1, hh(
            e,
            t,
            l
          );
        Ye = (e.flags & 131072) !== 0;
      }
    else
      Ye = !1, ie && (t.flags & 1048576) !== 0 && T5(t, f2, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = W1(t.elementType), t.type = e, typeof e == "function")
            G0(e) ? (n = P1(e, n), t.tag = 1, t = Wn(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = Aa(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === Re) {
                t.tag = 11, t = Yn(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (c === ae) {
                t.tag = 14, t = qn(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = He(e) || e, Error(p(306, t, ""));
          }
        }
        return t;
      case 0:
        return Aa(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, c = P1(
          n,
          t.pendingProps
        ), Wn(
          e,
          t,
          n,
          c,
          l
        );
      case 3:
        e: {
          if (Ue(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(p(387));
          n = t.pendingProps;
          var r = t.memoizedState;
          c = r.element, la(e, t), z2(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, z1(t, je, n), n !== r.cache && k0(
            t,
            [je],
            l,
            !0
          ), p2(), n = f.element, r.isDehydrated)
            if (r = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = kn(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== c) {
              c = At(
                Error(p(424)),
                t
              ), m2(c), t = kn(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, be = Ot(e.firstChild), $e = t, ie = !0, E1 = null, Lt = !0, l = Q5(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (X1(), n === c) {
              t = Pt(
                e,
                t,
                l
              );
              break e;
            }
            Pe(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return C3(e, t), e === null ? (l = mi(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ie || (l = t.type, e = t.pendingProps, n = k3(
          I.current
        ).createElement(l), n[ke] = t, n[ut] = e, et(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = mi(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return h1(t), e === null && ie && (n = t.stateNode = ri(
          t.type,
          t.pendingProps,
          I.current
        ), $e = t, Lt = !0, c = be, T1(t.type) ? (o4 = c, be = Ot(n.firstChild)) : be = c), Pe(
          e,
          t,
          t.pendingProps.children,
          l
        ), C3(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ie && ((c = n = be) && (n = Uh(
          n,
          t.type,
          t.pendingProps,
          Lt
        ), n !== null ? (t.stateNode = n, $e = t, be = Ot(n.firstChild), Lt = !1, c = !0) : c = !1), c || p1(t)), h1(t), c = t.type, r = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = r.children, f4(c, r) ? n = null : f !== null && f4(c, f) && (t.flags |= 32), t.memoizedState !== null && (c = ha(
          e,
          t,
          eh,
          null,
          null,
          l
        ), R2._currentValue = c), C3(e, t), Pe(e, t, n, l), t.child;
      case 6:
        return e === null && ie && ((e = l = be) && (l = jh(
          l,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, $e = t, be = null, e = !0) : e = !1), e || p1(t)), null;
      case 13:
        return $n(e, t, l);
      case 4:
        return Ue(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = $1(
          t,
          null,
          n,
          l
        ) : Pe(e, t, n, l), t.child;
      case 11:
        return Yn(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return Pe(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return Pe(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Pe(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, z1(t, t.type, n.value), Pe(e, t, n.children, l), t.child;
      case 9:
        return c = t.type._context, n = t.pendingProps.children, K1(t), c = Ie(c), n = n(c), t.flags |= 1, Pe(e, t, n, l), t.child;
      case 14:
        return qn(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Qn(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Pn(e, t, l);
      case 31:
        return rh(e, t, l);
      case 22:
        return Xn(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return K1(t), n = Ie(je), e === null ? (c = P0(), c === null && (c = ye, r = $0(), c.pooledCache = r, r.refCount++, r !== null && (c.pooledCacheLanes |= l), c = r), t.memoizedState = { parent: n, cache: c }, ta(t), z1(t, je, c)) : ((e.lanes & l) !== 0 && (la(e, t), z2(t, null, null, l), p2()), c = e.memoizedState, r = t.memoizedState, c.parent !== n ? (c = { parent: n, cache: n }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), z1(t, je, n)) : (n = r.cache, z1(t, je, n), n !== c.cache && k0(
          t,
          [je],
          l,
          !0
        ))), Pe(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(p(156, t.tag));
  }
  function e1(e) {
    e.flags |= 4;
  }
  function _a(e, t, l, n, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Dc()) e.flags |= 8192;
        else
          throw k1 = z3, ea;
    } else e.flags &= -16777217;
  }
  function tc(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ei(t))
      if (Dc()) e.flags |= 8192;
      else
        throw k1 = z3, ea;
  }
  function V3(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? C4() : 536870912, e.lanes |= t, _l |= t);
  }
  function H2(e, t) {
    if (!ie)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var c = e.child; c !== null; )
        l |= c.lanes | c.childLanes, n |= c.subtreeFlags & 65011712, n |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        l |= c.lanes | c.childLanes, n |= c.subtreeFlags, n |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function fh(e, t, l) {
    var n = t.pendingProps;
    switch (X0(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(t), null;
      case 1:
        return Ae(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), kt(je), Fe(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Hl(t) ? e1(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, K0())), Ae(t), null;
      case 26:
        var c = t.type, r = t.memoizedState;
        return e === null ? (e1(t), r !== null ? (Ae(t), tc(t, r)) : (Ae(t), _a(
          t,
          c,
          null,
          n,
          l
        ))) : r ? r !== e.memoizedState ? (e1(t), Ae(t), tc(t, r)) : (Ae(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && e1(t), Ae(t), _a(
          t,
          c,
          e,
          n,
          l
        )), null;
      case 27:
        if (cl(t), l = I.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && e1(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(p(166));
            return Ae(t), null;
          }
          e = R.current, Hl(t) ? C5(t) : (e = ri(c, n, l), t.stateNode = e, e1(t));
        }
        return Ae(t), null;
      case 5:
        if (cl(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && e1(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(p(166));
            return Ae(t), null;
          }
          if (r = R.current, Hl(t))
            C5(t);
          else {
            var f = k3(
              I.current
            );
            switch (r) {
              case 1:
                r = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                r = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    r = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof n.is == "string" ? f.createElement("select", {
                      is: n.is
                    }) : f.createElement("select"), n.multiple ? r.multiple = !0 : n.size && (r.size = n.size);
                    break;
                  default:
                    r = typeof n.is == "string" ? f.createElement(c, { is: n.is }) : f.createElement(c);
                }
            }
            r[ke] = t, r[ut] = n;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = r;
            e: switch (et(r, c, n), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && e1(t);
          }
        }
        return Ae(t), _a(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && e1(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(p(166));
          if (e = I.current, Hl(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, c = $e, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  n = c.memoizedProps;
              }
            e[ke] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || $c(e.nodeValue, l)), e || p1(t, !0);
          } else
            e = k3(e).createTextNode(
              n
            ), e[ke] = t, t.stateNode = e;
        }
        return Ae(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Hl(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(p(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(557));
              e[ke] = t;
            } else
              X1(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), e = !1;
          } else
            l = K0(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(p(558));
        }
        return Ae(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Hl(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(p(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(p(317));
              c[ke] = t;
            } else
              X1(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), c = !1;
          } else
            c = K0(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, c = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (c = n.alternate.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== c && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), V3(t, t.updateQueue), Ae(t), null);
      case 4:
        return Fe(), e === null && c4(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return kt(t.type), Ae(t), null;
      case 19:
        if (A(Ne), n = t.memoizedState, n === null) return Ae(t), null;
        if (c = (t.flags & 128) !== 0, r = n.rendering, r === null)
          if (c) H2(n, !1);
          else {
            if (Oe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = w3(e), r !== null) {
                  for (t.flags |= 128, H2(n, !1), e = r.updateQueue, t.updateQueue = e, V3(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    b5(l, e), l = l.sibling;
                  return C(
                    Ne,
                    Ne.current & 1 | 2
                  ), ie && Jt(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && We() > j3 && (t.flags |= 128, c = !0, H2(n, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = w3(r), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, V3(t, e), H2(n, !0), n.tail === null && n.tailMode === "hidden" && !r.alternate && !ie)
                return Ae(t), null;
            } else
              2 * We() - n.renderingStartTime > j3 && l !== 536870912 && (t.flags |= 128, c = !0, H2(n, !1), t.lanes = 4194304);
          n.isBackwards ? (r.sibling = t.child, t.child = r) : (e = n.last, e !== null ? e.sibling = r : t.child = r, n.last = r);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = We(), e.sibling = null, l = Ne.current, C(
          Ne,
          c ? l & 1 | 2 : l & 1
        ), ie && Jt(t, n.treeForkCount), e) : (Ae(t), null);
      case 22:
      case 23:
        return Mt(t), ia(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), l = t.updateQueue, l !== null && V3(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && A(J1), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), kt(je), Ae(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function mh(e, t) {
    switch (X0(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return kt(je), Fe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return cl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(p(340));
          X1();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(p(340));
          X1();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return A(Ne), null;
      case 4:
        return Fe(), null;
      case 10:
        return kt(t.type), null;
      case 22:
      case 23:
        return Mt(t), ia(), e !== null && A(J1), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return kt(je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lc(e, t) {
    switch (X0(t), t.tag) {
      case 3:
        kt(je), Fe();
        break;
      case 26:
      case 27:
      case 5:
        cl(t);
        break;
      case 4:
        Fe();
        break;
      case 31:
        t.memoizedState !== null && Mt(t);
        break;
      case 13:
        Mt(t);
        break;
      case 19:
        A(Ne);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        Mt(t), ia(), e !== null && A(J1);
        break;
      case 24:
        kt(je);
    }
  }
  function F2(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var c = n.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var r = l.create, f = l.inst;
            n = r(), f.destroy = n;
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (s) {
      oe(t, t.return, s);
    }
  }
  function H1(e, t, l) {
    try {
      var n = t.updateQueue, c = n !== null ? n.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, s = f.destroy;
            if (s !== void 0) {
              f.destroy = void 0, c = t;
              var o = l, x = s;
              try {
                x();
              } catch (S) {
                oe(
                  c,
                  o,
                  S
                );
              }
            }
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (S) {
      oe(t, t.return, S);
    }
  }
  function ac(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Z5(t, l);
      } catch (n) {
        oe(e, e.return, n);
      }
    }
  }
  function nc(e, t, l) {
    l.props = P1(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      oe(e, t, n);
    }
  }
  function S2(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (c) {
      oe(e, t, c);
    }
  }
  function Yt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (c) {
          oe(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (c) {
          oe(e, t, c);
        }
      else l.current = null;
  }
  function cc(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (c) {
      oe(e, e.return, c);
    }
  }
  function Ra(e, t, l) {
    try {
      var n = e.stateNode;
      Ch(n, e.type, l, t), n[ut] = t;
    } catch (c) {
      oe(e, e.return, c);
    }
  }
  function ic(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && T1(e.type) || e.tag === 4;
  }
  function Ua(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ic(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && T1(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ja(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Xt));
    else if (n !== 4 && (n === 27 && T1(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (ja(e, t, l), e = e.sibling; e !== null; )
        ja(e, t, l), e = e.sibling;
  }
  function N3(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && T1(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (N3(e, t, l), e = e.sibling; e !== null; )
        N3(e, t, l), e = e.sibling;
  }
  function uc(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      et(t, n, l), t[ke] = e, t[ut] = l;
    } catch (r) {
      oe(e, e.return, r);
    }
  }
  var t1 = !1, qe = !1, Ga = !1, rc = typeof WeakSet == "function" ? WeakSet : Set, Je = null;
  function sh(e, t) {
    if (e = e.containerInfo, r4 = a0, e = g5(e), O0(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var c = n.anchorOffset, r = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, r.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, s = -1, o = -1, x = 0, S = 0, b = e, w = null;
            t: for (; ; ) {
              for (var F; b !== l || c !== 0 && b.nodeType !== 3 || (s = f + c), b !== r || n !== 0 && b.nodeType !== 3 || (o = f + n), b.nodeType === 3 && (f += b.nodeValue.length), (F = b.firstChild) !== null; )
                w = b, b = F;
              for (; ; ) {
                if (b === e) break t;
                if (w === l && ++x === c && (s = f), w === r && ++S === n && (o = f), (F = b.nextSibling) !== null) break;
                b = w, w = b.parentNode;
              }
              b = F;
            }
            l = s === -1 || o === -1 ? null : { start: s, end: o };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (h4 = { focusedElem: e, selectionRange: l }, a0 = !1, Je = t; Je !== null; )
      if (t = Je, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Je = e;
      else
        for (; Je !== null; ) {
          switch (t = Je, r = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  c = e[l], c.ref.impl = c.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                e = void 0, l = t, c = r.memoizedProps, r = r.memoizedState, n = l.stateNode;
                try {
                  var V = P1(
                    l.type,
                    c
                  );
                  e = n.getSnapshotBeforeUpdate(
                    V,
                    r
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Q) {
                  oe(
                    l,
                    l.return,
                    Q
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  s4(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      s4(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(p(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Je = e;
            break;
          }
          Je = t.return;
        }
  }
  function hc(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        a1(e, l), n & 4 && F2(5, l);
        break;
      case 1:
        if (a1(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              oe(l, l.return, f);
            }
          else {
            var c = P1(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              oe(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && ac(l), n & 512 && S2(l, l.return);
        break;
      case 3:
        if (a1(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Z5(e, t);
          } catch (f) {
            oe(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && uc(l);
      case 26:
      case 5:
        a1(e, l), t === null && n & 4 && cc(l), n & 512 && S2(l, l.return);
        break;
      case 12:
        a1(e, l);
        break;
      case 31:
        a1(e, l), n & 4 && sc(e, l);
        break;
      case 13:
        a1(e, l), n & 4 && vc(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = xh.bind(
          null,
          l
        ), Gh(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || t1, !n) {
          t = t !== null && t.memoizedState !== null || qe, c = t1;
          var r = qe;
          t1 = n, (qe = t) && !r ? n1(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : a1(e, l), t1 = c, qe = r;
        }
        break;
      case 30:
        break;
      default:
        a1(e, l);
    }
  }
  function fc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && p0(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Te = null, ht = !1;
  function l1(e, t, l) {
    for (l = l.child; l !== null; )
      mc(e, t, l), l = l.sibling;
  }
  function mc(e, t, l) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(kl, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        qe || Yt(l, t), l1(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        qe || Yt(l, t);
        var n = Te, c = ht;
        T1(l.type) && (Te = l.stateNode, ht = !1), l1(
          e,
          t,
          l
        ), V2(l.stateNode), Te = n, ht = c;
        break;
      case 5:
        qe || Yt(l, t);
      case 6:
        if (n = Te, c = ht, Te = null, l1(
          e,
          t,
          l
        ), Te = n, ht = c, Te !== null)
          if (ht)
            try {
              (Te.nodeType === 9 ? Te.body : Te.nodeName === "HTML" ? Te.ownerDocument.body : Te).removeChild(l.stateNode);
            } catch (r) {
              oe(
                l,
                t,
                r
              );
            }
          else
            try {
              Te.removeChild(l.stateNode);
            } catch (r) {
              oe(
                l,
                t,
                r
              );
            }
        break;
      case 18:
        Te !== null && (ht ? (e = Te, ai(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Xl(e)) : ai(Te, l.stateNode));
        break;
      case 4:
        n = Te, c = ht, Te = l.stateNode.containerInfo, ht = !0, l1(
          e,
          t,
          l
        ), Te = n, ht = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        H1(2, l, t), qe || H1(4, l, t), l1(
          e,
          t,
          l
        );
        break;
      case 1:
        qe || (Yt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && nc(
          l,
          t,
          n
        )), l1(
          e,
          t,
          l
        );
        break;
      case 21:
        l1(
          e,
          t,
          l
        );
        break;
      case 22:
        qe = (n = qe) || l.memoizedState !== null, l1(
          e,
          t,
          l
        ), qe = n;
        break;
      default:
        l1(
          e,
          t,
          l
        );
    }
  }
  function sc(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Xl(e);
      } catch (l) {
        oe(t, t.return, l);
      }
    }
  }
  function vc(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Xl(e);
      } catch (l) {
        oe(t, t.return, l);
      }
  }
  function vh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new rc()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rc()), t;
      default:
        throw Error(p(435, e.tag));
    }
  }
  function _3(e, t) {
    var l = vh(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var c = wh.bind(null, e, n);
        n.then(c, c);
      }
    });
  }
  function ft(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var c = l[n], r = e, f = t, s = f;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (T1(s.type)) {
                Te = s.stateNode, ht = !1;
                break e;
              }
              break;
            case 5:
              Te = s.stateNode, ht = !1;
              break e;
            case 3:
            case 4:
              Te = s.stateNode.containerInfo, ht = !0;
              break e;
          }
          s = s.return;
        }
        if (Te === null) throw Error(p(160));
        mc(r, f, c), Te = null, ht = !1, r = c.alternate, r !== null && (r.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        dc(t, e), t = t.sibling;
  }
  var Rt = null;
  function dc(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, e), mt(e), n & 4 && (H1(3, e, e.return), F2(3, e), H1(5, e, e.return));
        break;
      case 1:
        ft(t, e), mt(e), n & 512 && (qe || l === null || Yt(l, l.return)), n & 64 && t1 && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var c = Rt;
        if (ft(t, e), mt(e), n & 512 && (qe || l === null || Yt(l, l.return)), n & 4) {
          var r = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (n) {
                    case "title":
                      r = c.getElementsByTagName("title")[0], (!r || r[Pl] || r[ke] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = c.createElement(n), c.head.insertBefore(
                        r,
                        c.querySelector("head > title")
                      )), et(r, n, l), r[ke] = e, Ke(r), n = r;
                      break e;
                    case "link":
                      var f = di(
                        "link",
                        "href",
                        c
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var s = 0; s < f.length; s++)
                          if (r = f[s], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(s, 1);
                            break t;
                          }
                      }
                      r = c.createElement(n), et(r, n, l), c.head.appendChild(r);
                      break;
                    case "meta":
                      if (f = di(
                        "meta",
                        "content",
                        c
                      ).get(n + (l.content || ""))) {
                        for (s = 0; s < f.length; s++)
                          if (r = f[s], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(s, 1);
                            break t;
                          }
                      }
                      r = c.createElement(n), et(r, n, l), c.head.appendChild(r);
                      break;
                    default:
                      throw Error(p(468, n));
                  }
                  r[ke] = e, Ke(r), n = r;
                }
                e.stateNode = n;
              } else
                oi(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = vi(
                c,
                n,
                e.memoizedProps
              );
          else
            r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? oi(
              c,
              e.type,
              e.stateNode
            ) : vi(
              c,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Ra(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ft(t, e), mt(e), n & 512 && (qe || l === null || Yt(l, l.return)), l !== null && n & 4 && Ra(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ft(t, e), mt(e), n & 512 && (qe || l === null || Yt(l, l.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            dl(c, "");
          } catch (V) {
            oe(e, e.return, V);
          }
        }
        n & 4 && e.stateNode != null && (c = e.memoizedProps, Ra(
          e,
          c,
          l !== null ? l.memoizedProps : c
        )), n & 1024 && (Ga = !0);
        break;
      case 6:
        if (ft(t, e), mt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(p(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (V) {
            oe(e, e.return, V);
          }
        }
        break;
      case 3:
        if (P3 = null, c = Rt, Rt = $3(t.containerInfo), ft(t, e), Rt = c, mt(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Xl(t.containerInfo);
          } catch (V) {
            oe(e, e.return, V);
          }
        Ga && (Ga = !1, oc(e));
        break;
      case 4:
        n = Rt, Rt = $3(
          e.stateNode.containerInfo
        ), ft(t, e), mt(e), Rt = n;
        break;
      case 12:
        ft(t, e), mt(e);
        break;
      case 31:
        ft(t, e), mt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _3(e, n)));
        break;
      case 13:
        ft(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (U3 = We()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _3(e, n)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var o = l !== null && l.memoizedState !== null, x = t1, S = qe;
        if (t1 = x || c, qe = S || o, ft(t, e), qe = S, t1 = x, mt(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (l === null || o || t1 || qe || el(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                o = l = t;
                try {
                  if (r = o.stateNode, c)
                    f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    s = o.stateNode;
                    var b = o.memoizedProps.style, w = b != null && b.hasOwnProperty("display") ? b.display : null;
                    s.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (V) {
                  oe(o, o.return, V);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = c ? "" : o.memoizedProps;
                } catch (V) {
                  oe(o, o.return, V);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                o = t;
                try {
                  var F = o.stateNode;
                  c ? ni(F, !0) : ni(o.stateNode, !1);
                } catch (V) {
                  oe(o, o.return, V);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, _3(e, l))));
        break;
      case 19:
        ft(t, e), mt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _3(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, e), mt(e);
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (ic(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(p(160));
        switch (l.tag) {
          case 27:
            var c = l.stateNode, r = Ua(e);
            N3(e, r, c);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (dl(f, ""), l.flags &= -33);
            var s = Ua(e);
            N3(e, s, f);
            break;
          case 3:
          case 4:
            var o = l.stateNode.containerInfo, x = Ua(e);
            ja(
              e,
              x,
              o
            );
            break;
          default:
            throw Error(p(161));
        }
      } catch (S) {
        oe(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function oc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        oc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function a1(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        hc(e, t.alternate, t), t = t.sibling;
  }
  function el(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          H1(4, t, t.return), el(t);
          break;
        case 1:
          Yt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && nc(
            t,
            t.return,
            l
          ), el(t);
          break;
        case 27:
          V2(t.stateNode);
        case 26:
        case 5:
          Yt(t, t.return), el(t);
          break;
        case 22:
          t.memoizedState === null && el(t);
          break;
        case 30:
          el(t);
          break;
        default:
          el(t);
      }
      e = e.sibling;
    }
  }
  function n1(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, c = e, r = t, f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          n1(
            c,
            r,
            l
          ), F2(4, r);
          break;
        case 1:
          if (n1(
            c,
            r,
            l
          ), n = r, c = n.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (x) {
              oe(n, n.return, x);
            }
          if (n = r, c = n.updateQueue, c !== null) {
            var s = n.stateNode;
            try {
              var o = c.shared.hiddenCallbacks;
              if (o !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < o.length; c++)
                  X5(o[c], s);
            } catch (x) {
              oe(n, n.return, x);
            }
          }
          l && f & 64 && ac(r), S2(r, r.return);
          break;
        case 27:
          uc(r);
        case 26:
        case 5:
          n1(
            c,
            r,
            l
          ), l && n === null && f & 4 && cc(r), S2(r, r.return);
          break;
        case 12:
          n1(
            c,
            r,
            l
          );
          break;
        case 31:
          n1(
            c,
            r,
            l
          ), l && f & 4 && sc(c, r);
          break;
        case 13:
          n1(
            c,
            r,
            l
          ), l && f & 4 && vc(c, r);
          break;
        case 22:
          r.memoizedState === null && n1(
            c,
            r,
            l
          ), S2(r, r.return);
          break;
        case 30:
          break;
        default:
          n1(
            c,
            r,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ya(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && s2(l));
  }
  function qa(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && s2(e));
  }
  function Ut(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ec(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Ec(e, t, l, n) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ut(
          e,
          t,
          l,
          n
        ), c & 2048 && F2(9, t);
        break;
      case 1:
        Ut(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Ut(
          e,
          t,
          l,
          n
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && s2(e)));
        break;
      case 12:
        if (c & 2048) {
          Ut(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var r = t.memoizedProps, f = r.id, s = r.onPostCommit;
            typeof s == "function" && s(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (o) {
            oe(t, t.return, o);
          }
        } else
          Ut(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Ut(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Ut(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, f = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? Ut(
          e,
          t,
          l,
          n
        ) : D2(e, t) : r._visibility & 2 ? Ut(
          e,
          t,
          l,
          n
        ) : (r._visibility |= 2, Ol(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && Ya(f, t);
        break;
      case 24:
        Ut(
          e,
          t,
          l,
          n
        ), c & 2048 && qa(t.alternate, t);
        break;
      default:
        Ut(
          e,
          t,
          l,
          n
        );
    }
  }
  function Ol(e, t, l, n, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, f = t, s = l, o = n, x = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ol(
            r,
            f,
            s,
            o,
            c
          ), F2(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? Ol(
            r,
            f,
            s,
            o,
            c
          ) : D2(
            r,
            f
          ) : (S._visibility |= 2, Ol(
            r,
            f,
            s,
            o,
            c
          )), c && x & 2048 && Ya(
            f.alternate,
            f
          );
          break;
        case 24:
          Ol(
            r,
            f,
            s,
            o,
            c
          ), c && x & 2048 && qa(f.alternate, f);
          break;
        default:
          Ol(
            r,
            f,
            s,
            o,
            c
          );
      }
      t = t.sibling;
    }
  }
  function D2(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, c = n.flags;
        switch (n.tag) {
          case 22:
            D2(l, n), c & 2048 && Ya(
              n.alternate,
              n
            );
            break;
          case 24:
            D2(l, n), c & 2048 && qa(n.alternate, n);
            break;
          default:
            D2(l, n);
        }
        t = t.sibling;
      }
  }
  var b2 = 8192;
  function Vl(e, t, l) {
    if (e.subtreeFlags & b2)
      for (e = e.child; e !== null; )
        pc(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function pc(e, t, l) {
    switch (e.tag) {
      case 26:
        Vl(
          e,
          t,
          l
        ), e.flags & b2 && e.memoizedState !== null && Ph(
          l,
          Rt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Vl(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Rt;
        Rt = $3(e.stateNode.containerInfo), Vl(
          e,
          t,
          l
        ), Rt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = b2, b2 = 16777216, Vl(
          e,
          t,
          l
        ), b2 = n) : Vl(
          e,
          t,
          l
        ));
        break;
      default:
        Vl(
          e,
          t,
          l
        );
    }
  }
  function zc(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function A2(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Je = n, Mc(
            n,
            e
          );
        }
      zc(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        gc(e), e = e.sibling;
  }
  function gc(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        A2(e), e.flags & 2048 && H1(9, e, e.return);
        break;
      case 3:
        A2(e);
        break;
      case 12:
        A2(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, R3(e)) : A2(e);
        break;
      default:
        A2(e);
    }
  }
  function R3(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Je = n, Mc(
            n,
            e
          );
        }
      zc(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          H1(8, t, t.return), R3(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, R3(t));
          break;
        default:
          R3(t);
      }
      e = e.sibling;
    }
  }
  function Mc(e, t) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          H1(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          s2(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Je = n;
      else
        e: for (l = e; Je !== null; ) {
          n = Je;
          var c = n.sibling, r = n.return;
          if (fc(n), n === l) {
            Je = null;
            break e;
          }
          if (c !== null) {
            c.return = r, Je = c;
            break e;
          }
          Je = r;
        }
    }
  }
  var dh = {
    getCacheForType: function(e) {
      var t = Ie(je), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Ie(je).controller.signal;
    }
  }, oh = typeof WeakMap == "function" ? WeakMap : Map, me = 0, ye = null, ee = null, ne = 0, de = 0, xt = null, F1 = !1, Nl = !1, Qa = !1, c1 = 0, Oe = 0, S1 = 0, tl = 0, Xa = 0, wt = 0, _l = 0, B2 = null, st = null, Za = !1, U3 = 0, xc = 0, j3 = 1 / 0, G3 = null, D1 = null, Xe = 0, b1 = null, Rl = null, i1 = 0, Ka = 0, Ja = null, wc = null, T2 = 0, Wa = null;
  function yt() {
    return (me & 2) !== 0 && ne !== 0 ? ne & -ne : B.T !== null ? t4() : _4();
  }
  function yc() {
    if (wt === 0)
      if ((ne & 536870912) === 0 || ie) {
        var e = W2;
        W2 <<= 1, (W2 & 3932160) === 0 && (W2 = 262144), wt = e;
      } else wt = 536870912;
    return e = gt.current, e !== null && (e.flags |= 32), wt;
  }
  function vt(e, t, l) {
    (e === ye && (de === 2 || de === 9) || e.cancelPendingCommit !== null) && (Ul(e, 0), A1(
      e,
      ne,
      wt,
      !1
    )), Il(e, l), ((me & 2) === 0 || e !== ye) && (e === ye && ((me & 2) === 0 && (tl |= l), Oe === 4 && A1(
      e,
      ne,
      wt,
      !1
    )), qt(e));
  }
  function Hc(e, t, l) {
    if ((me & 6) !== 0) throw Error(p(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || $l(e, t), c = n ? zh(e, t) : $a(e, t, !0), r = n;
    do {
      if (c === 0) {
        Nl && !n && A1(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, r && !Eh(l)) {
          c = $a(e, t, !1), r = !1;
          continue;
        }
        if (c === 2) {
          if (r = t, e.errorRecoveryDisabledLanes & r)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var s = e;
              c = B2;
              var o = s.current.memoizedState.isDehydrated;
              if (o && (Ul(s, f).flags |= 256), f = $a(
                s,
                f,
                !1
              ), f !== 2) {
                if (Qa && !o) {
                  s.errorRecoveryDisabledLanes |= r, tl |= r, c = 4;
                  break e;
                }
                r = st, st = c, r !== null && (st === null ? st = r : st.push.apply(
                  st,
                  r
                ));
              }
              c = f;
            }
            if (r = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Ul(e, 0), A1(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, r = c, r) {
            case 0:
            case 1:
              throw Error(p(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              A1(
                n,
                t,
                wt,
                !F1
              );
              break e;
            case 2:
              st = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(p(329));
          }
          if ((t & 62914560) === t && (c = U3 + 300 - We(), 10 < c)) {
            if (A1(
              n,
              t,
              wt,
              !F1
            ), $2(n, 0, !0) !== 0) break e;
            i1 = t, n.timeoutHandle = ti(
              Fc.bind(
                null,
                n,
                l,
                st,
                G3,
                Za,
                t,
                wt,
                tl,
                _l,
                F1,
                r,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          Fc(
            n,
            l,
            st,
            G3,
            Za,
            t,
            wt,
            tl,
            _l,
            F1,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qt(e);
  }
  function Fc(e, t, l, n, c, r, f, s, o, x, S, b, w, F) {
    if (e.timeoutHandle = -1, b = t.subtreeFlags, b & 8192 || (b & 16785408) === 16785408) {
      b = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xt
      }, pc(
        t,
        r,
        b
      );
      var V = (r & 62914560) === r ? U3 - We() : (r & 4194048) === r ? xc - We() : 0;
      if (V = ef(
        b,
        V
      ), V !== null) {
        i1 = r, e.cancelPendingCommit = V(
          Cc.bind(
            null,
            e,
            t,
            r,
            l,
            n,
            c,
            f,
            s,
            o,
            S,
            b,
            null,
            w,
            F
          )
        ), A1(e, r, f, !x);
        return;
      }
    }
    Cc(
      e,
      t,
      r,
      l,
      n,
      c,
      f,
      s,
      o
    );
  }
  function Eh(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var c = l[n], r = c.getSnapshot;
          c = c.value;
          try {
            if (!pt(r(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function A1(e, t, l, n) {
    t &= ~Xa, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var r = 31 - Et(c), f = 1 << r;
      n[r] = -1, c &= ~f;
    }
    l !== 0 && O4(e, l, t);
  }
  function Y3() {
    return (me & 6) === 0 ? (L2(0), !1) : !0;
  }
  function ka() {
    if (ee !== null) {
      if (de === 0)
        var e = ee.return;
      else
        e = ee, Wt = Z1 = null, sa(e), Al = null, d2 = 0, e = ee;
      for (; e !== null; )
        lc(e.alternate, e), e = e.return;
      ee = null;
    }
  }
  function Ul(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Nh(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), i1 = 0, ka(), ye = e, ee = l = Kt(e.current, null), ne = t, de = 0, xt = null, F1 = !1, Nl = $l(e, t), Qa = !1, _l = wt = Xa = tl = S1 = Oe = 0, st = B2 = null, Za = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var c = 31 - Et(n), r = 1 << c;
        t |= e[c], n &= ~r;
      }
    return c1 = t, h3(), l;
  }
  function Sc(e, t) {
    W = null, B.H = w2, t === bl || t === p3 ? (t = G5(), de = 3) : t === ea ? (t = G5(), de = 4) : de = t === ba ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, ee === null && (Oe = 1, T3(
      e,
      At(t, e.current)
    ));
  }
  function Dc() {
    var e = gt.current;
    return e === null ? !0 : (ne & 4194048) === ne ? Ct === null : (ne & 62914560) === ne || (ne & 536870912) !== 0 ? e === Ct : !1;
  }
  function bc() {
    var e = B.H;
    return B.H = w2, e === null ? w2 : e;
  }
  function Ac() {
    var e = B.A;
    return B.A = dh, e;
  }
  function q3() {
    Oe = 4, F1 || (ne & 4194048) !== ne && gt.current !== null || (Nl = !0), (S1 & 134217727) === 0 && (tl & 134217727) === 0 || ye === null || A1(
      ye,
      ne,
      wt,
      !1
    );
  }
  function $a(e, t, l) {
    var n = me;
    me |= 2;
    var c = bc(), r = Ac();
    (ye !== e || ne !== t) && (G3 = null, Ul(e, t)), t = !1;
    var f = Oe;
    e: do
      try {
        if (de !== 0 && ee !== null) {
          var s = ee, o = xt;
          switch (de) {
            case 8:
              ka(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var x = de;
              if (de = 0, xt = null, jl(e, s, o, x), l && Nl) {
                f = 0;
                break e;
              }
              break;
            default:
              x = de, de = 0, xt = null, jl(e, s, o, x);
          }
        }
        ph(), f = Oe;
        break;
      } catch (S) {
        Sc(e, S);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Wt = Z1 = null, me = n, B.H = c, B.A = r, ee === null && (ye = null, ne = 0, h3()), f;
  }
  function ph() {
    for (; ee !== null; ) Bc(ee);
  }
  function zh(e, t) {
    var l = me;
    me |= 2;
    var n = bc(), c = Ac();
    ye !== e || ne !== t ? (G3 = null, j3 = We() + 500, Ul(e, t)) : Nl = $l(
      e,
      t
    );
    e: do
      try {
        if (de !== 0 && ee !== null) {
          t = ee;
          var r = xt;
          t: switch (de) {
            case 1:
              de = 0, xt = null, jl(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (U5(r)) {
                de = 0, xt = null, Tc(t);
                break;
              }
              t = function() {
                de !== 2 && de !== 9 || ye !== e || (de = 7), qt(e);
              }, r.then(t, t);
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              U5(r) ? (de = 0, xt = null, Tc(t)) : (de = 0, xt = null, jl(e, t, r, 7));
              break;
            case 5:
              var f = null;
              switch (ee.tag) {
                case 26:
                  f = ee.memoizedState;
                case 5:
                case 27:
                  var s = ee;
                  if (f ? Ei(f) : s.stateNode.complete) {
                    de = 0, xt = null;
                    var o = s.sibling;
                    if (o !== null) ee = o;
                    else {
                      var x = s.return;
                      x !== null ? (ee = x, Q3(x)) : ee = null;
                    }
                    break t;
                  }
              }
              de = 0, xt = null, jl(e, t, r, 5);
              break;
            case 6:
              de = 0, xt = null, jl(e, t, r, 6);
              break;
            case 8:
              ka(), Oe = 6;
              break e;
            default:
              throw Error(p(462));
          }
        }
        gh();
        break;
      } catch (S) {
        Sc(e, S);
      }
    while (!0);
    return Wt = Z1 = null, B.H = n, B.A = c, me = l, ee !== null ? 0 : (ye = null, ne = 0, h3(), Oe);
  }
  function gh() {
    for (; ee !== null && !Le(); )
      Bc(ee);
  }
  function Bc(e) {
    var t = ec(e.alternate, e, c1);
    e.memoizedProps = e.pendingProps, t === null ? Q3(e) : ee = t;
  }
  function Tc(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jn(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ne
        );
        break;
      case 11:
        t = Jn(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ne
        );
        break;
      case 5:
        sa(t);
      default:
        lc(l, t), t = ee = b5(t, c1), t = ec(l, t, c1);
    }
    e.memoizedProps = e.pendingProps, t === null ? Q3(e) : ee = t;
  }
  function jl(e, t, l, n) {
    Wt = Z1 = null, sa(t), Al = null, d2 = 0;
    var c = t.return;
    try {
      if (uh(
        e,
        c,
        t,
        l,
        ne
      )) {
        Oe = 1, T3(
          e,
          At(l, e.current)
        ), ee = null;
        return;
      }
    } catch (r) {
      if (c !== null) throw ee = c, r;
      Oe = 1, T3(
        e,
        At(l, e.current)
      ), ee = null;
      return;
    }
    t.flags & 32768 ? (ie || n === 1 ? e = !0 : Nl || (ne & 536870912) !== 0 ? e = !1 : (F1 = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = gt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Lc(t, e)) : Q3(t);
  }
  function Q3(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Lc(
          t,
          F1
        );
        return;
      }
      e = t.return;
      var l = fh(
        t.alternate,
        t,
        c1
      );
      if (l !== null) {
        ee = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ee = t;
        return;
      }
      ee = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function Lc(e, t) {
    do {
      var l = mh(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ee = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ee = e;
        return;
      }
      ee = e = l;
    } while (e !== null);
    Oe = 6, ee = null;
  }
  function Cc(e, t, l, n, c, r, f, s, o) {
    e.cancelPendingCommit = null;
    do
      X3();
    while (Xe !== 0);
    if ((me & 6) !== 0) throw Error(p(327));
    if (t !== null) {
      if (t === e.current) throw Error(p(177));
      if (r = t.lanes | t.childLanes, r |= U0, I9(
        e,
        l,
        r,
        f,
        s,
        o
      ), e === ye && (ee = ye = null, ne = 0), Rl = t, b1 = e, i1 = l, Ka = r, Ja = c, wc = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yh(ul, function() {
        return Rc(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = B.T, B.T = null, c = L.p, L.p = 2, f = me, me |= 4;
        try {
          sh(e, t, l);
        } finally {
          me = f, L.p = c, B.T = n;
        }
      }
      Xe = 1, Oc(), Vc(), Nc();
    }
  }
  function Oc() {
    if (Xe === 1) {
      Xe = 0;
      var e = b1, t = Rl, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null;
        var n = L.p;
        L.p = 2;
        var c = me;
        me |= 4;
        try {
          dc(t, e);
          var r = h4, f = g5(e.containerInfo), s = r.focusedElem, o = r.selectionRange;
          if (f !== s && s && s.ownerDocument && z5(
            s.ownerDocument.documentElement,
            s
          )) {
            if (o !== null && O0(s)) {
              var x = o.start, S = o.end;
              if (S === void 0 && (S = x), "selectionStart" in s)
                s.selectionStart = x, s.selectionEnd = Math.min(
                  S,
                  s.value.length
                );
              else {
                var b = s.ownerDocument || document, w = b && b.defaultView || window;
                if (w.getSelection) {
                  var F = w.getSelection(), V = s.textContent.length, Q = Math.min(o.start, V), ge = o.end === void 0 ? Q : Math.min(o.end, V);
                  !F.extend && Q > ge && (f = ge, ge = Q, Q = f);
                  var g = p5(
                    s,
                    Q
                  ), E = p5(
                    s,
                    ge
                  );
                  if (g && E && (F.rangeCount !== 1 || F.anchorNode !== g.node || F.anchorOffset !== g.offset || F.focusNode !== E.node || F.focusOffset !== E.offset)) {
                    var M = b.createRange();
                    M.setStart(g.node, g.offset), F.removeAllRanges(), Q > ge ? (F.addRange(M), F.extend(E.node, E.offset)) : (M.setEnd(E.node, E.offset), F.addRange(M));
                  }
                }
              }
            }
            for (b = [], F = s; F = F.parentNode; )
              F.nodeType === 1 && b.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < b.length; s++) {
              var D = b[s];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          a0 = !!r4, h4 = r4 = null;
        } finally {
          me = c, L.p = n, B.T = l;
        }
      }
      e.current = t, Xe = 2;
    }
  }
  function Vc() {
    if (Xe === 2) {
      Xe = 0;
      var e = b1, t = Rl, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = B.T, B.T = null;
        var n = L.p;
        L.p = 2;
        var c = me;
        me |= 4;
        try {
          hc(e, t.alternate, t);
        } finally {
          me = c, L.p = n, B.T = l;
        }
      }
      Xe = 3;
    }
  }
  function Nc() {
    if (Xe === 4 || Xe === 3) {
      Xe = 0, ct();
      var e = b1, t = Rl, l = i1, n = wc;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xe = 5 : (Xe = 0, Rl = b1 = null, _c(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (D1 = null), o0(l), t = t.stateNode, ot && typeof ot.onCommitFiberRoot == "function")
        try {
          ot.onCommitFiberRoot(
            kl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = B.T, c = L.p, L.p = 2, B.T = null;
        try {
          for (var r = e.onRecoverableError, f = 0; f < n.length; f++) {
            var s = n[f];
            r(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          B.T = t, L.p = c;
        }
      }
      (i1 & 3) !== 0 && X3(), qt(e), c = e.pendingLanes, (l & 261930) !== 0 && (c & 42) !== 0 ? e === Wa ? T2++ : (T2 = 0, Wa = e) : T2 = 0, L2(0);
    }
  }
  function _c(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, s2(t)));
  }
  function X3() {
    return Oc(), Vc(), Nc(), Rc();
  }
  function Rc() {
    if (Xe !== 5) return !1;
    var e = b1, t = Ka;
    Ka = 0;
    var l = o0(i1), n = B.T, c = L.p;
    try {
      L.p = 32 > l ? 32 : l, B.T = null, l = Ja, Ja = null;
      var r = b1, f = i1;
      if (Xe = 0, Rl = b1 = null, i1 = 0, (me & 6) !== 0) throw Error(p(331));
      var s = me;
      if (me |= 4, gc(r.current), Ec(
        r,
        r.current,
        f,
        l
      ), me = s, L2(0, !1), ot && typeof ot.onPostCommitFiberRoot == "function")
        try {
          ot.onPostCommitFiberRoot(kl, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = c, B.T = n, _c(e, t);
    }
  }
  function Uc(e, t, l) {
    t = At(l, t), t = Da(e.stateNode, t, 2), e = x1(e, t, 2), e !== null && (Il(e, 2), qt(e));
  }
  function oe(e, t, l) {
    if (e.tag === 3)
      Uc(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Uc(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (D1 === null || !D1.has(n))) {
            e = At(l, e), l = jn(2), n = x1(t, l, 2), n !== null && (Gn(
              l,
              n,
              t,
              e
            ), Il(n, 2), qt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ia(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new oh();
      var c = /* @__PURE__ */ new Set();
      n.set(t, c);
    } else
      c = n.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), n.set(t, c));
    c.has(l) || (Qa = !0, c.add(l), e = Mh.bind(null, e, t, l), t.then(e, e));
  }
  function Mh(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ye === e && (ne & l) === l && (Oe === 4 || Oe === 3 && (ne & 62914560) === ne && 300 > We() - U3 ? (me & 2) === 0 && Ul(e, 0) : Xa |= l, _l === ne && (_l = 0)), qt(e);
  }
  function jc(e, t) {
    t === 0 && (t = C4()), e = q1(e, t), e !== null && (Il(e, t), qt(e));
  }
  function xh(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), jc(e, l);
  }
  function wh(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, c = e.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(p(314));
    }
    n !== null && n.delete(t), jc(e, l);
  }
  function yh(e, t) {
    return J(e, t);
  }
  var Z3 = null, Gl = null, Pa = !1, K3 = !1, e4 = !1, B1 = 0;
  function qt(e) {
    e !== Gl && e.next === null && (Gl === null ? Z3 = Gl = e : Gl = Gl.next = e), K3 = !0, Pa || (Pa = !0, Fh());
  }
  function L2(e, t) {
    if (!e4 && K3) {
      e4 = !0;
      do
        for (var l = !1, n = Z3; n !== null; ) {
          if (e !== 0) {
            var c = n.pendingLanes;
            if (c === 0) var r = 0;
            else {
              var f = n.suspendedLanes, s = n.pingedLanes;
              r = (1 << 31 - Et(42 | e) + 1) - 1, r &= c & ~(f & ~s), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (l = !0, Qc(n, r));
          } else
            r = ne, r = $2(
              n,
              n === ye ? r : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (r & 3) === 0 || $l(n, r) || (l = !0, Qc(n, r));
          n = n.next;
        }
      while (l);
      e4 = !1;
    }
  }
  function Hh() {
    Gc();
  }
  function Gc() {
    K3 = Pa = !1;
    var e = 0;
    B1 !== 0 && Vh() && (e = B1);
    for (var t = We(), l = null, n = Z3; n !== null; ) {
      var c = n.next, r = Yc(n, t);
      r === 0 ? (n.next = null, l === null ? Z3 = c : l.next = c, c === null && (Gl = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (K3 = !0)), n = c;
    }
    Xe !== 0 && Xe !== 5 || L2(e), B1 !== 0 && (B1 = 0);
  }
  function Yc(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, c = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var f = 31 - Et(r), s = 1 << f, o = c[f];
      o === -1 ? ((s & l) === 0 || (s & n) !== 0) && (c[f] = $9(s, t)) : o <= t && (e.expiredLanes |= s), r &= ~s;
    }
    if (t = ye, l = ne, l = $2(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (de === 2 || de === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && we(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || $l(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && we(n), o0(l)) {
        case 2:
        case 8:
          l = Wl;
          break;
        case 32:
          l = ul;
          break;
        case 268435456:
          l = s0;
          break;
        default:
          l = ul;
      }
      return n = qc.bind(null, e), l = J(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && we(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function qc(e, t) {
    if (Xe !== 0 && Xe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (X3() && e.callbackNode !== l)
      return null;
    var n = ne;
    return n = $2(
      e,
      e === ye ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Hc(e, n, t), Yc(e, We()), e.callbackNode != null && e.callbackNode === l ? qc.bind(null, e) : null);
  }
  function Qc(e, t) {
    if (X3()) return null;
    Hc(e, t, !0);
  }
  function Fh() {
    _h(function() {
      (me & 6) !== 0 ? J(
        Ft,
        Hh
      ) : Gc();
    });
  }
  function t4() {
    if (B1 === 0) {
      var e = Sl;
      e === 0 && (e = J2, J2 <<= 1, (J2 & 261888) === 0 && (J2 = 256)), B1 = e;
    }
    return B1;
  }
  function Xc(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : t3("" + e);
  }
  function Zc(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Sh(e, t, l, n, c) {
    if (t === "submit" && l && l.stateNode === c) {
      var r = Xc(
        (c[ut] || null).action
      ), f = n.submitter;
      f && (t = (t = f[ut] || null) ? Xc(t.formAction) : f.getAttribute("formAction"), t !== null && (r = t, f = null));
      var s = new c3(
        "action",
        "action",
        null,
        n,
        c
      );
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (B1 !== 0) {
                  var o = f ? Zc(c, f) : new FormData(c);
                  xa(
                    l,
                    {
                      pending: !0,
                      data: o,
                      method: c.method,
                      action: r
                    },
                    null,
                    o
                  );
                }
              } else
                typeof r == "function" && (s.preventDefault(), o = f ? Zc(c, f) : new FormData(c), xa(
                  l,
                  {
                    pending: !0,
                    data: o,
                    method: c.method,
                    action: r
                  },
                  r,
                  o
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var l4 = 0; l4 < R0.length; l4++) {
    var a4 = R0[l4], Dh = a4.toLowerCase(), bh = a4[0].toUpperCase() + a4.slice(1);
    _t(
      Dh,
      "on" + bh
    );
  }
  _t(w5, "onAnimationEnd"), _t(y5, "onAnimationIteration"), _t(H5, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(Qr, "onTransitionRun"), _t(Xr, "onTransitionStart"), _t(Zr, "onTransitionCancel"), _t(F5, "onTransitionEnd"), sl("onMouseEnter", ["mouseout", "mouseover"]), sl("onMouseLeave", ["mouseout", "mouseover"]), sl("onPointerEnter", ["pointerout", "pointerover"]), sl("onPointerLeave", ["pointerout", "pointerover"]), U1(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), U1(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), U1("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), U1(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), U1(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), U1(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var C2 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ah = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(C2)
  );
  function Kc(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], c = n.event;
      n = n.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var s = n[f], o = s.instance, x = s.currentTarget;
            if (s = s.listener, o !== r && c.isPropagationStopped())
              break e;
            r = s, c.currentTarget = x;
            try {
              r(c);
            } catch (S) {
              r3(S);
            }
            c.currentTarget = null, r = o;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (s = n[f], o = s.instance, x = s.currentTarget, s = s.listener, o !== r && c.isPropagationStopped())
              break e;
            r = s, c.currentTarget = x;
            try {
              r(c);
            } catch (S) {
              r3(S);
            }
            c.currentTarget = null, r = o;
          }
      }
    }
  }
  function te(e, t) {
    var l = t[E0];
    l === void 0 && (l = t[E0] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Jc(t, e, 2, !1), l.add(n));
  }
  function n4(e, t, l) {
    var n = 0;
    t && (n |= 4), Jc(
      l,
      e,
      n,
      t
    );
  }
  var J3 = "_reactListening" + Math.random().toString(36).slice(2);
  function c4(e) {
    if (!e[J3]) {
      e[J3] = !0, j4.forEach(function(l) {
        l !== "selectionchange" && (Ah.has(l) || n4(l, !1, e), n4(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[J3] || (t[J3] = !0, n4("selectionchange", !1, t));
    }
  }
  function Jc(e, t, l, n) {
    switch (yi(t)) {
      case 2:
        var c = af;
        break;
      case 8:
        c = nf;
        break;
      default:
        c = M4;
    }
    l = c.bind(
      null,
      t,
      l,
      e
    ), c = void 0, !F0 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), n ? c !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, l, !0) : c !== void 0 ? e.addEventListener(t, l, {
      passive: c
    }) : e.addEventListener(t, l, !1);
  }
  function i4(e, t, l, n, c) {
    var r = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var s = n.stateNode.containerInfo;
          if (s === c) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var o = f.tag;
              if ((o === 3 || o === 4) && f.stateNode.containerInfo === c)
                return;
              f = f.return;
            }
          for (; s !== null; ) {
            if (f = hl(s), f === null) return;
            if (o = f.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              n = r = f;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    I4(function() {
      var x = r, S = y0(l), b = [];
      e: {
        var w = S5.get(e);
        if (w !== void 0) {
          var F = c3, V = e;
          switch (e) {
            case "keypress":
              if (a3(l) === 0) break e;
            case "keydown":
            case "keyup":
              F = wr;
              break;
            case "focusin":
              V = "focus", F = A0;
              break;
            case "focusout":
              V = "blur", F = A0;
              break;
            case "beforeblur":
            case "afterblur":
              F = A0;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = t5;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = fr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Fr;
              break;
            case w5:
            case y5:
            case H5:
              F = vr;
              break;
            case F5:
              F = Dr;
              break;
            case "scroll":
            case "scrollend":
              F = rr;
              break;
            case "wheel":
              F = Ar;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = or;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = a5;
              break;
            case "toggle":
            case "beforetoggle":
              F = Tr;
          }
          var Q = (t & 4) !== 0, ge = !Q && (e === "scroll" || e === "scrollend"), g = Q ? w !== null ? w + "Capture" : null : w;
          Q = [];
          for (var E = x, M; E !== null; ) {
            var D = E;
            if (M = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || M === null || g === null || (D = t2(E, g), D != null && Q.push(
              O2(E, D, M)
            )), ge) break;
            E = E.return;
          }
          0 < Q.length && (w = new F(
            w,
            V,
            null,
            l,
            S
          ), b.push({ event: w, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", w && l !== w0 && (V = l.relatedTarget || l.fromElement) && (hl(V) || V[rl]))
            break e;
          if ((F || w) && (w = S.window === S ? S : (w = S.ownerDocument) ? w.defaultView || w.parentWindow : window, F ? (V = l.relatedTarget || l.toElement, F = x, V = V ? hl(V) : null, V !== null && (ge = Y(V), Q = V.tag, V !== ge || Q !== 5 && Q !== 27 && Q !== 6) && (V = null)) : (F = null, V = x), F !== V)) {
            if (Q = t5, D = "onMouseLeave", g = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (Q = a5, D = "onPointerLeave", g = "onPointerEnter", E = "pointer"), ge = F == null ? w : e2(F), M = V == null ? w : e2(V), w = new Q(
              D,
              E + "leave",
              F,
              l,
              S
            ), w.target = ge, w.relatedTarget = M, D = null, hl(S) === x && (Q = new Q(
              g,
              E + "enter",
              V,
              l,
              S
            ), Q.target = M, Q.relatedTarget = ge, D = Q), ge = D, F && V)
              t: {
                for (Q = Bh, g = F, E = V, M = 0, D = g; D; D = Q(D))
                  M++;
                D = 0;
                for (var G = E; G; G = Q(G))
                  D++;
                for (; 0 < M - D; )
                  g = Q(g), M--;
                for (; 0 < D - M; )
                  E = Q(E), D--;
                for (; M--; ) {
                  if (g === E || E !== null && g === E.alternate) {
                    Q = g;
                    break t;
                  }
                  g = Q(g), E = Q(E);
                }
                Q = null;
              }
            else Q = null;
            F !== null && Wc(
              b,
              w,
              F,
              Q,
              !1
            ), V !== null && ge !== null && Wc(
              b,
              ge,
              V,
              Q,
              !0
            );
          }
        }
        e: {
          if (w = x ? e2(x) : window, F = w.nodeName && w.nodeName.toLowerCase(), F === "select" || F === "input" && w.type === "file")
            var re = m5;
          else if (h5(w))
            if (s5)
              re = Gr;
            else {
              re = Ur;
              var U = Rr;
            }
          else
            F = w.nodeName, !F || F.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? x && x0(x.elementType) && (re = m5) : re = jr;
          if (re && (re = re(e, x))) {
            f5(
              b,
              re,
              l,
              S
            );
            break e;
          }
          U && U(e, w, x), e === "focusout" && x && w.type === "number" && x.memoizedProps.value != null && M0(w, "number", w.value);
        }
        switch (U = x ? e2(x) : window, e) {
          case "focusin":
            (h5(U) || U.contentEditable === "true") && (zl = U, V0 = x, h2 = null);
            break;
          case "focusout":
            h2 = V0 = zl = null;
            break;
          case "mousedown":
            N0 = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            N0 = !1, M5(b, l, S);
            break;
          case "selectionchange":
            if (qr) break;
          case "keydown":
          case "keyup":
            M5(b, l, S);
        }
        var k;
        if (T0)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          pl ? u5(e, l) && (ce = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ce = "onCompositionStart");
        ce && (n5 && l.locale !== "ko" && (pl || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && pl && (k = P4()) : (d1 = S, S0 = "value" in d1 ? d1.value : d1.textContent, pl = !0)), U = W3(x, ce), 0 < U.length && (ce = new l5(
          ce,
          e,
          null,
          l,
          S
        ), b.push({ event: ce, listeners: U }), k ? ce.data = k : (k = r5(l), k !== null && (ce.data = k)))), (k = Cr ? Or(e, l) : Vr(e, l)) && (ce = W3(x, "onBeforeInput"), 0 < ce.length && (U = new l5(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          S
        ), b.push({
          event: U,
          listeners: ce
        }), U.data = k)), Sh(
          b,
          e,
          x,
          l,
          S
        );
      }
      Kc(b, t);
    });
  }
  function O2(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function W3(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var c = e, r = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || r === null || (c = t2(e, l), c != null && n.unshift(
        O2(e, c, r)
      ), c = t2(e, t), c != null && n.push(
        O2(e, c, r)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Bh(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Wc(e, t, l, n, c) {
    for (var r = t._reactName, f = []; l !== null && l !== n; ) {
      var s = l, o = s.alternate, x = s.stateNode;
      if (s = s.tag, o !== null && o === n) break;
      s !== 5 && s !== 26 && s !== 27 || x === null || (o = x, c ? (x = t2(l, r), x != null && f.unshift(
        O2(l, x, o)
      )) : c || (x = t2(l, r), x != null && f.push(
        O2(l, x, o)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Th = /\r\n?/g, Lh = /\u0000|\uFFFD/g;
  function kc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Th, `
`).replace(Lh, "");
  }
  function $c(e, t) {
    return t = kc(t), kc(e) === t;
  }
  function ze(e, t, l, n, c, r) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || dl(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && dl(e, "" + n);
        break;
      case "className":
        P2(e, "class", n);
        break;
      case "tabIndex":
        P2(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        P2(e, l, n);
        break;
      case "style":
        k4(e, n, r);
        break;
      case "data":
        if (t !== "object") {
          P2(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = t3("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (l === "formAction" ? (t !== "input" && ze(e, t, "name", c.name, c, null), ze(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), ze(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), ze(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (ze(e, t, "encType", c.encType, c, null), ze(e, t, "method", c.method, c, null), ze(e, t, "target", c.target, c, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = t3("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Xt);
        break;
      case "onScroll":
        n != null && te("scroll", e);
        break;
      case "onScrollEnd":
        n != null && te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(p(61));
          if (l = n.__html, l != null) {
            if (c.children != null) throw Error(p(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = t3("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        te("beforetoggle", e), te("toggle", e), I2(e, "popover", n);
        break;
      case "xlinkActuate":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Qt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Qt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        I2(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ir.get(l) || l, I2(e, l, n));
    }
  }
  function u4(e, t, l, n, c, r) {
    switch (l) {
      case "style":
        k4(e, n, r);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(p(61));
          if (l = n.__html, l != null) {
            if (c.children != null) throw Error(p(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? dl(e, n) : (typeof n == "number" || typeof n == "bigint") && dl(e, "" + n);
        break;
      case "onScroll":
        n != null && te("scroll", e);
        break;
      case "onScrollEnd":
        n != null && te("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Xt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!G4.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (c = l.endsWith("Capture"), t = l.slice(2, c ? l.length - 7 : void 0), r = e[ut] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, c), typeof n == "function")) {
              typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, c);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : I2(e, l, n);
          }
    }
  }
  function et(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        te("error", e), te("load", e);
        var n = !1, c = !1, r;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var f = l[r];
            if (f != null)
              switch (r) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(p(137, t));
                default:
                  ze(e, t, r, f, l, null);
              }
          }
        c && ze(e, t, "srcSet", l.srcSet, l, null), n && ze(e, t, "src", l.src, l, null);
        return;
      case "input":
        te("invalid", e);
        var s = r = f = c = null, o = null, x = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var S = l[n];
            if (S != null)
              switch (n) {
                case "name":
                  c = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  o = S;
                  break;
                case "defaultChecked":
                  x = S;
                  break;
                case "value":
                  r = S;
                  break;
                case "defaultValue":
                  s = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(p(137, t));
                  break;
                default:
                  ze(e, t, n, S, l, null);
              }
          }
        Z4(
          e,
          r,
          s,
          o,
          x,
          f,
          c,
          !1
        );
        return;
      case "select":
        te("invalid", e), n = f = r = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (s = l[c], s != null))
            switch (c) {
              case "value":
                r = s;
                break;
              case "defaultValue":
                f = s;
                break;
              case "multiple":
                n = s;
              default:
                ze(e, t, c, s, l, null);
            }
        t = r, l = f, e.multiple = !!n, t != null ? vl(e, !!n, t, !1) : l != null && vl(e, !!n, l, !0);
        return;
      case "textarea":
        te("invalid", e), r = c = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (s = l[f], s != null))
            switch (f) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "children":
                r = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(p(91));
                break;
              default:
                ze(e, t, f, s, l, null);
            }
        J4(e, n, c, r);
        return;
      case "option":
        for (o in l)
          l.hasOwnProperty(o) && (n = l[o], n != null) && (o === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : ze(e, t, o, n, l, null));
        return;
      case "dialog":
        te("beforetoggle", e), te("toggle", e), te("cancel", e), te("close", e);
        break;
      case "iframe":
      case "object":
        te("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < C2.length; n++)
          te(C2[n], e);
        break;
      case "image":
        te("error", e), te("load", e);
        break;
      case "details":
        te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        te("error", e), te("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && (n = l[x], n != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(p(137, t));
              default:
                ze(e, t, x, n, l, null);
            }
        return;
      default:
        if (x0(t)) {
          for (S in l)
            l.hasOwnProperty(S) && (n = l[S], n !== void 0 && u4(
              e,
              t,
              S,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (n = l[s], n != null && ze(e, t, s, n, l, null));
  }
  function Ch(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, r = null, f = null, s = null, o = null, x = null, S = null;
        for (F in l) {
          var b = l[F];
          if (l.hasOwnProperty(F) && b != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = b;
              default:
                n.hasOwnProperty(F) || ze(e, t, F, null, n, b);
            }
        }
        for (var w in n) {
          var F = n[w];
          if (b = l[w], n.hasOwnProperty(w) && (F != null || b != null))
            switch (w) {
              case "type":
                r = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                x = F;
                break;
              case "defaultChecked":
                S = F;
                break;
              case "value":
                f = F;
                break;
              case "defaultValue":
                s = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(p(137, t));
                break;
              default:
                F !== b && ze(
                  e,
                  t,
                  w,
                  F,
                  n,
                  b
                );
            }
        }
        g0(
          e,
          f,
          s,
          o,
          x,
          S,
          r,
          c
        );
        return;
      case "select":
        F = f = s = w = null;
        for (r in l)
          if (o = l[r], l.hasOwnProperty(r) && o != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                F = o;
              default:
                n.hasOwnProperty(r) || ze(
                  e,
                  t,
                  r,
                  null,
                  n,
                  o
                );
            }
        for (c in n)
          if (r = n[c], o = l[c], n.hasOwnProperty(c) && (r != null || o != null))
            switch (c) {
              case "value":
                w = r;
                break;
              case "defaultValue":
                s = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== o && ze(
                  e,
                  t,
                  c,
                  r,
                  n,
                  o
                );
            }
        t = s, l = f, n = F, w != null ? vl(e, !!l, w, !1) : !!n != !!l && (t != null ? vl(e, !!l, t, !0) : vl(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        F = w = null;
        for (s in l)
          if (c = l[s], l.hasOwnProperty(s) && c != null && !n.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, s, null, n, c);
            }
        for (f in n)
          if (c = n[f], r = l[f], n.hasOwnProperty(f) && (c != null || r != null))
            switch (f) {
              case "value":
                w = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(p(91));
                break;
              default:
                c !== r && ze(e, t, f, c, n, r);
            }
        K4(e, w, F);
        return;
      case "option":
        for (var V in l)
          w = l[V], l.hasOwnProperty(V) && w != null && !n.hasOwnProperty(V) && (V === "selected" ? e.selected = !1 : ze(
            e,
            t,
            V,
            null,
            n,
            w
          ));
        for (o in n)
          w = n[o], F = l[o], n.hasOwnProperty(o) && w !== F && (w != null || F != null) && (o === "selected" ? e.selected = w && typeof w != "function" && typeof w != "symbol" : ze(
            e,
            t,
            o,
            w,
            n,
            F
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Q in l)
          w = l[Q], l.hasOwnProperty(Q) && w != null && !n.hasOwnProperty(Q) && ze(e, t, Q, null, n, w);
        for (x in n)
          if (w = n[x], F = l[x], n.hasOwnProperty(x) && w !== F && (w != null || F != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(p(137, t));
                break;
              default:
                ze(
                  e,
                  t,
                  x,
                  w,
                  n,
                  F
                );
            }
        return;
      default:
        if (x0(t)) {
          for (var ge in l)
            w = l[ge], l.hasOwnProperty(ge) && w !== void 0 && !n.hasOwnProperty(ge) && u4(
              e,
              t,
              ge,
              void 0,
              n,
              w
            );
          for (S in n)
            w = n[S], F = l[S], !n.hasOwnProperty(S) || w === F || w === void 0 && F === void 0 || u4(
              e,
              t,
              S,
              w,
              n,
              F
            );
          return;
        }
    }
    for (var g in l)
      w = l[g], l.hasOwnProperty(g) && w != null && !n.hasOwnProperty(g) && ze(e, t, g, null, n, w);
    for (b in n)
      w = n[b], F = l[b], !n.hasOwnProperty(b) || w === F || w == null && F == null || ze(e, t, b, w, n, F);
  }
  function Ic(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Oh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var c = l[n], r = c.transferSize, f = c.initiatorType, s = c.duration;
        if (r && s && Ic(f)) {
          for (f = 0, s = c.responseEnd, n += 1; n < l.length; n++) {
            var o = l[n], x = o.startTime;
            if (x > s) break;
            var S = o.transferSize, b = o.initiatorType;
            S && Ic(b) && (o = o.responseEnd, f += S * (o < s ? 1 : (s - x) / (o - x)));
          }
          if (--n, t += 8 * (r + f) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var r4 = null, h4 = null;
  function k3(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pc(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ei(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function f4(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var m4 = null;
  function Vh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === m4 ? !1 : (m4 = e, !0) : (m4 = null, !1);
  }
  var ti = typeof setTimeout == "function" ? setTimeout : void 0, Nh = typeof clearTimeout == "function" ? clearTimeout : void 0, li = typeof Promise == "function" ? Promise : void 0, _h = typeof queueMicrotask == "function" ? queueMicrotask : typeof li < "u" ? function(e) {
    return li.resolve(null).then(e).catch(Rh);
  } : ti;
  function Rh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function T1(e) {
    return e === "head";
  }
  function ai(e, t) {
    var l = t, n = 0;
    do {
      var c = l.nextSibling;
      if (e.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(c), Xl(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          V2(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, V2(l);
          for (var r = l.firstChild; r; ) {
            var f = r.nextSibling, s = r.nodeName;
            r[Pl] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && r.rel.toLowerCase() === "stylesheet" || l.removeChild(r), r = f;
          }
        } else
          l === "body" && V2(e.ownerDocument.body);
      l = c;
    } while (l);
    Xl(t);
  }
  function ni(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function s4(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          s4(l), p0(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Uh(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var c = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Pl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (r !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === r)
          return e;
      } else return e;
      if (e = Ot(e.nextSibling), e === null) break;
    }
    return null;
  }
  function jh(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function ci(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ot(e.nextSibling), e === null)) return null;
    return e;
  }
  function v4(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function d4(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Gh(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var o4 = null;
  function ii(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Ot(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ui(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ri(e, t, l) {
    switch (t = k3(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(p(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(p(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(p(454));
        return e;
      default:
        throw Error(p(451));
    }
  }
  function V2(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    p0(e);
  }
  var Vt = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Set();
  function $3(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var u1 = L.d;
  L.d = {
    f: Yh,
    r: qh,
    D: Qh,
    C: Xh,
    L: Zh,
    m: Kh,
    X: Wh,
    S: Jh,
    M: kh
  };
  function Yh() {
    var e = u1.f(), t = Y3();
    return e || t;
  }
  function qh(e) {
    var t = fl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sn(t) : u1.r(e);
  }
  var Yl = typeof document > "u" ? null : document;
  function fi(e, t, l) {
    var n = Yl;
    if (n && typeof t == "string" && t) {
      var c = Dt(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof l == "string" && (c += '[crossorigin="' + l + '"]'), hi.has(c) || (hi.add(c), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(c) === null && (t = n.createElement("link"), et(t, "link", e), Ke(t), n.head.appendChild(t)));
    }
  }
  function Qh(e) {
    u1.D(e), fi("dns-prefetch", e, null);
  }
  function Xh(e, t) {
    u1.C(e, t), fi("preconnect", e, t);
  }
  function Zh(e, t, l) {
    u1.L(e, t, l);
    var n = Yl;
    if (n && e && t) {
      var c = 'link[rel="preload"][as="' + Dt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (c += '[imagesrcset="' + Dt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (c += '[imagesizes="' + Dt(
        l.imageSizes
      ) + '"]')) : c += '[href="' + Dt(e) + '"]';
      var r = c;
      switch (t) {
        case "style":
          r = ql(e);
          break;
        case "script":
          r = Ql(e);
      }
      Vt.has(r) || (e = q(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Vt.set(r, e), n.querySelector(c) !== null || t === "style" && n.querySelector(N2(r)) || t === "script" && n.querySelector(_2(r)) || (t = n.createElement("link"), et(t, "link", e), Ke(t), n.head.appendChild(t)));
    }
  }
  function Kh(e, t) {
    u1.m(e, t);
    var l = Yl;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Dt(n) + '"][href="' + Dt(e) + '"]', r = c;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ql(e);
      }
      if (!Vt.has(r) && (e = q({ rel: "modulepreload", href: e }, t), Vt.set(r, e), l.querySelector(c) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_2(r)))
              return;
        }
        n = l.createElement("link"), et(n, "link", e), Ke(n), l.head.appendChild(n);
      }
    }
  }
  function Jh(e, t, l) {
    u1.S(e, t, l);
    var n = Yl;
    if (n && e) {
      var c = ml(n).hoistableStyles, r = ql(e);
      t = t || "default";
      var f = c.get(r);
      if (!f) {
        var s = { loading: 0, preload: null };
        if (f = n.querySelector(
          N2(r)
        ))
          s.loading = 5;
        else {
          e = q(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Vt.get(r)) && E4(e, l);
          var o = f = n.createElement("link");
          Ke(o), et(o, "link", e), o._p = new Promise(function(x, S) {
            o.onload = x, o.onerror = S;
          }), o.addEventListener("load", function() {
            s.loading |= 1;
          }), o.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, I3(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: s
        }, c.set(r, f);
      }
    }
  }
  function Wh(e, t) {
    u1.X(e, t);
    var l = Yl;
    if (l && e) {
      var n = ml(l).hoistableScripts, c = Ql(e), r = n.get(c);
      r || (r = l.querySelector(_2(c)), r || (e = q({ src: e, async: !0 }, t), (t = Vt.get(c)) && p4(e, t), r = l.createElement("script"), Ke(r), et(r, "link", e), l.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(c, r));
    }
  }
  function kh(e, t) {
    u1.M(e, t);
    var l = Yl;
    if (l && e) {
      var n = ml(l).hoistableScripts, c = Ql(e), r = n.get(c);
      r || (r = l.querySelector(_2(c)), r || (e = q({ src: e, async: !0, type: "module" }, t), (t = Vt.get(c)) && p4(e, t), r = l.createElement("script"), Ke(r), et(r, "link", e), l.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(c, r));
    }
  }
  function mi(e, t, l, n) {
    var c = (c = I.current) ? $3(c) : null;
    if (!c) throw Error(p(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = ql(l.href), l = ml(
          c
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = ql(l.href);
          var r = ml(
            c
          ).hoistableStyles, f = r.get(e);
          if (f || (c = c.ownerDocument || c, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, f), (r = c.querySelector(
            N2(e)
          )) && !r._p && (f.instance = r, f.state.loading = 5), Vt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Vt.set(e, l), r || $h(
            c,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(p(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(p(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ql(l), l = ml(
          c
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(p(444, e));
    }
  }
  function ql(e) {
    return 'href="' + Dt(e) + '"';
  }
  function N2(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function si(e) {
    return q({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $h(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), et(t, "link", l), Ke(t), e.head.appendChild(t));
  }
  function Ql(e) {
    return '[src="' + Dt(e) + '"]';
  }
  function _2(e) {
    return "script[async]" + e;
  }
  function vi(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Dt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, Ke(n), n;
          var c = q({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(n), et(n, "style", c), I3(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          c = ql(l.href);
          var r = e.querySelector(
            N2(c)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, Ke(r), r;
          n = si(l), (c = Vt.get(c)) && E4(n, c), r = (e.ownerDocument || e).createElement("link"), Ke(r);
          var f = r;
          return f._p = new Promise(function(s, o) {
            f.onload = s, f.onerror = o;
          }), et(r, "link", n), t.state.loading |= 4, I3(r, l.precedence, e), t.instance = r;
        case "script":
          return r = Ql(l.src), (c = e.querySelector(
            _2(r)
          )) ? (t.instance = c, Ke(c), c) : (n = l, (c = Vt.get(r)) && (n = q({}, l), p4(n, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ke(c), et(c, "link", n), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(p(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, I3(n, l.precedence, e));
    return t.instance;
  }
  function I3(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = n.length ? n[n.length - 1] : null, r = c, f = 0; f < n.length; f++) {
      var s = n[f];
      if (s.dataset.precedence === t) r = s;
      else if (r !== c) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function E4(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function p4(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var P3 = null;
  function di(e, t, l) {
    if (P3 === null) {
      var n = /* @__PURE__ */ new Map(), c = P3 = /* @__PURE__ */ new Map();
      c.set(l, n);
    } else
      c = P3, n = c.get(l), n || (n = /* @__PURE__ */ new Map(), c.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), c = 0; c < l.length; c++) {
      var r = l[c];
      if (!(r[Pl] || r[ke] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var s = n.get(f);
        s ? s.push(r) : n.set(f, [r]);
      }
    }
    return n;
  }
  function oi(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ih(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ei(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ph(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var c = ql(n.href), r = t.querySelector(
          N2(c)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = e0.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = r, Ke(r);
          return;
        }
        r = t.ownerDocument || t, n = si(n), (c = Vt.get(c)) && E4(n, c), r = r.createElement("link"), Ke(r);
        var f = r;
        f._p = new Promise(function(s, o) {
          f.onload = s, f.onerror = o;
        }), et(r, "link", n), l.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = e0.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var z4 = 0;
  function ef(e, t) {
    return e.stylesheets && e.count === 0 && l0(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && l0(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && z4 === 0 && (z4 = 62500 * Oh());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && l0(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > z4 ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(c);
      };
    } : null;
  }
  function e0() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) l0(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var t0 = null;
  function l0(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, t0 = /* @__PURE__ */ new Map(), t.forEach(tf, e), t0 = null, e0.call(e));
  }
  function tf(e, t) {
    if (!(t.state.loading & 4)) {
      var l = t0.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), t0.set(e, l);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < c.length; r++) {
          var f = c[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      c = t.instance, f = c.getAttribute("data-precedence"), r = l.get(f) || n, r === n && l.set(null, c), l.set(f, c), this.count++, n = e0.bind(this), c.addEventListener("load", n), c.addEventListener("error", n), r ? r.parentNode.insertBefore(c, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var R2 = {
    $$typeof: xe,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function lf(e, t, l, n, c, r, f, s, o) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = v0(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = v0(0), this.hiddenUpdates = v0(null), this.identifierPrefix = n, this.onUncaughtError = c, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function pi(e, t, l, n, c, r, f, s, o, x, S, b) {
    return e = new lf(
      e,
      t,
      l,
      f,
      o,
      x,
      S,
      b,
      s
    ), t = 1, r === !0 && (t |= 24), r = zt(3, null, null, t), e.current = r, r.stateNode = e, t = $0(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, ta(r), e;
  }
  function zi(e) {
    return e ? (e = xl, e) : xl;
  }
  function gi(e, t, l, n, c, r) {
    c = zi(c), n.context === null ? n.context = c : n.pendingContext = c, n = M1(t), n.payload = { element: l }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = x1(e, n, t), l !== null && (vt(l, e, t), E2(l, e, t));
  }
  function Mi(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function g4(e, t) {
    Mi(e, t), (e = e.alternate) && Mi(e, t);
  }
  function xi(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = q1(e, 67108864);
      t !== null && vt(t, e, 67108864), g4(e, 67108864);
    }
  }
  function wi(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = yt();
      t = d0(t);
      var l = q1(e, t);
      l !== null && vt(l, e, t), g4(e, t);
    }
  }
  var a0 = !0;
  function af(e, t, l, n) {
    var c = B.T;
    B.T = null;
    var r = L.p;
    try {
      L.p = 2, M4(e, t, l, n);
    } finally {
      L.p = r, B.T = c;
    }
  }
  function nf(e, t, l, n) {
    var c = B.T;
    B.T = null;
    var r = L.p;
    try {
      L.p = 8, M4(e, t, l, n);
    } finally {
      L.p = r, B.T = c;
    }
  }
  function M4(e, t, l, n) {
    if (a0) {
      var c = x4(n);
      if (c === null)
        i4(
          e,
          t,
          n,
          n0,
          l
        ), Hi(e, n);
      else if (uf(
        c,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Hi(e, n), t & 4 && -1 < cf.indexOf(e)) {
        for (; c !== null; ) {
          var r = fl(c);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var f = R1(r.pendingLanes);
                  if (f !== 0) {
                    var s = r;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; f; ) {
                      var o = 1 << 31 - Et(f);
                      s.entanglements[1] |= o, f &= ~o;
                    }
                    qt(r), (me & 6) === 0 && (j3 = We() + 500, L2(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = q1(r, 2), s !== null && vt(s, r, 2), Y3(), g4(r, 2);
            }
          if (r = x4(n), r === null && i4(
            e,
            t,
            n,
            n0,
            l
          ), r === c) break;
          c = r;
        }
        c !== null && n.stopPropagation();
      } else
        i4(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function x4(e) {
    return e = y0(e), w4(e);
  }
  var n0 = null;
  function w4(e) {
    if (n0 = null, e = hl(e), e !== null) {
      var t = Y(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = X(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = O(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return n0 = e, null;
  }
  function yi(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Jl()) {
          case Ft:
            return 2;
          case Wl:
            return 8;
          case ul:
          case K2:
            return 32;
          case s0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var y4 = !1, L1 = null, C1 = null, O1 = null, U2 = /* @__PURE__ */ new Map(), j2 = /* @__PURE__ */ new Map(), V1 = [], cf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        L1 = null;
        break;
      case "dragenter":
      case "dragleave":
        C1 = null;
        break;
      case "mouseover":
      case "mouseout":
        O1 = null;
        break;
      case "pointerover":
      case "pointerout":
        U2.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        j2.delete(t.pointerId);
    }
  }
  function G2(e, t, l, n, c, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [c]
    }, t !== null && (t = fl(t), t !== null && xi(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function uf(e, t, l, n, c) {
    switch (t) {
      case "focusin":
        return L1 = G2(
          L1,
          e,
          t,
          l,
          n,
          c
        ), !0;
      case "dragenter":
        return C1 = G2(
          C1,
          e,
          t,
          l,
          n,
          c
        ), !0;
      case "mouseover":
        return O1 = G2(
          O1,
          e,
          t,
          l,
          n,
          c
        ), !0;
      case "pointerover":
        var r = c.pointerId;
        return U2.set(
          r,
          G2(
            U2.get(r) || null,
            e,
            t,
            l,
            n,
            c
          )
        ), !0;
      case "gotpointercapture":
        return r = c.pointerId, j2.set(
          r,
          G2(
            j2.get(r) || null,
            e,
            t,
            l,
            n,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Fi(e) {
    var t = hl(e.target);
    if (t !== null) {
      var l = Y(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = X(l), t !== null) {
            e.blockedOn = t, R4(e.priority, function() {
              wi(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = O(l), t !== null) {
            e.blockedOn = t, R4(e.priority, function() {
              wi(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function c0(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = x4(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        w0 = n, l.target.dispatchEvent(n), w0 = null;
      } else
        return t = fl(l), t !== null && xi(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Si(e, t, l) {
    c0(e) && l.delete(t);
  }
  function rf() {
    y4 = !1, L1 !== null && c0(L1) && (L1 = null), C1 !== null && c0(C1) && (C1 = null), O1 !== null && c0(O1) && (O1 = null), U2.forEach(Si), j2.forEach(Si);
  }
  function i0(e, t) {
    e.blockedOn === t && (e.blockedOn = null, y4 || (y4 = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      rf
    )));
  }
  var u0 = null;
  function Di(e) {
    u0 !== e && (u0 = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        u0 === e && (u0 = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], c = e[t + 2];
          if (typeof n != "function") {
            if (w4(n || l) === null)
              continue;
            break;
          }
          var r = fl(l);
          r !== null && (e.splice(t, 3), t -= 3, xa(
            r,
            {
              pending: !0,
              data: c,
              method: l.method,
              action: n
            },
            n,
            c
          ));
        }
      }
    ));
  }
  function Xl(e) {
    function t(o) {
      return i0(o, e);
    }
    L1 !== null && i0(L1, e), C1 !== null && i0(C1, e), O1 !== null && i0(O1, e), U2.forEach(t), j2.forEach(t);
    for (var l = 0; l < V1.length; l++) {
      var n = V1[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < V1.length && (l = V1[0], l.blockedOn === null); )
      Fi(l), l.blockedOn === null && V1.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var c = l[n], r = l[n + 1], f = c[ut] || null;
        if (typeof r == "function")
          f || Di(l);
        else if (f) {
          var s = null;
          if (r && r.hasAttribute("formAction")) {
            if (c = r, f = r[ut] || null)
              s = f.formAction;
            else if (w4(c) !== null) continue;
          } else s = f.action;
          typeof s == "function" ? l[n + 1] = s : (l.splice(n, 3), n -= 3), Di(l);
        }
      }
  }
  function bi() {
    function e(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(f) {
            return c = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      c !== null && (c(), c = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function H4(e) {
    this._internalRoot = e;
  }
  r0.prototype.render = H4.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    var l = t.current, n = yt();
    gi(l, n, e, t, null, null);
  }, r0.prototype.unmount = H4.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      gi(e.current, 2, null, e, null, null), Y3(), t[rl] = null;
    }
  };
  function r0(e) {
    this._internalRoot = e;
  }
  r0.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = _4();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < V1.length && t !== 0 && t < V1[l].priority; l++) ;
      V1.splice(l, 0, e), l === 0 && Fi(e);
    }
  };
  var Ai = u.version;
  if (Ai !== "19.2.3")
    throw Error(
      p(
        527,
        Ai,
        "19.2.3"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = _(t), e = e !== null ? Z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var hf = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var h0 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!h0.isDisabled && h0.supportsFiber)
      try {
        kl = h0.inject(
          hf
        ), ot = h0;
      } catch {
      }
  }
  return Q2.createRoot = function(e, t) {
    if (!N(e)) throw Error(p(299));
    var l = !1, n = "", c = Nn, r = _n, f = Rn;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = pi(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      c,
      r,
      f,
      bi
    ), e[rl] = t.current, c4(e), new H4(t);
  }, Q2.hydrateRoot = function(e, t, l) {
    if (!N(e)) throw Error(p(299));
    var n = !1, c = "", r = Nn, f = _n, s = Rn, o = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (c = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (o = l.formState)), t = pi(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      c,
      o,
      r,
      f,
      s,
      bi
    ), t.context = zi(null), l = t.current, n = yt(), n = d0(n), c = M1(n), c.callback = null, x1(l, c, n), l = n, t.current.lanes = l, Il(t, l), qt(t), e[rl] = t.current, c4(e), new r0(t);
  }, Q2.version = "19.2.3", Q2;
}
var Gi;
function Lo() {
  if (Gi) return b4.exports;
  Gi = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (i) {
        console.error(i);
      }
  }
  return m(), b4.exports = To(), b4.exports;
}
var Co = Lo();
const nl = /* @__PURE__ */ new Map();
function Oo(m, i) {
  if (fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "initCurrencyConverter ENTRY", data: { containerId: m, hasCachedRoot: nl.has(m), note: "Iniciando inicialização do componente" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-INIT" }) }).catch(() => {
  }), !m || typeof m != "string") {
    console.warn("initCurrencyConverter: containerId inválido", m);
    return;
  }
  requestAnimationFrame(() => {
    const u = document.getElementById(m);
    if (!u) {
      fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Container not found", data: { containerId: m, note: "Container não encontrado no DOM" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-NOT-FOUND" }) }).catch(() => {
      }), console.warn(`Elemento com ID "${m}" não encontrado`), nl.delete(m);
      return;
    }
    if (!u.isConnected) {
      fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Container disconnected", data: { containerId: m, note: "Container não está conectado ao DOM" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-DISCONNECTED" }) }).catch(() => {
      }), console.warn(`Container "${m}" não está conectado ao DOM`), nl.delete(m);
      return;
    }
    u.classList.contains("infomoney-currency-converter-wrapper") || u.classList.add("infomoney-currency-converter-wrapper"), fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:container-wrapper", message: "Container wrapper setup", data: { containerId: m, hasWrapperClass: u.classList.contains("infomoney-currency-converter-wrapper"), containerClasses: u.className, containerWidth: u.offsetWidth, containerMaxWidth: window.getComputedStyle(u).maxWidth, note: "Verificando classes e tamanho do container wrapper" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "WRAPPER-SETUP" }) }).catch(() => {
    });
    let h = nl.get(m);
    if (h)
      try {
        if (!u.isConnected)
          throw new Error("Container desconectado do DOM");
        fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Reusing cached root", data: { containerId: m, note: "Reutilizando root em cache" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-REUSE" }) }).catch(() => {
        }), h.render(
          a.createElement(
            Be.StrictMode,
            null,
            a.createElement(T4, i)
          )
        );
        return;
      } catch (p) {
        fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Root invalid, recreating", data: { containerId: m, error: p instanceof Error ? p.message : String(p), note: "Root inválido, recriando" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-INVALID-ROOT" }) }).catch(() => {
        }), console.warn(`Root inválido para ${m}, recriando...`, p), nl.delete(m), h = void 0;
      }
    if (!h) {
      if (!u.isConnected) {
        console.warn(`Container "${m}" foi desconectado antes de criar root`);
        return;
      }
      try {
        fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Creating new root", data: { containerId: m, note: "Criando novo root React" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-CREATE-ROOT" }) }).catch(() => {
        }), h = Co.createRoot(u), nl.set(m, h), h.render(
          a.createElement(
            Be.StrictMode,
            null,
            a.createElement(T4, i)
          )
        ), fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Root created successfully", data: { containerId: m, note: "Root criado com sucesso" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-SUCCESS" }) }).catch(() => {
        });
      } catch (p) {
        fetch("http://127.0.0.1:7242/ingest/91c52393-f929-4d82-9177-ae45437553d5", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "init.tsx:initCurrencyConverter", message: "Root creation failed", data: { containerId: m, error: p instanceof Error ? p.message : String(p), note: "Erro ao criar root" }, timestamp: Date.now(), sessionId: "debug-session", runId: "run1", hypothesisId: "DOM-ERROR" }) }).catch(() => {
        }), console.error(`Erro ao criar root para ${m}:`, p), nl.delete(m);
      }
    }
  });
}
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initCurrencyConverter: Oo
}, Symbol.toStringTag, { value: "Module" }));
class Uo {
  /**
   * Mapeia uma resposta da API para o objeto Currency
   * Usa os dados reais da API (symbol da resposta)
   */
  static mapApiResponseToCurrency(i, u) {
    const h = u.symbol?.toUpperCase() || i.toUpperCase(), p = this.getCurrencySymbol(h), N = this.getCurrencyName(h);
    return {
      code: h,
      // Dados da API (apiResponse.symbol)
      symbol: p,
      // Fallback (API não retorna)
      name: N
      // Fallback (API não retorna)
    };
  }
  /**
   * Obtém o símbolo monetário baseado no código (fallback mínimo)
   */
  static getCurrencySymbol(i) {
    return {
      BRL: "R$",
      USD: "$",
      EUR: "€",
      GBP: "£",
      JPY: "¥"
    }[i.toUpperCase()] || i;
  }
  /**
   * Obtém o nome da moeda baseado no código (fallback mínimo)
   */
  static getCurrencyName(i) {
    return {
      BRL: "Real Brasileiro",
      USD: "Dólar Americano",
      EUR: "Euro",
      GBP: "Libra Esterlina",
      JPY: "Iene Japonês"
    }[i.toUpperCase()] || i;
  }
  /**
   * Mapeia múltiplas respostas da API para uma lista de Currency
   */
  static mapApiResponsesToCurrencies(i) {
    return i.map(
      ({ code: u, apiData: h }) => this.mapApiResponseToCurrency(u, h)
    );
  }
  /**
   * Converte o contrato AllCurrenciesContract para lista de strings (códigos)
   */
  static contractToCurrencyCodeList(i) {
    return i.currencies.map((u) => u.code.toUpperCase());
  }
  /**
   * Converte o contrato AllCurrenciesContract para lista de Currency
   */
  static contractToCurrencyList(i) {
    return this.mapApiResponsesToCurrencies(i.currencies);
  }
  /**
   * MÉTODO PRINCIPAL: Monta o objeto completo para usar no CurrencyConverter
   * Converte os dados da API em tudo que o componente precisa
   */
  static mapContractToConverterData(i, u = "USD") {
    const h = this.mapApiResponsesToCurrencies(i.currencies), p = {}, N = i.currencies.find(
      (H) => H.apiData.symbol?.toUpperCase() === u.toUpperCase()
    ), Y = N ? (N.apiData.bid + N.apiData.ask) / 2 : 1;
    i.currencies.forEach(({ apiData: H }) => {
      const _ = H.symbol?.toUpperCase() || "", Z = (H.bid + H.ask) / 2;
      p[_] = _ === u.toUpperCase() ? 1 : Z / Y;
    });
    const X = i.currencies.map((H) => new Date(H.apiData.tradeDate)).filter((H) => !isNaN(H.getTime())).sort((H, _) => _.getTime() - H.getTime())[0], O = X ? X.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : (/* @__PURE__ */ new Date()).toLocaleString("pt-BR");
    return {
      currencies: h,
      exchangeRates: p,
      lastUpdated: O
    };
  }
}
const No = 300 * 1e3, Z2 = /* @__PURE__ */ new Map();
async function Yi(m) {
  const i = Z2.get(m);
  if (!i)
    return;
  if (Date.now() - i.timestamp > No) {
    Z2.delete(m);
    return;
  }
  return i.data;
}
async function qi(m) {
  const i = Z2.get(m);
  if (i)
    return i.data;
}
async function Qi(m, i) {
  Z2.set(m, {
    data: i,
    timestamp: Date.now()
  });
}
async function jo() {
  Z2.clear();
}
function Xi(m) {
  const i = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Accept-Encoding": "gzip, deflate, br, zstd"
  };
  return m.subscriptionKey && (i["Ocp-Apim-Subscription-Key"] = m.subscriptionKey), m.origin && (i.Origin = m.origin), m.referer && (i.Referer = m.referer), i;
}
async function X9(m, i) {
  const u = await Yi(m);
  if (u !== void 0)
    return u;
  try {
    const h = m.toLowerCase(), p = `${i.baseUrl}${i.endpoint || ""}/${h}`, N = Xi(i), Y = await fetch(p, {
      method: "GET",
      headers: N
    });
    if (Y.status === 200) {
      const O = await Y.json();
      return await Qi(m, O), O;
    }
    const X = await Yi(m);
    if (X !== void 0)
      return X;
    try {
      const O = Xi(i), H = await fetch(p, {
        method: "GET",
        headers: O
      });
      if (H.status === 200) {
        const _ = await H.json();
        return await Qi(m, _), _;
      } else {
        const _ = await qi(m);
        if (_ !== void 0)
          return _;
      }
    } catch {
      const H = await qi(m);
      if (H !== void 0)
        return H;
    }
    return null;
  } catch {
    return null;
  }
}
async function Go(m, i) {
  const u = m.map(async (N) => {
    const Y = await X9(N, i);
    return { currencyCode: N, data: Y };
  }), h = await Promise.all(u), p = {};
  return h.forEach(({ currencyCode: N, data: Y }) => {
    Y && (p[N] = Y);
  }), p;
}
async function Yo(m, i) {
  const u = [], h = m.map(async (p) => {
    const N = await X9(p, i);
    N && u.push({
      code: p,
      apiData: N
    });
  });
  return await Promise.all(h), {
    currencies: u
  };
}
typeof window < "u" && Promise.all([
  Promise.resolve().then(() => Fo),
  Promise.resolve().then(() => Vo)
]).then(([{ CurrencyConverter: m }, { initCurrencyConverter: i }]) => {
  window.InfomoneyCurrencyConverter = {
    CurrencyConverter: m,
    initCurrencyConverter: i
  };
});
export {
  q9 as ChevronIcon,
  T4 as CurrencyConverter,
  _o as CurrencyInput,
  Uo as CurrencyMapper,
  Ro as CurrencySelector,
  f0 as FlagIcon,
  jo as clearCache,
  X9 as fetchCurrencyRate,
  Go as fetchMultipleCurrencyRates,
  Yo as fetchMultipleCurrencyRatesWithQueue,
  Yi as getCachedRate,
  qi as getCachedRateEvenExpired,
  Oo as initCurrencyConverter,
  Qi as setCachedRate
};
