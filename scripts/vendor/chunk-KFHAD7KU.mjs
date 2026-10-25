import { f as w, h, n as S } from "./chunk-Y3GZLMBF.mjs";
import { a as K } from "./chunk-SWYZG2NI.mjs";
import { a as T } from "./chunk-YRQ7G4QH.mjs";
import { e as j } from "./chunk-WLHSDIGQ.mjs";
function re(e) {
  return typeof e == "string";
}
function V(e) {
  return Number.isFinite(e);
}
function R(e) {
  return e.key + e.extension;
}
function I(e, n, o, i) {
  let r = T(),
    t = new URL(`${r.userContent}/images/${e}`);
  return (
    V(n) && t.searchParams.set("scale-down-to", `${n}`),
    o && t.searchParams.set("lossless", "1"),
    i &&
      (t.searchParams.set("width", i.width.toString()),
      t.searchParams.set("height", i.height.toString())),
    t.toString()
  );
}
function oe(e, n, o) {
  return I(
    R(e),
    n,
    o,
    e.properties?.image
      ? { width: e.properties.image.width, height: e.properties.image.height }
      : void 0
  );
}
function C(e) {
  return `${T().userContent}/assets/${e}`;
}
function se(e) {
  return C(R(e));
}
function ie(e) {
  let n = T(),
    o = new URL(e);
  if (o.origin !== n.userContent) return;
  let [, i, r, ...t] = o.pathname.split("/");
  if (!(i !== "images" && i !== "assets") && !(r === void 0 || r === "" || t.length > 0))
    return { filename: r, searchParams: o.searchParams };
}
var b = new Set();
function k(e, ...n) {
  b.has(e) || (b.add(e), console.warn(e, ...n));
}
var A = j(K(), 1);
var v = (e) => () => {
    k(e);
  },
  z = () => () => {},
  U = {
    isSelectorLoaded() {
      return !0;
    },
    async loadFonts() {
      return { newlyLoadedFontCount: 0 };
    },
    async loadWebFontsFromSelectors() {
      return [];
    },
    async loadMissingFonts() {},
  },
  O = {
    imagePlaceholderSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>',
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, n, o) {
      let i = y.useImageSource(e, n, o);
      return (0, A.useMemo)(() => {
        let r = new Image();
        return ((r.src = i), e.srcSet && (r.srcset = e.srcSet), r);
      }, [i, e.srcSet]);
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
    fontStore: U,
    isOnPageCanvas: !1,
  },
  E = !1,
  D = {
    get(e, n, o) {
      return Reflect.has(e, n)
        ? Reflect.get(e, n, o)
        : ["getLogger"].includes(String(n))
          ? z()
          : v(
              E
                ? `${String(n)} is not available in this version of Framer.`
                : `${String(n)} is only available inside of Framer. https://www.framer.com/`
            );
    },
  },
  y = new Proxy(O, D),
  ce = {
    isSelectorLoaded(e) {
      return y.fontStore.isSelectorLoaded(e);
    },
    loadFonts(e) {
      return y.fontStore.loadFonts(e);
    },
    loadWebFontsFromSelectors(e) {
      return y.fontStore.loadWebFontsFromSelectors(e);
    },
    loadMissingFonts(e, n) {
      return y.fontStore.loadMissingFonts(e, n);
    },
  };
function fe(e) {
  (Object.assign(O, e), (E = !0));
}
function M(e) {
  return `data:image/svg+xml,${e.replaceAll("#", "%23").replaceAll("'", "%27").replaceAll('"', "%22")}`;
}
function F(e) {
  return typeof e == "function";
}
function ye(e) {
  return typeof e == "boolean";
}
function me(e) {
  return typeof e == "string";
}
function Te(e) {
  return Number.isFinite(e);
}
function W(e) {
  return Array.isArray(e);
}
function P(e) {
  return e !== null && typeof e == "object" && !W(e);
}
function we(e) {
  for (let n in e) return !1;
  return !0;
}
function he(e) {
  return typeof e > "u";
}
function Se(e) {
  return e === null;
}
function xe(e) {
  return e == null;
}
function Re(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function be(e) {
  return P(e) && F(e.return);
}
function ke(e) {
  return P(e) && F(e.then);
}
function ve(e) {
  return e instanceof Promise;
}
var N = () => {},
  L = typeof window < "u",
  Ae =
    L &&
    (navigator.webdriver ||
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)),
  $ = L && typeof window.requestIdleCallback == "function",
  Oe = $ ? window.requestIdleCallback : setTimeout;
function Ee(e) {
  return `url('${M(e)}')`;
}
function Me(e, n) {
  let o = n instanceof Error ? (n.stack ?? n.message) : n;
  return `${
    e
      ? `${e}
`
      : ""
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    o
      ? `:
${o}`
      : "."
  }`;
}
var Fe = () => N,
  Pe = () => !0,
  Le = () => !1;
function Ke(e, n) {
  if (e) return;
  if (typeof n == "function")
    try {
      n = n();
    } catch {
      n = "(assert message threw)";
    }
  typeof n == "string" && n.length > 2048 && (n = n.slice(0, 2048) + "\u2026");
  let o = Error(n ? "Assertion Error: " + n : "Assertion Error");
  if (o.stack)
    try {
      let i = o.stack.split(`
`);
      i[1]?.includes("assert")
        ? (i.splice(1, 1),
          (o.stack = i.join(`
`)))
        : i[0]?.includes("assert") &&
          (i.splice(0, 1),
          (o.stack = i.join(`
`)));
    } catch {}
  throw o;
}
function Ve(e, n) {
  throw n instanceof Error
    ? n
    : n !== void 0
      ? new Error(String(n))
      : new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state");
}
function Ce(e) {
  return Object.keys(e);
}
var q;
((ne) => {
  function e(a, ...s) {
    return a.concat(s);
  }
  ne.push = e;
  function n(a) {
    return a.slice(0, -1);
  }
  ne.pop = n;
  function o(a, ...s) {
    return s.concat(a);
  }
  ne.unshift = o;
  function i(a, s, ...c) {
    let p = a.length;
    if (s < 0 || s > p) throw Error("index out of range: " + s);
    let f = a.slice();
    return (f.splice(s, 0, ...c), f);
  }
  ne.insert = i;
  function r(a, s, c) {
    let p = a.length;
    if (s < 0 || s >= p) throw Error("index out of range: " + s);
    let f = Array.isArray(c) ? c : [c],
      g = a.slice();
    return (g.splice(s, 1, ...f), g);
  }
  ne.replace = r;
  function t(a, s) {
    let c = a.length;
    if (s < 0 || s >= c) throw Error("index out of range: " + s);
    let p = a.slice();
    return (p.splice(s, 1), p);
  }
  ne.remove = t;
  function u(a, s, c) {
    let p = a.length;
    if (s < 0 || s >= p) throw Error("from index out of range: " + s);
    if (c < 0 || c >= p) throw Error("to index out of range: " + c);
    let f = a.slice();
    if (c === s) return f;
    let g = f[s];
    return (
      s < c ? (f.splice(c + 1, 0, g), f.splice(s, 1)) : (f.splice(s, 1), f.splice(c, 0, g)),
      f
    );
  }
  ne.move = u;
  function l(a, s) {
    let c = [],
      p = Math.min(a.length, s.length);
    for (let f = 0; f < p; f++) c.push([a[f], s[f]]);
    return c;
  }
  ne.zip = l;
  function d(a, s, c) {
    let p = a.slice(),
      f = p[s];
    return (f === void 0 || (p[s] = c(f)), p);
  }
  ne.update = d;
  function m(a) {
    return Array.from(new Set(a));
  }
  ne.unique = m;
  function x(a, ...s) {
    return Array.from(new Set([...a, ...s.flat()]));
  }
  ne.union = x;
  function ee(a, s) {
    return a.filter(s);
  }
  ne.filter = ee;
})((q ||= {}));
var Z = Object.prototype.hasOwnProperty;
function B(e, n) {
  return Z.call(e, n);
}
var _;
((i) => {
  function e(r, t, u) {
    for (let l of Object.keys(r)) B(t, l) || delete r[l];
    for (let l of Object.keys(t))
      if (r[l] === void 0) {
        if (l === "id") {
          r[l] = u();
          continue;
        }
        r[l] = t[l];
      }
    return (Object.setPrototypeOf(r, Object.getPrototypeOf(t)), r);
  }
  i.morphUsingTemplate = e;
  function n(r, t) {
    t && Object.assign(r, t);
  }
  i.writeOnce = n;
  function o(r, t) {
    return Object.assign(Object.create(Object.getPrototypeOf(r)), r, t);
  }
  i.update = o;
})((_ ||= {}));
var H;
((r) => {
  function e(t, ...u) {
    return new Set([...t, ...u]);
  }
  r.add = e;
  function n(t, ...u) {
    let l = new Set(t);
    for (let d of u) l.delete(d);
    return l;
  }
  r.remove = n;
  function o(...t) {
    let u = new Set();
    for (let l of t) for (let d of l) u.add(d);
    return u;
  }
  r.union = o;
  function i(t, u) {
    return t.has(u) ? r.remove(t, u) : r.add(t, u);
  }
  r.toggle = i;
})((H ||= {}));
var G;
((i) => {
  function e(r, ...t) {
    let u = new Map();
    r.forEach((d, m) => u.set(m, d));
    let l = !1;
    for (let d of t) d && (d.forEach((m, x) => u.set(x, m)), (l = !0));
    return l ? u : r;
  }
  i.merge = e;
  function n(r, t, u) {
    let l = new Map(r);
    return (l.set(t, u), l);
  }
  i.set = n;
  function o(r, t) {
    let u = new Map(r);
    return (u.delete(t), u);
  }
  i.remove = o;
})((G ||= {}));
function J(e, n) {
  if (e.size !== n.size) return !1;
  for (let o of e) if (!n.has(o)) return !1;
  return !0;
}
function Q(e, n) {
  if (e.size !== n.size) return !1;
  for (let [o, i] of e) if (!n.has(o) || n.get(o) !== i) return !1;
  return !0;
}
function X(e, n) {
  if (e === n) return !0;
  let o = e.length;
  if (o !== n.length) return !1;
  for (let i = 0; i < o; i++) if (e[i] != n[i]) return !1;
  return !0;
}
function Y(e, n) {
  if (e === n) return !0;
  let o = Object.keys(e),
    i = o.length;
  if (i !== Object.keys(n).length) return !1;
  for (let r = i; r-- !== 0;) {
    let t = o[r];
    if (S(t) || e[t] != n[t]) return !1;
  }
  return !0;
}
function We(e, n) {
  if (e === n) return !0;
  let o = Object.keys(e),
    i = o.length;
  if (i !== Object.keys(n).length) return !1;
  for (let r = i; r-- !== 0;) {
    let t = o[r];
    if (S(t) || e[t] !== n[t]) return !1;
  }
  return !0;
}
function Ne(e, n) {
  return e === n
    ? !0
    : h(e)
      ? h(n)
        ? X(e, n)
        : !1
      : w(e) && w(n)
        ? e instanceof Set
          ? n instanceof Set
            ? J(e, n)
            : !1
          : e instanceof Map
            ? n instanceof Map
              ? Q(e, n)
              : !1
            : Y(e, n)
        : !1;
}
export {
  k as a,
  y as b,
  ce as c,
  fe as d,
  M as e,
  F as f,
  ye as g,
  me as h,
  Te as i,
  W as j,
  P as k,
  we as l,
  he as m,
  Se as n,
  xe as o,
  Re as p,
  be as q,
  ke as r,
  ve as s,
  N as t,
  L as u,
  Ae as v,
  $ as w,
  Oe as x,
  Ee as y,
  Me as z,
  Fe as A,
  Pe as B,
  Le as C,
  Ke as D,
  Ve as E,
  Ce as F,
  re as G,
  V as H,
  R as I,
  I as J,
  oe as K,
  C as L,
  se as M,
  ie as N,
  q as O,
  _ as P,
  H as Q,
  G as R,
  J as S,
  Q as T,
  X as U,
  Y as V,
  We as W,
  Ne as X,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-KFHAD7KU.mjs.map
