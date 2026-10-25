import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  E as r,
  F as i,
  I as a,
  N as o,
  O as s,
  P as c,
  R as l,
  S as u,
  T as d,
  _ as f,
  b as p,
  j as m,
  l as h,
  o as g,
  p as _,
  s as v,
  w as y,
  x as b,
  y as x,
} from "./react.Dlpel5Rf.mjs";
import {
  D as S,
  O as C,
  U as w,
  Y as T,
  Z as E,
  b as D,
  g as O,
  i as ee,
  it as k,
  nt as A,
  o as j,
  q as te,
  t as M,
} from "./motion.Bz0htX5W.mjs";
import {
  E as N,
  K as P,
  M as F,
  N as I,
  P as L,
  Q as ne,
  T as re,
  Z as ie,
  a as ae,
  at as oe,
  b as R,
  et as se,
  f as ce,
  ft as le,
  g as z,
  h as ue,
  it as de,
  l as fe,
  m as pe,
  n as me,
  nt as he,
  ot as B,
  r as V,
  rt as ge,
  s as _e,
  st as ve,
  t as H,
  tt as ye,
  v as U,
  w as W,
  x as be,
  y as xe,
  z as G,
} from "./framer.v3y4Hoe9.mjs";
import {
  a as Se,
  c as Ce,
  i as we,
  l as Te,
  o as Ee,
  r as De,
  s as Oe,
  u as ke,
} from "./shared-lib.HHtnoPqV.mjs";
import Ae, { t as je } from "./YbHTLwLNkgSq6sBKlZ-XT8V6f_4hjG9oMzsF6ZPyMmk.B4p9Up0J.mjs";
function Me(e, t) {
  return Le(e) ? e[Re(0, e.length, t)] : e;
}
function Ne(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Be(0, t, r);
    e.push(ze(n, 1, i));
  }
}
function Pe(e) {
  let t = [0];
  return (Ne(t, e - 1), t);
}
function Fe(e, t = Pe(e.length), n = J) {
  let r = e.length,
    i = r - t.length;
  return (
    i > 0 && Ne(t, i),
    (i) => {
      let a = 0;
      for (; a < r - 2 && !(i < t[a + 1]); a++);
      let o = Ie(0, 1, Be(t[a], t[a + 1], i));
      return ((o = Me(n, a)(o)), ze(e[a], e[a + 1], o));
    }
  );
}
function K(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var Ie,
  q,
  Le,
  Re,
  ze,
  J,
  Be,
  Y,
  Ve = e(() => {
    ((Ie = (e, t, n) => Math.min(Math.max(n, e), t)),
      (q = (e) => typeof e == `number`),
      (Le = (e) => Array.isArray(e) && !q(e[0])),
      (Re = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (ze = (e, t, n) => -n * e + n * t + e),
      (J = (e) => e),
      (Be = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e))),
      (Y = (e) => typeof e == `string`));
  }),
  He = e(() => {
    Ve();
  }),
  Ue = e(() => {
    He();
  });
function We(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ge = e(() => {}),
  Ke,
  qe = e(() => {
    ((Ke = {}),
      Object.defineProperty(Ke, "__esModule", { value: !0 }),
      (Ke.warning = function () {}),
      (Ke.invariant = function () {}),
      Ke.__esModule,
      Ke.warning,
      Ke.invariant);
  }),
  Je = e(() => {
    Ve();
  });
function X(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Ye(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = X(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Dt[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Xe(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Ze({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ot.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Xe(e, n);
        },
      });
    });
}
function Qe(e) {
  e.forEach(Ze);
}
function $e() {
  typeof ResizeObserver < `u` && (kt = new ResizeObserver(Qe));
}
function et(e, t) {
  kt || $e();
  let n = X(e);
  return (
    n.forEach((e) => {
      let n = Ot.get(e);
      (n || ((n = new Set()), Ot.set(e, n)), n.add(t), kt?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Ot.get(e);
        (n?.delete(t), (n != null && n.size) || kt == null || kt.unobserve(e));
      });
    }
  );
}
function tt() {
  ((jt = () => {
    let e = { width: l.innerWidth, height: l.innerHeight },
      t = { target: l, size: e, contentSize: e };
    At.forEach((e) => e(t));
  }),
    l.addEventListener(`resize`, jt));
}
function nt(e) {
  return (
    At.add(e),
    jt || tt(),
    () => {
      (At.delete(e), !At.size && jt && (jt = void 0));
    }
  );
}
function rt(e, t) {
  return typeof e == `function` ? nt(e) : et(e, t);
}
function it(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = Ft[t],
    s = i.current,
    c = n.time;
  ((i.current = e[`scroll` + o]),
    (i.scrollLength = e[`scroll` + a] - e[`client` + a]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Be(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > Mt ? 0 : K(i.current - s, l);
}
function at(e, t, n) {
  (it(e, `x`, t, n), it(e, `y`, t, n), (t.time = n));
}
function ot(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r instanceof SVGGraphicsElement && `getBBox` in r) {
      let { top: e, left: t } = r.getBBox();
      for (n.x += t, n.y += e; r && r.tagName !== `svg`;) r = r.parentNode;
    }
  return n;
}
function st(e, t, n = 0) {
  let r = 0;
  if ((Lt[e] !== void 0 && (e = Lt[e]), Y(e))) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (q(e) && (r = t * e), n + r);
}
function ct(e, t, n, r) {
  let i = Array.isArray(e) ? e : Rt,
    a = 0,
    o = 0;
  return (
    q(e)
      ? (i = [e, e])
      : Y(e) && ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, Lt[e] ? e : `0`])),
    (a = st(i[0], n, r)),
    (o = st(i[1], t)),
    a - o
  );
}
function lt(e, t, n) {
  let { offset: r = It.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? zt : ot(i, e),
    c =
      i === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: i.clientWidth, height: i.clientHeight },
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = ct(r[e], l[o], c[o], s[a]);
    (u || n === t[a].interpolatorOffsets[e] || (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = Fe(Pe(d), t[a].offset)), (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = t[a].interpolate(t[a].current)));
}
function ut(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r != e;)
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function dt(e, t, n, r = {}) {
  let i = r.axis || `y`;
  return {
    measure: () => ut(e, r.target, n),
    update: (t) => {
      (at(e, n, t), (r.offset || r.target) && lt(e, n, r));
    },
    notify: typeof t == `function` ? () => t(n) : ft(t, n[i]),
  };
}
function ft(e, t) {
  return (
    e.pause(),
    e.forEachNative((e, { easing: t }) => {
      var n, r;
      if (e.updateDuration) (t || (e.easing = J), e.updateDuration(1));
      else {
        let i = { duration: 1e3 };
        (t || (i.easing = `linear`), (r = (n = e.effect)?.updateTiming) == null || r.call(n, i));
      }
    }),
    () => {
      e.currentTime = t.progress;
    }
  );
}
function pt(e, t = {}) {
  var { container: n = document.documentElement } = t,
    r = We(t, [`container`]);
  let i = Ht.get(n);
  i || ((i = new Set()), Ht.set(n, i));
  let a = dt(n, e, Pt(), r);
  if ((i.add(a), !Bt.has(n))) {
    let e = () => {
      let e = performance.now();
      for (let e of i) e.measure();
      for (let t of i) t.update(e);
      for (let e of i) e.notify();
    };
    Bt.set(n, e);
    let t = Ut(n);
    (l.addEventListener(`resize`, e, { passive: !0 }),
      n !== document.documentElement && Vt.set(n, rt(n, e)),
      t.addEventListener(`scroll`, e, { passive: !0 }));
  }
  let o = Bt.get(n),
    s = requestAnimationFrame(o);
  return () => {
    var t;
    (typeof e != `function` && e.stop(), cancelAnimationFrame(s));
    let r = Ht.get(n);
    if (!r || (r.delete(a), r.size)) return;
    let i = Bt.get(n);
    (Bt.delete(n),
      i &&
        (Ut(n).removeEventListener(`scroll`, i),
        (t = Vt.get(n)) == null || t(),
        l.removeEventListener(`resize`, i)));
  };
}
function mt(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function ht(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (a(),
      Ve(),
      Ue(),
      Ge(),
      qe(),
      Je(),
      (gt = [``, `X`, `Y`, `Z`]),
      (_t = [`translate`, `scale`, `rotate`, `skew`]),
      (vt = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (yt = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: vt,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: J },
        skew: vt,
      }),
      (bt = new Map()),
      (xt = (e) => `--motion-${e}`),
      (St = [`x`, `y`, `z`]),
      _t.forEach((e) => {
        gt.forEach((t) => {
          (St.push(e + t), bt.set(xt(e + t), yt[e]));
        });
      }),
      new Set(St),
      (Ct = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (wt = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            Ct({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!Ct({ opacity: [0, 1] }).finished,
      }),
      (Tt = {}),
      (Et = {}));
    for (let e in wt) Et[e] = () => (Tt[e] === void 0 && (Tt[e] = wt[e]()), Tt[e]);
    ((Dt = { any: 0, all: 1 }),
      (Ot = new WeakMap()),
      (At = new Set()),
      (Mt = 50),
      (Nt = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (Pt = () => ({ time: 0, x: Nt(), y: Nt() })),
      (Ft = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (It = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (Lt = { start: 0, center: 0.5, end: 1 }),
      (Rt = [0, 0]),
      (zt = { x: 0, y: 0 }),
      (Bt = new WeakMap()),
      (Vt = new WeakMap()),
      (Ht = new WeakMap()),
      (Ut = (e) => (e === document.documentElement ? l : e)),
      (Wt = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Ye(
            e,
            (r) => {
              if ((t(), ht(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), ht(e, `viewleave`, t));
                };
            },
            We(r, [`once`])
          );
        },
      }),
      (Gt = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), mt(e, t, r));
      }),
      (Kt = {
        inView: Wt,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Gt(e, `hoverstart`, t),
              i = Gt(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), mt(e, `pressend`, t), l.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), mt(e, `pressstart`, n), l.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), l.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Kt)]);
  }),
  Jt,
  Yt = e(() => {
    Jt = (e, t, n) => Math.min(Math.max(n, e), t);
  }),
  Xt,
  Zt = e(() => {
    (G(),
      (Xt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...Xt },
      V.EventHandler,
      V.EventHandler,
      V.EventHandler,
      V.Number,
      V.Boolean,
      V.String,
      V.Enum);
  }),
  Qt = e(() => {
    (G(), y());
  }),
  $t = e(() => {
    y();
  }),
  en = e(() => {
    G();
  }),
  tn = e(() => {
    G();
  }),
  nn = e(() => {
    y();
  }),
  rn = e(() => {
    G();
  }),
  an = e(() => {
    (a(), y());
  }),
  on = e(() => {
    (y(), tn());
  }),
  sn = e(() => {
    (y(), G(), tn(), $t());
  }),
  cn = e(() => {
    (G(), y(), Zt());
  }),
  ln = e(() => {
    (y(), G());
  }),
  un = e(() => {
    y();
  });
function dn(e) {
  let {
    padding: t,
    paddingPerSide: n,
    paddingTop: r,
    paddingRight: i,
    paddingBottom: a,
    paddingLeft: o,
  } = e;
  return m(() => (n ? `${r}px ${i}px ${a}px ${o}px` : t), [t, n, r, i, a, o]);
}
var fn,
  pn = e(() => {
    (y(),
      G(),
      V.FusedNumber,
      (fn = {
        padding: {
          type: V.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }),
  mn = e(() => {
    (Zt(), Qt(), $t(), en(), tn(), nn(), rn(), an(), on(), sn(), cn(), ln(), un(), pn());
  }),
  hn = e(() => {
    mn();
  });
function gn([e, t]) {
  return e + (100 - e) * (t / 100) * 0.5;
}
function _n(e, t, { edgeOpacity: n, moreItems: r, buttonRef: i }, a) {
  r.current && e === t
    ? ((r.current = !1), O(n, 1, a), i.current?.setAttribute(`disabled`, ``))
    : !r.current &&
      e !== t &&
      ((r.current = !0), O(n, 0, a), i.current?.removeAttribute(`disabled`));
}
function vn(e, t) {
  let n = p(e),
    r = te(+!n.current),
    i = A(r, [0, 1], [t || 0, 1]),
    a = A(r, (e) => 1 - e),
    o = p(null),
    s = A(a, (e) => (e > 0.2 ? `auto` : `none`)),
    c = A(s, (e) => (e === `auto` ? `pointer` : `default`));
  return {
    moreItems: n,
    fadeOpacity: i,
    edgeOpacity: r,
    buttonStyle: { ...Nn, opacity: a, pointerEvents: s, cursor: c },
    buttonRef: o,
  };
}
function yn({ element: e }) {
  e.setAttribute(`aria-hidden`, !1);
}
function bn(e, t, n, r, i, a, o, s) {
  x(() => {
    if (!e.current) return;
    let c = pt(
        (e) => {
          ((r.current = e[t]),
            e[t].current * n === a.current && (a.current = void 0),
            i(e[t].current),
            o());
        },
        { container: e.current, axis: t }
      ),
      l = rt(e.current, () => {
        (s(), o());
      });
    return () => {
      (c(), l());
    };
  }, [o, s]);
}
function xn({
  slots: e,
  gap: t,
  axis: n,
  align: r,
  sizingObject: a,
  fadeObject: c,
  arrowObject: l,
  snapObject: u,
  progressObject: m,
  ariaLabel: _,
  borderRadius: v,
  effectsObject: y,
  ...b
}) {
  let S = e?.filter(Boolean),
    w = d.count(S),
    T = pe.current() === pe.canvas,
    D = Tn(),
    O = n && D === `rtl` ? -1 : 1,
    ee = dn(b),
    k = n ? `x` : `y`,
    { fadeContent: j, fadeWidth: M, fadeInset: N, fadeTransition: P, fadeAlpha: F } = c,
    { snap: I, snapEdge: L, fluid: ne } = u,
    {
      widthType: re,
      widthInset: ie,
      widthColumns: ae,
      heightType: oe,
      heightInset: R,
      heightRows: se,
    } = a,
    {
      showScrollbar: ce,
      showProgressDots: le,
      dotSize: z,
      dotsInset: ue,
      dotsRadius: de,
      dotsPadding: fe,
      dotsGap: me,
      dotsFill: he,
      dotsBackground: B,
      dotsActiveOpacity: V,
      dotsOpacity: ge,
      dotsBlur: _e,
    } = m,
    {
      showMouseControls: ve,
      arrowSize: H,
      arrowRadius: ye,
      arrowFill: U,
      leftArrow: W,
      rightArrow: be,
      arrowPadding: xe,
    } = l,
    G = p(void 0),
    Se = p(void 0),
    Ce = te(0),
    we = (e) => {
      Ce.set(Se.current === void 0 ? e : Se.current);
    },
    Te = vn(D === `rtl`, F),
    Ee = vn(D !== `rtl`, F),
    De = te(N * 0.5),
    Oe = A(De, (e) => 100 - e),
    ke = te(M),
    Ae = A([De, ke], gn),
    je = A(Ae, (e) => 100 - e),
    Me = te(n ? `right` : `bottom`),
    Ne = A(
      [Me, Te.fadeOpacity, De, Ae, Ee.fadeOpacity, Oe, je],
      (e) =>
        `linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`
    ),
    Pe = p(null),
    [Fe, K] = f(T ? 4 : 1),
    Ie = { scrollSnapAlign: L, flexShrink: 0 },
    q = {};
  (r === `stretch` &&
    (n ? ((q.height = `100%`), (Ie.height = `auto`)) : ((q.width = `100%`), (Ie.width = `auto`))),
    ne || (Ie.scrollSnapStop = `always`),
    re === `stretch`
      ? ((Ie.width = `calc(100% - ${ie || 0}px)`), (q.width = `100%`))
      : re === `columns` &&
        ((Ie.width = `calc(${100 / ae}% - ${t}px + ${t / ae}px)`), (q.width = `100%`)),
    oe === `stretch`
      ? ((Ie.height = `calc(100% - ${R || 0}px)`), (q.height = `100%`))
      : oe === `rows` &&
        ((Ie.height = `calc(${100 / se}% - ${t}px + ${t / se}px)`), (q.height = `100%`)));
  let Le = T ? `hidden` : `auto`,
    Re = { ...jn, padding: ee },
    ze = {
      ...Mn,
      gap: t,
      alignItems: r,
      flexDirection: n ? `row` : `column`,
      overflowX: n ? Le : `hidden`,
      overflowY: n ? `hidden` : Le,
      scrollSnapType: I ? `${k} mandatory` : void 0,
      WebkitOverflowScrolling: `touch`,
      WebkitMaskImage: j ? Ne : void 0,
      maskImage: j ? Ne : void 0,
      borderRadius: v,
    },
    J = { "aria-roledescription": `carousel` };
  _ && (J[`aria-title`] = _);
  let Be = {};
  if (
    (r === `stretch` && ((Be[`aria-role`] = `group`), (Be[`aria-roledescription`] = `slide`)), !T)
  ) {
    let e = p([]);
    bn(
      Pe,
      k,
      O,
      G,
      we,
      Se,
      s(() => {
        if (!G.current) return;
        let { targetLength: t, containerLength: n, scrollLength: r } = G.current,
          i = Ce.get();
        if (!t && !n) return;
        if (t > n) {
          (_n(i * O, 0, Te, P), _n(i * O, r, Ee, P));
          for (let t = 0; t < e.current.length; t++) {
            let { element: r, start: a, end: o } = e.current[t],
              s = o < i || a > i + n;
            (r.setAttribute(`aria-hidden`, s),
              s
                ? r.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  })
                : r.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  }));
          }
        } else (_n(0, 0, Te, P), _n(1, 1, Ee, P), e.current.forEach(yn));
        let a = Math.ceil(t / n);
        isNaN(a) || (a / w > 0.65 && (a = w), a !== Fe && K(a));
      }, [Fe]),
      s(() => {
        Pe.current &&
          (e.current = Array.from(Pe.current.children).map((e) =>
            n
              ? { element: e, start: e.offsetLeft, end: e.offsetLeft + e.offsetWidth }
              : { element: e, start: e.offsetTop, end: e.offsetTop + e.offsetHeight }
          ));
      }, [])
    );
  }
  T &&
    (x(() => {
      ke.set(M);
    }, [M]),
    x(() => {
      De.set(N * 0.5);
    }, [N]),
    x(() => {
      Me.set(n ? `right` : `bottom`);
    }, [n]));
  let Y = E(),
    Ve = (e) => {
      Se.current = e;
      let t = n ? { left: e } : { top: e };
      Pe.current.scrollTo({ ...t, behavior: Y ? `auto` : `smooth` });
    },
    He = (e, t = 0) => {
      if (!G.current) return;
      let { scrollLength: n } = G.current,
        r = n / (Fe - 1);
      Ve((e * r + t * r) * O);
    },
    Ue = (e) => () => {
      if (!G.current) return;
      let { containerLength: t, scrollLength: n } = G.current,
        r = Ce.get() * O,
        i = n / Fe,
        a = Jt(0, Fe - 1, Math.floor(r / i)),
        o = 0;
      (I && (L === `start` || L === `end`) && e >= 1 && (o = 0.4), He(a + e, o));
    };
  if (w === 0) return g(Cn, {});
  let We = [],
    Ge = {};
  if (Fe > 1 && le && !ce) {
    for (let e = 0; e < Fe; e++) {
      let t = (T && !e) || !1;
      We.push(
        g(Sn, {
          dotStyle: { ...In, width: z, height: z, backgroundColor: he },
          buttonStyle: Nn,
          isSelected: t,
          selectedOpacity: V,
          opacity: ge,
          onClick: () => o(() => He(e)),
          currentScroll: Ce,
          scrollInfo: G,
          total: Fe,
          index: e,
          gap: me,
          padding: fe,
          axis: n,
          directionModifier: O,
        })
      );
    }
    _e && (Ge.backdropFilter = Ge.WebkitBackdropFilter = `blur(${_e}px)`);
  }
  let Ke = W || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM-aa59da.svg`,
    qe = be || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return h(`section`, {
    style: Re,
    ...J,
    children: [
      g(C.ul, {
        ref: Pe,
        style: ze,
        className: `framer--carousel`,
        "data-show-scrollbar": ce,
        "aria-atomic": `false`,
        "aria-live": `polite`,
        onWheel: () => (Se.current = void 0),
        children: d.map(S, (e, t) =>
          g(En, {
            inherit: `id`,
            children: g(`li`, {
              style: Ie,
              ...Be,
              "aria-label": `${t + 1} of ${w}`,
              children: i(e, { ...e.props, style: { ...e.props?.style, ...q } }),
            }),
          })
        ),
      }),
      h(`fieldset`, {
        style: { ...Pn, padding: xe, display: `flex`, flexDirection: n ? `row` : `column` },
        "aria-label": `Carousel pagination controls`,
        className: `framer--carousel-controls`,
        "data-show-mouse-controls": ve,
        children: [
          g(C.button, {
            ref: Te.buttonRef,
            type: `button`,
            style: {
              ...Te.buttonStyle,
              backgroundColor: U,
              width: H,
              height: H,
              borderRadius: ye,
              rotate: n ? 0 : 90,
              display: ve ? `block` : `none`,
            },
            onClick: Ue(-1),
            "aria-label": `Previous`,
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: g(`img`, {
              decoding: `async`,
              alt: ``,
              width: H,
              height: H,
              src: D === `rtl` && n ? qe : Ke,
            }),
          }),
          g(C.button, {
            ref: Ee.buttonRef,
            type: `button`,
            style: {
              ...Ee.buttonStyle,
              backgroundColor: U,
              width: H,
              height: H,
              borderRadius: ye,
              rotate: n ? 0 : 90,
              display: ve ? `block` : `none`,
            },
            onClick: Ue(1),
            "aria-label": `Next`,
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: g(`img`, {
              decoding: `async`,
              alt: ``,
              width: H,
              height: H,
              src: D === `rtl` && n ? Ke : qe,
            }),
          }),
          We.length > 1
            ? g(`div`, {
                style: {
                  ...Fn,
                  left: n ? `50%` : ue,
                  top: n ? `unset` : `50%`,
                  transform: n ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: n ? `row` : `column`,
                  bottom: n ? ue : `unset`,
                  borderRadius: de,
                  backgroundColor: B,
                  ...Ge,
                },
                children: We,
              })
            : null,
        ],
      }),
      g(wn, {}),
    ],
  });
}
function Sn({
  currentScroll: e,
  scrollInfo: t,
  isSelected: n,
  selectedOpacity: r,
  opacity: i,
  total: a,
  index: o,
  dotStyle: s,
  buttonStyle: c,
  gap: l,
  padding: u,
  axis: d,
  directionModifier: f,
  ...p
}) {
  let m = A(e, (e) => {
      if (!t.current?.scrollLength) return o === 0 ? r : i;
      let n = e * f,
        s = t.current?.scrollLength / a,
        c = s * o,
        l = c + s;
      return n >= c && (o < a - 1 ? n < l : o === a - 1) ? r : i;
    }),
    h = l / 2,
    _ = !d && o > 0 ? h : u,
    v = !d && o !== a - 1 ? h : u,
    y = d && o !== a - 1 ? h : u,
    b = d && o > 0 ? h : u;
  return g(`button`, {
    "aria-label": `Scroll to page ${o + 1}`,
    type: `button`,
    ...p,
    style: { ...c, padding: `${_}px ${y}px ${v}px ${b}px` },
    children: g(C.div, { style: { ...s, opacity: m } }),
  });
}
function Cn() {
  return h(`section`, {
    style: Dn,
    children: [
      g(`div`, { style: On, children: `✨` }),
      g(`p`, { style: kn, children: `Connect to Content` }),
      g(`p`, { style: An, children: `Add layers or components to swipe between.` }),
    ],
  });
}
function wn() {
  return g(`div`, {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
function Tn() {
  let [e, t] = f(`ltr`);
  return (
    x(() => {
      l?.document?.documentElement?.dir === `rtl` && t(`rtl`);
    }, []),
    e
  );
}
function En({ children: e, ...t }) {
  return g(ee, { id: n(), ...t, children: e });
}
var Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln = e(() => {
    (a(),
      v(),
      y(),
      G(),
      qt(),
      Yt(),
      M(),
      hn(),
      (xn.defaultProps = {
        gap: 10,
        padding: 10,
        progressObject: { showScrollbar: !1, showProgressDots: !1 },
        sizingObject: {
          widthType: `auto`,
          widthOffset: 0,
          widthColumns: 2,
          heightType: `auto`,
          heightOffset: 0,
          heightRows: 2,
        },
        borderRadius: 0,
      }),
      be(xn, {
        slots: { type: V.Array, title: `Children`, control: { type: V.ComponentInstance } },
        axis: {
          type: V.Enum,
          title: `Direction`,
          options: [!0, !1],
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          displaySegmentedControl: !0,
        },
        align: {
          type: V.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            axis: {
              true: [`align-top`, `align-middle`, `align-bottom`],
              false: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: V.Number, title: `Gap` },
        ...fn,
        sizingObject: {
          type: V.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: V.Enum,
              title: `Width`,
              options: [`auto`, `stretch`, `columns`],
              optionTitles: [`Auto`, `Stretch`, `Columns`],
              defaultValue: `auto`,
            },
            widthInset: {
              type: V.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.widthType !== `stretch`,
            },
            widthColumns: {
              type: V.Number,
              title: `Columns`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.widthType !== `columns`,
            },
            heightType: {
              type: V.Enum,
              title: `Height`,
              options: [`auto`, `stretch`, `rows`],
              optionTitles: [`Auto`, `Stretch`, `Rows`],
              defaultValue: `auto`,
            },
            heightInset: {
              type: V.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.heightType !== `stretch`,
            },
            heightRows: {
              type: V.Number,
              title: `Rows`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.heightType !== `rows`,
            },
          },
        },
        snapObject: {
          type: V.Object,
          title: `Snapping`,
          controls: {
            snap: { type: V.Boolean, title: `Enable` },
            snapEdge: {
              type: V.Enum,
              title: `Edge`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              defaultValue: `center`,
              hidden: (e) => !e.snap,
            },
            fluid: { type: V.Boolean, title: `Fluid`, defaultValue: !1, hidden: (e) => !e.snap },
          },
        },
        fadeObject: {
          type: V.Object,
          title: `Fading`,
          controls: {
            fadeContent: { type: V.Boolean, title: `Enable`, defaultValue: !1 },
            fadeWidth: {
              type: V.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeInset: {
              type: V.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeAlpha: {
              type: V.Number,
              title: `Opacity`,
              hidden: (e) => !e.fadeContent,
              min: 0,
              max: 1,
              step: 0.05,
              defaultValue: 0,
            },
            fadeTransition: {
              type: V.Transition,
              title: `Transition`,
              hidden: (e) => !e.fadeContent,
            },
          },
        },
        progressObject: {
          type: V.Object,
          title: `Progress`,
          controls: {
            showScrollbar: { type: V.Boolean, title: `Scroll Bar`, defaultValue: !1 },
            showProgressDots: {
              type: V.Boolean,
              title: `Dots`,
              defaultValue: !1,
              hidden: (e) => e.showScrollbar,
            },
            dotSize: {
              type: V.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: V.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: V.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: V.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: V.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: V.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: V.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: V.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: V.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: V.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 4,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
        arrowObject: {
          type: V.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: { type: V.Boolean, title: `Show`, defaultValue: !0 },
            arrowFill: {
              type: V.Color,
              title: `Fill`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showMouseControls,
            },
            leftArrow: { type: V.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: V.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: V.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: V.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPadding: {
              type: V.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls,
            },
          },
        },
        ariaLabel: { type: V.String, title: `Aria Label`, placeholder: `Movies...` },
        borderRadius: {
          type: V.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
      }),
      (Dn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (On = { fontSize: 32, marginBottom: 10 }),
      (kn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (An = { margin: 0, opacity: 0.7, maxWidth: 130, lineHeight: 1.5, textAlign: `center` }),
      (jn = {
        display: `flex`,
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        position: `relative`,
      }),
      (Mn = {
        padding: 0,
        margin: 0,
        listStyle: `none`,
        position: `relative`,
        display: `flex`,
        flex: `1 1 100%`,
        width: `100%`,
        height: `100%`,
      }),
      (Nn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Pn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: `none`,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Fn = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (In = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  }),
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    (G(),
      re.loadFonts([`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`]),
      (Rn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (zn = [
        `.framer-PO8Yf .framer-styles-preset-18rgopz:not(.rich-text-wrapper), .framer-PO8Yf .framer-styles-preset-18rgopz.rich-text-wrapper h2 { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 61px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #2d2d2a; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Bn = `framer-PO8Yf`));
  });
function Hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  Z,
  $n = e(() => {
    (v(),
      G(),
      M(),
      y(),
      (Un = { cxni6AwS8: { hover: !0 }, fZ1zKjkpQ: { hover: !0 } }),
      (Wn = [`cxni6AwS8`, `fZ1zKjkpQ`]),
      (Gn = `framer-HV8mm`),
      (Kn = { cxni6AwS8: `framer-v-7z6w60`, fZ1zKjkpQ: `framer-v-19jfuwl` }),
      (qn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jn = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (Yn = { "Variant 1": `cxni6AwS8`, "Variant 2": `fZ1zKjkpQ` }),
      (Xn = C.create(c)),
      (Zn = ({ click: e, height: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        rRzXrcE6A: e ?? a.rRzXrcE6A,
        uwIkV2V7p: r ?? a.uwIkV2V7p,
        variant: Yn[a.variant] ?? a.variant ?? `cxni6AwS8`,
      })),
      (Qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge();
          ne();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              uwIkV2V7p: m,
              rRzXrcE6A: h,
              ..._
            } = Zn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              cycleOrder: Wn,
              defaultVariant: `cxni6AwS8`,
              enabledGestures: Un,
              ref: i,
              variant: f,
              variantClassNames: Kn,
            }),
            O = Qn(e, D),
            k = [],
            { activeVariantCallback: A, delay: j } = ie(v),
            te = A(async (...e) => {
              if ((T({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            M = W(Gn, ...k);
          return g(ee, {
            id: d ?? a,
            children: g(Xn, {
              animate: D,
              initial: !1,
              children: g(Jn, {
                value: qn,
                children: g(fe, {
                  href: m,
                  motionChild: !0,
                  nodeId: `cxni6AwS8`,
                  openInNewTab: !0,
                  scopeId: `d5ici9SD9`,
                  ...Hn({ fZ1zKjkpQ: { openInNewTab: !1 } }, v, S),
                  children: g(C.a, {
                    ..._,
                    ...x,
                    className: `${W(M, `framer-7z6w60`, u, y)} framer-17m6b1p`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: O,
                    layoutId: `cxni6AwS8`,
                    onTap: te,
                    ref: i,
                    style: { backgroundColor: `rgb(52, 101, 155)`, ...l },
                    variants: {
                      "cxni6AwS8-hover": { backgroundColor: `rgb(41, 75, 135)` },
                      "fZ1zKjkpQ-hover": { backgroundColor: `rgb(99, 166, 171)` },
                      fZ1zKjkpQ: { backgroundColor: `rgb(123, 181, 178)` },
                    },
                    ...Hn(
                      {
                        "cxni6AwS8-hover": { "data-framer-name": void 0 },
                        "fZ1zKjkpQ-hover": { "data-framer-name": void 0 },
                        fZ1zKjkpQ: { "data-framer-name": `Variant 2` },
                      },
                      v,
                      S
                    ),
                    children: g(z, {
                      __fromCanvasComponent: !0,
                      children: g(c, {
                        children: g(C.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1tZWRpdW0=`,
                            "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                            "--framer-font-size": `21px`,
                            "--framer-font-weight": `500`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                          },
                          children: `Play`,
                        }),
                      }),
                      className: `framer-mkeydg`,
                      fonts: [`FS;Space Grotesk-medium`],
                      layoutDependency: O,
                      layoutId: `CTIY4KG7c`,
                      style: {
                        "--extracted-r6o4lv": `rgb(234, 230, 221)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: { fZ1zKjkpQ: { "--extracted-r6o4lv": `rgb(45, 45, 42)` } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Hn(
                        {
                          "cxni6AwS8-hover": {
                            children: g(c, {
                              children: g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1tZWRpdW0=`,
                                  "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                  "--framer-font-size": `21px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                                },
                                children: g(C.strong, { children: `Play` }),
                              }),
                            }),
                            fonts: [`FS;Space Grotesk-medium`, `FS;Space Grotesk-bold`],
                          },
                          "fZ1zKjkpQ-hover": {
                            children: g(c, {
                              children: g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1tZWRpdW0=`,
                                  "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                  "--framer-font-size": `21px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                },
                                children: g(C.strong, { children: `Read more` }),
                              }),
                            }),
                            fonts: [`FS;Space Grotesk-medium`, `FS;Space Grotesk-bold`],
                          },
                          fZ1zKjkpQ: {
                            children: g(c, {
                              children: g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1tZWRpdW0=`,
                                  "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                  "--framer-font-size": `21px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                },
                                children: `Read more`,
                              }),
                            }),
                          },
                        },
                        v,
                        S
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-HV8mm.framer-17m6b1p, .framer-HV8mm .framer-17m6b1p { display: block; }`,
          `.framer-HV8mm.framer-7z6w60 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; height: 60px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 258px; }`,
          `.framer-HV8mm .framer-mkeydg { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ],
        `framer-HV8mm`
      )),
      (Z.displayName = `Button`),
      (Z.defaultProps = { height: 60, width: 258 }),
      be(Z, {
        variant: {
          options: [`cxni6AwS8`, `fZ1zKjkpQ`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: V.Enum,
        },
        uwIkV2V7p: { title: `Link`, type: V.Link },
        rRzXrcE6A: { title: `Click`, type: V.EventHandler },
      }),
      R(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/V2SN6OQGC3Z2CCFHLOEJRJKQXUTOKEBX.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function er(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  Q,
  dr = e(() => {
    (v(),
      G(),
      M(),
      y(),
      (tr = {
        B_NgvDy77: { hover: !0, pressed: !0 },
        CbhFAQ8TN: { hover: !0, pressed: !0 },
        CMSLqYG_L: { hover: !0, pressed: !0 },
        dHCLx1Dq7: { hover: !0, pressed: !0 },
        eQ_A3dXWO: { hover: !0, pressed: !0 },
        GTpr7ePGx: { hover: !0, pressed: !0 },
        I5Le9Mt1n: { hover: !0, pressed: !0 },
        VzI8odYIe: { hover: !0, pressed: !0 },
        wQaxC081k: { hover: !0, pressed: !0 },
        zBEZU0PYH: { hover: !0, pressed: !0 },
      }),
      (nr = [
        `CbhFAQ8TN`,
        `zBEZU0PYH`,
        `B_NgvDy77`,
        `I5Le9Mt1n`,
        `GTpr7ePGx`,
        `eQ_A3dXWO`,
        `dHCLx1Dq7`,
        `VzI8odYIe`,
        `wQaxC081k`,
        `CMSLqYG_L`,
      ]),
      (rr = `framer-A3lKA`),
      (ir = {
        B_NgvDy77: `framer-v-1icqwhx`,
        CbhFAQ8TN: `framer-v-nvx3jf`,
        CMSLqYG_L: `framer-v-178spse`,
        dHCLx1Dq7: `framer-v-8z9j27`,
        eQ_A3dXWO: `framer-v-1hm2ywe`,
        GTpr7ePGx: `framer-v-jvttjo`,
        I5Le9Mt1n: `framer-v-xkmnyq`,
        VzI8odYIe: `framer-v-znu4ne`,
        wQaxC081k: `framer-v-1fc14b6`,
        zBEZU0PYH: `framer-v-5qgy52`,
      }),
      (ar = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (or = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (sr = {
        "Variant 1": `CbhFAQ8TN`,
        "Variant 10": `CMSLqYG_L`,
        "Variant 2": `zBEZU0PYH`,
        "Variant 3": `B_NgvDy77`,
        "Variant 4": `I5Le9Mt1n`,
        "Variant 5": `GTpr7ePGx`,
        "Variant 6": `eQ_A3dXWO`,
        "Variant 7": `dHCLx1Dq7`,
        "Variant 8": `VzI8odYIe`,
        "Variant 9": `wQaxC081k`,
      }),
      (cr = C.create(c)),
      (lr = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: sr[i.variant] ?? i.variant ?? `CbhFAQ8TN`,
        XysYz95bk: e ?? i.XysYz95bk,
      })),
      (ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge(),
            c = ne(),
            { style: l, className: u, layoutId: d, variant: f, XysYz95bk: m, ...h } = lr(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = B({
              cycleOrder: nr,
              defaultVariant: `CbhFAQ8TN`,
              enabledGestures: tr,
              ref: i,
              variant: f,
              variantClassNames: ir,
            }),
            D = ur(e, E),
            { activeVariantCallback: O, delay: k } = ie(_),
            A = O(async (...e) => {
              if ((w({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            j = W(rr);
          return g(ee, {
            id: d ?? a,
            children: g(cr, {
              animate: E,
              initial: !1,
              children: g(or, {
                value: ar,
                children: g(C.div, {
                  ...h,
                  ...b,
                  className: W(j, `framer-nvx3jf`, u, v),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `CbhFAQ8TN`,
                  onTap: A,
                  ref: i,
                  style: { ...l },
                  ...er(
                    {
                      "B_NgvDy77-hover": { "data-framer-name": void 0 },
                      "B_NgvDy77-pressed": { "data-framer-name": void 0 },
                      "CbhFAQ8TN-hover": { "data-framer-name": void 0 },
                      "CbhFAQ8TN-pressed": { "data-framer-name": void 0 },
                      "CMSLqYG_L-hover": { "data-framer-name": void 0 },
                      "CMSLqYG_L-pressed": { "data-framer-name": void 0 },
                      "dHCLx1Dq7-hover": { "data-framer-name": void 0 },
                      "dHCLx1Dq7-pressed": { "data-framer-name": void 0 },
                      "eQ_A3dXWO-hover": { "data-framer-name": void 0 },
                      "eQ_A3dXWO-pressed": { "data-framer-name": void 0 },
                      "GTpr7ePGx-hover": { "data-framer-name": void 0 },
                      "GTpr7ePGx-pressed": { "data-framer-name": void 0 },
                      "I5Le9Mt1n-hover": { "data-framer-name": void 0 },
                      "I5Le9Mt1n-pressed": { "data-framer-name": void 0 },
                      "VzI8odYIe-hover": { "data-framer-name": void 0 },
                      "VzI8odYIe-pressed": { "data-framer-name": void 0 },
                      "wQaxC081k-hover": { "data-framer-name": void 0 },
                      "wQaxC081k-pressed": { "data-framer-name": void 0 },
                      "zBEZU0PYH-hover": { "data-framer-name": void 0 },
                      "zBEZU0PYH-pressed": { "data-framer-name": void 0 },
                      B_NgvDy77: { "data-framer-name": `Variant 3` },
                      CMSLqYG_L: { "data-framer-name": `Variant 10` },
                      dHCLx1Dq7: { "data-framer-name": `Variant 7` },
                      eQ_A3dXWO: { "data-framer-name": `Variant 6` },
                      GTpr7ePGx: { "data-framer-name": `Variant 5` },
                      I5Le9Mt1n: { "data-framer-name": `Variant 4` },
                      VzI8odYIe: { "data-framer-name": `Variant 8` },
                      wQaxC081k: { "data-framer-name": `Variant 9` },
                      zBEZU0PYH: { "data-framer-name": `Variant 2` },
                    },
                    _,
                    x
                  ),
                  children: g(_e, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 500,
                      intrinsicWidth: 500,
                      loading: L((c?.y || 0) + 0),
                      pixelHeight: 500,
                      pixelWidth: 500,
                      sizes: c?.width || `100vw`,
                      src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                    },
                    className: `framer-p5bnq8`,
                    "data-framer-name": `Cartridge`,
                    layoutDependency: D,
                    layoutId: `rmXFJbYFH`,
                    style: {
                      filter: `drop-shadow(-3px 5px 4px rgba(84, 43, 43, 0.26))`,
                      rotate: 0,
                      WebkitFilter: `drop-shadow(-3px 5px 4px rgba(84, 43, 43, 0.26))`,
                    },
                    variants: {
                      "B_NgvDy77-hover": { rotate: 0 },
                      "B_NgvDy77-pressed": { rotate: -2 },
                      "CbhFAQ8TN-pressed": { rotate: -2 },
                      "CMSLqYG_L-hover": { rotate: 0 },
                      "CMSLqYG_L-pressed": { rotate: -1 },
                      "dHCLx1Dq7-hover": { rotate: 0 },
                      "dHCLx1Dq7-pressed": { rotate: 3 },
                      "eQ_A3dXWO-hover": { rotate: 0 },
                      "eQ_A3dXWO-pressed": { rotate: -2 },
                      "GTpr7ePGx-hover": { rotate: 0 },
                      "GTpr7ePGx-pressed": { rotate: -2 },
                      "I5Le9Mt1n-hover": { rotate: 0 },
                      "I5Le9Mt1n-pressed": { rotate: 2 },
                      "VzI8odYIe-hover": { rotate: 0 },
                      "VzI8odYIe-pressed": { rotate: -3 },
                      "wQaxC081k-hover": { rotate: 0 },
                      "wQaxC081k-pressed": { rotate: 2 },
                      "zBEZU0PYH-hover": { rotate: 0 },
                      "zBEZU0PYH-pressed": { rotate: 2 },
                    },
                    ...er(
                      {
                        "B_NgvDy77-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/SqvF2Gb6xmycfHWKSuXnIH8tSvs.png`,
                          },
                        },
                        "CbhFAQ8TN-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + -28),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "CMSLqYG_L-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "dHCLx1Dq7-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "eQ_A3dXWO-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "GTpr7ePGx-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/cJYfnyD78SnLPAUaEfk9EZR8nw.png`,
                          },
                        },
                        "I5Le9Mt1n-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/csg8zIMecCq9aKu3cLlS0X0kQ.png`,
                          },
                        },
                        "VzI8odYIe-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "wQaxC081k-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + (c?.height || 236) - 264),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/LXNwmSf7JHJsJqW8wjqR0yTc6lY.png`,
                          },
                        },
                        "zBEZU0PYH-hover": {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + -28),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/B8ridW9lCxtaTcoTj7npTLZOurc.png`,
                          },
                        },
                        B_NgvDy77: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + 0),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/SqvF2Gb6xmycfHWKSuXnIH8tSvs.png`,
                          },
                        },
                        GTpr7ePGx: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + 0),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/cJYfnyD78SnLPAUaEfk9EZR8nw.png`,
                          },
                        },
                        I5Le9Mt1n: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + 0),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/csg8zIMecCq9aKu3cLlS0X0kQ.png`,
                          },
                        },
                        zBEZU0PYH: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 500,
                            intrinsicWidth: 500,
                            loading: L((c?.y || 0) + 0),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            sizes: c?.width || `100vw`,
                            src: `../../assets/images/B8ridW9lCxtaTcoTj7npTLZOurc.png`,
                          },
                        },
                      },
                      _,
                      x
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-A3lKA.framer-1698kna, .framer-A3lKA .framer-1698kna { display: block; }`,
          `.framer-A3lKA.framer-nvx3jf { cursor: pointer; height: 236px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 236px; }`,
          `.framer-A3lKA .framer-p5bnq8 { aspect-ratio: 1 / 1; flex: none; height: auto; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-A3lKA.framer-v-nvx3jf.hover .framer-p5bnq8, .framer-A3lKA.framer-v-5qgy52.hover .framer-p5bnq8 { top: -28px; }`,
          `.framer-A3lKA.framer-v-1icqwhx.hover .framer-p5bnq8, .framer-A3lKA.framer-v-xkmnyq.hover .framer-p5bnq8, .framer-A3lKA.framer-v-jvttjo.hover .framer-p5bnq8, .framer-A3lKA.framer-v-1hm2ywe.hover .framer-p5bnq8, .framer-A3lKA.framer-v-8z9j27.hover .framer-p5bnq8, .framer-A3lKA.framer-v-znu4ne.hover .framer-p5bnq8, .framer-A3lKA.framer-v-1fc14b6.hover .framer-p5bnq8, .framer-A3lKA.framer-v-178spse.hover .framer-p5bnq8 { bottom: 28px; top: unset; }`,
        ],
        `framer-A3lKA`
      )),
      (Q.displayName = `Game`),
      (Q.defaultProps = { height: 236, width: 236 }),
      be(Q, {
        variant: {
          options: [
            `CbhFAQ8TN`,
            `zBEZU0PYH`,
            `B_NgvDy77`,
            `I5Le9Mt1n`,
            `GTpr7ePGx`,
            `eQ_A3dXWO`,
            `dHCLx1Dq7`,
            `VzI8odYIe`,
            `wQaxC081k`,
            `CMSLqYG_L`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
            `Variant 7`,
            `Variant 8`,
            `Variant 9`,
            `Variant 10`,
          ],
          title: `Variant`,
          type: V.Enum,
        },
        XysYz95bk: { title: `Click`, type: V.EventHandler },
      }),
      R(Q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function fr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    (v(),
      G(),
      M(),
      y(),
      Ln(),
      ke(),
      Vn(),
      Ee(),
      $n(),
      dr(),
      (pr = F(Z)),
      (mr = F(Q)),
      (hr = F(xn)),
      (gr = [`nDWUUeC7V`, `ipYD1V2CT`, `slSq3dDuR`, `TtclBY3wr`, `je7AkP5VP`]),
      (_r = `framer-BIafL`),
      (vr = {
        ipYD1V2CT: `framer-v-171m8x9`,
        je7AkP5VP: `framer-v-1bl18ys`,
        nDWUUeC7V: `framer-v-elzsx5`,
        slSq3dDuR: `framer-v-40qllk`,
        TtclBY3wr: `framer-v-1xpmshm`,
      }),
      (yr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (br = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xr = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (Sr = {
        "Variant 1": `nDWUUeC7V`,
        "Variant 2": `ipYD1V2CT`,
        "Variant 3": `slSq3dDuR`,
        "Variant 4": `TtclBY3wr`,
        "Variant 5": `je7AkP5VP`,
      }),
      (Cr = C.create(c)),
      (wr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Sr[r.variant] ?? r.variant ?? `nDWUUeC7V`,
      })),
      (Tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Er = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge(),
            l = ne(),
            { style: u, className: d, layoutId: f, variant: m, ..._ } = wr(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              cycleOrder: gr,
              defaultVariant: `nDWUUeC7V`,
              ref: i,
              variant: m,
              variantClassNames: vr,
            }),
            O = Tr(e, D),
            k = W(_r, Bn, Oe, De);
          oe();
          let { activeVariantCallback: A, delay: j } = ie(v),
            te = A(async (...e) => {
              E(`nDWUUeC7V`);
            }),
            M = A(async (...e) => {
              E(`ipYD1V2CT`);
            }),
            N = A(async (...e) => {
              E(`slSq3dDuR`);
            }),
            P = A(async (...e) => {
              E(`TtclBY3wr`);
            }),
            F = A(async (...e) => {
              E(`je7AkP5VP`);
            });
          return g(ee, {
            id: f ?? a,
            children: g(Cr, {
              animate: D,
              initial: !1,
              children: g(xr, {
                value: yr,
                children: h(C.div, {
                  ..._,
                  ...x,
                  className: W(k, `framer-elzsx5`, d, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `nDWUUeC7V`,
                  ref: i,
                  style: { ...u },
                  ...fr(
                    {
                      ipYD1V2CT: { "data-framer-name": `Variant 2` },
                      je7AkP5VP: { "data-framer-name": `Variant 5` },
                      slSq3dDuR: { "data-framer-name": `Variant 3` },
                      TtclBY3wr: { "data-framer-name": `Variant 4` },
                    },
                    v,
                    S
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-ca77ry`,
                      "data-framer-name": `Overview`,
                      layoutDependency: O,
                      layoutId: `SMbHsqKkE`,
                      children: [
                        h(C.div, {
                          className: `framer-lkore3`,
                          layoutDependency: O,
                          layoutId: `MHENoTDZj`,
                          children: [
                            g(_e, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 829,
                                intrinsicWidth: 1105,
                                pixelHeight: 829,
                                pixelWidth: 1105,
                                sizes: l?.width || `100vw`,
                                src: `../../assets/images/wL1EfTEVR7dXrVTR2ue6MwZJVw.png`,
                              },
                              className: `framer-13sfg00`,
                              layoutDependency: O,
                              layoutId: `WkvhAWzow`,
                              ...fr(
                                {
                                  ipYD1V2CT: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 829,
                                      intrinsicWidth: 1105,
                                      pixelHeight: 1500,
                                      pixelWidth: 2e3,
                                      sizes: l?.width || `100vw`,
                                      src: `https://framerusercontent.com/images/ilwcOd7KeVT4ys59tCKQwJORzk.png?scale-down-to=1024&width=2000&height=1500`,
                                    },
                                  },
                                  je7AkP5VP: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 829,
                                      intrinsicWidth: 1105,
                                      pixelHeight: 1080,
                                      pixelWidth: 1437,
                                      sizes: l?.width || `100vw`,
                                      src: `https://framerusercontent.com/images/ti1jWco3OH6jaLwpUfeDhkEsfkA.png?scale-down-to=1024&width=1437&height=1080`,
                                    },
                                  },
                                  slSq3dDuR: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 829,
                                      intrinsicWidth: 1105,
                                      pixelHeight: 2e3,
                                      pixelWidth: 2520,
                                      sizes: l?.width || `100vw`,
                                      src: `https://framerusercontent.com/images/w06eEfhML6eSyM3eVdfwATlZSM.png?scale-down-to=1024&width=2520&height=2000`,
                                    },
                                  },
                                  TtclBY3wr: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 829,
                                      intrinsicWidth: 1105,
                                      pixelHeight: 1080,
                                      pixelWidth: 2560,
                                      sizes: l?.width || `100vw`,
                                      src: `https://framerusercontent.com/images/Qp5qBFQnWtXsVJq1kEiVA3OJ97I.png?scale-down-to=1024&width=2560&height=1080`,
                                    },
                                  },
                                },
                                v,
                                S
                              ),
                            }),
                            h(C.div, {
                              className: `framer-1t4rq80`,
                              "data-framer-name": `Buttons`,
                              layoutDependency: O,
                              layoutId: `wkZNCiUfF`,
                              children: [
                                g(H, {
                                  height: 60,
                                  width: `max(${l?.width || `100vw`} / 2, 1px)`,
                                  children: g(U, {
                                    className: `framer-571um-container`,
                                    layoutDependency: O,
                                    layoutId: `BHo3S9wnp-container`,
                                    nodeId: `BHo3S9wnp`,
                                    rendersWithMotion: !0,
                                    scopeId: `fQoxRdCQM`,
                                    children: g(Z, {
                                      height: `100%`,
                                      id: `BHo3S9wnp`,
                                      layoutId: `BHo3S9wnp`,
                                      style: { height: `100%`, width: `100%` },
                                      uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                      variant: br(`cxni6AwS8`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                g(ue, {
                                  links: [
                                    {
                                      href: { webPageId: `M_jvSiMT7` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xs_Q6y_ZJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zkz0NFwtf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BK0u9435y` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CWb0qR9SC` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    g(H, {
                                      height: 60,
                                      width: `max(${l?.width || `100vw`} / 2, 1px)`,
                                      children: g(U, {
                                        className: `framer-qrp62q-container`,
                                        layoutDependency: O,
                                        layoutId: `PULGHqDls-container`,
                                        nodeId: `PULGHqDls`,
                                        rendersWithMotion: !0,
                                        scopeId: `fQoxRdCQM`,
                                        children: g(Z, {
                                          height: `100%`,
                                          id: `PULGHqDls`,
                                          layoutId: `PULGHqDls`,
                                          style: { height: `100%`, width: `100%` },
                                          uwIkV2V7p: e[0],
                                          variant: br(`fZ1zKjkpQ`),
                                          width: `100%`,
                                          ...fr(
                                            {
                                              ipYD1V2CT: { uwIkV2V7p: e[1] },
                                              je7AkP5VP: { uwIkV2V7p: e[4] },
                                              slSq3dDuR: { uwIkV2V7p: e[2] },
                                              TtclBY3wr: { uwIkV2V7p: e[3] },
                                            },
                                            v,
                                            S
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        h(C.div, {
                          className: `framer-qesir0`,
                          "data-framer-name": `Game Info`,
                          layoutDependency: O,
                          layoutId: `uzUg1M7NJ`,
                          children: [
                            h(C.div, {
                              className: `framer-146s6ey`,
                              "data-framer-name": `Header`,
                              layoutDependency: O,
                              layoutId: `kgihczzUV`,
                              children: [
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.h2, {
                                      className: `framer-styles-preset-18rgopz`,
                                      "data-styles-preset": `UT35m0f7x`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.strong, { children: `Cat Notes` }),
                                    }),
                                  }),
                                  className: `framer-3nwiqh`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  layoutDependency: O,
                                  layoutId: `i6udyIyZ8`,
                                  style: {
                                    "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...fr(
                                    {
                                      ipYD1V2CT: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, { children: `Get Flagged!` }),
                                          }),
                                        }),
                                      },
                                      je7AkP5VP: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, { children: `KopyCut` }),
                                          }),
                                        }),
                                      },
                                      slSq3dDuR: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, { children: `Kaimera` }),
                                          }),
                                        }),
                                      },
                                      TtclBY3wr: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, {
                                              children: `What Stays Behind`,
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                }),
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.h3, {
                                      className: `framer-styles-preset-1innnwq`,
                                      "data-styles-preset": `rvUVMehhh`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                      },
                                      children: `Game Designer, Composer`,
                                    }),
                                  }),
                                  className: `framer-1j6vngp`,
                                  "data-framer-name": `Role`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `krYVT7aLH`,
                                  style: {
                                    "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...fr(
                                    {
                                      ipYD1V2CT: {
                                        children: g(c, {
                                          children: g(C.h3, {
                                            className: `framer-styles-preset-1innnwq`,
                                            "data-styles-preset": `rvUVMehhh`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                            },
                                            children: `Level Designer, Composer`,
                                          }),
                                        }),
                                      },
                                      slSq3dDuR: {
                                        children: g(c, {
                                          children: g(C.h3, {
                                            className: `framer-styles-preset-1innnwq`,
                                            "data-styles-preset": `rvUVMehhh`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                            },
                                            children: `Solo Developer`,
                                          }),
                                        }),
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                }),
                              ],
                            }),
                            g(C.div, {
                              className: `framer-1ton3td`,
                              "data-framer-name": `Description`,
                              layoutDependency: O,
                              layoutId: `FA0sPW6II`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: h(c, {
                                  children: [
                                    g(C.p, {
                                      className: `framer-styles-preset-17ydyq9`,
                                      "data-styles-preset": `vJYEnMnRI`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: `Cat Notes is a puzzle game where you arrange the sleeping spots of your cats. The story of the cats unfolds as you learn about their preferences throughout the game.`,
                                    }),
                                    g(C.p, {
                                      className: `framer-styles-preset-17ydyq9`,
                                      "data-styles-preset": `vJYEnMnRI`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.strong, {
                                        children: `Top 2 Best Game & Best Visual Nominee in GIMERSIA Inspire 2025.`,
                                      }),
                                    }),
                                  ],
                                }),
                                className: `framer-3z5gy7`,
                                "data-framer-name": `Description`,
                                fonts: [`Inter`, `Inter-Bold`],
                                layoutDependency: O,
                                layoutId: `K9T0447UL`,
                                style: {
                                  "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                  "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...fr(
                                  {
                                    ipYD1V2CT: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                            },
                                            children: `Get Flagged! is a "puzzle" game where you figure out how to play the game to reach a certain objective. Throw out all your expectations from video games and complete all the levels.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, {
                                              children: `Top 3 Best Game in Garena Game Jam 3.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    je7AkP5VP: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                            },
                                            children: `KopyCut gives you the ability to transform the levels by cutting, copying, and deleting tiles and use it to your advantage. Find the files you need by traversing through folders.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, {
                                              children: `GameJam+ 2025/2026 Finalist`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    slSq3dDuR: {
                                      children: g(c, {
                                        children: g(C.p, {
                                          className: `framer-styles-preset-17ydyq9`,
                                          "data-styles-preset": `vJYEnMnRI`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                          },
                                          children: `Kaimera is a sokoban-style puzzle game where you try to escape a bioweapon research facility as hell breaks loose. Reach the exit before the virus engulfs you.`,
                                        }),
                                      }),
                                      fonts: [`Inter`],
                                    },
                                    TtclBY3wr: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                            },
                                            children: `What Says Behind is a space management puzzle game with a story told through the items you put in the bag. Bring what's most important to the next journey.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                            },
                                            children: g(C.strong, {
                                              children: `Best Gameplay & Best Visual Nominee in GIMJAM 2026.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  v,
                                  S
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    g(H, {
                      children: g(U, {
                        className: `framer-cx4q6p-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `pI3Qsif2r-container`,
                        nodeId: `pI3Qsif2r`,
                        rendersWithMotion: !0,
                        scopeId: `fQoxRdCQM`,
                        children: g(xn, {
                          align: `center`,
                          ariaLabel: ``,
                          arrowObject: {
                            arrowFill: `rgb(52, 101, 155)`,
                            arrowPadding: 20,
                            arrowRadius: 3,
                            arrowSize: 64,
                            showMouseControls: !0,
                          },
                          axis: !0,
                          borderRadius: 0,
                          fadeObject: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeTransition: {
                              damping: 60,
                              delay: 0,
                              mass: 1,
                              stiffness: 500,
                              type: `spring`,
                            },
                            fadeWidth: 25,
                          },
                          gap: 10,
                          height: `100%`,
                          id: `pI3Qsif2r`,
                          layoutId: `pI3Qsif2r`,
                          padding: 115,
                          paddingBottom: 0,
                          paddingLeft: 115,
                          paddingPerSide: !0,
                          paddingRight: 115,
                          paddingTop: 0,
                          progressObject: {
                            dotsActiveOpacity: 1,
                            dotsBackground: `rgba(0, 0, 0, 0.2)`,
                            dotsBlur: 4,
                            dotsFill: `rgb(255, 255, 255)`,
                            dotsGap: 10,
                            dotsInset: 10,
                            dotSize: 10,
                            dotsOpacity: 0.5,
                            dotsPadding: 10,
                            dotsRadius: 50,
                            showProgressDots: !1,
                            showScrollbar: !1,
                          },
                          sizingObject: {
                            heightInset: 0,
                            heightRows: 2,
                            heightType: `auto`,
                            widthColumns: 2,
                            widthInset: 0,
                            widthType: `auto`,
                          },
                          slots: [
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-16aixkj-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `NE0bzh_Kj-container`,
                                nodeId: `NE0bzh_Kj`,
                                rendersWithMotion: !0,
                                scopeId: `fQoxRdCQM`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `NE0bzh_Kj`,
                                  layoutId: `NE0bzh_Kj`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: br(`CbhFAQ8TN`),
                                  width: `100%`,
                                  XysYz95bk: te,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1ix9uvo-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `hmcvfOCzH-container`,
                                nodeId: `hmcvfOCzH`,
                                rendersWithMotion: !0,
                                scopeId: `fQoxRdCQM`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `hmcvfOCzH`,
                                  layoutId: `hmcvfOCzH`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: br(`zBEZU0PYH`),
                                  width: `100%`,
                                  XysYz95bk: M,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-img4fa-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `Gsb178fEt-container`,
                                nodeId: `Gsb178fEt`,
                                rendersWithMotion: !0,
                                scopeId: `fQoxRdCQM`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `Gsb178fEt`,
                                  layoutId: `Gsb178fEt`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: br(`B_NgvDy77`),
                                  width: `100%`,
                                  XysYz95bk: N,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-o749b6-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `FPlmoteq0-container`,
                                nodeId: `FPlmoteq0`,
                                rendersWithMotion: !0,
                                scopeId: `fQoxRdCQM`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `FPlmoteq0`,
                                  layoutId: `FPlmoteq0`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: br(`I5Le9Mt1n`),
                                  width: `100%`,
                                  XysYz95bk: P,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1qx84ju-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `BR7dJIZOZ-container`,
                                nodeId: `BR7dJIZOZ`,
                                rendersWithMotion: !0,
                                scopeId: `fQoxRdCQM`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `BR7dJIZOZ`,
                                  layoutId: `BR7dJIZOZ`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: br(`GTpr7ePGx`),
                                  width: `100%`,
                                  XysYz95bk: F,
                                }),
                              }),
                            }),
                          ],
                          snapObject: { fluid: !1, snap: !0, snapEdge: `center` },
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-BIafL.framer-1b8k8e6, .framer-BIafL .framer-1b8k8e6 { display: block; }`,
          `.framer-BIafL.framer-elzsx5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 100px 10px; height: min-content; justify-content: flex-start; max-width: 960px; overflow: visible; padding: 0px; position: relative; width: 810px; }`,
          `.framer-BIafL .framer-ca77ry { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BIafL .framer-lkore3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 43px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-BIafL .framer-13sfg00 { flex: none; height: 157px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-BIafL .framer-1t4rq80 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BIafL .framer-571um-container, .framer-BIafL .framer-qrp62q-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-BIafL .framer-qesir0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 54px; height: min-content; justify-content: flex-start; max-width: 76%; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 60px; position: relative; width: 73%; z-index: 0; }`,
          `.framer-BIafL .framer-146s6ey { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BIafL .framer-3nwiqh, .framer-BIafL .framer-1j6vngp, .framer-BIafL .framer-3z5gy7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-BIafL .framer-1ton3td { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BIafL .framer-cx4q6p-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-BIafL .framer-16aixkj-container, .framer-BIafL .framer-1ix9uvo-container, .framer-BIafL .framer-img4fa-container, .framer-BIafL .framer-o749b6-container, .framer-BIafL .framer-1qx84ju-container { height: 236px; position: relative; width: 236px; }`,
          ...zn,
          ...Ce,
          ...we,
        ],
        `framer-BIafL`
      )),
      (Er.displayName = `Ludography Tablet`),
      (Er.defaultProps = { height: 670, width: 810 }),
      be(Er, {
        variant: {
          options: [`nDWUUeC7V`, `ipYD1V2CT`, `slSq3dDuR`, `TtclBY3wr`, `je7AkP5VP`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      R(
        Er,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ...pr,
          ...mr,
          ...hr,
          ...I(Rn),
          ...I(Te),
          ...I(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Er.loader = { load: (e, t) => P([() => N(Z, {}, t), () => N(Q, {}, t)], t) }));
  });
function Or() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function kr(e) {
  let t = b.useRef(Or);
  return (
    b.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      jr() && Or();
      let n = t.current;
      return n(...e);
    }
  );
}
var Ar,
  jr,
  Mr = e(() => {
    (y(),
      (Ar = b.createContext(!0)),
      (jr =
        `use` in b
          ? () => {
              try {
                return b.use(Ar);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function Nr(e) {
  let {
      slots: t = [],
      startFrom: n,
      direction: i,
      effectsOptions: a,
      autoPlayControl: c,
      dragControl: u,
      widthSizing: m,
      heightSizing: _,
      alignment: v,
      gap: y,
      padding: b,
      paddingPerSide: S,
      paddingTop: E,
      paddingRight: ee,
      paddingBottom: j,
      paddingLeft: M,
      itemAmount: N,
      fadeOptions: P,
      intervalControl: F,
      transitionControl: I,
      arrowOptions: L,
      borderRadius: ne,
      progressOptions: re,
      style: ie,
    } = e,
    {
      effectsOpacity: ae,
      effectsScale: oe,
      effectsRotate: R,
      effectsPerspective: se,
      effectsHover: ce,
      playOffscreen: le,
    } = a,
    { fadeContent: z, overflow: ue, fadeWidth: de, fadeInset: fe, fadeAlpha: me } = P,
    {
      showMouseControls: he,
      arrowSize: B,
      arrowRadius: V,
      arrowFill: ge,
      leftArrow: _e,
      rightArrow: ve,
      arrowShouldSpace: H = !0,
      arrowShouldFadeIn: ye = !1,
      arrowPosition: U,
      arrowPadding: W,
      arrowGap: be,
      arrowPaddingTop: xe,
      arrowPaddingRight: G,
      arrowPaddingBottom: Se,
      arrowPaddingLeft: Ce,
    } = L,
    {
      showProgressDots: we,
      dotSize: Te,
      dotsInset: Ee,
      dotsRadius: De,
      dotsPadding: Oe,
      dotsGap: ke,
      dotsFill: Ae,
      dotsBackground: je,
      dotsActiveOpacity: Me,
      dotsOpacity: Ne,
      dotsBlur: Pe,
    } = re,
    Fe = S ? `${E}px ${ee}px ${j}px ${M}px` : `${b}px`,
    K = pe.current() === pe.canvas,
    Ie = t.filter(Boolean),
    q = d.count(Ie);
  if (!(q > 0))
    return h(`section`, {
      style: Ur,
      children: [
        g(`div`, { style: Wr, children: `⭐️` }),
        g(`p`, { style: Gr, children: `Connect to Content` }),
        g(`p`, {
          style: Kr,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Le = p(null),
    Re = p(null),
    ze = s((e) => {
      ((Le.current = e), Le.current && tt());
    }, []),
    [J, Be] = f({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    Y = i === `left` || i === `right`,
    Ve = Fr(),
    He = Y && Ve === `rtl` ? -1 : 1,
    [Ue, We] = f(!1),
    [Ge, Ke] = f(c),
    [qe, Je] = f(!1),
    X = J?.item !== null && J?.parent !== null && Ve !== null,
    Ye = Math.ceil((n + N) / q),
    Xe = [],
    Ze = Ye * 4;
  (K || !X) && (Ze = Ye);
  let [Qe, $e] = f(n + q);
  x(() => {
    if (!J.item || !Ve) return;
    let e = -1 * Qe * ((J.item ?? 0) + y) * (Ve === `rtl` ? -1 : 1);
    lt.get() !== e && O(lt, e, I);
  }, [Qe, J.item, y, Ve]);
  let et = () => {
      let e = Re.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = Y ? t : n,
        i = Math.max(1, N),
        a = Math.max(0, (r - y * (i - 1)) / i),
        o = q * (a + y),
        s = Y ? a : t,
        c = Y ? n : a,
        u = Y
          ? Math.max(document.documentElement.clientWidth || 0, l.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, l.innerHeight || 0, n);
      Be({ parent: r, children: o, item: a, itemWidth: s, itemHeight: c, viewportLength: u });
    },
    tt = kr(() => {
      D.read(et, !1, !0);
    });
  (r(() => {
    tt();
  }, [Ie.length, N, y, i, b, S, E, ee, j, M]),
    x(() => {
      let e = Le.current;
      if (e)
        return rt(e, ({ size: e }) => {
          ((Re.current = e), !(!e.width || !e.height) && tt());
        });
    }, []));
  let nt = K ? 0 : J?.children,
    [it, at] = f(!1),
    ot = p(null),
    st = w(ot),
    ct = T() && st,
    lt = te(nt),
    ut = K
      ? te(0)
      : A(lt, (e) => {
          let t = nt ?? 0,
            n = e ?? 0,
            r = k(-t * He, -t * He * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    dt = k(0, q, Qe),
    ft = (e) => {
      o(() => $e((t) => t + e));
    },
    pt = (e) => {
      let t = e - k(0, q, Qe);
      o(() => $e((e) => e + t));
    },
    mt = (i === `right` || i === `bottom` ? -1 : 1) * He,
    ht = c && Ge && (le || ct) && !K && q > 1 && !it && X;
  x(() => {
    if (!ht) return;
    let e = setTimeout(() => {
      ft(mt);
    }, F * 1e3);
    return () => clearTimeout(e);
  }, [ht, mt, F, Qe]);
  let gt = () => {
      o(() => at(!0));
    },
    _t = (e, { offset: t, velocity: n }) => {
      o(() => at(!1));
      let r = Y ? t.x : t.y,
        i = Y ? n.x : n.y,
        a = r < -J.item / 2,
        s = r > J.item / 2,
        c = Math.round(Math.abs(r) / J.item),
        l = c === 0 ? 1 : c;
      i > 200 ? ft(-l * He) : i < -200 ? ft(l * He) : (a && ft(c * He), s && ft(-c * He));
    },
    vt = Math.max(0, Math.min(n ?? 0, Math.max(0, q - 1))),
    yt = (vt * 100) / N,
    bt = (vt * y) / N,
    xt = 0,
    St = `calc(${100 / N}% - ${y}px + ${y / N}px)`,
    Ct = Y ? _ : m;
  for (let e = 0; e < Ze; e++)
    Xe = Xe.concat(
      d.map(Ie, (t, n) => {
        let r = t,
          i = Ct === `fit` ? (Y ? r.props?.height : r.props?.width) : `100%`;
        return g(
          Xr,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: Y ? (N > 1 ? St : `100%`) : i,
            height: Y ? i : N > 1 ? St : `100%`,
            size: J,
            child: t,
            numChildren: Ie?.length,
            wrappedXOrY: ut,
            childCounter: xt++,
            gap: y,
            isCanvas: K,
            isInitialized: X,
            isHorizontal: Y,
            effectsOpacity: ae,
            effectsScale: oe,
            effectsRotate: R,
            writingDirection: Ve,
            rtlDirectionModifier: He,
            children: e + n,
          },
          e + n + `lg`
        );
      })
    );
  let wt = Y ? `to right` : `to bottom`,
    Tt = de / 2,
    Et = 100 - de / 2,
    Dt = `linear-gradient(${wt}, rgba(0, 0, 0, ${me}) ${Yr(fe, 0, Tt)}%, rgba(0, 0, 0, 1) ${Tt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${me}) ${100 - fe}%)`,
    Ot = [],
    kt = {};
  if (we) {
    for (let e = 0; e < Ie?.length; e++)
      Ot.push(
        g(
          Zr,
          {
            dotStyle: { ...$r, width: Te, height: Te, backgroundColor: Ae },
            buttonStyle: qr,
            selectedOpacity: Me,
            opacity: Ne,
            disabled: !K && !X,
            onClick: () => pt(e),
            wrappedIndex: K || !X ? vt : dt,
            total: q,
            index: e,
            gap: ke,
            padding: Oe,
            isHorizontal: Y,
          },
          e
        )
      );
    Pe > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Pe}px)`);
  }
  let At =
      X && u
        ? {
            drag: Y ? `x` : `y`,
            onDragStart: gt,
            onDragEnd: _t,
            dragDirectionLock: !0,
            values: { x: lt, y: lt },
            dragMomentum: !1,
          }
        : {},
    jt = U === `top-left` || U === `top-mid` || U === `top-right`,
    Mt = U === `bottom-left` || U === `bottom-mid` || U === `bottom-right`,
    Nt = U === `top-left` || U === `bottom-left`,
    Pt = U === `top-right` || U === `bottom-right`,
    Ft = U === `top-mid` || U === `bottom-mid` || U === `auto`,
    It = _e || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Lt = ve || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI-69eb8c.svg`;
  return h(`section`, {
    className: `${Lr} ${Y ? Rr : zr}`,
    style: {
      ...Hr,
      padding: Fe,
      WebkitMaskImage: z ? Dt : void 0,
      maskImage: z ? Dt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (We(!0), ce || Ke(!1));
    },
    onMouseLeave: () => {
      (We(!1), ce || Ke(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), o(() => Je(!0)));
    },
    onMouseUp: () => o(() => Je(!1)),
    ref: ot,
    children: [
      g(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: ue ? `visible` : `hidden`,
          borderRadius: ne,
          userSelect: `none`,
          perspective: K ? `none` : se,
        },
        children: g(C.ul, {
          ref: ze,
          ...At,
          style: {
            ...Hr,
            gap: y,
            placeItems: v,
            ...(K || !X
              ? {
                  transform: Y
                    ? `translateX(calc(${Vr} * (${yt}% + ${bt}px)))`
                    : `translateY(calc(${Vr} * (${yt}% + ${bt}px)))`,
                }
              : { x: Y ? ut : 0, y: Y ? 0 : ut }),
            flexDirection: Y ? `row` : `column`,
            transformStyle: R !== 0 && !K ? `preserve-3d` : void 0,
            cursor: (K || X) && u ? (qe ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...ie,
          },
          children: Xe,
        }),
      }),
      h(`fieldset`, {
        style: { ...Jr },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          h(C.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: Y ? `row` : `column`,
              justifyContent: H ? `space-between` : `center`,
              gap: H ? `unset` : be,
              opacity: ye || (!K && !X) ? 0 : 1,
              alignItems: `center`,
              inset: W,
              top: H ? W : jt ? xe : `unset`,
              left: H ? W : Nt ? Ce : Ft ? 0 : `unset`,
              right: H ? W : Pt ? G : Ft ? 0 : `unset`,
              bottom: H ? W : Mt ? Se : `unset`,
            },
            animate: K || X ? (ye ? { opacity: +!!Ue } : { opacity: 1 }) : { opacity: 0 },
            transition: I,
            children: [
              g(C.button, {
                type: `button`,
                style: {
                  ...qr,
                  backgroundColor: ge,
                  width: B,
                  height: B,
                  borderRadius: V,
                  rotate: Y ? 0 : 90,
                  display: he ? `block` : `none`,
                  pointerEvents: K || X ? `auto` : `none`,
                  cursor: K || X ? `pointer` : `default`,
                },
                disabled: !(K || X),
                onClick: () => ft(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: g(`img`, {
                  decoding: `async`,
                  width: B,
                  height: B,
                  src: Y && Ve === `rtl` ? Lt : It,
                  alt: `Back Arrow`,
                }),
              }),
              g(C.button, {
                type: `button`,
                style: {
                  ...qr,
                  backgroundColor: ge,
                  width: B,
                  height: B,
                  borderRadius: V,
                  rotate: Y ? 0 : 90,
                  display: he ? `block` : `none`,
                  pointerEvents: K || X ? `auto` : `none`,
                  cursor: K || X ? `pointer` : `default`,
                },
                disabled: !(K || X),
                onClick: () => ft(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: g(`img`, {
                  decoding: `async`,
                  width: B,
                  height: B,
                  src: Y && Ve === `rtl` ? It : Lt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? g(C.div, {
                style: {
                  ...Qr,
                  left: Y ? `50%` : Ee,
                  top: Y ? `unset` : `50%`,
                  transform: Y ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: Y ? `row` : `column`,
                  bottom: Y ? Ee : `unset`,
                  borderRadius: De,
                  backgroundColor: je,
                  userSelect: `none`,
                  ...kt,
                  opacity: +!!K,
                  pointerEvents: K || X ? `auto` : `none`,
                },
                animate: { opacity: +!!X },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
}
function Pr() {
  return l?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Fr() {
  let [e, t] = f(null);
  return (
    x(
      () => (
        t(Pr()),
        Ir(() => {
          t(Pr());
        })
      ),
      []
    ),
    e
  );
}
function Ir(e) {
  return (
    ti.push(e),
    ei ||
      ((ei = new MutationObserver(() => ti.forEach((e) => e()))),
      ei.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (ti.splice(ti.indexOf(e), 1), ti.length === 0 && (ei?.disconnect(), (ei = null)));
    }
  );
}
var Lr,
  Rr,
  zr,
  Br,
  Vr,
  $,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni = e(() => {
    (a(),
      v(),
      qt(),
      G(),
      M(),
      y(),
      Mr(),
      (Lr = `framer-slideshow`),
      (Rr = `framer-slideshow-axis-x`),
      (zr = `framer-slideshow-axis-y`),
      (Br = `--framer-dir-multiplier`),
      (Vr = `var(${Br}, -1)`),
      ($ = ve(
        Nr,
        [`.${Rr} { ${Br}: -1; }`, `html[dir="rtl"] .${Rr} { ${Br}: 1; }`, `.${zr} { ${Br}: -1; }`],
        `framer-slideshow-component`
      )),
      ($.defaultProps = {
        direction: `left`,
        widthSizing: `fill`,
        heightSizing: `fill`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      be($, {
        slots: { type: V.Array, title: `Content`, control: { type: V.ComponentInstance } },
        direction: {
          type: V.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: $.defaultProps.direction,
        },
        autoPlayControl: { type: V.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: V.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: V.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: V.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.startFrom,
        },
        effectsOptions: {
          type: V.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: V.Number,
              title: `Opacity`,
              defaultValue: $.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: V.Number,
              title: `Scale`,
              defaultValue: $.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: V.Number,
              title: `Perspective`,
              defaultValue: $.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: V.Number,
              title: `Rotate`,
              defaultValue: $.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: V.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: V.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        widthSizing: {
          type: V.Enum,
          title: `Width`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: $.defaultProps.widthSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `left` || e.direction === `right`,
        },
        heightSizing: {
          type: V.Enum,
          title: `Height`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: $.defaultProps.heightSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `top` || e.direction === `bottom`,
        },
        alignment: {
          type: V.Enum,
          title: `Align`,
          hidden: (e) =>
            (e.direction === `left` || e.direction === `right` ? e.heightSizing : e.widthSizing) !==
            `fit`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: V.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.itemAmount,
        },
        gap: { type: V.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: V.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: V.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: V.Transition,
          defaultValue: $.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: V.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: V.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: V.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: V.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: V.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: V.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: V.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: V.Boolean,
              title: `Show`,
              defaultValue: $.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: V.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: $.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: V.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: V.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: V.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: $.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: V.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: V.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: V.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: $.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: V.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: V.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: V.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: V.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: V.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: V.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: V.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: V.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: V.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: V.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: V.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: V.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: V.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: V.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: V.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: V.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: V.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: V.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: V.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Hr = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Ur = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Wr = { fontSize: 32, marginBottom: 10 }),
      (Gr = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Kr = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (qr = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Jr = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Yr = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Xr = u(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: a,
            size: o,
            gap: s,
            wrappedXOrY: c,
            numChildren: l,
            childCounter: u,
            isCanvas: d,
            isInitialized: f,
            effectsOpacity: m,
            effectsScale: h,
            effectsRotate: _,
            isHorizontal: v,
            index: y,
            writingDirection: b,
            rtlDirectionModifier: C,
          } = e,
          w = p(null),
          T = o?.item ?? 0,
          E = o?.parent ?? 0,
          D = (T + s) * u,
          O = (v && b === `rtl` ? [T - s, 0, -E + T - s, -E - s] : [-T, 0, E - T + s, E]).map(
            (e) => e - D * C
          ),
          k = !d && A(c, O, v && b === `rtl` ? [_, 0, 0, -_] : [-_, 0, 0, _]),
          j = !d && A(c, O, [_, 0, 0, -_]),
          te = !d && A(c, O, [m, 1, 1, m]),
          M = !d && A(c, O, [h, 1, 1, h]),
          N = !d && A(c, O, v && b === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          P =
            !d &&
            A(c, (e) => {
              let t = Math.min(O[1], O[2]),
                n = Math.max(O[1], O[2]);
              return e >= t && e <= n;
            });
        x(() => {
          if (!P || !f) return;
          function e(e) {
            let t = w?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(P.get()),
            P.on(`change`, (t) => {
              e(t);
            })
          );
        }, [f]);
        let F = d
            ? `visible`
            : A(
                c,
                [O[0] - o.viewportLength * C, S(O[1], O[2], 0.5), O[3] + o.viewportLength * C],
                [`hidden`, `visible`, `hidden`]
              ),
          I = t + `child`;
        return g(ee, {
          inherit: `id`,
          id: I,
          children: g(`li`, {
            style: { display: `contents` },
            children: i(a, {
              ref: w,
              key: I,
              style: {
                ...a.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(f
                  ? {
                      opacity: te,
                      scale: M,
                      originX: v ? N : 0.5,
                      originY: v ? 0.5 : N,
                      rotateY: v ? k : 0,
                      rotateX: v ? 0 : j,
                      visibility: F,
                    }
                  : {}),
              },
              layoutId: a.props.layoutId ? a.props.layoutId + `-original-` + y : void 0,
            }),
          }),
        });
      })),
      (Zr = u(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          h = l ? (r === 0 ? c : f) : c,
          _ = l ? (r === n - 1 ? c : f) : c;
        return g(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: h,
            paddingInlineEnd: _,
          },
          children: g(C.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Qr = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      ($r = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (ei = null),
      (ti = []));
  }),
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi = e(() => {
    (v(),
      G(),
      M(),
      y(),
      ni(),
      $n(),
      dr(),
      (ri = F(Q)),
      (ii = F(Z)),
      (ai = F($)),
      (oi = `framer-A0SFs`),
      (si = { TD3MDq7QC: `framer-v-mpki7d` }),
      (ci = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (li = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ui = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (di = C.create(c)),
      (fi = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (pi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (mi = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge();
          ne();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = fi(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = B({ defaultVariant: `TD3MDq7QC`, ref: i, variant: f, variantClassNames: si }),
            D = pi(e, E),
            O = W(oi);
          return (
            oe(),
            g(ee, {
              id: d ?? a,
              children: g(di, {
                animate: E,
                initial: !1,
                children: g(ui, {
                  value: ci,
                  children: g(C.div, {
                    ...m,
                    ...b,
                    className: W(O, `framer-mpki7d`, u, v),
                    "data-framer-name": `Variant 1`,
                    layoutDependency: D,
                    layoutId: `TD3MDq7QC`,
                    ref: i,
                    style: { ...l },
                    children: g(H, {
                      children: g(U, {
                        className: `framer-b2stb6-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `aBYNC0SGJ-container`,
                        nodeId: `aBYNC0SGJ`,
                        rendersWithMotion: !0,
                        scopeId: `g0gM9oKLg`,
                        children: g($, {
                          alignment: `center`,
                          arrowOptions: {
                            arrowFill: `rgb(52, 101, 155)`,
                            arrowGap: 89,
                            arrowPadding: 10,
                            arrowPaddingBottom: 0,
                            arrowPaddingLeft: 0,
                            arrowPaddingRight: 0,
                            arrowPaddingTop: 160,
                            arrowPosition: `bottom-mid`,
                            arrowRadius: 6,
                            arrowShouldFadeIn: !1,
                            arrowShouldSpace: !1,
                            arrowSize: 82,
                            showMouseControls: !0,
                          },
                          autoPlayControl: !0,
                          borderRadius: 0,
                          direction: `left`,
                          dragControl: !1,
                          effectsOptions: {
                            effectsHover: !0,
                            effectsOpacity: 1,
                            effectsPerspective: 1200,
                            effectsRotate: 0,
                            effectsScale: 1,
                            playOffscreen: !1,
                          },
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 10,
                          height: `100%`,
                          heightSizing: `fill`,
                          id: `aBYNC0SGJ`,
                          intervalControl: 8,
                          itemAmount: 1,
                          layoutId: `aBYNC0SGJ`,
                          padding: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingPerSide: !0,
                          paddingRight: 0,
                          paddingTop: 0,
                          progressOptions: {
                            dotsActiveOpacity: 1,
                            dotsBackground: `rgba(0, 0, 0, 0.2)`,
                            dotsBlur: 0,
                            dotsFill: `rgb(255, 255, 255)`,
                            dotsGap: 10,
                            dotsInset: 10,
                            dotSize: 10,
                            dotsOpacity: 0.5,
                            dotsPadding: 10,
                            dotsRadius: 50,
                            showProgressDots: !1,
                          },
                          slots: [
                            h(C.div, {
                              className: `framer-16dj4lz`,
                              "data-framer-name": `Cat Notes`,
                              layoutDependency: D,
                              layoutId: `x4j4F1Pv4`,
                              children: [
                                h(C.div, {
                                  className: `framer-1sakozc`,
                                  layoutDependency: D,
                                  layoutId: `Jl13iuBXH`,
                                  children: [
                                    g(H, {
                                      height: 236,
                                      width: `236px`,
                                      children: g(U, {
                                        className: `framer-lk7dgu-container`,
                                        inComponentSlot: !0,
                                        layoutDependency: D,
                                        layoutId: `ULKVRYAkL-container`,
                                        nodeId: `ULKVRYAkL`,
                                        rendersWithMotion: !0,
                                        scopeId: `g0gM9oKLg`,
                                        children: g(Q, {
                                          height: `100%`,
                                          id: `ULKVRYAkL`,
                                          layoutId: `ULKVRYAkL`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: li(`CbhFAQ8TN`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    h(C.div, {
                                      className: `framer-1qmd76k`,
                                      "data-framer-name": `Buttons`,
                                      layoutDependency: D,
                                      layoutId: `eacMHZ44Z`,
                                      children: [
                                        g(H, {
                                          height: 60,
                                          width: `195px`,
                                          children: g(U, {
                                            className: `framer-m6rtny-container`,
                                            inComponentSlot: !0,
                                            layoutDependency: D,
                                            layoutId: `VyRXfO_yg-container`,
                                            nodeId: `VyRXfO_yg`,
                                            rendersWithMotion: !0,
                                            scopeId: `g0gM9oKLg`,
                                            children: g(Z, {
                                              height: `100%`,
                                              id: `VyRXfO_yg`,
                                              layoutId: `VyRXfO_yg`,
                                              style: { height: `100%`, width: `100%` },
                                              uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                              variant: li(`cxni6AwS8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        g(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `M_jvSiMT7` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            g(H, {
                                              height: 60,
                                              width: `195px`,
                                              children: g(U, {
                                                className: `framer-11jlrxt-container`,
                                                inComponentSlot: !0,
                                                layoutDependency: D,
                                                layoutId: `BdIBAXXBX-container`,
                                                nodeId: `BdIBAXXBX`,
                                                rendersWithMotion: !0,
                                                scopeId: `g0gM9oKLg`,
                                                children: g(Z, {
                                                  height: `100%`,
                                                  id: `BdIBAXXBX`,
                                                  layoutId: `BdIBAXXBX`,
                                                  style: { height: `100%`, width: `100%` },
                                                  uwIkV2V7p: e[0],
                                                  variant: li(`fZ1zKjkpQ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(C.div, {
                                  className: `framer-b25k2j`,
                                  "data-framer-name": `Game Info`,
                                  layoutDependency: D,
                                  layoutId: `aANlh3Deb`,
                                  children: [
                                    h(C.div, {
                                      className: `framer-x0m50g`,
                                      "data-framer-name": `Header`,
                                      layoutDependency: D,
                                      layoutId: `rlExD9l86`,
                                      children: [
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h2, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-font-size": `31px`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, { children: `Cat Notes` }),
                                            }),
                                          }),
                                          className: `framer-1ydepa2`,
                                          "data-framer-name": `Title`,
                                          fonts: [
                                            `FS;Space Grotesk-regular`,
                                            `FS;Space Grotesk-bold`,
                                          ],
                                          layoutDependency: D,
                                          layoutId: `nApuzvinc`,
                                          style: {
                                            "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h3, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                              },
                                              children: `Game Designer, Composer`,
                                            }),
                                          }),
                                          className: `framer-1w6ivna`,
                                          "data-framer-name": `Role`,
                                          fonts: [`FS;Space Grotesk-regular`],
                                          layoutDependency: D,
                                          layoutId: `cCIYJCxmS`,
                                          style: {
                                            "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(C.div, {
                                      className: `framer-ky58pl`,
                                      "data-framer-name": `Description`,
                                      layoutDependency: D,
                                      layoutId: `syNs8MKR4`,
                                      children: g(z, {
                                        __fromCanvasComponent: !0,
                                        children: h(c, {
                                          children: [
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                              },
                                              children: `Cat Notes is a puzzle game where you arrange the sleeping spots of your cats. The story of the cats unfolds as you learn about their preferences throughout the game.`,
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.br, { className: `trailing-break` }),
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, {
                                                children: `Top 2 Best Game & Best Visual Nominee in GIMERSIA Inspire 2025.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-wq2ae7`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Raleway-medium`, `FS;Raleway-bold`],
                                        layoutDependency: D,
                                        layoutId: `rwLWDXBim`,
                                        style: {
                                          "--extracted-1iakedh": `rgb(45, 45, 42)`,
                                          "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                          "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h(C.div, {
                              className: `framer-18edx08`,
                              "data-framer-name": `Get Flagged!`,
                              layoutDependency: D,
                              layoutId: `YZn6CU49J`,
                              children: [
                                h(C.div, {
                                  className: `framer-125w6e3`,
                                  layoutDependency: D,
                                  layoutId: `gHHZltCBJ`,
                                  children: [
                                    g(H, {
                                      height: 236,
                                      width: `236px`,
                                      children: g(U, {
                                        className: `framer-1y82qhe-container`,
                                        inComponentSlot: !0,
                                        layoutDependency: D,
                                        layoutId: `InoBJFEYU-container`,
                                        nodeId: `InoBJFEYU`,
                                        rendersWithMotion: !0,
                                        scopeId: `g0gM9oKLg`,
                                        children: g(Q, {
                                          height: `100%`,
                                          id: `InoBJFEYU`,
                                          layoutId: `InoBJFEYU`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: li(`zBEZU0PYH`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    h(C.div, {
                                      className: `framer-2ijss0`,
                                      "data-framer-name": `Buttons`,
                                      layoutDependency: D,
                                      layoutId: `tTLLJrDDw`,
                                      children: [
                                        g(H, {
                                          height: 60,
                                          width: `195px`,
                                          children: g(U, {
                                            className: `framer-1p2htfi-container`,
                                            inComponentSlot: !0,
                                            layoutDependency: D,
                                            layoutId: `K8YEUQrlk-container`,
                                            nodeId: `K8YEUQrlk`,
                                            rendersWithMotion: !0,
                                            scopeId: `g0gM9oKLg`,
                                            children: g(Z, {
                                              height: `100%`,
                                              id: `K8YEUQrlk`,
                                              layoutId: `K8YEUQrlk`,
                                              style: { height: `100%`, width: `100%` },
                                              uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                              variant: li(`cxni6AwS8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        g(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `xs_Q6y_ZJ` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            g(H, {
                                              height: 60,
                                              width: `195px`,
                                              children: g(U, {
                                                className: `framer-1ii98t2-container`,
                                                inComponentSlot: !0,
                                                layoutDependency: D,
                                                layoutId: `LjsZhV0RN-container`,
                                                nodeId: `LjsZhV0RN`,
                                                rendersWithMotion: !0,
                                                scopeId: `g0gM9oKLg`,
                                                children: g(Z, {
                                                  height: `100%`,
                                                  id: `LjsZhV0RN`,
                                                  layoutId: `LjsZhV0RN`,
                                                  style: { height: `100%`, width: `100%` },
                                                  uwIkV2V7p: e[0],
                                                  variant: li(`fZ1zKjkpQ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(C.div, {
                                  className: `framer-13l4669`,
                                  "data-framer-name": `Game Info`,
                                  layoutDependency: D,
                                  layoutId: `QUFHkhbtQ`,
                                  children: [
                                    h(C.div, {
                                      className: `framer-1fkvfbz`,
                                      "data-framer-name": `Header`,
                                      layoutDependency: D,
                                      layoutId: `AhVl5l5f0`,
                                      children: [
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h2, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-font-size": `31px`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, { children: `Get Flagged!` }),
                                            }),
                                          }),
                                          className: `framer-1rvisso`,
                                          "data-framer-name": `Title`,
                                          fonts: [
                                            `FS;Space Grotesk-regular`,
                                            `FS;Space Grotesk-bold`,
                                          ],
                                          layoutDependency: D,
                                          layoutId: `wM23ZFFJU`,
                                          style: {
                                            "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h3, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                              },
                                              children: `Level Designer, Composer`,
                                            }),
                                          }),
                                          className: `framer-mloubd`,
                                          "data-framer-name": `Role`,
                                          fonts: [`FS;Space Grotesk-regular`],
                                          layoutDependency: D,
                                          layoutId: `WyRgTNHsq`,
                                          style: {
                                            "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(C.div, {
                                      className: `framer-1ov2otp`,
                                      "data-framer-name": `Description`,
                                      layoutDependency: D,
                                      layoutId: `TbWqebhcJ`,
                                      children: g(z, {
                                        __fromCanvasComponent: !0,
                                        children: h(c, {
                                          children: [
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                              },
                                              children: `Get Flagged! is a "puzzle" game where you figure out how to play the game to reach a certain objective. Throw out all your expectations from video games and complete all the levels.`,
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.br, { className: `trailing-break` }),
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, {
                                                children: `Top 3 Best Game in Garena Game Jam 3.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-wyplkr`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Raleway-medium`, `FS;Raleway-bold`],
                                        layoutDependency: D,
                                        layoutId: `ozmaNhZ9n`,
                                        style: {
                                          "--extracted-1iakedh": `rgb(45, 45, 42)`,
                                          "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                          "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h(C.div, {
                              className: `framer-1wr68iy`,
                              "data-framer-name": `Kaimera`,
                              layoutDependency: D,
                              layoutId: `a4xEnWA5H`,
                              children: [
                                h(C.div, {
                                  className: `framer-8uo0n8`,
                                  layoutDependency: D,
                                  layoutId: `q4FaXLPMp`,
                                  children: [
                                    g(H, {
                                      height: 236,
                                      width: `236px`,
                                      children: g(U, {
                                        className: `framer-1yewt1t-container`,
                                        inComponentSlot: !0,
                                        layoutDependency: D,
                                        layoutId: `QjK5hfkVK-container`,
                                        nodeId: `QjK5hfkVK`,
                                        rendersWithMotion: !0,
                                        scopeId: `g0gM9oKLg`,
                                        children: g(Q, {
                                          height: `100%`,
                                          id: `QjK5hfkVK`,
                                          layoutId: `QjK5hfkVK`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: li(`B_NgvDy77`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    h(C.div, {
                                      className: `framer-5gf52w`,
                                      "data-framer-name": `Buttons`,
                                      layoutDependency: D,
                                      layoutId: `YfJWhESEO`,
                                      children: [
                                        g(H, {
                                          height: 60,
                                          width: `195px`,
                                          children: g(U, {
                                            className: `framer-16d5qbq-container`,
                                            inComponentSlot: !0,
                                            layoutDependency: D,
                                            layoutId: `qwD3QeMh3-container`,
                                            nodeId: `qwD3QeMh3`,
                                            rendersWithMotion: !0,
                                            scopeId: `g0gM9oKLg`,
                                            children: g(Z, {
                                              height: `100%`,
                                              id: `qwD3QeMh3`,
                                              layoutId: `qwD3QeMh3`,
                                              style: { height: `100%`, width: `100%` },
                                              uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                              variant: li(`cxni6AwS8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        g(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `zkz0NFwtf` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            g(H, {
                                              height: 60,
                                              width: `195px`,
                                              children: g(U, {
                                                className: `framer-5479tm-container`,
                                                inComponentSlot: !0,
                                                layoutDependency: D,
                                                layoutId: `dtwQ5ndFb-container`,
                                                nodeId: `dtwQ5ndFb`,
                                                rendersWithMotion: !0,
                                                scopeId: `g0gM9oKLg`,
                                                children: g(Z, {
                                                  height: `100%`,
                                                  id: `dtwQ5ndFb`,
                                                  layoutId: `dtwQ5ndFb`,
                                                  style: { height: `100%`, width: `100%` },
                                                  uwIkV2V7p: e[0],
                                                  variant: li(`fZ1zKjkpQ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(C.div, {
                                  className: `framer-134ncdz`,
                                  "data-framer-name": `Game Info`,
                                  layoutDependency: D,
                                  layoutId: `D516oLKIL`,
                                  children: [
                                    h(C.div, {
                                      className: `framer-fxdv4c`,
                                      "data-framer-name": `Header`,
                                      layoutDependency: D,
                                      layoutId: `xlmSCYNAn`,
                                      children: [
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h2, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-font-size": `31px`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, { children: `Kaimera` }),
                                            }),
                                          }),
                                          className: `framer-1adpdfe`,
                                          "data-framer-name": `Title`,
                                          fonts: [
                                            `FS;Space Grotesk-regular`,
                                            `FS;Space Grotesk-bold`,
                                          ],
                                          layoutDependency: D,
                                          layoutId: `gHrDRNW9v`,
                                          style: {
                                            "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h3, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                              },
                                              children: `Solo Developer`,
                                            }),
                                          }),
                                          className: `framer-xmlfod`,
                                          "data-framer-name": `Role`,
                                          fonts: [`FS;Space Grotesk-regular`],
                                          layoutDependency: D,
                                          layoutId: `QFnUsdk7x`,
                                          style: {
                                            "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(C.div, {
                                      className: `framer-vd0240`,
                                      "data-framer-name": `Description`,
                                      layoutDependency: D,
                                      layoutId: `lQypv8RlM`,
                                      children: g(z, {
                                        __fromCanvasComponent: !0,
                                        children: g(c, {
                                          children: g(C.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                              "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                              "--framer-font-size": `12px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.8em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                            },
                                            children: `Kaimera is a sokoban-style puzzle game where you try to escape a bioweapon research facility as hell breaks loose. Reach the exit before the virus engulfs you.`,
                                          }),
                                        }),
                                        className: `framer-1d4tm3d`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Raleway-medium`],
                                        layoutDependency: D,
                                        layoutId: `fIH9funTW`,
                                        style: {
                                          "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h(C.div, {
                              className: `framer-wax08w`,
                              "data-framer-name": `What Stays Behind`,
                              layoutDependency: D,
                              layoutId: `PqcPmUxI6`,
                              children: [
                                h(C.div, {
                                  className: `framer-1grjq8z`,
                                  layoutDependency: D,
                                  layoutId: `X15b0MlQv`,
                                  children: [
                                    g(H, {
                                      height: 236,
                                      width: `236px`,
                                      children: g(U, {
                                        className: `framer-lzpw3j-container`,
                                        inComponentSlot: !0,
                                        layoutDependency: D,
                                        layoutId: `Uik39P9Xv-container`,
                                        nodeId: `Uik39P9Xv`,
                                        rendersWithMotion: !0,
                                        scopeId: `g0gM9oKLg`,
                                        children: g(Q, {
                                          height: `100%`,
                                          id: `Uik39P9Xv`,
                                          layoutId: `Uik39P9Xv`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: li(`I5Le9Mt1n`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    h(C.div, {
                                      className: `framer-8my8tl`,
                                      "data-framer-name": `Buttons`,
                                      layoutDependency: D,
                                      layoutId: `eN47MTSed`,
                                      children: [
                                        g(H, {
                                          height: 60,
                                          width: `195px`,
                                          children: g(U, {
                                            className: `framer-r34mui-container`,
                                            inComponentSlot: !0,
                                            layoutDependency: D,
                                            layoutId: `JoD_pdc3K-container`,
                                            nodeId: `JoD_pdc3K`,
                                            rendersWithMotion: !0,
                                            scopeId: `g0gM9oKLg`,
                                            children: g(Z, {
                                              height: `100%`,
                                              id: `JoD_pdc3K`,
                                              layoutId: `JoD_pdc3K`,
                                              style: { height: `100%`, width: `100%` },
                                              uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                              variant: li(`cxni6AwS8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        g(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `BK0u9435y` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            g(H, {
                                              height: 60,
                                              width: `195px`,
                                              children: g(U, {
                                                className: `framer-17ukpyh-container`,
                                                inComponentSlot: !0,
                                                layoutDependency: D,
                                                layoutId: `V81eIZQep-container`,
                                                nodeId: `V81eIZQep`,
                                                rendersWithMotion: !0,
                                                scopeId: `g0gM9oKLg`,
                                                children: g(Z, {
                                                  height: `100%`,
                                                  id: `V81eIZQep`,
                                                  layoutId: `V81eIZQep`,
                                                  style: { height: `100%`, width: `100%` },
                                                  uwIkV2V7p: e[0],
                                                  variant: li(`fZ1zKjkpQ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(C.div, {
                                  className: `framer-15podds`,
                                  "data-framer-name": `Game Info`,
                                  layoutDependency: D,
                                  layoutId: `eKYjPFseP`,
                                  children: [
                                    h(C.div, {
                                      className: `framer-qvqm0o`,
                                      "data-framer-name": `Header`,
                                      layoutDependency: D,
                                      layoutId: `ahcdImOCS`,
                                      children: [
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h2, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-font-size": `31px`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, {
                                                children: `What Stays Behind`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-153540v`,
                                          "data-framer-name": `Title`,
                                          fonts: [
                                            `FS;Space Grotesk-regular`,
                                            `FS;Space Grotesk-bold`,
                                          ],
                                          layoutDependency: D,
                                          layoutId: `qkp7ODpBY`,
                                          style: {
                                            "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h3, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                              },
                                              children: `Game Designer, Composer`,
                                            }),
                                          }),
                                          className: `framer-1oc9jm7`,
                                          "data-framer-name": `Role`,
                                          fonts: [`FS;Space Grotesk-regular`],
                                          layoutDependency: D,
                                          layoutId: `fRb55mQip`,
                                          style: {
                                            "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(C.div, {
                                      className: `framer-ygrxq3`,
                                      "data-framer-name": `Description`,
                                      layoutDependency: D,
                                      layoutId: `GhZ_9SrWW`,
                                      children: g(z, {
                                        __fromCanvasComponent: !0,
                                        children: h(c, {
                                          children: [
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                              },
                                              children: `What Says Behind is a space management puzzle game with a story told through the items you put in the bag. Bring what's most important to the next journey.  `,
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.br, { className: `trailing-break` }),
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, {
                                                children: `Best Gameplay & Best Visual Nominee in GIMJAM 2026.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-124xsgx`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Raleway-medium`, `FS;Raleway-bold`],
                                        layoutDependency: D,
                                        layoutId: `QK9dyNbVD`,
                                        style: {
                                          "--extracted-1iakedh": `rgb(45, 45, 42)`,
                                          "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                          "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h(C.div, {
                              className: `framer-xllddy`,
                              "data-framer-name": `KopyCut`,
                              layoutDependency: D,
                              layoutId: `JLXS_2Hya`,
                              children: [
                                h(C.div, {
                                  className: `framer-1tr8sp9`,
                                  layoutDependency: D,
                                  layoutId: `WX5RjbSuI`,
                                  children: [
                                    g(H, {
                                      height: 236,
                                      width: `236px`,
                                      children: g(U, {
                                        className: `framer-oyfe35-container`,
                                        inComponentSlot: !0,
                                        layoutDependency: D,
                                        layoutId: `haoZLCv5y-container`,
                                        nodeId: `haoZLCv5y`,
                                        rendersWithMotion: !0,
                                        scopeId: `g0gM9oKLg`,
                                        children: g(Q, {
                                          height: `100%`,
                                          id: `haoZLCv5y`,
                                          layoutId: `haoZLCv5y`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: li(`GTpr7ePGx`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    h(C.div, {
                                      className: `framer-3rfitj`,
                                      "data-framer-name": `Buttons`,
                                      layoutDependency: D,
                                      layoutId: `jzvV5OTmc`,
                                      children: [
                                        g(H, {
                                          height: 60,
                                          width: `195px`,
                                          children: g(U, {
                                            className: `framer-13e7b0-container`,
                                            inComponentSlot: !0,
                                            layoutDependency: D,
                                            layoutId: `KNYow3MgR-container`,
                                            nodeId: `KNYow3MgR`,
                                            rendersWithMotion: !0,
                                            scopeId: `g0gM9oKLg`,
                                            children: g(Z, {
                                              height: `100%`,
                                              id: `KNYow3MgR`,
                                              layoutId: `KNYow3MgR`,
                                              style: { height: `100%`, width: `100%` },
                                              uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                              variant: li(`cxni6AwS8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        g(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `CWb0qR9SC` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            g(H, {
                                              height: 60,
                                              width: `195px`,
                                              children: g(U, {
                                                className: `framer-1iud1av-container`,
                                                inComponentSlot: !0,
                                                layoutDependency: D,
                                                layoutId: `Y7MM13q9P-container`,
                                                nodeId: `Y7MM13q9P`,
                                                rendersWithMotion: !0,
                                                scopeId: `g0gM9oKLg`,
                                                children: g(Z, {
                                                  height: `100%`,
                                                  id: `Y7MM13q9P`,
                                                  layoutId: `Y7MM13q9P`,
                                                  style: { height: `100%`, width: `100%` },
                                                  uwIkV2V7p: e[0],
                                                  variant: li(`fZ1zKjkpQ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                h(C.div, {
                                  className: `framer-nopnq6`,
                                  "data-framer-name": `Game Info`,
                                  layoutDependency: D,
                                  layoutId: `L6t8bS9X_`,
                                  children: [
                                    h(C.div, {
                                      className: `framer-1xadv3`,
                                      "data-framer-name": `Header`,
                                      layoutDependency: D,
                                      layoutId: `Q0pdo9hrZ`,
                                      children: [
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h2, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-font-size": `31px`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, { children: `KopyCut` }),
                                            }),
                                          }),
                                          className: `framer-1kmmuhw`,
                                          "data-framer-name": `Title`,
                                          fonts: [
                                            `FS;Space Grotesk-regular`,
                                            `FS;Space Grotesk-bold`,
                                          ],
                                          layoutDependency: D,
                                          layoutId: `oq4S7aDEr`,
                                          style: {
                                            "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        g(z, {
                                          __fromCanvasComponent: !0,
                                          children: g(c, {
                                            children: g(C.h3, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                              },
                                              children: `Game Designer, Composer`,
                                            }),
                                          }),
                                          className: `framer-1yj7ili`,
                                          "data-framer-name": `Role`,
                                          fonts: [`FS;Space Grotesk-regular`],
                                          layoutDependency: D,
                                          layoutId: `kTZS81x6h`,
                                          style: {
                                            "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    g(C.div, {
                                      className: `framer-v42o3y`,
                                      "data-framer-name": `Description`,
                                      layoutDependency: D,
                                      layoutId: `xLDOKVaJt`,
                                      children: g(z, {
                                        __fromCanvasComponent: !0,
                                        children: h(c, {
                                          children: [
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                              },
                                              children: `KopyCut gives you the ability to transform the levels by cutting, copying, and deleting tiles and use it to your advantage. Find the files you need by traversing through folders.  `,
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.br, { className: `trailing-break` }),
                                            }),
                                            g(C.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `RlM7UmFsZXdheS1tZWRpdW0=`,
                                                "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                                "--framer-font-size": `12px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-line-height": `1.8em`,
                                                "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                              },
                                              children: g(C.strong, {
                                                children: `GameJam+ 2025/2026 Finalist`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-1l95h3x`,
                                        "data-framer-name": `Description`,
                                        fonts: [`FS;Raleway-medium`, `FS;Raleway-bold`],
                                        layoutDependency: D,
                                        layoutId: `yh8heJ4rv`,
                                        style: {
                                          "--extracted-1iakedh": `rgb(45, 45, 42)`,
                                          "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                          "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                          startFrom: 0,
                          style: { height: `100%`, width: `100%` },
                          transitionControl: {
                            damping: 40,
                            delay: 0,
                            mass: 1,
                            stiffness: 200,
                            type: `spring`,
                          },
                          width: `100%`,
                          widthSizing: `fill`,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-A0SFs.framer-3pc36m, .framer-A0SFs .framer-3pc36m { display: block; }`,
          `.framer-A0SFs.framer-mpki7d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 100px 10px; height: min-content; justify-content: flex-start; max-width: 960px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
          `.framer-A0SFs .framer-b2stb6-container { flex: none; height: 758px; position: relative; width: 100%; }`,
          `.framer-A0SFs .framer-16dj4lz, .framer-A0SFs .framer-18edx08, .framer-A0SFs .framer-1wr68iy, .framer-A0SFs .framer-wax08w, .framer-A0SFs .framer-xllddy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 0px; height: 638px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 390px; }`,
          `.framer-A0SFs .framer-1sakozc, .framer-A0SFs .framer-125w6e3, .framer-A0SFs .framer-8uo0n8, .framer-A0SFs .framer-1grjq8z, .framer-A0SFs .framer-1tr8sp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 43px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-A0SFs .framer-lk7dgu-container, .framer-A0SFs .framer-1y82qhe-container, .framer-A0SFs .framer-1yewt1t-container, .framer-A0SFs .framer-lzpw3j-container, .framer-A0SFs .framer-oyfe35-container { flex: none; height: 236px; position: relative; width: 236px; }`,
          `.framer-A0SFs .framer-1qmd76k, .framer-A0SFs .framer-2ijss0, .framer-A0SFs .framer-5gf52w, .framer-A0SFs .framer-8my8tl, .framer-A0SFs .framer-3rfitj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-A0SFs .framer-m6rtny-container, .framer-A0SFs .framer-11jlrxt-container, .framer-A0SFs .framer-1p2htfi-container, .framer-A0SFs .framer-1ii98t2-container, .framer-A0SFs .framer-16d5qbq-container, .framer-A0SFs .framer-5479tm-container, .framer-A0SFs .framer-r34mui-container, .framer-A0SFs .framer-17ukpyh-container, .framer-A0SFs .framer-13e7b0-container, .framer-A0SFs .framer-1iud1av-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-A0SFs .framer-b25k2j, .framer-A0SFs .framer-13l4669, .framer-A0SFs .framer-134ncdz, .framer-A0SFs .framer-15podds, .framer-A0SFs .framer-nopnq6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 38px; height: 1px; justify-content: flex-start; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 50px 20px 0px 30px; position: relative; width: 100%; z-index: 0; }`,
          `.framer-A0SFs .framer-x0m50g, .framer-A0SFs .framer-1fkvfbz, .framer-A0SFs .framer-fxdv4c, .framer-A0SFs .framer-qvqm0o, .framer-A0SFs .framer-1xadv3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-A0SFs .framer-1ydepa2, .framer-A0SFs .framer-1w6ivna, .framer-A0SFs .framer-wq2ae7, .framer-A0SFs .framer-1rvisso, .framer-A0SFs .framer-mloubd, .framer-A0SFs .framer-wyplkr, .framer-A0SFs .framer-1adpdfe, .framer-A0SFs .framer-xmlfod, .framer-A0SFs .framer-1d4tm3d, .framer-A0SFs .framer-153540v, .framer-A0SFs .framer-1oc9jm7, .framer-A0SFs .framer-124xsgx, .framer-A0SFs .framer-1kmmuhw, .framer-A0SFs .framer-1yj7ili, .framer-A0SFs .framer-1l95h3x { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-A0SFs .framer-ky58pl, .framer-A0SFs .framer-1ov2otp, .framer-A0SFs .framer-vd0240, .framer-A0SFs .framer-ygrxq3, .framer-A0SFs .framer-v42o3y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        ],
        `framer-A0SFs`
      )),
      (mi.displayName = `Ludography Phone`),
      (mi.defaultProps = { height: 758, width: 390 }),
      R(
        mi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/VHOUC36AWF2BXBRYVUE5TB5CZAVHYGQV.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/Z44HTHVYVEXDW67RPEV7ZLLGGIA6RIPD.woff2`,
                weight: `700`,
              },
            ],
          },
          ...ri,
          ...ii,
          ...ai,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (mi.loader = { load: (e, t) => P([() => N(Q, {}, t), () => N(Z, {}, t)], t) }));
  });
function gi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji = e(() => {
    (v(),
      G(),
      M(),
      y(),
      Ln(),
      ke(),
      Vn(),
      Ee(),
      $n(),
      dr(),
      (_i = F(Z)),
      (vi = F(Q)),
      (yi = F(xn)),
      (bi = [`GBRyhB8kK`, `jRm5uUyvn`, `NAMVEet6K`, `r7_FIMki7`, `cLf4oolT9`]),
      (xi = `framer-JakIr`),
      (Si = {
        cLf4oolT9: `framer-v-1qr715o`,
        GBRyhB8kK: `framer-v-1tj6lko`,
        jRm5uUyvn: `framer-v-y0lb5a`,
        NAMVEet6K: `framer-v-1ionht9`,
        r7_FIMki7: `framer-v-1mhuqwh`,
      }),
      (Ci = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ti = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (Ei = {
        "Variant 1": `GBRyhB8kK`,
        "Variant 2": `jRm5uUyvn`,
        "Variant 3": `NAMVEet6K`,
        "Variant 4": `r7_FIMki7`,
        "Variant 5": `cLf4oolT9`,
      }),
      (Di = C.create(c)),
      (Oi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ei[r.variant] ?? r.variant ?? `GBRyhB8kK`,
      })),
      (ki = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ai = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge(),
            l = ne(),
            { style: u, className: d, layoutId: f, variant: m, ..._ } = Oi(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              cycleOrder: bi,
              defaultVariant: `GBRyhB8kK`,
              ref: i,
              variant: m,
              variantClassNames: Si,
            }),
            O = ki(e, D),
            k = W(xi, Bn, Oe, De);
          oe();
          let { activeVariantCallback: A, delay: j } = ie(v),
            te = A(async (...e) => {
              E(`GBRyhB8kK`);
            }),
            M = A(async (...e) => {
              E(`jRm5uUyvn`);
            }),
            N = A(async (...e) => {
              E(`NAMVEet6K`);
            }),
            P = A(async (...e) => {
              E(`r7_FIMki7`);
            }),
            F = A(async (...e) => {
              E(`cLf4oolT9`);
            });
          return g(ee, {
            id: f ?? a,
            children: g(Di, {
              animate: D,
              initial: !1,
              children: g(Ti, {
                value: Ci,
                children: h(C.div, {
                  ..._,
                  ...x,
                  className: W(k, `framer-1tj6lko`, d, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `GBRyhB8kK`,
                  ref: i,
                  style: { ...u },
                  ...gi(
                    {
                      cLf4oolT9: { "data-framer-name": `Variant 5` },
                      jRm5uUyvn: { "data-framer-name": `Variant 2` },
                      NAMVEet6K: { "data-framer-name": `Variant 3` },
                      r7_FIMki7: { "data-framer-name": `Variant 4` },
                    },
                    v,
                    S
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-fi3qfi`,
                      "data-framer-name": `Overview`,
                      layoutDependency: O,
                      layoutId: `livC6xZJG`,
                      children: [
                        h(C.div, {
                          className: `framer-1qztihk`,
                          layoutDependency: O,
                          layoutId: `XJNqyokkl`,
                          children: [
                            g(_e, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 829,
                                intrinsicWidth: 1105,
                                pixelHeight: 829,
                                pixelWidth: 1105,
                                sizes: `428px`,
                                src: `../../assets/images/wL1EfTEVR7dXrVTR2ue6MwZJVw.png`,
                              },
                              className: `framer-1siwv9t`,
                              layoutDependency: O,
                              layoutId: `DqcPlHruL`,
                              ...gi(
                                {
                                  cLf4oolT9: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1437,
                                      pixelHeight: 1080,
                                      pixelWidth: 1437,
                                      sizes: `428px`,
                                      src: `https://framerusercontent.com/images/ti1jWco3OH6jaLwpUfeDhkEsfkA.png?scale-down-to=1024&width=1437&height=1080`,
                                    },
                                  },
                                  jRm5uUyvn: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1500,
                                      intrinsicWidth: 2e3,
                                      pixelHeight: 1500,
                                      pixelWidth: 2e3,
                                      sizes: `428px`,
                                      src: `https://framerusercontent.com/images/ilwcOd7KeVT4ys59tCKQwJORzk.png?scale-down-to=1024&width=2000&height=1500`,
                                    },
                                  },
                                  NAMVEet6K: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2e3,
                                      intrinsicWidth: 2520,
                                      pixelHeight: 2e3,
                                      pixelWidth: 2520,
                                      sizes: `428px`,
                                      src: `https://framerusercontent.com/images/w06eEfhML6eSyM3eVdfwATlZSM.png?scale-down-to=1024&width=2520&height=2000`,
                                    },
                                  },
                                  r7_FIMki7: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 2560,
                                      pixelHeight: 1080,
                                      pixelWidth: 2560,
                                      sizes: `428px`,
                                      src: `https://framerusercontent.com/images/Qp5qBFQnWtXsVJq1kEiVA3OJ97I.png?scale-down-to=1024&width=2560&height=1080`,
                                    },
                                  },
                                },
                                v,
                                S
                              ),
                            }),
                            h(C.div, {
                              className: `framer-x7j6w3`,
                              "data-framer-name": `Buttons`,
                              layoutDependency: O,
                              layoutId: `Mk3ptKPBP`,
                              children: [
                                g(H, {
                                  height: 60,
                                  width: `max(${l?.width || `100vw`} / 2, 1px)`,
                                  children: g(U, {
                                    className: `framer-1sk8wqq-container`,
                                    layoutDependency: O,
                                    layoutId: `e7PMLv_Sm-container`,
                                    nodeId: `e7PMLv_Sm`,
                                    rendersWithMotion: !0,
                                    scopeId: `nYW0jTbdx`,
                                    children: g(Z, {
                                      height: `100%`,
                                      id: `e7PMLv_Sm`,
                                      layoutId: `e7PMLv_Sm`,
                                      style: { height: `100%`, width: `100%` },
                                      uwIkV2V7p: `https://vexushi.itch.io/cat-notes`,
                                      variant: wi(`cxni6AwS8`),
                                      width: `100%`,
                                      ...gi(
                                        {
                                          cLf4oolT9: { uwIkV2V7p: `https://qichu.itch.io/kopycut` },
                                          jRm5uUyvn: {
                                            uwIkV2V7p: `https://qichu.itch.io/get-flagged`,
                                          },
                                          NAMVEet6K: {
                                            uwIkV2V7p: `https://vexushi.itch.io/kaimera`,
                                          },
                                          r7_FIMki7: {
                                            uwIkV2V7p: `https://vexushi.itch.io/what-stays-behind`,
                                          },
                                        },
                                        v,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                                g(ue, {
                                  links: [
                                    {
                                      href: { webPageId: `M_jvSiMT7` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xs_Q6y_ZJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zkz0NFwtf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BK0u9435y` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CWb0qR9SC` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    g(H, {
                                      height: 60,
                                      width: `max(${l?.width || `100vw`} / 2, 1px)`,
                                      children: g(U, {
                                        className: `framer-34d6g6-container`,
                                        layoutDependency: O,
                                        layoutId: `c33WPsgjb-container`,
                                        nodeId: `c33WPsgjb`,
                                        rendersWithMotion: !0,
                                        scopeId: `nYW0jTbdx`,
                                        children: g(Z, {
                                          height: `100%`,
                                          id: `c33WPsgjb`,
                                          layoutId: `c33WPsgjb`,
                                          style: { height: `100%`, width: `100%` },
                                          uwIkV2V7p: e[0],
                                          variant: wi(`fZ1zKjkpQ`),
                                          width: `100%`,
                                          ...gi(
                                            {
                                              cLf4oolT9: { uwIkV2V7p: e[4] },
                                              jRm5uUyvn: { uwIkV2V7p: e[1] },
                                              NAMVEet6K: { uwIkV2V7p: e[2] },
                                              r7_FIMki7: { uwIkV2V7p: e[3] },
                                            },
                                            v,
                                            S
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        h(C.div, {
                          className: `framer-mme6bu`,
                          "data-framer-name": `Game Info`,
                          layoutDependency: O,
                          layoutId: `FRadwCpGt`,
                          children: [
                            h(C.div, {
                              className: `framer-1nityoz`,
                              "data-framer-name": `Header`,
                              layoutDependency: O,
                              layoutId: `MVU2HwCsN`,
                              children: [
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.h2, {
                                      className: `framer-styles-preset-18rgopz`,
                                      "data-styles-preset": `UT35m0f7x`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1of0zx5, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.strong, { children: `Cat Notes` }),
                                    }),
                                  }),
                                  className: `framer-1l2tbiw`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  layoutDependency: O,
                                  layoutId: `BYEalkrj3`,
                                  style: {
                                    "--extracted-1of0zx5": `rgb(45, 45, 42)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...gi(
                                    {
                                      cLf4oolT9: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            children: g(C.strong, { children: `KopyCut` }),
                                          }),
                                        }),
                                      },
                                      jRm5uUyvn: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            children: g(C.strong, { children: `Get Flagged!` }),
                                          }),
                                        }),
                                      },
                                      NAMVEet6K: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            children: g(C.strong, { children: `Kaimera` }),
                                          }),
                                        }),
                                      },
                                      r7_FIMki7: {
                                        children: g(c, {
                                          children: g(C.h2, {
                                            className: `framer-styles-preset-18rgopz`,
                                            "data-styles-preset": `UT35m0f7x`,
                                            dir: `auto`,
                                            children: g(C.strong, {
                                              children: `What Stays Behind`,
                                            }),
                                          }),
                                        }),
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                }),
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.h3, {
                                      className: `framer-styles-preset-1innnwq`,
                                      "data-styles-preset": `rvUVMehhh`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                      },
                                      children: `Game Designer, Composer`,
                                    }),
                                  }),
                                  className: `framer-12unt06`,
                                  "data-framer-name": `Role`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `BSwNeMZnP`,
                                  style: {
                                    "--extracted-a0htzi": `rgb(184, 141, 101)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...gi(
                                    {
                                      jRm5uUyvn: {
                                        children: g(c, {
                                          children: g(C.h3, {
                                            className: `framer-styles-preset-1innnwq`,
                                            "data-styles-preset": `rvUVMehhh`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                            },
                                            children: `Level Designer, Composer`,
                                          }),
                                        }),
                                      },
                                      NAMVEet6K: {
                                        children: g(c, {
                                          children: g(C.h3, {
                                            className: `framer-styles-preset-1innnwq`,
                                            "data-styles-preset": `rvUVMehhh`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-a0htzi, rgb(184, 141, 101))`,
                                            },
                                            children: `Solo Developer`,
                                          }),
                                        }),
                                      },
                                    },
                                    v,
                                    S
                                  ),
                                }),
                              ],
                            }),
                            g(C.div, {
                              className: `framer-xjcznb`,
                              "data-framer-name": `Description`,
                              layoutDependency: O,
                              layoutId: `KfIKvElMd`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: h(c, {
                                  children: [
                                    g(C.p, {
                                      className: `framer-styles-preset-17ydyq9`,
                                      "data-styles-preset": `vJYEnMnRI`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: `Cat Notes is a puzzle game where you arrange the sleeping spots of your cats. The story of the cats unfolds as you learn about their preferences throughout the game.`,
                                    }),
                                    g(C.p, {
                                      className: `framer-styles-preset-17ydyq9`,
                                      "data-styles-preset": `vJYEnMnRI`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.strong, {
                                        children: `Top 2 Best Game & Best Visual Nominee in GIMERSIA Inspire 2025.`,
                                      }),
                                    }),
                                  ],
                                }),
                                className: `framer-hz6ae0`,
                                "data-framer-name": `Description`,
                                fonts: [`Inter`, `Inter-Bold`],
                                layoutDependency: O,
                                layoutId: `uZMSfkScj`,
                                style: {
                                  "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                  "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...gi(
                                  {
                                    cLf4oolT9: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: `KopyCut gives you the ability to transform the levels by cutting, copying, and deleting tiles and use it to your advantage. Find the files you need by traversing through folders.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: g(C.strong, {
                                              children: `GameJam+ 2025/2026 Finalist`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    jRm5uUyvn: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: `Get Flagged! is a "puzzle" game where you figure out how to play the game to reach a certain objective. Throw out all your expectations from video games and complete all the levels.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: g(C.strong, {
                                              children: `Top 3 Best Game in Garena Game Jam 3.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    NAMVEet6K: {
                                      children: g(c, {
                                        children: g(C.p, {
                                          className: `framer-styles-preset-17ydyq9`,
                                          "data-styles-preset": `vJYEnMnRI`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Kaimera is a sokoban-style puzzle game where you try to escape a bioweapon research facility as hell breaks loose. Reach the exit before the virus engulfs you.`,
                                        }),
                                      }),
                                      fonts: [`Inter`],
                                    },
                                    r7_FIMki7: {
                                      children: h(c, {
                                        children: [
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: `What Says Behind is a space management puzzle game with a story told through the items you put in the bag. Bring what's most important to the next journey.`,
                                          }),
                                          g(C.p, {
                                            className: `framer-styles-preset-17ydyq9`,
                                            "data-styles-preset": `vJYEnMnRI`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: g(C.strong, {
                                              children: `Best Gameplay & Best Visual Nominee in GIMJAM 2026.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  v,
                                  S
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    g(H, {
                      children: g(U, {
                        className: `framer-6j3bgm-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `ntf7Uwv7V-container`,
                        nodeId: `ntf7Uwv7V`,
                        rendersWithMotion: !0,
                        scopeId: `nYW0jTbdx`,
                        children: g(xn, {
                          align: `center`,
                          ariaLabel: ``,
                          arrowObject: {
                            arrowFill: `rgb(52, 101, 155)`,
                            arrowPadding: 20,
                            arrowRadius: 3,
                            arrowSize: 64,
                            showMouseControls: !0,
                          },
                          axis: !0,
                          borderRadius: 0,
                          fadeObject: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeTransition: {
                              damping: 60,
                              delay: 0,
                              mass: 1,
                              stiffness: 500,
                              type: `spring`,
                            },
                            fadeWidth: 25,
                          },
                          gap: 10,
                          height: `100%`,
                          id: `ntf7Uwv7V`,
                          layoutId: `ntf7Uwv7V`,
                          padding: 115,
                          paddingBottom: 0,
                          paddingLeft: 115,
                          paddingPerSide: !0,
                          paddingRight: 115,
                          paddingTop: 0,
                          progressObject: {
                            dotsActiveOpacity: 1,
                            dotsBackground: `rgba(0, 0, 0, 0.2)`,
                            dotsBlur: 4,
                            dotsFill: `rgb(255, 255, 255)`,
                            dotsGap: 10,
                            dotsInset: 10,
                            dotSize: 10,
                            dotsOpacity: 0.5,
                            dotsPadding: 10,
                            dotsRadius: 50,
                            showProgressDots: !1,
                            showScrollbar: !1,
                          },
                          sizingObject: {
                            heightInset: 0,
                            heightRows: 2,
                            heightType: `auto`,
                            widthColumns: 2,
                            widthInset: 0,
                            widthType: `auto`,
                          },
                          slots: [
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-i4c2vi-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `i3tda_HP0-container`,
                                nodeId: `i3tda_HP0`,
                                rendersWithMotion: !0,
                                scopeId: `nYW0jTbdx`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `i3tda_HP0`,
                                  layoutId: `i3tda_HP0`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: wi(`CbhFAQ8TN`),
                                  width: `100%`,
                                  XysYz95bk: te,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1s9jb04-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `HQAo_jjie-container`,
                                nodeId: `HQAo_jjie`,
                                rendersWithMotion: !0,
                                scopeId: `nYW0jTbdx`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `HQAo_jjie`,
                                  layoutId: `HQAo_jjie`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: wi(`zBEZU0PYH`),
                                  width: `100%`,
                                  XysYz95bk: M,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1ohdmqi-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `lolIw1dSZ-container`,
                                nodeId: `lolIw1dSZ`,
                                rendersWithMotion: !0,
                                scopeId: `nYW0jTbdx`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `lolIw1dSZ`,
                                  layoutId: `lolIw1dSZ`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: wi(`B_NgvDy77`),
                                  width: `100%`,
                                  XysYz95bk: N,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1yedbbz-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `s7MRcnolE-container`,
                                nodeId: `s7MRcnolE`,
                                rendersWithMotion: !0,
                                scopeId: `nYW0jTbdx`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `s7MRcnolE`,
                                  layoutId: `s7MRcnolE`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: wi(`I5Le9Mt1n`),
                                  width: `100%`,
                                  XysYz95bk: P,
                                }),
                              }),
                            }),
                            g(H, {
                              height: 236,
                              width: `236px`,
                              children: g(U, {
                                className: `framer-1ycrye4-container`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `J04Ks8X2g-container`,
                                nodeId: `J04Ks8X2g`,
                                rendersWithMotion: !0,
                                scopeId: `nYW0jTbdx`,
                                children: g(Q, {
                                  height: `100%`,
                                  id: `J04Ks8X2g`,
                                  layoutId: `J04Ks8X2g`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: wi(`GTpr7ePGx`),
                                  width: `100%`,
                                  XysYz95bk: F,
                                }),
                              }),
                            }),
                          ],
                          snapObject: { fluid: !1, snap: !0, snapEdge: `center` },
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-JakIr.framer-15h5f6f, .framer-JakIr .framer-15h5f6f { display: block; }`,
          `.framer-JakIr.framer-1tj6lko { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 100px 10px; height: min-content; justify-content: flex-start; max-width: 960px; overflow: visible; padding: 0px; position: relative; width: 960px; }`,
          `.framer-JakIr .framer-fi3qfi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JakIr .framer-1qztihk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 43px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-JakIr .framer-1siwv9t { flex: none; height: 319px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 428px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-JakIr .framer-x7j6w3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 60px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JakIr .framer-1sk8wqq-container, .framer-JakIr .framer-34d6g6-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-JakIr .framer-mme6bu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 54px; height: min-content; justify-content: flex-start; max-width: 60%; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 60px; position: relative; width: 55%; z-index: 0; }`,
          `.framer-JakIr .framer-1nityoz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JakIr .framer-1l2tbiw, .framer-JakIr .framer-12unt06, .framer-JakIr .framer-hz6ae0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JakIr .framer-xjcznb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JakIr .framer-6j3bgm-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-JakIr .framer-i4c2vi-container, .framer-JakIr .framer-1s9jb04-container, .framer-JakIr .framer-1ohdmqi-container, .framer-JakIr .framer-1yedbbz-container, .framer-JakIr .framer-1ycrye4-container { height: 236px; position: relative; width: 236px; }`,
          ...zn,
          ...Ce,
          ...we,
        ],
        `framer-JakIr`
      )),
      (Ai.displayName = `Ludography`),
      (Ai.defaultProps = { height: 758, width: 960 }),
      be(Ai, {
        variant: {
          options: [`GBRyhB8kK`, `jRm5uUyvn`, `NAMVEet6K`, `r7_FIMki7`, `cLf4oolT9`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      R(
        Ai,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ..._i,
          ...vi,
          ...yi,
          ...I(Rn),
          ...I(Te),
          ...I(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ai.loader = { load: (e, t) => P([() => N(Z, {}, t), () => N(Q, {}, t)], t) }));
  }),
  Mi,
  Ni,
  Pi,
  Fi = e(() => {
    (G(),
      re.loadFonts([]),
      (Mi = [{ explicitInter: !0, fonts: [] }]),
      (Ni = [
        `.framer-jYF0W .framer-styles-preset-c56h81:not(.rich-text-wrapper), .framer-jYF0W .framer-styles-preset-c56h81.rich-text-wrapper a { --framer-link-text-background-color: rgba(138, 153, 166, 0); --framer-link-text-color: #34659b; --framer-link-text-decoration: none; }`,
      ]),
      (Pi = `framer-jYF0W`));
  });
function Ii(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji = e(() => {
    (v(),
      G(),
      M(),
      y(),
      (Li = [
        `ci9Sr2_oK`,
        `MH1Jb57NA`,
        `GnuMeUous`,
        `EjW7Iqp9w`,
        `NB_uc6ukG`,
        `PUjTq2gTA`,
        `z57hmOAEi`,
        `WuL1ZVFWg`,
      ]),
      (Ri = `framer-JJzqm`),
      (zi = {
        ci9Sr2_oK: `framer-v-n1nw7w`,
        EjW7Iqp9w: `framer-v-xno64q`,
        GnuMeUous: `framer-v-pkvg4l`,
        MH1Jb57NA: `framer-v-1l87jrm`,
        NB_uc6ukG: `framer-v-1pm4g9v`,
        PUjTq2gTA: `framer-v-13z72v1`,
        WuL1ZVFWg: `framer-v-23smmv`,
        z57hmOAEi: `framer-v-1gz132l`,
      }),
      (Bi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Vi = (e, t) => `translate(-50%, -50%) ${t}`),
      (Hi = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (Ui = {
        "Default 1": `ci9Sr2_oK`,
        "Default 2": `NB_uc6ukG`,
        "Hover 1": `MH1Jb57NA`,
        "Hover 2": `PUjTq2gTA`,
        "Pressed 1": `EjW7Iqp9w`,
        "Pressed 2": `WuL1ZVFWg`,
        "Pressed Hover 1": `GnuMeUous`,
        "Pressed Hover 2": `z57hmOAEi`,
      }),
      (Wi = C.create(c)),
      (Gi = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        FojVYZKtw: r ?? a.FojVYZKtw ?? `Text`,
        variant: Ui[a.variant] ?? a.variant ?? `ci9Sr2_oK`,
        zIBTS_z38: e ?? a.zIBTS_z38,
      })),
      (Ki = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qi = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge();
          ne();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              zIBTS_z38: m,
              FojVYZKtw: h,
              ..._
            } = Gi(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              cycleOrder: Li,
              defaultVariant: `ci9Sr2_oK`,
              ref: i,
              variant: f,
              variantClassNames: zi,
            }),
            O = Ki(e, D),
            k = [],
            { activeVariantCallback: A, delay: j } = ie(v),
            te = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`EjW7Iqp9w`);
            }),
            M = A(async (...e) => {
              (T({ isHovered: !0 }), E(`MH1Jb57NA`));
            }),
            N = W(Ri, ...k),
            P = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`GnuMeUous`);
            }),
            F = A(async (...e) => {
              (T({ isHovered: !1 }), E(`ci9Sr2_oK`));
            }),
            I = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`MH1Jb57NA`);
            }),
            L = A(async (...e) => {
              (T({ isHovered: !1 }), E(`EjW7Iqp9w`));
            }),
            re = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`ci9Sr2_oK`);
            }),
            ae = A(async (...e) => {
              (T({ isHovered: !0 }), E(`GnuMeUous`));
            }),
            oe = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`WuL1ZVFWg`);
            }),
            R = A(async (...e) => {
              (T({ isHovered: !0 }), E(`PUjTq2gTA`));
            }),
            se = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`z57hmOAEi`);
            }),
            ce = A(async (...e) => {
              (T({ isHovered: !1 }), E(`NB_uc6ukG`));
            }),
            le = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`PUjTq2gTA`);
            }),
            ue = A(async (...e) => {
              (T({ isHovered: !1 }), E(`WuL1ZVFWg`));
            }),
            de = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              E(`NB_uc6ukG`);
            }),
            fe = A(async (...e) => {
              (T({ isHovered: !0 }), E(`z57hmOAEi`));
            });
          return g(ee, {
            id: d ?? a,
            children: g(Wi, {
              animate: D,
              initial: !1,
              children: g(Hi, {
                value: Bi,
                children: g(C.div, {
                  ..._,
                  ...x,
                  className: W(N, `framer-n1nw7w`, u, y),
                  "data-framer-name": `Default 1`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `ci9Sr2_oK`,
                  onMouseEnter: M,
                  onTap: te,
                  ref: i,
                  style: { backgroundColor: `rgb(123, 181, 178)`, ...l },
                  variants: {
                    EjW7Iqp9w: { backgroundColor: `rgb(234, 230, 221)` },
                    GnuMeUous: { backgroundColor: `rgb(204, 203, 190)` },
                    MH1Jb57NA: { backgroundColor: `rgb(99, 166, 171)` },
                    NB_uc6ukG: { backgroundColor: `rgb(52, 101, 155)` },
                    PUjTq2gTA: { backgroundColor: `rgb(41, 75, 135)` },
                    WuL1ZVFWg: { backgroundColor: `rgb(234, 230, 221)` },
                    z57hmOAEi: { backgroundColor: `rgb(204, 203, 190)` },
                  },
                  ...Ii(
                    {
                      EjW7Iqp9w: { "data-framer-name": `Pressed 1`, onMouseEnter: ae, onTap: re },
                      GnuMeUous: {
                        "data-framer-name": `Pressed Hover 1`,
                        onMouseLeave: L,
                        onTap: I,
                      },
                      MH1Jb57NA: { "data-framer-name": `Hover 1`, onMouseLeave: F, onTap: P },
                      NB_uc6ukG: { "data-framer-name": `Default 2`, onMouseEnter: R, onTap: oe },
                      PUjTq2gTA: {
                        "data-framer-name": `Hover 2`,
                        onMouseEnter: void 0,
                        onMouseLeave: ce,
                        onTap: se,
                      },
                      WuL1ZVFWg: { "data-framer-name": `Pressed 2`, onMouseEnter: fe, onTap: de },
                      z57hmOAEi: {
                        "data-framer-name": `Pressed Hover 2`,
                        onMouseEnter: R,
                        onMouseLeave: ue,
                        onTap: le,
                      },
                    },
                    v,
                    S
                  ),
                  children: g(z, {
                    __fromCanvasComponent: !0,
                    children: g(c, {
                      children: g(C.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                          "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                          "--framer-font-size": `26px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                        },
                        children: `Bio`,
                      }),
                    }),
                    className: `framer-f4je3i`,
                    fonts: [`FS;Space Grotesk-regular`],
                    layoutDependency: O,
                    layoutId: `uXwkN8R2X`,
                    style: {
                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: h,
                    transformTemplate: Vi,
                    variants: {
                      NB_uc6ukG: { "--extracted-r6o4lv": `rgb(234, 230, 221)` },
                      PUjTq2gTA: { "--extracted-r6o4lv": `rgb(234, 230, 221)` },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ii(
                      {
                        GnuMeUous: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `32px`,
                                "--framer-font-weight": `700`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: `Bio`,
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-bold`],
                        },
                        MH1Jb57NA: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `32px`,
                                "--framer-font-weight": `700`,
                                "--framer-line-height": `1.1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: `Bio`,
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-bold`],
                        },
                        NB_uc6ukG: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `26px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                              },
                              children: `Text`,
                            }),
                          }),
                        },
                        PUjTq2gTA: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `32px`,
                                "--framer-font-weight": `700`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                              },
                              children: `Text`,
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-bold`],
                        },
                        z57hmOAEi: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `32px`,
                                "--framer-font-weight": `700`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: `Bio`,
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-bold`],
                        },
                      },
                      v,
                      S
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-JJzqm.framer-1owxqxv, .framer-JJzqm .framer-1owxqxv { display: block; }`,
          `.framer-JJzqm.framer-n1nw7w { cursor: pointer; gap: 10px; height: 269px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 288px; }`,
          `.framer-JJzqm .framer-f4je3i { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
        ],
        `framer-JJzqm`
      )),
      (qi.displayName = `Bio`),
      (qi.defaultProps = { height: 269, width: 288 }),
      be(qi, {
        variant: {
          options: [
            `ci9Sr2_oK`,
            `MH1Jb57NA`,
            `GnuMeUous`,
            `EjW7Iqp9w`,
            `NB_uc6ukG`,
            `PUjTq2gTA`,
            `z57hmOAEi`,
            `WuL1ZVFWg`,
          ],
          optionTitles: [
            `Default 1`,
            `Hover 1`,
            `Pressed Hover 1`,
            `Pressed 1`,
            `Default 2`,
            `Hover 2`,
            `Pressed Hover 2`,
            `Pressed 2`,
          ],
          title: `Variant`,
          type: V.Enum,
        },
        zIBTS_z38: { title: `Click`, type: V.EventHandler },
        FojVYZKtw: { defaultValue: `Text`, displayTextArea: !1, title: `Title`, type: V.String },
        onFojVYZKtwChange: { changes: `FojVYZKtw`, type: V.ChangeHandler },
      }),
      R(
        qi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Yi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da = e(() => {
    (v(),
      G(),
      M(),
      y(),
      Fi(),
      Ji(),
      (Xi = F(qi)),
      (Zi = [`bWELIdOeA`, `MBmINTlOK`, `oPyiny6sV`, `uIi_7f8sW`]),
      (Qi = `framer-rabYe`),
      ($i = {
        bWELIdOeA: `framer-v-153veb0`,
        MBmINTlOK: `framer-v-1opmhj1`,
        oPyiny6sV: `framer-v-fa6mo1`,
        uIi_7f8sW: `framer-v-ywnjvg`,
      }),
      (ea = (e) => (e === `clip` ? `var(--overflow-clip-fallback, clip)` : e)),
      (ta = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (na = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ra = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ia = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (aa = {
        Bio: `MBmINTlOK`,
        Contact: `oPyiny6sV`,
        Default: `bWELIdOeA`,
        Writings: `uIi_7f8sW`,
      }),
      (oa = C.create(c)),
      (sa = { Clip: `clip`, Hidden: `hidden`, Scroll: `auto`, Visible: `visible` }),
      (ca = ({ height: e, id: t, overflow: n, width: r, ...i }) => ({
        ...i,
        variant: aa[i.variant] ?? i.variant ?? `bWELIdOeA`,
        VFbLzjQAO: sa[n] ?? n ?? i.VFbLzjQAO ?? `auto`,
      })),
      (la = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ua = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge(),
            l = ne(),
            { style: u, className: d, layoutId: f, variant: m, VFbLzjQAO: _, ...v } = ca(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = B({
              cycleOrder: Zi,
              defaultVariant: `bWELIdOeA`,
              ref: i,
              variant: m,
              variantClassNames: $i,
            }),
            k = la(e, O),
            A = W(Qi, Pi),
            { activeVariantCallback: j, delay: te } = ie(y),
            M = j(async (...e) => {
              D(`MBmINTlOK`);
            }),
            N = j(async (...e) => {
              D(`bWELIdOeA`);
            }),
            P = j(async (...e) => {
              D(`uIi_7f8sW`);
            }),
            F = j(async (...e) => {
              D(`oPyiny6sV`);
            }),
            I = () => ![`oPyiny6sV`, `uIi_7f8sW`].includes(y),
            L = () => y === `MBmINTlOK`,
            re = () => y === `uIi_7f8sW`,
            ae = () => y === `oPyiny6sV`;
          return g(ee, {
            id: f ?? a,
            children: g(oa, {
              animate: O,
              initial: !1,
              children: g(ia, {
                value: ta,
                ...Yi({ MBmINTlOK: { value: na } }, y, w),
                children: h(C.div, {
                  ...v,
                  ...S,
                  className: W(A, `framer-153veb0`, d, b),
                  "data-framer-name": `Default`,
                  layoutDependency: k,
                  layoutId: `bWELIdOeA`,
                  ref: i,
                  style: { "--12a3nrl": ea(_), backgroundColor: `rgb(234, 230, 221)`, ...u },
                  ...Yi(
                    {
                      MBmINTlOK: { "data-framer-name": `Bio` },
                      oPyiny6sV: { "data-framer-name": `Contact` },
                      uIi_7f8sW: { "data-framer-name": `Writings` },
                    },
                    y,
                    w
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-5hnd3f`,
                      "data-framer-name": `Navigation`,
                      layoutDependency: k,
                      layoutId: `sgwDuor0j`,
                      children: [
                        g(H, {
                          height: Math.max((l?.height || 752) / 3, 0),
                          width: `max(min(${l?.width || `100vw`} * 0.33, 288px), ${l?.width || `100vw`} * 0.2)`,
                          y: l?.y || 0,
                          children: g(U, {
                            className: `framer-1cm0h8x-container`,
                            layoutDependency: k,
                            layoutId: `Ib2oOqHtZ-container`,
                            nodeId: `Ib2oOqHtZ`,
                            rendersWithMotion: !0,
                            scopeId: `qXMKBZGn1`,
                            children: g(qi, {
                              FojVYZKtw: `Bio`,
                              height: `100%`,
                              id: `Ib2oOqHtZ`,
                              layoutId: `Ib2oOqHtZ`,
                              style: { height: `100%`, width: `100%` },
                              variant: ra(`ci9Sr2_oK`),
                              width: `100%`,
                              zIBTS_z38: M,
                              ...Yi(
                                { MBmINTlOK: { variant: ra(`GnuMeUous`), zIBTS_z38: N } },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                        g(H, {
                          height: Math.max((l?.height || 752) / 3, 0),
                          width: `max(min(${l?.width || `100vw`} * 0.33, 288px), ${l?.width || `100vw`} * 0.2)`,
                          y: (l?.y || 0) + Math.max((l?.height || 752) / 3, 0),
                          children: g(U, {
                            className: `framer-cdccay-container`,
                            "data-framer-name": `Writings`,
                            layoutDependency: k,
                            layoutId: `rQJSxYuT5-container`,
                            name: `Writings`,
                            nodeId: `rQJSxYuT5`,
                            rendersWithMotion: !0,
                            scopeId: `qXMKBZGn1`,
                            children: g(qi, {
                              FojVYZKtw: `Writings`,
                              height: `100%`,
                              id: `rQJSxYuT5`,
                              layoutId: `rQJSxYuT5`,
                              name: `Writings`,
                              style: { height: `100%`, width: `100%` },
                              variant: ra(`NB_uc6ukG`),
                              width: `100%`,
                              zIBTS_z38: P,
                              ...Yi(
                                { uIi_7f8sW: { variant: ra(`z57hmOAEi`), zIBTS_z38: N } },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                        g(H, {
                          height: Math.max((l?.height || 752) / 3, 0),
                          width: `max(min(${l?.width || `100vw`} * 0.33, 288px), ${l?.width || `100vw`} * 0.2)`,
                          y: (l?.y || 0) + Math.max((l?.height || 752) / 3, 0) * 2,
                          children: g(U, {
                            className: `framer-c8ck1d-container`,
                            "data-framer-name": `Contact`,
                            layoutDependency: k,
                            layoutId: `V1cELFqXZ-container`,
                            name: `Contact`,
                            nodeId: `V1cELFqXZ`,
                            rendersWithMotion: !0,
                            scopeId: `qXMKBZGn1`,
                            children: g(qi, {
                              FojVYZKtw: `Contact`,
                              height: `100%`,
                              id: `V1cELFqXZ`,
                              layoutId: `V1cELFqXZ`,
                              name: `Contact`,
                              style: { height: `100%`, width: `100%` },
                              variant: ra(`ci9Sr2_oK`),
                              width: `100%`,
                              zIBTS_z38: F,
                              ...Yi(
                                { oPyiny6sV: { variant: ra(`GnuMeUous`), zIBTS_z38: N } },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(C.div, {
                      className: `framer-1c2x9qw`,
                      layoutDependency: k,
                      layoutId: `LVVDI3UhU`,
                      children: [
                        g(z, {
                          __fromCanvasComponent: !0,
                          children: h(c, {
                            children: [
                              g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                  "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                  "--framer-font-size": `48px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                },
                                children: g(C.mark, {
                                  style: {
                                    "--framer-text-background-corner-shape-fallback": `1`,
                                    "--framer-text-background-corner-shape": `superellipse(1)`,
                                    "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                  },
                                  children: `Davin Kusuma`,
                                }),
                              }),
                              g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                  "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                  "--framer-font-size": `21px`,
                                  "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                },
                                children: `Video game creator and visual artist`,
                              }),
                            ],
                          }),
                          className: `framer-16bhgws`,
                          "data-framer-name": `Head`,
                          fonts: [`FS;Space Grotesk-bold`, `FS;Raleway-regular`],
                          layoutDependency: k,
                          layoutId: `LfMRPWak3`,
                          style: {
                            "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                            "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          variants: {
                            oPyiny6sV: {
                              "--extracted-1bqba7n": `rgb(45, 45, 42)`,
                              "--extracted-gdpscs": `rgb(45, 45, 42)`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Yi(
                            {
                              MBmINTlOK: {
                                children: h(c, {
                                  children: [
                                    g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                        "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                        "--framer-font-size": `32px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.mark, {
                                        style: {
                                          "--framer-text-background-corner-shape-fallback": `1`,
                                          "--framer-text-background-corner-shape": `superellipse(1)`,
                                          "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                        },
                                        children: `Davin Kusuma`,
                                      }),
                                    }),
                                    g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                      },
                                      children: `Video game creator and visual artist`,
                                    }),
                                  ],
                                }),
                              },
                              oPyiny6sV: {
                                children: h(c, {
                                  children: [
                                    g(C.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                        "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                        "--framer-font-size": `48px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `var(--extracted-gdpscs, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.mark, {
                                        style: {
                                          "--framer-text-background-corner-shape-fallback": `1`,
                                          "--framer-text-background-corner-shape": `superellipse(1)`,
                                          "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                        },
                                        children: `Davin Kusuma`,
                                      }),
                                    }),
                                    g(C.h1, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `21px`,
                                        "--framer-text-color": `var(--extracted-1bqba7n, rgb(45, 45, 42))`,
                                      },
                                      children: `Video game creator and visual artist`,
                                    }),
                                  ],
                                }),
                              },
                            },
                            y,
                            w
                          ),
                        }),
                        I() &&
                          g(z, {
                            __fromCanvasComponent: !0,
                            children: h(c, {
                              children: [
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                  },
                                  children: `Award-winning video game creator with experiences as a game designer, animator, artist, and narrative designer. Has created games ranging from jam games to a more experimental approach mostly using Godot, Figma, and Blender as tools. Exhibited interactive installation artworks and has a deep interest in interactive media, notably video games.`,
                                }),
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                  },
                                  children: g(C.br, { className: `trailing-break` }),
                                }),
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                  },
                                  children: `Currently working on a project called Spiritwatch.`,
                                }),
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-14qxiz, rgb(45, 45, 42))`,
                                  },
                                  children: g(C.br, { className: `trailing-break` }),
                                }),
                                h(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-ydz9fi, rgb(45, 45, 42))`,
                                  },
                                  children: [
                                    `You can check out the `,
                                    g(fe, {
                                      href: `vexushi.itch.io`,
                                      motionChild: !0,
                                      nodeId: `as5Euygbt`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `qXMKBZGn1`,
                                      smoothScroll: !1,
                                      children: g(C.a, {
                                        className: `framer-styles-preset-c56h81`,
                                        "data-styles-preset": `hjksxnpz2`,
                                        children: `itch.io`,
                                      }),
                                    }),
                                    ` page for a full list of uploaded projects.`,
                                  ],
                                }),
                              ],
                            }),
                            className: `framer-1mkqcrk`,
                            "data-framer-name": `Paragraph`,
                            fonts: [`FS;Raleway-regular`],
                            layoutDependency: k,
                            layoutId: `as5Euygbt`,
                            style: {
                              "--extracted-14qxiz": `rgb(45, 45, 42)`,
                              "--extracted-1iakedh": `rgb(45, 45, 42)`,
                              "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                              "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                              "--extracted-ydz9fi": `rgb(45, 45, 42)`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Yi(
                              {
                                MBmINTlOK: {
                                  children: g(c, {
                                    children: g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-text-alignment": `justify`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: `Davin Ammar Kusuma is video game creator that has experience in game design, animations, art, and narrative design. His interest in creating games started since playing online multiplayer games as he connects with other people with different backgrounds. Initially having created animations, role-playing experiences, and paper prototypes, he started creating video games through small game jams. With a background in visual art through academic studies, he studied video game as a medium through experimental explorations, creating works such as Dull Grey Morning (2025), and Control (2025). Meanwhile, he continues to participate in game jams and love creating with new approaches. He received his Bachelor of Fine Arts from Institut Teknologi Bandung in 2026 and continuing his personal studies in video games and interactive media.`,
                                    }),
                                  }),
                                },
                              },
                              y,
                              w
                            ),
                          }),
                        L() &&
                          h(C.div, {
                            className: `framer-1rqd4un`,
                            "data-framer-name": `Biography`,
                            layoutDependency: k,
                            layoutId: `fNzNbfqy7`,
                            children: [
                              h(C.div, {
                                className: `framer-1k926cx`,
                                "data-framer-name": `Category`,
                                layoutDependency: k,
                                layoutId: `TO5vbcFIV`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Achievements` }),
                                      }),
                                    }),
                                    className: `framer-jk0fja`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `DiXJ1V4q2`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `GIMERSIA Inspire 2nd Place Winner for Best Game`,
                                      }),
                                    }),
                                    className: `framer-ray3zd`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `aqhCOjn62`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Garena Game Jam 3 2nd Runner-Up Winner`,
                                      }),
                                    }),
                                    className: `framer-12tfa91`,
                                    "data-framer-name": `Content2`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `XfAI7yRzQ`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-16mpry9`,
                                "data-framer-name": `Category`,
                                layoutDependency: k,
                                layoutId: `OzPJ9bpMe`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Education` }),
                                      }),
                                    }),
                                    className: `framer-t0t76r`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `T3Tlhghtc`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Bachelor of FIne Arts from Institut Teknologi Bandung (2022-2026)`,
                                      }),
                                    }),
                                    className: `framer-1dboutc`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `PPvEdByzu`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        re() &&
                          h(C.div, {
                            className: `framer-1hf0684`,
                            "data-framer-name": `Writings`,
                            layoutDependency: k,
                            layoutId: `TtZClifdX`,
                            children: [
                              h(C.div, {
                                className: `framer-16zmih2`,
                                "data-framer-name": `Category1`,
                                layoutDependency: k,
                                layoutId: `gcn8apJpL`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Articles` }),
                                      }),
                                    }),
                                    className: `framer-1po1gla`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `yKEozWT8g`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: h(c, {
                                      children: [
                                        h(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                          },
                                          children: [
                                            `Behind The Questionable Video Game Age Ratings [`,
                                            g(fe, {
                                              href: `https://jurnalismesainsitb.wordpress.com/2025/12/20/k02_di-balik-penilaian-usia-gim-yang-masih-dipertanyakan/`,
                                              motionChild: !0,
                                              nodeId: `iUCuZiXmW`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `qXMKBZGn1`,
                                              smoothScroll: !1,
                                              children: g(C.a, {
                                                className: `framer-styles-preset-c56h81`,
                                                "data-styles-preset": `hjksxnpz2`,
                                                children: `Read`,
                                              }),
                                            }),
                                            `]`,
                                            g(C.br, {}),
                                            `Jurnalisme Sains, Seni, dan Teknologi ITB`,
                                          ],
                                        }),
                                        g(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                          },
                                          children: `December 20, 2025`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-2xjbey`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `iUCuZiXmW`,
                                    style: {
                                      "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-8f314r`,
                                "data-framer-name": `Category2`,
                                layoutDependency: k,
                                layoutId: `MGzdIDkeb`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Essays` }),
                                      }),
                                    }),
                                    className: `framer-2quizr`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `gIYtGerDG`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Video, Game, Video Game (2026)`,
                                      }),
                                    }),
                                    className: `framer-1gsjsmv`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `fsSWffXqW`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Sandboxd: Machinima and Video Game Cinematography (2026)`,
                                      }),
                                    }),
                                    className: `framer-1jg3boc`,
                                    "data-framer-name": `Content2`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `vl5ujY0tV`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ae() &&
                          h(C.div, {
                            className: `framer-1li0gq3`,
                            "data-framer-name": `Contacts`,
                            layoutDependency: k,
                            layoutId: `nRli7RjRS`,
                            children: [
                              h(C.div, {
                                className: `framer-phn3kw`,
                                "data-framer-name": `Category1`,
                                layoutDependency: k,
                                layoutId: `pc__5q9pY`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `E-Mail` }),
                                      }),
                                    }),
                                    className: `framer-vzu7br`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `En_MCuaPi`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `davinksma@gmail.com`,
                                      }),
                                    }),
                                    className: `framer-1uizjv6`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `r3XE662wv`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-11huyl3`,
                                "data-framer-name": `Category2`,
                                layoutDependency: k,
                                layoutId: `g2EStzKC3`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Socials` }),
                                      }),
                                    }),
                                    className: `framer-1aikxmq`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `QJtl4VcHl`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Instagram — @akdavin`,
                                      }),
                                    }),
                                    className: `framer-1en5tai`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `tcpjRjPZc`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-rabYe.framer-zidc1, .framer-rabYe .framer-zidc1 { display: block; }`,
          `.framer-rabYe.framer-153veb0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 140px 0px; height: 752px; justify-content: flex-start; overflow: var(--12a3nrl); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-rabYe .framer-5hnd3f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 0px 10px; height: 100%; justify-content: flex-start; max-width: 33%; min-width: 20%; overflow: auto; padding: 0px; position: relative; width: 288px; }`,
          `.framer-rabYe .framer-1cm0h8x-container, .framer-rabYe .framer-cdccay-container, .framer-rabYe .framer-c8ck1d-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-rabYe .framer-1c2x9qw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: 100%; justify-content: flex-start; overflow: visible; padding: 70px 70px 70px 100px; position: relative; width: 1px; }`,
          `.framer-rabYe .framer-16bhgws, .framer-rabYe .framer-jk0fja, .framer-rabYe .framer-ray3zd, .framer-rabYe .framer-12tfa91, .framer-rabYe .framer-t0t76r, .framer-rabYe .framer-1dboutc, .framer-rabYe .framer-1po1gla, .framer-rabYe .framer-2xjbey, .framer-rabYe .framer-2quizr, .framer-rabYe .framer-1gsjsmv, .framer-rabYe .framer-1jg3boc, .framer-rabYe .framer-vzu7br, .framer-rabYe .framer-1uizjv6, .framer-rabYe .framer-1aikxmq, .framer-rabYe .framer-1en5tai { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-rabYe .framer-1mkqcrk { flex: none; height: auto; max-width: 650px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-rabYe .framer-1rqd4un { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-rabYe .framer-1k926cx, .framer-rabYe .framer-16mpry9, .framer-rabYe .framer-16zmih2, .framer-rabYe .framer-8f314r, .framer-rabYe .framer-phn3kw, .framer-rabYe .framer-11huyl3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-rabYe .framer-1hf0684, .framer-rabYe .framer-1li0gq3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 52px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-rabYe.framer-v-1opmhj1 .framer-1c2x9qw { gap: 48px; overflow: auto; }`,
          `.framer-rabYe.framer-v-ywnjvg .framer-16zmih2 { order: 0; }`,
          `.framer-rabYe.framer-v-ywnjvg .framer-8f314r { order: 1; }`,
          ...Ni,
        ],
        `framer-rabYe`
      )),
      (ua.displayName = `Intro`),
      (ua.defaultProps = { height: 752, width: 1200 }),
      be(ua, {
        variant: {
          options: [`bWELIdOeA`, `MBmINTlOK`, `oPyiny6sV`, `uIi_7f8sW`],
          optionTitles: [`Default`, `Bio`, `Contact`, `Writings`],
          title: `Variant`,
          type: V.Enum,
        },
        VFbLzjQAO: {
          defaultValue: `auto`,
          options: [`clip`, `visible`, `hidden`, `auto`],
          optionTitles: [`Clip`, `Visible`, `Hidden`, `Scroll`],
          title: `Overflow`,
          type: V.Enum,
        },
      }),
      R(
        ua,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/ZYCN4M673NULYB4BOICEICFLQAPDYBRK.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/Z44HTHVYVEXDW67RPEV7ZLLGGIA6RIPD.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Xi,
          ...I(Mi),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ua.loader = { load: (e, t) => P([() => N(qi, {}, t)], t) }));
  });
function fa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa = e(() => {
    (v(),
      G(),
      M(),
      y(),
      (pa = [
        `OvQh81T9L`,
        `pHLh6Nd7A`,
        `cSB93OMUV`,
        `yM3mCoq_o`,
        `fb7bcEzTx`,
        `ZJeS3M5Yf`,
        `AxvcotL1z`,
        `A7H22RAqd`,
      ]),
      (ma = `framer-hMn9X`),
      (ha = {
        A7H22RAqd: `framer-v-1onql9c`,
        AxvcotL1z: `framer-v-pk5t1n`,
        cSB93OMUV: `framer-v-1vz5fjy`,
        fb7bcEzTx: `framer-v-c3zm9b`,
        OvQh81T9L: `framer-v-1det50q`,
        pHLh6Nd7A: `framer-v-166comh`,
        yM3mCoq_o: `framer-v-vf3236`,
        ZJeS3M5Yf: `framer-v-aeolug`,
      }),
      (ga = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_a = (e, t) => `translate(-50%, -50%) ${t}`),
      (va = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (ya = {
        "Default 1": `OvQh81T9L`,
        "Default 2": `fb7bcEzTx`,
        "Hover 1": `pHLh6Nd7A`,
        "Hover 2": `AxvcotL1z`,
        "Hover Pressed 2": `A7H22RAqd`,
        "Pressed 1": `yM3mCoq_o`,
        "Pressed 2": `ZJeS3M5Yf`,
        "Pressed Hover 1": `cSB93OMUV`,
      }),
      (ba = C.create(c)),
      (xa = ({ click: e, enter: t, height: n, id: r, text: i, width: a, ...o }) => ({
        ...o,
        eYhAHKYIw: i ?? o.eYhAHKYIw ?? `Text`,
        q4FdN2eFn: t ?? o.q4FdN2eFn,
        uaJmYM9LG: e ?? o.uaJmYM9LG,
        variant: ya[o.variant] ?? o.variant ?? `OvQh81T9L`,
      })),
      (Sa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ca = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge();
          ne();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              uaJmYM9LG: m,
              q4FdN2eFn: h,
              eYhAHKYIw: _,
              ...v
            } = xa(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = B({
              cycleOrder: pa,
              defaultVariant: `OvQh81T9L`,
              ref: i,
              variant: f,
              variantClassNames: ha,
            }),
            k = Sa(e, O),
            A = [],
            { activeVariantCallback: j, delay: te } = ie(y),
            M = j(async (...e) => {
              if ((E({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            N = j(async (...e) => {
              if ((E({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
              D(`pHLh6Nd7A`);
            }),
            P = W(ma, ...A),
            F = j(async (...e) => {
              if ((E({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              D(`cSB93OMUV`);
            }),
            I = j(async (...e) => {
              (E({ isHovered: !1 }), D(`OvQh81T9L`));
            }),
            L = j(async (...e) => {
              if ((E({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              D(`pHLh6Nd7A`);
            }),
            re = j(async (...e) => {
              (E({ isHovered: !1 }), D(`yM3mCoq_o`));
            }),
            ae = j(async (...e) => {
              if ((E({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
              D(`cSB93OMUV`);
            }),
            oe = j(async (...e) => {
              if ((E({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
              D(`AxvcotL1z`);
            }),
            R = j(async (...e) => {
              if ((E({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
              D(`A7H22RAqd`);
            }),
            se = j(async (...e) => {
              if ((E({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              D(`A7H22RAqd`);
            }),
            ce = j(async (...e) => {
              if ((E({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            le = j(async (...e) => {
              (E({ isHovered: !1 }), D(`fb7bcEzTx`));
            }),
            ue = j(async (...e) => {
              if ((E({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
              D(`AxvcotL1z`);
            }),
            de = j(async (...e) => {
              (E({ isHovered: !1 }), D(`ZJeS3M5Yf`));
            });
          return g(ee, {
            id: d ?? a,
            children: g(ba, {
              animate: O,
              initial: !1,
              children: g(va, {
                value: ga,
                children: g(C.div, {
                  ...v,
                  ...S,
                  className: W(P, `framer-1det50q`, u, b),
                  "data-framer-name": `Default 1`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `OvQh81T9L`,
                  onMouseEnter: N,
                  onTap: M,
                  ref: i,
                  style: { backgroundColor: `rgb(123, 181, 178)`, ...l },
                  variants: {
                    A7H22RAqd: { backgroundColor: `rgb(204, 203, 190)` },
                    AxvcotL1z: { backgroundColor: `rgb(41, 75, 135)` },
                    cSB93OMUV: { backgroundColor: `rgb(204, 203, 190)` },
                    fb7bcEzTx: { backgroundColor: `rgb(52, 101, 155)` },
                    pHLh6Nd7A: { backgroundColor: `rgb(99, 166, 171)` },
                    yM3mCoq_o: { backgroundColor: `rgb(234, 230, 221)` },
                    ZJeS3M5Yf: { backgroundColor: `rgb(234, 230, 221)` },
                  },
                  ...fa(
                    {
                      A7H22RAqd: {
                        "data-framer-name": `Hover Pressed 2`,
                        onMouseEnter: ce,
                        onMouseLeave: de,
                        onTap: ue,
                      },
                      AxvcotL1z: {
                        "data-framer-name": `Hover 2`,
                        onMouseEnter: ce,
                        onMouseLeave: le,
                        onTap: se,
                      },
                      cSB93OMUV: {
                        "data-framer-name": `Pressed Hover 1`,
                        onMouseLeave: re,
                        onTap: L,
                      },
                      fb7bcEzTx: { "data-framer-name": `Default 2`, onMouseEnter: oe },
                      pHLh6Nd7A: { "data-framer-name": `Hover 1`, onMouseLeave: I, onTap: F },
                      yM3mCoq_o: { "data-framer-name": `Pressed 1`, onMouseEnter: ae },
                      ZJeS3M5Yf: { "data-framer-name": `Pressed 2`, onMouseEnter: R },
                    },
                    y,
                    w
                  ),
                  children: g(z, {
                    __fromCanvasComponent: !0,
                    children: g(c, {
                      children: g(C.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                          "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                          "--framer-font-size": `13px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                        },
                        children: `Text`,
                      }),
                    }),
                    className: `framer-29b2wq`,
                    fonts: [`FS;Space Grotesk-regular`],
                    layoutDependency: k,
                    layoutId: `W67EXZNkE`,
                    style: {
                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: _,
                    transformTemplate: _a,
                    variants: {
                      AxvcotL1z: { "--extracted-r6o4lv": `rgb(234, 230, 221)` },
                      fb7bcEzTx: { "--extracted-r6o4lv": `rgb(234, 230, 221)` },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...fa(
                      {
                        A7H22RAqd: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: g(C.strong, { children: `Text` }),
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                        },
                        AxvcotL1z: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                              },
                              children: g(C.strong, { children: `Text` }),
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                        },
                        cSB93OMUV: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: g(C.strong, { children: `Text` }),
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                        },
                        fb7bcEzTx: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(234, 230, 221))`,
                              },
                              children: `Text`,
                            }),
                          }),
                        },
                        pHLh6Nd7A: {
                          children: g(c, {
                            children: g(C.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                              },
                              children: g(C.strong, { children: `Text` }),
                            }),
                          }),
                          fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                        },
                      },
                      y,
                      w
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-hMn9X.framer-30mrw3, .framer-hMn9X .framer-30mrw3 { display: block; }`,
          `.framer-hMn9X.framer-1det50q { cursor: pointer; height: 178px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 129px; }`,
          `.framer-hMn9X .framer-29b2wq { flex: none; height: auto; left: 50%; position: absolute; top: 49%; white-space: pre; width: auto; }`,
        ],
        `framer-hMn9X`
      )),
      (Ca.displayName = `Bio Phone`),
      (Ca.defaultProps = { height: 178, width: 129 }),
      be(Ca, {
        variant: {
          options: [
            `OvQh81T9L`,
            `pHLh6Nd7A`,
            `cSB93OMUV`,
            `yM3mCoq_o`,
            `fb7bcEzTx`,
            `ZJeS3M5Yf`,
            `AxvcotL1z`,
            `A7H22RAqd`,
          ],
          optionTitles: [
            `Default 1`,
            `Hover 1`,
            `Pressed Hover 1`,
            `Pressed 1`,
            `Default 2`,
            `Pressed 2`,
            `Hover 2`,
            `Hover Pressed 2`,
          ],
          title: `Variant`,
          type: V.Enum,
        },
        uaJmYM9LG: { title: `Click`, type: V.EventHandler },
        q4FdN2eFn: { title: `Enter`, type: V.EventHandler },
        eYhAHKYIw: { defaultValue: `Text`, displayTextArea: !1, title: `Text`, type: V.String },
        oneYhAHKYIwChange: { changes: `eYhAHKYIw`, type: V.ChangeHandler },
      }),
      R(
        Ca,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ta(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra = e(() => {
    (v(),
      G(),
      M(),
      y(),
      Fi(),
      wa(),
      (Ea = F(Ca)),
      (Da = [`WwIIcoBwP`, `p2t4eHZpu`, `JF6Zc2uPf`, `UWGeHeBd0`]),
      (Oa = `framer-2Fe0d`),
      (ka = {
        JF6Zc2uPf: `framer-v-1yalir0`,
        p2t4eHZpu: `framer-v-1aqpsfd`,
        UWGeHeBd0: `framer-v-19oy4yd`,
        WwIIcoBwP: `framer-v-1qa5u8v`,
      }),
      (Aa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ja = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ma = ({ value: e, children: n }) => {
        let r = t(j),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return g(j.Provider, { value: a, children: n });
      }),
      (Na = {
        Biography: `p2t4eHZpu`,
        Contact: `UWGeHeBd0`,
        Default: `WwIIcoBwP`,
        Writings: `JF6Zc2uPf`,
      }),
      (Pa = C.create(c)),
      (Fa = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        hWHJ4TvpM: e ?? i.hWHJ4TvpM,
        variant: Na[i.variant] ?? i.variant ?? `WwIIcoBwP`,
      })),
      (Ia = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (La = ve(
        _(function (e, t) {
          let r = p(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = ge(),
            l = ne(),
            { style: u, className: d, layoutId: f, variant: m, hWHJ4TvpM: _, ...v } = Fa(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = B({
              cycleOrder: Da,
              defaultVariant: `WwIIcoBwP`,
              ref: i,
              variant: m,
              variantClassNames: ka,
            }),
            k = Ia(e, O),
            A = W(Oa, Pi),
            { activeVariantCallback: j, delay: te } = ie(y),
            M = j(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
              D(`p2t4eHZpu`);
            }),
            N = j(async (...e) => {
              D(`MH1Jb57NA`);
            }),
            P = j(async (...e) => {
              D(`WwIIcoBwP`);
            }),
            F = j(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
              D(`JF6Zc2uPf`);
            }),
            I = j(async (...e) => {
              D(`JF6Zc2uPf`);
            }),
            L = j(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
              D(`UWGeHeBd0`);
            }),
            re = j(async (...e) => {
              D(`UWGeHeBd0`);
            }),
            ae = () => ![`JF6Zc2uPf`, `UWGeHeBd0`].includes(y),
            oe = () => ![`p2t4eHZpu`, `JF6Zc2uPf`, `UWGeHeBd0`].includes(y),
            R = () => y === `p2t4eHZpu`,
            se = () => y === `JF6Zc2uPf`,
            ce = () => y === `UWGeHeBd0`;
          return g(ee, {
            id: f ?? a,
            children: g(Pa, {
              animate: O,
              initial: !1,
              children: g(Ma, {
                value: Aa,
                children: h(C.div, {
                  ...v,
                  ...S,
                  className: W(A, `framer-1qa5u8v`, d, b),
                  "data-framer-name": `Default`,
                  layoutDependency: k,
                  layoutId: `WwIIcoBwP`,
                  ref: i,
                  style: { backgroundColor: `rgb(234, 230, 221)`, ...u },
                  ...Ta(
                    {
                      JF6Zc2uPf: { "data-framer-name": `Writings` },
                      p2t4eHZpu: { "data-framer-name": `Biography` },
                      UWGeHeBd0: { "data-framer-name": `Contact` },
                    },
                    y,
                    w
                  ),
                  children: [
                    h(C.div, {
                      className: `framer-1nqb6y7`,
                      "data-framer-name": `Navigation`,
                      layoutDependency: k,
                      layoutId: `EGj1YUKiR`,
                      children: [
                        g(H, {
                          height: Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1,
                          width: `max(min(85px, ${l?.width || `100vw`} * 0.33), ${l?.width || `100vw`} / 5)`,
                          y: (l?.y || 0) + 0 + 0 + 0,
                          children: g(U, {
                            className: `framer-1fb1fw6-container`,
                            layoutDependency: k,
                            layoutId: `imSJPufnj-container`,
                            nodeId: `imSJPufnj`,
                            rendersWithMotion: !0,
                            scopeId: `R15ugjDyt`,
                            children: g(Ca, {
                              eYhAHKYIw: `Bio`,
                              height: `100%`,
                              id: `imSJPufnj`,
                              layoutId: `imSJPufnj`,
                              q4FdN2eFn: N,
                              style: { height: `100%`, width: `100%` },
                              uaJmYM9LG: M,
                              variant: ja(`OvQh81T9L`),
                              width: `100%`,
                              ...Ta(
                                {
                                  JF6Zc2uPf: { q4FdN2eFn: void 0 },
                                  p2t4eHZpu: {
                                    q4FdN2eFn: void 0,
                                    uaJmYM9LG: P,
                                    variant: ja(`cSB93OMUV`),
                                  },
                                  UWGeHeBd0: { q4FdN2eFn: void 0 },
                                },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                        g(H, {
                          height: Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1,
                          width: `max(min(85px, ${l?.width || `100vw`} * 0.33), ${l?.width || `100vw`} / 5)`,
                          y:
                            (l?.y || 0) +
                            0 +
                            0 +
                            (0 + Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1 + 0),
                          children: g(U, {
                            className: `framer-1i8l0v5-container`,
                            "data-framer-name": `Writings Phone`,
                            layoutDependency: k,
                            layoutId: `Pyc_3TOTH-container`,
                            name: `Writings Phone`,
                            nodeId: `Pyc_3TOTH`,
                            rendersWithMotion: !0,
                            scopeId: `R15ugjDyt`,
                            children: g(Ca, {
                              eYhAHKYIw: `Writings`,
                              height: `100%`,
                              id: `Pyc_3TOTH`,
                              layoutId: `Pyc_3TOTH`,
                              name: `Writings Phone`,
                              style: { height: `100%`, width: `100%` },
                              uaJmYM9LG: F,
                              variant: ja(`fb7bcEzTx`),
                              width: `100%`,
                              ...Ta(
                                {
                                  JF6Zc2uPf: { uaJmYM9LG: P, variant: ja(`A7H22RAqd`) },
                                  p2t4eHZpu: { uaJmYM9LG: I },
                                },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                        g(H, {
                          height: Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1,
                          width: `max(min(85px, ${l?.width || `100vw`} * 0.33), ${l?.width || `100vw`} / 5)`,
                          y:
                            (l?.y || 0) +
                            0 +
                            0 +
                            (0 +
                              (Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1 +
                                Math.max(0, (((l?.height || 600) - 0) * 1 - 0 - 0) / 3) * 1) +
                              0),
                          children: g(U, {
                            className: `framer-1hklgtg-container`,
                            "data-framer-name": `Contact Phone`,
                            layoutDependency: k,
                            layoutId: `lrQSk2CTo-container`,
                            name: `Contact Phone`,
                            nodeId: `lrQSk2CTo`,
                            rendersWithMotion: !0,
                            scopeId: `R15ugjDyt`,
                            children: g(Ca, {
                              eYhAHKYIw: `Contact`,
                              height: `100%`,
                              id: `lrQSk2CTo`,
                              layoutId: `lrQSk2CTo`,
                              name: `Contact Phone`,
                              style: { height: `100%`, width: `100%` },
                              uaJmYM9LG: L,
                              variant: ja(`OvQh81T9L`),
                              width: `100%`,
                              ...Ta(
                                {
                                  p2t4eHZpu: { uaJmYM9LG: re },
                                  UWGeHeBd0: { uaJmYM9LG: P, variant: ja(`cSB93OMUV`) },
                                },
                                y,
                                w
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(C.div, {
                      className: `framer-19ehk9l`,
                      layoutDependency: k,
                      layoutId: `QdQ6xgSdG`,
                      children: [
                        g(z, {
                          __fromCanvasComponent: !0,
                          children: h(c, {
                            children: [
                              g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                  "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                  "--framer-font-size": `24px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                },
                                children: g(C.mark, {
                                  style: {
                                    "--framer-text-background-corner-shape-fallback": `1`,
                                    "--framer-text-background-corner-shape": `superellipse(1)`,
                                    "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                  },
                                  children: `Davin Kusuma`,
                                }),
                              }),
                              g(C.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                  "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                  "--framer-font-size": `11px`,
                                  "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                },
                                children: `Video game creator and visual artist`,
                              }),
                            ],
                          }),
                          className: `framer-1sm95vm`,
                          "data-framer-name": `Head`,
                          fonts: [`FS;Space Grotesk-bold`, `FS;Raleway-regular`],
                          layoutDependency: k,
                          layoutId: `lT5auhw3W`,
                          style: {
                            "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                            "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Ta(
                            {
                              p2t4eHZpu: {
                                children: h(c, {
                                  children: [
                                    g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1ib2xk`,
                                        "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.mark, {
                                        style: {
                                          "--framer-text-background-corner-shape-fallback": `1`,
                                          "--framer-text-background-corner-shape": `superellipse(1)`,
                                          "--framer-text-background-radius": `calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1)))`,
                                        },
                                        children: `Davin Kusuma`,
                                      }),
                                    }),
                                    g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `11px`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                      },
                                      children: `Video game creator and visual artist`,
                                    }),
                                  ],
                                }),
                              },
                            },
                            y,
                            w
                          ),
                        }),
                        ae() &&
                          g(z, {
                            __fromCanvasComponent: !0,
                            children: h(c, {
                              children: [
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                  },
                                  children: `Award-winning video game creator with experiences as a game designer, animator, artist, and narrative designer. Has created games ranging from jam games to a more experimental approach mostly using Godot, Figma, and Blender as tools. Exhibited interactive installation artworks and has a deep interest in interactive media, notably video games.`,
                                }),
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                  },
                                  children: g(C.br, { className: `trailing-break` }),
                                }),
                                g(C.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                    "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                  },
                                  children: `Currently working on a project called Spiritwatch.`,
                                }),
                              ],
                            }),
                            className: `framer-1dfdnb`,
                            "data-framer-name": `Paragraph`,
                            fonts: [`FS;Raleway-regular`],
                            layoutDependency: k,
                            layoutId: `CI7AJUXtQ`,
                            style: {
                              "--extracted-1iakedh": `rgb(45, 45, 42)`,
                              "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                              "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Ta(
                              {
                                p2t4eHZpu: {
                                  children: g(c, {
                                    children: g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-text-alignment": `justify`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: `Davin Ammar Kusuma is video game creator that has experience in game design, animations, art, and narrative design. His interest in creating games started since playing online multiplayer games as he connects with other people with different backgrounds. Initially having created animations, role-playing experiences, and paper prototypes, he started creating video games through small game jams. With a background in visual art through academic studies, he studied video game as a medium through experimental explorations, creating works such as Dull Grey Morning (2025), and Control (2025). Meanwhile, he continues to participate in game jams and love creating with new approaches. He received his Bachelor of Fine Arts from Institut Teknologi Bandung in 2026 and continuing his personal studies in video games and interactive media.`,
                                    }),
                                  }),
                                },
                              },
                              y,
                              w
                            ),
                          }),
                        oe() &&
                          g(C.div, {
                            className: `framer-flynor`,
                            "data-framer-name": `Devlogs`,
                            layoutDependency: k,
                            layoutId: `vUyXVbfFl`,
                            children: h(C.div, {
                              className: `framer-e88eyg`,
                              "data-framer-name": `Category`,
                              layoutDependency: k,
                              layoutId: `zzEPmGqnN`,
                              children: [
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-text-alignment": `justify`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: g(C.strong, { children: `Devlogs` }),
                                    }),
                                  }),
                                  className: `framer-760o2p`,
                                  "data-framer-name": `Subhead`,
                                  fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                  layoutDependency: k,
                                  layoutId: `Mk3hZv6EA`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                g(z, {
                                  __fromCanvasComponent: !0,
                                  children: g(c, {
                                    children: g(C.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                        "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                      },
                                      children: g(fe, {
                                        href: { webPageId: `M_jvSiMT7` },
                                        motionChild: !0,
                                        nodeId: `RbN1Oix5_`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `R15ugjDyt`,
                                        smoothScroll: !1,
                                        children: g(C.a, {
                                          className: `framer-styles-preset-c56h81`,
                                          "data-styles-preset": `hjksxnpz2`,
                                          children: `Spiritwatch Development (21-09-2026) — Ally Pathfinding`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-2kwyxu`,
                                  "data-framer-name": `Content1`,
                                  fonts: [`FS;Raleway-regular`],
                                  layoutDependency: k,
                                  layoutId: `RbN1Oix5_`,
                                  style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        R() &&
                          h(C.div, {
                            className: `framer-1a4drz8`,
                            "data-framer-name": `Biography`,
                            layoutDependency: k,
                            layoutId: `U8jmfgj_p`,
                            children: [
                              h(C.div, {
                                className: `framer-1abi0kd`,
                                "data-framer-name": `Category`,
                                layoutDependency: k,
                                layoutId: `Jpg21hHMn`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Achievements` }),
                                      }),
                                    }),
                                    className: `framer-b6bhuc`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `d4p8VaLFS`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `GIMERSIA Inspire 2nd Place Winner for Best Game`,
                                      }),
                                    }),
                                    className: `framer-1gaflpy`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `x6cutKnll`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Garena Game Jam 3 2nd Runner-Up Winner`,
                                      }),
                                    }),
                                    className: `framer-1tvt70h`,
                                    "data-framer-name": `Content2`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `OZBKB9l31`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-17f079s`,
                                "data-framer-name": `Category`,
                                layoutDependency: k,
                                layoutId: `XiDIWs19e`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Education` }),
                                      }),
                                    }),
                                    className: `framer-1jxhqgj`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `C10Z3fLnj`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: h(c, {
                                      children: [
                                        g(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                          },
                                          children: `Bachelor of FIne Arts from Institut Teknologi Bandung (2022-2026)`,
                                        }),
                                        g(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                          },
                                          children: g(C.br, { className: `trailing-break` }),
                                        }),
                                        g(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-1iakedh, rgb(45, 45, 42))`,
                                          },
                                          children: g(C.br, { className: `trailing-break` }),
                                        }),
                                      ],
                                    }),
                                    className: `framer-myy8xz`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `j2sPA8J8d`,
                                    style: {
                                      "--extracted-1iakedh": `rgb(45, 45, 42)`,
                                      "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        se() &&
                          h(C.div, {
                            className: `framer-q6596p`,
                            "data-framer-name": `Writings`,
                            layoutDependency: k,
                            layoutId: `u7WrIp_i7`,
                            children: [
                              h(C.div, {
                                className: `framer-1yenzc0`,
                                "data-framer-name": `Category1`,
                                layoutDependency: k,
                                layoutId: `dOuqNu7jW`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Articles` }),
                                      }),
                                    }),
                                    className: `framer-j27616`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `SoMSwJBGl`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: h(c, {
                                      children: [
                                        h(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                          },
                                          children: [
                                            `Behind The Questionable Video Game Age Ratings [`,
                                            g(fe, {
                                              href: `https://jurnalismesainsitb.wordpress.com/2025/12/20/k02_di-balik-penilaian-usia-gim-yang-masih-dipertanyakan/`,
                                              motionChild: !0,
                                              nodeId: `JdfbAiom9`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `R15ugjDyt`,
                                              smoothScroll: !1,
                                              children: g(C.a, {
                                                className: `framer-styles-preset-c56h81`,
                                                "data-styles-preset": `hjksxnpz2`,
                                                children: `Read`,
                                              }),
                                            }),
                                            `]`,
                                            g(C.br, {}),
                                            `Jurnalisme Sains, Seni, dan Teknologi ITB`,
                                          ],
                                        }),
                                        g(C.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                            "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-text-alignment": `justify`,
                                            "--framer-text-color": `var(--extracted-2gxw0f, rgb(45, 45, 42))`,
                                          },
                                          children: `December 20, 2025`,
                                        }),
                                      ],
                                    }),
                                    className: `framer-1qid6w1`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `JdfbAiom9`,
                                    style: {
                                      "--extracted-2gxw0f": `rgb(45, 45, 42)`,
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-ksd4aa`,
                                "data-framer-name": `Category2`,
                                layoutDependency: k,
                                layoutId: `IsGnbgOFb`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Essays` }),
                                      }),
                                    }),
                                    className: `framer-jeu6qm`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `TlTJZSViC`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Video, Game, Video Game (2026)`,
                                      }),
                                    }),
                                    className: `framer-ww85c3`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `RieNSrnGJ`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Sandboxd: Machinima and Video Game Cinematography (2026)`,
                                      }),
                                    }),
                                    className: `framer-1r2ch5h`,
                                    "data-framer-name": `Content2`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `A3_4g0nNV`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ce() &&
                          h(C.div, {
                            className: `framer-i1qxbv`,
                            "data-framer-name": `Contacts`,
                            layoutDependency: k,
                            layoutId: `vvZBPyu__`,
                            children: [
                              h(C.div, {
                                className: `framer-1aykx7w`,
                                "data-framer-name": `Category1`,
                                layoutDependency: k,
                                layoutId: `CLCnxcLGN`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `E-Mail` }),
                                      }),
                                    }),
                                    className: `framer-xdwjl3`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `WzBYIwV3v`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `davinksma@gmail.com`,
                                      }),
                                    }),
                                    className: `framer-1gi3x48`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `xHBHM9Xzm`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(C.div, {
                                className: `framer-ol810o`,
                                "data-framer-name": `Category2`,
                                layoutDependency: k,
                                layoutId: `Ef8AIhCFU`,
                                children: [
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: g(C.strong, { children: `Socials` }),
                                      }),
                                    }),
                                    className: `framer-oqnoqc`,
                                    "data-framer-name": `Subhead`,
                                    fonts: [`FS;Raleway-regular`, `FS;Raleway-bold`],
                                    layoutDependency: k,
                                    layoutId: `paFW8Qe85`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(45, 45, 42)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(z, {
                                    __fromCanvasComponent: !0,
                                    children: g(c, {
                                      children: g(C.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7UmFsZXdheS1yZWd1bGFy`,
                                          "--framer-font-family": `"Raleway", "Raleway Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-text-alignment": `justify`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 45, 42))`,
                                        },
                                        children: `Instagram — @akdavin`,
                                      }),
                                    }),
                                    className: `framer-kmden3`,
                                    "data-framer-name": `Content1`,
                                    fonts: [`FS;Raleway-regular`],
                                    layoutDependency: k,
                                    layoutId: `c7ehoY5O3`,
                                    style: { "--extracted-r6o4lv": `rgb(45, 45, 42)` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-2Fe0d.framer-46mc8s, .framer-2Fe0d .framer-46mc8s { display: block; }`,
          `.framer-2Fe0d.framer-1qa5u8v { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 140px 0px; height: 600px; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 390px; }`,
          `.framer-2Fe0d .framer-1nqb6y7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 0px 10px; height: 100%; justify-content: flex-start; max-width: 33%; min-width: 20%; overflow: auto; padding: 0px; position: relative; width: 85px; }`,
          `.framer-2Fe0d .framer-1fb1fw6-container, .framer-2Fe0d .framer-1i8l0v5-container, .framer-2Fe0d .framer-1hklgtg-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-2Fe0d .framer-19ehk9l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 70px; height: 100%; justify-content: flex-start; overflow: auto; padding: 50px 30px 30px 20px; position: relative; width: 1px; }`,
          `.framer-2Fe0d .framer-1sm95vm, .framer-2Fe0d .framer-760o2p, .framer-2Fe0d .framer-2kwyxu, .framer-2Fe0d .framer-b6bhuc, .framer-2Fe0d .framer-1gaflpy, .framer-2Fe0d .framer-1tvt70h, .framer-2Fe0d .framer-1jxhqgj, .framer-2Fe0d .framer-myy8xz, .framer-2Fe0d .framer-j27616, .framer-2Fe0d .framer-1qid6w1, .framer-2Fe0d .framer-jeu6qm, .framer-2Fe0d .framer-ww85c3, .framer-2Fe0d .framer-1r2ch5h, .framer-2Fe0d .framer-xdwjl3, .framer-2Fe0d .framer-1gi3x48, .framer-2Fe0d .framer-oqnoqc, .framer-2Fe0d .framer-kmden3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2Fe0d .framer-1dfdnb { flex: none; height: auto; max-width: 650px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2Fe0d .framer-flynor, .framer-2Fe0d .framer-q6596p, .framer-2Fe0d .framer-i1qxbv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 52px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2Fe0d .framer-e88eyg, .framer-2Fe0d .framer-1abi0kd, .framer-2Fe0d .framer-17f079s, .framer-2Fe0d .framer-1yenzc0, .framer-2Fe0d .framer-ksd4aa, .framer-2Fe0d .framer-1aykx7w, .framer-2Fe0d .framer-ol810o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2Fe0d .framer-1a4drz8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2Fe0d.framer-v-1aqpsfd .framer-19ehk9l { gap: 33px; }`,
          ...Ni,
        ],
        `framer-2Fe0d`
      )),
      (La.displayName = `Intro Phone`),
      (La.defaultProps = { height: 600, width: 390 }),
      be(La, {
        variant: {
          options: [`WwIIcoBwP`, `p2t4eHZpu`, `JF6Zc2uPf`, `UWGeHeBd0`],
          optionTitles: [`Default`, `Biography`, `Writings`, `Contact`],
          title: `Variant`,
          type: V.Enum,
        },
        hWHJ4TvpM: { title: `Click`, type: V.EventHandler },
      }),
      R(
        La,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Space Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Space Grotesk`,
                url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/ZYCN4M673NULYB4BOICEICFLQAPDYBRK.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Raleway`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Raleway`,
                url: `../../assets/misc/Z44HTHVYVEXDW67RPEV7ZLLGGIA6RIPD.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Ea,
          ...I(Mi),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (La.loader = { load: (e, t) => P([() => N(Ca, {}, t)], t) }));
  }),
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no;
e(() => {
  (v(),
    G(),
    M(),
    y(),
    Dr(),
    hi(),
    ji(),
    da(),
    Ra(),
    je(),
    (za = F(ua)),
    (Ba = F(La)),
    (Va = le(C.div)),
    (Ha = F(Ai)),
    (Ua = F(Er)),
    (Wa = F(mi)),
    (Ga = {
      D6ok2HJc2: `(min-width: 680px) and (max-width: 899.98px)`,
      RapUeRwhm: `(max-width: 679.98px)`,
      WQLkyLRf1: `(min-width: 900px)`,
    }),
    (Ka = () => typeof document < `u`),
    (qa = [`gap`]),
    (Ja = `framer-LF8qS`),
    (Ya = {
      D6ok2HJc2: `framer-v-1dc6tz5`,
      RapUeRwhm: `framer-v-mvjitf`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Xa = (e, t, n) => (e && t ? `position` : n)),
    (Za = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Qa = { Desktop: `WQLkyLRf1`, Phone: `RapUeRwhm`, Tablet: `D6ok2HJc2` }),
    ($a = ({ value: e }) =>
      he()
        ? null
        : g(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (eo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Qa[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (to = ve(
      _(function (e, r) {
        let i = p(null),
          a = r ?? i,
          o = n(),
          { activeLocale: s, setLocale: l } = ge(),
          u = ne(),
          { style: d, className: f, layoutId: _, variant: v, ...y } = eo(e);
        de(m(() => Ae({}, s), [s]));
        let [b, x] = ye(v, Ga, !1),
          S = W(Ja),
          w = t(ae)?.isLayoutTemplate,
          T = !!t(j)?.transition?.layout,
          E = Xa(w, T),
          D = () => !Ka() || b !== `RapUeRwhm`,
          O = () => !Ka() || b === `RapUeRwhm`,
          k = () => !Ka() || ![`RapUeRwhm`, `D6ok2HJc2`].includes(b),
          A = () => !Ka() || b === `D6ok2HJc2`;
        return (
          se({}),
          g(ae.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Qa,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Ya,
            },
            children: h(ee, {
              id: _ ?? o,
              children: [
                g($a, {
                  value: `html body { background: rgb(234, 230, 221); } @media (max-width: 679.98px) { html { font-size: 100%; } }`,
                }),
                g(C.div, {
                  ...y,
                  className: W(S, `framer-72rtr7`, f),
                  ref: a,
                  style: { ...d },
                  children: h(C.div, {
                    className: `framer-ups257`,
                    layout: E,
                    children: [
                      D() &&
                        g(H, {
                          height: 900,
                          width: u?.width || `100vw`,
                          y: (u?.y || 0) + 0 + 0 + 0,
                          children: g(me, {
                            className: `framer-1ho246z-container hidden-mvjitf`,
                            nodeId: `x9RRw9Qai`,
                            scopeId: `augiA20Il`,
                            children: g(ua, {
                              height: `100%`,
                              id: `x9RRw9Qai`,
                              layoutId: `x9RRw9Qai`,
                              style: { height: `100%`, width: `100%` },
                              variant: Za(`bWELIdOeA`),
                              VFbLzjQAO: `auto`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      O() &&
                        g(ce, {
                          breakpoint: b,
                          overrides: {
                            RapUeRwhm: {
                              height: 700,
                              width: u?.width || `100vw`,
                              y: (u?.y || 0) + 0 + 0 + 0,
                            },
                          },
                          children: g(H, {
                            children: g(me, {
                              className: `framer-1mq4jix-container hidden-72rtr7 hidden-1dc6tz5`,
                              nodeId: `OkU1owM88`,
                              scopeId: `augiA20Il`,
                              children: g(La, {
                                height: `100%`,
                                id: `OkU1owM88`,
                                layoutId: `OkU1owM88`,
                                style: { height: `100%`, width: `100%` },
                                variant: Za(`WwIIcoBwP`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      h(Va, {
                        className: `framer-11s9bjs`,
                        "data-framer-name": `Header`,
                        tickerEffectAlign: `start`,
                        tickerEffectDirectionModifier: `default`,
                        tickerEffectDraggable: !1,
                        tickerEffectEnabled: !0,
                        tickerEffectGap: 13,
                        tickerEffectHoverModifier: 100,
                        tickerEffectOverflow: `visible`,
                        tickerEffectPosition: `sticky`,
                        tickerEffectStackDirection: `row`,
                        tickerEffectVelocity: 100,
                        children: [
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-y3f1r0`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgba(120, 67, 35, 0.49)`,
                                    },
                                    children: `LUDOGRAPHY`,
                                  }),
                                }),
                                className: `framer-1tpm5tv`,
                                fonts: [`FS;Space Grotesk-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-efhnf`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgb(184, 141, 101)`,
                                    },
                                    children: g(`strong`, { children: `LUDOGRAPHY` }),
                                  }),
                                }),
                                className: `framer-ttz61x`,
                                fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-1vpjbu4`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgba(120, 67, 35, 0.49)`,
                                    },
                                    children: `LUDOGRAPHY`,
                                  }),
                                }),
                                className: `framer-1h4woqj`,
                                fonts: [`FS;Space Grotesk-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-ac8i0h`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgba(120, 67, 35, 0.49)`,
                                    },
                                    children: `LUDOGRAPHY`,
                                  }),
                                }),
                                className: `framer-1i0o3is`,
                                fonts: [`FS;Space Grotesk-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-13zrrgs`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgb(184, 141, 101)`,
                                    },
                                    children: g(`strong`, { children: `LUDOGRAPHY` }),
                                  }),
                                }),
                                className: `framer-4dg6ah`,
                                fonts: [`FS;Space Grotesk-regular`, `FS;Space Grotesk-bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          g(xe, {
                            children: g(`div`, {
                              className: `framer-nnrhof`,
                              children: g(z, {
                                __fromCanvasComponent: !0,
                                children: g(c, {
                                  children: g(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7U3BhY2UgR3JvdGVzay1yZWd1bGFy`,
                                      "--framer-font-family": `"Space Grotesk", "Space Grotesk Placeholder", sans-serif`,
                                      "--framer-font-size": `32px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `rgba(120, 67, 35, 0.49)`,
                                    },
                                    children: `LUDOGRAPHY`,
                                  }),
                                }),
                                className: `framer-1ofzc3h`,
                                fonts: [`FS;Space Grotesk-regular`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                      h(`div`, {
                        className: `framer-mzi0os`,
                        "data-framer-name": `Ludography`,
                        children: [
                          k() &&
                            g(H, {
                              height: 758,
                              width: `min(${u?.width || `100vw`} - 110px, 960px)`,
                              y: (u?.y || 0) + 0 + 0 + 991 + 80 + 0,
                              children: g(me, {
                                className: `framer-1e3m741-container hidden-mvjitf hidden-1dc6tz5`,
                                nodeId: `JLe2IcZEz`,
                                scopeId: `augiA20Il`,
                                children: g(Ai, {
                                  height: `100%`,
                                  id: `JLe2IcZEz`,
                                  layoutId: `JLe2IcZEz`,
                                  style: { maxWidth: `100%`, width: `100%` },
                                  variant: Za(`GBRyhB8kK`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          A() &&
                            g(ce, {
                              breakpoint: b,
                              overrides: {
                                D6ok2HJc2: {
                                  height: 670,
                                  width: `min(${u?.width || `100vw`} - 110px, 960px)`,
                                  y: (u?.y || 0) + 0 + 0 + 991 + 80 + 0,
                                },
                              },
                              children: g(H, {
                                children: g(me, {
                                  className: `framer-1011hru-container hidden-72rtr7 hidden-mvjitf`,
                                  nodeId: `sxi_HdixV`,
                                  scopeId: `augiA20Il`,
                                  children: g(Er, {
                                    height: `100%`,
                                    id: `sxi_HdixV`,
                                    layoutId: `sxi_HdixV`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    variant: Za(`nDWUUeC7V`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          O() &&
                            g(ce, {
                              breakpoint: b,
                              overrides: {
                                RapUeRwhm: {
                                  height: 758,
                                  width: `min(${u?.width || `100vw`} - 80px, 960px)`,
                                  y: (u?.y || 0) + 0 + 0 + 791 + 41 + 0,
                                },
                              },
                              children: g(H, {
                                children: g(me, {
                                  className: `framer-1nhopms-container hidden-72rtr7 hidden-1dc6tz5`,
                                  nodeId: `Ijxvy5Mb4`,
                                  scopeId: `augiA20Il`,
                                  children: g(mi, {
                                    height: `100%`,
                                    id: `Ijxvy5Mb4`,
                                    layoutId: `Ijxvy5Mb4`,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                g(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-LF8qS.framer-lux5qc, .framer-LF8qS .framer-lux5qc { display: block; }`,
        `.framer-LF8qS.framer-72rtr7 { background-color: #eae6dd; gap: 10px; height: 1984px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 900px; }`,
        `.framer-LF8qS .framer-ups257 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
        `.framer-LF8qS .framer-1ho246z-container { flex: none; height: 90vh; position: relative; width: 100%; }`,
        `.framer-LF8qS .framer-1mq4jix-container { flex: none; height: 70vh; position: relative; width: 100%; }`,
        `.framer-LF8qS .framer-11s9bjs { align-content: flex-start; align-items: flex-start; background-color: #fac86b; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: flex-start; overflow: visible; padding: 9px 0px 9px 0px; position: sticky; top: 0px; width: 100%; z-index: 2; }`,
        `.framer-LF8qS .framer-y3f1r0, .framer-LF8qS .framer-1vpjbu4, .framer-LF8qS .framer-ac8i0h, .framer-LF8qS .framer-nnrhof { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 73px; justify-content: center; padding: 0px; position: relative; width: 209px; }`,
        `.framer-LF8qS .framer-1tpm5tv, .framer-LF8qS .framer-ttz61x, .framer-LF8qS .framer-1h4woqj, .framer-LF8qS .framer-1i0o3is, .framer-LF8qS .framer-4dg6ah, .framer-LF8qS .framer-1ofzc3h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-LF8qS .framer-efhnf, .framer-LF8qS .framer-13zrrgs { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 73px; justify-content: center; padding: 0px; position: relative; width: 210px; }`,
        `.framer-LF8qS .framer-mzi0os { align-content: center; align-items: center; background-color: #fadb87; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 126px; height: 1181px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 80px 50px 40px 60px; position: relative; width: 100%; }`,
        `.framer-LF8qS .framer-1e3m741-container, .framer-LF8qS .framer-1011hru-container, .framer-LF8qS .framer-1nhopms-container { flex: none; height: auto; max-width: 960px; position: relative; width: 100%; }`,
        `@media (max-width: 679.98px) { .framer-LF8qS.framer-72rtr7 { height: 1573px; width: 390px; } .framer-LF8qS .framer-mzi0os { height: min-content; padding: 41px 40px 329px 40px; }}`,
        `@media (min-width: 680px) and (max-width: 899.98px) { .framer-LF8qS.framer-72rtr7 { width: 680px; }}`,
      ],
      `framer-LF8qS`
    )),
    (to.displayName = `Home`),
    (to.defaultProps = { height: 1984, width: 900 }),
    R(
      to,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/2MGP255ZY2RSFHKW6LNN6W6BWQGC2LUO.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Space Grotesk`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Space Grotesk`,
              url: `../../assets/misc/COAKOVM7H37QQIPEFBZNVR5EL4GEPLQU.woff2`,
              weight: `700`,
            },
          ],
        },
        ...za,
        ...Ba,
        ...Ha,
        ...Ua,
        ...Wa,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (to.loader = {
      load: (e, t) =>
        P(
          [
            () => N(ua, {}, t),
            () => N(La, {}, t),
            () => N(Ai, {}, t),
            () => N(Er, {}, t),
            () => N(mi, {}, t),
          ],
          t
        ),
    }),
    (no = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"RapUeRwhm":{"layout":["fixed","fixed"]},"D6ok2HJc2":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `900`,
            framerAcceptsLayoutTemplate: `false`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `1984`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { no as __FramerMetadata__, to as default, qa as queryParamNames };
//# sourceMappingURL=Nx_SpystONbWTIZDom5PAMRTEhaYz2iivEL4hEwZeS0.BbHK_TEu.mjs.map
