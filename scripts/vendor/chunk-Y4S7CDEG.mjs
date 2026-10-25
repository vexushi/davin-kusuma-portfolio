import { ah as De, cb as be, hb as v, kb as G, mg as Ne } from "./chunk-3W5IVLGF.mjs";
import { a as Ie } from "./chunk-YVU36PW7.mjs";
import { x as z } from "./chunk-VEB6EOI6.mjs";
import { y as xe } from "./chunk-CFC4BE4R.mjs";
import {
  $ as le,
  Io as he,
  Nk as ye,
  j as oe,
  mb as fe,
  qg as Se,
  qx as y,
  rb as ge,
  rx as Ce,
} from "./chunk-UDNVJCNV.mjs";
import {
  Bb as O,
  Eg as k,
  Gh as pe,
  Hb as Z,
  Ng as ue,
  Zg as ce,
  bh as me,
  el as V,
  jc as M,
  lc as ie,
  qf as ae,
  s as D,
  sd as $,
  sf as se,
  tf as de,
  xb as A,
  yb as te,
} from "./chunk-KHAT6QH3.mjs";
import { a as Re } from "./chunk-ABWDV3RU.mjs";
import { v as ve } from "./chunk-KBPGUKJ2.mjs";
import { a as T } from "./chunk-SKXRFR7Y.mjs";
import { a as F } from "./chunk-AYNVEX5D.mjs";
import { p as re } from "./chunk-GOIPLIIS.mjs";
import { e as ne } from "./chunk-Y3GZLMBF.mjs";
import { b as g } from "./chunk-4JY5UMT2.mjs";
import { i as ee } from "./chunk-WBI6GGAG.mjs";
function w(e, t = e.id) {
  if (me(e)) {
    if (e.usesLayoutTemplateRectForModuleIdentifierCached() && !e.cache.layoutTemplateRects)
      return !0;
    if (e.usesDOMRectCached()) return e.cache.getRawDOMRect(t) === null;
  }
  return t !== e.id && !Qe(e, t);
}
function Qe(e, t) {
  let r = e.tree();
  if (!r) return e.cache.getRawDOMRect(t) !== null;
  let n = t,
    o = e;
  for (; o;) {
    if (o.cache.getRawDOMRect(n) !== null) return !0;
    let i = o.cache.getRenderInstance(n)?.parentRenderId;
    if (!i || ye(i, o.id) !== n) return !1;
    ((n = i), (o = r.get(o.parentid)));
  }
  return !1;
}
async function qe(e, t, r) {
  let n = w(t);
  for (; n;) {
    if (r?.aborted) return;
    (await new Promise((o) => e.scheduler.runBeforeNextFrame(o)), (n = w(t)));
  }
}
async function lt(e, t, r = 2e3) {
  let n = Array.isArray(t) ? t : [t],
    o = new AbortController(),
    i = Promise.all(n.map((a) => qe(e, a, o.signal))),
    s = (async () => {
      (await T(r), o.abort());
    })();
  await Promise.race([i, s]);
}
var Me = [y.video, y.youtube, y.vimeo, y.codeblock, y.twitter, y.embed];
function It(e, t) {
  let r = Z(t);
  return te(r)
    ? r.type === "canvasComponent"
    : A(r)
      ? e.tree.getNodeWithTrait(r.moduleId, $)?.type === "canvasComponent"
      : !1;
}
async function yt(e, t) {
  let r = Z(t);
  A(r) && (await e.stores.modulesStore.addExternalModulesToProject([r], { onTreeUpdate() {} }));
}
var ke = new WeakMap();
async function ht(e) {
  let { modules: t } = await e.stores.modulesStore.lookUpModules(Me.map(Ce)),
    r = [];
  for (let n = 0; n < t.length; n++) {
    let o = t[n];
    g(o, "Module must exist");
    let i = Me[n];
    (g(i, "Module component must exist"),
      ke.set(i, o),
      g(o.files.module, "Module must have a module file"),
      r.push(O(o.id, o.saveId, o.files.module, i.exportSpecifier ?? "default")));
  }
  await e.stores.modulesStore.preloadExternalModules(r);
}
function xt(e, t) {
  let r = ke.get(t);
  g(r, "Preloaded module must exist");
  let n = e.getNodeWithTrait(r.id, $);
  return n
    ? n.codeComponentIdentifier
    : (g(r.files.module, "Module must have a module file"),
      O(r.id, r.saveId, r.files.module, t.exportSpecifier ?? "default").value);
}
function Mt(e, t, r) {
  let n = t && e.getNode(t);
  if (!n || !k(n)) return r(t, {}, !1);
  let o = ge(e, n) ? {} : { visible: !1 },
    i = r(n.originalid, o, !0);
  if (i === void 0) return;
  let s = Se.getReplicaForTemplateNode(e, n);
  return s ? (o.visible === !1 && Ie(e, s, i, { visible: !0 }), oe(s.id, i)) : i;
}
function Te(e = !0) {
  return e && re.isOn("canvasRepeatSelection") ? Je : we;
}
function we({ node: e, renderId: t }) {
  return t === e.id;
}
function Je(e) {
  return we(e) || !w(e.node, e.renderId);
}
function Pe(e, t, r = e.id) {
  let n = e.children;
  return ae(e) ? (!n || n.length === 0 ? [] : (t.getChildrenRects(r) ?? [])) : null;
}
var Ee = 4,
  Le = 20;
function Ae(e, t, r) {
  g(t.length, "childInsertion only works correctly if there are more than 0 child rects");
  let { rect: n, index: o } = D.closestRect(t, r),
    i = de(e),
    s = se(e) ? !i : e.resolveValue("stackDirection") === "horizontal",
    a = s ? "x" : "y",
    u = s ? "y" : "x",
    S = s ? "width" : "height",
    c = s ? "height" : "width",
    f = r[a] < n[a] + n[S] / 2,
    d = i && ne(e.gridColumnCount) ? Math.max(Math.floor(e.gridColumnCount), 1) : 1,
    m = f ? o - d : o + d,
    l = t[m],
    h = !l || (f ? l[a] >= n[a] : n[a] >= l[a]),
    p = f ? o : Math.min(o + d, t.length);
  if (h) {
    let I = f ? n[a] + Ee : n[a] + n[S] - Ee;
    return {
      insertionIndex: p,
      localInsertionLine: { a: P(a, I, n[u]), b: P(a, I, n[u] + Math.max(n[c], Le)) },
    };
  } else {
    let I = f ? (l[a] + l[S] + n[a]) / 2 : (n[a] + n[S] + l[a]) / 2;
    return {
      insertionIndex: p,
      localInsertionLine: {
        a: P(a, I, Math.min(l[u], n[u])),
        b: P(a, I, Math.max(l[u] + l[c], n[u] + Math.max(n[c], Le))),
      },
    };
  }
}
function P(e, t, r) {
  return e === "x" ? { x: t, y: r } : { x: r, y: t };
}
var Oe = 10;
function Ke(e, t) {
  for (let r of e) if (t.includes(r)) return !0;
  return !1;
}
function Xe(e, t, r, n, o) {
  let i = e.node;
  if (o.length === 0 || i.stackWrapEnabled || ue(i) || k(i)) return null;
  let { tree: s } = t,
    { zoom: a } = t.stores.canvasStore,
    u = s.getParent(i.id);
  if (u && M(u) && (u.stackDirection !== i.stackDirection || u.stackWrapEnabled)) return null;
  let S = G(s, e, r, !0),
    c = be(s, e),
    f = i.stackDirection === "vertical",
    d = f ? "x" : "y",
    m = f ? "y" : "x",
    l = f ? "width" : "height",
    h = f ? "height" : "width",
    p = c[l],
    I = c[h],
    x = p * a,
    E = I * a;
  if (x < 40 || E < 40) return null;
  let B = S[d],
    U = 10 / a,
    H = D.merge(...o),
    Y = H[d],
    Ve = Y + H[l],
    ze = Math.max(U, Y / 2),
    Ge = Math.max(U, (p - Ve) / 2),
    L = B <= ze,
    We = B >= p - Ge;
  if (!L && !We) return null;
  let je = L ? 0 : 1,
    R = n[h],
    Q = 4 / a,
    q = L ? Q : p - Q,
    J = I / 2,
    K = R / 2,
    X = I / 3,
    _ = S[m],
    C = "end";
  R > I ? (C = "center") : _ < X ? (C = "start") : _ < 2 * X && (C = "center");
  let N, b;
  switch (C) {
    case "start": {
      ((N = 0), (b = R));
      break;
    }
    case "end": {
      ((b = I), (N = b - R));
      break;
    }
    default: {
      ((N = J - K), (b = J + K));
      break;
    }
  }
  let Be = { [d]: q, [m]: N },
    Ue = { [d]: q, [m]: b },
    He = v(s, e, Be, { includeNode: !0 }),
    Ye = v(s, e, Ue, { includeNode: !0 });
  return { insertionIndex: je, insertionLine: { a: He, b: Ye }, wrap: { wrapAlignment: C } };
}
function $e(e, t, r, n, { allowWrapping: o = !0 } = {}) {
  let i = e.node;
  if (!V(i)) return { insertionIndex: null, insertionLine: null };
  let s = Pe(i, t.stores.layoutCache, e.renderId);
  if (!s) return { insertionIndex: null, insertionLine: null };
  if (o && _e(e)) {
    let d = Xe(e, t, r, n, s);
    if (d) return d;
  }
  let a = t.tree,
    u = G(a, e, r, !0);
  if (s.length === 0) return { insertionIndex: 0, insertionLine: null };
  let { insertionIndex: S, localInsertionLine: c } = Ae(i, s, u),
    f = { a: v(a, e, c.a, { includeNode: !0 }), b: v(a, e, c.b, { includeNode: !0 }) };
  return { insertionIndex: S, insertionLine: f };
}
function _e(e) {
  return M(e.node);
}
function Ze(e) {
  return ie(e.node);
}
function rn(e, t, r, n, o = {}) {
  return $e({ node: e, renderId: e.id }, t, r, n, o);
}
function on(e, t, r, n, o = !1) {
  return tt(e, t, r, n ? { node: n, renderId: n.id } : null, o, !1)?.node ?? null;
}
var et = { width: 10, height: 10 };
function tt(e, t, r, n, o = !1, i = !0) {
  g(r.length, "getStackOrGridInRange(): expects at least a single selected node");
  let s = e.stores.scopeStore.active;
  if (r.some(le)) return null;
  let u = Te(i),
    S = xe(e.tree, s, t, !1, !1, void 0, u)
      .filter(
        ({ node: d }) =>
          !(
            (he(d) && d.locked) ||
            !V(d) ||
            Ne(d) ||
            fe(e.tree, e.stores.overlayStore.activeOverlays, d)
          )
      )
      .reverse();
  if (n) {
    let d = n.node.id,
      m = S.find((l) => l.node.id === d && l.renderId === n.renderId);
    if (m) return m;
  }
  let c = null,
    f = r.map((d) => d.id);
  for (let d of S) {
    let m = d.node;
    if (!pe(m) || (o && !ce(m))) continue;
    let l = e.tree.getAncestorIds(m.id);
    if ((l.push(m.id), Ke(l, f) || (c || (c = d), !Ze(d)))) continue;
    let { insertionLine: p } = $e(d, e, t, et);
    if (!p) continue;
    if (p.a.x === p.b.x) {
      if (Math.abs(t.x - p.a.x) * e.stores.canvasStore.zoom > Oe) continue;
    } else if (p.a.y === p.b.y) {
      if (Math.abs(t.y - p.a.y) * e.stores.canvasStore.zoom > Oe) continue;
    } else continue;
    if (r.every((x) => z(e.tree, m, x, s.id, e.componentLoader))) return d;
  }
  if (c && Ze(c)) {
    let d = c.node;
    if (r.every((l) => z(e.tree, d, l, s.id, e.componentLoader))) return c;
  }
  return null;
}
function an(e, t, { wrapAlignment: r }) {
  let n = De.addStack(e, [t]);
  if (!n) return null;
  let o = e.tree.getNode(n);
  return !o || !M(o)
    ? null
    : (o.set({
        stackDirection: t.stackDirection === "horizontal" ? "vertical" : "horizontal",
        stackAlignment: r,
      }),
      o);
}
function Fe(e) {
  return !Number.isNaN(e.getTime());
}
function un(e) {
  return e.match(/^\d{2}:\d{2}$/gu) !== null;
}
function nt(e) {
  return e.toISOString().split("T")[0];
}
function cn(e) {
  let t = new Date(e);
  return Fe(t) ? nt(t) : "";
}
function mn(e) {
  let t = new Date(e);
  return Fe(t)
    ? `${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}`
    : "";
}
var pn = (() => {
    let e = null;
    return () => {
      if (F(e)) return e;
      let t = document.createElement("input"),
        r = "a";
      return (t.setAttribute("type", "date"), t.setAttribute("value", r), (e = t.value !== r), e);
    };
  })(),
  fn = (() => {
    let e = null;
    return () => {
      if (F(e)) return e;
      let t = document.createElement("input"),
        r = "a";
      return (t.setAttribute("type", "time"), t.setAttribute("value", r), (e = t.value !== r), e);
    };
  })(),
  W = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/u;
function j(e) {
  return W.test(e);
}
function gn(e) {
  if (!e) return;
  if (j(e)) return e;
  let t = new Date(e).toISOString();
  return (g(j(t), "Date format is not valid"), t);
}
function rt(e) {
  W.exec(e);
  let t = W.exec(e);
  g(t, "The provided date cannot have conformed to StandardZuluDateString");
  let [, r, n, o, i, s, a, u] = t;
  return [r, n, o, i, s, a, u];
}
function Sn([e, t, r, n, o, i, s]) {
  let a = `${e}-${t}-${r}T${n}:${o}:${i}.${s}Z`;
  return (g(j(a)), a);
}
function In(e) {
  let [t, r, n] = rt(e);
  return `${n}/${r}/${t}`;
}
var ot = ee("pollProject");
async function vn(e, t) {
  let { intervalMillis: r, attempts: n, stopCondition: o } = t;
  try {
    for (let i = 0; i < n; i++) {
      let s = await ve.get(`/web/projects/${e}`, { includeAiCreditLimit: "true" }, void 0, Re());
      if (o(s)) return { status: 0, project: s };
      i < n - 1 && (await T(r));
    }
    return { status: 1, message: `Polling exceeded ${n} attempts` };
  } catch (i) {
    return (ot.reportError(i), { status: 2, error: i });
  }
}
export {
  Mt as a,
  w as b,
  lt as c,
  Te as d,
  Pe as e,
  Ke as f,
  $e as g,
  rn as h,
  on as i,
  tt as j,
  an as k,
  It as l,
  yt as m,
  ht as n,
  xt as o,
  vn as p,
  Fe as q,
  un as r,
  cn as s,
  mn as t,
  pn as u,
  fn as v,
  gn as w,
  rt as x,
  Sn as y,
  In as z,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-Y4S7CDEG.mjs.map
