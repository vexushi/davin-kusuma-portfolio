import { a as et, e as tt } from "./chunk-CWJYEZLE.mjs";
import { a as be } from "./chunk-SCCCCPCG.mjs";
import { Ne as Ue, cq as Xe, f as ve } from "./chunk-KHAT6QH3.mjs";
import { a as lt } from "./chunk-4CRCSXOD.mjs";
import { w as at } from "./chunk-SE3U3U7E.mjs";
import { a as pt, b as mt, h as vt } from "./chunk-4JSNULIX.mjs";
import { a as rt } from "./chunk-Z4MG5GB5.mjs";
import { a as Qe } from "./chunk-N2DJHBJE.mjs";
import { a as gt } from "./chunk-IGLMIHM7.mjs";
import { a as xe } from "./chunk-WPWSHZF5.mjs";
import { a as Ze } from "./chunk-SYL6OKHD.mjs";
import { a as ct, b as dt } from "./chunk-P6Q3LWLD.mjs";
import { a as nt, b as re } from "./chunk-POPDNPJQ.mjs";
import { a as ut, b as ft } from "./chunk-TS24LVSZ.mjs";
import { a as it } from "./chunk-VD6KMVU6.mjs";
import { a as ot } from "./chunk-NXG7JCO3.mjs";
import { b as Je } from "./chunk-76VYM4R7.mjs";
import { e as oe } from "./chunk-IBBQFOLQ.mjs";
import { b as _e } from "./chunk-3PIOJLHR.mjs";
import { a as Ge, b as N } from "./chunk-EWVTS3IL.mjs";
import { a as st } from "./chunk-AHBUMA74.mjs";
import { b as ht } from "./chunk-RQ3QEXNF.mjs";
import { a as R } from "./chunk-QFU6OGL3.mjs";
import { h as ge, ya as he } from "./chunk-VED5QBJM.mjs";
import { c as U, g as te } from "./chunk-2YDXRHM5.mjs";
import { a as ne } from "./chunk-XQSJQJWX.mjs";
import { a as Ye } from "./chunk-RNHTTH2C.mjs";
import { a as $e } from "./chunk-SMHMQ5IL.mjs";
import { b as qe } from "./chunk-YSP5ZHDJ.mjs";
import { a as E } from "./chunk-2FCXHKEL.mjs";
import { b as q, e as S, f as je, n as ze, p as ae } from "./chunk-Y3GZLMBF.mjs";
import { a as W } from "./chunk-SWYZG2NI.mjs";
import { c as Ke } from "./chunk-4JY5UMT2.mjs";
import { m as Ae } from "./chunk-I5EFRSXX.mjs";
import { q as He } from "./chunk-VHFKZWVR.mjs";
import { e as h } from "./chunk-WLHSDIGQ.mjs";
var _ = h(W());
var Pe = h(E()),
  bt = (t) =>
    (0, Pe.jsx)("svg", {
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      fill: "none",
      ...t,
      children: (0, Pe.jsx)("path", {
        d: "M7.25 2.5 4.457 5.293a1 1 0 0 0 0 1.414L7.25 9.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
      }),
    });
var xt = "s1enscsq",
  Pt = "n3d3rfb",
  yt = "n1nrp7h4",
  ye = "t2qearp",
  we = "o1abtuq3",
  Re = "ozo04t6",
  wt = "n117cay8",
  Rt = "n1bfwbcs",
  It = "t1lmiiaw",
  Et = "n1ukogre",
  Ct = "fkp7u3w",
  Ie = "n171mkxi",
  Ee = "nrmwyvr";
var Tt = [
  "button:not(:disabled):not([tabindex='-1'])",
  "[href]:not([tabindex='-1'])",
  "input:not(:disabled):not([tabindex='-1'])",
  "select:not(:disabled):not([tabindex='-1'])",
  "textarea:not(:disabled):not([tabindex='-1'])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");
function Ce(t) {
  return t.matches(Tt);
}
function kt(t) {
  return t ? Array.from(t.querySelectorAll(Tt)) : [];
}
function xn(t, { preventScroll: e = !1, onFocus: o } = {}) {
  return !t || !Ce(t) ? !1 : re(t, { preventScroll: e, onFocus: o });
}
var w = h(E()),
  se = _.default.createContext(null);
se.displayName = "NavigationStackItemContext";
var yo = (t) => t,
  le = ({
    stack: t,
    currentIndex: e,
    onBack: o,
    onClose: n,
    renderNavigationBarWrapper: r = yo,
    navigationBarHidden: a = !1,
  }) => {
    nt();
    let i = t[e],
      l = e > 0,
      u = i?.displayDivider !== !0,
      f = i?.toolbarAction,
      p = i?.autoFocusInside ?? !0,
      d = _.default.useRef(null),
      m = t[e + 1]?.triggerRef,
      g = _.default.useCallback(
        (c) => {
          if (!(c instanceof HTMLElement) || c.contains(document.activeElement) || !p) return;
          let v = c.getAttribute("data-transition-index");
          if (Number(v) !== e) return;
          let s = m?.current;
          if (s instanceof HTMLElement && Ce(s) && c.contains(s)) {
            he.render(() => {
              re(s);
            });
            return;
          }
          let P = wo(c);
          P &&
            he.render(() => {
              re(P);
            });
        },
        [p, e, m]
      );
    return (
      _.default.useEffect(() => {
        let c = d.current;
        c && g(c);
      }, [e, i?.id, g]),
      (0, w.jsxs)(w.Fragment, {
        children: [
          !a &&
            r(
              (0, w.jsx)(Io, {
                disableDivider: u,
                toolbarAction: f,
                onBack: l ? o : void 0,
                onClose: n,
                children: (0, w.jsx)(Eo, { stack: t, currentIndex: e }),
              })
            ),
          (0, w.jsx)("div", {
            className: xt,
            children: t.map((c, v) => {
              let b = v === e;
              return (0, w.jsx)(
                se.Provider,
                {
                  value: c.id,
                  children: (0, w.jsx)(Ro, {
                    ref: b ? d : void 0,
                    index: v,
                    currentIndex: e,
                    inert: b ? void 0 : "",
                    "aria-hidden": b ? void 0 : !0,
                    children: c.element,
                  }),
                },
                c.id + c.timestamp
              );
            }),
          }),
        ],
      })
    );
  };
function wo(t) {
  let e = kt(t),
    o = e.filter((i) => !i.matches("button")),
    n = o.length > 0 ? o : e,
    r,
    a = -1;
  for (let i of n) {
    let l = i.tabIndex;
    l > a && ((r = i), (a = l));
  }
  return r;
}
var Ro = _.default.forwardRef(function (
  { index: e, currentIndex: o, inert: n, "aria-hidden": r, children: a },
  i
) {
  return (0, w.jsx)("div", {
    ref: i,
    "data-transition-index": e,
    inert: n,
    "aria-hidden": r,
    className: R(Pt, e === o && yt, e < o && we, e < o && ye, e > o && Re),
    children: a,
  });
});
function Io({ disableDivider: t, toolbarAction: e, onBack: o, onClose: n, children: r }) {
  return (0, w.jsx)(_e, {
    children: (0, w.jsxs)(ot, {
      className: R(wt, !t && Rt),
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 0,
      children: [
        (0, w.jsx)(oe, {
          variant: "clean",
          title: "Back",
          onClick: o,
          className: R(xe, Ie, !o && Ee),
          tabIndex: o ? 0 : -1,
          children: (0, w.jsx)(bt, {}),
        }),
        r,
        e ??
          (0, w.jsx)(oe, {
            variant: "clean",
            title: "Close",
            onClick: n,
            className: R(xe, Ie, !n && Ee),
            children: (0, w.jsx)(Ze, {}),
          }),
      ],
    }),
  });
}
function Ot({ index: t, currentIndex: e, stackItem: o }) {
  return (0, w.jsx)("div", {
    className: R(It, !o.centerTitle && t === 0 && Ct, t !== e && ye, t < e && we, t > e && Re),
    children: (0, w.jsx)("span", { className: R(t === e && Et), children: o.title }),
  });
}
function Sn({ title: t }) {
  return (0, w.jsx)(Ot, {
    index: 0,
    currentIndex: 0,
    stackItem: { id: "1", title: t, timestamp: 0, element: (0, w.jsx)("div", { children: t }) },
  });
}
function Eo({ currentIndex: t, stack: e }) {
  return (0, w.jsx)(w.Fragment, {
    children: e.map((o, n) => (0, w.jsx)(Ot, { index: n, currentIndex: t, stackItem: o }, o.id)),
  });
}
var z = h(W(), 1);
var L = h(W());
var Mt = "m1hscir8",
  St = "m1qod7cs";
var de = h(E()),
  ce = L.default.forwardRef(function (e, o) {
    let {
        onDrag: n,
        onDragStart: r,
        onDragEnd: a,
        children: i,
        className: l,
        cursor: u,
        enabled: f = !0,
        ...p
      } = e,
      d = L.default.useRef(null),
      m = it(d, o),
      g = { onDrag: n, onDragEnd: a, onDragStart: r },
      c = L.default.useRef(g);
    c.current = g;
    let v = L.default.useRef(!1),
      b = L.default.useRef(null),
      [s, P] = L.default.useState(null),
      x = L.default.useContext(lt),
      [, C] = L.default.useState(0),
      H = L.default.useCallback(
        (k) => {
          if (!Qe.isOnlyLeftMouseClick(k) || !f) return;
          v.current = !1;
          let y = { x: k.clientX, y: k.clientY },
            O = Wt(k.nativeEvent, d, y);
          ((b.current = O),
            !(!y || !O) &&
              (x.mouseTrackerWillStart && x.mouseTrackerWillStart(), r && r(O), n(O), P(y)));
        },
        [x, r, n, f]
      );
    return (
      L.default.useLayoutEffect(() => {
        if (!s) return;
        if (!f) {
          P(null);
          return;
        }
        let k = !1,
          y = () => {
            ((k = !0), P(null));
          },
          O = (T) => {
            T.key === "Escape" && y();
          },
          I = (T) => {
            if ((T.key !== "Shift" && T.key !== "Alt") || !v.current) return;
            let D = b.current;
            if (!D) return;
            let j = { ...D, shiftKey: T.shiftKey, altKey: T.altKey };
            ((b.current = j), c.current.onDrag(j));
          },
          A = (T) => {
            let D = Wt(T, d, s);
            if ((T.preventDefault(), !D)) {
              P(null);
              return;
            }
            if (!v.current) {
              let j = Math.abs(D.offset.x) > 1 || Math.abs(D.offset.y) > 1;
              ((v.current = j), C((X) => X + 1));
            }
            ((b.current = D), c.current.onDrag(D));
          };
        return (
          window.addEventListener("mousemove", A),
          window.addEventListener("mouseup", y, !0),
          window.addEventListener("contextmenu", y),
          window.addEventListener("keydown", O),
          window.addEventListener("keyup", O),
          window.addEventListener("keydown", I),
          window.addEventListener("keyup", I),
          () => {
            (window.removeEventListener("mousemove", A),
              window.removeEventListener("mouseup", y, !0),
              window.removeEventListener("contextmenu", y),
              window.removeEventListener("keydown", O),
              window.removeEventListener("keyup", O),
              window.removeEventListener("keydown", I),
              window.removeEventListener("keyup", I));
            let T = b.current;
            (k
              ? (c.current.onDragEnd?.(T), x.mouseTrackerDidEnd?.())
              : queueMicrotask(() => {
                  (c.current.onDragEnd?.(T), x.mouseTrackerDidEnd?.());
                }),
              (b.current = null),
              (v.current = !1));
          }
        );
      }, [s, x, f]),
      (0, de.jsxs)("div", {
        ref: m,
        draggable: !1,
        className: R(l, St),
        ...p,
        onMouseDown: H,
        children: [
          i,
          s &&
            v.current &&
            (0, de.jsx)("div", { style: u ? { cursor: u } : void 0, className: Mt }),
        ],
      })
    );
  });
function Wt(t, e, o) {
  let n = e.current;
  if (!n) return null;
  let { clientX: r, clientY: a } = t,
    i = { x: r, y: a },
    l = { x: r - o.x, y: a - o.y },
    u = n.getBoundingClientRect(),
    f = r - u.left,
    p = a - u.top,
    d = n.clientWidth || 1,
    m = n.clientHeight || 1;
  ((f = Math.max(0, Math.min(f, d))), (p = Math.max(0, Math.min(p, m))));
  let g = { x: f / d, y: p / m };
  return { client: i, offset: l, progress: g, shiftKey: t.shiftKey, altKey: t.altKey };
}
var ue = h(W(), 1);
function To(t) {
  try {
    return q(t) ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function Te(t, e) {
  let o = localStorage.getItem(t),
    n = To(o);
  return e(n) ? n : null;
}
function $n(t, e) {
  let [o] = (0, ue.useState)(() => Te(t, e)),
    n = (0, ue.useCallback)(
      (r) => {
        let a = JSON.stringify(r);
        localStorage.setItem(t, a);
      },
      [t]
    );
  return [o, n];
}
var Y = h(W(), 1);
var Dt = "wuk326o",
  Nt = "n283lgw",
  Lt = "pue1ity";
var B = h(E(), 1),
  Bt = 0.1,
  ke = 9999999999999;
function Oo(t, e) {
  let r = e.width - t.width,
    a = e.height - t.height;
  return { minX: 0, minY: 0, maxX: r, maxY: a };
}
function Ft(t) {
  let e = t.trim(),
    o = parseInt(e);
  return S(o)
    ? e.endsWith("%")
      ? { value: o, unit: "%" }
      : e.endsWith("px")
        ? { value: o, unit: "px" }
        : null
    : null;
}
function Mo(t) {
  switch (t) {
    case "app":
      return "0px";
    case "toolbar":
      return "var(--framerInternalUI-chromeToolbarHeight)";
    case "canvas":
      return "var(--framerInternalUI-chromeMarginTop)";
    default:
      Ke(t);
  }
}
var fe = class extends Y.default.Component {
    containerRef = Y.default.createRef();
    contentWrapperRef = Y.default.createRef();
    static defaultProps = { visible: !0, constraintBy: "canvas" };
    setContainerRefs = (e) => {
      this.containerRef.current = e;
      let { containerRef: o } = this.props;
      o && (o.current = e);
    };
    setContentWrapperRefs = (e) => {
      this.contentWrapperRef.current = e;
      let { contentWrapperRef: o } = this.props;
      o && (o.current = e);
    };
    componentDidMount() {
      let { restorationKey: e } = this.props;
      if (!e) return;
      let o = Te(e, Vt);
      o && this.setFloatingWindowProperties(o);
    }
    render() {
      let {
          initialTopOffset: e,
          initialLeftOffset: o,
          rightInsetOverride: n,
          requiredContentWidth: r,
          visible: a,
          className: i,
          zIndex: l,
          constraintBy: u = "canvas",
          verticalConstraintBy: f = u,
        } = this.props,
        p = ke,
        d = 0,
        m = 1,
        g = 0,
        c = 1;
      if (q(e)) {
        let I = Ft(e);
        I &&
          (I.unit === "%"
            ? ((d = ge(0, 100, I.value)), (m = 100 - I.value))
            : I.unit === "px"
              ? ((p = I.value), (d = 1), (m = 0))
              : (I.unit, void 0));
      }
      if (q(o)) {
        let I = Ft(o);
        I?.unit === "%" && ((g = ge(0, 100, I.value)), (c = 100 - I.value));
      }
      let v = Je.css.panelPadding,
        b = Mo(f),
        s = f === "app" ? "0px" : "var(--framerInternalUI-chromeMarginBottom)",
        P = `calc(${p}px - ${b} - ${v})`,
        x = u === "app" ? "0px" : "var(--framerInternalUI-chromeMarginLeft)",
        H = n ?? (u === "app" ? "0px" : "var(--framerInternalUI-chromeMarginRight)"),
        k = `calc(${v} * 2)`,
        y = `calc(100vw - ${H} - ${k})`,
        O = r ? `min(${x}, max(0px, calc(${y} - ${r})))` : x;
      return (0, B.jsxs)("div", {
        ref: this.setContainerRefs,
        className: R(Nt, i),
        style: {
          position: "absolute",
          top: `calc(${b} + ${v})`,
          left: `calc(${O} + ${v})`,
          right: `calc(${H} + ${v})`,
          bottom: `calc(${s} + ${v})`,
          display: "flex",
          visibility: a ? "visible" : "hidden",
          flexDirection: "row",
          zIndex: l,
        },
        children: [
          (0, B.jsx)("div", { style: { width: 0, flexGrow: `var(--floating-window-left, ${g})` } }),
          (0, B.jsxs)("div", {
            style: { width: "auto", display: "flex", flexDirection: "column" },
            children: [
              (0, B.jsx)("div", {
                style: {
                  height: 0,
                  flexGrow: `var(--floating-window-top, ${d})`,
                  maxHeight: `var(--floating-window-fixed-top, ${P})`,
                },
              }),
              (0, B.jsx)("div", {
                ref: this.setContentWrapperRefs,
                onPointerDownCapture: this.props.onPointerDownCapture,
                draggable: !1,
                className: R(Lt, be),
                style: {
                  position: "relative",
                  height: "auto",
                  width: "auto",
                  maxHeight: "100%",
                  flexShrink: 0,
                  transform:
                    "translate(var(--floating-window-x, 0px), var(--floating-window-y, 0px))",
                  transition: "var(--floating-window-transform)",
                },
                children: (0, B.jsx)(Oe.Provider, { value: this, children: this.props.children }),
              }),
              (0, B.jsx)("div", {
                style: { height: 0, flexGrow: `var(--floating-window-bottom, ${m})` },
              }),
            ],
          }),
          (0, B.jsx)("div", {
            style: { width: 0, flexGrow: `var(--floating-window-right, ${c})` },
          }),
        ],
      });
    }
    hasMoved = !1;
    dragStartRect = null;
    getConstraintsRect = () => {
      let e = this.containerRef.current;
      return e ? e.getBoundingClientRect() : null;
    };
    getWindowRect = () => {
      let e = this.getConstraintsRect();
      if (!e) return null;
      let o = this.contentWrapperRef.current;
      if (!o) return null;
      let n = o.getBoundingClientRect();
      return { x: n.left - e.x, y: n.top - e.y, width: n.width, height: n.height };
    };
    onDragStart = (e) => {
      ((this.dragStartRect = this.getWindowRect()), (this.hasMoved = !1));
    };
    onDrag = (e) => {
      if (!this.dragStartRect) return;
      let o = this.getWindowRect();
      if (!o) return;
      let { width: n, height: r } = o;
      (!this.hasMoved && e.offset.x === 0 && e.offset.y === 0) ||
        ((this.hasMoved = !0),
        this.setRect(
          { ...ve.add(e.offset, this.dragStartRect), width: n, height: r },
          { rubberBandingEnabled: !0, snapToEdges: !0, fixedTop: !1 }
        ));
    };
    onDragEnd = (e) => {
      this.dragStartRect &&
        ((this.dragStartRect = null),
        this.hasMoved &&
          (this.setFloatingWindowProperties({
            x: 0,
            y: 0,
            transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
          }),
          this.props.onDragEnd?.()));
    };
    setPosition(e, { snapToEdges: o }) {
      let n = this.getConstraintsRect(),
        r = this.getWindowRect();
      if (!r || !n) return;
      let a = ve.subtract(e, n);
      this.setRect(
        { ...a, width: r.width, height: r.height },
        { rubberBandingEnabled: !1, fixedTop: !0, snapToEdges: o }
      );
    }
    setRect(e, { rubberBandingEnabled: o, snapToEdges: n, fixedTop: r }) {
      let a = this.getConstraintsRect();
      if (!a) return;
      let { minX: i, minY: l, maxX: u, maxY: f } = Oo(e, a),
        p = e.x,
        d = e.y;
      if (n) {
        let s = Math.abs(p - i),
          P = Math.abs(p - u),
          x = Math.abs(d - l),
          C = Math.abs(d - f);
        (s < 16 ? (p = i) : P < 16 && (p = u), x < 16 ? (d = l) : C < 16 && (d = f));
      }
      let m = 0,
        g = 0;
      (p <= i ? ((p = 0), (m = e.x - i)) : p >= u && (m = e.x - u),
        d < l ? ((d = l), (g = e.y - l)) : d >= f && (g = e.y - f));
      let c = 0,
        v = 0;
      o && ((c = m * Bt), (v = g * Bt));
      let b = Ho({ ...e, x: p, y: d }, a);
      this.setFloatingWindowProperties({
        top: r ? 1 : b.top,
        bottom: r ? 0 : b.bottom,
        fixedTop: r ? b.top : void 0,
        right: b.right,
        left: b.left,
        x: c,
        y: v,
        transition: "",
      });
    }
    setResizeRect({ top: e, right: o, bottom: n, left: r }) {
      this.setFloatingWindowProperties({
        top: e,
        right: o,
        bottom: n,
        left: r,
        fixedTop: void 0,
        x: 0,
        y: 0,
        transition: "",
      });
    }
    persistCurrentTopOffset = () => {
      let e = this.getWindowRect();
      e && this.setFloatingWindowProperties({ fixedTop: e.y, top: 1, bottom: 0 });
    };
    hasPersistedTopOffset = () => {
      let e = this.containerRef.current?.style.getPropertyValue("--floating-window-fixed-top"),
        o = parseInt(e || "");
      return S(o) && o !== ke;
    };
    setFloatingWindowProperties(e) {
      let o = this.containerRef.current;
      if (!o) return;
      let n = {};
      (S(e.top) && (n["--floating-window-top"] = e.top.toString()),
        S(e.right) && (n["--floating-window-right"] = e.right.toString()),
        S(e.bottom) && (n["--floating-window-bottom"] = e.bottom.toString()),
        S(e.left) && (n["--floating-window-left"] = e.left.toString()),
        S(e.fixedTop)
          ? (n["--floating-window-fixed-top"] = `${e.fixedTop}px`)
          : (n["--floating-window-fixed-top"] = `${ke}px`),
        S(e.x) && (n["--floating-window-x"] = `${e.x}px`),
        S(e.y) && (n["--floating-window-y"] = `${e.y}px`),
        q(e.transition) && (n["--floating-window-transform"] = e.transition));
      let r = Object.keys(n);
      for (let i of r) {
        let l = n[i];
        o.style.setProperty(i, l);
      }
      let { restorationKey: a } = this.props;
      if (a && Vt(e, { strict: !1 })) {
        let i = {
            top: e.top,
            bottom: e.bottom,
            left: e.left,
            right: e.right,
            fixedTop: e.fixedTop,
          },
          l = JSON.stringify(i);
        localStorage.setItem(a, l);
      }
    }
  },
  So = "top",
  Wo = "right",
  Do = "bottom",
  No = "left",
  Lo = "fixedTop",
  Bo = "x",
  Fo = "y",
  Vo = "transition";
function Vt(t, { strict: e } = { strict: !0 }) {
  if (
    !je(t) ||
    (e && (Bo in t || Fo in t || Vo in t)) ||
    !S(t[So]) ||
    !S(t[Wo]) ||
    !S(t[Do]) ||
    !S(t[No])
  )
    return !1;
  let o = t[Lo];
  return S(o) || ze(o);
}
var Oe = Y.default.createContext(null);
Oe.displayName = "ConstraintWindowContext";
var Ht = Y.default.forwardRef(function (e, o) {
  let n = Y.default.useContext(Oe);
  return (0, B.jsx)(ce, {
    ref: o,
    ...e,
    className: R(e.className, Dt, be),
    onDragStart: n?.onDragStart,
    onDrag: n?.onDrag || Ye,
    onDragEnd: n?.onDragEnd,
    cursor: "grabbing",
  });
});
function Ho(t, e) {
  let o = t.y,
    n = o + t.height,
    r = t.x,
    a = r + t.width,
    i = o,
    l = r,
    u = e.height - n,
    f = e.width - a;
  return { top: i, bottom: u, left: l, right: f };
}
var F = h(W(), 1);
var Se = h(W(), 1);
var Me = h(W(), 1),
  At = Me.default.createContext(!1),
  ar = At.Provider;
function Kt() {
  return Me.default.useContext(At);
}
var ie = Se.default.createContext(void 0);
ie.displayName = "VariableProviderInfoContext";
function hr(t = !0) {
  let e = U(),
    o = Kt(),
    n = Se.default.useContext(ie),
    r = tt(
      () => (!N(e) || o || !t ? null : e.stores.treeStore.variableProviderInfo),
      [o, t],
      "VariableProviderInfo"
    );
  return t ? (n !== void 0 ? n : r) : null;
}
function Ao(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  return !e || !n
    ? { variable: void 0, providerId: n }
    : { variable: e.combined.get(n)?.get(o), providerId: n };
}
function br(t, e) {
  let o = Ao(t, e);
  if (!e || t.providerId !== Ue) return o;
  let n = et(e);
  if (!n) return o;
  let r = e.combined.get(n.providerId)?.get(n.variableId);
  if (!r || !Xe(r)) return o;
  let a = r.itemVariables.find((i) => i.id === t.id);
  return !a || a.type === "divider"
    ? o
    : { variable: a, providerId: n.providerId, arrayVariableId: r.id };
}
function xr(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  if (!(!e || !n)) return e.combined.get(n)?.get(o);
}
var pe = h(W(), 1),
  We = (0, pe.createContext)(!1);
We.displayName = "ShaderControlContext";
var $t = We.Provider;
function jt() {
  return (0, pe.useContext)(We);
}
var M = h(W(), 1),
  Ut = h(E(), 1),
  De = (0, M.createContext)(() => () => {});
function wr(t, e) {
  let o = (0, M.useContext)(De),
    [n, r] = (0, M.useState)(!1);
  return (
    (0, M.useLayoutEffect)(
      () =>
        o((a) => {
          r(() =>
            t
              ? t.some((i) => a.variantOverrideKeys.has(i))
              : e
                ? e.some((i) => a.variantOverrideTraitTypes.has(i))
                : !1
          );
        }),
      [t, e, o]
    ),
    n
  );
}
function zt() {
  let t = (0, M.useContext)(De),
    [e, o] = (0, M.useState)({
      variantOverrideKeys: new Set(),
      variantOverrideTraitTypes: new Set(),
    });
  return (
    (0, M.useLayoutEffect)(
      () =>
        t((n) => {
          o(n);
        }),
      [t, o]
    ),
    e
  );
}
function qt({ children: t, variantOverrideTraitTypes: e, variantOverrideKeys: o }) {
  let n = (0, M.useRef)(),
    r = (0, M.useMemo)(() => {
      let a = new Set();
      return {
        listeners: a,
        addListener: (i) => {
          a.add(i);
          let l = n.current;
          return (
            l && i(l),
            () => {
              a.delete(i);
            }
          );
        },
      };
    }, []);
  return (
    (0, M.useLayoutEffect)(() => {
      let a = { variantOverrideTraitTypes: e, variantOverrideKeys: o };
      ((n.current = a), r.listeners.forEach((i) => i(a)));
    }, [r, o, e]),
    (0, Ut.jsx)(De.Provider, { value: r.addListener, children: t })
  );
}
var Xt = "pvjhuxd",
  Yt = "pcpv5lz",
  Gt = "p1awmd8";
var Zt = h(W(), 1),
  G = (0, Zt.createContext)(null);
G.displayName = "PopoutContext";
var K = h(W(), 1);
function Ne(t) {
  switch (t) {
    case "Confirmation":
    case "DeprecatedDrafts":
    case "ImageCrop":
    case "ImageFocalPoint":
    case "QuickActions":
    case "UpsellEnterprise":
    case "UpsellFeature":
      return !0;
    default:
      return !1;
  }
}
function Mr(t) {
  return t === "ConfirmationPlugin" ? 26 : Ne(t) ? 25 : 22;
}
function $o() {
  let t = Ge(),
    e = te(() => {
      let { activePlugin: n } = t.stores.pluginStore;
      return n ? n.modeHandlers.mode !== "canvas" : !1;
    }, []),
    o = te(() => Ne(t.stores.modalStore.active.type), []);
  return e || o;
}
function jo() {
  return !1;
}
var _t = He() ? jo : $o;
var J = class {
  #t = [];
  #e = -1;
  get stack() {
    return this.#t;
  }
  get currentStackIndex() {
    return this.#e;
  }
  triggerRender;
  willOpen;
  willPush;
  willPop;
  constructor({ triggerRender: e, willOpen: o, willPush: n, willPop: r }) {
    ((this.triggerRender = e), (this.willOpen = o), (this.willPush = n), (this.willPop = r));
  }
  present = (
    e,
    o,
    {
      parent: n,
      triggerRef: r,
      displayDivider: a,
      title: i,
      className: l,
      onDismiss: u,
      onPresent: f,
      toolbarAction: p,
      autoFocusInside: d,
    }
  ) => {
    if (e && this.isPresenting(e, { atIndex: 0 })) {
      this.#e === 0 ? this.close() : (this.setStackIndex(0), this.willOpen?.(r?.current));
      return;
    }
    if (n) {
      let m = this.indexForItem(n);
      if (m === -1) return null;
      ((this.#t = this.#t.slice(0, m + 1)), f?.(), this.willPush?.());
    } else (this.setStackIndex(-1), f?.(), this.willOpen?.(r?.current));
    (this.#t.push({
      id: e,
      timestamp: Date.now(),
      element: o,
      triggerRef: r,
      displayDivider: a,
      title: i,
      className: l,
      onDismiss: u,
      onPresent: f,
      dismissed: !1,
      toolbarAction: p,
      autoFocusInside: d,
    }),
      this.setStackIndex(this.#e + 1));
  };
  updatePopout = (e, o, n, r) => {
    if (this.isClosed()) return;
    let a = this.indexForItem(e);
    if (a === -1) return;
    let i = this.#t[a];
    if (!i) return;
    let l = i.element,
      u = i.title,
      f = i.autoFocusInside;
    (l === o && u === n && f === r) ||
      ((i.element = o),
      (i.title = n),
      (i.autoFocusInside = r),
      a <= this.#e && requestAnimationFrame(this.triggerRender));
  };
  isPresenting = (e, o) => {
    if (this.isClosed()) return !1;
    let n = this.indexForItem(e);
    return !(n < 0 || n > this.#e || (o && o.atIndex !== n));
  };
  isOpen = () => this.#e > -1;
  isClosed = () => !this.isOpen();
  close = () => {
    this.setStackIndex(-1);
  };
  #o = !1;
  get isSuspended() {
    return this.#o;
  }
  set isSuspended(e) {
    this.#o !== e && ((this.#o = e), this.triggerRender());
  }
  dismiss = (e) => {
    let o = this.indexForItem(e);
    o !== -1 && this.#e >= o && (this.willPop?.(), this.setStackIndex(o - 1));
  };
  goBack = (e = !1) => {
    let o = this.stack[0];
    if ((this.willPop?.(), this.setStackIndex(this.#e - 1), e && this.currentStackIndex === -1)) {
      let n = o?.triggerRef?.current;
      n instanceof HTMLElement && n.focus();
    }
  };
  indexForItem = (e) => this.#t.findIndex((o) => o.id === e);
  setStackIndex = (e) => {
    let o = Math.max(-1, e);
    this.#e !== o &&
      (this.#t.forEach((n, r) => {
        r <= e || n.dismissed || ((n.dismissed = !0), n.onDismiss?.());
      }),
      (this.#e = o),
      o < 0 && (this.#t = []),
      this.triggerRender(),
      this.listeners.forEach((n) => n()));
  };
  listeners = new Set();
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.delete(e);
  }
  registeredPopouts = {};
  shouldPresentPopoutIds = new Set();
  registerPopout = (e, o) => {
    ((this.registeredPopouts[e] = o),
      this.shouldPresentPopoutIds.has(e) && (o(), this.shouldPresentPopoutIds.delete(e)));
  };
  deregisterPopout = (e) => {
    delete this.registeredPopouts[e];
    let o = this.indexForItem(e);
    o === -1 || this.#e < o || this.setStackIndex(o - 1);
  };
  popoutIsRegistered = (e) => e in this.registeredPopouts;
  presentPopout = (e) => {
    if (this.isPresenting(e, { atIndex: 0 })) return;
    let o = this.registeredPopouts[e];
    ae(o) ? o() : this.presentPopoutOnRegistration(e);
  };
  presentPopoutOnRegistration = (e) => {
    this.shouldPresentPopoutIds.has(e) ||
      (this.shouldPresentPopoutIds.add(e),
      setTimeout(() => {
        this.shouldPresentPopoutIds.delete(e);
      }, 100));
  };
};
var Jt = "pjkind9",
  Qt = "s1l0qpj8",
  eo = "cftx8i9";
var to = h(W(), 1);
function me(t) {
  let e = U(),
    o = te(
      () => N(e) && e.stores.chromeStore.overlayStack.at(-1)?.type === "componentRichTextContent",
      [e]
    );
  (0, to.useLayoutEffect)(() => {
    t.isSuspended = o;
  }, [t, o]);
}
var Z = h(E(), 1),
  qo = { x: 10, y: 0 };
function oo({
  navigationRef: t,
  anchorRef: e,
  children: o,
  attachTo: n = "right",
  alignment: r = "center",
  offset: a = qo,
  within: i,
  onKeydown: l,
  onCopy: u,
  fallbackToModalAppearance: f,
  showArrow: p = !1,
  themeBehavior: d,
}) {
  let m = U(),
    g = K.default.useRef(l);
  g.current = l;
  let c = _t(),
    [v, b] = K.default.useState(0),
    [s] = K.default.useState(() => new J({ triggerRender: () => b((y) => y + 1) }));
  me(s);
  let P = s.isOpen(),
    x = s.isSuspended,
    C = K.default.useCallback(
      (y) => {
        if ((N(m) && m.stores.mouseStore.setModifiers(y.nativeEvent), y.key === "Escape")) {
          if (s.isSuspended) return;
          (s.goBack(!0), y.stopPropagation());
        }
        g.current?.(y);
      },
      [s]
    ),
    H = K.default.useCallback((y) => {
      N(m) && m.stores.mouseStore.setModifiers(y.nativeEvent);
    }, []);
  ((0, K.useImperativeHandle)(t, () => s, [s]),
    K.default.useEffect(() => {
      if (!(!P || !u))
        return (
          document.addEventListener("copy", u),
          document.addEventListener("cut", u),
          () => {
            (document.removeEventListener("copy", u), document.removeEventListener("cut", u));
          }
        );
    }, [P, u]));
  let k = K.default.useMemo(() => ({ ...a }), [v, a]);
  return (0, Z.jsxs)(G.Provider, {
    value: s,
    children: [
      o,
      P &&
        (0, Z.jsx)(gt, {
          children: (0, Z.jsx)(vt, {
            anchor: e.current,
            alignSelf: r,
            attachTo: n,
            offset: k,
            within: i,
            onClose: () => {
              s.isSuspended || s.close();
            },
            className: R(Jt, x && Qt),
            onKeyDown: C,
            onKeyUp: H,
            focusTrapEnabled: !c && !x,
            showArrow: p,
            arrow: p ? { anchor: e.current } : void 0,
            fallbackToModalAppearance: f,
            themeBehavior: d,
            backdropEnabled: !x,
            backdropTintEnabled: !x,
            hidden: x,
            children: (0, Z.jsx)("div", {
              className: R(eo),
              children: (0, Z.jsx)(le, {
                stack: s.stack,
                currentIndex: s.currentStackIndex,
                onBack: s.goBack,
                onClose: s.close,
              }),
            }),
          }),
        }),
    ],
  });
}
var V = h(E(), 1),
  io = "data-is-popout-button",
  Uo = "data-is-field-settings-popout",
  ao = `[${io}]`,
  Xo = `${ao}:not([${Uo}])`;
function Yo({
  popout: t,
  navigationTitle: e,
  navigationClassName: o,
  toolbarAction: n,
  id: r,
  enabled: a = !0,
  displayDivider: i,
  onBeforePresent: l = () => !0,
  onPresent: u = () => {},
  onDismiss: f = () => {},
  ref: p,
  autoFocusInside: d,
  displayInPopover: m,
}) {
  let g = Zo(r),
    c = F.default.useRef(null),
    v = p ?? c,
    b = F.default.useContext(se),
    s = F.default.useContext(G),
    [P, x] = F.default.useState(!1),
    C = ft(),
    H = dt(),
    k = zt(),
    y = F.default.useContext(ie),
    O = mt(m),
    I = jt(),
    A = no(
      (0, V.jsx)(ie.Provider, {
        value: y,
        children: (0, V.jsx)(pt.Provider, {
          value: O,
          children: (0, V.jsx)(ct.Provider, {
            value: H,
            children: (0, V.jsx)(ut.Provider, {
              value: C,
              children: (0, V.jsx)(qt, {
                variantOverrideKeys: k.variantOverrideKeys,
                variantOverrideTraitTypes: k.variantOverrideTraitTypes,
                children: (0, V.jsx)($t, { value: I, children: t }),
              }),
            }),
          }),
        }),
      })
    ),
    T = no(e);
  s?.updatePopout(g, A, T, d);
  let D = ne(f),
    j = ne(u),
    X = ne(() => {
      if (s) {
        if (!a || !l()) {
          s.close();
          return;
        }
        s.present(g, A, {
          parent: b,
          triggerRef: v,
          displayDivider: i,
          title: T,
          toolbarAction: n,
          className: o,
          onDismiss: D,
          onPresent: j,
          autoFocusInside: d,
        });
      }
    }),
    ee = ne(() => {
      s?.dismiss(g);
    });
  return (
    F.default.useEffect(() => {
      if (!a || !s) return;
      let Ve = () => {
        Ae.isTest || x(s.isPresenting(g));
      };
      return (
        s.addListener(Ve),
        s.registerPopout(g, X),
        () => {
          (s.removeListener(Ve), s.deregisterPopout(g));
        }
      );
    }, [g, a, s]),
    { present: X, dismiss: ee, isPresenting: P, ref: v }
  );
}
function no(t) {
  let e = F.default.useRef(t);
  return ($e(t, e.current) || (e.current = t), e.current);
}
function bi({
  popoverNavigationRef: t,
  displayInPopover: e,
  popoverAttachmentEdge: o,
  popoverAlignment: n,
  fallbackToModalAppearance: r,
  popoverOffset: a,
  showArrow: i,
  onPopoverKeydown: l,
  onPopoverCopy: u,
  ...f
}) {
  let p = F.default.useRef(null),
    d = (0, V.jsx)(Go, { displayInPopover: e, ...f, ref: p });
  return e
    ? (0, V.jsx)(oo, {
        navigationRef: t,
        anchorRef: p,
        attachTo: o,
        alignment: n,
        onKeydown: l,
        onCopy: u,
        offset: a,
        fallbackToModalAppearance: r,
        showArrow: i,
        children: d,
      })
    : d;
}
var Go = F.default.forwardRef(function (
  {
    id: e,
    large: o,
    popout: n,
    displayDivider: r,
    navigationTitle: a,
    navigationClassName: i,
    toolbarAction: l,
    className: u,
    onKeyDown: f,
    onClick: p,
    tabIndex: d = 0,
    enabled: m = !0,
    useFrescoButton: g = !1,
    withoutStyles: c = !1,
    frescoButtonProps: v = {},
    onBeforePresent: b,
    onPresent: s,
    onDismiss: P,
    autoFocusInside: x,
    togglePopoutEnabled: C = !1,
    displayInPopover: H,
    ...k
  },
  y
) {
  let {
      present: O,
      dismiss: I,
      isPresenting: A,
    } = Yo({
      popout: n,
      id: e,
      displayDivider: r,
      navigationTitle: a,
      navigationClassName: i,
      toolbarAction: l,
      enabled: m,
      onBeforePresent: b,
      onPresent: s,
      onDismiss: P,
      ref: y,
      autoFocusInside: x,
      displayInPopover: H,
    }),
    T = (ee) => {
      switch (ee.key) {
        case "Enter":
        case " ":
          (O(), ee.preventDefault());
          break;
        case "Escape":
          (ee.currentTarget.blur(), I());
          break;
      }
    },
    D = m === !1,
    j = {
      role: "button",
      ref: y,
      tabIndex: D ? void 0 : d,
      "aria-selected": A ? "true" : "false",
      className: R(u, !g && !c && R(Xt, D && Yt, o && Gt)),
      onKeyDown: ro(T, f),
      [io]: !0,
      ...k,
    },
    X = C && A ? p : ro(O, p);
  return g
    ? (0, V.jsx)(oe, { enabled: m, ...v, ...j, onClick: X })
    : (0, V.jsx)("div", { id: e, ...j, onClick: X });
});
function Le(t) {
  return t instanceof HTMLElement ? !!t.closest(ao) : !1;
}
function xi(t) {
  return t.querySelector(Xo);
}
function Pi(t) {
  return document.getElementById(t);
}
function Zo(t) {
  let e = F.default.useRef(t);
  return (t && e.current !== t ? (e.current = t) : e.current || (e.current = qe()), e.current);
}
function ro(t, e) {
  return e
    ? (o) => {
        (t(o), e(o));
      }
    : t;
}
var so = R(rt, "wrgelve"),
  lo = "w1ufy8me";
var $ = h(W(), 1);
var uo = h(E(), 1),
  co = "resize-zone",
  Mi = $.default.memo(
    ({
      side: t,
      minSize: e,
      defaultSize: o,
      maxSize: n,
      getSize: r,
      setSize: a,
      onResizeStart: i,
      onResizeEnd: l,
    }) => {
      let u = ht("paneEdgeDoubleClickReset"),
        [f, p] = $.default.useState("ew-resize"),
        d = $.default.useCallback(
          (s) => {
            let P = ae(n) ? n() : n,
              x = tn(s, e, P, t);
            p((C) => (C === x ? C : x));
          },
          [e, n, t]
        );
      $.default.useEffect(() => {
        requestAnimationFrame(() => {
          d(r());
        });
      }, []);
      let m = $.default.useRef(),
        g = $.default.useCallback(() => {
          ((m.current = r()), i && i());
        }, [r, i]),
        c = $.default.useCallback(
          (s) => {
            if (m.current === void 0) return;
            let P = t === "left" ? -1 : 1,
              x = t === "top" ? s.offset.y : s.offset.x,
              C = m.current + x * P;
            (Math.abs(C - o) < 10 && (C = o), a(C), d(r()));
          },
          [t, o, a, d, r]
        ),
        v = $.default.useCallback(() => {
          ((m.current = void 0), l && l());
        }, [l]),
        b = $.default.useCallback(() => {
          (a(o), d(r()), l?.());
        }, [o, a, d, r, l]);
      return (0, uo.jsx)(ce, {
        onDragStart: g,
        onDrag: c,
        onDragEnd: v,
        onDoubleClick: u ? b : void 0,
        cursor: f,
        className: co,
        style: {
          cursor: f,
          position: "absolute",
          top: Jo(t),
          bottom: 0,
          right: en(t),
          left: Qo(t),
          width: t === "top" ? void 0 : 6,
          height: t === "top" ? 6 : void 0,
          zIndex: 27,
          transform: "translate3d(0, 0, 0)",
          opacity: 0.5,
        },
      });
    }
  );
function Jo(t) {
  return t === "top" ? -3 : 0;
}
function Qo(t) {
  switch (t) {
    case "left":
      return -3;
    case "top":
      return 0;
  }
}
function en(t) {
  switch (t) {
    case "right":
      return -3;
    case "top":
      return 0;
  }
}
function Be(t) {
  return t instanceof HTMLDivElement && t.classList.contains(co);
}
function tn(t, e, o, n) {
  if (n === "top")
    switch (t) {
      case e:
        return "s-resize";
      case o:
        return "n-resize";
      default:
        return "ns-resize";
    }
  switch (t) {
    case e:
      return n === "right" ? "e-resize" : "w-resize";
    case o:
      return n === "right" ? "w-resize" : "e-resize";
    default:
      return "ew-resize";
  }
}
var on = "data-is-project-bar",
  Wi = `[${on}]`,
  nn = "data-is-left-panel",
  Di = `[${nn}]`,
  rn = "data-is-right-panel",
  fo = `[${rn}]`,
  an = "data-is-analytics",
  po = `[${an}]`,
  sn = "data-is-collection-table",
  mo = `[${sn}]`,
  ln = "data-is-collection-left-panel",
  vo = `[${ln}]`,
  cn = "data-is-agent-chat-panel",
  Ni = `[${cn}]`,
  dn = "data-is-editor-overlay",
  go = `[${dn}]`;
var Q = h(E(), 1),
  bo = "data-is-popover-window",
  xo = `[${bo}="true"]`;
function un(t, e) {
  return t.closest(go) ? "100%" : e.left < window.innerWidth - e.right ? "0%" : "100%";
}
var Fe = class {
  navigation;
  floatingWindowRef = z.default.createRef();
  initialWindowTopOffset = "0px";
  initialWindowLeftOffset = "100%";
  constraintBy;
  verticalConstraintBy;
  getWindowPosition;
  configuredInitialLeftOffset;
  getOutsidePointerDownBehavior;
  repositionWhenOpen;
  fitContentWidth;
  constructor({
    constraintBy: e = "canvas",
    verticalConstraintBy: o = e,
    getWindowPosition: n = fn,
    initialLeftOffset: r,
    getOutsidePointerDownBehavior: a = () => "default",
    repositionWhenOpen: i = !0,
    fitContentWidth: l = !1,
  } = {}) {
    ((this.constraintBy = e),
      (this.verticalConstraintBy = o),
      (this.getWindowPosition = n),
      (this.configuredInitialLeftOffset = r),
      (this.getOutsidePointerDownBehavior = a),
      (this.repositionWhenOpen = i),
      (this.fitContentWidth = l),
      (this.navigation = new J({
        triggerRender: this.rerender,
        willOpen: this.positionWindowNearElement,
        willPush: this.persistCurrentTopOffset,
        willPop: this.persistCurrentTopOffset,
      })));
  }
  positionWindowNearElement = (e) => {
    if (!(e instanceof HTMLElement)) return;
    let o = this.floatingWindowRef.current,
      n = e.getBoundingClientRect(),
      r = this.getWindowPosition(e, n);
    if (o) {
      if (!this.repositionWhenOpen) return;
      o.setPosition(r, { snapToEdges: !1 });
    } else
      ((this.initialWindowTopOffset = `${r.y}px`),
        (this.initialWindowLeftOffset = this.configuredInitialLeftOffset ?? un(e, n)));
  };
  persistCurrentTopOffset = () => {
    let e = this.floatingWindowRef.current;
    e && (e.hasPersistedTopOffset() || e.persistCurrentTopOffset());
  };
  isOpen = () => this.navigation.isOpen();
  close = () => {
    this.navigation.close();
  };
  _rerender;
  rerender = () => this._rerender?.();
  navigationBarWrapper = (e) => (0, Q.jsx)(Ht, { children: e });
  Component = z.default.memo(
    ({
      zIndex: e,
      visible: o,
      rightInsetOverride: n,
      requiredContentWidth: r,
      onPointerDownCapture: a,
    }) => {
      let i = U();
      me(this.navigation);
      let l = st();
      (0, z.useEffect)(
        () => (
          (this._rerender = l),
          () => {
            this._rerender = void 0;
          }
        ),
        [l]
      );
      let u = this.navigation.isOpen();
      z.default.useEffect(() => {
        if (!u) return;
        let c = !1,
          v = !1,
          b = (P) => {
            if (this.navigation.isSuspended) return;
            c = !0;
            let x = this.getOutsidePointerDownBehavior(P.target);
            ((v = x === "keep-open"), x === "close" && this.closeIfPointerDownOutside(P));
          },
          s = (P) => {
            if (!this.navigation.isSuspended && c) {
              if (v) {
                v = !1;
                return;
              }
              this.closeIfClickedOutside(P);
            }
          };
        return (
          document.addEventListener("mousedown", b, { capture: !0 }),
          document.addEventListener("click", s),
          () => {
            (document.removeEventListener("mousedown", b, { capture: !0 }),
              document.removeEventListener("click", s));
          }
        );
      }, [u]);
      let f = (0, z.useCallback)((c) => {
          if (
            (N(i) && i.stores.mouseStore.setModifiers(c.nativeEvent),
            !c.defaultPrevented && c.key === "Escape")
          ) {
            if (this.navigation.isSuspended) return;
            (this.navigation.goBack(!0), c.stopPropagation());
          }
        }, []),
        p = (0, z.useCallback)((c) => {
          N(i) && i.stores.mouseStore.setModifiers(c.nativeEvent);
        }, []);
      if (!u) return null;
      let d = this.navigation.stack[this.navigation.currentStackIndex];
      if (!d) return null;
      let m = this.navigation.isSuspended,
        g = q(d.title) ? d.title : void 0;
      return (0, Q.jsx)(fe, {
        ref: this.floatingWindowRef,
        zIndex: e,
        visible: o && !m,
        rightInsetOverride: n,
        requiredContentWidth: r,
        onPointerDownCapture: a,
        initialTopOffset: this.initialWindowTopOffset,
        initialLeftOffset: this.initialWindowLeftOffset,
        constraintBy: this.constraintBy,
        verticalConstraintBy: this.verticalConstraintBy,
        children: (0, Q.jsx)("div", {
          role: "dialog",
          "aria-label": g,
          className: R(
            so,
            this.fitContentWidth && lo,
            this.navigation.stack[this.navigation.currentStackIndex]?.className
          ),
          onKeyDown: f,
          onKeyUp: p,
          onMouseUp: (c) => {
            N(i) && i.stores.canvasMouseTarget.handleMouseUp(c);
          },
          tabIndex: 0,
          [bo]: !0,
          children: (0, Q.jsx)(G.Provider, {
            value: this.navigation,
            children: (0, Q.jsx)(le, {
              stack: this.navigation.stack,
              currentIndex: this.navigation.currentStackIndex,
              onBack: this.navigation.goBack,
              onClose: this.navigation.close,
              renderNavigationBarWrapper: this.navigationBarWrapper,
            }),
          }),
        }),
      });
    }
  );
  closeIfClickedOutside = ({ target: e }) => {
    Be(e) || Le(e) || (pn(e) && (ho(), this.navigation.close()));
  };
  closeIfPointerDownOutside = ({ target: e }) => {
    Be(e) ||
      Le(e) ||
      (e instanceof Element && e.closest(xo)) ||
      at(e) ||
      (ho(), this.navigation.close());
  };
};
function ho() {
  let t = document.activeElement;
  t instanceof HTMLElement && t.closest(xo) && t.blur();
}
function fn(t, e) {
  return { x: e.left, y: e.top - 9 };
}
function pn(t) {
  return t instanceof HTMLElement
    ? !!t.closest(fo) || !!t.closest(po) || !!t.closest(vo) || !!t.closest(mo)
    : !1;
}
var Zi = new Fe();
export {
  bt as a,
  Tt as b,
  Ce as c,
  kt as d,
  xn as e,
  se as f,
  le as g,
  Io as h,
  Sn as i,
  ce as j,
  $n as k,
  fe as l,
  Ht as m,
  ar as n,
  Kt as o,
  ie as p,
  hr as q,
  Ao as r,
  br as s,
  xr as t,
  $t as u,
  jt as v,
  wr as w,
  qt as x,
  Xt as y,
  G as z,
  Mr as A,
  _t as B,
  J as C,
  oo as D,
  io as E,
  Uo as F,
  Yo as G,
  bi as H,
  Le as I,
  xi as J,
  Pi as K,
  Mi as L,
  on as M,
  Wi as N,
  nn as O,
  Di as P,
  rn as Q,
  an as R,
  sn as S,
  mo as T,
  ln as U,
  cn as V,
  Ni as W,
  dn as X,
  xo as Y,
  Fe as Z,
  Zi as _,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-DFANM4IW.mjs.map
