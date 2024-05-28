import { defineComponent as f, openBlock as a, createBlock as h, resolveDynamicComponent as w, normalizeClass as l, withCtx as m, createElementVNode as r, renderSlot as n, createElementBlock as d, resolveComponent as g, createVNode as $, createCommentVNode as b, createStaticVNode as L } from "vue";
const C = {
  primary: "-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, B = f({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(C).includes(e)
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
      let e = C[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), u = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, i] of t)
    s[o] = i;
  return s;
}, _ = { class: "label block" };
function S(e, t, s, o, i, p) {
  return a(), h(w(e.tag), {
    class: l(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: t[0] || (t[0] = (c) => e.$emit("click"))
  }, {
    default: m(() => [
      r("span", _, [
        n(e.$slots, "default"),
        n(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const se = /* @__PURE__ */ u(B, [["render", S]]), q = f({
  name: "IconCaret"
}), M = {
  class: "IconCaret",
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, I = /* @__PURE__ */ r("path", {
  d: "M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",
  fill: "currentColor"
}, null, -1), z = [
  I
];
function A(e, t, s, o, i, p) {
  return a(), d("svg", M, z);
}
const W = /* @__PURE__ */ u(q, [["render", A]]), T = f({
  name: "MixinAnimationCaret",
  components: {
    IconCaret: W
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
}), E = { class: "arrow" }, O = { class: "arrow-fixed" };
function j(e, t, s, o, i, p) {
  const c = g("IconCaret");
  return a(), d("span", {
    class: l(["MixinAnimationCaret", e.computedClass])
  }, [
    r("span", null, [
      n(e.$slots, "default")
    ]),
    r("span", {
      class: l(["arrow-wrapper", [e.arrowClass, e.color, e.marginLeft]]),
      "aria-hidden": "true"
    }, [
      r("span", E, [
        $(c)
      ]),
      r("span", O, [
        $(c)
      ])
    ], 2)
  ], 2);
}
const N = /* @__PURE__ */ u(T, [["render", j]]), k = {
  primary: "text-subtitle text-emphasis-color hover:text-emphasis-color-dark",
  secondary: "text-subtitle text-emphasis-color hover:text-emphasis-color-dark",
  default: "-default underline text-emphasis-color hover:text-emphasis-color-dark",
  none: ""
}, V = f({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: "BaseLink",
  components: {
    MixinAnimationCaret: N
  },
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default",
      validator: (e) => Object.keys(k).includes(e)
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
      let e = k[this.variant];
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
}), H = ["href", "target", "rel", "aria-label", "title"];
function R(e, t, s, o, i, p) {
  const c = g("MixinAnimationCaret"), y = g("nuxt-link");
  return a(), d("div", null, [
    e.to ? (a(), h(y, {
      key: 0,
      class: l(["group", e.computedClass]),
      to: e.to,
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      exact: e.exact,
      onClick: t[0] || (t[0] = (v) => e.clickEvent())
    }, {
      default: m(() => [
        e.caretInline && e.caret ? (a(), h(c, {
          key: 0,
          inline: "",
          class: l(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: m(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (a(), h(c, {
          key: 1,
          class: l(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: m(() => [
            n(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : n(e.$slots, "default", { key: 2 })
      ]),
      _: 3
    }, 8, ["class", "to", "target", "rel", "aria-label", "title", "exact"])) : e.href ? (a(), d("a", {
      key: 1,
      href: e.href,
      class: l(["group", e.computedClass]),
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      onClick: t[1] || (t[1] = (v) => e.clickEvent())
    }, [
      e.caretInline && e.caret ? (a(), h(c, {
        key: 0,
        inline: "",
        class: l(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: m(() => [
          n(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (a(), h(c, {
        key: 1,
        class: l(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: m(() => [
          n(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : n(e.$slots, "default", { key: 2 })
    ], 10, H)) : b("", !0)
  ]);
}
const le = /* @__PURE__ */ u(V, [["render", R]]), U = f({
  name: "IconArrows"
}), D = {
  class: "IconArrows",
  width: "32",
  height: "12",
  viewBox: "0 0 32 12",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, F = /* @__PURE__ */ L('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>', 1), G = [
  F
];
function J(e, t, s, o, i, p) {
  return a(), d("svg", D, G);
}
const ne = /* @__PURE__ */ u(U, [["render", J]]), K = f({
  name: "IconLocation"
}), P = {
  class: "IconLocation",
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Q = /* @__PURE__ */ r("g", {
  transform: "translate(-4 -1)",
  stroke: "currentColor",
  "stroke-width": "2",
  fill: "none"
}, [
  /* @__PURE__ */ r("path", { d: "M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z" }),
  /* @__PURE__ */ r("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })
], -1), X = [
  Q
];
function Y(e, t, s, o, i, p) {
  return a(), d("svg", P, X);
}
const oe = /* @__PURE__ */ u(K, [["render", Y]]), Z = f({
  name: "IconArrows"
}), x = {
  class: "IconUser",
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, ee = /* @__PURE__ */ r("path", {
  d: "M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",
  fill: "currentColor"
}, null, -1), te = [
  ee
];
function ae(e, t, s, o, i, p) {
  return a(), d("svg", x, te);
}
const ie = /* @__PURE__ */ u(Z, [["render", ae]]);
export {
  se as BaseButton,
  se as BaseHeading,
  le as BaseLink,
  ne as IconArrows,
  W as IconCaret,
  oe as IconLocation,
  ie as IconUser,
  N as MixinAnimationCaret
};
