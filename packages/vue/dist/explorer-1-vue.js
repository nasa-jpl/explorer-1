import { hasInjectionContext as Ye, inject as Ae, getCurrentInstance as We, ref as Se, watch as Re, reactive as Ue, markRaw as G, effectScope as Ge, isRef as Q, isReactive as fe, toRef as ie, toRaw as Je, nextTick as me, computed as Me, getCurrentScope as Ze, onScopeDispose as Xe, toRefs as ge, defineComponent as S, openBlock as p, createBlock as I, resolveDynamicComponent as Qe, normalizeClass as q, withCtx as V, createElementVNode as w, renderSlot as N, createElementBlock as $, createCommentVNode as E, createVNode as T, resolveComponent as Ke, toDisplayString as et, createTextVNode as tt, createStaticVNode as at } from "vue";
import W from "dayjs";
import { Fancybox as nt } from "@fancyapps/ui";
var st = !1;
function ee(e, n, a) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, n), e.splice(n, 1, a), a) : (e[n] = a, a);
}
function le(e, n) {
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
const te = (e) => J = e, ot = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function P(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Z;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Z || (Z = {}));
const he = typeof window < "u", ce = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && he;
function De(e, n) {
  for (const a in n) {
    const t = n[a];
    if (!(a in e))
      continue;
    const r = e[a];
    P(r) && P(t) && !Q(t) && !fe(t) ? e[a] = De(r, t) : e[a] = t;
  }
  return e;
}
const Ee = () => {
};
function ye(e, n, a, t = Ee) {
  e.push(n);
  const r = () => {
    const c = e.indexOf(n);
    c > -1 && (e.splice(c, 1), t());
  };
  return !a && Ze() && Xe(r), r;
}
function A(e, ...n) {
  e.slice().forEach((a) => {
    a(...n);
  });
}
const rt = (e) => e();
function ue(e, n) {
  e instanceof Map && n instanceof Map && n.forEach((a, t) => e.set(t, a)), e instanceof Set && n instanceof Set && n.forEach(e.add, e);
  for (const a in n) {
    if (!n.hasOwnProperty(a))
      continue;
    const t = n[a], r = e[a];
    P(r) && P(t) && e.hasOwnProperty(a) && !Q(t) && !fe(t) ? e[a] = ue(r, t) : e[a] = t;
  }
  return e;
}
const it = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function lt(e) {
  return !P(e) || !e.hasOwnProperty(it);
}
const { assign: F } = Object;
function ve(e) {
  return !!(Q(e) && e.effect);
}
function _e(e, n, a, t) {
  const { state: r, actions: c, getters: s } = n, i = a.state.value[e];
  let f;
  function h() {
    !i && (process.env.NODE_ENV === "production" || !t) && (a.state.value[e] = r ? r() : {});
    const b = process.env.NODE_ENV !== "production" && t ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      ge(Se(r ? r() : {}).value)
    ) : ge(a.state.value[e]);
    return F(b, c, Object.keys(s || {}).reduce((g, u) => (process.env.NODE_ENV !== "production" && u in b && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${u}" in store "${e}".`), g[u] = G(Me(() => {
      te(a);
      const m = a._s.get(e);
      return s[u].call(m, m);
    })), g), {}));
  }
  return f = pe(e, h, n, a, t, !0), f;
}
function pe(e, n, a = {}, t, r, c) {
  let s;
  const i = F({ actions: {} }, a);
  if (process.env.NODE_ENV !== "production" && !t._e.active)
    throw new Error("Pinia destroyed");
  const f = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !st && (f.onTrigger = (l) => {
    h ? m = l : h == !1 && !d._hotUpdating && (Array.isArray(m) ? m.push(l) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, b, g = [], u = [], m;
  const v = t.state.value[e];
  !c && !v && (process.env.NODE_ENV === "production" || !r) && (t.state.value[e] = {});
  const y = Se({});
  let C;
  function L(l) {
    let o;
    h = b = !1, process.env.NODE_ENV !== "production" && (m = []), typeof l == "function" ? (l(t.state.value[e]), o = {
      type: Z.patchFunction,
      storeId: e,
      events: m
    }) : (ue(t.state.value[e], l), o = {
      type: Z.patchObject,
      payload: l,
      storeId: e,
      events: m
    });
    const _ = C = Symbol();
    me().then(() => {
      C === _ && (h = !0);
    }), b = !0, A(g, o, t.state.value[e]);
  }
  const k = c ? function() {
    const { state: o } = a, _ = o ? o() : {};
    this.$patch((B) => {
      F(B, _);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ee
  );
  function z() {
    s.stop(), g = [], u = [], t._s.delete(e);
  }
  function j(l, o) {
    return function() {
      te(t);
      const _ = Array.from(arguments), B = [], R = [];
      function He(x) {
        B.push(x);
      }
      function Pe(x) {
        R.push(x);
      }
      A(u, {
        args: _,
        name: l,
        store: d,
        after: He,
        onError: Pe
      });
      let U;
      try {
        U = o.apply(this && this.$id === e ? this : d, _);
      } catch (x) {
        throw A(R, x), x;
      }
      return U instanceof Promise ? U.then((x) => (A(B, x), x)).catch((x) => (A(R, x), Promise.reject(x))) : (A(B, U), U);
    };
  }
  const D = /* @__PURE__ */ G({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), H = {
    _p: t,
    // _s: scope,
    $id: e,
    $onAction: ye.bind(null, u),
    $patch: L,
    $reset: k,
    $subscribe(l, o = {}) {
      const _ = ye(g, l, o.detached, () => B()), B = s.run(() => Re(() => t.state.value[e], (R) => {
        (o.flush === "sync" ? b : h) && l({
          storeId: e,
          type: Z.direct,
          events: m
        }, R);
      }, F({}, f, o)));
      return _;
    },
    $dispose: z
  }, d = Ue(process.env.NODE_ENV !== "production" || ce ? F(
    {
      _hmrPayload: D,
      _customProperties: G(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    H
    // must be added later
    // setupStore
  ) : H);
  t._s.set(e, d);
  const O = (t._a && t._a.runWithContext || rt)(() => t._e.run(() => (s = Ge()).run(n)));
  for (const l in O) {
    const o = O[l];
    if (Q(o) && !ve(o) || fe(o))
      process.env.NODE_ENV !== "production" && r ? ee(y.value, l, ie(O, l)) : c || (v && lt(o) && (Q(o) ? o.value = v[l] : ue(o, v[l])), t.state.value[e][l] = o), process.env.NODE_ENV !== "production" && D.state.push(l);
    else if (typeof o == "function") {
      const _ = process.env.NODE_ENV !== "production" && r ? o : j(l, o);
      O[l] = _, process.env.NODE_ENV !== "production" && (D.actions[l] = o), i.actions[l] = o;
    } else
      process.env.NODE_ENV !== "production" && ve(o) && (D.getters[l] = c ? (
        // @ts-expect-error
        a.getters[l]
      ) : o, he && (O._getters || // @ts-expect-error: same
      (O._getters = G([]))).push(l));
  }
  if (F(d, O), F(Je(d), O), Object.defineProperty(d, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? y.value : t.state.value[e],
    set: (l) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      L((o) => {
        F(o, l);
      });
    }
  }), process.env.NODE_ENV !== "production" && (d._hotUpdate = G((l) => {
    d._hotUpdating = !0, l._hmrPayload.state.forEach((o) => {
      if (o in d.$state) {
        const _ = l.$state[o], B = d.$state[o];
        typeof _ == "object" && P(_) && P(B) ? De(_, B) : l.$state[o] = B;
      }
      ee(d, o, ie(l.$state, o));
    }), Object.keys(d.$state).forEach((o) => {
      o in l.$state || le(d, o);
    }), h = !1, b = !1, t.state.value[e] = ie(l._hmrPayload, "hotState"), b = !0, me().then(() => {
      h = !0;
    });
    for (const o in l._hmrPayload.actions) {
      const _ = l[o];
      ee(d, o, j(o, _));
    }
    for (const o in l._hmrPayload.getters) {
      const _ = l._hmrPayload.getters[o], B = c ? (
        // special handling of options api
        Me(() => (te(t), _.call(d, d)))
      ) : _;
      ee(d, o, B);
    }
    Object.keys(d._hmrPayload.getters).forEach((o) => {
      o in l._hmrPayload.getters || le(d, o);
    }), Object.keys(d._hmrPayload.actions).forEach((o) => {
      o in l._hmrPayload.actions || le(d, o);
    }), d._hmrPayload = l._hmrPayload, d._getters = l._getters, d._hotUpdating = !1;
  })), ce) {
    const l = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((o) => {
      Object.defineProperty(d, o, F({ value: d[o] }, l));
    });
  }
  return t._p.forEach((l) => {
    if (ce) {
      const o = s.run(() => l({
        store: d,
        app: t._a,
        pinia: t,
        options: i
      }));
      Object.keys(o || {}).forEach((_) => d._customProperties.add(_)), F(d, o);
    } else
      F(d, s.run(() => l({
        store: d,
        app: t._a,
        pinia: t,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && d.$state && typeof d.$state == "object" && typeof d.$state.constructor == "function" && !d.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${d.$id}".`), v && c && a.hydrate && a.hydrate(d.$state, v), h = !0, b = !0, d;
}
function ct(e, n, a) {
  let t, r;
  const c = typeof n == "function";
  t = e, r = c ? a : n;
  function s(i, f) {
    const h = Ye();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && J && J._testing ? null : i) || (h ? Ae(ot, null) : null), i && te(i), process.env.NODE_ENV !== "production" && !J)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = J, i._s.has(t) || (c ? pe(t, n, r, i) : _e(t, r, i), process.env.NODE_ENV !== "production" && (s._pinia = i));
    const b = i._s.get(t);
    if (process.env.NODE_ENV !== "production" && f) {
      const g = "__hot:" + t, u = c ? pe(g, n, r, i, !0) : _e(g, F({}, r), i, !0);
      f._hotUpdate(u), delete i.state.value[g], i._s.delete(g);
    }
    if (process.env.NODE_ENV !== "production" && he) {
      const g = We();
      if (g && g.proxy && // avoid adding stores that are just built for hot module replacement
      !f) {
        const u = g.proxy, m = "_pStores" in u ? u._pStores : u._pStores = {};
        m[t] = b;
      }
    }
    return b;
  }
  return s.$id = t, s;
}
const dt = ct("header", {
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
});
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ae(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    return function(a, t, r) {
      r.updateLocale = function(c, s) {
        var i = r.Ls[c];
        if (i)
          return (s ? Object.keys(s) : []).forEach(function(f) {
            i[f] = s[f];
          }), i;
      };
    };
  });
})(Le);
var ut = Le.exports;
const pt = /* @__PURE__ */ ae(ut);
var Oe = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, r, c) {
      var s = r.prototype, i = s.format;
      c.en.formats = a, s.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, b = function(g, u) {
          return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, v, y) {
            var C = y && y.toUpperCase();
            return v || u[y] || a[y] || u[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, k, z) {
              return k || z.slice(1);
            });
          });
        }(f, h === void 0 ? {} : h);
        return i.call(this, b);
      };
    };
  });
})(Oe);
var ft = Oe.exports;
const ht = /* @__PURE__ */ ae(ft);
var Be = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    var a = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(r, c, s) {
      var i, f = function(u, m, v) {
        v === void 0 && (v = {});
        var y = new Date(u), C = function(L, k) {
          k === void 0 && (k = {});
          var z = k.timeZoneName || "short", j = L + "|" + z, D = t[j];
          return D || (D = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: L, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: z }), t[j] = D), D;
        }(m, v);
        return C.formatToParts(y);
      }, h = function(u, m) {
        for (var v = f(u, m), y = [], C = 0; C < v.length; C += 1) {
          var L = v[C], k = L.type, z = L.value, j = a[k];
          j >= 0 && (y[j] = parseInt(z, 10));
        }
        var D = y[3], H = D === 24 ? 0 : D, d = y[0] + "-" + y[1] + "-" + y[2] + " " + H + ":" + y[4] + ":" + y[5] + ":000", Y = +u;
        return (s.utc(d).valueOf() - (Y -= Y % 1e3)) / 6e4;
      }, b = c.prototype;
      b.tz = function(u, m) {
        u === void 0 && (u = i);
        var v = this.utcOffset(), y = this.toDate(), C = y.toLocaleString("en-US", { timeZone: u }), L = Math.round((y - new Date(C)) / 1e3 / 60), k = s(C, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(y.getTimezoneOffset() / 15) - L, !0);
        if (m) {
          var z = k.utcOffset();
          k = k.add(v - z, "minute");
        }
        return k.$x.$timezone = u, k;
      }, b.offsetName = function(u) {
        var m = this.$x.$timezone || s.tz.guess(), v = f(this.valueOf(), m, { timeZoneName: u }).find(function(y) {
          return y.type.toLowerCase() === "timezonename";
        });
        return v && v.value;
      };
      var g = b.startOf;
      b.startOf = function(u, m) {
        if (!this.$x || !this.$x.$timezone)
          return g.call(this, u, m);
        var v = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return g.call(v, u, m).tz(this.$x.$timezone, !0);
      }, s.tz = function(u, m, v) {
        var y = v && m, C = v || m || i, L = h(+s(), C);
        if (typeof u != "string")
          return s(u).tz(C);
        var k = function(H, d, Y) {
          var O = H - 60 * d * 1e3, l = h(O, Y);
          if (d === l)
            return [O, d];
          var o = h(O -= 60 * (l - d) * 1e3, Y);
          return l === o ? [O, l] : [H - 60 * Math.min(l, o) * 1e3, Math.max(l, o)];
        }(s.utc(u, y).valueOf(), L, C), z = k[0], j = k[1], D = s(z).utcOffset(j);
        return D.$x.$timezone = C, D;
      }, s.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, s.tz.setDefault = function(u) {
        i = u;
      };
    };
  });
})(Be);
var mt = Be.exports;
const gt = /* @__PURE__ */ ae(mt);
var Ne = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t();
  })(K, function() {
    return function(a, t) {
      var r = t.prototype, c = r.format;
      r.format = function(s) {
        var i = this, f = this.$locale();
        if (!this.isValid())
          return c.bind(this)(s);
        var h = this.$utils(), b = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(g) {
          switch (g) {
            case "Q":
              return Math.ceil((i.$M + 1) / 3);
            case "Do":
              return f.ordinal(i.$D);
            case "gggg":
              return i.weekYear();
            case "GGGG":
              return i.isoWeekYear();
            case "wo":
              return f.ordinal(i.week(), "W");
            case "w":
            case "ww":
              return h.s(i.week(), g === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return h.s(i.isoWeek(), g === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return h.s(String(i.$H === 0 ? 24 : i.$H), g === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(i.$d.getTime() / 1e3);
            case "x":
              return i.$d.getTime();
            case "z":
              return "[" + i.offsetName() + "]";
            case "zzz":
              return "[" + i.offsetName("long") + "]";
            default:
              return g;
          }
        });
        return c.bind(this)(b);
      };
    };
  });
})(Ne);
var yt = Ne.exports;
const vt = /* @__PURE__ */ ae(yt);
var _t = { exports: {} };
(function(e, n) {
  (function(a, t) {
    e.exports = t(W);
  })(K, function(a) {
    function t(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var r = t(a), c = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(s) {
      var i = ["th", "st", "nd", "rd"], f = s % 100;
      return "[" + s + (i[(f - 20) % 10] || i[f] || i[0]) + "]";
    } };
    return r.default.locale(c, null, !0), c;
  });
})(_t);
W.extend(ht);
W.extend(pt);
W.updateLocale("en", {
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
W.extend(gt);
W.extend(vt);
const Ta = () => {
  const e = dt();
  e && e.makeTransparent(!0);
}, bt = (e) => {
  let n = "";
  if (Object.keys(e).some(function(t) {
    return !!t.startsWith("screen");
  })) {
    const t = [];
    for (const [r, c] of Object.entries(e))
      r.startsWith("screen") && typeof c == "object" && c.url && c.width && t.push(`${c.url} ${c.width}w`);
    n = t.join(", ");
  }
  return n;
}, be = {
  primary: "-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, $t = S({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(be).includes(e)
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
      let e = be[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), M = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, r] of n)
    a[t] = r;
  return a;
}, wt = { class: "label block" };
function Ct(e, n, a, t, r, c) {
  return p(), I(Qe(e.tag), {
    class: q(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: n[0] || (n[0] = (s) => e.$emit("click"))
  }, {
    default: V(() => [
      w("span", wt, [
        N(e.$slots, "default"),
        N(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const Ha = /* @__PURE__ */ M($t, [["render", Ct]]), $e = {
  none: "object-none",
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  scaleDown: "object-scale-down"
}, kt = S({
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
      validator: (e) => Object.keys($e).includes(e)
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
      return this.imageClass && (e = e + " " + this.imageClass), this.objectFitClass && (e = e + " " + $e[this.objectFitClass]), this.lazyNative || (e = e + " lazyload"), e;
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
}), St = ["data-src", "data-srcset", "alt", "width", "height", "loading"];
function Mt(e, n, a, t, r, c) {
  return p(), $("div", null, [
    e.src ? (p(), $("img", {
      key: 0,
      ref: "BaseImage",
      class: q(["BaseImage", e.computedClass]),
      "data-src": e.src,
      "data-srcset": e.srcset,
      alt: e.alt,
      width: e.width,
      height: e.height,
      loading: e.loading,
      onError: n[0] || (n[0] = (...s) => e.imageFailed && e.imageFailed(...s))
    }, null, 42, St)) : E("", !0)
  ]);
}
const ne = /* @__PURE__ */ M(kt, [["render", Mt]]), Dt = S({
  name: "IconCaret"
}), Et = {
  class: "IconCaret",
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Lt = /* @__PURE__ */ w("path", {
  d: "M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",
  fill: "currentColor"
}, null, -1), Ot = [
  Lt
];
function Bt(e, n, a, t, r, c) {
  return p(), $("svg", Et, Ot);
}
const Ie = /* @__PURE__ */ M(Dt, [["render", Bt]]), Nt = S({
  name: "MixinAnimationCaret",
  components: {
    IconCaret: Ie
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
      default: "text-theme-red"
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
}), It = { class: "arrow" }, zt = { class: "arrow-fixed" };
function xt(e, n, a, t, r, c) {
  const s = Ie;
  return p(), $("span", {
    class: q(["MixinAnimationCaret", e.computedClass])
  }, [
    w("span", null, [
      N(e.$slots, "default")
    ]),
    w("span", {
      class: q(["arrow-wrapper", [e.arrowClass, e.color, e.marginLeft]]),
      "aria-hidden": "true"
    }, [
      w("span", It, [
        T(s)
      ]),
      w("span", zt, [
        T(s)
      ])
    ], 2)
  ], 2);
}
const ze = /* @__PURE__ */ M(Nt, [["render", xt]]), we = {
  primary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  secondary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  default: "-default underline text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  none: ""
}, Ft = S({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: "BaseLink",
  components: {
    MixinAnimationCaret: ze
  },
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default",
      validator: (e) => Object.keys(we).includes(e)
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
      let e = we[this.variant];
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
}), qt = ["href", "target", "rel", "aria-label", "title"];
function Vt(e, n, a, t, r, c) {
  const s = ze, i = Ke("nuxt-link");
  return p(), $("div", null, [
    e.to ? (p(), I(i, {
      key: 0,
      class: q(["group", e.computedClass]),
      to: e.to,
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      exact: e.exact,
      onClick: n[0] || (n[0] = (f) => e.clickEvent())
    }, {
      default: V(() => [
        e.caretInline && e.caret ? (p(), I(s, {
          key: 0,
          inline: "",
          class: q(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: V(() => [
            N(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (p(), I(s, {
          key: 1,
          class: q(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: V(() => [
            N(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : N(e.$slots, "default", { key: 2 })
      ]),
      _: 3
    }, 8, ["class", "to", "target", "rel", "aria-label", "title", "exact"])) : e.href ? (p(), $("a", {
      key: 1,
      href: e.href,
      class: q(["group", e.computedClass]),
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      onClick: n[1] || (n[1] = (f) => e.clickEvent())
    }, [
      e.caretInline && e.caret ? (p(), I(s, {
        key: 0,
        inline: "",
        class: q(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: V(() => [
          N(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (p(), I(s, {
        key: 1,
        class: q(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: V(() => [
          N(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : N(e.$slots, "default", { key: 2 })
    ], 10, qt)) : E("", !0)
  ]);
}
const xe = /* @__PURE__ */ M(Ft, [["render", Vt]]), Ce = {
  "col-1": "lg:col-start-1 lg:col-end-13",
  "col-2": "lg:col-start-2 lg:col-end-12",
  "col-3": "lg:col-start-3 lg:col-end-11",
  "col-4": "md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10"
}, jt = S({
  name: "LayoutHelper",
  props: {
    indent: {
      type: String,
      required: !1,
      default: "col-1",
      validator: (e) => Object.keys(Ce).includes(e)
    }
  },
  computed: {
    theWidth() {
      return Ce[this.indent];
    }
  }
}), Tt = { class: "LayoutHelper BaseGrid container mx-auto" };
function Ht(e, n, a, t, r, c) {
  return p(), $("div", Tt, [
    w("div", {
      class: q(e.theWidth + " col-start-1 col-end-13 lg:px-0 px-4 relative")
    }, [
      N(e.$slots, "default")
    ], 2)
  ]);
}
const Fe = /* @__PURE__ */ M(jt, [["render", Ht]]), Pt = S({
  name: "BaseImageCaption",
  components: {
    BaseLink: xe
  },
  props: {
    data: {
      type: Object,
      required: !0,
      default: void 0
    }
  }
}), Yt = {
  key: 0,
  class: "BaseImageCaption text-body-sm"
}, At = { class: "inline mr-2" }, Wt = ["innerHTML"], Rt = {
  key: 0,
  class: "inline"
};
function Ut(e, n, a, t, r, c) {
  const s = xe;
  return e.data ? (p(), $("div", Yt, [
    w("div", At, [
      w("div", {
        class: "the-caption-text inline",
        innerHTML: e.data.caption
      }, null, 8, Wt),
      e.data.credit ? (p(), $("span", Rt, " Credit: " + et(e.data.credit), 1)) : E("", !0)
    ]),
    e.data.detailUrl ? (p(), I(s, {
      key: 0,
      class: "inline-block",
      variant: "default",
      to: e.data.detailUrl
    }, {
      default: V(() => [
        tt(" Full Image Details ")
      ]),
      _: 1
    }, 8, ["to"])) : E("", !0)
  ])) : E("", !0);
}
const se = /* @__PURE__ */ M(Pt, [["render", Ut]]), Gt = S({
  name: "IconExpand"
}), Jt = {
  class: "IconExpand",
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Zt = /* @__PURE__ */ w("path", {
  d: "M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z",
  fill: "currentColor",
  "fill-rule": "evenodd"
}, null, -1), Xt = [
  Zt
];
function Qt(e, n, a, t, r, c) {
  return p(), $("svg", Jt, Xt);
}
const qe = /* @__PURE__ */ M(Gt, [["render", Qt]]), Kt = S({
  name: "MixinFancyboxOpenButton",
  components: {
    IconExpand: qe
  }
}), ea = {
  ref: "FancyboxOpenButton",
  class: "MixinFancyboxOpenButton",
  role: "presentation"
}, ta = { class: "BaseButton -primary -icon-only pointer-events-none" }, aa = { class: "icon" };
function na(e, n, a, t, r, c) {
  const s = qe;
  return p(), $("div", ea, [
    w("div", ta, [
      w("span", aa, [
        T(s)
      ])
    ])
  ], 512);
}
const Ve = /* @__PURE__ */ M(Kt, [["render", na]]), X = {
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
}, de = {
  // Normal  (Vanilla fancybox theme)
  normal: "fancybox-theme-normal ThemeVariantLight",
  // Light   (WCP default lighter lightbox)
  light: "fancybox-theme-light ThemeVariantLight",
  // Dark    (WWW default black lightbox)
  dark: "fancybox-theme-dark ThemeVariantDark"
}, sa = S({
  name: "MixinFancybox",
  components: {
    MixinFancyboxOpenButton: Ve
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
      validator: (e) => Object.keys(de).includes(e)
    }
  },
  computed: {
    computedClass() {
      return de[this.theme];
    },
    computedCaption() {
      let e = this.caption && this.caption.length ? this.$options.filters.truncate(this.caption, 180) : "";
      return this.credit && (e = `${e} Credit: ${this.credit}`), e;
    }
  },
  mounted() {
    return nt.bind("[data-fancybox]", {
      infinite: this.infinite,
      // mainClass from theme variants
      mainClass: this.computedClass ? this.computedClass : de.dark,
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
              ${a.url ? `<a href="${a.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>` : ""}
            </div>`), t;
      }
    });
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
}), oa = ["href", "data-fancybox", "data-src", "data-width", "data-height", "data-srcset", "data-sizes", "data-theme", "data-caption", "data-title", "data-animated", "data-download-src", "data-url", "data-max-width"];
function ra(e, n, a, t, r, c) {
  const s = Ve;
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
    onClick: n[0] || (n[0] = (i) => e.$emit("click"))
  }, [
    T(s),
    N(e.$slots, "default")
  ], 8, oa);
}
const oe = /* @__PURE__ */ M(sa, [["render", ra]]), ke = {
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
}, ia = S({
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
      validator: (e) => Object.keys(ke).includes(e)
    },
    responsiveAspectRatio: {
      type: String,
      required: !1
    }
  },
  computed: {
    computedClass() {
      let e = "";
      return this.aspectRatio && (e = e + ke[this.aspectRatio]), this.responsiveAspectRatio && (e = `${e} ${this.responsiveAspectRatio}`), this.transparentMode ? e = e + " transparent-theme" : this.darkMode ? e = e + " dark-theme" : e = e + " light-theme", this.noLogo && (e = e + " no-logo"), e;
    }
  }
});
function la(e, n, a, t, r, c) {
  return p(), $("div", null, [
    w("div", {
      class: q("BaseImagePlaceholder " + e.computedClass)
    }, [
      N(e.$slots, "default", {}, void 0, !0),
      N(e.$slots, "lightbox", {}, void 0, !0)
    ], 2)
  ]);
}
const re = /* @__PURE__ */ M(ia, [["render", la], ["__scopeId", "data-v-29efd36e"]]), ca = S({
  name: "BlockImageStandard",
  components: {
    MixinFancybox: oe,
    BaseImage: ne,
    BaseImagePlaceholder: re,
    BaseImageCaption: se
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
}), da = { key: 0 }, ua = {
  key: 1,
  class: "lg:px-0 p-4 pb-0"
};
function pa(e, n, a, t, r, c) {
  const s = ne, i = re, f = oe, h = se;
  return e.theData ? (p(), $("div", da, [
    e.theData.src ? (p(), I(f, {
      key: 0,
      src: e.theData.original,
      caption: e.theData.caption,
      credit: e.theData.credit,
      "detail-url": e.theData.detailUrl
    }, {
      default: V(() => [
        T(i, {
          "aspect-ratio": e.constrain ? "16:9" : "none",
          "dark-mode": ""
        }, {
          default: V(() => [
            e.theData.src ? (p(), I(s, {
              key: 0,
              src: e.theData.src.url,
              srcset: e.theData.srcSet,
              width: e.theData.src.width,
              height: e.theData.src.height,
              alt: e.theData.alt,
              "image-class": e.constrain ? void 0 : "w-full h-auto",
              "object-fit-class": e.constrain ? "contain" : void 0,
              loading: "lazy"
            }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : E("", !0)
          ]),
          _: 1
        }, 8, ["aspect-ratio"])
      ]),
      _: 1
    }, 8, ["src", "caption", "credit", "detail-url"])) : E("", !0),
    e.theData && e.hasCaptionArea ? (p(), $("div", ua, [
      T(h, { data: e.theData }, null, 8, ["data"])
    ])) : E("", !0)
  ])) : E("", !0);
}
const je = /* @__PURE__ */ M(ca, [["render", pa]]), fa = S({
  name: "BlockImageFullBleed",
  components: {
    MixinFancybox: oe,
    BaseImage: ne,
    BaseImagePlaceholder: re,
    BaseImageCaption: se
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
      return this.theData ? bt(this.theData) : void 0;
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
}), ha = { key: 0 }, ma = { class: "bg-gray-light" }, ga = { class: "max-w-screen-3xl mx-auto" }, ya = {
  key: 0,
  class: "max-w-screen-3xl p-4 pb-0 mx-auto"
};
function va(e, n, a, t, r, c) {
  const s = ne, i = re, f = oe, h = se;
  return e.theData ? (p(), $("div", ha, [
    w("div", ma, [
      w("div", ga, [
        e.theData.src ? (p(), I(f, {
          key: 0,
          src: e.theData.original,
          caption: e.theData.caption,
          credit: e.theData.credit,
          "detail-url": e.theData.detailUrl
        }, {
          default: V(() => [
            T(i, {
              "aspect-ratio": e.constrain ? "16:9" : "none",
              "responsive-aspect-ratio": e.constrain ? "lg:aspect-ratio-two-one" : "",
              "dark-mode": ""
            }, {
              default: V(() => [
                e.theData.src && e.theData.srcCropped ? (p(), I(s, {
                  key: 0,
                  src: e.constrain ? e.theData.srcCropped.url : e.theData.src.url,
                  srcset: e.theData.srcSet && !e.constrain ? e.theData.srcSet : e.theSrcSet,
                  width: e.constrain ? e.theData.srcCropped.width : e.theData.src.width,
                  height: e.constrain ? e.theData.srcCropped.height : e.theData.src.height,
                  alt: e.theData.alt,
                  "image-class": e.constrain ? void 0 : "w-full h-auto",
                  "object-fit-class": e.constrain ? "cover" : void 0,
                  loading: "lazy"
                }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : E("", !0)
              ]),
              _: 1
            }, 8, ["aspect-ratio", "responsive-aspect-ratio"])
          ]),
          _: 1
        }, 8, ["src", "caption", "credit", "detail-url"])) : E("", !0)
      ])
    ]),
    e.data && e.hasCaptionArea ? (p(), $("div", ya, [
      T(h, { data: e.theData }, null, 8, ["data"])
    ])) : E("", !0)
  ])) : E("", !0);
}
const Te = /* @__PURE__ */ M(fa, [["render", va]]), _a = S({
  name: "BlockImage",
  components: {
    BlockImageStandard: je,
    BlockImageFullBleed: Te,
    LayoutHelper: Fe
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
}), ba = { key: 0 };
function $a(e, n, a, t, r, c) {
  const s = Te, i = je, f = Fe;
  return e.data ? (p(), $("div", ba, [
    e.fullBleed && e.data.imageFullBleed ? (p(), I(s, {
      key: 0,
      data: e.data.imageFullBleed,
      "display-caption": e.data.displayCaption,
      caption: e.data.caption,
      constrain: e.data.constrain
    }, null, 8, ["data", "display-caption", "caption", "constrain"])) : (p(), I(f, {
      key: 1,
      indent: "col-2"
    }, {
      default: V(() => [
        T(i, {
          data: e.data.image,
          "display-caption": e.data.displayCaption,
          caption: e.data.caption,
          constrain: e.data.constrain
        }, null, 8, ["data", "display-caption", "caption", "constrain"])
      ]),
      _: 1
    }))
  ])) : E("", !0);
}
const Pa = /* @__PURE__ */ M(_a, [["render", $a]]), wa = S({
  name: "IconArrows"
}), Ca = {
  class: "IconArrows",
  width: "32",
  height: "12",
  viewBox: "0 0 32 12",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, ka = /* @__PURE__ */ at('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>', 1), Sa = [
  ka
];
function Ma(e, n, a, t, r, c) {
  return p(), $("svg", Ca, Sa);
}
const Ya = /* @__PURE__ */ M(wa, [["render", Ma]]), Da = S({
  name: "IconLocation"
}), Ea = {
  class: "IconLocation",
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, La = /* @__PURE__ */ w("g", {
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
], -1), Oa = [
  La
];
function Ba(e, n, a, t, r, c) {
  return p(), $("svg", Ea, Oa);
}
const Aa = /* @__PURE__ */ M(Da, [["render", Ba]]), Na = S({
  name: "IconArrows"
}), Ia = {
  class: "IconUser",
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, za = /* @__PURE__ */ w("path", {
  d: "M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",
  fill: "currentColor"
}, null, -1), xa = [
  za
];
function Fa(e, n, a, t, r, c) {
  return p(), $("svg", Ia, xa);
}
const Wa = /* @__PURE__ */ M(Na, [["render", Fa]]);
export {
  Ha as BaseButton,
  Ha as BaseHeading,
  ne as BaseImage,
  xe as BaseLink,
  Pa as BlockImage,
  Te as BlockImageFullBleed,
  je as BlockImageStandard,
  Ya as IconArrows,
  Ie as IconCaret,
  Aa as IconLocation,
  Wa as IconUser,
  ze as MixinAnimationCaret,
  oe as MixinFancybox,
  bt as mixinGetSrcSet,
  Ta as mixinTransparentHeader,
  dt as useHeaderStore
};
