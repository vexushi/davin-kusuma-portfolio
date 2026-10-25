import { a as ce } from "./chunk-2FCXHKEL.mjs";
import { a as W } from "./chunk-SWYZG2NI.mjs";
import { d as Fp, e as B } from "./chunk-WLHSDIGQ.mjs";
function ro(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function At(t, e) {
  let o = t.indexOf(e);
  o > -1 && t.splice(o, 1);
}
function xi([...t], e, o) {
  let r = e < 0 ? t.length + e : e;
  if (r >= 0 && r < t.length) {
    let n = o < 0 ? t.length + o : o,
      [i] = t.splice(e, 1);
    t.splice(n, 0, i);
  }
  return t;
}
var et = (t, e, o) => (o > e ? e : o < t ? t : o);
function Fl(t, e) {
  return e
    ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}`
    : t;
}
var kt = () => {},
  J = () => {};
var at = {};
var no = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
var io = (t) => typeof t == "object" && t !== null;
var so = (t) => /^0[^.\s]+$/u.test(t);
function ao(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
var Q = (t) => t;
var Jt = (...t) => t.reduce((e, o) => (r) => o(e(r)));
var gt = (t, e, o) => {
  let r = e - t;
  return r ? (o - t) / r : 1;
};
var le = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (ro(this.subscriptions, e), () => this.remove(e));
  }
  remove(e) {
    At(this.subscriptions, e);
  }
  notify(e, o, r) {
    let n = this.subscriptions.length;
    if (n)
      if (n === 1) this.subscriptions[0](e, o, r);
      else
        for (let i = 0; i < n; i++) {
          let s = this.subscriptions[i];
          s && s(e, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var X = (t) => t * 1e3,
  pt = (t) => t / 1e3;
var co = (t, e) => (e ? t * (1e3 / e) : 0);
var aa = new Set();
function jp(t) {
  return aa.has(t);
}
function ca(t, e, o) {
  t || aa.has(e) || (console.warn(Fl(e, o)), aa.add(e));
}
var We = (t, e, o) => {
  let r = e - t;
  return ((((o - t) % r) + r) % r) + t;
};
var la = (t, e, o) => t * (3 * (1 - t) * ((1 - t) * e + t * o) + t * t);
function Ae(t, e, o, r) {
  return t === e && o === r
    ? Q
    : (n) => {
        let i = 0,
          s = 1,
          a = n;
        for (let c = 0; ; c++) {
          (a >= i && a <= s) || (a = (i + s) / 2);
          let l = la(a, t, o) - n;
          if (l * l < 1e-28 || c === 40) break;
          (l > 0 ? (s = a) : (i = a), (a -= (l * 1e-7) / (la(a + 1e-7, t, o) - n - l)));
        }
        return la(a, e, r);
      };
}
var Kr = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2);
var lo = (t) => (e) => 1 - t(1 - e);
var vi = Ae(0.33, 1.53, 0.69, 0.99),
  Xo = lo(vi),
  $r = Kr(Xo);
var Hr = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * Xo(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))));
var _r = (t) => 1 - Math.sin(Math.acos(t)),
  Yr = lo(_r),
  Xr = Kr(_r);
var ua = Ae(0.42, 0, 1, 1),
  fa = Ae(0, 0, 0.58, 1),
  qo = Ae(0.42, 0, 0.58, 1);
function Np(t, e = "end") {
  return (o) => {
    o = e === "end" ? Math.min(o, 0.999) : Math.max(o, 0.001);
    let r = o * t,
      n = e === "end" ? Math.floor(r) : Math.ceil(r);
    return et(0, 1, n / t);
  };
}
var qr = (t) => Array.isArray(t) && typeof t[0] != "number";
function Zr(t, e) {
  return qr(t) ? t[We(0, t.length, e)] : t;
}
var Pe = (t) => Array.isArray(t) && typeof t[0] == "number";
var jl = {
    linear: Q,
    easeIn: ua,
    easeInOut: qo,
    easeOut: fa,
    circIn: _r,
    circInOut: Xr,
    circOut: Yr,
    backIn: Xo,
    backInOut: $r,
    backOut: vi,
    anticipate: Hr,
  },
  Gp = (t) => typeof t == "string",
  Zo = (t) => {
    if (Pe(t)) {
      J(
        t.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      let [e, o, r, n] = t;
      return Ae(e, o, r, n);
    } else if (Gp(t))
      return (J(jl[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), jl[t]);
    return t;
  };
var H = { delta: 0, timestamp: 0, isProcessing: !1 };
var Si;
function Wp() {
  Si = void 0;
}
var Y = {
  now: () => (
    Si === void 0 && Y.set(H.isProcessing || at.useManualTiming ? H.timestamp : performance.now()),
    Si
  ),
  set: (t) => {
    ((Si = t), queueMicrotask(Wp));
  },
};
var ue = (t) => Math.round(t * 1e5) / 1e5;
var Nl = (t) => (e) => typeof e == "string" && e.startsWith(t),
  uo = Nl("--"),
  Up = Nl("var(--"),
  fo = (t) => (Up(t) ? zp.test(t.split("/*")[0].trim()) : !1),
  zp = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Jr(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
var Qt = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t },
  fe = { ...Qt, transform: (t) => et(0, 1, t) },
  Jo = { ...Qt, default: 1 };
var Qo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Gl(t) {
  return t == null;
}
var Wl =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
var tr = (t, e) => (o) =>
    !!(
      (typeof o == "string" && Wl.test(o) && o.startsWith(t)) ||
      (e && !Gl(o) && Object.prototype.hasOwnProperty.call(o, e))
    ),
  wi = (t, e, o) => (r) => {
    if (typeof r != "string") return r;
    let [n, i, s, a] = r.match(Qo);
    return {
      [t]: parseFloat(n),
      [e]: parseFloat(i),
      [o]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  };
var Kp = (t) => et(0, 255, t),
  Ti = { ...Qt, transform: (t) => Math.round(Kp(t)) },
  te = {
    test: tr("rgb", "red"),
    parse: wi("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      Ti.transform(t) +
      ", " +
      Ti.transform(e) +
      ", " +
      Ti.transform(o) +
      ", " +
      ue(fe.transform(r)) +
      ")",
  };
function $p(t) {
  let e = "",
    o = "",
    r = "",
    n = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (o = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (n = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (o = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (n = t.substring(4, 5)),
        (e += e),
        (o += o),
        (r += r),
        (n += n)),
    {
      red: parseInt(e, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1,
    }
  );
}
var er = { test: tr("#"), parse: $p, transform: te.transform };
var Qr = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  zt = Qr("deg"),
  Pt = Qr("%"),
  I = Qr("px"),
  ma = Qr("vh"),
  pa = Qr("vw"),
  Vi = { ...Pt, parse: (t) => Pt.parse(t) / 100, transform: (t) => Pt.transform(t * 100) };
var Me = {
  test: tr("hsl", "hue"),
  parse: wi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: o, alpha: r = 1 }) =>
    "hsla(" +
    Math.round(t) +
    ", " +
    Pt.transform(ue(e)) +
    ", " +
    Pt.transform(ue(o)) +
    ", " +
    ue(fe.transform(r)) +
    ")",
};
var it = {
  test: (t) => te.test(t) || er.test(t) || Me.test(t),
  parse: (t) => (te.test(t) ? te.parse(t) : Me.test(t) ? Me.parse(t) : er.parse(t)),
  transform: (t) =>
    typeof t == "string" ? t : t.hasOwnProperty("red") ? te.transform(t) : Me.transform(t),
  getAnimatableNone: (t) => {
    let e = it.parse(t);
    return ((e.alpha = 0), it.transform(e));
  },
};
var Ul =
  /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
var Kl = new RegExp(Qo.source),
  $l = new RegExp(Ul.source, "i");
function Hp(t) {
  return isNaN(t) && typeof t == "string" && (Kl.test(t) || $l.test(t));
}
var Hl = "number",
  _l = "color",
  _p = "var",
  Yp = "var(",
  zl = "${}",
  Xp =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function da(t) {
  let e = t.toString();
  return Kl.test(e) || $l.test(e);
}
function mo(t) {
  let e = t.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    n = [],
    i = 0,
    a = e
      .replace(
        Xp,
        (c) => (
          it.test(c)
            ? (r.color.push(i), n.push(_l), o.push(it.parse(c)))
            : c.startsWith(Yp)
              ? (r.var.push(i), n.push(_p), o.push(c))
              : (r.number.push(i), n.push(Hl), o.push(parseFloat(c))),
          ++i,
          zl
        )
      )
      .split(zl);
  return { values: o, split: a, indexes: r, types: n };
}
function qp(t) {
  return mo(t).values;
}
function Yl({ split: t, types: e }) {
  let o = t.length;
  return (r) => {
    let n = "";
    for (let i = 0; i < o; i++)
      if (((n += t[i]), r[i] !== void 0)) {
        let s = e[i];
        s === Hl ? (n += ue(r[i])) : s === _l ? (n += it.transform(r[i])) : (n += r[i]);
      }
    return n;
  };
}
function Zp(t) {
  return Yl(mo(t));
}
var Jp = (t) => (typeof t == "number" ? 0 : it.test(t) ? it.getAnimatableNone(t) : t),
  Qp = (t, e) => (typeof t == "number" ? (e?.trim().endsWith("/") ? t : 0) : Jp(t));
function td(t) {
  let e = mo(t);
  return Yl(e)(e.values.map((r, n) => Qp(r, e.split[n])));
}
var ct = { test: Hp, parse: qp, createTransformer: Zp, getAnimatableNone: td };
function ha(t, e, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? t + (e - t) * 6 * o : o < 1 / 2 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t
  );
}
function ga({ hue: t, saturation: e, lightness: o, alpha: r }) {
  ((t /= 360), (e /= 100), (o /= 100));
  let n = 0,
    i = 0,
    s = 0;
  if (!e) n = i = s = o;
  else {
    let a = o < 0.5 ? o * (1 + e) : o + e - o * e,
      c = 2 * o - a;
    ((n = ha(c, a, t + 1 / 3)), (i = ha(c, a, t)), (s = ha(c, a, t - 1 / 3)));
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function po(t, e) {
  return (o) => (o > 0 ? e : t);
}
var K = (t, e, o) => t + (e - t) * o;
var bi = (t, e, o) => {
    let r = t * t,
      n = o * (e * e - r) + r;
    return n < 0 ? 0 : Math.sqrt(n);
  },
  ed = [er, te, Me],
  od = (t) => ed.find((e) => e.test(t));
function Xl(t) {
  let e = od(t);
  if (!e)
    return (
      kt(
        !1,
        `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        "color-not-animatable"
      ),
      !1
    );
  let o = e.parse(t);
  return (e === Me && (o = ga(o)), o);
}
var Ai = (t, e) => {
  let o = Xl(t),
    r = Xl(e);
  if (!o || !r) return po(t, e);
  let n = { ...o };
  return (i) => (
    (n.red = bi(o.red, r.red, i)),
    (n.green = bi(o.green, r.green, i)),
    (n.blue = bi(o.blue, r.blue, i)),
    (n.alpha = K(o.alpha, r.alpha, i)),
    te.transform(n)
  );
};
var tn = new Set(["none", "hidden"]);
function ya(t, e) {
  return tn.has(t) ? (o) => (o <= 0 ? t : e) : (o) => (o >= 1 ? e : t);
}
function rd(t, e) {
  return (o) => K(t, e, o);
}
function en(t) {
  return typeof t == "number"
    ? rd
    : typeof t == "string"
      ? fo(t)
        ? po
        : it.test(t)
          ? Ai
          : Zl
      : Array.isArray(t)
        ? xa
        : typeof t == "object"
          ? it.test(t)
            ? Ai
            : ql
          : po;
}
function xa(t, e) {
  let o = [...t],
    r = o.length,
    n = t.map((i, s) => en(i)(i, e[s]));
  return (i) => {
    for (let s = 0; s < r; s++) o[s] = n[s](i);
    return o;
  };
}
function ql(t, e) {
  let o = { ...t, ...e },
    r = {};
  for (let n in o) t[n] !== void 0 && e[n] !== void 0 && (r[n] = en(t[n])(t[n], e[n]));
  return (n) => {
    for (let i in r) o[i] = r[i](n);
    return o;
  };
}
function nd(t, e) {
  let o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let n = 0; n < e.values.length; n++) {
    let i = e.types[n],
      s = t.indexes[i][r[i]],
      a = t.values[s] ?? 0;
    ((o[n] = a), r[i]++);
  }
  return o;
}
var Zl = (t, e) => {
  let o = ct.createTransformer(e),
    r = mo(t),
    n = mo(e);
  return r.indexes.var.length === n.indexes.var.length &&
    r.indexes.color.length === n.indexes.color.length &&
    r.indexes.number.length >= n.indexes.number.length
    ? (tn.has(t) && !n.values.length) || (tn.has(e) && !r.values.length)
      ? ya(t, e)
      : Jt(xa(nd(r, n), n.values), o)
    : (kt(
        !0,
        `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ),
      po(t, e));
};
var Jl = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function id(t, e) {
  let o = Jl.exec(t);
  if (!o) return;
  let r = Jl.exec(e);
  if (!r || o[2] !== r[2]) return;
  let n = o[2],
    i = parseFloat(o[1]),
    s = parseFloat(r[1]);
  return (a) => ue(K(i, s, a)) + n;
}
function ho(t, e, o) {
  if (typeof t == "number" && typeof e == "number" && typeof o == "number") return K(t, e, o);
  if (typeof t == "string" && typeof e == "string") {
    let n = id(t, e);
    if (n) return n;
  }
  return en(t)(t, e);
}
var go = [
  "setup",
  "read",
  "resolveKeyframes",
  "preUpdate",
  "update",
  "preRender",
  "render",
  "postRender",
];
function Ql(t) {
  let e = new Set(),
    o = new Set(),
    r = !1,
    n = !1,
    i = new Set(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(l) {
    (i.has(l) && (o.add(l), t()), l(s));
  }
  let c = {
    schedule: (l, u = !1, f = !1) => {
      let p = f && r ? e : o;
      return (u && i.add(l), p.add(l), l);
    },
    cancel: (l) => {
      (o.delete(l), i.delete(l));
    },
    process: (l) => {
      if (((s = l), r)) {
        n = !0;
        return;
      }
      r = !0;
      let u = e;
      ((e = o), (o = u), e.forEach(a), e.clear(), (r = !1), n && ((n = !1), c.process(l)));
    },
  };
  return c;
}
var sd = 40;
function on(t, e, o = { delta: 0, timestamp: 0, isProcessing: !1 }) {
  let r = !1,
    n = !0,
    i = () => (r = !0),
    s = go.reduce((x, w) => ((x[w] = Ql(i)), x), {}),
    {
      setup: a,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: f,
      preRender: m,
      render: p,
      postRender: d,
    } = s,
    g = () => {
      let x = at.useManualTiming,
        w = x ? o.timestamp : performance.now();
      ((r = !1),
        x || (o.delta = n ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, sd), 1)),
        (o.timestamp = w),
        (o.isProcessing = !0),
        a.process(o),
        c.process(o),
        l.process(o),
        u.process(o),
        f.process(o),
        m.process(o),
        p.process(o),
        d.process(o),
        (o.isProcessing = !1),
        r && e && ((n = !1), t(g)));
    },
    h = () => {
      ((r = !0), (n = !0), o.isProcessing || t(g));
    };
  return {
    schedule: go.reduce((x, w) => {
      let P = s[w];
      return ((x[w] = (N, y = !1, S = !1) => (r || h(), P.schedule(N, y, S))), x);
    }, {}),
    cancel: (x) => {
      for (let w = 0; w < go.length; w++) s[go[w]].cancel(x);
    },
    state: o,
    steps: s,
  };
}
var {
  schedule: D,
  cancel: rt,
  steps: Ce,
} = on(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Q, !0, H);
var Pi = (t) => {
  let e = ({ timestamp: o }) => t(o);
  return {
    start: (o = !0) => D.update(e, o),
    stop: () => rt(e),
    now: () => (H.isProcessing ? H.timestamp : Y.now()),
  };
};
var rn = (t, e, o = 10) => {
  let r = "",
    n = Math.max(Math.round(e / o), 2);
  for (let i = 0; i < n; i++) r += Math.round(t(i / (n - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
var nn = 2e4;
function yo(t, e = 50, o = 2e4, r) {
  let n = 0,
    i = t.next(n);
  for (r?.push(i.value); !i.done && n < o;) ((n += e), (i = t.next(n)), r?.push(i.value));
  return n >= o ? 1 / 0 : n;
}
function sn(t, e = 100, o) {
  let { keyframes: r, velocity: n } = t,
    i = r && r[r.length - 1] - r[0],
    s = o({ ...t, velocity: n && i ? (n * e) / i : n, keyframes: [0, e] }),
    a = Math.min(yo(s), 2e4);
  return { type: "keyframes", ease: (c) => s.next(a * c).value / e, duration: pt(a) };
}
var wt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
  },
  tu = (t) => (t < 0 ? 1 / Math.max(1 + t, wt.minDamping) : Math.max(1 - t, wt.minDamping));
function eu(t, e) {
  if (!(t > 1)) return 1;
  let o = Math.sqrt(t * t - 1),
    r = t - o,
    n = t + o,
    i = 2 * o * Math.exp(-e) * (1 + e);
  return (
    ou(
      (s) => n * Math.exp(-r * s) - r * Math.exp(-n * s) - i,
      (s) => Math.exp(-n * s) - Math.exp(-r * s),
      e
    ) / e
  );
}
function wa(t, e) {
  return t * Math.sqrt(1 - e * e);
}
var ad = 12;
function ou(t, e, o) {
  let r = o;
  for (let n = 1; n < ad; n++) r = r - t(r) / e(r);
  return r;
}
var va = 0.001;
function cd({ duration: t = wt.duration, bounce: e = wt.bounce }) {
  let o, r;
  kt(t <= X(wt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let n = tu(e);
  ((t = et(wt.minDuration, wt.maxDuration, pt(t))),
    n < 1
      ? ((o = (l) => {
          let u = l * n,
            f = u * t,
            m = wa(l, n),
            p = Math.exp(-f);
          return va - (u / m) * p;
        }),
        (r = (l) => {
          let f = l * n * t,
            m = n * n * l * l * t,
            p = Math.exp(-f),
            d = wa(l * l, n);
          return ((-o(l) + va > 0 ? -1 : 1) * -m * p) / d;
        }))
      : ((o = (l) => {
          let u = Math.exp(-l * t),
            f = l * t + 1;
          return -va + u * f;
        }),
        (r = (l) => {
          let u = Math.exp(-l * t),
            f = -l * (t * t);
          return u * f;
        })));
  let i = 5 / t,
    s = ou(o, r, i),
    a = s * eu(n, s * t),
    c = a * a;
  return { stiffness: c, damping: n * 2 * Math.sqrt(c), duration: X(t) };
}
var Ta = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;
function Sa(t, e) {
  if (Ta(t, e)) return t;
}
function ld(t) {
  let e = Sa(t.stiffness),
    o = Sa(t.damping, !0),
    r = Sa(t.mass),
    n = {
      ...t,
      stiffness: e ?? wt.stiffness,
      damping: o ?? wt.damping,
      mass: r ?? wt.mass,
      isResolvedFromDuration: !1,
      isTimeDefined: (e ?? o ?? r) === void 0 && (t.duration !== void 0 || t.bounce !== void 0),
    };
  if (n.isTimeDefined) {
    if (t.visualDuration) {
      let i = tu(t.bounce || 0),
        s = ((2 * Math.PI) / (t.visualDuration * 1.2)) * eu(i, (2 * Math.PI) / 1.2);
      ((n.stiffness = s * s), (n.damping = 2 * i * Math.sqrt(n.stiffness)));
    } else (Object.assign(n, cd(n)), (n.isResolvedFromDuration = !0));
    (!Ta(n.stiffness) || !Ta(n.damping, !0)) &&
      ((n.stiffness = wt.stiffness), (n.damping = wt.damping));
  }
  return n;
}
function ee(t = wt.visualDuration, e = wt.bounce) {
  let o = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t,
    r = o.keyframes[0],
    n = o.keyframes[o.keyframes.length - 1],
    i = { done: !1, value: r },
    {
      stiffness: s,
      damping: a,
      mass: c,
      duration: l,
      isResolvedFromDuration: u,
      isTimeDefined: f,
    } = ld({ ...o }),
    m = (y) => (f ? 0 : -pt(y)),
    p = a / (2 * Math.sqrt(s * c)),
    d = pt(Math.sqrt(s / c)),
    g = p * d,
    h = { target: n, delta: n - r, velocity: m(o.velocity || 0) || 0, restSpeed: 0, restDelta: 0 },
    v = () => {
      let y = Math.abs(h.delta) < 5;
      ((h.restSpeed = o.restSpeed || (y ? wt.restSpeed.granular : wt.restSpeed.default)),
        (h.restDelta = o.restDelta || (y ? wt.restDelta.granular : wt.restDelta.default)));
    };
  v();
  let T, x, w;
  if (p < 1) {
    let y = wa(d, p),
      S = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    w = () => {
      ((S.A = (h.velocity + g * h.delta) / y),
        (S.sinC = g * S.A + h.delta * y),
        (S.cosC = g * h.delta - S.A * y));
    };
    let F = (U) => {
      U !== S.t &&
        ((S.t = U),
        (S.env = Math.exp(-g * U)),
        (S.sin = Math.sin(y * U)),
        (S.cos = Math.cos(y * U)));
    };
    ((T = (U) => (F(U), h.target - S.env * (S.A * S.sin + h.delta * S.cos))),
      (x = (U) => (F(U), S.env * (S.sinC * S.sin + S.cosC * S.cos))));
  } else if (p === 1) {
    T = (S) => h.target - Math.exp(-d * S) * (h.delta + (h.velocity + d * h.delta) * S);
    let y = { C: 0 };
    ((w = () => {
      y.C = h.velocity + d * h.delta;
    }),
      (x = (S) => Math.exp(-d * S) * (d * y.C * S - h.velocity)));
  } else {
    let y = d * Math.sqrt(p * p - 1),
      S = g - y,
      F = g + y,
      U = f ? 1 / 0 : 300 / y,
      b = (A, M) => Math.exp(M > U ? -A * U - g * (M - U) : -A * M),
      V = { S: 0, F: 0 };
    ((w = () => {
      let A = (h.velocity + g * h.delta) / y;
      ((V.S = (h.delta + A) / 2), (V.F = (h.delta - A) / 2));
    }),
      (T = (A) => h.target - V.S * b(S, A) - V.F * b(F, A)),
      (x = (A) => S * V.S * b(S, A) + F * V.F * b(F, A)));
  }
  w();
  let P = (u && l) || null,
    N = {
      calculatedDuration: P,
      retarget: (y, S) => {
        ((h.target = y[y.length - 1]),
          (h.delta = h.target - y[0]),
          (h.velocity = m(S)),
          (o.restSpeed && o.restDelta) || v(),
          (N.calculatedDuration = P),
          (i.done = !1),
          w());
      },
      velocity: (y) => X(x(y)),
      next: (y) => {
        let S = T(y);
        if (u) i.done = y >= l;
        else {
          let F = X(x(y));
          i.done = Math.abs(F) <= h.restSpeed && Math.abs(h.target - S) <= h.restDelta;
        }
        return ((i.value = i.done ? h.target : S), i);
      },
      toString: () => {
        let y = Math.min(yo(N), 2e4),
          S = rn((F) => N.next(y * F).value, y, 30);
        return y + "ms " + S;
      },
      toTransition: () => {},
    };
  return N;
}
ee.applyToOptions = (t) => {
  let e = sn(t, 100, ee);
  return ((t.ease = e.ease), (t.duration = X(e.duration)), (t.type = "keyframes"), t);
};
function xo({
  keyframes: t,
  velocity: e = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: n = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let f = t[0],
    m = { done: !1, value: f },
    p = (y) => y < a || y > c,
    d = (y) => (a === void 0 ? c : c === void 0 || Math.abs(a - y) < Math.abs(c - y) ? a : c),
    g = o * e,
    h = f + g,
    v = s === void 0 ? h : s(h);
  v !== h && (g = v - f);
  let T = (y) => -g * Math.exp(-y / r),
    x = (y) => {
      let S = T(y);
      ((m.done = Math.abs(S) <= l), (m.value = m.done ? v : v + S));
    },
    w,
    P,
    N = (y) => {
      p(m.value) &&
        ((w = y),
        (P = ee({
          keyframes: [m.value, d(m.value)],
          velocity: (-T(y) / r) * 1e3,
          damping: n,
          stiffness: i,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (y) => {
        let S = !1;
        return (
          !P && w === void 0 && ((S = !0), x(y), N(y)),
          w !== void 0 && y >= w ? P.next(y - w) : (!S && x(y), m)
        );
      },
    }
  );
}
function ud(t, e, o) {
  let r = [],
    n = o || at.mix || ho,
    i = t.length - 1;
  for (let s = 0; s < i; s++) {
    let a = n(t[s], t[s + 1]);
    if (e) {
      let c = Array.isArray(e) ? e[s] || Q : e;
      a = Jt(c, a);
    }
    r.push(a);
  }
  return r;
}
function an(t, e, { clamp: o = !0, ease: r, mixer: n } = {}) {
  let i = t.length;
  if (
    (J(i === e.length, "Both input and output ranges must be the same length", "range-length"),
    i === 1)
  )
    return () => e[0];
  if (i === 2 && e[0] === e[1]) return () => e[1];
  let s = t[0] === t[1];
  t[0] > t[i - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  let a = ud(e, r, n),
    c = a.length,
    l = (u) => {
      if (s && u < t[0]) return e[0];
      let f = 0;
      if (c > 1) for (; f < t.length - 2 && !(u < t[f + 1]); f++);
      let m = gt(t[f], t[f + 1], u);
      return a[f](m);
    };
  return o ? (u) => l(et(t[0], t[i - 1], u)) : l;
}
function cn(t, e) {
  let o = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    let n = gt(0, e, r);
    t.push(K(o, 1, n));
  }
}
function vo(t) {
  let e = [0];
  return (cn(e, t.length - 1), e);
}
function Va(t, e) {
  return t.map((o) => o * e);
}
function ru(t, e) {
  return t.map(() => e || qo).splice(0, t.length - 1);
}
function Dt({ duration: t = 300, keyframes: e, times: o, ease: r = "easeInOut" }) {
  let n = qr(r) ? r.map(Zo) : Zo(r) || qo,
    i = { done: !1, value: e[0] };
  if (e.length === 2 && !Array.isArray(n) && (!o || o.length !== 2 || (o[0] === 0 && o[1] === 1))) {
    let [c, l] = e,
      u = c === l ? void 0 : (at.mix || ho)(c, l);
    return {
      calculatedDuration: t,
      next: (f) => ((i.value = u ? u(n(t > 0 ? et(0, 1, f / t) : 1)) : l), (i.done = f >= t), i),
    };
  }
  let s = Va(o && o.length === e.length ? o : vo(e), t),
    a = an(s, e, { ease: Array.isArray(n) ? n : ru(e, n) });
  return { calculatedDuration: t, next: (c) => ((i.value = a(c)), (i.done = c >= t), i) };
}
var fd = 5;
function md(t, e, o) {
  let r = Math.max(e - fd, 0);
  return co(o - t(r), e - r);
}
function Mi(t, e, o = 0) {
  return e <= 0 ? o : t.velocity ? t.velocity(e) : md((r) => t.next(r).value, e, t.next(e).value);
}
var pd = (t) => t !== null;
function me(t, { repeat: e, repeatType: o = "loop" }, r, n = 1) {
  let i = t.filter(pd),
    a = n < 0 || (e && o !== "loop" && e % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var dd = { decay: xo, inertia: xo, tween: Dt, keyframes: Dt, spring: ee };
function or(t) {
  typeof t.type == "string" && (t.type = dd[t.type]);
}
var hd = 40,
  rr = (t, e) => (e - t > hd && !at.useManualTiming ? e : t);
function nu(t, e) {
  return {
    kind: t,
    animation: e,
    timestamp: Y.now(),
    frameTimestamp: H.timestamp,
    frameIsProcessing: H.isProcessing,
  };
}
function nr(t, e, o) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({ ...nu("animation-start", t), options: o ? { ...e, ...o } : e });
    } catch {}
}
function iu(t, e) {
  let o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({ ...nu("layout-animation-start", t), node: e });
    } catch {}
}
var pe = class {
  constructor() {
    this.isResolved = !1;
  }
  get finished() {
    return (
      this._finished ||
        (this._finished = this.isResolved
          ? Promise.resolve()
          : new Promise((e) => {
              this._resolve = e;
            })),
      this._finished
    );
  }
  updateFinished() {
    ((this._finished = this._resolve = void 0), (this.isResolved = !1));
  }
  notifyFinished() {
    ((this.isResolved = !0), this._resolve?.());
  }
  then(e, o) {
    return this.finished.then(e, o);
  }
};
var gd = (t) => t / 100,
  ln = (t) => Math.round(t * 1e4) / 1e4,
  Bt = class extends pe {
    constructor(e) {
      (super(),
        (this.state = "idle"),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: o } = this.options;
          (o && o.updatedAt !== Y.now() && this.tick(Y.now()),
            (this.isStopped = !0),
            this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause(),
        nr(this, this.options));
    }
    initAnimation() {
      let { options: e } = this;
      or(e);
      let { type: o = Dt, repeat: r = 0, repeatDelay: n = 0, repeatType: i, velocity: s = 0 } = e,
        { keyframes: a } = e,
        c = o || Dt;
      c !== Dt &&
        typeof a[0] != "number" &&
        ((this.mixKeyframes = Jt(gd, ho(a[0], a[1]))), (a = [0, 100]));
      let l = c(a === e.keyframes ? e : { ...e, keyframes: a });
      (i === "mirror" &&
        (this.mirroredGenerator = c({ ...e, keyframes: [...a].reverse(), velocity: -s })),
        l.calculatedDuration === null && (l.calculatedDuration = yo(l)));
      let { calculatedDuration: u } = l;
      ((this.calculatedDuration = u),
        (this.resolvedDuration = u + n),
        (this.totalDuration = this.resolvedDuration * (r + 1) - n),
        (this.generator = l));
    }
    updateTime(e) {
      let o = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = o);
    }
    tick(e, o = !1) {
      let { generator: r, totalDuration: n, calculatedDuration: i } = this;
      if (this.startTime === null) return r.next(0);
      let { delay: s = 0, keyframes: a, type: c, onUpdate: l, finalKeyframe: u } = this.options;
      (this.startTime === this.pendingStartTime && (this.startTime = rr(this.startTime, e)),
        (this.pendingStartTime = void 0),
        this.speed > 0
          ? (this.startTime = Math.min(this.startTime, e))
          : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)),
        o ? (this.currentTime = e) : this.updateTime(e));
      let f = this.currentTime - s * (this.playbackSpeed >= 0 ? 1 : -1),
        m = this.playbackSpeed >= 0 ? f < 0 : f > n;
      ((this.currentTime = Math.max(f, 0)),
        this.state === "finished" && this.holdTime === null && (this.currentTime = n));
      let p = this.generate(this.currentTime, m),
        { done: d } = p;
      !m &&
        i !== null &&
        (d = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
      let g =
        this.holdTime === null && (this.state === "finished" || (this.state === "running" && d));
      return (
        g && c !== xo && (p.value = me(a, this.options, u, this.speed)),
        l && l(p.value),
        g && this.finish(),
        p
      );
    }
    at(e) {
      return this.holdTime ?? ln((e - this.startTime) * this.playbackSpeed);
    }
    sampleAt(e, o) {
      let { options: r, totalDuration: n } = this,
        i = this.at(e) - (r.delay || 0);
      return i >= n && r.type !== xo
        ? me(r.keyframes, r, o ? void 0 : r.finalKeyframe)
        : this.generate(Math.max(i, 0), i < 0).value;
    }
    generate(e, o) {
      let {
          generator: r,
          totalDuration: n,
          mixKeyframes: i,
          mirroredGenerator: s,
          resolvedDuration: a,
        } = this,
        { keyframes: c, repeat: l, repeatType: u, repeatDelay: f } = this.options,
        m = e,
        p = r;
      if (l) {
        let g = Math.min(e, n) / a,
          h = Math.floor(g),
          v = g % 1;
        (!v && g >= 1 && (v = 1),
          v === 1 && h--,
          (h = Math.min(h, l + 1)),
          h % 2 && (u === "reverse" ? ((v = 1 - v), f && (v -= f / a)) : u === "mirror" && (p = s)),
          (m = et(0, 1, v) * a));
      }
      let d;
      return (
        o ? ((this.delayState.value = c[0]), (d = this.delayState)) : (d = p.next(m)),
        i && !o && (d.value = i(d.value)),
        d
      );
    }
    then(e, o) {
      return this.finished.then(e, o);
    }
    get duration() {
      return pt(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + pt(e);
    }
    get time() {
      return pt(this.currentTime);
    }
    set time(e) {
      ((e = X(e)),
        (this.currentTime = e),
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = e), this.tick(e)));
    }
    getGeneratorVelocity() {
      return Mi(this.generator, this.currentTime, this.options.velocity);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let o = this.playbackSpeed !== e;
      (o && this.driver && this.updateTime(Y.now()),
        (this.playbackSpeed = e),
        o && this.driver && (this.time = pt(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Pi, startTime: o } = this.options;
      (this.driver || (this.driver = e((n) => this.tick(n))), this.options.onPlay?.());
      let r = this.driver.now();
      (this.state === "finished"
        ? (this.updateFinished(), (this.startTime = r))
        : this.holdTime !== null
          ? (this.startTime = r - this.holdTime / (this.playbackSpeed || 1))
          : this.startTime || (this.startTime = o ?? (this.pendingStartTime = r)),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      ((this.state = "paused"), this.updateTime(Y.now()), (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = "finished"),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function yd(t) {
  return new Bt(t);
}
var xd = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vd(t) {
  let [e, o] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  let [r] = o.match(Qo) || [];
  if (!r) return t;
  let n = o.replace(r, ""),
    i = xd.has(e) ? 1 : 0;
  return (r !== o && (i *= 100), e + "(" + i + n + ")");
}
var Sd = /\b([a-z-]*)\(.*?\)/gu,
  un = {
    ...ct,
    getAnimatableNone: (t) => {
      let e = t.match(Sd);
      return e ? e.map(vd).join(" ") : t;
    },
  };
var fn = {
  ...ct,
  getAnimatableNone: (t) => {
    let e = ct.parse(t);
    return ct.createTransformer(t)(
      e.map((r) => (typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r))
    );
  },
};
var ba = { ...Qt, transform: Math.round };
var ir = {
  rotate: zt,
  pathRotation: zt,
  rotateX: zt,
  rotateY: zt,
  rotateZ: zt,
  scale: Jo,
  scaleX: Jo,
  scaleY: Jo,
  scaleZ: Jo,
  skew: zt,
  skewX: zt,
  skewY: zt,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: fe,
  originX: Vi,
  originY: Vi,
  originZ: I,
};
var yt = {
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  inset: I,
  insetBlock: I,
  insetBlockStart: I,
  insetBlockEnd: I,
  insetInline: I,
  insetInlineStart: I,
  insetInlineEnd: I,
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  paddingBlock: I,
  paddingBlockStart: I,
  paddingBlockEnd: I,
  paddingInline: I,
  paddingInlineStart: I,
  paddingInlineEnd: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  marginBlock: I,
  marginBlockStart: I,
  marginBlockEnd: I,
  marginInline: I,
  marginInlineStart: I,
  marginInlineEnd: I,
  fontSize: I,
  backgroundPositionX: I,
  backgroundPositionY: I,
  ...ir,
  zIndex: ba,
  fillOpacity: fe,
  strokeOpacity: fe,
  numOctaves: ba,
};
var su = {
    ...yt,
    color: it,
    backgroundColor: it,
    outlineColor: it,
    fill: it,
    stroke: it,
    borderColor: it,
    borderTopColor: it,
    borderRightColor: it,
    borderBottomColor: it,
    borderLeftColor: it,
    filter: un,
    WebkitFilter: un,
    mask: fn,
    WebkitMask: fn,
  },
  mn = (t) => su[t];
var wd = new Set([un, fn]);
function So(t, e) {
  let o = mn(t);
  return (wd.has(o) || (o = ct), o.getAnimatableNone ? o.getAnimatableNone(e) : void 0);
}
function pn(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
var wo = (t) => (t * 180) / Math.PI,
  Aa = (t) => {
    let e = wo(Math.atan2(t[1], t[0]));
    return Pa(e);
  },
  Td = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scaleZ: () => 1,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Aa,
    rotateZ: Aa,
    skewX: (t) => wo(Math.atan(t[1])),
    skewY: (t) => wo(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Pa = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  au = Aa,
  cu = (t) => Math.hypot(t[0], t[1]),
  lu = (t) => Math.hypot(t[4], t[5]),
  Vd = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: cu,
    scaleY: lu,
    scaleZ: (t) => Math.hypot(t[8], t[9], t[10]),
    scale: (t) => (cu(t) + lu(t)) / 2,
    rotateX: (t) => Pa(wo(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Pa(wo(Math.atan2(-t[2], t[0]))),
    rotateZ: au,
    rotate: au,
    skewX: (t) => wo(Math.atan(t[4])),
    skewY: (t) => wo(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Ue(t) {
  return t.includes("scale") ? 1 : 0;
}
function dn(t, e) {
  if (!t || t === "none") return Ue(e);
  let o = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    n;
  if (o) ((r = Vd), (n = o));
  else {
    let a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Td), (n = a));
  }
  if (!n) return Ue(e);
  let i = r[e],
    s = n[1].split(",").map(bd);
  return typeof i == "function" ? i(s) : s[i];
}
var hn = (t, e) => {
  let { transform: o = "none" } = getComputedStyle(t);
  return dn(o, e);
};
function bd(t) {
  return parseFloat(t.trim());
}
var Tt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  st = new Set([...Tt, "pathRotation"]);
var Ma = (t) => t === Qt || t === I,
  Ad = new Set(["x", "y", "z"]),
  Pd = Tt.filter((t) => !Ad.has(t));
function fu(t) {
  let e = [];
  return (
    Pd.forEach((o) => {
      let r = t.getValue(o);
      if (r !== void 0) {
        let n = r.get(),
          i = o.startsWith("scale") ? 1 : 0;
        if (n === i) return;
        (e.push([o, n]), r.set(i));
      }
    }),
    e
  );
}
var mu = new Set(["bottom", "right"]);
function uu(t, e, o, r, n, i) {
  let s = parseFloat(t);
  if (!isNaN(s)) return s;
  let { min: a, max: c } = e()[o],
    l = c - a;
  return i === "border-box" ? l : l - parseFloat(r) - parseFloat(n);
}
var ze = {
  width: ({ width: t, paddingLeft: e = "0", paddingRight: o = "0", boxSizing: r }, n) =>
    uu(t, n, "x", e, o, r),
  height: ({ height: t, paddingTop: e = "0", paddingBottom: o = "0", boxSizing: r }, n) =>
    uu(t, n, "y", e, o, r),
  top: ({ top: t }) => parseFloat(t),
  left: ({ left: t }) => parseFloat(t),
  bottom: ({ top: t }, e) => {
    let { y: o } = e();
    return parseFloat(t) + (o.max - o.min);
  },
  right: ({ left: t }, e) => {
    let { x: o } = e();
    return parseFloat(t) + (o.max - o.min);
  },
  x: ({ transform: t }) => dn(t, "x"),
  y: ({ transform: t }) => dn(t, "y"),
};
ze.translateX = ze.x;
ze.translateY = ze.y;
var To = new Set(),
  Ca = !1,
  Ea = !1,
  Da = !1;
function pu() {
  if (Ea) {
    let t = [],
      e = new Set(),
      o = new Set();
    To.forEach((n) => {
      n.needsMeasurement && (t.push(n), e.add(n.element), mu.has(n.name) && o.add(n.element));
    });
    let r = new Map();
    (o.forEach((n) => {
      let i = fu(n);
      i.length && (r.set(n, i), n.render());
    }),
      t.forEach((n) => n.measureInitialState()),
      e.forEach((n) => {
        n.render();
        let i = r.get(n);
        i &&
          i.forEach(([s, a]) => {
            n.getValue(s)?.set(a);
          });
      }),
      t.forEach((n) => n.measureEndState()),
      t.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      }));
  }
  ((Ea = !1), (Ca = !1), To.forEach((t) => t.complete(Da)), To.clear());
}
function du() {
  To.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Ea = !0));
  });
}
function Ra() {
  ((Da = !0), du(), pu(), (Da = !1));
}
function Md(t, e, o) {
  if (typeof t == "string") {
    if (no(t) || so(t)) return parseFloat(t);
    if (!ct.test(t) && ct.test(o)) return So(e, o);
  }
  return t ?? void 0;
}
var Ee = class {
  constructor(e, o, r, n, i, s = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = n),
      (this.element = i),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (To.add(this), Ca || ((Ca = !0), D.read(du), D.resolveKeyframes(pu)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: o, element: r, motionValue: n } = this;
    if (e[0] === null) {
      let i = n?.get(),
        s = e[e.length - 1];
      if (i !== void 0) e[0] = i;
      else if (r && o) {
        let a = Md(r.readValue(o, s), o, s);
        a !== void 0 && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = s), n && i === void 0 && n.set(e[0]));
    }
    pn(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      To.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (To.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
};
var de = (t) => t.startsWith("--");
function gn(t, e, o) {
  de(e) ? t.style.setProperty(e, o) : (t.style[e] = o);
}
var Ia = {};
function yn(t, e) {
  let o = ao(t);
  return () => Ia[e] ?? o();
}
var Vo = yn(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  xn = yn(() => window.ViewTimeline !== void 0, "viewTimeline");
var he = yn(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
var ge = ([t, e, o, r]) => `cubic-bezier(${t}, ${e}, ${o}, ${r})`;
var Ke = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ge([0, 0.65, 0.55, 1]),
  circOut: ge([0.55, 0, 1, 0.45]),
  backIn: ge([0.31, 0.01, 0.66, -0.59]),
  backOut: ge([0.33, 1.53, 0.69, 0.99]),
};
function bo(t, e) {
  if (t)
    return typeof t == "function"
      ? he()
        ? rn(t, e)
        : "ease-out"
      : Pe(t)
        ? ge(t)
        : Array.isArray(t)
          ? t.map((o) => bo(o, e) || Ke.easeOut)
          : Ke[t];
}
function sr(
  t,
  e,
  o,
  {
    delay: r = 0,
    duration: n = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: c,
  } = {},
  l = void 0
) {
  let u = { [e]: o };
  c && (u.offset = c);
  let f = bo(a, n);
  Array.isArray(f) && (u.easing = f);
  let m = {
    delay: r,
    duration: n,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return (l && (m.pseudoElement = l), t.animate(u, m));
}
function Ao(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function ar({ type: t, ...e }) {
  return Ao(t) && he()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
var Rt = class extends pe {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    let {
      element: o,
      name: r,
      keyframes: n,
      pseudoElement: i,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: c,
    } = e;
    ((this.isPseudoElement = !!i),
      (this.allowFlatten = s),
      (this.options = e),
      J(
        typeof e.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      ));
    let l = ar(e);
    ((this.animation = sr(o, r, n, l, i)),
      l.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          let u = me(n, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(u),
            gn(o, r, u),
            this.animation.cancel());
        }
        (c?.(), this.notifyFinished());
      }),
      nr(this, e, l));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    let { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    let e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    let e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return pt(Number(e));
  }
  get iterationDuration() {
    let { delay: e = 0 } = this.options || {};
    return this.duration + pt(e);
  }
  get time() {
    return pt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    let o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = X(e)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, onAttach: o, observe: r }) {
    return (
      this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && Vo() ? ((this.animation.timeline = e), o?.(this.animation), Q) : r(this)
    );
  }
};
var hu = { anticipate: Hr, backInOut: $r, circInOut: Xr };
function Cd(t) {
  return t in hu;
}
function gu(t) {
  typeof t.ease == "string" && Cd(t.ease) && (t.ease = hu[t.ease]);
}
var cr = 10,
  vn = class extends Rt {
    constructor(e) {
      (gu(e),
        or(e),
        super(e),
        e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
        (this.options = e));
    }
    elapsed() {
      return this.state === "running" ? (Y.now() - this.startTime) * this.speed : this.time * 1e3;
    }
    sample(e) {
      if (!this.sampler) {
        let {
          motionValue: o,
          onUpdate: r,
          onComplete: n,
          onPlay: i,
          onStop: s,
          element: a,
          ...c
        } = this.options;
        ((this.sampler = new Bt({ ...c, autoplay: !1 })), this.sampler.stop());
      }
      return this.sampler.sample(Math.max(0, e)).value;
    }
    liveValue() {
      let { state: e } = this;
      if (e === "running" || e === "paused") return this.sample(this.elapsed());
    }
    updateMotionValue(e) {
      let { motionValue: o, element: r, name: n } = this.options;
      if (!o) return;
      if (e !== void 0) {
        o.set(e);
        return;
      }
      let { speed: i } = this,
        s = this.elapsed(),
        a = this.state === "running" && i ? et(0, cr, s) : 0,
        c = this.sample(s);
      (r && n && gn(r, n, c),
        o.setWithVelocity(this.sample(s - a * Math.sign(i)), c, a / Math.abs(i || 1)));
    }
  };
var La = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" && (ct.test(t) || t === "0") && !t.startsWith("url("))
      );
function Ed(t) {
  let e = t[0];
  if (t.length === 1) return !0;
  for (let o = 0; o < t.length; o++) if (t[o] !== e) return !0;
}
function yu(t, e, o, r) {
  let n = t[0];
  if (n === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  let i = t[t.length - 1],
    s = La(n, e),
    a = La(i, e);
  return !s || !a
    ? (s !== a &&
        kt(
          !1,
          `You are trying to animate ${e} from "${n}" to "${i}". "${s ? i : n}" is not an animatable value.`,
          "value-not-animatable"
        ),
      !1)
    : Ed(t) || ((o === "spring" || Ao(o)) && r);
}
function lr(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
var $e = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
var Dd = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function xu(t) {
  for (let e = 0; e < t.length; e++) if (typeof t[e] == "string" && Dd.test(t[e])) return !0;
  return !1;
}
var vu = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  Ci = ao(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Oa(t) {
  let {
    motionValue: e,
    name: o,
    repeatDelay: r,
    repeatType: n,
    damping: i,
    type: s,
    keyframes: a,
  } = t;
  if (!o || !($e.has(o) || vu.has(o))) return !1;
  let c = e?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return (
    Ci() &&
    ($e.has(o) || (vu.has(o) && xu(a))) &&
    (o !== "transform" || !u) &&
    !l &&
    !r &&
    n !== "mirror" &&
    i !== 0 &&
    s !== "inertia"
  );
}
var Vt = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
var Sn = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  Rd = Tt.length;
function ur(t, e, o) {
  let r = "",
    n = !0;
  for (let s = 0; s < Rd; s++) {
    let a = Tt[s],
      c = t[a];
    if (c === void 0) continue;
    let l = !0;
    if (typeof c == "number") l = c === (a.startsWith("scale") ? 1 : 0);
    else {
      let u = parseFloat(c);
      l = a.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || o) {
      let u = Vt(c, yt[a]);
      if (!l) {
        n = !1;
        let f = Sn[a] || a;
        r += `${f}(${u}) `;
      }
      o && (e[a] = u);
    }
  }
  let i = t.pathRotation;
  return (
    i && ((n = !1), (r += `rotate(${Vt(i, yt.pathRotation)}) `)),
    (r = r.trim()),
    o ? (r = o(e, n ? "" : r)) : n && (r = "none"),
    r
  );
}
var oe = new WeakMap();
var Id = 200,
  ka = 0.001,
  Ld = 0.1,
  Od = 0.001,
  kd = 100,
  Bd = (t) => /^(linear|ease(In|Out|InOut))$/.test(t),
  Ba = (t, e) => t - e,
  Su = (t, e, o) => {
    let r = [];
    for (let n = 0; n <= o; n++) r.push(K(t, e, n / o));
    return r;
  },
  Ei = (t) => t.motionValue.owner,
  Fa = (t) => oe.get(t),
  fr = (t, e) => (t.latestValues ? t.latestValues[e] : t.getValue(e)?.get()),
  wu = ({ name: t, motionValue: e }) =>
    t && Tt.includes(t) && e?.owner?.current instanceof HTMLElement && Ci() && he();
function Fd(t) {
  let e = Ei(t),
    { onUpdate: o, transformTemplate: r } = e.getProps();
  return (
    !t.isHandoff &&
    !o &&
    !t.hasOnUpdate &&
    !r &&
    t.type !== "inertia" &&
    (fr(e, "transform") || "none") === "none" &&
    !fr(e, "pathRotation") &&
    !e.projection?.isProjecting()
  );
}
var Di = class extends Bt {
  constructor(e) {
    let o = Ei(e).current,
      { driver: r = Pi } = e,
      n = Fd(e);
    ((e.driver = (s) => {
      let a = r(s);
      return {
        js: a,
        now: a.now,
        start: (c = !0) => {
          let l = Fa(o);
          !l || l.isJS ? a.start(c) : l.schedule(!1, !c);
        },
        stop: () => {
          a.stop();
          let c = Fa(o);
          c?.schedule(!c.isFinishing);
        },
      };
    }),
      super(e),
      (this.canAccelerate = n));
    let { stop: i } = this;
    this.stop = () => {
      (this.isAccelerated() && this.sync(), i());
    };
  }
  get group() {
    return Fa(Ei(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  get name() {
    return this.options.name;
  }
  timing() {
    let { startTime: e, speed: o, totalDuration: r } = this,
      { delay: n = 0, repeatType: i } = this.options;
    return this.holdTime !== null
      ? [1 / 0, 0]
      : r === 1 / 0
        ? [e + n / o, (this.resolvedDuration * (i === "loop" ? 1 : 2)) / o || 1]
        : [e + (n + r) / o, 0];
  }
  isAccelerated() {
    let { group: e, state: o } = this;
    return (
      e?.tracks.has(this) && !e.isJS && this.canAccelerate && (o === "running" || o === "paused")
    );
  }
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(Y.now()) : void 0;
  }
  tween() {
    let { keyframes: e, type: o, ease: r, times: n, repeat: i, delay: s = 0 } = this.options,
      a = Pe(r) ? ge(r) : Bd(r) && Ke[r];
    if (a && !i && !n && e.length === 2 && o === Dt && this.holdTime === null) {
      let c = this.startTime + s / this.speed;
      return [c, c + this.resolvedDuration / this.speed, a];
    }
  }
  boundaries(e, o) {
    let { startTime: r, speed: n, resolvedDuration: i, options: s } = this,
      {
        delay: a = 0,
        repeat: c = 0,
        repeatDelay: l = 0,
        repeatType: u,
        times: f,
        keyframes: m,
        type: p,
      } = s,
      d = (p || Dt) === Dt ? f || vo(m) : [0, 1],
      g = r + a / n,
      h = [];
    if (this.holdTime !== null || !(i > 0)) return h;
    for (let v = Math.max(0, Math.floor(((e - g) * n) / i)); v <= c; v++) {
      let T = g + (v * i) / n;
      if (T > o) break;
      for (let x of d) {
        let w = T + ((v % 2 && u && u !== "loop" ? 1 - x : x) * (i - l)) / n;
        w > e && w < o && h.push(w);
      }
    }
    return h;
  }
  numberAt(e) {
    return parseFloat(this.sampleAt(e, !0));
  }
  sync() {
    let e = Y.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(e - cr, !0), this.sampleAt(e, !0), cr);
  }
  play() {
    this.isStopped || ((this.group || jd(Ei(this.options))).tracks.add(this), super.play());
  }
  pause() {
    (super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1)));
  }
  complete() {
    super.complete();
    let { group: e } = this;
    e && !e.isJS && this.canAccelerate && this.tick(Y.now());
  }
  get time() {
    return this.isAccelerated()
      ? pt(et(0, this.totalDuration, this.at(Y.now()) - (this.options.delay || 0)))
      : super.time;
  }
  set time(e) {
    super.time = e;
  }
  attachTimeline(e) {
    return ((this.canAccelerate = !1), this.group?.demote(!0), super.attachTimeline(e));
  }
};
function jd(t) {
  let e = t.current,
    o = new Set(),
    r = new Map(),
    n = {},
    i = [],
    s = new Map(),
    a = [],
    c = !1,
    l = !1,
    u = !1,
    f = -1 / 0,
    m = (b) => {
      for (let V of o) if (V.name === b) return !0;
    },
    p = (b, V) => {
      let A = {};
      for (let M of b === void 0 ? Tt : i) {
        let j = r.get(M),
          L = b === void 0 ? fr(t, M) : j ? j.sampleAt(V > b && !j.timing()[1] ? V : b) : n[M];
        L !== void 0 && (A[M] = L);
      }
      return A;
    },
    d = (b, V) => {
      let A = "",
        M = p(b, V);
      for (let j in M) A += (Sn[j] || j) + "(" + Vt(M[j], yt[j]) + ") ";
      return A || "none";
    },
    g = (b = p()) => {
      e.style.transform = ur(b, {});
    },
    h = (b = !0) => {
      (b && g(), a.forEach(({ animation: V }) => V.cancel()), (a = []));
    },
    v = (b, V, A = 1 / 0) => {
      let M = { animation: b, offset: V, end: A };
      ((b.startTime = Y.now() + V),
        A < 1 / 0 &&
          (b.onfinish = () => {
            ((M.isDone = !0),
              a.some((j) => j.end === 1 / 0) && (b.cancel(), (a = a.filter((j) => j !== M))),
              U.schedule(!1));
          }),
        (b.oncancel = () => a.includes(M) && U.demote()),
        a.push(M));
    },
    T = (b, V, A) => {
      let M = (L, C) => Math.abs(b(C) - b(L)),
        j = M(V, A);
      for (; A - V > 0.01;) {
        let L = (V + A) / 2;
        M(V, L) > M(L, A) ? (A = L) : (V = L);
      }
      return M(V, A) > j / 2 ? [V, A] : [];
    },
    x = (b, V, A, M) => {
      let j = Math.min(Id, Math.max(2, Math.ceil((A - V) / cr)));
      if (M.length * 4 > j) return;
      let L = Su(V, A, j).concat(M).sort(Ba),
        C = (O) => gt(V, A, O),
        E,
        R;
      for (let O of b) {
        let z = L.map((q) => O.numberAt(q)),
          [nt] = z,
          _ = z[z.length - 1] - nt,
          ut = z.map((q) => (_ ? (q - nt) / _ : q - nt));
        if (_) {
          if (!E) ((E = ut), (R = (q) => (O.numberAt(q) - nt) / _));
          else if (ut.some((q, mt) => !(Math.abs(q - E[mt]) <= ka))) return;
        } else if (ut.some((q) => !(Math.abs(q) <= ka))) return;
      }
      if (!E || E.every((O, z) => Math.abs(O - C(L[z])) <= ka)) return "linear";
      let k = [],
        G = (O, z = R(O)) => k.push(ln(z) + " " + ln(C(O) * 100) + "%");
      return (
        E.forEach((O, z) => {
          (z && Math.abs(O - E[z - 1]) > 0.2 && T(R, L[z - 1], L[z]).forEach((nt) => G(nt)),
            G(L[z], O));
        }),
        "linear(" + k + ")"
      );
    },
    w = (b, V, A, M) => {
      let j = [V],
        L = (k, G) =>
          b.every(
            (O) =>
              !(
                Math.abs(O.numberAt((k + G) / 2) - (O.numberAt(k) + O.numberAt(G)) / 2) >
                (O.name.startsWith("scale") ? Od : Ld)
              )
          ),
        C = (k, G, O) => {
          if (G - k < 1 || L(k, G)) j.push(G);
          else if (O < 4) (C(k, (k + G) / 2, O + 1), C((k + G) / 2, G, O + 1));
          else {
            for (let z of b) j.push(...T((nt) => z.numberAt(nt), k, G));
            j.push(G);
          }
        },
        E = Su(V, A, Math.ceil((A - V) / 100));
      for (let k of M) E.push(k, Math.min(k + 0.01, A));
      let R = V;
      for (let k of E.sort(Ba)) (k > R && C(R, k, 0), (R = k));
      return j.sort(Ba);
    },
    P = (b) => {
      let V;
      for (let A of b) {
        let M = A.tween();
        if (!M || V?.some((j, L) => (L < 2 ? Math.abs(M[L] - j) > 1 : M[L] !== j))) return;
        V = M;
      }
      return V;
    },
    N = (b, V, A, M = { fill: "both" }, j, L) => {
      let C = b.flatMap((O) => O.boundaries(V, A)),
        E = L || x(b, V, A, C),
        R = E ? [V, A] : w(b, V, A, C),
        k = R.map((O) => d(O, j)),
        G = { transform: k };
      return (
        E || (G.offset = R.map((O) => gt(V, A, O))),
        k.every((O) => O === k[0]) && (g(p(V, j)), (G = null)),
        e.animate(G, { ...M, duration: A - V, easing: E || "linear" })
      );
    },
    y = (b) => {
      let V = b,
        A = 0,
        M = 0,
        j = [],
        L = [],
        C = new Set();
      (r.clear(), (s = new Map()));
      for (let R of o) {
        r.set(R.name, R);
        let [k, G] = R.timing(),
          O = k === 1 / 0;
        if ((s.set(R, [R.at(b), R.speed, O]), O)) {
          R.sync();
          continue;
        }
        if (R.speed < 0) return;
        if (G) {
          if (A) {
            let z = (k - M) / G;
            if (Math.abs(G - A) > 1 || Math.abs(z - Math.round(z)) * A > 1) return;
          } else ((A = G), (M = k));
          L.push(R);
        } else C.add(k);
        (j.push(R), (V = Math.max(V, k)));
      }
      ((n = {}),
        (i = Tt.filter((R) => {
          if (r.has(R)) return !0;
          let k = (n[R] = fr(t, R));
          return k !== void 0 && parseFloat(k) !== (R.startsWith("scale") ? 1 : 0);
        })),
        h(!1));
      let E = !A && P(j);
      try {
        if (E && E[1] > b) {
          let [R, k, G] = E;
          v(N(j, R, k, void 0, void 0, G), R - b, k - R);
        } else
          V > b &&
            (v(N(j, b, V), 0, V - b),
            C.forEach((R) => R < V - 1 && v(e.animate(null, { duration: R - b }), 0, R - b)));
        if (A) {
          let R = M + Math.floor((V - M) / A) * A;
          v(
            N(L, R, R + A, { iterations: 1 / 0, iterationStart: (V - R) / A, fill: "forwards" }, V),
            V - b
          );
        }
      } catch {
        return;
      }
      return (a.length || h(), !0);
    },
    S = (b) => {
      let V,
        A = 0;
      for (let M of o) {
        let j = s.get(M);
        if (!j) return !1;
        let [L, C, E] = j,
          R = M.at(b),
          k = M.timing()[0] === 1 / 0;
        if (E) {
          if (k && R === L) continue;
          return !1;
        }
        let G = (R - L) / C,
          O = k ? 0 : M.speed / C;
        if (V === void 0) ((V = G), (A = O));
        else if (Math.abs(G - V) > 1 || O !== A) return !1;
      }
      if (V === void 0) return !0;
      if (!a.length) return !1;
      for (let { offset: M, end: j, isDone: L } of a) {
        let C = V - M;
        if (j < 1 / 0 && (L ? C < j - 1 : C < 0 || C >= j)) return !1;
      }
      for (let { animation: M, offset: j, isDone: L } of a) {
        if (L) continue;
        let C = V - j;
        A ? ((M.playbackRate = A), (M.startTime = b - C / A)) : (M.pause(), (M.currentTime = C));
      }
      return !0;
    },
    F = () => {
      let b = Y.now();
      if (
        (U.isJS ||
          ((U.isFinishing = !0),
          o.forEach((M) => {
            let [j, L] = M.timing();
            M.state === "running" &&
              M.speed > 0 &&
              !L &&
              j <= b + 1 &&
              (M.complete(), (n[M.name] = fr(t, M.name)), s.has(M) || (c = !0));
          }),
          (U.isFinishing = !1)),
        (l = !1),
        o.forEach(({ state: M }, j) => {
          (M === "idle" || M === "finished") && o.delete(j);
        }),
        !o.size)
      ) {
        (oe.delete(e), U.isJS || h());
        return;
      }
      for (let M of o) if (!M.canAccelerate) return U.demote(!0);
      U.isJS && ((U.isJS = !1), (c = !0), o.forEach((M) => M.js?.stop()));
      let V = c,
        A = u;
      if (((c = u = !1), V || !S(b))) {
        if (A) {
          if (b - f < kd) return U.demote();
          f = b;
        }
        if (!y(b)) return U.demote();
      }
    },
    U = {
      tracks: o,
      isJS: !1,
      isFinishing: !1,
      schedule(b, V) {
        (c || (c = b),
          u || (u = !!V),
          l || ((l = !0), H.isProcessing ? D.render(F, !1, !0) : queueMicrotask(F)));
      },
      check() {
        if (!U.isJS) {
          for (let b in n) if (fr(t, b) !== n[b] && !m(b)) return U.schedule(!0, !0);
        }
      },
      demote(b) {
        U.isJS ||
          (o.forEach((V) => {
            (V.isAccelerated() && V.sync(), b || (V.canAccelerate = !1));
          }),
          (U.isJS = !0),
          (s = new Map()),
          h(),
          o.forEach((V) => V.state === "running" && V.js?.start()));
      },
    };
  return (oe.set(e, U), U);
}
var wn = class extends pe {
  constructor(e) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Y.now()));
    let { keyframes: o, name: r, motionValue: n, element: i } = e,
      s = e;
    (s.autoplay ?? (s.autoplay = !0),
      s.delay ?? (s.delay = 0),
      s.type ?? (s.type = "keyframes"),
      s.repeat ?? (s.repeat = 0),
      s.repeatDelay ?? (s.repeatDelay = 0),
      s.repeatType ?? (s.repeatType = "loop"));
    let a = i?.KeyframeResolver || Ee;
    ((this.keyframeResolver = new a(
      o,
      (c, l, u) => this.onKeyframesResolved(c, l, s, !u),
      r,
      n,
      i
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, o, r, n) {
    this.keyframeResolver = void 0;
    let { name: i, type: s, velocity: a, delay: c, isHandoff: l, onUpdate: u } = r;
    this.resolvedAt = Y.now();
    let f = !0;
    yu(e, i, s, a) ||
      ((f = !1),
      (at.instantAnimations || !c) && u?.(me(e, r, o)),
      (e[0] = e[e.length - 1]),
      lr(r),
      (r.repeat = 0));
    let { onComplete: m } = r;
    ((r.finalKeyframe = o),
      (r.keyframes = e),
      (r.onComplete = () => {
        (m?.(), this.notifyFinished());
      }));
    let p = f && !l && Oa(r),
      d = !p && wu(r);
    n &&
      (p || d || this.resolvedAt !== this.createdAt) &&
      (r.startTime ?? (r.startTime = rr(this.createdAt, this.resolvedAt)));
    let g;
    if (p) {
      r.element = r.motionValue?.owner?.current;
      try {
        g = new vn(r);
      } catch {
        g = new Bt(r);
      }
    } else d ? (g = new Di(r)) : (g = new Bt(r));
    (this.pendingTimeline &&
      ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
      (this.pendingTimeline = void 0)),
      (this._animation = g));
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(e, o) {
    return this.finished.finally(e).then(() => {});
  }
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    return (this._animation || (this.keyframeResolver?.resume(), Ra()), this._animation);
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
  }
};
var re = class {
  constructor(e) {
    ((this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, o) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = o;
  }
  attachTimeline(e) {
    let o = this.animations.map((r) => r.attachTimeline(e));
    return () => {
      o.forEach((r, n) => {
        (r && r(), this.animations[n].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return Tu(this.animations, "duration");
  }
  get iterationDuration() {
    return Tu(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((o) => o[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};
function Tu(t, e) {
  let o = 0;
  for (let r = 0; r < t.length; r++) {
    let n = t[r][e];
    n !== null && n > o && (o = n);
  }
  return o;
}
var Po = class extends re {
  then(e, o) {
    return this.finished.finally(e).then(() => {});
  }
};
var mr = class extends Rt {
  constructor(e) {
    (super(),
      (this.animation = e),
      (e.onfinish = () => {
        ((this.finishedTime = this.time), this.notifyFinished());
      }),
      nr(this, {}));
  }
};
var Vu = new WeakMap(),
  ja = (t, e = "") => `${t}:${e}`;
function Na(t) {
  let e = Vu.get(t);
  return (e || ((e = new Map()), Vu.set(t, e)), e);
}
function Tn(t, e, o, r = 0, n = 1) {
  let i = Array.from(t)
      .sort((l, u) => l.sortNodePosition(u))
      .indexOf(e),
    s = t.size,
    a = (s - 1) * r;
  return typeof o == "function" ? o(i, s) : n === 1 ? i * r : a - i * r;
}
var bu = 30,
  Nd = (t) => !isNaN(parseFloat(t)),
  ye = { current: void 0 },
  Kt = class {
    constructor(e, o = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (r) => {
          let n = Y.now();
          if (
            (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev && (this.notifyChange(), this.dependents))
          )
            for (let i of this.dependents) i.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = o.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = Y.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Nd(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, o) {
      var r;
      return e === "change"
        ? this.onChangeSubscribe(o)
        : ((r = this.events)[e] || (r[e] = new le())).add(o);
    }
    onChangeSubscribe(e) {
      let { events: o } = this;
      return (
        !o.change && !this.changeSubscriber
          ? (this.changeSubscriber = e)
          : (o.change ||
              ((o.change = new le()),
              o.change.add(this.changeSubscriber),
              (this.changeSubscriber = void 0)),
            o.change.add(e)),
        () => {
          (this.changeSubscriber === e ? (this.changeSubscriber = void 0) : o.change?.remove(e),
            this.stopIfUnobserved());
        }
      );
    }
    stopIfUnobserved() {
      D.read(() => {
        !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
      });
    }
    clearListeners() {
      this.changeSubscriber = void 0;
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, o) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = o));
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
    }
    setWithVelocity(e, o, r) {
      (this.set(o),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - r));
    }
    jump(e, o = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        o && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.notifyChange();
    }
    notifyChange() {
      let { current: e, changeSubscriber: o } = this;
      o ? o(e) : this.events.change?.notify(e);
    }
    addDependent(e) {
      (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      ye.current && ye.current.push(this);
      let e = this.animation?.liveValue?.();
      return e === void 0 ? this.current : e;
    }
    getCurrent() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Y.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > bu)
        return 0;
      let o = Math.min(this.updatedAt - this.prevUpdatedAt, bu);
      return co(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((o) => {
          this.hasAnimated = !0;
          let r = !1,
            n;
          ((n = e(() => {
            ((r = !0),
              this.events.animationComplete?.notify(),
              this.animation === n && this.clearAnimation(),
              o());
          })),
            r || (this.animation = n),
            this.events.animationStart?.notify());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      this.animation = void 0;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function tt(t, e) {
  return new Kt(t, e);
}
function Mo(t, e) {
  if (t?.inherit && e) {
    let { inherit: o, ...r } = t;
    return { ...e, ...r };
  }
  return t;
}
function Mt(t, e) {
  let o = t?.[e] ?? t?.default ?? t;
  return o !== t ? Mo(o, t) : o;
}
var Gd = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Wd = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ud = { type: "keyframes", duration: 0.8 },
  zd = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ga = (t, { keyframes: e }) =>
    e.length > 2 ? Ud : st.has(t) ? (t.startsWith("scale") ? Wd(e[1]) : Gd) : zd;
var Kd = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function Wa(t) {
  for (let e in t) if (!Kd.has(e)) return !0;
  return !1;
}
var ne =
  (t, e, o, r = {}, n, i) =>
  (s) => {
    let a = Mt(r, t) || {},
      c = a.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l = l - X(c);
    let u = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -l,
      onUpdate: (m) => {
        (e.set(m), a.onUpdate && a.onUpdate(m));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: t,
      motionValue: e,
      element: i ? void 0 : n,
      hasOnUpdate: !!a.onUpdate,
    };
    (Wa(a) || Object.assign(u, Ga(t, u)),
      u.duration && (u.duration = X(u.duration)),
      u.repeatDelay && (u.repeatDelay = X(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let f = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (lr(u), u.delay === 0 && (f = !0)),
      (at.instantAnimations || at.skipAnimations || n?.shouldSkipAnimations || a.skipAnimations) &&
        ((f = !0), lr(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      f && !i && e.get() !== void 0)
    ) {
      let m = me(u.keyframes, a);
      if (m !== void 0) {
        D.update(() => {
          (u.onUpdate(m), u.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new Bt(u) : new wn(u);
  };
var $d = 20;
function Au(t, e, o, r) {
  let n = 1 - t;
  return n * n * e + 2 * n * t * o + t * t * r;
}
function Ua(t, e, o, r, n, i, s) {
  let a = 2 * (1 - t) * (o - e) + 2 * t * (r - o),
    c = 2 * (1 - t) * (i - n) + 2 * t * (s - i);
  return Math.atan2(c, a) * (180 / Math.PI);
}
function Pu(t, e, o, r, n, i) {
  let s = o - t,
    a = r - e,
    c = Math.sqrt(s * s + a * a);
  if (c > 0) {
    let l = -a / c,
      u = s / c,
      f = n * c;
    return { x: t + s * i + l * f, y: e + a * i + u * f };
  }
  return { x: t, y: e };
}
function Hd({ strength: t = 0.5, peak: e = 0.5, direction: o, rotate: r = !1 } = {}) {
  let n = r === !0 ? 1 : typeof r == "number" ? r : 0,
    i;
  return (a, c) => {
    let l = c.x - a.x,
      u = c.y - a.y,
      f;
    o === "cw"
      ? (f = -t)
      : o === "ccw"
        ? (f = t)
        : (f = (Math.abs(l) >= Math.abs(u) ? l : u) < 0 ? -t : t);
    let m = Pu(a.x, a.y, c.x, c.y, f, e);
    if (o === void 0) {
      let h = Math.abs(l) < Math.abs(u),
        v = a.x + l * e,
        T = a.y + u * e,
        x = Math.sign(h ? m.x - v : m.y - T);
      i !== void 0 && x !== 0 && x !== i
        ? ((f = -f), (m = Pu(a.x, a.y, c.x, c.y, f, e)))
        : x !== 0 && (i = x);
    }
    let p = n ? Ua(0, a.x, m.x, c.x, a.y, m.y, c.y) : 0,
      d = n ? Ua(1, a.x, m.x, c.x, a.y, m.y, c.y) : 0,
      g = n ? We(-180, 180, d - p) : 0;
    return (h) => {
      let v = { x: Au(h, a.x, m.x, c.x), y: Au(h, a.y, m.y, c.y) };
      if (n) {
        let T = Ua(h, a.x, m.x, c.x, a.y, m.y, c.y),
          x = p + g * h;
        v.rotate = We(-180, 180, T - x) * n;
      }
      return v;
    };
  };
}
function Mu(t = {}) {
  let e = Hd(t);
  return {
    interpolateProjection(r) {
      let n = r.x.translate,
        i = r.y.translate;
      if (!(Math.sqrt(n * n + i * i) < $d)) return e({ x: n, y: i }, { x: 0, y: 0 });
    },
    animateVisualElement(r, n, i, s, a) {
      if (!("x" in n || "y" in n)) return;
      let c = r.getValue("x", r.latestValues.x ?? 0),
        l = r.getValue("y", r.latestValues.y ?? 0),
        u = n.x,
        f = n.y,
        m = (Array.isArray(u) && u[0] != null ? u[0] : c?.get()) ?? 0,
        p = (Array.isArray(f) && f[0] != null ? f[0] : l?.get()) ?? 0,
        d = Array.isArray(u) ? u[u.length - 1] : (u ?? m),
        g = Array.isArray(f) ? f[f.length - 1] : (f ?? p),
        h = e({ x: m, y: p }, { x: d, y: g }),
        v = h(0).rotate !== void 0 ? r.getValue("pathRotation", 0) : void 0,
        T = { delay: s, ...Mt(i || {}, "x") };
      delete T.path;
      let x = tt(0);
      (x.start(
        ne("", x, [0, 1e3], {
          ...T,
          isSync: !0,
          velocity: 0,
          onUpdate: (w) => {
            let P = h(w / 1e3);
            (c?.set(P.x), l?.set(P.y), v && P.rotate !== void 0 && v.set(P.rotate));
          },
          onComplete: () => {
            (c?.set(d), l?.set(g), v?.set(0));
          },
          onStop: () => v?.set(0),
          onCancel: () => v?.set(0),
        })
      ),
        x.animation && a.push(x.animation),
        delete n.x,
        delete n.y);
    },
  };
}
var _d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Cu(t) {
  let e = _d.exec(t);
  if (!e) return [,];
  let [, o, r, n] = e;
  return [`--${o ?? r}`, n];
}
var Yd = 4;
function Ri(t, e, o = 1) {
  J(
    o <= Yd,
    `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth"
  );
  let [r, n] = Cu(t);
  if (!r) return;
  let i = window.getComputedStyle(e).getPropertyValue(r);
  if (i) {
    let s = i.trim();
    return no(s) ? parseFloat(s) : s;
  }
  return fo(n) ? Ri(n, e, o + 1) : n;
}
function Xd(t) {
  let e = [{}, {}];
  return (
    t?.values.forEach((o, r) => {
      ((e[0][r] = o.get()), (e[1][r] = o.getVelocity()));
    }),
    e
  );
}
function Vn(t, e, o, r) {
  let n = (i) => (typeof i == "function" ? i(o !== void 0 ? o : t.custom, ...Xd(r)) : i);
  return ((e = n(e)), typeof e == "string" && (e = t.variants && t.variants[e]), n(e));
}
function Ft(t, e, o) {
  return Vn(t.getProps(), e, o, t);
}
var Ii = (t, e) => (e === "exit" ? t.presenceContext?.custom : void 0);
var Co = new Set(["width", "height", "top", "left", "right", "bottom", ...Tt]);
var za = (t) => Array.isArray(t);
function qd(t, e, o) {
  t.hasValue(e) ? t.getValue(e).set(o) : t.addValue(e, tt(o));
}
function Zd(t) {
  return za(t) ? t[t.length - 1] || 0 : t;
}
function pr(t, e) {
  let o = Ft(t, e),
    { transitionEnd: r = {}, transition: n = {}, ...i } = o || {};
  i = { ...i, ...r };
  for (let s in i) {
    let a = Zd(i[s]);
    qd(t, s, a);
  }
}
var $ = (t) => !!(t && t.getVelocity);
function Ka(t) {
  return !!($(t) && t.add);
}
function dr(t, e) {
  let o = t.getValue("willChange");
  if (Ka(o)) return o.add(e);
  if (!o && at.WillChange) {
    let r = new at.WillChange("auto");
    (t.addValue("willChange", r), r.add(e));
  }
}
function $t(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Li = "framerAppearId",
  hr = "data-" + $t(Li);
function Eo(t) {
  return t.props[hr];
}
var Jd = typeof window < "u";
function Qd({ protectedKeys: t, needsAnimating: e }, o) {
  let r = o in t && !e[o];
  return ((e[o] = !1), r);
}
function bn(t, e, { delay: o = 0, transitionOverride: r, type: n } = {}) {
  let { transition: i, transitionEnd: s, ...a } = e,
    c = t.getDefaultTransition();
  i = i ? Mo(i, c) : c;
  let l = i?.reduceMotion,
    u = i?.skipAnimations;
  r && (i = r);
  let f = [],
    m = n && t.animationState?.getState()[n],
    p = i?.path;
  p && p.animateVisualElement(t, a, i, o, f);
  for (let d in a) {
    let g = t.getValue(d, t.latestValues[d] ?? null),
      h = a[d];
    if (h === void 0 || (m && Qd(m, d))) continue;
    let v = { delay: o, ...Mt(i || {}, d) };
    u && (v.skipAnimations = !0);
    let T = g.get();
    if (T !== void 0 && !g.isAnimating() && !Array.isArray(h) && h === T && !v.velocity) {
      D.update(() => g.set(h));
      continue;
    }
    let x = !1;
    if (Jd && window.MotionHandoffAnimation) {
      let N = Eo(t);
      if (N) {
        let y = window.MotionHandoffAnimation(N, d, D);
        y !== null && ((v.startTime = y), (x = !0));
      }
    }
    dr(t, d);
    let w = l ?? t.shouldReduceMotion;
    g.start(ne(d, g, h, w && Co.has(d) ? { type: !1 } : v, t, x));
    let P = g.animation;
    P && f.push(P);
  }
  if (s) {
    let d = () =>
      D.update(() => {
        s && pr(t, s);
      });
    f.length ? Promise.all(f).then(d) : d();
  }
  return f;
}
function An(t, e, o = {}) {
  let r = Ft(t, e, Ii(t, o.type)),
    n = o.transitionOverride || (r?.transition ?? (t.getDefaultTransition() || {})),
    i = () => Promise.all(r ? bn(t, r, o) : []),
    s = (c = 0) => {
      let { variantChildren: l } = t,
        { delayChildren: u = 0, staggerChildren: f, staggerDirection: m } = n,
        p = [];
      return (
        l?.forEach((d) => {
          (d.notify("AnimationStart", e),
            p.push(
              An(d, e, {
                ...o,
                delay: c + (typeof u == "function" ? 0 : u) + Tn(l, d, u, f, m),
              }).then(() => d.notify("AnimationComplete", e))
            ));
        }),
        Promise.all(p)
      );
    },
    { when: a } = n;
  return a
    ? a === "beforeChildren"
      ? i().then(() => s())
      : s().then(i)
    : Promise.all([i(), s(o.delay)]);
}
function He(t, e, o = {}) {
  return (
    t.notify("AnimationStart", e),
    (Array.isArray(e)
      ? Promise.all(e.map((n) => An(t, n, o)))
      : typeof e == "string"
        ? An(t, e, o)
        : Promise.all(bn(t, Ft(t, e, o.custom), o))
    ).then(() => {
      t.notify("AnimationComplete", e);
    })
  );
}
var Eu = { test: (t) => t === "auto", parse: (t) => t };
var Pn = (t) => (e) => e.test(t);
var Oi = [Qt, I, Pt, zt, pa, ma, Eu],
  ki = (t) => Oi.find(Pn(t));
function Du(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || so(t) : !0;
}
var th = new Set(["auto", "none", "0"]);
function Ru(t, e, o) {
  let r = 0,
    n;
  for (; r < t.length && !n;) {
    let i = t[r];
    (typeof i == "string" && !th.has(i) && da(i) && (n = t[r]), r++);
  }
  if (n && o) for (let i of e) t[i] !== n && (t[i] = So(o, n));
}
var Do = class extends Ee {
  constructor(e, o, r, n, i) {
    super(e, o, r, n, i, !0);
  }
  scheduleResolve() {
    if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
    super.scheduleResolve();
  }
  canReadNow() {
    let { unresolvedKeyframes: e, element: o, motionValue: r } = this,
      n = e[0] ?? r?.get();
    if (!o?.current || n === void 0) return !1;
    for (let i = 0; i < e.length; i++) if (Jr(i ? e[i] : n)) return !1;
    return !0;
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let f = e[u];
      if (typeof f == "string" && ((f = f.trim()), fo(f))) {
        let m = Ri(f, o.current);
        (m !== void 0 && (e[u] = m), u === e.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !Co.has(r) || e.length !== 2)) return;
    let [n, i] = e;
    if (typeof n == "number" && typeof i == "number") return;
    let s = ki(n),
      a = ki(i),
      c = Jr(n),
      l = Jr(i);
    if (c !== l && ze[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Ma(s) && Ma(a))
        for (let u = 0; u < e.length; u++) {
          let f = e[u];
          typeof f == "string" && (e[u] = parseFloat(f));
        }
      else ze[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: o } = this,
      r = [];
    for (let n = 0; n < e.length; n++) (e[n] === null || Du(e[n])) && r.push(n);
    r.length && Ru(e, r, o);
  }
  measure() {
    let { element: e, name: o } = this;
    return ze[o](window.getComputedStyle(e.current), () => e.measureViewportBox());
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: o, name: r } = this;
    if (!e || !e.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = this.measure()),
      (o[0] = this.measuredOrigin));
    let n = o[o.length - 1];
    n !== void 0 && this.motionValue?.jump(n, !1);
  }
  measureEndState() {
    let { element: e, unresolvedKeyframes: o } = this;
    if (!e || !e.current) return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    let r = o.length - 1,
      n = o[r];
    ((o[r] = this.measure()),
      n !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = n),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([i, s]) => {
          e.getValue(i).set(s);
        }),
      this.resolveNoneKeyframes());
  }
};
var xe = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
var Iu = new Set([
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRadius",
  ...xe,
  "width",
  "maxWidth",
  "height",
  "maxHeight",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "insetBlock",
  "insetBlockStart",
  "insetBlockEnd",
  "insetInline",
  "insetInlineStart",
  "insetInlineEnd",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingBlock",
  "paddingBlockStart",
  "paddingBlockEnd",
  "paddingInline",
  "paddingInlineStart",
  "paddingInlineEnd",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "fontSize",
  "backgroundPositionX",
  "backgroundPositionY",
]);
function $a(t, e) {
  for (let o = 0; o < t.length; o++) typeof t[o] == "number" && Iu.has(e) && (t[o] = t[o] + "px");
}
function Lu(t) {
  return !!(
    (typeof t == "function" && he()) ||
    !t ||
    (typeof t == "string" && (t in Ke || he())) ||
    Pe(t) ||
    (Array.isArray(t) && t.every(Lu))
  );
}
var eh = ao(() => {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch {
    return !1;
  }
  return !0;
});
var Ha = [];
function _a(t) {
  (J(
    typeof t.test == "function" && typeof t.read == "function",
    "Effects passed to animate.addEffect() need test() and read().",
    "effect-missing-test"
  ),
    Bi(t),
    Ha.unshift(t));
}
function Bi(t) {
  At(Ha, t);
}
function Ya(t) {
  return Ha.find((e) => e.test(t));
}
function Fi(t, e, o = {}, r) {
  let n = [],
    { velocity: i } = o,
    s = o.reduceMotion ?? r?.shouldReduceMotion;
  for (let c in e) {
    if (c === "transition" || c === "transitionEnd") continue;
    let l = e[c];
    if (l === void 0) continue;
    let u = t(c),
      f = u.get();
    if (f !== void 0 && !u.isAnimating() && !Array.isArray(l) && l === f && !i) {
      D.update(() => u.set(l));
      continue;
    }
    (u.start(ne(c, u, l, s && Co.has(c) ? { type: !1 } : o, r)),
      u.animation && n.push(u.animation));
  }
  let { transitionEnd: a } = e;
  if (a) {
    let c = () =>
      D.update(() => {
        for (let l in a) t(l).set(a[l]);
      });
    n.length ? Promise.all(n).then(c) : c();
  }
  return n;
}
function Mn(t, e, o, r, n) {
  return Fi(
    (i) => {
      let s = t.get(e, i);
      if (!s) {
        let a;
        if (!n) {
          let c = o[i];
          ((a = oh(c) ?? t.read(e, i, c)),
            J(
              a !== void 0,
              `"${i}" can't be read from the animated subject. Provide [from, to] keyframes.`,
              "effect-unreadable-value"
            ));
        }
        ((s = tt(a, { owner: n })), t(e, { [i]: s }));
      }
      return s;
    },
    o,
    r,
    n
  );
}
function oh(t) {
  let e = Array.isArray(t) ? t[0] : void 0;
  return e === null ? void 0 : e;
}
function Ht(t) {
  return io(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
function jt(t) {
  return io(t) && "ownerSVGElement" in t;
}
function xt(t, e, o) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let r = document;
    e && (r = e.current);
    let n = o?.[t] ?? r.querySelectorAll(t);
    return n ? Array.from(n) : [];
  }
  return Array.from(t).filter((r) => r != null);
}
function gr(t) {
  let e = (a, c) => {
      let l = xt(a),
        u = [];
      for (let f of l) {
        let m = t(f, c);
        u.push(m);
      }
      return () => {
        for (let f of u) f();
      };
    },
    { test: o, read: r, get: n, flush: i, state: s } = t;
  return Object.assign(e, { test: o, read: r, get: n, flush: i, state: s });
}
var Cn = class {
  constructor(e = D.render) {
    ((this.step = e),
      (this.values = new Map()),
      (this.pending = []),
      (this.numPending = 0),
      (this.flush = () => {
        let { pending: o, numPending: r } = this;
        this.numPending = 0;
        for (let n = 0; n < r; n++) o[n]();
      }));
  }
  set(e, o, r, n) {
    if ((this.values.get(e)?.onRemove(), n))
      for (let c of this.values.values()) c.value === n && (r = c.render);
    let i = () => r && this.schedule(r);
    o.get() !== void 0 && i();
    let s = o.on("change", i),
      a = () => {
        (s(),
          r && !n && this.cancel(r),
          this.values.get(e)?.onRemove === a && this.values.delete(e));
      };
    return (this.values.set(e, { value: o, render: n ? void 0 : r, onRemove: a }), a);
  }
  get(e) {
    return this.values.get(e)?.value;
  }
  release() {
    let e = new Map();
    return (
      this.values.forEach((o, r) => {
        (e.set(r, o.value), o.onRemove());
      }),
      (this.transformKeys = this.transformValues = void 0),
      e
    );
  }
  schedule(e) {
    let { pending: o, numPending: r } = this;
    for (let n = 0; n < r; n++) if (o[n] === e) return;
    (r || this.step(this.flush), (o[this.numPending++] = e));
  }
  cancel(e) {
    let { pending: o } = this;
    for (let r = 0; r < this.numPending; r++)
      if (o[r] === e) {
        o[r] = o[--this.numPending];
        return;
      }
  }
};
function De(t, { step: e, ...o } = {}) {
  let r = new WeakMap();
  return Object.assign(
    (i, s) => {
      let a = r.get(i) ?? new Cn(e);
      r.set(i, a);
      let c = [];
      for (let l in s) {
        let u = s[l],
          f = t(i, a, l, u);
        c.push(f);
      }
      return () => {
        for (let l of c) l();
      };
    },
    o,
    { get: (i, s) => r.get(i)?.get(s), flush: (i) => r.get(i)?.flush(), state: (i) => r.get(i) }
  );
}
var Ou = {};
function ku(t) {
  let e = "",
    { transformKeys: o = [], transformValues: r = {} } = t;
  for (let i = 0; i < o.length; i++) {
    let s = o[i],
      a = r[s].getCurrent();
    if (a === void 0) continue;
    (typeof a == "number" ? a : parseFloat(a)) !== (s.startsWith("scale") ? 1 : 0) &&
      (e += (e && " ") + (Ou[s] || (Ou[s] = (Sn[s] || s) + "(")) + Vt(a, ir[s]) + ")");
  }
  let n = t.get("pathRotation")?.get();
  return (n && (e += (e && " ") + "rotate(" + Vt(n, ir.pathRotation) + ")"), e || "none");
}
var ji = new Set(["originX", "originY", "originZ"]),
  Xa = (t, e) => Vt(t.get(e)?.get(), yt[e]),
  En = (t, e, o, r) => {
    let n, i;
    if (st.has(o)) {
      if (o !== "pathRotation") {
        let s = e.transformKeys ?? (e.transformKeys = []);
        (((e.transformValues ?? (e.transformValues = {}))[o] = r),
          s.includes(o) || (s.push(o), s.sort((a, c) => Tt.indexOf(a) - Tt.indexOf(c))));
      }
      (e.get("transform") ||
        (!Ht(t) && !e.get("transformBox") && En(t, e, "transformBox", new Kt("fill-box")),
        e.set("transform", new Kt("none"), () => {
          (oe.get(t)?.check(), (t.style.transform = ku(e)));
        })),
        (i = e.get("transform")));
    } else
      ji.has(o)
        ? (e.get("transformOrigin") ||
            e.set("transformOrigin", new Kt(""), () => {
              let s = Xa(e, "originX") ?? "50%",
                a = Xa(e, "originY") ?? "50%",
                c = Xa(e, "originZ") ?? 0;
              t.style.transformOrigin = `${s} ${a} ${c}`;
            }),
          (i = e.get("transformOrigin")))
        : de(o)
          ? (n = () => {
              t.style.setProperty(o, r.getCurrent());
            })
          : (n = () => {
              t.style[o] = Vt(r.getCurrent(), yt[o]);
            });
    return e.set(o, r, n, i);
  },
  rh = (t) => Ht(t) || jt(t),
  Ni = (t, e) => {
    if (st.has(e)) return hn(t, e);
    let o = getComputedStyle(t),
      r = de(e) ? o.getPropertyValue(e) : o[e];
    return (typeof r == "string" && r.trim()) || 0;
  },
  Gi = De(En, { test: rh, read: Ni }),
  nh = gr(Gi);
function Ro(t, e, o) {
  let { style: r, vars: n, transformOrigin: i } = t,
    s = !1,
    a = !1;
  for (let c in e) {
    let l = e[c];
    if (st.has(c)) {
      s = !0;
      continue;
    } else if (uo(c)) {
      n[c] = l;
      continue;
    } else {
      let u = Vt(l, yt[c]);
      c.startsWith("origin") ? ((a = !0), (i[c] = u)) : (r[c] = u);
    }
  }
  if (
    (e.transform ||
      (s || o ? (r.transform = ur(e, t.transform, o)) : r.transform && (r.transform = "none")),
    a)
  ) {
    let { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
var ih = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  sh = { offset: "strokeDashoffset", array: "strokeDasharray" };
function qa(t, e, o = 1, r = 0, n = !0) {
  t.pathLength = 1;
  let i = n ? ih : sh;
  ((t[i.offset] = `${-r}`), (t[i.array] = `${e} ${o}`));
}
var Dn = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor",
];
function Rn(
  t,
  { attrX: e, attrY: o, attrScale: r, pathLength: n, pathSpacing: i = 1, pathOffset: s = 0, ...a },
  c,
  l,
  u
) {
  if ((Ro(t, a, l), c)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  let { attrs: f, style: m } = t;
  for (let p of Dn) f[p] !== void 0 && ((m[p] = f[p]), delete f[p]);
  ((m.transform || f.transformOrigin) &&
    ((m.transformOrigin = f.transformOrigin ?? "50% 50%"), delete f.transformOrigin),
    m.transform && ((m.transformBox = u?.transformBox ?? "fill-box"), delete f.transformBox),
    e !== void 0 && (f.x = e),
    o !== void 0 && (f.y = o),
    r !== void 0 && (f.scale = r),
    n !== void 0 && qa(f, n, i, s, !1));
}
function ah(t, e) {
  if (!(e in t)) return !1;
  let o =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) ||
    Object.getOwnPropertyDescriptor(t, e);
  return o && typeof o.set == "function";
}
var In = (t, e, o, r, n = o) => {
    let i = ah(t, n);
    !i && (n.startsWith("data") || n.startsWith("aria")) && (n = $t(n));
    let s = yt[o] || yt[n],
      a = i
        ? () => {
            t[n] = Vt(r.get(), yt[o]);
          }
        : () => {
            let c = Vt(r.get(), s);
            c == null ? t.removeAttribute(n) : t.setAttribute(n, String(c));
          };
    return e.set(o, r, a);
  },
  ch = gr(De(In));
function lh(t, e, o, r) {
  return (
    D.render(() => t.setAttribute("pathLength", "1")),
    o === "pathOffset"
      ? e.set(o, r, () => {
          let n = r.get();
          t.setAttribute("stroke-dashoffset", `${-n}`);
        })
      : (e.get("stroke-dasharray") ||
          e.set("stroke-dasharray", new Kt("1 1"), () => {
            let n = e.get("pathLength")?.get() ?? 1,
              i = e.get("pathSpacing")?.get();
            t.setAttribute("stroke-dasharray", `${n} ${i ?? 1 - Number(n)}`);
          }),
        e.set(o, r, void 0, e.get("stroke-dasharray")))
  );
}
var Bu = (t, e, o, r) =>
    o.startsWith("path")
      ? lh(t, e, o, r)
      : o.startsWith("attr")
        ? In(t, e, o, r, ju(o))
        : (st.has(o) || ji.has(o) || de(o) || o in t.style ? En : In)(t, e, o, r),
  Fu = (t, e) =>
    st.has(e)
      ? yt[e]?.default || 0
      : de(e) || Dn.includes(e)
        ? Ni(t, e) || t.getAttribute($t(e)) || 0
        : ((e = ju(e)), t.getAttribute($t(e)) ?? t.getAttribute(e) ?? void 0),
  Wi = De(Bu, { test: jt, read: Fu }),
  uh = gr(Wi);
function ju(t) {
  return t.replace(/^attr([A-Z])/, (e, o) => o.toLowerCase());
}
function Ln({ top: t, left: e, right: o, bottom: r }) {
  return { x: { min: e, max: o }, y: { min: t, max: r } };
}
function Za({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Ja(t, e) {
  if (!e) return t;
  let o = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
function Qa(t) {
  return t === void 0 || t === 1;
}
function On({ scale: t, scaleX: e, scaleY: o }) {
  return !Qa(t) || !Qa(e) || !Qa(o);
}
function _t(t) {
  return On(t) || Ui(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Ui(t) {
  return Nu(t.x) || Nu(t.y);
}
function Nu(t) {
  return t && t !== "0%";
}
function yr(t, e, o) {
  let r = t - o,
    n = e * r;
  return o + n;
}
function tc(t, e, o, r, n) {
  return (n !== void 0 && (t = yr(t, n, r)), yr(t, o, r) + e);
}
function zi(t, e = 0, o = 1, r, n) {
  ((t.min = tc(t.min, e, o, r, n)), (t.max = tc(t.max, e, o, r, n)));
}
function Ki(t, { x: e, y: o }) {
  (zi(t.x, e.translate, e.scale, e.originPoint), zi(t.y, o.translate, o.scale, o.originPoint));
}
var Gu = 0.999999999999,
  Wu = 1.0000000000001;
function oc(t, e, o, r = !1) {
  let n = o.length;
  if (!n) return;
  e.x = e.y = 1;
  let i, s;
  for (let a = 0; a < n; a++) {
    ((i = o[a]), (s = i.projectionDelta));
    let { visualElement: c } = i.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        (It(t.x, -i.scroll.offset.x), It(t.y, -i.scroll.offset.y)),
      s && ((e.x *= s.x.scale), (e.y *= s.y.scale), Ki(t, s)),
      r && _t(i.latestValues) && xr(t, i.latestValues, i.layout?.layoutBox));
  }
  (e.x < Wu && e.x > Gu && (e.x = 1), e.y < Wu && e.y > Gu && (e.y = 1));
}
function It(t, e) {
  ((t.min += e), (t.max += e));
}
function ec(t, e, o, r, n = 0.5) {
  let i = K(t.min, t.max, n);
  zi(t, e, o, i, r);
}
function Uu(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function xr(t, e, o) {
  let r = o ?? t;
  (ec(t.x, Uu(e.x, r.x), e.scaleX, e.scale, e.originX),
    ec(t.y, Uu(e.y, r.y), e.scaleY, e.scale, e.originY));
}
function vr(t, e) {
  return Ln(Ja(t.getBoundingClientRect(), e));
}
function rc(t, e, o) {
  let r = vr(t, o),
    { scroll: n } = e;
  return (n && (It(r.x, n.offset.x), It(r.y, n.offset.y)), r);
}
var fh = {},
  zu = (t) => (jt(t) ? Wi : Gi),
  nc = class {
    constructor(e, o) {
      ((this.effect = e), (this.current = o), (this.KeyframeResolver = Do));
    }
    getValue(e) {
      return this.effect.get(this.current, e);
    }
    readValue(e, o) {
      return this.effect.read(this.current, e, o);
    }
    render() {
      this.effect.flush(this.current);
    }
    measureViewportBox() {
      return vr(this.current);
    }
    getProps() {
      return fh;
    }
  };
function ic(t, e, o, r) {
  if (r) return Fi((i) => r.getValue(i, null), e, o, r);
  let n = zu(t);
  return Mn(n, t, e, o, new nc(n, t));
}
function sc(t, e) {
  let o = zu(t).state(t);
  if (!o) return;
  let { transformKeys: r } = o;
  o.release().forEach((n, i) => {
    i === "transformBox" || (i === "transform" && r?.length) || e.addValue(i, n);
  });
}
var ac = De(
  (t, e, o, r) =>
    e.set(o, r, () => {
      t[o] = r.get();
    }),
  {
    test: (t) => io(t),
    read: (t, e) => {
      let o = t[e];
      return typeof o == "string" || typeof o == "number" ? o : void 0;
    },
  }
);
var { schedule: Ct, cancel: $i } = on(queueMicrotask, !1);
var Nt = { x: !1, y: !1 };
function kn() {
  return Nt.x || Nt.y;
}
function cc(t) {
  return t === "x" || t === "y"
    ? Nt[t]
      ? null
      : ((Nt[t] = !0),
        () => {
          Nt[t] = !1;
        })
    : Nt.x || Nt.y
      ? null
      : ((Nt.x = Nt.y = !0),
        () => {
          Nt.x = Nt.y = !1;
        });
}
function Hi(t, e) {
  let o = xt(t),
    r = new AbortController(),
    n = { passive: !0, ...e, signal: r.signal };
  return [o, n, () => r.abort()];
}
function mh(t) {
  return !(t.pointerType === "touch" || kn());
}
function lc(t, e, o = {}) {
  let [r, n, i] = Hi(t, o);
  return (
    r.forEach((s) => {
      let a = !1,
        c = !1,
        l,
        u = () => {
          s.removeEventListener("pointerleave", d);
        },
        f = (h) => {
          (l && (l(h), (l = void 0)), u());
        },
        m = (h) => {
          ((a = !1),
            window.removeEventListener("pointerup", m),
            window.removeEventListener("pointercancel", m),
            c && ((c = !1), f(h)));
        },
        p = () => {
          ((a = !0),
            window.addEventListener("pointerup", m, n),
            window.addEventListener("pointercancel", m, n));
        },
        d = (h) => {
          if (h.pointerType !== "touch") {
            if (a) {
              c = !0;
              return;
            }
            f(h);
          }
        },
        g = (h) => {
          if (!mh(h)) return;
          c = !1;
          let v = e(s, h);
          typeof v == "function" && ((l = v), s.addEventListener("pointerleave", d, n));
        };
      (s.addEventListener("pointerenter", g, n), s.addEventListener("pointerdown", p, n));
    }),
    i
  );
}
var _i = (t, e) => (e ? (t === e ? !0 : _i(t, e.parentElement)) : !1);
var Io = (t) =>
  t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
var ph = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function uc(t) {
  return ph.has(t.tagName) || t.isContentEditable === !0;
}
var dh = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function fc(t) {
  return dh.has(t.tagName) || t.isContentEditable === !0;
}
var Sr = new WeakSet();
function Ku(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function mc(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
var $u = (t, e) => {
  let o = t.currentTarget;
  if (!o) return;
  let r = Ku(() => {
    if (Sr.has(o)) return;
    mc(o, "down");
    let n = Ku(() => {
        mc(o, "up");
      }),
      i = () => mc(o, "cancel");
    (o.addEventListener("keyup", n, e), o.addEventListener("blur", i, e));
  });
  (o.addEventListener("keydown", r, e),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), e));
};
function Hu(t) {
  return Io(t) && !kn();
}
var _u = new WeakSet();
function pc(t, e, o = {}) {
  let [r, n, i] = Hi(t, o),
    s = (a) => {
      let c = a.currentTarget;
      if (!Hu(a) || _u.has(a)) return;
      (Sr.add(c), o.stopPropagation && _u.add(a));
      let l = e(c, a),
        u = { ...n, capture: !0 },
        f = (d, g) => {
          (window.removeEventListener("pointerup", m, u),
            window.removeEventListener("pointercancel", p, u),
            Sr.has(c) && Sr.delete(c),
            Hu(d) && typeof l == "function" && l(d, { success: g }));
        },
        m = (d) => {
          f(d, c === window || c === document || o.useGlobalTarget || _i(c, d.target));
        },
        p = (d) => {
          f(d, !1);
        };
      (window.addEventListener("pointerup", m, u), window.addEventListener("pointercancel", p, u));
    };
  return (
    r.forEach((a) => {
      ((o.useGlobalTarget ? window : a).addEventListener("pointerdown", s, n),
        Ht(a) &&
          (a.addEventListener("focus", (l) => $u(l, n)),
          !uc(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    i
  );
}
function Yi(t, e) {
  let o = window.getComputedStyle(t);
  return de(e) ? o.getPropertyValue(e) : o[e];
}
var Xi = new WeakMap(),
  qi,
  Yu = (t, e, o) => (r, n) =>
    n && n[0] ? n[0][t + "Size"] : jt(r) && "getBBox" in r ? r.getBBox()[e] : r[o],
  hh = Yu("inline", "width", "offsetWidth"),
  gh = Yu("block", "height", "offsetHeight");
function yh({ target: t, borderBoxSize: e }) {
  Xi.get(t)?.forEach((o) => {
    o(t, {
      get width() {
        return hh(t, e);
      },
      get height() {
        return gh(t, e);
      },
    });
  });
}
function xh(t) {
  t.forEach(yh);
}
function vh() {
  typeof ResizeObserver > "u" || (qi = new ResizeObserver(xh));
}
function Xu(t, e) {
  qi || vh();
  let o = xt(t);
  return (
    o.forEach((r) => {
      let n = Xi.get(r);
      (n || ((n = new Set()), Xi.set(r, n)), n.add(e), qi?.observe(r));
    }),
    () => {
      o.forEach((r) => {
        let n = Xi.get(r);
        (n?.delete(e), n?.size || qi?.unobserve(r));
      });
    }
  );
}
var Zi = new Set(),
  wr;
function Sh() {
  ((wr = () => {
    let t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Zi.forEach((e) => e(t));
  }),
    window.addEventListener("resize", wr));
}
function qu(t) {
  return (
    Zi.add(t),
    wr || Sh(),
    () => {
      (Zi.delete(t),
        !Zi.size &&
          typeof wr == "function" &&
          (window.removeEventListener("resize", wr), (wr = void 0)));
    }
  );
}
function Re(t, e) {
  return typeof t == "function" ? qu(t) : Xu(t, e);
}
var Gt = { value: null, addProjectionMetrics: null };
function wh() {
  ((Gt.value = null), (Gt.addProjectionMetrics = null));
}
function Th() {
  if (Gt.value) throw (wh(), new Error("Stats are already being measured"));
  let t = Gt;
  ((t.value = {
    layoutProjection: { nodes: [], calculatedTargetDeltas: [], calculatedProjections: [] },
  }),
    (t.addProjectionMetrics = (e) => {
      let { layoutProjection: o } = t.value;
      (o.nodes.push(e.nodes),
        o.calculatedTargetDeltas.push(e.calculatedTargetDeltas),
        o.calculatedProjections.push(e.calculatedProjections));
    }));
}
function dc(t) {
  return jt(t) && t.tagName === "svg";
}
function Vh(t, e) {
  if (t === "first") return 0;
  {
    let o = e - 1;
    return t === "last" ? o : o / 2;
  }
}
function bh(t = 0.1, { startDelay: e = 0, from: o = 0, ease: r, grid: n } = {}) {
  let i = {};
  return (s, a) => {
    let c = i[a];
    if (!c) {
      let [f, m] = n || [1 / 0, 1],
        p = Math.min(f, a) - 1,
        d = Math.max(m, Math.ceil(a / f)) - 1,
        g = typeof o == "number",
        h = o === "first" ? 0 : o === "last" ? 1 : 0.5,
        v = g ? o % f : p * h,
        T = g ? Math.floor(o / f) : d * h;
      c = i[a] = [];
      for (let x = 0; x < a; x++) {
        let w = x % f,
          P = Math.floor(x / f),
          N = Math.min(w, p - w),
          y = Math.min(P, d - P);
        if (o === "random") {
          let S = (Math.random() * (x + 1)) | 0;
          ((c[x] = c[S]), (c[S] = x));
        } else c[x] = o === "edges" ? Math.min(p ? N : y, d ? y : N) : Math.hypot(w - v, P - T);
      }
      c.push(n ? Math.max(...c) : a);
    }
    let l = t * c[s],
      u = t * c[a];
    return (r && u && (l = Zo(r)(l / u) * u), e + l);
  };
}
function Bn(...t) {
  let e = !Array.isArray(t[0]),
    o = e ? 0 : -1,
    r = t[0 + o],
    n = t[1 + o],
    i = t[2 + o],
    s = t[3 + o],
    a = an(n, i, s);
  return e ? a(r) : a;
}
var Fn = new Set(),
  Zu = ({ timestamp: t }) => {
    Fn.forEach((e) => e.tick(t));
  },
  Ji = class extends pe {
    constructor(e) {
      (super(),
        (this.state = "idle"),
        (this.startTime = 0),
        (this.currentTime = 0),
        (this.started = !1),
        (this.hasNextTarget = !1),
        (this.nextTarget = 0),
        (this.stop = () => {
          this.state !== "idle" && (this.teardown(), this.options.onStop?.());
        }),
        (this.options = e),
        (this.factory = e.type),
        (this.generator = this.factory(e)));
      let { driver: o } = e;
      (o && (this.driver = o((r) => this.tick(r))),
        (this.startTime = this.now()),
        (this.state = "running"),
        this.driver ? this.driver.start() : (Fn.size || D.update(Zu, !0), Fn.add(this)));
    }
    setTarget(e, o) {
      ((this.nextTarget = e), (this.nextVelocity = o), (this.hasNextTarget = !0));
    }
    retarget(e, o) {
      let { options: r, generator: n } = this;
      ((r.keyframes = e),
        (r.velocity = o),
        (this.startTime = this.now()),
        (this.currentTime = 0),
        n.retarget ? n.retarget(e, o) : (this.generator = this.factory(r)));
    }
    tick(e) {
      let { options: o, hasNextTarget: r } = this,
        { delay: n = 0, onUpdate: i, onPlay: s } = o;
      this.started || (this.startTime = rr(this.startTime, e));
      let a = Math.round(e - this.startTime) - n,
        c = (this.currentTime = Math.max(0, a)),
        l = this.generator.next(c),
        u = a < 0 ? o.keyframes[0] : l.value;
      if (r) {
        this.hasNextTarget = !1;
        let { keyframes: f } = o;
        ((f[0] = u),
          (f[1] = this.nextTarget),
          this.retarget(f, this.nextVelocity ?? this.getGeneratorVelocity()));
      }
      ((r || !this.started) && ((this.started = !0), s?.()),
        this.state === "running" &&
          (i?.(u),
          l.done &&
            a >= 0 &&
            !r &&
            !this.hasNextTarget &&
            this.state === "running" &&
            (this.notifyFinished(), this.teardown(), (this.state = "finished"), o.onComplete?.())));
    }
    getGeneratorVelocity() {
      return Mi(this.generator, this.currentTime, this.options.velocity);
    }
    now() {
      return this.driver ? this.driver.now() : Y.now();
    }
    teardown() {
      ((this.state = "idle"),
        this.driver ? this.driver.stop() : (Fn.delete(this), Fn.size || rt(Zu)));
    }
  };
var _e = (t) => (typeof t == "number" ? t : parseFloat(t));
function Qi(t, e, o) {
  let r = t.get(),
    n = null,
    i,
    s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0,
    a = (u) => i(s ? u + s : u),
    c = () => t.events.animationStart?.notify(),
    l = () => {
      (n && (n.stop(), (n = null)), (t.animation = void 0));
    };
  if (
    (t.attach((u, f) => {
      i = f;
      let m = _e(u);
      if (n?.state === "running") {
        n.setTarget(m, o.velocity);
        return;
      }
      let p = _e(t.get()),
        d = n ? n.getGeneratorVelocity() : t.getVelocity();
      if ((l(), p === m)) return;
      let g = {
          keyframes: [p, m],
          velocity: d,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...o,
          onUpdate: a,
        },
        h = (n = new Ji({ ...g, onPlay: c }));
      ((t.animation = h),
        h.then(() => {
          n === h && ((n = null), (t.animation = void 0), t.events.animationComplete?.notify());
        }));
    }, l),
    $(e))
  ) {
    let u = o.skipInitialAnimation === !0,
      f = (g) => {
        u ? ((u = !1), t.jump(Ju(g, s), !1)) : t.set(Ju(g, s));
      },
      m = e.on("change", f),
      p = e.get();
    _e(p) - _e(t.get()) && f(p);
    let d = t.on("destroy", m);
    return () => {
      (m(), d(), l());
    };
  }
  return l;
}
function Ju(t, e) {
  return e ? t + e : t;
}
function Ah(t, e) {
  let o = $(t) ? t.get() : t,
    r = tt(o);
  return (ts(r, t, e), r);
}
function ts(t, e, o = {}) {
  let r = { type: "spring", ...o };
  return (or(r), (r.type = r.type || Dt), Qi(t, e, r));
}
function Qu(t, e, o) {
  let r = () => e.set(o()),
    n = () => D.preRender(r, !1, !0),
    i = t.map((s) => s.on("change", n));
  e.on("destroy", () => {
    (i.forEach((s) => s()), rt(r));
  });
}
function hc(t) {
  let e = [];
  ye.current = e;
  let o = t();
  ye.current = void 0;
  let r = tt(o);
  return (Qu(e, r, t), r);
}
function Ph(t, e, o, r) {
  let n = Bn(e, o, r);
  return hc(() => n(t.get()));
}
function Mh(t, e) {
  let o = tt($(t) ? t.get() : t);
  return (es(o, t, e), o);
}
function es(t, e, o) {
  return Qi(t, e, { ...o, type: ee });
}
var Ch = [...Oi, it, ct],
  Eh = (t) => Ch.find(Pn(t));
var Dh = 0,
  tf = () => `motion-view-${Dh++}`,
  Rh = (t) => t.startsWith("motion-view-");
function ef(t, e, o) {
  e && (t.style?.setProperty("view-transition-class", e), o.push(t));
}
function of(t, e, o, r, n) {
  if (o && (t.style?.setProperty("view-transition-group", o), r.push(t), o !== "none" && n)) {
    let i = getComputedStyle(t);
    (i.overflowX !== "visible" || i.overflowY !== "visible") && n.add(e);
  }
}
function os(t, e, o, r, n, i = [], s, a = [], c) {
  let l = xt(t);
  if (r)
    return l.map((f, m) => {
      let p = e.get(f);
      if (p) return p;
      let d = r[m] ?? tf();
      return (
        f.style?.setProperty("view-transition-name", d),
        o.push(f),
        e.set(f, d),
        ef(f, n, i),
        of(f, d, s, a, c),
        d
      );
    });
  let u = l.map((f) =>
    e.has(f) ? void 0 : getComputedStyle(f).getPropertyValue("view-transition-name")
  );
  return l.map((f, m) => {
    let p = e.get(f);
    if (p) return p;
    let d = u[m],
      g;
    return (
      d && d !== "none" && d !== "auto" && d !== "match-element" && !Rh(d)
        ? (g = d)
        : ((g = tf()), f.style?.setProperty("view-transition-name", g), o.push(f)),
      e.set(f, g),
      ef(f, n, i),
      of(f, g, s, a, c),
      g
    );
  });
}
function rf(t, e = [], o = []) {
  for (let r of t) r.style?.removeProperty("view-transition-name");
  for (let r of e) r.style?.removeProperty("view-transition-class");
  for (let r of o) r.style?.removeProperty("view-transition-group");
}
function nf(t) {
  return t === "layout" ? "group" : t === "enter" || t === "new" ? "new" : "old";
}
var rs = {},
  Ie = null,
  Ye = {
    set: (t, e) => {
      rs[t] = e;
    },
    commit: () => {
      Ie || ((Ie = document.createElement("style")), (Ie.id = "motion-view"));
      let t = "";
      for (let e in rs) {
        let o = rs[e];
        t += `${e} {
`;
        for (let [r, n] of Object.entries(o))
          t += `  ${r}: ${n};
`;
        t += `}
`;
      }
      ((Ie.textContent = t), document.head.appendChild(Ie), (rs = {}));
    },
    remove: () => {
      Ie && Ie.parentElement && Ie.parentElement.removeChild(Ie);
    },
  };
function gc(t) {
  let e = t.match(/::view-transition-(old|new|group-children|group|image-pair)\((.*?)\)/);
  return e ? { layer: e[2], type: e[1] } : null;
}
function yc() {
  return document.getAnimations().filter((t) => {
    let { effect: e } = t;
    return (
      !!e &&
      e.target === document.documentElement &&
      e.pseudoElement?.startsWith("::view-transition")
    );
  });
}
function sf(t, e) {
  return e.has(t) && Object.keys(e.get(t)).length > 0;
}
var Ih = ["layout", "enter", "exit", "new", "old"],
  af = (t) => t.split(" ").every((e) => parseFloat(e) === 0),
  Lh = { group: ["layout"], new: ["new", "enter"], old: ["old", "exit"] },
  Oh = { new: { opacity: 0, scale: 0.85 }, old: { opacity: 1, scale: 1 } },
  kh = 0.2;
function lf(t) {
  let {
    update: e,
    targets: o,
    resolveDefs: r,
    cropOverride: n,
    pairs: i,
    classNames: s,
    flatGroups: a,
    options: c,
  } = t;
  if (!document.startViewTransition) return (async () => (await e(), new re([])))();
  let l = new Map(),
    u = [],
    f = [],
    m = [],
    p = new Set(),
    d = new Map(),
    g = new Set(),
    h = new Map(),
    v = new Map(),
    T = new Map(),
    x = new Map(),
    w = (L) => {
      o.forEach((C, E) => {
        let R = s.get(E),
          k = E === "root" || !r.has(E) ? void 0 : a.has(E) ? "none" : "contain",
          G;
        if (E === "root" || !r.has(E)) G = [E];
        else if (i.has(E))
          if (L === "old") (x.set(E, xt(E)), (G = os(E, l, u, void 0, R, f, k, m, p)), T.set(E, G));
          else {
            for (let z of x.get(E) ?? [])
              (z.style?.removeProperty("view-transition-name"), l.delete(z));
            G = os(i.get(E), l, u, T.get(E), R, f, k, m, p);
          }
        else G = os(E, l, u, void 0, R, f, k, m, p);
        let O = n.get(E);
        G.forEach((z, nt) => {
          let _ = d.get(z);
          (d.set(z, _ && _ !== C ? { ..._, ...C } : C), O !== void 0 && h.set(z, O));
          let ut = v.get(z) ?? {};
          ((ut[L] = [nt, G.length]), v.set(z, ut));
        });
      });
    },
    P = (L, C) => {
      let E = v.get(L);
      return (C === "old" ? E?.old : C === "new" ? E?.new : (E?.new ?? E?.old)) ?? [-1, 1];
    },
    N = (L, C, E, R, k) => {
      let G = cf(Mt(c, E), Mt(Bh(L, C) ?? {}, E));
      return (typeof G.delay == "function" && (G.delay = G.delay(R, k)), G);
    },
    y = (L) => {
      let [C, E] = P(L, "group"),
        R = N(d.get(L), "group", "layout", C === -1 ? 0 : C, E);
      R.duration && (R.duration = X(R.duration));
      let { delay: k = 0, duration: G, ease: O } = ar(R);
      return { delay: X(k), duration: G, ease: O };
    },
    S = new Map(),
    F = (L) =>
      l.forEach((C, E) => {
        let R = E,
          k = R.getBoundingClientRect?.();
        if (k && k.height) {
          let G = getComputedStyle(R),
            O = {};
          for (let nt of xe) O[nt] = G[nt];
          let z = S.get(C) ?? {};
          ((z[L] = { width: k.width, height: k.height, radii: O }), S.set(C, z));
        }
      }),
    U = () => {
      g.clear();
      for (let L of v.keys()) L !== "root" && (h.get(L) ?? b(L)) && g.add(L);
    },
    b = (L) => {
      let C = S.get(L);
      return !C?.old || !C?.new || !C.old.height || !C.new.height
        ? !1
        : Math.abs(C.old.width / C.old.height - C.new.width / C.new.height) > kh;
    },
    V = () => {
      (sf("root", o) || Ye.set(":root", { "view-transition-name": "none" }),
        Ye.set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
          "animation-timing-function": "linear !important",
        }),
        g.forEach((L) => {
          (Ye.set(`::view-transition-group(${L})`, { overflow: "clip" }),
            Ye.set(`::view-transition-old(${L}), ::view-transition-new(${L})`, {
              width: "100%",
              height: "100%",
              "object-fit": "cover",
            }));
        }),
        p.forEach((L) => {
          Ye.set(`::view-transition-group-children(${L})`, { overflow: "clip" });
        }),
        Ye.commit());
    },
    A = () => {
      (rf(u, f, m), Ye.remove());
    },
    M = async () => {
      (await e(), w("new"), F("new"), U(), V());
    },
    j;
  try {
    (w("old"), F("old"), V(), (j = document.startViewTransition(M)));
  } catch (L) {
    return (A(), Promise.reject(L));
  }
  return (
    j.finished.finally(A),
    new Promise((L, C) => {
      j.ready
        .then(() => {
          let E = yc(),
            R = [],
            k = new Set(),
            G = new Set();
          d.forEach((O, z) => {
            let nt = v.get(z),
              _ = !!nt?.new && !nt?.old,
              ut = !!nt?.old && !nt?.new;
            for (let q of Ih) {
              if (!O[q] || (q === "enter" && !_) || (q === "exit" && !ut)) continue;
              let mt = nf(q),
                [Ut, Ge] = P(z, mt);
              if (Ut === -1) continue;
              let { keyframes: qt, options: St } = O[q];
              for (let [ht, be] of Object.entries(qt)) {
                if (be == null) continue;
                if (ht === "x" || ht === "y") {
                  ca(
                    !1,
                    `animateView() animates view-transition layers with CSS properties; the "${ht}" shorthand has no effect - use transform, e.g. { transform: "translateX(40px)" }.`
                  );
                  continue;
                }
                if (
                  (q === "new" && _ && O.enter?.keyframes[ht] != null) ||
                  (q === "old" && ut && O.exit?.keyframes[ht] != null)
                )
                  continue;
                let lt = cf(Mt(c, ht), Mt(St, ht));
                if (!Array.isArray(be)) {
                  let Zt = q === "enter" ? O.exit?.keyframes[ht] : void 0,
                    oo = ht === "opacity" || (mt === "new" ? _ : ut),
                    Bl =
                      Zt != null
                        ? Array.isArray(Zt)
                          ? Zt[Zt.length - 1]
                          : Zt
                        : oo
                          ? Oh[mt]?.[ht]
                          : void 0;
                  Bl !== void 0 && (be = [Bl, be]);
                }
                (typeof lt.delay == "function" && (lt.delay = lt.delay(Ut, Ge)),
                  lt.duration && (lt.duration = X(lt.duration)),
                  lt.delay && (lt.delay = X(lt.delay)),
                  R.push(
                    new Rt({
                      ...lt,
                      element: document.documentElement,
                      name: ht,
                      pseudoElement: `::view-transition-${mt}(${z})`,
                      keyframes: be,
                    })
                  ),
                  k.add(`${z}:${mt}`),
                  ht === "opacity" && G.add(`${z}:${mt}`));
              }
            }
          });
          for (let O of E) {
            if (O.playState === "finished") continue;
            let { effect: z } = O;
            if (!z || !(z instanceof KeyframeEffect)) continue;
            let { pseudoElement: nt } = z;
            if (!nt) continue;
            let _ = gc(nt);
            if (!_) continue;
            let ut = d.get(_.layer);
            if (k.has(`${_.layer}:${_.type}`)) {
              G.has(`${_.layer}:new`) &&
              G.has(`${_.layer}:old`) &&
              z.getKeyframes().some((St) => St.mixBlendMode)
                ? R.push(new mr(O))
                : O.cancel();
              continue;
            }
            let q = _.type === "old" ? "new" : _.type === "new" ? "old" : void 0;
            if (q && k.has(`${_.layer}:${q}`) && !G.has(`${_.layer}:${q}`)) {
              O.cancel();
              continue;
            }
            let mt = v.get(_.layer),
              Ut = (_.type === "old" || _.type === "new") && !!mt?.old && !!mt?.new,
              Ge;
            if (_.type.startsWith("group")) {
              let { delay: qt, duration: St, ease: ht } = y(_.layer);
              Ge = { delay: qt, duration: St, easing: bo(ht, St) };
            } else {
              let qt = Ut ? "group" : _.type,
                [St, ht] = P(_.layer, qt),
                lt = N(ut, qt, qt === "group" ? "layout" : "", St === -1 ? 0 : St, ht),
                Zt = lt.visualDuration;
              (lt.duration && (lt.duration = X(lt.duration)),
                (lt = ar(lt)),
                (Ge = {
                  delay: X(lt.delay ?? 0),
                  duration: Ut && Zt !== void 0 ? X(Zt) : lt.duration,
                  easing: Ut ? "linear" : bo(lt.ease, lt.duration),
                }));
            }
            (z.updateTiming(Ge), R.push(new mr(O)));
          }
          (S.forEach((O, z) => {
            if (!g.has(z)) return;
            let { delay: nt, duration: _, ease: ut } = y(z);
            for (let q of xe) {
              let mt = O.old?.radii[q] || O.new?.radii[q] || "0px",
                Ut = O.new?.radii[q] || O.old?.radii[q] || "0px";
              (af(mt) && af(Ut)) ||
                R.push(
                  new Rt({
                    element: document.documentElement,
                    name: q,
                    pseudoElement: `::view-transition-group(${z})`,
                    keyframes: [mt, Ut],
                    delay: nt,
                    duration: _,
                    ease: ut,
                  })
                );
            }
          }),
            L(new re(R)));
        })
        .catch(() => j.updateCallbackDone.then(() => L(new re([])), C));
    })
  );
}
function Bh(t, e) {
  for (let o of Lh[e] ?? []) {
    let r = t?.[o]?.options;
    if (r) return r;
  }
}
function cf(t, e) {
  let o = { ...t, ...e };
  return (
    e.duration !== void 0 &&
      (e.visualDuration === void 0 && delete o.visualDuration, e.type === void 0 && delete o.type),
    o
  );
}
var Le = [],
  xc = null;
function uf() {
  xc = null;
  let [t] = Le;
  t && Fh(t);
}
function Fh(t) {
  (At(Le, t),
    (xc = t),
    lf(t)
      .then((e) => (t.notifyReady(e), e.finished))
      .catch((e) => t.notifyReject(e))
      .finally(uf));
}
function jh() {
  for (let t = Le.length - 1; t >= 0; t--) {
    let e = Le[t],
      { interrupt: o } = e.options;
    if (o === "immediate") {
      let r = Le.slice(0, t + 1).map((i) => i.update),
        n = Le.slice(t + 1);
      ((e.update = () => {
        r.forEach((i) => i());
      }),
        (Le = [e, ...n]));
      break;
    }
  }
  (!xc || Le[0]?.options.interrupt === "immediate") && uf();
}
function ff(t) {
  (Le.push(t), Ct.render(jh));
}
var ns = class {
  constructor(e, o = {}) {
    ((this.currentSubject = "root"),
      (this.targets = new Map()),
      (this.resolveDefs = new Set()),
      (this.cropOverride = new Map()),
      (this.pairs = new Map()),
      (this.classNames = new Map()),
      (this.flatGroups = new Set()),
      (this.notifyReady = Q),
      (this.notifyReject = Q),
      (this.readyPromise = new Promise((r, n) => {
        ((this.notifyReady = r), (this.notifyReject = n));
      })),
      (this.update = e),
      (this.options = { interrupt: "wait", ...o }),
      this.readyPromise.catch(Q),
      ff(this));
  }
  add(e, o) {
    return (
      (this.currentSubject = e),
      this.resolveDefs.add(e),
      o !== void 0 && this.pairs.set(e, o),
      this.targets.has(e) || this.targets.set(e, {}),
      this
    );
  }
  crop(e = !0) {
    return (this.cropOverride.set(this.currentSubject, e), this);
  }
  group(e = !0) {
    return (
      e ? this.flatGroups.delete(this.currentSubject) : this.flatGroups.add(this.currentSubject),
      this
    );
  }
  class(e) {
    return (this.classNames.set(this.currentSubject, e), this);
  }
  layout(e = {}) {
    return (this.updateTarget("layout", {}, e), this);
  }
  enter(e, o) {
    return (this.updateTarget("enter", e, o), this);
  }
  exit(e, o) {
    return (this.updateTarget("exit", e, o), this);
  }
  new(e, o) {
    return (this.updateTarget("new", e, o), this);
  }
  old(e, o) {
    return (this.updateTarget("old", e, o), this);
  }
  updateTarget(e, o, r = {}) {
    let { currentSubject: n, targets: i } = this;
    i.has(n) || i.set(n, {});
    let s = i.get(n);
    s[e] = { keyframes: o, options: r };
  }
  then(e, o) {
    return this.readyPromise.then(e, o);
  }
};
function Nh(t, e = {}) {
  return new ns(t, e);
}
var vc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xe = () => ({ x: vc(), y: vc() }),
  Sc = () => ({ min: 0, max: 0 }),
  ot = () => ({ x: Sc(), y: Sc() });
var qe = new WeakMap();
function Oe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function ie(t) {
  return typeof t == "string" || Array.isArray(t);
}
var jn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Lo = ["initial", ...jn];
function Ze(t) {
  if (Oe(t.animate)) return !0;
  for (let e = 0; e < Lo.length; e++) if (ie(t[Lo[e]])) return !0;
  return !1;
}
function Nn(t) {
  return !!(Ze(t) || t.variants);
}
function wc(t, e, o) {
  for (let r in e) {
    let n = e[r],
      i = o[r];
    if ($(n)) t.addValue(r, n);
    else if ($(i)) t.addValue(r, tt(n, { owner: t }));
    else if (i !== n)
      if (t.hasValue(r)) {
        let s = t.getValue(r);
        s.liveStyle === !0 ? s.jump(n) : s.hasAnimated || s.set(n);
      } else {
        let s = t.getStaticValue(r);
        t.addValue(r, tt(s !== void 0 ? s : n, { owner: t }));
      }
  }
  for (let r in o) e[r] === void 0 && t.removeValue(r);
  return e;
}
var Je = { current: null },
  Oo = { current: !1 };
var Gh = typeof window < "u";
function Gn() {
  if (((Oo.current = !0), !!Gh))
    if (window.matchMedia) {
      let t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Je.current = t.matches);
      (t.addEventListener("change", e), e());
    } else Je.current = !1;
}
var mf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  is = {};
function Wn(t) {
  is = t;
}
function Tc() {
  return is;
}
var ve = class {
  scrapeMotionValuesFromProps(e, o, r) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: o,
      presenceContext: r,
      reducedMotionConfig: n,
      skipAnimations: i,
      blockInitialAnimation: s,
      visualState: a,
    },
    c = {}
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Ee),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        let p = Y.now();
        this.renderScheduledAt < p && ((this.renderScheduledAt = p), D.render(this.render, !1, !0));
      }));
    let { latestValues: l, renderState: u } = a;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = o.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = e),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = n),
      (this.skipAnimationsConfig = i),
      (this.options = c),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ze(o)),
      (this.isVariantNode = Nn(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    let { willChange: f, ...m } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (let p in m) {
      let d = m[p];
      l[p] !== void 0 && $(d) && d.set(l[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (let o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    if (
      ((this.current = e),
      qe.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.isVariantNode && !this.isControllingVariants)
    ) {
      let o = this;
      do o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        let { variantChildren: r } = o;
        (r.add(this), (this.removeFromVariantTree = () => r.delete(this)));
      }
    }
    (this.values.forEach((o, r) => this.bindToMotionValue(r, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Oo.current || Gn(), (this.shouldReduceMotion = Je.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      rt(this.notifyUpdate),
      rt(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (let e in this.events) this.events[e].clear();
    for (let e in this.features) {
      let o = this.features[e];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, o) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      o.accelerate && $e.has(e) && this.current instanceof HTMLElement)
    ) {
      let { factory: s, keyframes: a, times: c, ease: l, duration: u } = o.accelerate,
        f = new Rt({
          element: this.current,
          name: e,
          keyframes: a,
          times: c,
          ease: l,
          duration: X(u),
        }),
        m = s(f);
      this.valueSubscriptions.set(e, () => {
        (m(), f.cancel());
      });
      return;
    }
    let r = st.has(e);
    r && this.onBindTransform && this.onBindTransform();
    let n = o.on("change", (s) => {
        ((this.latestValues[e] = s),
          this.props.onUpdate && D.preRender(this.notifyUpdate),
          r &&
            (this.projection && (this.projection.isTransformDirty = !0),
            oe.get(this.current)?.check()),
          this.scheduleRender());
      }),
      i;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (i = window.MotionCheckAppearSync(this, e, o)),
      this.valueSubscriptions.set(e, () => {
        (n(), i && i());
      }));
  }
  sortNodePosition(e) {
    return !this.current || !e.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in is) {
      let o = is[e];
      if (!o) continue;
      let { isEnabled: r, Feature: n } = o;
      if (
        (!this.features[e] && n && r(this.props) && (this.features[e] = new n(this)),
        this.features[e])
      ) {
        let i = this.features[e];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ot();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, o) {
    this.latestValues[e] = o;
  }
  update(e, o) {
    let { transformTemplate: r, onUpdate: n } = this.props;
    ((e.transformTemplate || r) && this.scheduleRender(),
      ((e.transformTemplate && !r) || (e.onUpdate && !n)) && oe.get(this.current)?.demote(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let i = 0; i < mf.length; i++) {
      let s = mf[i];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      let a = "on" + s,
        c = e[a];
      c && (this.propEventSubscriptions[s] = this.on(s, c));
    }
    ((this.prevMotionValues = wc(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  addValue(e, o) {
    let r = this.values.get(e);
    if (o !== r) {
      (r && this.removeValue(e), this.bindToMotionValue(e, o), this.values.set(e, o));
      let n = o.get();
      n !== void 0 && (this.latestValues[e] = n);
    }
  }
  removeValue(e) {
    this.values.delete(e);
    let o = this.valueSubscriptions.get(e);
    (o && (o(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, o) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = tt(o ?? this.getDefaultValue?.(e), { owner: this })), this.addValue(e, r)),
      r
    );
  }
  readValue(e, o) {
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      r != null &&
        (typeof r == "string" && (no(r) || so(r))
          ? (r = parseFloat(r))
          : typeof r != "number" && !ct.test(r) && ct.test(o) && (r = So(e, o)),
        this.setBaseTarget(e, $(r) ? r.get() : r)),
      $(r) ? r.get() : r
    );
  }
  setBaseTarget(e, o) {
    this.baseTarget[e] = o;
  }
  on(e, o) {
    return (this.events[e] || (this.events[e] = new le()), this.events[e].add(o));
  }
  notify(e, ...o) {
    this.events[e] && this.events[e].notify(...o);
  }
  scheduleRenderMicrotask() {
    Ct.render(this.render);
  }
};
var ko = class extends ve {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Do));
  }
  sortInstanceNodePosition(e, o) {
    return e.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, o) {
    let r = e.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(e, { vars: o, style: r }) {
    (delete o[e], delete r[e]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let { children: e } = this.props;
    $(e) &&
      (this.childSubscription = e.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
};
var vt = class {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
};
function Un(t, { style: e, vars: o }, r, n) {
  let i = t.style,
    s;
  for (s in e) i[s] = e[s];
  n?.applyProjectionStyles(i, r);
  for (s in o) i.setProperty(s, o[s]);
}
var Se = {};
function pf(t) {
  for (let e in t) ((Se[e] = t[e]), uo(e) && (Se[e].isCSSVariable = !0));
}
function zn(t, { layout: e, layoutId: o }) {
  return (
    st.has(t) || t.startsWith("origin") || ((e || o !== void 0) && (!!Se[t] || t === "opacity"))
  );
}
function Bo(t, e, o) {
  let r = t.style,
    n = e?.style,
    i = {};
  if (!r) return i;
  for (let s in r)
    ($(r[s]) || (n && $(n[s])) || zn(s, t) || o?.getValue(s)?.liveStyle !== void 0) &&
      (i[s] = r[s]);
  return i;
}
function Wh(t) {
  return window.getComputedStyle(t);
}
var Fo = class extends ko {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Un));
  }
  mount(e) {
    (J(
      !!e.style,
      "motion.create() components must forward their ref to a HTML or SVG element",
      "custom-component-ref"
    ),
      super.mount(e));
  }
  readValueFromInstance(e, o) {
    if (st.has(o)) return this.projection?.isProjecting ? Ue(o) : hn(e, o);
    {
      let r = Wh(e),
        n = (uo(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof n == "string" ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: o }) {
    return vr(e, o);
  }
  build(e, o, r) {
    Ro(e, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, o, r) {
    return Bo(e, o, r);
  }
};
function Uh(t, e) {
  return t in e;
}
var Vc = class extends ve {
  constructor() {
    (super(...arguments), (this.type = "object"));
  }
  readValueFromInstance(e, o) {
    if (Uh(o, e)) {
      let r = e[o];
      if (typeof r == "string" || typeof r == "number") return r;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, o) {
    delete o.output[e];
  }
  measureInstanceViewportBox() {
    return ot();
  }
  build(e, o) {
    Object.assign(e.output, o);
  }
  renderInstance(e, { output: o }) {
    Object.assign(e, o);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
var Kn = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
var $n = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function bc(t, e, o, r) {
  Un(t, e, void 0, r);
  for (let n in e.attrs) t.setAttribute(Kn.has(n) ? n : $t(n), e.attrs[n]);
}
function Hn(t, e, o) {
  let r = Bo(t, e, o);
  for (let n in t)
    if (n !== "children" && ($(t[n]) || $(e[n]))) {
      let i = Tt.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[i] = t[n];
    }
  return r;
}
var _n = class extends ko {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ot));
  }
  getBaseTargetFromProps(e, o) {
    return st.has(o) ? (super.getBaseTargetFromProps(e, o) ?? Ue(o)) : e[o];
  }
  getDefaultValue(e) {
    return st.has(e) ? (this.latestValues[e] ?? Ue(e)) : void 0;
  }
  readValueFromInstance(e, o) {
    if (st.has(o)) {
      let r = mn(o);
      return (r && r.default) || 0;
    }
    if (Dn.includes(o)) {
      let n = getComputedStyle(e)[o];
      if (typeof n == "string" && n) return n.trim();
    }
    return ((o = Kn.has(o) ? o : $t(o)), e.getAttribute(o));
  }
  scrapeMotionValuesFromProps(e, o, r) {
    return Hn(e, o, r);
  }
  build(e, o, r) {
    Rn(e, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(e, o, r, n) {
    bc(e, o, r, n);
  }
  mount(e) {
    ((this.isSVGTag = $n(e.tagName)), super.mount(e));
  }
};
function Ac(t, e) {
  if (!Array.isArray(e)) return !1;
  let o = e.length;
  if (o !== t.length) return !1;
  for (let r = 0; r < o; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var zh = [...jn].reverse();
function Pc(t) {
  let e = (a) => Promise.all(a.map(({ animation: c, options: l }) => He(t, c, l))),
    o = df(),
    r = !0,
    n = !1;
  function i(a) {
    let { props: c, parent: l, manuallyAnimateOnMount: u } = t,
      f = r || n,
      m = [],
      p = new Set(),
      d = {},
      g = 1 / 0,
      h = t;
    do h = h.props.inherit !== !1 && h.parent;
    while (h && !h.isControllingVariants);
    if (
      (zh.forEach((T, x) => {
        let w = o[T],
          P = c[T],
          N = h && h.props[T],
          y = P !== void 0 ? P : ie(N) || N === !1 ? N : void 0,
          S = ie(y),
          F = T === a ? w.isActive : null;
        F === !1 && (g = x);
        let U = S && P === void 0 && !(f && u);
        if (
          ((w.protectedKeys = { ...d }),
          (!w.isActive && F === null) || (!y && !w.prevProp) || Oe(y) || typeof y == "boolean")
        )
          return;
        if (T === "exit" && w.isActive && F !== !0) {
          d = { ...d, ...w.prevResolvedValues };
          return;
        }
        let b = hf(w.prevProp, y),
          V = b || (S && ((F && !U) || x > g)),
          A = !1,
          M = Array.isArray(y) ? y : [y],
          j = {};
        if (F !== !1)
          for (let C of M) {
            let { transition: E, transitionEnd: R, ...k } = Ft(t, C, Ii(t, T)) || {};
            j = { ...j, ...k, ...R };
          }
        let { prevResolvedValues: L } = w;
        for (let C in { ...L, ...j }) {
          if (C in d) continue;
          let E = j[C],
            R = L[C],
            k = Array.isArray(E) && Array.isArray(R) ? !Ac(E, R) || b : E !== R;
          if (k && E == null) p.add(C);
          else if (k || (E !== void 0 && p.has(C))) {
            ((V = !0), p.delete(C) && (A = !0), (w.needsAnimating[C] = !0));
            let G = t.getValue(C);
            G && (G.liveStyle = !1);
          } else w.protectedKeys[C] = !0;
        }
        if (
          ((w.prevProp = y),
          (w.prevResolvedValues = j),
          w.isActive && (d = { ...d, ...j }),
          V && (!(U && b) || A))
        )
          for (let C of M) {
            let E = { type: T };
            if (typeof C == "string" && f && u && l?.enteringChildren) {
              let R = Ft(l, C)?.transition?.delayChildren;
              E.delay = Tn(l.enteringChildren, t, R);
            }
            m.push({ animation: C, options: E });
          }
      }),
      p.size)
    ) {
      let { initial: T } = c,
        x = {},
        w = typeof T != "boolean" && Ft(t, Array.isArray(T) ? T[0] : T, t.presenceContext?.custom);
      (w && w.transition && (x.transition = w.transition),
        p.forEach((P) => {
          let N = t.getValue(P);
          N && (N.liveStyle = !0);
          let y = w && !Array.isArray(T) ? w[P] : void 0,
            S = t.getBaseTargetFromProps(c, P);
          x[P] =
            (y !== void 0
              ? y
              : S !== void 0 && !$(S)
                ? S
                : t.initialValues[P] === void 0
                  ? t.baseTarget[P]
                  : void 0) ?? null;
        }),
        m.push({ animation: x }));
    }
    let v =
      (f && t.blockInitialAnimation) || (r && !u && (c.initial === !1 || c.initial === c.animate));
    return ((r = n = !1), !v && m.length ? e(m) : Promise.resolve());
  }
  function s(a, c) {
    if (o[a].isActive === c) return Promise.resolve();
    (t.variantChildren?.forEach((u) => u.animationState?.setActive(a, c)), (o[a].isActive = c));
    let l = i(a);
    for (let u in o) o[u].protectedKeys = {};
    return l;
  }
  return {
    animateChanges: i,
    setActive: s,
    setAnimateFunction: (a) => {
      e = a(t);
    },
    getState: () => o,
    reset: () => {
      ((o = df()), (n = !0));
    },
  };
}
function hf(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ac(e, t) : !1;
}
function df() {
  let t = {};
  for (let e of jn)
    t[e] = {
      isActive: e === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  return t;
}
var Kh = Lo.length;
function gf(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    let o = t.parent ? gf(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (o.initial = t.props.initial), o);
  }
  let e = {};
  for (let o = 0; o < Kh; o++) {
    let r = Lo[o],
      n = t.props[r];
    (ie(n) || n === !1) && (e[r] = n);
  }
  return e;
}
function Yn(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function Wt(t, e) {
  (Yn(t.x, e.x), Yn(t.y, e.y));
}
function ss(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
var yf = 1e-4,
  $h = 1 - yf,
  Hh = 1 + yf,
  xf = 0.01,
  _h = 0 - xf,
  Yh = 0 + xf;
function ft(t) {
  return t.max - t.min;
}
function Dc(t, e, o) {
  return Math.abs(t - e) <= o;
}
function Mc(t, e, o, r = 0.5) {
  ((t.origin = r),
    (t.originPoint = K(e.min, e.max, t.origin)),
    (t.scale = ft(o) / ft(e)),
    (t.translate = K(o.min, o.max, t.origin) - t.originPoint),
    ((t.scale >= $h && t.scale <= Hh) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= _h && t.translate <= Yh) || isNaN(t.translate)) && (t.translate = 0));
}
function jo(t, e, o, r) {
  (Mc(t.x, e.x, o.x, r ? r.originX : void 0), Mc(t.y, e.y, o.y, r ? r.originY : void 0));
}
function Cc(t, e, o, r = 0) {
  let n = r ? K(o.min, o.max, r) : o.min;
  ((t.min = n + e.min), (t.max = t.min + ft(e)));
}
function Rc(t, e, o, r) {
  (Cc(t.x, e.x, o.x, r?.x), Cc(t.y, e.y, o.y, r?.y));
}
function Ec(t, e, o, r = 0) {
  let n = r ? K(o.min, o.max, r) : o.min;
  ((t.min = e.min - n), (t.max = t.min + ft(e)));
}
function Tr(t, e, o, r) {
  (Ec(t.x, e.x, o.x, r?.x), Ec(t.y, e.y, o.y, r?.y));
}
function Ic(t, e, o, r, n) {
  return ((t -= e), (t = yr(t, 1 / o, r)), n !== void 0 && (t = yr(t, 1 / n, r)), t);
}
function vf(t, e = 0, o = 1, r = 0.5, n, i = t, s = t) {
  if (
    (Pt.test(e) && ((e = parseFloat(e)), (e = K(s.min, s.max, e / 100) - s.min)),
    typeof e != "number")
  )
    return;
  let a = K(i.min, i.max, r);
  (t === i && (a -= e), (t.min = Ic(t.min, e, o, a, n)), (t.max = Ic(t.max, e, o, a, n)));
}
function Lc(t, e, [o, r, n], i, s) {
  vf(t, e[o], e[r], e[n], e.scale, i, s);
}
var Xh = ["x", "scaleX", "originX"],
  qh = ["y", "scaleY", "originY"];
function as(t, e, o, r) {
  (Lc(t.x, e, Xh, o ? o.x : void 0, r ? r.x : void 0),
    Lc(t.y, e, qh, o ? o.y : void 0, r ? r.y : void 0));
}
function Sf(t) {
  return t.translate === 0 && t.scale === 1;
}
function cs(t) {
  return Sf(t.x) && Sf(t.y);
}
function Oc(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Bc(t, e) {
  return Oc(t.x, e.x) && Oc(t.y, e.y);
}
function kc(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ls(t, e) {
  return kc(t.x, e.x) && kc(t.y, e.y);
}
function us(t) {
  return ft(t.x) / ft(t.y);
}
function fs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function Lt(t) {
  return [t("x"), t("y")];
}
function Fc(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
var No = {
  correct: (t, e) => {
    if (!e.target) return t;
    if (typeof t == "string")
      if (I.test(t)) t = parseFloat(t);
      else return t;
    let o = Fc(t, e.target.x),
      r = Fc(t, e.target.y);
    return `${o}% ${r}%`;
  },
};
var jc = {
  correct: (t, { treeScale: e, projectionDelta: o }) => {
    let r = t,
      n = ct.parse(t);
    if (n.length > 5) return r;
    let i = ct.createTransformer(t),
      s = typeof n[0] != "number" ? 1 : 0,
      a = o.x.scale * e.x,
      c = o.y.scale * e.y;
    ((n[0 + s] /= a), (n[1 + s] /= c));
    let l = K(a, c, 0.5);
    return (
      typeof n[2 + s] == "number" && (n[2 + s] /= l),
      typeof n[3 + s] == "number" && (n[3 + s] /= l),
      i(n)
    );
  },
};
function Nc(t, e, o) {
  let r = "",
    n = t.x.translate / e.x,
    i = t.y.translate / e.y,
    s = o?.z || 0;
  if (
    ((n || i || s) && (r = `translate3d(${n}px, ${i}px, ${s}px) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    o)
  ) {
    let {
      transformPerspective: l,
      rotate: u,
      pathRotation: f,
      rotateX: m,
      rotateY: p,
      skewX: d,
      skewY: g,
    } = o;
    (l && (r = `perspective(${l}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotate(${f}deg) `),
      m && (r += `rotateX(${m}deg) `),
      p && (r += `rotateY(${p}deg) `),
      d && (r += `skewX(${d}deg) `),
      g && (r += `skewY(${g}deg) `));
  }
  let a = t.x.scale * e.x,
    c = t.y.scale * e.y;
  return ((a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none");
}
var Zh = xe.length,
  wf = (t) => typeof t == "number" || I.test(t);
function Gc(t, e, o, r, n, i) {
  n
    ? ((t.opacity = K(0, o.opacity ?? 1, Jh(r))), (t.opacityExit = K(e.opacity ?? 1, 0, Qh(r))))
    : i && (t.opacity = K(e.opacity ?? 1, o.opacity ?? 1, r));
  for (let s = 0; s < Zh; s++) {
    let a = xe[s],
      c = Tf(e, a),
      l = Tf(o, a);
    if (c === void 0 && l === void 0) continue;
    (c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || wf(c) === wf(l)
        ? ((t[a] = Math.max(K(_e(c), _e(l), r), 0)), (Pt.test(l) || Pt.test(c)) && (t[a] += "%"))
        : (t[a] = l));
  }
  (e.rotate || o.rotate) && (t.rotate = K(e.rotate || 0, o.rotate || 0, r));
}
function Tf(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
var Jh = Vf(0, 0.5, Yr),
  Qh = Vf(0.5, 0.95, Q);
function Vf(t, e, o) {
  return (r) => (r < t ? 0 : r > e ? 1 : o(gt(t, e, r)));
}
function Xn(t, e, o) {
  let r = $(t) ? t : tt(t);
  return (r.start(ne("", r, e, o)), r.animation);
}
function Yt(t, e, o, r = { passive: !0 }) {
  return (t.addEventListener(e, o, r), () => t.removeEventListener(e, o, r));
}
var Wc = (t, e) => t.depth - e.depth;
var qn = class {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (ro(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (At(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Wc), (this.isDirty = !1), this.children.forEach(e));
  }
};
function Zn(t, e) {
  let o = Y.now(),
    r = ({ timestamp: n }) => {
      let i = n - o;
      i >= e && (rt(r), t(i - e));
    };
  return (D.setup(r, !0), () => rt(r));
}
function tg(t, e) {
  return Zn(t, X(e));
}
function Qe(t) {
  return $(t) ? t.get() : t;
}
var Jn = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    ro(this.members, e);
    for (let o = this.members.length - 1; o >= 0; o--) {
      let r = this.members[o];
      if (r === e || r === this.lead || r === this.prevLead) continue;
      let n = r.instance;
      (!n || n.isConnected === !1) && !r.snapshot && (At(this.members, r), r.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((At(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      let o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(e) {
    for (let o = this.members.indexOf(e) - 1; o >= 0; o--) {
      let r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1) return (this.promote(r), !0);
    }
    return !1;
  }
  promote(e, o) {
    let r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      (r.updateSnapshot(), e.scheduleRender());
      let { layoutDependency: n } = r.options,
        { layoutDependency: i } = e.options;
      ((n === void 0 || n !== i) &&
        ((e.resumeFrom = r),
        o && (r.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
};
var bf = {
  borderRadius: { ...No, applyTo: [...xe] },
  borderTopLeftRadius: No,
  borderTopRightRadius: No,
  borderBottomLeftRadius: No,
  borderBottomRightRadius: No,
  boxShadow: jc,
};
var Go = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
Object.assign(Se, { ...bf, ...Se });
var Wo = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  Uc = ["", "X", "Y", "Z"],
  eg = 1e3,
  og = 0;
function zc(t, e, o, r) {
  let { latestValues: n } = e;
  n[t] && ((o[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
}
var Kc = ({ instance: t }) => t && oe.get(t)?.demote();
function Lf(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  let { visualElement: e } = t.options;
  if (!e) return;
  let o = Eo(e);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    let { layout: n, layoutId: i } = t.options;
    window.MotionCancelOptimisedAnimation(o, "transform", D, !(n || i));
  }
  let { parent: r } = t;
  r && !r.hasCheckedOptimisedAppear && Lf(r);
}
function Qn({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: n,
}) {
  return class {
    constructor(s = {}, a = e?.()) {
      ((this.id = og++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Gt.value && (Wo.nodes = Wo.calculatedTargetDeltas = Wo.calculatedProjections = 0),
            this.nodes.forEach(Of),
            this.nodes.forEach(fg),
            this.nodes.forEach(mg),
            this.nodes.forEach(kf),
            Gt.addProjectionMetrics && Gt.addProjectionMetrics(Wo));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qn());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new le()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let c = this.eventHandlers.get(s);
      c && c.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = jt(s) && !dc(s)), (this.instance = s));
      let { layoutId: a, layout: c, visualElement: l } = this.options;
      if (
        (l && !l.current && l.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u,
          f = 0,
          m = () => (this.root.updateBlockedByResize = !1);
        (D.read(() => {
          f = window.innerWidth;
        }),
          t(s, () => {
            let p = window.innerWidth;
            p !== f &&
              ((f = p),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = Zn(m, 250)),
              Go.hasAnimatedSinceResize &&
                ((Go.hasAnimatedSinceResize = !1), this.nodes.forEach(Mf)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          l &&
          (a || c) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: m, layout: p }) => {
              if (this.isAnimationBlocked) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let d = this.options.transition || l.getDefaultTransition() || yg,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: h } = l.getProps(),
                v = !this.targetLayout || !ls(this.targetLayout, p),
                T = !f && m;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                T ||
                (f && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let x = { ...Mt(d, "layout"), onPlay: g, onComplete: h };
                ((l.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(u, T, x.path));
              } else
                (f || Mf(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = p;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        rt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(pg), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lf(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      (Kc(this), (this.isLayoutDirty = !0));
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        ((f.shouldResetTransform = !0),
          Kc(f),
          (typeof f.latestValues.x == "string" || typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1),
          f.isAnimationBlocked &&
            (f.dragSnapshot || (f.dragSnapshot = f.measure()), (this.dragAncestor = f)));
      }
      let { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      let l = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let c = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          c && this.nodes.forEach(sg),
          this.nodes.forEach(Af));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Pf);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(cg),
            this.nodes.forEach(lg),
            this.nodes.forEach(ug),
            this.nodes.forEach(rg),
            this.nodes.forEach(ng))
          : this.nodes.forEach(Pf),
        this.clearAllSnapshots());
      let a = Y.now();
      ((H.delta = et(0, 1e3 / 60, a - H.timestamp)),
        (H.timestamp = a),
        (H.isProcessing = !0),
        Ce.update.process(H),
        Ce.preRender.process(H),
        Ce.render.process(H),
        (H.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ct.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ig), this.sharedNodes.forEach(dg));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), D.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      D.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ft(this.snapshot.measuredBox.x) &&
          !ft(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      let s = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutCorrected || (this.layoutCorrected = ot()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      let { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        let c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c,
        };
      }
    }
    resetTransform() {
      if (!n) return;
      let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      s && Kc(this);
      let a = this.projectionDelta && !cs(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, "") : void 0,
        u = l !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || _t(this.latestValues) || u) &&
        (n(this.instance, l), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        c = this.removeElementScroll(a);
      return (
        s && (c = this.removeTransform(c)),
        xg(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return ot();
      let a = s.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(vg))) {
        let { scroll: l } = this.root;
        l && (It(a.x, l.offset.x), It(a.y, l.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      let a = ot();
      if ((Wt(a, s), this.scroll?.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        let l = this.path[c],
          { scroll: u, options: f } = l;
        l !== this.root &&
          u &&
          f.layoutScroll &&
          (u.wasRoot && Wt(a, s), It(a.x, u.offset.x), It(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, c) {
      let l = c || ot();
      Wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (!a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          (It(l.x, -f.scroll.offset.x), It(l.y, -f.scroll.offset.y)),
          _t(f.latestValues) && xr(l, f.latestValues, f.layout?.layoutBox));
      }
      return (_t(this.latestValues) && xr(l, this.latestValues, this.layout?.layoutBox), l);
    }
    removeTransform(s) {
      let a = ot();
      Wt(a, s);
      for (let c = 0; c < this.path.length; c++) {
        let l = this.path[c];
        if (!_t(l.latestValues)) continue;
        let u;
        (l.instance &&
          (On(l.latestValues) && l.updateSnapshot(), (u = ot()), Wt(u, l.measurePageBox())),
          as(a, l.latestValues, l.snapshot?.layoutBox, u));
      }
      return (_t(this.latestValues) && as(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== H.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      let a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      let c = !!this.resumingFrom || this !== a;
      if (!(
        s ||
        (c && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: u, layoutId: f } = this.options;
      if (!this.layout || !(u || f)) return;
      this.resolvedRelativeTargetAt = H.timestamp;
      let m = this.getClosestProjectingParent();
      (!this.targetDelta &&
        !this.relativeTarget &&
        (this.options.layoutAnchor !== !1 && m && m.layout
          ? this.createRelativeTarget(m, this.layout.layoutBox, m.layout.layoutBox)
          : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = ot()), (this.targetWithTransforms = ot())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Rc(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Wt(this.target, this.layout.layoutBox),
                Ki(this.target, this.targetDelta))
              : Wt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(m, this.target, m.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          Gt.value && Wo.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || On(this.parent.latestValues) || Ui(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, c) {
      ((this.relativeParent = s),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = ot()),
        (this.relativeTargetOrigin = ot()),
        Tr(this.relativeTargetOrigin, a, c, this.options.layoutAnchor || void 0),
        Wt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let s = this.getLead(),
        a = !!this.resumingFrom || this !== s,
        c = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
        this.resolvedRelativeTargetAt === H.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: l, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(l || u))
      )
        return;
      Wt(this.layoutCorrected, this.layout.layoutBox);
      let f = this.treeScale.x,
        m = this.treeScale.y;
      (oc(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = ot())));
      let { target: p } = s;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ss(this.prevProjectionDelta.x, this.projectionDelta.x),
          ss(this.prevProjectionDelta.y, this.projectionDelta.y)),
        jo(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== m ||
          !fs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !fs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        Gt.value && Wo.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.visualElement?.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Xe()),
        (this.projectionDelta = Xe()),
        (this.projectionDeltaWithTransform = Xe()));
    }
    setAnimationOrigin(s, a = !1, c) {
      let l = this.snapshot,
        u = l ? l.latestValues : {},
        f = { ...this.latestValues },
        m = Xe();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      let p = ot(),
        d = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        h = d !== g,
        v = this.getStack(),
        T = !v || v.members.length <= 1,
        x = !!(h && !T && this.options.crossfade === !0 && !this.path.some(gg));
      this.animationProgress = 0;
      let w,
        P = c?.interpolateProjection(s);
      ((this.mixTargetDelta = (N) => {
        let y = N / 1e3,
          S = P?.(y);
        (S
          ? ((m.x.translate = S.x),
            (m.x.scale = K(s.x.scale, 1, y)),
            (m.x.origin = s.x.origin),
            (m.x.originPoint = s.x.originPoint),
            (m.y.translate = S.y),
            (m.y.scale = K(s.y.scale, 1, y)),
            (m.y.origin = s.y.origin),
            (m.y.originPoint = s.y.originPoint))
          : (Cf(m.x, s.x, y), Cf(m.y, s.y, y)),
          this.setTargetDelta(m),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Tr(
              p,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            hg(this.relativeTarget, this.relativeTargetOrigin, p, y),
            w && Bc(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = ot()),
            Wt(w, this.relativeTarget)),
          h && ((this.animationValues = f), Gc(f, u, this.latestValues, y, x, T)),
          S &&
            S.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = f),
            (this.animationValues.pathRotation = S.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = y));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (rt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = D.update(() => {
          ((Go.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = tt(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Xn(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            iu(this.currentAnimation, this),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(eg), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, layout: c, latestValues: l } = s,
        { target: u } = s;
      if (!(!a || !u || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Bf(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || ot();
          let f = ft(this.layout.layoutBox.x);
          ((u.x.min = s.target.x.min), (u.x.max = u.x.min + f));
          let m = ft(this.layout.layoutBox.y);
          ((u.y.min = s.target.y.min), (u.y.max = u.y.min + m));
        }
        (Wt(a, u), xr(a, l), jo(this.projectionDeltaWithTransform, this.layoutCorrected, a, l));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new Jn()),
        this.sharedNodes.get(s).add(a));
      let l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      let { layoutId: s } = this.options;
      return s ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      let { layoutId: s } = this.options;
      return s ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: c } = {}) {
      let l = this.getStack();
      (l && l.promote(this, c),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: c } = s;
      if (
        ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0),
        !a)
      )
        return;
      let l = {};
      c.z && zc("z", s, l, this.animationValues);
      for (let u = 0; u < Uc.length; u++)
        (zc(`rotate${Uc[u]}`, s, l, this.animationValues),
          zc(`skew${Uc[u]}`, s, l, this.animationValues));
      s.render();
      for (let u in l)
        (s.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      let c = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = Qe(a?.pointerEvents) || ""),
          (s.transform = c ? c(this.latestValues, "") : "none"));
        return;
      }
      let l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        (this.options.layoutId &&
          ((s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (s.pointerEvents = Qe(a?.pointerEvents) || "")),
          this.hasProjected &&
            !_t(this.latestValues) &&
            ((s.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      s.visibility = "";
      let u = l.animationValues || l.latestValues;
      this.applyTransformsToTarget();
      let f = Nc(this.projectionDeltaWithTransform, this.treeScale, u);
      (c && (f = c(u, f)), (s.transform = f));
      let { x: m, y: p } = this.projectionDelta;
      ((s.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`),
        l.animationValues
          ? (s.opacity =
              l === this
                ? (u.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (s.opacity =
              l === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0));
      for (let d in Se) {
        if (u[d] === void 0) continue;
        let { correct: g, applyTo: h, isCSSVariable: v } = Se[d],
          T = f === "none" ? u[d] : g(u[d], l);
        if (h) {
          let x = h.length;
          for (let w = 0; w < x; w++) s[h[w]] = T;
        } else v ? (this.options.visualElement.renderState.vars[d] = T) : (s[d] = T);
      }
      this.options.layoutId && (s.pointerEvents = l === this ? Qe(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => s.currentAnimation?.stop()),
        this.root.nodes.forEach(Af),
        this.root.sharedNodes.clear());
    }
  };
}
function rg(t) {
  (t.updateLayout(), ag(t));
}
function ng(t) {
  let e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    let { layoutBox: o, measuredBox: r } = t.layout,
      { animationType: n } = t.options,
      i = e.source !== t.layout.source;
    if (n === "size")
      Lt((u) => {
        let f = i ? e.measuredBox[u] : e.layoutBox[u],
          m = ft(f);
        ((f.min = o[u].min), (f.max = f.min + m));
      });
    else if (n === "x" || n === "y") {
      let u = n === "x" ? "y" : "x";
      Yn(i ? e.measuredBox[u] : e.layoutBox[u], o[u]);
    } else
      Bf(n, e.layoutBox, o) &&
        Lt((u) => {
          let f = i ? e.measuredBox[u] : e.layoutBox[u],
            m = ft(o[u]);
          ((f.max = f.min + m),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[u].max = t.relativeTarget[u].min + m)));
        });
    let s = Xe();
    jo(s, o, e.layoutBox);
    let a = Xe();
    i ? jo(a, t.applyTransform(r, !0), e.measuredBox) : jo(a, o, e.layoutBox);
    let c = !cs(s),
      l = !1;
    if (!t.resumeFrom) {
      let u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        let { snapshot: f, layout: m } = u;
        if (f && m) {
          let p = t.options.layoutAnchor || void 0,
            d = ot();
          Tr(d, e.layoutBox, f.layoutBox, p);
          let g = ot();
          (Tr(g, o, m.layoutBox, p),
            ls(d, g) || (l = !0),
            u.options.layoutRoot &&
              ((t.relativeTarget = g), (t.relativeTargetOrigin = d), (t.relativeParent = u)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: o,
      snapshot: e,
      delta: a,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (t.isLead()) {
    let { onExitComplete: o } = t.options;
    o && o();
  }
  t.options.transition = void 0;
}
function Of(t) {
  (Gt.value && Wo.nodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty)));
}
function kf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ig(t) {
  t.clearSnapshot();
}
function Af(t) {
  t.clearMeasurements();
}
function sg(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Pf(t) {
  t.isLayoutDirty = !1;
}
function ag(t) {
  let { snapshot: e, dragAncestor: o } = t,
    r = o?.layout;
  if (!e || !r || t.resumeFrom || t.isAnimationBlocked) return;
  let n = o.dragSnapshot;
  Lt((i) => It(e.layoutBox[i], r.layoutBox[i].min - n.layoutBox[i].min));
}
function cg(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.dragSnapshot || t.layout), (t.isLayoutDirty = !0));
}
function lg(t) {
  t.relativeTarget &&
    t.relativeParent?.isLayoutDirty &&
    (t.currentAnimation
      ? (t.isLayoutDirty = !0)
      : ((t.targetDelta = void 0), t.removeRelativeTarget()));
}
function ug(t) {
  let { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
}
function Mf(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function fg(t) {
  t.resolveTargetDelta();
}
function mg(t) {
  t.calcProjection();
}
function pg(t) {
  t.resetSkewAndRotation();
}
function dg(t) {
  t.removeLeadSnapshot();
}
function Cf(t, e, o) {
  ((t.translate = K(e.translate, 0, o)),
    (t.scale = K(e.scale, 1, o)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Ef(t, e, o, r) {
  ((t.min = K(e.min, o.min, r)), (t.max = K(e.max, o.max, r)));
}
function hg(t, e, o, r) {
  (Ef(t.x, e.x, o.x, r), Ef(t.y, e.y, o.y, r));
}
function gg(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
var yg = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Df = (t) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Rf = Df("applewebkit/") && !Df("chrome/") ? Math.round : Q;
function If(t) {
  ((t.min = Rf(t.min)), (t.max = Rf(t.max)));
}
function xg(t) {
  (If(t.x), If(t.y));
}
function Bf(t, e, o) {
  return t === "position" || (t === "preserve-aspect" && !Dc(us(e), us(o), 0.2));
}
function vg(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
var $c = Qn({
  attachResizeListener: (t, e) => Yt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
  }),
  checkIsScrollRoot: () => !0,
});
var Sg = (t) => !t.isLayoutDirty && t.willUpdate(!1);
function ms() {
  let t = new Set(),
    e = new WeakMap(),
    o = () => t.forEach(Sg);
  return {
    add: (r) => {
      (t.add(r), e.set(r, r.addEventListener("willUpdate", o)));
    },
    remove: (r) => {
      t.delete(r);
      let n = e.get(r);
      (n && (n(), e.delete(r)), o());
    },
    dirty: o,
  };
}
var we = { current: void 0 },
  Uo = Qn({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!we.current) {
        let t = new $c({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (we.current = t));
      }
      return we.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  });
var Ff = "[data-layout],[data-layout-id]",
  ps = new WeakMap(),
  ti;
function jf(t) {
  let e = [];
  return (
    t instanceof HTMLElement && t.matches(Ff) && e.push(t),
    t.querySelectorAll(Ff).forEach((o) => {
      o instanceof HTMLElement && e.push(o);
    }),
    e
  );
}
function wg() {
  if (H.isProcessing) return;
  let t = Y.now();
  ((H.delta = et(0, 1e3 / 60, t - H.timestamp)),
    (H.timestamp = t),
    (H.isProcessing = !0),
    Ce.update.process(H),
    Ce.preRender.process(H),
    Ce.render.process(H),
    (H.isProcessing = !1));
}
function Tg(t) {
  let e = t.parentElement;
  for (; e;) {
    let o = ps.get(e);
    if (o && o.instance) return o;
    e = e.parentElement;
  }
}
function Vg() {
  return new Fo(
    {
      props: {},
      presenceContext: null,
      visualState: {
        latestValues: {},
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {} },
      },
    },
    { allowProjection: !0 }
  );
}
function Nf(t, e) {
  let o = t.getAttribute("data-layout");
  return {
    layoutId: t.getAttribute("data-layout-id") ?? void 0,
    layout: o !== null ? !0 : void 0,
    animationType: !o || o === "true" ? "both" : o,
    transition: e,
  };
}
function Wf(t, e) {
  let o = ps.get(t);
  if (o) o.setOptions(Nf(t, e));
  else {
    let r = qe.get(t);
    (r || ((r = Vg()), sc(t, r)),
      t.style.transform && !_t(r.latestValues) && (t.style.transform = ""),
      (o = new Uo(r.latestValues, Tg(t))),
      (r.projection = o),
      o.setOptions({ ...Nf(t, e), visualElement: r }),
      o.mount(t),
      ps.set(t, o));
  }
  return (
    (o.isPresent = !0),
    o.options.onExitComplete && o.setOptions({ onExitComplete: void 0 }),
    o
  );
}
function bg(t) {
  return [...t].sort((e, o) =>
    e.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  );
}
function Gf(t, e) {
  (e.setOptions({ onExitComplete: void 0 }),
    (!e.getStack() || e.isLead()) && e.currentAnimation?.stop(),
    e.unmount(),
    ps.delete(t));
}
function Ag() {
  let t = ti;
  ((ti = void 0), wg());
  let e = new Map();
  for (let i of t)
    for (let s of i.collectTargets()) {
      let a = e.get(s);
      a ? a.push(i) : e.set(s, [i]);
    }
  let o = new Map();
  for (let i of bg(e.keys())) {
    let s = e.get(i),
      a = Wf(i, s[s.length - 1].transitionFor(i));
    for (let c of s) c.adopt(i, a);
    o.set(i, a);
  }
  o.forEach((i) => {
    ((i.isLayoutDirty = !1), i.willUpdate());
  });
  let r = [];
  for (let i of t) {
    let s = i.runUpdate();
    s && r.push(s);
  }
  let n = () => {
    let i = new Set();
    for (let a of t) a.reconcileAdditions(i);
    for (let a of t) a.reconcileRemovals(i);
    let s;
    o.forEach((a) => s || (s = a.root));
    for (let a of t) s || (s = a.getRoot());
    (s?.didUpdate(),
      Ct.render(() => {
        for (let a of t) a.finalize();
      }));
  };
  r.length ? Promise.all(r).then(n) : n();
}
var ei = class {
  constructor(e, o, r) {
    ((this.scope = e),
      (this.updateDom = o),
      (this.defaultOptions = r),
      (this.sharedTransitions = new Map()),
      (this.notifyReady = () => {}),
      (this.rejectReady = () => {}),
      (this.tracked = new Map()),
      (this.restorePoints = new Map()),
      (this.readyPromise = new Promise((n, i) => {
        ((this.notifyReady = n), (this.rejectReady = i));
      })),
      ti || ((ti = []), queueMicrotask(Ag)),
      ti.push(this));
  }
  shared(e, o) {
    return (this.sharedTransitions.set(e, o), this);
  }
  then(e, o) {
    return this.readyPromise.then(e, o);
  }
  transitionFor(e) {
    let o = e.getAttribute("data-layout-id");
    return (o && this.sharedTransitions.get(o)) || this.defaultOptions;
  }
  adopt(e, o) {
    (this.tracked.set(e, o),
      this.restorePoints.set(e, { parent: e.parentElement, next: e.nextSibling }));
  }
  collectTargets() {
    return jf(this.scope);
  }
  runUpdate() {
    try {
      let e = this.updateDom();
      if (e && typeof e.then == "function")
        return e.then(void 0, (o) => {
          this.updateError = o;
        });
    } catch (e) {
      this.updateError = e;
    }
  }
  reconcileAdditions(e) {
    for (let o of jf(this.scope)) {
      if (this.tracked.has(o)) continue;
      let r = Wf(o, this.transitionFor(o));
      (this.adopt(o, r), r.options.layoutId && e.add(r.options.layoutId));
    }
  }
  reconcileRemovals(e) {
    this.tracked.forEach((o, r) => {
      if (r.isConnected) return;
      let n = this.restorePoints.get(r);
      this.restorePoints.delete(r);
      let { layoutId: i } = o.options,
        s = o.getStack(),
        a = s && s.members.some((c) => c !== o && c.instance?.isConnected);
      if (i && o.isLead() && a && !e.has(i) && n && n.parent.isConnected) {
        if (
          (n.parent.insertBefore(r, n.next && n.next.parentNode === n.parent ? n.next : null),
          (o.isPresent = !1),
          o.setOptions({
            onExitComplete: () => {
              (r.remove(), Gf(r, o));
            },
          }),
          o.relegate())
        )
          return;
        r.remove();
      }
      (Gf(r, o), this.tracked.delete(r));
    });
  }
  getRoot() {
    let e;
    return (this.tracked.forEach((o) => e || (e = o.root)), e);
  }
  finalize() {
    if (this.updateError) {
      this.rejectReady(this.updateError);
      return;
    }
    let e = new Set();
    (this.tracked.forEach((o) => {
      o.instance && o.currentAnimation && e.add(o.currentAnimation);
    }),
      this.notifyReady(new re([...e])));
  }
};
function Hc(t, e, o) {
  return typeof t == "function"
    ? { scope: document, updateDom: t, defaultOptions: e }
    : {
        scope: t instanceof Document ? t : (xt(t)[0] ?? document),
        updateDom: e,
        defaultOptions: o,
      };
}
function Pg(t, e, o) {
  let { scope: r, updateDom: n, defaultOptions: i } = Hc(t, e, o);
  return new ei(r, n, i);
}
var Mg = D,
  Cg = go.reduce((t, e) => ((t[e] = (o) => rt(o)), t), {});
var zf = B(W(), 1);
var Uf = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Vr(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(Uf.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
var br = (t, e) =>
  (e.isSVG ?? Vr(t)) ? new _n(e) : new Fo(e, { allowProjection: t !== zf.Fragment });
var xs = B(ce(), 1);
var Dr = B(W(), 1);
var Kf = B(W(), 1),
  Te = (0, Kf.createContext)({});
var $f = B(W(), 1),
  Ar = (0, $f.createContext)({ strict: !1 });
var Hf = B(W(), 1),
  dt = (0, Hf.createContext)({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
var _f = B(W(), 1),
  se = (0, _f.createContext)({});
var ds = B(W(), 1);
function Yf(t, e) {
  if (Ze(t)) {
    let { initial: o, animate: r } = t;
    return { initial: o === !1 || ie(o) ? o : void 0, animate: ie(r) ? r : void 0 };
  }
  return t.inherit !== !1 ? e : {};
}
function qf(t) {
  let { initial: e, animate: o } = Yf(t, (0, ds.useContext)(se));
  return (0, ds.useMemo)(() => ({ initial: e, animate: o }), [Xf(e), Xf(o)]);
}
function Xf(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
var Cr = B(W(), 1);
var Zf = B(W(), 1);
var Pr = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function _c(t, e, o) {
  for (let r in e) !$(e[r]) && !zn(r, o) && (t[r] = e[r]);
}
function Eg({ transformTemplate: t }, e) {
  return (0, Zf.useMemo)(() => {
    let o = Pr();
    return (Ro(o, e, t), Object.assign({}, o.vars, o.style));
  }, [e]);
}
function Dg(t, e) {
  let o = t.style || {},
    r = {};
  return (_c(r, o, t), Object.assign(r, Eg(t, e)), r);
}
function Jf(t, e) {
  let o = {},
    r = Dg(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
var Qf = B(W(), 1);
var hs = () => ({ ...Pr(), attrs: {} });
function tm(t, e, o, r) {
  let n = (0, Qf.useMemo)(() => {
    let i = hs();
    return (Rn(i, e, $n(r), t.transformTemplate, t.style), { ...i.attrs, style: { ...i.style } });
  }, [e]);
  if (t.style) {
    let i = {};
    (_c(i, t.style, t), (n.style = { ...i, ...n.style }));
  }
  return n;
}
var Rg = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Mr(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Rg.has(t)
  );
}
function Ig(t, e) {
  return t.startsWith("on") ? !Mr(t) : (e?.(t) ?? !Mr(t));
}
function Yc(t, e, o, r) {
  let n = {};
  for (let i in t)
    (i === "values" && typeof t.values == "object") ||
      $(t[i]) ||
      ((Ig(i, r) ||
        (o === !0 && Mr(i)) ||
        (!e && !Mr(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (n[i] = t[i]));
  return n;
}
function em(t, e, o, { latestValues: r }, n, i = !1, s, a) {
  let l = ((s ?? Vr(t)) ? tm : Jf)(e, r, n, t),
    u = Yc(e, typeof t == "string", i, a),
    f = t !== Cr.Fragment ? { ...u, ...l, ref: o } : {},
    { children: m } = e,
    p = (0, Cr.useMemo)(() => ($(m) ? m.get() : m), [m]);
  return (0, Cr.createElement)(t, { ...f, children: p });
}
var Xc = B(W(), 1);
var om = B(W(), 1),
  Xt = (0, om.createContext)(null);
var rm = B(W(), 1);
function Z(t) {
  let e = (0, rm.useRef)(null);
  return (e.current === null && (e.current = t()), e.current);
}
function Lg({ scrapeMotionValuesFromProps: t, createRenderState: e }, o, r, n) {
  return { latestValues: Og(o, r, n, t), renderState: e() };
}
function Og(t, e, o, r) {
  let n = {},
    i = r(t, {});
  for (let m in i) n[m] = Qe(i[m]);
  let { initial: s, animate: a } = t,
    c = Ze(t),
    l = Nn(t);
  e &&
    l &&
    !c &&
    t.inherit !== !1 &&
    (s === void 0 && (s = e.initial), a === void 0 && (a = e.animate));
  let u = o ? o.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  if (f && typeof f != "boolean" && !Oe(f)) {
    let m = Array.isArray(f) ? f : [f];
    for (let p = 0; p < m.length; p++) {
      let d = Vn(t, m[p]);
      if (d) {
        let { transitionEnd: g, transition: h, ...v } = d;
        for (let T in v) {
          let x = v[T];
          if (Array.isArray(x)) {
            let w = u ? x.length - 1 : 0;
            x = x[w];
          }
          x !== null && (n[T] = x);
        }
        for (let T in g) n[T] = g[T];
      }
    }
  }
  return n;
}
var zo = (t) => (e, o) => {
  let r = (0, Xc.useContext)(se),
    n = (0, Xc.useContext)(Xt),
    i = () => Lg(t, e, r, n);
  return o ? i() : Z(i);
};
var nm = zo({ scrapeMotionValuesFromProps: Bo, createRenderState: Pr });
var im = zo({ scrapeMotionValuesFromProps: Hn, createRenderState: hs });
var sm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  am = !1;
function kg() {
  if (am) return;
  let t = {};
  for (let e in sm) t[e] = { isEnabled: (o) => sm[e].some((r) => !!o[r]) };
  (Wn(t), (am = !0));
}
function gs() {
  return (kg(), Tc());
}
function oi(t) {
  let e = gs();
  for (let o in t) e[o] = { ...e[o], ...t[o] };
  Wn(e);
}
var Er = Symbol.for("motionComponentSymbol");
var Ko = B(W(), 1);
function cm(t, e, o) {
  let r = (0, Ko.useRef)(o);
  (0, Ko.useInsertionEffect)(() => {
    r.current = o;
  });
  let n = (0, Ko.useRef)(null);
  return (0, Ko.useCallback)(
    (i) => {
      (i && t.onMount?.(i), e && (i ? e.mount(i) : e.unmount()));
      let s = r.current;
      if (typeof s == "function")
        if (i) {
          let a = s(i);
          typeof a == "function" && (n.current = a);
        } else n.current ? (n.current(), (n.current = null)) : s(i);
      else s && (s.current = i);
    },
    [e]
  );
}
var Et = B(W(), 1);
var lm = B(W(), 1),
  ri = (0, lm.createContext)({});
function to(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
var ys = B(W(), 1);
var qc = typeof window < "u";
var bt = qc ? ys.useLayoutEffect : ys.useEffect;
function um(t, e, o, r, n, i) {
  let { visualElement: s } = (0, Et.useContext)(se),
    a = (0, Et.useContext)(Ar),
    c = (0, Et.useContext)(Xt),
    l = (0, Et.useContext)(dt),
    u = l.reducedMotion,
    f = l.skipAnimations,
    m = (0, Et.useRef)(null),
    p = (0, Et.useRef)(!1);
  ((r = r || a.renderer),
    !m.current &&
      r &&
      ((m.current = r(t, {
        visualState: e,
        parent: s,
        props: o,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: f,
        isSVG: i,
      })),
      p.current && m.current && (m.current.manuallyAnimateOnMount = !0)));
  let d = m.current,
    g = (0, Et.useContext)(ri);
  d && !d.projection && n && (d.type === "html" || d.type === "svg") && Bg(m.current, o, n, g);
  let h = (0, Et.useRef)(!1);
  (0, Et.useInsertionEffect)(() => {
    d && h.current && d.update(o, c);
  });
  let v = o[hr],
    T = (0, Et.useRef)(
      !!v &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(v) &&
        window.MotionHasOptimisedAnimation?.(v)
    );
  return (
    bt(() => {
      !p.current || !d || (d.animationState?.animateChanges(), (d.enteringChildren = void 0));
    }, []),
    bt(() => {
      ((p.current = !0),
        d &&
          ((h.current = !0),
          (window.MotionIsMounted = !0),
          d.updateFeatures(),
          d.scheduleRenderMicrotask(),
          T.current && d.animationState && d.animationState.animateChanges()));
    }),
    (0, Et.useEffect)(() => {
      d &&
        (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(v);
          }),
          (T.current = !1)),
        (d.enteringChildren = void 0));
    }),
    d
  );
}
function Bg(t, e, o, r) {
  let {
    layoutId: n,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: f,
  } = e;
  ((t.projection = new o(t.latestValues, e["data-framer-portal-id"] ? void 0 : fm(t.parent))),
    t.projection.setOptions({
      layoutId: n,
      layout: i,
      alwaysMeasureLayout: !!s || (a && to(a)),
      visualElement: t,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function fm(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : fm(t.parent);
}
function vs(t, { forwardMotionProps: e = !1, type: o } = {}, r, n) {
  r && oi(r);
  let i = o ? o === "svg" : Vr(t),
    s = i ? im : nm;
  function a(l, u) {
    let f,
      m = { ...(0, Dr.useContext)(dt), ...l, layoutId: Fg(l) },
      { isStatic: p, isValidProp: d } = m,
      g = qf(l),
      h = s(l, p);
    if (!p && typeof window < "u") {
      jg(m, r);
      let v = Ng(m);
      ((f = v.MeasureLayout), (g.visualElement = um(t, h, m, n, v.ProjectionNode, i)));
    }
    return (0, xs.jsxs)(se.Provider, {
      value: g,
      children: [
        f && g.visualElement ? (0, xs.jsx)(f, { visualElement: g.visualElement, ...m }) : null,
        em(t, l, cm(h, g.visualElement, u), h, p, e, i, d),
      ],
    });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  let c = (0, Dr.forwardRef)(a);
  return ((c[Er] = t), c);
}
function Fg({ layoutId: t }) {
  let e = (0, Dr.useContext)(Te).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function jg(t, e) {
  let o = (0, Dr.useContext)(Ar).strict;
}
function Ng(t) {
  let e = gs(),
    { drag: o, layout: r } = e;
  if (!o && !r) return {};
  let n = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(t) || r?.isEnabled(t) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode,
  };
}
function Ss(t, e) {
  if (typeof Proxy > "u") return vs;
  let o = new Map(),
    r = (i, s) => vs(i, s, t, e),
    n = (i, s) => r(i, s);
  return new Proxy(n, {
    get: (i, s) => (s === "create" ? r : (o.has(s) || o.set(s, vs(s, void 0, t, e)), o.get(s))),
  });
}
var ws = class extends vt {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = Pc(e)));
  }
  updateAnimationControlsSubscription() {
    let { animate: e } = this.node.getProps();
    Oe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: e } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    e !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
};
var Gg = 0,
  Ts = class extends vt {
    constructor() {
      (super(...arguments), (this.id = Gg++));
    }
    update() {
      let { presenceContext: e, prevPresenceContext: o, animationState: r } = this.node;
      if (!e || !r) return;
      let { isPresent: n, onExitComplete: i } = e,
        s = o?.isPresent;
      if (n === s) return;
      if (n && s === !1) {
        if (this.exit === !0) {
          let { initial: c } = this.node.getProps();
          if (c && !Array.isArray(c)) {
            let { transition: l, transitionEnd: u, ...f } = Ft(this.node, c) || {};
            for (let m in f) this.node.getValue(m)?.jump(f[m]);
          }
          ((this.node.blockInitialAnimation = !1), r.reset(), r.animateChanges());
        } else r.setActive("exit", !1);
        this.exit = void 0;
        return;
      }
      let a = (this.exit = r.setActive("exit", !n));
      i &&
        !n &&
        a.then(() => {
          this.exit === a && ((this.exit = !0), i(this.id));
        });
    }
    mount() {
      let { register: e, onExitComplete: o } = this.node.presenceContext || {};
      (o && o(this.id), e && (this.unmount = e(this.id)));
    }
    unmount() {}
  };
var $o = { animation: { Feature: ws }, exit: { Feature: Ts } };
function Ho(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
var Zc = (t) => (e) => Io(e) && t(e, Ho(e));
function ke(t, e, o, r) {
  return Yt(t, e, Zc(o), r);
}
var Vs = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
var Jc = (t, e) => Math.abs(t - e);
function Qc(t, e) {
  let o = Jc(t.x, e.x),
    r = Jc(t.y, e.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
var mm = new Set(["auto", "scroll"]),
  Rr = class {
    constructor(
      e,
      o,
      {
        transformPagePoint: r,
        contextWindow: n = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: s = 3,
        element: a,
      } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (d) => {
          this.handleScroll(d.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          ((this.hasPendingMove = !1),
            this.lastRawMoveEventInfo &&
              (this.lastMoveEventInfo = bs(this.lastRawMoveEventInfo, this.transformPagePoint)));
          let d = tl(this.lastMoveEventInfo, this.history),
            g = this.startEvent !== null,
            h = Qc(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!g && !h) return;
          let { point: v } = d;
          this.history.push({ ...v, timestamp: Y.now() });
          let { onStart: T, onMove: x } = this.handlers;
          (g || (T && T(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, d));
        }),
        (this.handlePointerMove = (d, g) => {
          ((this.lastMoveEvent = d),
            (this.lastRawMoveEventInfo = g),
            (this.lastMoveEventInfo = bs(g, this.transformPagePoint)),
            (this.hasPendingMove = !0),
            D.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (d, g) => {
          (this.hasPendingMove && this.updatePoint(), this.end());
          let { onEnd: h, onSessionEnd: v, resumeAnimation: T } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && T && T(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let x = tl(
            d.type === "pointercancel" ? this.lastMoveEventInfo : bs(g, this.transformPagePoint),
            this.history
          );
          (this.startEvent && h && h(d, x), v && v(d, x));
        }),
        !Io(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = o),
        (this.transformPagePoint = r),
        (this.distanceThreshold = s),
        (this.contextWindow = n || window));
      let c = Ho(e),
        l = bs(c, this.transformPagePoint),
        { point: u } = l,
        { timestamp: f } = H;
      this.history = [{ ...u, timestamp: f }];
      let { onSessionStart: m } = o;
      m && m(e, tl(l, this.history));
      let p = { passive: !0, capture: !0 };
      ((this.removeListeners = Jt(
        ke(this.contextWindow, "pointermove", this.handlePointerMove, p),
        ke(this.contextWindow, "pointerup", this.handlePointerUp, p),
        ke(this.contextWindow, "pointercancel", this.handlePointerUp, p)
      )),
        a && this.startScrollTracking(a));
    }
    startScrollTracking(e) {
      let o = e.parentElement;
      for (; o;) {
        let r = getComputedStyle(o);
        ((mm.has(r.overflowX) || mm.has(r.overflowY)) &&
          this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
          (o = o.parentElement));
      }
      (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
        window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
        window.addEventListener("scroll", this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
            window.removeEventListener("scroll", this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let o = this.scrollPositions.get(e);
      if (!o) return;
      let r = e === window,
        n = r ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: n.x - o.x, y: n.y - o.y };
      (i.x === 0 && i.y === 0) ||
        (r
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, n),
        D.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        rt(this.updatePoint));
    }
  };
function bs(t, e) {
  return e ? { point: e(t.point) } : t;
}
function pm(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function tl({ point: t }, e) {
  return { point: t, delta: pm(t, dm(e)), offset: pm(t, Wg(e)), velocity: Ug(e, 0.1) };
}
function Wg(t) {
  return t[0];
}
function dm(t) {
  return t[t.length - 1];
}
function Ug(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let o = t.length - 1,
    r = null,
    n = dm(t);
  for (; o >= 0 && ((r = t[o]), !(n.timestamp - r.timestamp > X(e)));) o--;
  if (!r) return { x: 0, y: 0 };
  r === t[0] && t.length > 2 && n.timestamp - r.timestamp > X(e) * 2 && (r = t[1]);
  let i = pt(n.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  let s = { x: (n.x - r.x) / i, y: (n.y - r.y) / i };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function vm(t, { min: e, max: o }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? K(e, t, r.min) : Math.max(t, e))
      : o !== void 0 && t > o && (t = r ? K(o, t, r.max) : Math.min(t, o)),
    t
  );
}
function hm(t, e, o) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: o !== void 0 ? t.max + o - (t.max - t.min) : void 0,
  };
}
function Sm(t, { top: e, left: o, bottom: r, right: n }) {
  return { x: hm(t.x, o, n), y: hm(t.y, e, r) };
}
function gm(t, e) {
  let o = e.min - t.min,
    r = e.max - t.max;
  return (e.max - e.min < t.max - t.min && ([o, r] = [r, o]), { min: o, max: r });
}
function wm(t, e) {
  return { x: gm(t.x, e.x), y: gm(t.y, e.y) };
}
function Tm(t, e) {
  let o = 0.5,
    r = ft(t),
    n = ft(e);
  return (
    n > r ? (o = gt(e.min, e.max - r, t.min)) : r > n && (o = gt(t.min, t.max - n, e.min)),
    et(0, 1, o)
  );
}
function Vm(t, e) {
  let o = {};
  return (
    e.min !== void 0 && (o.min = e.min - t.min),
    e.max !== void 0 && (o.max = e.max - t.min),
    o
  );
}
var As = 0.35;
function bm(t = As) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = As),
    { x: ym(t, "left", "right"), y: ym(t, "top", "bottom") }
  );
}
function ym(t, e, o) {
  return { min: xm(t, e), max: xm(t, o) };
}
function xm(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
var zg = new WeakMap(),
  Ms = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = ot()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let i = (f) => {
          (o && this.snapToCursor(f), this.stopAnimation());
        },
        s = (f, m) => {
          let { drag: p, dragPropagation: d, onDragStart: g } = this.getProps();
          if (
            p &&
            !d &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = cc(p)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = f),
            (this.latestPanInfo = m),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Lt((v) => {
              let T = this.getAxisMotionValue(v).get() || 0;
              if (Pt.test(T)) {
                let { projection: x } = this.visualElement;
                if (x && x.layout) {
                  let w = x.layout.layoutBox[v];
                  w && (T = ft(w) * (parseFloat(T) / 100));
                }
              }
              this.originPoint[v] = T;
            }),
            g && D.update(() => g(f, m), !1, !0),
            dr(this.visualElement, "transform"));
          let { animationState: h } = this.visualElement;
          h && h.setActive("whileDrag", !0);
        },
        a = (f, m) => {
          ((this.latestPointerEvent = f), (this.latestPanInfo = m));
          let {
            dragPropagation: p,
            dragDirectionLock: d,
            onDirectionLock: g,
            onDrag: h,
          } = this.getProps();
          if (!p && !this.openDragLock) return;
          let { offset: v } = m;
          if (d && this.currentDirection === null) {
            ((this.currentDirection = $g(v)),
              this.currentDirection !== null && g && g(this.currentDirection));
            return;
          }
          (this.updateAxis("x", m.point, v),
            this.updateAxis("y", m.point, v),
            this.visualElement.render(),
            h && D.update(() => h(f, m), !1, !0));
        },
        c = (f, m) => {
          ((this.latestPointerEvent = f),
            (this.latestPanInfo = m),
            this.stop(f, m),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        l = () => {
          let { dragSnapToOrigin: f } = this.getProps();
          (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new Rr(
        e,
        { onSessionStart: i, onStart: s, onMove: a, onSessionEnd: c, resumeAnimation: l },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: u,
          distanceThreshold: r,
          contextWindow: Vs(this.visualElement),
          element: this.visualElement.current,
        }
      );
    }
    stop(e, o) {
      let r = e || this.latestPointerEvent,
        n = o || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !n || !r)) return;
      let { velocity: s } = n;
      this.startAnimation(s);
      let { onDragEnd: a } = this.getProps();
      a && D.postRender(() => a(r, n));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: o } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: r } = this.getProps();
      (!r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
        o && o.setActive("whileDrag", !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, o, r) {
      let { drag: n } = this.getProps();
      if (!r || !Ps(e, n, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        s = this.originPoint[e] + r[e];
      (this.constraints && this.constraints[e] && (s = vm(s, this.constraints[e], this.elastic[e])),
        i.set(s));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: o } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        n = this.constraints;
      (e && to(e)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : e && r
          ? (this.constraints = Sm(r.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = bm(o)),
        n !== this.constraints &&
          !to(e) &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Lt((i) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(i) &&
              (this.constraints[i] = Vm(r.layoutBox[i], this.constraints[i]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: o } = this.getProps();
      if (!e || !to(e)) return !1;
      let r = e.current;
      J(
        r !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        "drag-constraints-ref"
      );
      let { projection: n } = this.visualElement;
      if (!n || !n.layout) return !1;
      n.root && ((n.root.scroll = void 0), n.root.updateScroll());
      let i = rc(r, n.root, this.visualElement.getTransformPagePoint()),
        s = wm(n.layout.layoutBox, i);
      if (o) {
        let a = o(Za(s));
        ((this.hasMutatedConstraints = !!a), a && (s = Ln(a)));
      }
      return s;
    }
    startAnimation(e) {
      let {
          drag: o,
          dragMomentum: r,
          dragElastic: n,
          dragTransition: i,
          dragSnapToOrigin: s,
          onDragTransitionEnd: a,
        } = this.getProps(),
        c = this.constraints || {},
        l = Lt((u) => {
          if (!Ps(u, o, this.currentDirection)) return;
          let f = (c && c[u]) || {};
          (s === !0 || s === u) && (f = { min: 0, max: 0 });
          let m = n ? 200 : 1e6,
            p = n ? 40 : 1e7,
            d = {
              type: "inertia",
              velocity: r ? e[u] : 0,
              bounceStiffness: m,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...f,
            };
          return this.startAxisValueAnimation(u, d);
        });
      return Promise.all(l).then(a);
    }
    startAxisValueAnimation(e, o) {
      let r = this.getAxisMotionValue(e);
      return (dr(this.visualElement, e), r.start(ne(e, r, 0, o, this.visualElement, !1)));
    }
    stopAnimation() {
      Lt((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let o = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps()[o];
      return n || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
    }
    snapToCursor({ clientX: e, clientY: o }) {
      let { drag: r } = this.getProps(),
        n = { x: e, y: o },
        i = this.visualElement.getTransformPagePoint()?.(n) || n,
        s = this.visualElement.measureViewportBox();
      Lt((a) => {
        if (!Ps(a, r, this.currentDirection)) return;
        let c = this.getAxisMotionValue(a),
          { min: l, max: u } = s[a];
        c.set((c.get() || 0) + i[a] - K(l, u, 0.5));
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: o } = this.getProps(),
        { projection: r } = this.visualElement;
      if (!to(o) || !r || !this.constraints) return;
      this.stopAnimation();
      let n = this.constraints,
        i = { x: 0, y: 0 };
      Lt((a) => {
        let c = this.getAxisMotionValue(a).get();
        i[a] = Tm({ min: c, max: c }, n[a]);
      });
      let { transformTemplate: s } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        Lt((a) => {
          let c = this.getAxisMotionValue(a);
          if (!Ps(a, e, null) || !c.get()) return;
          let { min: l, max: u } = this.constraints[a];
          c.set(K(l, u, i[a]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      zg.set(this.visualElement, this);
      let e = this.visualElement.current,
        o = ke(e, "pointerdown", (l) => {
          let { drag: u, dragListener: f = !0 } = this.getProps(),
            m = l.target,
            p = m !== e && fc(m);
          u && f && !p && this.start(l);
        }),
        r,
        n = () => {
          let { dragConstraints: l } = this.getProps();
          to(l) &&
            l.current &&
            ((this.constraints = this.resolveRefConstraints()),
            r || (r = Kg(e, l.current, () => this.scalePositionWithinConstraints())));
        },
        { projection: i } = this.visualElement,
        s = i.addEventListener("measure", n);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), D.read(n));
      let a = Yt(window, "resize", () => this.scalePositionWithinConstraints()),
        c = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Lt((f) => {
              let m = this.getAxisMotionValue(f);
              m && ((this.originPoint[f] += l[f].translate), m.set(m.get() + l[f].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        (a(), o(), s(), c && c(), r && r());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: o = !1,
          dragDirectionLock: r = !1,
          dragPropagation: n = !1,
          dragConstraints: i = !1,
          dragElastic: s = As,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: o,
        dragDirectionLock: r,
        dragPropagation: n,
        dragConstraints: i,
        dragElastic: s,
        dragMomentum: a,
      };
    }
  };
function Am(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function Kg(t, e, o) {
  let r = Re(t, Am(o)),
    n = Re(e, Am(o));
  return () => {
    (r(), n());
  };
}
function Ps(t, e, o) {
  return (e === !0 || e === t) && (o === null || o === t);
}
function $g(t, e = 10) {
  let o = null;
  return (Math.abs(t.y) > e ? (o = "y") : Math.abs(t.x) > e && (o = "x"), o);
}
var Cs = class extends vt {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = Q),
      (this.removeListeners = Q),
      (this.controls = new Ms(e)));
  }
  mount() {
    let { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Q));
  }
  update() {
    let { dragControls: e } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    e !== o &&
      (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
};
var el = (t) => (e, o) => {
    t && D.update(() => t(e, o), !1, !0);
  },
  Es = class extends vt {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = Q));
    }
    onPointerDown(e) {
      this.session = new Rr(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Vs(this.node),
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: o, onPan: r, onPanEnd: n } = this.node.getProps();
      return {
        onSessionStart: el(e),
        onStart: el(o),
        onMove: el(r),
        onEnd: (i, s) => {
          (delete this.session, n && D.postRender(() => n(i, s)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = ke(this.node.current, "pointerdown", (e) =>
        this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  };
var Pm = B(ce(), 1);
var ii = B(W(), 1);
var Be = B(W(), 1);
function ni(t = !0) {
  let e = (0, Be.useContext)(Xt);
  if (e === null) return [!0, null];
  let { isPresent: o, onExitComplete: r, register: n } = e,
    i = (0, Be.useId)();
  (0, Be.useEffect)(() => {
    if (t) return n(i);
  }, [t]);
  let s = (0, Be.useCallback)(() => t && r && r(i), [i, r, t]);
  return !o && r ? [!1, s] : [!0];
}
function Hg() {
  return _g((0, Be.useContext)(Xt));
}
function _g(t) {
  return t === null ? !0 : t.isPresent;
}
var ol = !1,
  rl = class extends ii.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: o, switchLayoutGroup: r, layoutId: n } = this.props,
        { projection: i } = e;
      (i &&
        (o.group && o.group.add(i),
        r && r.register && n && r.register(i),
        ol && i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (Go.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let { layoutDependency: o, visualElement: r, drag: n, isPresent: i } = this.props,
        { projection: s } = r;
      return (
        s &&
          ((s.isPresent = i),
          e.layoutDependency !== o && s.setOptions({ ...s.options, layoutDependency: o }),
          (ol = !0),
          n || e.layoutDependency !== o || o === void 0 || e.isPresent !== i
            ? s.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? s.promote()
              : s.relegate() ||
                D.postRender(() => {
                  let a = s.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: o } = this.props,
        { projection: r } = e;
      r &&
        ((r.options.layoutAnchor = o),
        r.root.didUpdate(),
        Ct.postRender(() => {
          !r.currentAnimation && r.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let { visualElement: e, layoutGroup: o, switchLayoutGroup: r } = this.props,
        { projection: n } = e;
      ((ol = !0),
        n &&
          (n.scheduleCheckAfterUnmount(),
          o && o.group && o.group.remove(n),
          r && r.deregister && r.deregister(n)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Ds(t) {
  let [e, o] = ni(),
    r = (0, ii.useContext)(Te);
  return (0, Pm.jsx)(rl, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: (0, ii.useContext)(ri),
    isPresent: e,
    safeToRemove: o,
  });
}
var Rs = { pan: { Feature: Es }, drag: { Feature: Cs, ProjectionNode: Uo, MeasureLayout: Ds } };
function Mm(t, e, o) {
  let { props: r } = t;
  t.animationState && r.whileHover && t.animationState.setActive("whileHover", o === "Start");
  let n = "onHover" + o,
    i = r[n];
  i && D.postRender(() => i(e, Ho(e)));
}
var Is = class extends vt {
  mount() {
    let { current: e } = this.node;
    e &&
      (this.unmount = lc(e, (o, r) => (Mm(this.node, r, "Start"), (n) => Mm(this.node, n, "End"))));
  }
  unmount() {}
};
var Ls = class extends vt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Jt(
      Yt(this.node.current, "focus", () => this.onFocus()),
      Yt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
};
function Cm(t, e, o) {
  let { props: r } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && r.whileTap && t.animationState.setActive("whileTap", o === "Start");
  let n = "onTap" + (o === "End" ? "" : o),
    i = r[n];
  i && D.postRender(() => i(e, Ho(e)));
}
var Os = class extends vt {
  mount() {
    let { current: e } = this.node;
    if (!e) return;
    let { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = pc(
      e,
      (n, i) => (
        Cm(this.node, i, "Start"),
        (s, { success: a }) => Cm(this.node, s, a ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: r?.tap === !1 }
    );
  }
  unmount() {}
};
var il = new WeakMap(),
  nl = new WeakMap(),
  Yg = (t) => {
    let e = il.get(t.target);
    e && e(t);
  },
  Xg = (t) => {
    t.forEach(Yg);
  };
function qg({ root: t, ...e }) {
  let o = t || document;
  nl.has(o) || nl.set(o, {});
  let r = nl.get(o),
    n = JSON.stringify(e);
  return (r[n] || (r[n] = new IntersectionObserver(Xg, { root: t, ...e })), r[n]);
}
function Em(t, e, o) {
  let r = qg(e);
  return (
    il.set(t, o),
    r.observe(t),
    () => {
      (il.delete(t), r.unobserve(t));
    }
  );
}
var Zg = { some: 0, all: 1 },
  ks = class extends vt {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: o, margin: r, amount: n = "some", once: i } = e,
        s = {
          root: o ? o.current : void 0,
          rootMargin: r,
          threshold: typeof n == "number" ? n : Zg[n],
        },
        a = (c) => {
          let { isIntersecting: l } = c;
          if (this.isInView === l || ((this.isInView = l), i && !l && this.hasEnteredView)) return;
          (l && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", l));
          let { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
            m = l ? u : f;
          m && m(c);
        };
      this.stopObserver = Em(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: o } = this.node;
      ["amount", "margin", "root"].some(Jg(e, o)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function Jg({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (o) => t[o] !== e[o];
}
var Bs = {
  inView: { Feature: ks },
  tap: { Feature: Os },
  focus: { Feature: Ls },
  hover: { Feature: Is },
};
var Fs = { layout: { ProjectionNode: Uo, MeasureLayout: Ds } };
var Dm = { ...$o, ...Bs, ...Rs, ...Fs };
var si = Ss(Dm, br);
var ai = B(ce(), 1),
  Ve = B(W(), 1);
var ll = B(ce(), 1),
  Om = B(W(), 1),
  eo = B(W(), 1);
var Lm = B(ce(), 1);
var js = B(W(), 1),
  Fe = B(W(), 1);
var Im = B(W(), 1);
function Rm(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Qg(...t) {
  return (e) => {
    let o = !1,
      r = t.map((n) => {
        let i = Rm(n, e);
        return (!o && typeof i == "function" && (o = !0), i);
      });
    if (o)
      return () => {
        for (let n = 0; n < r.length; n++) {
          let i = r[n];
          typeof i == "function" ? i() : Rm(t[n], null);
        }
      };
  };
}
function sl(...t) {
  return Im.useCallback(Qg(...t), t);
}
var al = class extends js.Component {
  getSnapshotBeforeUpdate(e) {
    let o = this.props.childRef.current;
    if (Ht(o) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let r = o.offsetParent,
        n = (Ht(r) && r.offsetWidth) || 0,
        i = (Ht(r) && r.offsetHeight) || 0,
        s = getComputedStyle(o),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(s.height)),
        (a.width = parseFloat(s.width)),
        (a.top = o.offsetTop),
        (a.left = o.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = i - a.height - a.top),
        (a.direction = s.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function cl({ children: t, isPresent: e, anchorX: o, anchorY: r, root: n, pop: i }) {
  let s = (0, Fe.useId)(),
    a = (0, Fe.useRef)(null),
    c = (0, Fe.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: l } = (0, Fe.useContext)(dt),
    u = i !== !1 ? (t.props?.ref ?? t?.ref) : void 0,
    f = sl(a, u);
  return (
    (0, Fe.useInsertionEffect)(() => {
      let { width: m, height: p, top: d, left: g, right: h, bottom: v, direction: T } = c.current;
      if (e || i === !1 || !a.current || !m || !p) return;
      let x = T === "rtl",
        w = o === "left" ? (x ? `right: ${h}` : `left: ${g}`) : x ? `left: ${g}` : `right: ${h}`,
        P = r === "bottom" ? `bottom: ${v}` : `top: ${d}`,
        N = a.current;
      N.dataset.motionPopId = s;
      let y = N.ownerDocument,
        S = y.createElement("style");
      l && (S.nonce = l);
      let F = n ?? y.head;
      return (
        F.appendChild(S),
        S.sheet &&
          S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${w}px !important;
            ${P}px !important;
          }
        `),
        () => {
          (a.current?.removeAttribute("data-motion-pop-id"), F.contains(S) && F.removeChild(S));
        }
      );
    }, [e]),
    (0, Lm.jsx)(al, {
      isPresent: e,
      childRef: a,
      sizeRef: c,
      pop: i,
      children: i === !1 ? t : js.cloneElement(t, { ref: f }),
    })
  );
}
var ul = ({
  children: t,
  initial: e,
  isPresent: o,
  onExitComplete: r,
  custom: n,
  presenceAffectsLayout: i,
  mode: s,
  anchorX: a,
  anchorY: c,
  root: l,
}) => {
  let u = Z(ty),
    f = (0, eo.useId)(),
    m = (0, eo.useRef)(o),
    p = (0, eo.useRef)(r);
  bt(() => {
    ((m.current = o), (p.current = r));
  });
  let d = !0,
    g = (0, eo.useMemo)(
      () => (
        (d = !1),
        {
          id: f,
          initial: e,
          isPresent: o,
          custom: n,
          onExitComplete: (h) => {
            u.set(h, !0);
            for (let v of u.values()) if (!v) return;
            r && r();
          },
          register: (h) => (
            u.set(h, !1),
            () => {
              (u.delete(h), !m.current && !u.size && p.current?.());
            }
          ),
        }
      ),
      [o, u, r]
    );
  return (
    i && d && (g = { ...g }),
    (0, eo.useMemo)(() => {
      u.forEach((h, v) => u.set(v, !1));
    }, [o]),
    Om.useEffect(() => {
      !o && !u.size && r && r();
    }, [o]),
    (t = (0, ll.jsx)(cl, {
      pop: s === "popLayout",
      isPresent: o,
      anchorX: a,
      anchorY: c,
      root: l,
      children: t,
    })),
    (0, ll.jsx)(Xt.Provider, { value: g, children: t })
  );
};
function ty() {
  return new Map();
}
var Ns = B(W(), 1),
  Ir = (t) => t.key || "";
function fl(t) {
  let e = [];
  return (
    Ns.Children.forEach(t, (o) => {
      (0, Ns.isValidElement)(o) && e.push(o);
    }),
    e
  );
}
var ey = ({
  children: t,
  custom: e,
  initial: o = !0,
  onExitComplete: r,
  presenceAffectsLayout: n = !0,
  mode: i = "sync",
  propagate: s = !1,
  anchorX: a = "left",
  anchorY: c = "top",
  root: l,
}) => {
  let [u, f] = ni(s),
    m = (0, Ve.useMemo)(() => fl(t), [t]),
    p = s && !u ? [] : m.map(Ir),
    d = (0, Ve.useRef)(!0),
    g = Z(() => new Map()),
    h = (0, Ve.useRef)(new Set()),
    [v, T] = (0, Ve.useState)(m),
    [x, w] = (0, Ve.useState)(m);
  (bt(() => {
    s && !u && !x.length && f?.();
  }, [u, s, x.length, f]),
    bt(() => {
      d.current = !1;
      for (let y = 0; y < x.length; y++) {
        let S = Ir(x[y]);
        p.includes(S) ? (g.delete(S), h.current.delete(S)) : g.get(S) !== !0 && g.set(S, !1);
      }
    }, [x, p.length, p.join("-")]));
  let P = [];
  if (m !== v) {
    let y = [...m],
      S = 0;
    for (let F of x) {
      let U = p.indexOf(Ir(F));
      U === -1 ? (y.splice(S++, 0, F), P.push(F)) : (S = U + P.length + 1);
    }
    return (P.every((F) => g.get(Ir(F))) ? (y = m) : i === "wait" && (y = P), w(fl(y)), T(m), null);
  }
  let { forceRender: N } = (0, Ve.useContext)(Te);
  return (0, ai.jsx)(ai.Fragment, {
    children: x.map((y) => {
      let S = Ir(y),
        F = s && !u ? !1 : m === x || p.includes(S),
        U = () => {
          if (h.current.has(S)) return;
          if (g.has(S)) (h.current.add(S), g.set(S, !0));
          else return;
          let b = !0;
          (g.forEach((V) => {
            V || (b = !1);
          }),
            b && (N?.(), T([]), s && f?.(), r && r()));
        };
      return (0, ai.jsx)(
        ul,
        {
          isPresent: F,
          initial: !d.current || o ? void 0 : !1,
          custom: e,
          presenceAffectsLayout: n,
          mode: i,
          root: l,
          onExitComplete: F ? void 0 : U,
          anchorX: a,
          anchorY: c,
          children: y,
        },
        S
      );
    }),
  });
};
var jm = B(ce(), 1),
  _o = B(W(), 1);
var km = B(W(), 1),
  ml = (0, km.createContext)(null);
var ci = B(W(), 1);
var Bm = B(W(), 1);
function Fm() {
  let t = (0, Bm.useRef)(!1);
  return (
    bt(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    t
  );
}
function li() {
  let t = Fm(),
    [e, o] = (0, ci.useState)(0),
    r = (0, ci.useCallback)(() => {
      t.current && o(e + 1);
    }, [e]);
  return [(0, ci.useCallback)(() => D.postRender(r), [r]), e];
}
var Nm = (t) => t === !0,
  oy = (t) => Nm(t === !0) || t === "id",
  ry = ({ children: t, id: e, inherit: o = !0 }) => {
    let r = (0, _o.useContext)(Te),
      n = (0, _o.useContext)(ml),
      [i, s] = li(),
      a = (0, _o.useRef)(null),
      c = r.id || n;
    a.current === null &&
      (oy(o) && c && (e = e ? c + "-" + e : c),
      (a.current = { id: e, group: Nm(o) ? r.group || ms() : ms() }));
    let l = (0, _o.useMemo)(() => ({ ...a.current, forceRender: i }), [s]);
    return (0, jm.jsx)(Te.Provider, { value: l, children: t });
  };
var Gm = B(ce(), 1),
  Lr = B(W(), 1);
function ny({ children: t, features: e, strict: o = !1 }) {
  let [, r] = (0, Lr.useState)(!pl(e)),
    n = (0, Lr.useRef)(void 0);
  if (!pl(e)) {
    let { renderer: i, ...s } = e;
    ((n.current = i), oi(s));
  }
  return (
    (0, Lr.useEffect)(() => {
      pl(e) &&
        e().then(({ renderer: i, ...s }) => {
          (oi(s), (n.current = i), r(!0));
        });
    }, []),
    (0, Gm.jsx)(Ar.Provider, { value: { renderer: n.current, strict: o }, children: t })
  );
}
function pl(t) {
  return typeof t == "function";
}
var Wm = B(ce(), 1),
  Gs = B(W(), 1);
function iy({ children: t, ...e }) {
  let o = (0, Gs.useContext)(dt);
  ((e = { ...o, ...e }),
    (e.transition = Mo(e.transition, o.transition)),
    (e.isStatic = Z(() => e.isStatic)));
  let r = (0, Gs.useMemo)(
    () => e,
    [
      JSON.stringify(e.transition),
      e.transformPagePoint,
      e.reducedMotion,
      e.skipAnimations,
      e.isValidProp,
    ]
  );
  return (0, Wm.jsx)(dt.Provider, { value: r, children: t });
}
var sy = Ss();
var Um = B(W(), 1);
function ui(t) {
  return (0, Um.useEffect)(() => () => t(), []);
}
var dl = { renderer: br, ...$o, ...Bs };
var ay = { ...dl, ...Rs, ...Fs };
var cy = { renderer: br, ...$o };
var zm = B(W(), 1);
function hl(t, e, o) {
  (0, zm.useInsertionEffect)(() => t.on(e, o), [t, e, o]);
}
var Yo = B(W(), 1);
var ly = 50,
  Km = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  gl = () => ({ time: 0, x: Km(), y: Km() }),
  Ws = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } },
  $m = new WeakMap();
function uy(t, e) {
  let o = t === document.scrollingElement,
    r = (o && document.body) || t,
    n = $m.get(r);
  n || $m.set(r, (n = getComputedStyle(r)));
  let { writingMode: i, flexDirection: s } = n,
    a = (e === "x") !== /^[vs]/.test(i);
  return (
    (a ? (n.direction === "rtl") != (i === "sideways-lr") : i.endsWith("rl")) !==
    (!o &&
      n.display.includes("flex") &&
      (a !== (s[0] === "c") ? s : n.flexWrap).endsWith("reverse"))
  );
}
function fy(t, e, o, r) {
  let n = o[e],
    { length: i, position: s } = Ws[e],
    a = n.current,
    c = o.time,
    l = t[`scroll${s}`];
  ((n.current = uy(t, e) ? -l || 0 : l),
    (n.containerLength = t[`client${i}`]),
    (n.targetLength = t[`scroll${i}`]),
    (n.scrollLength = n.targetLength - n.containerLength),
    (n.offset.length = 0),
    (n.offset[0] = 0),
    (n.offset[1] = n.scrollLength),
    (n.progress = et(0, 1, gt(0, n.scrollLength, n.current))));
  let u = r - c;
  n.velocity = u > ly ? 0 : co(n.current - a, u);
}
function Hm(t, e, o) {
  for (let r in Ws) fy(t, r, e, o);
  e.time = o;
}
var Us = { start: 0, center: 0.5, end: 1 };
function yl(t, e, o = 0) {
  let r = 0;
  if ((t in Us && (t = Us[t]), typeof t == "string")) {
    let n = parseFloat(t);
    t.endsWith("px")
      ? (r = n)
      : t.endsWith("%")
        ? (t = n / 100)
        : t.endsWith("vw")
          ? (r = (n / 100) * document.documentElement.clientWidth)
          : t.endsWith("vh")
            ? (r = (n / 100) * document.documentElement.clientHeight)
            : (t = n);
  }
  return (typeof t == "number" && (r = e * t), o + r);
}
var my = [0, 0];
function Or(t, e, o, r) {
  let n = Array.isArray(t) ? t : my,
    i = 0,
    s = 0;
  return (
    typeof t == "number"
      ? (n = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()), t.includes(" ") ? (n = t.split(" ")) : (n = [t, Us[t] ? t : "0"])),
    (i = yl(n[0], o, r)),
    (s = yl(n[1], e)),
    i - s
  );
}
var zs = {
  All: [
    [0, 0],
    [1, 1],
  ],
};
function py(t, e) {
  let o = t.length - 1;
  if (o < 1) return 0;
  let r = t[0] > t[o],
    n = (a) => t[r ? o - a : a];
  if (t[0] === t[1] && e < n(0)) return r ? 1 : 0;
  let i = 0;
  for (; i < o - 1 && e >= n(i + 1);) i++;
  let s = (i + gt(n(i), n(i + 1), e)) / o;
  return r ? 1 - s : s;
}
function _m(t, e) {
  let { offset: o = zs.All, axis: r = "y" } = e,
    n = t[r];
  n.offset.length = 0;
  let i = o.length;
  for (let s = 0; s < i; s++)
    n.offset[s] = Or(o[s], n.containerLength, n.targetLength, n.targetOffset);
  n.progress = et(0, 1, py(n.offset, n.current));
}
function Ym(t, e) {
  let o = { x: 0, y: 0 },
    r = t;
  for (; r && r !== e;)
    if (Ht(r)) ((o.x += r.offsetLeft), (o.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      let n = r.getBoundingClientRect();
      r = r.parentElement;
      let i = r.getBoundingClientRect();
      ((o.x += n.left - i.left), (o.y += n.top - i.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: n, y: i } = r.getBBox();
      ((o.x += n), (o.y += i));
      let s = null,
        a = r.parentNode;
      for (; !s;) (a.tagName === "svg" && (s = a), (a = r.parentNode));
      r = s;
    } else break;
  return o;
}
function dy(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function Xm(t, e, o, r = {}) {
  let { target: n } = r,
    i = n || r.offset;
  return {
    measure: (s) => {
      if (i) {
        o.time = s.time;
        for (let a in Ws) {
          let c = a,
            { offset: l } = o[c];
          (Object.assign(o[c], s[c]), (o[c].offset = l));
        }
        if (n && n !== t) {
          let a = Ym(n, t),
            c = dy(n);
          ((o.x.targetOffset = a.x),
            (o.y.targetOffset = a.y),
            (o.x.targetLength = c.width),
            (o.y.targetLength = c.height));
        }
        _m(o, r);
      }
    },
    notify: (s) => e(i ? o : s),
  };
}
var kr = new WeakMap(),
  qm = new WeakMap(),
  Ks = new WeakMap(),
  $s = new WeakMap(),
  Zm = (t) => (t === document.scrollingElement ? window : t);
function fi(t, { container: e = document.scrollingElement, trackContentSize: o = !1, ...r } = {}) {
  if (!e) return Q;
  let n = Ks.get(e);
  n || ((n = new Set()), Ks.set(e, n));
  let i = gl(),
    s = Xm(e, t, i, r);
  if ((n.add(s), !kr.has(e))) {
    let c = gl(),
      l = () => {
        Hm(e, c, H.timestamp);
        for (let p of n) p.measure(c);
        D.preUpdate(u);
      },
      u = () => {
        for (let p of n) p.notify(c);
      },
      f = () => D.read(l);
    kr.set(e, f);
    let m = Zm(e);
    (window.addEventListener("resize", f),
      e !== document.documentElement && qm.set(e, Re(e, f)),
      m.addEventListener("scroll", f),
      f());
  }
  if (o && !$s.has(e)) {
    let c = kr.get(e),
      l = { width: e.scrollWidth, height: e.scrollHeight },
      u = () => {
        let m = e.scrollWidth,
          p = e.scrollHeight;
        (l.width !== m || l.height !== p) && (c(), (l.width = m), (l.height = p));
      },
      f = D.read(u, !0);
    $s.set(e, f);
  }
  let a = kr.get(e);
  return (
    D.read(a, !1, !0),
    () => {
      rt(a);
      let c = Ks.get(e);
      if (!c || (c.delete(s), c.size)) return;
      Ks.delete(e);
      let l = kr.get(e);
      (kr.delete(e),
        l &&
          (Zm(e).removeEventListener("scroll", l),
          qm.get(e)?.(),
          window.removeEventListener("resize", l)));
      let u = $s.get(e);
      u && (rt(u), $s.delete(e));
    }
  );
}
function Jm(t) {
  return typeof window > "u" ? !1 : t ? xn() : Vo();
}
var Qm = new Map();
function tp({ container: t, target: e, axis: o }) {
  let r = Qm.get(t);
  r || ((r = new Map()), Qm.set(t, r));
  let n = e ?? "self",
    i = r.get(n);
  return (
    i || ((i = {}), r.set(n, i)),
    i[o] ||
      (i[o] = e
        ? new ViewTimeline({ subject: e, axis: o })
        : new ScrollTimeline({ source: t, axis: o }))
  );
}
var hy = (t) => {
    if (/v/u.test(t)) return [];
    let e = Or(t, 0, 0, 0);
    return [Or(t, 0, 1, 0) - e, e - Or(t, 1, 0, 0), e];
  },
  ep = ([t, e, o]) => !o && (e === 0 || e === 1) && `${e ? "entry" : "exit"}-crossing ${t * 100}%`;
function Hs(t = zs.All) {
  if (t.length !== 2) return;
  let [e, o] = t.map(hy),
    r = [ep(e), ep(o)],
    n = o[0] - e[0],
    i = e[1] - o[1];
  if (r[0] && r[1] && (n || i))
    return { points: r, a: n, b: i, cover: !e[0] && n === 1 && i === 1 };
}
function op(t, e) {
  let { target: o, container: r, axis: n } = e,
    i = o && Hs(e.offset),
    s = Jm(o) && (o ? !!i : !e.offset),
    a = new Map(),
    c = new Set(),
    l,
    u = !1,
    f = (p, d) => {
      let [g, h] = i.points;
      (d.effect.updateTiming({
        direction: u ? (p === "normal" ? "reverse" : "alternate-reverse") : p,
      }),
        Object.assign(d, { rangeStart: u ? h : g, rangeEnd: u ? g : h }),
        d.play());
    },
    m = [
      t.attachTimeline({
        get timeline() {
          return s ? tp(e) : void 0;
        },
        onAttach:
          i &&
          ((p) => {
            let d = p.effect.getTiming().direction;
            (a.set(p, d), f(d, p));
          }),
        observe: (p) => (
          p.pause(),
          c.add(p),
          l ||
            (l = fi((d) => {
              c.forEach((g) => {
                g.time = g.iterationDuration * d[n].progress;
              });
            }, e)),
          () => c.delete(p)
        ),
      }),
    ];
  if (s && i) {
    let { a: p, b: d } = i,
      g = n === "y" ? "clientHeight" : "clientWidth",
      h = () => {
        u !== (u = p * o[g] + d * r[g] < 0) && a.forEach(f);
      };
    (h(), p * d < 0 && m.push(Re(h), Re([o, r], h)));
  }
  return () => {
    (m.forEach((p) => p()), l?.());
  };
}
function _s(t, { axis: e = "y", source: o, container: r = document.scrollingElement, ...n } = {}) {
  if (!r) return Q;
  let i = { axis: e, container: o || r, ...n };
  return typeof t == "function" ? fi((s) => t(s[e].progress, s), i) : op(t, i);
}
var gy = () => ({ scrollX: tt(0), scrollY: tt(0), scrollXProgress: tt(0), scrollYProgress: tt(0) }),
  Br = (t) => (t ? !t.current : !1);
function rp(t, e, o, r) {
  return {
    factory: (n) => {
      let i,
        s = () => {
          if (Br(o) || Br(r)) {
            Ct.read(s);
            return;
          }
          i = _s(n, {
            ...e,
            axis: t,
            container: o?.current || void 0,
            target: r?.current || void 0,
          });
        };
      return (
        Ct.read(s),
        () => {
          ($i(s), i?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (n) => n,
    duration: 1,
  };
}
function yy(t, e) {
  return typeof window > "u" ? !1 : t ? xn() && !!Hs(e) : Vo() && !e;
}
function mi({ container: t, target: e, ...o } = {}) {
  let r = Z(gy);
  yy(e, o.offset) &&
    ((r.scrollXProgress.accelerate = rp("x", o, t, e)),
    (r.scrollYProgress.accelerate = rp("y", o, t, e)));
  let n = (0, Yo.useRef)(null),
    i = (0, Yo.useRef)(!1),
    s = (0, Yo.useCallback)(
      () => (
        (n.current = _s(
          (a, { x: c, y: l }) => {
            (r.scrollX.set(c.current),
              r.scrollXProgress.set(c.progress),
              r.scrollY.set(l.current),
              r.scrollYProgress.set(l.progress));
          },
          { ...o, container: t?.current || void 0, target: e?.current || void 0 }
        )),
        () => {
          n.current?.();
        }
      ),
      [t, e, JSON.stringify(o.offset)]
    );
  return (
    bt(() => {
      if (((i.current = !1), Br(t) || Br(e))) {
        i.current = !0;
        return;
      } else return s();
    }, [s]),
    (0, Yo.useEffect)(() => {
      if (!i.current) return;
      let a,
        c = () => {
          let l = Br(t),
            u = Br(e);
          (J(!l, "Container ref is defined but not hydrated", "use-scroll-ref"),
            J(!u, "Target ref is defined but not hydrated", "use-scroll-ref"),
            !l && !u && (a = s()));
        };
      return (
        Ct.read(c),
        () => {
          ($i(c), a?.());
        }
      );
    }, [s]),
    r
  );
}
function xy(t) {
  return mi({ container: t });
}
function vy() {
  return mi();
}
var Fr = B(W(), 1);
function Ot(t) {
  let e = Z(() => tt(t)),
    { isStatic: o } = (0, Fr.useContext)(dt);
  if (o) {
    let [, r] = (0, Fr.useState)(t);
    (0, Fr.useEffect)(() => e.on("change", r), []);
  }
  return e;
}
function jr(t, e) {
  let o = Ot(e()),
    r = () => o.set(e());
  return (
    r(),
    bt(() => {
      let n = () => D.preRender(r, !1, !0),
        i = t.map((s) => s.on("change", n));
      return (
        r(),
        () => {
          (i.forEach((s) => s()), rt(r));
        }
      );
    }),
    o
  );
}
function Sy(t, ...e) {
  let o = t.length;
  function r() {
    let n = "";
    for (let i = 0; i < o; i++) {
      n += t[i];
      let s = e[i];
      s && (n += $(s) ? s.get() : s);
    }
    return n;
  }
  return jr(e.filter($), r);
}
var Ys = B(W(), 1);
function np(t) {
  ((ye.current = []), t());
  let e = jr(ye.current, t);
  return ((ye.current = void 0), e);
}
function je(t, e, o, r) {
  if (typeof t == "function") return np(t);
  if (o !== void 0 && !Array.isArray(o) && typeof e != "function") return wy(t, e, o, r);
  let s = typeof e == "function" ? e : Bn(e, o, r),
    a = Array.isArray(t) ? ip(t, s) : ip([t], ([l]) => s(l)),
    c = Array.isArray(t) ? void 0 : t.accelerate;
  if (c && !c.isTransformed && typeof e != "function" && Array.isArray(o) && r?.clamp !== !1) {
    let l = r?.ease;
    a.accelerate = {
      ...c,
      times: [0, ...e, 1],
      keyframes: [o[0], ...o, o[o.length - 1]],
      isTransformed: !0,
      ...(l ? { ease: Array.isArray(l) ? [l[0], ...l] : l } : {}),
    };
  }
  return a;
}
function ip(t, e) {
  let o = Z(() => []);
  return jr(t, () => {
    o.length = 0;
    let r = t.length;
    for (let n = 0; n < r; n++) o[n] = t[n].get();
    return e(o);
  });
}
function wy(t, e, o, r) {
  let n = Z(() => Object.keys(o)),
    i = Z(() => ({}));
  for (let s of n) i[s] = je(t, e, o[s], r);
  return i;
}
function Ty(t, e = {}) {
  return xl(t, e, ts);
}
function xl(t, e, o) {
  let { isStatic: r } = (0, Ys.useContext)(dt),
    n = () => ($(t) ? t.get() : t);
  if (r) return je(n);
  let i = Ot(n());
  return ((0, Ys.useInsertionEffect)(() => o(i, t, e), [i, JSON.stringify(e)]), i);
}
function Vy(t, e = {}) {
  return xl(t, e, es);
}
var Nr = B(W(), 1);
function vl(t) {
  let e = (0, Nr.useRef)(0),
    { isStatic: o } = (0, Nr.useContext)(dt);
  (0, Nr.useEffect)(() => {
    if (o) return;
    let r = ({ timestamp: n, delta: i }) => {
      (e.current || (e.current = n), t(n - e.current, i));
    };
    return (D.update(r, !0), () => rt(r));
  }, [t]);
}
function by() {
  let t = Ot(0);
  return (vl((e) => t.set(e)), t);
}
function Ay(t) {
  let e = Ot(t.getVelocity()),
    o = () => {
      let r = t.getVelocity();
      (e.set(r), r && D.update(o));
    };
  return (
    hl(t, "change", () => {
      D.update(o, !1, !0);
    }),
    e
  );
}
var pi = class extends Kt {
  constructor() {
    (super(...arguments), (this.isEnabled = !1));
  }
  add(e) {
    (st.has(e) || $e.has(e)) && ((this.isEnabled = !0), this.update());
  }
  update() {
    this.set(this.isEnabled ? "transform" : "auto");
  }
};
function Py() {
  return Z(() => new pi("auto"));
}
var sp = B(W(), 1);
function Sl() {
  !Oo.current && Gn();
  let [t] = (0, sp.useState)(Je.current);
  return t;
}
var ap = B(W(), 1);
function wl() {
  let t = Sl(),
    { reducedMotion: e } = (0, ap.useContext)(dt);
  return e === "never" ? !1 : e === "always" ? !0 : t;
}
function My(t) {
  t.values.forEach((e) => e.stop());
}
function Tl(t, e) {
  [...e].reverse().forEach((r) => {
    let n = t.getVariant(r);
    (n && pr(t, n),
      t.variantChildren &&
        t.variantChildren.forEach((i) => {
          Tl(i, e);
        }));
  });
}
function Cy(t, e) {
  if (Array.isArray(e)) return Tl(t, e);
  if (typeof e == "string") return Tl(t, [e]);
  pr(t, e);
}
function Vl() {
  let t = !1,
    e = new Set(),
    o = {
      subscribe(r) {
        return (
          e.add(r),
          () => {
            e.delete(r);
          }
        );
      },
      start(r, n) {
        J(
          t,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let i = [];
        return (
          e.forEach((s) => {
            i.push(He(s, r, { transitionOverride: n }));
          }),
          Promise.all(i)
        );
      },
      set(r) {
        return (
          J(
            t,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          e.forEach((n) => {
            Cy(n, r);
          })
        );
      },
      stop() {
        e.forEach((r) => {
          My(r);
        });
      },
      mount() {
        return (
          (t = !0),
          () => {
            ((t = !1), o.stop());
          }
        );
      },
    };
  return o;
}
var Js = B(W(), 1);
function di(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Xs(t, e, o, r) {
  return t == null
    ? []
    : typeof t == "string" && di(e)
      ? xt(t, o, r)
      : t instanceof NodeList
        ? Array.from(t)
        : Array.isArray(t)
          ? t.filter((n) => n != null)
          : [t];
}
function cp(t, e, o) {
  return t * (e + 1) + o * e;
}
function bl(t, e, o, r) {
  return typeof e == "number"
    ? e
    : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : e === "<"
        ? o
        : e.startsWith("<")
          ? Math.max(0, o + parseFloat(e.slice(1)))
          : (r.get(e) ?? t);
}
function Ey(t, e, o) {
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    n.at > e && n.at < o && (At(t, n), r--);
  }
}
function lp(t, e, o, r, n, i) {
  Ey(t, n, i);
  for (let s = 0; s < e.length; s++) t.push({ value: e[s], at: K(n, i, r[s]), easing: Zr(o, s) });
}
function up(t, e, o = 0) {
  let r = e + 1 + e * o;
  for (let n = 0; n < t.length; n++) t[n] = t[n] / r;
}
function fp(t, e) {
  return t.at === e.at ? (t.value === null ? 1 : e.value === null ? -1 : 0) : t.at - e.at;
}
var Dy = "easeInOut",
  Al = 20;
function dp(t, { defaultTransition: e = {}, ...o } = {}, r, n) {
  let i = e.duration || 0.3,
    s = new Map(),
    a = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    f = 0,
    m = 0;
  for (let p = 0; p < t.length; p++) {
    let d = t[p];
    if (typeof d == "string") {
      l.set(d, f);
      continue;
    } else if (!Array.isArray(d)) {
      l.set(d.name, bl(f, d.at, u, l));
      continue;
    }
    let [g, h, v = {}] = d;
    v.at !== void 0 && (f = bl(f, v.at, u, l));
    let T = 0,
      x = (w, P, N, y = 0, S = 0) => {
        let F = Ry(w),
          {
            delay: U = 0,
            times: b = vo(F),
            type: V = e.type || "keyframes",
            repeat: A,
            repeatType: M,
            repeatDelay: j = 0,
            ...L
          } = P,
          { ease: C = e.ease || "easeOut", duration: E } = P,
          R = typeof U == "function" ? U(y, S) : U,
          k = F.length,
          G = Ao(V) ? V : n?.[V || "keyframes"];
        if (k <= 2 && G) {
          let _ = 100;
          if (k === 2 && Oy(F)) {
            let mt = F[1] - F[0];
            _ = Math.abs(mt);
          }
          let ut = { ...e, ...L };
          E !== void 0 && (ut.duration = X(E));
          let q = sn(ut, _, G);
          ((C = q.ease), (E = q.duration));
        }
        E ?? (E = i);
        let O = f + R;
        b.length === 1 && b[0] === 0 && (b[1] = 1);
        let z = b.length - F.length;
        if (
          (z > 0 && cn(b, z),
          F.length === 1 && F.unshift(null),
          A &&
            kt(
              A < Al,
              `Sequence segments can't repeat ${A} times \u2014 ignoring repeat option. Use a value below ${Al} or apply repeat at the sequence level instead.`
            ),
          A && A < Al)
        ) {
          let _ = E > 0 ? j / E : 0;
          E = cp(E, A, j);
          let ut = [...F],
            q = [...b];
          C = Array.isArray(C) ? [...C] : [C];
          let mt = [...C],
            Ut = M === "reverse" || M === "mirror",
            Ge = ut,
            qt = mt;
          Ut &&
            ((Ge = [...ut].reverse()),
            M === "reverse" &&
              (qt = [...mt].reverse().map((St) => (typeof St == "function" ? lo(St) : St))));
          for (let St = 0; St < A; St++) {
            let ht = Ut && St % 2 === 0,
              be = ht ? Ge : ut,
              lt = ht ? qt : mt,
              Zt = (St + 1) * (1 + _);
            (_ > 0 && (F.push(F[F.length - 1]), b.push(Zt), C.push("linear")), F.push(...be));
            for (let oo = 0; oo < be.length; oo++)
              (b.push(q[oo] + Zt), C.push(oo === 0 ? "linear" : Zr(lt, oo - 1)));
          }
          up(b, A, _);
        }
        let nt = O + E;
        (lp(N, F, C, b, O, nt), (T = Math.max(R + E, T)), (m = Math.max(nt, m)));
      };
    if ($(g)) {
      let w = mp(g, a);
      x(h, v, pp("default", w));
    } else {
      let w = Xs(g, h, r, c),
        P = w.length;
      for (let N = 0; N < P; N++) {
        ((h = h), (v = v));
        let y = w[N],
          S = mp(y, a);
        for (let F in h) x(h[F], Iy(v, F), pp(F, S), N, P);
      }
    }
    ((u = f), (f += T));
  }
  return (
    a.forEach((p, d) => {
      for (let g in p) {
        let h = p[g];
        h.sort(fp);
        let v = [],
          T = [],
          x = [];
        for (let y = 0; y < h.length; y++) {
          let { at: S, value: F, easing: U } = h[y];
          (v.push(F), T.push(gt(0, m, S)), x.push(U || "easeOut"));
        }
        (T[0] !== 0 && (T.unshift(0), v.unshift(v[0]), x.unshift(Dy)),
          T[T.length - 1] !== 1 && (T.push(1), v.push(null)),
          s.has(d) || s.set(d, { keyframes: {}, transition: {} }));
        let w = s.get(d);
        w.keyframes[g] = v;
        let { type: P, ...N } = e;
        w.transition[g] = { ...N, duration: m, ease: x, times: T, ...o };
      }
    }),
    s
  );
}
function mp(t, e) {
  return (!e.has(t) && e.set(t, {}), e.get(t));
}
function pp(t, e) {
  return (e[t] || (e[t] = []), e[t]);
}
function Ry(t) {
  return Array.isArray(t) ? t : [t];
}
function Iy(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
var Ly = (t) => typeof t == "number",
  Oy = (t) => t.every(Ly);
function ky(t, e) {
  return $(t) || typeof t == "number" || (typeof t == "string" && !di(e));
}
function qs(t, e, o, r) {
  let n = [];
  if (ky(t, e)) n.push(Xn(t, (di(e) && e.default) || e, o && (o.default || o)));
  else {
    if (t == null) return n;
    let i = Xs(t, e, r),
      s = i.length;
    J(!!s, "No valid elements provided.", "no-valid-elements");
    for (let a = 0; a < s; a++) {
      let c = i[a],
        l = { ...o };
      ("delay" in l && typeof l.delay == "function" && (l.delay = l.delay(a, s)),
        c instanceof Element
          ? n.push(...ic(c, e, l, qe.get(c)))
          : n.push(...Mn(Ya(c) ?? ac, c, e, l)));
    }
  }
  return n;
}
function hp(t, e, o) {
  let r = [],
    n = t.map((s) => {
      if (Array.isArray(s) && typeof s[0] == "function") {
        let a = s[0],
          c = tt(0);
        return (
          c.on("change", a),
          s.length === 1 ? [c, [0, 1]] : s.length === 2 ? [c, [0, 1], s[1]] : [c, s[1], s[2]]
        );
      }
      return s;
    });
  return (
    dp(n, e, o, { spring: ee }).forEach(({ keyframes: s, transition: a }, c) => {
      r.push(...qs(c, s, a));
    }),
    r
  );
}
function By(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Zs(t = {}) {
  let { scope: e, reduceMotion: o, skipAnimations: r } = t;
  function n(i, s, a) {
    let c = [],
      l,
      u = {};
    if ((o !== void 0 && (u.reduceMotion = o), r !== void 0 && (u.skipAnimations = r), By(i))) {
      let { onComplete: m, ...p } = s || {};
      (typeof m == "function" && (l = m), (c = hp(i, { ...u, ...p }, e)));
    } else {
      let { onComplete: m, ...p } = a || {};
      (typeof m == "function" && (l = m), (c = qs(i, s, { ...u, ...p }, e)));
    }
    let f = new Po(c);
    return (
      l && f.finished.then(l),
      e &&
        (e.animations.push(f),
        f.finished.then(() => {
          At(e.animations, f);
        })),
      f
    );
  }
  return n;
}
var Fy = Object.assign(Zs(), { addEffect: _a, removeEffect: Bi });
function jy() {
  let t = Z(() => ({ current: null, animations: [] })),
    e = wl() ?? void 0,
    { skipAnimations: o } = (0, Js.useContext)(dt),
    r = (0, Js.useMemo)(() => Zs({ scope: t, reduceMotion: e, skipAnimations: o }), [t, e, o]);
  return (
    ui(() => {
      (t.animations.forEach((n) => n.stop()), (t.animations.length = 0));
    }),
    [t, r]
  );
}
function gp(t, e, o, r) {
  if (t == null) return [];
  let n = xt(t, r),
    i = n.length;
  J(!!i, "No valid elements provided.", "no-valid-elements");
  let s = [];
  for (let c = 0; c < i; c++) {
    let l = n[c],
      u = { ...o };
    typeof u.delay == "function" && (u.delay = u.delay(c, i));
    for (let f in e) {
      let m = e[f];
      Array.isArray(m) || (m = [m]);
      let p = { ...Mt(u, f) };
      (p.duration && (p.duration = X(p.duration)), p.delay && (p.delay = X(p.delay)));
      let d = Na(l),
        g = ja(f, p.pseudoElement || ""),
        h = d.get(g);
      (h && h.stop(),
        s.push({
          map: d,
          key: g,
          unresolvedKeyframes: m,
          options: { ...p, element: l, name: f, allowFlatten: !u.type && !u.ease },
        }));
    }
  }
  for (let c = 0; c < s.length; c++) {
    let { unresolvedKeyframes: l, options: u } = s[c],
      { element: f, name: m, pseudoElement: p } = u;
    (!p && l[0] === null && (l[0] = Yi(f, m)),
      pn(l),
      $a(l, m),
      !p && l.length < 2 && l.unshift(Yi(f, m)),
      (u.keyframes = l));
  }
  let a = [];
  for (let c = 0; c < s.length; c++) {
    let { map: l, key: u, options: f } = s[c],
      m = new Rt(f);
    (l.set(u, m), m.finished.finally(() => l.delete(u)), a.push(m));
  }
  return a;
}
var Pl = (t) => {
    function e(o, r, n) {
      return new Po(gp(o, r, n, t));
    }
    return e;
  },
  Ny = Pl();
function Gy() {
  let t = Z(() => ({ current: null, animations: [] })),
    e = Z(() => Pl(t));
  return (
    ui(() => {
      t.animations.forEach((o) => o.stop());
    }),
    [t, e]
  );
}
function yp() {
  let t = Z(Vl);
  return (bt(t.mount, []), t);
}
var Wy = yp;
var xp = B(W(), 1);
function Uy() {
  let t = (0, xp.useContext)(Xt);
  return t ? t.custom : void 0;
}
var vp = B(W(), 1);
function zy(t, e, o, r) {
  (0, vp.useEffect)(() => {
    let n = t.current;
    if (o && n) return Yt(n, e, o, r);
  }, [t, e, o, r]);
}
var Qs = class {
    constructor() {
      this.componentControls = new Set();
    }
    subscribe(e) {
      return (this.componentControls.add(e), () => this.componentControls.delete(e));
    }
    start(e, o) {
      this.componentControls.forEach((r) => {
        r.start(e.nativeEvent || e, o);
      });
    }
    cancel() {
      this.componentControls.forEach((e) => {
        e.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e) => {
        e.stop();
      });
    }
  },
  Ky = () => new Qs();
function $y() {
  return Z(Ky);
}
function Ml(t) {
  return t !== null && typeof t == "object" && Er in t;
}
function Hy(t) {
  if (Ml(t)) return t[Er];
}
function Cl() {
  return _y;
}
function _y(t) {
  we.current && ((we.current.isUpdating = !1), we.current.blockUpdate(), t && t());
}
var Sp = B(W(), 1);
function Yy() {
  return (0, Sp.useCallback)(() => {
    let e = we.current;
    e && e.resetTree();
  }, []);
}
var Gr = B(W(), 1);
function Xy(...t) {
  let e = (0, Gr.useRef)(0),
    [o, r] = (0, Gr.useState)(t[e.current]),
    n = (0, Gr.useCallback)(
      (i) => {
        ((e.current = typeof i != "number" ? We(0, t.length, e.current + 1) : i), r(t[e.current]));
      },
      [t.length, ...t]
    );
  return [o, n];
}
var ta = B(W(), 1);
var qy = { some: 0, all: 1 };
function El(t, e, { root: o, margin: r, amount: n = "some" } = {}) {
  let i = xt(t),
    s = new WeakMap(),
    a = (l) => {
      l.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let m = e(u.target, u);
            typeof m == "function" ? s.set(u.target, m) : c.unobserve(u.target);
          } else typeof f == "function" && (f(u), s.delete(u.target));
      });
    },
    c = new IntersectionObserver(a, {
      root: o,
      rootMargin: r,
      threshold: typeof n == "number" ? n : qy[n],
    });
  return (i.forEach((l) => c.observe(l)), () => c.disconnect());
}
function Zy(t, { root: e, margin: o, amount: r, once: n = !1, initial: i = !1 } = {}) {
  let [s, a] = (0, ta.useState)(i);
  return (
    (0, ta.useEffect)(() => {
      if (!t.current || (n && s)) return;
      let c = () => (a(!0), n ? void 0 : () => a(!1)),
        l = { root: (e && e.current) || void 0, margin: o, amount: r };
      return El(t.current, c, l);
    }, [e, t, o, n, r]),
    s
  );
}
var ea = B(W(), 1);
function Jy() {
  let [t, e] = li(),
    o = Cl(),
    r = (0, ea.useRef)(-1);
  return (
    (0, ea.useEffect)(() => {
      D.postRender(() =>
        D.postRender(() => {
          e === r.current && (at.instantAnimations = !1);
        })
      );
    }, [e]),
    (n) => {
      o(() => {
        ((at.instantAnimations = !0), t(), n(), (r.current = e + 1));
      });
    }
  );
}
function Qy() {
  at.instantAnimations = !1;
}
var oa = B(W(), 1);
function tx() {
  let [t, e] = (0, oa.useState)(!0);
  return (
    (0, oa.useEffect)(() => {
      let o = () => e(!document.hidden);
      return (
        document.hidden && o(),
        document.addEventListener("visibilitychange", o),
        () => {
          document.removeEventListener("visibilitychange", o);
        }
      );
    }, []),
    t
  );
}
function ex(t) {
  return (e) => {
    let o = t.current;
    if (!o) return e;
    let r = o.viewBox?.baseVal;
    if (!r || (r.width === 0 && r.height === 0)) return e;
    let n = o.getBoundingClientRect();
    if (n.width === 0 || n.height === 0) return e;
    let i = r.width / n.width,
      s = r.height / n.height,
      a = n.left + window.scrollX,
      c = n.top + window.scrollY;
    return { x: (e.x - a) * i + a, y: (e.y - c) * s + c };
  };
}
function ox(t) {
  return (e) => {
    let o = t.current;
    if (!o) return e;
    let r = rx(o);
    if (!r) return e;
    let n = o.getBoundingClientRect(),
      i = n.left + window.scrollX + n.width / 2,
      s = n.top + window.scrollY + n.height / 2,
      a = e.x - i,
      c = e.y - s;
    return { x: i + r.a * a + r.c * c, y: s + r.b * a + r.d * c };
  };
}
function rx(t) {
  let { transform: e } = getComputedStyle(t);
  if (!e || e === "none") return null;
  let o = e.match(/^matrix3d\((.*)\)$/u) || e.match(/^matrix\((.*)\)$/u);
  if (!o) return null;
  let r = o[1].split(",").map(Number),
    n = e.startsWith("matrix3d"),
    i = r[0],
    s = r[1],
    a = n ? r[4] : r[2],
    c = n ? r[5] : r[3],
    l = i * c - s * a;
  return Math.abs(l) < 1e-10 ? null : { a: c / l, b: -s / l, c: -a / l, d: i / l };
}
var Ne = new Map(),
  Wr = new Map();
var Ur = (t, e) => {
  let o = st.has(e) ? "transform" : e;
  return `${t}: ${o}`;
};
function Dl(t, e, o) {
  let r = Ur(t, e),
    n = Ne.get(r);
  if (!n) return null;
  let { animation: i, startTime: s } = n;
  function a() {
    window.MotionCancelOptimisedAnimation?.(t, e, o);
  }
  return ((i.onfinish = a), s === null || window.MotionHandoffIsComplete?.(t) ? (a(), null) : s);
}
var ra,
  zr,
  Rl = new Set();
function nx() {
  (Rl.forEach((t) => {
    (t.animation.play(), (t.animation.startTime = t.startTime));
  }),
    Rl.clear());
}
function ix(t, e, o, r, n) {
  if (window.MotionIsMounted) return;
  let i = t.dataset[Li];
  if (!i) return;
  window.MotionHandoffAnimation = Dl;
  let s = Ur(i, e);
  zr ||
    ((zr = sr(t, e, [o[0], o[0]], { duration: 1e4, ease: "linear" })),
    Ne.set(s, { animation: zr, startTime: null }),
    (window.MotionHandoffAnimation = Dl),
    (window.MotionHasOptimisedAnimation = (c, l) => {
      if (!c) return !1;
      if (!l) return Wr.has(c);
      let u = Ur(c, l);
      return !!Ne.get(u);
    }),
    (window.MotionHandoffMarkAsComplete = (c) => {
      Wr.has(c) && Wr.set(c, !0);
    }),
    (window.MotionHandoffIsComplete = (c) => Wr.get(c) === !0),
    (window.MotionCancelOptimisedAnimation = (c, l, u, f) => {
      let m = Ur(c, l),
        p = Ne.get(m);
      p &&
        (u && f === void 0
          ? u.postRender(() => {
              u.postRender(() => {
                p.animation.cancel();
              });
            })
          : p.animation.cancel(),
        u && f
          ? (Rl.add(p), u.render(nx))
          : (Ne.delete(m), Ne.size || (window.MotionCancelOptimisedAnimation = void 0)));
    }),
    (window.MotionCheckAppearSync = (c, l, u) => {
      let f = Eo(c);
      if (!f) return;
      let m = window.MotionHasOptimisedAnimation?.(f, l),
        p = c.props.values?.[l];
      if (!m || !p) return;
      let d = u.on("change", (g) => {
        p.get() !== g && (window.MotionCancelOptimisedAnimation?.(f, l), d());
      });
      return d;
    }));
  let a = () => {
    zr.cancel();
    let c = sr(t, e, o, r);
    (ra === void 0 && (ra = performance.now()),
      (c.startTime = ra),
      Ne.set(s, { animation: c, startTime: ra }),
      n && n(c));
  };
  (Wr.set(i, !1), zr.ready ? zr.ready.then(a).catch(Q) : a());
}
var na = B(W(), 1);
var Il = () => ({}),
  Ll = class extends ve {
    constructor() {
      (super(...arguments), (this.measureInstanceViewportBox = ot));
    }
    build() {}
    resetTransform() {}
    restoreTransform() {}
    removeValueFromRenderState() {}
    renderInstance() {}
    scrapeMotionValuesFromProps() {
      return Il();
    }
    getBaseTargetFromProps() {}
    readValueFromInstance(e, o, r) {
      return r.initialState[o] || 0;
    }
    sortInstanceNodePosition() {
      return 0;
    }
  },
  sx = zo({ scrapeMotionValuesFromProps: Il, createRenderState: Il });
function ax(t) {
  let [e, o] = (0, na.useState)(t),
    r = sx({}, !1),
    n = Z(
      () =>
        new Ll(
          {
            props: {
              onUpdate: (s) => {
                o({ ...s });
              },
            },
            visualState: r,
            presenceContext: null,
          },
          { initialState: t }
        )
    );
  (0, na.useLayoutEffect)(() => (n.mount({}), () => n.unmount()), [n]);
  let i = Z(() => (s) => He(n, s));
  return [e, i];
}
var Vp = B(W(), 1);
var cx = 1e5,
  wp = (t) => (t > 0.001 ? 1 / t : cx),
  Tp = !1;
function lx(t) {
  let e = Ot(1),
    o = Ot(1),
    { visualElement: r } = (0, Vp.useContext)(se);
  (J(
    !!(t || r),
    "If no scale values are provided, useInvertedScale must be used within a child of another motion component."
  ),
    kt(
      Tp,
      "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."
    ),
    (Tp = !0),
    t
      ? ((e = t.scaleX || e), (o = t.scaleY || o))
      : r && ((e = r.getValue("scaleX", 1)), (o = r.getValue("scaleY", 1))));
  let n = je(e, wp),
    i = je(o, wp);
  return { scaleX: n, scaleY: i };
}
var Bp = {};
Fp(Bp, { Group: () => Dp, Item: () => kp });
var Ol = B(ce(), 1);
var ae = B(W(), 1);
var bp = B(W(), 1),
  ia = (0, bp.createContext)(null);
function Mp(t, e, o, r, n, i = "ltr") {
  let s = t.findIndex((p) => p.value === e);
  if (s === -1) return t;
  if (n === "xy") {
    let { layout: p } = t[s],
      d = { x: K(p.x.min, p.x.max, 0.5) + o.x, y: K(p.y.min, p.y.max, 0.5) + o.y },
      g = ux(t),
      h = g.find((P) => P.items.includes(t[s])),
      v = g.reduce((P, N) => (Ap(d.y, N) < Ap(d.y, P) ? N : P));
    if (v !== h) return fx(t, s, d.x, v, i);
    let T = Pp(d, p),
      x = -1,
      w = T;
    return (
      t.forEach((P, N) => {
        if (N === s) return;
        let y = Pp(d, P.layout);
        y < w && ((x = N), (w = y));
      }),
      x === -1 ? t : xi(t, s, s + Math.sign(x - s))
    );
  }
  if (!r[n]) return t;
  let a = r[n] > 0 ? 1 : -1,
    c = t[s + a];
  if (!c) return t;
  let u = t[s].layout[n],
    f = c.layout[n],
    m = K(f.min, f.max, 0.5);
  return (a === 1 && u.max + o[n] > m) || (a === -1 && u.min + o[n] < m) ? xi(t, s, s + a) : t;
}
function ux(t) {
  let e = [];
  return (
    t.forEach((o) => {
      let { min: r, max: n } = o.layout.y,
        i = e[e.length - 1];
      !i || r >= i.max || n <= i.min
        ? e.push({ items: [o], min: r, max: n })
        : (i.items.push(o), (i.min = Math.min(i.min, r)), (i.max = Math.max(i.max, n)));
    }),
    e
  );
}
function Ap(t, e) {
  return t < e.min ? e.min - t : t > e.max ? t - e.max : 0;
}
function fx(t, e, o, r, n) {
  let i = t.filter((l, u) => u !== e),
    s = r.items.find((l) => {
      let u = K(l.layout.x.min, l.layout.x.max, 0.5);
      return n === "ltr" ? o < u : o > u;
    }),
    a = s ? i.indexOf(s) : i.indexOf(r.items[r.items.length - 1]) + 1,
    c = [...i];
  return (c.splice(a, 0, t[e]), c.every((l, u) => l === t[u]) ? t : c);
}
function Pp(t, e) {
  let o = Math.max(e.x.min - t.x, 0, t.x - e.x.max),
    r = Math.max(e.y.min - t.y, 0, t.y - e.y.max);
  return o * o + r * r;
}
var Cp = (t, e) => t.max <= e.min || e.max <= t.min;
function Ep(t) {
  let e = !1,
    o = !1;
  for (let r = 0; r < t.length; r++)
    for (let n = r + 1; n < t.length; n++)
      if ((e || (e = Cp(t[r].x, t[n].x)), o || (o = Cp(t[r].y, t[n].y)), e && o)) return "xy";
  return e ? "x" : "y";
}
function mx(
  {
    children: t,
    as: e = "ul",
    axis: o,
    onReorder: r,
    values: n,
    onPointerDownCapture: i,
    onClickCapture: s,
    ...a
  },
  c
) {
  let l = Z(() => si[e]),
    u = (0, ae.useRef)(new Map()),
    [f, m] = (0, ae.useState)("y"),
    p = (0, ae.useRef)(!1),
    d = (0, ae.useRef)(!1),
    g = (0, ae.useRef)(null),
    h = o || f;
  J(!!n, "Reorder.Group must be provided a values prop", "reorder-values");
  let v = new Set(n);
  u.current.forEach((P, N) => {
    v.has(N) || u.current.delete(N);
  });
  let T = {
    axis: h,
    groupRef: g,
    hasReordered: d,
    registerItem: (P, N) => {
      if ((u.current.set(P, N), !o)) {
        let y = Ep(
          n.flatMap((S) => {
            let F = u.current.get(S);
            return F ? [F] : [];
          })
        );
        y !== f && m(y);
      }
    },
    updateOrder: (P, N, y) => {
      if (p.current) return;
      let S = n.flatMap((b) => {
          let V = u.current.get(b);
          return V ? [{ value: b, layout: V }] : [];
        }),
        F =
          g.current?.ownerDocument.defaultView?.getComputedStyle(g.current).direction === "rtl"
            ? "rtl"
            : "ltr",
        U = Mp(S, P, N, y, h, F);
      if (S !== U) {
        ((p.current = !0), (d.current = !0));
        let b = [...n],
          V = S.map(({ value: A }) => n.indexOf(A));
        (U.forEach(({ value: A }, M) => {
          b[V[M]] = A;
        }),
          r(b));
      }
    },
  };
  (0, ae.useEffect)(() => {
    p.current = !1;
  }, [n]);
  let x = (P) => {
      ((g.current = P), typeof c == "function" ? c(P) : c && (c.current = P));
    },
    w = { overflowAnchor: "none", ...a.style };
  return (0, Ol.jsx)(l, {
    ...a,
    style: w,
    ref: x,
    onPointerDownCapture: (P) => {
      ((d.current = !1), i?.(P));
    },
    onClickCapture: (P) => {
      (d.current && P.detail && ((d.current = !1), P.stopPropagation(), P.preventDefault()),
        s?.(P));
    },
    ignoreStrict: !0,
    children: (0, Ol.jsx)(ia.Provider, { value: T, children: t }),
  });
}
var Dp = (0, ae.forwardRef)(mx);
var Op = B(ce(), 1);
var sa = B(W(), 1);
var px = new Set(["auto", "scroll"]),
  gi = new WeakMap(),
  yi = new WeakMap(),
  hi = null;
function Rp() {
  if (hi) {
    let t = kl(hi, "y");
    t && (yi.delete(t), gi.delete(t));
    let e = kl(hi, "x");
    (e && e !== t && (yi.delete(e), gi.delete(e)), (hi = null));
  }
}
function dx(t, e) {
  let o = getComputedStyle(t),
    r = e === "x" ? o.overflowX : o.overflowY,
    n = t === document.body || t === document.documentElement;
  return px.has(r) || n;
}
function kl(t, e) {
  let o = t?.parentElement;
  for (; o;) {
    if (dx(o, e)) return o;
    o = o.parentElement;
  }
  return null;
}
function hx(t, e, o) {
  let r = e.getBoundingClientRect(),
    n = o === "x" ? Math.max(0, r.left) : Math.max(0, r.top),
    i = o === "x" ? Math.min(window.innerWidth, r.right) : Math.min(window.innerHeight, r.bottom),
    s = t - n,
    a = i - t;
  if (s < 50) {
    let c = 1 - s / 50;
    return { amount: -25 * c * c, edge: "start" };
  } else if (a < 50) {
    let c = 1 - a / 50;
    return { amount: 25 * c * c, edge: "end" };
  }
  return { amount: 0, edge: null };
}
function Ip(t, e, o, r) {
  if (!t) return;
  hi = t;
  let n = kl(t, o);
  if (!n) return;
  let i = e - (o === "x" ? window.scrollX : window.scrollY),
    { amount: s, edge: a } = hx(i, n, o);
  if (a === null) {
    (yi.delete(n), gi.delete(n));
    return;
  }
  let c = yi.get(n),
    l = n === document.body || n === document.documentElement;
  if (c !== a) {
    if (!((a === "start" && r < 0) || (a === "end" && r > 0))) return;
    yi.set(n, a);
    let f =
      o === "x"
        ? n.scrollWidth - (l ? window.innerWidth : n.clientWidth)
        : n.scrollHeight - (l ? window.innerHeight : n.clientHeight);
    gi.set(n, f);
  }
  if (s > 0) {
    let u = gi.get(n);
    if ((o === "x" ? (l ? window.scrollX : n.scrollLeft) : l ? window.scrollY : n.scrollTop) >= u)
      return;
  }
  o === "x"
    ? l
      ? window.scrollBy({ left: s })
      : (n.scrollLeft += s)
    : l
      ? window.scrollBy({ top: s })
      : (n.scrollTop += s);
}
function Lp(t, e = 0) {
  return $(t) ? t : Ot(e);
}
function gx(
  {
    children: t,
    style: e = {},
    value: o,
    as: r = "li",
    onDrag: n,
    onDragEnd: i,
    layout: s = !0,
    ...a
  },
  c
) {
  let l = Z(() => si[r]),
    u = (0, sa.useContext)(ia),
    f = { x: Lp(e.x), y: Lp(e.y) },
    m = je([f.x, f.y], ([x, w]) => (x || w ? 1 : "unset"));
  J(!!u, "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
  let { axis: p, registerItem: d, updateOrder: g, groupRef: h, hasReordered: v } = u;
  return (0, Op.jsx)(l, {
    drag: p === "xy" ? !0 : p,
    ...a,
    dragSnapToOrigin: !0,
    style: { ...e, x: f.x, y: f.y, zIndex: m },
    layout: s,
    onDrag: (x, w) => {
      let { velocity: P, point: N } = w,
        y = { x: f.x.get(), y: f.y.get() };
      g(o, y, P);
      let S = p === "xy" ? (Math.abs(P.x) > Math.abs(P.y) ? "x" : "y") : p;
      (Ip(h.current, N[S], S, P[S]), n && n(x, w));
    },
    onDragEnd: (x, w) => {
      ((v.current = !1), Rp(), i && i(x, w));
    },
    onLayoutMeasure: (x) => {
      d(o, x);
    },
    ref: c,
    ignoreStrict: !0,
    children: t,
  });
}
var kp = (0, sa.forwardRef)(gx);
export {
  Te as a,
  qc as b,
  bt as c,
  Xt as d,
  ro as e,
  At as f,
  xi as g,
  et as h,
  kt as i,
  J as j,
  at as k,
  no as l,
  io as m,
  so as n,
  ao as o,
  Q as p,
  Jt as q,
  gt as r,
  le as s,
  X as t,
  pt as u,
  co as v,
  jp as w,
  ca as x,
  We as y,
  Ae as z,
  Kr as A,
  lo as B,
  vi as C,
  Xo as D,
  $r as E,
  Hr as F,
  _r as G,
  Yr as H,
  Xr as I,
  ua as J,
  fa as K,
  qo as L,
  Np as M,
  qr as N,
  Zr as O,
  Pe as P,
  Zo as Q,
  H as R,
  Y as S,
  uo as T,
  fo as U,
  Jr as V,
  Qt as W,
  fe as X,
  Jo as Y,
  Ti as Z,
  te as _,
  er as $,
  zt as aa,
  Pt as ba,
  I as ca,
  ma as da,
  pa as ea,
  Vi as fa,
  Me as ga,
  it as ha,
  da as ia,
  mo as ja,
  ct as ka,
  ga as la,
  po as ma,
  K as na,
  bi as oa,
  Ai as pa,
  tn as qa,
  ya as ra,
  en as sa,
  xa as ta,
  ql as ua,
  Zl as va,
  ho as wa,
  on as xa,
  D as ya,
  rt as za,
  Ce as Aa,
  rn as Ba,
  nn as Ca,
  yo as Da,
  sn as Ea,
  ee as Fa,
  xo as Ga,
  an as Ha,
  cn as Ia,
  vo as Ja,
  Va as Ka,
  ru as La,
  Dt as Ma,
  me as Na,
  ln as Oa,
  Bt as Pa,
  yd as Qa,
  ir as Ra,
  yt as Sa,
  su as Ta,
  mn as Ua,
  So as Va,
  pn as Wa,
  Ue as Xa,
  dn as Ya,
  hn as Za,
  Tt as _a,
  st as $a,
  Ra as ab,
  Ee as bb,
  gn as cb,
  Ia as db,
  Vo as eb,
  xn as fb,
  he as gb,
  ge as hb,
  Ke as ib,
  bo as jb,
  sr as kb,
  Ao as lb,
  ar as mb,
  Rt as nb,
  cr as ob,
  vn as pb,
  lr as qb,
  $e as rb,
  Ci as sb,
  Oa as tb,
  Vt as ub,
  ur as vb,
  wn as wb,
  re as xb,
  Po as yb,
  mr as zb,
  ja as Ab,
  Na as Bb,
  Tn as Cb,
  ye as Db,
  Kt as Eb,
  tt as Fb,
  Mo as Gb,
  Mt as Hb,
  Ga as Ib,
  Wa as Jb,
  ne as Kb,
  Mu as Lb,
  Cu as Mb,
  Ri as Nb,
  Vn as Ob,
  Ft as Pb,
  Co as Qb,
  za as Rb,
  pr as Sb,
  $ as Tb,
  Ka as Ub,
  dr as Vb,
  $t as Wb,
  Li as Xb,
  hr as Yb,
  Eo as Zb,
  bn as _b,
  An as $b,
  He as ac,
  Pn as bc,
  Oi as cc,
  ki as dc,
  Do as ec,
  $a as fc,
  Lu as gc,
  eh as hc,
  _a as ic,
  Bi as jc,
  Ya as kc,
  Fi as lc,
  Mn as mc,
  Ht as nc,
  jt as oc,
  xt as pc,
  Cn as qc,
  De as rc,
  ji as sc,
  En as tc,
  Ni as uc,
  Gi as vc,
  nh as wc,
  Ro as xc,
  qa as yc,
  Rn as zc,
  In as Ac,
  ch as Bc,
  Bu as Cc,
  Fu as Dc,
  Wi as Ec,
  uh as Fc,
  Ln as Gc,
  Za as Hc,
  Ja as Ic,
  On as Jc,
  _t as Kc,
  Ui as Lc,
  yr as Mc,
  tc as Nc,
  zi as Oc,
  Ki as Pc,
  oc as Qc,
  It as Rc,
  ec as Sc,
  xr as Tc,
  vr as Uc,
  rc as Vc,
  ic as Wc,
  sc as Xc,
  ac as Yc,
  Ct as Zc,
  $i as _c,
  Nt as $c,
  kn as ad,
  cc as bd,
  lc as cd,
  _i as dd,
  Io as ed,
  uc as fd,
  fc as gd,
  pc as hd,
  Yi as id,
  Re as jd,
  Gt as kd,
  Th as ld,
  dc as md,
  Vh as nd,
  bh as od,
  Bn as pd,
  Ah as qd,
  ts as rd,
  hc as sd,
  Ph as td,
  Mh as ud,
  es as vd,
  Eh as wd,
  gc as xd,
  yc as yd,
  ns as zd,
  Nh as Ad,
  vc as Bd,
  Xe as Cd,
  Sc as Dd,
  ot as Ed,
  qe as Fd,
  Oe as Gd,
  ie as Hd,
  jn as Id,
  Lo as Jd,
  Ze as Kd,
  Nn as Ld,
  wc as Md,
  Je as Nd,
  Oo as Od,
  Gn as Pd,
  Wn as Qd,
  Tc as Rd,
  ve as Sd,
  ko as Td,
  vt as Ud,
  Un as Vd,
  Se as Wd,
  pf as Xd,
  zn as Yd,
  Bo as Zd,
  Fo as _d,
  Vc as $d,
  Kn as ae,
  $n as be,
  bc as ce,
  Hn as de,
  _n as ee,
  Pc as fe,
  hf as ge,
  gf as he,
  Yn as ie,
  Wt as je,
  ss as ke,
  ft as le,
  Dc as me,
  Mc as ne,
  jo as oe,
  Cc as pe,
  Rc as qe,
  Ec as re,
  Tr as se,
  Ic as te,
  vf as ue,
  Lc as ve,
  as as we,
  cs as xe,
  Oc as ye,
  Bc as ze,
  kc as Ae,
  ls as Be,
  us as Ce,
  fs as De,
  Lt as Ee,
  Fc as Fe,
  No as Ge,
  jc as He,
  Nc as Ie,
  Gc as Je,
  Xn as Ke,
  Yt as Le,
  Wc as Me,
  qn as Ne,
  Zn as Oe,
  tg as Pe,
  Qe,
  Jn as Re,
  Go as Se,
  Qn as Te,
  Of as Ue,
  kf as Ve,
  $c as We,
  ms as Xe,
  we as Ye,
  Uo as Ze,
  ei as _e,
  Hc as $e,
  Pg as af,
  Mg as bf,
  Cg as cf,
  dt as df,
  sl as ef,
  cl as ff,
  ul as gf,
  ni as hf,
  Hg as if,
  ey as jf,
  ml as kf,
  li as lf,
  ry as mf,
  ny as nf,
  iy as of,
  se as pf,
  Mr as qf,
  Yc as rf,
  zo as sf,
  ri as tf,
  sy as uf,
  $o as vf,
  Zc as wf,
  ke as xf,
  Jc as yf,
  Qc as zf,
  si as Af,
  ui as Bf,
  dl as Cf,
  ay as Df,
  cy as Ef,
  hl as Ff,
  fi as Gf,
  _s as Hf,
  mi as If,
  xy as Jf,
  vy as Kf,
  Ot as Lf,
  Sy as Mf,
  je as Nf,
  Ty as Of,
  Vy as Pf,
  vl as Qf,
  by as Rf,
  Ay as Sf,
  pi as Tf,
  Py as Uf,
  Sl as Vf,
  wl as Wf,
  Vl as Xf,
  Zs as Yf,
  Fy as Zf,
  jy as _f,
  Ny as $f,
  Gy as ag,
  yp as bg,
  Wy as cg,
  Uy as dg,
  zy as eg,
  Qs as fg,
  $y as gg,
  Ml as hg,
  Hy as ig,
  Cl as jg,
  Yy as kg,
  Xy as lg,
  El as mg,
  Zy as ng,
  Jy as og,
  Qy as pg,
  tx as qg,
  ex as rg,
  ox as sg,
  ix as tg,
  ax as ug,
  lx as vg,
  Bp as wg,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-VED5QBJM.mjs.map
