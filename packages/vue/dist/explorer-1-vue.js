import { hasInjectionContext as De, inject as Oe, getCurrentInstance as Ie, ref as ge, watch as Ne, reactive as Le, markRaw as z, effectScope as Me, isRef as A, isReactive as ee, toRef as X, toRaw as qe, nextTick as re, computed as ye, getCurrentScope as Ve, onScopeDispose as Fe, toRefs as ie, defineComponent as y, openBlock as d, createBlock as S, resolveDynamicComponent as je, normalizeClass as I, withCtx as N, createElementVNode as f, renderSlot as k, createElementBlock as h, createCommentVNode as _, resolveComponent as g, createVNode as L, toDisplayString as Pe, createTextVNode as ze, createStaticVNode as xe } from "vue";
import { Fancybox as He } from "@fancyapps/ui";
var Te = !1;
function W(e, a, s) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, a), e.splice(a, 1, s), s) : (e[a] = s, s);
}
function Y(e, a) {
  if (Array.isArray(e)) {
    e.splice(a, 1);
    return;
  }
  delete e[a];
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let x;
const U = (e) => x = e, Ae = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function q(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var H;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(H || (H = {}));
const te = typeof window < "u", Z = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && te;
function ve(e, a) {
  for (const s in a) {
    const t = a[s];
    if (!(s in e))
      continue;
    const r = e[s];
    q(r) && q(t) && !A(t) && !ee(t) ? e[s] = ve(r, t) : e[s] = t;
  }
  return e;
}
const be = () => {
};
function le(e, a, s, t = be) {
  e.push(a);
  const r = () => {
    const l = e.indexOf(a);
    l > -1 && (e.splice(l, 1), t());
  };
  return !s && Ve() && Fe(r), r;
}
function F(e, ...a) {
  e.slice().forEach((s) => {
    s(...a);
  });
}
const Re = (e) => e();
function Q(e, a) {
  e instanceof Map && a instanceof Map && a.forEach((s, t) => e.set(t, s)), e instanceof Set && a instanceof Set && a.forEach(e.add, e);
  for (const s in a) {
    if (!a.hasOwnProperty(s))
      continue;
    const t = a[s], r = e[s];
    q(r) && q(t) && e.hasOwnProperty(s) && !A(t) && !ee(t) ? e[s] = Q(r, t) : e[s] = t;
  }
  return e;
}
const We = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Ue(e) {
  return !q(e) || !e.hasOwnProperty(We);
}
const { assign: O } = Object;
function ce(e) {
  return !!(A(e) && e.effect);
}
function de(e, a, s, t) {
  const { state: r, actions: l, getters: c } = a, u = s.state.value[e];
  let m;
  function b() {
    !u && (process.env.NODE_ENV === "production" || !t) && (s.state.value[e] = r ? r() : {});
    const E = process.env.NODE_ENV !== "production" && t ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      ie(ge(r ? r() : {}).value)
    ) : ie(s.state.value[e]);
    return O(E, l, Object.keys(c || {}).reduce(($, w) => (process.env.NODE_ENV !== "production" && w in E && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${w}" in store "${e}".`), $[w] = z(ye(() => {
      U(s);
      const B = s._s.get(e);
      return c[w].call(B, B);
    })), $), {}));
  }
  return m = K(e, b, a, s, t, !0), m;
}
function K(e, a, s = {}, t, r, l) {
  let c;
  const u = O({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !t._e.active)
    throw new Error("Pinia destroyed");
  const m = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Te && (m.onTrigger = (o) => {
    b ? B = o : b == !1 && !i._hotUpdating && (Array.isArray(B) ? B.push(o) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let b, E, $ = [], w = [], B;
  const V = t.state.value[e];
  !l && !V && (process.env.NODE_ENV === "production" || !r) && (t.state.value[e] = {});
  const G = ge({});
  let ae;
  function se(o) {
    let n;
    b = E = !1, process.env.NODE_ENV !== "production" && (B = []), typeof o == "function" ? (o(t.state.value[e]), n = {
      type: H.patchFunction,
      storeId: e,
      events: B
    }) : (Q(t.state.value[e], o), n = {
      type: H.patchObject,
      payload: o,
      storeId: e,
      events: B
    });
    const p = ae = Symbol();
    re().then(() => {
      ae === p && (b = !0);
    }), E = !0, F($, n, t.state.value[e]);
  }
  const ke = l ? function() {
    const { state: n } = s, p = n ? n() : {};
    this.$patch((C) => {
      O(C, p);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : be
  );
  function Se() {
    c.stop(), $ = [], w = [], t._s.delete(e);
  }
  function ne(o, n) {
    return function() {
      U(t);
      const p = Array.from(arguments), C = [], j = [];
      function Ee(D) {
        C.push(D);
      }
      function Be(D) {
        j.push(D);
      }
      F(w, {
        args: p,
        name: o,
        store: i,
        after: Ee,
        onError: Be
      });
      let P;
      try {
        P = n.apply(this && this.$id === e ? this : i, p);
      } catch (D) {
        throw F(j, D), D;
      }
      return P instanceof Promise ? P.then((D) => (F(C, D), D)).catch((D) => (F(j, D), Promise.reject(D))) : (F(C, P), P);
    };
  }
  const R = /* @__PURE__ */ z({
    actions: {},
    getters: {},
    state: [],
    hotState: G
  }), oe = {
    _p: t,
    // _s: scope,
    $id: e,
    $onAction: le.bind(null, w),
    $patch: se,
    $reset: ke,
    $subscribe(o, n = {}) {
      const p = le($, o, n.detached, () => C()), C = c.run(() => Ne(() => t.state.value[e], (j) => {
        (n.flush === "sync" ? E : b) && o({
          storeId: e,
          type: H.direct,
          events: B
        }, j);
      }, O({}, m, n)));
      return p;
    },
    $dispose: Se
  }, i = Le(process.env.NODE_ENV !== "production" || Z ? O(
    {
      _hmrPayload: R,
      _customProperties: z(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    oe
    // must be added later
    // setupStore
  ) : oe);
  t._s.set(e, i);
  const M = (t._a && t._a.runWithContext || Re)(() => t._e.run(() => (c = Me()).run(a)));
  for (const o in M) {
    const n = M[o];
    if (A(n) && !ce(n) || ee(n))
      process.env.NODE_ENV !== "production" && r ? W(G.value, o, X(M, o)) : l || (V && Ue(n) && (A(n) ? n.value = V[o] : Q(n, V[o])), t.state.value[e][o] = n), process.env.NODE_ENV !== "production" && R.state.push(o);
    else if (typeof n == "function") {
      const p = process.env.NODE_ENV !== "production" && r ? n : ne(o, n);
      M[o] = p, process.env.NODE_ENV !== "production" && (R.actions[o] = n), u.actions[o] = n;
    } else
      process.env.NODE_ENV !== "production" && ce(n) && (R.getters[o] = l ? (
        // @ts-expect-error
        s.getters[o]
      ) : n, te && (M._getters || // @ts-expect-error: same
      (M._getters = z([]))).push(o));
  }
  if (O(i, M), O(qe(i), M), Object.defineProperty(i, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? G.value : t.state.value[e],
    set: (o) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      se((n) => {
        O(n, o);
      });
    }
  }), process.env.NODE_ENV !== "production" && (i._hotUpdate = z((o) => {
    i._hotUpdating = !0, o._hmrPayload.state.forEach((n) => {
      if (n in i.$state) {
        const p = o.$state[n], C = i.$state[n];
        typeof p == "object" && q(p) && q(C) ? ve(p, C) : o.$state[n] = C;
      }
      W(i, n, X(o.$state, n));
    }), Object.keys(i.$state).forEach((n) => {
      n in o.$state || Y(i, n);
    }), b = !1, E = !1, t.state.value[e] = X(o._hmrPayload, "hotState"), E = !0, re().then(() => {
      b = !0;
    });
    for (const n in o._hmrPayload.actions) {
      const p = o[n];
      W(i, n, ne(n, p));
    }
    for (const n in o._hmrPayload.getters) {
      const p = o._hmrPayload.getters[n], C = l ? (
        // special handling of options api
        ye(() => (U(t), p.call(i, i)))
      ) : p;
      W(i, n, C);
    }
    Object.keys(i._hmrPayload.getters).forEach((n) => {
      n in o._hmrPayload.getters || Y(i, n);
    }), Object.keys(i._hmrPayload.actions).forEach((n) => {
      n in o._hmrPayload.actions || Y(i, n);
    }), i._hmrPayload = o._hmrPayload, i._getters = o._getters, i._hotUpdating = !1;
  })), Z) {
    const o = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((n) => {
      Object.defineProperty(i, n, O({ value: i[n] }, o));
    });
  }
  return t._p.forEach((o) => {
    if (Z) {
      const n = c.run(() => o({
        store: i,
        app: t._a,
        pinia: t,
        options: u
      }));
      Object.keys(n || {}).forEach((p) => i._customProperties.add(p)), O(i, n);
    } else
      O(i, c.run(() => o({
        store: i,
        app: t._a,
        pinia: t,
        options: u
      })));
  }), process.env.NODE_ENV !== "production" && i.$state && typeof i.$state == "object" && typeof i.$state.constructor == "function" && !i.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${i.$id}".`), V && l && s.hydrate && s.hydrate(i.$state, V), b = !0, E = !0, i;
}
function Ge(e, a, s) {
  let t, r;
  const l = typeof a == "function";
  t = e, r = l ? s : a;
  function c(u, m) {
    const b = De();
    if (u = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && x && x._testing ? null : u) || (b ? Oe(Ae, null) : null), u && U(u), process.env.NODE_ENV !== "production" && !x)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    u = x, u._s.has(t) || (l ? K(t, a, r, u) : de(t, r, u), process.env.NODE_ENV !== "production" && (c._pinia = u));
    const E = u._s.get(t);
    if (process.env.NODE_ENV !== "production" && m) {
      const $ = "__hot:" + t, w = l ? K($, a, r, u, !0) : de($, O({}, r), u, !0);
      m._hotUpdate(w), delete u.state.value[$], u._s.delete($);
    }
    if (process.env.NODE_ENV !== "production" && te) {
      const $ = Ie();
      if ($ && $.proxy && // avoid adding stores that are just built for hot module replacement
      !m) {
        const w = $.proxy, B = "_pStores" in w ? w._pStores : w._pStores = {};
        B[t] = E;
      }
    }
    return E;
  }
  return c.$id = t, c;
}
const Xe = Ge("header", {
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
    highlightPrimary(e) {
      this.highlightPrimary = e;
    },
    updateGlobalChildren(e) {
      this.globalChildren = e;
    },
    updateSecondary(e) {
      this.secondaryNav = e;
    }
  }
}), Ca = () => {
  const e = Xe();
  e && e.makeTransparent(!0);
}, Ye = (e) => {
  let a = "";
  if (Object.keys(e).some(function(t) {
    return !!t.startsWith("screen");
  })) {
    const t = [];
    for (const [r, l] of Object.entries(e))
      r.startsWith("screen") && typeof l == "object" && l.url && l.width && t.push(`${l.url} ${l.width}w`);
    a = t.join(", ");
  }
  return a;
}, ue = {
  primary: "-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, Ze = y({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(ue).includes(e)
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
      let e = ue[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), v = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [t, r] of a)
    s[t] = r;
  return s;
}, Je = { class: "label block" };
function Qe(e, a, s, t, r, l) {
  return d(), S(je(e.tag), {
    class: I(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: a[0] || (a[0] = (c) => e.$emit("click"))
  }, {
    default: N(() => [
      f("span", Je, [
        k(e.$slots, "default"),
        k(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const ka = /* @__PURE__ */ v(Ze, [["render", Qe]]), pe = {
  none: "object-none",
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  scaleDown: "object-scale-down"
}, Ke = y({
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
      validator: (e) => Object.keys(pe).includes(e)
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
      return this.imageClass && (e = e + " " + this.imageClass), this.objectFitClass && (e = e + " " + pe[this.objectFitClass]), this.lazyNative || (e = e + " lazyload"), e;
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
}), et = ["data-src", "data-srcset", "alt", "width", "height", "loading"];
function tt(e, a, s, t, r, l) {
  return d(), h("div", null, [
    e.src ? (d(), h("img", {
      key: 0,
      ref: "BaseImage",
      class: I(["BaseImage", e.computedClass]),
      "data-src": e.src,
      "data-srcset": e.srcset,
      alt: e.alt,
      width: e.width,
      height: e.height,
      loading: e.loading,
      onError: a[0] || (a[0] = (...c) => e.imageFailed && e.imageFailed(...c))
    }, null, 42, et)) : _("", !0)
  ]);
}
const $e = /* @__PURE__ */ v(Ke, [["render", tt]]), at = y({
  name: "IconCaret"
}), st = {
  class: "IconCaret",
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, nt = /* @__PURE__ */ f("path", {
  d: "M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",
  fill: "currentColor"
}, null, -1), ot = [
  nt
];
function rt(e, a, s, t, r, l) {
  return d(), h("svg", st, ot);
}
const it = /* @__PURE__ */ v(at, [["render", rt]]), lt = y({
  name: "MixinAnimationCaret",
  components: {
    IconCaret: it
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
}), ct = { class: "arrow" }, dt = { class: "arrow-fixed" };
function ut(e, a, s, t, r, l) {
  const c = g("IconCaret");
  return d(), h("span", {
    class: I(["MixinAnimationCaret", e.computedClass])
  }, [
    f("span", null, [
      k(e.$slots, "default")
    ]),
    f("span", {
      class: I(["arrow-wrapper", [e.arrowClass, e.color, e.marginLeft]]),
      "aria-hidden": "true"
    }, [
      f("span", ct, [
        L(c)
      ]),
      f("span", dt, [
        L(c)
      ])
    ], 2)
  ], 2);
}
const pt = /* @__PURE__ */ v(lt, [["render", ut]]), he = {
  primary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  secondary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  default: "-default underline text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  none: ""
}, ht = y({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: "BaseLink",
  components: {
    MixinAnimationCaret: pt
  },
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default",
      validator: (e) => Object.keys(he).includes(e)
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
      let e = he[this.variant];
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
}), ft = ["href", "target", "rel", "aria-label", "title"];
function mt(e, a, s, t, r, l) {
  const c = g("MixinAnimationCaret"), u = g("nuxt-link");
  return d(), h("div", null, [
    e.to ? (d(), S(u, {
      key: 0,
      class: I(["group", e.computedClass]),
      to: e.to,
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      exact: e.exact,
      onClick: a[0] || (a[0] = (m) => e.clickEvent())
    }, {
      default: N(() => [
        e.caretInline && e.caret ? (d(), S(c, {
          key: 0,
          inline: "",
          class: I(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: N(() => [
            k(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (d(), S(c, {
          key: 1,
          class: I(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: N(() => [
            k(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : k(e.$slots, "default", { key: 2 })
      ]),
      _: 3
    }, 8, ["class", "to", "target", "rel", "aria-label", "title", "exact"])) : e.href ? (d(), h("a", {
      key: 1,
      href: e.href,
      class: I(["group", e.computedClass]),
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      onClick: a[1] || (a[1] = (m) => e.clickEvent())
    }, [
      e.caretInline && e.caret ? (d(), S(c, {
        key: 0,
        inline: "",
        class: I(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: N(() => [
          k(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (d(), S(c, {
        key: 1,
        class: I(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: N(() => [
          k(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : k(e.$slots, "default", { key: 2 })
    ], 10, ft)) : _("", !0)
  ]);
}
const gt = /* @__PURE__ */ v(ht, [["render", mt]]), T = {
  pageXOffset: 0,
  pageYOffset: 0,
  element() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  },
  activate(e) {
    T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
  },
  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
}, yt = y({
  name: "IconExpand"
}), vt = {
  class: "IconExpand",
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, bt = /* @__PURE__ */ f("path", {
  d: "M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z",
  fill: "currentColor",
  "fill-rule": "evenodd"
}, null, -1), $t = [
  bt
];
function wt(e, a, s, t, r, l) {
  return d(), h("svg", vt, $t);
}
const _t = /* @__PURE__ */ v(yt, [["render", wt]]), Ct = y({
  name: "MixinFancyboxOpenButton",
  components: {
    IconExpand: _t
  }
}), kt = {
  ref: "FancyboxOpenButton",
  class: "MixinFancyboxOpenButton",
  role: "presentation"
}, St = { class: "BaseButton -primary -icon-only pointer-events-none" }, Et = { class: "icon" };
function Bt(e, a, s, t, r, l) {
  const c = g("IconExpand");
  return d(), h("div", kt, [
    f("div", St, [
      f("span", Et, [
        L(c)
      ])
    ])
  ], 512);
}
const Dt = /* @__PURE__ */ v(Ct, [["render", Bt]]), J = {
  // Normal  (Vanilla fancybox theme)
  normal: "fancybox-theme-normal ThemeLight",
  // Light   (WCP default lighter lightbox)
  light: "fancybox-theme-light ThemeLight",
  // Dark    (WWW default black lightbox)
  dark: "fancybox-theme-dark ThemeDark"
}, Ot = y({
  name: "MixinFancybox",
  components: {
    MixinFancyboxOpenButton: Dt
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
      validator: (e) => Object.keys(J).includes(e)
    }
  },
  computed: {
    computedClass() {
      return J[this.theme];
    },
    computedCaption() {
      let e = this.caption && this.caption.length ? this.$options.filters.truncate(this.caption, 180) : "";
      return this.credit && (e = `${e} Credit: ${this.credit}`), e;
    }
  },
  mounted() {
    return He.bind("[data-fancybox]", {
      infinite: this.infinite,
      // mainClass from theme variants
      mainClass: this.computedClass ? this.computedClass : J.dark,
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
              e.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
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
              const a = this.fancybox.getSlide().Panzoom;
              a && a.toggleZoom();
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
              const a = this.fancybox.plugins.Thumbs;
              a && a.toggle();
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
      caption(e, a, s) {
        let t = s.caption;
        return s.type === "image" && (t = `<div class="mx-auto container">
              ${s.title ? `<h6 class="font-semibold text-4xl mb-1">${s.title}</h6>` : ""}
              ${t.length ? `<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${t}</div></div>` : ""}
              ${s.url ? `<a href="${s.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>` : ""}
            </div>`), t;
      }
    });
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
}), It = ["href", "data-fancybox", "data-src", "data-width", "data-height", "data-srcset", "data-sizes", "data-theme", "data-caption", "data-title", "data-animated", "data-download-src", "data-url", "data-max-width"];
function Nt(e, a, s, t, r, l) {
  const c = g("MixinFancyboxOpenButton");
  return d(), h("a", {
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
    onClick: a[0] || (a[0] = (u) => e.$emit("click"))
  }, [
    L(c),
    k(e.$slots, "default")
  ], 8, It);
}
const we = /* @__PURE__ */ v(Ot, [["render", Nt]]), fe = {
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
}, Lt = y({
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
      validator: (e) => Object.keys(fe).includes(e)
    },
    responsiveAspectRatio: {
      type: String,
      required: !1
    }
  },
  computed: {
    computedClass() {
      let e = "";
      return this.aspectRatio && (e = e + fe[this.aspectRatio]), this.responsiveAspectRatio && (e = `${e} ${this.responsiveAspectRatio}`), this.transparentMode ? e = e + " transparent-theme" : this.darkMode ? e = e + " dark-theme" : e = e + " light-theme", this.noLogo && (e = e + " no-logo"), e;
    }
  }
});
function Mt(e, a, s, t, r, l) {
  return d(), h("div", null, [
    f("div", {
      class: I("BaseImagePlaceholder " + e.computedClass)
    }, [
      k(e.$slots, "default", {}, void 0, !0),
      k(e.$slots, "lightbox", {}, void 0, !0)
    ], 2)
  ]);
}
const _e = /* @__PURE__ */ v(Lt, [["render", Mt], ["__scopeId", "data-v-29efd36e"]]), qt = y({
  name: "BaseImageCaption",
  components: {
    BaseLink: gt
  },
  props: {
    data: {
      type: Object,
      required: !0,
      default: void 0
    }
  }
}), Vt = {
  key: 0,
  class: "BaseImageCaption text-body-sm"
}, Ft = { class: "inline mr-2" }, jt = ["innerHTML"], Pt = {
  key: 0,
  class: "inline"
};
function zt(e, a, s, t, r, l) {
  const c = g("BaseLink");
  return e.data ? (d(), h("div", Vt, [
    f("div", Ft, [
      f("div", {
        class: "the-caption-text inline",
        innerHTML: e.data.caption
      }, null, 8, jt),
      e.data.credit ? (d(), h("span", Pt, " Credit: " + Pe(e.data.credit), 1)) : _("", !0)
    ]),
    e.data.detailUrl ? (d(), S(c, {
      key: 0,
      class: "inline-block",
      variant: "default",
      to: e.data.detailUrl
    }, {
      default: N(() => [
        ze(" Full Image Details ")
      ]),
      _: 1
    }, 8, ["to"])) : _("", !0)
  ])) : _("", !0);
}
const Ce = /* @__PURE__ */ v(qt, [["render", zt]]), xt = y({
  name: "BlockImageStandard",
  components: {
    MixinFancybox: we,
    BaseImage: $e,
    BaseImagePlaceholder: _e,
    BaseImageCaption: Ce
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
}), Ht = { key: 0 }, Tt = {
  key: 1,
  class: "lg:px-0 p-4 pb-0"
};
function At(e, a, s, t, r, l) {
  const c = g("BaseImage"), u = g("BaseImagePlaceholder"), m = g("MixinFancybox"), b = g("BaseImageCaption");
  return e.theData ? (d(), h("div", Ht, [
    e.theData.src ? (d(), S(m, {
      key: 0,
      src: e.theData.original,
      caption: e.theData.caption,
      credit: e.theData.credit,
      "detail-url": e.theData.detailUrl
    }, {
      default: N(() => [
        L(u, {
          "aspect-ratio": e.constrain ? "16:9" : "none",
          "dark-mode": ""
        }, {
          default: N(() => [
            e.theData.src ? (d(), S(c, {
              key: 0,
              src: e.theData.src.url,
              srcset: e.theData.srcSet,
              width: e.theData.src.width,
              height: e.theData.src.height,
              alt: e.theData.alt,
              "image-class": e.constrain ? void 0 : "w-full h-auto",
              "object-fit-class": e.constrain ? "contain" : void 0,
              loading: "lazy"
            }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : _("", !0)
          ]),
          _: 1
        }, 8, ["aspect-ratio"])
      ]),
      _: 1
    }, 8, ["src", "caption", "credit", "detail-url"])) : _("", !0),
    e.theData && e.hasCaptionArea ? (d(), h("div", Tt, [
      L(b, { data: e.theData }, null, 8, ["data"])
    ])) : _("", !0)
  ])) : _("", !0);
}
const Rt = /* @__PURE__ */ v(xt, [["render", At]]), Wt = y({
  name: "BlockImageFullBleed",
  components: {
    MixinFancybox: we,
    BaseImage: $e,
    BaseImagePlaceholder: _e,
    BaseImageCaption: Ce
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
      return this.theData ? Ye(this.theData) : void 0;
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
}), Ut = { key: 0 }, Gt = { class: "bg-gray-light" }, Xt = { class: "max-w-screen-3xl mx-auto" }, Yt = {
  key: 0,
  class: "max-w-screen-3xl p-4 pb-0 mx-auto"
};
function Zt(e, a, s, t, r, l) {
  const c = g("BaseImage"), u = g("BaseImagePlaceholder"), m = g("MixinFancybox"), b = g("BaseImageCaption");
  return e.theData ? (d(), h("div", Ut, [
    f("div", Gt, [
      f("div", Xt, [
        e.theData.src ? (d(), S(m, {
          key: 0,
          src: e.theData.original,
          caption: e.theData.caption,
          credit: e.theData.credit,
          "detail-url": e.theData.detailUrl
        }, {
          default: N(() => [
            L(u, {
              "aspect-ratio": e.constrain ? "16:9" : "none",
              "responsive-aspect-ratio": e.constrain ? "lg:aspect-ratio-two-one" : "",
              "dark-mode": ""
            }, {
              default: N(() => [
                e.theData.src && e.theData.srcCropped ? (d(), S(c, {
                  key: 0,
                  src: e.constrain ? e.theData.srcCropped.url : e.theData.src.url,
                  srcset: e.theData.srcSet && !e.constrain ? e.theData.srcSet : e.theSrcSet,
                  width: e.constrain ? e.theData.srcCropped.width : e.theData.src.width,
                  height: e.constrain ? e.theData.srcCropped.height : e.theData.src.height,
                  alt: e.theData.alt,
                  "image-class": e.constrain ? void 0 : "w-full h-auto",
                  "object-fit-class": e.constrain ? "cover" : void 0,
                  loading: "lazy"
                }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : _("", !0)
              ]),
              _: 1
            }, 8, ["aspect-ratio", "responsive-aspect-ratio"])
          ]),
          _: 1
        }, 8, ["src", "caption", "credit", "detail-url"])) : _("", !0)
      ])
    ]),
    e.data && e.hasCaptionArea ? (d(), h("div", Yt, [
      L(b, { data: e.theData }, null, 8, ["data"])
    ])) : _("", !0)
  ])) : _("", !0);
}
const Jt = /* @__PURE__ */ v(Wt, [["render", Zt]]), me = {
  "col-1": "lg:col-start-1 lg:col-end-13",
  "col-2": "lg:col-start-2 lg:col-end-12",
  "col-3": "lg:col-start-3 lg:col-end-11",
  "col-4": "md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10"
}, Qt = y({
  name: "LayoutHelper",
  props: {
    indent: {
      type: String,
      required: !1,
      default: "col-1",
      validator: (e) => Object.keys(me).includes(e)
    }
  },
  computed: {
    theWidth() {
      return me[this.indent];
    }
  }
}), Kt = { class: "LayoutHelper BaseGrid container mx-auto" };
function ea(e, a, s, t, r, l) {
  return d(), h("div", Kt, [
    f("div", {
      class: I(e.theWidth + " col-start-1 col-end-13 lg:px-0 px-4 relative")
    }, [
      k(e.$slots, "default")
    ], 2)
  ]);
}
const ta = /* @__PURE__ */ v(Qt, [["render", ea]]), aa = y({
  name: "BlockImage",
  components: {
    BlockImageStandard: Rt,
    BlockImageFullBleed: Jt,
    LayoutHelper: ta
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
}), sa = { key: 0 };
function na(e, a, s, t, r, l) {
  const c = g("BlockImageFullBleed"), u = g("BlockImageStandard"), m = g("LayoutHelper");
  return e.data ? (d(), h("div", sa, [
    e.fullBleed && e.data.imageFullBleed ? (d(), S(c, {
      key: 0,
      data: e.data.imageFullBleed,
      "display-caption": e.data.displayCaption,
      caption: e.data.caption,
      constrain: e.data.constrain
    }, null, 8, ["data", "display-caption", "caption", "constrain"])) : (d(), S(m, {
      key: 1,
      indent: "col-2"
    }, {
      default: N(() => [
        L(u, {
          data: e.data.image,
          "display-caption": e.data.displayCaption,
          caption: e.data.caption,
          constrain: e.data.constrain
        }, null, 8, ["data", "display-caption", "caption", "constrain"])
      ]),
      _: 1
    }))
  ])) : _("", !0);
}
const Sa = /* @__PURE__ */ v(aa, [["render", na]]), oa = y({
  name: "IconArrows"
}), ra = {
  class: "IconArrows",
  width: "32",
  height: "12",
  viewBox: "0 0 32 12",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, ia = /* @__PURE__ */ xe('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>', 1), la = [
  ia
];
function ca(e, a, s, t, r, l) {
  return d(), h("svg", ra, la);
}
const Ea = /* @__PURE__ */ v(oa, [["render", ca]]), da = y({
  name: "IconLocation"
}), ua = {
  class: "IconLocation",
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, pa = /* @__PURE__ */ f("g", {
  transform: "translate(-4 -1)",
  stroke: "currentColor",
  "stroke-width": "2",
  fill: "none"
}, [
  /* @__PURE__ */ f("path", { d: "M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z" }),
  /* @__PURE__ */ f("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })
], -1), ha = [
  pa
];
function fa(e, a, s, t, r, l) {
  return d(), h("svg", ua, ha);
}
const Ba = /* @__PURE__ */ v(da, [["render", fa]]), ma = y({
  name: "IconArrows"
}), ga = {
  class: "IconUser",
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, ya = /* @__PURE__ */ f("path", {
  d: "M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",
  fill: "currentColor"
}, null, -1), va = [
  ya
];
function ba(e, a, s, t, r, l) {
  return d(), h("svg", ga, va);
}
const Da = /* @__PURE__ */ v(ma, [["render", ba]]);
export {
  ka as BaseButton,
  ka as BaseHeading,
  $e as BaseImage,
  gt as BaseLink,
  Sa as BlockImage,
  Jt as BlockImageFullBleed,
  Rt as BlockImageStandard,
  Ea as IconArrows,
  it as IconCaret,
  Ba as IconLocation,
  Da as IconUser,
  pt as MixinAnimationCaret,
  we as MixinFancybox,
  Ye as mixinGetSrcSet,
  Ca as mixinTransparentHeader,
  Xe as useHeaderStore
};
