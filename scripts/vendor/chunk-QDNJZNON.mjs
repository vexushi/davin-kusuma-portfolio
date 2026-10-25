import { a as we, b as S, c as F, d as B } from "./chunk-WNVE65PJ.mjs";
import { D as Se } from "./chunk-HX5WLUEV.mjs";
import {
  C as _,
  K as me,
  Kb as he,
  Ne,
  Pe,
  Qb as ve,
  Qe as be,
  Ra as ye,
  Se as E,
  Te as xe,
  Ub as ge,
  Ue as Oe,
  bd as Ie,
  fd as Ce,
  he as Re,
  ie as j,
  ke as De,
} from "./chunk-VEB6EOI6.mjs";
import { a as R, h as v } from "./chunk-M3TB4JOC.mjs";
import {
  D as te,
  Ff as x,
  Mk as ae,
  Of as oe,
  Wm as A,
  _l as pe,
  gg as re,
  hl as fe,
  jl as le,
  ol as ce,
  pl as ue,
  qg as se,
} from "./chunk-UDNVJCNV.mjs";
import {
  Ag as C,
  Dg as b,
  Ej as ie,
  bf as ne,
  ej as M,
  s as J,
  sc as Z,
  wg as P,
  xc as ee,
} from "./chunk-KHAT6QH3.mjs";
import { X as O } from "./chunk-KFHAD7KU.mjs";
import { a as T } from "./chunk-SMHMQ5IL.mjs";
import { a as de } from "./chunk-MSHSIAEI.mjs";
import { p as Q } from "./chunk-GOIPLIIS.mjs";
import { b as H, f as I, n as k } from "./chunk-Y3GZLMBF.mjs";
import { b as h } from "./chunk-4JY5UMT2.mjs";
import { i as G } from "./chunk-WBI6GGAG.mjs";
var Xe = G("layout-measuring/projection");
function Te(t) {
  return { x: t.x / t.w, y: t.y / t.w };
}
function ke(t, e) {
  let n = 0,
    r = 0;
  for (let s = 1; s < e.length; s++) {
    let d = e[s];
    (d.x < e[n].x && (n = s), d.y < e[r].y && (r = s));
  }
  let i = t[n],
    o = t[r];
  return (
    h(!k(i) && !k(o), () => `minX, minY points must be defined: ${n} ${r} ${JSON.stringify(t)}`),
    { minX: new DOMPoint(i.x, i.y), minY: new DOMPoint(o.x, o.y) }
  );
}
function Ct(t, e, n, r) {
  let i = t.multiply(e),
    o = r.map((l) => Te(i.transformPoint(l))),
    { x: s, y: d } = L(t, e, n, ke(r, o)),
    a = t.translate(s, d).multiplySelf(e),
    f = r.map((l) => Te(a.transformPoint(l)));
  if (!J.anyPointsOutsideRect(n, f)) return { x: s, y: d, matrix: a };
  let u = L(t, e, n, ke(r, f));
  return { x: u.x, y: u.y, matrix: t.translate(u.x, u.y).multiplySelf(e) };
}
function Rt(t, e, n) {
  let r = new DOMPoint(e.x, e.y);
  return L(t, pe.identity(), n, { minX: r, minY: r });
}
function L(t, e, n, { minX: r, minY: i }) {
  let o = t,
    s = e,
    d = n,
    { a, b: f, c: u } = Me(o, s, r, d.x, 1),
    { a: l, b: c, c: p } = Me(o, s, i, d.y, 2),
    m = (f * p - c * u) / (l * f - a * c),
    y = (a * p - l * u) / (a * c - l * f);
  return l * f === a * c
    ? (Xe.error("Unsolvable coordinates:", {
        parentMatrix: t,
        matrix: e,
        target2dPoint: n,
        minxp: r,
        minyp: i,
      }),
      { x: 0, y: 0 })
    : { x: m, y };
}
function Me(t, e, n, r, i) {
  let o = t[`m1${i}`],
    s = e.m14 * o * n.x + e.m24 * o * n.y + e.m44 * o,
    d = t[`m2${i}`],
    a = e.m14 * d * n.x + e.m24 * d * n.y + e.m44 * d,
    f = t[`m3${i}`],
    u = t[`m4${i}`],
    l =
      (e.m11 * o + e.m12 * d + e.m13 * f + e.m14 * u) * n.x +
      (e.m21 * o + e.m22 * d + e.m23 * f + e.m24 * u) * n.y +
      e.m41 * o +
      e.m42 * d +
      e.m43 * f +
      e.m44 * u,
    c = e.m14 * t.m14 * n.x + e.m24 * t.m14 * n.y + e.m44 * t.m14,
    p = e.m14 * t.m24 * n.x + e.m24 * t.m24 * n.y + e.m44 * t.m24,
    m =
      (e.m11 * t.m14 + e.m12 * t.m24 + e.m13 * t.m34 + e.m14 * t.m44) * n.x +
      (e.m21 * t.m14 + e.m22 * t.m24 + e.m23 * t.m34 + e.m24 * t.m44) * n.y +
      e.m41 * t.m14 +
      e.m42 * t.m24 +
      e.m43 * t.m34 +
      e.m44 * t.m44,
    y = s - r * c,
    g = a - r * p,
    N = r * m - l;
  return { a: y, b: g, c: N };
}
function Ye(t, e) {
  return H(t.id) && t.id !== "" ? t.id : String(e);
}
var Ae = class {
  constructor(e) {
    this.environment = e;
  }
  environment;
  _itemIdsRevision = 0;
  get itemIdsRevision() {
    return this._itemIdsRevision;
  }
  dataByRenderId = new Map();
  itemIdsByRenderId = new Map();
  updatedDataByRenderId = new Map();
  updatedItemIdsByRenderId = new Map();
  set(e, n, r, i = "identity") {
    (h(this.environment === "sandbox", "Setting data is only allowed in the sandbox."),
      (n ??= de()));
    let o = this.dataByRenderId.get(e);
    if (i === "shallow" ? O(o, n) : o === n) return;
    if ((this.dataByRenderId.set(e, n), ae(e) || Q.isOn("canvasRepeatSelection"))) {
      let a = $e(n, r);
      this.updatedDataByRenderId.set(e, a);
    }
    let s = n.map(Ye),
      d = this.itemIdsByRenderId.get(e);
    O(s, d) || (this.itemIdsByRenderId.set(e, s), this.updatedItemIdsByRenderId.set(e, s));
  }
  remove(e) {
    (h(this.environment === "sandbox", "Removing data is only allowed in the sandbox."),
      this.dataByRenderId.delete(e) &&
        (this.itemIdsByRenderId.delete(e),
        this.updatedItemIdsByRenderId.delete(e),
        this.updatedDataByRenderId.set(e, null)));
  }
  import(e) {
    h(this.environment === "editor", "Importing data is only allowed in the editor.");
    let { dataUpdates: n, itemIdsUpdates: r } = e,
      i = new Set();
    for (let { renderId: o, data: s } of n)
      (s === null
        ? (this.dataByRenderId.delete(o),
          this.itemIdsByRenderId.delete(o) && (this._itemIdsRevision += 1))
        : this.dataByRenderId.set(o, s),
        i.add(o));
    for (let { renderId: o, itemIds: s } of r)
      (O(this.itemIdsByRenderId.get(o), s) || (this._itemIdsRevision += 1),
        this.itemIdsByRenderId.set(o, s),
        i.add(o));
    return i;
  }
  isEmpty(e) {
    let n = this.dataByRenderId.get(e);
    return !n || n.length === 0;
  }
  getData(e) {
    return this.dataByRenderId.get(e);
  }
  getItemIds(e) {
    return this.itemIdsByRenderId.get(e);
  }
  export() {
    if (
      (h(
        this.environment === "sandbox",
        "No need to collect and send updates from within the editor."
      ),
      this.updatedDataByRenderId.size === 0 && this.updatedItemIdsByRenderId.size === 0)
    )
      return;
    let e = [];
    for (let [r, i] of this.updatedDataByRenderId) e.push({ renderId: r, data: i });
    this.updatedDataByRenderId.clear();
    let n = [];
    for (let [r, i] of this.updatedItemIdsByRenderId) n.push({ renderId: r, itemIds: i });
    return (this.updatedItemIdsByRenderId.clear(), { dataUpdates: e, itemIdsUpdates: n });
  }
};
function $e(t, e) {
  return t.map((n) => {
    let r = {};
    for (let i in n) {
      let o = e.get(i);
      if (o)
        switch (o.type) {
          case "vectorsetitem":
            r[i] = void 0;
            continue;
          case "richtext":
            r[i] = K(n[i]);
            continue;
          case "array":
            r[i] = qe(n[i], o);
            continue;
          case "object":
            throw Error("Not currently handled in removeNonSerializableData");
          case "eventhandler":
            continue;
          case "slot":
            throw Error("Should never be part of repeater data");
          default:
            r[i] = n[i];
        }
    }
    return r;
  });
}
function qe(t, e) {
  if (!Array.isArray(t)) return t;
  let n = e.control;
  return n.type === "richtext"
    ? t.map(K)
    : n.type !== "object" || !Ge(n)
      ? t
      : t.map((r) => {
          if (!I(r)) return r;
          let i;
          for (let o in n.controls) {
            let s = n.controls[o];
            s?.type === "richtext"
              ? ((i ??= { ...r }), (i[o] = K(r[o])))
              : s?.type === "vectorsetitem" && ((i ??= { ...r }), (i[o] = void 0));
          }
          return i ?? r;
        });
}
function Ge(t) {
  for (let e in t.controls) {
    let n = t.controls[e]?.type;
    if (n === "richtext" || n === "vectorsetitem") return !0;
  }
  return !1;
}
function K(t) {
  return t ? "<p>Content</p>" : null;
}
function Je(t, e) {
  return !(t.master !== e.master || t.inheritsFrom !== e.inheritsFrom);
}
function _e(t) {
  return t instanceof x ? t.toJS() : t;
}
function He(t, e) {
  return T(_e(t), _e(e));
}
function U(t, e, n) {
  return e === n
    ? !0
    : !e || !n
      ? e !== e && n !== n
      : t === "replicaInfo"
        ? Je(e, n)
        : t === "styledText"
          ? He(e, n)
          : T(e, n);
}
function W(t, e) {
  if (t === "replicaInfo") {
    let n = e;
    return (
      n &&
      (n.inheritsFrom ? { master: n.master, inheritsFrom: n.inheritsFrom } : { master: n.master })
    );
  }
  if (t === "styledText") {
    let n = e;
    return n && n.toJS();
  }
  return e;
}
function je(t) {
  return t.startsWith("$");
}
function z(t) {
  if (t instanceof R) return t;
  if (ne(t)) return new R({ ...t });
  if (Array.isArray(t)) return t.map(z);
  if (I(t) && t.constructor === Object) {
    let e = {};
    for (let n in t) e[n] = z(t[n]);
    return e;
  }
  return t;
}
var Qe = ["contentManagementSyncState", "save", "transient"];
function Ze(t) {
  return Qe.some((e) => e === t);
}
function et(t, e) {
  let n = z(e);
  return n instanceof R ? n : Ze(t) && I(n) ? new R(n) : n;
}
function Ee(t) {
  let e = { ...t };
  for (let n in t) Reflect.set(e, n, et(n, t[n]));
  return e;
}
var Fe = new Set(["html", "textContent", "htmlContent"]);
function $(t, e, n, r, i) {
  if (!Ke(r)) return null;
  let o = t.get(r.parentid);
  if (!o || (A(o) && !o.isLoaded())) return null;
  let s = Le(t, e, n, r);
  return (t.insertNode(s, r.parentid, i), s);
}
function Le(t, e, n, r) {
  let i = Re(n);
  if (!i) throw new Error("Unknown node class: " + n);
  let o = r.replicaInfo;
  if (o) {
    let s = t.get(o.master);
    if (!s || !P(s)) throw Error("broken diff, replica without master: " + e + " " + o.master);
    let d = E(o);
    return se.create(t, s, {
      overrides: d?.overrides,
      owner: e,
      inheritsFrom: d?.inheritsFrom,
      duplicatedFrom: r.duplicatedFrom,
      fromDiff: !0,
    });
  }
  return De(i)
    ? (h(he(e), "Invalid EntityReferenceNode ID: " + e), new i({ ...X(r), id: e }))
    : new i({ ...X(r), id: e });
}
function Ke(t) {
  return t != null && typeof t.parentid == "string";
}
function Ue(t, e) {
  t.has(e) && t.remove(e);
}
function We(t, e) {
  return t === "guidesX" || t === "guidesY"
    ? be(e)
    : (te(t) || t === "formSelectOptions") && Array.isArray(e)
      ? e
      : t === "replicaInfo"
        ? E(e)
        : re(t) || oe(t) || Ne(t)
          ? e
          : t === "masks"
            ? Oe(e)
            : t === "styledText"
              ? e instanceof x
                ? e
                : xe(e)
              : Pe(e);
}
function X(t) {
  let e = {};
  for (let n in t) n !== "_deleted" && (e[n] = We(n, t[n]));
  return e;
}
function D(t, e, n, r = !1) {
  let i = t.get(e);
  if (!i) return null;
  let o = n.to;
  if (o.parentid && i.parentid !== o.parentid) {
    if (!t.get(o.parentid)) return (t.remove(e), null);
    t.move(e, o.parentid, n.position);
  } else n.position !== n.fromPosition && t.move(e, i.parentid, n.position);
  let s = tt(t, i, o, r);
  return (s && o.replicaInfo && C(s) && (s.cache.rebuildReplica = !0), s);
}
function Be(t, e, n) {
  t.setProp(e, n);
}
function tt(t, e, n, r = !1) {
  let i = null,
    o = Z(e),
    s = !1,
    d = !1;
  for (let f in n) {
    if (f === "_deleted") continue;
    let u = f;
    if (u === "id" || u === "__class") continue;
    let l = n[f];
    if (f === "replicaInfo" && l) {
      let p = e.replicaInfo;
      if (p?.master === l.master && p?.inheritsFrom === l.inheritsFrom) continue;
      l = { ...l, overrides: p?.overrides ?? {} };
    }
    if (U(f, e[u], l)) continue;
    i || (i = e.asDraft(t));
    let c = _.reviveProperty(f, l);
    (f.startsWith("$") ? i.setProp(f, c) : Be(i, u, c), (s ||= o && M(f)), (d ||= Fe.has(f)));
  }
  let a = n._deleted;
  if (a)
    for (let f of a) {
      let u = f;
      u === "id" ||
        u === "__class" ||
        (e[u] !== void 0 &&
          (i || (i = e.asDraft(t)),
          je(f) ? i.deleteProp(f) : r ? i.resetToDefault(f) : Be(i, u, void 0),
          (s ||= o && M(f)),
          (d ||= Fe.has(f))));
    }
  return (i && d && ee(i) && i.cache.resetContent(), s && e.cache.controlPropVersion++, i);
}
function Y(t, e, n) {
  let r = n.replicaInfo;
  if (r?.master) {
    let o = t.get(r.master);
    if (!o || !P(o)) return !0;
  }
  if (r?.inheritsFrom) {
    let o = t.get(r.inheritsFrom);
    if (!o || !(C(o) || P(o))) return !0;
  }
  if (!n.parentid) return !1;
  let i = n.parentid ? t.get(n.parentid) : void 0;
  return i ? t.isAncestorOfNode(i, e) : !0;
}
function nt(t, e) {
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t.at(r).id !== e[r]) return !1;
  return !0;
}
function it(t, e, n) {
  if (nt(e.children, n)) return;
  let r = [];
  for (let s = 0, d = n.length; s < d; s++) {
    let a = t.get(n[s]);
    a && a.parentid === e.id && r.push(a);
  }
  let i = new Set(n),
    o = e.children;
  for (let s of o) i.has(s.id) || r.push(s);
  ot(o, r) || e.asDraft(t).setProp("children", new ie(r));
}
function ot(t, e) {
  return t.length !== e.length ? !1 : t.every((n, r) => e[r] === n);
}
function w(t, e, n) {
  if (!t) return;
  if (n) for (let o of n) o !== "_deleted" && delete t[o];
  if (!e) return;
  let r = [];
  for (let o of e) t[o] !== void 0 && r.push(o);
  if (r.length === e.length) {
    n || delete t._deleted;
    return;
  }
  let i = new Set(e);
  for (let o of r) i.delete(o);
  if (n) for (let o of n) i.add(o);
  i.size === 0 ? delete t._deleted : (t._deleted = Array.from(i));
}
function In(t, e) {
  h(t.id === e.id, "must be the same id");
  let n = t.to._deleted,
    r = e.to._deleted;
  if ((Object.assign(t.to, e.to), w(t.to, n, r), t.from && e.from)) {
    let i = t.from._deleted,
      o = e.from._deleted;
    (Object.assign(t.from, e.from, { ...t.from }), w(t.from, o, i));
  }
  (e.diffOverrides && (t.diffOverrides = e.diffOverrides),
    e.toChildren && (t.toChildren = e.toChildren),
    e.position !== void 0 && (t.position = e.position),
    e.fromPosition !== void 0 && t.fromPosition === void 0 && (t.fromPosition = e.fromPosition),
    e.removed
      ? (delete t.added, (t.removed = e.removed))
      : e.added && ((t.added = e.added), delete t.removed),
    e.previousScope && (t.previousScope = e.previousScope));
}
function Cn(t) {
  let e = {},
    n = new Set();
  for (let r of t)
    for (let i of r.changes) {
      let o = e[i.id];
      if (!o)
        ((o = { ...i }),
          (o.to = { ...i.to }),
          (o.from = { ...i.from }),
          (e[i.id] = o),
          i.added && n.add(i.id));
      else {
        let s = o.to?._deleted,
          d = i.to?._deleted;
        (Object.assign(o.to, i.to), w(o.to, s, d));
        let a = o.from?._deleted,
          f = i.from?._deleted;
        (Object.assign(o.from, i.from, { ...o.from }),
          w(o.from, f, a),
          i.diffOverrides && (o.diffOverrides = i.diffOverrides),
          !o.fromChildren && i.fromChildren && (o.fromChildren = i.fromChildren),
          i.toChildren && (o.toChildren = i.toChildren),
          i.position !== void 0 && (o.position = i.position),
          o.fromPosition === void 0 &&
            i.fromPosition !== void 0 &&
            (o.fromPosition = i.fromPosition),
          i.removed
            ? n.has(i.id)
              ? delete e[i.id]
              : (delete o.added, (o.removed = i.removed))
            : i.added && ((o.added = i.added), delete o.removed));
      }
    }
  return Object.values(e);
}
function rt(t, e) {
  let n = [];
  for (let r = 0, i = e.length; r < i; r++) {
    let o = e[r];
    if (!o.to.parentid) continue;
    let s = t.get(o.id);
    s && n.push(s.parentid);
  }
  return n;
}
function st(t, e, n) {
  if (!e.to.parentid) return;
  let r = t.get(e.id);
  if (!r) return;
  let i = n.indexOf(r.parentid);
  i !== -1 && n.splice(i, 1);
}
function Rn(t, e) {
  t.lineage.withoutEditHooks(() => {
    t.applyingDiffs = !0;
    try {
      let n = e,
        r = rt(t, e);
      for (; e.length > 0;) {
        let i = [];
        for (let o = 0, s = e.length; o < s; o++) {
          let d = e[o],
            a = d.id;
          d.added
            ? Y(t, d.id, d.to)
              ? i.push(d)
              : t.has(a)
                ? D(t, a, d)
                : $(t, a, d.added, d.to, d.position)
            : d.removed || (Y(t, d.id, d.to) ? i.push(d) : (st(t, d, r), D(t, a, d)));
        }
        if (i.length === 0 || i.length === e.length) break;
        e = i;
      }
      for (let i = 0, o = n.length; i < o; i++) {
        let s = n[i],
          d = s.toChildren;
        if (!d || d.length === 0) continue;
        let a = t.get(s.id);
        if (a) {
          if (!a.children) throw Error("assertion failure: node has no children");
          it(t, a, d);
        }
      }
      for (let i = 0, o = n.length; i < o; i++) {
        let s = n[i];
        s.removed && Ue(t, s.id);
      }
      for (let i = 0, o = n.length; i < o; i++) {
        let s = n[i];
        if (!S(s.id)) continue;
        let [d, a] = F(s.id);
        if (!d || !a) continue;
        let f = t.get(d);
        f && B(t, f, a, s.to);
      }
    } finally {
      t.applyingDiffs = !1;
    }
  });
}
var dt = { id: !0, cache: !0, treeState: !0, children: !0, mutable: !0, update: !0, _deleted: !0 },
  at = { parentid: !0, replicaInfo: !0, originalid: !0, duplicatedFrom: !0 };
function ft(t, e) {
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t.at(r).id !== e.at(r).id) return !1;
  return !0;
}
function lt(t, e, n) {
  (e && n && ft(e, n)) ||
    (e && (t.fromChildren = e.map((r) => r.id)), n && (t.toChildren = n.map((r) => r.id)));
}
function Dn(t, e, n = !1) {
  let i = { id: e ? e.id : t ? t.id : "", from: {}, to: {} };
  if (e)
    if (t) {
      if (b(e)) return;
    } else {
      if (b(e)) return;
      let s = e.__class;
      ((t = j(s)), (i.added = s));
    }
  else {
    if (!t) throw Error("assertion failed: at least one node must be given");
    if (b(t)) return;
    let s = t.__class;
    ((e = j(s)), (i.removed = s));
  }
  let o = ct(t, e, i);
  if ((n && (delete i.to.parentid, delete i.from.parentid), !!o))
    return (
      (e instanceof ce ||
        e instanceof ue ||
        e instanceof le ||
        e instanceof fe ||
        e instanceof Ce ||
        (i.added && e instanceof ye) ||
        (i.added && e instanceof me) ||
        (i.added && e instanceof Ie) ||
        e instanceof ve ||
        e instanceof ge) &&
        (i.ignoreInUndo = !0),
      i
    );
}
function ct(t, e, n) {
  let r = n.from,
    i = n.to,
    o = C(t) || C(e),
    s = !1,
    d = new Set([...e.keys(), ...t.keys()]);
  for (let a of d) {
    if (o) {
      if (!(a in at)) continue;
    } else {
      if (a === "children") {
        (lt(n, t.children, e.children), (n.fromChildren || n.toChildren) && (s = !0));
        continue;
      }
      if (a in dt) continue;
    }
    let f = a,
      u = t[f],
      l = e[f];
    U(a, u, l) ||
      (u === void 0 ? (r._deleted || (r._deleted = []), r._deleted.push(a)) : (r[a] = W(a, u)),
      l === void 0 ? (i._deleted || (i._deleted = []), i._deleted.push(a)) : (i[a] = W(a, l)),
      (s = !0));
  }
  if (!(!s && !n.added && !n.removed)) return n;
}
_.setGeneric("reviveProperty", We);
function V(t, e, n) {
  if (t.removed) {
    e.remove(t.id);
    return;
  }
  if (t.added) {
    if (!Ke(t.to)) return;
    if (!e.has(t.id)) {
      let d = Le(e.getCanvasTreeProxy(), t.id, t.added, t.to);
      e.insertNode(d, t.to.parentid, t.position);
      return;
    }
  }
  if (t.to.parentid || t.position !== t.fromPosition) {
    let d = n.getParentId(t.id);
    if (d === v) return;
    let a = t.to.parentid ?? d;
    a &&
      a !== v &&
      (e.dataNodeSharedState.retainNodeProxies && e.has(t.id)
        ? e.move(t.id, a, t.position)
        : n.moveNode(t.id, a, t.position));
  }
  let { _deleted: r, parentid: i, ...o } = t.to,
    s = e.getAnyNode(t.id);
  if (s) {
    for (let d of r ?? []) o[d] = void 0;
    s.set(X(o));
  }
}
function ut(t, e, n, r, i) {
  let o = e.to.parentid;
  if (!o) return !1;
  let s = t.get(o);
  return !s || (A(s) && !s.isLoaded()) || n.getParentId(e.id) === v
    ? !1
    : q(t, e.id, o, e.position, n, r, e.to, i);
}
function q(t, e, n, r, i, o, s, d) {
  if (t.has(e)) return !0;
  let a = i.getObject(e);
  if (!a || typeof a.__class != "string") return !1;
  let { children: f, parentid: u, id: l, ...c } = a,
    p = { ...c, ...s, ...d?.getEditedNodeFor(e), parentid: n };
  if (!$(t, e, a.__class, p, r)) return !1;
  for (let m of i.getChildrenIds(e))
    o.has(m) || (i.getParentId(m) !== v && q(t, m, e, void 0, i, o, void 0, d));
  return !0;
}
function pt(t, e, n, r) {
  let i = new Set(),
    o = new Set();
  for (let d of e) (o.add(d.id), d.added && (t.has(d.id) || i.add(d.id)));
  let s = (d) => {
    if (!r) return !1;
    let a = r.get(d);
    if (!a) return !1;
    let f = r.getScopeNodeFor(a)?.id;
    if (!f) return !1;
    let u = t.get(f);
    return u != null && !u.isLoaded();
  };
  for (let d of e) {
    if (!d.removed || t.has(d.id) || r?.get(d.id)) continue;
    let a = n.getParentId(d.id);
    a === void 0 || a === v || n.removeNode(d.id);
  }
  for (let d of i)
    for (let a of n.getChildrenIds(d)) o.has(a) || t.has(a) || s(a) || n.removeNode(a);
}
function mt(t, e, n, r, i) {
  t.applyingDiffs = !0;
  let o = i?.transient === !0;
  n && !o && pt(t, e, n, r);
  let s = new Set(),
    d = new Set();
  for (let l of e) (l.added && d.add(l.id), (l.added || l.to.parentid) && s.add(l.id));
  let a = e,
    f = new Set(),
    u = e.filter((l) => !S(l.id));
  for (; u.length > 0;) {
    let l = [];
    for (let c of u) {
      let p = c.id;
      if (f.has(p)) {
        if (!c.added) continue;
        f.delete(p);
      }
      if (n && r && !t.has(p))
        if (c.added) {
          let m = r.get(c.to.parentid);
          if (!m) {
            l.push(c);
            continue;
          }
          let y = r.getScopeNodeFor(m)?.id,
            g = t.get(y);
          if (g && !g.isLoaded()) {
            (d.delete(p), o || V(c, r, n));
            continue;
          }
        } else if (c.removed) {
          (f.add(p), o || V(c, r, n));
          continue;
        } else if (c.to.parentid && !t.has(c.to.parentid) && d.has(c.to.parentid)) {
          l.push(c);
          continue;
        } else if (ut(t, c, n, s, r)) {
          D(t, p, c, !0);
          continue;
        } else {
          o || V(c, r, n);
          continue;
        }
      if (c.removed) {
        (Ue(t, p), f.add(p));
        continue;
      }
      if (Y(t, c.id, c.to)) {
        l.push(c);
        continue;
      }
      if (c.added) {
        if ((d.delete(p), t.has(p))) D(t, p, c, !0);
        else if ($(t, p, c.added, c.to, c.position) && n && !o)
          for (let y of n.getChildrenIds(p))
            s.has(y) || (n.getParentId(y) !== v && q(t, y, p, void 0, n, s, void 0, r));
      } else D(t, p, c, !0);
    }
    if (l.length === 0 || l.length === u.length) break;
    u = l;
  }
  for (let l of a) {
    if (f.has(l.id) || !S(l.id)) continue;
    let [c, p] = F(l.id);
    if (!c || !p) continue;
    let m = t.get(c);
    if (!m && o) continue;
    let y = m ? null : r?.get(c),
      g = m ?? y;
    if (!g) {
      h(n, "Store must be defined to write data-only changes");
      let Ve = Ee(we(l.to, v));
      n.updateNestedObject([c, "replicaInfo", "overrides", p], Ve);
      continue;
    }
    let N = m ? t : r?.getCanvasTreeProxy();
    (h(N), B(N, g, p, l.to));
  }
  t.applyingDiffs = !1;
}
function Nn(t, e, n, r, i) {
  let o = e
    .map((s) => {
      let d = s.id,
        a = s.added,
        f = s.removed,
        u = s.to,
        l = s.from;
      if (!l) throw Error("Changes cannot be reversed if they lack the 'from' field.");
      let c = s.diffOverrides,
        p = s.previousScope,
        m = s.fromPosition,
        y = s.position;
      return {
        id: d,
        added: f,
        removed: a,
        to: l,
        from: u,
        position: m,
        fromPosition: y,
        diffOverrides: c,
        previousScope: p,
      };
    })
    .reverse();
  mt(t, o, n, r, i);
}
var ze = class {
  assets = new Map();
  _hash = 0;
  get hash() {
    return this._hash;
  }
  patch(e) {
    for (let n of e) {
      let { ownerType: r, ...i } = n,
        o = this.assets.get(n.key)?.ownerTypes ?? [],
        s = o.includes(r) ? o : [...o, r],
        d = Object.assign(i, { ownerTypes: s });
      this.assets.set(n.key, d);
    }
    this._hash++;
  }
  set(e) {
    (this.assets.clear(), this.patch(e));
  }
  items() {
    return Array.from(this.assets.values());
  }
  assetForKey(e) {
    let [n] = Se(e),
      r = this.assets.get(n);
    if (r) return r;
    for (let i of this.assets.values()) if (i.name === e) return i;
  }
};
export {
  Ct as a,
  Rt as b,
  Ye as c,
  Ae as d,
  je as e,
  Ze as f,
  Ee as g,
  X as h,
  tt as i,
  In as j,
  Cn as k,
  Rn as l,
  Dn as m,
  mt as n,
  Nn as o,
  ze as p,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-QDNJZNON.mjs.map
