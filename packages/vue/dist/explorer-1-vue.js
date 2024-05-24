import { defineComponent as n, openBlock as o, createBlock as f, resolveDynamicComponent as d, normalizeClass as u, withCtx as c, createElementVNode as p, renderSlot as l } from "vue";
const i = {
  primary: "-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, h = n({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(i).includes(e)
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
      let e = i[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), b = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, r] of t)
    a[s] = r;
  return a;
}, m = { class: "label block" };
function k(e, t, a, s, r, y) {
  return o(), f(d(e.tag), {
    class: u(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: t[0] || (t[0] = (g) => e.$emit("click"))
  }, {
    default: c(() => [
      p("span", m, [
        l(e.$slots, "default"),
        l(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const B = /* @__PURE__ */ b(h, [["render", k]]);
export {
  B as BaseButton
};
