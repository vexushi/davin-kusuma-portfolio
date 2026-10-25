import { a as Se, h as Zt, i as Kt, k as Yt } from "./chunk-Y4S7CDEG.mjs";
import { C as eo, Ka as to } from "./chunk-2K43M4W6.mjs";
import {
  Bb as Lt,
  Cb as Ot,
  Pb as Mt,
  Qb as _t,
  Rb as Dt,
  Vi as Jt,
  ae as Gt,
  ah as J,
  be as zt,
  j as at,
  o as dt,
  og as Ht,
  q as Nt,
  rj as Qt,
  v as xt,
  yb as Ft,
  zb as At,
} from "./chunk-3W5IVLGF.mjs";
import { E as Xt, n as $t, o as Ut, q as jt, z as qt } from "./chunk-YVU36PW7.mjs";
import { D as Te } from "./chunk-HX5WLUEV.mjs";
import {
  L as Pt,
  Me as Rt,
  a as Tt,
  b as St,
  hb as Vt,
  td as kt,
  x as de,
} from "./chunk-VEB6EOI6.mjs";
import { Kd as Et, Pa as It, v as vt } from "./chunk-CFC4BE4R.mjs";
import { s as Bt } from "./chunk-GQATECY2.mjs";
import {
  $n as R,
  Im as k,
  Jm as yt,
  Lm as ht,
  Mf as st,
  Na as et,
  Rq as Ct,
  Sj as lt,
  Wm as gt,
  Ye as Ce,
  Z as Ue,
  Ze as it,
  _ as se,
  aa as je,
  ba as qe,
  kx as wt,
  p as Be,
  qh as mt,
  tk as ft,
  va as Y,
  zu as bt,
} from "./chunk-UDNVJCNV.mjs";
import {
  Eg as ge,
  Ej as ot,
  Gl as ct,
  Hb as Oe,
  Ke as Z,
  Kl as pt,
  Nk as nt,
  Og as Ke,
  Xg as Ye,
  Zg as B,
  af as He,
  bi as Je,
  ci as Qe,
  gj as tt,
  ic as L,
  jc as z,
  kc as Me,
  kk as ve,
  lc as _e,
  lr as ut,
  mc as he,
  nh as K,
  oc as De,
  pc as We,
  qk as rt,
  rc as Ge,
  s as N,
  sc as X,
  sd as ze,
  tf as $e,
  tm as Ie,
  wg as Xe,
  xb as q,
  yb as re,
  yc as O,
  yg as Ze,
} from "./chunk-KHAT6QH3.mjs";
import { c as ae } from "./chunk-TXCWPKWI.mjs";
import { c as P } from "./chunk-F44HGEZI.mjs";
import { t as Wt } from "./chunk-KBPGUKJ2.mjs";
import { f as V } from "./chunk-NAYFA6AI.mjs";
import { b as Ae } from "./chunk-AUNF3KWQ.mjs";
import { p as ie } from "./chunk-GOIPLIIS.mjs";
import { e as ne } from "./chunk-Y3GZLMBF.mjs";
import { b, c as Le } from "./chunk-4JY5UMT2.mjs";
import { b as te, i as oe } from "./chunk-WBI6GGAG.mjs";
var bo = { track: !0 };
function oo(e) {
  let t = { ...e, event: "import_paste_bitmap" };
  Ae(t, bo);
}
var ro = oe("addImagesToCanvas"),
  Po = /\.[^.]+$/u;
async function Ar(e, t, o, r, i = !1, n = !1, d) {
  if (!t || t.length === 0) return [];
  if (!Pt(e.stores.scopeStore.active)) return [];
  let c = e.stores.scopeStore.active.id,
    s = d ?? Eo(e.stores, t.length, o, i),
    a = new Jt(e, { silent: n, quiet: ie.isOn("quietCanvasImageUploads") }),
    u = new Set(),
    p = [];
  for (let T of t)
    if (T instanceof File && T.type === it.get("svg")) {
      let E = await T.text();
      jt(E) ? (a.add(T), u.add(T.name)) : p.push(T);
    } else a.add(T);
  let l = (await a.results()).filter(qt);
  if (!gt(e.tree.get(c))) return [];
  let x = e.scheduler.wrapHandler(Fo(e, c)),
    C = [],
    { modalStore: m, scopeStore: y, chromeStore: f, codeEditorStore: pe } = e.stores;
  for (let { filename: T, originalFilename: E, imageSize: S } of l) {
    let F = u.has(E) ? "svg" : "bitmap",
      { nonZeroNaturalWidth: M, nonZeroNaturalHeight: A } = $t(S);
    C.push(
      ...x(
        T,
        E,
        F,
        {
          width: M / window.devicePixelRatio,
          height: A / window.devicePixelRatio,
          pixelWidth: M,
          pixelHeight: A,
        },
        s,
        r
      )
    );
  }
  if (p.length) {
    if (p.length === 1) return await Vo(e, p[0], r, s, c);
    Ge(y.active)
      ? m.set({
          type: "VectorImport",
          svgsToImport: p,
          scopeId: y.active.id,
          currentVectorLayout: wo(y.active),
          source: "canvas",
        })
      : m.set({
          type: "VectorSetCreation",
          source: "canvas",
          onConfirm: (T) => {
            let E = ae();
            m.set({
              type: "VectorImport",
              svgsToImport: p,
              scopeId: E,
              source: "canvas",
              onCreateVectorSet: (S, F) => J.createVectorSet(e, T, !1, null, S, "import", F),
              onSuccess: e.scheduler.wrapHandler((S) => {
                ((f.vectorSetsExpanded = !0),
                  y.select(S.id, { keepHistory: !0 }),
                  zt(e, S.id, Vt, !1),
                  pe.closeEditor());
              }),
            });
          },
        });
  }
  return [...C];
}
function wo(e) {
  let t = e.children.findLast((o) => Ct(o));
  if (t)
    return (
      b(K(t), "Vector Set items must support size."),
      b(Y(t), "Vector Set items must be pinnable."),
      { width: t.width, height: t.height, x: t.left ?? 0, y: t.top ?? 0 }
    );
}
function Vo(e, t, o, r, i) {
  return t ? Lo(e, t.name, t, r, o, i) : [];
}
function Eo(e, t, o, r) {
  let { selectionStore: i, scopeStore: n, treeStore: d } = e,
    c = { type: "node", parentId: xt(d.tree, n.active, [], o), position: o };
  if (r || i.nodes.length === 0) return [c];
  let s = [];
  for (let a of i.nodes) {
    if (!L(a)) return [c];
    if (a.layout !== void 0) s.push({ type: "node", parentId: a.id });
    else if (!B(a)) s.push({ type: "fill", node: a });
    else return [c];
  }
  return t > 1 && s.some((a) => a.type === "fill") ? [c] : s;
}
function ko([e = "", ...t]) {
  return [e.toUpperCase(), ...t].join("");
}
function Ro(e) {
  let t = ko(e.replace("_", " "));
  if (t !== "Graphic") return t;
}
function Fo(e, t) {
  return (o, r, i, n, d, c) => {
    let s = e.tree,
      a = [];
    for (let u of d) {
      let p = u.type === "fill" && i === "svg" ? { type: "node", parentId: u.node.id } : u;
      if (p.type === "node") {
        let l = ae(),
          { baseAttributes: g } = no(e, p, l, n, r);
        ro.info("create image:", r, "size:", n);
        let x = {
            ...g,
            fillImagePixelWidth: n.pixelWidth,
            fillImagePixelHeight: n.pixelHeight,
            overflow: "visible",
          },
          C = Se(s, p.parentId, (y, f) => {
            if (!(y && !s.has(y)))
              return (
                e.createImage(
                  o,
                  r,
                  { width: n.pixelWidth, height: n.pixelHeight },
                  y,
                  { ...x, ...f },
                  p.type === "node" ? p.index : void 0,
                  t
                ),
                l
              );
          });
        if (C === void 0) continue;
        oo({});
        let m = Te(r)[1].toLowerCase();
        (V("insert_image", { imageExtension: m, source: `upload_${c}` }), a.push(C));
      } else if (p.type === "fill") {
        let l = e.tree.get(p.node.id);
        if (!l) continue;
        b(Je(l));
        let g = nt({
          identifier: o,
          intrinsicSize: { width: n.pixelWidth, height: n.pixelHeight },
          originalFilename: r,
        });
        (l.set({ fillImage: g, fillImageOriginalName: r, fillType: "image" }),
          Qe(l) && !l.fillEnabled && l.set({ fillEnabled: !0 }),
          a.push(p.node.id));
      } else Le(p);
    }
    return (
      a.length === 0 ||
        (e.stores.scopeStore.active.id === t &&
          e.stores.selectionStore.set(a, { switchToProperties: !0 })),
      a
    );
  };
}
function Ao(e) {
  return (t, o, r, i, n, d) => {
    let c = e.tree,
      s = [];
    for (let a of i) {
      ro.info("create svg:", o, "size:", r, "bytes:", t.length, "colorable?", d);
      let u = a.type === "node" ? a : { type: "node", parentId: a.node.id },
        p = ae(),
        { constraints: l } = no(e, u, p, r, o),
        g = Se(c, u.parentId, () => {
          if (u.parentId && !c.has(u.parentId)) return;
          let C = Dt(t, Rt.createEmpty, r);
          (b(C, "Import SVG failed"), C.setProp("parentid", u.parentId));
          let m = e.cloneNode(C);
          (J.scaleVector(e, m.id, r), m.set({ ...l }));
          let y = J.ungroup(e, [m]);
          return y && y.length > 1 ? (J.joinInGroup(e, y) ?? m.id) : (y?.[0] ?? m.id);
        });
      if (g === void 0) continue;
      let x = Te(o)[1].toLowerCase();
      (V("insert_image", { imageExtension: x, source: `upload_${n}` }), s.push(g));
    }
    return (s.length === 0 || e.stores.selectionStore.set(s, { switchToProperties: !0 }), s);
  };
}
function no(e, t, o, r, i) {
  let n = t.parentId,
    d = t.position ? Nt(e, n, t.position, r) : void 0,
    c = i.replace(Po, "");
  return {
    baseAttributes: {
      name: Ro(c),
      id: o,
      width: Math.max(1, r.width),
      height: Math.max(1, r.height),
      intrinsicWidth: r.width,
      intrinsicHeight: r.height,
      ...d,
    },
    constraints: d,
  };
}
async function Lo(e, t, o, r, i, n) {
  let d = "run-svgo";
  if (o.size > 1e6)
    return (
      P({
        type: "add",
        variant: "error",
        key: d,
        primaryText: "SVG is too large.",
        secondaryText: "You may need a PNG.",
        duration: 5e3,
      }),
      []
    );
  P({
    type: "add",
    variant: "progress",
    key: d,
    primaryText: "Optimizing SVG",
    secondaryText: "for performance\u2026",
    duration: 1 / 0,
    showCloseButton: "never",
  });
  try {
    let s = await Oo(o);
    if (e.stores.scopeStore.active.id !== n)
      return (
        P({
          type: "add",
          variant: "error",
          key: d,
          primaryText: "Couldn't add your SVG.",
          secondaryText: "Stay on the same page while SVG is optimized.",
          duration: 5e3,
        }),
        []
      );
    let u = Ut(s),
      l = e.scheduler.wrapHandler(Ao(e))(s, t, u, r, i, !0);
    return (P({ type: "remove", key: d }), l);
  } catch (s) {
    throw (
      console.error("Failed to insert SVG:", s),
      P({
        type: "add",
        variant: "error",
        key: d,
        primaryText: "Failed to insert",
        secondaryText: "your SVG.",
      }),
      s
    );
  }
}
async function Oo(e) {
  let t = new FormData();
  t.set("file", e, "image.svg");
  let o = await fetch("/internal/svgo", { method: "POST", body: t, headers: Wt });
  if (!o.ok) throw new Error("Failed to optimize SVG");
  return await o.text();
}
function so(e, t, o) {
  if (!O(t)) return;
  let r = t.getSupportedLayout(e),
    i = t.getCurrentVariantSize(e);
  (ve(r.width) &&
    i?.widthType !== 0 &&
    ((o.widthType = 2), o.left !== null && o.right !== null && (o.right = null)),
    ve(r.height) &&
      i?.heightType !== 0 &&
      ((o.heightType = 2), o.top !== null && o.bottom !== null && (o.bottom = null)));
}
function ao(e, t) {
  let [o, ...r] = t.stores.selectionStore.ids;
  if (!o || r.length) return null;
  let i = t.tree,
    n = i.get(o),
    d = !1;
  for (; !d && n && ((d = de(i, n, e, t.stores.scopeStore.active.id, t.componentLoader)), !d);)
    n = i.getParent(n.id);
  return n;
}
var _o = {
    defaultComponent: { insert: "insert-default", drag: "insert-default-drag" },
    libraryModule: { insert: "insert-library", drag: "insert-library-drag" },
    externalModuleComponent: { insert: "insert", drag: "insert-drag" },
  },
  Ne = "default_component_",
  me = "external_",
  xe = "local_",
  mo = "legacy_design_component",
  co = "legacy_code_component",
  po = `${xe}${co}`,
  Do = `${me}${co}`,
  lo = `${xe}${mo}`,
  fo = `${me}${mo}`;
var Wo = new Set(["form", "frame", "image-frame", "stack", "repeater"]),
  Go = (e) => e.startsWith(Ne),
  uo = (e) => e === lo || e === fo,
  zo = (e) => Wo.has(e);
function yo({ canvasNode: e, source: t, isDrag: o, engine: r }) {
  let i = Bo(e, r);
  if ((V("component_instance", { componentType: i.type, source: t }), t === "insert_menu")) {
    let n = Ho(i);
    V("insert_menu_add", { type_added: n });
  }
  if (
    (i.type === "local_module_canvasComponent_component" &&
      V("component_canvas_instance", { componentId: e.id }),
    uo(i.type) && V("component_design_instance", {}),
    O(e) && q(e.codeComponentIdentifier))
  ) {
    let n = i.type.startsWith(Ne)
        ? "defaultComponent"
        : t === "team_library"
          ? "libraryModule"
          : "externalModuleComponent",
      d = _o[n][o ? "drag" : "insert"];
    r.stores.modulesStore.trackExternalComponentInsert([e.codeComponentIdentifier], d);
  }
}
function Bo(e, t) {
  if (O(e)) {
    let i = e.codeComponentIdentifier,
      n = Oe(i);
    if (!n)
      return {
        type: e.codeComponentIdentifier.startsWith(".") ? po : Do,
        codeComponentIdentifier: i,
      };
    if (re(n)) return { type: `${xe}module_${n.type}_component`, codeComponentIdentifier: i };
    if (q(n)) {
      let d = t.stores.treeStore.tree.get(n.moduleId);
      return Bt(t.stores.treeStore.tree, i)
        ? { type: `${Ne}${d?.title}`, codeComponentIdentifier: i }
        : { type: `${me}module_${d?.type ?? "unknown"}_component`, codeComponentIdentifier: i };
    }
  }
  let r = (e.replicaInfo?.master && t.tree.getNode(e.replicaInfo.master)) || e;
  return Xe(r)
    ? Ze(r)
      ? { type: fo }
      : { type: lo }
    : De(e)
      ? { type: "repeater" }
      : Be(e)
        ? { type: "form" }
        : z(e)
          ? { type: "stack" }
          : L(e)
            ? e.fillType === "image"
              ? { type: "image-frame" }
              : { type: "frame" }
            : { type: "unknown" };
}
function Ho({ type: e }) {
  return e.startsWith("local_module_") || e === po
    ? "code_component"
    : uo(e)
      ? "design_component"
      : e.startsWith(me)
        ? "package"
        : Go(e) || zo(e)
          ? e
          : "unknown";
}
function be(e) {
  let t = new Et({ widthType: 2, heightType: 2, html: "<p>No items</p>" });
  return (
    t.setTextColor("rgb(153, 153, 153)", !1),
    new It({
      name: "Empty State",
      widthType: 2,
      minWidth: "100%",
      heightType: 0,
      height: 100,
      minHeight: "100%",
      layout: "stack",
      stackDirection: "vertical",
      stackDistribution: "center",
      stackAlignment: "center",
      gap: 10,
      padding: 10,
      fillColor: "rgba(204, 204, 204, 0.2)",
      borderEnabled: !0,
      borderWidth: 1,
      borderPerSide: !1,
      borderTop: 1,
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      borderColor: "rgba(136, 136, 136, 0.2)",
      borderStyle: "dashed",
      radius: 20,
      children: new ot([t]),
      visible: He("boolean", { type: "variableReference", id: ut, providerId: e.getPrimaryId() }, [
        { ...lt({ name: "equals", input: "number", output: "boolean" }), value: 0 },
      ]),
    })
  );
}
function dn(e, t) {
  let o = be(t);
  (V("repeater_empty_state_create", {}),
    e.scheduler.process(() => {
      let r = ct(e.tree, t),
        i = r ? e.tree.getIndex(r) : -1,
        n = i >= 0 ? i + 1 : void 0;
      (e.tree.insertNode(o, t.getPrimaryId(), n), e.stores.selectionStore.set(o.id));
    }));
}
function vo(e, t) {
  for (let o of Object.values(e.variables))
    if (o?.type === "collectionreference" && o.dataIdentifier === t) return o;
}
function Co(e, t) {
  return Object.values(e.variables).find(
    (o) => o?.type === "multicollectionreference" && o.dataIdentifier === t
  );
}
function $o(e, t) {
  let o = pt(t);
  if (he(o)) return { dataIdentifier: o.dataIdentifier, providerId: o.id };
  let r = e.tree.getScopeNodeFor(t);
  if (st(r)) return { dataIdentifier: r.dataIdentifier, providerId: r.id };
}
function Uo(e, t, o) {
  let r = $o(e, t);
  if (!r) return;
  let { dataIdentifier: i, providerId: n } = r,
    d = Ie(e.tree, o.dataIdentifier),
    c = Ie(e.tree, i);
  if (!d || !c) return;
  let s = vo(d, i),
    a = Co(d, i),
    u = vo(c, o.dataIdentifier),
    p = Co(c, o.dataIdentifier);
  if (p)
    return {
      id: R(),
      itemKey: "id",
      transforms: [{ id: R(), type: "valueTransform", name: "isIncludedIn", value: Z(p.id, n) }],
    };
  if (u)
    return {
      id: R(),
      itemKey: "id",
      transforms: [{ id: R(), type: "valueTransform", name: "equals", value: Z(u.id, n) }],
    };
  if (a)
    return {
      id: R(),
      itemKey: a.id,
      transforms: [{ id: R(), type: "valueTransform", name: "contains", value: Z("id", n) }],
    };
  if (s)
    return {
      id: R(),
      itemKey: s.id,
      transforms: [{ id: R(), type: "valueTransform", name: "equals", value: Z("id", n) }],
    };
}
function Io(e, t, o) {
  if (!he(o)) return;
  let r = Uo(e, t, o);
  if (r) {
    o.set({ collectionFilters: { filters: [r] } });
    return;
  }
  e.tree.insertNode(be(o), o.id);
}
function Pe(e, t) {
  let { width: o, height: r } = e.tree.getRect(t);
  return (
    Y(t) &&
      K(t) &&
      (t.widthType === 2 && t.width > 0 && (o = t.width),
      t.heightType === 2 && t.height > 0 && (r = t.height)),
    { width: o, height: r }
  );
}
function jo(e, t, o) {
  let r = Pe(e, t);
  return { ...r, x: o.x - r.width / 2, y: o.y - r.height / 2 };
}
function qo(e, t) {
  let o = Pe(e, t),
    r = e.stores.scopeStore.active,
    i = e.tree.getCommonGroundNode(e.stores.selectionStore.nodes),
    n,
    d;
  if (i) {
    let s = k(e.tree, i);
    ((n = N.center(s).x - o.width / 2), (d = s.y));
  } else if (X(r) || We(r)) {
    let s = r.getPrimaryVariant(),
      a = k(e.tree, s);
    ((n = N.center(a).x - o.width / 2), (d = a.y));
  } else {
    let s = e.stores.canvasStore.getCanvasCenter();
    ((n = s.x - o.width / 2), (d = s.y - o.height / 2));
  }
  let c = { x: n, y: d };
  for (;;) {
    let s = { ...o, ...c },
      a = vt(e.tree, r, s, !0);
    if (a.length === 0) return s;
    let u = yt(e.tree, a);
    c.x = u.x - o.width - 100;
  }
}
function Xo(e, t, o, r = !1) {
  let { tree: i } = e,
    n = i.getPotentialParents(
      e.stores.scopeStore.active,
      e.stores.overlayStore.activeOverlays,
      N.cornerPoints({ ...o, width: 1, height: 1 }),
      o,
      e.componentLoader,
      t
    );
  return (r && (n = n.filter(B)), (n = dt(n, i).reverse()), n.length > 0 && n[0] ? n[0] : null);
}
var To = { width: 1, widthType: 1, heightType: 2, left: 0, right: null };
function So({
  engine: e,
  component: t,
  canvasPoint: o,
  source: r,
  type: i,
  shouldBecomeFullWidthForVariants: n = new Set(),
  isLayoutSection: d = !1,
  notDraggedOntoCanvas: c = !1,
  insertAsGroundNode: s = !1,
  insertAsOverlayType: a,
  imageToUpload: u,
  parentId: p,
}) {
  kt(t) ||
    yo({
      canvasNode: t,
      source: i === "libraryModule" ? "team_library" : r,
      isDrag: !0,
      engine: e,
    });
  let { selectionStore: l, canvasStore: g, scopeStore: x } = e.stores,
    C = s ? qo(e, t) : jo(e, t, o);
  a === 1 &&
    se(t) &&
    t.set({
      floatingPositionEnabled: !0,
      floatingPlacement: je,
      floatingAlignment: qe,
      floatingOffsetX: 0,
      floatingOffsetY: 10,
    });
  let m = Ht(e, t),
    y = Kt(e, o, [m], null, d);
  if (c && d && !y) {
    let v = g.getCanvasVisibleRectTakingOverlaysIntoAccount(),
      h = l.ids.length === 1 && l.ids[0] ? e.tree.get(l.ids[0]) : null,
      I = h ? e.tree.getGroundNodeFor(h) : null;
    _e(I) && N.intersects(k(e.tree, I), v) && (y = I);
  }
  let f = p ? e.tree.getNode(p) : (y ?? Xo(e, t, o, d)),
    pe = l.ids.length === 0,
    T = x.active,
    E = rt(T) ? T.getPrimaryVariant() : null;
  if ((c && d && E && pe && (f = E), a === 1 && f && se(m) && !B(f))) {
    b(f, "Parent should exist");
    let v = f.getPrimaryId(),
      h = Qt(e.componentLoader, e.stores, "framer/useShowRelativeOverlay", v, m.draftOrCurrent());
    if (!h) return;
    e.tree.move(h.id, v);
    return;
  } else se(m) && m.set(Ue);
  if (
    s &&
    ((f = null), (y = null), !N.containsRect(g.getCanvasVisibleRectTakingOverlaysIntoAccount(), C))
  ) {
    let v = N.center(C),
      h = g.zoom,
      I = Math.min(h, 1);
    g.scrollToCenter(v, { animate: !0, zoom: I });
  }
  let S = -1,
    F = null;
  if (f) {
    Mt(e, f, t, C);
    let v = f.draftOrCurrent();
    z(v) && (y = v);
  }
  if ((Io(e, f ?? x.active, t), y)) {
    let v = Pe(e, t);
    if (p) S = y.children.length;
    else {
      let { insertionIndex: h, wrap: I } = Zt(y, e, o, v);
      (I && (F = I), ne(h) && (S = h));
    }
    if (c && d) {
      if (((S = y.children.length), l.ids.length === 1)) {
        let ke = l.ids[0],
          ue = ke && e.tree.getNode(ke);
        if (ue) {
          let Re = new Set([ue.id]);
          for (let ye of ue.ancestors()) Re.add(ye.id);
          let Fe = y.children.findIndex((ye) => Re.has(ye.id));
          Fe >= 0 && (S = Fe + 1);
        }
      }
      let h,
        I = S > 0 ? y.children.at(S - 1) : void 0;
      (I ? ((h = k(e.tree, I)), (h.y += h.height)) : (h = k(e.tree, y)), (h.height = v.height));
      let _ = k(e.tree, y),
        Q = Math.min(h.x, _.x),
        D = Math.max(N.maxX(h), N.maxX(_));
      ((h.x = Q), (h.width = D - Q));
      let { zoom: H } = g,
        le = g.getCanvasVisibleRectTakingOverlaysIntoAccount(),
        W = le.width * H,
        $ = le.height * H,
        G = 40,
        U = Math.max(W - G * 2, 100),
        fe = Math.max($ - G * 2, 100),
        j = U / (h.width || 1),
        ee = fe / (h.height || 1),
        No = Math.min(j, ee, 0.5),
        xo = N.center(h);
      g.scrollToCenter(xo, { animate: !0, zoom: No });
    }
    _t(e, y, t, C);
  }
  let M;
  if (f) {
    let { width: v, height: h } = C;
    M = { ...ht(e.tree, f, C), width: v, height: h };
  } else M = C;
  let A = m.updateForRect({
    rect: M,
    parentSizeInfo: null,
    constraintsLocked: !1,
    shouldGuessPinToBottom: f ? Tt(e.tree, m, f) : !0,
    shouldGuessPinToRight: f ? St(e.tree, m, f) : !0,
  });
  (f && z(f) && K(m) && Y(m) && (A = Ko(m, A)), so(e.componentLoader, m, A), m.set(A, e.tree));
  let Ve = m.id,
    Ee = !1,
    w = null;
  if (f) {
    if (
      ((w = f),
      Ye(f) &&
        ((w = e.tree.getNode(f.originalid)),
        (Ee = !0),
        b(w, "Fail to insert node into variants: the original parent should exist")),
      F && !ge(w) && z(w))
    ) {
      let _ = Yt(e, w, F);
      if (!_) return;
      w = _;
    }
    (e.moveNode(m.id, w.id, S),
      Ee &&
        (b(ge(f), "Fail to insert node into variants: the new parent should be a replica node"),
        (Ve = at(e, m, f, w))));
    let v = e.tree.getGroundNodeFor(w),
      h = v.resolveValue("name"),
      I = !!(h && n.has(h.toLowerCase()));
    if ((L(m) && I && m.set({ left: 0, width: 1, widthType: 1 }, e.tree), O(m) && Ke(v) && B(v))) {
      let Q = { width: m.width, widthType: m.widthType, left: m.left, right: m.right };
      I && m.set(To);
      let D = Ft(e.componentLoader, m);
      if (D) {
        let H = e.tree.getScopeNodeFor(v);
        X(H) &&
          H.getTopLevelReplicaVariants().forEach((W) => {
            let $ = W.resolveValue("name");
            if (!$) return;
            let G = At($, D);
            if (!G || G === D.defaultVariant) return;
            let U = { ...W.replicaInfo.overrides },
              fe = { ...W.replicaInfo, overrides: U },
              j = { ...U[m.id] },
              ee = Zo(I, n, $, Q);
            (ee && Object.assign(j, ee),
              (j[tt(D.key)] = { type: "enum", value: G }),
              (U[m.id] = j),
              W.set({ replicaInfo: fe }));
          });
      }
    }
    Me(f) &&
      et(m) &&
      (I || m.set({ gridItemFillCellWidth: !0 }), $e(f) || m.set({ gridItemFillCellHeight: !0 }));
  }
  (u && L(t) && Xt(u, t, e).catch(te),
    !p && l.set(Ve, { switchToLayers: !!p, switchToProperties: !0 }));
}
function Zo(e, t, o, r) {
  let i = t.has(o.toLowerCase());
  if (e !== i) return i ? To : r;
}
function Ko(e, t) {
  let o = { ...t };
  return (
    (e.widthType === 3 || e.widthType === 1) &&
      ne(t.width) &&
      t.widthType !== e.widthType &&
      (delete o.width, delete o.widthType),
    (e.heightType === 3 || e.heightType === 1) &&
      ne(t.height) &&
      t.heightType !== e.heightType &&
      (delete o.height, delete o.heightType),
    o
  );
}
function ce({
  engine: e,
  module: t,
  identifier: o,
  position: r,
  centerInParent: i,
  insertAsGroundNode: n,
  update: d,
  parentId: c,
}) {
  let s = {
      width: Ce(t.metadata.intrinsicWidth, !0) ?? 200,
      height: Ce(t.metadata.intrinsicHeight, !0) ?? 200,
    },
    a = new wt({
      codeComponentIdentifier: o,
      slotsAreChildNodes: ie.isOn("componentSlotsAreChildNodes"),
      ...s,
    });
  if (c !== void 0) {
    let p = e.tree.getNode(c);
    (b(p, () => `Parent node not found: ${c}`),
      b(
        de(e.tree, p, a, e.stores.scopeStore.active.id, e.componentLoader),
        () => `Parent does not accept children: ${c}`
      ));
  }
  d && d(a);
  let u = r;
  if (i && !n && !c) {
    let p = ao(a, e),
      l = p ? N.center(k(e.tree, p)) : null,
      g = e.stores.canvasStore.getCanvasVisibleRectTakingOverlaysIntoAccount();
    l && N.containsPoint(g, l) && (u = l);
  }
  return (
    So({
      engine: e,
      component: a,
      canvasPoint: u,
      source: "context_menu",
      insertAsGroundNode: c ? !1 : n,
      parentId: c,
    }),
    a
  );
}
var Yo = oe("clipboard:modules");
async function Ri(e, t, o) {
  if (!t || !mt(t)) return !1;
  let r = "insert-external-component";
  try {
    (await Jo({ engine: e, moduleURL: t, position: o, centerInParent: !0, toastKey: r }),
      P({ type: "remove", key: r }));
  } catch (i) {
    (console.error("Failed to insert external component", i),
      P({
        type: "add",
        variant: "error",
        key: r,
        primaryText: "Failed to insert",
        secondaryText: "external component.",
      }));
  }
  return !0;
}
function we(e) {
  switch (e) {
    case "screen":
      return "web page.";
    case "vector":
      return "vector set.";
    default:
      return "external component.";
  }
}
async function Jo({
  engine: e,
  moduleURL: t,
  position: o,
  centerInParent: r,
  insertAsGroundNode: i,
  toastKey: n,
  update: d,
  parentId: c,
}) {
  let {
    module: s,
    moduleIdentifier: a,
    externalIdentifier: u,
    insertUnlinked: p,
  } = await e.stores.modulesStore.lookUpModuleURL(t);
  if (s.type === "screen")
    if (re(a)) {
      let l = bt(a.value);
      if (!l) return;
      let g = e.tree.getNode(l);
      if (!X(g)) return;
      await e.loadScopesThenProcess([g], ([x]) => {
        x && to(e, x, x.getPrimaryVariant());
      });
    } else
      (n &&
        P({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: we(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
        await Gt(e, u));
  else if (p) {
    n &&
      P({
        type: "add",
        variant: "progress",
        key: n,
        primaryText: "Inserting",
        secondaryText: we(s.type),
        duration: 1 / 0,
        showCloseButton: "never",
      });
    let l = await eo(e, { identifier: u, moduleType: s.type, enterIsolation: !1 });
    await e.scheduler.processWhenReadyAsync(() => {
      l &&
        ce({
          engine: e,
          module: s,
          identifier: l.codeComponentIdentifier,
          position: o,
          centerInParent: r,
          insertAsGroundNode: i,
          update: d,
          parentId: c,
        });
    });
  } else {
    if (
      (n &&
        P({
          type: "add",
          variant: "progress",
          key: n,
          primaryText: "Inserting",
          secondaryText: we(s.type),
          duration: 1 / 0,
          showCloseButton: "never",
        }),
      !q(a))
    ) {
      await e.scheduler.processWhenReadyAsync(() => {
        ce({
          engine: e,
          module: s,
          identifier: a.value,
          position: o,
          centerInParent: r,
          insertAsGroundNode: i,
          update: d,
          parentId: c,
        });
      });
      return;
    }
    (await e.stores.modulesStore
      .addExternalModulesToProject([a], {
        onTreeUpdate: () => {
          if (
            (ce({
              engine: e,
              module: s,
              identifier: a.value,
              position: o,
              centerInParent: r,
              insertAsGroundNode: i,
              update: d,
              parentId: c,
            }),
            s.type !== "vector")
          )
            return;
          let l = e.tree.getNodeWithTrait(s.id, ze)?.annotation("framerVector");
          ft(l) &&
            e.stores.modulesStore
              .addOrUpdateVectorSetAndVectors({ moduleId: l.set.moduleId, saveId: "" })
              .catch(te);
        },
      })
      .catch(Yo.reportError),
      e.stores.modulesStore.trackExternalComponentInsert([a.value], "paste-url"));
  }
  return s;
}
function Li(e, t, o) {
  if (!t && !o) return !1;
  for (let r of e)
    if (o) {
      if (o.includes(r)) return !0;
    } else if (t && Ot(r) && t.includes(Lt[r])) return !0;
  return !1;
}
export {
  Ar as a,
  Oo as b,
  so as c,
  ao as d,
  yo as e,
  Bo as f,
  Ho as g,
  be as h,
  dn as i,
  Io as j,
  Pe as k,
  Xo as l,
  So as m,
  Ko as n,
  Ri as o,
  Jo as p,
  Li as q,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-3WKVG2KM.mjs.map
