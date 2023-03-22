import { unref as m, getCurrentScope as Br, onScopeDispose as jr, watch as _, warn as kr, provide as Re, ref as $, getCurrentInstance as st, inject as te, computed as N, onBeforeMount as Lr, onMounted as lt, defineComponent as D, renderSlot as ee, onBeforeUnmount as tr, openBlock as U, createElementBlock as We, normalizeClass as ut, withDirectives as rr, cloneVNode as _r, Fragment as Vr, Text as Fr, Comment as Wr, createVNode as qe, createBlock as ge, mergeProps as nr, withCtx as pe, createCommentVNode as Te, normalizeStyle as qr, toRef as Ve, Teleport as zr, Transition as Hr, vShow as Kr, readonly as Ur, onDeactivated as Yr, toDisplayString as Gr } from "vue";
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Xr = () => {
}, Jr = Object.prototype.hasOwnProperty, Nt = (e, t) => Jr.call(e, t), Qr = Array.isArray, Le = (e) => typeof e == "function", Zr = (e) => typeof e == "string", pt = (e) => e !== null && typeof e == "object";
function en(e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = {}; ++t < r; ) {
    var o = e[t];
    n[o[0]] = o[1];
  }
  return n;
}
var $t;
const Z = typeof window < "u", or = (e) => typeof e == "boolean", tn = (e) => typeof e == "string", ar = () => {
}, rn = Z && (($t = window == null ? void 0 : window.navigator) == null ? void 0 : $t.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ir(e) {
  return typeof e == "function" ? e() : m(e);
}
function nn(e) {
  return e;
}
function sr(e) {
  return Br() ? (jr(e), !0) : !1;
}
function ue(e) {
  var t;
  const r = ir(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const lr = Z ? window : void 0;
function et(...e) {
  let t, r, n, o;
  if (tn(e[0]) || Array.isArray(e[0]) ? ([r, n, o] = e, t = lr) : [t, r, n, o] = e, !t)
    return ar;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [], l = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, c, f, d) => (u.addEventListener(c, f, d), () => u.removeEventListener(c, f, d)), s = _(() => [ue(t), ir(o)], ([u, c]) => {
    l(), u && a.push(...r.flatMap((f) => n.map((d) => i(u, f, d, c))));
  }, { immediate: !0, flush: "post" }), v = () => {
    s(), l();
  };
  return sr(v), v;
}
let Dt = !1;
function on(e, t, r = {}) {
  const { window: n = lr, ignore: o = [], capture: a = !0, detectIframe: l = !1 } = r;
  if (!n)
    return;
  rn && !Dt && (Dt = !0, Array.from(n.document.body.children).forEach((f) => f.addEventListener("click", ar)));
  let i = !0;
  const s = (f) => o.some((d) => {
    if (typeof d == "string")
      return Array.from(n.document.querySelectorAll(d)).some((h) => h === f.target || f.composedPath().includes(h));
    {
      const h = ue(d);
      return h && (f.target === h || f.composedPath().includes(h));
    }
  }), u = [
    et(n, "click", (f) => {
      const d = ue(e);
      if (!(!d || d === f.target || f.composedPath().includes(d))) {
        if (f.detail === 0 && (i = !s(f)), !i) {
          i = !0;
          return;
        }
        t(f);
      }
    }, { passive: !0, capture: a }),
    et(n, "pointerdown", (f) => {
      const d = ue(e);
      d && (i = !f.composedPath().includes(d) && !s(f));
    }, { passive: !0 }),
    l && et(n, "blur", (f) => {
      var d;
      const h = ue(e);
      ((d = n.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && t(f);
    })
  ].filter(Boolean);
  return () => u.forEach((f) => f());
}
const rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = "__vueuse_ssr_handlers__";
rt[nt] = rt[nt] || {};
rt[nt];
var Mt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mt || (Mt = {}));
var an = Object.defineProperty, Bt = Object.getOwnPropertySymbols, sn = Object.prototype.hasOwnProperty, ln = Object.prototype.propertyIsEnumerable, jt = (e, t, r) => t in e ? an(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, un = (e, t) => {
  for (var r in t || (t = {}))
    sn.call(t, r) && jt(e, r, t[r]);
  if (Bt)
    for (var r of Bt(t))
      ln.call(t, r) && jt(e, r, t[r]);
  return e;
};
const pn = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
un({
  linear: nn
}, pn);
const cn = (e) => typeof Element > "u" ? !1 : e instanceof Element;
class fn extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ze(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Zr(e) ? new fn(`[${e}] ${t}`) : e;
    console.warn(r);
  }
}
const X = (e, t, { checkForDefaultPrevented: r = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (r === !1 || !a)
    return t == null ? void 0 : t(o);
}, kt = (e) => Object.keys(e), ct = (e, t) => {
  if (e.install = (r) => {
    for (const n of [e, ...Object.values(t != null ? t : {})])
      r.component(n.name, n);
  }, t)
    for (const [r, n] of Object.entries(t))
      e[r] = n;
  return e;
}, ur = "__epPropKey", M = (e) => e, dn = (e) => pt(e) && !!e[ur], Ue = (e, t) => {
  if (!pt(e) || dn(e))
    return e;
  const { values: r, required: n, default: o, type: a, validator: l } = e, s = {
    type: a,
    required: !!n,
    validator: r || l ? (v) => {
      let u = !1, c = [];
      if (r && (c = Array.from(r), Nt(e, "default") && c.push(o), u || (u = c.includes(v))), l && (u || (u = l(v))), !u && c.length > 0) {
        const f = [...new Set(c)].map((d) => JSON.stringify(d)).join(", ");
        kr(
          `Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(
            v
          )}.`
        );
      }
      return u;
    } : void 0,
    [ur]: !0
  };
  return Nt(e, "default") && (s.default = o), s;
}, G = (e) => en(
  Object.entries(e).map(([t, r]) => [
    t,
    Ue(r, t)
  ])
), vn = () => Math.floor(Math.random() * 1e4);
function gn() {
  let e;
  const t = (n, o) => {
    r(), e = window.setTimeout(n, o);
  }, r = () => window.clearTimeout(e);
  return sr(() => r()), {
    registerTimeout: t,
    cancelTimeout: r
  };
}
const mn = G({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), hn = ({
  showAfter: e,
  hideAfter: t,
  open: r,
  close: n
}) => {
  const { registerTimeout: o } = gn();
  return {
    onOpen: (i) => {
      o(() => {
        r(i);
      }, m(e));
    },
    onClose: (i) => {
      o(() => {
        n(i);
      }, m(t));
    }
  };
}, pr = Symbol("elForwardRef"), yn = (e) => {
  Re(pr, {
    setForwardRef: (r) => {
      e.value = r;
    }
  });
}, bn = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ft = Symbol("popper"), cr = Symbol("popperContent"), dt = Symbol("elTooltip"), fr = Symbol(), He = $();
function xe(e, t = void 0) {
  const r = st() ? te(fr, He) : He;
  return e ? N(() => {
    var n, o;
    return (o = (n = r.value) == null ? void 0 : n[e]) != null ? o : t;
  }) : r;
}
const wn = (e, t, r = !1) => {
  var i;
  const n = !!st(), o = n ? xe() : void 0, a = (i = t == null ? void 0 : t.provide) != null ? i : n ? Re : void 0;
  if (!a) {
    ze(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()."
    );
    return;
  }
  const l = N(() => {
    const s = m(e);
    return o != null && o.value ? On(o.value, s) : s;
  });
  return a(fr, l), (r || !He.value) && (He.value = l.value), l;
}, On = (e, t) => {
  var o;
  const r = [.../* @__PURE__ */ new Set([...kt(e), ...kt(t)])], n = {};
  for (const a of r)
    n[a] = (o = t[a]) != null ? o : e[a];
  return n;
}, vt = "vr", En = "is-", se = (e, t, r, n, o) => {
  let a = `${e}-${t}`;
  return r && (a += `-${r}`), n && (a += `__${n}`), o && (a += `--${o}`), a;
}, Ie = (e) => {
  const t = xe("namespace"), r = N(() => t.value || vt);
  return {
    namespace: r,
    b: (c = "") => se(m(r), e, c, "", ""),
    e: (c) => c ? se(m(r), e, "", c, "") : "",
    m: (c) => c ? se(m(r), e, "", "", c) : "",
    be: (c, f) => c && f ? se(m(r), e, c, f, "") : "",
    em: (c, f) => c && f ? se(m(r), e, "", c, f) : "",
    bm: (c, f) => c && f ? se(m(r), e, c, "", f) : "",
    bem: (c, f, d) => c && f && d ? se(m(r), e, c, f, d) : "",
    is: (c, ...f) => {
      const d = f.length >= 1 ? f[0] : !0;
      return c && d ? `${En}${c}` : "";
    }
  };
}, Lt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Pn = Symbol("elIdInjection"), Cn = (e) => {
  const t = te(Pn, Lt);
  !Z && t === Lt && ze(
    "IdInjection",
    `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
  );
  const r = xe("namespace", vt);
  return N(
    () => m(e) || `${r.value}-id-${t.prefix}-${t.current++}`
  );
};
let _t;
const Tn = xe("namespace", vt), dr = `${Tn.value}-popper-container-${vn()}`, vr = `#${dr}`, An = () => {
  const e = document.createElement("div");
  return e.id = dr, document.body.appendChild(e), e;
}, Sn = () => {
  Lr(() => {
    !Z || (process.env.NODE_ENV === "test" || !_t || !document.body.querySelector(vr)) && (_t = An());
  });
}, Vt = $(0), Rn = () => {
  const e = xe("zIndex", 2e3), t = N(() => e.value + Vt.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Vt.value++, t.value)
  };
}, xn = Ue({
  type: M(Boolean),
  default: null
}), In = Ue({
  type: M(Function)
}), Nn = (e) => {
  const t = `update:${e}`, r = `onUpdate:${e}`, n = [t], o = {
    [e]: xn,
    [r]: In
  };
  return {
    useModelToggle: ({
      indicator: l,
      toggleReason: i,
      shouldHideWhenRouteChanges: s,
      shouldProceed: v,
      onShow: u,
      onHide: c
    }) => {
      const f = st(), { emit: d } = f, h = f.props, P = N(
        () => Le(h[r])
      ), E = N(() => h[e] === null), p = (T) => {
        l.value !== !0 && (l.value = !0, i && (i.value = T), Le(u) && u(T));
      }, w = (T) => {
        l.value !== !1 && (l.value = !1, i && (i.value = T), Le(c) && c(T));
      }, y = (T) => {
        if (h.disabled === !0 || Le(v) && !v())
          return;
        const S = P.value && Z;
        S && d(t, !0), (E.value || !S) && p(T);
      }, g = (T) => {
        if (h.disabled === !0 || !Z)
          return;
        const S = P.value && Z;
        S && d(t, !1), (E.value || !S) && w(T);
      }, O = (T) => {
        !or(T) || (h.disabled && T ? P.value && d(t, !1) : l.value !== T && (T ? p() : w()));
      }, C = () => {
        l.value ? g() : y();
      };
      return _(() => h[e], O), s && f.appContext.config.globalProperties.$route !== void 0 && _(
        () => ({
          ...f.proxy.$route
        }),
        () => {
          s.value && l.value && g();
        }
      ), lt(() => {
        O(h[e]);
      }), {
        hide: g,
        show: y,
        toggle: C,
        hasUpdateHandler: P
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: n
  };
}, Ft = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, $n = ["", "default", "small", "large"], Dn = Ue({
  type: String,
  values: $n,
  required: !1
}), Mn = G({
  a11y: {
    type: Boolean,
    default: !0
  },
  size: Dn,
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), Bn = D({
  name: "ElConfigProvider",
  props: Mn,
  setup(e, { slots: t }) {
    const r = wn(e);
    return () => ee(t, "default", { config: r == null ? void 0 : r.value });
  }
}), Aa = ct(Bn), jn = D({
  name: "VrPopperRoot",
  inheritAttrs: !1
}), kn = /* @__PURE__ */ D({
  ...jn,
  setup(e, { expose: t }) {
    const r = $(), n = $(), o = $(), a = $(), l = {
      triggerRef: r,
      popperInstanceRef: n,
      contentRef: o,
      referenceRef: a
    };
    return t(l), Re(ft, l), (i, s) => ee(i.$slots, "default");
  }
}), gr = G({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ln = D({
  name: "VrPopperArrow",
  inheritAttrs: !1
}), _n = /* @__PURE__ */ D({
  ...Ln,
  props: gr,
  setup(e, { expose: t }) {
    const r = e, n = Ie("popper"), { arrowOffset: o, arrowRef: a } = te(
      cr,
      void 0
    );
    return _(
      () => r.arrowOffset,
      (l) => {
        o.value = l;
      },
      {
        immediate: !0
      }
    ), tr(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (l, i) => (U(), We("span", {
      ref_key: "arrowRef",
      ref: a,
      class: ut(m(n).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
}), tt = "VrOnlyChild", Vn = D({
  name: tt,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    var a;
    const n = te(pr), o = bn((a = n == null ? void 0 : n.setForwardRef) != null ? a : Xr);
    return () => {
      var s;
      const l = (s = t.default) == null ? void 0 : s.call(t, r);
      if (!l)
        return null;
      if (l.length > 1)
        return ze(tt, "requires exact only one valid child."), null;
      const i = mr(l);
      return i ? rr(_r(i, r), [[o]]) : (ze(tt, "no valid child node found"), null);
    };
  }
});
function mr(e) {
  if (!e)
    return null;
  const t = e;
  for (const r of t) {
    if (pt(r))
      switch (r.type) {
        case Wr:
          continue;
        case Fr:
        case "svg":
          return Wt(r);
        case Vr:
          return mr(r.children);
        default:
          return r;
      }
    return Wt(r);
  }
  return null;
}
function Wt(e) {
  const t = Ie("only-child");
  return qe("span", {
    class: t.e("content")
  }, [e]);
}
const hr = G({
  virtualRef: {
    type: M(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), Fn = D({
  name: "VrPopperTrigger",
  inheritAttrs: !1
}), Wn = /* @__PURE__ */ D({
  ...Fn,
  props: hr,
  setup(e, { expose: t }) {
    const r = e, { triggerRef: n } = te(ft, void 0);
    return yn(n), lt(() => {
      _(
        () => r.virtualRef,
        (o) => {
          o && (n.value = ue(o));
        },
        {
          immediate: !0
        }
      ), _(
        () => n.value,
        (o, a) => {
          cn(o) && [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((l) => {
            var s;
            const i = r[l];
            i && (o.addEventListener(
              l.slice(2).toLowerCase(),
              i
            ), (s = a == null ? void 0 : a.removeEventListener) == null || s.call(
              a,
              l.slice(2).toLowerCase(),
              i
            ));
          });
        },
        {
          immediate: !0
        }
      );
    }), t({
      triggerRef: n
    }), (o, a) => o.virtualTriggering ? Te("", !0) : (U(), ge(m(Vn), nr({ key: 0 }, o.$attrs, {
      "aria-describedby": o.open ? o.id : void 0
    }), {
      default: pe(() => [
        ee(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-describedby"]));
  }
});
var B = "top", V = "bottom", F = "right", j = "left", Ye = "auto", Ne = [B, V, F, j], me = "start", Ae = "end", qn = "clippingParents", yr = "viewport", Ee = "popper", zn = "reference", qt = /* @__PURE__ */ Ne.reduce(function(e, t) {
  return e.concat([t + "-" + me, t + "-" + Ae]);
}, []), gt = /* @__PURE__ */ [].concat(Ne, [Ye]).reduce(function(e, t) {
  return e.concat([t, t + "-" + me, t + "-" + Ae]);
}, []), Hn = "beforeRead", Kn = "read", Un = "afterRead", Yn = "beforeMain", Gn = "main", Xn = "afterMain", Jn = "beforeWrite", Qn = "write", Zn = "afterWrite", ot = [Hn, Kn, Un, Yn, Gn, Xn, Jn, Qn, Zn];
function Y(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function W(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fe(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function L(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function eo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !L(a) || !Y(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(l) {
      var i = o[l];
      i === !1 ? a.removeAttribute(l) : a.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function to(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = l.reduce(function(s, v) {
        return s[v] = "", s;
      }, {});
      !L(o) || !Y(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
const ro = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: eo,
  effect: to,
  requires: ["computeStyles"]
};
function H(e) {
  return e.split("-")[0];
}
var ce = Math.max, Ke = Math.min, he = Math.round;
function at() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function br() {
  return !/^((?!chrome|android).)*safari/i.test(at());
}
function ye(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && L(e) && (o = e.offsetWidth > 0 && he(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && he(n.height) / e.offsetHeight || 1);
  var l = fe(e) ? W(e) : window, i = l.visualViewport, s = !br() && r, v = (n.left + (s && i ? i.offsetLeft : 0)) / o, u = (n.top + (s && i ? i.offsetTop : 0)) / a, c = n.width / o, f = n.height / a;
  return {
    width: c,
    height: f,
    top: u,
    right: v + c,
    bottom: u + f,
    left: v,
    x: v,
    y: u
  };
}
function ht(e) {
  var t = ye(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function wr(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && mt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function K(e) {
  return W(e).getComputedStyle(e);
}
function no(e) {
  return ["table", "td", "th"].indexOf(Y(e)) >= 0;
}
function re(e) {
  return ((fe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ge(e) {
  return Y(e) === "html" ? e : e.assignedSlot || e.parentNode || (mt(e) ? e.host : null) || re(e);
}
function zt(e) {
  return !L(e) || K(e).position === "fixed" ? null : e.offsetParent;
}
function oo(e) {
  var t = /firefox/i.test(at()), r = /Trident/i.test(at());
  if (r && L(e)) {
    var n = K(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Ge(e);
  for (mt(o) && (o = o.host); L(o) && ["html", "body"].indexOf(Y(o)) < 0; ) {
    var a = K(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function $e(e) {
  for (var t = W(e), r = zt(e); r && no(r) && K(r).position === "static"; )
    r = zt(r);
  return r && (Y(r) === "html" || Y(r) === "body" && K(r).position === "static") ? t : r || oo(e) || t;
}
function yt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pe(e, t, r) {
  return ce(e, Ke(t, r));
}
function ao(e, t, r) {
  var n = Pe(e, t, r);
  return n > r ? r : n;
}
function Or() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Er(e) {
  return Object.assign({}, Or(), e);
}
function Pr(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var io = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Er(typeof t != "number" ? t : Pr(t, Ne));
};
function so(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, l = r.modifiersData.popperOffsets, i = H(r.placement), s = yt(i), v = [j, F].indexOf(i) >= 0, u = v ? "height" : "width";
  if (!(!a || !l)) {
    var c = io(o.padding, r), f = ht(a), d = s === "y" ? B : j, h = s === "y" ? V : F, P = r.rects.reference[u] + r.rects.reference[s] - l[s] - r.rects.popper[u], E = l[s] - r.rects.reference[s], p = $e(a), w = p ? s === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, y = P / 2 - E / 2, g = c[d], O = w - f[u] - c[h], C = w / 2 - f[u] / 2 + y, T = Pe(g, C, O), S = s;
    r.modifiersData[n] = (t = {}, t[S] = T, t.centerOffset = T - C, t);
  }
}
function lo(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (L(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !wr(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const uo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: so,
  effect: lo,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function be(e) {
  return e.split("-")[1];
}
var po = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function co(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: he(t * o) / o || 0,
    y: he(r * o) / o || 0
  };
}
function Ht(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, v = e.adaptive, u = e.roundOffsets, c = e.isFixed, f = l.x, d = f === void 0 ? 0 : f, h = l.y, P = h === void 0 ? 0 : h, E = typeof u == "function" ? u({
    x: d,
    y: P
  }) : {
    x: d,
    y: P
  };
  d = E.x, P = E.y;
  var p = l.hasOwnProperty("x"), w = l.hasOwnProperty("y"), y = j, g = B, O = window;
  if (v) {
    var C = $e(r), T = "clientHeight", S = "clientWidth";
    if (C === W(r) && (C = re(r), K(C).position !== "static" && i === "absolute" && (T = "scrollHeight", S = "scrollWidth")), C = C, o === B || (o === j || o === F) && a === Ae) {
      g = V;
      var R = c && C === O && O.visualViewport ? O.visualViewport.height : C[T];
      P -= R - n.height, P *= s ? 1 : -1;
    }
    if (o === j || (o === B || o === V) && a === Ae) {
      y = F;
      var x = c && C === O && O.visualViewport ? O.visualViewport.width : C[S];
      d -= x - n.width, d *= s ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: i
  }, v && po), I = u === !0 ? co({
    x: d,
    y: P
  }) : {
    x: d,
    y: P
  };
  if (d = I.x, P = I.y, s) {
    var b;
    return Object.assign({}, A, (b = {}, b[g] = w ? "0" : "", b[y] = p ? "0" : "", b.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + P + "px)" : "translate3d(" + d + "px, " + P + "px, 0)", b));
  }
  return Object.assign({}, A, (t = {}, t[g] = w ? P + "px" : "", t[y] = p ? d + "px" : "", t.transform = "", t));
}
function fo(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, l = a === void 0 ? !0 : a, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var v = K(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(c) {
      return v.indexOf(c) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: H(t.placement),
    variation: be(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ht(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ht(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const vo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fo,
  data: {}
};
var _e = {
  passive: !0
};
function go(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, l = n.resize, i = l === void 0 ? !0 : l, s = W(t.elements.popper), v = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && v.forEach(function(u) {
    u.addEventListener("scroll", r.update, _e);
  }), i && s.addEventListener("resize", r.update, _e), function() {
    a && v.forEach(function(u) {
      u.removeEventListener("scroll", r.update, _e);
    }), i && s.removeEventListener("resize", r.update, _e);
  };
}
const mo = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: go,
  data: {}
};
var ho = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ho[t];
  });
}
var yo = {
  start: "end",
  end: "start"
};
function Kt(e) {
  return e.replace(/start|end/g, function(t) {
    return yo[t];
  });
}
function bt(e) {
  var t = W(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function wt(e) {
  return ye(re(e)).left + bt(e).scrollLeft;
}
function bo(e, t) {
  var r = W(e), n = re(e), o = r.visualViewport, a = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (o) {
    a = o.width, l = o.height;
    var v = br();
    (v || !v && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i + wt(e),
    y: s
  };
}
function wo(e) {
  var t, r = re(e), n = bt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = ce(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = ce(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + wt(e), s = -n.scrollTop;
  return K(o || r).direction === "rtl" && (i += ce(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Ot(e) {
  var t = K(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Cr(e) {
  return ["html", "body", "#document"].indexOf(Y(e)) >= 0 ? e.ownerDocument.body : L(e) && Ot(e) ? e : Cr(Ge(e));
}
function Ce(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Cr(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = W(n), l = o ? [a].concat(a.visualViewport || [], Ot(n) ? n : []) : n, i = t.concat(l);
  return o ? i : i.concat(Ce(Ge(l)));
}
function it(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Oo(e, t) {
  var r = ye(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ut(e, t, r) {
  return t === yr ? it(bo(e, r)) : fe(t) ? Oo(t, r) : it(wo(re(e)));
}
function Eo(e) {
  var t = Ce(Ge(e)), r = ["absolute", "fixed"].indexOf(K(e).position) >= 0, n = r && L(e) ? $e(e) : e;
  return fe(n) ? t.filter(function(o) {
    return fe(o) && wr(o, n) && Y(o) !== "body";
  }) : [];
}
function Po(e, t, r, n) {
  var o = t === "clippingParents" ? Eo(e) : [].concat(t), a = [].concat(o, [r]), l = a[0], i = a.reduce(function(s, v) {
    var u = Ut(e, v, n);
    return s.top = ce(u.top, s.top), s.right = Ke(u.right, s.right), s.bottom = Ke(u.bottom, s.bottom), s.left = ce(u.left, s.left), s;
  }, Ut(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Tr(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? H(n) : null, a = n ? be(n) : null, l = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case B:
      s = {
        x: l,
        y: t.y - r.height
      };
      break;
    case V:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case F:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case j:
      s = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var v = o ? yt(o) : null;
  if (v != null) {
    var u = v === "y" ? "height" : "width";
    switch (a) {
      case me:
        s[v] = s[v] - (t[u] / 2 - r[u] / 2);
        break;
      case Ae:
        s[v] = s[v] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function Se(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, l = a === void 0 ? e.strategy : a, i = r.boundary, s = i === void 0 ? qn : i, v = r.rootBoundary, u = v === void 0 ? yr : v, c = r.elementContext, f = c === void 0 ? Ee : c, d = r.altBoundary, h = d === void 0 ? !1 : d, P = r.padding, E = P === void 0 ? 0 : P, p = Er(typeof E != "number" ? E : Pr(E, Ne)), w = f === Ee ? zn : Ee, y = e.rects.popper, g = e.elements[h ? w : f], O = Po(fe(g) ? g : g.contextElement || re(e.elements.popper), s, u, l), C = ye(e.elements.reference), T = Tr({
    reference: C,
    element: y,
    strategy: "absolute",
    placement: o
  }), S = it(Object.assign({}, y, T)), R = f === Ee ? S : C, x = {
    top: O.top - R.top + p.top,
    bottom: R.bottom - O.bottom + p.bottom,
    left: O.left - R.left + p.left,
    right: R.right - O.right + p.right
  }, A = e.modifiersData.offset;
  if (f === Ee && A) {
    var I = A[o];
    Object.keys(x).forEach(function(b) {
      var q = [F, V].indexOf(b) >= 0 ? 1 : -1, ne = [B, V].indexOf(b) >= 0 ? "y" : "x";
      x[b] += I[ne] * q;
    });
  }
  return x;
}
function Co(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, v = s === void 0 ? gt : s, u = be(n), c = u ? i ? qt : qt.filter(function(h) {
    return be(h) === u;
  }) : Ne, f = c.filter(function(h) {
    return v.indexOf(h) >= 0;
  });
  f.length === 0 && (f = c, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h, P) {
    return h[P] = Se(e, {
      placement: P,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[H(P)], h;
  }, {});
  return Object.keys(d).sort(function(h, P) {
    return d[h] - d[P];
  });
}
function To(e) {
  if (H(e) === Ye)
    return [];
  var t = Fe(e);
  return [Kt(e), t, Kt(t)];
}
function Ao(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, v = r.padding, u = r.boundary, c = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, P = r.allowedAutoPlacements, E = t.options.placement, p = H(E), w = p === E, y = s || (w || !h ? [Fe(E)] : To(E)), g = [E].concat(y).reduce(function(de, J) {
      return de.concat(H(J) === Ye ? Co(t, {
        placement: J,
        boundary: u,
        rootBoundary: c,
        padding: v,
        flipVariations: h,
        allowedAutoPlacements: P
      }) : J);
    }, []), O = t.rects.reference, C = t.rects.popper, T = /* @__PURE__ */ new Map(), S = !0, R = g[0], x = 0; x < g.length; x++) {
      var A = g[x], I = H(A), b = be(A) === me, q = [B, V].indexOf(I) >= 0, ne = q ? "width" : "height", k = Se(t, {
        placement: A,
        boundary: u,
        rootBoundary: c,
        altBoundary: f,
        padding: v
      }), z = q ? b ? F : j : b ? V : B;
      O[ne] > C[ne] && (z = Fe(z));
      var De = Fe(z), oe = [];
      if (a && oe.push(k[I] <= 0), i && oe.push(k[z] <= 0, k[De] <= 0), oe.every(function(de) {
        return de;
      })) {
        R = A, S = !1;
        break;
      }
      T.set(A, oe);
    }
    if (S)
      for (var Me = h ? 3 : 1, Xe = function(J) {
        var Oe = g.find(function(je) {
          var ae = T.get(je);
          if (ae)
            return ae.slice(0, J).every(function(Je) {
              return Je;
            });
        });
        if (Oe)
          return R = Oe, "break";
      }, we = Me; we > 0; we--) {
        var Be = Xe(we);
        if (Be === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const So = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ao,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yt(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Gt(e) {
  return [B, F, V, j].some(function(t) {
    return e[t] >= 0;
  });
}
function Ro(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, l = Se(t, {
    elementContext: "reference"
  }), i = Se(t, {
    altBoundary: !0
  }), s = Yt(l, n), v = Yt(i, o, a), u = Gt(s), c = Gt(v);
  t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: v,
    isReferenceHidden: u,
    hasPopperEscaped: c
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": c
  });
}
const xo = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ro
};
function Io(e, t, r) {
  var n = H(e), o = [j, B].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = a[0], i = a[1];
  return l = l || 0, i = (i || 0) * o, [j, F].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function No(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, l = gt.reduce(function(u, c) {
    return u[c] = Io(c, t.rects, a), u;
  }, {}), i = l[t.placement], s = i.x, v = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += v), t.modifiersData[n] = l;
}
const $o = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: No
};
function Do(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Tr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Do,
  data: {}
};
function Bo(e) {
  return e === "x" ? "y" : "x";
}
function jo(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !1 : l, s = r.boundary, v = r.rootBoundary, u = r.altBoundary, c = r.padding, f = r.tether, d = f === void 0 ? !0 : f, h = r.tetherOffset, P = h === void 0 ? 0 : h, E = Se(t, {
    boundary: s,
    rootBoundary: v,
    padding: c,
    altBoundary: u
  }), p = H(t.placement), w = be(t.placement), y = !w, g = yt(p), O = Bo(g), C = t.modifiersData.popperOffsets, T = t.rects.reference, S = t.rects.popper, R = typeof P == "function" ? P(Object.assign({}, t.rects, {
    placement: t.placement
  })) : P, x = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!C) {
    if (a) {
      var b, q = g === "y" ? B : j, ne = g === "y" ? V : F, k = g === "y" ? "height" : "width", z = C[g], De = z + E[q], oe = z - E[ne], Me = d ? -S[k] / 2 : 0, Xe = w === me ? T[k] : S[k], we = w === me ? -S[k] : -T[k], Be = t.elements.arrow, de = d && Be ? ht(Be) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Or(), Oe = J[q], je = J[ne], ae = Pe(0, T[k], de[k]), Je = y ? T[k] / 2 - Me - ae - Oe - x.mainAxis : Xe - ae - Oe - x.mainAxis, xr = y ? -T[k] / 2 + Me + ae + je + x.mainAxis : we + ae + je + x.mainAxis, Qe = t.elements.arrow && $e(t.elements.arrow), Ir = Qe ? g === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, Et = (b = A == null ? void 0 : A[g]) != null ? b : 0, Nr = z + Je - Et - Ir, $r = z + xr - Et, Pt = Pe(d ? Ke(De, Nr) : De, z, d ? ce(oe, $r) : oe);
      C[g] = Pt, I[g] = Pt - z;
    }
    if (i) {
      var Ct, Dr = g === "x" ? B : j, Mr = g === "x" ? V : F, ie = C[O], ke = O === "y" ? "height" : "width", Tt = ie + E[Dr], At = ie - E[Mr], Ze = [B, j].indexOf(p) !== -1, St = (Ct = A == null ? void 0 : A[O]) != null ? Ct : 0, Rt = Ze ? Tt : ie - T[ke] - S[ke] - St + x.altAxis, xt = Ze ? ie + T[ke] + S[ke] - St - x.altAxis : At, It = d && Ze ? ao(Rt, ie, xt) : Pe(d ? Rt : Tt, ie, d ? xt : At);
      C[O] = It, I[O] = It - ie;
    }
    t.modifiersData[n] = I;
  }
}
const ko = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: jo,
  requiresIfExists: ["offset"]
};
function Lo(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _o(e) {
  return e === W(e) || !L(e) ? bt(e) : Lo(e);
}
function Vo(e) {
  var t = e.getBoundingClientRect(), r = he(t.width) / e.offsetWidth || 1, n = he(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Fo(e, t, r) {
  r === void 0 && (r = !1);
  var n = L(t), o = L(t) && Vo(t), a = re(t), l = ye(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Y(t) !== "body" || Ot(a)) && (i = _o(t)), L(t) ? (s = ye(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = wt(a))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Wo(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && o(s);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function qo(e) {
  var t = Wo(e);
  return ot.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function zo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Q(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(o, a) {
    return o.replace(/%s/, a);
  }, e);
}
var le = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ho = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Xt = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ko(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Xt).filter(function(r, n, o) {
      return o.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Q(le, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Q(le, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          ot.indexOf(t.phase) < 0 && console.error(Q(le, t.name, '"phase"', "either " + ot.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Q(le, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Q(le, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Q(le, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Q(le, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Xt.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(Q(Ho, String(t.name), n, n));
      });
    });
  });
}
function Uo(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function Yo(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Jt = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Go = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Qt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Zt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Xo(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Qt : o;
  return function(i, s, v) {
    v === void 0 && (v = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qt, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, d = {
      state: u,
      setOptions: function(p) {
        var w = typeof p == "function" ? p(u.options) : p;
        P(), u.options = Object.assign({}, a, u.options, w), u.scrollParents = {
          reference: fe(i) ? Ce(i) : i.contextElement ? Ce(i.contextElement) : [],
          popper: Ce(s)
        };
        var y = qo(Yo([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = y.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var g = Uo([].concat(y, u.options.modifiers), function(A) {
            var I = A.name;
            return I;
          });
          if (Ko(g), H(u.options.placement) === Ye) {
            var O = u.orderedModifiers.find(function(A) {
              var I = A.name;
              return I === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var C = K(s), T = C.marginTop, S = C.marginRight, R = C.marginBottom, x = C.marginLeft;
          [T, S, R, x].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var p = u.elements, w = p.reference, y = p.popper;
          if (!Zt(w, y)) {
            process.env.NODE_ENV !== "production" && console.error(Jt);
            return;
          }
          u.rects = {
            reference: Fo(w, $e(y), u.options.strategy === "fixed"),
            popper: ht(y)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
            return u.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var g = 0, O = 0; O < u.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(Go);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, O = -1;
              continue;
            }
            var C = u.orderedModifiers[O], T = C.fn, S = C.options, R = S === void 0 ? {} : S, x = C.name;
            typeof T == "function" && (u = T({
              state: u,
              options: R,
              name: x,
              instance: d
            }) || u);
          }
        }
      },
      update: zo(function() {
        return new Promise(function(E) {
          d.forceUpdate(), E(u);
        });
      }),
      destroy: function() {
        P(), f = !0;
      }
    };
    if (!Zt(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Jt), d;
    d.setOptions(v).then(function(E) {
      !f && v.onFirstUpdate && v.onFirstUpdate(E);
    });
    function h() {
      u.orderedModifiers.forEach(function(E) {
        var p = E.name, w = E.options, y = w === void 0 ? {} : w, g = E.effect;
        if (typeof g == "function") {
          var O = g({
            state: u,
            name: p,
            instance: d,
            options: y
          }), C = function() {
          };
          c.push(O || C);
        }
      });
    }
    function P() {
      c.forEach(function(E) {
        return E();
      }), c = [];
    }
    return d;
  };
}
var Jo = [mo, Mo, vo, ro, $o, So, ko, uo, xo], Qo = /* @__PURE__ */ Xo({
  defaultModifiers: Jo
});
const Zo = ["fixed", "absolute"], ea = G({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: M(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: gt,
    default: "bottom"
  },
  popperOptions: {
    type: M(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Zo,
    default: "absolute"
  }
}), Ar = G({
  ...ea,
  id: String,
  style: {
    type: M([String, Array, Object])
  },
  className: {
    type: M([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: M([String, Array, Object])
  },
  popperStyle: {
    type: M([String, Array, Object])
  },
  referenceEl: {
    type: M(Object)
  },
  triggerTargetEl: {
    type: M(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), er = (e, t) => {
  const { placement: r, strategy: n, popperOptions: o } = e, a = {
    placement: r,
    strategy: n,
    ...o,
    modifiers: ra(e)
  };
  return na(a, t), oa(a, o == null ? void 0 : o.modifiers), a;
}, ta = (e) => {
  if (!!Z)
    return ue(e);
};
function ra(e) {
  const { offset: t, gpuAcceleration: r, fallbackPlacements: n } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t != null ? t : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: n != null ? n : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: r,
        adaptive: r
      }
    }
  ];
}
function na(e, { arrowEl: t, arrowOffset: r }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: r != null ? r : 5
    }
  });
}
function oa(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t != null ? t : []]);
}
const aa = D({
  name: "VrPopperContent"
}), ia = /* @__PURE__ */ D({
  ...aa,
  props: Ar,
  emits: ["mouseenter", "mouseleave"],
  setup(e, { expose: t }) {
    const r = e, { popperInstanceRef: n, contentRef: o, triggerRef: a } = te(
      ft,
      void 0
    ), { nextZIndex: l } = Rn(), i = Ie("popper"), s = $(), v = $(), u = $();
    Re(cr, {
      arrowRef: v,
      arrowOffset: u
    });
    const c = $(r.zIndex || l()), f = N(
      () => ta(r.referenceEl) || m(a)
    ), d = N(
      () => [{ zIndex: m(c) }, r.popperStyle]
    ), h = N(() => [
      i.b(),
      i.is("pure", r.pure),
      i.is(r.effect),
      r.popperClass
    ]), P = ({
      referenceEl: w,
      popperContentEl: y,
      arrowEl: g
    }) => {
      const O = er(r, {
        arrowEl: g,
        arrowOffset: m(u)
      });
      return Qo(w, y, O);
    }, E = (w = !0) => {
      var y;
      (y = m(n)) == null || y.update(), w && (c.value = r.zIndex || l());
    }, p = () => {
      var y, g;
      const w = { name: "eventListeners", enabled: r.visible };
      (g = (y = m(n)) == null ? void 0 : y.setOptions) == null || g.call(y, (O) => ({
        ...O,
        modifiers: [...O.modifiers || [], w]
      })), E(!1);
    };
    return lt(() => {
      let w;
      _(
        f,
        (y) => {
          var O;
          w == null || w();
          const g = m(n);
          if ((O = g == null ? void 0 : g.destroy) == null || O.call(g), y) {
            const C = m(s);
            o.value = C, n.value = P({
              referenceEl: y,
              popperContentEl: C,
              arrowEl: m(v)
            }), w = _(
              () => y.getBoundingClientRect(),
              () => E(),
              {
                immediate: !0
              }
            );
          } else
            n.value = void 0;
        },
        {
          immediate: !0
        }
      ), _(() => r.visible, p, { immediate: !0 }), _(
        () => er(r, {
          arrowEl: m(v),
          arrowOffset: m(u)
        }),
        (y) => {
          var g;
          return (g = n.value) == null ? void 0 : g.setOptions(y);
        }
      );
    }), t({
      popperContentRef: s,
      popperInstanceRef: n,
      updatePopper: E,
      contentStyle: d
    }), (w, y) => (U(), We("div", {
      ref_key: "popperContentRef",
      ref: s,
      style: qr(m(d)),
      class: ut(m(h)),
      role: "tooltip",
      onMouseenter: y[0] || (y[0] = (g) => w.$emit("mouseenter", g)),
      onMouseleave: y[1] || (y[1] = (g) => w.$emit("mouseleave", g))
    }, [
      ee(w.$slots, "default")
    ], 38));
  }
}), sa = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], la = G({
  role: {
    type: String,
    values: sa,
    default: "tooltip"
  }
}), ua = ct(kn), pa = Ie("tooltip"), Sr = G({
  ...mn,
  ...Ar,
  appendTo: {
    type: M([String, Object]),
    default: vr
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: M(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${pa.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Rr = G({
  ...hr,
  disabled: Boolean,
  trigger: {
    type: M([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: M(Array),
    default: () => [Ft.enter, Ft.space]
  }
}), {
  useModelToggleProps: ca,
  useModelToggleEmits: fa,
  useModelToggle: da
} = Nn("visible"), va = G({
  ...la,
  ...ca,
  ...Sr,
  ...Rr,
  ...gr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ga = [
  ...fa,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], ma = (e, t) => Qr(e) ? e.includes(t) : e === t, ve = (e, t, r) => (n) => {
  ma(m(e), t) && r(n);
}, ha = D({
  name: "VrTooltipTrigger"
}), ya = /* @__PURE__ */ D({
  ...ha,
  props: Rr,
  setup(e, { expose: t }) {
    const r = e, n = Ie("tooltip"), { controlled: o, id: a, open: l, onOpen: i, onClose: s, onToggle: v } = te(
      dt,
      void 0
    ), u = $(null), c = () => m(o) || r.disabled, f = Ve(r, "trigger"), d = X(
      c,
      ve(f, "hover", i)
    ), h = X(
      c,
      ve(f, "hover", s)
    ), P = X(
      c,
      ve(f, "click", (g) => {
        g.button === 0 && v(g);
      })
    ), E = X(
      c,
      ve(f, "focus", i)
    ), p = X(
      c,
      ve(f, "focus", s)
    ), w = X(
      c,
      ve(f, "contextmenu", (g) => {
        g.preventDefault(), v(g);
      })
    ), y = X(
      c,
      (g) => {
        const { code: O } = g;
        r.triggerKeys.includes(O) && (g.preventDefault(), v(g));
      }
    );
    return t({
      triggerRef: u
    }), (g, O) => (U(), ge(m(Wn), {
      id: m(a),
      "virtual-ref": g.virtualRef,
      open: m(l),
      "virtual-triggering": g.virtualTriggering,
      class: ut(m(n).e("trigger")),
      onBlur: m(p),
      onClick: m(P),
      onContextmenu: m(w),
      onFocus: m(E),
      onMouseenter: m(d),
      onMouseleave: m(h),
      onKeydown: m(y)
    }, {
      default: pe(() => [
        ee(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
}), ba = D({
  name: "VrTooltipContent",
  inheritAttrs: !1
}), wa = /* @__PURE__ */ D({
  ...ba,
  props: Sr,
  setup(e, { expose: t }) {
    const r = e, n = $(null), o = $(!1), {
      controlled: a,
      id: l,
      open: i,
      trigger: s,
      onClose: v,
      onOpen: u,
      onShow: c,
      onHide: f,
      onBeforeShow: d,
      onBeforeHide: h
    } = te(dt, void 0), P = N(() => process.env.NODE_ENV === "development" ? !0 : r.persistent);
    tr(() => {
      o.value = !0;
    });
    const E = N(() => m(P) ? !0 : m(i)), p = N(() => r.disabled ? !1 : m(i)), w = N(() => {
      var b;
      return (b = r.style) != null ? b : {};
    }), y = N(() => !m(i)), g = () => {
      f();
    }, O = () => {
      if (m(a))
        return !0;
    }, C = X(O, () => {
      r.enterable && m(s) === "hover" && u();
    }), T = X(O, () => {
      m(s) === "hover" && v();
    }), S = () => {
      var b, q;
      (q = (b = n.value) == null ? void 0 : b.updatePopper) == null || q.call(b), d == null || d();
    }, R = () => {
      h == null || h();
    }, x = () => {
      c(), I = on(
        N(() => {
          var b;
          return (b = n.value) == null ? void 0 : b.popperContentRef;
        }),
        () => {
          if (m(a))
            return;
          m(s) !== "hover" && v();
        }
      );
    }, A = () => {
      r.virtualTriggering || v();
    };
    let I;
    return _(
      () => m(i),
      (b) => {
        b || I == null || I();
      },
      {
        flush: "post"
      }
    ), t({
      contentRef: n
    }), (b, q) => (U(), ge(zr, {
      disabled: !b.teleported,
      to: b.appendTo
    }, [
      qe(Hr, {
        name: b.transition,
        onAfterLeave: g,
        onBeforeEnter: S,
        onAfterEnter: x,
        onBeforeLeave: R
      }, {
        default: pe(() => [
          m(E) ? rr((U(), ge(m(ia), nr({
            key: 0,
            id: m(l),
            ref_key: "contentRef",
            ref: n
          }, b.$attrs, {
            "aria-label": b.ariaLabel,
            "aria-hidden": m(y),
            "boundaries-padding": b.boundariesPadding,
            "fallback-placements": b.fallbackPlacements,
            "gpu-acceleration": b.gpuAcceleration,
            offset: b.offset,
            placement: b.placement,
            "popper-options": b.popperOptions,
            strategy: b.strategy,
            effect: b.effect,
            enterable: b.enterable,
            pure: b.pure,
            "popper-class": b.popperClass,
            "popper-style": [b.popperStyle, m(w)],
            "reference-el": b.referenceEl,
            "trigger-target-el": b.triggerTargetEl,
            visible: m(p),
            "z-index": b.zIndex,
            onMouseenter: m(C),
            onMouseleave: m(T),
            onBlur: A,
            onClose: m(v)
          }), {
            default: pe(() => [
              o.value ? Te("", !0) : ee(b.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Kr, m(p)]
          ]) : Te("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
}), Oa = ["innerHTML"], Ea = { key: 1 }, Pa = D({
  name: "VrTooltip"
}), Ca = /* @__PURE__ */ D({
  ...Pa,
  props: va,
  emits: ga,
  setup(e, { expose: t, emit: r }) {
    const n = e;
    Sn();
    const o = Cn(), a = $(), l = $(), i = () => {
      var w;
      const p = m(a);
      p && ((w = p.popperInstanceRef) == null || w.update());
    }, s = $(!1), v = $(), { show: u, hide: c, hasUpdateHandler: f } = da({
      indicator: s,
      toggleReason: v
    }), { onOpen: d, onClose: h } = hn({
      showAfter: Ve(n, "showAfter"),
      hideAfter: Ve(n, "hideAfter"),
      open: u,
      close: c
    }), P = N(
      () => or(n.visible) && !f.value
    );
    Re(dt, {
      controlled: P,
      id: o,
      open: Ur(s),
      trigger: Ve(n, "trigger"),
      onOpen: (p) => {
        d(p);
      },
      onClose: (p) => {
        h(p);
      },
      onToggle: (p) => {
        m(s) ? h(p) : d(p);
      },
      onShow: () => {
        r("show", v.value);
      },
      onHide: () => {
        r("hide", v.value);
      },
      onBeforeShow: () => {
        r("before-show", v.value);
      },
      onBeforeHide: () => {
        r("before-hide", v.value);
      },
      updatePopper: i
    }), _(
      () => n.disabled,
      (p) => {
        p && s.value && (s.value = !1);
      }
    );
    const E = () => {
      var w, y;
      const p = (y = (w = l.value) == null ? void 0 : w.contentRef) == null ? void 0 : y.popperContentRef;
      return p && p.contains(document.activeElement);
    };
    return Yr(() => s.value && c()), t({
      popperRef: a,
      contentRef: l,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: d,
      onClose: h,
      hide: c
    }), (p, w) => (U(), ge(m(ua), {
      ref_key: "popperRef",
      ref: a,
      role: p.role
    }, {
      default: pe(() => [
        qe(ya, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: pe(() => [
            p.$slots.default ? ee(p.$slots, "default", { key: 0 }) : Te("", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        qe(wa, {
          ref_key: "contentRef",
          ref: l,
          "aria-label": p.ariaLabel,
          "boundaries-padding": p.boundariesPadding,
          content: p.content,
          disabled: p.disabled,
          effect: p.effect,
          enterable: p.enterable,
          "fallback-placements": p.fallbackPlacements,
          "hide-after": p.hideAfter,
          "gpu-acceleration": p.gpuAcceleration,
          offset: p.offset,
          persistent: p.persistent,
          "popper-class": p.popperClass,
          "popper-style": p.popperStyle,
          placement: p.placement,
          "popper-options": p.popperOptions,
          pure: p.pure,
          "raw-content": p.rawContent,
          "reference-el": p.referenceEl,
          "trigger-target-el": p.triggerTargetEl,
          "show-after": p.showAfter,
          strategy: p.strategy,
          teleported: p.teleported,
          transition: p.transition,
          "virtual-triggering": p.virtualTriggering,
          "z-index": p.zIndex,
          "append-to": p.appendTo
        }, {
          default: pe(() => [
            ee(p.$slots, "content", {}, () => [
              p.rawContent ? (U(), We("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, Oa)) : (U(), We("span", Ea, Gr(p.content), 1))
            ]),
            p.showArrow ? (U(), ge(m(_n), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : Te("", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
const Sa = ct(Ca);
export {
  Aa as ElConfigProvider,
  Sa as VrTooltip,
  Mn as configProviderProps,
  Sr as tooltipContentProps,
  ga as tooltipEmits,
  da as tooltipModelToggle,
  fa as tooltipModelToggleEmits,
  ca as tooltipModelToggleProps,
  va as tooltipProps,
  Rr as tooltipTriggerProps
};
