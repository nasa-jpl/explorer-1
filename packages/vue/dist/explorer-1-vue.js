import { defineComponent as p, openBlock as a, createBlock as m, resolveDynamicComponent as z, normalizeClass as g, withCtx as y, createElementVNode as c, renderSlot as f, createElementBlock as l, createCommentVNode as h, resolveComponent as d, createVNode as v, toDisplayString as O, createTextVNode as H, createStaticVNode as j } from "vue";
import { Fancybox as E } from "@fancyapps/ui";
const dt = (e) => {
  let t = "";
  if (Object.keys(e).some(function(s) {
    return !!s.startsWith("screen");
  })) {
    const s = [];
    for (const [o, i] of Object.entries(e))
      o.startsWith("screen") && i.url && i.width && s.push(`${i.url} ${i.width}w`);
    t = s.join(", ");
  }
  return t;
}, B = {
  primary: "-primary",
  secondary: "-secondary",
  dark: "-dark",
  social: "-social"
}, T = p({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "primary",
      validator: (e) => Object.keys(B).includes(e)
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
      let e = B[this.variant];
      return !this.$slots.default && this.$slots.icon ? e = e + " -icon-only" : this.compact && (e = e + " -compact"), this.blockClasses && (e = e + " " + this.blockClasses), e;
    }
  }
}), u = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, x = { class: "label block" };
function A(e, t, n, s, o, i) {
  return a(), m(z(e.tag), {
    class: g(["BaseButton text-contrast-none", e.variantClass]),
    "aria-label": e.ariaLabel,
    disabled: e.disabled,
    href: e.theHref,
    to: e.to ? e.to : !1,
    onClick: t[0] || (t[0] = (r) => e.$emit("click"))
  }, {
    default: y(() => [
      c("span", x, [
        f(e.$slots, "default"),
        f(e.$slots, "icon")
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-label", "disabled", "href", "to"]);
}
const pt = /* @__PURE__ */ u(T, [["render", A]]), S = {
  none: "object-none",
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  scaleDown: "object-scale-down"
}, V = p({
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
      validator: (e) => Object.keys(S).includes(e)
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
      return this.imageClass && (e = e + " " + this.imageClass), this.objectFitClass && (e = e + " " + S[this.objectFitClass]), this.lazyNative || (e = e + " lazyload"), e;
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
}), R = ["data-src", "data-srcset", "alt", "width", "height", "loading"];
function N(e, t, n, s, o, i) {
  return a(), l("div", null, [
    e.src ? (a(), l("img", {
      key: 0,
      ref: "BaseImage",
      class: g(["BaseImage", e.computedClass]),
      "data-src": e.src,
      "data-srcset": e.srcset,
      alt: e.alt,
      width: e.width,
      height: e.height,
      loading: e.loading,
      onError: t[0] || (t[0] = (...r) => e.imageFailed && e.imageFailed(...r))
    }, null, 42, R)) : h("", !0)
  ]);
}
const L = /* @__PURE__ */ u(V, [["render", N]]), W = p({
  name: "IconCaret"
}), P = {
  class: "IconCaret",
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, U = /* @__PURE__ */ c("path", {
  d: "M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z",
  fill: "currentColor"
}, null, -1), G = [
  U
];
function X(e, t, n, s, o, i) {
  return a(), l("svg", P, G);
}
const Y = /* @__PURE__ */ u(W, [["render", X]]), Z = p({
  name: "MixinAnimationCaret",
  components: {
    IconCaret: Y
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
}), J = { class: "arrow" }, K = { class: "arrow-fixed" };
function Q(e, t, n, s, o, i) {
  const r = d("IconCaret");
  return a(), l("span", {
    class: g(["MixinAnimationCaret", e.computedClass])
  }, [
    c("span", null, [
      f(e.$slots, "default")
    ]),
    c("span", {
      class: g(["arrow-wrapper", [e.arrowClass, e.color, e.marginLeft]]),
      "aria-hidden": "true"
    }, [
      c("span", J, [
        v(r)
      ]),
      c("span", K, [
        v(r)
      ])
    ], 2)
  ], 2);
}
const ee = /* @__PURE__ */ u(Z, [["render", Q]]), _ = {
  primary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  secondary: "text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  default: "-default underline text-action hover:text-action-dark dark:text-action-light dark:hover:text-action",
  none: ""
}, te = p({
  // this component is useful when you need a link that can either be an 'a' or router link
  // falls back to a <div> if no url is provided
  name: "BaseLink",
  components: {
    MixinAnimationCaret: ee
  },
  props: {
    variant: {
      type: String,
      required: !1,
      default: "default",
      validator: (e) => Object.keys(_).includes(e)
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
      let e = _[this.variant];
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
}), ae = ["href", "target", "rel", "aria-label", "title"];
function se(e, t, n, s, o, i) {
  const r = d("MixinAnimationCaret"), $ = d("nuxt-link");
  return a(), l("div", null, [
    e.to ? (a(), m($, {
      key: 0,
      class: g(["group", e.computedClass]),
      to: e.to,
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      exact: e.exact,
      onClick: t[0] || (t[0] = (b) => e.clickEvent())
    }, {
      default: y(() => [
        e.caretInline && e.caret ? (a(), m(r, {
          key: 0,
          inline: "",
          class: g(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: y(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (a(), m(r, {
          key: 1,
          class: g(e.caretWrapperClass),
          "arrow-class": e.caretClass,
          color: e.caretColor,
          "margin-left": e.caretMarginLeft
        }, {
          default: y(() => [
            f(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "arrow-class", "color", "margin-left"])) : f(e.$slots, "default", { key: 2 })
      ]),
      _: 3
    }, 8, ["class", "to", "target", "rel", "aria-label", "title", "exact"])) : e.href ? (a(), l("a", {
      key: 1,
      href: e.href,
      class: g(["group", e.computedClass]),
      target: e.theTarget,
      rel: e.theRel,
      "aria-label": e.ariaLabel,
      title: e.title,
      onClick: t[1] || (t[1] = (b) => e.clickEvent())
    }, [
      e.caretInline && e.caret ? (a(), m(r, {
        key: 0,
        inline: "",
        class: g(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: y(() => [
          f(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : e.variant === "primary" || e.caret ? (a(), m(r, {
        key: 1,
        class: g(e.caretWrapperClass),
        "arrow-class": e.caretClass,
        color: e.caretColor,
        "margin-left": e.caretMarginLeft
      }, {
        default: y(() => [
          f(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "arrow-class", "color", "margin-left"])) : f(e.$slots, "default", { key: 2 })
    ], 10, ae)) : h("", !0)
  ]);
}
const ne = /* @__PURE__ */ u(te, [["render", se]]), w = {
  pageXOffset: 0,
  pageYOffset: 0,
  element() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  },
  activate(e) {
    w.pageXOffset = window.pageXOffset, w.pageYOffset = window.pageYOffset, e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
  },
  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
}, ie = p({
  name: "IconExpand"
}), oe = {
  class: "IconExpand",
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, re = /* @__PURE__ */ c("path", {
  d: "M48 37v11H37v-2h9v-9h2zm-34 0v9h9v2H12V37h2zm9-25v2h-9v9h-2V12h11zm25 0v11h-2v-9h-9v-2h11z",
  fill: "currentColor",
  "fill-rule": "evenodd"
}, null, -1), le = [
  re
];
function ce(e, t, n, s, o, i) {
  return a(), l("svg", oe, le);
}
const de = /* @__PURE__ */ u(ie, [["render", ce]]), pe = p({
  name: "MixinFancyboxOpenButton",
  components: {
    IconExpand: de
  }
}), ue = {
  ref: "FancyboxOpenButton",
  class: "MixinFancyboxOpenButton",
  role: "presentation"
}, he = { class: "BaseButton -primary -icon-only pointer-events-none" }, fe = { class: "icon" };
function me(e, t, n, s, o, i) {
  const r = d("IconExpand");
  return a(), l("div", ue, [
    c("div", he, [
      c("span", fe, [
        v(r)
      ])
    ])
  ], 512);
}
const ge = /* @__PURE__ */ u(pe, [["render", me]]), k = {
  // Normal  (Vanilla fancybox theme)
  normal: "fancybox-theme-normal ThemeLight",
  // Light   (WCP default lighter lightbox)
  light: "fancybox-theme-light ThemeLight",
  // Dark    (WWW default black lightbox)
  dark: "fancybox-theme-dark ThemeDark"
}, ye = p({
  name: "MixinFancybox",
  components: {
    MixinFancyboxOpenButton: ge
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
      validator: (e) => Object.keys(k).includes(e)
    }
  },
  computed: {
    computedClass() {
      return k[this.theme];
    },
    computedCaption() {
      let e = this.caption && this.caption.length ? this.$options.filters.truncate(this.caption, 180) : "";
      return this.credit && (e = `${e} Credit: ${this.credit}`), e;
    }
  },
  mounted() {
    return E.bind("[data-fancybox]", {
      infinite: this.infinite,
      // mainClass from theme variants
      mainClass: this.computedClass ? this.computedClass : k.dark,
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
              e.preventDefault(), w.element() ? w.deactivate() : w.activate(this.fancybox.$container);
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
              const t = this.fancybox.getSlide().Panzoom;
              t && t.toggleZoom();
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
              const t = this.fancybox.plugins.Thumbs;
              t && t.toggle();
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
      caption(e, t, n) {
        let s = n.caption;
        return n.type === "image" && (s = `<div class="mx-auto container">
              ${n.title ? `<h6 class="font-semibold text-4xl mb-1">${n.title}</h6>` : ""}
              ${s.length ? `<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${s}</div></div>` : ""}
              ${n.url ? `<a href="${n.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>` : ""}
            </div>`), s;
      }
    });
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
}), ve = ["href", "data-fancybox", "data-src", "data-width", "data-height", "data-srcset", "data-sizes", "data-theme", "data-caption", "data-title", "data-animated", "data-download-src", "data-url", "data-max-width"];
function $e(e, t, n, s, o, i) {
  const r = d("MixinFancyboxOpenButton");
  return a(), l("a", {
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
    onClick: t[0] || (t[0] = ($) => e.$emit("click"))
  }, [
    v(r),
    f(e.$slots, "default")
  ], 8, ve);
}
const q = /* @__PURE__ */ u(ye, [["render", $e]]), I = {
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
}, be = p({
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
      validator: (e) => Object.keys(I).includes(e)
    },
    responsiveAspectRatio: {
      type: String,
      required: !1
    }
  },
  computed: {
    computedClass() {
      let e = "";
      return this.aspectRatio && (e = e + I[this.aspectRatio]), this.responsiveAspectRatio && (e = `${e} ${this.responsiveAspectRatio}`), this.transparentMode ? e = e + " transparent-theme" : this.darkMode ? e = e + " dark-theme" : e = e + " light-theme", this.noLogo && (e = e + " no-logo"), e;
    }
  }
});
function we(e, t, n, s, o, i) {
  return a(), l("div", null, [
    c("div", {
      class: g("BaseImagePlaceholder " + e.computedClass)
    }, [
      f(e.$slots, "default", {}, void 0, !0),
      f(e.$slots, "lightbox", {}, void 0, !0)
    ], 2)
  ]);
}
const D = /* @__PURE__ */ u(be, [["render", we], ["__scopeId", "data-v-29efd36e"]]), Ce = p({
  name: "BaseImageCaption",
  components: {
    BaseLink: ne
  },
  props: {
    data: {
      type: Object,
      required: !0,
      default: void 0
    }
  }
}), ke = {
  key: 0,
  class: "BaseImageCaption text-body-sm"
}, Be = { class: "inline mr-2" }, Se = ["innerHTML"], _e = {
  key: 0,
  class: "inline"
};
function Ie(e, t, n, s, o, i) {
  const r = d("BaseLink");
  return e.data ? (a(), l("div", ke, [
    c("div", Be, [
      c("div", {
        class: "the-caption-text inline",
        innerHTML: e.data.caption
      }, null, 8, Se),
      e.data.credit ? (a(), l("span", _e, " Credit: " + O(e.data.credit), 1)) : h("", !0)
    ]),
    e.data.detailUrl ? (a(), m(r, {
      key: 0,
      class: "inline-block",
      variant: "default",
      to: e.data.detailUrl
    }, {
      default: y(() => [
        H(" Full Image Details ")
      ]),
      _: 1
    }, 8, ["to"])) : h("", !0)
  ])) : h("", !0);
}
const F = /* @__PURE__ */ u(Ce, [["render", Ie]]), Me = p({
  name: "BlockImageStandard",
  components: {
    MixinFancybox: q,
    BaseImage: L,
    BaseImagePlaceholder: D,
    BaseImageCaption: F
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
}), Le = { key: 0 }, qe = {
  key: 1,
  class: "lg:px-0 p-4 pb-0"
};
function De(e, t, n, s, o, i) {
  const r = d("BaseImage"), $ = d("BaseImagePlaceholder"), b = d("MixinFancybox"), C = d("BaseImageCaption");
  return e.theData ? (a(), l("div", Le, [
    e.theData.src ? (a(), m(b, {
      key: 0,
      src: e.theData.original,
      caption: e.theData.caption,
      credit: e.theData.credit,
      "detail-url": e.theData.detailUrl
    }, {
      default: y(() => [
        v($, {
          "aspect-ratio": e.constrain ? "16:9" : "none",
          "dark-mode": ""
        }, {
          default: y(() => [
            e.theData.src ? (a(), m(r, {
              key: 0,
              src: e.theData.src.url,
              srcset: e.theData.srcSet,
              width: e.theData.src.width,
              height: e.theData.src.height,
              alt: e.theData.alt,
              "image-class": e.constrain ? void 0 : "w-full h-auto",
              "object-fit-class": e.constrain ? "contain" : void 0,
              loading: "lazy"
            }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : h("", !0)
          ]),
          _: 1
        }, 8, ["aspect-ratio"])
      ]),
      _: 1
    }, 8, ["src", "caption", "credit", "detail-url"])) : h("", !0),
    e.theData && e.hasCaptionArea ? (a(), l("div", qe, [
      v(C, { data: e.theData }, null, 8, ["data"])
    ])) : h("", !0)
  ])) : h("", !0);
}
const Fe = /* @__PURE__ */ u(Me, [["render", De]]), ze = p({
  name: "BlockImageFullBleed",
  components: {
    MixinFancybox: q,
    BaseImage: L,
    BaseImagePlaceholder: D,
    BaseImageCaption: F
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
      return this.theData ? this.getSrcSet(this.theData) : void 0;
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
  },
  methods: {
    getSrcSet: (e) => {
      let t = "";
      if (Object.keys(e).some(function(s) {
        return !!s.startsWith("screen");
      })) {
        const s = [];
        for (const [o, i] of Object.entries(e))
          o.startsWith("screen") && i.url && i.width && s.push(`${i.url} ${i.width}w`);
        t = s.join(", ");
      }
      return t;
    }
  }
}), Oe = { key: 0 }, He = { class: "bg-gray-light" }, je = { class: "max-w-screen-3xl mx-auto" }, Ee = {
  key: 0,
  class: "max-w-screen-3xl p-4 pb-0 mx-auto"
};
function Te(e, t, n, s, o, i) {
  const r = d("BaseImage"), $ = d("BaseImagePlaceholder"), b = d("MixinFancybox"), C = d("BaseImageCaption");
  return e.theData ? (a(), l("div", Oe, [
    c("div", He, [
      c("div", je, [
        e.theData.src ? (a(), m(b, {
          key: 0,
          src: e.theData.original,
          caption: e.theData.caption,
          credit: e.theData.credit,
          "detail-url": e.theData.detailUrl
        }, {
          default: y(() => [
            v($, {
              "aspect-ratio": e.constrain ? "16:9" : "none",
              "responsive-aspect-ratio": e.constrain ? "lg:aspect-ratio-two-one" : "",
              "dark-mode": ""
            }, {
              default: y(() => [
                e.theData.src && e.theData.srcCropped ? (a(), m(r, {
                  key: 0,
                  src: e.constrain ? e.theData.srcCropped.url : e.theData.src.url,
                  srcset: e.theData.srcSet && !e.constrain ? e.theData.srcSet : e.getSrcSet(e.theData),
                  width: e.constrain ? e.theData.srcCropped.width : e.theData.src.width,
                  height: e.constrain ? e.theData.srcCropped.height : e.theData.src.height,
                  alt: e.theData.alt,
                  "image-class": e.constrain ? void 0 : "w-full h-auto",
                  "object-fit-class": e.constrain ? "cover" : void 0,
                  loading: "lazy"
                }, null, 8, ["src", "srcset", "width", "height", "alt", "image-class", "object-fit-class"])) : h("", !0)
              ]),
              _: 1
            }, 8, ["aspect-ratio", "responsive-aspect-ratio"])
          ]),
          _: 1
        }, 8, ["src", "caption", "credit", "detail-url"])) : h("", !0)
      ])
    ]),
    e.data && e.hasCaptionArea ? (a(), l("div", Ee, [
      v(C, { data: e.theData }, null, 8, ["data"])
    ])) : h("", !0)
  ])) : h("", !0);
}
const xe = /* @__PURE__ */ u(ze, [["render", Te]]), M = {
  "col-1": "lg:col-start-1 lg:col-end-13",
  "col-2": "lg:col-start-2 lg:col-end-12",
  "col-3": "lg:col-start-3 lg:col-end-11",
  "col-4": "md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10"
}, Ae = p({
  name: "LayoutHelper",
  props: {
    indent: {
      type: String,
      required: !1,
      default: "col-1",
      validator: (e) => Object.keys(M).includes(e)
    }
  },
  computed: {
    theWidth() {
      return M[this.indent];
    }
  }
}), Ve = { class: "LayoutHelper BaseGrid container mx-auto" };
function Re(e, t, n, s, o, i) {
  return a(), l("div", Ve, [
    c("div", {
      class: g(e.theWidth + " col-start-1 col-end-13 lg:px-0 px-4 relative")
    }, [
      f(e.$slots, "default")
    ], 2)
  ]);
}
const Ne = /* @__PURE__ */ u(Ae, [["render", Re]]), We = p({
  name: "BlockImage",
  components: {
    BlockImageStandard: Fe,
    BlockImageFullBleed: xe,
    LayoutHelper: Ne
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
}), Pe = { key: 0 };
function Ue(e, t, n, s, o, i) {
  const r = d("BlockImageFullBleed"), $ = d("BlockImageStandard"), b = d("LayoutHelper");
  return e.data ? (a(), l("div", Pe, [
    e.fullBleed && e.data.imageFullBleed ? (a(), m(r, {
      key: 0,
      data: e.data.imageFullBleed,
      "display-caption": e.data.displayCaption,
      caption: e.data.caption,
      constrain: e.data.constrain
    }, null, 8, ["data", "display-caption", "caption", "constrain"])) : (a(), m(b, {
      key: 1,
      indent: "col-2"
    }, {
      default: y(() => [
        v($, {
          data: e.data.image,
          "display-caption": e.data.displayCaption,
          caption: e.data.caption,
          constrain: e.data.constrain
        }, null, 8, ["data", "display-caption", "caption", "constrain"])
      ]),
      _: 1
    }))
  ])) : h("", !0);
}
const ut = /* @__PURE__ */ u(We, [["render", Ue]]), Ge = p({
  name: "IconArrows"
}), Xe = {
  class: "IconArrows",
  width: "32",
  height: "12",
  viewBox: "0 0 32 12",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, Ye = /* @__PURE__ */ j('<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>', 1), Ze = [
  Ye
];
function Je(e, t, n, s, o, i) {
  return a(), l("svg", Xe, Ze);
}
const ht = /* @__PURE__ */ u(Ge, [["render", Je]]), Ke = p({
  name: "IconLocation"
}), Qe = {
  class: "IconLocation",
  width: "16",
  height: "22",
  viewBox: "0 0 16 22",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, et = /* @__PURE__ */ c("g", {
  transform: "translate(-4 -1)",
  stroke: "currentColor",
  "stroke-width": "2",
  fill: "none"
}, [
  /* @__PURE__ */ c("path", { d: "M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z" }),
  /* @__PURE__ */ c("circle", {
    cx: "12",
    cy: "9",
    r: "3"
  })
], -1), tt = [
  et
];
function at(e, t, n, s, o, i) {
  return a(), l("svg", Qe, tt);
}
const ft = /* @__PURE__ */ u(Ke, [["render", at]]), st = p({
  name: "IconArrows"
}), nt = {
  class: "IconUser",
  width: "21",
  height: "21",
  viewBox: "0 0 21 21",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false"
}, it = /* @__PURE__ */ c("path", {
  d: "M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z",
  fill: "currentColor"
}, null, -1), ot = [
  it
];
function rt(e, t, n, s, o, i) {
  return a(), l("svg", nt, ot);
}
const mt = /* @__PURE__ */ u(st, [["render", rt]]);
export {
  pt as BaseButton,
  pt as BaseHeading,
  L as BaseImage,
  ne as BaseLink,
  ut as BlockImage,
  xe as BlockImageFullBleed,
  Fe as BlockImageStandard,
  ht as IconArrows,
  Y as IconCaret,
  ft as IconLocation,
  mt as IconUser,
  ee as MixinAnimationCaret,
  q as MixinFancybox,
  dt as getSrcSet
};
