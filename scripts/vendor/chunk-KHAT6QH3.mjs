import { a as Ks, c as mr } from "./chunk-TXCWPKWI.mjs";
import {
  D as Ue,
  E as qe,
  F as $s,
  G as Us,
  H as se,
  U as qs,
  X as Lt,
  a as Ds,
  b as pe,
  f as it,
  g as ws,
  h as ue,
  i as Ke,
  j as Xr,
  k as re,
  m as Dt,
  n as Ls,
  u as Ms,
  y as Es,
} from "./chunk-KFHAD7KU.mjs";
import { e as Jr, f as Ae, g as Rm } from "./chunk-GHDF5CG4.mjs";
import { Af as at, Eb as Bs, Qe as Re, Tb as As, qf as Os, sd as Fs } from "./chunk-VED5QBJM.mjs";
import { a as fr, b as wt } from "./chunk-WRBBN7SY.mjs";
import { a as ye } from "./chunk-SMHMQ5IL.mjs";
import { a as Zr } from "./chunk-MSHSIAEI.mjs";
import { b as _s } from "./chunk-YSP5ZHDJ.mjs";
import { b as Q } from "./chunk-AYNVEX5D.mjs";
import { a as de } from "./chunk-2FCXHKEL.mjs";
import { l as Gs, p as js } from "./chunk-GOIPLIIS.mjs";
import {
  a as ae,
  b as p,
  e as V,
  f as b,
  g as Ws,
  h as F,
  n as k,
  p as zs,
  q as ke,
  t as Hs,
} from "./chunk-Y3GZLMBF.mjs";
import { a as Yr } from "./chunk-UZNETSBG.mjs";
import { a as ie } from "./chunk-SWYZG2NI.mjs";
import { b as x, c as L } from "./chunk-4JY5UMT2.mjs";
import { m as Is } from "./chunk-I5EFRSXX.mjs";
import { g as vs, i as Rs, k as ks, l as pr, o as Ns, r as Ps } from "./chunk-VHFKZWVR.mjs";
import { i as qr } from "./chunk-WBI6GGAG.mjs";
import { a as Vs } from "./chunk-YRQ7G4QH.mjs";
import { c as Ss, e as E } from "./chunk-WLHSDIGQ.mjs";
var Kf = Ss((K) => {
  "use strict";
  var Za = Symbol.for("react.element"),
    Qa = Symbol.for("react.portal"),
    Mn = Symbol.for("react.fragment"),
    En = Symbol.for("react.strict_mode"),
    Bn = Symbol.for("react.profiler"),
    An = Symbol.for("react.provider"),
    Fn = Symbol.for("react.context"),
    RS = Symbol.for("react.server_context"),
    On = Symbol.for("react.forward_ref"),
    Wn = Symbol.for("react.suspense"),
    zn = Symbol.for("react.suspense_list"),
    Hn = Symbol.for("react.memo"),
    Gn = Symbol.for("react.lazy"),
    kS = Symbol.for("react.offscreen"),
    $f;
  $f = Symbol.for("react.module.reference");
  function Ie(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Za:
          switch (((e = e.type), e)) {
            case Mn:
            case Bn:
            case En:
            case Wn:
            case zn:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case RS:
                case Fn:
                case On:
                case Gn:
                case Hn:
                case An:
                  return e;
                default:
                  return t;
              }
          }
        case Qa:
          return t;
      }
    }
  }
  K.ContextConsumer = Fn;
  K.ContextProvider = An;
  K.Element = Za;
  K.ForwardRef = On;
  K.Fragment = Mn;
  K.Lazy = Gn;
  K.Memo = Hn;
  K.Portal = Qa;
  K.Profiler = Bn;
  K.StrictMode = En;
  K.Suspense = Wn;
  K.SuspenseList = zn;
  K.isAsyncMode = function () {
    return !1;
  };
  K.isConcurrentMode = function () {
    return !1;
  };
  K.isContextConsumer = function (e) {
    return Ie(e) === Fn;
  };
  K.isContextProvider = function (e) {
    return Ie(e) === An;
  };
  K.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Za;
  };
  K.isForwardRef = function (e) {
    return Ie(e) === On;
  };
  K.isFragment = function (e) {
    return Ie(e) === Mn;
  };
  K.isLazy = function (e) {
    return Ie(e) === Gn;
  };
  K.isMemo = function (e) {
    return Ie(e) === Hn;
  };
  K.isPortal = function (e) {
    return Ie(e) === Qa;
  };
  K.isProfiler = function (e) {
    return Ie(e) === Bn;
  };
  K.isStrictMode = function (e) {
    return Ie(e) === En;
  };
  K.isSuspense = function (e) {
    return Ie(e) === Wn;
  };
  K.isSuspenseList = function (e) {
    return Ie(e) === zn;
  };
  K.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Mn ||
      e === Bn ||
      e === En ||
      e === Wn ||
      e === zn ||
      e === kS ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Gn ||
          e.$$typeof === Hn ||
          e.$$typeof === An ||
          e.$$typeof === Fn ||
          e.$$typeof === On ||
          e.$$typeof === $f ||
          e.getModuleId !== void 0))
    );
  };
  K.typeOf = Ie;
});
var qf = Ss(($j, Uf) => {
  "use strict";
  Uf.exports = Kf();
});
function yr(e, t) {
  let o = 10 ** Math.round(Math.abs(t));
  return Math.round(e * o) / o;
}
function mv(e, t) {
  let r = e.toFixed(t);
  return t === 0 ? r : `${+r}`;
}
function ri(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Xs(e) {
  return Math.round(e * 2) / 2;
}
function Fe(e, t) {
  return { x: e, y: t };
}
((R) => {
  ((R.isQuadrilateralPoints = (y) => y?.length === 4),
    (R.add = (...y) => y.reduce((T, A) => ({ x: T.x + A.x, y: T.y + A.y }), { x: 0, y: 0 })),
    (R.subtract = (y, T) => ({ x: y.x - T.x, y: y.y - T.y })),
    (R.multiply = (y, T) => ({ x: y.x * T, y: y.y * T })),
    (R.divide = (y, T) => ({ x: y.x / T, y: y.y / T })),
    (R.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (R.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (R.pixelAligned = (y, T = { x: 0, y: 0 }) => ({ x: ri(y.x, T.x), y: ri(y.y, T.y) })),
    (R.distance = (y, T) => {
      let A = Math.abs(y.x - T.x),
        j = Math.abs(y.y - T.y);
      return Math.sqrt(A * A + j * j);
    }),
    (R.angle = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI - 90),
    (R.angleFromX = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI),
    (R.isEqual = (y, T) => y.x === T.x && y.y === T.y),
    (R.rotationNormalizer = () => {
      let y;
      return (T) => {
        typeof y != "number" && (y = T);
        let A = y - T,
          j = Math.abs(A) + 180,
          P = Math.floor(j / 360);
        return (A < 180 && (T -= P * 360), A > 180 && (T += P * 360), (y = T), T);
      };
    }));
  function h(y, T) {
    return { x: (y.x + T.x) / 2, y: (y.y + T.y) / 2 };
  }
  R.center = h;
  function C(y) {
    let T = 0,
      A = 0;
    y.forEach((J) => {
      ((T += J.x), (A += J.y));
    });
    let j = T / y.length,
      P = A / y.length;
    return { x: j, y: P };
  }
  R.centroid = C;
  function S(y) {
    let T = R.centroid(y),
      A = new Map();
    for (let j = 0; j < y.length; j++) {
      let P = y[j];
      P && A.set(P, Math.atan2(P.y - T.y, P.x - T.x));
    }
    return y.sort((j, P) => (A.get(j) ?? 0) - (A.get(P) ?? 0));
  }
  R.sortClockwise = S;
})((Fe ||= {}));
var km = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { hash: "", hostname: "", href: "", origin: "", pathname: "", search: "" },
    document: { baseURI: "", cookie: "", referrer: null },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    requestIdleCallback: () => 0,
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, r) {},
    __framer_events: [],
  },
  st = Ms ? window : km;
function oi() {
  return st.location.origin === "https://screenshot.framer.invalid";
}
var Oe = { target: oi() ? "EXPORT" : "PREVIEW", zoom: 1 };
function Cv(e, t) {
  let r = Object.assign({}, Oe);
  Object.assign(Oe, e);
  let o = t();
  return (Object.assign(Oe, r), o);
}
function Sv(e) {
  Object.assign(Oe, e);
}
function Vv(e, t) {
  let r = !1;
  return (
    Oe.target !== e && ((Oe.target = e), (r = !0)),
    Oe.zoom !== t && (Oe.zoom = t),
    { willChangeElements: r }
  );
}
var H = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => Oe.target,
  hasRestrictions: () => {
    let e = Oe.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
function Ys(e) {
  return e * (Math.PI / 180);
}
var ct = (() => {
  function e(t, r) {
    return { a: t, b: r };
  }
  return (
    (e.offset = (t, r) => {
      let o = Fe.angleFromX(t.a, t.b),
        n = Ys(o),
        i = r * Math.sin(n),
        a = r * Math.cos(n);
      return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
    }),
    (e.intersection = (t, r, o) => {
      let n = t.a.x,
        i = t.a.y,
        a = t.b.x,
        s = t.b.y,
        l = r.a.x,
        u = r.a.y,
        c = r.b.x,
        m = r.b.y,
        f = (c - l) * (u - i) - (m - u) * (l - n),
        h = (c - l) * (s - i) - (m - u) * (a - n),
        C = (a - n) * (u - i) - (s - i) * (l - n);
      if ((f === 0 && h === 0) || h === 0) return null;
      let S = f / h,
        R = C / h;
      return o && (S < 0 || S > 1 || R < 0 || R > 1)
        ? null
        : { x: n + S * (a - n), y: i + S * (s - i) };
    }),
    (e.intersectionAngle = (t, r) => {
      let o = t.b.x - t.a.x,
        n = t.b.y - t.a.y,
        i = r.b.x - r.a.x,
        a = r.b.y - r.a.y;
      return Math.atan2(o * a - n * i, o * i + n * a) * (180 / Math.PI);
    }),
    (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
    (e.perpendicular = (t, r) => {
      let o = t.a.x - t.b.x,
        n = t.a.y - t.b.y,
        i = Fe(r.x - n, r.y + o);
      return e(i, r);
    }),
    (e.projectPoint = (t, r) => {
      let o = e.perpendicular(t, r);
      return e.intersection(t, o);
    }),
    (e.pointAtPercentDistance = (t, r) => {
      let o = e.distance(t),
        n = (r * o) / o;
      return { x: n * t.b.x + (1 - n) * t.a.x, y: n * t.b.y + (1 - n) * t.a.y };
    }),
    (e.distance = (t) => Fe.distance(t.a, t.b)),
    e
  );
})();
var v = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
          ? !1
          : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
    },
    from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
    atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({ x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }),
    multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
    divide: (e, t) => v.multiply(e, 1 / t),
    offset: (e, t) => {
      let r = typeof t.x == "number" ? t.x : 0,
        o = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + r, y: e.y + o };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let r = 2 * t;
      return { x: e.x - t, y: e.y - t, width: e.width + r, height: e.height + r };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        r = Math.round(e.y),
        o = Math.round(e.x + e.width),
        n = Math.round(e.y + e.height),
        i = Math.max(o - t, 0),
        a = Math.max(n - r, 0);
      return { x: t, y: r, width: i, height: a };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        r = Math.round(e.y * 2) / 2,
        o = Math.round((e.x + e.width) * 2) / 2,
        n = Math.round((e.y + e.height) * 2) / 2,
        i = Math.max(o - t, 1),
        a = Math.max(n - r, 1);
      return { x: t, y: r, width: i, height: a };
    },
    round: (e, t = 0) => {
      let r = yr(e.x, t),
        o = yr(e.y, t),
        n = yr(e.width, t),
        i = yr(e.height, t);
      return { x: r, y: o, width: n, height: i };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        r = Math.floor(e.y),
        o = Math.ceil(e.x + e.width),
        n = Math.ceil(e.y + e.height),
        i = Math.max(o - t, 0),
        a = Math.max(n - r, 0);
      return { x: t, y: r, width: i, height: a };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: v.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: v.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        r = -1 / 0,
        o = 1 / 0,
        n = -1 / 0;
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        ((t = Math.min(t, a.x)),
          (r = Math.max(r, a.x)),
          (o = Math.min(o, a.y)),
          (n = Math.max(n, a.y)));
      }
      return { x: t, y: o, width: r - t, height: n - o };
    },
    fromPoints: (e) => {
      let [t, r, o, n] = e,
        { x: i, y: a } = t,
        s = Fe.distance(t, r),
        l = Fe.distance(t, n);
      return { x: i, y: a, width: s, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(v.minX)), y: Math.min(...e.map(v.minY)) },
        r = { x: Math.max(...e.map(v.maxX)), y: Math.max(...e.map(v.maxY)) };
      return v.fromTwoPoints(t, r);
    },
    intersection: (e, t) => {
      let r = Math.max(e.x, t.x),
        o = Math.min(e.x + e.width, t.x + t.width),
        n = Math.max(e.y, t.y),
        i = Math.min(e.y + e.height, t.y + t.height);
      return { x: r, y: n, width: o - r, height: i - n };
    },
    points: (e) => [
      { x: v.minX(e), y: v.minY(e) },
      { x: v.minX(e), y: v.maxY(e) },
      { x: v.maxX(e), y: v.minY(e) },
      { x: v.maxX(e), y: v.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: r, y: o } = t.transformPoint({ x: e.x, y: e.y }),
        { x: n, y: i } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: a, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
        { x: l, y: u } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        c = Math.min(r, n, a, l),
        m = Math.max(r, n, a, l) - c,
        f = Math.min(o, i, s, u),
        h = Math.max(o, i, s, u) - f;
      return { x: c, y: f, width: m, height: h };
    },
    containsPoint: (e, t) =>
      !(
        t.x < v.minX(e) ||
        t.x > v.maxX(e) ||
        t.y < v.minY(e) ||
        t.y > v.maxY(e) ||
        Number.isNaN(e.x) ||
        Number.isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let r of v.points(t)) if (!v.containsPoint(e, r)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(t.x >= v.maxX(e) || v.maxX(t) <= e.x || t.y >= v.maxY(e) || v.maxY(t) <= e.y),
    overlapHorizontally: (e, t) => {
      let r = v.maxX(e),
        o = v.maxX(t);
      return r > t.x && o > e.x;
    },
    overlapVertically: (e, t) => {
      let r = v.maxY(e),
        o = v.maxY(t);
      return r > t.y && o > e.y;
    },
    doesNotIntersect: (e, t) => !t.some((r) => v.intersects(r, e)),
    isEqual: (e, t) => v.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        r = e.x + e.width,
        o = e.y,
        n = e.y + e.height;
      return [
        { x: t, y: o },
        { x: r, y: o },
        { x: r, y: n },
        { x: t, y: n },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        r = e.x + e.width / 2,
        o = e.x + e.width,
        n = e.y,
        i = e.y + e.height / 2,
        a = e.y + e.height;
      return [
        { x: r, y: n },
        { x: o, y: i },
        { x: r, y: a },
        { x: t, y: i },
      ];
    },
    pointDistance: (e, t) => {
      let r = 0,
        o = 0;
      return (
        t.x < e.x ? (r = e.x - t.x) : t.x > v.maxX(e) && (r = t.x - v.maxX(e)),
        t.y < e.y ? (o = e.y - t.y) : t.y > v.maxY(e) && (o = t.y - v.maxY(e)),
        Fe.distance({ x: r, y: o }, { x: 0, y: 0 })
      );
    },
    delta: (e, t) => {
      let r = { x: v.minX(e), y: v.minY(e) },
        o = { x: v.minX(t), y: v.minY(t) };
      return { x: r.x - o.x, y: r.y - o.y };
    },
    withMinSize: (e, t) => {
      let { width: r, height: o } = t,
        n = e.width - r,
        i = e.height - o;
      return {
        width: Math.max(e.width, r),
        height: Math.max(e.height, o),
        x: e.width < r ? e.x + n / 2 : e.x,
        y: e.height < o ? e.y + i / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let r = v.minX(e),
        o = v.minY(e),
        n = v.maxX(e),
        i = v.maxY(e);
      for (let a of t) if (a.x < r || a.x > n || a.y < o || a.y > i) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, r, o, n] = v.cornerPoints(e);
      return [ct(t, r), ct(r, o), ct(o, n), ct(n, t)];
    },
    rebaseRectOnto: (e, t, r, o) => {
      let n = { ...e };
      switch (r) {
        case "bottom":
        case "top":
          switch (o) {
            case "start":
              n.x = t.x;
              break;
            case "center":
              n.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              n.x = t.x + t.width - e.width;
              break;
            default:
              qe(o);
          }
          break;
        case "left":
          n.x = t.x - e.width;
          break;
        case "right":
          n.x = t.x + t.width;
          break;
        default:
          qe(r);
      }
      switch (r) {
        case "left":
        case "right":
          switch (o) {
            case "start":
              n.y = t.y;
              break;
            case "center":
              n.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              n.y = t.y + t.height - e.height;
              break;
            default:
              qe(o);
          }
          break;
        case "top":
          n.y = t.y - e.height;
          break;
        case "bottom":
          n.y = t.y + t.height;
          break;
        default:
          qe(r);
      }
      return n;
    },
    constrain: (e, t) => {
      if (!t) return e;
      let r = Math.max(e.y, t.y);
      r = Math.min(r, t.y + t.height - e.height);
      let o = Math.max(e.x, t.x);
      return (
        (o = Math.min(o, t.x + t.width - e.width)),
        { x: o, y: r, width: e.width, height: e.height }
      );
    },
    closestEdge: (e, t) => {
      let r = v.center(e),
        o = ct(t, r),
        n = v.edges(e);
      for (let i = 0; i < n.length; i++) {
        let a = n[i];
        if (a && ct.intersection(o, a, !0)) {
          let s = Js[i];
          return (Ue(s, () => `Invalid edge name: ${JSON.stringify(Js)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let r = 0,
        o = e[0];
      Ue(o, "Rect array is empty");
      let n = v.pointDistance(o, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        Ue(a);
        let s = v.pointDistance(a, t);
        if ((s < n && ((r = i), (o = a), (n = s)), n === 0)) break;
      }
      return { rect: o, index: r };
    },
  },
  Js = ["top", "right", "bottom", "left"];
function Zs(e, t, r) {
  let o = r ? `, use ${r} instead` : "",
    n = `Deprecation warning: ${e} will be removed in version ${t}${o}.`;
  Ds(n);
}
var Qr = class {
  observers = new Set();
  transactions = {};
  add(t) {
    this.observers.add(t);
    let r = !1;
    return () => {
      r || ((r = !0), this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, r) {
    if (r) {
      let o = this.transactions[r] || t;
      ((o.value = t.value), (this.transactions[r] = o));
    } else this.callObservers(t);
  }
  finishTransaction(t) {
    let r = this.transactions[t];
    return (delete this.transactions[t], this.callObservers(r, t));
  }
  callObservers(t, r) {
    let o = [];
    return (
      new Set(this.observers).forEach((n) => {
        typeof n == "function" ? n(t, r) : (n.update(t, r), o.push(n.finish));
      }),
      o
    );
  }
};
var ce = (() => {
    function e(t) {
      return (
        Zs(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        We(t) ? t : new ni(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let r = Math.random(),
          o = new Set();
        t((a, s) => {
          (a.set(s, r), o.add(a));
        }, r);
        let i = [];
        (o.forEach((a) => {
          i.push(...a.finishTransaction(r));
        }),
          i.forEach((a) => {
            a(r);
          }));
      }),
      (e.getNumber = (t, r = 0) => e.get(t, r)),
      (e.get = (t, r) => (t == null ? r : We(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let r = {};
        for (let o in t) {
          let n = t[o];
          We(n) ? (r[o] = n.get()) : (r[o] = n);
        }
        return r;
      }),
      e
    );
  })(),
  Qs = "onUpdate",
  el = "finishTransaction";
function We(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Qs in e &&
    e[Qs] instanceof Function &&
    el in e &&
    e[el] instanceof Function
  );
}
function Nm(e, t) {
  return {
    interpolate(r, o) {
      let n = r.get(),
        i = o.get(),
        a = ce(n);
      return (s) => {
        let l = t.interpolate(n, i)(s);
        return (a.set(l), a);
      };
    },
    difference(r, o) {
      let n = r.get();
      return t.difference(n, o.get());
    },
  };
}
var ni = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new Qr();
  static interpolationFor(t, r) {
    if (We(t)) return Nm(t, r);
  }
  get() {
    return this.value;
  }
  set(t, r) {
    let o = this.value;
    (We(t) && (t = t.get()), (this.value = t));
    let n = { value: t, oldValue: o };
    this.observers.notify(n, r);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function Pm(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function eo(e) {
  return typeof e != "string" && typeof e != "number";
}
function to(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !Pm(e);
}
function N(e) {
  return Number.isFinite(e);
}
function Hv(e) {
  return N(e) ? e : void 0;
}
var Xv = {
    left: null,
    right: null,
    top: null,
    bottom: null,
    centerX: "50%",
    centerY: "50%",
    aspectRatio: null,
    parentSize: null,
    width: 100,
    height: 100,
  },
  oo = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(oo || {});
function Mt(e) {
  return Dt(e) ? !1 : e === 2 || e === 5;
}
function Yv(e) {
  return !(!to(e) || !eo(e));
}
var ii = {
  quickfix: (e) => (
    (Mt(e.widthType) || Mt(e.heightType)) && (e.aspectRatio = null),
    N(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || Mt(e.widthType) || N(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || Mt(e.heightType) || N(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function hr(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var ai = {
    fromProperties: (e) => {
      let {
          left: t,
          right: r,
          top: o,
          bottom: n,
          width: i,
          height: a,
          centerX: s,
          centerY: l,
          aspectRatio: u,
          autoSize: c,
        } = e,
        m = ii.quickfix({
          left: N(t) || We(t),
          right: N(r) || We(r),
          top: N(o) || We(o),
          bottom: N(n) || We(n),
          widthType: hr(i),
          heightType: hr(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        f = null,
        h = null,
        C = 0,
        S = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let T = parseFloat(i);
        i.endsWith("fr") ? ((C = 3), (f = T)) : i === "auto" ? (C = 2) : ((C = 1), (f = T / 100));
      } else i !== void 0 && typeof i != "string" && (f = ce.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let T = parseFloat(a);
        a.endsWith("fr")
          ? ((S = 3), (h = T))
          : a === "auto"
            ? (S = 2)
            : ((S = 1), (h = parseFloat(a) / 100));
      } else a !== void 0 && typeof a != "string" && (h = ce.getNumber(a));
      let R = 0.5,
        y = 0.5;
      return (
        s && (R = parseFloat(s) / 100),
        l && (y = parseFloat(l) / 100),
        {
          left: m.left ? ce.getNumber(t) : null,
          right: m.right ? ce.getNumber(r) : null,
          top: m.top ? ce.getNumber(o) : null,
          bottom: m.bottom ? ce.getNumber(n) : null,
          widthType: C,
          heightType: S,
          width: f,
          height: h,
          aspectRatio: m.aspectRatio || null,
          centerAnchorX: R,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, r, o) => {
      let n = null,
        i = null,
        a = t?.sizing ? ce.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? ce.getNumber(t?.sizing.height) : null,
        l = tl(e.left, e.right);
      if (a && N(l)) n = a - l;
      else if (r && Mt(e.widthType)) n = r.width;
      else if (N(e.width))
        switch (e.widthType) {
          case 0:
            n = e.width;
            break;
          case 3:
            n = o ? (o.freeSpaceInParent.width / o.freeSpaceUnitDivisor.width) * e.width : null;
            break;
          case 1:
          case 4:
            a && (n = a * e.width);
            break;
          case 2:
          case 5:
            break;
          default:
            qe(e.widthType);
        }
      let u = tl(e.top, e.bottom);
      if (s && N(u)) i = s - u;
      else if (r && Mt(e.heightType)) i = r.height;
      else if (N(e.height))
        switch (e.heightType) {
          case 0:
            i = e.height;
            break;
          case 3:
            i = o ? (o.freeSpaceInParent.height / o.freeSpaceUnitDivisor.height) * e.height : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.height);
            break;
          case 2:
          case 5:
            break;
          default:
            qe(e.heightType);
        }
      return Em(n, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, r = null, o = !1, n = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = ai.toSize(e, t, r, n),
        u = t?.positioning ?? null,
        c = u ? ce.getNumber(u.width) : null,
        m = u ? ce.getNumber(u.height) : null;
      (e.left !== null
        ? (i = e.left)
        : c && e.right !== null
          ? (i = c - e.right - s)
          : c && (i = e.centerAnchorX * c - s / 2),
        e.top !== null
          ? (a = e.top)
          : m && e.bottom !== null
            ? (a = m - e.bottom - l)
            : m && (a = e.centerAnchorY * m - l / 2));
      let f = { x: i, y: a, width: s, height: l };
      return o ? v.pixelAligned(f) : f;
    },
  },
  Im = 200,
  Dm = 200;
function ro(e, t, r, o) {
  if (typeof t == "string") {
    if (t.endsWith("%") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    if (t.endsWith("vh")) {
      if (!o) return wm(e);
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * o.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * o.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function wm(e) {
  switch (e) {
    case "minWidth":
    case "minHeight":
      return Number.NEGATIVE_INFINITY;
    case "maxWidth":
    case "maxHeight":
      return Number.POSITIVE_INFINITY;
    default:
      qe(e, "unknown constraint key");
  }
}
function Lm(e, t, r, o) {
  return (
    t.minHeight && (e = Math.max(ro("minHeight", t.minHeight, r, o), e)),
    t.maxHeight && (e = Math.min(ro("maxHeight", t.maxHeight, r, o), e)),
    e
  );
}
function Mm(e, t, r, o) {
  return (
    t.minWidth && (e = Math.max(ro("minWidth", t.minWidth, r, o), e)),
    t.maxWidth && (e = Math.min(ro("maxWidth", t.maxWidth, r, o), e)),
    e
  );
}
function Em(e, t, r, o, n) {
  let i = Mm(N(e) ? e : Im, r, o, n),
    a = Lm(N(t) ? t : Dm, r, o, n);
  return (
    N(r.aspectRatio) &&
      r.aspectRatio > 0 &&
      (N(r.left) && N(r.right)
        ? (a = i / r.aspectRatio)
        : N(r.top) && N(r.bottom)
          ? (i = a * r.aspectRatio)
          : r.widthType !== 0
            ? (a = i / r.aspectRatio)
            : (i = a * r.aspectRatio)),
    { width: i, height: a }
  );
}
function tl(e, t) {
  return !N(e) || !N(t) ? null : e + t;
}
var Bm = /^local-module:([a-zA-Z\d]+\/[^:]+)(?::(.+))?$/u,
  Am = /^module:([a-zA-Z\d]{20})\/([a-zA-Z\d]{20})\/([^:]+)(?::(.+))?$/u;
function eR(e) {
  return e === "codeFile" || e === "shader";
}
function tR(e) {
  try {
    let t = e;
    switch (t) {
      case "canvasComponent":
      case "codeFile":
      case "collection":
      case "draftCollection":
      case "componentPresets":
      case "prototype":
      case "screen":
      case "css":
      case "webPageMetadata":
      case "siteMetadata":
      case "layoutTemplate":
      case "localization":
      case "vector":
      case "vectorSet":
      case "design":
      case "config":
      case "snippets":
      case "shader":
        return !0;
      default:
        L(t);
    }
  } catch {
    return !1;
  }
}
function rR(e) {
  return e.kind === "externalModuleExport"
    ? `module:${e.moduleId}/${e.saveId}/${e.file}`
    : e.kind === "localModuleExport"
      ? `local-module:${e.localId}`
      : e.value;
}
function rl(e) {
  return (
    typeof e == "string" && (e = be(e)),
    e?.kind === "externalModule" || e?.kind === "externalModuleExport"
  );
}
function no(e) {
  return (
    typeof e == "string" && (e = be(e)),
    e?.kind === "localModule" || e?.kind === "localModuleExport"
  );
}
function De(e) {
  return (
    typeof e == "string" && (e = be(e)),
    e?.kind === "externalModuleExport" || e?.kind === "localModuleExport"
  );
}
function oR(e) {
  return (
    typeof e == "string" && (e = be(e)),
    e
      ? e.kind === "externalModule" ||
        e.kind === "externalModuleExport" ||
        e.kind === "localModule" ||
        e.kind === "localModuleExport"
      : !1
  );
}
function xr(e, t, r, o) {
  let n = `${e}/${t}/${r}`,
    i = `${Vs().modulesCDN}/${n}`;
  return o
    ? {
        kind: "externalModuleExport",
        value: `module:${n}:${o}`,
        bareValue: `module:${n}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: i,
        exportSpecifier: o,
      }
    : {
        kind: "externalModule",
        value: `module:${n}`,
        moduleId: e,
        saveId: t,
        file: r,
        importSpecifier: i,
      };
}
function Et(e, t) {
  let { type: r, name: o } = Om(e);
  return t
    ? {
        kind: "localModuleExport",
        value: `local-module:${e}:${t}`,
        bareValue: `local-module:${e}`,
        localId: e,
        type: r,
        localIdName: o,
        exportSpecifier: t,
      }
    : { kind: "localModule", value: `local-module:${e}`, localId: e, type: r, localIdName: o };
}
function nR(e) {
  let t = e.indexOf("/");
  return [e.substring(0, t), e.substring(t + 1)];
}
function Fm(e, t) {
  return `${e}/${t}`;
}
function Om(e) {
  let [t, r] = e.split("/", 2);
  if (!t || !r) throw Error(`Invalid local id: ${e}`);
  return { type: t, name: r };
}
function iR(e, t, r) {
  let o = Fm(e, t);
  return Et(o, r);
}
function be(e) {
  if (!e) return;
  let t = e.match(Bm);
  if (t) {
    x(t[1], "The localId match from the module identifier should be defined.");
    let o = t[1],
      n = t[2];
    return Et(o, n);
  }
  let r = e.match(Am);
  if (r) {
    let [, o, n, i, a] = r;
    return (
      x(o, "The moduleId match from the module identifier should be defined."),
      x(n, "The saveId match from the module identifier should be defined."),
      x(i, "The path match from the module identifier should be defined."),
      xr(o, n, i, a)
    );
  }
}
function aR(e, t, r, o) {
  if (e.kind === "localModule") return xr(t, r, o);
  if (e.kind === "localModuleExport") return xr(t, r, o, e.exportSpecifier);
  L(e);
}
function sR(e, t) {
  if (e.kind === "externalModule") return Et(t);
  if (e.kind === "externalModuleExport") return Et(t, e.exportSpecifier);
  L(e);
}
function lR(e, t) {
  if (e.kind === "externalModule" || e.kind === "externalModuleExport")
    return xr(e.moduleId, e.saveId, e.file, t);
  if (e.kind === "localModule" || e.kind === "localModuleExport") return Et(e.localId, t);
  L(e);
}
function uR(e) {
  if (e.kind === "externalModule" || e.kind === "localModule") return e;
  if (e.kind === "externalModuleExport") return xr(e.moduleId, e.saveId, e.file);
  if (e.kind === "localModuleExport") return Et(e.localId);
  L(e);
}
function dR(e) {
  return e;
}
function cR(e) {
  let t = e.indexOf(":");
  return t === -1
    ? { localId: e, exportSpecifier: void 0 }
    : { localId: e.slice(0, t), exportSpecifier: e.slice(t + 1) };
}
function pR(e, t) {
  return `#framer/local/${e}/${t}`;
}
function fR(e) {
  return e.startsWith("#framer/local/");
}
function mR(e) {
  return e.startsWith("!missing/");
}
var Bt = ((d) => (
  (d.AbTestsEntityTypeRootNode = "AbTestsEntityTypeRootNode"),
  (d.AgentDragSelectTool = "AgentDragSelectTool"),
  (d.AgentPanelTool = "AgentPanelTool"),
  (d.AgentSelectTool = "AgentSelectTool"),
  (d.AgentSkillNode = "AgentSkillNode"),
  (d.AgentSkillsListNode = "AgentSkillsListNode"),
  (d.AnalyticsScopeNode = "AnalyticsScopeNode"),
  (d.AssetsEntityTypeRootNode = "AssetsEntityTypeRootNode"),
  (d.BlockquoteEntityTypeRootNode = "BlockquoteEntityTypeRootNode"),
  (d.BlockquoteStylePresetNode = "BlockquoteStylePresetNode"),
  (d.BooleanShapeNode = "BooleanShapeNode"),
  (d.BoxShadow = "BoxShadow"),
  (d.BranchNode = "BranchNode"),
  (d.BranchesNode = "BranchesNode"),
  (d.CanvasNode = "CanvasNode"),
  (d.CanvasPageNode = "CanvasPageNode"),
  (d.CanvasScopeNode = "CanvasScopeNode"),
  (d.ChatTool = "ChatTool"),
  (d.CMSEntityTypeRootNode = "CMSEntityTypeRootNode"),
  (d.CodeComponentNode = "CodeComponentNode"),
  (d.CodeFileEntityTypeRootNode = "CodeFileEntityTypeRootNode"),
  (d.CollectionReferenceVariableEditTool = "CollectionReferenceVariableEditTool"),
  (d.CollectionItemNode = "CollectionItemNode"),
  (d.CollectionNode = "CollectionNode"),
  (d.Color = "Color"),
  (d.ColorEntityTypeRootNode = "ColorEntityTypeRootNode"),
  (d.ColorStyleTokenListNode = "ColorStyleTokenListNode"),
  (d.ColorStyleTokenNode = "ColorStyleTokenNode"),
  (d.ComponentEntityTypeRootNode = "ComponentEntityTypeRootNode"),
  (d.ComponentPresetNode = "ComponentPresetNode"),
  (d.ConicGradient = "ConicGradient"),
  (d.ContentManagementNode = "ContentManagementNode"),
  (d.ContentManagementEntityTypeRootNode = "ContentManagementEntityTypeRootNode"),
  (d.CreateCodeComponentBaseTool = "CreateCodeComponentBaseTool"),
  (d.CreateFrameBaseTool = "CreateFrameBaseTool"),
  (d.CreateShapeBaseTool = "CreateShapeBaseTool"),
  (d.CreateTextTool = "CreateTextTool"),
  (d.CustomCodeScopeNode = "CustomCodeScopeNode"),
  (d.CustomCodeNode = "CustomCodeNode"),
  (d.DatabaseListNode = "DatabaseListNode"),
  (d.DatabaseNode = "DatabaseNode"),
  (d.DatabaseTableNode = "DatabaseTableNode"),
  (d.DateVariableEditTool = "DateVariableEditTool"),
  (d.DesignPageNode = "DesignPageNode"),
  (d.DesignPageEntityTypeRootNode = "DesignPageEntityTypeRootNode"),
  (d.EntityFolderNode = "EntityFolderNode"),
  (d.EntityReferenceNode = "EntityReferenceNode"),
  (d.EnumVariableEditTool = "EnumVariableEditTool"),
  (d.ErrorListNode = "ErrorListNode"),
  (d.ErrorNode = "ErrorNode"),
  (d.ExportOptions = "ExportOptions"),
  (d.ExternalModuleNode = "ExternalModuleNode"),
  (d.ExternalModulesListNode = "ExternalModulesListNode"),
  (d.FeedbackTool = "FeedbackTool"),
  (d.FormBooleanInputNode = "FormBooleanInputNode"),
  (d.FormPlainTextInputNode = "FormPlainTextInputNode"),
  (d.FormSelectNode = "FormSelectNode"),
  (d.FrameNode = "FrameNode"),
  (d.FunnelNode = "FunnelNode"),
  (d.FunnelsEntityTypeRootNode = "FunnelsEntityTypeRootNode"),
  (d.FunnelStepActionNode = "FunnelStepActionNode"),
  (d.FunnelStepNode = "FunnelStepNode"),
  (d.GapTool = "GapTool"),
  (d.GradientColorStop = "GradientColorStop"),
  (d.GradientToolManagerTool = "GradientToolManagerTool"),
  (d.GuideMoveTool = "GuideMoveTool"),
  (d.HeaderRouteNode = "HeaderRouteNode"),
  (d.FirewallRouteNode = "FirewallRouteNode"),
  (d.HighlightStackItemTool = "HighlightStackItemTool"),
  (d.HighlightTool = "HighlightTool"),
  (d.ImageStylePresetNode = "ImageStylePresetNode"),
  (d.InitialTool = "InitialTool"),
  (d.InlineCodeEntityTypeRootNode = "InlineCodeEntityTypeRootNode"),
  (d.InlineCodeStylePresetNode = "InlineCodeStylePresetNode"),
  (d.LayoutTemplateEntityTypeRootNode = "LayoutTemplateEntityTypeRootNode"),
  (d.LayoutTemplateNode = "LayoutTemplateNode"),
  (d.LineAnchorMoveTool = "LineAnchorMoveTool"),
  (d.LinearGradient = "LinearGradient"),
  (d.LinkEntityTypeRootNode = "LinkEntityTypeRootNode"),
  (d.LinkStylePresetNode = "LinkStylePresetNode"),
  (d.LinkTool = "LinkTool"),
  (d.LoadingShieldTool = "LoadingShieldTool"),
  (d.LocalizationGlossaryNode = "LocalizationGlossaryNode"),
  (d.LocalizationGlossaryItemNode = "LocalizationGlossaryItemNode"),
  (d.LocalModuleNode = "LocalModuleNode"),
  (d.LocalModulesListNode = "LocalModulesListNode"),
  (d.MoveTool = "MoveTool"),
  (d.MutableNode = "MutableNode"),
  (d.OvalShapeNode = "OvalShapeNode"),
  (d.OverlayNode = "OverlayNode"),
  (d.PaddingTool = "PaddingTool"),
  (d.PageLinkTool = "PageLinkTool"),
  (d.PanTool = "PanTool"),
  (d.PathCurveBendTool = "PathCurveBendTool"),
  (d.PathDefaultTool = "PathDefaultTool"),
  (d.PathNode = "PathNode"),
  (d.PathSegment = "PathSegment"),
  (d.PathSegmentAdditionTool = "PathSegmentAdditionTool"),
  (d.PathSegmentHandleMoveTool = "PathSegmentHandleMoveTool"),
  (d.PathSegmentMoveTool = "PathSegmentMoveTool"),
  (d.PathSegmentSelectTool = "PathSegmentSelectTool"),
  (d.PolygonShapeNode = "PolygonShapeNode"),
  (d.PresetsListNode = "PresetsListNode"),
  (d.PreviewSettings = "PreviewSettings"),
  (d.ProxyRouteNode = "ProxyRouteNode"),
  (d.RadialGradient = "RadialGradient"),
  (d.RadiusTool = "RadiusTool"),
  (d.RecoveryTool = "RecoveryTool"),
  (d.RectangleShapeNode = "RectangleShapeNode"),
  (d.RedirectRouteNode = "RedirectRouteNode"),
  (d.ResizeTool = "ResizeTool"),
  (d.RewriteRouteNode = "RewriteRouteNode"),
  (d.RichTextEditTool = "RichTextEditTool"),
  (d.RichTextNode = "RichTextNode"),
  (d.RichTextVariableEditTool = "RichTextVariableEditTool"),
  (d.RootNode = "RootNode"),
  (d.RotateTool = "RotateTool"),
  (d.RouteNode = "RouteNode"),
  (d.RouteLocaleNode = "RouteLocaleNode"),
  (d.RouteSegmentNode = "RouteSegmentNode"),
  (d.RouteSegmentRootNode = "RouteSegmentRootNode"),
  (d.RoutesNode = "RoutesNode"),
  (d.SampleColorTool = "SampleColorTool"),
  (d.ScaleTool = "ScaleTool"),
  (d.ScopeNode = "ScopeNode"),
  (d.SelectTool = "SelectTool"),
  (d.ShaderNode = "ShaderNode"),
  (d.Shadow = "Shadow"),
  (d.ShapeContainerNode = "ShapeContainerNode"),
  (d.ShapeGroupNode = "ShapeGroupNode"),
  (d.SlotConnectTool = "SlotConnectTool"),
  (d.SlotNode = "SlotNode"),
  (d.SlotPropertyNode = "SlotPropertyNode"),
  (d.SmartComponentNode = "SmartComponentNode"),
  (d.StarShapeNode = "StarShapeNode"),
  (d.StringVariableEditTool = "StringVariableEditTool"),
  (d.StyledTextDraft = "StyledTextDraft"),
  (d.SVGNode = "SVGNode"),
  (d.TableStylePresetNode = "TableStylePresetNode"),
  (d.TestTool = "TestTool"),
  (d.TextEditTool = "TextEditTool"),
  (d.TextEntityTypeRootNode = "TextEntityTypeRootNode"),
  (d.TextNode = "TextNode"),
  (d.TextStylePresetNode = "TextStylePresetNode"),
  (d.VectorSetEntityTypeRootNode = "VectorSetEntityTypeRootNode"),
  (d.VectorSetNode = "VectorSetNode"),
  (d.VekterGradientTool = "VekterGradientTool"),
  (d.VekterPathEngine = "VekterPathEngine"),
  (d.VekterTool = "VekterTool"),
  (d.ViewportResizeTool = "ViewportResizeTool"),
  (d.WebPageNode = "WebPageNode"),
  (d.ZoomSelectTool = "ZoomSelectTool"),
  (d.ZoomTool = "ZoomTool"),
  d
))(Bt || {});
function ol(e, t = class {}) {
  class r extends t {
    __class = Bt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((r.prototype.__class = e), r);
}
function hR(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var Wm = new Set(Object.keys(Bt));
function nl(e) {
  return Wm.has(e);
}
function il(e) {
  if (!nl(e)) return !1;
  switch (e) {
    case "AnalyticsScopeNode":
    case "CanvasPageNode":
    case "CanvasScopeNode":
    case "ContentManagementNode":
    case "CustomCodeScopeNode":
    case "DesignPageNode":
    case "ErrorListNode":
    case "LayoutTemplateNode":
    case "LocalizationGlossaryNode":
    case "RoutesNode":
    case "ScopeNode":
    case "SmartComponentNode":
    case "VectorSetNode":
    case "WebPageNode":
      return !0;
    case "AbTestsEntityTypeRootNode":
    case "AgentDragSelectTool":
    case "AgentPanelTool":
    case "AgentSelectTool":
    case "AgentSkillNode":
    case "AgentSkillsListNode":
    case "BlockquoteEntityTypeRootNode":
    case "BlockquoteStylePresetNode":
    case "BooleanShapeNode":
    case "BoxShadow":
    case "BranchNode":
    case "BranchesNode":
    case "CanvasNode":
    case "ChatTool":
    case "CMSEntityTypeRootNode":
    case "CodeComponentNode":
    case "CodeFileEntityTypeRootNode":
    case "CollectionReferenceVariableEditTool":
    case "CollectionItemNode":
    case "CollectionNode":
    case "Color":
    case "ColorEntityTypeRootNode":
    case "ColorStyleTokenListNode":
    case "ColorStyleTokenNode":
    case "ComponentEntityTypeRootNode":
    case "ComponentPresetNode":
    case "ConicGradient":
    case "ContentManagementEntityTypeRootNode":
    case "CreateCodeComponentBaseTool":
    case "CreateFrameBaseTool":
    case "CreateShapeBaseTool":
    case "CreateTextTool":
    case "CustomCodeNode":
    case "DatabaseListNode":
    case "DatabaseNode":
    case "DatabaseTableNode":
    case "DateVariableEditTool":
    case "DesignPageEntityTypeRootNode":
    case "EntityFolderNode":
    case "EntityReferenceNode":
    case "AssetsEntityTypeRootNode":
    case "EnumVariableEditTool":
    case "ErrorNode":
    case "ExportOptions":
    case "ExternalModuleNode":
    case "ExternalModulesListNode":
    case "FeedbackTool":
    case "FirewallRouteNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "FunnelNode":
    case "FunnelsEntityTypeRootNode":
    case "FunnelStepActionNode":
    case "FunnelStepNode":
    case "GapTool":
    case "GradientColorStop":
    case "GradientToolManagerTool":
    case "GuideMoveTool":
    case "HeaderRouteNode":
    case "HighlightStackItemTool":
    case "HighlightTool":
    case "ImageStylePresetNode":
    case "InitialTool":
    case "InlineCodeEntityTypeRootNode":
    case "InlineCodeStylePresetNode":
    case "LayoutTemplateEntityTypeRootNode":
    case "LineAnchorMoveTool":
    case "LinearGradient":
    case "LinkEntityTypeRootNode":
    case "LinkStylePresetNode":
    case "LinkTool":
    case "LoadingShieldTool":
    case "LocalizationGlossaryItemNode":
    case "LocalModuleNode":
    case "LocalModulesListNode":
    case "MoveTool":
    case "MutableNode":
    case "OvalShapeNode":
    case "OverlayNode":
    case "PaddingTool":
    case "PageLinkTool":
    case "PanTool":
    case "PathCurveBendTool":
    case "PathDefaultTool":
    case "PathNode":
    case "PathSegment":
    case "PathSegmentAdditionTool":
    case "PathSegmentHandleMoveTool":
    case "PathSegmentMoveTool":
    case "PathSegmentSelectTool":
    case "PolygonShapeNode":
    case "PresetsListNode":
    case "PreviewSettings":
    case "ProxyRouteNode":
    case "RadialGradient":
    case "RadiusTool":
    case "RecoveryTool":
    case "RectangleShapeNode":
    case "RedirectRouteNode":
    case "ResizeTool":
    case "RewriteRouteNode":
    case "RichTextEditTool":
    case "RichTextNode":
    case "RichTextVariableEditTool":
    case "RootNode":
    case "RotateTool":
    case "RouteNode":
    case "RouteLocaleNode":
    case "RouteSegmentNode":
    case "RouteSegmentRootNode":
    case "SampleColorTool":
    case "ScaleTool":
    case "SelectTool":
    case "ShaderNode":
    case "Shadow":
    case "ShapeContainerNode":
    case "ShapeGroupNode":
    case "SlotConnectTool":
    case "SlotNode":
    case "SlotPropertyNode":
    case "StarShapeNode":
    case "StringVariableEditTool":
    case "StyledTextDraft":
    case "SVGNode":
    case "TableStylePresetNode":
    case "TestTool":
    case "TextEditTool":
    case "TextEntityTypeRootNode":
    case "TextNode":
    case "TextStylePresetNode":
    case "VectorSetEntityTypeRootNode":
    case "VekterGradientTool":
    case "VekterPathEngine":
    case "VekterTool":
    case "ViewportResizeTool":
    case "ZoomSelectTool":
    case "ZoomTool":
      return !1;
    default:
      return L(e);
  }
}
function al(e) {
  return e ? (e === "RootNode" ? !0 : si(e)) : !1;
}
function si(e) {
  return e
    ? !!(zm(e) || li(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function zm(e) {
  if (!e) return !1;
  switch (e) {
    case "CodeComponentNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "RichTextNode":
    case "ShapeContainerNode":
    case "SVGNode":
    case "TextNode":
    case "PathNode":
    case "BooleanShapeNode":
    case "ShaderNode":
    case "ShapeGroupNode":
    case "RectangleShapeNode":
    case "OvalShapeNode":
    case "StarShapeNode":
    case "PolygonShapeNode":
      return !0;
    default:
      return !1;
  }
}
function li(e) {
  switch (e) {
    case "PathNode":
    case "BooleanShapeNode":
    case "ShapeGroupNode":
    case "RectangleShapeNode":
    case "OvalShapeNode":
    case "StarShapeNode":
    case "PolygonShapeNode":
      return !0;
    default:
      return !1;
  }
}
function sl(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function vR(e) {
  switch (e) {
    case "CanvasPageNode":
    case "CanvasScopeNode":
    case "DesignPageNode":
    case "LayoutTemplateNode":
    case "SmartComponentNode":
    case "VectorSetNode":
    case "WebPageNode":
      return !0;
    default:
      return !1;
  }
}
function RR(e) {
  return e ? il(e) : !1;
}
function kR(e) {
  switch (e) {
    case "BlockquoteStylePresetNode":
    case "ImageStylePresetNode":
    case "InlineCodeStylePresetNode":
    case "LinkStylePresetNode":
    case "TableStylePresetNode":
    case "TextStylePresetNode":
      return !0;
    default:
      return !1;
  }
}
function NR(e) {
  switch (e) {
    case "AbTestsEntityTypeRootNode":
    case "AssetsEntityTypeRootNode":
    case "BlockquoteEntityTypeRootNode":
    case "CMSEntityTypeRootNode":
    case "CodeFileEntityTypeRootNode":
    case "ColorEntityTypeRootNode":
    case "ComponentEntityTypeRootNode":
    case "ContentManagementEntityTypeRootNode":
    case "DesignPageEntityTypeRootNode":
    case "FunnelsEntityTypeRootNode":
    case "InlineCodeEntityTypeRootNode":
    case "LayoutTemplateEntityTypeRootNode":
    case "LinkEntityTypeRootNode":
    case "TextEntityTypeRootNode":
    case "VectorSetEntityTypeRootNode":
      return !0;
    default:
      return !1;
  }
}
function w(e, t) {
  return e?.__class === t;
}
function wR(e) {
  return w(e, "RootNode");
}
function LR(e) {
  return w(e, "AgentSkillNode");
}
function MR(e) {
  return w(e, "AgentSkillsListNode");
}
function ER(e) {
  return w(e, "DatabaseListNode");
}
function ui(e) {
  return w(e, "FrameNode");
}
function ll(e) {
  return ui(e) && e.layout === "stack";
}
function ul(e) {
  return ui(e) && e.layout === "grid";
}
function BR(e) {
  return ui(e) && e.layout !== void 0;
}
function di(e) {
  return !e || (!ll(e) && !ul(e)) ? !1 : !!e.dataIdentifier;
}
function Hm(e) {
  return !e || (!ll(e) && !ul(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function ze(e) {
  return e ? di(e) || Hm(e) : !1;
}
function At(e) {
  return w(e, "SmartComponentNode");
}
function Ft(e) {
  return e?.__class === "LayoutTemplateNode";
}
function dl(e) {
  return e?.__class === "VectorSetNode";
}
function Xe(e) {
  return w(e, "WebPageNode");
}
function AR(e) {
  return e?.__class === "DesignPageNode";
}
function cl(e) {
  return e?.__class === "CanvasPageNode";
}
function FR(e) {
  return w(e, "ContentManagementNode");
}
function OR(e) {
  return e?.__class === "TextNode";
}
function Ye(e) {
  return w(e, "RichTextNode");
}
function Gm(e) {
  return w(e, "CodeComponentNode");
}
function WR(e) {
  return w(e, "ShaderNode");
}
function zR(e) {
  return w(e, "OverlayNode");
}
function pl(e) {
  return w(e, "SVGNode");
}
function io(e) {
  return w(e, "CollectionNode");
}
function fl(e) {
  return w(e, "CollectionItemNode");
}
function HR(e) {
  return e?.__class === "BranchNode";
}
function GR(e) {
  return w(e, "BranchesNode");
}
function ao(e) {
  return w(e, "ShapeContainerNode");
}
function jR(e) {
  return e?.__class === "BooleanShapeNode";
}
function _R(e) {
  return e?.__class === "ShapeGroupNode";
}
function $R(e) {
  return e?.__class === "PathNode";
}
function KR(e) {
  return e?.__class === "RectangleShapeNode";
}
function UR(e) {
  return e?.__class === "StarShapeNode";
}
function qR(e) {
  return e?.__class === "OvalShapeNode";
}
function XR(e) {
  return e?.__class === "PolygonShapeNode";
}
function YR(e) {
  return w(e, "RoutesNode");
}
function JR(e) {
  return w(e, "RedirectRouteNode");
}
function ZR(e) {
  return w(e, "ProxyRouteNode");
}
function QR(e) {
  return w(e, "RewriteRouteNode");
}
function ek(e) {
  return w(e, "HeaderRouteNode");
}
function tk(e) {
  return w(e, "FirewallRouteNode");
}
function rk(e) {
  return w(e, "ColorStyleTokenNode");
}
function ok(e) {
  return w(e, "ColorStyleTokenListNode");
}
function nk(e) {
  return w(e, "ErrorListNode");
}
function ik(e) {
  return e?.__class === "ErrorNode";
}
function ak(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function sk(e) {
  return e?.__class === "FormBooleanInputNode";
}
function lk(e) {
  return e?.__class === "FormSelectNode";
}
function uk(e) {
  return w(e, "ComponentPresetNode");
}
function dk(e) {
  return w(e, "PresetsListNode");
}
function ci(e) {
  return e?.__class === "TextStylePresetNode";
}
function ck(e) {
  return ci(e) && !e.replicaInfo;
}
function pk(e) {
  return ci(e) && !!e.replicaInfo;
}
function fk(e) {
  return e?.__class === "LinkStylePresetNode";
}
function ml(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function mk(e) {
  return e?.__class === "TableStylePresetNode";
}
function yk(e) {
  return ml(e) && !e.replicaInfo;
}
function hk(e) {
  return !!e?.replicaInfo && (ci(e) || ml(e));
}
function xk(e) {
  return e?.__class === "ImageStylePresetNode";
}
function gk(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function gr(e) {
  return w(e, "RouteSegmentNode");
}
function bk(e) {
  return w(e, "RouteSegmentRootNode");
}
function yl(e) {
  return w(e, "SlotNode");
}
function so(e) {
  return w(e, "SlotPropertyNode");
}
function Tk(e) {
  return w(e, "EntityFolderNode");
}
function Ck(e) {
  return w(e, "EntityReferenceNode");
}
function Sk(e) {
  return w(e, "ExternalModulesListNode");
}
function Vk(e) {
  return e?.__class === "ExternalModuleNode";
}
function vk(e) {
  return w(e, "AnalyticsScopeNode");
}
function Rk(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function kk(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function Nk(e) {
  return w(e, "FunnelNode");
}
function Pk(e) {
  return w(e, "FunnelStepNode");
}
function Ik(e) {
  return w(e, "FunnelStepActionNode");
}
function jm(e) {
  return e ? Gm(e) && e.isVectorInstance : !1;
}
function Dk(e) {
  if (!jm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function wk(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function Lk(e) {
  return e?.__class === "CustomCodeNode";
}
var hl = "hidden master",
  Ek = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  _m = "isMaster";
function br(e) {
  return _m in e;
}
function Ot(e) {
  return br(e) && e.isMaster;
}
function Bk(e) {
  return br(e) && !!e.isExternalMaster;
}
function Ak(e) {
  let t = br(e) ? e.isExternalMaster : null;
  return !!t && t !== hl;
}
function Fk(e) {
  return br(e) ? e.isExternalMaster === hl : !1;
}
function Tr(e) {
  return e ? br(e) && !!e.replicaInfo : !1;
}
function Ok(e) {
  return e ? !Tr(e) : !1;
}
function xl(e) {
  return Tr(e) && !!e.replicaInfo.inheritsFrom;
}
function Wt(e) {
  return !!e.originalid && !Tr(e);
}
function Wk(e) {
  return !!e.originalid;
}
function gl(e) {
  for (let t of e.ancestors()) if (Ot(t)) return !0;
  return !1;
}
function zk(e) {
  return Ot(e) || gl(e);
}
function Hk(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Ot(e)) return e;
  for (let r of e.ancestors()) if (Ot(r)) return r;
  return null;
}
function Gk(e) {
  return Wt(e) || gl(e);
}
function zt(e) {
  return F(e) && e.length === 4 && e.every(V);
}
function bl(e) {
  return zt(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function lo(e) {
  for (let t of Reflect.ownKeys(e)) {
    let r = e[t];
    !r || (typeof r != "object" && !zs(r)) || lo(r);
  }
  return Object.freeze(e);
}
var $m = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.4,
  delay: 0,
  stiffness: 400,
  damping: 30,
  mass: 1,
  durationBasedSpring: !0,
  bounce: 0.2,
  stagger: 0,
};
lo($m);
var Cr = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.3,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,
  stagger: 0,
};
lo(Cr);
var Ht = "type",
  uo = "durationBasedSpring",
  po = "ease",
  Km = "duration",
  Um = "delay",
  Tl = "stiffness",
  Cl = "damping",
  qm = "mass",
  yi = [Km, Um, Tl, Cl, qm],
  pi = "bounce",
  co = "stagger";
function Sr(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function hi(e) {
  return !b(e) || !Sr(e[Ht]) || !zt(e[po]) ? !1 : yi.every((t) => V(e[t]));
}
function fo(e) {
  return b(e) ? (Sr(e[Ht]) || zt(e[po]) ? !0 : yi.some((t) => V(e[t]))) : !1;
}
function Sl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...ty(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: bl(e.ease), delay: e.delay };
    case "inertia":
      return {
        type: "inertia",
        bounceStiffness: e.stiffness,
        bounceDamping: e.damping,
        delay: e.delay,
      };
    case !1:
      return { type: "tween", duration: 0 };
    default:
      L(e.type);
  }
}
var Xm = ["stiffness", "damping", "mass"],
  Ym = ["duration", "bounce"],
  Jm = ["ease"];
function Zm(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Jm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function Qm(e) {
  return e.type !== "spring" || Xm.some((t) => t in e) ? !1 : Ym.some((t) => t in e);
}
var fi = "bounceStiffness",
  mi = "bounceDamping",
  ey = (e) => {
    let t = { ...Cr },
      r = e[Ht];
    Sr(r) && (t[Ht] = Zm(e) ? !1 : r);
    let o = e[po];
    zt(o) && (t[po] = o);
    for (let n of yi) {
      let i = e[n];
      V(i) && (t[n] = i);
    }
    return (
      fi in e && V(e[fi]) && (t[Tl] = e[fi]),
      mi in e && V(e[mi]) && (t[Cl] = e[mi]),
      co in e && V(e[co]) && (t[co] = e[co]),
      uo in e ? (t[uo] = e[uo]) : Qm(e) && (t[uo] = !0),
      pi in e && (t[pi] = e[pi]),
      t
    );
  };
function Vl(e) {
  return fo(e) && !Sr(e[Ht]);
}
function tN(e) {
  return b(e) && Sr(e[Ht]) ? e : fo(e) ? ey(e) : Cr;
}
function rN(e) {
  return hi(e) && e.type === "tween";
}
function oN(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function ty(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var nN = (e) => e * 1e3;
var G = ((D) => (
    (D.Boolean = "boolean"),
    (D.Number = "number"),
    (D.MotionValue = "motionvalue"),
    (D.Dimension = "dimension"),
    (D.String = "string"),
    (D.RichText = "richtext"),
    (D.FusedNumber = "fusednumber"),
    (D.Enum = "enum"),
    (D.SegmentedEnum = "segmentedenum"),
    (D.Color = "color"),
    (D.Image = "image"),
    (D.ResponsiveImage = "responsiveimage"),
    (D.File = "file"),
    (D.ComponentInstance = "componentinstance"),
    (D.Slot = "slot"),
    (D.Array = "array"),
    (D.EventHandler = "eventhandler"),
    (D.ChangeHandler = "changehandler"),
    (D.Transition = "transition"),
    (D.BoxShadow = "boxshadow"),
    (D.Link = "link"),
    (D.Date = "date"),
    (D.Object = "object"),
    (D.Font = "font"),
    (D.PageScope = "pagescope"),
    (D.ScrollSectionRef = "scrollsectionref"),
    (D.CustomCursor = "customcursor"),
    (D.Border = "border"),
    (D.Cursor = "cursor"),
    (D.Padding = "padding"),
    (D.BorderRadius = "borderradius"),
    (D.Gap = "gap"),
    (D.CollectionReference = "collectionreference"),
    (D.MultiCollectionReference = "multicollectionreference"),
    (D.TrackingId = "trackingid"),
    (D.VectorSetItem = "vectorsetitem"),
    (D.LinkRelValues = "linkrelvalues"),
    (D.Location = "location"),
    D
  ))(G || {}),
  ry = {
    number: !0,
    enum: !0,
    boolean: !0,
    string: !0,
    richtext: !0,
    color: !0,
    image: !0,
    responsiveimage: !0,
    file: !0,
    transition: !0,
    boxshadow: !0,
    link: !0,
    date: !0,
    array: !0,
    object: !0,
    fusednumber: !0,
    font: !0,
    pagescope: !0,
    scrollsectionref: !0,
    segmentedenum: !0,
    customcursor: !0,
    border: !0,
    cursor: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    collectionreference: !0,
    multicollectionreference: !0,
    trackingid: !0,
    location: !0,
    vectorsetitem: !0,
    eventhandler: !0,
  };
function aN(e) {
  return e.type in ry;
}
var oy = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  vl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function lN(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? oy : vl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function xi(e, t = !1) {
  try {
    let r = new URL(e);
    return r.protocol === "http:" || r.protocol === "https:"
      ? r.hostname === "localhost"
        ? !0
        : vl.test(r.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function uN(e) {
  let t = e.split(/#|\?/u)[0];
  if (!t) return !1;
  let [r, o = ""] = t.split("/", 2),
    n = "/" + o,
    i = new URL("https://example.com");
  return (
    (i.host = r),
    (i.pathname = n),
    !!i.hostname.match(/.+\..+/) && i.href === `https://${r}/${o}`
  );
}
function gi(e) {
  return (
    (e = e.trim()),
    e
      ? xi(e, !0)
        ? { result: "ok", normalizedValue: e }
        : xi(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var Rl = ":([a-z]\\w*)",
  fN = new RegExp(Rl, "i"),
  bi = new RegExp(Rl, "gi");
var kl = "type",
  ny = "fetchDataValue";
function mo(e) {
  return b(e) && kl in e && e[kl] === ny;
}
function CN(e) {
  return gi(e.url).result !== "error";
}
function SN(e) {
  return e.controlProp
    ? e
    : {
        cacheDuration: e.cacheDuration,
        resultKeyPath: e.resultKeyPath,
        type: "fetchDataValue",
        url: e.url,
        variables: e.variables,
        controlProp: { type: e.resultOutputType, value: e.fallbackValue },
        errorControlProp: void 0,
      };
}
function VN(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (x(!k(t), "fallbackValue must be defined"), t);
}
function vN(e) {
  return {
    type: "fetchDataValue",
    url: "",
    credentials: "same-origin",
    resultKeyPath: "",
    controlProp: e,
    errorControlProp: e.type === "string" ? { type: "string", value: "Error" } : void 0,
    variables: {},
    cacheDuration: 0,
  };
}
function Pl(e, t) {
  if (
    !mo(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let r = Nl(e.url),
    o = Nl(t.url);
  if (r.length !== o.length) return !1;
  for (let n in e.variables) if (!ye(e.variables[n], t.variables[n])) return !1;
  return !0;
}
function RN(e, t) {
  let r = gi(e.url);
  return r.result !== "ok"
    ? e.url
    : r.normalizedValue.replaceAll(bi, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function Nl(e) {
  let t = e.matchAll(bi),
    r = new Set();
  for (let o of t) {
    let n = o[1];
    n && n.length !== 0 && r.add(n);
  }
  return Array.from(r);
}
var kN = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var Il = {
    motionvalue: !0,
    array: !0,
    boolean: !0,
    color: !0,
    eventhandler: !0,
    image: !0,
    number: !0,
    object: !0,
    dimension: !0,
    string: !0,
    richtext: !0,
    link: !0,
    linkrelvalues: !0,
    date: !0,
    enum: !0,
    file: !0,
    scrollsectionref: !0,
    customcursor: !0,
    cursor: !0,
    transition: !0,
    border: !0,
    boxshadow: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    collectionreference: !0,
    location: !0,
    multicollectionreference: !0,
    trackingid: !0,
    vectorsetitem: !0,
    controlReference: !0,
    nodePropertyControlReference: !0,
    slug: !0,
  },
  iy = {
    image: !0,
    boolean: !0,
    number: !0,
    color: !0,
    string: !0,
    richtext: !0,
    link: !0,
    date: !0,
    file: !0,
    vectorsetitem: !0,
  };
function yo(e) {
  return p(e) && Object.hasOwn(Il, e);
}
function Vr(e) {
  return p(e) && Object.hasOwn(iy, e);
}
var wN = Vr,
  ay = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function LN(e) {
  return p(e) && Object.hasOwn(ay, e);
}
function MN(e) {
  return Yr(Il).filter(e);
}
var sy = { responsiveimage: !0 };
function jN(e) {
  return yo(e) ? !0 : p(e) && e in sy;
}
var ly = "type",
  uy = "valueTransform",
  dy = [
    "contains",
    "containsAny",
    "containsAll",
    "startsWith",
    "endsWith",
    "equals",
    "isSet",
    "greaterThan",
    "lessThan",
    "negate",
    "toBoolean",
    "isBefore",
    "isAfter",
    "isBetweenDates",
    "isIncludedIn",
    "convertFromEnum",
    "convertFromString",
  ],
  cy = new Set(dy),
  py = {
    isSet: !0,
    equals: !0,
    startsWith: !0,
    endsWith: !0,
    contains: !0,
    containsAny: !0,
    containsAll: !0,
    greaterThan: !0,
    lessThan: !0,
    negate: !0,
    numberToPixelString: !0,
    radiusForCorner: !0,
    percentageToCornerShape: !0,
    isBefore: !0,
    isAfter: !0,
    isBetweenDates: !0,
    toString: !0,
    numberToString: !0,
    extractDateSegment: !0,
    toNumber: !0,
    toBoolean: !0,
    reverseArray: !0,
    offsetArray: !0,
    limitArray: !0,
    offsetAndLimitArray: !0,
    arrayLength: !0,
    prefix: !0,
    suffix: !0,
    toResponsiveImage: !0,
    toImageSrc: !0,
    toZIndex: !0,
    toAxisOverflow: !0,
    toOverflowWithClipFallback: !0,
    jsonStringify: !0,
    htmlEscape: !0,
    htmlUnescape: !0,
    addImageAlt: !0,
    isIncludedIn: !0,
    isEven: !0,
    isOdd: !0,
    getGridColumnCSSValue: !0,
    getGridRowCSSValue: !0,
    getNumericColumnGap: !0,
    toggleInList: !0,
  };
function fy(e) {
  return cy.has(e);
}
function my(e) {
  return Object.hasOwn(py, e);
}
var yy = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function hy(e) {
  return Object.hasOwn(yy, e);
}
var xy = {
    isSet: !0,
    convertFromEnum: !0,
    convertFromBoolean: !0,
    convertFromString: !0,
    enumToDisplayName: !0,
    equals: !0,
    startsWith: !0,
    endsWith: !0,
    contains: !0,
    containsAny: !0,
    containsAll: !0,
    greaterThan: !0,
    lessThan: !0,
    isEven: !0,
    isOdd: !0,
    negate: !0,
    numberToPixelString: !0,
    radiusForCorner: !0,
    percentageToCornerShape: !0,
    isBefore: !0,
    isAfter: !0,
    isBetweenDates: !0,
    toString: !0,
    numberToString: !0,
    toDateString: !0,
    toNumber: !0,
    toBoolean: !0,
    limitArray: !0,
    offsetArray: !0,
    reverseArray: !0,
    offsetAndLimitArray: !0,
    arrayLength: !0,
    prefix: !0,
    suffix: !0,
    toResponsiveImage: !0,
    toImageSrc: !0,
    toZIndex: !0,
    toAxisOverflow: !0,
    toOverflowWithClipFallback: !0,
    jsonStringify: !0,
    htmlEscape: !0,
    htmlUnescape: !0,
    addImageAlt: !0,
    isIncludedIn: !0,
    arrayToArray: !0,
    getGridColumnCSSValue: !0,
    getGridRowCSSValue: !0,
    getNumericColumnGap: !0,
    extractDateSegment: !0,
    toggleInList: !0,
  },
  xo = $s(xy);
function _N() {
  return xo;
}
function gy(e) {
  let t = Ti[e];
  return !(ke(t) || k(t));
}
function $N(e) {
  return gy(e.name);
}
function KN(e) {
  return fy(e.name) && wl(e.name) !== null;
}
function by(e) {
  return my(e) || hy(e);
}
var Dl = [
  "enum",
  "boolean",
  "number",
  "string",
  "image",
  "date",
  "responsiveimage",
  "link",
  "file",
  "richtext",
  "array",
  "object",
  "collectionreference",
  "multicollectionreference",
];
function UN(e) {
  return Dl.includes(e);
}
var Ti = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: Dl,
    greaterThan: ["number"],
    lessThan: ["number"],
    negate: ["boolean"],
    isBefore: ["date"],
    isAfter: ["date"],
    isBetweenDates: ["date"],
    toDateString: ["date"],
    toString: ["number"],
    numberToString: ["number"],
    isEven: ["number"],
    isOdd: ["number"],
    enumToDisplayName: ["enum"],
    convertFromEnum: ["enum"],
    convertFromBoolean: ["boolean"],
    isIncludedIn: ["collectionreference"],
    convertFromString: ["string"],
    arrayLength: ["array"],
    reverseArray: ["array"],
    offsetArray: ["array"],
    limitArray: ["array"],
    arrayToArray: ["array"],
    extractDateSegment: ["date"],
    toggleInList: ["multicollectionreference"],
    offsetAndLimitArray: null,
    toBoolean: null,
    toNumber: null,
    toResponsiveImage: null,
    toImageSrc: null,
    toZIndex: null,
    toAxisOverflow: null,
    toOverflowWithClipFallback: null,
    jsonStringify: null,
    htmlEscape: null,
    htmlUnescape: null,
    addImageAlt: null,
    numberToPixelString: null,
    radiusForCorner: null,
    percentageToCornerShape: null,
    getGridColumnCSSValue: null,
    getGridRowCSSValue: null,
    getNumericColumnGap: null,
  },
  Ty = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of xo) {
        let r = Ti[t];
        if (r)
          for (let o of r) {
            let n = e.get(o);
            n ? n.push(t) : e.set(o, [t]);
          }
      }
      return e;
    };
  })();
function Cy(e) {
  return Ty().get(e);
}
function qN(e) {
  let t = Cy(e);
  return !!(t && t.length > 0);
}
function wl(e) {
  return Ti[e];
}
var Sy = {
  contains: { value: ["string", "collectionreference"] },
  containsAny: { value: ["multicollectionreference"] },
  containsAll: { value: ["multicollectionreference"] },
  endsWith: { value: ["string"] },
  startsWith: { value: ["string"] },
  equals: { value: ["string", "boolean", "number", "enum", "date", "collectionreference"] },
  greaterThan: { value: ["number"] },
  lessThan: { value: ["number"] },
  isBefore: { value: ["date"] },
  isAfter: { value: ["date"] },
  isBetweenDates: { start: ["date"], end: ["date"] },
  isIncludedIn: { value: ["multicollectionreference"] },
};
function XN(e) {
  return Sy[e];
}
var Ci = {
    contains: ["boolean"],
    containsAny: ["boolean"],
    containsAll: ["boolean"],
    endsWith: ["boolean"],
    equals: ["boolean"],
    startsWith: ["boolean"],
    isSet: ["boolean"],
    greaterThan: ["boolean"],
    lessThan: ["boolean"],
    negate: ["boolean"],
    isBefore: ["boolean"],
    isAfter: ["boolean"],
    isBetweenDates: ["boolean"],
    toString: ["string"],
    toDateString: ["string"],
    numberToString: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    toNumber: ["number"],
    toBoolean: ["boolean"],
    reverseArray: ["array"],
    offsetArray: ["array"],
    limitArray: ["array"],
    offsetAndLimitArray: ["array"],
    arrayToArray: ["array"],
    arrayLength: ["number"],
    isEven: ["boolean"],
    isOdd: ["boolean"],
    toResponsiveImage: ["responsiveimage"],
    toImageSrc: ["image"],
    toZIndex: ["number"],
    toAxisOverflow: ["string"],
    toOverflowWithClipFallback: ["string"],
    jsonStringify: ["string"],
    htmlEscape: ["string"],
    htmlUnescape: ["string"],
    enumToDisplayName: ["string"],
    convertFromEnum: [
      "string",
      "boolean",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    convertFromBoolean: [
      "string",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    convertFromString: [
      "string",
      "boolean",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    addImageAlt: ["responsiveimage"],
    numberToPixelString: ["string"],
    radiusForCorner: ["string"],
    percentageToCornerShape: ["number"],
    isIncludedIn: ["boolean"],
    getGridColumnCSSValue: ["string"],
    getGridRowCSSValue: ["string"],
    getNumericColumnGap: ["number"],
    extractDateSegment: ["number"],
    toggleInList: ["multicollectionreference"],
  },
  Vy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of xo) {
        let r = Ci[t];
        for (let o of r) {
          let n = e.get(o);
          n ? n.push(t) : e.set(o, [t]);
        }
      }
      return e;
    };
  })();
function YN(e) {
  return Vy().get(e);
}
function Ll(e) {
  return Ci[e];
}
function JN(e, t) {
  return by(e.name) ? Ci[e.name].includes(t) : !1;
}
function ZN(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = Ll(e.name);
      x(t.length === 1);
      let r = t[0];
      return (x(r, "Value transform output type must be defined"), r);
    }
  }
}
var QN = new Set(["convertFromBoolean", "equals", "isSet"]),
  Ml = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function El(e) {
  return Object.hasOwn(Ml, e);
}
function eP(e, t) {
  if (t) return (x(El(e)), Ml[e]);
  switch (e) {
    case "negate":
      return "Invert";
    case "toDateString":
      return "Format";
    case "extractDateSegment":
      return "Extract";
    case "toString":
      return "As plain text";
    case "numberToString":
      return "Format number";
    case "reverseArray":
      return "Reverse";
    case "offsetArray":
      return "Offset";
    case "limitArray":
      return "Limit";
    case "arrayToArray":
      return "Map";
    case "arrayLength":
      return "Count";
    case "enumToDisplayName":
      return "Display option";
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return "Convert";
    default:
      return Ae(e);
  }
}
var vy = new Set(["prefix", "suffix"]);
function Ry(e) {
  return vy.has(e);
}
var ho;
function ky(e) {
  return (
    ho ||
      (ho = new Set(
        xo.filter((t) => {
          let r = wl(t);
          if (r?.length !== 1 || r[0] !== "array") return !1;
          let o = Ll(t);
          return o.length !== 1 ? !1 : o[0] === "array";
        })
      )),
    ho.has(e)
  );
}
function tP(e) {
  return ky(e) || Ry(e);
}
function rP(e, t) {
  let r = e.findIndex((i) => i.id === t),
    o = e[r];
  if (!o) return null;
  let n = 1;
  if (El(o.name)) for (let i = r + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) n++;
  return { start: r, length: n };
}
function Ny(e) {
  return b(e) && e[ly] === uy;
}
function Bl(e, t) {
  if (!Ny(t) || e.name !== t.name) return !1;
  for (let r of Yr(e)) if (r !== "id" && e[r] !== t[r]) return !1;
  return !0;
}
var oP = ["standard", "compact"],
  nP = ["short", "long"],
  iP = ["decimal", "currency", "unit"],
  aP = ["symbol", "narrowSymbol", "code", "name"],
  sP = ["short", "narrow", "long"],
  lP = ["year", "month", "day", "hour12", "hour24", "minute"];
var Al = "type",
  vr = "variableReference";
function M(e) {
  return b(e) && Al in e && e[Al] === vr;
}
function Fl(e, t) {
  return { type: vr, id: e, providerId: t };
}
function Si(e, t) {
  return { type: vr, id: e, providerId: t };
}
function go(e, t) {
  return M(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Ol = "transform";
function cP(e) {
  return M(e) && e.providerId === Ol;
}
function pP(e) {
  return { type: vr, id: e, providerId: Ol };
}
var Wl = "payload",
  zl = ".";
function fP(e) {
  return M(e) && e.providerId === Wl;
}
function mP(e) {
  return { type: vr, id: e.join(zl), providerId: Wl };
}
function yP(e) {
  let t = Py(e.id);
  if (!t.some((r) => r.length === 0)) return t;
}
function Py(e) {
  return e.split(zl);
}
var Hl = "type",
  Vi = "computedValue",
  Iy = {
    array: !0,
    boolean: !0,
    number: !0,
    string: !0,
    enum: !0,
    color: !0,
    link: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    image: !0,
    file: !0,
    multicollectionreference: !0,
  };
function SP(e) {
  return p(e) && Object.hasOwn(Iy, e);
}
function Te(e) {
  return b(e) && Hl in e && e[Hl] === Vi;
}
function VP(e) {
  return Te(e) && mo(e.startValue);
}
function Gl(e) {
  return Te(e) && M(e.startValue);
}
function vP(e) {
  return (
    Te(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function RP(e) {
  return Te(e) && e.transforms.some((t) => t.name === "toDateString");
}
function kP(e) {
  return Te(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function jl(e, t) {
  return !Te(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (M(e.startValue) && !go(e.startValue, t.startValue)) ||
    (mo(e.startValue) && !Pl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((r, o) => Bl(r, t.transforms[o]));
}
function _l(e, t, r) {
  return M(t)
    ? { type: Vi, outputType: e, startValue: t, transforms: r }
    : { type: Vi, outputType: e, startValue: t, transforms: r };
}
function O(e) {
  return M(e) || Te(e);
}
function $l(e, t) {
  return M(e) ? go(e, t) : jl(e, t);
}
var AP = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  Dy = "isVariant";
function wy(e) {
  return Dy in e;
}
var FP = ["hover", "pressed"],
  Ly = "gesture";
function Ul(e) {
  return Ly in e;
}
function Ce(e) {
  return wy(e) && e.isVariant === !0;
}
function ql(e) {
  return Ce(e) && Ot(e);
}
function OP(e) {
  for (let t of e.ancestors()) if (ql(t)) return t;
  return null;
}
function WP(e) {
  return Ce(e) ? !Ul(e) || !e.gesture : !1;
}
function Kl(e) {
  return Xl(e) && xl(e) && Ul(e) && !!e.gesture;
}
function zP(e) {
  if (Kl(e)) return !0;
  if (!Wt(e)) return !1;
  for (let t of e.ancestors()) if (Kl(t)) return !0;
  return !1;
}
function HP(e) {
  switch (e) {
    case "loading":
      return "Loading";
    case "pressed":
      return "Pressed";
    case "hover":
      return "Hover";
    case "error":
      return "Error";
    default:
      L(e);
  }
}
function GP(e) {
  return Ce(e) || My(e);
}
function My(e) {
  return e.cache.insideVariant;
}
function Xl(e) {
  return Tr(e) && Ce(e);
}
function Ey(e) {
  return Wt(e) && e.cache.insideVariant;
}
function jP(e) {
  return Xl(e) || Ey(e);
}
var By = "isBreakpoint";
function Ay(e) {
  return By in e;
}
function ft(e) {
  return e ? Ce(e) && Ay(e) && e.isBreakpoint === !0 : !1;
}
function _P(e) {
  return ft(e) && ql(e);
}
function $P(e) {
  return e ? Ce(e) && !ft(e) : !1;
}
function KP(e) {
  return Ce(e) ? hi(e.variantTransition) || O(e.variantTransition) || Vl(e.variantTransition) : !1;
}
function YP(e) {
  return e ? al(e.__class) : !1;
}
function JP(e) {
  return e ? si(e.__class) : !1;
}
function mt(e) {
  return e ? li(e.__class) : !1;
}
function ZP(e) {
  return e ? sl(e.__class) : !1;
}
function QP(e, t) {
  let r = e.getNodeParent(t);
  return r === null || !mt(r);
}
function eI(e, t) {
  if (!mt(t)) return !1;
  let r = e.getNodeParent(t);
  return r === null ? !0 : !mt(r) && !ao(r);
}
var Fy = qr("serializeJS"),
  Oy = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, r) {
      let o = Y(t, r);
      if (k(o)) return;
      let n = e;
      if (!/^[a-z$_][\w$]*$/i.test(n)) n = JSON.stringify(n);
      else if (n === o) return o;
      return `${n}: ${o}`;
    },
    joinObject(e) {
      return `{${e.join(", ")}}`;
    },
  },
  Yl = new Intl.Collator("en", { sensitivity: "base" }).compare;
function bo(e, t, r) {
  let o = Jl(r, t),
    n = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, o);
    s && n.push(s);
  }
  return (
    t instanceof yt
      ? (yt.isSorted(t) && n.sort(Yl),
        n.unshift(...yt.spreadsAtStart(t).map(e.serializeSpread)),
        n.push(...yt.spreadsAtEnd(t).map(e.serializeSpread)))
      : n.sort(Yl),
    e.joinObject(n)
  );
}
function Y(e, t = new Set()) {
  if (e instanceof W) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || ke(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (r) => `\\u${r.charCodeAt(0).toString(16)}`
    );
  if (F(e)) {
    let r = Jl(t, e),
      o = [];
    for (let n of e) {
      let i = Y(n, r);
      k(i) || o.push(i);
    }
    return `[${o.join(", ")}]`;
  } else if (typeof e == "object") return bo(Oy, e, t);
}
function Jl(e, t) {
  if (e.has(t))
    throw (
      Fy.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let r = new Set(e);
  return (r.add(t), r);
}
var W = class e extends String {
  static fn(t, ...r) {
    let o = [];
    for (let n of r) (n || (V(n) && n === 0) || (p(n) && n === "")) && o.push(Y(n));
    return new e(`${t}(${o.join(", ")})`);
  }
  static optionalFn(t, ...r) {
    return new e(`${t}?.(${r.map((o) => Y(o)).join(", ")})`);
  }
  static fromValue(t) {
    return new e(Y(t));
  }
  static absoluteURL(t) {
    return t.match(/^https?:/u) ? new e(Y(t)) : new e(`new URL(${Y(t)}, import.meta.url).href`);
  }
  static hasMarker(t, r) {
    return t.#e === r;
  }
  static withMarker(t, r) {
    let o = new e(r);
    return ((o.#e = t), o);
  }
  static isUndefined(t) {
    return t instanceof e && Y(t) === "undefined";
  }
  static isTrue(t) {
    return t instanceof e && Y(t) === "true";
  }
  #e = Symbol("Safe JS");
};
((t) => {
  class e {
    #e = new globalThis.Set();
    constructor(o) {
      if (o) for (let n of o) this.add(n);
    }
    *[Symbol.iterator]() {
      for (let o of this.#e) yield new t(o);
    }
    get size() {
      return this.#e.size;
    }
    add(o) {
      this.#e.add(String(o));
    }
    delete(o) {
      this.#e.delete(String(o));
    }
    has(o) {
      return this.#e.has(String(o));
    }
    values() {
      return this.#e.values();
    }
  }
  t.Set = e;
})((W ||= {}));
function Zl(e) {
  return e instanceof W;
}
var yt = class e extends Object {
  #e;
  constructor(t, r = 0) {
    (super(), k(t) || e.assign(this, t), (this.#e = r));
  }
  #t = [];
  static spreadsAtEnd(t) {
    return t.#t;
  }
  #r = [];
  static spreadsAtStart(t) {
    return t.#r;
  }
  static hasSpreads(t) {
    return t.#t.length > 0 || t.#r.length > 0;
  }
  static isEmpty(t) {
    if (e.hasSpreads(t)) return !1;
    for (let r in t) if (!k(t[r])) return !1;
    return !0;
  }
  static addSpreadAtEnd(t, r) {
    t.#t.push(r);
  }
  static addSpreadAtStart(t, r) {
    t.#r.push(r);
  }
  static isSorted(t) {
    return t.#e === 0;
  }
  static assign(t, r) {
    return (r instanceof e && (t.#t.push(...r.#t), t.#r.push(...r.#r)), Object.assign(t, r));
  }
  static fromEntries(t) {
    let r = {};
    for (let [o, n] of t) {
      let i = o instanceof W ? Y(o) : o;
      r[i] = n;
    }
    return new e(r);
  }
};
function nI(e) {
  return e instanceof yt;
}
function ht(e, t = "") {
  let r = "";
  for (let o of e) o && (r && (r += t), (r += o instanceof W ? Y(o) : o));
  return r;
}
((a) => {
  function e(...s) {
    return a(s, ", ");
  }
  a.list = e;
  function t(s) {
    return a(s, ", ");
  }
  a.listFrom = t;
  function r(...s) {
    return a(
      s,
      `
`
    );
  }
  a.lines = r;
  function o(s) {
    return a(
      s,
      `
`
    );
  }
  a.linesFrom = o;
  function n(...s) {
    return a(
      s,
      `

`
    );
  }
  a.sections = n;
  function i(s) {
    return a(
      s,
      `

`
    );
  }
  a.sectionsFrom = i;
})((ht ||= {}));
function To(e, ...t) {
  let r = [e[0]];
  return (
    t.forEach((o, n) => {
      r.push(Y(o), e[n + 1]);
    }),
    new W(r.join(""))
  );
}
((n) => {
  function e(...i) {
    return new W(
      ht(
        i,
        `
`
      )
    );
  }
  n.joinLines = e;
  function t(...i) {
    return new W(
      ht(
        i,
        `

`
      )
    );
  }
  n.joinSections = t;
  function r(i) {
    return new W(
      ht(
        i,
        `
`
      )
    );
  }
  n.linesFrom = r;
  function o(i) {
    return new W(ht(i, ", "));
  }
  n.listFrom = o;
})((To ||= {}));
var Ql = Symbol("jst template literal");
function Rr(e, ...t) {
  if (t.every((o) => p(o) || V(o) || ae(o) || ke(o))) {
    let o = [e[0]];
    return (
      t.forEach((n, i) => {
        o.push(String(n), e[i + 1]);
      }),
      o.join("")
    );
  }
  let r = ["`", vi(e[0])];
  return (
    t.forEach((o, n) => {
      (p(o)
        ? r.push(vi(o))
        : typeof o == "number" || typeof o == "boolean" || ke(o)
          ? r.push(String(o))
          : o instanceof W && W.hasMarker(o, Ql)
            ? r.push(o.substring(1, o.length - 1))
            : r.push("${", Y(o), "}"),
        r.push(vi(e[n + 1])));
    }),
    r.push("`"),
    W.withMarker(Ql, r.join(""))
  );
}
((r) => {
  function e(o, n) {
    let i = r`${o[0]}`;
    for (let a = 1; a < o.length; a++) i = r`${i}${n}${o[a]}`;
    return i;
  }
  r.join = e;
  function t(o, n, i) {
    let a = [],
      s = [],
      l = 0;
    for (let u of o.matchAll(n))
      (x(typeof u.index == "number", "unexpected non-number in match"),
        a.push(o.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(o.substring(l)), r(a, ...s));
  }
  r.replaceAll = t;
})((Rr ||= {}));
var Wy = /(?<char>[A-Z])/gu;
function zy(e) {
  return e.replace(Wy, "-$<char>").toLowerCase();
}
var Hy = new Set(["viewBox", "stdDeviation"]),
  Gy = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, r) {
      if (k(t) || W.isUndefined(t)) return;
      let o = Hy.has(e) ? e : zy(e);
      if (t === !0 || W.isTrue(t)) return o;
      if (V(t)) return `${o}="${t}"`;
      let n = Y(t, r);
      if (n !== "") return `${o}=${n}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function eu(e) {
  return e ? new W(" " + bo(Gy, e, new Set())) : To``;
}
var Ri = Symbol("svg tag");
function ru(e, ...t) {
  let r = [e[0]];
  return (
    t.forEach((o, n) => {
      r.push(Y(o), e[n + 1]);
    }),
    W.withMarker(Ri, r.join(""))
  );
}
((n) => {
  function e(i, a, s) {
    return s && Y(s)
      ? n`<${new W(i)}${eu(a)}>${n.children(s)}</${new W(i)}>`
      : n`<${new W(i)}${eu(a)}/>`;
  }
  n.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  n.applyTransforms = t;
  function r(i) {
    return W.withMarker(Ri, i);
  }
  n.fromTrustedString = r;
  function o(i) {
    return (x(W.hasMarker(i, Ri), "SVG children can only be svg"), i);
  }
  n.children = o;
})((ru ||= {}));
var jy = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, r) {
    if (k(t) || W.isUndefined(t)) return;
    if (t === !0 || W.isTrue(t)) return e;
    let o = Y(t, r);
    if (o !== "") return `${e}={${o}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function tu(e) {
  return e ? new W(" " + bo(jy, e, new Set())) : To``;
}
var ki = Symbol("jsx tag");
function ou(e, ...t) {
  let r = [e[0]];
  return (
    t.forEach((o, n) => {
      r.push(Y(o), e[n + 1]);
    }),
    W.withMarker(ki, r.join(""))
  );
}
((n) => {
  function e(i) {
    return W.hasMarker(i, ki) ? i : n`{${i}}`;
  }
  n.children = e;
  function t(i) {
    return W.withMarker(ki, i);
  }
  n.fromTrustedString = t;
  function r(i, a, s) {
    return (
      (i = Zl(i) ? i : new W(i)),
      s && Y(s) ? n`<${i}${tu(a)}>${n.children(s)}</${i}>` : n`<${i}${tu(a)}/>`
    );
  }
  n.tag = r;
  function o(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  n.applyTransforms = o;
})((ou ||= {}));
function vi(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var kr = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Je(e, t, r, o = !1) {
  let [n, i] = t,
    [a, s] = r,
    l = i - n;
  if (l === 0) return (s + a) / 2;
  let u = s - a;
  if (u === 0) return a;
  let c = a + ((e - n) / l) * u;
  if (o === !0)
    if (a < s) {
      if (c < a) return a;
      if (c > s) return s;
    } else {
      if (c > a) return a;
      if (c < s) return s;
    }
  return c;
}
function lt(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ze(e) {
  let t = Co(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function Co(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var Ni = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(Ni || {}),
  nu = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(nu || {});
var ee = class e {
  constructor() {
    ((this.hex = "#000000"),
      (this.rgb_r = 0),
      (this.rgb_g = 0),
      (this.rgb_b = 0),
      (this.xyz_x = 0),
      (this.xyz_y = 0),
      (this.xyz_z = 0),
      (this.luv_l = 0),
      (this.luv_u = 0),
      (this.luv_v = 0),
      (this.lch_l = 0),
      (this.lch_c = 0),
      (this.lch_h = 0),
      (this.hsluv_h = 0),
      (this.hsluv_s = 0),
      (this.hsluv_l = 0),
      (this.hpluv_h = 0),
      (this.hpluv_p = 0),
      (this.hpluv_l = 0),
      (this.r0s = 0),
      (this.r0i = 0),
      (this.r1s = 0),
      (this.r1i = 0),
      (this.g0s = 0),
      (this.g0i = 0),
      (this.g1s = 0),
      (this.g1i = 0),
      (this.b0s = 0),
      (this.b0i = 0),
      (this.b1s = 0),
      (this.b1i = 0));
  }
  static fromLinear(t) {
    return t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
  }
  static toLinear(t) {
    return t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  }
  static yToL(t) {
    return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * Math.pow(t / e.refY, 1 / 3) - 16;
  }
  static lToY(t) {
    return t <= 8 ? (e.refY * t) / e.kappa : e.refY * Math.pow((t + 16) / 116, 3);
  }
  static rgbChannelToHex(t) {
    let r = Math.round(t * 255),
      o = r % 16,
      n = ((r - o) / 16) | 0;
    return e.hexChars.charAt(n) + e.hexChars.charAt(o);
  }
  static hexToRgbChannel(t, r) {
    let o = e.hexChars.indexOf(t.charAt(r)),
      n = e.hexChars.indexOf(t.charAt(r + 1));
    return (o * 16 + n) / 255;
  }
  static distanceFromOriginAngle(t, r, o) {
    let n = r / (Math.sin(o) - t * Math.cos(o));
    return n < 0 ? 1 / 0 : n;
  }
  static distanceFromOrigin(t, r) {
    return Math.abs(r) / Math.sqrt(Math.pow(t, 2) + 1);
  }
  static min6(t, r, o, n, i, a) {
    return Math.min(t, Math.min(r, Math.min(o, Math.min(n, Math.min(i, a)))));
  }
  rgbToHex() {
    ((this.hex = "#"),
      (this.hex += e.rgbChannelToHex(this.rgb_r)),
      (this.hex += e.rgbChannelToHex(this.rgb_g)),
      (this.hex += e.rgbChannelToHex(this.rgb_b)));
  }
  hexToRgb() {
    ((this.hex = this.hex.toLowerCase()),
      (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
      (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
      (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
  }
  xyzToRgb() {
    ((this.rgb_r = e.fromLinear(e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z)),
      (this.rgb_g = e.fromLinear(e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z)),
      (this.rgb_b = e.fromLinear(e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z)));
  }
  rgbToXyz() {
    let t = e.toLinear(this.rgb_r),
      r = e.toLinear(this.rgb_g),
      o = e.toLinear(this.rgb_b);
    ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * r + 0.18048078840183 * o),
      (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * r + 0.072192315360733 * o),
      (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * r + 0.95053215224966 * o));
  }
  xyzToLuv() {
    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
      r = 4 * this.xyz_x,
      o = 9 * this.xyz_y;
    (t !== 0 ? ((r /= t), (o /= t)) : ((r = NaN), (o = NaN)),
      (this.luv_l = e.yToL(this.xyz_y)),
      this.luv_l === 0
        ? ((this.luv_u = 0), (this.luv_v = 0))
        : ((this.luv_u = 13 * this.luv_l * (r - e.refU)),
          (this.luv_v = 13 * this.luv_l * (o - e.refV))));
  }
  luvToXyz() {
    if (this.luv_l === 0) {
      ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
      return;
    }
    let t = this.luv_u / (13 * this.luv_l) + e.refU,
      r = this.luv_v / (13 * this.luv_l) + e.refV;
    ((this.xyz_y = e.lToY(this.luv_l)),
      (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * r - t * r)),
      (this.xyz_z = (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) / (3 * r)));
  }
  luvToLch() {
    if (
      ((this.lch_l = this.luv_l),
      (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
      this.lch_c < 1e-8)
    )
      this.lch_h = 0;
    else {
      let t = Math.atan2(this.luv_v, this.luv_u);
      ((this.lch_h = (t * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
    }
  }
  lchToLuv() {
    let t = (this.lch_h / 180) * Math.PI;
    ((this.luv_l = this.lch_l),
      (this.luv_u = Math.cos(t) * this.lch_c),
      (this.luv_v = Math.sin(t) * this.lch_c));
  }
  calculateBoundingLines(t) {
    let r = Math.pow(t + 16, 3) / 1560896,
      o = r > e.epsilon ? r : t / e.kappa,
      n = o * (284517 * e.m_r0 - 94839 * e.m_r2),
      i = o * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
      a = o * (632260 * e.m_r2 - 126452 * e.m_r1),
      s = o * (284517 * e.m_g0 - 94839 * e.m_g2),
      l = o * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
      u = o * (632260 * e.m_g2 - 126452 * e.m_g1),
      c = o * (284517 * e.m_b0 - 94839 * e.m_b2),
      m = o * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
      f = o * (632260 * e.m_b2 - 126452 * e.m_b1);
    ((this.r0s = n / a),
      (this.r0i = (i * t) / a),
      (this.r1s = n / (a + 126452)),
      (this.r1i = ((i - 769860) * t) / (a + 126452)),
      (this.g0s = s / u),
      (this.g0i = (l * t) / u),
      (this.g1s = s / (u + 126452)),
      (this.g1i = ((l - 769860) * t) / (u + 126452)),
      (this.b0s = c / f),
      (this.b0i = (m * t) / f),
      (this.b1s = c / (f + 126452)),
      (this.b1i = ((m - 769860) * t) / (f + 126452)));
  }
  calcMaxChromaHpluv() {
    let t = e.distanceFromOrigin(this.r0s, this.r0i),
      r = e.distanceFromOrigin(this.r1s, this.r1i),
      o = e.distanceFromOrigin(this.g0s, this.g0i),
      n = e.distanceFromOrigin(this.g1s, this.g1i),
      i = e.distanceFromOrigin(this.b0s, this.b0i),
      a = e.distanceFromOrigin(this.b1s, this.b1i);
    return e.min6(t, r, o, n, i, a);
  }
  calcMaxChromaHsluv(t) {
    let r = (t / 360) * Math.PI * 2,
      o = e.distanceFromOriginAngle(this.r0s, this.r0i, r),
      n = e.distanceFromOriginAngle(this.r1s, this.r1i, r),
      i = e.distanceFromOriginAngle(this.g0s, this.g0i, r),
      a = e.distanceFromOriginAngle(this.g1s, this.g1i, r),
      s = e.distanceFromOriginAngle(this.b0s, this.b0i, r),
      l = e.distanceFromOriginAngle(this.b1s, this.b1i, r);
    return e.min6(o, n, i, a, s, l);
  }
  hsluvToLch() {
    if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
    else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
    else {
      ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
      let t = this.calcMaxChromaHsluv(this.hsluv_h);
      this.lch_c = (t / 100) * this.hsluv_s;
    }
    this.lch_h = this.hsluv_h;
  }
  lchToHsluv() {
    if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
    else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
    else {
      this.calculateBoundingLines(this.lch_l);
      let t = this.calcMaxChromaHsluv(this.lch_h);
      ((this.hsluv_s = (this.lch_c / t) * 100), (this.hsluv_l = this.lch_l));
    }
    this.hsluv_h = this.lch_h;
  }
  hpluvToLch() {
    if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
    else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
    else {
      ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
      let t = this.calcMaxChromaHpluv();
      this.lch_c = (t / 100) * this.hpluv_p;
    }
    this.lch_h = this.hpluv_h;
  }
  lchToHpluv() {
    if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
    else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
    else {
      this.calculateBoundingLines(this.lch_l);
      let t = this.calcMaxChromaHpluv();
      ((this.hpluv_p = (this.lch_c / t) * 100), (this.hpluv_l = this.lch_l));
    }
    this.hpluv_h = this.lch_h;
  }
  hsluvToRgb() {
    (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
  }
  hpluvToRgb() {
    (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
  }
  hsluvToHex() {
    (this.hsluvToRgb(), this.rgbToHex());
  }
  hpluvToHex() {
    (this.hpluvToRgb(), this.rgbToHex());
  }
  rgbToHsluv() {
    (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
  }
  rgbToHpluv() {
    (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
  }
  hexToHsluv() {
    (this.hexToRgb(), this.rgbToHsluv());
  }
  hexToHpluv() {
    (this.hexToRgb(), this.rgbToHpluv());
  }
};
ee.hexChars = "0123456789abcdef";
ee.refY = 1;
ee.refU = 0.19783000664283;
ee.refV = 0.46831999493879;
ee.kappa = 903.2962962;
ee.epsilon = 0.0088564516;
ee.m_r0 = 3.240969941904521;
ee.m_r1 = -1.537383177570093;
ee.m_r2 = -0.498610760293;
ee.m_g0 = -0.96924363628087;
ee.m_g1 = 1.87596750150772;
ee.m_g2 = 0.041555057407175;
ee.m_b0 = 0.055630079696993;
ee.m_b1 = -0.20397695888897;
ee.m_b2 = 1.056971514242878;
var he = new ee();
function au(e, t, r) {
  return (
    (he.rgb_r = e / 255),
    (he.rgb_g = t / 255),
    (he.rgb_b = r / 255),
    he.rgbToHsluv(),
    { h: he.hsluv_h, s: he.hsluv_s, l: he.hsluv_l }
  );
}
function su(e, t, r, o = 1) {
  return (
    (he.hsluv_h = e),
    (he.hsluv_s = t),
    (he.hsluv_l = r),
    he.hsluvToRgb(),
    { r: he.rgb_r * 255, g: he.rgb_g * 255, b: he.rgb_b * 255, a: o }
  );
}
function Gt(e, t, r, o) {
  let n = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(r * 100);
  return o === void 0 || o === 1
    ? "hsv(" + n + ", " + i + "%, " + a + "%)"
    : "hsva(" + n + ", " + i + "%, " + a + "%, " + o + ")";
}
function lu(e, t, r) {
  return {
    r: lt(e) ? fe(e, 255) * 255 : 0,
    g: lt(t) ? fe(t, 255) * 255 : 0,
    b: lt(r) ? fe(r, 255) * 255 : 0,
  };
}
function Di(e, t, r, o) {
  let n = [
    Ii(Math.round(e).toString(16)),
    Ii(Math.round(t).toString(16)),
    Ii(Math.round(r).toString(16)),
  ];
  return o &&
    n[0].charAt(0) === n[0].charAt(1) &&
    n[1].charAt(0) === n[1].charAt(1) &&
    n[2].charAt(0) === n[2].charAt(1)
    ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
    : n.join("");
}
function jt(e, t, r) {
  let o,
    n,
    i = fe(e, 255),
    a = fe(t, 255),
    s = fe(r, 255),
    l = Math.max(i, a, s),
    u = Math.min(i, a, s),
    c = (n = o = (l + u) / 2);
  if (l === u) c = n = 0;
  else {
    let m = l - u;
    switch (((n = o > 0.5 ? m / (2 - l - u) : m / (l + u)), l)) {
      case i:
        c = (a - s) / m + (a < s ? 6 : 0);
        break;
      case a:
        c = (s - i) / m + 2;
        break;
      case s:
        c = (i - a) / m + 4;
        break;
    }
    c /= 6;
  }
  return { h: c * 360, s: n, l: o };
}
function Pi(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
  );
}
function uu(e, t, r) {
  let o, n, i;
  if (((e = fe(e, 360)), (t = fe(t * 100, 100)), (r = fe(r * 100, 100)), t === 0)) o = n = i = r;
  else {
    let a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      s = 2 * r - a;
    ((o = Pi(s, a, e + 1 / 3)), (n = Pi(s, a, e)), (i = Pi(s, a, e - 1 / 3)));
  }
  return { r: o * 255, g: n * 255, b: i * 255 };
}
function wi(e, t, r) {
  ((e = fe(e, 255)), (t = fe(t, 255)), (r = fe(r, 255)));
  let o = Math.max(e, t, r),
    n = Math.min(e, t, r),
    i = o - n,
    a = 0,
    s = o === 0 ? 0 : i / o,
    l = o;
  if (o === n) a = 0;
  else {
    switch (o) {
      case e:
        a = (t - r) / i + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / i + 2;
        break;
      case r:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: l };
}
function du(e, t, r) {
  ((e = fe(e, 360) * 6), (t = fe(t * 100, 100)), (r = fe(r * 100, 100)));
  let o = Math.floor(e),
    n = e - o,
    i = r * (1 - t),
    a = r * (1 - n * t),
    s = r * (1 - (1 - n) * t),
    l = o % 6,
    u = [r, a, i, i, s, r][l],
    c = [s, r, r, a, i, i][l],
    m = [i, i, s, r, r, a][l];
  return { r: u * 255, g: c * 255, b: m * 255 };
}
function fe(e, t) {
  let r, o;
  if ((typeof t == "string" ? (r = parseFloat(t)) : (r = t), typeof e == "string")) {
    _y(e) && (e = "100%");
    let n = $y(e);
    ((o = Math.min(r, Math.max(0, parseFloat(e)))), n && (o = Math.floor(o * r) / 100));
  } else o = e;
  return Math.abs(o - r) < 1e-6 ? 1 : (o % r) / r;
}
function _y(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function $y(e) {
  return typeof e == "string" && e.includes("%");
}
function Ii(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var He = (() => {
  let r = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + "[-\\+]?\\d+%?" + ")",
    o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?",
    n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + o),
    rgba: new RegExp("rgba" + n),
    hsl: new RegExp("hsl" + o),
    hsla: new RegExp("hsla" + n),
    hsv: new RegExp("hsv" + o),
    hsva: new RegExp("hsva" + n),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function Nr(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    r = e.replace(t, "").trimEnd().toLowerCase(),
    o = kr[r];
  if ((o && (r = o), r === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let n;
  return (n = He.rgb.exec(r))
    ? {
        r: parseInt(n[1] ?? ""),
        g: parseInt(n[2] ?? ""),
        b: parseInt(n[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (n = He.rgba.exec(r))
      ? {
          r: parseInt(n[1] ?? ""),
          g: parseInt(n[2] ?? ""),
          b: parseInt(n[3] ?? ""),
          a: parseFloat(n[4] ?? ""),
          format: "rgb",
        }
      : (n = He.hsl.exec(r))
        ? { h: parseInt(n[1] ?? ""), s: Ze(n[2] ?? ""), l: Ze(n[3] ?? ""), a: 1, format: "hsl" }
        : (n = He.hsla.exec(r))
          ? {
              h: parseInt(n[1] ?? ""),
              s: Ze(n[2] ?? ""),
              l: Ze(n[3] ?? ""),
              a: parseFloat(n[4] ?? ""),
              format: "hsl",
            }
          : (n = He.hsv.exec(r))
            ? { h: parseInt(n[1] ?? ""), s: Ze(n[2] ?? ""), v: Ze(n[3] ?? ""), a: 1, format: "hsv" }
            : (n = He.hsva.exec(r))
              ? {
                  h: parseInt(n[1] ?? ""),
                  s: Ze(n[2] ?? ""),
                  v: Ze(n[3] ?? ""),
                  a: parseFloat(n[4] ?? ""),
                  format: "hsv",
                }
              : (n = He.hex8.exec(r))
                ? {
                    r: Se(n[1] ?? ""),
                    g: Se(n[2] ?? ""),
                    b: Se(n[3] ?? ""),
                    a: iu(n[4] ?? ""),
                    format: o ? "name" : "hex",
                  }
                : (n = He.hex6.exec(r))
                  ? {
                      r: Se(n[1] ?? ""),
                      g: Se(n[2] ?? ""),
                      b: Se(n[3] ?? ""),
                      a: 1,
                      format: o ? "name" : "hex",
                    }
                  : (n = He.hex4.exec(r))
                    ? {
                        r: Se(`${n[1]}${n[1]}`),
                        g: Se(`${n[2]}${n[2]}`),
                        b: Se(`${n[3]}${n[3]}`),
                        a: iu(n[4] + "" + n[4]),
                        format: o ? "name" : "hex",
                      }
                    : (n = He.hex3.exec(r))
                      ? {
                          r: Se(`${n[1]}${n[1]}`),
                          g: Se(`${n[2]}${n[2]}`),
                          b: Se(`${n[3]}${n[3]}`),
                          a: 1,
                          format: o ? "name" : "hex",
                        }
                      : !1;
}
function Se(e) {
  return parseInt(e, 16);
}
function iu(e) {
  return Se(e) / 255;
}
var Ky =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function cu(e) {
  let t = Ky.exec(e);
  if (!t) return null;
  let { r = "0", g: o = "0", b: n = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(r), g: parseFloat(o), b: parseFloat(n), a: i ? parseFloat(i) : 1 };
}
function Li(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function pu({ r: e, g: t, b: r, a: o }) {
  return { r: Li(e), g: Li(t), b: Li(r), a: o };
}
function Mi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function fu({ r: e, g: t, b: r, a: o }) {
  return { r: Mi(e), g: Mi(t), b: Mi(r), a: o };
}
var Uy = (e) => {
    let { r: t, g: r, b: o, a: n } = pu(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * r + 0.1982172852343625 * o,
      y: 0.2289745640697487 * t + 0.6917385218365062 * r + 0.079286914093745 * o,
      z: 0 * t + 0.0451133818589026 * r + 1.043944368900976 * o,
      a: n,
    };
  },
  qy = ({ x: e = 0, y: t = 0, z: r = 0, a: o = 1 }) =>
    fu({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * r,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * r,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * r,
      a: o,
    }),
  Xy = (e) => {
    let { r: t, g: r, b: o, a: n } = pu(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * r + 0.1804807884018343 * o,
      y: 0.2126390058715102 * t + 0.715168678767756 * r + 0.0721923153607337 * o,
      z: 0.0193308187155918 * t + 0.119194779794626 * r + 0.9505321522496607 * o,
      a: n,
    };
  },
  Yy = ({ x: e = 0, y: t = 0, z: r = 0, a: o = 1 }) =>
    fu({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * r,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * r,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * r,
      a: o,
    });
function mu({ r: e, g: t, b: r, a: o }) {
  let n = Math.max(e, t, r),
    i = Math.min(e, t, r),
    a = { h: 0, s: n === 0 ? 0 : 1 - i / n, v: n, a: o };
  return (
    n - i !== 0 &&
      (a.h =
        (n === e
          ? (t - r) / (n - i) + (t < r ? 6 : 0)
          : n === t
            ? (r - e) / (n - i) + 2
            : (e - t) / (n - i) + 4) * 60),
    a
  );
}
function Jy(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Ei({ h: e = 0, s: t = 0, v: r = 0, a: o = 1 }) {
  let n = Jy(e),
    i = Math.abs(((n / 60) % 2) - 1);
  switch (Math.floor(n / 60)) {
    case 0:
      return { r, g: r * (1 - t * i), b: r * (1 - t), a: o };
    case 1:
      return { r: r * (1 - t * i), g: r, b: r * (1 - t), a: o };
    case 2:
      return { r: r * (1 - t), g: r, b: r * (1 - t * i), a: o };
    case 3:
      return { r: r * (1 - t), g: r * (1 - t * i), b: r, a: o };
    case 4:
      return { r: r * (1 - t * i), g: r * (1 - t), b: r, a: o };
    case 5:
      return { r, g: r * (1 - t), b: r * (1 - t * i), a: o };
    default:
      return { r: r * (1 - t), g: r * (1 - t), b: r * (1 - t), a: o };
  }
}
function Bi(e) {
  return Yy(Xy(e));
}
function yu(e) {
  return qy(Uy(e));
}
var xt = class e {
  format = "p3";
  r;
  g;
  b;
  a;
  constructor(t) {
    ((this.r = t.r ?? 0), (this.g = t.g ?? 0), (this.b = t.b ?? 0), (this.a = t.a ?? 1));
  }
  hsv() {
    return mu(this);
  }
  rgb() {
    return yu(this);
  }
  hsl() {
    return jt(this.r, this.g, this.b);
  }
  toString(t = "p3", r) {
    switch (t) {
      case "p3": {
        let o = r?.r ?? this.r,
          n = r?.g ?? this.g,
          i = r?.b ?? this.b,
          a = r?.a ?? this.a;
        return a === 1
          ? `color(display-p3 ${o} ${n} ${i})`
          : `color(display-p3 ${o} ${n} ${i} / ${a})`;
      }
      case "srgb": {
        let o = this.rgb(),
          n = Math.round(Math.max(0, Math.min(o.r, 1)) * 100) / 100,
          i = Math.round(Math.max(0, Math.min(o.g, 1)) * 100) / 100,
          a = Math.round(Math.max(0, Math.min(o.b, 1)) * 100) / 100,
          s = r?.r ?? n * 255,
          l = r?.g ?? i * 255,
          u = r?.b ?? a * 255,
          c = r?.a ?? o.a ?? 1;
        return c === 1 ? `rgb(${s}, ${l}, ${u})` : `rgba(${s}, ${l}, ${u}, ${c})`;
      }
    }
  }
  static isP3String(t) {
    return t.startsWith("color(display-p3");
  }
  static fromHSV(t, r = "p3") {
    switch (r) {
      case "p3":
        return new e(Ei(t));
      case "srgb":
        return new e(Bi(Ei(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Bi({
        r: Math.round((t.r / 255) * 1e4) / 1e4,
        g: Math.round((t.g / 255) * 1e4) / 1e4,
        b: Math.round((t.b / 255) * 1e4) / 1e4,
        a: t.a ?? 1,
      })
    );
  }
  static fromRGBString(t) {
    let r = g(t);
    if (r) return e.fromRGB(r);
  }
  static fromString(t) {
    if (!e.isP3String(t)) return;
    let r = cu(t);
    if (r) return new e({ r: r.r, g: r.g, b: r.b, a: r.a });
  }
  static srgbFromValue(t) {
    if (!ue(t) || !g.isP3String(t)) return t;
    let r = e.fromString(t);
    return r ? r.toString("srgb") : t;
  }
  static multiplyAlpha(t, r) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * r });
  }
};
function II(e) {
  return xt.srgbFromValue(e);
}
var hu = new Map(),
  g = (() => {
    function e(n, i, a, s) {
      if (typeof n == "string") {
        let u = hu.get(n);
        return u || ((u = t(n)), u === void 0 ? { ...e("black"), isValid: !1 } : (hu.set(n, u), u));
      }
      let l = t(n, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(n, i, a, s) {
      if (n === "") return;
      let l = Zy(n, i, a, s);
      if (l) {
        let u = {
          r: l.r,
          g: l.g,
          b: l.b,
          a: l.a,
          h: l.h,
          s: l.s,
          l: l.l,
          initialValue: typeof n == "string" && l.format !== "hsv" ? n : void 0,
          roundA: Math.round(100 * l.a) / 100,
          format: l.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let r = {
      isRGB(n) {
        return n === "rgb" || n === "rgba";
      },
      isHSL(n) {
        return n === "hsl" || n === "hsla";
      },
    };
    ((e.inspect = (n, i) =>
      n.format === "hsl"
        ? `<${n.constructor.name} h:${n.h} s:${n.s} l:${n.l} a:${n.a}>`
        : n.format === "hex" || n.format === "name"
          ? `<${n.constructor.name} "${i}">`
          : `<${n.constructor.name} r:${n.r} g:${n.g} b:${n.b} a:${n.a}>`),
      (e.isColor = (n) => (typeof n == "string" ? e.isColorString(n) : e.isColorObject(n))),
      (e.isColorString = (n) => (typeof n == "string" ? Nr(n) !== !1 : !1)),
      (e.isColorObject = (n) =>
        re(n) &&
        typeof n.r == "number" &&
        typeof n.g == "number" &&
        typeof n.b == "number" &&
        typeof n.h == "number" &&
        typeof n.s == "number" &&
        typeof n.l == "number" &&
        typeof n.a == "number" &&
        typeof n.roundA == "number" &&
        typeof n.format == "string"),
      (e.toString = (n) => e.toRgbString(n)),
      (e.toHex = (n, i = !1) => Di(n.r, n.g, n.b, i)),
      (e.toHexString = (n, i = !1) => `#${e.toHex(n, i)}`),
      (e.isP3String = (n) => (typeof n != "string" ? !1 : xt.isP3String(n))),
      (e.toRgbString = (n) =>
        n.a === 1
          ? "rgb(" + Math.round(n.r) + ", " + Math.round(n.g) + ", " + Math.round(n.b) + ")"
          : "rgba(" +
            Math.round(n.r) +
            ", " +
            Math.round(n.g) +
            ", " +
            Math.round(n.b) +
            ", " +
            n.roundA +
            ")"),
      (e.toHusl = (n) => ({ ...au(n.r, n.g, n.b), a: n.roundA })),
      (e.toHslString = (n) => {
        let i = e.toHsl(n),
          a = Math.round(i.h),
          s = Math.round(i.s * 100),
          l = Math.round(i.l * 100);
        return n.a === 1
          ? "hsl(" + a + ", " + s + "%, " + l + "%)"
          : "hsla(" + a + ", " + s + "%, " + l + "%, " + n.roundA + ")";
      }),
      (e.toHsv = (n) => {
        let i = wi(n.r, n.g, n.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: n.a };
      }),
      (e.toHsvString = (n) => {
        let i = wi(n.r, n.g, n.b),
          a = Math.round(i.h * 360),
          s = Math.round(i.s * 100),
          l = Math.round(i.v * 100);
        return n.a === 1
          ? "hsv(" + a + ", " + s + "%, " + l + "%)"
          : "hsva(" + a + ", " + s + "%, " + l + "%, " + n.roundA + ")";
      }),
      (e.toName = (n) => {
        if (n.a === 0) return "transparent";
        if (n.a < 1) return !1;
        let i = Di(n.r, n.g, n.b, !0);
        for (let a of Object.keys(kr)) if (kr[a] === i) return a;
        return !1;
      }),
      (e.toHsl = (n) => ({ h: Math.round(n.h), s: n.s, l: n.l, a: n.a })),
      (e.toRgb = (n) => ({ r: Math.round(n.r), g: Math.round(n.g), b: Math.round(n.b), a: n.a })),
      (e.brighten = (n, i = 10) => {
        let a = e.toRgb(n);
        return (
          (a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(i / 100))))),
          (a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(i / 100))))),
          (a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(i / 100))))),
          e(a)
        );
      }),
      (e.lighten = (n, i = 10) => {
        let a = e.toHsl(n);
        return ((a.l += i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.darken = (n, i = 10) => {
        let a = e.toHsl(n);
        return ((a.l -= i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.saturate = (n, i = 10) => {
        let a = e.toHsl(n);
        return ((a.s += i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.desaturate = (n, i = 10) => {
        let a = e.toHsl(n);
        return ((a.s -= i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.grayscale = (n) => e.desaturate(n, 100)),
      (e.hueRotate = (n, i) => {
        let a = e.toHsl(n);
        return ((a.h += i), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a));
      }),
      (e.alpha = (n, i = 1) => e({ r: n.r, g: n.g, b: n.b, a: i })),
      (e.transparent = (n) => e.alpha(n, 0)),
      (e.multiplyAlpha = (n, i = 1) => e({ r: n.r, g: n.g, b: n.b, a: n.a * i })),
      (e.alphaComposite = (n, i) => {
        if (n.a === 1) return n;
        if (i.a < 1)
          throw new Error(
            "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
          );
        return n.a === 0
          ? i
          : e({
              r: Math.round(n.r * n.a + i.r * (1 - n.a)),
              g: Math.round(n.g * n.a + i.g * (1 - n.a)),
              b: Math.round(n.b * n.a + i.b * (1 - n.a)),
              a: 1,
            });
      }),
      (e.interpolate = (n, i, a = "rgb") => {
        if (!e.isColorObject(n) || !e.isColorObject(i))
          throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return (s) => e.mixAsColor(n, i, s, !1, a);
      }),
      (e.mix = (n, i, { model: a = "rgb" } = {}) => {
        let s = typeof n == "string" ? e(n) : n,
          l = e.interpolate(s, i, a);
        return (u) => e.toRgbString(l(u));
      }),
      (e.mixAsColor = (n, i, a = 0.5, s = !1, l = "rgb") => {
        let u = null;
        if (r.isRGB(l))
          u = e({
            r: Je(a, [0, 1], [n.r, i.r], s),
            g: Je(a, [0, 1], [n.g, i.g], s),
            b: Je(a, [0, 1], [n.b, i.b], s),
            a: Je(a, [0, 1], [n.a, i.a], s),
          });
        else {
          let c, m;
          (r.isHSL(l)
            ? ((c = e.toHsl(n)), (m = e.toHsl(i)))
            : ((c = e.toHusl(n)), (m = e.toHusl(i))),
            c.s === 0 ? (c.h = m.h) : m.s === 0 && (m.h = c.h));
          let f = c.h,
            h = m.h,
            C = h - f;
          C > 180 ? (C = h - 360 - f) : C < -180 && (C = h + 360 - f);
          let S = {
            h: Je(a, [0, 1], [f, f + C], s),
            s: Je(a, [0, 1], [c.s, m.s], s),
            l: Je(a, [0, 1], [c.l, m.l], s),
            a: Je(a, [0, 1], [n.a, i.a], s),
          };
          r.isHSL(l) ? (u = e(S)) : (u = e(su(S.h, S.s, S.l, S.a)));
        }
        return u;
      }),
      (e.random = (n = 1) => {
        function i() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + i() + ", " + i() + ", " + i() + ", " + n + ")");
      }),
      (e.grey = (n = 0.5, i = 1) => (
        (n = Math.floor(n * 255)),
        e("rgba(" + n + ", " + n + ", " + n + ", " + i + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (n, i, a) => jt(n, i, a)),
      (e.isValidColorProperty = (n, i) =>
        !!(
          (n.toLowerCase().slice(-5) === "color" || n === "fill" || n === "stroke") &&
          typeof i == "string" &&
          e.isColorString(i)
        )),
      (e.difference = (n, i) => {
        let a = (n.r + i.r) / 2,
          s = n.r - i.r,
          l = n.g - i.g,
          u = n.b - i.b,
          c = s ** 2,
          m = l ** 2,
          f = u ** 2;
        return Math.sqrt(2 * c + 4 * m + 3 * f + (a * (c - f)) / 256);
      }),
      (e.equal = (n, i, a = 0.1) =>
        !(
          Math.abs(n.r - i.r) >= a ||
          Math.abs(n.g - i.g) >= a ||
          Math.abs(n.b - i.b) >= a ||
          Math.abs(n.a - i.a) * 256 >= a
        )));
    function o(n) {
      n /= 255;
      let i = Math.abs(n);
      return i < 0.04045 ? n / 12.92 : (Math.sign(n) || 1) * ((i + 0.055) / 1.055) ** 2.4;
    }
    return (
      (e.luminance = (n) => {
        let { r: i, g: a, b: s } = e.toRgb(n);
        return 0.2126 * o(i) + 0.7152 * o(a) + 0.0722 * o(s);
      }),
      (e.contrast = (n, i) => {
        let a = e.luminance(n),
          s = e.luminance(i);
        return (Math.max(a, s) + 0.05) / (Math.min(a, s) + 0.05);
      }),
      e
    );
  })();
function Zy(e, t, r, o = 1) {
  let n;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof r == "number" &&
    !Number.isNaN(r)
      ? (n = Ai({ r: e, g: t, b: r, a: o }))
      : typeof e == "string"
        ? (n = Qy(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (n = Ai(e))
            : (n = xu(e))),
    n
  );
}
function Qy(e) {
  let t = Nr(e);
  if (t) return t.format === "hsl" ? xu(t) : t.format === "hsv" ? eh(t) : Ai(t);
}
function eh(e) {
  let t = du(e.h, e.s, e.v);
  return { ...jt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? gu(e.a) : 1 };
}
function Ai(e) {
  let t = lu(e.r, e.g, e.b);
  return { ...jt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? gu(e.a) : 1 };
}
function xu(e) {
  let t,
    r,
    o,
    n = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = lt(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (r = lt(e.s) ? e.s : 1),
    typeof e.s == "string" && (r = Co(e.s)),
    (o = lt(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (o = Co(e.l)),
    (n = uu(t, r, o)),
    (i = { h: t, s: r, l: o }),
    { ...n, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function gu(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function So(e) {
  if (!ue(e) || e.charAt(e.length - 1) !== "%") return !1;
  let r = e.slice(0, -1),
    o = parseFloat(r);
  return Ke(o);
}
function LI(e) {
  let t = e.slice(0, -1),
    r = parseFloat(t);
  return Ke(r) ? r : 50;
}
var Pr = Symbol("Not Found");
function Vo(e) {
  return e === Pr;
}
function bu(e) {
  return e !== Pr;
}
function Fi(e) {
  return bu(e) && !wt(e);
}
function BI(e) {
  return bu(e) && e !== void 0;
}
function AI(e) {
  return Fi(e) && e !== void 0;
}
function th(e, t) {
  return O(e) ? !$l(e, t) : e !== t;
}
function Tu(e, t, r, o) {
  let n = t[e];
  if (wt(n)) return;
  let i = r[e],
    a = o ? o(i) : i;
  Vo(n) ? (t[e] = a) : th(a, n) && (t[e] = fr);
}
var _I = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  rh = "codeComponentIdentifier";
function vo(e) {
  return e.hasProp(rh);
}
function $I(e, t) {
  !vo(e) ||
    !De(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    Tu("dynamicVectorSetIdentifier", t, e));
}
var Ro = ((P) => (
    (P.scroll = "framer/Scroll"),
    (P.page = "framer/Page"),
    (P.stack = "framer/Stack"),
    (P.prototype = "framer/Prototype"),
    (P.device = "__builtin/Device"),
    (P.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (P.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (P.navigationAction = "framer/useNavigate"),
    (P.openURLAction = "framer/useOpenURL"),
    (P.consoleLogAction = "framer/useLog"),
    (P.setVariantAction = "framer/useSetVariant"),
    (P.triggerEventAction = "framer/useTriggerEvent"),
    (P.showOverlayAction = "framer/useShowOverlay"),
    (P.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (P.loadMoreAction = "framer/useLoadMore"),
    (P.carouselNavigationAction = "framer/useCarouselNavigation"),
    (P.goToCarouselPageAction = "framer/useGoToCarouselPage"),
    (P.dismissOverlayAction = "framer/useDismissOverlay"),
    (P.setLocaleAction = "framer/useSetLocale"),
    (P.setVariableValueAction = "framer/useSetVariableValue"),
    (P.resetVariableValuesAction = "framer/useResetVariableValues"),
    P
  ))(Ro || {}),
  oh = new Set(Object.values(Ro)),
  UI = new Set(Object.values(Ro).filter((e) => e !== "framer/Prototype"));
function qI(e) {
  return oh.has(e);
}
var nh = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function gt(e) {
  return yl(e) || so(e) ? !1 : !vo(e) || ih(e);
}
function QI(e) {
  return vo(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function ih(e) {
  return nh.has(e.codeComponentIdentifier);
}
var ah = "fillOpacity";
function uD(e) {
  return ah in e;
}
var dD = { fillOpacity: void 0 },
  sh = "fillType",
  lh = "fillEnabled",
  uh = "supportsGradient",
  dh = "fillImageLocalized";
function _t(e) {
  return sh in e && gt(e);
}
function Oi(e) {
  return lh in e && gt(e);
}
function cD(e) {
  return _t(e) ? (Oi(e) ? !!e.fillEnabled : !0) : !1;
}
function pD(e) {
  return dh in e;
}
function ch(e) {
  return uh in e && gt(e);
}
function Cu(e) {
  return gt(e) ? (ch(e) ? e.supportsGradient() : _t(e)) : !1;
}
function ph(e) {
  return Ye(e) || Cu(e);
}
function fD(e) {
  return ph(e) && !(mt(e) || ao(e) || pl(e));
}
function Su(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function mD(e) {
  return Cu(e) ? Su(e.fillType) : e.getFills().filter(Boolean).length;
}
function yD(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function hD(e) {
  return _t(e) && So(e.fillImagePositionX) && So(e.fillImagePositionY);
}
function Vu(e) {
  return Oi(e) && !e.fillEnabled ? !1 : _t(e) && e.fillType === "image";
}
function fh(e) {
  if (!e.fillType) return !1;
  switch (e.fillType) {
    case "color": {
      let t = e.resolveValue("fillColor");
      return t ? g(t).a === 0 : !1;
    }
    case "linear-gradient":
      return e.fillLinearGradient ? e.fillLinearGradient.alpha === 0 : !1;
    case "radial-gradient":
      return e.fillRadialGradient ? e.fillRadialGradient.alpha === 0 : !1;
    case "conic-gradient":
      return e.fillConicGradient ? e.fillConicGradient.alpha === 0 : !1;
    case "image":
      return !1;
    default:
      L(e.fillType);
  }
}
function xD(e) {
  return !_t(e) || (Oi(e) && !e.fillEnabled) ? !1 : !fh(e);
}
function gD(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function mh(e) {
  return !e || !_t(e) ? !1 : Su(e.fillType);
}
function bD(e) {
  if (mh(e) && !k(e.fillType))
    switch (e.fillType) {
      case "image":
      case "color":
        return;
      case "linear-gradient": {
        let t = e.fillLinearGradient?.stops.length;
        if (!t) return;
        let r = e.fillLinearGradient?.angle;
        return k(r) ? void 0 : { stops: t, info: { type: e.fillType, angle: r } };
      }
      case "radial-gradient": {
        let t = e.fillRadialGradient?.stops.length;
        return t ? { stops: t, info: { type: e.fillType, angle: 0 } } : void 0;
      }
      case "conic-gradient": {
        let t = e.fillConicGradient?.stops.length;
        if (!t) return;
        let r = e.fillLinearGradient?.angle;
        return k(r) ? void 0 : { stops: t, info: { type: e.fillType, angle: r } };
      }
      default:
        L(e.fillType);
    }
}
function TD(e, t, r) {
  let o = r === "conic-gradient" ? 360 : 100,
    n = r === "conic-gradient" ? "deg" : "%";
  return Rr.join(
    Array.from({ length: e }).map((i, a) => Rr`${t} ${Math.round((a / (e - 1)) * o)}${n}`),
    ", "
  );
}
var yh = ["left", "center", "right"],
  hh = new Set(yh),
  xh = ["top", "center", "bottom"],
  gh = new Set(xh);
function CD(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && gh.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && hh.has(e))
      ? !0
      : So(e)
    : !1;
}
var Wi = class {},
  zi = class extends Wi {},
  Ge = class extends zi {
    childIds = [];
    childById = new Map();
    constructor(t) {
      if ((super(), t)) for (let r of t) this.push(r);
    }
    get length() {
      return this.childIds.length;
    }
    at(t) {
      let r = this.childIds.at(t);
      if (r) return this.childById.get(r);
    }
    indexOf(t) {
      return this.findIndex((r) => r === t);
    }
    some(t) {
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        if (t(n, r)) return !0;
      }
      return !1;
    }
    every(t) {
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        if (!t(n, r)) return !1;
      }
      return !0;
    }
    forEach(t) {
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        t(n, r);
      }
    }
    map(t) {
      let r = Array(this.childIds.length);
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          i = this.childById.get(n);
        r[o] = t(i, o);
      }
      return r;
    }
    reduce(t, r) {
      let o = r;
      for (let n = 0; n < this.childIds.length; n++) {
        let i = this.childIds[n],
          a = this.childById.get(i);
        o = t(o, a, n);
      }
      return o;
    }
    filter(t) {
      let r = [];
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          i = this.childById.get(n);
        t(i, o) && r.push(i);
      }
      return r;
    }
    sort(t) {
      let r = this.toArray().sort(t);
      for (let o = 0; o < r.length; o++) this.childIds[o] = r[o].id;
    }
    find(t) {
      let r = this.findIndex(t);
      if (r !== -1) return this.at(r);
    }
    findIndex(t) {
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        if (t(n, r)) return r;
      }
      return -1;
    }
    findLast(t) {
      let r = this.findLastIndex(t);
      if (r !== -1) return this.at(r);
    }
    findLastIndex(t) {
      for (let r = this.childIds.length - 1; r >= 0; r--) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        if (t(n, r)) return r;
      }
      return -1;
    }
    slice(t, r) {
      let o = this.childIds.slice(t, r),
        n = Array(o.length);
      for (let i = 0; i < o.length; i++) {
        let a = o[i],
          s = this.childById.get(a);
        n[i] = s;
      }
      return n;
    }
    splice(t, r = 1 / 0, ...o) {
      let n = o.map((a) => a.id),
        i = this.childIds.splice(t, r, ...n);
      for (let a of i) this.childById.delete(a);
      for (let a of o) this.childById.set(a.id, a);
    }
    push(...t) {
      for (let r of t) (this.childIds.push(r.id), this.childById.set(r.id, r));
    }
    swap(t) {
      this.childById.has(t.id) && this.childById.set(t.id, t);
    }
    toArray() {
      let t = Array(this.childIds.length);
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          n = this.childById.get(o);
        t[r] = n;
      }
      return t;
    }
    *[Symbol.iterator]() {
      for (let t = 0; t < this.childIds.length; t++) {
        let r = this.childIds[t];
        yield this.childById.get(r);
      }
    }
  };
var bh = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  aac: "audio/aac",
  ac: "application/pkix-attr-cert",
  adp: "audio/adpcm",
  adts: "audio/aac",
  ai: "application/postscript",
  aml: "application/automationml-aml+xml",
  amlx: "application/automationml-amlx+zip",
  amr: "audio/amr",
  apng: "image/apng",
  appcache: "text/cache-manifest",
  appinstaller: "application/appinstaller",
  appx: "application/appx",
  appxbundle: "application/appxbundle",
  asc: "application/pgp-keys",
  atom: "application/atom+xml",
  atomcat: "application/atomcat+xml",
  atomdeleted: "application/atomdeleted+xml",
  atomsvc: "application/atomsvc+xml",
  au: "audio/basic",
  avci: "image/avci",
  avcs: "image/avcs",
  avif: "image/avif",
  aw: "application/applixware",
  bdoc: "application/bdoc",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  bpk: "application/octet-stream",
  btf: "image/prs.btif",
  btif: "image/prs.btif",
  buffer: "application/octet-stream",
  ccxml: "application/ccxml+xml",
  cdfx: "application/cdfx+xml",
  cdmia: "application/cdmi-capability",
  cdmic: "application/cdmi-container",
  cdmid: "application/cdmi-domain",
  cdmio: "application/cdmi-object",
  cdmiq: "application/cdmi-queue",
  cer: "application/pkix-cert",
  cgm: "image/cgm",
  cjs: "application/node",
  class: "application/java-vm",
  coffee: "text/coffeescript",
  conf: "text/plain",
  cpl: "application/cpl+xml",
  cpt: "application/mac-compactpro",
  crl: "application/pkix-crl",
  css: "text/css",
  csv: "text/csv",
  cu: "application/cu-seeme",
  cwl: "application/cwl",
  cww: "application/prs.cww",
  davmount: "application/davmount+xml",
  dbk: "application/docbook+xml",
  deb: "application/octet-stream",
  def: "text/plain",
  deploy: "application/octet-stream",
  dib: "image/bmp",
  "disposition-notification": "message/disposition-notification",
  dist: "application/octet-stream",
  distz: "application/octet-stream",
  dll: "application/octet-stream",
  dmg: "application/octet-stream",
  dms: "application/octet-stream",
  doc: "application/msword",
  dot: "application/msword",
  dpx: "image/dpx",
  drle: "image/dicom-rle",
  dsc: "text/prs.lines.tag",
  dssc: "application/dssc+der",
  dtd: "application/xml-dtd",
  dump: "application/octet-stream",
  dwd: "application/atsc-dwd+xml",
  ear: "application/java-archive",
  ecma: "application/ecmascript",
  elc: "application/octet-stream",
  emf: "image/emf",
  eml: "message/rfc822",
  emma: "application/emma+xml",
  emotionml: "application/emotionml+xml",
  eps: "application/postscript",
  epub: "application/epub+zip",
  exe: "application/octet-stream",
  exi: "application/exi",
  exp: "application/express",
  exr: "image/aces",
  ez: "application/andrew-inset",
  fdf: "application/fdf",
  fdt: "application/fdt+xml",
  fits: "image/fits",
  g3: "image/g3fax",
  gbr: "application/rpki-ghostbusters",
  geojson: "application/geo+json",
  gif: "image/gif",
  glb: "model/gltf-binary",
  gltf: "model/gltf+json",
  gml: "application/gml+xml",
  gpx: "application/gpx+xml",
  gram: "application/srgs",
  grxml: "application/srgs+xml",
  gxf: "application/gxf",
  gz: "application/gzip",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  held: "application/atsc-held+xml",
  hjson: "application/hjson",
  hlp: "application/winhlp",
  hqx: "application/mac-binhex40",
  hsj2: "image/hsj2",
  htm: "text/html",
  html: "text/html",
  ics: "text/calendar",
  ief: "image/ief",
  ifb: "text/calendar",
  iges: "model/iges",
  igs: "model/iges",
  img: "application/octet-stream",
  in: "text/plain",
  ini: "text/plain",
  ink: "application/inkml+xml",
  inkml: "application/inkml+xml",
  ipfix: "application/ipfix",
  iso: "application/octet-stream",
  its: "application/its+xml",
  jade: "text/jade",
  jar: "application/java-archive",
  jhc: "image/jphc",
  jls: "image/jls",
  jp2: "image/jp2",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpf: "image/jpx",
  jpg: "image/jpeg",
  jpg2: "image/jp2",
  jpgm: "image/jpm",
  jpgv: "video/jpeg",
  jph: "image/jph",
  jpm: "image/jpm",
  jpx: "image/jpx",
  js: "text/javascript",
  json: "application/json",
  json5: "application/json5",
  jsonld: "application/ld+json",
  jsonml: "application/jsonml+json",
  jsx: "text/jsx",
  jt: "model/jt",
  jxl: "image/jxl",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  kar: "audio/midi",
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  less: "text/less",
  lgr: "application/lgr+xml",
  list: "text/plain",
  litcoffee: "text/coffeescript",
  log: "text/plain",
  lostxml: "application/lost+xml",
  lrf: "application/octet-stream",
  m1v: "video/mpeg",
  m21: "application/mp21",
  m2a: "audio/mpeg",
  m2t: "video/mp2t",
  m2ts: "video/mp2t",
  m2v: "video/mpeg",
  m3a: "audio/mpeg",
  m4a: "audio/mp4",
  m4p: "application/mp4",
  m4s: "video/iso.segment",
  ma: "application/mathematica",
  mads: "application/mads+xml",
  maei: "application/mmt-aei+xml",
  man: "text/troff",
  manifest: "text/cache-manifest",
  map: "application/json",
  mar: "application/octet-stream",
  markdown: "text/markdown",
  mathml: "application/mathml+xml",
  mb: "application/mathematica",
  mbox: "application/mbox",
  md: "text/markdown",
  mdx: "text/mdx",
  me: "text/troff",
  mesh: "model/mesh",
  meta4: "application/metalink4+xml",
  metalink: "application/metalink+xml",
  mets: "application/mets+xml",
  mft: "application/rpki-manifest",
  mid: "audio/midi",
  midi: "audio/midi",
  mime: "message/rfc822",
  mj2: "video/mj2",
  mjp2: "video/mj2",
  mjs: "text/javascript",
  mml: "text/mathml",
  mods: "application/mods+xml",
  mov: "video/quicktime",
  mp2: "audio/mpeg",
  mp21: "application/mp21",
  mp2a: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mp4a: "audio/mp4",
  mp4s: "application/mp4",
  mp4v: "video/mp4",
  mpd: "application/dash+xml",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpf: "application/media-policy-dataset+xml",
  mpg: "video/mpeg",
  mpg4: "video/mp4",
  mpga: "audio/mpeg",
  mpp: "application/dash-patch+xml",
  mrc: "application/marc",
  mrcx: "application/marcxml+xml",
  ms: "text/troff",
  mscml: "application/mediaservercontrol+xml",
  msh: "model/mesh",
  msi: "application/octet-stream",
  msix: "application/msix",
  msixbundle: "application/msixbundle",
  msm: "application/octet-stream",
  msp: "application/octet-stream",
  mtl: "model/mtl",
  mts: "video/mp2t",
  musd: "application/mmt-usd+xml",
  mxf: "application/mxf",
  mxmf: "audio/mobile-xmf",
  mxml: "application/xv+xml",
  n3: "text/n3",
  nb: "application/mathematica",
  nq: "application/n-quads",
  nt: "application/n-triples",
  obj: "model/obj",
  oda: "application/oda",
  oga: "audio/ogg",
  ogg: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  omdoc: "application/omdoc+xml",
  onepkg: "application/onenote",
  onetmp: "application/onenote",
  onetoc: "application/onenote",
  onetoc2: "application/onenote",
  opf: "application/oebps-package+xml",
  opus: "audio/ogg",
  otf: "font/otf",
  owl: "application/rdf+xml",
  oxps: "application/oxps",
  p10: "application/pkcs10",
  p7c: "application/pkcs7-mime",
  p7m: "application/pkcs7-mime",
  p7s: "application/pkcs7-signature",
  p8: "application/pkcs8",
  pdf: "application/pdf",
  pfr: "application/font-tdpfr",
  pgp: "application/pgp-encrypted",
  pkg: "application/octet-stream",
  pki: "application/pkixcmp",
  pkipath: "application/pkix-pkipath",
  pls: "application/pls+xml",
  png: "image/png",
  prc: "model/prc",
  prf: "application/pics-rules",
  provx: "application/provenance+xml",
  ps: "application/postscript",
  pskcxml: "application/pskc+xml",
  pti: "image/prs.pti",
  qt: "video/quicktime",
  raml: "application/raml+yaml",
  rapd: "application/route-apd+xml",
  rdf: "application/rdf+xml",
  relo: "application/p2p-overlay+xml",
  rif: "application/reginfo+xml",
  rl: "application/resource-lists+xml",
  rld: "application/resource-lists-diff+xml",
  rmi: "audio/midi",
  rnc: "application/relax-ng-compact-syntax",
  rng: "application/xml",
  roa: "application/rpki-roa",
  roff: "text/troff",
  rq: "application/sparql-query",
  rs: "application/rls-services+xml",
  rsat: "application/atsc-rsat+xml",
  rsd: "application/rsd+xml",
  rsheet: "application/urc-ressheet+xml",
  rss: "application/rss+xml",
  rtf: "text/rtf",
  rtx: "text/richtext",
  rusd: "application/route-usd+xml",
  s3m: "audio/s3m",
  sbml: "application/sbml+xml",
  scq: "application/scvp-cv-request",
  scs: "application/scvp-cv-response",
  sdp: "application/sdp",
  senmlx: "application/senml+xml",
  sensmlx: "application/sensml+xml",
  ser: "application/java-serialized-object",
  setpay: "application/set-payment-initiation",
  setreg: "application/set-registration-initiation",
  sgi: "image/sgi",
  sgm: "text/sgml",
  sgml: "text/sgml",
  shex: "text/shex",
  shf: "application/shf+xml",
  shtml: "text/html",
  sieve: "application/sieve",
  sig: "application/pgp-signature",
  sil: "audio/silk",
  silo: "model/mesh",
  siv: "application/sieve",
  slim: "text/slim",
  slm: "text/slim",
  sls: "application/route-s-tsid+xml",
  smi: "application/smil+xml",
  smil: "application/smil+xml",
  snd: "audio/basic",
  so: "application/octet-stream",
  spdx: "text/spdx",
  spp: "application/scvp-vp-response",
  spq: "application/scvp-vp-request",
  spx: "audio/ogg",
  sql: "application/sql",
  sru: "application/sru+xml",
  srx: "application/sparql-results+xml",
  ssdl: "application/ssdl+xml",
  ssml: "application/ssml+xml",
  stk: "application/hyperstudio",
  stl: "model/stl",
  stpx: "model/step+xml",
  stpxz: "model/step-xml+zip",
  stpz: "model/step+zip",
  styl: "text/stylus",
  stylus: "text/stylus",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  swidtag: "application/swid+xml",
  t: "text/troff",
  t38: "image/t38",
  td: "application/urc-targetdesc+xml",
  tei: "application/tei+xml",
  teicorpus: "application/tei+xml",
  text: "text/plain",
  tfi: "application/thraud+xml",
  tfx: "image/tiff-fx",
  tif: "image/tiff",
  tiff: "image/tiff",
  toml: "application/toml",
  tr: "text/troff",
  trig: "application/trig",
  ts: "video/mp2t",
  tsd: "application/timestamped-data",
  tsv: "text/tab-separated-values",
  ttc: "font/collection",
  ttf: "font/ttf",
  ttl: "text/turtle",
  ttml: "application/ttml+xml",
  txt: "text/plain",
  u3d: "model/u3d",
  u8dsn: "message/global-delivery-status",
  u8hdr: "message/global-headers",
  u8mdn: "message/global-disposition-notification",
  u8msg: "message/global",
  ubj: "application/ubjson",
  uri: "text/uri-list",
  uris: "text/uri-list",
  urls: "text/uri-list",
  vcard: "text/vcard",
  vrml: "model/vrml",
  vtt: "text/vtt",
  vxml: "application/voicexml+xml",
  war: "application/java-archive",
  wasm: "application/wasm",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webmanifest: "application/manifest+json",
  webp: "image/webp",
  wgsl: "text/wgsl",
  wgt: "application/widget",
  wif: "application/watcherinfo+xml",
  wmf: "image/wmf",
  woff: "font/woff",
  woff2: "font/woff2",
  wrl: "model/vrml",
  wsdl: "application/wsdl+xml",
  wspolicy: "application/wspolicy+xml",
  x3d: "model/x3d+xml",
  x3db: "model/x3d+fastinfoset",
  x3dbz: "model/x3d+binary",
  x3dv: "model/x3d-vrml",
  x3dvz: "model/x3d+vrml",
  x3dz: "model/x3d+xml",
  xaml: "application/xaml+xml",
  xav: "application/xcap-att+xml",
  xca: "application/xcap-caps+xml",
  xcs: "application/calendar+xml",
  xdf: "application/xcap-diff+xml",
  xdssc: "application/dssc+xml",
  xel: "application/xcap-el+xml",
  xenc: "application/xenc+xml",
  xer: "application/patch-ops-error+xml",
  xfdf: "application/xfdf",
  xht: "application/xhtml+xml",
  xhtml: "application/xhtml+xml",
  xhvml: "application/xv+xml",
  xlf: "application/xliff+xml",
  xm: "audio/xm",
  xml: "text/xml",
  xns: "application/xcap-ns+xml",
  xop: "application/xop+xml",
  xpl: "application/xproc+xml",
  xsd: "application/xml",
  xsf: "application/prs.xsf+xml",
  xsl: "application/xml",
  xslt: "application/xml",
  xspf: "application/xspf+xml",
  xvm: "application/xv+xml",
  xvml: "application/xv+xml",
  yaml: "text/yaml",
  yang: "application/yang",
  yin: "application/yin+xml",
  yml: "text/yaml",
  zip: "application/zip",
};
function vu(e) {
  let t = ("" + e).trim().toLowerCase(),
    r = t.lastIndexOf(".");
  return bh[~r ? t.substring(++r) : t];
}
var Th = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Ru(e) {
  return Us(e) && e in Th;
}
var ko = "framer/asset-reference,";
function Ch(e) {
  return e.startsWith(`data:${ko}`);
}
function BD(e) {
  return vu(e)?.startsWith("image/") ?? !1;
}
var ku = "originalFilename",
  Nu = "packageIdentifier",
  Pu = "preferredSize",
  Iu = "presetName",
  Du = "width",
  wu = "height";
function Lu(e, t = null, r = null, o = null, n = null, i = null) {
  x(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${ko}${e}`);
  return (
    r && a.searchParams.set(ku, r),
    t && a.searchParams.set(Nu, t),
    o && a.searchParams.set(Pu, o),
    n && a.searchParams.set(Iu, n),
    i && (a.searchParams.set(Du, i.width.toString()), a.searchParams.set(wu, i.height.toString())),
    a.href
  );
}
function AD({
  identifier: e,
  preferredSize: t,
  intrinsicSize: r,
  packageIdentifier: o,
  originalFilename: n,
  presetName: i,
}) {
  return Lu(e, o, n, t, i, r);
}
function FD(e) {
  return Lu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function Mu(e) {
  if (Ch(e))
    try {
      let t = new URL(e),
        r = t.pathname.substring(ko.length),
        o = t.searchParams.get(ku),
        n = t.searchParams.get(Nu),
        i = t.searchParams.get(Pu),
        a = t.searchParams.get(Iu),
        s = t.searchParams.get(Du),
        l = t.searchParams.get(wu);
      return {
        identifier: r,
        originalFilename: o,
        packageIdentifier: n,
        preferredSize: Ru(i) ? i : void 0,
        presetName: a,
        fileExtension: o && Sh(o),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function Sh(e) {
  return e.split(".").pop() ?? "";
}
var zD = {},
  Vh = "children";
function vh(e) {
  return Vh in e && e.children !== void 0;
}
var Rh = new Ge();
function Eu(e) {
  return vh(e) ? e.children : Rh;
}
function Bu(e) {
  for (let t in e) return !1;
  return !0;
}
var UD = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  kh = "repeatArray";
function Au(e) {
  return !(!e || !(kh in e) || Ce(e) || ze(e));
}
function $t(e) {
  return !!e && Au(e) && !!e.repeatArray;
}
function Nh(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), Au)?.repeatArray;
}
function qD(e, t) {
  let r = Nh(e, t);
  if (r) return _l("array", r, t.repeatArrayTransforms ?? []);
}
function Ou(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function Wu(e, t) {
  let r = t?.getPrimaryId();
  if (((t = e.get(r)), !ze(t))) return null;
  if (t.repeatedItemId !== void 0) return Fu(e, t, t.repeatedItemId);
  let o = Fu(e, t, t.collectionRepeatedItemId);
  return o || Hu(t);
}
function ZD(e, t) {
  let r = t.cache.repeatedAncestorRepeaterIds;
  if (r !== null) return r;
  let o = Ph(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = o), o);
}
function Ph(e, t) {
  let r = [],
    o = t,
    n = e.getParent(t.id);
  for (; n;) {
    if ($t(n)) r.push(n.id);
    else if (ze(n)) {
      let i = Wu(e, n);
      i && o.getPrimaryId() === i.id && r.push(n.id);
    }
    if (((o = n), (n = e.getParent(n.id)), n && e.isGroundNode(n))) break;
  }
  return (r.reverse(), r);
}
function QD(e, t) {
  let r = t;
  for (let o of t.ancestors()) {
    if (ze(o)) return { repeater: o, inRepeatedChild: Kt(e, r, o) };
    r = o;
  }
}
function ew(e) {
  for (let t of e.ancestors()) if (ze(t)) return t;
}
function zu(e, t) {
  return e.getNodeWithTrait(t.parentid, ze) ?? void 0;
}
function tw(e, t) {
  return e.getNodeWithTrait(t.parentid, di) ?? void 0;
}
function Ih(e, t) {
  if (!t) return null;
  let r = Wu(e, t);
  return r ? (t.originalid ? t.children?.find((n) => n.originalid === r.id) : r) : null;
}
function Kt(e, t, r) {
  return ((r ??= zu(e, t)), Ih(e, r)?.id === t.id);
}
function rw(e, t) {
  return Kt(e, t) || $t(t);
}
function ow(e, t, r) {
  return !!r && ze(e) && !Kt(t, r, e);
}
function nw(e) {
  let t = e.children?.at(0);
  e.set(Ou(t?.id));
}
function iw(e, t) {
  let r = new Map();
  for (let o of t) {
    let n = Dh(e, o);
    n && r.set(n.repeaterId, n);
  }
  return [...r.values()];
}
function Dh(e, t) {
  let r = zu(e, t);
  if (!r || !Kt(e, t, r)) return null;
  let o = t.getPrimaryId();
  return {
    repeaterId: r.getPrimaryId(),
    disableFallback: r.repeatedItemId !== void 0,
    repeatedItemId: o,
    repeatedItemChildIds: t.children?.map((n) => n.getPrimaryId()) ?? [],
  };
}
function aw(e, t, r) {
  for (let o of t) {
    let n = e.get(o.repeaterId);
    if (!ze(n)) continue;
    let i = wh(e, n, o, r);
    (i === n.repeatedItemId && i === n.collectionRepeatedItemId) || n.set(Ou(i));
  }
}
function wh(e, t, r, o) {
  let n = new Set(),
    i = o?.get(r.repeatedItemId);
  (i && n.add(i), n.add(r.repeatedItemId));
  for (let a of r.repeatedItemChildIds) n.add(a);
  for (let a of n) {
    let s = Lh(e, t, a);
    if (s) return s.id;
  }
  if (!r.disableFallback) return Hu(t)?.id;
}
function Lh(e, t, r) {
  let o = e.get(r);
  for (; o;) {
    if (o.parentid === t.id) return $t(o) ? null : o;
    if (!o.parentid) return null;
    o = e.get(o.parentid);
  }
  return null;
}
function Fu(e, t, r) {
  let o = e.get(r);
  return !o || $t(o) || o.parentid !== t.id ? null : o;
}
function Hu(e) {
  let t = e.children.at(0);
  return !t || $t(t) ? null : t;
}
var Hi = "default";
function dw(e) {
  return cl(e) ? e.getGroundNodes().length === 0 : !1;
}
function cw(e) {
  if (!Xe(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function Mh(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function Eh(e) {
  return e === "";
}
function Gi(e) {
  return !!(e.webPageId && Eh(e.segment));
}
function Bh(e) {
  return Gi(e) && Mh(e);
}
function pw(e, t) {
  if (!Bh(t)) return;
  let r = e.get(t.parentid);
  return gr(r) && !r.webPageId ? r.id : void 0;
}
function Ah(e, t) {
  let r = t.get(e);
  if (!gr(r)) return;
  let o = t.get(r.webPageId);
  if (Xe(o) || r.children.length > 0) return;
  let n = r.parentid;
  (t.remove(r.id), n && Ah(n, t));
}
var Ir = "default",
  Fh = "locales";
function yw(e) {
  return b(e) && Fh in e;
}
function hw(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let r of t) {
    let o = e.find((n) => n.id === r.id);
    if (o && (o.fallback !== r.fallback || o.draft !== r.draft)) return !0;
  }
  return !1;
}
function xw(e) {
  return e?.newContentInclusion ?? "include";
}
var ju = (e) => {
    let t = v.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + st.scrollX), (t.y = t.y + st.scrollY), t);
  },
  Oh = (e) => v.merge(...e.map(ju)),
  Wh = (e, t) => {
    let r = _u(e, t);
    return { x: r.x, y: r.y, width: e.width, height: e.height };
  },
  zh = (e, t) => {
    let r = $u(e, t);
    return { x: r.x, y: r.y, width: e.width, height: e.height };
  },
  ji = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + st.scrollX, y: t.top + st.scrollY, width: t.width, height: t.height };
  },
  Hh = (e) => ({ x: e.pageX, y: e.pageY }),
  Gh = (e) => ({ x: e.clientX, y: e.clientY }),
  _u = (e, t) => {
    let r = ji(t);
    return { x: e.x + r.x, y: e.y + r.y };
  },
  $u = (e, t) => {
    let r = ji(t);
    return { x: e.x - r.x, y: e.y - r.y };
  },
  Sw = (e, t = {}) => {
    let r = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      o = document.activeElement;
    o && o.dispatchEvent(r);
  },
  Vw = {
    frameFromElement: ju,
    frameFromElements: Oh,
    convertToPageFrame: Wh,
    convertFromPageFrame: zh,
    getPageFrame: ji,
    fromEventForPage: Hh,
    fromEventForClient: Gh,
    convertToPagePoint: _u,
    convertFromPagePoint: $u,
  },
  Gu,
  jh = !ks() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Ku(e, t) {
  return jh && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Gu ??= new DOMParser()), Gu.parseFromString(e, t ?? "text/html"));
}
function vw(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var _h = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  $h = {
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&amp;": "&",
    "&#60;": "<",
    "&#62;": ">",
    "&#34;": '"',
    "&apos;": "'",
    "&#38;": "&",
  };
function Rw(e) {
  return e.replace(_h, (t) => $h[t]);
}
function Uu(e) {
  let t = `<body>${e}</body>`;
  return Ku(t).body;
}
function Kh(e, t) {
  let r = new Map();
  function o(n) {
    let i = r.get(n);
    if (p(i)) return i;
    let a = e(n);
    if ((r.set(n, a), r.size > t)) {
      let s = r.keys().next().value;
      p(s) && r.delete(s);
    }
    return a;
  }
  return o;
}
var Uh = 1e5,
  _i = Kh(qh, Uh);
function qh(e) {
  let t = Uu(e),
    r = t.innerText;
  return Is.isTest ? (r ?? t.textContent ?? "") : (x(r !== null), r);
}
function qu(
  e,
  t = `
`
) {
  let r = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    o = _i(r),
    n = t.length;
  return n && o.endsWith(t) ? o.slice(0, n * -1) : o;
}
function Xu(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let r = No(e.childNodes);
  if (r.length === 0) return "";
  let o = r.join(`
`);
  return !t || e.childNodes.some(Po)
    ? o
    : o +
        `
`;
}
function Yu(e) {
  return e.replaceAll(/\n+/gu, "");
}
function No(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [Xh(t)]));
}
function Xh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(ex).join("");
    case "bulletedList":
    case "numberedList":
      return Jh(e.childNodes).join(`
`);
    case "blockquote":
      return No(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(Zh).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function Yh(e) {
  return No(e.childNodes).join(`
`);
}
function Jh(e) {
  return e.flatMap((t) => {
    let r = Yh(t);
    return r.length > 0 ? [r] : [];
  });
}
function Zh(e) {
  return e.childNodes.map(Qh).join(`
`);
}
function Qh(e) {
  return No(e.childNodes).join(`
`);
}
function ex(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function Po(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(nx);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(tx);
    case "blockquote":
      return e.childNodes.some(Po);
    case "table":
      return e.childNodes.some(rx);
    case "media":
    case "module":
      return !1;
  }
}
function tx(e) {
  return e.childNodes.some(Po);
}
function rx(e) {
  return e.childNodes.some(ox);
}
function ox(e) {
  return e.childNodes.some(Po);
}
function nx(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
function $i(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function ix(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? qu(e.value)
        : _i(e.value)
    : ax(e.value, { preserveNewLines: t });
}
function Ow(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if ($i(e)) return ix(e, t);
  }
}
function ax(e, { preserveNewLines: t }) {
  let r = Xu(e);
  return t ? r : Yu(r);
}
function Ju(e, t) {
  if (!t || !e || e.id === Ir) return null;
  for (; e;) {
    let r = t[e.id];
    if (r && $i(r)) return r;
    e = e.fallback;
  }
  return null;
}
var Zu = "routeSegmentRoot";
var sx = new Set(["/404.html", "/404", "/404/"]),
  Qu = new Set(Array.from(sx).map((e) => e.replaceAll("/", "")));
var ed = {
    aa: "Afar",
    ab: "Abkhazian",
    ae: "Avestan",
    af: "Afrikaans",
    ak: "Akan",
    sq: "Albanian",
    am: "Amharic",
    an: "Aragonese",
    ar: "Arabic",
    hy: "Armenian",
    as: "Assamese",
    asa: "Asu",
    av: "Avaric",
    ay: "Aymara",
    az: "Azerbaijani",
    "az-Cyrl": "Azerbaijani (Cyrillic)",
    "az-Latn": "Azerbaijani (Latin)",
    bm: "Bambara",
    ba: "Bashkir",
    eu: "Basque",
    be: "Belarusian",
    bem: "Bemba",
    bez: "Bena",
    bn: "Bengali",
    bi: "Bislama",
    bs: "Bosnian",
    br: "Breton",
    bg: "Bulgarian",
    my: "Burmese",
    "yue-Hant": "Cantonese (Traditional)",
    ca: "Catalan",
    tzm: "Central Morocco Tamazight",
    "tzm-Latn": "Central Morocco Tamazight (Latin)",
    chr: "Cherokee",
    ch: "Chamorro",
    ce: "Chechen",
    ny: "Chichewa, Chewa, Nyanja",
    cgg: "Chiga",
    zh: "Chinese",
    "zh-Hans": "Chinese (Simplified Han)",
    "zh-Hant": "Chinese (Traditional Han)",
    cu: "Church Slavic, Old Slavonic",
    cv: "Chuvash",
    kw: "Cornish",
    co: "Corsican",
    cr: "Cree",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    dv: "Divehi, Dhivehi, Maldivian",
    nl: "Dutch",
    dz: "Dzongkha",
    ebu: "Embu",
    en: "English",
    eo: "Esperanto",
    et: "Estonian",
    ee: "Ewe",
    fo: "Faroese",
    fil: "Filipino",
    fi: "Finnish",
    fj: "Fijian",
    fr: "French",
    ff: "Fulah",
    gd: "Gaelic, Scottish Gaelic",
    gl: "Galician",
    lg: "Ganda",
    ka: "Georgian",
    de: "German",
    el: "Greek",
    gn: "Guarani",
    gu: "Gujarati",
    guz: "Gusii",
    ht: "Haitian, Haitian Creole",
    ha: "Hausa",
    "ha-Latn": "Hausa (Latin)",
    haw: "Hawaiian",
    he: "Hebrew",
    hz: "Herero",
    hi: "Hindi",
    ho: "Hiri Motu",
    hu: "Hungarian",
    is: "Icelandic",
    io: "Ido",
    ig: "Igbo",
    id: "Indonesian",
    ia: "Interlingua",
    ie: "Interlingue, Occidental",
    iu: "Inuktitut",
    ik: "Inupiaq",
    ga: "Irish",
    it: "Italian",
    ja: "Japanese",
    jv: "Javanese",
    kea: "Kabuverdianu",
    kab: "Kabyle",
    kl: "Kalaallisut",
    kln: "Kalenjin",
    kam: "Kamba",
    kn: "Kannada",
    kr: "Kanuri",
    ks: "Kashmiri",
    kk: "Kazakh",
    "kk-Cyrl": "Kazakh (Cyrillic)",
    km: "Khmer",
    ki: "Kikuyu",
    rw: "Kinyarwanda",
    ky: "Kirghiz, Kyrgyz",
    kv: "Komi",
    kg: "Kongo",
    kok: "Konkani",
    ko: "Korean",
    khq: "Koyra Chiini",
    ses: "Koyraboro Senni",
    kj: "Kuanyama, Kwanyama",
    ku: "Kurdish",
    lag: "Langi",
    lo: "Lao",
    la: "Latin",
    lv: "Latvian",
    li: "Limburgan, Limburger, Limburgish",
    ln: "Lingala",
    lt: "Lithuanian",
    lu: "Luba-Katanga",
    luo: "Luo",
    lb: "Luxembourgish, Letzeburgesch",
    luy: "Luyia",
    mk: "Macedonian",
    jmc: "Machame",
    kde: "Makonde",
    mg: "Malagasy",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    gv: "Manx",
    mi: "Maori",
    na: "Nauru",
    mr: "Marathi",
    mh: "Marshallese",
    mas: "Masai",
    nv: "Navajo, Navaho",
    mer: "Meru",
    mn: "Mongolian",
    cnr: "Montenegrin",
    mfe: "Morisyen",
    naq: "Nama",
    ne: "Nepali",
    ng: "Ndonga",
    se: "Northern Sami",
    nd: "North Ndebele",
    nb: "Norwegian Bokm\xE5l",
    nn: "Norwegian Nynorsk",
    no: "Norwegian",
    nyn: "Nyankole",
    oc: "Occitan",
    oj: "Ojibwa",
    or: "Oriya",
    om: "Oromo",
    os: "Ossetian, Ossetic",
    pi: "Pali",
    ps: "Pashto",
    fa: "Persian",
    pl: "Polish",
    pt: "Portuguese",
    pa: "Punjabi",
    "pa-Arab": "Punjabi (Arabic)",
    "pa-Guru": "Punjabi (Gurmukhi)",
    qu: "Quechua",
    ro: "Romanian",
    rm: "Romansh",
    rof: "Rombo",
    rn: "Rundi",
    ru: "Russian",
    rwk: "Rwa",
    sm: "Samoan",
    saq: "Samburu",
    sg: "Sango",
    sa: "Sanskrit",
    sc: "Sardinian",
    seh: "Sena",
    sr: "Serbian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    sn: "Shona",
    ii: "Sichuan Yi",
    sd: "Sindhi",
    si: "Sinhala",
    sk: "Slovak",
    sl: "Slovenian",
    xog: "Soga",
    so: "Somali",
    st: "Southern Sotho",
    nr: "South Ndebele",
    es: "Spanish",
    su: "Sundanese",
    sw: "Swahili",
    ss: "Swati",
    sv: "Swedish",
    gsw: "Swiss German",
    shi: "Tachelhit",
    "shi-Latn": "Tachelhit (Latin)",
    "shi-Tfng": "Tachelhit (Tifinagh)",
    tl: "Tagalog",
    ty: "Tahitian",
    dav: "Taita",
    tg: "Tajik",
    ta: "Tamil",
    tt: "Tatar",
    te: "Telugu",
    teo: "Teso",
    th: "Thai",
    bo: "Tibetan",
    ti: "Tigrinya",
    to: "Tonga",
    ts: "Tsonga",
    tn: "Tswana",
    tr: "Turkish",
    tk: "Turkmen",
    tw: "Twi",
    ug: "Uighur, Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    "uz-Arab": "Uzbek (Arabic)",
    "uz-Cyrl": "Uzbek (Cyrillic)",
    "uz-Latn": "Uzbek (Latin)",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volap\xFCk",
    vun: "Vunjo",
    wa: "Walloon",
    cy: "Welsh",
    fy: "Western Frisian",
    wo: "Wolof",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    za: "Zhuang, Chuang",
    zu: "Zulu",
  },
  td = {
    AL: "Albania",
    AS: "American Samoa",
    AR: "Argentina",
    AM: "Armenia",
    AT: "Austria",
    AU: "Australia",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barth\xE9lemy",
    BN: "Brunei",
    BO: "Bolivia",
    BR: "Brazil",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CD: "Congo - Kinshasa",
    CF: "Central African Republic",
    CG: "Congo - Brazzaville",
    CH: "Switzerland",
    CI: "C\xF4te d\u2019Ivoire",
    CL: "Chile",
    CM: "Cameroon",
    CV: "Cape Verde",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GE: "Georgia",
    GH: "Ghana",
    GL: "Greenland",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    HK: "Hong Kong SAR China",
    HN: "Honduras",
    HR: "Croatia",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IN: "India",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KH: "Cambodia",
    KM: "Comoros",
    KR: "South Korea",
    KW: "Kuwait",
    KZ: "Kazakhstan",
    LB: "Lebanon",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "Macedonia",
    ML: "Mali",
    MM: "Myanmar [Burma]",
    MO: "Macau SAR China",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MT: "Malta",
    MU: "Mauritius",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NE: "Niger",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PR: "Puerto Rico",
    PT: "Portugal",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "R\xE9union",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SI: "Slovenia",
    SK: "Slovakia",
    SN: "Senegal",
    SO: "Somalia",
    SV: "El Salvador",
    SY: "Syria",
    TD: "Chad",
    TG: "Togo",
    TH: "Thailand",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "U.S. Minor Outlying Islands",
    AE: "United Arab Emirates",
    US: "United States",
    UY: "Uruguay",
    AF: "Afghanistan",
    UZ: "Uzbekistan",
    VE: "Venezuela",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    YE: "Yemen",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    419: "Latin America",
  };
function rd(e) {
  return p(e) && e in ed;
}
var Kw = ed;
function lx(e) {
  return p(e) && e in td;
}
var Uw = td;
function qw(e) {
  if (!p(e)) return !1;
  if (rd(e)) return !0;
  let [t, r] = od(e);
  return !!(t && r);
}
function od(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    r = "",
    o;
  for (let n of t) {
    if (lx(n)) {
      o = n;
      continue;
    }
    if (!r) {
      r = n;
      continue;
    }
    r += "-" + n;
  }
  return [rd(r) ? r : void 0, o];
}
var ux = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function dx(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function Io(e) {
  if (dx(e)) return "rtl";
  let [t] = od(e);
  return t && ux.has(t) ? "rtl" : "ltr";
}
var nd = Symbol();
function Qe(e) {
  let t,
    r = nd;
  return (...o) => {
    if (t && qs(t, o) && r !== nd) return r;
    t = o;
    let n = e(...o);
    return ((r = n), n);
  };
}
function Ki(e, t) {
  let r = e.root.getDefaultLocale(),
    o = e.root.locales ?? Zr();
  return t === "includeDrafts" ? cx(r, o) : px(r, o);
}
function oL(e, t, r = "includeDrafts") {
  let o = Ki(e, r),
    n = o[0];
  return (
    x(n, "Default locale should always exist"),
    t ? (o.find(({ id: i }) => i === t) ?? n) : n
  );
}
var cx = Qe((e, t) => {
    let r = [e, ...t];
    return Ui(r, { includeDrafts: !0 });
  }),
  px = Qe((e, t) => {
    let r = [e, ...t];
    return Ui(r, { includeDrafts: !1 });
  });
function Ui(e, { includeDrafts: t }) {
  let r = new Map(),
    o = new Map();
  for (let a of e) (r.set(a.id, a), a.fallback && o.set(a.id, a.fallback));
  let n = [],
    i = !t && js.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && ad(a, r))) continue;
    let s = id(a);
    if ((n.push(s), !a.fallback)) continue;
    let l = s,
      u = r.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = id(u);
      ((l.fallback = m), (l = m));
      let f = o.get(u.id);
      u = f ? r.get(f) : void 0;
    }
  }
  return n;
}
function nL(e) {
  let t = new Map(e.map((r) => [r.id, r]));
  return e.filter((r) => !r.draft && ad(r, t));
}
function ad(e, t) {
  let r = new Set(),
    o = e;
  for (; o;) {
    if (r.has(o.id)) return !1;
    if ((r.add(o.id), o.draft)) return !0;
    o = o.fallback ? t.get(o.fallback) : void 0;
  }
  return !1;
}
function id(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: Io(e.code) };
}
var iL = { vekterLocalesToRouterLocales: Ui };
var fx = "$";
function sd(e) {
  let t = e.get(Zu);
  return (
    x(t, "RouteSegmentRootNode not found"),
    x(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function mL(e, t) {
  let r = Ki(e, "excludeDrafts"),
    o = Object.fromEntries(r.map((l) => [l.id, {}])),
    n = new Map(),
    i = 0,
    a = () => `${fx}${i++}`,
    s = new Set();
  for (let l of t.children) ld(e, "", n, o, a, s, l, r);
  return { webPageSegmentReferencePathByWebPageId: n, localizedSegments: o };
}
function ld(e, t, r, o, n, i, a, s) {
  x(o[Hi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  mx(a) ? (a.segment ? ((c = n()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = ld(e, t, r, o, n, i, f, s) || m;
  if (m && c) {
    o[Hi][c] = a.segment;
    for (let f of s) {
      let h = Ju(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let C = f.id;
        (x(o[C], "localizedSegments should include all locales"), (o[C][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && r.set(a.webPageId, t), m);
}
var mx = (e) => !(!!e.dataIdentifier || Qu.has(e.segment) || Gi(e));
function ud(e, t) {
  let o = sd(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(o);
}
function cd(e, t) {
  let r = yx(t);
  return r ? e.getNodeWithTrait(r, io) : null;
}
function yx(e) {
  if (!e) return null;
  let t = be(e);
  return !no(t) || !De(t) || t.type !== "collection" ? null : t.localIdName;
}
var Do = E(ie(), 1);
var Ut = E(de(), 1);
function hx(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function qt(e) {
  return !e._constraints || hx(e) ? !1 : e._constraints.enabled;
}
function xx(e) {
  let { size: t } = e,
    { width: r, height: o } = e;
  return (
    N(t) && (r === void 0 && (r = t), o === void 0 && (o = t)),
    N(r) && N(o) ? { width: r, height: o } : null
  );
}
function gx(e) {
  let t = xx(e);
  if (t === null) return null;
  let { left: r, top: o } = e;
  return N(r) && N(o) ? { x: r, y: o, ...t } : null;
}
function bx(e, t, r = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let o = t === 1 || t === 2;
  if (!qt(e) || o) return gx(e);
  let n = Tx(e),
    i = Cx(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return ai.toRect(n, a, null, r, null);
}
function Tx(e) {
  let { left: t, right: r, top: o, bottom: n, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = ii.quickfix({
      left: N(t),
      right: N(r),
      top: N(o),
      bottom: N(n),
      widthType: hr(l),
      heightType: hr(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    C = null,
    S = 0,
    R = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let A = parseFloat(l);
    l.endsWith("fr") ? ((S = 3), (h = A)) : l === "auto" ? (S = 2) : ((S = 1), (h = A / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let A = parseFloat(u);
    u.endsWith("fr")
      ? ((R = 3), (C = A))
      : u === "auto"
        ? (R = 2)
        : ((R = 1), (C = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (C = u);
  let y = 0.5,
    T = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof o == "string" && (T = parseFloat(o) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? r : null,
      top: f.top ? o : null,
      bottom: f.bottom ? n : null,
      widthType: S,
      heightType: R,
      width: h,
      height: C,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: y,
      centerAnchorY: T,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var qi = ((o) => (
    (o[(o.Unknown = 0)] = "Unknown"),
    (o[(o.Disabled = 1)] = "Disabled"),
    (o[(o.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    o
  ))(qi || {}),
  pd = Do.default.createContext({ parentSize: 0 });
function Cx(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function fd() {
  return Do.default.useContext(pd).parentSize;
}
function md(e) {
  return typeof e == "object";
}
var Sx = (e) => {
  let t = fd(),
    { parentSize: r, children: o } = e,
    n = Do.default.useMemo(() => ({ parentSize: r }), [Vx(r), vx(r)]);
  return t === 1
    ? o
      ? (0, Ut.jsx)(Ut.Fragment, { children: o })
      : null
    : (0, Ut.jsx)(pd.Provider, { value: n, children: o });
};
function Vx(e) {
  return md(e) ? e.width : e;
}
function vx(e) {
  return md(e) ? e.height : e;
}
function wo(e, t) {
  return (0, Ut.jsx)(Sx, { parentSize: t, children: e });
}
function yd(e) {
  let t = fd();
  return bx(e, t, !0);
}
function Xi({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Yi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function Rx(e, t) {
  let { _forwardedOverrideId: r, _forwardedOverrides: o, id: n } = t,
    i = r ?? n,
    a = o && i ? o[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function hd(e) {
  let { background: t, image: r } = e;
  if (r !== void 0 && t && !Yi.isImageObject(t)) return;
  let o = null;
  if ((ue(r) ? (o = { alt: "", src: r }) : (o = ce.get(t, null)), !!Yi.isImageObject(o)))
    return Rx(o, e);
}
var Ji = (e) => e instanceof Bs;
function kx(e, t) {
  if (e.size < t) return;
  let o = Math.round(Math.random());
  for (let n of e.keys()) (++o & 1) !== 1 && e.delete(n);
}
function xd(e, t, r, o) {
  let n = t.get(r);
  if (n) return n;
  kx(t, e);
  let i = o(r);
  return (t.set(r, i), i);
}
var Lo = {
  hueRotate: (e, t) => g.toHslString(g.hueRotate(g(e), t)),
  setAlpha: (e, t) => g.toRgbString(g.alpha(g(e), t)),
  getAlpha: (e) => {
    let t = Nr(e);
    return t ? t.a : 1;
  },
  multiplyAlpha: (e, t) => g.toRgbString(g.multiplyAlpha(g(e), t)),
  toHexValue: (e) => g.toHex(g(e)).toUpperCase(),
  toHex: (e) => g.toHexString(g(e)).toUpperCase(),
  toRgb: (e) => g.toRgb(g(e)),
  toRgbString: (e) => g.toRgbString(g(e)),
  toHSV: (e) => g.toHsv(g(e)),
  toHSL: (e) => g.toHsl(g(e)),
  toHslString: (e) => g.toHslString(g(e)),
  toHsvString: (e) => g.toHsvString(g(e)),
  hsvToHSLString: (e) => g.toHslString(g(Gt(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => g.toHex(g(Gt(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => g.toHexString(g(Gt(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => g.toRgbString(g(Gt(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => Gt(e.h, e.s, e.v),
  rgbaToString: (e) => g.toRgbString(g(e)),
  rgbToHexValue: (e) => g.toHex(g(e)),
  rgbToHexString: (e) => g.toHexString(g(e)),
  hslToString: (e) => g.toHslString(g(e)),
  hslToRgbString: (e) => g.toRgbString(g(e)),
  toColorPickerSquare: (e) => g.toRgbString(g({ h: e, s: 1, l: 0.5, a: 1 })),
  isValid: (e) => g(e).isValid !== !1,
  equals: (e, t) =>
    g.isP3String(e) || g.isP3String(t)
      ? e === t
      : (typeof e == "string" && (e = g(e)), typeof t == "string" && (t = g(t)), g.equal(e, t)),
  toHexOrRgbaString: (e) => {
    let t = g(e);
    return t.a !== 1 ? g.toRgbString(t) : g.toHexString(t);
  },
  toFormatString: (e) => (g.isP3String(e) ? e : g.toRgbString(g(e))),
};
var gd = (e) => {
  let t = 0,
    r,
    o;
  if (e.length === 0) return t;
  for (r = 0; r < e.length; r++) ((o = e.charCodeAt(r)), (t = (t << 5) - t + o), (t |= 0));
  return t;
};
var Nx = /var\(.+\)/u,
  Px = new Map();
function Ix(e, t) {
  let r = [e, t];
  return Nx.test(e) ? e : xd(1e3, Px, r, () => Lo.multiplyAlpha(e, t));
}
function bt(e, t = 1) {
  let r;
  return (
    "stops" in e
      ? (r = e.stops)
      : (r = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? r : r.map((o) => ({ ...o, value: Ix(o.value, t) }))
  );
}
function Xt(e, t) {
  let r = 0;
  return (
    bt(e, t).forEach((o) => {
      r ^= gd(o.value) ^ o.position;
    }),
    r
  );
}
var Dx = ["stops"];
function Yt(e) {
  return e && Dx.every((t) => t in e);
}
var wx = ["start", "end"];
function Jt(e) {
  return e && wx.every((t) => t in e);
}
var Lx = ["angle", "alpha"],
  Mo = {
    isLinearGradient: (e) => re(e) && Lx.every((t) => t in e) && (Jt(e) || Yt(e)),
    hash: (e) => e.angle ^ Xt(e, e.alpha),
    toCSS: (e, t, r) => {
      let o = bt(e, e.alpha),
        n = t !== void 0 ? t : e.angle,
        i = Math.round(n),
        a = o.map((s) => `${r?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var Mx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  Eo = {
    isRadialGradient: (e) => re(e) && Mx.every((t) => t in e) && (Jt(e) || Yt(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Xt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: r, widthFactor: o, heightFactor: n, centerAnchorX: i, centerAnchorY: a } = e,
        s = bt(e, r),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${o * 100}% ${n * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var Ex = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  Bx = {
    isConicGradient: (e) => re(e) && Ex.every((t) => t in e) && (Jt(e) || Yt(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ Xt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: r, angle: o, centerAnchorX: n, centerAnchorY: i } = e,
        a = Math.round(o),
        l = bt(e, r)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${n * 100}% ${i * 100}%, ${l})`;
    },
  };
var Zi = ["color", "x", "y", "blur"],
  sM = { is: (e) => e && Zi.every((t) => t in e) },
  Qi = ["x", "y", "color", "inset", "blur", "spread"],
  bd = {
    is: (e) => e && Qi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var Td = "0.000001px",
  ea = ` translateZ(${Td})`,
  Cd = Ns() || Rs() || Ps();
function Sd(e) {
  e.willChange = "transform";
  let t = H.current() === H.canvas;
  Cd && t && (e.translateZ = Td);
}
function Vd(e) {
  ((e.willChange = "transform"), vd(e, !0));
}
function pM(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    vd(e.style, t));
}
function vd(e, t) {
  let r = H.current() === H.canvas;
  if (!Cd || !r) return;
  let o = (ue(e.transform) && e.transform) || "";
  t ? o.includes(ea) || (e.transform = o + ea) : (e.transform = o.replace(ea, ""));
}
var kd = E(ie(), 1);
var xe = (e) => e;
function Rd(e, t, r, o = !0) {
  if (!e) return;
  let n = xe(e.style),
    i = r || n[t],
    a = () => {
      Ax(i) && (n[t] = i);
    };
  ((n[t] = null), o ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function Ax(e) {
  return ue(e) || Ke(e) || Ls(e);
}
var Bo = (() => {
  class e extends kd.Component {
    static defaultProps = {};
    static applyWillChange(r, o, n) {
      r.willChangeTransform && (n ? Sd(o) : Vd(o));
    }
    layerElement = null;
    setLayerElement = (r) => {
      this.layerElement = r;
    };
    shouldComponentUpdate(r, o) {
      return r._needsMeasure || this.state !== o || !ye(this.props, r);
    }
    componentDidUpdate(r) {
      xe(this.props).clip &&
        xe(this.props).radius === 0 &&
        xe(r).radius !== 0 &&
        Rd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var Nd = E(ie(), 1);
function ta() {
  let e = H.current();
  return e === H.canvas || e === H.export;
}
function vM() {
  let [e] = (0, Nd.useState)(() => ta());
  return e;
}
var Pd = E(ie(), 1),
  Id = Pd.default.createContext(void 0);
var ra;
function Dd() {
  return ra !== void 0;
}
function NM(e) {
  ra = e;
}
function wd(e, t) {
  ra?.(e, t);
}
var Dr = E(ie(), 1);
var Fx = new Set(),
  oa;
function Ao(e, t, r = Fx) {
  if (!(!e || r.has(e) || typeof document > "u")) {
    if ((r.add(e), !t)) {
      if (!oa) {
        let o = document.createElement("style");
        if (
          (o.setAttribute("type", "text/css"),
          o.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn("not injecting CSS: the document is missing a <head> element");
          return;
        }
        if ((document.head.appendChild(o), o.sheet)) oa = o.sheet;
        else {
          console.warn("not injecting CSS: injected <style> element does not have a sheet", o);
          return;
        }
      }
      t = oa;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var Bd = E(de(), 1),
  Ox = "style[data-framer-css-ssr-minified]",
  Wx = (() => {
    if (!pr()) return new Set();
    let e = document.querySelector(Ox)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  EM = "data-framer-css-ssr";
function Md() {
  return oi() ? H.preview : H.current();
}
var Ed = (e, t, r) => {
    if (Dd() && r !== void 0 && !it(t)) {
      let o = Array.isArray(t)
        ? t
        : t.split(`
`);
      wd(r, o.filter(Boolean));
    }
    return Dr.default.forwardRef((o, n) => {
      let { sheet: i, cache: a } = Dr.default.useContext(Id) ?? {},
        s = r;
      if (!pr()) {
        it(t) && (t = t(Md(), o));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        zx.add(l, s);
      }
      return (
        (0, Dr.useInsertionEffect)(() => {
          if (s && Wx.has(s)) return;
          (it(t)
            ? t(Md(), o)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && Ao(u, i, a));
        }, []),
        (0, Bd.jsx)(e, { ...o, ref: n })
      );
    });
  },
  na = class {
    styles = new Set();
    componentIds = new Set();
    add(t, r) {
      (this.styles.add(t), r && this.componentIds.add(r));
    }
    getStyles() {
      return this.styles;
    }
    getComponentIds() {
      return this.componentIds;
    }
    clear() {
      (this.styles.clear(), this.componentIds.clear());
    }
  },
  zx = new na();
function ia(e) {
  let t = !1,
    r;
  return {
    get value() {
      return (t || ((r = e()), (t = !0)), r);
    },
  };
}
var Fo = "--framer-will-change-override",
  Ad = "--framer-will-change-effect-override",
  Oo = "--framer-will-change-filter-override",
  Fd = "--overflow-clip-fallback",
  Od = "--one-if-corner-shape-supported";
var Hx = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  Gx = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  jx = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  _x = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  $x = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  Kx = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  Ux = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  qx = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  Xx = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  Yx = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  Jx = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  Zx = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
  Qx = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  eg = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  tg = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  rg = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  Wd = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    Zx,
    Jx,
    Hx,
    Gx,
    jx,
    _x,
    $x,
    Kx,
    Ux,
    qx,
    Xx,
    Yx,
    Qx,
    eg,
    tg,
    rg,
  ];
var Zt = E(ie(), 1);
var Wo = ((I) => (
  (I.Padding = "--framer-input-padding"),
  (I.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
  (I.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
  (I.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
  (I.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
  (I.CornerShape = "--framer-input-corner-shape"),
  (I.BorderColor = "--framer-input-border-color"),
  (I.BorderTopWidth = "--framer-input-border-top-width"),
  (I.BorderRightWidth = "--framer-input-border-right-width"),
  (I.BorderBottomWidth = "--framer-input-border-bottom-width"),
  (I.BorderLeftWidth = "--framer-input-border-left-width"),
  (I.BorderStyle = "--framer-input-border-style"),
  (I.Background = "--framer-input-background"),
  (I.FontFamily = "--framer-input-font-family"),
  (I.FontWeight = "--framer-input-font-weight"),
  (I.FontSize = "--framer-input-font-size"),
  (I.FontColor = "--framer-input-font-color"),
  (I.FontStyle = "--framer-input-font-style"),
  (I.FontLetterSpacing = "--framer-input-font-letter-spacing"),
  (I.FontTextAlignment = "--framer-input-font-text-alignment"),
  (I.FontLineHeight = "--framer-input-font-line-height"),
  (I.FontOpenType = "--framer-input-font-open-type-features"),
  (I.FontVariationAxes = "--framer-input-font-variation-axes"),
  (I.PlaceholderColor = "--framer-input-placeholder-color"),
  (I.BoxShadow = "--framer-input-box-shadow"),
  (I.FocusedBorderColor = "--framer-input-focused-border-color"),
  (I.FocusedBorderWidth = "--framer-input-focused-border-width"),
  (I.FocusedBorderStyle = "--framer-input-focused-border-style"),
  (I.FocusedBackground = "--framer-input-focused-background"),
  (I.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
  (I.FocusedTransition = "--framer-input-focused-transition"),
  (I.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
  (I.BooleanCheckedBorderColor = "--framer-input-boolean-checked-border-color"),
  (I.BooleanCheckedBorderWidth = "--framer-input-boolean-checked-border-width"),
  (I.BooleanCheckedBorderStyle = "--framer-input-boolean-checked-border-style"),
  (I.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
  (I.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
  (I.InvalidTextColor = "--framer-input-invalid-text-color"),
  (I.IconBackgroundImage = "--framer-input-icon-image"),
  (I.IconMaskImage = "--framer-input-icon-mask-image"),
  (I.IconColor = "--framer-input-icon-color"),
  (I.IconContent = "--framer-input-icon-content"),
  (I.WrapperHeight = "--framer-input-wrapper-height"),
  I
))(Wo || {});
var _ = Wo,
  zd = "framer-form-input",
  Gd = "framer-form-input-wrapper",
  GM = "framer-form-input-empty",
  jM = "framer-form-input-forced-focus",
  _M = "framer-form-input-forced-checked";
function og(e) {
  return typeof e == "number" ? e : e.startsWith("--") ? Z.variable(e) : e === "" ? '""' : e;
}
var Z = (() => {
    function e(t, r) {
      let o = " ";
      for (let n in r) {
        let i = r[n];
        (Ue(i !== void 0, "Encountered `undefined` in CSSDeclaration"),
          (o += `${n.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${og(i)}; `));
      }
      return t + " {" + o + "}";
    }
    return (
      (e.variable = (...t) => {
        let r = t[t.length - 1];
        Ue(r !== void 0, "Zero variables passed to `css.variable`");
        let o = r.startsWith("--") ? `var(${r})` : r;
        for (let n = t.length - 2; n >= 0; n--) o = `var(${t[n]}, ${o})`;
        return o;
      }),
      e
    );
  })(),
  $M = [
    Z(`.${zd}`, {
      padding: Z.variable(_.Padding),
      background: "transparent",
      fontFamily: Z.variable(_.FontFamily),
      fontWeight: Z.variable(_.FontWeight),
      fontSize: Z.variable(_.FontSize),
      fontStyle: Z.variable(_.FontStyle),
      color: Z.variable(_.FontColor),
      fontFeatureSettings: Z.variable(_.FontOpenType),
      fontVariationSettings: Z.variable(_.FontVariationAxes),
      border: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%",
      height: Z.variable(_.WrapperHeight, "100%"),
      letterSpacing: Z.variable(_.FontLetterSpacing),
      textAlign: Z.variable(_.FontTextAlignment),
      lineHeight: Z.variable(_.FontLineHeight),
    }),
    Z(`.${zd}:focus-visible`, { outline: "none" }),
  ],
  KM = [Z(`.${Gd}`, { overflow: "hidden" })],
  UM = `var(${_.BorderTopWidth}) var(${_.BorderRightWidth}) var(${_.BorderBottomWidth}) var(${_.BorderLeftWidth})`,
  qM = [
    `.${Gd}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${_.BorderRadiusTopLeft});
        border-top-right-radius: var(${_.BorderRadiusTopRight});
        border-bottom-right-radius: var(${_.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${_.BorderRadiusBottomLeft});
        corner-shape: var(${_.CornerShape});
        border-color: var(${_.BorderColor});
        border-top-width: var(${_.BorderTopWidth});
        border-right-width: var(${_.BorderRightWidth});
        border-bottom-width: var(${_.BorderBottomWidth});
        border-left-width: var(${_.BorderLeftWidth});
        border-style: var(${_.BorderStyle});
        transition: var(${_.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
  ],
  ng = "customError",
  ig = "valid";
function ag(e) {
  return e !== ng && e !== ig;
}
function Hd(e) {
  for (let t in e) if (ag(t) && e?.[t] === !0) return !0;
  return !1;
}
function XM(e, t, r, o, n) {
  let i = Zt.default.useRef(null),
    a = Zt.default.useCallback(
      (u) => {
        t &&
          i.current !== !1 &&
          ((i.current = !1),
          u.currentTarget.setCustomValidity(" "),
          u.currentTarget.reportValidity(),
          t(u));
      },
      [t]
    ),
    s = Zt.default.useCallback(
      (u) => {
        if ((r?.(u), !t && !e)) return;
        let c = u.target.validity;
        i.current === !1 &&
          !Hd(c) &&
          (u.currentTarget.setCustomValidity(""),
          u.target.reportValidity(),
          (i.current = !0),
          e?.());
      },
      [t, e, r]
    ),
    l = Zt.default.useCallback(
      (u) => {
        if (!t) {
          o?.(u);
          return;
        }
        if (i.current === !1) return;
        let c = u.currentTarget.validity;
        if (Hd(c)) {
          a(u);
          return;
        }
        o?.(u);
      },
      [a, o, t]
    );
  return Zt.default.useMemo(
    () => ({ onInvalid: a, onChange: s, onBlur: l, onFocus: n }),
    [a, s, l, n]
  );
}
var YM = 10,
  JM = 8,
  aa = 16,
  sg = {
    backgroundRepeat: "no-repeat",
    backgroundSize: `${aa}px`,
    maskRepeat: "no-repeat",
    maskSize: `${aa}px`,
    backgroundColor: Z.variable(_.IconColor),
  },
  ZM = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${aa}px`,
    boxSizing: "content-box",
    padding: Z.variable(_.Padding),
    border: "none",
    pointerEvents: "none",
    ...sg,
  };
var tE = "--list-style-type",
  _d = "--max-list-digits";
function rE(e, t, r) {
  let o = e + Math.max(t, 1) - 1;
  switch (r) {
    case "decimal":
      return jd(o);
    case "lower-alpha":
    case "upper-alpha":
    case "lower-latin":
    case "upper-latin":
      return lg(o);
    case "lower-roman":
    case "upper-roman":
      return cg(o);
    default:
      return jd(o);
  }
}
function jd(e) {
  return String(e).length;
}
function lg(e) {
  let t = 1;
  for (; ug(t) < e;) t++;
  return t;
}
function ug(e) {
  let t = 0;
  for (let r = 0; r < e; r++) t += 26 ** (r + 1);
  return t;
}
var dg = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888];
function cg(e) {
  let t = 0;
  for (let o of dg) {
    if (e < o) return t;
    t++;
  }
  let r = Math.floor((e - 888) / 1e3);
  return r >= 1 ? Math.max(t, r + 12) : t;
}
function q(e, t) {
  return Z.variable(...e.flatMap((r) => [`${r}-rgb`, r]), t);
}
var sa = { display: "flex", flexDirection: "column", justifyContent: "flex-start" },
  Ud = { display: "inline-block" },
  pg = { display: "block" };
function fg(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var qd = [
    `
        [data-framer-component-type="RichTextContainer"] {
            display: ${sa.display};
            flex-direction: ${sa.flexDirection};
            justify-content: ${sa.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
    `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${q(["--framer-blockquote-text-color", "--framer-text-color"], "#000")};
                -webkit-text-stroke-color: ${q(["--framer-text-stroke-color"], "initial")};
            }

            mark.framer-text {
                background-color: ${q(["--framer-blockquote-text-background-color", "--framer-text-background-color"], "initial")};
            }
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: ${Ud.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${q(["--framer-blockquote-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
            }
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
    `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${q(["--framer-link-text-color", "--framer-blockquote-text-color", "--framer-text-color"], "#000")};
                background-color: ${q(["--framer-link-text-background-color"], "initial")};
                text-decoration-color: ${q(["--framer-link-text-decoration-color", "--framer-text-decoration-color"], "currentcolor")};
            }
        }
    `,
    `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
    `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
    `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${q(["--framer-link-text-color", "--framer-blockquote-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
        }
    }
`,
    `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
    `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
    `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${q(["--framer-link-hover-text-color", "--framer-link-text-color", "--framer-blockquote-text-color", "--framer-text-color"], "#000")};
            background-color: ${q(["--framer-link-hover-text-background-color", "--framer-link-text-background-color", "--framer-text-background-color"], "initial")};
            text-decoration-color: ${q(["--framer-link-hover-text-decoration-color", "--framer-link-text-decoration-color", "--framer-text-decoration-color"], "currentcolor")};
        }
    }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
    `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${q(["--framer-link-hover-text-color", "--framer-link-text-color", "--framer-blockquote-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
        }
    }
   `,
    `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${q(["--framer-link-current-text-color", "--framer-link-text-color", "--framer-text-color"], "#000")};
                background-color: ${q(["--framer-link-current-text-background-color", "--framer-link-text-background-color", "--framer-text-background-color"], "initial")};
                text-decoration-color: ${q(["--framer-link-current-text-decoration-color", "--framer-link-text-decoration-color", "--framer-text-decoration-color"], "currentcolor")};
            }
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${q(["--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
                background-color: ${q(["--framer-link-current-text-background-color", "--framer-link-text-background-color", "--framer-text-background-color"], "initial")};
            }
        }
    `,
    `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${q(["--framer-link-hover-text-color", "--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
                background-color: ${q(["--framer-link-hover-text-background-color", "--framer-link-current-text-background-color", "--framer-link-text-background-color"], "initial")};
                text-decoration-color: ${q(["--framer-link-hover-text-decoration-color", "--framer-link-current-text-decoration-color", "--framer-link-text-decoration-color", "--framer-text-decoration-color"], "currentcolor")};
            }
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
    `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${q(["--framer-link-hover-text-color", "--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};
                background-color: ${q(["--framer-link-hover-text-background-color", "--framer-link-current-text-background-color", "--framer-link-text-background-color"], "initial")};
            }
        }
    `,
    `
        .framer-image.framer-text {
            display: ${pg.display};
            max-width: 100%;
            height: auto;
        }
    `,
    `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
    `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
    `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${_d}, 1) + 1) * 1ch);
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "\u2022";
        }
    `,
    `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
    `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
    `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
    `
        ${fg('.framer-text-module[data-width="fill"]', ":first-child")} {
            width: 100% !important;
        }
    `,
  ],
  $d = "--text-truncation-display-inline-for-safari-16",
  mg = "--text-truncation-display-none-for-safari-16",
  yg = "--text-truncation-line-break-for-safari-16",
  Kd = [
    "div.framer-text",
    "p.framer-text",
    "h1.framer-text",
    "h2.framer-text",
    "h3.framer-text",
    "h4.framer-text",
    "h5.framer-text",
    "h6.framer-text",
    "ol.framer-text",
    "ul.framer-text",
    "li.framer-text",
    "blockquote.framer-text",
    ".framer-text.framer-image",
  ],
  hg = "(background: -webkit-named-image(i))",
  xg = "(contain-intrinsic-size: inherit)",
  Xd = [
    `@supports ${hg} and (not ${xg}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Kd.join(", ")} { display: var(${$d}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Kd.map((e) => `${e}::after`).join(", ")} { content: var(${yg}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${mg}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${$d}, ${Ud.display}) }
    }`,
  ];
var Yd = (e) => {
    let t = "[data-framer-component-type] { position: absolute; }",
      c = [
        '[data-framer-component-type="Text"] { cursor: inherit; }',
        "[data-framer-component-text-autosized] * { white-space: pre; }",
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ],
      m = `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
      f = `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      h = [
        '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
        '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
      ],
      C = [
        '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
        '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
        '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }',
        '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }',
        '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }',
        '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
        '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
        '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
      ],
      S =
        '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
      R =
        '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
      y =
        '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
      T = ".framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }",
      A = [
        '[data-framer-cursor="pointer"] { cursor: pointer; }',
        '[data-framer-cursor="grab"] { cursor: grab; }',
        '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
      ],
      j = [
        '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
        "[data-framer-generated] * { pointer-events: unset }",
      ],
      P = `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      J = [
        '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
        '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
        '[data-hide-scrollbars="true"] { scrollbar-width: none; }',
      ],
      oe = "(background: -webkit-named-image(i))",
      ne = "(grid-template-rows: subgrid)",
      Ee = "(position-area: top right)",
      $e = (dt) =>
        dt
          ? [
              `body { ${Fo}: none; }`,
              `@supports ${oe} and (not ${ne}) { body { ${Fo}: transform; } }`,
            ]
          : [`body { ${Fo}: none; ${Ad}: none; }`],
      Ur = (dt) =>
        dt
          ? [`body { ${Oo}: none; }`, `@supports ${oe} and (not ${Ee}) { body { ${Oo}: filter; } }`]
          : [`body { ${Oo}: none; }`],
      dr = (dt) => (dt ? j : []),
      cr = ".svgContainer svg { display: block; }",
      Be = `@supports (not (overflow: clip)) {
        :root { ${Fd}: hidden; }
    }`,
      ti = `@supports (corner-shape: superellipse(2)) { :root { ${Od}: 1 } }`;
    return [
      ...$e(e),
      ...Ur(e),
      t,
      ...c,
      ...qd,
      ...Wd,
      m,
      f,
      ...h,
      ...C,
      R,
      S,
      y,
      ...A,
      ...dr(e),
      cr,
      P,
      ...J,
      Be,
      T,
      ...Xd,
      ti,
    ];
  },
  Jd = ia(() => Yd(!1)),
  Zd = ia(() => Yd(!0));
function gg() {
  return H.current() === H.preview ? Zd.value : Jd.value;
}
function Qd(e) {
  return Ed(e, gg, "framer-lib-combinedCSSRules");
}
function fE(e, t) {
  let r = H.current() === H.preview ? Zd.value : Jd.value;
  for (let o of r) Ao(o, e, t);
}
function ec(e) {
  return (t, r) =>
    e === !0
      ? `translate(-50%, -50%) ${r}`
      : e === "x"
        ? `translateX(-50%) ${r}`
        : e === "y"
          ? `translateY(-50%) ${r}`
          : r || "none";
}
var me = E(ie(), 1);
var er = E(de(), 1),
  Qt = me.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function xE({ children: e }) {
  if ((0, me.useContext)(Qt).top) return (0, er.jsx)(er.Fragment, { children: e });
  let r = (0, me.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    o = (0, me.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    n = (0, me.useRef)(new Set()).current,
    i = (0, me.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
      if (!l) return null;
      let m = u ? "byName" : "byId",
        f = r.current[m][l];
      if (f) return f;
      let h = u || l;
      if (!c && !n.has(h) && (!r.current.byLayoutId[h] || r.current.byLayoutId[h] === h))
        return (
          r.current.count[m][h] === void 0 &&
            ((r.current.count[m][h] = 0), (r.current.byLayoutId[h] = h), (o.current[m][l] = h)),
          n.add(h),
          h
        );
      let C;
      if (c?.length)
        for (let J = c.length - 1; J >= 0; J--) {
          let oe = c[J];
          Ue(!!oe, "duplicatedId must be defined");
          let ne = r.current[m][oe],
            Ee = r.current.byLastId[oe];
          if (Ee && !C) {
            let dr = r.current.byLayoutId[Ee],
              cr = !dr || dr === u;
            Ee && !n.has(Ee) && (!u || cr) && (C = [Ee, oe]);
          }
          let $e = ne ? r.current.byLayoutId[ne] : void 0,
            Ur = !$e || $e === u;
          if (ne && !n.has(ne) && (!u || Ur))
            return ((o.current[m][l] = ne), (o.current.byLastId[oe] = ne), n.add(ne), ne);
        }
      let S = r.current.byLastId[l];
      if (S && !n.has(S)) return (n.add(S), (o.current.byId[l] = S), S);
      if (C) {
        let [J, oe] = C;
        return ((o.current[m][l] = J), (o.current.byLastId[oe] = J), n.add(J), J);
      }
      let R = r.current.byPossibleId[l];
      if (R && !n.has(R)) return (n.add(R), (o.current.byId[l] = R), R);
      let y = c?.[0],
        T = u || y || l,
        A = (r.current.count[m][T] ?? -1) + 1,
        { layoutId: j, value: P } = bg(T, A, n);
      if (((r.current.count[m][T] = P), (o.current[m][l] = j), c?.length && !u)) {
        let J = c[c.length - 1];
        if ((J && (o.current.byLastId[J] = j), c.length > 1))
          for (let oe = 0; oe < c.length - 1; oe++) {
            let ne = c[oe];
            ne !== void 0 && (o.current.byPossibleId[ne] || (o.current.byPossibleId[ne] = j));
          }
      }
      return ((o.current.byLayoutId[j] = h), n.add(j), j);
    }, []),
    a = (0, me.useCallback)(() => {
      ((r.current = {
        byId: { ...r.current.byId, ...o.current.byId },
        byLastId: { ...r.current.byLastId, ...o.current.byLastId },
        byPossibleId: { ...r.current.byPossibleId, ...o.current.byPossibleId },
        byName: { ...r.current.byName, ...o.current.byName },
        byLastName: { ...r.current.byLastName, ...o.current.byLastName },
        byLayoutId: { ...r.current.byLayoutId, ...o.current.byLayoutId },
        count: { ...r.current.count, byName: {} },
      }),
        (o.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        n.clear());
    }, []),
    s = (0, me.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, er.jsx)(Qt.Provider, { value: s, children: e });
}
function bg(e, t, r) {
  let o = t,
    n = o ? `${e}-${o}` : e;
  for (; r.has(n);) (o++, (n = `${e}-${o}`));
  return { layoutId: n, value: o };
}
function gE({ enabled: e = !0, ...t }) {
  let r = (0, me.useContext)(Qt),
    o = (0, me.useMemo)(() => ({ ...r, enabled: e }), [e]);
  return (0, er.jsx)(Qt.Provider, { ...t, value: o });
}
var tc = E(ie(), 1),
  wr = tc.default.createContext(!1);
var Lr = E(ie(), 1);
var la = E(ie(), 1);
function ua() {
  let [e, t] = la.default.useState(0);
  return la.default.useCallback(() => t((r) => r + 1), []);
}
var zo = E(ie(), 1),
  Ho = typeof document < "u" ? zo.useLayoutEffect : zo.useEffect;
var ca = E(de(), 1),
  rc = 200,
  da = class {
    sharedResizeObserver;
    callbacks = new WeakMap();
    constructor() {
      this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
    }
    updateResizedElements(t) {
      for (let r of t) {
        let o = this.callbacks.get(r.target);
        o && o(r.contentRect);
      }
    }
    observeElementWithCallback(t, r) {
      (this.sharedResizeObserver.observe(t), this.callbacks.set(t, r));
    }
    unobserve(t) {
      (this.sharedResizeObserver.unobserve(t), this.callbacks.delete(t));
    }
  },
  Go = pr() ? new da() : void 0;
function kE(e) {
  let t = ua();
  (0, Lr.useEffect)(() => {
    let r = e?.current;
    if (r)
      return (
        Go?.observeElementWithCallback(e.current, t),
        () => {
          Go?.unobserve(r);
        }
      );
  }, [e, t]);
}
function Tg(e) {
  let t = ua(),
    r = Lr.default.useRef(null);
  function o(n) {
    (n.width === 0 && n.height === 0) ||
      ((!r.current || n.height !== r.current.height || n.width !== r.current.width) &&
        ((r.current = { width: n.width, height: n.height }), t()));
  }
  return (
    Ho(() => {
      if (!e.current) return;
      let { offsetWidth: n, offsetHeight: i } = e.current;
      return (
        o({ width: n, height: i }),
        Go.observeElementWithCallback(e.current, o),
        () => {
          e.current && Go.unobserve(e.current);
        }
      );
    }, []),
    r.current
  );
}
var pa = "data-framer-size-compatibility-wrapper",
  NE = (e) => (t) => {
    let r = Lr.default.useRef(null),
      o = Tg(r),
      n = { [pa]: !0 },
      i = !!o,
      a = t.width ?? rc,
      s = t.height ?? rc;
    return (0, ca.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: r,
      ...n,
      children: i && (0, ca.jsx)(e, { ...t, width: o?.width ?? a, height: o?.height ?? s }),
    });
  };
function oc(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(pa)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(nc)
    .map(ic);
}
function nc(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ic(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(nc);
  return t ? ic(t) : e;
}
var ac = E(ie(), 1);
function Mr(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function sc(e, t, r = () => [], o = {}) {
  let { id: n, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = o,
    l = (0, ac.useContext)(wr),
    u = H.current() === H.canvas;
  Ho(() => {
    !u ||
      l ||
      s ||
      (t.current && n && i && a && pe.queueMeasureRequest(Mr(n), t.current, r(t.current)));
  });
}
function OE(e) {
  let t = e.closest("[data-framer-component-container]");
  t && pe.queueMeasureRequest(Mr(t.id), t, oc(t));
}
var we = E(ie(), 1);
function Cg(e) {
  let t = Object.create(Object.prototype);
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
var Sg =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  lc = Cg(
    (e) =>
      Sg.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var je = E(ie(), 1);
var Tt = { borderRadius: "inherit", cornerShape: "inherit" };
var uc = [1, 2, 2.2],
  Vg = [512, 1024, 2048, 4096];
function dc(e, t) {
  if (e === void 0 || t === void 0) return;
  let r = e,
    o = t,
    n = 0;
  t > e && ((r = t), (o = e), (n = 1));
  let i = r / o,
    a = [];
  for (let s of Vg) {
    if (r <= s) return a;
    a.push({ maxSideSize: s, width: n === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function fa(e, t) {
  try {
    let r = new URL(e);
    return (
      t ? r.searchParams.set("scale-down-to", `${t}`) : r.searchParams.delete("scale-down-to"),
      r.toString()
    );
  } catch {
    return e;
  }
}
var vg = 512;
function Rg(e, t, r) {
  if (!r || r.length === 0 || !t.pixelWidth) return;
  let o = [];
  for (let n of r) {
    if (n.width < vg) continue;
    let i = fa(e, n.maxSideSize);
    o.push(`${i} ${n.width}w`);
  }
  return (o.push(`${fa(e, null)} ${t.pixelWidth}w`), o.join(", ") || void 0);
}
function kg(e, t, r) {
  if (!t.pixelWidth || !t.pixelHeight || !r?.width || !r?.height) return;
  let o = [],
    n = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(r.width / t.pixelWidth, r.height / t.pixelHeight);
  for (let a of uc) {
    let s = Math.round(n * a * i),
      l = fa(e, s);
    o.push({ src: l, scale: a });
  }
  return o;
}
function cc(e, t, r) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: r, srcSet: void 0 };
  if (e) {
    let o = kg(r, t, e);
    if (!o?.length) return { src: r, srcSet: void 0 };
    let [n, ...i] = o;
    return { src: n?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let o = dc(t.pixelWidth, t.pixelHeight);
    return { src: r, srcSet: Rg(r, t, o) };
  }
}
var et = E(de(), 1),
  ma = { position: "absolute", ...Tt, top: 0, right: 0, bottom: 0, left: 0 };
function Ng() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: Es(pe.imagePlaceholderSvg),
  };
}
function Pg(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function pc(e, t) {
  let r = e ?? "center",
    o = t ?? "center";
  return r === "center" && o === "center" ? "center" : r + " " + o;
}
function ya(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...Tt,
    objectPosition: pc(e.positionX, e.positionY),
    objectFit: Pg(e.fit),
  };
}
function Ig(e) {
  let t = je.default.useRef(e ? "auto" : "async"),
    r = (0, je.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    o = (0, je.useCallback)(
      (i) => {
        r(i.currentTarget);
      },
      [r]
    ),
    n = (0, je.useCallback)(
      (i) => {
        i?.complete && r(i);
      },
      [r]
    );
  return { decoding: t.current, onImageLoad: o, onImageMount: n };
}
function Dg({
  image: e,
  containerSize: t,
  nodeId: r,
  alt: o,
  draggable: n,
  avoidAsyncDecoding: i,
}) {
  let a = pe.useImageSource(e, t, r),
    s = ya(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = Ig(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : cc(e.nodeFixedSize, e, a);
  return (0, et.jsx)("img", {
    suppressHydrationWarning: !0,
    ref: c,
    decoding: l,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: m ? e.sizes : void 0,
    srcSet: m,
    src: f,
    onLoad: u,
    alt: o ?? e.alt ?? "",
    style: s,
    draggable: n,
  });
}
function wg({ image: e, containerSize: t, nodeId: r }) {
  let o = je.default.useRef(null),
    n = pe.useImageElement(e, t, r),
    i = ya(e);
  return (
    je.default.useLayoutEffect(() => {
      let a = o.current;
      if (a !== null)
        return (
          a.appendChild(n),
          () => {
            a.removeChild(n);
          }
        );
    }, [n]),
    Object.assign(n.style, i),
    (0, et.jsx)("div", { ref: o, style: { display: "contents", ...Tt } })
  );
}
function Lg({ nodeId: e, image: t, containerSize: r }) {
  let o = je.default.useRef(null),
    n = pe.useImageSource(t, r, e);
  return (
    je.default.useLayoutEffect(() => {
      let i = o.current;
      if (i === null) return;
      let a = ya(t);
      pe.renderOptimizedCanvasImage(i, n, a, e);
    }, [e, t, n]),
    (0, et.jsx)("div", { ref: o, style: { display: "contents", ...Tt } })
  );
}
function fc({ layoutId: e, image: t, ...r }) {
  e && (e += "-background");
  let o = null,
    n = !!e,
    i = null;
  if (ue(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Ke(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = Xs(s * (t.pixelWidth / 2)),
        c = pe.useImageSource(t, l);
      ((o = {
        ...ma,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: pc(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (n = !0));
    } else
      H.current() !== H.canvas
        ? (i = (0, et.jsx)(Dg, { image: t, avoidAsyncDecoding: H.current() === H.export, ...r }))
        : pe.canRenderOptimizedCanvasImage(pe.useImageSource(t))
          ? (i = (0, et.jsx)(Lg, { image: t, ...r }))
          : (i = (0, et.jsx)(wg, { image: t, ...r }));
  let a = i ? ma : (o ?? { ...ma, ...Ng() });
  return n
    ? (0, et.jsx)(at.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, et.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var ha = E(de(), 1);
function Mg(e, t, r = !0) {
  let { borderWidth: o, borderStyle: n, borderColor: i } = e;
  if (!o) return;
  let a, s, l, u;
  if (
    (typeof o == "number"
      ? (a = s = l = u = o)
      : ((a = o.top || 0), (s = o.bottom || 0), (l = o.left || 0), (u = o.right || 0)),
    !(a === 0 && s === 0 && l === 0 && u === 0))
  ) {
    if (r && a === s && a === l && a === u) {
      t.border = `${a}px ${n} ${i}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${a}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${u}px`));
  }
}
function mc(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let r = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Tt,
    pointerEvents: "none",
  };
  return e.border
    ? ((r.border = e.border), (0, ha.jsx)(at.div, { style: r }))
    : (Mg(e, r, !1), (0, ha.jsx)(at.div, { "data-frame-border": !0, style: r, layoutId: t }));
}
function yc(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function hc(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? at[e] : at.div;
}
var Eg = vs();
function Bg(e, t, r) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = r?.x),
    (e["data-framer-layout-hint-y"] = r?.y));
}
function xc(e, t) {
  let r = {};
  return (
    H.current() !== H.canvas ||
      Bg(r, Eg ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    r
  );
}
var jo = E(ie(), 1);
function _o(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let r = e._forwardedOverrides;
  return r
    ? ((t = jo.default.Children.map(t, (o) =>
        jo.default.isValidElement(o) ? jo.default.cloneElement(o, { _forwardedOverrides: r }) : o
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var $o = E(ie(), 1);
function Ko(e, { specificLayoutId: t, postfix: r } = {}) {
  let { name: o, layoutIdKey: n, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, $o.useContext)(Qt);
  return (0, $o.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !n || a)) return;
    let m = c || l({ id: n, name: o, duplicatedFrom: i });
    if (m) return r ? `${m}-${r}` : m;
  }, [u]);
}
function gc({ background: e, backgroundColor: t }, r) {
  t
    ? typeof t == "string" || Ji(t)
      ? (r.backgroundColor = t)
      : g.isColorObject(e) && (r.backgroundColor = e.initialValue || g.toRgbString(e))
    : e &&
      ((e = ce.get(e, null)),
      typeof e == "string" || Ji(e)
        ? (r.background = e)
        : Mo.isLinearGradient(e)
          ? (r.background = Mo.toCSS(e))
          : Eo.isRadialGradient(e)
            ? (r.background = Eo.toCSS(e))
            : g.isColorObject(e) && (r.backgroundColor = e.initialValue || g.toRgbString(e)));
}
function z(e, t, r, o) {
  if ((o === void 0 && (o = t), e[t] !== void 0)) {
    r[o] = e[t];
    return;
  }
}
function bc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Tc(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Cc(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = "preserve-3d")
    : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
          ? (t.left = "50%")
          : e.center === "y" && (t.top = "50%")));
  let { cornerShape: r } = e;
  return (
    As(r)
      ? (t.cornerShape = Fs(() => `superellipse(${r.get()})`))
      : r !== void 0 && (t.cornerShape = `superellipse(${r})`),
    z(e, "size", t),
    z(e, "width", t),
    z(e, "height", t),
    z(e, "minWidth", t),
    z(e, "minHeight", t),
    z(e, "top", t),
    z(e, "right", t),
    z(e, "bottom", t),
    z(e, "left", t),
    z(e, "position", t),
    z(e, "overflow", t),
    z(e, "opacity", t),
    e._border?.borderWidth || z(e, "border", t),
    z(e, "borderRadius", t),
    z(e, "radius", t, "borderRadius"),
    z(e, "color", t),
    z(e, "shadow", t, "boxShadow"),
    z(e, "x", t),
    z(e, "y", t),
    z(e, "z", t),
    z(e, "rotate", t),
    z(e, "rotateX", t),
    z(e, "rotateY", t),
    z(e, "rotateZ", t),
    z(e, "scale", t),
    z(e, "scaleX", t),
    z(e, "scaleY", t),
    z(e, "skew", t),
    z(e, "skewX", t),
    z(e, "skewY", t),
    z(e, "originX", t),
    z(e, "originY", t),
    z(e, "originZ", t),
    gc(e, t),
    t
  );
}
var tt = E(de(), 1);
function Ag(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof xe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var Sc = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  Fg = new Set([...Sc, ...Sc.map((e) => `${e}Capture`)]);
function Og(e) {
  if (e.drag) return "grab";
  for (let t in e) if (Fg.has(t)) return "pointer";
}
var xa = "overflow";
function Wg(e) {
  return Vc(e) ? !0 : e.style ? !!Vc(e.style) : !1;
}
function Vc(e) {
  return xa in e && (e[xa] === "scroll" || e[xa] === "auto");
}
function Uo(e) {
  let {
      left: t,
      top: r,
      bottom: o,
      right: n,
      width: i,
      height: a,
      center: s,
      _constraints: l,
      size: u,
      widthType: c,
      heightType: m,
      positionFixed: f,
      positionAbsolute: h,
    } = e,
    C = Re(e.minWidth),
    S = Re(e.minHeight),
    R = Re(e.maxWidth),
    y = Re(e.maxHeight);
  return {
    top: Re(r),
    left: Re(t),
    bottom: Re(o),
    right: Re(n),
    width: Re(i),
    height: Re(a),
    size: Re(u),
    center: s,
    _constraints: l,
    widthType: c,
    heightType: m,
    positionFixed: f,
    positionAbsolute: h,
    minWidth: C,
    minHeight: S,
    maxWidth: R,
    maxHeight: y,
  };
}
var vc = { x: 0, y: 0, width: 200, height: 200 };
function zg(e) {
  let t = (0, we.useContext)(wr),
    { style: r, _initialStyle: o, __fromCanvasComponent: n, size: i } = e,
    a = Uo(e),
    s = yd(a),
    l = {
      display: "block",
      flex: r?.flex ?? "0 0 auto",
      userSelect: H.current() !== H.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !Ag(e) && !e.__fromCanvasComponent && !Wg(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = we.default.Children.count(e.children) > 0 &&
      we.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = Cc(e);
  (i === void 0 && !n && (bc(h) || (l.width = vc.width), Tc(h) || (l.height = vc.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let C = {};
  (qt(a) &&
    s &&
    !Xi(e) &&
    (C = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, o, h, C, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Bo.applyWillChange(e, l, !0));
  let S = l;
  l.transform || (S = { x: 0, y: 0, ...l });
  let R = ta();
  return (
    e.positionSticky
      ? (!R || pe.isOnPageCanvas || t) &&
        ((S.position = "sticky"),
        (S.willChange = "transform"),
        (S.top = e.positionStickyTop),
        (S.right = e.positionStickyRight),
        (S.bottom = e.positionStickyBottom),
        (S.left = e.positionStickyLeft))
      : R &&
        (e.positionFixed
          ? (S.position = pe.isOnPageCanvas ? "fixed" : "absolute")
          : e.positionAbsolute && (S.position = "absolute")),
    "rotate" in S && S.rotate === void 0 && delete S.rotate,
    [S, s]
  );
}
var Hg = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function Gg(e) {
  let t = {};
  for (let r in e)
    (Os(r) || lc(r)) && !Hg.has(r)
      ? (t[r] = xe(e)[r])
      : (r === "positionTransition" || r === "layoutTransition") &&
        ((t.layout = !0),
        typeof xe(e)[r] != "boolean" && !e.transition && (t.transition = xe(e)[r]));
  return t;
}
function jg(e) {
  return "data-framer-name" in e;
}
var _g = (0, we.forwardRef)(function (t, r) {
    let { name: o, center: n, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = _o(t),
      c = Gg(l),
      m = Ko(t),
      f = Og(t),
      h = (0, we.useRef)(null),
      C = r ?? h,
      S = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": xe(t)["data-framer-offset-parent-id"],
      };
    !jg(t) && o && (xe(S)["data-framer-name"] = o);
    let [R, y] = zg(l),
      T = Uo(l),
      A = Xi(T),
      j = n && !(y && !A && qt(T)) ? n : void 0;
    (j
      ? c.transformTemplate || (c.transformTemplate = ec(n))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(S, xc(j, l.style)),
      sc(t, C));
    let P = hd(t),
      J = (0, we.useContext)(wr),
      oe = Kg(l, T, y, J),
      ne = wo(
        (0, tt.jsxs)(tt.Fragment, {
          children: [
            P
              ? (0, tt.jsx)(fc, {
                  alt: t.alt ?? "",
                  image: P,
                  containerSize: y ?? void 0,
                  nodeId: t.id && Mr(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, tt.jsx)(mc, { ...a, border: i, layoutId: m }),
          ],
        }),
        oe
      ),
      Ee = hc(t.as),
      $e = yc(P);
    return (
      t.fitImageDimension &&
        $e &&
        ((R[t.fitImageDimension] = "auto"), (R.aspectRatio = $e.width / $e.height)),
      (0, tt.jsxs)(Ee, { ...S, ...c, layoutId: m, style: R, ref: C, children: [ne, s] })
    );
  }),
  $g = (0, we.forwardRef)(function (t, r) {
    let { visible: o = !0 } = t;
    return o ? (0, tt.jsx)(_g, { ...t, ref: r }) : null;
  }),
  Rc = Qd($g);
function Kg(e, t, r, o) {
  if (o) return r ? { width: r.width, height: r.height } : 1;
  let { _usesDOMRect: n } = e,
    { widthType: i = 0, heightType: a = 0, width: s, height: l } = t;
  return r && !n
    ? r
    : i === 0 && a === 0 && typeof s == "number" && typeof l == "number"
      ? { width: s, height: l }
      : n || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
var Ug = ["actionIdentifier", "identifier", "controls"];
function qo(e) {
  return b(e) && Ug.every((t) => t in e);
}
function ZB(e) {
  return b(e) && "gamepadId" in e;
}
function QB(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let r = _s();
  return (t.add(r), { ...e, identifier: r });
}
var qg = ["start", "center", "end"];
function nA(e) {
  return p(e) ? qg.includes(e) : !1;
}
var Xg = ["fixed", "minmax"];
function iA(e) {
  return p(e) ? Xg.includes(e) : !1;
}
var Yg = ["fixed", "auto", "fit"];
function aA(e) {
  return p(e) ? Yg.includes(e) : !1;
}
var Jg = "columnMasonry";
var Zg = ["stack", "grid"],
  sA = {
    layout: void 0,
    gap: void 0,
    stackAlignment: void 0,
    stackDirection: void 0,
    stackDistribution: void 0,
    stackWrapEnabled: void 0,
    gridColumnCount: void 0,
    gridRowCount: void 0,
    gridAlignment: void 0,
    gridColumnWidthType: void 0,
    gridColumnWidth: void 0,
    gridColumnMinWidth: void 0,
    gridRowHeightType: void 0,
    gridRowHeight: void 0,
    gridType: void 0,
  },
  kc = "horizontal",
  Nc = "center",
  Pc = "center",
  Ic = "layout";
function Ct(e) {
  return Ic in e;
}
function lA(e) {
  return p(e) ? Zg.includes(e) : !1;
}
var Qg = ["start", "end", "center"];
function eb(e) {
  return k(e) ? !1 : O(e) ? !0 : ga(e) && Qg.includes(e);
}
function uA(e) {
  return !Ct(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : eb(e.stackDistribution);
}
function Dc(e) {
  return Ct(e) && !k(e.layout);
}
function dA(e) {
  return Dc(e) && e.layout === "stack";
}
function tb(e) {
  return Dc(e) && e.layout === "grid";
}
function cA(e) {
  return tb(e) && e.gridType === Jg;
}
function pA(e) {
  return Ic in e;
}
function rb(e) {
  if (wc(e)) return e;
  if (p(e))
    switch (e) {
      case "row":
        return "horizontal";
      case "column":
        return "vertical";
      default:
        return;
    }
}
var Xo = ["horizontal", "vertical"];
function wc(e) {
  return p(e) && Xo.includes(e);
}
function fA(e) {
  if (!wc(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      L(e);
  }
}
var ob = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function nb(e) {
  return p(e) && ob.includes(e);
}
var Yo = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function ga(e) {
  return p(e) && Yo.includes(e);
}
function Jo(e) {
  if (!ga(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function ib(e) {
  if (ga(e)) return e;
  if (nb(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var ab = ["flex-start", "flex-end", "center"];
function Lc(e) {
  return p(e) && ab.includes(e);
}
var Zo = ["start", "center", "end"];
function Mc(e) {
  return p(e) ? Zo.includes(e) : !1;
}
function sb(e) {
  if (Mc(e)) return e;
  if (Lc(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function Ec(e) {
  if (Lc(e) || !Mc(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function mA(e, t) {
  switch (e) {
    case "stackDirection":
      return rb(t);
    case "stackDistribution":
      return ib(t);
    case "stackAlignment":
      return sb(t);
    default:
      return t;
  }
}
function yA(e) {
  return !e || !Ct(e) ? null : (e.layout ?? null);
}
var lb = ["sticky", "fixed", "absolute"],
  ub = new Set(lb);
function gA(e) {
  return p(e) && ub.has(e);
}
var bA = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  db = "position";
function Bc(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : db in e;
}
var VA = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
  },
  vA = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
  },
  cb = "carouselEffectEnabled";
function pb(e) {
  return cb in e;
}
function Ac(e) {
  return fb(e) && e.carouselEffectEnabled === !0;
}
function Er(e) {
  return Bc(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function fb(e) {
  return !(
    !pb(e) ||
    !Ct(e) ||
    e.layout !== "stack" ||
    mb(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function mb(e) {
  return !!e.cache.carouselAncestorId;
}
function RA(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !Er(e));
}
var ba = ["default", "reverse"],
  IA = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  DA = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  yb = "tickerEffectEnabled";
function hb(e) {
  return yb in e;
}
function wA(e) {
  return xb(e) && e.tickerEffectEnabled === !0;
}
function xb(e) {
  return !(
    !hb(e) ||
    !Ct(e) ||
    e.layout !== "stack" ||
    gb(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function gb(e) {
  return !!e.cache.tickerAncestorId;
}
function LA(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function MA(e) {
  return e === "default" || e === "reverse";
}
function Fc(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var bb = "usesDOMRect";
function Oc(e) {
  return bb in e;
}
var Tb = ["start", "center", "end"],
  Qo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ta = [...Qo, "all"];
function Wc(e) {
  return V(e) ? `Span ${e}` : "Span all";
}
var zc = Qo.map(Wc),
  Hc = Ta.map(Wc);
function FA(e) {
  return e === "all" ? !0 : V(e) && e > 0;
}
function OA(e) {
  return V(e) && e > 0;
}
function WA(e) {
  return p(e) ? Tb.includes(e) : !1;
}
var zA = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  Cb = "gridItemHorizontalAlignment";
function HA(e) {
  return Cb in e;
}
var _A = { width: 100, height: 100 },
  $A = { width: 1, height: 1 },
  Sb = "width";
function Gc(e) {
  return so(e) ? !1 : Sb in e;
}
var _c = [
    "%",
    "px",
    "cap",
    "ch",
    "em",
    "ex",
    "ic",
    "lh",
    "rem",
    "rlh",
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "ms",
    "s",
    "Hz",
    "kHz",
    "dpi",
    "dpcm",
    "dppx",
    "x",
    "deg",
    "grad",
    "rad",
    "turn",
    "fr",
    "vh",
    "svh",
    "lvh",
    "dvh",
    "vw",
    "svw",
    "lvw",
    "dvw",
    "vmin",
    "svmin",
    "lvmin",
    "dvmin",
    "vmax",
    "svmax",
    "lvmax",
    "dvmax",
    "vb",
    "svb",
    "lvb",
    "dvb",
    "vi",
    "svi",
    "lvi",
    "dvi",
  ],
  Vb = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${_c.join("|")})?$`, "i"),
  vb = new Map(_c.map((e) => [e.toLowerCase(), e]));
function tr(e, t) {
  let r = e.match(Vb);
  if (!r) return [NaN, void 0];
  let [, o, n] = r,
    i = parseFloat(o);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!n) return [i, t];
  let a = vb.get(n.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${n}`);
  return [i, a];
}
function qA(e) {
  if (!p(e)) return !1;
  let [t] = tr(e);
  return !Number.isNaN(t);
}
function jc(e, t) {
  return `${e}${t}`;
}
function XA(e, { parentSize: t, viewportSize: r }) {
  if (k(e)) return;
  if (V(e)) return e;
  let [o, n] = tr(e);
  if (!Number.isNaN(o))
    switch (n) {
      case "px":
        return o;
      case "%":
        return t ? (o / 100) * t : void 0;
      case "vh":
      case "vw":
        return r ? (o / 100) * r : void 0;
      default:
        return;
    }
}
function YA(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [r] = tr(t[0]),
      o = jc(r, "px");
    return [o, o, o, o];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((r) => {
        let [o] = tr(r);
        return jc(o, "px");
      });
}
var Rb = /(?<value>\d{1,5})px/gu;
function JA(e, t) {
  return e.replace(Rb, (r, o) => `${t(Number(o))}px`);
}
function r0(e, t) {
  let r = Ca(e, t);
  return !ke(r);
}
function Ca(e, t) {
  let r = kb(e, t);
  return r && ft(r) ? r : null;
}
function kb(e, t, r = !0) {
  let o = e.get(t);
  if (!o) return null;
  if (Ce(o)) return o;
  if (r) {
    let i = null;
    if (
      (Wt(o)
        ? (i = o.cache.replicaAncestorId)
        : o.cache.masterAncestorId && (i = o.cache.masterAncestorId),
      i)
    ) {
      let a = e.getNode(i);
      return !a || !Ce(a) ? null : a;
    }
  }
  let n = e.getGroundNodeFor(o);
  return !n || !Ce(n) ? null : n;
}
function o0(e, t) {
  return t.parentid && ft(e.get(t.parentid));
}
var Sa = "element",
  $c = "collection",
  Kc = "collectionItemId",
  Uc = "pathVariables",
  Va = "framer/page-link,";
function en(e) {
  return ue(e) && e.startsWith(`data:${Va}`);
}
function a0(e = null, t = {}) {
  let r = e || "none",
    o = new URL(`data:${Va}${r}`);
  return (
    t.element && o.searchParams.append(Sa, t.element),
    t.collectionItem &&
      (o.searchParams.append($c, t.collectionItem.collection),
      o.searchParams.append(Kc, t.collectionItem.collectionItemId),
      o.searchParams.append(Uc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    o.href
  );
}
function va(e) {
  if (en(e))
    try {
      let t = new URL(e),
        r = t.pathname.substring(Va.length),
        o = t.searchParams,
        n = o.has(Sa) ? o.get(Sa) : void 0,
        i,
        a = o.get($c),
        s = o.get(Kc),
        l = o.get(Uc);
      if (a && s && l) {
        let u = Object.fromEntries(new URLSearchParams(l).entries());
        i = { collection: a, collectionItemId: s, pathVariables: u };
      }
      return {
        target: r === "none" ? null : r,
        element: n === "none" ? void 0 : n,
        collectionItem: i,
      };
    } catch {
      return;
    }
}
function s0(e) {
  return !en(e);
}
function l0(e, t, r) {
  let o = t.getAttribute("data-framer-page-link-target"),
    n,
    i;
  if (o) {
    n = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let s = t.getAttribute("data-framer-page-link-path-variables");
    s && (i = Object.fromEntries(new URLSearchParams(s).entries()));
  } else {
    let s = t.getAttribute("href");
    if (!s) return !1;
    let l = va(s);
    if (!l?.target) return !1;
    ((o = l.target), (n = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = n ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(o, n, Object.assign({}, r, i), a), !0);
}
var qc = "|local|";
function Xc(e, t) {
  for (let r in e) if (e[r] === t) return !0;
  return !1;
}
function Yc(e) {
  return Xc(G, e);
}
var Nb = qr("RawControlProp"),
  Jc = "type";
function Le(e) {
  if (!b(e) || !(Jc in e)) return !1;
  let t = e[Jc];
  return t === null
    ? (Nb.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Yc(t);
}
function g0(e) {
  return b(e) ? Object.values(e).every((t) => t === void 0 || Le(t)) : !1;
}
var Ra = "$control__";
function ka(e) {
  return e.startsWith(Ra);
}
function T0(e) {
  return e.substring(Ra.length);
}
function Pb(e) {
  return `${Ra}${e}`;
}
function C0(e) {
  let t = {};
  for (let r of Object.keys(e)) {
    let o = e[r];
    t[Pb(r)] = o;
  }
  return t;
}
function S0(e) {
  for (let t in e) if (ka(t)) return !0;
  return !1;
}
var St = {
    collectionControlProp: {
      media: !0,
      embeds: !0,
      links: !0,
      styles: !1,
      variables: !1,
      blockquotes: !0,
      tables: !0,
    },
    collectionControlPropLocalized: {
      media: !0,
      embeds: !0,
      links: !0,
      styles: !1,
      variables: !1,
      blockquotes: !0,
      tables: !0,
    },
    controlProp: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !1,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    controlPropLocalized: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !1,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    richTextNode: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !0,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    richTextNodeLocalized: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !0,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
  },
  Ib = ["blockStyles", "backgroundMask", "textStylePreset"],
  Db = ["header", "cell"];
function k0(e) {
  return p(e) && Db.some((t) => e === t);
}
var wb = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  Lb = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  N0 = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function Zc(e) {
  return p(e) && e in St;
}
function Mb(e) {
  return Zc(e) && e.endsWith("Localized");
}
function P0(e) {
  return Mb(e) ? e : `${e}Localized`;
}
var Eb = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function Bb(e) {
  return Eb[e];
}
function I0(e) {
  return { ...e, variant: Bb(e.variant), childNodes: e.childNodes };
}
function D0(e) {
  return rr(e) && St[e.variant].styles;
}
function w0(e) {
  return Lb.some((t) => t in e);
}
function L0(e) {
  return Ib.some((t) => t in e);
}
function M0(e) {
  return rr(e) && !e.variant.endsWith("Localized");
}
function Vt(e, t) {
  return St[e][t];
}
function rr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    Zc(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function Ab(e) {
  return Ws(e, "type") && p(e.type) && wb[e.type] === !0;
}
function Ne(e, t) {
  if (!Ab(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return St[t].tables;
    case "module":
      return St[t].embeds;
    case "media":
      return St[t].media;
    case "blockquote":
      return St[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((r) => r.childNodes.every((o) => Ne(o, t)));
  }
  L(e);
}
var Qc = { cache: !0, treeState: !0, mutable: !0, transient: !0, update: !0 };
var Na = (e) => {};
function A0(e) {
  Na = e;
}
var Pa = (e) => {};
function F0(e) {
  Pa = e;
}
var Ia = (e, t, ...r) => {
  e.assign(t, ...r);
};
function O0(e) {
  Ia = e;
}
var tn = class {
  treeLineage = null;
  draft = null;
  hierarchyChange = !1;
  localizationSourceOwnRevision = 0;
  localizationSourceRevision = 0;
  localizationTranslationOwnRevision = 0;
  localizationTranslationRevision = 0;
  tree() {
    return this.treeLineage?.latestTree;
  }
  reset() {
    this.hierarchyChange = !1;
  }
};
function X0(e, t, ...r) {
  Ia(e, t, ...r);
}
function Ob(e) {
  return e ? e.toJS instanceof Function : !1;
}
var rn = { mutable: !0, update: 0 },
  Wb = { ...Qc, __class: !0, children: !0, id: !0 },
  on = class extends ol("MutableNode") {
    get treeState() {
      return this.cache;
    }
    constructor(t, r) {
      (super(),
        Na(this),
        (this.id = t?.id ?? mr()),
        (this.parentid = t?.parentid ?? Ks),
        (this.cache = t?.cache ?? r ?? new tn()),
        (this.duplicatedFrom = t?.duplicatedFrom ?? null),
        (this.children = t?.children ?? new Ge()),
        (this.originalid = t?.originalid ?? null),
        (this.mutable = t?.mutable ?? !0),
        (this.update = t?.update ?? 0),
        t?.replicaInfo && this.setProp("replicaInfo", t.replicaInfo));
    }
    assign(...t) {
      return Object.assign(this, ...t);
    }
    keys() {
      return Object.keys(this);
    }
    values() {
      return Object.values(this);
    }
    entries() {
      return Object.entries(this);
    }
    raw(t) {
      return Object.assign({}, this, t);
    }
    getDataOverrides() {
      return this;
    }
    setProp(t, r) {
      let o = this.asDraft();
      o[t] = r;
    }
    resetToDefault(t) {
      let r = this.asDraft();
      r[t] = void 0;
    }
    deleteProp(t) {
      let r = this.asDraft();
      delete r[t];
    }
    hasProp(t) {
      return Object.hasOwn(this, t);
    }
    equals(t) {
      return this === t;
    }
    getPrimaryId() {
      return this.originalid ?? this.id;
    }
    toJS() {
      let t = { id: this.id, __class: this.__class };
      this.children && (t.children = this.replicaInfo ? [] : this.children.map((r) => r.toJS()));
      for (let r in this) {
        if (Wb[r]) continue;
        let o = this[r];
        if (r === "replicaInfo" && o) {
          t[r] = JSON.parse(JSON.stringify(o));
          continue;
        }
        if (Ob(o)) {
          t[r] = o.toJS();
          continue;
        }
        t[r] = o;
      }
      return t;
    }
    set(t, r) {
      this.treeState.treeLineage?.editHooks?.onTreeEditStart();
      try {
        let o = this.asDraft(r);
        return (o.verifyPropertiesToSet(t), o.assign(t), o);
      } catch (o) {
        throw (this.treeState.treeLineage?.editHooks?.onTreeEditError(o), o);
      } finally {
        this.treeState.treeLineage?.editHooks?.onTreeEditEnd();
      }
    }
    verifyPropertiesToSet(t) {
      this.treeState.treeLineage &&
        (x(!t.id, "`id` should not be set"),
        x(!t.parentid || this.parentid === t.parentid, "`parentid` should not be set"),
        x(!t.children, "`children` should not be set"),
        x(!t.mutable, "`mutable` should not be set"),
        x(!t.update, "`update` should not be set"),
        x(!t.cache, "`cache` should not be set"));
    }
    cloneEmpty() {
      return new this.constructor();
    }
    clone(t) {
      let r = this.cloneEmpty();
      if ((r.assign(this, rn, { cache: r.cache, id: r.id }, t), t?.children)) return r;
      let o = this.children;
      return (o && (r.children = new Ge(o.map((n) => n.clone({ parentid: r.id })))), r);
    }
    cloneWithIds(t) {
      let r = this.cloneEmpty();
      if ((r.assign(this, rn, { cache: r.cache }, t), t?.children)) return r;
      let o = this.children;
      return (o && (r.children = new Ge(o.map((n) => n.cloneWithIds()))), r);
    }
    cloneWithRenamedIds(t, r) {
      let o = this.cloneEmpty();
      if ((o.assign(this, rn, { cache: o.cache, id: o.id }, r), t.set(this.id, o.id), r?.children))
        return o;
      let n = this.children;
      return (
        n && (o.children = new Ge(n.map((i) => i.cloneWithRenamedIds(t, { parentid: o.id })))),
        o
      );
    }
    cloneWithCallback(t, r) {
      let o = this.cloneEmpty(),
        n = t(this);
      if (
        (o.assign(this, rn, { cache: o.cache, id: o.id }, n),
        r && o.setProp("parentid", r),
        n?.children)
      )
        return o;
      let i = this.children;
      return (i && (o.children = new Ge(i.map((a) => a.cloneWithCallback(t, o.id)))), o);
    }
    freeze() {
      return (
        x(this.mutable, "Node must be mutable when freezing"),
        (this.mutable = !1),
        (this.treeState.draft = null),
        !1,
        this
      );
    }
    preCommit(t, r) {}
    preFreeze(t, r) {}
    treeOrLatest(t) {
      return t || this.tree();
    }
    tree() {
      return this.treeState?.treeLineage?.latestTree;
    }
    isMutable() {
      return this.mutable;
    }
    asDraft(t) {
      return this.mutable ? this : this.treeOrLatest(t)?.getNodeAsDraft(this);
    }
    draftOrCurrent() {
      return this.treeState.draft ? this.treeState.draft : this;
    }
    getChild(t) {
      if (!this.children || t < 0 || t >= this.children.length) return null;
      let r = this.children.at(t);
      return r || null;
    }
    addChild(t) {
      return (
        x(this.mutable, "Node must be mutable when adding children"),
        x(this.children, "Node must have children"),
        this.children && ((t.parentid = this.id), this.children.push(t)),
        t
      );
    }
    find(t) {
      if (t(this)) return this;
      let r = this.children;
      if (r)
        for (let o of r) {
          let n = o.find(t);
          if (n) return n;
        }
      return null;
    }
    *ancestors() {
      let t = this.tree();
      if (!t || !t.has(this.id)) throw Error("Only nodes in a tree have access to their parents.");
      let r = t.get(this.parentid);
      for (; r;) (yield r, (r = t.get(r.parentid)));
    }
    *fastWalk(t = {}) {
      let r = zb(this);
      if ((yield r, r.skipChildren)) return;
      let o = this.children;
      if (o) for (let n = 0, i = o.length; n < i; n++) yield* o.at(n).fastWalk();
    }
    get(t) {
      return this[t];
    }
    walk() {
      let t = !0,
        r = !1,
        o = [this, 0],
        n = [];
      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          if (t) return ((t = !1), { value: o[0], done: !1 });
          if (r) return { value: void 0, done: !0 };
          for (; !o[0].children || o[1] >= o[0].children.length;) {
            let a = n.pop();
            if (!a) return ((r = !0), { value: void 0, done: !0 });
            o = a;
          }
          let i = o[0].children.at(o[1]++);
          return (i.children && (n.push(o), (o = [i, 0])), { value: i, done: !1 });
        },
      };
    }
  };
function zb(e) {
  let t = !0;
  return (
    "isLoaded" in e &&
      (x(typeof e.isLoaded == "function", "isLoaded must be a function"), (t = !!e.isLoaded())),
    {
      id: e.id,
      __class: e.__class,
      update: e.update,
      mutable: e.mutable,
      isLoaded: t,
      get: (o) => e[o],
      getSubfield: (...o) => {
        let n = e;
        for (let i of o) {
          if (!n || typeof n != "object") return;
          n = n[i];
        }
        return n;
      },
      isKeySetAndNotInherited: (o) => {
        if (!e.originalid) return !0;
        let n = e.tree();
        if (!n) return !1;
        let i = e;
        for (; i && !i.replicaInfo;) i = n.get(i.parentid);
        let a = i?.replicaInfo?.overrides[e.originalid];
        return !!(a && (Object.hasOwn(a, o) || a._deleted?.includes(o)));
      },
      keys: () => Object.keys(e).values(),
      getLocalizationSourceGroupCache: () => e.cache.localizationSourceGroup,
      setLocalizationSourceGroupCache: (o) => {
        let n = e.cache;
        n.localizationSourceGroup = o;
      },
      skipChildren: !1,
    }
  );
}
var Hb = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  Gb = {
    type: "box",
    color: "rgba(0,0,0,0.25)",
    x: 0,
    y: 2,
    inset: !1,
    blur: 5,
    spread: 0,
    diffusion: 0.5,
    focus: 0.5,
  };
function ep(e, t) {
  let r = { ...t, ...e };
  return (r.id || (r.id = mr()), r);
}
function Da(e) {
  if (!b(e) || !("id" in e)) return !1;
  for (let r of Qi) if (!(r in e)) return !1;
  return !0;
}
function or(e) {
  return F(e) && e.every(Da);
}
function eF(e) {
  return ep(e, Hb);
}
function nn(e) {
  return ep(e, Gb);
}
function tF(e) {
  return { ...e, id: mr() };
}
function rF(e, t) {
  return { ...e, ...t };
}
function jb(e, t = 0) {
  let r = e.indexOf("var(", t);
  if (r === -1) return null;
  let o = r + 4,
    n = 1,
    i;
  for (let a = o; a < e.length; a++)
    if (e[a] === "(") n++;
    else if (e[a] === ")") {
      if ((n--, n === 0)) return { start: r, end: a + 1, commaIndex: i };
    } else i === void 0 && e[a] === "," && (i = a);
  return null;
}
function _b(e, t) {
  if (!t) return {};
  let { start: r, end: o, commaIndex: n } = t,
    i = e.substring(o).trim();
  return n
    ? {
        customProperty: e.substring(r + 4, n),
        fallback: e.substring(n + 1, o - 1).trim(),
        metadata: i,
      }
    : { customProperty: e.substring(r + 4, o - 1), metadata: i };
}
function an(e) {
  let t = jb(e);
  return _b(e, t);
}
function uF(e) {
  return !(!tp(e) || e.__class === "ImageStylePresetNode");
}
function dF(e) {
  return wa(e) && !mt(e);
}
function cF(e) {
  if (!tp(e)) return !1;
  switch (e.__class) {
    case "CodeComponentNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "ImageStylePresetNode":
    case "ShaderNode":
      return !0;
    default:
      return !1;
  }
}
function tp(e) {
  return wa(e) && gt(e);
}
var rp = "boxShadows",
  op = (e) => e === rp;
function wa(e) {
  return b(e) ? rp in e : !1;
}
function pF(e) {
  return !wa(e) || !or(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var np = "shadows",
  ip = (e) => e === np;
function hF(e) {
  return np in e;
}
var xF = { shadows: void 0 };
function La(e) {
  return b(e) ? e && Zi.every((t) => t in e) : !1;
}
function gF(e) {
  return F(e) && e.every(La);
}
var $b = "removeTokenVariables";
function ap(e) {
  return typeof e == "object" && e !== null && $b in e;
}
function EF(e, t = !1) {
  let r = {};
  for (let o of e) {
    let n = o.colorForMode(t);
    n && (r[ln(o)] = n);
  }
  return r;
}
function lp(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let r of e) {
    let o = ln(r);
    if (g.isP3String(r.light)) {
      t.light.p3 += `${o}: ${r.light};`;
      let n = xt.fromString(r.light)?.toString("srgb");
      n && (t.light.srgb += `${o}: ${n};`);
    } else t.light.srgb += `${o}: ${r.light};`;
    if (!(!r.dark || r.softDeleted))
      if (g.isP3String(r.dark)) {
        t.dark.p3 += `${o}: ${r.dark};`;
        let n = xt.fromString(r.dark)?.toString("srgb");
        n && (t.dark.srgb += `${o}: ${n};`);
      } else t.dark.srgb += `${o}: ${r.dark};`;
  }
  return t;
}
function BF(e) {
  let t = lp(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function AF(e) {
  let t = lp(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function FF(e, t, r = !1) {
  let o,
    n = {};
  for (let a of t) {
    let s = a.colorForMode(r);
    if (!s) return;
    n[a.id] = s;
  }
  if (Ye(e)) {
    let a = e.html;
    if (rr(a) || t.some((l) => a.includes(ln(l)))) {
      let l = e.removeTokenVariables(n);
      l !== a && ((o ??= {}), (o.html = l));
    }
  }
  let i = Kb(e, n);
  return (i && (o = { ...o, ...i }), o);
}
function up(e) {
  return e === "children" || e === "id" || e === "cache";
}
function Kb(e, t) {
  let r;
  return (
    (e instanceof on ? e.entries() : Object.entries(e)).forEach(([n, i]) => {
      if (up(n)) return;
      let a,
        s = ip(n) || op(n);
      if (F(i)) {
        let l = [],
          u = !1;
        (i.forEach((c, m) => {
          let h = s && (La(c) || Da(c)) ? sn(c, t) : sp(String(m), c, t);
          (h && (u = !0), l.push(h || c));
        }),
          u && (a = l));
      } else a = sp(n, i, t);
      typeof a < "u" && (r || (r = {}), (r[n] = a));
    }),
    r
  );
}
function Br(e, t) {
  if (F(e)) {
    for (let r of e) if (Br(r, t)) return !0;
    return !1;
  }
  if (b(e)) {
    let r = Object.values(e);
    for (let o of r) if (Br(o, t)) return !0;
    return !1;
  }
  return vt(e) ? pp(e) === t : !1;
}
function OF(e, t) {
  if (Ye(e)) {
    let r = e.getTextColors(!1);
    for (let n of r) if (Br(n, t)) return !0;
    let o = e.getFills();
    for (let n of o) if (Br(n, t)) return !0;
  }
  for (let r in e) if (!up(r) && Br(e[r], t)) return !0;
  return !1;
}
function dp(e, t) {
  if (!vt(e)) return;
  let r = pp(e);
  if (r) return t[r];
}
function sp(e, t, r) {
  if (ka(e)) return Ub(t, r);
  if (ap(t)) {
    let n = t.removeTokenVariables(r);
    if (n) return n;
  }
  let o = dp(t, r);
  if (o) return o;
  if (vt(t)) return cp(t);
}
function Ub(e, t) {
  if (!Le(e)) return;
  let { value: r } = e,
    o = sn(r, t);
  return o === void 0 ? void 0 : { ...e, value: o };
}
function sn(e, t) {
  if (F(e)) {
    let r = !1,
      o = e.map((n) => {
        let i = sn(n, t);
        return i ? ((r = !0), i) : n;
      });
    return r ? o : void 0;
  }
  if (b(e)) {
    let r = {},
      o = !1;
    for (let n in e) {
      let i = sn(e[n], t);
      i ? ((o = !0), (r[n] = i)) : (r[n] = e[n]);
    }
    return o ? r : void 0;
  }
  if (vt(e)) return dp(e, t);
}
var Ma = "--token-";
function ln(e) {
  return `${Ma}${e.id}`;
}
function WF(e, t = {}) {
  let r = e.light;
  if (!r) return "";
  let o = g.isColor(r) ? g.toRgbString(g(r)) : r,
    n = `var(${ln(e)}, ${o})`;
  return t.excludeMetadata === !0 ? n : `${n} ${qb(e.name, t.packageIdentifier)}`;
}
function cp(e) {
  let { customProperty: t, fallback: r } = an(e);
  if (t && r) return `var(${t}, ${r})`;
  if (t) return `var(${t})`;
}
function zF(e, t) {
  if (vt(e)) {
    let r = cp(e);
    if (r) return r;
  }
  return p(e) && t ? t(e) : e;
}
function qb(e, t) {
  let r = { name: e };
  return (t && t !== qc && (r.packageIdentifier = t), `/* ${JSON.stringify(r)} */`);
}
function Ea(e) {
  return e ? e.slice(Ma.length) : null;
}
function HF(e, t) {
  let r = t.commaIndex ?? t.end - 1,
    o = e.substring(t.start + 4, r);
  return Ea(o);
}
function GF(e) {
  return Ea(e);
}
function pp(e) {
  let { customProperty: t } = an(e);
  return Ea(t);
}
function jF(e) {
  return an(e).fallback || null;
}
function vt(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${Ma}`);
}
function UF(e) {
  let t = e;
  switch (t) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
    case "fixed":
      return !0;
    case "__legacy":
      return !1;
    default:
      return !1;
  }
}
function qF(e) {
  return e > 0 ? "any" : "__legacy";
}
function XF(e) {
  switch (e) {
    case "any":
    case "auto":
      return !0;
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !1;
    default:
      L(e);
  }
}
function YF(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
      return !0;
    case "fixed":
    case "__legacy":
      return !1;
    default:
      L(e);
  }
}
function JF(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !0;
    case "auto":
      return !1;
    default:
      L(e);
  }
}
function ZF(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let r = parseInt(t, 10);
  return !Number.isFinite(r) || r < 0 ? 0 : r;
}
function QF(e, t) {
  return e?.[t] !== void 0;
}
var Xb = "getBreakpointValues";
function rO(e) {
  return e ? Xb in e : !1;
}
var Yb = "min",
  Jb = "max",
  Zb = "canvasClassName";
function Qb(e) {
  return b(e)
    ? Yb in e
      ? V(e.min)
      : Jb in e
        ? V(e.max)
        : Zb in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function fp(e) {
  if (!b(e)) return !1;
  for (let t in e) {
    let r = e[t];
    if (Qb(r)) return !0;
  }
  return !1;
}
function un(e, t) {
  if (!k(e))
    for (let r in e) {
      let o = e[r],
        n = o?.min ?? 0,
        i = o?.max ?? 1 / 0;
      if (t >= n && t <= i) return r;
    }
}
var dO = { layoutTemplateIdentifierOverride: void 0 },
  tT = "layoutTemplateIdentifier";
function mp(e) {
  return e ? tT in e : !1;
}
function yp(e, t) {
  if (!t || !ft(t)) return;
  let r = e.getScopeNodeFor(t);
  if (mp(r)) return r.layoutTemplateIdentifier;
}
function cO(e) {
  return !!(mp(e) && e.layoutTemplateIdentifier);
}
function hp(e) {
  return !e || !Oc(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function rT(e, t) {
  let r = e.framerDefaultVariant,
    o = e.framerBreakpoints;
  if (!o) return r;
  let n = JSON.parse(o);
  return un(n, t) ?? r;
}
function pO(e, t, r) {
  let o = t.componentForIdentifier(e)?.annotations;
  if (o) return rT(o, r);
}
var nr = 16,
  yO = { rootFontSize: void 0 },
  Aa = "rootFontSize";
function hO(e) {
  return Aa in e;
}
function xp(e) {
  return Aa in e && V(e[Aa]);
}
var gp = "--framer-root-font-size";
function IO(e, t, r, o) {
  if (o) {
    let n = oT(t, o, r);
    if (V(n)) return n;
  }
  if (Ft(e)) return e.getPrimaryVariant().rootFontSize;
  if (Xe(e)) {
    let n = e.layoutTemplateIdentifier;
    return n ? bp(n, r) : e.getPrimaryVariant().rootFontSize;
  }
  return iT(t.root, r);
}
function oT(e, t, r) {
  let o = Ca(e, t);
  if (o) return hp(o) ? nT(e, r, o) : xp(o) ? o.rootFontSize : nr;
}
function nT(e, t, r) {
  let o = yp(e, r);
  if (!o) return nr;
  let n = be(o)?.localId;
  if (!n) return nr;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(n)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !fp(i)) return nr;
  x(Gc(r), "Breakpoint node must have size properties");
  let a = un(i, r.width);
  return a && V(i[a]?.rootFontSize) ? i[a].rootFontSize : nr;
}
function iT(e, t) {
  if (e.layoutTemplateIdentifier) return bp(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let r = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return Tp(r);
}
function bp(e, t) {
  let r = be(e),
    o = t.forType("layoutTemplate").getByLocalId(r.localId).annotations(null, r.exportSpecifier);
  return Tp(o);
}
function Tp(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (V(t)) return t;
}
var dn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  Me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function Cp(e) {
  let t = Gs(e),
    r = dn.charAt(t % dn.length);
  for (t = Math.floor(t / dn.length); t > 0;)
    ((r += Me.charAt(t % Me.length)), (t = Math.floor(t / Me.length)));
  return r;
}
function Pe() {
  return rt(dn) + rt(Me) + rt(Me) + rt(Me) + rt(Me) + rt(Me) + rt(Me) + rt(Me) + rt(Me);
}
function rt(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
function Sp(e) {
  let t = {};
  for (let r in e) {
    let o = e[r];
    k(o) || (t[r] = o);
  }
  return t;
}
function GO(e) {
  for (let t in e) {
    let r = e[t];
    if (r) return r;
  }
}
var Oa = "webPage",
  aT = "webPageId",
  Wa = "url",
  sT = "url";
function Rt(e) {
  return b(e) && "type" in e && (e.type === Oa || e.type === Wa);
}
function Fa(e) {
  return Rt(e) && e.type === Wa;
}
function ir(e) {
  return Rt(e) && e.type === Oa;
}
function lT(e) {
  if (sT in e) return Wa;
  if (aT in e) return Oa;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function Vp(e) {
  return { ...Sp(e), type: lT(e) };
}
function uT(e) {
  if (!e?.pathVariables) return;
  let t = {};
  for (let r in e.pathVariables) {
    let o = e.pathVariables[r];
    if (!o) continue;
    let n = { identifier: e.collection, collectionItemId: e.collectionItemId, key: r, value: o };
    t[r] = n;
  }
  return t;
}
function cn(e) {
  if (O(e) || Rt(e)) return e;
  if (en(e)) {
    let t = va(e);
    if (!t?.target) return;
    let r = t.collectionItem,
      o = t.element === "none" ? void 0 : t.element;
    return Vp({ webPageId: t.target, hash: o || void 0, pathVariables: uT(r) });
  }
  if (!(!p(e) || !e)) return Vp({ url: e });
}
function dT(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function jO(e, t, r) {
  return Fa(e) && Fa(t)
    ? dT(e.url, t.url)
    : !ir(e) || !ir(t) || e.webPageId !== t.webPageId
      ? !1
      : r?.ignoreHash
        ? ye(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ye(e.pathVariables, t.pathVariables) && ye(e.hashVariables, t.hashVariables);
}
function _O(e) {
  if (!ir(e)) return (Fa(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (M(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (M(e.hashVariables[t])) return !0;
  }
  return !1;
}
function $O(e, t) {
  return ir(e) && !t?.has(e.webPageId);
}
var vp = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var cT = vp,
  pT = new Set(cT),
  za = (e) => pT.has(e),
  Rp = (e) => (F(e) ? e.every(za) : !1);
var JO = { hookIdentifier: void 0 },
  fT = "hookIdentifier";
function mT(e) {
  return !!(e && fT in e);
}
function Ar(e) {
  return mT(e) && e.hookIdentifier !== void 0;
}
function ar(e) {
  return typeof e == "string" || rr(e);
}
function rW(e, t) {
  x(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function kp(e, t = (r, o) => r === o) {
  let r = Pr;
  for (let o of e)
    if (Vo(r)) r = o;
    else if (!t(o, r)) return fr;
  return r;
}
function aW(e, t) {
  let r = e[0];
  if (r === void 0) return Pr;
  let o = r[t];
  for (let [n, i] of e.entries()) {
    if (n === 0) continue;
    let a = i[t];
    if (o !== a) return fr;
  }
  return o;
}
function sW(...e) {
  return e.find(Fi);
}
var Pp = "borderColor";
function fW(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function Or(e) {
  if (!b(e)) return !1;
  let t = "borderWidth",
    r = "borderStyle",
    o = "borderPerSide",
    n = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[Pp]) ||
    !p(e[r]) ||
    !se(e[t]) ||
    !ae(e[o]) ||
    !se(e[n]) ||
    !se(e[i]) ||
    !se(e[s]) ||
    !se(e[a])
  );
}
var yT = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function mW(e) {
  return p(e) && Object.hasOwn(yT, e);
}
var ut = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function Ip(e) {
  if (!Or(e)) return e;
  let {
    borderColor: t,
    borderStyle: r,
    borderPerSide: o,
    borderWidth: n,
    borderTop: i,
    borderRight: a,
    borderBottom: s,
    borderLeft: l,
  } = e;
  return o
    ? {
        borderColor: t,
        borderStyle: r,
        borderTopWidth: i,
        borderRightWidth: a,
        borderBottomWidth: s,
        borderLeftWidth: l,
      }
    : { borderColor: t, borderStyle: r, borderWidth: n };
}
function yW(e) {
  let t = { ...ut };
  return (
    se(e.borderTop) && (t.borderTop = e.borderTop),
    se(e.borderRight) && (t.borderRight = e.borderRight),
    se(e.borderBottom) && (t.borderBottom = e.borderBottom),
    se(e.borderLeft) && (t.borderLeft = e.borderLeft),
    se(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ae(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function hW(e) {
  let t = { ...ut };
  return (
    se(e.borderTop) && (t.borderTop = e.borderTop),
    se(e.borderRight) && (t.borderRight = e.borderRight),
    se(e.borderBottom) && (t.borderBottom = e.borderBottom),
    se(e.borderLeft) && (t.borderLeft = e.borderLeft),
    se(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ae(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function xW(e) {
  if (!e) return ut;
  let t = 0,
    r = e.borderTopWidth ?? e.borderWidth ?? t,
    o = e.borderRightWidth ?? e.borderWidth ?? t,
    n = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? ut.borderWidth,
    s = wt(kp([r, o, n, i, a])),
    l = e.borderStyle ?? ut.borderStyle,
    u = e.borderColor ?? ut.borderColor;
  return {
    borderPerSide: s,
    borderTop: r,
    borderRight: o,
    borderBottom: n,
    borderLeft: i,
    borderColor: u,
    borderStyle: l,
    borderWidth: a,
  };
}
function Np(e) {
  return p(e) || k(e);
}
function Fr(e) {
  return se(e) || k(e);
}
function gW(e) {
  if (!b(e)) return !1;
  let t = "borderWidth",
    r = "borderStyle",
    o = "borderTopWidth",
    n = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !Np(e[Pp]) ||
    !Np(e[r]) ||
    !Fr(e[o]) ||
    !Fr(e[n]) ||
    !Fr(e[a]) ||
    !Fr(e[i]) ||
    !Fr(e[t])
  );
}
var hT = [
    "default",
    "pointer",
    "progress",
    "copy",
    "no-drop",
    "context-menu",
    "grab",
    "grabbing",
    "cell",
    "crosshair",
    "alias",
    "zoom-in",
    "zoom-out",
    "help",
    "nw-resize",
    "n-resize",
    "ne-resize",
    "w-resize",
    "move",
    "e-resize",
    "sw-resize",
    "s-resize",
    "se-resize",
    "ew-resize",
    "ns-resize",
    "nwse-resize",
    "nesw-resize",
    "col-resize",
    "row-resize",
    "text",
    "vertical-text",
    "not-allowed",
    "none",
  ],
  xT = new Set(hT);
function Dp(e) {
  return p(e) && xT.has(e);
}
var SW = "--framer-custom-cursors";
var gT = "customCursorSmartComponentId";
function VW(e) {
  return b(e) && gT in e;
}
var bT = {
    customCursorSmartComponentId: void 0,
    customCursorVariant: void 0,
    customCursorFollow: void 0,
    customCursorOffsetX: void 0,
    customCursorOffsetY: void 0,
    customCursorTransitionEnabled: void 0,
    customCursorTransition: void 0,
    customCursorPlacement: void 0,
    customCursorAlignment: void 0,
  },
  vW = { ...bT, cursor: void 0, customCursorType: void 0 },
  RW = "default",
  TT = "cursor";
function wp(e) {
  return TT in e;
}
function kW(e) {
  if (wp(e))
    return {
      customCursorType: e.customCursorType,
      customCursorSmartComponentId: e.customCursorSmartComponentId,
      customCursorVariant: e.customCursorVariant,
      customCursorFollow: e.customCursorFollow,
      customCursorOffsetX: e.customCursorOffsetX,
      customCursorOffsetY: e.customCursorOffsetY,
      customCursorTransitionEnabled: e.customCursorTransitionEnabled,
      customCursorTransition: e.customCursorTransition,
      customCursorPlacement: e.customCursorPlacement,
      customCursorAlignment: e.customCursorAlignment,
    };
}
var NW = 20;
function CT(e) {
  return p(e.customCursorSmartComponentId);
}
function PW(e, t) {
  return !t || !wp(t) || t.customCursorType !== "component" || !CT(t)
    ? !1
    : At(e.get(t.customCursorSmartComponentId));
}
var ST = "single",
  VT = "fused";
function MW(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Wr(e) {
  if (!b(e) || !V(e[ST])) return !1;
  let t = e[VT];
  return F(t) && t.length === 4 && t.every(V);
}
function EW(e) {
  return Le(e) && e.type === "fusednumber" && Wr(e.value);
}
var vT = "isFused";
function Lp(e) {
  return b(e) && ae(e[vT]);
}
var RT = "id";
function kT(e) {
  return RT in e;
}
var NT = "value";
function PT(e) {
  return b(e) && kT(e) && NT in e;
}
function ez(e) {
  return e.type === "array" && Ep(e.value);
}
function tz(e) {
  return e.type === "object" && (b(e.value) || ke(e.value));
}
function Mp(e) {
  return e.type !== "fusednumber" || !Lp(e) ? !1 : Wr(e.value);
}
function sr(e) {
  return Q(e) && e.endsWith("px") && V(Number.parseFloat(e));
}
function IT(e) {
  if (!Q(e)) return !1;
  let [t, r] = tr(e);
  return !Number.isNaN(t) && r === "%";
}
function rz(e) {
  return b(e) && e.type === "image";
}
var DT = { string: !0, richtext: !0, image: !0, link: !0 };
function oz(e) {
  return e ? e.type in DT : !1;
}
function pn(e) {
  return b(e) && V(e.latitude) && V(e.longitude);
}
function nz(e) {
  return !(
    !b(e) ||
    !pn(e.coordinate) ||
    (e.title !== void 0 && !Q(e.title)) ||
    (e.address !== void 0 && !Q(e.address))
  );
}
function iz(e) {
  return Te(e) || Ep(e);
}
function Ep(e) {
  return F(e) && e.every(PT);
}
function az(e) {
  return O(e) || ae(e);
}
function sz(e) {
  return O(e) || Q(e);
}
function lz(e) {
  return O(e) || Q(e) || k(e);
}
function uz(e) {
  return Q(e) || M(e);
}
function dz(e) {
  return O(e) || Q(e) || ae(e) || V(e) || k(e) || ke(e);
}
function cz(e) {
  return O(e) || F(e);
}
function pz(e) {
  return F(e) && e.every(qo);
}
function fz(e) {
  return O(e) || Q(e) || k(e);
}
function mz(e) {
  return M(e) || Rp(e);
}
function yz(e) {
  return M(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function hz(e) {
  return O(e) || V(e);
}
function xz(e) {
  return b(e);
}
function gz(e) {
  return O(e) || ar(e);
}
function bz(e) {
  return O(e) || Q(e);
}
function Tz(e) {
  return O(e) || Q(e) || k(e);
}
function Cz(e) {
  return ir(e) || k(e);
}
function Sz(e) {
  return b(e) || k(e);
}
function Vz(e) {
  return b(e) || k(e);
}
function vz(e) {
  return M(e) || Or(e);
}
function Rz(e) {
  return M(e) || Dp(e);
}
function kz(e) {
  if (O(e)) return !0;
  if (!Q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? sr(t[0]) : t.length === 2 && t.every(sr);
}
function Nz(e) {
  if (O(e)) return !0;
  if (!Q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? sr(t[0]) : t.length === 4 && t.every(sr);
}
function Pz(e) {
  if (O(e)) return !0;
  if (!Q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? sr(t[0]) || IT(t[0]) : t.length === 4 && t.every(sr);
}
function Iz(e) {
  return M(e) || Q(e) || k(e);
}
function Dz(e) {
  return O(e) || (F(e) && e.every(Q)) || k(e);
}
function wz(e) {
  return (Q(e) && De(e)) || M(e) || k(e);
}
function Lz(e) {
  return M(e) || Q(e) || k(e);
}
function Mz(e) {
  return F(e);
}
function Ez(e) {
  return pn(e) || M(e) || k(e);
}
function Hz(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : fn(e.variant, e.childNodes, t.childNodes);
}
function fn(e, t, r) {
  if (t.length !== r.length) return !1;
  for (let o = 0; o < t.length; o++) if (!Fp(e, t[o], r[o])) return !1;
  return !0;
}
var $ = (e, t, r) => Object.is(t, r),
  zr = (e, t, r) => ye(t, r),
  Bp = (e, t, r) => Ha(t, r),
  Ap = { type: $, tag: $, textDirection: $, childNodes: zT },
  wT = { ...Ap, blockStyles: zr, backgroundMask: zr, textStylePreset: $ },
  LT = { type: $, textDirection: $, childNodes: Op },
  MT = { type: $, textDirection: $, listStyleType: $, start: $, childNodes: Op },
  ET = { type: $, childNodes: fn },
  BT = { type: $, mediaType: $, src: $, alt: $, pixelWidth: $, pixelHeight: $, link: Bp },
  AT = { type: $, identifier: $, embedId: $, props: zr, width: $, alignment: $ },
  FT = { type: $, childNodes: OT };
function Gz(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function jz(e, t, r) {
  return t === r || Fp(e, t, r);
}
function Fp(e, t, r) {
  if (t.type !== r.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (x(r.type === "textBlock"), Vt(e, "styles") ? _e(e, t, r, wT) : _e(e, t, r, Ap));
    case "bulletedList":
      return (x(r.type === "bulletedList"), _e(e, t, r, LT));
    case "numberedList":
      return (x(r.type === "numberedList"), _e(e, t, r, MT));
    case "blockquote":
      return (
        x(r.type === "blockquote"),
        x(Vt(e, "blockquotes"), "Document variant does not support blockquotes"),
        _e(e, t, r, ET)
      );
    case "media":
      return (
        x(r.type === "media"),
        x(Vt(e, "media"), "Document variant does not support media block"),
        _e(e, t, r, BT)
      );
    case "module":
      return (
        x(r.type === "module"),
        x(Vt(e, "embeds"), "Document variant does not support embeds"),
        _e(e, t, r, AT)
      );
    case "table":
      return (
        x(r.type === "table"),
        x(Vt(e, "tables"), "Document variant does not support tables"),
        _e(e, t, r, FT)
      );
    default:
      L(t);
  }
}
function Op(e, t, r) {
  if (t.length !== r.length) return !1;
  for (let o = 0; o < t.length; o++) if (!fn(e, t[o].childNodes, r[o].childNodes)) return !1;
  return !0;
}
function OT(e, t, r) {
  if (t.length !== r.length) return !1;
  for (let o = 0; o < t.length; o++) if (!WT(e, t[o].childNodes, r[o].childNodes)) return !1;
  return !0;
}
function WT(e, t, r) {
  if (t.length !== r.length) return !1;
  for (let o = 0; o < t.length; o++) {
    let n = t[o],
      i = r[o];
    if (n.cellType !== i.cellType || !fn(e, n.childNodes, i.childNodes)) return !1;
  }
  return !0;
}
function zT(e, t, r) {
  if (t.length !== r.length) return !1;
  for (let o = 0; o < t.length; o++) if (!GT(e, t[o], r[o])) return !1;
  return !0;
}
var Wp = { type: $, text: $, bold: $, italic: $, inlineCode: $, link: Bp },
  HT = {
    ...Wp,
    inlineStyles: zr,
    backgroundStyles: zr,
    inlineCodeStylePreset: $,
    linkStylePreset: $,
  };
function GT(e, t, r) {
  return t.type !== r.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : r.type !== "text"
        ? !1
        : Vt(e, "styles")
          ? _e(e, t, r, HT)
          : _e(e, t, r, Wp);
}
function Ha(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !Lt(e.openInNewTab, t.openInNewTab) ||
        !Lt(e.smoothScroll, t.smoothScroll) ||
        !Lt(e.clickTrackingId, t.clickTrackingId) ||
        !Lt(e.preserveParams, t.preserveParams) ||
        !jT(e.relValues, t.relValues)
      ? !1
      : ye(e.link, t.link);
}
function jT(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0) return !1;
  if (M(e) || M(t)) return Lt(e, t);
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function _e(e, t, r, o) {
  for (let n in o)
    if (Object.hasOwn(o, n)) {
      let i = o[n];
      if (!i(e, t[n], r[n])) return !1;
    }
  return !0;
}
function zp(e, t) {
  return t in e ? Reflect.get(e, t) : void 0;
}
function Ga(e, t, r) {
  return zp(e, r) === zp(t, r);
}
function mn(e) {
  return {
    id: e.id ?? Pe(),
    type: "richText",
    variant: e.variant,
    childNodes: yn(e.variant, e.childNodes),
  };
}
function yn(e, t) {
  return t.map((r) => _T(e, r));
}
function _T(e, t) {
  switch (t.type) {
    case "textBlock":
      return $T(e, t);
    case "bulletedList":
      return KT(e, t);
    case "numberedList":
      return UT(e, t);
    case "blockquote": {
      let r = qT(e, t);
      return (x(Ne(r, e), "normalizeRichTextDocument: unexpected node: blockquote"), r);
    }
    case "table": {
      let r = XT(e, t);
      return (x(Ne(r, e), "normalizeRichTextDocument: unexpected node: table"), r);
    }
    case "media":
    case "module":
      return t;
  }
}
function $T(e, t) {
  return { ...t, childNodes: eC(e, t.childNodes) };
}
function KT(e, t) {
  let r = t.childNodes.map((o) => Hp(e, o));
  return { ...t, childNodes: r.length > 0 ? r : [Gp()] };
}
function UT(e, t) {
  let r = t.childNodes.map((o) => Hp(e, o));
  return { ...t, childNodes: r.length > 0 ? r : [Gp()] };
}
function qT(e, t) {
  let r = yn(e, t.childNodes);
  return { ...t, childNodes: r.length > 0 ? r : [Hr()] };
}
function XT(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [aC()] };
  if (t.childNodes.every((o) => o.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((o) => ({ ...o, childNodes: [ja()] })) };
  let r = t.childNodes.map((o) => ZT(e, o));
  return { ...t, childNodes: YT(e, r) };
}
function YT(e, t) {
  let { width: r, height: o, slots: n } = JT(t);
  for (
    x(r > 0, "richTextDocumentNormalization: table has no cells"),
      x(o > 0, "richTextDocumentNormalization: table has no rows");
    t.length < o;
  )
    t.push(sC());
  for (let i = 0; i < o; i++) {
    let a = n[i],
      s = t[i];
    x(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, ja()), l++);
      else if (c)
        for (let f of m) {
          x(f, "richTextDocumentNormalization: slotCell is undefined");
          let h = f.cellX + f.width,
            C = f.cellY + f.height;
          (x(
            u >= f.cellX && u < h && i >= f.cellY && i < C,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${f.cellX}, ${f.cellY})...(${h}, ${C})`
          ),
            f.cell === c && l++);
        }
    }
  }
  return t;
}
function JT(e) {
  let t = [],
    r = 0,
    o = 0,
    n = 0,
    i = [];
  for (let f = 0; f < e.length; f++) a(e[f], f);
  return (
    s(),
    {
      width: r,
      height: o,
      slots: Array.from({ length: o }, (f, h) =>
        Array.from({ length: r }, (C, S) => t[h]?.[S] ?? [])
      ),
    }
  );
  function a(f, h) {
    (o === n && o++,
      x(n <= o, "richTextDocumentNormalization: table forming algorithm height error"));
    let C = 0;
    if ((l(), f.childNodes.length === 0)) {
      n++;
      return;
    }
    for (let S = 0; S < f.childNodes.length; S++) {
      let R = f.childNodes[S];
      for (; C < r && m(C, n);) C++;
      (C === r && r++,
        x(C <= r, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(R.columnSpan || 1, 1e3),
        T = Math.min(R.rowSpan ?? 1, 65534),
        A = !1;
      (T === 0 && ((A = !0), (T = 1)), r < C + y && (r = C + y), o < n + T && (o = n + T));
      let j = { cell: R, cellX: C, cellY: n, width: y, height: T };
      (u(j), A && i.push({ cell: j, cellX: C, width: y }), (C += y));
    }
    n += 1;
  }
  function s() {
    for (; n < o;) (l(), (n += 1));
    i = [];
  }
  function l() {
    for (let { cell: f, cellX: h, width: C } of i) (c(f, n, h, h + C), f.height++);
  }
  function u(f) {
    for (let h = f.cellX; h < f.cellX + f.width; h++)
      for (let C = f.cellY; C < f.cellY + f.height; C++) {
        let S = (t[C] ??= []);
        (S[h] ??= []).push(f);
      }
  }
  function c(f, h, C, S) {
    t[h] ??= [];
    for (let R = C; R < S; R++) (t[h][R] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function Hp(e, t) {
  let r = yn(e, t.childNodes);
  return { ...t, childNodes: r.length > 0 ? r : [Hr("inherit")] };
}
function ZT(e, t) {
  return { ...t, childNodes: t.childNodes.map((r) => QT(e, r)) };
}
function QT(e, t) {
  let r = yn(e, t.childNodes),
    o = { ...t, childNodes: r.length > 0 ? r : [Hr()] };
  return (
    o.columnSpan !== void 0 && o.columnSpan < 1 && (o.columnSpan = 1),
    o.rowSpan !== void 0 && o.rowSpan < 0 && (o.rowSpan = 0),
    o
  );
}
function eC(e, t) {
  let o = rC(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    n = nC(o);
  if (n.some((i) => i.type === "text")) return n;
  for (let i of t)
    if (i.type === "text" && i.text === "" && tC(i)) {
      n.push(i);
      break;
    }
  return n;
}
function tC(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function rC(e) {
  let t = [];
  for (let r of e) {
    if (
      r.type === "lineBreak" ||
      !r.text.includes(`
`)
    ) {
      t.push(r);
      continue;
    }
    oC(r, t);
  }
  return t;
}
function oC(e, t) {
  let r = 0,
    o = !1;
  for (; r < e.text.length;) {
    let n = e.text.indexOf(
      `
`,
      r
    );
    if (n === -1) {
      let a = e.text.slice(r);
      a.length > 0 && t.push({ ...e, id: o ? Pe() : e.id, text: a });
      return;
    }
    let i = e.text.slice(r, n);
    (i.length > 0 && (t.push({ ...e, id: o ? Pe() : e.id, text: i }), (o = !0)),
      t.push({ id: Pe(), type: "lineBreak" }),
      (r = n + 1));
  }
}
function nC(e) {
  let t = [];
  for (let r of e) {
    let o = t[t.length - 1];
    if (o?.type === "text" && r.type === "text" && iC(o, r)) {
      t[t.length - 1] = { ...o, text: o.text + r.text };
      continue;
    }
    t.push(r.type === "text" ? { ...r } : r);
  }
  return t;
}
function iC(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let r = "inlineStyles" in e ? e.inlineStyles : void 0,
    o = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ye(r, o)) return !1;
  let n = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ye(n, i) || !Ga(e, t, "inlineCodeStylePreset") || !Ga(e, t, "linkStylePreset")
    ? !1
    : Ha(e.link, t.link);
}
function Hr(e = "auto") {
  return { id: Pe(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function Gp() {
  return { id: Pe(), type: "listItem", childNodes: [Hr("inherit")] };
}
function aC() {
  return { id: Pe(), type: "tableRow", childNodes: [ja()] };
}
function sC() {
  return { id: Pe(), type: "tableRow", childNodes: [] };
}
function ja() {
  return { id: Pe(), type: "tableCell", cellType: "cell", childNodes: [Hr()] };
}
function r1(e, t) {
  t.document?.(e);
  for (let r of e.childNodes) hn(r, t);
}
function o1(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let r of e.childNodes) {
    let o = xn(r, t);
    if (o) return o;
  }
}
function Kp(e, t, r = {}) {
  let o = Ve(e, t.document, (n) => {
    let i = ot(n.childNodes, (a) => gn(e.variant, a, t));
    return i === n.childNodes ? n : { ...n, childNodes: i };
  });
  return o === e ? e : r.normalize === !1 ? o : mn(o);
}
function hn(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let r of e.childNodes) dC(r, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let r of e.childNodes) jp(r, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let r of e.childNodes) jp(r, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let r of e.childNodes) hn(r, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let r of e.childNodes) lC(r, t);
      return;
  }
}
function jp(e, t) {
  t.listItem?.(e);
  for (let r of e.childNodes) hn(r, t);
}
function lC(e, t) {
  t.tableRow?.(e);
  for (let r of e.childNodes) uC(r, t);
}
function uC(e, t) {
  t.tableCell?.(e);
  for (let r of e.childNodes) hn(r, t);
}
function dC(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function xn(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let r of e.childNodes) {
        let o = fC(r, t);
        if (o) return o;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let r of e.childNodes) {
        let o = _p(r, t);
        if (o) return o;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let r of e.childNodes) {
        let o = _p(r, t);
        if (o) return o;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let r of e.childNodes) {
        let o = xn(r, t);
        if (o) return o;
      }
      return;
    case "media":
      return t.media?.(e) === !0 ? e : void 0;
    case "module":
      return t.module?.(e) === !0 ? e : void 0;
    case "table":
      if (t.table?.(e) === !0) return e;
      for (let r of e.childNodes) {
        let o = cC(r, t);
        if (o) return o;
      }
      return;
  }
}
function _p(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let r of e.childNodes) {
    let o = xn(r, t);
    if (o) return o;
  }
}
function cC(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let r of e.childNodes) {
    let o = pC(r, t);
    if (o) return o;
  }
}
function pC(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let r of e.childNodes) {
    let o = xn(r, t);
    if (o) return o;
  }
}
function fC(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function gn(e, t, r) {
  switch (t.type) {
    case "textBlock": {
      let o = Ve(t, r.textBlock, (n) => {
        let i = ot(n.childNodes, (a) => hC(e, a, r));
        return i === n.childNodes ? n : { ...n, childNodes: i };
      });
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "bulletedList": {
      let o = Ve(t, r.bulletedList, (n) => {
        let i = ot(n.childNodes, (a) => $p(e, a, r));
        return i === n.childNodes ? n : { ...n, childNodes: i };
      });
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "numberedList": {
      let o = Ve(t, r.numberedList, (n) => {
        let i = ot(n.childNodes, (a) => $p(e, a, r));
        return i === n.childNodes ? n : { ...n, childNodes: i };
      });
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "blockquote": {
      let o = Ve(t, r.blockquote, (n) => {
        let i = ot(n.childNodes, (a) => gn(e, a, r));
        return i === n.childNodes ? n : { ...n, childNodes: i };
      });
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "media": {
      let o = Ve(t, r.media, (n) => n);
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "module": {
      let o = Ve(t, r.module, (n) => n);
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "table": {
      let o = Ve(t, r.table, (n) => {
        let i = ot(n.childNodes, (a) => mC(e, a, r));
        return i === n.childNodes ? n : { ...n, childNodes: i };
      });
      return (
        x(
          Ne(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
  }
}
function $p(e, t, r) {
  return Ve(t, r.listItem, (o) => {
    let n = ot(o.childNodes, (i) => gn(e, i, r));
    return n === o.childNodes ? o : { ...o, childNodes: n };
  });
}
function mC(e, t, r) {
  return Ve(t, r.tableRow, (o) => {
    let n = ot(o.childNodes, (i) => yC(e, i, r));
    return n === o.childNodes ? o : { ...o, childNodes: n };
  });
}
function yC(e, t, r) {
  return Ve(t, r.tableCell, (o) => {
    let n = ot(o.childNodes, (i) => gn(e, i, r));
    return n === o.childNodes ? o : { ...o, childNodes: n };
  });
}
function hC(e, t, r) {
  switch (t.type) {
    case "text":
      return Ve(t, r.text, (o) => o);
    case "lineBreak":
      return Ve(t, r.lineBreak, (o) => o);
  }
}
function Ve(e, t, r) {
  let o = xC(e, t),
    n = r(o);
  return gC(n, t);
}
function xC(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function gC(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function ot(e, t) {
  let r;
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    if (!n) continue;
    let i = t(n);
    i !== n && ((r ??= Array.from(e)), (r[o] = i));
  }
  return r ?? e;
}
function bC(e) {
  return re(e) || it(e);
}
var Up = "optional";
function TC(e) {
  return !!e && Up in e && e[Up] === !0;
}
function CC(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
      case "gap":
      case "dimension":
        return ue(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return ws(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Dt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return Ke(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return re(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return re(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return re(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return Xr(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return Xr(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = re(e.defaultValue) ? e.defaultValue : {};
        return (re(e.controls) && qp(t, e.controls), t);
      }
      case "array":
        return Xr(e.defaultValue) ? e.defaultValue : void 0;
      case "motionvalue":
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "changehandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "slot":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
      case "trackingid":
      case "vectorsetitem":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function qp(e, t) {
  for (let r in t) {
    let o = t[r];
    if (!o) continue;
    let n = e[r];
    if (!Dt(n) || TC(o)) continue;
    let i = CC(o);
    Dt(i) || (e[r] = i);
  }
}
function SC(e) {
  if (re(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Xp(e, t) {
  if (!bC(e)) return;
  let r = SC(e);
  qp(r, t);
}
var Yp = "outputControls";
function VC(e) {
  return (re(e) || it(e)) && Yp in e;
}
function Jp(e, t) {
  Object.assign(e, { [Yp]: t });
}
function u1(e) {
  if (VC(e)) return e.outputControls;
}
function Zp(e, t, r) {
  (Object.assign(e, { propertyControls: t }), Xp(e, t), r !== void 0 && Jp(e, r));
}
function f1(e) {
  return e.propertyControls;
}
function bn(e, t = 2) {
  let r = 0;
  if (typeof e == "number") r = e;
  else if (typeof e == "string") r = parseFloat(e);
  else return;
  if (Number.isInteger(r)) return r;
  let o = 1;
  for (; t-- > 0;) o *= 10;
  return (r < 0 && (o *= -1), Math.round(r * o) / o);
}
function _a(e) {
  let { paddingPerSide: t, paddingTop: r, paddingBottom: o, paddingLeft: n, paddingRight: i } = e;
  return t !== !1 && (r !== void 0 || o !== void 0 || n !== void 0 || i !== void 0);
}
function Qp(e) {
  let { padding: t = 0, paddingTop: r, paddingBottom: o, paddingLeft: n, paddingRight: i } = e;
  return _a(e)
    ? {
        top: r !== void 0 ? r : t,
        bottom: o !== void 0 ? o : t,
        left: n !== void 0 ? n : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function ef({ top: e, left: t, bottom: r, right: o }) {
  return e === o && o === r && r === t ? `${e}px` : `${e}px ${o}px ${r}px ${t}px`;
}
function g1(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => bn(a)),
    [r, o, n, i] = t;
  switch (t.length) {
    case 1:
      return N(r) ? { top: r, right: r, bottom: r, left: r } : null;
    case 2:
      return !N(r) || !N(o) ? null : { top: r, right: o, bottom: r, left: o };
    case 3:
      return !N(r) || !N(o) || !N(n) ? null : { top: r, right: o, bottom: n, left: o };
    case 4:
      return !N(r) || !N(o) || !N(n) || !N(i) ? null : { top: r, right: o, bottom: n, left: i };
    default:
      return null;
  }
}
var Cn = E(ie(), 1);
var nf = E(de(), 1),
  w1 = (() => {
    let e = Cn.default.forwardRef(function (r, o) {
      let {
          as: n = "div",
          direction: i = "vertical",
          distribution: a = "start",
          alignment: s = "center",
          gap: l = 10,
          wrap: u = !1,
          children: c,
          style: m,
          className: f,
          willChangeTransform: h,
          __fromCodeComponentNode: C,
          parentSize: S,
          __contentWrapperStyle: R,
          ...y
        } = r,
        T = Sn(i),
        A = rf(a),
        j = rf(s),
        P = _a(y) || y.padding ? ef(Qp(y)) : void 0,
        J = P === void 0 ? {} : { padding: P },
        {
          width: oe,
          height: ne,
          minWidth: Ee,
          maxWidth: $e,
          minHeight: Ur,
          maxHeight: dr,
          ...cr
        } = R ?? {},
        Be = {
          ...m,
          display: "flex",
          flexDirection: T,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: A,
          alignItems: j,
          alignContent: j,
          ...J,
          ...cr,
        };
      (Bo.applyWillChange({ willChangeTransform: h }, Be, !0),
        C &&
          !qt(Uo(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let ti = Ko(r),
        { children: dt, props: Sm } = _o(y, c),
        gs = y.widthType ?? (y.width === "auto" ? 2 : 0),
        bs = y.heightType ?? (y.height === "auto" ? 2 : 0),
        Vm = vC(dt, i, gs, bs),
        vm = wo(Vm, S ?? 1),
        D = { "data-framer-component-type": "Stack" },
        Ts = y.__fromCanvasComponent;
      if ((Ts && (D["data-framer-generated"] = !0), RC(l, A, u))) {
        let Cs = of(A);
        ((Cs || i !== "horizontal") && (Be.columnGap = `${l}px`),
          (Cs || i !== "vertical") && (Be.rowGap = `${l}px`));
      }
      return (
        Be.width === void 0 && gs === 2 && (Be.width = "min-content"),
        Be.height === void 0 && bs === 2 && (Be.height = "min-content"),
        (0, nf.jsx)(Rc, {
          as: n,
          background: Ts ? void 0 : "none",
          ...Sm,
          layoutId: ti,
          ref: o,
          ...D,
          style: Be,
          className: f,
          layoutScroll: !0,
          children: vm,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Zp(e, {
        direction: {
          type: "segmentedenum",
          options: ["horizontal", "vertical"],
          title: "Direction",
          defaultValue: "vertical",
        },
        distribution: {
          type: "enum",
          options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
          optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"],
          title: "Distribute",
          defaultValue: "space-around",
        },
        alignment: {
          type: "segmentedenum",
          options: ["start", "center", "end"],
          title: "Align",
          defaultValue: "center",
        },
        gap: {
          type: "number",
          min: 0,
          title: "Gap",
          hidden: (t) =>
            t.distribution !== void 0 &&
            ["space-between", "space-around", "space-evenly"].includes(t.distribution),
          defaultValue: 10,
        },
        padding: {
          type: "fusednumber",
          toggleKey: "paddingPerSide",
          toggleTitles: ["Padding", "Padding per side"],
          valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
          valueLabels: ["t", "r", "b", "l"],
          min: 0,
          title: "Padding",
          defaultValue: 0,
        },
      }),
      e
    );
  })();
function tf(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function Tn(e) {
  let t = parseFloat(e);
  return N(t) ? t : 0;
}
function vC(e, t, r, o) {
  return Cn.default.Children.map(e, (n) => {
    if (!to(n) || !eo(n)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = n.props,
      { width: c, height: m } = n.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (tf(c) &&
        ((s = !0),
        (s = !0),
        i
          ? r === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${Tn(c) * 100}%`)
          : ((f = 1), (a.flexGrow = Tn(c)), (a.flexBasis = 0)),
        (a.width = f)),
      tf(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = Tn(m)), (a.flexBasis = 0))
          : o === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${Tn(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return n;
    let C = { ...l, ...a };
    return Cn.default.cloneElement(n, { width: f, height: h, style: C });
  });
}
function of(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function RC(e, t, r) {
  return !(!e || (!r && !of(t)));
}
function Sn(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function rf(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var Vn = ["auto", "pixelated"],
  F1 = { imageRendering: void 0 },
  O1 = { imageRendering: "auto" },
  kC = "imageRendering";
function W1(e) {
  return Ye(e) && !O(e.htmlContent) ? !1 : kC in e;
}
var NC = new Set(Vn);
function PC(e) {
  return p(e) && NC.has(e);
}
function z1(e) {
  return PC(e) ? e : "auto";
}
function af(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var vn = ["clip", "visible", "hidden", "auto"],
  IC = ["clip", "hidden"],
  DC = ["visible", "auto"],
  K1 = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  sf = "overflow",
  U1 = [sf, "overflowX", "overflowY"];
function lf(e) {
  return e ? sf in e : !1;
}
var wC = new Set(vn);
function q1(e) {
  return p(e) ? wC.has(e) : !1;
}
var LC = new Set(IC);
function X1(e) {
  return p(e) && LC.has(e);
}
var MC = new Set(DC);
function Y1(e) {
  return p(e) && MC.has(e);
}
function uf(e) {
  return e === "auto" ? "Scroll" : Jr(e);
}
function J1(e) {
  if (!lf(e)) return !1;
  let t = e.resolveValue("overflow");
  switch (t) {
    case "hidden":
    case "auto":
      return !0;
    case "visible":
    case void 0:
      return e.resolveValue("overflowX") === "clip" && e.resolveValue("overflowY") === "clip";
    case "clip":
      return !(
        e.resolveValue("overflowX") === "visible" || e.resolveValue("overflowY") === "visible"
      );
    default:
      return !1;
  }
}
function Z1(e) {
  return lf(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function Q1(e, t) {
  return k(t) && !k(e.overflowX) && !O(e.overflowX) && e.overflowX === e.overflowY;
}
var df = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function eH(e, t, r, o = {}) {
  let n = e.resolveValue(t) || e.resolveValue(r);
  return n ? (o.preferSame ? n : df[n]) : "clip";
}
function tH(e, t) {
  return e === t || k(t) ? !0 : (k(e) && (e = "visible"), df[e] === t);
}
var cf = ["page", "step", "location", "date", "time", "true", "false"],
  oH = { ariaCurrent: void 0 },
  nH = { ariaCurrent: "page" },
  EC = "ariaCurrent";
function iH(e) {
  return EC in e;
}
var pf = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  sH = { ariaHaspopup: void 0 },
  lH = { ariaHaspopup: "menu" },
  BC = "ariaHaspopup";
function uH(e) {
  return BC in e;
}
var ff = ["off", "polite", "assertive"],
  cH = { ariaLive: void 0 },
  pH = { ariaLive: "polite" },
  AC = "ariaLive";
function fH(e) {
  return AC in e;
}
var mf = [
    "alert",
    "alertdialog",
    "application",
    "article",
    "banner",
    "blockquote",
    "button",
    "caption",
    "cell",
    "checkbox",
    "code",
    "columnheader",
    "combobox",
    "complementary",
    "contentinfo",
    "definition",
    "deletion",
    "dialog",
    "document",
    "emphasis",
    "feed",
    "figure",
    "form",
    "grid",
    "gridcell",
    "group",
    "heading",
    "img",
    "insertion",
    "link",
    "list",
    "listbox",
    "listitem",
    "log",
    "main",
    "mark",
    "marquee",
    "math",
    "menu",
    "menubar",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "meter",
    "navigation",
    "none",
    "note",
    "option",
    "paragraph",
    "presentation",
    "progressbar",
    "radio",
    "radiogroup",
    "region",
    "row",
    "rowgroup",
    "rowheader",
    "scrollbar",
    "search",
    "searchbox",
    "separator",
    "slider",
    "spinbutton",
    "status",
    "strong",
    "subscript",
    "superscript",
    "switch",
    "tab",
    "table",
    "tablist",
    "tabpanel",
    "term",
    "textbox",
    "time",
    "timer",
    "toolbar",
    "tooltip",
    "tree",
    "treegrid",
    "treeitem",
  ],
  yH = { ariaRole: void 0 },
  hH = { ariaRole: "button" };
function xH(e) {
  return "ariaRole" in e;
}
var Rn = [
    "normal",
    "multiply",
    "screen",
    "plus-lighter",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ],
  TH = "multiply",
  CH = { blendingMode: void 0 },
  FC = "blendingMode";
function SH(e) {
  return FC in e;
}
var OC = new Set(Rn);
function VH(e) {
  return p(e) && OC.has(e);
}
var $a = ["contain", "none"],
  kH = { overscrollBehavior: void 0 },
  WC = "overscrollBehavior";
function NH(e) {
  return e ? WC in e : !1;
}
function PH(e) {
  return p(e) && (e === "contain" || e === "none");
}
var IH = { overscrollBehavior: "contain" };
var kn = ["none", "auto"],
  LH = { pointerEvents: void 0 },
  MH = { pointerEvents: "none" },
  zC = "pointerEvents";
function EH(e) {
  return zC in e;
}
var yf = new Set(kn);
function BH(e) {
  return p(e.pointerEvents) && yf.has(e.pointerEvents);
}
function AH(e) {
  return p(e) && yf.has(e);
}
var Nn = ["none", "auto"],
  WH = { userSelect: void 0 },
  zH = { userSelect: "none" },
  HC = "userSelect";
function HH(e) {
  return HC in e;
}
var hf = new Set(Nn);
function GH(e) {
  return p(e.userSelect) && hf.has(e.userSelect);
}
function jH(e) {
  return p(e) && hf.has(e);
}
var Ka = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  xf = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function GC(e) {
  return p(e) && e in xf;
}
function gf(e) {
  return GC(e) ? xf[e] : "Text";
}
function UH(e) {
  return O(e) || e === "date" || e === "time";
}
function qH(e) {
  return O(e) || e === "text";
}
var jC = "formTextInputType";
function _C(e) {
  return jC in e;
}
var XH = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function YH(e) {
  return _C(e) && e.formTextInputType === "textarea";
}
var bf = {
  stackDirection: {
    type: "enum",
    defaultValue: Sn(kc),
    options: Xo.map(Sn),
    optionTitles: Xo.map(Ae),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Jo(Nc),
    options: Yo.map(Jo),
    optionTitles: Yo.map(Ae),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Jo(Pc),
    options: Zo.map(Ec),
    optionTitles: Zo.map(Ae),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: Ta, optionTitles: Hc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: Qo, optionTitles: zc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: Nn.map((e) => e),
    optionTitles: Nn.map(Ae),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: $a.map((e) => e),
    optionTitles: $a.map(Ae),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: vn.map((e) => e),
    optionTitles: vn.map(uf),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: kn.map((e) => e),
    optionTitles: kn.map(Ae),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: Rn.map((e) => e),
    optionTitles: Rn.map(Ae),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...Ka],
    optionTitles: Ka.map(gf),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...Vn],
    optionTitles: Vn.map(af),
  },
  opacity: { type: "number", min: 0, max: 1, step: 0.01, defaultValue: 1, displayStepper: !1 },
  gap: { type: "gap" },
  padding: { type: "padding" },
  radius: { type: "borderradius" },
  tabIndex: { type: "number", min: -1, max: 5, step: 1, defaultValue: 0, displayStepper: !0 },
  ariaExpanded: { type: "boolean", defaultValue: !1 },
  ariaAtomic: { type: "boolean", defaultValue: !1 },
  ariaPressed: { type: "boolean", defaultValue: !1 },
  ariaChecked: { type: "boolean", defaultValue: !1 },
  ariaSelected: { type: "boolean", defaultValue: !1 },
  ariaReadonly: { type: "boolean", defaultValue: !1 },
  ariaRequired: { type: "boolean", defaultValue: !1 },
  ariaBusy: { type: "boolean", defaultValue: !1 },
  ariaModal: { type: "boolean", defaultValue: !0 },
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...cf] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...pf] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...mf] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...ff] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: ba,
    optionTitles: ba.map(Fc),
  },
};
function hG(e) {
  return Object.hasOwn(bf, e);
}
function Tf(e) {
  let t = bf[e];
  return (x(t, () => `unknown node property control: ${e}`), t);
}
function Cf(e) {
  let t = {};
  for (let r in e) {
    let o = e[r];
    if (Le(o))
      if (o.type === "fusednumber")
        V(o.value) ? (t[r] = o.value) : Mp(o) && (t[r] = o.value.single);
      else if (o.type === "object" && b(o.value)) {
        if (!b(o.value)) continue;
        t[r] = Cf(o.value);
      } else
        o.type === "array" && F(o.value)
          ? (t[r] = o.value
              .filter(Le)
              .map((n) => (n.type === "object" ? (b(n.value) ? Cf(n.value) : void 0) : n.value)))
          : (t[r] = o.value);
  }
  return t;
}
function Sf(e) {
  switch (e) {
    case "boolean":
      return !0;
    case "number":
      return 0;
    case "string":
    case "link":
      return "";
    case "richtext":
      return "";
    case "color":
      return "#09F";
    case "fusednumber":
      return { single: 0, fused: [0, 0, 0, 0] };
    case "transition":
      return Cr;
    case "border":
      return ut;
    case "object":
      return {};
    case "padding":
    case "borderradius":
      return "0px";
    case "array":
      return [];
    default:
      return;
  }
}
var $C = {
  boolean: !0,
  date: !0,
  enum: !0,
  number: !0,
  dimension: !0,
  string: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  object: !0,
  controlReference: !0,
};
function Vf(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = be(e.entityIdentifier);
    return no(t) && t.type === "collection";
  }
  return (
    e.type === "boolean" ||
    e.type === "string" ||
    e.type === "number" ||
    e.type === "date" ||
    e.type === "collectionreference" ||
    e.type === "multicollectionreference"
  );
}
function wG(e) {
  return e.type !== "controlReference"
    ? Vf({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : Vf({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function KC(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function UC(e, t) {
  return KC(t) ? Object.hasOwn($C, e) : !1;
}
function qC(e, t) {
  return UC(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function le(e, t) {
  return qC(e, t) && e.optional === !0;
}
function lr(e) {
  return !Hs(e) && e.type !== "divider";
}
function LG(e) {
  return e.type === "string";
}
function MG(e) {
  return e.type === "richtext";
}
function EG(e) {
  return e.type === "slug";
}
function BG(e) {
  return e.type === "date";
}
function XC(e) {
  return e.type === "collectionreference";
}
function YC(e) {
  return e.type === "multicollectionreference";
}
function AG(e) {
  return XC(e) || YC(e);
}
function JC(e) {
  return lr(e) && Vr(e.type);
}
var FG = JC;
function OG(e) {
  return e?.type === "divider";
}
function ZC(e) {
  return e.type === "array";
}
function WG(e) {
  return e.type === "object";
}
function QC(e) {
  return e.type === "image";
}
function eS(e) {
  return ZC(e) && e.itemVariables.length === 1 && e.itemVariables.every(QC);
}
function Ua(e) {
  return eS(e) && e.displayGalleryAsArray !== !0;
}
var tS = {
  string: !0,
  richtext: !0,
  image: !0,
  file: !0,
  link: !0,
  linkrelvalues: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  array: !0,
  date: !0,
};
function Rf(e) {
  return Object.hasOwn(tS, e.type);
}
var rS = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function jG(e) {
  return lr(e) ? Object.hasOwn(rS, e.type) : !1;
}
function kf(e, t) {
  let r = { type: e.type, title: t, description: e.description };
  switch (e.valueType) {
    case "number":
      return {
        ...r,
        valueType: e.valueType,
        defaultValue: e.initialValue,
        min: e.options?.min,
        max: e.options?.max,
        step: e.options?.step,
        displayStepper: e.options?.displayStepper,
      };
    case "boolean":
      return { ...r, valueType: e.valueType, defaultValue: e.initialValue };
    default:
      L(e);
  }
}
var oS = /,(?![^(]*\))/u,
  nS = /\s(?![^(]*\))/u,
  iS = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  Nf = (e, t) => {
    let r = e.trim().toLowerCase().split(nS),
      o = r.includes("inset"),
      n = [],
      i = r.find((c) => iS.test(c)) ?? r[r.length - 1];
    for (let c of r) c !== "inset" && c !== i && n.push(bn(c));
    let [a, s, l, u] = n;
    return nn({
      type: "box",
      inset: o,
      x: a,
      y: s,
      blur: l,
      spread: u,
      color: i,
      id: `box-shadow-${t}`,
    });
  };
function JG(e, t) {
  let r = Nf(e, 0);
  if (
    r.color === "transparent" ||
    r.color === "rgba(0, 0, 0, 0)" ||
    (r.x === 0 && r.y === 0 && r.spread === 0 && r.blur === 0)
  )
    return;
  let o = g(r.color);
  if (!(!o || o.a <= 0)) return { ...r, id: t };
}
function qa(e) {
  return e
    .split(oS)
    .map(Nf)
    .filter((t) => {
      if (
        t.color === "transparent" ||
        t.color === "rgba(0, 0, 0, 0)" ||
        (t.x === 0 && t.y === 0 && t.spread === 0 && t.blur === 0)
      )
        return !1;
      let r = g(t.color);
      return r ? r.a > 0 : !1;
    });
}
function ZG(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: qa(t) };
}
function ij(e) {
  return or(e) || O(e) ? e : [];
}
function aj(e) {
  return p(e)
    ? qa(e)
    : F(e) && e.every(bd.is)
      ? e.map((t, r) => nn({ ...t, id: `box-shadow-${r}` }))
      : [];
}
function Pf(e) {
  let { id: t, ...r } = e;
  return r;
}
var aS = "alt";
function Xa(e) {
  return b(e) && aS in e;
}
var If = "altLocalized";
function uj(e) {
  return b(e) && If in e && !!e[If];
}
var sS = "positionX",
  lS = "positionY";
function Df(e) {
  return b(e) ? sS in e || lS in e : !1;
}
function Ya(e) {
  return Df(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var uS = {};
function pj(e) {
  return Df(e) ? e : uS;
}
function wf(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? Cp(e.id) : e.id;
}
function hj(e) {
  let t = new Set();
  return Kp(
    e,
    {
      module(r) {
        let o = r.embedId;
        if (o === void 0) return r;
        if (!t.has(o)) return (t.add(o), r);
        let n = Pe();
        return (t.add(n), { ...r, embedId: n });
      },
    },
    { normalize: !1 }
  );
}
var Lf = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function Cj(e) {
  let t = new RegExp(Lf, "g"),
    r = e.matchAll(t),
    o = [];
  for (let n of r) {
    if (!n.groups) continue;
    let { variableId: i, providerId: a } = n.groups,
      s = Si(i, a);
    o.push(s);
  }
  return o;
}
function Sj(e) {
  return p(e) && e.startsWith("--");
}
function Vj(e) {
  let t = Lf.exec(e);
  if (t?.groups) {
    let { variableId: r, providerId: o } = t.groups;
    return Si(r, o);
  }
}
function dS(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function Mf(e) {
  return `var(${dS(e)})`;
}
function vj(e) {
  return `calc(var(${gp}, 1rem) * ${e})`;
}
var cS = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function Rj(e) {
  let t = cS.exec(e);
  if (t?.groups) {
    let { remValue: r } = t.groups,
      o = parseFloat(r);
    return V(o) ? [o, "rem"] : void 0;
  }
}
var pS = new Set(["img", "br"]);
function Ef(e, t) {
  return te("ul", { dir: In(e.textDirection) }, ...e.childNodes.map(t));
}
function Bf(e, t) {
  return te(
    "ol",
    {
      dir: In(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function Af(e, t) {
  return te("blockquote", {}, ...e.childNodes.map(t));
}
function Ff(e, t) {
  return te(
    "figure",
    { class: "framer-table-wrapper" },
    te("table", {}, te("tbody", {}, ...e.childNodes.map((r) => fS(r, t))))
  );
}
function fS(e, t) {
  return te("tr", {}, ...e.childNodes.map((r) => mS(r, t)));
}
function mS(e, t) {
  return te(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function Of(e) {
  return e.type === "lineBreak" ? te("br", {}) : yS(e);
}
function yS(e) {
  let t = xS(e.text);
  return (
    e.bold && (t = te("strong", {}, t)),
    e.italic && (t = te("em", {}, t)),
    e.inlineCode && (t = te("code", {}, t)),
    e.link && (t = te("a", Pn(e.link), t)),
    t
  );
}
function Pn(e) {
  if (!e) return {};
  let {
    link: t,
    id: r,
    openInNewTab: o,
    smoothScroll: n,
    clickTrackingId: i,
    relValues: a,
    preserveParams: s,
    ...l
  } = e;
  return {
    "data-framer-link":
      t.type === "variableReference"
        ? `VariableReference:${JSON.stringify(t)}`
        : `Link:${JSON.stringify(t)}`,
    "data-framer-open-in-new-tab": o === !0 ? !0 : Gr(o),
    "data-framer-smooth-scroll": n === !0 ? !0 : Gr(n),
    "data-framer-click-tracking-id": typeof i == "string" ? i : Gr(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": Gr(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : Gr(s),
  };
}
function In(e) {
  return e === "inherit" ? "auto" : e;
}
function te(e, t, ...r) {
  let o = "";
  for (let n in t) {
    let i = t[n];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        n === "style" && (o += ` style="${hS(i)}"`);
        continue;
      }
      if (i === !0) {
        o += ` ${n}=""`;
        continue;
      }
      o += ` ${n}="${Wf(String(i))}"`;
    }
  }
  return pS.has(e) ? `<${e}${o}>` : `<${e}${o}>${r.join("")}</${e}>`;
}
function hS(e) {
  let t = "";
  for (let r in e) {
    let o = e[r];
    o !== void 0 && (t && (t += " "), (t += `${r}: ${Wf(o)};`));
  }
  return t;
}
function xS(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Wf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function Gr(e) {
  if (M(e)) return Mf(e);
}
function gS(e) {
  return mn(e).childNodes.map(Dn).join("");
}
function Hf(e) {
  return typeof e == "string" ? e : gS(e);
}
function Dn(e) {
  switch (e.type) {
    case "textBlock":
      return bS(e);
    case "bulletedList":
      return Ef(e, zf);
    case "numberedList":
      return Bf(e, zf);
    case "blockquote":
      return Af(e, Dn);
    case "media":
      return TS(e);
    case "module":
      return CS(e);
    case "table":
      return Ff(e, Dn);
    default:
      L(e);
  }
}
function bS(e) {
  return te(e.tag, { dir: In(e.textDirection) }, ...e.childNodes.map(Of));
}
function zf(e) {
  let t = e.childNodes[0],
    r = t?.type === "textBlock" ? t.tag : "p";
  return te("li", { "data-preset-tag": r }, ...e.childNodes.map(Dn));
}
function TS(e) {
  return e.mediaType === "video"
    ? te("video", { class: "framer-image", src: e.src, ...Pn(e.link) })
    : te("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...Pn(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function CS(e) {
  return te("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": wf(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var Gf = Symbol("localizedOptionTitles");
function Ja(e, t) {
  e[Gf] = t;
}
function jf(e) {
  return e[Gf] ?? null;
}
var Aj = "framer/nodePropertyDefinitions",
  SS = [
    "stackDirection",
    "stackDistribution",
    "stackAlignment",
    "gridItemColumnSpan",
    "gridItemRowSpan",
    "userSelect",
    "overscrollBehavior",
    "overflow",
    "pointerEvents",
    "blendingMode",
    "formTextInputType",
    "imageRendering",
    "ariaCurrent",
    "ariaHaspopup",
    "ariaRole",
    "ariaLive",
    "tickerEffectDirectionModifier",
  ],
  VS = new Set(SS);
function _f(e) {
  return typeof e == "string" && VS.has(e);
}
var vS = "src";
function wn(e) {
  return b(e) && p(e[vS]);
}
function Ln(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function Gj(e, t) {
  if (Ln(e, t)) return t;
  if (Ln(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var jn = E(qf(), 1);
function u_(e, t) {
  if (e.type === "motionvalue") return M(t) || Ln(e, t);
  if (!es(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return M(t) || (Te(t) && t.outputType === "enum") ? !0 : e.options.some((r) => r === t);
  }
  return !0;
}
function es(e, t) {
  if (M(t)) return !0;
  if (Te(t)) return t.outputType === e;
  switch (e) {
    case "motionvalue":
      return ae(t) || (V(t) && Number.isFinite(t));
    case "boolean":
      return ae(t);
    case "number":
      return V(t);
    case "string":
    case "dimension":
    case "color":
    case "componentinstance":
      return p(t);
    case "slot":
      return p(t) || F(t);
    case "richtext":
      return ar(t) || (0, jn.isElement)(t);
    case "responsiveimage":
      return wn(t);
    case "file":
    case "image":
      return p(t) || k(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || ae(t) || V(t) || p(t));
    case "fusednumber":
      return Wr(t);
    case "eventhandler":
      return F(t) && t.every(qo);
    case "transition":
      return fo(t);
    case "border":
      return Or(t);
    case "link":
      return Rt(cn(t));
    case "linkrelvalues":
      return F(t) && t.every(za);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return b(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return or(t);
    case "gap":
    case "padding":
    case "borderradius":
      return p(t);
    case "collectionreference":
      return p(t);
    case "multicollectionreference":
      return F(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return F(t);
    case "vectorsetitem":
      return (p(t) && De(t)) || (0, jn.isValidElementType)(t);
    case "changehandler":
      return !1;
    case "location":
      return pn(t);
    case "font":
    case "pagescope":
    case "customcursor":
    case "scrollsectionref":
    case null:
      return !1;
    default:
      L(e);
  }
}
function ge(e, t) {
  return es(e, t) && !O(t) ? t : Sf(e);
}
function B(e) {
  return e.name || "Unknown";
}
function b_(e, t) {
  switch (e.type) {
    case "boolean":
      return ts(e, t);
    case "number":
      return rs(e, t);
    case "color":
      return os(e);
    case "string":
      return ns(e, t);
    case "image":
      return is(e);
    case "link":
      return as(e);
    case "date":
      return ss(e, t);
    default:
      return L(e);
  }
}
function ts(e, t) {
  let { enabledTitle: r, disabledTitle: o } = e.options ?? {};
  return {
    type: e.type,
    title: B(e),
    enabledTitle: r,
    disabledTitle: o,
    description: e.description,
    optional: le(e, t) ? !0 : void 0,
  };
}
function rs(e, t) {
  let { min: r, max: o, step: n, unit: i, displayStepper: a } = e.options ?? {};
  return {
    type: e.type,
    title: B(e),
    min: r,
    max: o,
    step: n,
    unit: i,
    displayStepper: a,
    description: e.description,
    optional: le(e, t) ? !0 : void 0,
  };
}
function os(e) {
  return { type: e.type, title: B(e), description: e.description };
}
function ns(e, t) {
  let { placeholder: r, displayTextArea: o } = e.options ?? {};
  return {
    type: e.type,
    title: B(e),
    placeholder: r,
    displayTextArea: o,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: le(e, t) ? !0 : void 0,
  };
}
function is(e) {
  return { type: "responsiveimage", title: B(e), description: e.description };
}
function as(e) {
  return { type: e.type, title: B(e), description: e.description };
}
function ss(e, t) {
  let r = {
    type: e.type,
    title: B(e),
    description: e.description,
    optional: le(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (r.displayTime = !0), r);
}
var Xf = ["string", "date", "number", "enum", "boolean", "slug"];
function NS(e) {
  return e ? Xf.includes(e.type) : !1;
}
function PS(e) {
  return Xf.includes(e);
}
function J_(e) {
  return e === "enum" || e === "file";
}
function Z_(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function Q_(e) {
  switch (e.type) {
    case "slug":
      return "string";
    case "controlReference":
    case "nodePropertyControlReference":
      return e.expectedType === "segmentedenum" ? "enum" : e.expectedType;
    default:
      return e.type;
  }
}
var IS = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function e2(e) {
  return yo(e) ? e : IS[e];
}
var DS = ["eventhandler"];
function t2(e) {
  return DS.includes(e.type);
}
function r2(e) {
  return Rf(e) ? (e.required ?? !1) : !1;
}
var wS = { string: !0, richtext: !0, enum: !0 };
function LS(e) {
  return lr(e) ? e.type in wS : !1;
}
function MS(e) {
  return LS(e) && e.preventLocalization === !0;
}
var ES = {
  number: !0,
  enum: !0,
  boolean: !0,
  string: !0,
  richtext: !0,
  color: !0,
  image: !0,
  responsiveimage: !0,
  file: !0,
  transition: !0,
  boxshadow: !0,
  link: !0,
  date: !0,
  array: !0,
  object: !0,
  fusednumber: !0,
  font: !0,
  pagescope: !0,
  scrollsectionref: !0,
  customcursor: !0,
  border: !0,
  cursor: !0,
  gap: !0,
  padding: !0,
  borderradius: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  trackingid: !0,
  location: !0,
  vectorsetitem: !0,
  eventhandler: !0,
};
function Jf(e) {
  return Object.hasOwn(ES, e.type);
}
function o2(e) {
  return e?.type === "array" && e.control.type === "object";
}
function n2(e) {
  return e.type === "array";
}
function BS(e, t, r, o) {
  let n = {},
    i = Ua(r);
  for (let s of r.itemVariables) {
    if (!lr(s)) continue;
    let l = ls(e, t, s, o);
    l &&
      (x(Jf(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (n[s.id] = OS(l)) : (n[s.id] = l));
  }
  let a = r.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !b(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = Zf(c);
      k(m) || (l[u] = m);
    }
    return l;
  });
  return {
    type: r.type,
    control: { type: "object", controls: n },
    title: B(r),
    description: r.description,
    minCount: r.minCount,
    maxCount: r.maxCount,
    displayGalleryAsArray: r.displayGalleryAsArray === !0 ? !0 : void 0,
    __vekterDefault: a,
  };
}
function AS(e, t, r, o) {
  let n = {};
  for (let a of r.fieldVariables) {
    let s = ls(e, t, a, o);
    s && (x(Jf(s), "Expected object field control to be usable in an object"), (n[a.id] = s));
  }
  let i = le(r, o);
  return {
    type: r.type,
    controls: n,
    title: B(r),
    description: r.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : FS(r),
  };
}
function FS(e) {
  let t = {};
  for (let r of e.fieldVariables) {
    let o = Zf(e.initialValue[r.id]);
    k(o) || (t[r.id] = o);
  }
  return t;
}
function OS(e) {
  let { __defaultAssetReference: t, __vekterDefault: r, ...o } = e;
  return o;
}
function Zf(e) {
  if (!Le(e)) return;
  let t = e.type;
  if (Vr(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let r, o, n;
        return (
          Xa(e) && (r = e.alt),
          Ya(e) && ((o = e.positionX), (n = e.positionY)),
          { assetReference: e.value, alt: r, positionX: o, positionY: n }
        );
      }
      case "boolean":
        return ae(e.value) ? e.value : void 0;
      case "number":
        return V(e.value) ? e.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return p(e.value) ? e.value : void 0;
      case "richtext":
        return ar(e.value) ? e.value : void 0;
      case "link":
        return Rt(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && De(e.value) ? e.value : void 0;
      default:
        L(t);
    }
}
function i2(e, t, r) {
  if (!Ua(e)) return WS(t, r);
}
function WS(e, t) {
  if (!le(e, t)) return zS(e);
}
function zS(e) {
  switch (e.type) {
    case "image":
      return p(e.initialValue) ? { type: "image", value: e.initialValue } : e.initialValue;
    case "boolean":
      return { type: "boolean", value: e.initialValue };
    case "number":
      return { type: "number", value: e.initialValue };
    case "string":
      return { type: "string", value: e.initialValue };
    case "richtext":
      return { type: "richtext", value: e.initialValue };
    case "color":
      return { type: "color", value: e.initialValue };
    case "date":
      return { type: "date", value: e.initialValue };
    case "file":
      return { type: "file", value: e.initialValue };
    case "link":
      return { type: "link", value: cn(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      L(e);
  }
}
function HS(e, t) {
  let r = le(e, t);
  return { ...ts(e, t), defaultValue: r ? void 0 : ge(e.type, e.initialValue) };
}
function kt(e, t) {
  let r = le(e, t);
  return { ...rs(e, t), defaultValue: r ? void 0 : ge(e.type, e.initialValue) };
}
function GS(e) {
  let t = vt(e.initialValue) ? e.initialValue : Lo.toFormatString(e.initialValue);
  return { ...os(e), defaultValue: ge(e.type, t) };
}
function jS(e, t) {
  let { min: r, max: o, step: n, units: i, literals: a } = e.options ?? {},
    s = le(e, t);
  return {
    type: e.type,
    title: B(e),
    defaultValue: s ? void 0 : ge(e.type, e.initialValue),
    min: r,
    max: o,
    step: n,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function _S(e, t) {
  let r = le(e, t);
  return {
    ...ns(e, t),
    defaultValue: r ? void 0 : ge(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function $S(e) {
  let { placeholder: t, maxLength: r } = e.options ?? {};
  return {
    type: e.type,
    title: B(e),
    defaultValue: Hf(ge(e.type, e.initialValue)),
    placeholder: t,
    maxLength: r,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function KS(e) {
  let t = is(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    Le(e.initialValue) && p(e.initialValue.value))
  ) {
    let r = e.initialValue.value;
    t.__defaultAssetReference = r;
    let o = { assetReference: r };
    ((t.__vekterDefault = o),
      Xa(e.initialValue) && p(e.initialValue.alt) && (o.alt = e.initialValue.alt),
      Ya(e.initialValue) &&
        ((o.positionX = e.initialValue.positionX), (o.positionY = e.initialValue.positionY)));
  }
  return t;
}
function US(e) {
  let t = e.allowedFileTypes.map((n) => n.extension),
    r = new Set(t),
    o = Array.from(r).filter(Boolean);
  return {
    type: "file",
    title: B(e),
    allowedFileTypes: o,
    __defaultAssetReference: ge(e.type, e.initialValue),
    description: e.description,
  };
}
function qS(e, t, r, o) {
  let n = JS(e, t, r, o);
  return n ? { type: r.type, title: B(r), payload: n } : { type: r.type, title: B(r) };
}
var XS = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function YS(e) {
  return Object.hasOwn(XS, e.type);
}
function JS(e, t, r, o) {
  if (!r.payload) return;
  let n = {};
  for (let i of r.payload) {
    let a = ls(e, t, i, o);
    a && YS(a) && (n[i.id] = a);
  }
  return Bu(n) ? void 0 : n;
}
function ZS(e) {
  return { type: e.type, title: B(e), description: e.description };
}
function QS(e) {
  return { type: e.type, title: B(e), description: e.description };
}
function eV(e) {
  return { type: e.type, title: B(e), description: e.description, defaultValue: e.initialValue };
}
function tV(e) {
  let t = ge(e.type, e.initialValue);
  return {
    type: e.type,
    title: B(e),
    defaultValue: t ? Sl(t) : void 0,
    description: e.description,
  };
}
function rV(e) {
  return { type: e.type, title: B(e), defaultValue: e.initialValue, description: e.description };
}
function oV(e) {
  let t = ge(e.type, e.initialValue),
    r = t ? Ip(t) : void 0;
  return { type: e.type, title: B(e), description: e.description, defaultValue: r };
}
function nV(e) {
  return {
    type: e.type,
    title: B(e),
    defaultValue: e.initialValue.map(Pf),
    description: e.description,
  };
}
function iV(e) {
  return { type: e.type, title: B(e), description: e.description, defaultValue: e.initialValue };
}
function aV(e) {
  return { type: e.type, title: B(e), description: e.description, defaultValue: e.initialValue };
}
function sV(e) {
  return { type: e.type, title: B(e), description: e.description, defaultValue: e.initialValue };
}
function lV(e, t) {
  let r = le(e, t);
  return {
    type: e.type,
    title: B(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: r ? void 0 : e.initialValue,
    optional: r ? !0 : void 0,
  };
}
function uV(e, t) {
  let r = le(e, t);
  return {
    type: e.type,
    title: B(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: r ? void 0 : e.initialValue,
    optional: r ? !0 : void 0,
  };
}
function dV(e) {
  return { type: e.type, title: B(e), description: e.description };
}
function cV(e) {
  return {
    type: e.type,
    title: B(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function pV(e) {
  return as(e);
}
function fV(e) {
  return { type: e.type, title: B(e), description: e.description, defaultValue: e.initialValue };
}
function mV(e, t) {
  let r = le(e, t);
  return { ...ss(e, t), defaultValue: r ? void 0 : ge(e.type, e.initialValue) };
}
function yV(e, t) {
  let r = le(e, t),
    o,
    n = [],
    i = [],
    a = [];
  e.cases.forEach((l) => {
    (n.push(l.id),
      i.push(l.name),
      a.push(l.nameLocalized),
      !r && e.initialValue === l.id && (o = l.id));
  });
  let s = {
    type: e.type,
    title: B(e),
    defaultValue: o,
    options: n,
    optionTitles: i,
    description: e.description,
    optional: r ? !0 : void 0,
  };
  return (MS(e) || Ja(s, a), s);
}
function Yf(e, t) {
  return e === "enum" ? t === "enum" || t === "segmentedenum" : e === t;
}
function hV(e, t) {
  let r = be(t);
  if (rl(r)) {
    let o = e.getNode(r.moduleId);
    if (o) return o.codeComponentIdentifier;
  }
  return t;
}
function xV(e, t, r) {
  if (r.type === "nodePropertyControlReference") {
    if (!_f(r.controlKey)) return null;
    let a = Tf(r.controlKey);
    return (
      x(
        a && Yf(a.type, r.expectedType),
        () => `incompatible node property control: ${r.controlKey} ${r.expectedType}`
      ),
      a
    );
  }
  let o = hV(e, r.entityIdentifier),
    n = t.componentForIdentifier(o);
  if (!n?.properties || (n.type !== "component" && n.type !== "data")) return null;
  let i = n.properties[r.controlKey];
  return !i || !Yf(i.type, r.expectedType) ? null : i;
}
function gV(e, t, r, o) {
  let n = xV(e, t, r);
  if (!n) return null;
  let i = r.type === "controlReference" && le(r, o);
  switch (r.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (n.type !== "enum") return null;
      let a = {
        type: "enum",
        title: B(r),
        options: n.options,
        optionTitles: n.optionTitles,
        displaySegmentedControl: n.displaySegmentedControl,
        defaultValue: i ? void 0 : ge(r.expectedType, r.initialValue),
        optionIcons: n.optionIcons,
        description: r.description,
        optional: i ? !0 : void 0,
      };
      if (r.type === "controlReference") {
        let s = bV(e, t, r, n.options);
        s && Ja(a, s);
      }
      return a;
    }
    case "file":
      return n.type !== "file"
        ? null
        : {
            type: "file",
            title: B(r),
            allowedFileTypes: n.allowedFileTypes,
            description: r.description,
            __defaultAssetReference: p(r.initialValue) ? r.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function bV(e, t, r, o) {
  if (!De(r.entityIdentifier)) return null;
  let i = cd(e, r.entityIdentifier)?.getPropertyControls(e, t)[r.controlKey];
  if (i?.type !== "enum") return null;
  let a = jf(i);
  return a ? o.map((s) => a[i.options.indexOf(s)]) : null;
}
function TV(e, t) {
  return {
    type: "string",
    title: B(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var CV = { string: !0, richtext: !0 };
function a2(e) {
  return e.type in CV;
}
function ls(e, t, r, o) {
  switch (r.type) {
    case "array":
      return BS(e, t, r, o);
    case "object":
      return AS(e, t, r, o);
    case "boolean":
      return HS(r, o);
    case "number":
      return kt(r, o);
    case "motionvalue":
      return kf(r, B(r));
    case "dimension":
      return jS(r, o);
    case "color":
      return GS(r);
    case "string":
      return _S(r, o);
    case "richtext":
      return $S(r);
    case "image":
      return KS(r);
    case "eventhandler":
      return qS(e, t, r, o);
    case "link":
      return pV(r);
    case "linkrelvalues":
      return fV(r);
    case "date":
      return mV(r, o);
    case "enum":
      return yV(r, o);
    case "file":
      return US(r);
    case "scrollsectionref":
      return ZS(r);
    case "customcursor":
      return QS(r);
    case "cursor":
      return eV(r);
    case "transition":
      return tV(r);
    case "border":
      return oV(r);
    case "location":
      return rV(r);
    case "boxshadow":
      return nV(r);
    case "gap":
      return iV(r);
    case "padding":
      return aV(r);
    case "borderradius":
      return sV(r);
    case "collectionreference":
      return lV(r, o);
    case "multicollectionreference":
      return uV(r, o);
    case "trackingid":
      return dV(r);
    case "vectorsetitem":
      return cV(r);
    case "nodePropertyControlReference":
    case "controlReference":
      return gV(e, t, r, o);
    case "slug":
      return TV(e, r);
    default:
      L(r);
  }
}
function s2(e) {
  switch (e) {
    case "motionvalue":
      return "Motion Value";
    case "array":
      return "Array";
    case "object":
      return "Object";
    case "boolean":
      return "Featured";
    case "color":
      return "Tint";
    case "image":
      return "Image";
    case "number":
      return "Count";
    case "dimension":
      return "Size";
    case "string":
      return "Name";
    case "richtext":
      return "Content";
    case "link":
      return "Link";
    case "linkrelvalues":
      return "Link Rel";
    case "date":
      return "Date";
    case "enum":
      return "Option";
    case "file":
      return "File";
    case "gap":
      return "Gap";
    case "padding":
      return "Padding";
    case "borderradius":
      return "Radius";
    case "collectionreference":
      return "Reference";
    case "location":
      return "Location";
    case "multicollectionreference":
      return "Multi-Reference";
    case "trackingid":
      return "Tracking";
    case "vectorsetitem":
      return "Icon";
    case "eventhandler":
      return "Click";
    case "scrollsectionref":
      return "Scroll Section";
    case "customcursor":
    case "cursor":
      return "Cursor";
    case "transition":
      return "Transition";
    case "border":
      return "Border";
    case "boxshadow":
      return "Shadow";
    case "nodePropertyControlReference":
    case "controlReference":
      return "Control Reference";
    case "slug":
      return "Slug";
  }
}
function l2(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
function u2(e) {
  return e ? At(e) || Ft(e) || dl(e) || Xe(e) : !1;
}
var SV = "getProvidedVariableMap";
function p2(e) {
  return !!e && SV in e;
}
var X = class extends Map {};
function us(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function Qf(e, t) {
  return !t || !e ? "ltr" : Io(e.code);
}
var em = Symbol("dataIdentifier");
function ds(e, t) {
  e[em] = t;
}
function g2(e) {
  return e[em] ?? null;
}
var tm = "global_locale",
  rm = "global_layout_direction",
  _n = "locale_provider_id",
  om = "locale_source_identifier",
  VV = "Left to Right",
  vV = "Right to Left";
function I2(e) {
  return Xe(e) || At(e) || Ft(e);
}
var cs = (() => {
    let e, t, r;
    return (o) => {
      let n = o.root.locales;
      if (!n || n.length === 0) return null;
      let i = us(o);
      return (
        (r && i === e && n === t) ||
          ((e = i),
          (t = n),
          (r = {
            id: tm,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: Ir, name: us(o) }, ...n.map((a) => ({ id: a.id, name: a.name }))],
          })),
        r
      );
    };
  })(),
  ps = (() => {
    let e;
    return (t) => {
      let r = t.root.locales;
      return !r || r.length === 0
        ? null
        : e ||
            ((e = {
              id: rm,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: VV },
                { id: "rtl", name: vV },
              ],
            }),
            e);
    };
  })(),
  D2 = Qe((e) => (e ? nm(e) : null)),
  RV = Qe((e, t) => {
    if (!e && !t) return;
    let r = new X();
    return (e && r.set(e.id, e), t && r.set(t.id, t), r);
  });
function w2(e) {
  let t = cs(e),
    r = ps(e);
  return RV(t, r);
}
function nm(e) {
  let t = [],
    r = [];
  for (let n of e.cases) (t.push(n.id), r.push(n.name));
  let o = { type: "enum", title: "Locale", options: t, optionTitles: r };
  return (ds(o, { dataIdentifier: om, enumFieldKey: tm }), o);
}
function kV(e) {
  let t = [],
    r = [];
  for (let n of e.cases) (t.push(n.id), r.push(n.name));
  let o = { type: "enum", title: "Layout Direction", options: t, optionTitles: r };
  return (ds(o, { dataIdentifier: om, enumFieldKey: rm }), o);
}
var NV = Qe((e, t) => {
  if (!e && !t) return;
  let r = new X();
  return (e && r.set(e.id, nm(e)), t && r.set(t.id, kV(t)), r);
});
function PV(e) {
  let t = cs(e),
    r = ps(e);
  return NV(t, r);
}
var IV = Qe((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(_n, e), t);
});
function L2(e) {
  let t = PV(e);
  return IV(t);
}
var DV = Qe((e, t, r, o) => {
  if (!e && !t) return;
  let n = new X();
  (e && n.set(e.id, r?.id ?? Ir), t && n.set(t.id, Qf(r, o)));
  let i = new Map();
  return (i.set(_n, n), i);
});
function M2(e, t) {
  let r = cs(e),
    o = ps(e);
  return DV(r, o, t, e.root.adaptLayoutToTextDirection);
}
var im = "carousel_source_identifier",
  $n = "carousel_provider_id",
  U = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
  },
  Kn = {
    id: U.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  Un = {
    id: U.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  jr = { id: U.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  _r = { id: U.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  qn = { id: U.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  fs = {
    [U.activeItemIndex]: Kn,
    [U.totalItems]: Un,
    [U.hasNext]: jr,
    [U.hasPrevious]: _r,
    [U.dots]: qn,
  };
function A2(e) {
  if (e in fs) return fs[e];
}
function F2(e) {
  return e in fs;
}
function am(e) {
  let t = Mu(e);
  if (t) return t.intrinsicSize;
  let r = e.split("?")[1];
  if (!r) return;
  let o = new URLSearchParams(r),
    n = parseInt(o.get("width") ?? "", 10),
    i = parseInt(o.get("height") ?? "", 10);
  return V(n) && V(i) ? { width: n, height: i } : void 0;
}
var wV = "type",
  LV = "webPageId";
function sm(e, t) {
  return e.type !== "link" || !b(t) || wV in t ? !1 : LV in t;
}
function MV(e, t) {
  let r = t;
  for (; gr(r);) {
    if (r.dataIdentifier) return r.dataIdentifier;
    r = e.getParent(r.id);
  }
}
function EV(e, t) {
  if (t.unresolvedPathSlugs)
    for (let r in t.unresolvedPathSlugs) {
      let o = t.unresolvedPathSlugs[r];
      if (!b(o)) continue;
      let n = o.collectionItemId;
      if (!p(n)) continue;
      let i = ud(e, t.webPageId);
      if (!i) return;
      let a = MV(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: n, key: r, value: "" };
      return { [r]: s };
    }
}
function lm(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: EV(e, t) };
}
function Xn(e, t, r) {
  if (sm(t, r)) return lm(e, r);
  let o = ge(t.type, r);
  if (t.type === "array") {
    if (!F(o)) return o;
    let n = t.control;
    return n ? o.map((i) => Xn(e, n, i)) : o;
  }
  if (t.type === "object") {
    if (!b(o)) return o;
    let n = {};
    for (let i in o) {
      let a = t.controls[i];
      ((n[i] = o[i]), a && (n[i] = Xn(e, a, o[i])));
    }
    return n;
  }
  if (t.type === "responsiveimage" && wn(o)) {
    let n = am(o.src);
    return n ? { ...o, pixelWidth: n.width, pixelHeight: n.height } : o;
  }
  return o;
}
var Yn = class {
  constructor(t, r, o) {
    this.tree = t;
    this.controlMap = r;
    this.data = o;
  }
  tree;
  controlMap;
  data;
  cache = new Map();
  has(t) {
    return this.controlMap.has(t);
  }
  get(t) {
    if (this.cache.has(t)) return this.cache.get(t);
    let r = this.controlMap.get(t);
    if (!r) return;
    let o = this.data?.[t],
      n = Xn(this.tree, r, o);
    return (this.cache.set(t, n), n);
  }
  *[Symbol.iterator]() {
    for (let [t] of this.controlMap) {
      let r = this.get(t);
      yield [t, r];
    }
  }
};
var nt = class {
  constructor(t, r) {
    this.leftMap = t;
    this.rightMap = r;
  }
  leftMap;
  rightMap;
  has(t) {
    return !!(this.rightMap.has(t) || this.leftMap.has(t));
  }
  get(t) {
    if (this.rightMap.has(t)) return this.rightMap.get(t);
    if (this.leftMap.has(t)) return this.leftMap.get(t);
  }
  *[Symbol.iterator]() {
    for (let t of this.leftMap) {
      let r = t[0];
      this.rightMap.has(r) || (yield t);
    }
    yield* this.rightMap;
  }
};
var $r = "repeater_item_index",
  ve = "repeater_item_count";
function u$(e, t, r, o, n) {
  let i = new Yn(e, t, r);
  return new ms(i, o, n);
}
var ys = {
    id: $r,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  BV = kt(ys, "WebPage"),
  Jn = {
    id: ve,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  d$ = [ys, Jn],
  hs = kt(Jn, "WebPage");
function c$(e) {
  return e === $r || e === ve;
}
function p$(e) {
  return e === ve;
}
var um = class extends nt {
    constructor(t) {
      let r = new X();
      (r.set(ve, Jn), super(t, r));
    }
  },
  dm = class extends nt {
    constructor(t, r) {
      let o = new X();
      (o.set(ve, r), super(t, o));
    }
  },
  cm = class extends nt {
    constructor(t) {
      let r = new X();
      (r.set(ve, hs), super(t, r));
    }
  },
  pm = class extends nt {
    constructor(t) {
      let r = new X();
      (r.set($r, ys), r.set(ve, Jn), super(t, r));
    }
  },
  ms = class extends nt {
    constructor(t, r, o) {
      let n = new X();
      (n.set($r, r + 1), n.set(ve, o), super(t, n));
    }
  },
  fm = class extends nt {
    constructor(t) {
      let r = new X();
      (r.set($r, BV), r.set(ve, hs), super(t, r));
    }
  };
function f$(e, t, r, o) {
  let n = new Map(e),
    i = new Map(t),
    a = new X(),
    s = new X();
  return (
    a.set(ve, hs),
    s.set(ve, o),
    n.set(r, a),
    i.set(r, s),
    { nonRepeatedChildCombinedControlMap: n, nonRepeatedChildCombinedValueMap: i }
  );
}
var mm = E(Rm(), 1),
  Nt = "previousItemId";
function g$(e) {
  return Zn(Nt, "Previous", e.instanceIdentifier);
}
function b$({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, mm.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    OV(),
    zV(),
    Zn(Nt, "Previous", t),
    Zn(Pt, "Next", t),
  ];
}
function Zn(e, t, r) {
  return {
    type: "collectionreference",
    name: t,
    id: e,
    dataIdentifier: r,
    initialValue: void 0,
    exposeInProps: !0,
  };
}
var Pt = "nextItemId";
function T$(e) {
  return Zn(Pt, "Next", e.instanceIdentifier);
}
function C$(e) {
  return e === Nt || e === Pt;
}
var FV = "createdAt";
function OV() {
  return { type: "date", name: "Created", id: FV, initialValue: void 0, exposeInProps: !0 };
}
var WV = "updatedAt";
function zV() {
  return { type: "date", name: "Updated", id: WV, initialValue: void 0, exposeInProps: !0 };
}
var It = ".";
function D$(e, t, r) {
  return e === Nt || e === Pt ? r.length === 0 : !r.includes(t);
}
function HV(e, t) {
  return e === t || GV(e, t);
}
function GV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === It;
}
function ym(e, t) {
  return e.startsWith(t) && e[t.length] === It;
}
function w$(e) {
  return ym(e, Nt) || ym(e, Pt);
}
function ur(e) {
  return e.includes(It);
}
function L$(e) {
  return ur(e.id);
}
function Qn(e, t) {
  return e ? e + It + t : t;
}
function M$(e) {
  let t = e.lastIndexOf(It);
  if (!(t < 0)) return e.slice(0, t);
}
function E$(e, t, r) {
  let o = Qn(e, t);
  return Fl(o, r);
}
function jV(e) {
  return e === "id";
}
function B$(e) {
  return HV(e, "id");
}
function A$(e) {
  let t = Object.entries(e.properties);
  for (let [r, o] of t)
    if (!jV(r) && (o?.type === "collectionreference" || o?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function _V(e) {
  return e.split(It);
}
function $V(e) {
  return e.join(It);
}
function F$(e) {
  if (Vu(e) && M(e.fillImage) && ur(e.fillImage.id)) return e.fillImage;
  if (Ye(e)) {
    if (Gl(e.textContent) && ur(e.textContent.startValue.id)) return e.textContent.startValue;
    if (M(e.htmlContent) && ur(e.htmlContent.id)) return e.htmlContent;
    if (M(e.textContent) && ur(e.textContent.id)) return e.textContent;
  }
}
function O$(e, t, r, o, n) {
  if (!ur(r)) return { collectionItemNode: o, collectionNode: n, variableId: r };
  let i = hm(e, t, r, o, n);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, io);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function hm(e, t, r, o, n) {
  let i = _V(r),
    a = i[0] === Pt,
    s = i[0] === Nt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = n.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((C) => C.id === o.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? hm(e, t, $V(i.slice(1)), h, n) : [];
  }
  let l = [{ collectionItemNode: o, variableId: i[0] }],
    u = o;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    x(!M(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, fl);
    if (!h) break;
    u = h;
    let C = i[c + 1];
    if (!C) break;
    l.push({ collectionItemNode: u, variableId: C });
  }
  return l;
}
function KV(e) {
  return e.title ?? e.name;
}
function K$(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function U$(e) {
  let t = new X();
  for (let r in e) {
    let o = e[r];
    if (o && (t.set(r, o), o.type === "object"))
      for (let n in o.controls) {
        let i = o.controls[n];
        i && t.set(Qn(r, n), { ...i, title: i.title ?? Jr(n) });
      }
  }
  return t;
}
function q$(e, t) {
  let r = new X();
  for (let o in e) {
    let n = e[o];
    if (!n) continue;
    let i = "defaultValue" in n ? n.defaultValue : void 0,
      a = t ? t[o] : i;
    if ((r.set(o, a), n.type === "object"))
      for (let s in n.controls) {
        let l = n.controls[s];
        if (!l) continue;
        let u = "defaultValue" in l ? l.defaultValue : void 0,
          c = b(a) ? a[s] : void 0;
        r.set(Qn(o, s), t ? c : (c ?? u));
      }
  }
  return r;
}
var xs = "_hook";
function xm(e) {
  return `${e}${xs}`;
}
function UV(e) {
  return !!e?.endsWith(xs);
}
function ei(e) {
  if (!(!e || !UV(e))) return e.slice(0, -xs.length);
}
function X$(e, t) {
  let r = ei(e);
  if (!r) return;
  let o = t.get(r);
  if (o) return xm(o);
}
function gm(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let r of e.ancestors()) if (r.getPrimaryId() === t) return r;
}
function Y$(e, t) {
  if (!t) return;
  let r = ei(t);
  if (!r) return;
  let o = gm(e, r);
  return Ar(o) ? o.hookIdentifier : void 0;
}
function J$(e, t, r, o) {
  if (!t) return;
  let n = ei(t);
  if (!n) return;
  let i = gm(e, n);
  if (!Ar(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, r);
  if (!a) return;
  let s = o?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function bm(e, t, r) {
  if (!Ar(e)) return;
  let o = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!o) return;
  let n = xm(e.getPrimaryId()),
    i = r?.get(n) ?? o.valueMap;
  return {
    providerId: n,
    sourceIdentifier: e.hookIdentifier,
    variableMap: o.variableMap,
    controlMap: o.controlMap,
    valueMap: i,
  };
}
function Z$(e, t, r) {
  let o = ei(r);
  if (!o) return;
  let n = e.get(o);
  if (!Ar(n)) return;
  let i = t.hookForIdentifier(n.hookIdentifier);
  return i ? KV(i) : void 0;
}
var Tm = "default",
  Kr = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  eK = new Kr(),
  tK = new Kr(),
  rK = new Kr();
function mK(e) {
  let t = e;
  for (let r of e.ancestors()) {
    if (Ac(r)) return Er(t);
    t = r;
  }
  return !1;
}
var qV = kt(Kn, "WebPage"),
  XV = kt(Un, "WebPage"),
  YV = { type: "boolean", title: jr.name, defaultValue: jr.initialValue },
  JV = { type: "boolean", title: _r.name, defaultValue: _r.initialValue },
  ZV = { type: "array", title: qn.name, control: { type: "object", controls: {} } },
  QV = tv(),
  ev = rv();
function tv() {
  let e = new X();
  return (
    e.set(U.activeItemIndex, Kn),
    e.set(U.totalItems, Un),
    e.set(U.hasNext, jr),
    e.set(U.hasPrevious, _r),
    e.set(U.dots, qn),
    e
  );
}
function rv() {
  let e = new X();
  return (
    e.set(U.activeItemIndex, qV),
    e.set(U.totalItems, XV),
    e.set(U.hasNext, YV),
    e.set(U.hasPrevious, JV),
    e.set(U.dots, ZV),
    e
  );
}
function ov(e) {
  return Array.from({ length: e }, (t, r) => ({ id: String(r + 1) }));
}
function nv(e) {
  let t = new X();
  return (
    t.set(U.activeItemIndex, 1),
    t.set(U.totalItems, e),
    t.set(U.hasNext, e > 1),
    t.set(U.hasPrevious, !1),
    t.set(U.dots, ov(e)),
    t
  );
}
function iv() {
  return QV;
}
function av() {
  return ev;
}
function sv(e, t) {
  let r = t?.get(ve),
    o = V(r) ? e.tree() : void 0,
    n = 0;
  for (let i of Eu(e))
    if (!Er(i)) {
      if (V(r) && o && Kt(o, i)) {
        n += r;
        continue;
      }
      n++;
    }
  return n;
}
function lv(e, t) {
  let r = e.cache.carouselAncestorId;
  if (!r) return;
  let o = e.tree();
  if (!o) return;
  let n = o.get(r);
  if (!n) return;
  let i = sv(n, t?.get(n.getPrimaryId())),
    a = e.cache.carouselValueMap;
  if (a?.itemCount === i) return a.valueMap;
  let s = nv(i);
  return ((e.cache.carouselValueMap = { itemCount: i, valueMap: s }), s);
}
function Cm(e, t) {
  if (!Er(e)) return;
  let r = lv(e, t);
  if (r)
    return {
      providerId: $n,
      sourceIdentifier: im,
      variableMap: iv(),
      controlMap: av(),
      valueMap: r,
    };
}
var uv = Zr();
function SK(e, t, r) {
  let o = [],
    n = Cm(e, t);
  n && o.push(n);
  let i = bm(e, r, t);
  return (i && o.push(i), o.length > 0 ? o : uv);
}
function VK(e) {
  return e === _n || e === $n;
}
function vK(e, t, r, o, n) {
  if (!t && r.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(n, t))
    : t
      ? (i = new Map([
          [n, t],
          [Tm, t],
        ]))
      : (i = new Map());
  for (let a of r) i.set(a.providerId, o(a));
  return i;
}
function RK(e) {
  return e.map(dv);
}
function kK(e) {
  return e.map(cv);
}
function dv(e) {
  return e.valueMap;
}
function cv(e) {
  return e.controlMap;
}
function NK(e, t) {
  if (t.length === 0) return e;
  let r = new Map(e ?? []);
  for (let o of t) r.set(o.providerId, o.valueMap);
  return r;
}
var pv = "variables";
function IK(e) {
  return e ? pv in e : !1;
}
export {
  st as a,
  yr as b,
  mv as c,
  ri as d,
  Xs as e,
  Fe as f,
  Zs as g,
  Qr as h,
  ce as i,
  We as j,
  oi as k,
  Oe as l,
  Cv as m,
  Sv as n,
  Vv as o,
  H as p,
  Ys as q,
  ct as r,
  v as s,
  N as t,
  Hv as u,
  xe as v,
  eo as w,
  to as x,
  Xv as y,
  oo as z,
  Mt as A,
  Yv as B,
  ii as C,
  hr as D,
  ai as E,
  qt as F,
  bx as G,
  qi as H,
  pd as I,
  Cx as J,
  fd as K,
  Sx as L,
  yd as M,
  Xi as N,
  mc as O,
  Yi as P,
  hd as Q,
  Ji as R,
  Je as S,
  Ni as T,
  nu as U,
  Nr as V,
  xt as W,
  II as X,
  g as Y,
  xd as Z,
  gd as _,
  Lo as $,
  bt as aa,
  Bx as ba,
  Mo as ca,
  Eo as da,
  gc as ea,
  sM as fa,
  bd as ga,
  Vd as ha,
  pM as ia,
  Rd as ja,
  Bo as ka,
  ta as la,
  vM as ma,
  lc as na,
  dc as oa,
  vg as pa,
  cc as qa,
  fc as ra,
  yc as sa,
  hc as ta,
  Id as ua,
  Ao as va,
  NM as wa,
  EM as xa,
  Ed as ya,
  zx as za,
  Fo as Aa,
  Ad as Ba,
  Oo as Ca,
  Fd as Da,
  Od as Ea,
  zd as Fa,
  Gd as Ga,
  GM as Ha,
  jM as Ia,
  _M as Ja,
  Z as Ka,
  $M as La,
  KM as Ma,
  UM as Na,
  qM as Oa,
  XM as Pa,
  YM as Qa,
  JM as Ra,
  aa as Sa,
  sg as Ta,
  ZM as Ua,
  tE as Va,
  _d as Wa,
  rE as Xa,
  sa as Ya,
  $d as Za,
  mg as _a,
  yg as $a,
  Zd as ab,
  Qd as bb,
  fE as cb,
  Bg as db,
  xc as eb,
  ec as fb,
  Qt as gb,
  xE as hb,
  gE as ib,
  Ko as jb,
  Ho as kb,
  wr as lb,
  ua as mb,
  kE as nb,
  NE as ob,
  oc as pb,
  sc as qb,
  OE as rb,
  zg as sb,
  Rc as tb,
  eR as ub,
  tR as vb,
  rR as wb,
  rl as xb,
  no as yb,
  De as zb,
  oR as Ab,
  xr as Bb,
  Et as Cb,
  nR as Db,
  Fm as Eb,
  Om as Fb,
  iR as Gb,
  be as Hb,
  aR as Ib,
  sR as Jb,
  lR as Kb,
  uR as Lb,
  dR as Mb,
  cR as Nb,
  pR as Ob,
  fR as Pb,
  mR as Qb,
  G as Rb,
  aN as Sb,
  ol as Tb,
  hR as Ub,
  nl as Vb,
  il as Wb,
  si as Xb,
  zm as Yb,
  li as Zb,
  sl as _b,
  vR as $b,
  RR as ac,
  kR as bc,
  NR as cc,
  w as dc,
  wR as ec,
  LR as fc,
  MR as gc,
  ER as hc,
  ui as ic,
  ll as jc,
  ul as kc,
  BR as lc,
  di as mc,
  Hm as nc,
  ze as oc,
  At as pc,
  Ft as qc,
  dl as rc,
  Xe as sc,
  AR as tc,
  cl as uc,
  FR as vc,
  OR as wc,
  Ye as xc,
  Gm as yc,
  WR as zc,
  zR as Ac,
  pl as Bc,
  io as Cc,
  fl as Dc,
  HR as Ec,
  GR as Fc,
  ao as Gc,
  jR as Hc,
  _R as Ic,
  $R as Jc,
  KR as Kc,
  UR as Lc,
  qR as Mc,
  XR as Nc,
  YR as Oc,
  JR as Pc,
  ZR as Qc,
  QR as Rc,
  ek as Sc,
  tk as Tc,
  rk as Uc,
  ok as Vc,
  nk as Wc,
  ik as Xc,
  ak as Yc,
  sk as Zc,
  lk as _c,
  uk as $c,
  dk as ad,
  ci as bd,
  ck as cd,
  pk as dd,
  fk as ed,
  ml as fd,
  mk as gd,
  yk as hd,
  hk as id,
  xk as jd,
  gk as kd,
  gr as ld,
  bk as md,
  yl as nd,
  so as od,
  Tk as pd,
  Ck as qd,
  Sk as rd,
  Vk as sd,
  vk as td,
  Rk as ud,
  kk as vd,
  Nk as wd,
  Pk as xd,
  Ik as yd,
  jm as zd,
  Dk as Ad,
  wk as Bd,
  Lk as Cd,
  qo as Dd,
  ZB as Ed,
  QB as Fd,
  oh as Gd,
  UI as Hd,
  qI as Id,
  lN as Jd,
  xi as Kd,
  uN as Ld,
  gi as Md,
  Rl as Nd,
  fN as Od,
  bi as Pd,
  mo as Qd,
  CN as Rd,
  SN as Sd,
  VN as Td,
  vN as Ud,
  RN as Vd,
  Nl as Wd,
  kN as Xd,
  yo as Yd,
  Vr as Zd,
  wN as _d,
  LN as $d,
  MN as ae,
  jN as be,
  cy as ce,
  fy as de,
  my as ee,
  hy as fe,
  _N as ge,
  gy as he,
  $N as ie,
  KN as je,
  by as ke,
  UN as le,
  Cy as me,
  qN as ne,
  wl as oe,
  XN as pe,
  Ci as qe,
  YN as re,
  Ll as se,
  JN as te,
  ZN as ue,
  QN as ve,
  El as we,
  eP as xe,
  Ry as ye,
  ky as ze,
  tP as Ae,
  rP as Be,
  Ny as Ce,
  oP as De,
  nP as Ee,
  iP as Fe,
  aP as Ge,
  sP as He,
  lP as Ie,
  M as Je,
  Fl as Ke,
  Si as Le,
  go as Me,
  Ol as Ne,
  cP as Oe,
  pP as Pe,
  Wl as Qe,
  fP as Re,
  mP as Se,
  yP as Te,
  Py as Ue,
  SP as Ve,
  Te as We,
  VP as Xe,
  Gl as Ye,
  vP as Ze,
  RP as _e,
  kP as $e,
  _l as af,
  O as bf,
  $l as cf,
  nA as df,
  iA as ef,
  aA as ff,
  Jg as gf,
  Zg as hf,
  sA as if,
  kc as jf,
  Nc as kf,
  Pc as lf,
  Ct as mf,
  lA as nf,
  eb as of,
  uA as pf,
  Dc as qf,
  dA as rf,
  tb as sf,
  cA as tf,
  pA as uf,
  rb as vf,
  Xo as wf,
  wc as xf,
  fA as yf,
  Yo as zf,
  ga as Af,
  Jo as Bf,
  ib as Cf,
  Zo as Df,
  Mc as Ef,
  Ec as Ff,
  mA as Gf,
  yA as Hf,
  lb as If,
  gA as Jf,
  bA as Kf,
  Bc as Lf,
  VA as Mf,
  vA as Nf,
  pb as Of,
  Ac as Pf,
  Er as Qf,
  mb as Rf,
  RA as Sf,
  IA as Tf,
  DA as Uf,
  hb as Vf,
  wA as Wf,
  gb as Xf,
  LA as Yf,
  MA as Zf,
  zt as _f,
  bl as $f,
  lo as ag,
  $m as bg,
  Cr as cg,
  po as dg,
  Km as eg,
  Um as fg,
  Tl as gg,
  Cl as hg,
  qm as ig,
  pi as jg,
  hi as kg,
  fo as lg,
  Sl as mg,
  ey as ng,
  tN as og,
  rN as pg,
  oN as qg,
  ty as rg,
  nN as sg,
  hl as tg,
  Ek as ug,
  br as vg,
  Ot as wg,
  Bk as xg,
  Ak as yg,
  Fk as zg,
  Tr as Ag,
  Ok as Bg,
  xl as Cg,
  Wt as Dg,
  Wk as Eg,
  gl as Fg,
  zk as Gg,
  Hk as Hg,
  Gk as Ig,
  AP as Jg,
  wy as Kg,
  FP as Lg,
  Ul as Mg,
  Ce as Ng,
  ql as Og,
  OP as Pg,
  WP as Qg,
  Kl as Rg,
  zP as Sg,
  HP as Tg,
  GP as Ug,
  Xl as Vg,
  Ey as Wg,
  jP as Xg,
  Ay as Yg,
  ft as Zg,
  _P as _g,
  $P as $g,
  KP as ah,
  Oc as bh,
  Tb as ch,
  Qo as dh,
  Ta as eh,
  Wc as fh,
  FA as gh,
  OA as hh,
  WA as ih,
  zA as jh,
  HA as kh,
  _A as lh,
  $A as mh,
  Gc as nh,
  tr as oh,
  qA as ph,
  jc as qh,
  XA as rh,
  YA as sh,
  JA as th,
  Y as uh,
  W as vh,
  Zl as wh,
  yt as xh,
  nI as yh,
  ht as zh,
  To as Ah,
  Rr as Bh,
  ru as Ch,
  ou as Dh,
  So as Eh,
  LI as Fh,
  YP as Gh,
  JP as Hh,
  mt as Ih,
  ZP as Jh,
  QP as Kh,
  eI as Lh,
  Pr as Mh,
  Vo as Nh,
  bu as Oh,
  Fi as Ph,
  BI as Qh,
  AI as Rh,
  th as Sh,
  Tu as Th,
  _I as Uh,
  vo as Vh,
  $I as Wh,
  nh as Xh,
  gt as Yh,
  QI as Zh,
  ih as _h,
  uD as $h,
  dD as ai,
  _t as bi,
  Oi as ci,
  cD as di,
  pD as ei,
  Cu as fi,
  ph as gi,
  fD as hi,
  Su as ii,
  mD as ji,
  yD as ki,
  hD as li,
  Vu as mi,
  fh as ni,
  xD as oi,
  gD as pi,
  bD as qi,
  TD as ri,
  yh as si,
  xh as ti,
  CD as ui,
  r0 as vi,
  Ca as wi,
  kb as xi,
  o0 as yi,
  UD as zi,
  Au as Ai,
  $t as Bi,
  Nh as Ci,
  qD as Di,
  nr as Ei,
  yO as Fi,
  hO as Gi,
  xp as Hi,
  en as Ii,
  a0 as Ji,
  va as Ki,
  s0 as Li,
  l0 as Mi,
  ju as Ni,
  Oh as Oi,
  Sw as Pi,
  Vw as Qi,
  Ku as Ri,
  vw as Si,
  Rw as Ti,
  bn as Ui,
  qc as Vi,
  Da as Wi,
  or as Xi,
  eF as Yi,
  nn as Zi,
  tF as _i,
  rF as $i,
  Xc as aj,
  Yc as bj,
  Le as cj,
  g0 as dj,
  ka as ej,
  T0 as fj,
  Pb as gj,
  C0 as hj,
  S0 as ij,
  Ib as jj,
  Db as kj,
  k0 as lj,
  Lb as mj,
  N0 as nj,
  Mb as oj,
  P0 as pj,
  I0 as qj,
  D0 as rj,
  w0 as sj,
  L0 as tj,
  M0 as uj,
  Vt as vj,
  rr as wj,
  Ne as xj,
  jb as yj,
  an as zj,
  A0 as Aj,
  F0 as Bj,
  O0 as Cj,
  zi as Dj,
  Ge as Ej,
  tn as Fj,
  Qc as Gj,
  X0 as Hj,
  Wb as Ij,
  on as Jj,
  zb as Kj,
  uF as Lj,
  dF as Mj,
  cF as Nj,
  tp as Oj,
  wa as Pj,
  pF as Qj,
  hF as Rj,
  xF as Sj,
  La as Tj,
  gF as Uj,
  EF as Vj,
  BF as Wj,
  AF as Xj,
  FF as Yj,
  OF as Zj,
  dp as _j,
  ln as $j,
  WF as ak,
  cp as bk,
  zF as ck,
  HF as dk,
  GF as ek,
  pp as fk,
  jF as gk,
  vt as hk,
  UF as ik,
  qF as jk,
  XF as kk,
  YF as lk,
  JF as mk,
  ZF as nk,
  QF as ok,
  un as pk,
  rO as qk,
  fp as rk,
  dO as sk,
  mp as tk,
  yp as uk,
  cO as vk,
  hp as wk,
  pO as xk,
  gp as yk,
  IO as zk,
  Cj as Ak,
  Sj as Bk,
  Vj as Ck,
  dS as Dk,
  Mf as Ek,
  vj as Fk,
  Rj as Gk,
  Pe as Hk,
  Sp as Ik,
  vu as Jk,
  Ch as Kk,
  BD as Lk,
  Lu as Mk,
  AD as Nk,
  FD as Ok,
  Mu as Pk,
  GO as Qk,
  Rt as Rk,
  Fa as Sk,
  ir as Tk,
  Vp as Uk,
  cn as Vk,
  jO as Wk,
  _O as Xk,
  $O as Yk,
  cT as Zk,
  za as _k,
  Rp as $k,
  JO as al,
  mT as bl,
  Ar as cl,
  zD as dl,
  vh as el,
  Eu as fl,
  hT as gl,
  Dp as hl,
  SW as il,
  VW as jl,
  bT as kl,
  vW as ll,
  RW as ml,
  wp as nl,
  kW as ol,
  NW as pl,
  CT as ql,
  PW as rl,
  Bu as sl,
  Ir as tl,
  yw as ul,
  hw as vl,
  xw as wl,
  Uu as xl,
  _i as yl,
  qu as zl,
  Xu as Al,
  Yu as Bl,
  $i as Cl,
  Ow as Dl,
  Ju as El,
  Ou as Fl,
  Wu as Gl,
  ZD as Hl,
  Ph as Il,
  QD as Jl,
  ew as Kl,
  zu as Ll,
  tw as Ml,
  Ih as Nl,
  Kt as Ol,
  rw as Pl,
  ow as Ql,
  nw as Rl,
  iw as Sl,
  aw as Tl,
  Hi as Ul,
  dw as Vl,
  cw as Wl,
  Mh as Xl,
  Gi as Yl,
  Bh as Zl,
  pw as _l,
  Ah as $l,
  Zu as am,
  sx as bm,
  Qu as cm,
  rd as dm,
  Kw as em,
  lx as fm,
  Uw as gm,
  qw as hm,
  od as im,
  Io as jm,
  Qe as km,
  Ki as lm,
  oL as mm,
  nL as nm,
  iL as om,
  sd as pm,
  mL as qm,
  mx as rm,
  ud as sm,
  cd as tm,
  yx as um,
  wn as vm,
  ar as wm,
  rW as xm,
  kp as ym,
  aW as zm,
  sW as Am,
  Pp as Bm,
  fW as Cm,
  Or as Dm,
  mW as Em,
  ut as Fm,
  Ip as Gm,
  yW as Hm,
  hW as Im,
  xW as Jm,
  gW as Km,
  MW as Lm,
  Wr as Mm,
  EW as Nm,
  Lp as Om,
  kT as Pm,
  PT as Qm,
  ez as Rm,
  tz as Sm,
  rz as Tm,
  oz as Um,
  pn as Vm,
  nz as Wm,
  iz as Xm,
  Ep as Ym,
  az as Zm,
  sz as _m,
  lz as $m,
  uz as an,
  dz as bn,
  cz as cn,
  pz as dn,
  fz as en,
  mz as fn,
  yz as gn,
  hz as hn,
  xz as in,
  gz as jn,
  bz as kn,
  Tz as ln,
  Cz as mn,
  Sz as nn,
  Vz as on,
  vz as pn,
  Rz as qn,
  kz as rn,
  Nz as sn,
  Pz as tn,
  Iz as un,
  Dz as vn,
  wz as wn,
  Lz as xn,
  Mz as yn,
  Ez as zn,
  Ya as An,
  pj as Bn,
  Ln as Cn,
  Gj as Dn,
  qf as En,
  u_ as Fn,
  es as Gn,
  JG as Hn,
  qa as In,
  ZG as Jn,
  ij as Kn,
  aj as Ln,
  Pf as Mn,
  Xa as Nn,
  uj as On,
  jf as Pn,
  kf as Qn,
  Hz as Rn,
  Gz as Sn,
  jz as Tn,
  Ha as Un,
  mn as Vn,
  r1 as Wn,
  o1 as Xn,
  Kp as Yn,
  wf as Zn,
  hj as _n,
  Ef as $n,
  Bf as ao,
  Af as bo,
  Ff as co,
  Of as do,
  Pn as eo,
  In as fo,
  te as go,
  gS as ho,
  Hf as io,
  u1 as jo,
  Zp as ko,
  f1 as lo,
  Qp as mo,
  ef as no,
  g1 as oo,
  w1 as po,
  tf as qo,
  Tn as ro,
  RC as so,
  Sn as to,
  rf as uo,
  cf as vo,
  oH as wo,
  nH as xo,
  iH as yo,
  pf as zo,
  sH as Ao,
  lH as Bo,
  uH as Co,
  ff as Do,
  cH as Eo,
  pH as Fo,
  fH as Go,
  mf as Ho,
  yH as Io,
  hH as Jo,
  xH as Ko,
  Rn as Lo,
  TH as Mo,
  CH as No,
  SH as Oo,
  VH as Po,
  F1 as Qo,
  O1 as Ro,
  W1 as So,
  PC as To,
  z1 as Uo,
  af as Vo,
  vn as Wo,
  K1 as Xo,
  U1 as Yo,
  lf as Zo,
  q1 as _o,
  X1 as $o,
  Y1 as ap,
  uf as bp,
  J1 as cp,
  Z1 as dp,
  Q1 as ep,
  df as fp,
  eH as gp,
  tH as hp,
  $a as ip,
  kH as jp,
  NH as kp,
  PH as lp,
  IH as mp,
  kn as np,
  LH as op,
  MH as pp,
  EH as qp,
  BH as rp,
  AH as sp,
  Nn as tp,
  WH as up,
  zH as vp,
  HH as wp,
  GH as xp,
  jH as yp,
  Ka as zp,
  GC as Ap,
  gf as Bp,
  UH as Cp,
  qH as Dp,
  _C as Ep,
  XH as Fp,
  YH as Gp,
  hG as Hp,
  Tf as Ip,
  Aj as Jp,
  _f as Kp,
  Cf as Lp,
  Sf as Mp,
  ge as Np,
  Vf as Op,
  wG as Pp,
  UC as Qp,
  qC as Rp,
  le as Sp,
  lr as Tp,
  LG as Up,
  MG as Vp,
  EG as Wp,
  BG as Xp,
  XC as Yp,
  YC as Zp,
  AG as _p,
  JC as $p,
  FG as aq,
  OG as bq,
  ZC as cq,
  WG as dq,
  eS as eq,
  Ua as fq,
  b_ as gq,
  Rf as hq,
  jG as iq,
  NS as jq,
  PS as kq,
  J_ as lq,
  Z_ as mq,
  Q_ as nq,
  e2 as oq,
  t2 as pq,
  r2 as qq,
  LS as rq,
  MS as sq,
  o2 as tq,
  n2 as uq,
  i2 as vq,
  WS as wq,
  zS as xq,
  nV as yq,
  hV as zq,
  xV as Aq,
  a2 as Bq,
  ls as Cq,
  s2 as Dq,
  l2 as Eq,
  u2 as Fq,
  p2 as Gq,
  am as Hq,
  us as Iq,
  X as Jq,
  Qf as Kq,
  ds as Lq,
  g2 as Mq,
  tm as Nq,
  rm as Oq,
  _n as Pq,
  om as Qq,
  VV as Rq,
  vV as Sq,
  I2 as Tq,
  cs as Uq,
  ps as Vq,
  D2 as Wq,
  w2 as Xq,
  PV as Yq,
  L2 as Zq,
  M2 as _q,
  Tm as $q,
  eK as ar,
  tK as br,
  rK as cr,
  im as dr,
  $n as er,
  U as fr,
  A2 as gr,
  F2 as hr,
  Yn as ir,
  nt as jr,
  $r as kr,
  ve as lr,
  u$ as mr,
  d$ as nr,
  c$ as or,
  p$ as pr,
  um as qr,
  dm as rr,
  cm as sr,
  pm as tr,
  ms as ur,
  fm as vr,
  f$ as wr,
  mK as xr,
  av as yr,
  lv as zr,
  Nt as Ar,
  g$ as Br,
  b$ as Cr,
  Pt as Dr,
  T$ as Er,
  C$ as Fr,
  FV as Gr,
  OV as Hr,
  WV as Ir,
  zV as Jr,
  It as Kr,
  D$ as Lr,
  HV as Mr,
  ym as Nr,
  w$ as Or,
  ur as Pr,
  L$ as Qr,
  Qn as Rr,
  M$ as Sr,
  E$ as Tr,
  jV as Ur,
  B$ as Vr,
  A$ as Wr,
  _V as Xr,
  $V as Yr,
  F$ as Zr,
  O$ as _r,
  KV as $r,
  K$ as as,
  U$ as bs,
  q$ as cs,
  xm as ds,
  UV as es,
  ei as fs,
  X$ as gs,
  Y$ as hs,
  J$ as is,
  Z$ as js,
  SK as ks,
  VK as ls,
  vK as ms,
  RK as ns,
  kK as os,
  dv as ps,
  cv as qs,
  NK as rs,
  IK as ss,
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=https://app.framerstatic.com/chunk-KHAT6QH3.mjs.map
