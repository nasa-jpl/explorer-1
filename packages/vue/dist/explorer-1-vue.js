import Y from "dayjs";
import { default as wn } from "dayjs";
import { hasInjectionContext as et, inject as Oe, getCurrentInstance as tt, ref as Be, watch as at, reactive as nt, markRaw as G, effectScope as st, isRef as Q, isReactive as me, toRef as le, toRaw as rt, nextTick as ye, computed as Ne, getCurrentScope as ot, onScopeDispose as it, toRefs as ve, defineComponent as C, openBlock as p, createBlock as E, resolveDynamicComponent as xe, normalizeClass as I, withCtx as B, createElementVNode as w, renderSlot as O, createElementBlock as $, createCommentVNode as L, createVNode as H, resolveComponent as lt, createTextVNode as ze, toDisplayString as Ie, createStaticVNode as ct } from "vue";
import { Fancybox as dt } from "@fancyapps/ui";
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ae(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ye = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    return function(a, t, s) {
      s.updateLocale = function(i, r) {
        var l = s.Ls[i];
        if (l)
          return (r ? Object.keys(r) : []).forEach(function(f) {
            l[f] = r[f];
          }), l;
      };
    };
  });
})(Ye);
var ut = Ye.exports;
const pt = /* @__PURE__ */ ae(ut);
var je = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, s, i) {
      var r = s.prototype, l = r.format;
      i.en.formats = a, r.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, b = function(g, u) {
          return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, v, y) {
            var S = y && y.toUpperCase();
            return v || u[y] || a[y] || u[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, M, j) {
              return M || j.slice(1);
            });
          });
        }(f, h === void 0 ? {} : h);
        return l.call(this, b);
      };
    };
  });
})(je);
var ft = je.exports;
const ht = /* @__PURE__ */ ae(ft);
var Fe = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    var a = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(s, i, r) {
      var l, f = function(u, m, v) {
        v === void 0 && (v = {});
        var y = new Date(u), S = function(N, M) {
          M === void 0 && (M = {});
          var j = M.timeZoneName || "short", q = N + "|" + j, D = t[q];
          return D || (D = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: N, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: j }), t[q] = D), D;
        }(m, v);
        return S.formatToParts(y);
      }, h = function(u, m) {
        for (var v = f(u, m), y = [], S = 0; S < v.length; S += 1) {
          var N = v[S], M = N.type, j = N.value, q = a[M];
          q >= 0 && (y[q] = parseInt(j, 10));
        }
        var D = y[3], P = D === 24 ? 0 : D, d = y[0] + "-" + y[1] + "-" + y[2] + " " + P + ":" + y[4] + ":" + y[5] + ":000", A = +u;
        return (r.utc(d).valueOf() - (A -= A % 1e3)) / 6e4;
      }, b = i.prototype;
      b.tz = function(u, m) {
        u === void 0 && (u = l);
        var v = this.utcOffset(), y = this.toDate(), S = y.toLocaleString("en-US", { timeZone: u }), N = Math.round((y - new Date(S)) / 1e3 / 60), M = r(S, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(y.getTimezoneOffset() / 15) - N, !0);
        if (m) {
          var j = M.utcOffset();
          M = M.add(v - j, "minute");
        }
        return M.$x.$timezone = u, M;
      }, b.offsetName = function(u) {
        var m = this.$x.$timezone || r.tz.guess(), v = f(this.valueOf(), m, { timeZoneName: u }).find(function(y) {
          return y.type.toLowerCase() === "timezonename";
        });
        return v && v.value;
      };
      var g = b.startOf;
      b.startOf = function(u, m) {
        if (!this.$x || !this.$x.$timezone)
          return g.call(this, u, m);
        var v = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return g.call(v, u, m).tz(this.$x.$timezone, !0);
      }, r.tz = function(u, m, v) {
        var y = v && m, S = v || m || l, N = h(+r(), S);
        if (typeof u != "string")
          return r(u).tz(S);
        var M = function(P, d, A) {
          var x = P - 60 * d * 1e3, c = h(x, A);
          if (d === c)
            return [x, d];
          var o = h(x -= 60 * (c - d) * 1e3, A);
          return c === o ? [x, c] : [P - 60 * Math.min(c, o) * 1e3, Math.max(c, o)];
        }(r.utc(u, y).valueOf(), N, S), j = M[0], q = M[1], D = r(j).utcOffset(q);
        return D.$x.$timezone = S, D;
      }, r.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, r.tz.setDefault = function(u) {
        l = u;
      };
    };
  });
})(Fe);
var mt = Fe.exports;
const gt = /* @__PURE__ */ ae(mt);
var Ve = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    return function(a, t) {
      var s = t.prototype, i = s.format;
      s.format = function(r) {
        var l = this, f = this.$locale();
        if (!this.isValid())
          return i.bind(this)(r);
        var h = this.$utils(), b = (r || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(g) {
          switch (g) {
            case "Q":
              return Math.ceil((l.$M + 1) / 3);
            case "Do":
              return f.ordinal(l.$D);
            case "gggg":
              return l.weekYear();
            case "GGGG":
              return l.isoWeekYear();
            case "wo":
              return f.ordinal(l.week(), "W");
            case "w":
            case "ww":
              return h.s(l.week(), g === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return h.s(l.isoWeek(), g === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return h.s(String(l.$H === 0 ? 24 : l.$H), g === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(l.$d.getTime() / 1e3);
            case "x":
              return l.$d.getTime();
            case "z":
              return "[" + l.offsetName() + "]";
            case "zzz":
              return "[" + l.offsetName("long") + "]";
            default:
              return g;
          }
        });
        return i.bind(this)(b);
      };
    };
  });
})(Ve);
var yt = Ve.exports;
const vt = /* @__PURE__ */ ae(yt);
var _t = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t(Y);
  })(K, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var s = t(a), i = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(r) {
      var l = ["th", "st", "nd", "rd"], f = r % 100;
      return "[" + r + (l[(f - 20) % 10] || l[f] || l[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(_t);
Y.extend(ht);
Y.extend(pt);
Y.updateLocale("en", {
  monthsShort: [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
  ]
});
Y.extend(gt);
Y.extend(vt);
const Xa = {
  // To support more locales update add imports to dayjs.js'
  displayDate(e, n, a = "en") {
    if (e) {
      const t = Y(e).locale(a);
      let s;
      switch (n) {
        case "DateTime":
          s = t.format("MMM D YYYY, HH:mm");
          break;
        case "MonthAndYear":
          s = t.format("MMM YYYY");
          break;
        case "Day":
          s = t.format("D");
          break;
        default:
          s = t.format("ll");
      }
      return s;
    }
  }
};
var bt = !1;
function ee(e, n, a) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, n), e.splice(n, 1, a), a) : (e[n] = a, a);
}
function ce(e, n) {
  if (Array.isArray(e)) {
    e.splice(n, 1);
    return;
  }
  delete e[n];
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let J;
const te = (e) => J = e, $t = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function T(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Z;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Z || (Z = {}));
const ge = typeof window < "u", de = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && ge;
function qe(e, n) {
  for (const a in n) {
    const t = n[a];
    if (!(a in e))
      continue;
    const s = e[a];
    T(s) && T(t) && !Q(t) && !me(t) ? e[a] = qe(s, t) : e[a] = t;
  }
  return e;
}
const He = () => {
};
function _e(e, n, a, t = He) {
  e.push(n);
  const s = () => {
    const i = e.indexOf(n);
    i > -1 && (e.splice(i, 1), t());
  };
  return !a && ot() && it(s), s;
}
function W(e, ...n) {
  e.slice().forEach((a) => {
    a(...n);
  });
}
const wt = (e) => e();
function fe(e, n) {
  e instanceof Map && n instanceof Map && n.forEach((a, t) => e.set(t, a)), e instanceof Set && n instanceof Set && n.forEach(e.add, e);
  for (const a in n) {
    if (!n.hasOwnProperty(a))
      continue;
    const t = n[a], s = e[a];
    T(s) && T(t) && e.hasOwnProperty(a) && !Q(t) && !me(t) ? e[a] = fe(s, t) : e[a] = t;
  }
  return e;
}
const Ct = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function kt(e) {
  return !T(e) || !e.hasOwnProperty(Ct);
}
const { assign: V } = Object;
function be(e) {
  return !!(Q(e) && e.effect);
}
function $e(e, n, a, t) {
  const { state: s, actions: i, getters: r } = n, l = a.state.value[e];
  let f;
  function h() {
    !l && (process.env.NODE_ENV === "production" || !t) && (a.state.value[e] = s ? s() : {});
    const b = process.env.NODE_ENV !== "production" && t ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      ve(Be(s ? s() : {}).value)
    ) : ve(a.state.value[e]);
    return V(b, i, Object.keys(r || {}).reduce((g, u) => (process.env.NODE_ENV !== "production" && u in b && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${u}" in store "${e}".`), g[u] = G(Ne(() => {
      te(a);
      const m = a._s.get(e);
      return r[u].call(m, m);
    })), g), {}));
  }
  return f = he(e, h, n, a, t, !0), f;
}
function he(e, n, a = {}, t, s, i) {
  let r;
  const l = V({ actions: {} }, a);
  if (process.env.NODE_ENV !== "production" && !t._e.active)
    throw new Error("Pinia destroyed");
  const f = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !bt && (f.onTrigger = (c) => {
    h ? m = c : h == !1 && !d._hotUpdating && (Array.isArray(m) ? m.push(c) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, b, g = [], u = [], m;
  const v = t.state.value[e];
  !i && !v && (process.env.NODE_ENV === "production" || !s) && (t.state.value[e] = {});
  const y = Be({});
  let S;
  function N(c) {
    let o;
    h = b = !1, process.env.NODE_ENV !== "production" && (m = []), typeof c == "function" ? (c(t.state.value[e]), o = {
      type: Z.patchFunction,
      storeId: e,
      events: m
    }) : (fe(t.state.value[e], c), o = {
      type: Z.patchObject,
      payload: c,
      storeId: e,
      events: m
    });
    const _ = S = Symbol();
    ye().then(() => {
      S === _ && (h = !0);
    }), b = !0, W(g, o, t.state.value[e]);
  }
  const M = i ? function() {
    const { state: o } = a, _ = o ? o() : {};
    this.$patch((z) => {
      V(z, _);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : He
  );
  function j() {
    r.stop(), g = [], u = [], t._s.delete(e);
  }
  function q(c, o) {
    return function() {
      te(t);
      const _ = Array.from(arguments), z = [], R = [];
      function Qe(F) {
        z.push(F);
      }
      function Ke(F) {
        R.push(F);
      }
      W(u, {
        args: _,
        name: c,
        store: d,
        after: Qe,
        onError: Ke
      });
      let U;
      try {
        U = o.apply(this && this.$id === e ? this : d, _);
      } catch (F) {
        throw W(R, F), F;
      }
      return U instanceof Promise ? U.then((F) => (W(z, F), F)).catch((F) => (W(R, F), Promise.reject(F))) : (W(z, U), U);
    };
  }
  const D = /* @__PURE__ */ G({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), P = {
    _p: t,
    // _s: scope,
    $id: e,
    $onAction: _e.bind(null, u),
    $patch: N,
    $reset: M,
    $subscribe(c, o = {}) {
      const _ = _e(g, c, o.detached, () => z()), z = r.run(() => at(() => t.state.value[e], (R) => {
        (o.flush === "sync" ? b : h) && c({
          storeId: e,
          type: Z.direct,
          events: m
        }, R);
      }, V({}, f, o)));
      return _;
    },
    $dispose: j
  }, d = nt(process.env.NODE_ENV !== "production" || de ? V(
    {
      _hmrPayload: D,
      _customProperties: G(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    P
    // must be added later
    // setupStore
  ) : P);
  t._s.set(e, d);
  const x = (t._a && t._a.runWithContext || wt)(() => t._e.run(() => (r = st()).run(n)));
  for (const c in x) {
    const o = x[c];
    if (Q(o) && !be(o) || me(o))
      process.env.NODE_ENV !== "production" && s ? ee(y.value, c, le(x, c)) : i || (v && kt(o) && (Q(o) ? o.value = v[c] : fe(o, v[c])), t.state.value[e][c] = o), process.env.NODE_ENV !== "production" && D.state.push(c);
    else if (typeof o == "function") {
      const _ = process.env.NODE_ENV !== "production" && s ? o : q(c, o);
      x[c] = _, process.env.NODE_ENV !== "production" && (D.actions[c] = o), l.actions[c] = o;
    } else
      process.env.NODE_ENV !== "production" && be(o) && (D.getters[c] = i ? (
        // @ts-expect-error
        a.getters[c]
      ) : o, ge && (x._getters || // @ts-expect-error: same
      (x._getters = G([]))).push(c));
  }
  if (V(d, x), V(rt(d), x), Object.defineProperty(d, "$state", {
    get: () => process.env.NODE_ENV !== "production" && s ? y.value : t.state.value[e],
    set: (c) => {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      N((o) => {
        V(o, c);
      });
    }
  }), process.env.NODE_ENV !== "production" && (d._hotUpdate = G((c) => {
    d._hotUpdating = !0, c._hmrPayload.state.forEach((o) => {
      if (o in d.$state) {
        const _ = c.$state[o], z = d.$state[o];
        typeof _ == "object" && T(_) && T(z) ? qe(_, z) : c.$state[o] = z;
      }
      ee(d, o, le(c.$state, o));
    }), Object.keys(d.$state).forEach((o) => {
      o in c.$state || ce(d, o);
    }), h = !1, b = !1, t.state.value[e] = le(c._hmrPayload, "hotState"), b = !0, ye().then(() => {
      h = !0;
    });
    for (const o in c._hmrPayload.actions) {
      const _ = c[o];
      ee(d, o, q(o, _));
    }
    for (const o in c._hmrPayload.getters) {
      const _ = c._hmrPayload.getters[o], z = i ? (
        // special handling of options api
        Ne(() => (te(t), _.call(d, d)))
      ) : _;
      ee(d, o, z);
    }
    Object.keys(d._hmrPayload.getters).forEach((o) => {
      o in c._hmrPayload.getters || ce(d, o);
    }), Object.keys(d._hmrPayload.actions).forEach((o) => {
      o in c._hmrPayload.actions || ce(d, o);
    }), d._hmrPayload = c._hmrPayload, d._getters = c._getters, d._hotUpdating = !1;
  })), de) {
    const c = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((o) => {
      Object.defineProperty(d, o, V({ value: d[o] }, c));
    });
  }
  return t._p.forEach((c) => {
    if (de) {
      const o = r.run(() => c({
        store: d,
        app: t._a,
        pinia: t,
        options: l
      }));
      Object.keys(o || {}).forEach((_) => d._customProperties.add(_)), V(d, o);
    } else
      V(d, r.run(() => c({
        store: d,
        app: t._a,
        pinia: t,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && d.$state && typeof d.$state == "object" && typeof d.$state.constructor == "function" && !d.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${d.$id}".`), v && i && a.hydrate && a.hydrate(d.$state, v), h = !0, b = !0, d;
}
function Pe(e, n, a) {
  let t, s;
  const i = typeof n == "function";
  if (typeof e == "string")
    t = e, s = i ? a : n;
  else if (s = e, t = e.id, process.env.NODE_ENV !== "production" && typeof t != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function r(l, f) {
    const h = et();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && J && J._testing ? null : l) || (h ? Oe($t, null) : null), l && te(l), process.env.NODE_ENV !== "production" && !J)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    l = J, l._s.has(t) || (i ? he(t, n, s, l) : $e(t, s, l), process.env.NODE_ENV !== "production" && (r._pinia = l));
    const b = l._s.get(t);
    if (process.env.NODE_ENV !== "production" && f) {
      const g = "__hot:" + t, u = i ? he(g, n, s, l, !0) : $e(g, V({}, s), l, !0);
      f._hotUpdate(u), delete l.state.value[g], l._s.delete(g);
    }
    if (process.env.NODE_ENV !== "production" && ge) {
      const g = tt();
      if (g && g.proxy && // avoid adding stores that are just built for hot module replacement
      !f) {
        const u = g.proxy, m = "_pStores" in u ? u._pStores : u._pStores = {};
        m[t] = b;
      }
    }
    return b;
  }
  return r.$id = t, r;
}
const ne = Pe("header", {
  state: () => ({
    headerTransparent: !1,
    highlightPrimary: !0,
    globalChildren: null,
    secondaryNav: null
  }),
  actions: {
    makeTransparent(e) {
      this.headerTransparent = e;
    },
    updateHighlightPrimary(e) {
      this.highlightPrimary = e;
    },
    updateGlobalChildren(e) {
      this.globalChildren = e;
    },
    updateSecondary(e) {
      this.secondaryNav = e;
    }
  }
}), Qa = Pe("theme", {
  state: () => ({
    theme: null
  }),
  actions: {
    setTheme(e) {
      this.theme = e;
    }
  },
  getters: {
    isEdu(e) {
      return e.theme === "ThemeEdu";
    }
  }
});
/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var we;
(function(e) {
  e.pop = "pop", e.push = "push";
})(we || (we = {}));
var Ce;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ce || (Ce = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ke;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ke || (ke = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const St = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Mt() {
  return Oe(St);
}
const Ka = () => {
  const e = ne();
  e && e.makeTransparent(!0);
}, en = (e) => e.title ? e.title : e.linkPage ? e.linkPage.title : "", tn = (e) => {
  if (e.linkPage && e.linkPage.url)
    return e.linkPage.url;
  if (e.path) {
    const n = "http://localhost:3000";
    if (e.path.startsWith(n + "/missions?") || e.path.startsWith(n + "/news?"))
      return e.path.replace(n, "");
    if (e.path.startsWith("/"))
      return e.path;
  }
}, an = (e) => {
  ne().updateGlobalChildren(e);
}, nn = (e) => {
  ne().updateSecondary(e);
}, sn = (e) => {
  ne().updateHighlightPrimary(e);
}, rn = (e) => {
  const n = Mt(), a = n ? n.path : null, t = e, s = t ? t.endsWith("/") ? t : t + "/" : null;
  return a && t && s ? a === t ? !0 : a.startsWith(s) : !1;
}, Dt = (e) => {
  let n = "";
  if (Object.keys(e).some(function(t) {
    return !!t.startsWith("screen");
  })) {
    const t = [];
    for (const [s, i] of Object.entries(e))
      s.startsWith("screen") && typeof i == "object" && i.url && i.width && t.push(`${i.url} ${i.width}w`);
    n = t.join(", ");
  }
  return n;
}, on = (e) => {
  if (e.externalLink)
    return e.externalLink;
  if (e.document)
    return e.document.url;
}, ln = (e) => "https://www.jpl.nasa.gov" + e, cn = (e, n) => {
  if (e && e.original) {
    let a = e.title;
    n && (a = n);
    let t = e.credit;
    return e.detailUrl && (t = ""), [
      {
        title: a,
        url: e.original,
        detailUrl: e.detailUrl,
        credit: t
      }
    ];
  }
  return !1;
}, dn = (e) => {
  const n = [], a = Object.keys(e).map(
    (t) => e[t]
  );
  if (e) {
    for (const t of a)
      for (const s of Object.values(t))
        s && s.original !== void 0 && n.push({
          title: s.title,
          url: s.original,
          detailUrl: s.detailUrl,
          credit: s.credit
        });
    return n;
  } else
    return !1;
}, un = (e, n) => {
  const a = Y(e);
  let t = a.format("D");
  const s = a.format("MMM YYYY");
  if (n) {
    const i = Y(n);
    a.format("MM") === i.format("MM") && a.format("ll") !== i.format("ll") && (t = `${t}-${i.format("D")}`);
  }
  return { day: t, monthAndYear: s };
}, pn = (e, n) => {
  const a = Y(e);
  let t = a.format("ll");
  if (n) {
    const s = Y(n);
    a.format("YYYY") !== s.format("YYYY") ? t = `${a.format("ll")} - ${s.format("ll")}` : a.format("MM") !== s.format("MM") ? t = `${a.format("MMM D")} - ${s.format("ll")}` : s.diff(a, "hour") >= 24 && a.format("ll") !== s.format("ll") && (t = `${a.format("MMM D")}-${s.format(
      "D"
    )}, ${a.format("YYYY")}`);
  }
  return t;
}, fn = (e, n, a) => {
  const t = Y(e);
  let s = "";
  if (n) {
    const i = Y(n);
    i.diff(t, "hour") <= 24 && i.diff(t, "day") === 0 && (a ? t.format("a") === i.format("a") ? s = `${t.format("h:mm")}-${i.format("h:mm a z")}` : s = `${t.format("h:mm a")} - ${i.format("h:mm a z")}` : s = `${t.format("h:mm a z")}`);
  }
  return s;
}, Se = {
  primary: "-primary",
  "reverse-primary": "-reverse-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, Et = C({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(Se).includes(e)
    },
    compact: {
      type: Boolean,
      default: !1,
      required: !1
    },
    blockClasses: {
      type: String,
      required: !1,
      default: "inline-block"
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    },
    ariaLabel: {
      type: String,
      default: "",
      required: !1
    },
    to: {
      type: [String, Object],
      required: !1,
      default: null
    },
    href: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["click"],
  computed: {
    tag() {
      return this.disabled ? "button" : this.to ? "nuxt-link" : this.href ? "a" : "button";
    },
    // necessary for valid html
    // must account for <a>, <nuxt-link>, and <button> use-cases
    theHref() {
      return this.tag === "nuxt-link" ? this.to : this.tag === "a" ? this.href : !1;
    },
    variantClass() {
      let e = Se[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), k = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of n)
    a[t] = s;
  return a;
}, Lt = { class: "label block" };
function Ot(e, n, a, t, s, i) {
  return p(), E(xe(e.tag), {
    class: I(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: n[0] || (n[0] = (r) => e.$emit("click"))
  }, {
    default: B(() => [
      w("span", Lt, [
        O(e.$slots, "default"),
        O(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const hn = /* @__PURE__ */ k(Et, [["render", Ot]]), Me = {
  none: "object-none",
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  scaleDown: "object-scale-down"
}, Bt = C({
  name: "BaseImage",
  props: {
    imageClass: {
      type: String,
      required: !1
    },
    objectFitClass: {
      type: String,
      required: !1,
      default: "contain",
      validator: (e) => Object.keys(Me).includes(e)
    },
    src: {
      type: String,
      required: !0
    },
    srcset: {
      type: String,
      required: !1,
      default: ""
    },
    alt: {
      type: String
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    loading: {
      type: String,
      required: !1,
      default: "lazy"
    }
  },
  data() {
    return {
      lazyNative: !0
    };
  },
  computed: {
    computedClass() {
      let e = "";
      return this.imageClass && (e = e + " " + this.imageClass), this.objectFitClass && (e = e + " " + Me[this.objectFitClass]), this.lazyNative || (e = e + " lazyload"), e;
    }
  },
  mounted() {
    this.featureDetectImageLazyLoad();
  },
  methods: {
    featureDetectImageLazyLoad() {
      if ("loading" in HTMLImageElement.prototype) {
        const e = this.$refs.BaseImage ? this.$refs.BaseImage : null;
        this.lazyNative = !0, e && e.dataset.src && (e.src = e.dataset.src), e && e.dataset.srcset && (e.srcset = e.dataset.srcset);
      } else
        this.lazyNative = !1;
    },
    imageFailed() {
      console.log("Image failed to load.");
    }
  }
}), Nt = ["data-src", "data-srcset", "alt", "width", "height", "loading"];
function xt(e, n, a, t, s, i) {
  return p(), $("div", null, [
    e.src ? (p(), $("img", {
      key: 0,
      ref: "BaseImage",
      class: I(["BaseImage", e.computedClass]),
      "data-src": e.src,
      "data-srcset": e.srcset,
      alt: e.alt,
      width: e.width,
      height: e.height,
      loading: e.loading,
      onError: n[0] || (n[0] = (...r) => e.imageFailed && e.imageFailed(...r))
    }, null, 42, Nt)) : L("", !0)
  ]);
}
const se = /* @__PURE__ */ k(Bt, [["render", xt]]), zt = C({
  name: "IconCaret"
}), It = {
  class: "IconCaret",
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Yt = /* @__PURE__ */ w("path", {
  d: "M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",
  fill: "currentColor"
}, null, -1), jt = [
  Yt
];
function Ft(e, n, a, t, s, i) {
  return p(), $("svg", It, jt);
}
const Te = /* @__PURE__ */ k(zt, [["render", Ft]]), Vt = C({
  name: "MixinAnimationCaret",
  components: {
    IconCaret: Te
  },
  props: {
    // when wrapped in a parent component i.e. BaseLink and grandparent component needs to pass a class
    // appended to classes applied to .MixinAnimationCaret
    passedWrapperClass: {
      type: String || null,
      required: !1,
      default: ""
    },
    // to modify spacing around the caret itself
    arrowClass: {
      type: String,
      required: !1,
      default: ""
    },
    // default color class
    color: {
      type: String,
      required: !1,
      default: "text-primary"
    },
    // default margin left class
    marginLeft: {
      type: String,
      default: "ml-1",
      required: !1
    },
    // appends .caret-inline .MixinAnimationCaret
    inline: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  computed: {
    computedClass() {
      let e = "";
      return this.passedWrapperClass && (e = e + " " + this.passedWrapperClass), this.inline && (e = e + " caret-inline"), e;
    }
  }
}), qt = { class: "arrow" }, Ht = { class: "arrow-fixed" };
function Pt(e, n, a, t, s, i) {
  const r = Te;
  return p(), $("span", {
    class: I(["MixinAnimationCaret", e.computedClass])
  }, [
    w("span", null, [
      O(e.$slots, "default")
    ]),
    w("span", {
      class: I(["arrow-wrapper", [e.arrowClass, e.color, e.marginLeft]]),
      "aria-hidden": "true"
    }, [
      w("span", qt, [
        H(r)
      ]),
      w("span", Ht, [
        H(r)
      ])
    ], 2)
  ], 2);
}
const Ae = /* @__PURE__ */ k(Vt, [["render", Pt]]), De = {
  primary: "text-subtitle text-action can-hover:hover:text-action-dark",
  secondary: "text-subtitle text-action can-hover:hover:text-action-dark",
  default: "-default underline text-action can-hover:hover:text-action-dark",
  none: ""
}, Tt = C({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: "BaseLink",
  components: {
    MixinAnimationCaret: Ae
  },
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default",
      validator: (e) => Object.keys(De).includes(e)
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    exact: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    linkClass: {
      type: String,
      default: ""
    },
    // this will always override the target
    target: {
      type: String,
      required: !1,
      default: void 0
    },
    // if external links should open in a new window
    externalTargetBlank: {
      type: Boolean,
      required: !1,
      default: !1
    },
    // the 'primary' variant will always have the caret
    caret: {
      type: Boolean,
      required: !1,
      default: !1
    },
    // Class applied to the overall MixinAnimationCaret component
    caretWrapperClass: {
      type: String,
      default: ""
    },
    // Class applied to the caret itself
    caretClass: {
      type: String,
      default: ""
    },
    // if caret should be displayed inline with text
    caretInline: {
      type: Boolean,
      required: !1,
      default: !1
    },
    // to customize the caret color. also works with group-hover
    caretColor: {
      type: String,
      required: !1,
      default: ""
    },
    caretMarginLeft: {
      type: String,
      required: !1,
      default: ""
    }
  },
  emits: ["linkClicked", "specificLinkClicked"],
  computed: {
    computedClass() {
      let e = De[this.variant];
      return (this.to || this.href) && (e = e + " cursor-pointer"), this.linkClass && (e = e + " " + this.linkClass), e;
    },
    theTarget() {
      if (this.target)
        return this.target;
      if (this.href && this.externalTargetBlank)
        return "_blank";
    },
    theRel() {
      if (this.theTarget === "_blank")
        return "noopener";
    }
  },
  methods: {
    clickEvent() {
      var e;
      (e = this.$root) == null || e.$emit("linkClicked"), this.$emit("specificLinkClicked");
    }
  }
}), At = ["href", "target", "rel", "aria-label", "title"];
function Wt(e, n, a, t, s, i) {
  const r = Ae, l = lt("nuxt-link");
  return p(), $("div", null, [
    e.to ? (p(), E(l, {
      key: 0,
      class: I(["group", e.computedClass]),
      to: e.to,
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      exact: e.exact,
      onClick: n[0] || (n[0] = (f) => e.clickEvent())
    }, {
      default: B(() => [
        e.caretInline && e.caret ? (p(), E(r, {
          key: 0,
          inline: "",
          class: I(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: B(() => [
            O(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (p(), E(r, {
          key: 1,
          class: I(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: B(() => [
            O(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : O(e.$slots, "default", { key: 2 })
      ]),
      _: 3
    }, 8, ["class", "to", "target", "rel", "aria-label", "title", "exact"])) : e.href ? (p(), $("a", {
      key: 1,
      href: e.href,
      class: I(["group", e.computedClass]),
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      onClick: n[1] || (n[1] = (f) => e.clickEvent())
    }, [
      e.caretInline && e.caret ? (p(), E(r, {
        key: 0,
        inline: "",
        class: I(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: B(() => [
          O(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (p(), E(r, {
        key: 1,
        class: I(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: B(() => [
          O(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : O(e.$slots, "default", { key: 2 })
    ], 10, At)) : L("", !0)
  ]);
}
const We = /* @__PURE__ */ k(Tt, [["render", Wt]]), ue = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6"
}, Rt = C({
  name: "BaseHeading",
  props: {
    level: {
      type: String || null,
      required: !1,
      default: "h2",
      validator: (e) => Object.keys(ue).includes(e)
    },
    size: {
      type: String,
      required: !1,
      default: "h2",
      validator: (e) => Object.keys(ue).includes(e)
    }
  },
  computed: {
    computedTag() {
      return this.level ? this.level : this.size;
    },
    computedClass() {
      return this.size ? ue[this.size] : "";
    }
  }
});
function Ut(e, n, a, t, s, i) {
  return p(), E(xe(e.computedTag), {
    class: I(e.computedClass)
  }, {
    default: B(() => [
      O(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Re = /* @__PURE__ */ k(Rt, [["render", Ut]]), Gt = C({
  name: "BlockHeading",
  components: {
    BaseHeading: Re
  },
  props: {
    data: {
      type: Object,
      required: !1
    }
  }
});
function Jt(e, n, a, t, s, i) {
  const r = Re;
  return e.data ? (p(), E(r, {
    key: 0,
    level: e.data.level,
    size: e.data.size
  }, {
    default: B(() => [
      ze(Ie(e.data.heading), 1)
    ]),
    _: 1
  }, 8, ["level", "size"])) : L("", !0);
}
const mn = /* @__PURE__ */ k(Gt, [["render", Jt]]), Ee = {
  "col-1": "lg:col-start-1 lg:col-end-13",
  "col-2": "lg:col-start-2 lg:col-end-12",
  "col-3": "lg:col-start-3 lg:col-end-11",
  "col-4": "md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10"
}, Zt = C({
  name: "LayoutHelper",
  props: {
    indent: {
      type: String,
      required: !1,
      default: "col-1",
      validator: (e) => Object.keys(Ee).includes(e)
    }
  },
  computed: {
    theWidth() {
      return Ee[this.indent];
    }
  }
}), Xt = { class: "LayoutHelper BaseGrid container mx-auto" };
function Qt(e, n, a, t, s, i) {
  return p(), $("div", Xt, [
    w("div", {
      class: I(e.theWidth + " col-start-1 col-end-13 lg:px-0 px-4 relative")
    }, [
      O(e.$slots, "default")
    ], 2)
  ]);
}
const Ue = /* @__PURE__ */ k(Zt, [["render", Qt]]), Kt = C({
  name: "BaseImageCaption",
  components: {
    BaseLink: We
  },
  props: {
    data: {
      type: Object,
      required: !0,
      default: void 0
    }
  }
}), ea = {
  key: 0,
  class: "BaseImageCaption text-body-sm"
}, ta = { class: "inline mr-2" }, aa = ["innerHTML"], na = {
  key: 0,
  class: "inline"
};
function sa(e, n, a, t, s, i) {
  const r = We;
  return e.data ? (p(), $("div", ea, [
    w("div", ta, [
      w("div", {
        class: "the-caption-text inline",
        innerHTML: e.data.caption
      }, null, 8, aa),
      e.data.credit ? (p(), $("span", na, " Credit: " + Ie(e.data.credit), 1)) : L("", !0)
    ]),
    e.data.detailUrl ? (p(), E(r, {
      key: 0,
      class: "inline-block",
      variant: "default",
      to: e.data.detailUrl
    }, {
      default: B(() => [
        ze(" Full Image Details ")
      ]),
      _: 1
    }, 8, ["to"])) : L("", !0)
  ])) : L("", !0);
}
const re = /* @__PURE__ */ k(Kt, [["render", sa]]), ra = C({
  name: "IconExpand"
}), oa = {
  class: "IconExpand",
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, ia = /* @__PURE__ */ w("path", {
  d: "M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z",
  fill: "currentColor",
  "fill-rule": "evenodd"
}, null, -1), la = [
  ia
];
function ca(e, n, a, t, s, i) {
  return p(), $("svg", oa, la);
}
const Ge = /* @__PURE__ */ k(ra, [["render", ca]]), da = C({
  name: "MixinFancyboxOpenButton",
  components: {
    IconExpand: Ge
  }
}), ua = {
  ref: "FancyboxOpenButton",
  class: "MixinFancyboxOpenButton",
  role: "presentation"
}, pa = { class: "BaseButton -primary -icon-only pointer-events-none" }, fa = { class: "icon" };
function ha(e, n, a, t, s, i) {
  const r = Ge;
  return p(), $("div", ua, [
    w("div", pa, [
      w("span", fa, [
        H(r)
      ])
    ])
  ], 512);
}
const Je = /* @__PURE__ */ k(da, [["render", ha]]), X = {
  pageXOffset: 0,
  pageYOffset: 0,
  element() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  },
  activate(e) {
    X.pageXOffset = window.pageXOffset, X.pageYOffset = window.pageYOffset, e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
  },
  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
}, pe = {
  // Normal  (Vanilla fancybox theme)
  normal: "fancybox-theme-normal ThemeVariantLight",
  // Light   (WCP default lighter lightbox)
  light: "fancybox-theme-light ThemeVariantLight",
  // Dark    (WWW default black lightbox)
  dark: "fancybox-theme-dark ThemeVariantDark"
}, ma = C({
  name: "MixinFancybox",
  components: {
    MixinFancyboxOpenButton: Je
  },
  filters: {
    truncate(e) {
      return e && e.length > 280 && (e = e.substring(0, 277) + "..."), e;
    }
  },
  props: {
    infinite: {
      type: Boolean,
      required: !1,
      default: !0
    },
    showThumbnails: {
      type: Boolean,
      required: !1,
      default: !1
    },
    animated: {
      type: Boolean,
      required: !1,
      default: !1
    },
    galleryName: {
      type: String,
      required: !1,
      default: null
    },
    src: {
      type: String,
      required: !1
    },
    srcSet: {
      type: String,
      required: !1
    },
    sizes: {
      type: String,
      required: !1
    },
    downloadSrc: {
      type: String,
      required: !1
    },
    caption: {
      type: String,
      required: !1
    },
    credit: {
      type: String,
      required: !1
    },
    title: {
      type: String,
      required: !1
    },
    detailUrl: {
      type: String,
      required: !1
    },
    width: {
      type: String,
      required: !1
    },
    height: {
      type: String,
      required: !1
    },
    theme: {
      type: String,
      required: !1,
      default: "dark",
      validator: (e) => Object.keys(pe).includes(e)
    }
  },
  computed: {
    computedClass() {
      return pe[this.theme];
    },
    computedCaption() {
      let e = this.caption && this.caption.length ? this.$options.filters.truncate(this.caption, 180) : "";
      return this.credit && (e = `${e} Credit: ${this.credit}`), e;
    }
  },
  mounted() {
    return dt.bind("[data-fancybox]", {
      infinite: this.infinite,
      // mainClass from theme variants
      mainClass: this.computedClass ? this.computedClass : pe.dark,
      showClass: "fancybox-fadeIn",
      // "fancybox-fadeIn" | "fancybox-zoomInUp" | false
      hideClass: "fancybox-fadeOut",
      // "fancybox-fadeOut" | "fancybox-zoomOutDown" | false
      autoFocus: !0,
      maxScale: 6,
      slideshow: {
        delay: 1e4
      },
      // see https://fancyapps.com/docs/ui/fancybox#animations
      animated: this.animated,
      Image: {
        zoom: this.animated
      },
      Thumbs: {
        autoStart: this.showThumbnails
      },
      Toolbar: {
        items: {
          counter: {
            type: "div",
            class: "fancybox__counter",
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            tabindex: -1,
            position: "left"
          },
          prev: {
            type: "button",
            class: "fancybox__button--prev",
            label: "PREV",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>',
            click(e) {
              e.preventDefault(), this.fancybox.prev();
            }
          },
          next: {
            type: "button",
            class: "fancybox__button--next",
            label: "NEXT",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>',
            click(e) {
              e.preventDefault(), this.fancybox.next();
            }
          },
          fullscreen: {
            type: "button",
            class: "fancybox__button--fullscreen",
            label: "TOGGLE_FULLSCREEN",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g><g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g></svg>',
            click(e) {
              e.preventDefault(), X.element() ? X.deactivate() : X.activate(this.fancybox.$container);
            }
          },
          slideshow: {
            type: "button",
            class: "fancybox__button--slideshow",
            label: "TOGGLE_SLIDESHOW",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g><g><path d="M7 4v15M17 4v15"/></g></svg>',
            click(e) {
              e.preventDefault(), this.Slideshow.toggle();
            }
          },
          zoom: {
            type: "button",
            class: "fancybox__button--zoom",
            label: "TOGGLE_ZOOM",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click(e) {
              e.preventDefault();
              const n = this.fancybox.getSlide().Panzoom;
              n && n.toggleZoom();
            }
          },
          download: {
            type: "link",
            label: "DOWNLOAD",
            class: "fancybox__button--download",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click(e) {
              e.stopPropagation();
            }
          },
          thumbs: {
            type: "button",
            label: "TOGGLE_THUMBS",
            class: "fancybox__button--thumbs",
            html: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512" width="24" height="21" stroke-width="3px"><path stroke-width="3px" fill="white" d="M512 0C547.3 0 576 28.65 576 64V288C576 323.3 547.3 352 512 352H64C28.65 352 0 323.3 0 288V64C0 28.65 28.65 0 64 0H512zM512 64H64V288H512V64zM0 448C0 430.3 14.33 416 32 416H64C81.67 416 96 430.3 96 448V480C96 497.7 81.67 512 64 512H32C14.33 512 0 497.7 0 480V448zM224 416C241.7 416 256 430.3 256 448V480C256 497.7 241.7 512 224 512H192C174.3 512 160 497.7 160 480V448C160 430.3 174.3 416 192 416H224zM320 448C320 430.3 334.3 416 352 416H384C401.7 416 416 430.3 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448zM544 416C561.7 416 576 430.3 576 448V480C576 497.7 561.7 512 544 512H512C494.3 512 480 497.7 480 480V448C480 430.3 494.3 416 512 416H544z"/></svg>',
            click(e) {
              e.stopPropagation();
              const n = this.fancybox.plugins.Thumbs;
              n && n.toggle();
            }
          },
          close: {
            type: "button",
            label: "CLOSE",
            class: "fancybox__button--close",
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            tabindex: 1,
            click(e) {
              e.stopPropagation(), e.preventDefault(), this.fancybox.close();
            }
          }
        },
        display: [
          { id: "counter", position: "left" },
          "zoom",
          "slideshow",
          "fullscreen",
          // 'download',
          "thumbs",
          "captions",
          "close"
        ]
      },
      caption(e, n, a) {
        let t = a.caption;
        return a.type === "image" && (t = `<div class="mx-auto container">
              ${a.title ? `<h6 class="font-semibold text-4xl mb-1">${a.title}</h6>` : ""}
              ${t.length ? `<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${t}</div></div>` : ""}
              ${a.url ? `<a href="${a.url}" class="inline-block text-body-md whitespace-nowrap relative text-primary can-hover:hover:text-primary-dark cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>` : ""}
            </div>`), t;
      }
    });
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
}), ga = ["href", "data-fancybox", "data-src", "data-width", "data-height", "data-srcset", "data-sizes", "data-theme", "data-caption", "data-title", "data-animated", "data-download-src", "data-url", "data-max-width"];
function ya(e, n, a, t, s, i) {
  const r = Je;
  return p(), $("a", {
    class: "MixinFancybox group cursor-pointer block",
    "aria-label": "Open in Lightbox",
    href: e.src,
    "data-fancybox": e.galleryName || "",
    "data-src": e.src,
    "data-width": e.src ? e.src.width : null,
    "data-height": e.src ? e.src.height : null,
    "data-srcset": e.srcSet,
    "data-sizes": e.sizes,
    "data-theme": e.computedClass,
    "data-caption": e.computedCaption,
    "data-title": e.title,
    "data-animated": e.animated,
    "data-download-src": e.downloadSrc,
    "data-url": e.detailUrl,
    "data-max-width": e.src ? e.src.width : null,
    onClick: n[0] || (n[0] = (l) => e.$emit("click"))
  }, [
    H(r),
    O(e.$slots, "default")
  ], 8, ga);
}
const oe = /* @__PURE__ */ k(ma, [["render", ya]]), Le = {
  none: "aspect-ratio-none",
  portrait: "aspect-ratio-four-five",
  square: "aspect-ratio-square",
  "1:1": "aspect-ratio-one-one",
  "2:1": "aspect-ratio-two-one",
  "2:3": "aspect-ratio-two-three",
  "3:2": "aspect-ratio-three-two",
  "4:3": "aspect-ratio-four-three",
  "4:5": "aspect-ratio-four-five",
  "7:8": "aspect-ratio-seven-eight",
  "8:7": "aspect-ratio-eight-seven",
  "9:16": "aspect-ratio-nine-sixteen",
  "12:9": "aspect-ratio-twelve-nine",
  "16:7": "aspect-ratio-sixteen-seven",
  "16:9": "aspect-ratio-sixteen-nine",
  "21:9": "aspect-ratio-twentyone-nine"
}, va = C({
  name: "BaseImagePlaceholder",
  props: {
    darkMode: {
      type: Boolean,
      required: !1,
      default: !0
    },
    transparentMode: {
      type: Boolean,
      required: !1,
      default: !1
    },
    noLogo: {
      type: Boolean,
      default: !1
    },
    aspectRatio: {
      type: String,
      default: "none",
      validator: (e) => Object.keys(Le).includes(e)
    },
    responsiveAspectRatio: {
      type: String,
      required: !1
    }
  },
  computed: {
    computedClass() {
      let e = "";
      return this.aspectRatio && (e = e + Le[this.aspectRatio]), this.responsiveAspectRatio && (e = `${e} ${this.responsiveAspectRatio}`), this.transparentMode ? e = e + " transparent-theme" : this.darkMode ? e = e + " dark-theme" : e = e + " light-theme", this.noLogo && (e = e + " no-logo"), e;
    }
  }
});
function _a(e, n, a, t, s, i) {
  return p(), $("div", null, [
    w("div", {
      class: I("BaseImagePlaceholder " + e.computedClass)
    }, [
      O(e.$slots, "default", {}, void 0, !0),
      O(e.$slots, "lightbox", {}, void 0, !0)
    ], 2)
  ]);
}
const ie = /* @__PURE__ */ k(va, [["render", _a], ["__scopeId", "data-v-29efd36e"]]), ba = C({
  name: "BlockImageStandard",
  components: {
    MixinFancybox: oe,
    BaseImage: se,
    BaseImagePlaceholder: ie,
    BaseImageCaption: re
  },
  props: {
    data: {
      type: Object,
      required: !1
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: !0
    },
    // overrides caption provided with image model
    caption: {
      type: String,
      required: !1
    },
    // if the image should be constrained to a 16:9 aspect ratio
    constrain: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    theCaption() {
      if (this.caption && this.caption.length > 2 && this.displayCaption)
        return this.caption;
      if (this.displayCaption && this.data && this.data.caption && this.data.caption.length > 2)
        return this.data.caption;
    },
    // reform the data object with the computed caption
    theData() {
      if (this.data)
        return {
          ...this.data,
          caption: this.theCaption
        };
    },
    hasCaptionArea() {
      return !!(this.data && (this.theCaption || this.data.credit || this.data.detailUrl));
    }
  }
}), $a = { key: 0 }, wa = {
  key: 1,
  class: "lg:px-0 p-4 pb-0"
};
function Ca(e, n, a, t, s, i) {
  const r = se, l = ie, f = oe, h = re;
  return e.theData ? (p(), $("div", $a, [
    e.theData.src ? (p(), E(f, {
      key: 0,
      src: e.theData.original,
      caption: e.theData.caption,
      credit: e.theData.credit,
      "detail-url": e.theData.detailUrl
    }, {
      default: B(() => [
        H(l, {
          "aspect-ratio": e.constrain ? "16:9" : "none",
          "dark-mode": ""
        }, {
          default: B(() => [
            e.theData.src ? (p(), E(r, {
              key: 0,
              src: e.theData.src.url,
              srcset: e.theData.srcSet,
              width: e.theData.src.width,
              height: e.theData.src.height,
              alt: e.theData.alt,
              "image-class": e.constrain ? void 0 : "w-full h-auto",
              "object-fit-class": e.constrain ? "contain" : void 0,
              loading: "lazy"
            }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : L("", !0)
          ]),
          _: 1
        }, 8, ["aspect-ratio"])
      ]),
      _: 1
    }, 8, ["src", "caption", "credit", "detail-url"])) : L("", !0),
    e.theData && e.hasCaptionArea ? (p(), $("div", wa, [
      H(h, { data: e.theData }, null, 8, ["data"])
    ])) : L("", !0)
  ])) : L("", !0);
}
const Ze = /* @__PURE__ */ k(ba, [["render", Ca]]), ka = C({
  name: "BlockImageFullBleed",
  components: {
    MixinFancybox: oe,
    BaseImage: se,
    BaseImagePlaceholder: ie,
    BaseImageCaption: re
  },
  props: {
    data: {
      type: Object,
      required: !1
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: !0
    },
    // overrides caption provided with image model
    caption: {
      type: String,
      required: !1
    },
    // if the image should be constrained to a fixed aspect ratio (21:9 on smaller screens, 2:1 on larger screens)
    constrain: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      openTab: 1
    };
  },
  computed: {
    theCaption() {
      if (this.caption && this.caption.length > 2 && this.displayCaption)
        return this.caption;
      if (this.displayCaption && this.data && this.data.caption && this.data.caption.length > 2)
        return this.data.caption;
    },
    theSrcSet() {
      return this.theData ? Dt(this.theData) : void 0;
    },
    // reform the data object with the computed caption
    theData() {
      if (this.data)
        return {
          ...this.data,
          caption: this.theCaption
        };
    },
    hasCaptionArea() {
      return !!(this.data && (this.theCaption || this.data.credit || this.data.detailUrl));
    }
  }
}), Sa = { key: 0 }, Ma = { class: "bg-gray-light" }, Da = { class: "max-w-screen-3xl mx-auto" }, Ea = {
  key: 0,
  class: "max-w-screen-3xl p-4 pb-0 mx-auto"
};
function La(e, n, a, t, s, i) {
  const r = se, l = ie, f = oe, h = re;
  return e.theData ? (p(), $("div", Sa, [
    w("div", Ma, [
      w("div", Da, [
        e.theData.src ? (p(), E(f, {
          key: 0,
          src: e.theData.original,
          caption: e.theData.caption,
          credit: e.theData.credit,
          "detail-url": e.theData.detailUrl
        }, {
          default: B(() => [
            H(l, {
              "aspect-ratio": e.constrain ? "16:9" : "none",
              "responsive-aspect-ratio": e.constrain ? "lg:aspect-ratio-two-one" : "",
              "dark-mode": ""
            }, {
              default: B(() => [
                e.theData.src && e.theData.srcCropped ? (p(), E(r, {
                  key: 0,
                  src: e.constrain ? e.theData.srcCropped.url : e.theData.src.url,
                  srcset: e.theData.srcSet && !e.constrain ? e.theData.srcSet : e.theSrcSet,
                  width: e.constrain ? e.theData.srcCropped.width : e.theData.src.width,
                  height: e.constrain ? e.theData.srcCropped.height : e.theData.src.height,
                  alt: e.theData.alt,
                  "image-class": e.constrain ? void 0 : "w-full h-auto",
                  "object-fit-class": e.constrain ? "cover" : void 0,
                  loading: "lazy"
                }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : L("", !0)
              ]),
              _: 1
            }, 8, ["aspect-ratio", "responsive-aspect-ratio"])
          ]),
          _: 1
        }, 8, ["src", "caption", "credit", "detail-url"])) : L("", !0)
      ])
    ]),
    e.data && e.hasCaptionArea ? (p(), $("div", Ea, [
      H(h, { data: e.theData }, null, 8, ["data"])
    ])) : L("", !0)
  ])) : L("", !0);
}
const Xe = /* @__PURE__ */ k(ka, [["render", La]]), Oa = C({
  name: "BlockImage",
  components: {
    BlockImageStandard: Ze,
    BlockImageFullBleed: Xe,
    LayoutHelper: Ue
  },
  props: {
    data: {
      type: Object,
      required: !1
    },
    fullBleed: {
      type: Boolean,
      required: !1,
      default: !1
    }
  }
}), Ba = { key: 0 };
function Na(e, n, a, t, s, i) {
  const r = Xe, l = Ze, f = Ue;
  return e.data ? (p(), $("div", Ba, [
    e.fullBleed && e.data.imageFullBleed ? (p(), E(r, {
      key: 0,
      data: e.data.imageFullBleed,
      "display-caption": e.data.displayCaption,
      caption: e.data.caption,
      constrain: e.data.constrain
    }, null, 8, ["data", "display-caption", "caption", "constrain"])) : (p(), E(f, {
      key: 1,
      indent: "col-2"
    }, {
      default: B(() => [
        H(l, {
          data: e.data.image,
          "display-caption": e.data.displayCaption,
          caption: e.data.caption,
          constrain: e.data.constrain
        }, null, 8, ["data", "display-caption", "caption", "constrain"])
      ]),
      _: 1
    }))
  ])) : L("", !0);
}
const gn = /* @__PURE__ */ k(Oa, [["render", Na]]), xa = C({
  name: "IconArrows"
}), za = {
  class: "IconArrows",
  width: "32",
  height: "12",
  viewBox: "0 0 32 12",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Ia = /* @__PURE__ */ ct('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>', 1), Ya = [
  Ia
];
function ja(e, n, a, t, s, i) {
  return p(), $("svg", za, Ya);
}
const yn = /* @__PURE__ */ k(xa, [["render", ja]]), Fa = C({
  name: "IconLocation"
}), Va = {
  class: "IconLocation",
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, qa = /* @__PURE__ */ w("g", {
  transform: "translate(-4 -1)",
  stroke: "currentColor",
  "stroke-width": "2",
  fill: "none"
}, [
  /* @__PURE__ */ w("path", { d: "M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z" }),
  /* @__PURE__ */ w("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })
], -1), Ha = [
  qa
];
function Pa(e, n, a, t, s, i) {
  return p(), $("svg", Va, Ha);
}
const vn = /* @__PURE__ */ k(Fa, [["render", Pa]]), Ta = C({
  name: "IconArrows"
}), Aa = {
  class: "IconUser",
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Wa = /* @__PURE__ */ w("path", {
  d: "M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",
  fill: "currentColor"
}, null, -1), Ra = [
  Wa
];
function Ua(e, n, a, t, s, i) {
  return p(), $("svg", Aa, Ra);
}
const _n = /* @__PURE__ */ k(Ta, [["render", Ua]]);
export {
  hn as BaseButton,
  hn as BaseHeading,
  se as BaseImage,
  We as BaseLink,
  mn as BlockHeading,
  gn as BlockImage,
  Xe as BlockImageFullBleed,
  Ze as BlockImageStandard,
  yn as IconArrows,
  Te as IconCaret,
  vn as IconLocation,
  _n as IconUser,
  Ae as MixinAnimationCaret,
  oe as MixinFancybox,
  wn as dayjs,
  Xa as filters,
  ln as mixinCanonicalUrl,
  pn as mixinFormatEventDates,
  fn as mixinFormatEventTimeInHoursAndMinutes,
  un as mixinFormatSplitEventDates,
  on as mixinGetExternalLink,
  en as mixinGetLinkText,
  tn as mixinGetRouterLink,
  Dt as mixinGetSrcSet,
  sn as mixinHighlightPrimary,
  rn as mixinIsActivePath,
  dn as mixinLightboxGalleryItems,
  cn as mixinLightboxItems,
  Ka as mixinTransparentHeader,
  an as mixinUpdateGlobalChildren,
  nn as mixinUpdateSecondary,
  ne as useHeaderStore,
  Qa as useThemeStore
};
