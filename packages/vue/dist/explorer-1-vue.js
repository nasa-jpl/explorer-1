import {
  defineComponent as k,
  openBlock as v,
  createBlock as A,
  resolveDynamicComponent as gt,
  normalizeClass as L,
  withCtx as M,
  createElementVNode as w,
  renderSlot as S,
  createElementBlock as T,
  resolveComponent as R,
  createVNode as q,
  createCommentVNode as mt,
  createStaticVNode as bt
} from 'vue'
const Q = {
    primary: '-primary',
    secondary: '-secondary',
    dark: '-dark',
    social: '-social'
  },
  yt = k({
    name: 'BaseButton',
    props: {
      variant: {
        type: String,
        required: !1,
        default: 'primary',
        validator: (n) => Object.keys(Q).includes(n)
      },
      compact: {
        type: Boolean,
        default: !1,
        required: !1
      },
      blockClasses: {
        type: String,
        required: !1,
        default: 'inline-block'
      },
      disabled: {
        type: Boolean,
        default: !1,
        required: !1
      },
      ariaLabel: {
        type: String,
        default: '',
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
    emits: ['click'],
    computed: {
      tag() {
        return this.disabled ? 'button' : this.to ? 'nuxt-link' : this.href ? 'a' : 'button'
      },
      // necessary for valid html
      // must account for <a>, <nuxt-link>, and <button> use-cases
      theHref() {
        return this.tag === 'nuxt-link' ? this.to : this.tag === 'a' ? this.href : !1
      },
      variantClass() {
        let n = Q[this.variant]
        return (
          !this.$slots.default && this.$slots.icon
            ? (n = n + ' -icon-only')
            : this.compact && (n = n + ' -compact'),
          this.blockClasses && (n = n + ' ' + this.blockClasses),
          n
        )
      }
    }
  }),
  _ = (n, t) => {
    const e = n.__vccOpts || n
    for (const [i, s] of t) e[i] = s
    return e
  },
  vt = { class: 'label block' }
function xt(n, t, e, i, s, o) {
  return (
    v(),
    A(
      gt(n.tag),
      {
        class: L(['BaseButton text-contrast-none', n.variantClass]),
        'aria-label': n.ariaLabel,
        disabled: n.disabled,
        href: n.theHref,
        to: n.to ? n.to : !1,
        onClick: t[0] || (t[0] = (a) => n.$emit('click'))
      },
      {
        default: M(() => [w('span', vt, [S(n.$slots, 'default'), S(n.$slots, 'icon')])]),
        _: 3
      },
      8,
      ['class', 'aria-label', 'disabled', 'href', 'to']
    )
  )
}
const be = /* @__PURE__ */ _(yt, [['render', xt]]),
  wt = k({
    name: 'IconCaret'
  }),
  $t = {
    class: 'IconCaret',
    width: '8',
    height: '14',
    viewBox: '0 0 8 14',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false'
  },
  Ct = /* @__PURE__ */ w(
    'path',
    {
      d: 'M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  St = [Ct]
function Et(n, t, e, i, s, o) {
  return v(), T('svg', $t, St)
}
const Lt = /* @__PURE__ */ _(wt, [['render', Et]]),
  Pt = k({
    name: 'MixinAnimationCaret',
    components: {
      IconCaret: Lt
    },
    props: {
      // when wrapped in a parent component i.e. BaseLink and grandparent component needs to pass a class
      // appended to classes applied to .MixinAnimationCaret
      passedWrapperClass: {
        type: String || null,
        required: !1,
        default: ''
      },
      // to modify spacing around the caret itself
      arrowClass: {
        type: String,
        required: !1,
        default: ''
      },
      // default color class
      color: {
        type: String,
        required: !1,
        default: 'text-theme-red'
      },
      // default margin left class
      marginLeft: {
        type: String,
        default: 'ml-1',
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
        let n = ''
        return (
          this.passedWrapperClass && (n = n + ' ' + this.passedWrapperClass),
          this.inline && (n = n + ' caret-inline'),
          n
        )
      }
    }
  }),
  Tt = { class: 'arrow' },
  kt = { class: 'arrow-fixed' }
function _t(n, t, e, i, s, o) {
  const a = R('IconCaret')
  return (
    v(),
    T(
      'span',
      {
        class: L(['MixinAnimationCaret', n.computedClass])
      },
      [
        w('span', null, [S(n.$slots, 'default')]),
        w(
          'span',
          {
            class: L(['arrow-wrapper', [n.arrowClass, n.color, n.marginLeft]]),
            'aria-hidden': 'true'
          },
          [w('span', Tt, [q(a)]), w('span', kt, [q(a)])],
          2
        )
      ],
      2
    )
  )
}
const zt = /* @__PURE__ */ _(Pt, [['render', _t]]),
  tt = {
    primary:
      'text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action',
    secondary:
      'text-subtitle text-action hover:text-action-dark dark:text-action-light dark:hover:text-action',
    default:
      '-default underline text-action hover:text-action-dark dark:text-action-light dark:hover:text-action',
    none: ''
  },
  At = k({
    // this component is useful when you need a link that can either be an 'a' or router link
    // falls back to a <div> if no url is provided
    name: 'BaseLink',
    components: {
      MixinAnimationCaret: zt
    },
    props: {
      variant: {
        type: String,
        required: !1,
        default: 'default',
        validator: (n) => Object.keys(tt).includes(n)
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
        default: ''
      },
      linkClass: {
        type: String,
        default: ''
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
        default: ''
      },
      // Class applied to the caret itself
      caretClass: {
        type: String,
        default: ''
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
        default: ''
      },
      caretMarginLeft: {
        type: String,
        required: !1,
        default: ''
      }
    },
    emits: ['linkClicked', 'specificLinkClicked'],
    computed: {
      computedClass() {
        let n = tt[this.variant]
        return (
          (this.to || this.href) && (n = n + ' cursor-pointer'),
          this.linkClass && (n = n + ' ' + this.linkClass),
          n
        )
      },
      theTarget() {
        if (this.target) return this.target
        if (this.href && this.externalTargetBlank) return '_blank'
      },
      theRel() {
        if (this.theTarget === '_blank') return 'noopener'
      }
    },
    methods: {
      clickEvent() {
        var n
        ;(n = this.$root) == null || n.$emit('linkClicked'), this.$emit('specificLinkClicked')
      }
    }
  }),
  Mt = ['href', 'target', 'rel', 'aria-label', 'title']
function Ot(n, t, e, i, s, o) {
  const a = R('MixinAnimationCaret'),
    r = R('nuxt-link')
  return (
    v(),
    T('div', null, [
      n.to
        ? (v(),
          A(
            r,
            {
              key: 0,
              class: L(['group', n.computedClass]),
              to: n.to,
              target: n.theTarget,
              rel: n.theRel,
              'aria-label': n.ariaLabel,
              title: n.title,
              exact: n.exact,
              onClick: t[0] || (t[0] = (l) => n.clickEvent())
            },
            {
              default: M(() => [
                n.caretInline && n.caret
                  ? (v(),
                    A(
                      a,
                      {
                        key: 0,
                        inline: '',
                        class: L(n.caretWrapperClass),
                        'arrow-class': n.caretClass,
                        color: n.caretColor,
                        'margin-left': n.caretMarginLeft
                      },
                      {
                        default: M(() => [S(n.$slots, 'default')]),
                        _: 3
                      },
                      8,
                      ['class', 'arrow-class', 'color', 'margin-left']
                    ))
                  : n.variant === 'primary' || n.caret
                    ? (v(),
                      A(
                        a,
                        {
                          key: 1,
                          class: L(n.caretWrapperClass),
                          'arrow-class': n.caretClass,
                          color: n.caretColor,
                          'margin-left': n.caretMarginLeft
                        },
                        {
                          default: M(() => [S(n.$slots, 'default')]),
                          _: 3
                        },
                        8,
                        ['class', 'arrow-class', 'color', 'margin-left']
                      ))
                    : S(n.$slots, 'default', { key: 2 })
              ]),
              _: 3
            },
            8,
            ['class', 'to', 'target', 'rel', 'aria-label', 'title', 'exact']
          ))
        : n.href
          ? (v(),
            T(
              'a',
              {
                key: 1,
                href: n.href,
                class: L(['group', n.computedClass]),
                target: n.theTarget,
                rel: n.theRel,
                'aria-label': n.ariaLabel,
                title: n.title,
                onClick: t[1] || (t[1] = (l) => n.clickEvent())
              },
              [
                n.caretInline && n.caret
                  ? (v(),
                    A(
                      a,
                      {
                        key: 0,
                        inline: '',
                        class: L(n.caretWrapperClass),
                        'arrow-class': n.caretClass,
                        color: n.caretColor,
                        'margin-left': n.caretMarginLeft
                      },
                      {
                        default: M(() => [S(n.$slots, 'default')]),
                        _: 3
                      },
                      8,
                      ['class', 'arrow-class', 'color', 'margin-left']
                    ))
                  : n.variant === 'primary' || n.caret
                    ? (v(),
                      A(
                        a,
                        {
                          key: 1,
                          class: L(n.caretWrapperClass),
                          'arrow-class': n.caretClass,
                          color: n.caretColor,
                          'margin-left': n.caretMarginLeft
                        },
                        {
                          default: M(() => [S(n.$slots, 'default')]),
                          _: 3
                        },
                        8,
                        ['class', 'arrow-class', 'color', 'margin-left']
                      ))
                    : S(n.$slots, 'default', { key: 2 })
              ],
              10,
              Mt
            ))
          : mt('', !0)
    ])
  )
}
const ye = /* @__PURE__ */ _(At, [['render', Ot]]),
  It = k({
    name: 'IconArrows'
  }),
  Ft = {
    class: 'IconArrows',
    width: '32',
    height: '12',
    viewBox: '0 0 32 12',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false'
  },
  Bt = /* @__PURE__ */ bt(
    '<g fill="currentColor" fill-rule="evenodd"><path d="M4 11.657l-.707-.707L8.243 6l-4.95-4.95L4 .343 9.657 6 4 11.657z" transform="translate(2)"></path><path d="M10 11.657l-.707-.707L14.243 6l-4.95-4.95L10 .343 15.657 6 10 11.657z" transform="translate(2)"></path><path d="M16 11.657l-.707-.707L20.243 6l-4.95-4.95L16 .343 21.657 6 16 11.657z" transform="translate(2)"></path><path d="M22 11.657l-.707-.707L26.243 6l-4.95-4.95L22 .343 27.657 6 22 11.657z" transform="translate(2)"></path></g>',
    1
  ),
  Nt = [Bt]
function Dt(n, t, e, i, s, o) {
  return v(), T('svg', Ft, Nt)
}
const Rt = /* @__PURE__ */ _(It, [['render', Dt]]),
  Ht = k({
    name: 'IconLocation'
  }),
  qt = {
    class: 'IconLocation',
    width: '16',
    height: '22',
    viewBox: '0 0 16 22',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false'
  },
  Wt = /* @__PURE__ */ w(
    'g',
    {
      transform: 'translate(-4 -1)',
      stroke: 'currentColor',
      'stroke-width': '2',
      fill: 'none'
    },
    [
      /* @__PURE__ */ w('path', {
        d: 'M12 2c1.933 0 3.683.784 4.95 2.05A6.978 6.978 0 0119 9c0 2.681-2.41 6.81-7 12.43C7.41 15.81 5 11.68 5 9c0-1.933.784-3.683 2.05-4.95A6.978 6.978 0 0112 2z'
      }),
      /* @__PURE__ */ w('circle', {
        cx: '12',
        cy: '9',
        r: '3'
      })
    ],
    -1
  ),
  Xt = [Wt]
function Vt(n, t, e, i, s, o) {
  return v(), T('svg', qt, Xt)
}
const ve = /* @__PURE__ */ _(Ht, [['render', Vt]]),
  Ut = k({
    name: 'IconArrows'
  }),
  Yt = {
    class: 'IconUser',
    width: '21',
    height: '21',
    viewBox: '0 0 21 21',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false'
  },
  jt = /* @__PURE__ */ w(
    'path',
    {
      d: 'M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0zm5.42 17.867c-1.525 1.143-3.43 1.778-5.42 1.778-2.032 0-3.938-.635-5.42-1.778v-.593a2.701 2.701 0 0 1 2.71-2.71c.466 0 1.143.509 2.71.509 1.524 0 2.202-.508 2.71-.508a2.729 2.729 0 0 1 2.71 2.71v.592zm1.27-1.143c-.297-1.99-1.948-3.514-3.98-3.514-.89 0-1.313.508-2.71.508-1.44 0-1.863-.508-2.71-.508-2.074 0-3.725 1.524-4.022 3.514-1.524-1.651-2.413-3.81-2.413-6.224A9.134 9.134 0 0 1 10.5 1.355c5.038 0 9.145 4.107 9.145 9.145 0 2.413-.931 4.573-2.456 6.224zM10.5 4.742a3.731 3.731 0 0 0-3.726 3.726 3.704 3.704 0 0 0 3.726 3.726 3.731 3.731 0 0 0 3.726-3.726c0-2.033-1.694-3.726-3.726-3.726zm0 6.097a2.367 2.367 0 0 1-2.371-2.371c0-1.27 1.059-2.371 2.371-2.371 1.27 0 2.371 1.1 2.371 2.37 0 1.313-1.1 2.372-2.371 2.372z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Zt = [jt]
function Gt(n, t, e, i, s, o) {
  return v(), T('svg', Yt, Zt)
}
const xe = /* @__PURE__ */ _(Ut, [['render', Gt]]),
  O = (n) =>
    typeof n == 'object' &&
    n !== null &&
    n.constructor === Object &&
    Object.prototype.toString.call(n) === '[object Object]',
  x = (...n) => {
    let t = !1
    typeof n[0] == 'boolean' && (t = n.shift())
    let e = n[0]
    if (!e || typeof e != 'object') throw new Error('extendee must be an object')
    const i = n.slice(1),
      s = i.length
    for (let o = 0; o < s; o++) {
      const a = i[o]
      for (let r in a)
        if (a.hasOwnProperty(r)) {
          const l = a[r]
          if (t && (Array.isArray(l) || O(l))) {
            const h = Array.isArray(l) ? [] : {}
            e[r] = x(!0, e.hasOwnProperty(r) ? e[r] : h, l)
          } else e[r] = l
        }
    }
    return e
  },
  y = (n, t = 1e4) => ((n = parseFloat(n) || 0), Math.round((n + Number.EPSILON) * t) / t),
  W = function (n) {
    return (
      !!(n && typeof n == 'object' && n instanceof Element && n !== document.body) &&
      !n.__Panzoom &&
      ((function (t) {
        const e = getComputedStyle(t)['overflow-y'],
          i = getComputedStyle(t)['overflow-x'],
          s = (e === 'scroll' || e === 'auto') && Math.abs(t.scrollHeight - t.clientHeight) > 1,
          o = (i === 'scroll' || i === 'auto') && Math.abs(t.scrollWidth - t.clientWidth) > 1
        return s || o
      })(n)
        ? n
        : W(n.parentNode))
    )
  },
  Kt =
    (typeof window < 'u' && window.ResizeObserver) ||
    class {
      constructor(n) {
        ;(this.observables = []),
          (this.boundCheck = this.check.bind(this)),
          this.boundCheck(),
          (this.callback = n)
      }
      observe(n) {
        if (this.observables.some((e) => e.el === n)) return
        const t = { el: n, size: { height: n.clientHeight, width: n.clientWidth } }
        this.observables.push(t)
      }
      unobserve(n) {
        this.observables = this.observables.filter((t) => t.el !== n)
      }
      disconnect() {
        this.observables = []
      }
      check() {
        const n = this.observables
          .filter((t) => {
            const e = t.el.clientHeight,
              i = t.el.clientWidth
            if (t.size.height !== e || t.size.width !== i)
              return (t.size.height = e), (t.size.width = i), !0
          })
          .map((t) => t.el)
        n.length > 0 && this.callback(n), window.requestAnimationFrame(this.boundCheck)
      }
    }
class z {
  constructor(t) {
    ;(this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
      (this.pageX = t.pageX),
      (this.pageY = t.pageY),
      (this.clientX = t.clientX),
      (this.clientY = t.clientY)
  }
}
const et = (n, t) =>
    t ? Math.sqrt((t.clientX - n.clientX) ** 2 + (t.clientY - n.clientY) ** 2) : 0,
  V = (n, t) =>
    t ? { clientX: (n.clientX + t.clientX) / 2, clientY: (n.clientY + t.clientY) / 2 } : n
class Jt {
  constructor(t, { start: e = () => !0, move: i = () => {}, end: s = () => {} } = {}) {
    ;(this._element = t),
      (this.startPointers = []),
      (this.currentPointers = []),
      (this._pointerStart = (o) => {
        if (o.buttons > 0 && o.button !== 0) return
        const a = new z(o)
        this.currentPointers.some((r) => r.id === a.id) ||
          (this._triggerPointerStart(a, o) &&
            (window.addEventListener('mousemove', this._move),
            window.addEventListener('mouseup', this._pointerEnd)))
      }),
      (this._touchStart = (o) => {
        for (const a of Array.from(o.changedTouches || [])) this._triggerPointerStart(new z(a), o)
      }),
      (this._move = (o) => {
        const a = this.currentPointers.slice(),
          r = ((l) => 'changedTouches' in l)(o)
            ? Array.from(o.changedTouches).map((l) => new z(l))
            : [new z(o)]
        for (const l of r) {
          const h = this.currentPointers.findIndex((c) => c.id === l.id)
          h < 0 || (this.currentPointers[h] = l)
        }
        this._moveCallback(a, this.currentPointers.slice(), o)
      }),
      (this._triggerPointerEnd = (o, a) => {
        const r = this.currentPointers.findIndex((l) => l.id === o.id)
        return (
          !(r < 0) &&
          (this.currentPointers.splice(r, 1),
          this.startPointers.splice(r, 1),
          this._endCallback(o, a),
          !0)
        )
      }),
      (this._pointerEnd = (o) => {
        ;(o.buttons > 0 && o.button !== 0) ||
          (this._triggerPointerEnd(new z(o), o) &&
            (window.removeEventListener('mousemove', this._move, { passive: !1 }),
            window.removeEventListener('mouseup', this._pointerEnd, { passive: !1 })))
      }),
      (this._touchEnd = (o) => {
        for (const a of Array.from(o.changedTouches || [])) this._triggerPointerEnd(new z(a), o)
      }),
      (this._startCallback = e),
      (this._moveCallback = i),
      (this._endCallback = s),
      this._element.addEventListener('mousedown', this._pointerStart, { passive: !1 }),
      this._element.addEventListener('touchstart', this._touchStart, { passive: !1 }),
      this._element.addEventListener('touchmove', this._move, { passive: !1 }),
      this._element.addEventListener('touchend', this._touchEnd),
      this._element.addEventListener('touchcancel', this._touchEnd)
  }
  stop() {
    this._element.removeEventListener('mousedown', this._pointerStart, { passive: !1 }),
      this._element.removeEventListener('touchstart', this._touchStart, { passive: !1 }),
      this._element.removeEventListener('touchmove', this._move, { passive: !1 }),
      this._element.removeEventListener('touchend', this._touchEnd),
      this._element.removeEventListener('touchcancel', this._touchEnd),
      window.removeEventListener('mousemove', this._move),
      window.removeEventListener('mouseup', this._pointerEnd)
  }
  _triggerPointerStart(t, e) {
    return (
      !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0)
    )
  }
}
class j {
  constructor(t = {}) {
    ;(this.options = x(!0, {}, t)), (this.plugins = []), (this.events = {})
    for (const e of ['on', 'once'])
      for (const i of Object.entries(this.options[e] || {})) this[e](...i)
  }
  option(t, e, ...i) {
    t = String(t)
    let s =
      ((o = t),
      (a = this.options),
      o.split('.').reduce(function (r, l) {
        return r && r[l]
      }, a))
    var o, a
    return typeof s == 'function' && (s = s.call(this, this, ...i)), s === void 0 ? e : s
  }
  localize(t, e = []) {
    return (t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (i, s, o) => {
      let a = ''
      o
        ? (a = this.option(`${s[0] + s.toLowerCase().substring(1)}.l10n.${o}`))
        : s && (a = this.option(`l10n.${s}`)),
        a || (a = i)
      for (let r = 0; r < e.length; r++) a = a.split(e[r][0]).join(e[r][1])
      return a
    })).replace(/\{\{(.*)\}\}/, (i, s) => s))
  }
  on(t, e) {
    if (O(t)) {
      for (const i of Object.entries(t)) this.on(...i)
      return this
    }
    return (
      String(t)
        .split(' ')
        .forEach((i) => {
          const s = (this.events[i] = this.events[i] || [])
          s.indexOf(e) == -1 && s.push(e)
        }),
      this
    )
  }
  once(t, e) {
    if (O(t)) {
      for (const i of Object.entries(t)) this.once(...i)
      return this
    }
    return (
      String(t)
        .split(' ')
        .forEach((i) => {
          const s = (...o) => {
            this.off(i, s), e.call(this, this, ...o)
          }
          ;(s._ = e), this.on(i, s)
        }),
      this
    )
  }
  off(t, e) {
    if (!O(t))
      return (
        t.split(' ').forEach((i) => {
          const s = this.events[i]
          if (!s || !s.length) return this
          let o = -1
          for (let a = 0, r = s.length; a < r; a++) {
            const l = s[a]
            if (l && (l === e || l._ === e)) {
              o = a
              break
            }
          }
          o != -1 && s.splice(o, 1)
        }),
        this
      )
    for (const i of Object.entries(t)) this.off(...i)
  }
  trigger(t, ...e) {
    for (const i of [...(this.events[t] || [])].slice())
      if (i && i.call(this, this, ...e) === !1) return !1
    for (const i of [...(this.events['*'] || [])].slice())
      if (i && i.call(this, t, this, ...e) === !1) return !1
    return !0
  }
  attachPlugins(t) {
    const e = {}
    for (const [i, s] of Object.entries(t || {}))
      this.options[i] === !1 ||
        this.plugins[i] ||
        ((this.options[i] = x({}, s.defaults || {}, this.options[i])), (e[i] = new s(this)))
    for (const [i, s] of Object.entries(e)) s.attach(this)
    return (this.plugins = Object.assign({}, this.plugins, e)), this
  }
  detachPlugins() {
    for (const t in this.plugins) {
      let e
      ;(e = this.plugins[t]) && typeof e.detach == 'function' && e.detach(this)
    }
    return (this.plugins = {}), this
  }
}
const Qt = {
  touch: !0,
  zoom: !0,
  pinchToZoom: !0,
  panOnlyZoomed: !1,
  lockAxis: !1,
  friction: 0.64,
  decelFriction: 0.88,
  zoomFriction: 0.74,
  bounceForce: 0.2,
  baseScale: 1,
  minScale: 1,
  maxScale: 2,
  step: 0.5,
  textSelection: !1,
  click: 'toggleZoom',
  wheel: 'zoom',
  wheelFactor: 42,
  wheelLimit: 5,
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
  ratio: 1
}
class I extends j {
  constructor(t, e = {}) {
    super(x(!0, {}, Qt, e)), (this.state = 'init'), (this.$container = t)
    for (const i of ['onLoad', 'onWheel', 'onClick']) this[i] = this[i].bind(this)
    this.initLayout(),
      this.resetValues(),
      this.attachPlugins(I.Plugins),
      this.trigger('init'),
      this.updateMetrics(),
      this.attachEvents(),
      this.trigger('ready'),
      this.option('centerOnStart') === !1 ? (this.state = 'ready') : this.panTo({ friction: 0 }),
      (t.__Panzoom = this)
  }
  initLayout() {
    const t = this.$container
    if (!(t instanceof HTMLElement)) throw new Error('Panzoom: Container not found')
    const e = this.option('content') || t.querySelector('.panzoom__content')
    if (!e) throw new Error('Panzoom: Content not found')
    this.$content = e
    let i = this.option('viewport') || t.querySelector('.panzoom__viewport')
    i ||
      this.option('wrapInner') === !1 ||
      ((i = document.createElement('div')),
      i.classList.add('panzoom__viewport'),
      i.append(...t.childNodes),
      t.appendChild(i)),
      (this.$viewport = i || e.parentNode)
  }
  resetValues() {
    ;(this.updateRate = this.option(
      'updateRate',
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24
    )),
      (this.container = { width: 0, height: 0 }),
      (this.viewport = { width: 0, height: 0 }),
      (this.content = {
        origWidth: 0,
        origHeight: 0,
        width: 0,
        height: 0,
        x: this.option('x', 0),
        y: this.option('y', 0),
        scale: this.option('baseScale')
      }),
      (this.transform = { x: 0, y: 0, scale: 1 }),
      this.resetDragPosition()
  }
  onLoad(t) {
    this.updateMetrics(),
      this.panTo({ scale: this.option('baseScale'), friction: 0 }),
      this.trigger('load', t)
  }
  onClick(t) {
    if (
      t.defaultPrevented ||
      (document.activeElement && document.activeElement.closest('[contenteditable]'))
    )
      return
    if (
      this.option('textSelection') &&
      window.getSelection().toString().length &&
      (!t.target || !t.target.hasAttribute('data-fancybox-close'))
    )
      return void t.stopPropagation()
    const e = this.$content.getClientRects()[0]
    if (
      this.state !== 'ready' &&
      (this.dragPosition.midPoint ||
        Math.abs(e.top - this.dragStart.rect.top) > 1 ||
        Math.abs(e.left - this.dragStart.rect.left) > 1)
    )
      return t.preventDefault(), void t.stopPropagation()
    this.trigger('click', t) !== !1 &&
      this.option('zoom') &&
      this.option('click') === 'toggleZoom' &&
      (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t))
  }
  onWheel(t) {
    this.trigger('wheel', t) !== !1 &&
      this.option('zoom') &&
      this.option('wheel') &&
      this.zoomWithWheel(t)
  }
  zoomWithWheel(t) {
    this.changedDelta === void 0 && (this.changedDelta = 0)
    const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
      i = this.content.scale
    let s = (i * (100 + e * this.option('wheelFactor'))) / 100
    if (
      ((e < 0 && Math.abs(i - this.option('minScale')) < 0.01) ||
      (e > 0 && Math.abs(i - this.option('maxScale')) < 0.01)
        ? ((this.changedDelta += Math.abs(e)), (s = i))
        : ((this.changedDelta = 0),
          (s = Math.max(Math.min(s, this.option('maxScale')), this.option('minScale')))),
      this.changedDelta > this.option('wheelLimit') || (t.preventDefault(), s === i))
    )
      return
    const o = this.$content.getBoundingClientRect(),
      a = t.clientX - o.left,
      r = t.clientY - o.top
    this.zoomTo(s, { x: a, y: r })
  }
  zoomWithClick(t) {
    const e = this.$content.getClientRects()[0],
      i = t.clientX - e.left,
      s = t.clientY - e.top
    this.toggleZoom({ x: i, y: s })
  }
  attachEvents() {
    this.$content.addEventListener('load', this.onLoad),
      this.$container.addEventListener('wheel', this.onWheel, { passive: !1 }),
      this.$container.addEventListener('click', this.onClick, { passive: !1 }),
      this.initObserver()
    const t = new Jt(this.$container, {
      start: (e, i) => {
        if (!this.option('touch') || this.velocity.scale < 0) return !1
        const s = i.composedPath()[0]
        return !t.currentPointers.length &&
          (['BUTTON', 'TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO'].indexOf(s.nodeName) !==
            -1 ||
            (this.option('textSelection') &&
              ((o, a, r) => {
                const l = o.childNodes,
                  h = document.createRange()
                for (let c = 0; c < l.length; c++) {
                  const u = l[c]
                  if (u.nodeType !== Node.TEXT_NODE) continue
                  h.selectNodeContents(u)
                  const f = h.getBoundingClientRect()
                  if (a >= f.left && r >= f.top && a <= f.right && r <= f.bottom) return u
                }
                return !1
              })(s, e.clientX, e.clientY)))
          ? !1
          : !W(s) &&
              this.trigger('touchStart', i) !== !1 &&
              (i.type === 'mousedown' && i.preventDefault(),
              (this.state = 'pointerdown'),
              this.resetDragPosition(),
              (this.dragPosition.midPoint = null),
              (this.dragPosition.time = Date.now()),
              !0)
      },
      move: (e, i, s) => {
        if (this.state !== 'pointerdown') return
        if (this.trigger('touchMove', s) === !1) return void s.preventDefault()
        if (
          (i.length < 2 &&
            this.option('panOnlyZoomed') === !0 &&
            this.content.width <= this.viewport.width &&
            this.content.height <= this.viewport.height &&
            this.transform.scale <= this.option('baseScale')) ||
          (i.length > 1 && (!this.option('zoom') || this.option('pinchToZoom') === !1))
        )
          return
        const o = V(e[0], e[1]),
          a = V(i[0], i[1]),
          r = a.clientX - o.clientX,
          l = a.clientY - o.clientY,
          h = et(e[0], e[1]),
          c = et(i[0], i[1]),
          u = h && c ? c / h : 1
        ;(this.dragOffset.x += r),
          (this.dragOffset.y += l),
          (this.dragOffset.scale *= u),
          (this.dragOffset.time = Date.now() - this.dragPosition.time)
        const f = this.dragStart.scale === 1 && this.option('lockAxis')
        if (f && !this.lockAxis) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
            return void s.preventDefault()
          const d = Math.abs((180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI)
          this.lockAxis = d > 45 && d < 135 ? 'y' : 'x'
        }
        if (f === 'xy' || this.lockAxis !== 'y') {
          if (
            (s.preventDefault(),
            s.stopPropagation(),
            s.stopImmediatePropagation(),
            this.lockAxis && (this.dragOffset[this.lockAxis === 'x' ? 'y' : 'x'] = 0),
            this.$container.classList.add(this.option('draggingClass')),
            (this.transform.scale === this.option('baseScale') && this.lockAxis === 'y') ||
              (this.dragPosition.x = this.dragStart.x + this.dragOffset.x),
            (this.transform.scale === this.option('baseScale') && this.lockAxis === 'x') ||
              (this.dragPosition.y = this.dragStart.y + this.dragOffset.y),
            (this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale),
            i.length > 1)
          ) {
            const d = V(t.startPointers[0], t.startPointers[1]),
              p = d.clientX - this.dragStart.rect.x,
              m = d.clientY - this.dragStart.rect.y,
              { deltaX: b, deltaY: E } = this.getZoomDelta(
                this.content.scale * this.dragOffset.scale,
                p,
                m
              )
            ;(this.dragPosition.x -= b),
              (this.dragPosition.y -= E),
              (this.dragPosition.midPoint = a)
          } else this.setDragResistance()
          ;(this.transform = {
            x: this.dragPosition.x,
            y: this.dragPosition.y,
            scale: this.dragPosition.scale
          }),
            this.startAnimation()
        }
      },
      end: (e, i) => {
        if (this.state !== 'pointerdown') return
        if (((this._dragOffset = { ...this.dragOffset }), t.currentPointers.length))
          return void this.resetDragPosition()
        if (
          ((this.state = 'decel'),
          (this.friction = this.option('decelFriction')),
          this.recalculateTransform(),
          this.$container.classList.remove(this.option('draggingClass')),
          this.trigger('touchEnd', i) === !1 || this.state !== 'decel')
        )
          return
        const s = this.option('minScale')
        if (this.transform.scale < s) return void this.zoomTo(s, { friction: 0.64 })
        const o = this.option('maxScale')
        if (this.transform.scale - o > 0.01) {
          const a = this.dragPosition.midPoint || e,
            r = this.$content.getClientRects()[0]
          this.zoomTo(o, { friction: 0.64, x: a.clientX - r.left, y: a.clientY - r.top })
        }
      }
    })
    this.pointerTracker = t
  }
  initObserver() {
    this.resizeObserver ||
      ((this.resizeObserver = new Kt(() => {
        this.updateTimer ||
          (this.updateTimer = setTimeout(() => {
            const t = this.$container.getBoundingClientRect()
            t.width && t.height
              ? ((Math.abs(t.width - this.container.width) > 1 ||
                  Math.abs(t.height - this.container.height) > 1) &&
                  (this.isAnimating() && this.endAnimation(!0),
                  this.updateMetrics(),
                  this.panTo({
                    x: this.content.x,
                    y: this.content.y,
                    scale: this.option('baseScale'),
                    friction: 0
                  })),
                (this.updateTimer = null))
              : (this.updateTimer = null)
          }, this.updateRate))
      })),
      this.resizeObserver.observe(this.$container))
  }
  resetDragPosition() {
    ;(this.lockAxis = null),
      (this.friction = this.option('friction')),
      (this.velocity = { x: 0, y: 0, scale: 0 })
    const { x: t, y: e, scale: i } = this.content
    ;(this.dragStart = { rect: this.$content.getBoundingClientRect(), x: t, y: e, scale: i }),
      (this.dragPosition = { ...this.dragPosition, x: t, y: e, scale: i }),
      (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 })
  }
  updateMetrics(t) {
    t !== !0 && this.trigger('beforeUpdate')
    const e = this.$container,
      i = this.$content,
      s = this.$viewport,
      o = i instanceof HTMLImageElement,
      a = this.option('zoom'),
      r = this.option('resizeParent', a)
    let l = this.option('width'),
      h = this.option('height'),
      c =
        l ||
        ((u = i),
        Math.max(
          parseFloat(u.naturalWidth || 0),
          parseFloat((u.width && u.width.baseVal && u.width.baseVal.value) || 0),
          parseFloat(u.offsetWidth || 0),
          parseFloat(u.scrollWidth || 0)
        ))
    var u
    let f =
      h ||
      (($) =>
        Math.max(
          parseFloat($.naturalHeight || 0),
          parseFloat(($.height && $.height.baseVal && $.height.baseVal.value) || 0),
          parseFloat($.offsetHeight || 0),
          parseFloat($.scrollHeight || 0)
        ))(i)
    Object.assign(i.style, {
      width: l ? `${l}px` : '',
      height: h ? `${h}px` : '',
      maxWidth: '',
      maxHeight: ''
    }),
      r && Object.assign(s.style, { width: '', height: '' })
    const d = this.option('ratio')
    ;(c = y(c * d)), (f = y(f * d)), (l = c), (h = f)
    const p = i.getBoundingClientRect(),
      m = s.getBoundingClientRect(),
      b = s == e ? m : e.getBoundingClientRect()
    let E = Math.max(s.offsetWidth, y(m.width)),
      Z = Math.max(s.offsetHeight, y(m.height)),
      H = window.getComputedStyle(s)
    if (
      ((E -= parseFloat(H.paddingLeft) + parseFloat(H.paddingRight)),
      (Z -= parseFloat(H.paddingTop) + parseFloat(H.paddingBottom)),
      (this.viewport.width = E),
      (this.viewport.height = Z),
      a)
    ) {
      if (Math.abs(c - p.width) > 0.1 || Math.abs(f - p.height) > 0.1) {
        const $ = ((G, K, ft, pt) => {
          const J = Math.min(ft / G || 0, pt / K)
          return { width: G * J || 0, height: K * J || 0 }
        })(c, f, Math.min(c, p.width), Math.min(f, p.height))
        ;(l = y($.width)), (h = y($.height))
      }
      Object.assign(i.style, { width: `${l}px`, height: `${h}px`, transform: '' })
    }
    if (
      (r &&
        (Object.assign(s.style, { width: `${l}px`, height: `${h}px` }),
        (this.viewport = { ...this.viewport, width: l, height: h })),
      o && a && typeof this.options.maxScale != 'function')
    ) {
      const $ = this.option('maxScale')
      this.options.maxScale = function () {
        return this.content.origWidth > 0 && this.content.fitWidth > 0
          ? this.content.origWidth / this.content.fitWidth
          : $
      }
    }
    ;(this.content = {
      ...this.content,
      origWidth: c,
      origHeight: f,
      fitWidth: l,
      fitHeight: h,
      width: l,
      height: h,
      scale: 1,
      isZoomable: a
    }),
      (this.container = { width: b.width, height: b.height }),
      t !== !0 && this.trigger('afterUpdate')
  }
  zoomIn(t) {
    this.zoomTo(this.content.scale + (t || this.option('step')))
  }
  zoomOut(t) {
    this.zoomTo(this.content.scale - (t || this.option('step')))
  }
  toggleZoom(t = {}) {
    const e = this.option('maxScale'),
      i = this.option('baseScale'),
      s = this.content.scale > i + 0.5 * (e - i) ? i : e
    this.zoomTo(s, t)
  }
  zoomTo(t = this.option('baseScale'), { x: e = null, y: i = null } = {}) {
    t = Math.max(Math.min(t, this.option('maxScale')), this.option('minScale'))
    const s = y(this.content.scale / (this.content.width / this.content.fitWidth), 1e7)
    e === null && (e = this.content.width * s * 0.5),
      i === null && (i = this.content.height * s * 0.5)
    const { deltaX: o, deltaY: a } = this.getZoomDelta(t, e, i)
    ;(e = this.content.x - o),
      (i = this.content.y - a),
      this.panTo({ x: e, y: i, scale: t, friction: this.option('zoomFriction') })
  }
  getZoomDelta(t, e = 0, i = 0) {
    const s = this.content.fitWidth * this.content.scale,
      o = this.content.fitHeight * this.content.scale,
      a = e > 0 && s ? e / s : 0,
      r = i > 0 && o ? i / o : 0
    return {
      deltaX: (this.content.fitWidth * t - s) * a,
      deltaY: (this.content.fitHeight * t - o) * r
    }
  }
  panTo({
    x: t = this.content.x,
    y: e = this.content.y,
    scale: i,
    friction: s = this.option('friction'),
    ignoreBounds: o = !1
  } = {}) {
    if (((i = i || this.content.scale || 1), !o)) {
      const { boundX: a, boundY: r } = this.getBounds(i)
      a && (t = Math.max(Math.min(t, a.to), a.from)), r && (e = Math.max(Math.min(e, r.to), r.from))
    }
    ;(this.friction = s),
      (this.transform = { ...this.transform, x: t, y: e, scale: i }),
      s
        ? ((this.state = 'panning'),
          (this.velocity = {
            x: (1 / this.friction - 1) * (t - this.content.x),
            y: (1 / this.friction - 1) * (e - this.content.y),
            scale: (1 / this.friction - 1) * (i - this.content.scale)
          }),
          this.startAnimation())
        : this.endAnimation()
  }
  startAnimation() {
    this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger('startAnimation'),
      (this.rAF = requestAnimationFrame(() => this.animate()))
  }
  animate() {
    if (
      (this.setEdgeForce(),
      this.setDragForce(),
      (this.velocity.x *= this.friction),
      (this.velocity.y *= this.friction),
      (this.velocity.scale *= this.friction),
      (this.content.x += this.velocity.x),
      (this.content.y += this.velocity.y),
      (this.content.scale += this.velocity.scale),
      this.isAnimating())
    )
      this.setTransform()
    else if (this.state !== 'pointerdown') return void this.endAnimation()
    this.rAF = requestAnimationFrame(() => this.animate())
  }
  getBounds(t) {
    let e = this.boundX,
      i = this.boundY
    if (e !== void 0 && i !== void 0) return { boundX: e, boundY: i }
    ;(e = { from: 0, to: 0 }), (i = { from: 0, to: 0 }), (t = t || this.transform.scale)
    const s = this.content.fitWidth * t,
      o = this.content.fitHeight * t,
      a = this.viewport.width,
      r = this.viewport.height
    if (s < a) {
      const l = y(0.5 * (a - s))
      ;(e.from = l), (e.to = l)
    } else e.from = y(a - s)
    if (o < r) {
      const l = 0.5 * (r - o)
      ;(i.from = l), (i.to = l)
    } else i.from = y(r - o)
    return { boundX: e, boundY: i }
  }
  setEdgeForce() {
    if (this.state !== 'decel') return
    const t = this.option('bounceForce'),
      { boundX: e, boundY: i } = this.getBounds(Math.max(this.transform.scale, this.content.scale))
    let s, o, a, r
    if (
      (e && ((s = this.content.x < e.from), (o = this.content.x > e.to)),
      i && ((a = this.content.y < i.from), (r = this.content.y > i.to)),
      s || o)
    ) {
      let l = ((s ? e.from : e.to) - this.content.x) * t
      const h = this.content.x + (this.velocity.x + l) / this.friction
      h >= e.from && h <= e.to && (l += this.velocity.x),
        (this.velocity.x = l),
        this.recalculateTransform()
    }
    if (a || r) {
      let l = ((a ? i.from : i.to) - this.content.y) * t
      const h = this.content.y + (l + this.velocity.y) / this.friction
      h >= i.from && h <= i.to && (l += this.velocity.y),
        (this.velocity.y = l),
        this.recalculateTransform()
    }
  }
  setDragResistance() {
    if (this.state !== 'pointerdown') return
    const { boundX: t, boundY: e } = this.getBounds(this.dragPosition.scale)
    let i, s, o, a
    if (
      (t && ((i = this.dragPosition.x < t.from), (s = this.dragPosition.x > t.to)),
      e && ((o = this.dragPosition.y < e.from), (a = this.dragPosition.y > e.to)),
      (i || s) && (!i || !s))
    ) {
      const r = i ? t.from : t.to,
        l = r - this.dragPosition.x
      this.dragPosition.x = r - 0.3 * l
    }
    if ((o || a) && (!o || !a)) {
      const r = o ? e.from : e.to,
        l = r - this.dragPosition.y
      this.dragPosition.y = r - 0.3 * l
    }
  }
  setDragForce() {
    this.state === 'pointerdown' &&
      ((this.velocity.x = this.dragPosition.x - this.content.x),
      (this.velocity.y = this.dragPosition.y - this.content.y),
      (this.velocity.scale = this.dragPosition.scale - this.content.scale))
  }
  recalculateTransform() {
    ;(this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1)),
      (this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1)),
      (this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1))
  }
  isAnimating() {
    return !(
      !this.friction ||
      !(
        Math.abs(this.velocity.x) > 0.05 ||
        Math.abs(this.velocity.y) > 0.05 ||
        Math.abs(this.velocity.scale) > 0.05
      )
    )
  }
  setTransform(t) {
    let e, i, s
    if (
      (t
        ? ((e = y(this.transform.x)),
          (i = y(this.transform.y)),
          (s = this.transform.scale),
          (this.content = { ...this.content, x: e, y: i, scale: s }))
        : ((e = y(this.content.x)),
          (i = y(this.content.y)),
          (s = this.content.scale / (this.content.width / this.content.fitWidth)),
          (this.content = { ...this.content, x: e, y: i })),
      this.trigger('beforeTransform'),
      (e = y(this.content.x)),
      (i = y(this.content.y)),
      t && this.option('zoom'))
    ) {
      let o, a
      ;(o = y(this.content.fitWidth * s)),
        (a = y(this.content.fitHeight * s)),
        (this.content.width = o),
        (this.content.height = a),
        (this.transform = { ...this.transform, width: o, height: a, scale: s }),
        Object.assign(this.$content.style, {
          width: `${o}px`,
          height: `${a}px`,
          maxWidth: 'none',
          maxHeight: 'none',
          transform: `translate3d(${e}px, ${i}px, 0) scale(1)`
        })
    } else this.$content.style.transform = `translate3d(${e}px, ${i}px, 0) scale(${s})`
    this.trigger('afterTransform')
  }
  endAnimation(t) {
    cancelAnimationFrame(this.rAF),
      (this.rAF = null),
      (this.velocity = { x: 0, y: 0, scale: 0 }),
      this.setTransform(!0),
      (this.state = 'ready'),
      this.handleCursor(),
      t !== !0 && this.trigger('endAnimation')
  }
  handleCursor() {
    const t = this.option('draggableClass')
    t &&
      this.option('touch') &&
      (this.option('panOnlyZoomed') == 1 &&
      this.content.width <= this.viewport.width &&
      this.content.height <= this.viewport.height &&
      this.transform.scale <= this.option('baseScale')
        ? this.$container.classList.remove(t)
        : this.$container.classList.add(t))
  }
  detachEvents() {
    this.$content.removeEventListener('load', this.onLoad),
      this.$container.removeEventListener('wheel', this.onWheel, { passive: !1 }),
      this.$container.removeEventListener('click', this.onClick, { passive: !1 }),
      this.pointerTracker && (this.pointerTracker.stop(), (this.pointerTracker = null)),
      this.resizeObserver && (this.resizeObserver.disconnect(), (this.resizeObserver = null))
  }
  destroy() {
    this.state !== 'destroy' &&
      ((this.state = 'destroy'),
      clearTimeout(this.updateTimer),
      (this.updateTimer = null),
      cancelAnimationFrame(this.rAF),
      (this.rAF = null),
      this.detachEvents(),
      this.detachPlugins(),
      this.resetDragPosition())
  }
}
;(I.version = '4.0.31'), (I.Plugins = {})
const it = (n, t) => {
  let e = 0
  return function (...i) {
    const s = /* @__PURE__ */ new Date().getTime()
    if (!(s - e < t)) return (e = s), n(...i)
  }
}
class nt {
  constructor(t) {
    ;(this.$container = null),
      (this.$prev = null),
      (this.$next = null),
      (this.carousel = t),
      (this.onRefresh = this.onRefresh.bind(this))
  }
  option(t) {
    return this.carousel.option(`Navigation.${t}`)
  }
  createButton(t) {
    const e = document.createElement('button')
    e.setAttribute('title', this.carousel.localize(`{{${t.toUpperCase()}}}`))
    const i = this.option('classNames.button') + ' ' + this.option(`classNames.${t}`)
    return (
      e.classList.add(...i.split(' ')),
      e.setAttribute('tabindex', '0'),
      (e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`))),
      e.addEventListener('click', (s) => {
        s.preventDefault(),
          s.stopPropagation(),
          this.carousel['slide' + (t === 'next' ? 'Next' : 'Prev')]()
      }),
      e
    )
  }
  build() {
    this.$container ||
      ((this.$container = document.createElement('div')),
      this.$container.classList.add(...this.option('classNames.main').split(' ')),
      this.carousel.$container.appendChild(this.$container)),
      this.$next ||
        ((this.$next = this.createButton('next')), this.$container.appendChild(this.$next)),
      this.$prev ||
        ((this.$prev = this.createButton('prev')), this.$container.appendChild(this.$prev))
  }
  onRefresh() {
    const t = this.carousel.pages.length
    t <= 1 ||
    (t > 1 &&
      this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
      !Number.isInteger(this.carousel.option('slidesPerPage')))
      ? this.cleanup()
      : (this.build(),
        this.$prev.removeAttribute('disabled'),
        this.$next.removeAttribute('disabled'),
        this.carousel.option('infiniteX', this.carousel.option('infinite')) ||
          (this.carousel.page <= 0 && this.$prev.setAttribute('disabled', ''),
          this.carousel.page >= t - 1 && this.$next.setAttribute('disabled', '')))
  }
  cleanup() {
    this.$prev && this.$prev.remove(),
      (this.$prev = null),
      this.$next && this.$next.remove(),
      (this.$next = null),
      this.$container && this.$container.remove(),
      (this.$container = null)
  }
  attach() {
    this.carousel.on('refresh change', this.onRefresh)
  }
  detach() {
    this.carousel.off('refresh change', this.onRefresh), this.cleanup()
  }
}
nt.defaults = {
  prevTpl:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
  nextTpl:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
  classNames: {
    main: 'carousel__nav',
    button: 'carousel__button',
    next: 'is-next',
    prev: 'is-prev'
  }
}
class at {
  constructor(t) {
    ;(this.carousel = t),
      (this.selectedIndex = null),
      (this.friction = 0),
      (this.onNavReady = this.onNavReady.bind(this)),
      (this.onNavClick = this.onNavClick.bind(this)),
      (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
      (this.onTargetChange = this.onTargetChange.bind(this))
  }
  addAsTargetFor(t) {
    ;(this.target = this.carousel), (this.nav = t), this.attachEvents()
  }
  addAsNavFor(t) {
    ;(this.target = t), (this.nav = this.carousel), this.attachEvents()
  }
  attachEvents() {
    ;(this.nav.options.initialSlide = this.target.options.initialPage),
      this.nav.on('ready', this.onNavReady),
      this.nav.on('createSlide', this.onNavCreateSlide),
      this.nav.on('Panzoom.click', this.onNavClick),
      this.target.on('change', this.onTargetChange),
      this.target.on('Panzoom.afterUpdate', this.onTargetChange)
  }
  onNavReady() {
    this.onTargetChange(!0)
  }
  onNavClick(t, e, i) {
    const s = i.target.closest('.carousel__slide')
    if (!s) return
    i.stopPropagation()
    const o = parseInt(s.dataset.index, 10),
      a = this.target.findPageForSlide(o)
    this.target.page !== a && this.target.slideTo(a, { friction: this.friction }),
      this.markSelectedSlide(o)
  }
  onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index)
  }
  onTargetChange() {
    const t = this.target.pages[this.target.page].indexes[0],
      e = this.nav.findPageForSlide(t)
    this.nav.slideTo(e), this.markSelectedSlide(t)
  }
  markSelectedSlide(t) {
    ;(this.selectedIndex = t),
      [...this.nav.slides].filter((i) => i.$el && i.$el.classList.remove('is-nav-selected'))
    const e = this.nav.slides[t]
    e && e.$el && e.$el.classList.add('is-nav-selected')
  }
  attach(t) {
    const e = t.options.Sync
    ;(e.target || e.nav) &&
      (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav),
      (this.friction = e.friction))
  }
  detach() {
    this.nav &&
      (this.nav.off('ready', this.onNavReady),
      this.nav.off('Panzoom.click', this.onNavClick),
      this.nav.off('createSlide', this.onNavCreateSlide)),
      this.target &&
        (this.target.off('Panzoom.afterUpdate', this.onTargetChange),
        this.target.off('change', this.onTargetChange))
  }
}
at.defaults = { friction: 0.92 }
const te = {
    Navigation: nt,
    Dots: class {
      constructor(n) {
        ;(this.carousel = n),
          (this.$list = null),
          (this.events = { change: this.onChange.bind(this), refresh: this.onRefresh.bind(this) })
      }
      buildList() {
        if (this.carousel.pages.length < this.carousel.option('Dots.minSlideCount')) return
        const n = document.createElement('ol')
        return (
          n.classList.add('carousel__dots'),
          n.addEventListener('click', (t) => {
            if (!('page' in t.target.dataset)) return
            t.preventDefault(), t.stopPropagation()
            const e = parseInt(t.target.dataset.page, 10),
              i = this.carousel
            e !== i.page &&
              (i.pages.length < 3 && i.option('infinite')
                ? i[e == 0 ? 'slidePrev' : 'slideNext']()
                : i.slideTo(e))
          }),
          (this.$list = n),
          this.carousel.$container.appendChild(n),
          this.carousel.$container.classList.add('has-dots'),
          n
        )
      }
      removeList() {
        this.$list && (this.$list.parentNode.removeChild(this.$list), (this.$list = null)),
          this.carousel.$container.classList.remove('has-dots')
      }
      rebuildDots() {
        let n = this.$list
        const t = !!n,
          e = this.carousel.pages.length
        if (e < 2) return void (t && this.removeList())
        t || (n = this.buildList())
        const i = this.$list.children.length
        if (i > e) for (let s = e; s < i; s++) this.$list.removeChild(this.$list.lastChild)
        else {
          for (let s = i; s < e; s++) {
            const o = document.createElement('li')
            o.classList.add('carousel__dot'),
              (o.dataset.page = s),
              o.setAttribute('role', 'button'),
              o.setAttribute('tabindex', '0'),
              o.setAttribute('title', this.carousel.localize('{{GOTO}}', [['%d', s + 1]])),
              o.addEventListener('keydown', (a) => {
                const r = a.code
                let l
                r === 'Enter' || r === 'NumpadEnter'
                  ? (l = o)
                  : r === 'ArrowRight'
                    ? (l = o.nextSibling)
                    : r === 'ArrowLeft' && (l = o.previousSibling),
                  l && l.click()
              }),
              this.$list.appendChild(o)
          }
          this.setActiveDot()
        }
      }
      setActiveDot() {
        if (!this.$list) return
        this.$list.childNodes.forEach((t) => {
          t.classList.remove('is-selected')
        })
        const n = this.$list.childNodes[this.carousel.page]
        n && n.classList.add('is-selected')
      }
      onChange() {
        this.setActiveDot()
      }
      onRefresh() {
        this.rebuildDots()
      }
      attach() {
        this.carousel.on(this.events)
      }
      detach() {
        this.removeList(), this.carousel.off(this.events), (this.carousel = null)
      }
    },
    Sync: at
  },
  ee = {
    slides: [],
    preload: 0,
    slidesPerPage: 'auto',
    initialPage: null,
    initialSlide: null,
    friction: 0.92,
    center: !0,
    infinite: !0,
    fill: !0,
    dragFree: !1,
    prefix: '',
    classNames: {
      viewport: 'carousel__viewport',
      track: 'carousel__track',
      slide: 'carousel__slide',
      slideSelected: 'is-selected'
    },
    l10n: { NEXT: 'Next slide', PREV: 'Previous slide', GOTO: 'Go to slide #%d' }
  }
class F extends j {
  constructor(t, e = {}) {
    if (
      (super((e = x(!0, {}, ee, e))),
      (this.state = 'init'),
      (this.$container = t),
      !(this.$container instanceof HTMLElement))
    )
      throw new Error('No root element provided')
    ;(this.slideNext = it(this.slideNext.bind(this), 250)),
      (this.slidePrev = it(this.slidePrev.bind(this), 250)),
      this.init(),
      (t.__Carousel = this)
  }
  init() {
    ;(this.pages = []),
      (this.page = this.pageIndex = null),
      (this.prevPage = this.prevPageIndex = null),
      this.attachPlugins(F.Plugins),
      this.trigger('init'),
      this.initLayout(),
      this.initSlides(),
      this.updateMetrics(),
      this.$track &&
        this.pages.length &&
        (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`),
      this.manageSlideVisiblity(),
      this.initPanzoom(),
      (this.state = 'ready'),
      this.trigger('ready')
  }
  initLayout() {
    const t = this.option('prefix'),
      e = this.option('classNames')
    ;(this.$viewport =
      this.option('viewport') || this.$container.querySelector(`.${t}${e.viewport}`)),
      this.$viewport ||
        ((this.$viewport = document.createElement('div')),
        this.$viewport.classList.add(...(t + e.viewport).split(' ')),
        this.$viewport.append(...this.$container.childNodes),
        this.$container.appendChild(this.$viewport)),
      (this.$track = this.option('track') || this.$container.querySelector(`.${t}${e.track}`)),
      this.$track ||
        ((this.$track = document.createElement('div')),
        this.$track.classList.add(...(t + e.track).split(' ')),
        this.$track.append(...this.$viewport.childNodes),
        this.$viewport.appendChild(this.$track))
  }
  initSlides() {
    ;(this.slides = []),
      this.$viewport
        .querySelectorAll(`.${this.option('prefix')}${this.option('classNames.slide')}`)
        .forEach((t) => {
          const e = { $el: t, isDom: !0 }
          this.slides.push(e), this.trigger('createSlide', e, this.slides.length)
        }),
      Array.isArray(this.options.slides) &&
        (this.slides = x(!0, [...this.slides], this.options.slides))
  }
  updateMetrics() {
    let t,
      e = 0,
      i = []
    this.slides.forEach((d, p) => {
      const m = d.$el,
        b = d.isDom || !t ? this.getSlideMetrics(m) : t
      ;(d.index = p), (d.width = b), (d.left = e), (t = b), (e += b), i.push(p)
    })
    let s = Math.max(this.$track.offsetWidth, y(this.$track.getBoundingClientRect().width)),
      o = getComputedStyle(this.$track)
    ;(s -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)),
      (this.contentWidth = e),
      (this.viewportWidth = s)
    const a = [],
      r = this.option('slidesPerPage')
    if (Number.isInteger(r) && e > s)
      for (let d = 0; d < this.slides.length; d += r)
        a.push({ indexes: i.slice(d, d + r), slides: this.slides.slice(d, d + r) })
    else {
      let d = 0,
        p = 0
      for (let m = 0; m < this.slides.length; m += 1) {
        let b = this.slides[m]
        ;(!a.length || p + b.width > s) &&
          (a.push({ indexes: [], slides: [] }), (d = a.length - 1), (p = 0)),
          (p += b.width),
          a[d].indexes.push(m),
          a[d].slides.push(b)
      }
    }
    const l = this.option('center'),
      h = this.option('fill')
    a.forEach((d, p) => {
      ;(d.index = p),
        (d.width = d.slides.reduce((m, b) => m + b.width, 0)),
        (d.left = d.slides[0].left),
        l && (d.left += 0.5 * (s - d.width) * -1),
        h &&
          !this.option('infiniteX', this.option('infinite')) &&
          e > s &&
          ((d.left = Math.max(d.left, 0)), (d.left = Math.min(d.left, e - s)))
    })
    const c = []
    let u
    a.forEach((d) => {
      const p = { ...d }
      u && p.left === u.left
        ? ((u.width += p.width),
          (u.slides = [...u.slides, ...p.slides]),
          (u.indexes = [...u.indexes, ...p.indexes]))
        : ((p.index = c.length), (u = p), c.push(p))
    }),
      (this.pages = c)
    let f = this.page
    if (f === null) {
      const d = this.option('initialSlide')
      ;(f =
        d !== null ? this.findPageForSlide(d) : parseInt(this.option('initialPage', 0), 10) || 0),
        c[f] || (f = c.length && f > c.length ? c[c.length - 1].index : 0),
        (this.page = f),
        (this.pageIndex = f)
    }
    this.updatePanzoom(), this.trigger('refresh')
  }
  getSlideMetrics(t) {
    if (!t) {
      const s = this.slides[0]
      ;((t = document.createElement('div')).dataset.isTestEl = 1),
        (t.style.visibility = 'hidden'),
        t.classList.add(...(this.option('prefix') + this.option('classNames.slide')).split(' ')),
        s.customClass && t.classList.add(...s.customClass.split(' ')),
        this.$track.prepend(t)
    }
    let e = Math.max(t.offsetWidth, y(t.getBoundingClientRect().width))
    const i = t.currentStyle || window.getComputedStyle(t)
    return (
      (e = e + (parseFloat(i.marginLeft) || 0) + (parseFloat(i.marginRight) || 0)),
      t.dataset.isTestEl && t.remove(),
      e
    )
  }
  findPageForSlide(t) {
    t = parseInt(t, 10) || 0
    const e = this.pages.find((i) => i.indexes.indexOf(t) > -1)
    return e ? e.index : null
  }
  slideNext() {
    this.slideTo(this.pageIndex + 1)
  }
  slidePrev() {
    this.slideTo(this.pageIndex - 1)
  }
  slideTo(t, e = {}) {
    const { x: i = -1 * this.setPage(t, !0), y: s = 0, friction: o = this.option('friction') } = e
    ;(this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o) ||
      (this.Panzoom.panTo({ x: i, y: s, friction: o, ignoreBounds: !0 }),
      this.state === 'ready' && this.Panzoom.state === 'ready' && this.trigger('settle'))
  }
  initPanzoom() {
    this.Panzoom && this.Panzoom.destroy()
    const t = x(
      !0,
      {},
      {
        content: this.$track,
        wrapInner: !1,
        resizeParent: !1,
        zoom: !1,
        click: !1,
        lockAxis: 'x',
        x: this.pages.length ? -1 * this.pages[this.page].left : 0,
        centerOnStart: !1,
        textSelection: () => this.option('textSelection', !1),
        panOnlyZoomed: function () {
          return this.content.width <= this.viewport.width
        }
      },
      this.option('Panzoom')
    )
    ;(this.Panzoom = new I(this.$container, t)),
      this.Panzoom.on({
        '*': (e, ...i) => this.trigger(`Panzoom.${e}`, ...i),
        afterUpdate: () => {
          this.updatePage()
        },
        beforeTransform: this.onBeforeTransform.bind(this),
        touchEnd: this.onTouchEnd.bind(this),
        endAnimation: () => {
          this.trigger('settle')
        }
      }),
      this.updateMetrics(),
      this.manageSlideVisiblity()
  }
  updatePanzoom() {
    this.Panzoom &&
      ((this.Panzoom.content = {
        ...this.Panzoom.content,
        fitWidth: this.contentWidth,
        origWidth: this.contentWidth,
        width: this.contentWidth
      }),
      this.pages.length > 1 && this.option('infiniteX', this.option('infinite'))
        ? (this.Panzoom.boundX = null)
        : this.pages.length &&
          (this.Panzoom.boundX = {
            from: -1 * this.pages[this.pages.length - 1].left,
            to: -1 * this.pages[0].left
          }),
      this.option('infiniteY', this.option('infinite'))
        ? (this.Panzoom.boundY = null)
        : (this.Panzoom.boundY = { from: 0, to: 0 }),
      this.Panzoom.handleCursor())
  }
  manageSlideVisiblity() {
    const t = this.contentWidth,
      e = this.viewportWidth
    let i = this.Panzoom
      ? -1 * this.Panzoom.content.x
      : this.pages.length
        ? this.pages[this.page].left
        : 0
    const s = this.option('preload'),
      o = this.option('infiniteX', this.option('infinite')),
      a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue('padding-left')),
      r = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue('padding-right'))
    this.slides.forEach((c) => {
      let u,
        f,
        d = 0
      ;(u = i - a), (f = i + e + r), (u -= s * (e + a + r)), (f += s * (e + a + r))
      const p = c.left + c.width > u && c.left < f
      ;(u = i + t - a), (f = i + t + e + r), (u -= s * (e + a + r))
      const m = o && c.left + c.width > u && c.left < f
      ;(u = i - t - a), (f = i - t + e + r), (u -= s * (e + a + r))
      const b = o && c.left + c.width > u && c.left < f
      m || p || b
        ? (this.createSlideEl(c),
          p && (d = 0),
          m && (d = -1),
          b && (d = 1),
          c.left + c.width > i && c.left <= i + e + r && (d = 0))
        : this.removeSlideEl(c),
        (c.hasDiff = d)
    })
    let l = 0,
      h = 0
    this.slides.forEach((c, u) => {
      let f = 0
      c.$el
        ? (u !== l || c.hasDiff ? (f = h + c.hasDiff * t) : (h = 0),
          (c.$el.style.left = Math.abs(f) > 0.1 ? `${h + c.hasDiff * t}px` : ''),
          l++)
        : (h += c.width)
    }),
      this.markSelectedSlides()
  }
  createSlideEl(t) {
    if (!t) return
    if (t.$el) {
      let a = t.$el.dataset.index
      if (!a || parseInt(a, 10) !== t.index) {
        let r
        ;(t.$el.dataset.index = t.index),
          t.$el.querySelectorAll('[data-lazy-srcset]').forEach((l) => {
            l.srcset = l.dataset.lazySrcset
          }),
          t.$el.querySelectorAll('[data-lazy-src]').forEach((l) => {
            let h = l.dataset.lazySrc
            l instanceof HTMLImageElement ? (l.src = h) : (l.style.backgroundImage = `url('${h}')`)
          }),
          (r = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${r}')`),
          (t.state = 'ready')
      }
      return
    }
    const e = document.createElement('div')
    ;(e.dataset.index = t.index),
      e.classList.add(...(this.option('prefix') + this.option('classNames.slide')).split(' ')),
      t.customClass && e.classList.add(...t.customClass.split(' ')),
      t.html && (e.innerHTML = t.html)
    const i = []
    this.slides.forEach((a, r) => {
      a.$el && i.push(r)
    })
    const s = t.index
    let o = null
    if (i.length) {
      let a = i.reduce((r, l) => (Math.abs(l - s) < Math.abs(r - s) ? l : r))
      o = this.slides[a]
    }
    return (
      this.$track.insertBefore(
        e,
        o && o.$el ? (o.index < t.index ? o.$el.nextSibling : o.$el) : null
      ),
      (t.$el = e),
      this.trigger('createSlide', t, s),
      t
    )
  }
  removeSlideEl(t) {
    t.$el && !t.isDom && (this.trigger('removeSlide', t), t.$el.remove(), (t.$el = null))
  }
  markSelectedSlides() {
    const t = this.option('classNames.slideSelected'),
      e = 'aria-hidden'
    this.slides.forEach((i, s) => {
      const o = i.$el
      if (!o) return
      const a = this.pages[this.page]
      a && a.indexes && a.indexes.indexOf(s) > -1
        ? (t && !o.classList.contains(t) && (o.classList.add(t), this.trigger('selectSlide', i)),
          o.removeAttribute(e))
        : (t &&
            o.classList.contains(t) &&
            (o.classList.remove(t), this.trigger('unselectSlide', i)),
          o.setAttribute(e, !0))
    })
  }
  updatePage() {
    this.updateMetrics(), this.slideTo(this.page, { friction: 0 })
  }
  onBeforeTransform() {
    this.option('infiniteX', this.option('infinite')) && this.manageInfiniteTrack(),
      this.manageSlideVisiblity()
  }
  manageInfiniteTrack() {
    const t = this.contentWidth,
      e = this.viewportWidth
    if (!this.option('infiniteX', this.option('infinite')) || this.pages.length < 2 || t < e) return
    const i = this.Panzoom
    let s = !1
    return (
      i.content.x < -1 * (t - e) &&
        ((i.content.x += t), (this.pageIndex = this.pageIndex - this.pages.length), (s = !0)),
      i.content.x > e &&
        ((i.content.x -= t), (this.pageIndex = this.pageIndex + this.pages.length), (s = !0)),
      s && i.state === 'pointerdown' && i.resetDragPosition(),
      s
    )
  }
  onTouchEnd(t, e) {
    const i = this.option('dragFree')
    if (
      !i &&
      this.pages.length > 1 &&
      t.dragOffset.time < 350 &&
      Math.abs(t.dragOffset.y) < 1 &&
      Math.abs(t.dragOffset.x) > 5
    )
      this[t.dragOffset.x < 0 ? 'slideNext' : 'slidePrev']()
    else if (i) {
      const [, s] = this.getPageFromPosition(-1 * t.transform.x)
      this.setPage(s)
    } else this.slideToClosest()
  }
  slideToClosest(t = {}) {
    let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x)
    this.slideTo(e, t)
  }
  getPageFromPosition(t) {
    const e = this.pages.length
    this.option('center') && (t += 0.5 * this.viewportWidth)
    const i = Math.floor(t / this.contentWidth)
    t -= i * this.contentWidth
    let s = this.slides.find((o) => o.left <= t && o.left + o.width > t)
    if (s) {
      let o = this.findPageForSlide(s.index)
      return [o, o + i * e]
    }
    return [0, 0]
  }
  setPage(t, e) {
    let i = 0,
      s = parseInt(t, 10) || 0
    const o = this.page,
      a = this.pageIndex,
      r = this.pages.length,
      l = this.contentWidth,
      h = this.viewportWidth
    if (((t = ((s % r) + r) % r), this.option('infiniteX', this.option('infinite')) && l > h)) {
      const c = Math.floor(s / r) || 0,
        u = l
      if (((i = this.pages[t].left + c * u), e === !0 && r > 2)) {
        let f = -1 * this.Panzoom.content.x
        const d = i - u,
          p = i + u,
          m = Math.abs(f - i),
          b = Math.abs(f - d),
          E = Math.abs(f - p)
        E < m && E <= b ? ((i = p), (s += r)) : b < m && b < E && ((i = d), (s -= r))
      }
    } else
      (t = s = Math.max(0, Math.min(s, r - 1))), (i = this.pages.length ? this.pages[t].left : 0)
    return (
      (this.page = t),
      (this.pageIndex = s),
      o !== null &&
        t !== o &&
        ((this.prevPage = o), (this.prevPageIndex = a), this.trigger('change', t, o)),
      i
    )
  }
  destroy() {
    ;(this.state = 'destroy'),
      this.slides.forEach((t) => {
        this.removeSlideEl(t)
      }),
      (this.slides = []),
      this.Panzoom.destroy(),
      this.detachPlugins()
  }
}
;(F.version = '4.0.31'), (F.Plugins = te)
const X = !(typeof window > 'u' || !window.document || !window.document.createElement)
let U = null
const st = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    'video',
    'audio',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'
  ],
  B = (n) => {
    if (n && X) {
      U === null &&
        document.createElement('div').focus({
          get preventScroll() {
            return (U = !0), !1
          }
        })
      try {
        if (n.setActive) n.setActive()
        else if (U) n.focus({ preventScroll: !0 })
        else {
          const t = window.pageXOffset || document.body.scrollTop,
            e = window.pageYOffset || document.body.scrollLeft
          n.focus(), document.body.scrollTo({ top: t, left: e, behavior: 'auto' })
        }
      } catch {}
    }
  },
  ie = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: 't',
    Carousel: {},
    tpl: `<div class="fancybox__thumb" style="background-image:url('{{src}}')"></div>`
  }
class rt {
  constructor(t) {
    ;(this.fancybox = t), (this.$container = null), (this.state = 'init')
    for (const e of ['onPrepare', 'onClosing', 'onKeydown']) this[e] = this[e].bind(this)
    this.events = { prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown }
  }
  onPrepare() {
    this.getSlides().length < this.fancybox.option('Thumbs.minSlideCount')
      ? (this.state = 'disabled')
      : this.fancybox.option('Thumbs.autoStart') === !0 &&
        this.fancybox.Carousel.Panzoom.content.height >=
          this.fancybox.option('Thumbs.minScreenHeight') &&
        this.build()
  }
  onClosing() {
    this.Carousel && this.Carousel.Panzoom.detachEvents()
  }
  onKeydown(t, e) {
    e === t.option('Thumbs.key') && this.toggle()
  }
  build() {
    if (this.$container) return
    const t = document.createElement('div')
    t.classList.add('fancybox__thumbs'),
      this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling),
      (this.Carousel = new F(
        t,
        x(
          !0,
          {
            Dots: !1,
            Navigation: !1,
            Sync: { friction: 0 },
            infinite: !1,
            center: !0,
            fill: !0,
            dragFree: !0,
            slidesPerPage: 1,
            preload: 1
          },
          this.fancybox.option('Thumbs.Carousel'),
          { Sync: { target: this.fancybox.Carousel }, slides: this.getSlides() }
        )
      )),
      this.Carousel.Panzoom.on('wheel', (e, i) => {
        i.preventDefault(), this.fancybox[i.deltaY < 0 ? 'prev' : 'next']()
      }),
      (this.$container = t),
      (this.state = 'visible')
  }
  getSlides() {
    const t = []
    for (const e of this.fancybox.items) {
      const i = e.thumb
      i &&
        t.push({
          html: this.fancybox.option('Thumbs.tpl').replace(/\{\{src\}\}/gi, i),
          customClass: `has-thumb has-${e.type || 'image'}`
        })
    }
    return t
  }
  toggle() {
    this.state === 'visible' ? this.hide() : this.state === 'hidden' ? this.show() : this.build()
  }
  show() {
    this.state === 'hidden' &&
      ((this.$container.style.display = ''),
      this.Carousel.Panzoom.attachEvents(),
      (this.state = 'visible'))
  }
  hide() {
    this.state === 'visible' &&
      (this.Carousel.Panzoom.detachEvents(),
      (this.$container.style.display = 'none'),
      (this.state = 'hidden'))
  }
  cleanup() {
    this.Carousel && (this.Carousel.destroy(), (this.Carousel = null)),
      this.$container && (this.$container.remove(), (this.$container = null)),
      (this.state = 'init')
  }
  attach() {
    this.fancybox.on(this.events)
  }
  detach() {
    this.fancybox.off(this.events), this.cleanup()
  }
}
rt.defaults = ie
const ot = (n, t) => {
    const e = new URL(n),
      i = new URLSearchParams(e.search)
    let s = new URLSearchParams()
    for (const [a, r] of [...i, ...Object.entries(t)])
      a === 't' ? s.set('start', parseInt(r)) : s.set(a, r)
    s = s.toString()
    let o = n.match(/#t=((.*)?\d+s)/)
    return o && (s += `#t=${o[1]}`), s
  },
  lt = {
    video: { autoplay: !0, ratio: 16 / 9 },
    youtube: { autohide: 1, fs: 1, rel: 0, hd: 1, wmode: 'transparent', enablejsapi: 1, html5: 1 },
    vimeo: { hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 },
    html5video: {
      tpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
      format: ''
    }
  }
class ct {
  constructor(t) {
    this.fancybox = t
    for (const e of [
      'onInit',
      'onReady',
      'onCreateSlide',
      'onRemoveSlide',
      'onSelectSlide',
      'onUnselectSlide',
      'onRefresh',
      'onMessage'
    ])
      this[e] = this[e].bind(this)
    this.events = {
      init: this.onInit,
      ready: this.onReady,
      'Carousel.createSlide': this.onCreateSlide,
      'Carousel.removeSlide': this.onRemoveSlide,
      'Carousel.selectSlide': this.onSelectSlide,
      'Carousel.unselectSlide': this.onUnselectSlide,
      'Carousel.refresh': this.onRefresh
    }
  }
  onInit() {
    for (const t of this.fancybox.items) this.processType(t)
  }
  processType(t) {
    if (t.html) return (t.src = t.html), (t.type = 'html'), void delete t.html
    const e = t.src || ''
    let i = t.type || this.fancybox.options.type,
      s = null
    if (!e || typeof e == 'string') {
      if (
        (s = e.match(
          /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
        ))
      ) {
        const o = ot(e, this.fancybox.option('Html.youtube')),
          a = encodeURIComponent(s[1])
        ;(t.videoId = a),
          (t.src = `https://www.youtube-nocookie.com/embed/${a}?${o}`),
          (t.thumb = t.thumb || `https://i.ytimg.com/vi/${a}/mqdefault.jpg`),
          (t.vendor = 'youtube'),
          (i = 'video')
      } else if ((s = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
        const o = ot(e, this.fancybox.option('Html.vimeo')),
          a = encodeURIComponent(s[1])
        ;(t.videoId = a),
          (t.src = `https://player.vimeo.com/video/${a}?${o}`),
          (t.vendor = 'vimeo'),
          (i = 'video')
      } else
        (s = e.match(
          /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
        ))
          ? ((t.src = `//maps.google.${s[1]}/?ll=${(s[2] ? s[2] + '&z=' + Math.floor(s[3]) + (s[4] ? s[4].replace(/^\//, '&') : '') : s[4] + '').replace(/\?/, '&')}&output=${s[4] && s[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed'}`),
            (i = 'map'))
          : (s = e.match(
              /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
            )) &&
            ((t.src = `//maps.google.${s[1]}/maps?q=${s[2].replace('query=', 'q=').replace('api=1', '')}&output=embed`),
            (i = 'map'))
      i ||
        (e.charAt(0) === '#'
          ? (i = 'inline')
          : (s = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
            ? ((i = 'html5video'),
              (t.format = t.format || 'video/' + (s[1] === 'ogv' ? 'ogg' : s[1])))
            : e.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (i = 'image')
              : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = 'pdf')),
        (t.type = i || this.fancybox.option('defaultType', 'image')),
        (i !== 'html5video' && i !== 'video') ||
          ((t.video = x({}, this.fancybox.option('Html.video'), t.video)),
          t._width && t._height
            ? (t.ratio = parseFloat(t._width) / parseFloat(t._height))
            : (t.ratio = t.ratio || t.video.ratio || lt.video.ratio))
    }
  }
  onReady() {
    this.fancybox.Carousel.slides.forEach((t) => {
      t.$el && (this.setContent(t), t.index === this.fancybox.getSlide().index && this.playVideo(t))
    })
  }
  onCreateSlide(t, e, i) {
    this.fancybox.state === 'ready' && this.setContent(i)
  }
  loadInlineContent(t) {
    let e
    if (t.src instanceof HTMLElement) e = t.src
    else if (typeof t.src == 'string') {
      const i = t.src.split('#', 2),
        s = i.length === 2 && i[0] === '' ? i[1] : i[0]
      e = document.getElementById(s)
    }
    if (e) {
      if (t.type === 'clone' || e.$placeHolder) {
        e = e.cloneNode(!0)
        let i = e.getAttribute('id')
        ;(i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`), e.setAttribute('id', i)
      } else {
        const i = document.createElement('div')
        i.classList.add('fancybox-placeholder'),
          e.parentNode.insertBefore(i, e),
          (e.$placeHolder = i)
      }
      this.fancybox.setContent(t, e)
    } else this.fancybox.setError(t, '{{ELEMENT_NOT_FOUND}}')
  }
  loadAjaxContent(t) {
    const e = this.fancybox,
      i = new XMLHttpRequest()
    e.showLoading(t),
      (i.onreadystatechange = function () {
        i.readyState === XMLHttpRequest.DONE &&
          e.state === 'ready' &&
          (e.hideLoading(t),
          i.status === 200
            ? e.setContent(t, i.responseText)
            : e.setError(t, i.status === 404 ? '{{AJAX_NOT_FOUND}}' : '{{AJAX_FORBIDDEN}}'))
      })
    const s = t.ajax || null
    i.open(s ? 'POST' : 'GET', t.src),
      i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
      i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
      i.send(s),
      (t.xhr = i)
  }
  loadIframeContent(t) {
    const e = this.fancybox,
      i = document.createElement('iframe')
    if (
      ((i.className = 'fancybox__iframe'),
      i.setAttribute('id', `fancybox__iframe_${e.id}_${t.index}`),
      i.setAttribute('allow', 'autoplay; fullscreen'),
      i.setAttribute('scrolling', 'auto'),
      (t.$iframe = i),
      t.type !== 'iframe' || t.preload === !1)
    )
      return i.setAttribute('src', t.src), this.fancybox.setContent(t, i), void this.resizeIframe(t)
    e.showLoading(t)
    const s = document.createElement('div')
    ;(s.style.visibility = 'hidden'),
      this.fancybox.setContent(t, s),
      s.appendChild(i),
      (i.onerror = () => {
        e.setError(t, '{{IFRAME_ERROR}}')
      }),
      (i.onload = () => {
        e.hideLoading(t)
        let o = !1
        i.isReady || ((i.isReady = !0), (o = !0)),
          i.src.length &&
            ((i.parentNode.style.visibility = ''), this.resizeIframe(t), o && e.revealContent(t))
      }),
      i.setAttribute('src', t.src)
  }
  setAspectRatio(t) {
    const e = t.$content,
      i = t.ratio
    if (!e) return
    let s = t._width,
      o = t._height
    if (i || (s && o)) {
      Object.assign(e.style, {
        width: s && o ? '100%' : '',
        height: s && o ? '100%' : '',
        maxWidth: '',
        maxHeight: ''
      })
      let a = e.offsetWidth,
        r = e.offsetHeight
      if (((s = s || a), (o = o || r), s > a || o > r)) {
        let l = Math.min(a / s, r / o)
        ;(s *= l), (o *= l)
      }
      Math.abs(s / o - i) > 0.01 && (i < s / o ? (s = o * i) : (o = s / i)),
        Object.assign(e.style, { width: `${s}px`, height: `${o}px` })
    }
  }
  resizeIframe(t) {
    const e = t.$iframe
    if (!e) return
    let i = t._width || 0,
      s = t._height || 0
    i && s && (t.autoSize = !1)
    const o = e.parentNode,
      a = o && o.style
    if (t.preload !== !1 && t.autoSize !== !1 && a)
      try {
        const r = window.getComputedStyle(o),
          l = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
          h = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
          c = e.contentWindow.document,
          u = c.getElementsByTagName('html')[0],
          f = c.body
        ;(a.width = ''),
          (f.style.overflow = 'hidden'),
          (i = i || u.scrollWidth + l),
          (a.width = `${i}px`),
          (f.style.overflow = ''),
          (a.flex = '0 0 auto'),
          (a.height = `${f.scrollHeight}px`),
          (s = u.scrollHeight + h)
      } catch {}
    if (i || s) {
      const r = { flex: '0 1 auto' }
      i && (r.width = `${i}px`), s && (r.height = `${s}px`), Object.assign(a, r)
    }
  }
  onRefresh(t, e) {
    e.slides.forEach((i) => {
      i.$el && (i.$iframe && this.resizeIframe(i), i.ratio && this.setAspectRatio(i))
    })
  }
  setContent(t) {
    if (t && !t.isDom) {
      switch (t.type) {
        case 'html':
          this.fancybox.setContent(t, t.src)
          break
        case 'html5video':
          this.fancybox.setContent(
            t,
            this.fancybox
              .option('Html.html5video.tpl')
              .replace(/\{\{src\}\}/gi, t.src)
              .replace('{{format}}', t.format || (t.html5video && t.html5video.format) || '')
              .replace('{{poster}}', t.poster || t.thumb || '')
          )
          break
        case 'inline':
        case 'clone':
          this.loadInlineContent(t)
          break
        case 'ajax':
          this.loadAjaxContent(t)
          break
        case 'pdf':
        case 'video':
        case 'map':
          t.preload = !1
        case 'iframe':
          this.loadIframeContent(t)
      }
      t.ratio && this.setAspectRatio(t)
    }
  }
  onSelectSlide(t, e, i) {
    t.state === 'ready' && this.playVideo(i)
  }
  playVideo(t) {
    if (t.type === 'html5video' && t.video.autoplay)
      try {
        const i = t.$el.querySelector('video')
        if (i) {
          const s = i.play()
          s !== void 0 &&
            s
              .then(() => {})
              .catch((o) => {
                ;(i.muted = !0), i.play()
              })
        }
      } catch {}
    if (t.type !== 'video' || !t.$iframe || !t.$iframe.contentWindow) return
    const e = () => {
      if (t.state === 'done' && t.$iframe && t.$iframe.contentWindow) {
        let i
        if (t.$iframe.isReady)
          return (
            t.video &&
              t.video.autoplay &&
              (i =
                t.vendor == 'youtube'
                  ? { event: 'command', func: 'playVideo' }
                  : { method: 'play', value: 'true' }),
            void (i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), '*'))
          )
        t.vendor === 'youtube' &&
          ((i = { event: 'listening', id: t.$iframe.getAttribute('id') }),
          t.$iframe.contentWindow.postMessage(JSON.stringify(i), '*'))
      }
      t.poller = setTimeout(e, 250)
    }
    e()
  }
  onUnselectSlide(t, e, i) {
    if (i.type === 'html5video') {
      try {
        i.$el.querySelector('video').pause()
      } catch {}
      return
    }
    let s = !1
    i.vendor == 'vimeo'
      ? (s = { method: 'pause', value: 'true' })
      : i.vendor === 'youtube' && (s = { event: 'command', func: 'pauseVideo' }),
      s &&
        i.$iframe &&
        i.$iframe.contentWindow &&
        i.$iframe.contentWindow.postMessage(JSON.stringify(s), '*'),
      clearTimeout(i.poller)
  }
  onRemoveSlide(t, e, i) {
    i.xhr && (i.xhr.abort(), (i.xhr = null)),
      i.$iframe &&
        ((i.$iframe.onload = i.$iframe.onerror = null),
        (i.$iframe.src = '//about:blank'),
        (i.$iframe = null))
    const s = i.$content
    i.type === 'inline' &&
      s &&
      (s.classList.remove('fancybox__content'),
      s.style.display !== 'none' && (s.style.display = 'none')),
      i.$closeButton && (i.$closeButton.remove(), (i.$closeButton = null))
    const o = s && s.$placeHolder
    o && (o.parentNode.insertBefore(s, o), o.remove(), (s.$placeHolder = null))
  }
  onMessage(t) {
    try {
      let e = JSON.parse(t.data)
      if (t.origin === 'https://player.vimeo.com') {
        if (e.event === 'ready')
          for (let i of document.getElementsByClassName('fancybox__iframe'))
            i.contentWindow === t.source && (i.isReady = 1)
      } else
        t.origin === 'https://www.youtube-nocookie.com' &&
          e.event === 'onReady' &&
          (document.getElementById(e.id).isReady = 1)
    } catch {}
  }
  attach() {
    this.fancybox.on(this.events), window.addEventListener('message', this.onMessage, !1)
  }
  detach() {
    this.fancybox.off(this.events), window.removeEventListener('message', this.onMessage, !1)
  }
}
ct.defaults = lt
class ht {
  constructor(t) {
    this.fancybox = t
    for (const e of [
      'onReady',
      'onClosing',
      'onDone',
      'onPageChange',
      'onCreateSlide',
      'onRemoveSlide',
      'onImageStatusChange'
    ])
      this[e] = this[e].bind(this)
    this.events = {
      ready: this.onReady,
      closing: this.onClosing,
      done: this.onDone,
      'Carousel.change': this.onPageChange,
      'Carousel.createSlide': this.onCreateSlide,
      'Carousel.removeSlide': this.onRemoveSlide
    }
  }
  onReady() {
    this.fancybox.Carousel.slides.forEach((t) => {
      t.$el && this.setContent(t)
    })
  }
  onDone(t, e) {
    this.handleCursor(e)
  }
  onClosing(t) {
    clearTimeout(this.clickTimer),
      (this.clickTimer = null),
      t.Carousel.slides.forEach((e) => {
        e.$image && (e.state = 'destroy'), e.Panzoom && e.Panzoom.detachEvents()
      }),
      this.fancybox.state === 'closing' && this.canZoom(t.getSlide()) && this.zoomOut()
  }
  onCreateSlide(t, e, i) {
    this.fancybox.state === 'ready' && this.setContent(i)
  }
  onRemoveSlide(t, e, i) {
    i.$image &&
      (i.$el.classList.remove(t.option('Image.canZoomInClass')),
      i.$image.remove(),
      (i.$image = null)),
      i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
      i.$el && i.$el.dataset && delete i.$el.dataset.imageFit
  }
  setContent(t) {
    if (t.isDom || t.html || (t.type && t.type !== 'image') || t.$image) return
    ;(t.type = 'image'), (t.state = 'loading')
    const e = document.createElement('div')
    e.style.visibility = 'hidden'
    const i = document.createElement('img')
    i.addEventListener('load', (o) => {
      o.stopImmediatePropagation(), this.onImageStatusChange(t)
    }),
      i.addEventListener('error', () => {
        this.onImageStatusChange(t)
      }),
      (i.src = t.src),
      (i.alt = ''),
      (i.draggable = !1),
      i.classList.add('fancybox__image'),
      t.srcset && i.setAttribute('srcset', t.srcset),
      t.sizes && i.setAttribute('sizes', t.sizes),
      (t.$image = i)
    const s = this.fancybox.option('Image.wrap')
    if (s) {
      const o = document.createElement('div')
      o.classList.add(typeof s == 'string' ? s : 'fancybox__image-wrap'),
        o.appendChild(i),
        e.appendChild(o),
        (t.$wrap = o)
    } else e.appendChild(i)
    ;(t.$el.dataset.imageFit = this.fancybox.option('Image.fit')),
      this.fancybox.setContent(t, e),
      i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t)
  }
  onImageStatusChange(t) {
    const e = t.$image
    e &&
      t.state === 'loading' &&
      (e.complete && e.naturalWidth && e.naturalHeight
        ? (this.fancybox.hideLoading(t),
          this.fancybox.option('Image.fit') === 'contain' && this.initSlidePanzoom(t),
          t.$el.addEventListener('wheel', (i) => this.onWheel(t, i), { passive: !1 }),
          t.$content.addEventListener('click', (i) => this.onClick(t, i), { passive: !1 }),
          this.revealContent(t))
        : this.fancybox.setError(t, '{{IMAGE_ERROR}}'))
  }
  initSlidePanzoom(t) {
    t.Panzoom ||
      ((t.Panzoom = new I(
        t.$el,
        x(!0, this.fancybox.option('Image.Panzoom', {}), {
          viewport: t.$wrap,
          content: t.$image,
          width: t._width,
          height: t._height,
          wrapInner: !1,
          textSelection: !0,
          touch: this.fancybox.option('Image.touch'),
          panOnlyZoomed: !0,
          click: !1,
          wheel: !1
        })
      )),
      t.Panzoom.on('startAnimation', () => {
        this.fancybox.trigger('Image.startAnimation', t)
      }),
      t.Panzoom.on('endAnimation', () => {
        t.state === 'zoomIn' && this.fancybox.done(t),
          this.handleCursor(t),
          this.fancybox.trigger('Image.endAnimation', t)
      }),
      t.Panzoom.on('afterUpdate', () => {
        this.handleCursor(t), this.fancybox.trigger('Image.afterUpdate', t)
      }))
  }
  revealContent(t) {
    this.fancybox.Carousel.prevPage === null &&
    t.index === this.fancybox.options.startIndex &&
    this.canZoom(t)
      ? this.zoomIn()
      : this.fancybox.revealContent(t)
  }
  getZoomInfo(t) {
    const e = t.$thumb.getBoundingClientRect(),
      i = e.width,
      s = e.height,
      o = t.$content.getBoundingClientRect(),
      a = o.width,
      r = o.height,
      l = o.top - e.top,
      h = o.left - e.left
    let c = this.fancybox.option('Image.zoomOpacity')
    return (
      c === 'auto' && (c = Math.abs(i / s - a / r) > 0.1),
      { top: l, left: h, scale: a && i ? i / a : 1, opacity: c }
    )
  }
  canZoom(t) {
    const e = this.fancybox,
      i = e.$container
    if (
      (window.visualViewport && window.visualViewport.scale !== 1) ||
      (t.Panzoom && !t.Panzoom.content.width) ||
      !e.option('Image.zoom') ||
      e.option('Image.fit') !== 'contain'
    )
      return !1
    const s = t.$thumb
    if (!s || t.state === 'loading') return !1
    i.classList.add('fancybox__no-click')
    const o = s.getBoundingClientRect()
    let a
    if (this.fancybox.option('Image.ignoreCoveredThumbnail')) {
      const r = document.elementFromPoint(o.left + 1, o.top + 1) === s,
        l = document.elementFromPoint(o.right - 1, o.bottom - 1) === s
      a = r && l
    } else a = document.elementFromPoint(o.left + 0.5 * o.width, o.top + 0.5 * o.height) === s
    return i.classList.remove('fancybox__no-click'), a
  }
  zoomIn() {
    const t = this.fancybox,
      e = t.getSlide(),
      i = e.Panzoom,
      { top: s, left: o, scale: a, opacity: r } = this.getZoomInfo(e)
    t.trigger('reveal', e),
      i.panTo({ x: -1 * o, y: -1 * s, scale: a, friction: 0, ignoreBounds: !0 }),
      (e.$content.style.visibility = ''),
      (e.state = 'zoomIn'),
      r === !0 &&
        i.on('afterTransform', (l) => {
          ;(e.state !== 'zoomIn' && e.state !== 'zoomOut') ||
            (l.$content.style.opacity = Math.min(1, 1 - (1 - l.content.scale) / (1 - a)))
        }),
      i.panTo({ x: 0, y: 0, scale: 1, friction: this.fancybox.option('Image.zoomFriction') })
  }
  zoomOut() {
    const t = this.fancybox,
      e = t.getSlide(),
      i = e.Panzoom
    if (!i) return
    ;(e.state = 'zoomOut'),
      (t.state = 'customClosing'),
      e.$caption && (e.$caption.style.visibility = 'hidden')
    let s = this.fancybox.option('Image.zoomFriction')
    const o = (a) => {
      const { top: r, left: l, scale: h, opacity: c } = this.getZoomInfo(e)
      a || c || (s *= 0.82),
        i.panTo({ x: -1 * l, y: -1 * r, scale: h, friction: s, ignoreBounds: !0 }),
        (s *= 0.98)
    }
    window.addEventListener('scroll', o),
      i.once('endAnimation', () => {
        window.removeEventListener('scroll', o), t.destroy()
      }),
      o()
  }
  handleCursor(t) {
    if (t.type !== 'image' || !t.$el) return
    const e = t.Panzoom,
      i = this.fancybox.option('Image.click', !1, t),
      s = this.fancybox.option('Image.touch'),
      o = t.$el.classList,
      a = this.fancybox.option('Image.canZoomInClass'),
      r = this.fancybox.option('Image.canZoomOutClass')
    o.remove(r),
      o.remove(a),
      e && i === 'toggleZoom'
        ? e && e.content.scale === 1 && e.option('maxScale') - e.content.scale > 0.01
          ? o.add(a)
          : e.content.scale > 1 && !s && o.add(r)
        : i === 'close' && o.add(r)
  }
  onWheel(t, e) {
    if (this.fancybox.state === 'ready' && this.fancybox.trigger('Image.wheel', e) !== !1)
      switch (this.fancybox.option('Image.wheel')) {
        case 'zoom':
          t.state === 'done' && t.Panzoom && t.Panzoom.zoomWithWheel(e)
          break
        case 'close':
          this.fancybox.close()
          break
        case 'slide':
          this.fancybox[e.deltaY < 0 ? 'prev' : 'next']()
      }
  }
  onClick(t, e) {
    if (this.fancybox.state !== 'ready') return
    const i = t.Panzoom
    if (
      i &&
      (i.dragPosition.midPoint ||
        i.dragOffset.x !== 0 ||
        i.dragOffset.y !== 0 ||
        i.dragOffset.scale !== 1)
    )
      return
    if (this.fancybox.Carousel.Panzoom.lockAxis) return !1
    const s = (r) => {
        switch (r) {
          case 'toggleZoom':
            e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e)
            break
          case 'close':
            this.fancybox.close()
            break
          case 'next':
            e.stopPropagation(), this.fancybox.next()
        }
      },
      o = this.fancybox.option('Image.click'),
      a = this.fancybox.option('Image.doubleClick')
    a
      ? this.clickTimer
        ? (clearTimeout(this.clickTimer), (this.clickTimer = null), s(a))
        : (this.clickTimer = setTimeout(() => {
            ;(this.clickTimer = null), s(o)
          }, 300))
      : s(o)
  }
  onPageChange(t, e) {
    const i = t.getSlide()
    e.slides.forEach((s) => {
      s.Panzoom &&
        s.state === 'done' &&
        s.index !== i.index &&
        s.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 })
    })
  }
  attach() {
    this.fancybox.on(this.events)
  }
  detach() {
    this.fancybox.off(this.events)
  }
}
ht.defaults = {
  canZoomInClass: 'can-zoom_in',
  canZoomOutClass: 'can-zoom_out',
  zoom: !0,
  zoomOpacity: 'auto',
  zoomFriction: 0.82,
  ignoreCoveredThumbnail: !1,
  touch: !0,
  click: 'toggleZoom',
  doubleClick: null,
  wheel: 'zoom',
  fit: 'contain',
  wrap: !1,
  Panzoom: { ratio: 1 }
}
class C {
  constructor(t) {
    this.fancybox = t
    for (const e of ['onChange', 'onClosing']) this[e] = this[e].bind(this)
    ;(this.events = {
      initCarousel: this.onChange,
      'Carousel.change': this.onChange,
      closing: this.onClosing
    }),
      (this.hasCreatedHistory = !1),
      (this.origHash = ''),
      (this.timer = null)
  }
  onChange(t) {
    const e = t.Carousel
    this.timer && clearTimeout(this.timer)
    const i = e.prevPage === null,
      s = t.getSlide(),
      o = new URL(document.URL).hash
    let a = !1
    if (s.slug) a = '#' + s.slug
    else {
      const r = s.$trigger && s.$trigger.dataset,
        l = t.option('slug') || (r && r.fancybox)
      l &&
        l.length &&
        l !== 'true' &&
        (a = '#' + l + (e.slides.length > 1 ? '-' + (s.index + 1) : ''))
    }
    i && (this.origHash = o !== a ? o : ''),
      a &&
        o !== a &&
        (this.timer = setTimeout(() => {
          try {
            window.history[i ? 'pushState' : 'replaceState'](
              {},
              document.title,
              window.location.pathname + window.location.search + a
            ),
              i && (this.hasCreatedHistory = !0)
          } catch {}
        }, 300))
  }
  onClosing() {
    if ((this.timer && clearTimeout(this.timer), this.hasSilentClose !== !0))
      try {
        return void window.history.replaceState(
          {},
          document.title,
          window.location.pathname + window.location.search + (this.origHash || '')
        )
      } catch {}
  }
  attach(t) {
    t.on(this.events)
  }
  detach(t) {
    t.off(this.events)
  }
  static startFromUrl() {
    const t = C.Fancybox
    if (!t || t.getInstance() || t.defaults.Hash === !1) return
    const { hash: e, slug: i, index: s } = C.getParsedURL()
    if (!i) return
    let o = document.querySelector(`[data-slug="${e}"]`)
    if (
      (o && o.dispatchEvent(new CustomEvent('click', { bubbles: !0, cancelable: !0 })),
      t.getInstance())
    )
      return
    const a = document.querySelectorAll(`[data-fancybox="${i}"]`)
    a.length &&
      (s === null && a.length === 1 ? (o = a[0]) : s && (o = a[s - 1]),
      o && o.dispatchEvent(new CustomEvent('click', { bubbles: !0, cancelable: !0 })))
  }
  static onHashChange() {
    const { slug: t, index: e } = C.getParsedURL(),
      i = C.Fancybox,
      s = i && i.getInstance()
    if (s && s.plugins.Hash) {
      if (t) {
        const o = s.Carousel
        if (t === s.option('slug')) return o.slideTo(e - 1)
        for (let l of o.slides) if (l.slug && l.slug === t) return o.slideTo(l.index)
        const a = s.getSlide(),
          r = a.$trigger && a.$trigger.dataset
        if (r && r.fancybox === t) return o.slideTo(e - 1)
      }
      ;(s.plugins.Hash.hasSilentClose = !0), s.close()
    }
    C.startFromUrl()
  }
  static create(t) {
    function e() {
      window.addEventListener('hashchange', C.onHashChange, !1), C.startFromUrl()
    }
    ;(C.Fancybox = t),
      X &&
        window.requestAnimationFrame(() => {
          ;/complete|interactive|loaded/.test(document.readyState)
            ? e()
            : document.addEventListener('DOMContentLoaded', e)
        })
  }
  static destroy() {
    window.removeEventListener('hashchange', C.onHashChange, !1)
  }
  static getParsedURL() {
    const t = window.location.hash.substr(1),
      e = t.split('-'),
      i = (e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10)) || null
    return { hash: t, slug: e.join('-'), index: i }
  }
}
const P = {
  pageXOffset: 0,
  pageYOffset: 0,
  element: () =>
    document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
  activate(n) {
    ;(P.pageXOffset = window.pageXOffset),
      (P.pageYOffset = window.pageYOffset),
      n.requestFullscreen
        ? n.requestFullscreen()
        : n.mozRequestFullScreen
          ? n.mozRequestFullScreen()
          : n.webkitRequestFullscreen
            ? n.webkitRequestFullscreen()
            : n.msRequestFullscreen && n.msRequestFullscreen()
  },
  deactivate() {
    document.exitFullscreen
      ? document.exitFullscreen()
      : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen && document.webkitExitFullscreen()
  }
}
class se {
  constructor(t) {
    ;(this.fancybox = t),
      (this.active = !1),
      (this.handleVisibilityChange = this.handleVisibilityChange.bind(this))
  }
  isActive() {
    return this.active
  }
  setTimer() {
    if (!this.active || this.timer) return
    const t = this.fancybox.option('slideshow.delay', 3e3)
    this.timer = setTimeout(() => {
      ;(this.timer = null),
        this.fancybox.option('infinite') ||
        this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1
          ? this.fancybox.next()
          : this.fancybox.jumpTo(0, { friction: 0 })
    }, t)
    let e = this.$progress
    e ||
      ((e = document.createElement('div')),
      e.classList.add('fancybox__progress'),
      this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel),
      (this.$progress = e),
      e.offsetHeight),
      (e.style.transitionDuration = `${t}ms`),
      (e.style.transform = 'scaleX(1)')
  }
  clearTimer() {
    clearTimeout(this.timer),
      (this.timer = null),
      this.$progress &&
        ((this.$progress.style.transitionDuration = ''),
        (this.$progress.style.transform = ''),
        this.$progress.offsetHeight)
  }
  activate() {
    this.active ||
      ((this.active = !0),
      this.fancybox.$container.classList.add('has-slideshow'),
      this.fancybox.getSlide().state === 'done' && this.setTimer(),
      document.addEventListener('visibilitychange', this.handleVisibilityChange, !1))
  }
  handleVisibilityChange() {
    this.deactivate()
  }
  deactivate() {
    ;(this.active = !1),
      this.clearTimer(),
      this.fancybox.$container.classList.remove('has-slideshow'),
      document.removeEventListener('visibilitychange', this.handleVisibilityChange, !1)
  }
  toggle() {
    this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()
  }
}
const oe = {
  display: ['counter', 'zoom', 'slideshow', 'fullscreen', 'thumbs', 'close'],
  autoEnable: !0,
  items: {
    counter: {
      position: 'left',
      type: 'div',
      class: 'fancybox__counter',
      html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
      attr: { tabindex: -1 }
    },
    prev: {
      type: 'button',
      class: 'fancybox__button--prev',
      label: 'PREV',
      html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
      attr: { 'data-fancybox-prev': '' }
    },
    next: {
      type: 'button',
      class: 'fancybox__button--next',
      label: 'NEXT',
      html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
      attr: { 'data-fancybox-next': '' }
    },
    fullscreen: {
      type: 'button',
      class: 'fancybox__button--fullscreen',
      label: 'TOGGLE_FULLSCREEN',
      html: `<svg viewBox="0 0 24 24">
                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>
                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>
            </svg>`,
      click: function (n) {
        n.preventDefault(), P.element() ? P.deactivate() : P.activate(this.fancybox.$container)
      }
    },
    slideshow: {
      type: 'button',
      class: 'fancybox__button--slideshow',
      label: 'TOGGLE_SLIDESHOW',
      html: `<svg viewBox="0 0 24 24">
                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>
                <g><path d="M7 4v15M17 4v15"/></g>
            </svg>`,
      click: function (n) {
        n.preventDefault(), this.Slideshow.toggle()
      }
    },
    zoom: {
      type: 'button',
      class: 'fancybox__button--zoom',
      label: 'TOGGLE_ZOOM',
      html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
      click: function (n) {
        n.preventDefault()
        const t = this.fancybox.getSlide().Panzoom
        t && t.toggleZoom()
      }
    },
    download: {
      type: 'link',
      label: 'DOWNLOAD',
      class: 'fancybox__button--download',
      html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
      click: function (n) {
        n.stopPropagation()
      }
    },
    thumbs: {
      type: 'button',
      label: 'TOGGLE_THUMBS',
      class: 'fancybox__button--thumbs',
      html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
      click: function (n) {
        n.stopPropagation()
        const t = this.fancybox.plugins.Thumbs
        t && t.toggle()
      }
    },
    close: {
      type: 'button',
      label: 'CLOSE',
      class: 'fancybox__button--close',
      html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
      attr: { 'data-fancybox-close': '', tabindex: 0 }
    }
  }
}
class dt {
  constructor(t) {
    ;(this.fancybox = t), (this.$container = null), (this.state = 'init')
    for (const e of [
      'onInit',
      'onPrepare',
      'onDone',
      'onKeydown',
      'onClosing',
      'onChange',
      'onSettle',
      'onRefresh'
    ])
      this[e] = this[e].bind(this)
    this.events = {
      init: this.onInit,
      prepare: this.onPrepare,
      done: this.onDone,
      keydown: this.onKeydown,
      closing: this.onClosing,
      'Carousel.change': this.onChange,
      'Carousel.settle': this.onSettle,
      'Carousel.Panzoom.touchStart': () => this.onRefresh(),
      'Image.startAnimation': (e, i) => this.onRefresh(i),
      'Image.afterUpdate': (e, i) => this.onRefresh(i)
    }
  }
  onInit() {
    if (this.fancybox.option('Toolbar.autoEnable')) {
      let t = !1
      for (const e of this.fancybox.items)
        if (e.type === 'image') {
          t = !0
          break
        }
      if (!t) return void (this.state = 'disabled')
    }
    for (const t of this.fancybox.option('Toolbar.display'))
      if ((O(t) ? t.id : t) === 'close') {
        this.fancybox.options.closeButton = !1
        break
      }
  }
  onPrepare() {
    const t = this.fancybox
    if (
      this.state === 'init' &&
      (this.build(),
      this.update(),
      (this.Slideshow = new se(t)),
      !t.Carousel.prevPage &&
        (t.option('slideshow.autoStart') && this.Slideshow.activate(),
        t.option('fullscreen.autoStart') && !P.element()))
    )
      try {
        P.activate(t.$container)
      } catch {}
  }
  onFsChange() {
    window.scrollTo(P.pageXOffset, P.pageYOffset)
  }
  onSettle() {
    const t = this.fancybox,
      e = this.Slideshow
    e &&
      e.isActive() &&
      (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option('infinite')
        ? t.getSlide().state === 'done' && e.setTimer()
        : e.deactivate())
  }
  onChange() {
    this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()
  }
  onDone(t, e) {
    const i = this.Slideshow
    e.index === t.getSlide().index &&
      (this.update(),
      i &&
        i.isActive() &&
        (t.option('infinite') || e.index !== t.Carousel.slides.length - 1
          ? i.setTimer()
          : i.deactivate()))
  }
  onRefresh(t) {
    ;(t && t.index !== this.fancybox.getSlide().index) ||
      (this.update(),
      !this.Slideshow ||
        !this.Slideshow.isActive() ||
        (t && t.state !== 'done') ||
        this.Slideshow.deactivate())
  }
  onKeydown(t, e, i) {
    e === ' ' && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault())
  }
  onClosing() {
    this.Slideshow && this.Slideshow.deactivate(),
      document.removeEventListener('fullscreenchange', this.onFsChange)
  }
  createElement(t) {
    let e
    t.type === 'div'
      ? (e = document.createElement('div'))
      : ((e = document.createElement(t.type === 'link' ? 'a' : 'button')),
        e.classList.add('carousel__button')),
      (e.innerHTML = t.html),
      e.setAttribute('tabindex', t.tabindex || 0),
      t.class && e.classList.add(...t.class.split(' '))
    for (const s in t.attr) e.setAttribute(s, t.attr[s])
    t.label && e.setAttribute('title', this.fancybox.localize(`{{${t.label}}}`)),
      t.click && e.addEventListener('click', t.click.bind(this)),
      t.id === 'prev' && e.setAttribute('data-fancybox-prev', ''),
      t.id === 'next' && e.setAttribute('data-fancybox-next', '')
    const i = e.querySelector('svg')
    return (
      i &&
        (i.setAttribute('role', 'img'),
        i.setAttribute('tabindex', '-1'),
        i.setAttribute('xmlns', 'http://www.w3.org/2000/svg')),
      e
    )
  }
  build() {
    this.cleanup()
    const t = this.fancybox.option('Toolbar.items'),
      e = [
        { position: 'left', items: [] },
        { position: 'center', items: [] },
        { position: 'right', items: [] }
      ],
      i = this.fancybox.plugins.Thumbs
    for (const o of this.fancybox.option('Toolbar.display')) {
      let a, r
      if (
        (O(o) ? ((a = o.id), (r = x({}, t[a], o))) : ((a = o), (r = t[a])),
        ['counter', 'next', 'prev', 'slideshow'].includes(a) && this.fancybox.items.length < 2)
      )
        continue
      if (a === 'fullscreen') {
        if (!document.fullscreenEnabled || window.fullScreen) continue
        document.addEventListener('fullscreenchange', this.onFsChange)
      }
      if ((a === 'thumbs' && (!i || i.state === 'disabled')) || !r) continue
      let l = r.position || 'right',
        h = e.find((c) => c.position === l)
      h && h.items.push(r)
    }
    const s = document.createElement('div')
    s.classList.add('fancybox__toolbar')
    for (const o of e)
      if (o.items.length) {
        const a = document.createElement('div')
        a.classList.add('fancybox__toolbar__items'),
          a.classList.add(`fancybox__toolbar__items--${o.position}`)
        for (const r of o.items) a.appendChild(this.createElement(r))
        s.appendChild(a)
      }
    this.fancybox.$carousel.parentNode.insertBefore(s, this.fancybox.$carousel),
      (this.$container = s)
  }
  update() {
    const t = this.fancybox.getSlide(),
      e = t.index,
      i = this.fancybox.items.length,
      s = t.downloadSrc || (t.type !== 'image' || t.error ? null : t.src)
    for (const r of this.fancybox.$container.querySelectorAll('a.fancybox__button--download'))
      s
        ? (r.removeAttribute('disabled'),
          r.removeAttribute('tabindex'),
          r.setAttribute('href', s),
          r.setAttribute('download', s),
          r.setAttribute('target', '_blank'))
        : (r.setAttribute('disabled', ''),
          r.setAttribute('tabindex', -1),
          r.removeAttribute('href'),
          r.removeAttribute('download'))
    const o = t.Panzoom,
      a = o && o.option('maxScale') > o.option('baseScale')
    for (const r of this.fancybox.$container.querySelectorAll('.fancybox__button--zoom'))
      a ? r.removeAttribute('disabled') : r.setAttribute('disabled', '')
    for (const r of this.fancybox.$container.querySelectorAll('[data-fancybox-index]'))
      r.innerHTML = t.index + 1
    for (const r of this.fancybox.$container.querySelectorAll('[data-fancybox-count]'))
      r.innerHTML = i
    if (!this.fancybox.option('infinite')) {
      for (const r of this.fancybox.$container.querySelectorAll('[data-fancybox-prev]'))
        e === 0 ? r.setAttribute('disabled', '') : r.removeAttribute('disabled')
      for (const r of this.fancybox.$container.querySelectorAll('[data-fancybox-next]'))
        e === i - 1 ? r.setAttribute('disabled', '') : r.removeAttribute('disabled')
    }
  }
  cleanup() {
    this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(),
      this.$container && this.$container.remove(),
      (this.$container = null)
  }
  attach() {
    this.fancybox.on(this.events)
  }
  detach() {
    this.fancybox.off(this.events), this.cleanup()
  }
}
dt.defaults = oe
const ne = {
    ScrollLock: class {
      constructor(n) {
        ;(this.fancybox = n), (this.viewport = null), (this.pendingUpdate = null)
        for (const t of ['onReady', 'onResize', 'onTouchstart', 'onTouchmove'])
          this[t] = this[t].bind(this)
      }
      onReady() {
        const n = window.visualViewport
        n &&
          ((this.viewport = n),
          (this.startY = 0),
          n.addEventListener('resize', this.onResize),
          this.updateViewport()),
          window.addEventListener('touchstart', this.onTouchstart, { passive: !1 }),
          window.addEventListener('touchmove', this.onTouchmove, { passive: !1 }),
          window.addEventListener('wheel', this.onWheel, { passive: !1 })
      }
      onResize() {
        this.updateViewport()
      }
      updateViewport() {
        const n = this.fancybox,
          t = this.viewport,
          e = t.scale || 1,
          i = n.$container
        if (!i) return
        let s = '',
          o = '',
          a = ''
        e - 1 > 0.1 &&
          ((s = t.width * e + 'px'),
          (o = t.height * e + 'px'),
          (a = `translate3d(${t.offsetLeft}px, ${t.offsetTop}px, 0) scale(${1 / e})`)),
          (i.style.width = s),
          (i.style.height = o),
          (i.style.transform = a)
      }
      onTouchstart(n) {
        this.startY = n.touches ? n.touches[0].screenY : n.screenY
      }
      onTouchmove(n) {
        const t = this.startY,
          e = window.innerWidth / window.document.documentElement.clientWidth
        if (!n.cancelable || n.touches.length > 1 || e !== 1) return
        const i = W(n.composedPath()[0])
        if (!i) return void n.preventDefault()
        const s = window.getComputedStyle(i),
          o = parseInt(s.getPropertyValue('height'), 10),
          a = n.touches ? n.touches[0].screenY : n.screenY,
          r = t <= a && i.scrollTop === 0,
          l = t >= a && i.scrollHeight - i.scrollTop === o
        ;(r || l) && n.preventDefault()
      }
      onWheel(n) {
        W(n.composedPath()[0]) || n.preventDefault()
      }
      cleanup() {
        this.pendingUpdate &&
          (cancelAnimationFrame(this.pendingUpdate), (this.pendingUpdate = null))
        const n = this.viewport
        n && (n.removeEventListener('resize', this.onResize), (this.viewport = null)),
          window.removeEventListener('touchstart', this.onTouchstart, !1),
          window.removeEventListener('touchmove', this.onTouchmove, !1),
          window.removeEventListener('wheel', this.onWheel, { passive: !1 })
      }
      attach() {
        this.fancybox.on('initLayout', this.onReady)
      }
      detach() {
        this.fancybox.off('initLayout', this.onReady), this.cleanup()
      }
    },
    Thumbs: rt,
    Html: ct,
    Toolbar: dt,
    Image: ht,
    Hash: C
  },
  ut = {
    startIndex: 0,
    preload: 1,
    infinite: !0,
    showClass: 'fancybox-zoomInUp',
    hideClass: 'fancybox-fadeOut',
    animated: !0,
    hideScrollbar: !0,
    parentEl: null,
    mainClass: null,
    autoFocus: !0,
    trapFocus: !0,
    placeFocusBack: !0,
    click: 'close',
    closeButton: 'inside',
    dragToClose: !0,
    keyboard: {
      Escape: 'close',
      Delete: 'close',
      Backspace: 'close',
      PageUp: 'next',
      PageDown: 'prev',
      ArrowUp: 'next',
      ArrowDown: 'prev',
      ArrowRight: 'next',
      ArrowLeft: 'prev'
    },
    template: {
      closeButton:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
      spinner:
        '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
      main: null
    },
    l10n: {
      CLOSE: 'Close',
      NEXT: 'Next',
      PREV: 'Previous',
      MODAL: 'You can close this modal content with the ESC key',
      ERROR: 'Something Went Wrong, Please Try Again Later',
      IMAGE_ERROR: 'Image Not Found',
      ELEMENT_NOT_FOUND: 'HTML Element Not Found',
      AJAX_NOT_FOUND: 'Error Loading AJAX : Not Found',
      AJAX_FORBIDDEN: 'Error Loading AJAX : Forbidden',
      IFRAME_ERROR: 'Error Loading Page',
      TOGGLE_ZOOM: 'Toggle zoom level',
      TOGGLE_THUMBS: 'Toggle thumbnails',
      TOGGLE_SLIDESHOW: 'Toggle slideshow',
      TOGGLE_FULLSCREEN: 'Toggle full-screen mode',
      DOWNLOAD: 'Download'
    }
  },
  N = /* @__PURE__ */ new Map()
let ae = 0
class g extends j {
  constructor(t, e = {}) {
    ;(t = t.map((i) => (i.width && (i._width = i.width), i.height && (i._height = i.height), i))),
      super(x(!0, {}, ut, e)),
      this.bindHandlers(),
      (this.state = 'init'),
      this.setItems(t),
      this.attachPlugins(g.Plugins),
      this.trigger('init'),
      this.option('hideScrollbar') === !0 && this.hideScrollbar(),
      this.initLayout(),
      this.initCarousel(),
      this.attachEvents(),
      N.set(this.id, this),
      this.trigger('prepare'),
      (this.state = 'ready'),
      this.trigger('ready'),
      this.$container.setAttribute('aria-hidden', 'false'),
      this.option('trapFocus') && this.focus()
  }
  option(t, ...e) {
    const i = this.getSlide()
    let s = i ? i[t] : void 0
    return s !== void 0
      ? (typeof s == 'function' && (s = s.call(this, this, ...e)), s)
      : super.option(t, ...e)
  }
  bindHandlers() {
    for (const t of [
      'onMousedown',
      'onKeydown',
      'onClick',
      'onFocus',
      'onCreateSlide',
      'onSettle',
      'onTouchMove',
      'onTouchEnd',
      'onTransform'
    ])
      this[t] = this[t].bind(this)
  }
  attachEvents() {
    document.addEventListener('mousedown', this.onMousedown),
      document.addEventListener('keydown', this.onKeydown, !0),
      this.option('trapFocus') && document.addEventListener('focus', this.onFocus, !0),
      this.$container.addEventListener('click', this.onClick)
  }
  detachEvents() {
    document.removeEventListener('mousedown', this.onMousedown),
      document.removeEventListener('keydown', this.onKeydown, !0),
      document.removeEventListener('focus', this.onFocus, !0),
      this.$container.removeEventListener('click', this.onClick)
  }
  initLayout() {
    this.$root = this.option('parentEl') || document.body
    let t = this.option('template.main')
    t &&
      (this.$root.insertAdjacentHTML('beforeend', this.localize(t)),
      (this.$container = this.$root.querySelector('.fancybox__container'))),
      this.$container ||
        ((this.$container = document.createElement('div')),
        this.$root.appendChild(this.$container)),
      (this.$container.onscroll = () => ((this.$container.scrollLeft = 0), !1)),
      Object.entries({
        class: 'fancybox__container',
        role: 'dialog',
        tabIndex: '-1',
        'aria-modal': 'true',
        'aria-hidden': 'true',
        'aria-label': this.localize('{{MODAL}}')
      }).forEach((i) => this.$container.setAttribute(...i)),
      this.option('animated') && this.$container.classList.add('is-animated'),
      (this.$backdrop = this.$container.querySelector('.fancybox__backdrop')),
      this.$backdrop ||
        ((this.$backdrop = document.createElement('div')),
        this.$backdrop.classList.add('fancybox__backdrop'),
        this.$container.appendChild(this.$backdrop)),
      (this.$carousel = this.$container.querySelector('.fancybox__carousel')),
      this.$carousel ||
        ((this.$carousel = document.createElement('div')),
        this.$carousel.classList.add('fancybox__carousel'),
        this.$container.appendChild(this.$carousel)),
      (this.$container.Fancybox = this),
      (this.id = this.$container.getAttribute('id')),
      this.id ||
        ((this.id = this.options.id || ++ae),
        this.$container.setAttribute('id', 'fancybox-' + this.id))
    const e = this.option('mainClass')
    return (
      e && this.$container.classList.add(...e.split(' ')),
      document.documentElement.classList.add('with-fancybox'),
      this.trigger('initLayout'),
      this
    )
  }
  setItems(t) {
    const e = []
    for (const i of t) {
      const s = i.$trigger
      if (s) {
        const r = s.dataset || {}
        ;(i.src = r.src || s.getAttribute('href') || i.src),
          (i.type = r.type || i.type),
          !i.src && s instanceof HTMLImageElement && (i.src = s.currentSrc || i.$trigger.src)
      }
      let o = i.$thumb
      if (!o) {
        let r = i.$trigger && i.$trigger.origTarget
        r && (o = r instanceof HTMLImageElement ? r : r.querySelector('img:not([aria-hidden])')),
          !o &&
            i.$trigger &&
            (o =
              i.$trigger instanceof HTMLImageElement
                ? i.$trigger
                : i.$trigger.querySelector('img:not([aria-hidden])'))
      }
      i.$thumb = o || null
      let a = i.thumb
      !a &&
        o &&
        ((a = o.currentSrc || o.src), !a && o.dataset && (a = o.dataset.lazySrc || o.dataset.src)),
        a || i.type !== 'image' || (a = i.src),
        (i.thumb = a || null),
        (i.caption = i.caption || ''),
        e.push(i)
    }
    this.items = e
  }
  initCarousel() {
    return (
      (this.Carousel = new F(
        this.$carousel,
        x(
          !0,
          {},
          {
            prefix: '',
            classNames: {
              viewport: 'fancybox__viewport',
              track: 'fancybox__track',
              slide: 'fancybox__slide'
            },
            textSelection: !0,
            preload: this.option('preload'),
            friction: 0.88,
            slides: this.items,
            initialPage: this.options.startIndex,
            slidesPerPage: 1,
            infiniteX: this.option('infinite'),
            infiniteY: !0,
            l10n: this.option('l10n'),
            Dots: !1,
            Navigation: {
              classNames: {
                main: 'fancybox__nav',
                button: 'carousel__button',
                next: 'is-next',
                prev: 'is-prev'
              }
            },
            Panzoom: {
              textSelection: !0,
              panOnlyZoomed: () =>
                this.Carousel &&
                this.Carousel.pages &&
                this.Carousel.pages.length < 2 &&
                !this.option('dragToClose'),
              lockAxis: () => {
                if (this.Carousel) {
                  let t = 'x'
                  return this.option('dragToClose') && (t += 'y'), t
                }
              }
            },
            on: {
              '*': (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
              init: (t) => (this.Carousel = t),
              createSlide: this.onCreateSlide,
              settle: this.onSettle
            }
          },
          this.option('Carousel')
        )
      )),
      this.option('dragToClose') &&
        this.Carousel.Panzoom.on({
          touchMove: this.onTouchMove,
          afterTransform: this.onTransform,
          touchEnd: this.onTouchEnd
        }),
      this.trigger('initCarousel'),
      this
    )
  }
  onCreateSlide(t, e) {
    let i = e.caption || ''
    if (
      (typeof this.options.caption == 'function' &&
        (i = this.options.caption.call(this, this, this.Carousel, e)),
      typeof i == 'string' && i.length)
    ) {
      const s = document.createElement('div'),
        o = `fancybox__caption_${this.id}_${e.index}`
      ;(s.className = 'fancybox__caption'),
        (s.innerHTML = i),
        s.setAttribute('id', o),
        (e.$caption = e.$el.appendChild(s)),
        e.$el.classList.add('has-caption'),
        e.$el.setAttribute('aria-labelledby', o)
    }
  }
  onSettle() {
    this.option('autoFocus') && this.focus()
  }
  onFocus(t) {
    this.isTopmost() && this.focus(t)
  }
  onClick(t) {
    if (t.defaultPrevented) return
    let e = t.composedPath()[0]
    if (e.matches('[data-fancybox-close]')) return t.preventDefault(), void g.close(!1, t)
    if (e.matches('[data-fancybox-next]')) return t.preventDefault(), void g.next()
    if (e.matches('[data-fancybox-prev]')) return t.preventDefault(), void g.prev()
    const i = document.activeElement
    if (i) {
      if (i.closest('[contenteditable]')) return
      e.matches(st) || i.blur()
    }
    if (
      !e.closest('.fancybox__content') &&
      !getSelection().toString().length &&
      this.trigger('click', t) !== !1
    )
      switch (this.option('click')) {
        case 'close':
          this.close()
          break
        case 'next':
          this.next()
      }
  }
  onTouchMove() {
    const t = this.getSlide().Panzoom
    return !t || t.content.scale === 1
  }
  onTouchEnd(t) {
    const e = t.dragOffset.y
    Math.abs(e) >= 150 || (Math.abs(e) >= 35 && t.dragOffset.time < 350)
      ? (this.option('hideClass') &&
          (this.getSlide().hideClass = 'fancybox-throwOut' + (t.content.y < 0 ? 'Up' : 'Down')),
        this.close())
      : t.lockAxis === 'y' && t.panTo({ y: 0 })
  }
  onTransform(t) {
    if (this.$backdrop) {
      const e = Math.abs(t.content.y),
        i = e < 1 ? '' : Math.max(0.33, Math.min(1, 1 - (e / t.content.fitHeight) * 1.5))
      this.$container.style.setProperty('--fancybox-ts', i ? '0s' : ''),
        this.$container.style.setProperty('--fancybox-opacity', i)
    }
  }
  onMousedown() {
    this.state === 'ready' && document.body.classList.add('is-using-mouse')
  }
  onKeydown(t) {
    if (!this.isTopmost()) return
    document.body.classList.remove('is-using-mouse')
    const e = t.key,
      i = this.option('keyboard')
    if (!i || t.ctrlKey || t.altKey || t.shiftKey) return
    const s = t.composedPath()[0],
      o = document.activeElement && document.activeElement.classList,
      a = o && o.contains('carousel__button')
    if (
      (e !== 'Escape' &&
        !a &&
        (t.target.isContentEditable ||
          ['BUTTON', 'TEXTAREA', 'OPTION', 'INPUT', 'SELECT', 'VIDEO'].indexOf(s.nodeName) !==
            -1)) ||
      this.trigger('keydown', e, t) === !1
    )
      return
    const r = i[e]
    typeof this[r] == 'function' && this[r]()
  }
  getSlide() {
    const t = this.Carousel
    if (!t) return null
    const e = t.page === null ? t.option('initialPage') : t.page,
      i = t.pages || []
    return i.length && i[e] ? i[e].slides[0] : null
  }
  focus(t) {
    if (
      g.ignoreFocusChange ||
      ['init', 'closing', 'customClosing', 'destroy'].indexOf(this.state) > -1
    )
      return
    const e = this.$container,
      i = this.getSlide(),
      s = i.state === 'done' ? i.$el : null
    if (s && s.contains(document.activeElement)) return
    t && t.preventDefault(), (g.ignoreFocusChange = !0)
    const o = Array.from(e.querySelectorAll(st))
    let a,
      r = []
    for (let l of o) {
      const h = l.offsetParent,
        c = s && s.contains(l),
        u = !this.Carousel.$viewport.contains(l)
      h && (c || u)
        ? (r.push(l),
          l.dataset.origTabindex !== void 0 &&
            ((l.tabIndex = l.dataset.origTabindex), l.removeAttribute('data-orig-tabindex')),
          (l.hasAttribute('autoFocus') || (!a && c && !l.classList.contains('carousel__button'))) &&
            (a = l))
        : ((l.dataset.origTabindex =
            l.dataset.origTabindex === void 0
              ? l.getAttribute('tabindex')
              : l.dataset.origTabindex),
          (l.tabIndex = -1))
    }
    t
      ? r.indexOf(t.target) > -1
        ? (this.lastFocus = t.target)
        : this.lastFocus === e
          ? B(r[r.length - 1])
          : B(e)
      : this.option('autoFocus') && a
        ? B(a)
        : r.indexOf(document.activeElement) < 0 && B(e),
      (this.lastFocus = document.activeElement),
      (g.ignoreFocusChange = !1)
  }
  hideScrollbar() {
    if (!X) return
    const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
      e = 'fancybox-style-noscroll'
    let i = document.getElementById(e)
    i ||
      (t > 0 &&
        ((i = document.createElement('style')),
        (i.id = e),
        (i.type = 'text/css'),
        (i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`),
        document.getElementsByTagName('head')[0].appendChild(i),
        document.body.classList.add('compensate-for-scrollbar')))
  }
  revealScrollbar() {
    document.body.classList.remove('compensate-for-scrollbar')
    const t = document.getElementById('fancybox-style-noscroll')
    t && t.remove()
  }
  clearContent(t) {
    this.Carousel.trigger('removeSlide', t),
      t.$content && (t.$content.remove(), (t.$content = null)),
      t.$closeButton && (t.$closeButton.remove(), (t.$closeButton = null)),
      t._className && t.$el.classList.remove(t._className)
  }
  setContent(t, e, i = {}) {
    let s
    const o = t.$el
    if (e instanceof HTMLElement)
      ['img', 'iframe', 'video', 'audio'].indexOf(e.nodeName.toLowerCase()) > -1
        ? ((s = document.createElement('div')), s.appendChild(e))
        : (s = e)
    else {
      const a = document.createRange().createContextualFragment(e)
      ;(s = document.createElement('div')), s.appendChild(a)
    }
    if ((t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element))
      return (
        (t._className = `has-${i.suffix || t.type || 'unknown'}`),
        o.classList.add(t._className),
        s.classList.add('fancybox__content'),
        (s.style.display !== 'none' &&
          getComputedStyle(s).getPropertyValue('display') !== 'none') ||
          (s.style.display = t.display || this.option('defaultDisplay') || 'flex'),
        t.id && s.setAttribute('id', t.id),
        (t.$content = s),
        o.prepend(s),
        this.manageCloseButton(t),
        t.state !== 'loading' && this.revealContent(t),
        s
      )
    this.setError(t, '{{ELEMENT_NOT_FOUND}}')
  }
  manageCloseButton(t) {
    const e = t.closeButton === void 0 ? this.option('closeButton') : t.closeButton
    if (!e || (e === 'top' && this.$closeButton)) return
    const i = document.createElement('button')
    i.classList.add('carousel__button', 'is-close'),
      i.setAttribute('title', this.options.l10n.CLOSE),
      (i.innerHTML = this.option('template.closeButton')),
      i.addEventListener('click', (s) => this.close(s)),
      e === 'inside'
        ? (t.$closeButton && t.$closeButton.remove(), (t.$closeButton = t.$content.appendChild(i)))
        : (this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild))
  }
  revealContent(t) {
    this.trigger('reveal', t), (t.$content.style.visibility = '')
    let e = !1
    t.error ||
      t.state === 'loading' ||
      this.Carousel.prevPage !== null ||
      t.index !== this.options.startIndex ||
      (e = t.showClass === void 0 ? this.option('showClass') : t.showClass),
      e
        ? ((t.state = 'animating'),
          this.animateCSS(t.$content, e, () => {
            this.done(t)
          }))
        : this.done(t)
  }
  animateCSS(t, e, i) {
    if (
      (t && t.dispatchEvent(new CustomEvent('animationend', { bubbles: !0, cancelable: !0 })),
      !t || !e)
    )
      return void (typeof i == 'function' && i())
    const s = function (o) {
      o.currentTarget === this &&
        (t.removeEventListener('animationend', s), i && i(), t.classList.remove(e))
    }
    t.addEventListener('animationend', s), t.classList.add(e)
  }
  done(t) {
    ;(t.state = 'done'), this.trigger('done', t)
    const e = this.getSlide()
    e && t.index === e.index && this.option('autoFocus') && this.focus()
  }
  setError(t, e) {
    ;(t.error = e), this.hideLoading(t), this.clearContent(t)
    const i = document.createElement('div')
    i.classList.add('fancybox-error'),
      (i.innerHTML = this.localize(e || '<p>{{ERROR}}</p>')),
      this.setContent(t, i, { suffix: 'error' })
  }
  showLoading(t) {
    ;(t.state = 'loading'), t.$el.classList.add('is-loading')
    let e = t.$el.querySelector('.fancybox__spinner')
    e ||
      ((e = document.createElement('div')),
      e.classList.add('fancybox__spinner'),
      (e.innerHTML = this.option('template.spinner')),
      e.addEventListener('click', () => {
        this.Carousel.Panzoom.velocity || this.close()
      }),
      t.$el.prepend(e))
  }
  hideLoading(t) {
    const e = t.$el && t.$el.querySelector('.fancybox__spinner')
    e && (e.remove(), t.$el.classList.remove('is-loading')),
      t.state === 'loading' && (this.trigger('load', t), (t.state = 'ready'))
  }
  next() {
    const t = this.Carousel
    t && t.pages.length > 1 && t.slideNext()
  }
  prev() {
    const t = this.Carousel
    t && t.pages.length > 1 && t.slidePrev()
  }
  jumpTo(...t) {
    this.Carousel && this.Carousel.slideTo(...t)
  }
  isClosing() {
    return ['closing', 'customClosing', 'destroy'].includes(this.state)
  }
  isTopmost() {
    return g.getInstance().id == this.id
  }
  close(t) {
    if (
      (t && t.preventDefault(),
      this.isClosing() ||
        this.trigger('shouldClose', t) === !1 ||
        ((this.state = 'closing'),
        this.Carousel.Panzoom.destroy(),
        this.detachEvents(),
        this.trigger('closing', t),
        this.state === 'destroy'))
    )
      return
    this.$container.setAttribute('aria-hidden', 'true'), this.$container.classList.add('is-closing')
    const e = this.getSlide()
    if (
      (this.Carousel.slides.forEach((i) => {
        i.$content && i.index !== e.index && this.Carousel.trigger('removeSlide', i)
      }),
      this.state === 'closing')
    ) {
      const i = e.hideClass === void 0 ? this.option('hideClass') : e.hideClass
      this.animateCSS(
        e.$content,
        i,
        () => {
          this.destroy()
        },
        !0
      )
    }
  }
  destroy() {
    if (this.state === 'destroy') return
    ;(this.state = 'destroy'), this.trigger('destroy')
    const t = this.option('placeFocusBack')
      ? this.option('triggerTarget', this.getSlide().$trigger)
      : null
    this.Carousel.destroy(),
      this.detachPlugins(),
      (this.Carousel = null),
      (this.options = {}),
      (this.events = {}),
      this.$container.remove(),
      (this.$container = this.$backdrop = this.$carousel = null),
      t && B(t),
      N.delete(this.id)
    const e = g.getInstance()
    e
      ? e.focus()
      : (document.documentElement.classList.remove('with-fancybox'),
        document.body.classList.remove('is-using-mouse'),
        this.revealScrollbar())
  }
  static show(t, e = {}) {
    return new g(t, e)
  }
  static fromEvent(t, e = {}) {
    if (t.defaultPrevented || (t.button && t.button !== 0) || t.ctrlKey || t.metaKey || t.shiftKey)
      return
    const i = t.composedPath()[0]
    let s,
      o,
      a,
      r = i
    if (
      ((r.matches('[data-fancybox-trigger]') || (r = r.closest('[data-fancybox-trigger]'))) &&
        ((e.triggerTarget = r), (s = r && r.dataset && r.dataset.fancyboxTrigger)),
      s)
    ) {
      const h = document.querySelectorAll(`[data-fancybox="${s}"]`),
        c = parseInt(r.dataset.fancyboxIndex, 10) || 0
      r = h.length ? h[c] : r
    }
    Array.from(g.openers.keys())
      .reverse()
      .some((h) => {
        a = r || i
        let c = !1
        try {
          a instanceof Element &&
            (typeof h == 'string' || h instanceof String) &&
            (c = a.matches(h) || (a = a.closest(h)))
        } catch {}
        return !!c && (t.preventDefault(), (o = h), !0)
      })
    let l = !1
    if (o) {
      ;(e.event = t), (e.target = a), (a.origTarget = i), (l = g.fromOpener(o, e))
      const h = g.getInstance()
      h && h.state === 'ready' && t.detail && document.body.classList.add('is-using-mouse')
    }
    return l
  }
  static fromOpener(t, e = {}) {
    let i = [],
      s = e.startIndex || 0,
      o = e.target || null
    const a = (e = x({}, e, g.openers.get(t))).groupAll !== void 0 && e.groupAll,
      r = e.groupAttr === void 0 ? 'data-fancybox' : e.groupAttr,
      l = r && o ? o.getAttribute(`${r}`) : ''
    if (!o || l || a) {
      const c = e.root || (o ? o.getRootNode() : document.body)
      i = [].slice.call(c.querySelectorAll(t))
    }
    if ((o && !a && (i = l ? i.filter((c) => c.getAttribute(`${r}`) === l) : [o]), !i.length))
      return !1
    const h = g.getInstance()
    return (
      !(h && i.indexOf(h.options.$trigger) > -1) &&
      ((s = o ? i.indexOf(o) : s),
      (i = i.map(function (c) {
        const u = ['false', '0', 'no', 'null', 'undefined'],
          f = ['true', '1', 'yes'],
          d = Object.assign({}, c.dataset),
          p = {}
        for (let [m, b] of Object.entries(d))
          if (m !== 'fancybox')
            if (m === 'width' || m === 'height') p[`_${m}`] = b
            else if (typeof b == 'string' || b instanceof String)
              if (u.indexOf(b) > -1) p[m] = !1
              else if (f.indexOf(p[m]) > -1) p[m] = !0
              else
                try {
                  p[m] = JSON.parse(b)
                } catch {
                  p[m] = b
                }
            else p[m] = b
        return c instanceof Element && (p.$trigger = c), p
      })),
      new g(i, x({}, e, { startIndex: s, $trigger: o })))
    )
  }
  static bind(t, e = {}) {
    function i() {
      document.body.addEventListener('click', g.fromEvent, !1)
    }
    X &&
      (g.openers.size ||
        (/complete|interactive|loaded/.test(document.readyState)
          ? i()
          : document.addEventListener('DOMContentLoaded', i)),
      g.openers.set(t, e))
  }
  static unbind(t) {
    g.openers.delete(t), g.openers.size || g.destroy()
  }
  static destroy() {
    let t
    for (; (t = g.getInstance()); ) t.destroy()
    ;(g.openers = /* @__PURE__ */ new Map()),
      document.body.removeEventListener('click', g.fromEvent, !1)
  }
  static getInstance(t) {
    return t
      ? N.get(t)
      : Array.from(N.values())
          .reverse()
          .find((e) => !e.isClosing() && e) || null
  }
  static close(t = !0, e) {
    if (t) for (const i of N.values()) i.close(e)
    else {
      const i = g.getInstance()
      i && i.close(e)
    }
  }
  static next() {
    const t = g.getInstance()
    t && t.next()
  }
  static prev() {
    const t = g.getInstance()
    t && t.prev()
  }
}
;(g.version = '4.0.31'),
  (g.defaults = ut),
  (g.openers = /* @__PURE__ */ new Map()),
  (g.Plugins = ne),
  g.bind('[data-fancybox]')
for (const [n, t] of Object.entries(g.Plugins || {})) typeof t.create == 'function' && t.create(g)
const D = {
    pageXOffset: 0,
    pageYOffset: 0,
    element() {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
      )
    },
    activate(n) {
      ;(D.pageXOffset = window.pageXOffset),
        (D.pageYOffset = window.pageYOffset),
        n.requestFullscreen
          ? n.requestFullscreen()
          : n.mozRequestFullScreen
            ? n.mozRequestFullScreen()
            : n.webkitRequestFullscreen
              ? n.webkitRequestFullscreen()
              : n.msRequestFullscreen && n.msRequestFullscreen()
    },
    deactivate() {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }
  },
  re = k({
    name: 'MixinFancyboxOpenButton',
    components: {
      IconExpand: Rt
    }
  }),
  le = {
    ref: 'FancyboxOpenButton',
    class: 'MixinFancyboxOpenButton',
    role: 'presentation'
  },
  ce = { class: 'BaseButton -primary -icon-only pointer-events-none' },
  he = { class: 'icon' }
function de(n, t, e, i, s, o) {
  const a = R('IconExpand')
  return v(), T('div', le, [w('div', ce, [w('span', he, [q(a)])])], 512)
}
const ue = /* @__PURE__ */ _(re, [['render', de]]),
  Y = {
    // Normal  (Vanilla fancybox theme)
    normal: 'fancybox-theme-normal ThemeLight',
    // Light   (WCP default lighter lightbox)
    light: 'fancybox-theme-light ThemeLight',
    // Dark    (WWW default black lightbox)
    dark: 'fancybox-theme-dark ThemeDark'
  },
  fe = k({
    name: 'MixinFancybox',
    components: {
      MixinFancyboxOpenButton: ue
    },
    filters: {
      truncate(n) {
        return n && n.length > 280 && (n = n.substring(0, 277) + '...'), n
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
        default: 'dark',
        validator: (n) => Object.keys(Y).includes(n)
      }
    },
    computed: {
      computedClass() {
        return Y[this.theme]
      },
      computedCaption() {
        let n =
          this.caption && this.caption.length
            ? this.$options.filters.truncate(this.caption, 180)
            : ''
        return this.credit && (n = `${n} Credit: ${this.credit}`), n
      }
    },
    mounted() {
      return g.bind('[data-fancybox]', {
        infinite: this.infinite,
        // mainClass from theme variants
        mainClass: this.computedClass ? this.computedClass : Y.dark,
        showClass: 'fancybox-fadeIn',
        // "fancybox-fadeIn" | "fancybox-zoomInUp" | false
        hideClass: 'fancybox-fadeOut',
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
              type: 'div',
              class: 'fancybox__counter',
              html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
              tabindex: -1,
              position: 'left'
            },
            prev: {
              type: 'button',
              class: 'fancybox__button--prev',
              label: 'PREV',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>',
              click(n) {
                n.preventDefault(), this.fancybox.prev()
              }
            },
            next: {
              type: 'button',
              class: 'fancybox__button--next',
              label: 'NEXT',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>',
              click(n) {
                n.preventDefault(), this.fancybox.next()
              }
            },
            fullscreen: {
              type: 'button',
              class: 'fancybox__button--fullscreen',
              label: 'TOGGLE_FULLSCREEN',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g><g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g></svg>',
              click(n) {
                n.preventDefault(),
                  D.element() ? D.deactivate() : D.activate(this.fancybox.$container)
              }
            },
            slideshow: {
              type: 'button',
              class: 'fancybox__button--slideshow',
              label: 'TOGGLE_SLIDESHOW',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g><g><path d="M7 4v15M17 4v15"/></g></svg>',
              click(n) {
                n.preventDefault(), this.Slideshow.toggle()
              }
            },
            zoom: {
              type: 'button',
              class: 'fancybox__button--zoom',
              label: 'TOGGLE_ZOOM',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
              click(n) {
                n.preventDefault()
                const t = this.fancybox.getSlide().Panzoom
                t && t.toggleZoom()
              }
            },
            download: {
              type: 'link',
              label: 'DOWNLOAD',
              class: 'fancybox__button--download',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
              click(n) {
                n.stopPropagation()
              }
            },
            thumbs: {
              type: 'button',
              label: 'TOGGLE_THUMBS',
              class: 'fancybox__button--thumbs',
              html: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512" width="24" height="21" stroke-width="3px"><path stroke-width="3px" fill="white" d="M512 0C547.3 0 576 28.65 576 64V288C576 323.3 547.3 352 512 352H64C28.65 352 0 323.3 0 288V64C0 28.65 28.65 0 64 0H512zM512 64H64V288H512V64zM0 448C0 430.3 14.33 416 32 416H64C81.67 416 96 430.3 96 448V480C96 497.7 81.67 512 64 512H32C14.33 512 0 497.7 0 480V448zM224 416C241.7 416 256 430.3 256 448V480C256 497.7 241.7 512 224 512H192C174.3 512 160 497.7 160 480V448C160 430.3 174.3 416 192 416H224zM320 448C320 430.3 334.3 416 352 416H384C401.7 416 416 430.3 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448zM544 416C561.7 416 576 430.3 576 448V480C576 497.7 561.7 512 544 512H512C494.3 512 480 497.7 480 480V448C480 430.3 494.3 416 512 416H544z"/></svg>',
              click(n) {
                n.stopPropagation()
                const t = this.fancybox.plugins.Thumbs
                t && t.toggle()
              }
            },
            close: {
              type: 'button',
              label: 'CLOSE',
              class: 'fancybox__button--close',
              html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
              tabindex: 1,
              click(n) {
                n.stopPropagation(), n.preventDefault(), this.fancybox.close()
              }
            }
          },
          display: [
            { id: 'counter', position: 'left' },
            'zoom',
            'slideshow',
            'fullscreen',
            // 'download',
            'thumbs',
            'captions',
            'close'
          ]
        },
        caption(n, t, e) {
          let i = e.caption
          return (
            e.type === 'image' &&
              (i = `<div class="mx-auto container">
              ${e.title ? `<h6 class="font-semibold text-4xl mb-1">${e.title}</h6>` : ''}
              ${i.length ? `<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${i}</div></div>` : ''}
              ${e.url ? `<a href="${e.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>` : ''}
            </div>`),
            i
          )
        }
      })
    },
    methods: {
      clickHandler() {
        this.$emit('click')
      }
    }
  }),
  pe = [
    'href',
    'data-fancybox',
    'data-src',
    'data-width',
    'data-height',
    'data-srcset',
    'data-sizes',
    'data-theme',
    'data-caption',
    'data-title',
    'data-animated',
    'data-download-src',
    'data-url',
    'data-max-width'
  ]
function ge(n, t, e, i, s, o) {
  const a = R('MixinFancyboxOpenButton')
  return (
    v(),
    T(
      'a',
      {
        class: 'MixinFancybox group cursor-pointer block',
        'aria-label': 'Open in Lightbox',
        href: n.src,
        'data-fancybox': n.galleryName || '',
        'data-src': n.src,
        'data-width': n.src ? n.src.width : null,
        'data-height': n.src ? n.src.height : null,
        'data-srcset': n.srcSet,
        'data-sizes': n.sizes,
        'data-theme': n.computedClass,
        'data-caption': n.computedCaption,
        'data-title': n.title,
        'data-animated': n.animated,
        'data-download-src': n.downloadSrc,
        'data-url': n.detailUrl,
        'data-max-width': n.src ? n.src.width : null,
        onClick: t[0] || (t[0] = (r) => n.$emit('click'))
      },
      [q(a), S(n.$slots, 'default')],
      8,
      pe
    )
  )
}
const we = /* @__PURE__ */ _(fe, [['render', ge]])
export {
  be as BaseButton,
  be as BaseHeading,
  ye as BaseLink,
  Rt as IconArrows,
  Lt as IconCaret,
  ve as IconLocation,
  xe as IconUser,
  zt as MixinAnimationCaret,
  we as MixinFancybox
}
