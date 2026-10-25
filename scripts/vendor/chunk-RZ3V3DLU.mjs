import {
  Ga as Ot,
  Ha as Bt,
  Ia as Le,
  Ja as Ft,
  Ma as _t,
  Oa as jt,
  Qa as Ut,
  Ra as Te,
  Sa as zt,
  Ta as Zt,
  Ua as $t,
} from "./chunk-ZXUJJV4E.mjs";
import { Ea as Nt, ma as ge, na as At, oa as Rt, pa as Vt, ra as Mt } from "./chunk-2K43M4W6.mjs";
import { a as Ee, b as he } from "./chunk-QSYJLG2Y.mjs";
import { C as wt, Na as Pt, t as St } from "./chunk-VEB6EOI6.mjs";
import { rc as Et } from "./chunk-CFC4BE4R.mjs";
import { h as It } from "./chunk-M3TB4JOC.mjs";
import { a as Ie, b as Q } from "./chunk-TZQTWIFZ.mjs";
import { Wh as kt, Wm as bt, al as Se, gl as vt, nl as xt } from "./chunk-UDNVJCNV.mjs";
import { Ij as be, am as Ct, gj as gt } from "./chunk-KHAT6QH3.mjs";
import { a as Ht, b as Wt } from "./chunk-KJFYKG6Q.mjs";
import { f as ye } from "./chunk-BOLNZQB3.mjs";
import { e as Gt, h as Dt } from "./chunk-4JSNULIX.mjs";
import { a as Kt } from "./chunk-2AVHZ7NL.mjs";
import { a as we, b as Lt, u as Pe } from "./chunk-KBPGUKJ2.mjs";
import { b as H } from "./chunk-76VYM4R7.mjs";
import { f as $ } from "./chunk-NAYFA6AI.mjs";
import { a as fe } from "./chunk-QFU6OGL3.mjs";
import { a as Tt } from "./chunk-24G7FGVN.mjs";
import { a as yt } from "./chunk-MSHSIAEI.mjs";
import { a as l } from "./chunk-2FCXHKEL.mjs";
import { b as xe, p as me } from "./chunk-GOIPLIIS.mjs";
import { a as U } from "./chunk-SWYZG2NI.mjs";
import { b as y, c as de } from "./chunk-4JY5UMT2.mjs";
import { b as ht, i as ue } from "./chunk-WBI6GGAG.mjs";
import { e as a } from "./chunk-WLHSDIGQ.mjs";
var Ce = a(U(), 1);
var m = a(l(), 1),
  lo = Ce.default.memo(function r({
    nodeIds: e,
    controlKey: t,
    control: o,
    controlPath: c = t,
    getControlPropPaths: s,
    onChange: i,
    onImageUpload: k,
    onContextMenu: p,
    controlProp: n,
    controlSourceIdentifier: R,
    controlSourceControlKey: E,
    sortable: v,
    supportsVariables: g,
    supportsComputedValues: x,
    supportsFetchDataValues: T = x,
    displayInPopover: N,
    icons: A,
    controlKeyIsTraitTypeKey: G,
    popoutId: V,
    hiddenControlsByNodeId: W,
    scopeType: F,
    deleteEnabled: C,
    deleteTitle: f,
    onDelete: h,
  }) {
    let u, M;
    o.description && (M = (0, m.jsx)(_t, { description: o.description }));
    let d = Ce.default.useMemo(() => (G ? [gt(t)] : void 0), [t, G]),
      b = Ce.default.useCallback(
        (ft, Hr) => {
          i(Hr, () => ft, e);
        },
        [e, i]
      ),
      {
        ArrayControlPropRow: B,
        BooleanControlPropRow: le,
        BorderControlPropRow: ce,
        BorderRadiusControlPropRow: K,
        BoxShadowControlPropRow: w,
        CanvasPageInstanceRow: D,
        CollectionReferenceControlPropRow: I,
        ColorArrayControlPropRow: j,
        ColorControlPropRow: He,
        LocationControlPropRow: We,
        CursorControlPropRow: Ke,
        CustomCursorControlPropRow: je,
        DateControlPropRow: Ue,
        DimensionControlPropRow: ze,
        EnumControlPropRow: Ze,
        FileControlPropRow: $e,
        FontControlPropRow: Qe,
        FusedNumberControlPropRow: qe,
        GapControlPropRow: Ye,
        ImageControlPropRow: Xe,
        LinkControlPropRow: Je,
        LinkRelValuesControlPropRow: et,
        MultiCollectionReferenceControlPropRow: tt,
        MotionValueControlPropRow: rt,
        NumberControlPropRow: ot,
        ObjectControlPropRow: nt,
        PaddingControlPropRow: it,
        PageScopeControlPropRow: st,
        RichTextControlPropRow: at,
        ScrollSectionRefControlPropRow: pt,
        SlotControlPropRow: lt,
        StringControlPropRow: ct,
        TrackingIdControlPropRow: ut,
        TransitionControlPropRow: dt,
        VectorSetItemControlPropRow: mt,
      } = jt();
    switch (o.type) {
      case "boolean":
        if ((y(n.type === "boolean"), !le)) return;
        u = (0, m.jsx)(le, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: T,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "motionvalue":
        if ((y(n.type === "motionvalue"), !rt)) return;
        u = (0, m.jsx)(rt, {
          supportsVariables: g,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "number":
        if ((y(n.type === "number"), !ot)) return;
        u = (0, m.jsx)(ot, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          nodeIds: e,
          supportsFetchDataValues: T,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "dimension":
        if ((y(n.type === "dimension"), !ze)) return;
        u = (0, m.jsx)(ze, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
          supportsVariables: g,
        });
        break;
      case "string":
        if ((y(n.type === "string"), !ct)) return;
        u = (0, m.jsx)(ct, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsFetchDataValues: T,
          supportsComputedValues: x,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "trackingid":
        if ((y(n.type === "trackingid"), !ut)) return;
        u = (0, m.jsx)(ut, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "richtext":
        if ((y(n.type === "richtext"), !at)) return;
        u = (0, m.jsx)(at, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          getControlPropPaths: s,
          onChange: i,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          scopeType: F,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "fusednumber":
        if ((y(n.type === "fusednumber"), !qe)) return;
        u = (0, m.jsx)(qe, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          sortable: v,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "enum":
        if ((y(n.type === "enum"), !Ze)) return;
        u = (0, m.jsx)(Ze, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          icons: A,
          controlSourceIdentifier: R,
          controlSourceControlKey: E,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "color":
        if ((y(n.type === "color"), !He)) return;
        u = (0, m.jsx)(He, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          displayInPopover: N,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: T,
          nodeIds: e,
          popoutId: V,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "responsiveimage":
      case "image":
        if ((y(n.type === "image" || n.type === "responsiveimage"), !Xe)) return;
        u = (0, m.jsx)(Xe, {
          nodeIds: e,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onUpload: k,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          displayInPopover: N,
          supportsFetchDataValues: T,
          supportsVariables: g,
          popoutId: V,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "file":
        if ((y(n.type === "file"), !$e)) return;
        u = (0, m.jsx)($e, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          controlSourceIdentifier: R,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "slot": {
        if ((y(n.type === "slot"), e.length !== 1)) return null;
        if (R === "framer/Prototype") {
          if (!D) return;
          u = (0, m.jsx)(D, {
            nodeIds: e,
            control: o,
            controlKey: t,
            controlProp: n,
            onChange: b,
            deleteEnabled: C,
            deleteTitle: f,
            onDelete: h,
          });
        } else {
          if (!lt) return;
          u = (0, m.jsx)(lt, {
            nodeIds: e,
            control: o,
            controlKey: t,
            controlPath: c,
            controlProp: n,
            traitTypeKeys: d,
            onChange: i,
            deleteEnabled: C,
            deleteTitle: f,
            onDelete: h,
          });
        }
        break;
      }
      case "transition":
        if ((y(n.type === "transition"), !dt)) return;
        u = (0, m.jsx)(dt, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          supportsVariables: g,
          traitTypeKeys: d,
          popoutId: V,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "boxshadow":
        if ((y(n.type === "boxshadow"), !w)) return;
        u = (0, m.jsx)(w, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: p,
          supportsVariables: g,
          traitTypeKeys: d,
          popoutId: V,
          nodeIds: e,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "font":
        if ((y(n.type === "font"), !Qe)) return;
        u = (0, m.jsx)(Qe, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          traitTypeKeys: d,
          popoutId: V,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "object":
        if ((y(n.type === "object"), !nt)) return;
        u = (0, m.jsx)(nt, {
          control: o,
          controlKey: t,
          controlPath: c,
          getControlPropPaths: s,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          ControlPropRow: r,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          popoutId: V,
          scopeType: F,
          hiddenControlsByNodeId: W,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "link":
        if ((y(n.type === "link"), !Je)) return;
        u = (0, m.jsx)(Je, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: T,
          nodeIds: e,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "linkrelvalues":
        if ((y(n.type === "linkrelvalues"), !et)) return;
        u = (0, m.jsx)(et, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          supportsVariables: g,
          traitTypeKeys: d,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "pagescope":
        if ((y(n.type === "pagescope"), !st)) return;
        u = (0, m.jsx)(st, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          traitTypeKeys: d,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "date":
        if ((y(n.type === "date"), !Ue)) return;
        u = (0, m.jsx)(Ue, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "scrollsectionref":
        if ((y(n.type === "scrollsectionref"), !pt)) return;
        u = (0, m.jsx)(pt, {
          nodeIds: e,
          traitTypeKeys: d,
          controlKey: t,
          control: o,
          controlProp: n,
          onContextMenu: p,
          onChange: i,
          scopeType: F,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "customcursor":
        if ((y(n.type === "customcursor"), !je)) return;
        u = (0, m.jsx)(je, {
          nodeIds: e,
          traitTypeKeys: d,
          controlKey: t,
          control: o,
          controlProp: n,
          onContextMenu: p,
          onChange: i,
          scopeType: F,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "cursor":
        if ((y(n.type === "cursor"), !Ke)) return;
        u = (0, m.jsx)(Ke, {
          popoutId: t,
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "array": {
        if ((y(n.type === "array"), o.control.type === "color" && j)) {
          u = (0, m.jsx)(j, {
            nodeIds: e,
            control: o,
            scopeType: F,
            controlKey: t,
            controlPath: c,
            controlProp: n,
            traitTypeKeys: d,
            onChange: i,
            supportsVariables: g,
            deleteEnabled: C,
            deleteTitle: f,
            onDelete: h,
          });
          break;
        }
        if (!B) return;
        u = (0, m.jsx)(B, {
          nodeIds: e,
          control: o,
          scopeType: F,
          controlKey: t,
          controlPath: c,
          getControlPropPaths: s,
          controlProp: n,
          traitTypeKeys: d,
          hiddenControlsByNodeId: W,
          ControlPropRow: r,
          displayInPopover: N,
          onChange: i,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      }
      case "border": {
        if ((y(n.type === "border"), !ce)) return;
        u = (0, m.jsx)(ce, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: i,
          onContextMenu: p,
          nodeIds: e,
          traitTypeKeys: d,
          popoutId: t,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      }
      case "padding": {
        if ((y(n.type === "padding"), !it)) return;
        u = (0, m.jsx)(it, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      }
      case "gap":
        if ((y(n.type === "gap"), !Ye)) return;
        u = (0, m.jsx)(Ye, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "borderradius":
        if ((y(n.type === "borderradius"), !K)) return;
        u = (0, m.jsx)(K, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "collectionreference":
        if ((y(n.type === "collectionreference"), !I)) return;
        u = (0, m.jsx)(I, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "multicollectionreference":
        if ((y(n.type === "multicollectionreference"), !tt)) return;
        u = (0, m.jsx)(tt, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          supportsComputedValues: x,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "vectorsetitem":
        if ((y(n.type === "vectorsetitem"), !mt)) return;
        u = (0, m.jsx)(mt, {
          control: o,
          controlKey: t,
          controlProp: n,
          onChange: b,
          supportsVariables: g,
          traitTypeKeys: d,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "location":
        if ((y(n.type === "location"), !We)) return;
        u = (0, m.jsx)(We, {
          controlKey: t,
          control: o,
          controlProp: n,
          onChange: b,
          onContextMenu: p,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: C,
          deleteTitle: f,
          onDelete: h,
        });
        break;
      case "eventhandler":
      case "changehandler":
        break;
      default:
        de(o);
    }
    return (0, m.jsxs)(m.Fragment, { children: [u, M] });
  });
var Qt = "l7g1830";
var qt = a(l());
function go({ children: r, htmlFor: e, className: t }) {
  return (0, qt.jsx)("label", { className: fe(Qt, t), htmlFor: e, children: r });
}
var Kr = 3,
  L = ue("PartialTreeSender"),
  Ae = yt();
function Yt() {
  return new Promise((r, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => r()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(r, 0);
  });
}
var Xt = class {
  constructor(e, t, o) {
    this.treeUpdater = e;
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = { maxNodesPerChunk: o?.maxNodesPerChunk ?? 1e3 }));
  }
  treeUpdater;
  name;
  currentScopeId = "";
  timelineCursor;
  scopeBufferMap = new Map();
  chunkQueue = [];
  chunkIndex = 0;
  chunkingConfig;
  drainingPromise;
  get crdtStore() {
    return this.treeUpdater.store;
  }
  getScopeAsValue(e, t) {
    let o = e.get(t);
    if (o) return this.scopeAsValue(o, e.root.id, e.getService("metadata")?.version !== void 0);
  }
  scopeAsValue(e, t, o) {
    (y(e.parentid === t, "Scope must be a direct child of the root"),
      bt(e) && y(e.isLoaded(), "Scope must be loaded"));
    let c = e.treeState.getSerializedCache(e);
    if (c) return c;
    if (!o) {
      let s = this.crdtStore,
        i = e.treeState.serialized?.hadError;
      if (s && !i) {
        let k = s.getObject(e.id);
        if (k && k.parentid !== It) return k;
      }
    }
    return wt.valueFromNode(e);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let o = e.chunkingHints;
    if (!o || o.size === 0) return !1;
    let c = ke();
    t && c.add(t);
    for (let s of c)
      if (o.has(s)) return (L.debug(this.name, `chunking required - large page hint: ${s}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let o = [],
      c = crypto.randomUUID(),
      s = new Map(),
      i = new Map(),
      k = 0,
      p = ke();
    t && p.add(t);
    let n = () => {
        s.size > 0 &&
          (o.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: c,
              chunkIndex: o.length,
              totalChunks: -1,
              nodes: s,
              childrenMap: i,
              rootId: o.length === 0 ? e.root.id : void 0,
            },
          }),
          (s = new Map()),
          (i = new Map()));
      },
      R = (A) => {
        let G = A.children ?? Ae;
        (s.set(A.id, { ...A, children: Ae }),
          i.set(
            A.id,
            G.map((V) => V.id)
          ),
          k++,
          s.size >= this.chunkingConfig.maxNodesPerChunk && n());
        for (let V of G) R(V);
      },
      E = e.root,
      v,
      g = {};
    for (v in E) be[v] || (g[v] = E[v]);
    let x = e.getNodes(p),
      T = { ...g, __class: "RootNode", id: e.root.id, children: Ae };
    (s.set(e.root.id, T),
      i.set(
        e.root.id,
        x.map((A) => A.id)
      ),
      k++,
      s.size >= this.chunkingConfig.maxNodesPerChunk && n());
    for (let A of x)
      R(this.scopeAsValue(A, e.root.id, e.getService("metadata")?.version !== void 0));
    n();
    let N = o.length;
    for (let A of o) A.treeChunks.totalChunks = N;
    return (
      L.debug(this.name, `directly chunked tree into ${o.length} chunks with ${k} total nodes`),
      o
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      y(this.chunkIndex >= 0, "Chunk index should not be negative"),
      y(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new Tt()),
      t &&
        (L.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      L.debug(this.name, "drainChunks started"));
    let o = 0,
      c = performance.now();
    try {
      for (; this.hasMoreChunks();) {
        if (e?.aborted) {
          (L.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let s = this.getNextChunk();
        (s &&
          (o++,
          L.debug(
            this.name,
            `sending chunk ${s.treeChunks.chunkIndex + 1} of ${s.treeChunks.totalChunks}`
          ),
          yield s),
          await Yt());
      }
    } finally {
      (await Yt(), (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()));
      let s = performance.now() - c,
        i = s > 1e3 ? `${(s / 1e3).toFixed(2)}s` : `${Math.round(s)}ms`;
      (L.debug(this.name, `completed sending ${o} chunks in ${i}`),
        L.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === Se) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= Kr) {
      let o = ke(),
        c = 1 / 0,
        s;
      for (let [i, k] of this.scopeBufferMap) o.has(i) || (c > k && ((c = k), (s = i)));
      s && (this.scopeBufferMap.delete(s), (t = s));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.treeUpdater.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        L.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let o = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), o);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks()) return {};
    let t = this.treeUpdater.tree,
      o = this.treeUpdater.fetchForwardChanges(this.timelineCursor);
    if (!o) {
      if (this.treeUpdater.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          L.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let p = this.getNextChunk();
        if (p)
          return (
            L.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            p
          );
      }
      let k = this.serializeTree(t, e);
      return (
        L.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
        { name: this.name, tree: k, timestamp: Date.now() }
      );
    }
    let [c, s] = this.updateScopeBuffer(e);
    (c && (L.debug(this.name, "deleting scope by diff:", c), Jt(c, o)),
      o.length === 0 && (o = void 0));
    let i;
    if (
      (s && (L.debug(this.name, "adding scope by subtree:", s), (i = this.getScopeAsValue(t, s))),
      o)
    ) {
      let k = this.getAffectedScopeIDsAfterCrossScopeMove(t, o);
      for (let p of k) {
        if (p !== this.currentScopeId) {
          this.scopeBufferMap.has(p) &&
            (L.debug(this.name, "deleting scope due to cross-scope move:", p),
            Jt(p, o),
            this.scopeBufferMap.delete(p));
          continue;
        }
        i ||
          (L.debug(this.name, "resending tree with scope due to cross-scope move:", p),
          (i = this.getScopeAsValue(t, p)));
      }
    }
    return { changes: o, scopes: i ? [i] : void 0, timestamp: Date.now() };
  }
  serializeTree(e, t) {
    let o = ke();
    t && o.add(t);
    let c = [];
    for (let p of o) {
      let n = this.getScopeAsValue(e, p);
      n && c.push(n);
    }
    let s = e.root,
      i,
      k = {};
    for (i in s) be[i] || (k[i] = s[i]);
    return { version: St, root: { ...k, __class: "RootNode", id: e.root.id, children: c } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let o = new Set();
    for (let c of t) {
      if (!c.previousScope || !c.to.parentid) continue;
      let s = e.get(c.id),
        i = e.getScopeNodeFor(s);
      i && o.add(i.id);
    }
    return o;
  }
};
function Jt(r, e) {
  e.push({ id: r, removed: "CanvasNode", to: {} });
}
function ke() {
  return new Set([Et, Pt, Ct, xt, vt, Se]);
}
var jr =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  Ur = "autoplay",
  zr =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function Go(r) {
  let e;
  switch (r) {
    case "on_page":
      e = Ur;
      break;
    case "editor":
      e = jr;
      break;
    case "preview":
      e = zr;
      break;
    default:
      de(r);
  }
  return e;
}
var Re = class {
    constructor(e) {
      this.callbacks = e;
    }
    callbacks;
    experimentListeners = new Map();
    employeesOnlySettingsListeners = new Map();
    projectFeaturesListeners = new Map();
    startUpdatesStream() {
      (Object.keys(xe).forEach((e) => {
        let t = (o) => {
          this.callbacks.updateExperiments({ [e]: o });
        };
        (me.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(Ee).forEach((e) => {
          let t = (o) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: o });
          };
          (he.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(xe).forEach((t) => {
          e[t] = me.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(Ee).forEach((t) => {
          e[t] = he.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      Q.updated
        .then(() => {
          let e = {};
          (Object.keys(Ie).forEach((t) => {
            e[t] = Q.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(Ie).forEach((t) => {
                let o = (c) => {
                  this.callbacks.updateProjectFeatures({ [t]: c });
                };
                (Q.addListener(t, o), this.projectFeaturesListeners.set(t, o));
              }));
        })
        .catch(ht);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) me.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) he.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) Q.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  er = class {
    constructor(e, t) {
      this.remoteFlags = e;
      let o = new Re(this.remoteFlags);
      (o.startUpdatesStream(),
        this.remoteFlags.updateExperiments(o.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(o.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => o.stopUpdatesStream(), { once: !0 }));
    }
    remoteFlags;
  };
var Zr = /[^\p{Letter}\p{Number}()]+/gu;
function Uo(r) {
  return kt(r.toLowerCase().replace(Zr, "-"));
}
var tr = a(U(), 1);
function $o() {
  let r = H.values.panelPadding;
  return (0, tr.useMemo)(() => ({ top: r, right: -r, bottom: -r, left: r }), [r]);
}
var rr = a(l(), 1);
function $r(r, e) {
  switch (r) {
    case "left":
    case "right":
      return { x: e };
    case "top":
    case "bottom":
    case void 0:
      return { y: e };
  }
}
function Xo({
  children: r,
  className: e,
  colorVariant: t,
  direction: o,
  enabled: c,
  offsetDelta: s = 0,
  text: i,
  shortcut: k,
}) {
  let p = H.values.tooltipOffset + s;
  return c
    ? (0, rr.jsx)(Gt, {
        text: i,
        shortcut: k,
        colorVariant: t,
        direction: o,
        className: e,
        positionOffset: $r(o, p),
        children: r,
      })
    : r;
}
var q = a(l());
function or(r) {
  return (0, q.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, q.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, q.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var nr = a(U()),
  _ = a(l());
function ir(r) {
  let e = `layer-breakpoint-icon-${(0, nr.useId)().replace(/:/gu, "")}`;
  return (0, _.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, _.jsx)("defs", {
        children: (0, _.jsx)("clipPath", {
          id: e,
          children: (0, _.jsx)("path", {
            d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
          }),
        }),
      }),
      (0, _.jsx)("path", {
        d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3",
        clipPath: `url(#${e})`,
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 1.5H2.5l-1 1v2H11v-1Z",
      }),
    ],
  });
}
var Y = a(l());
function sr(r) {
  return (0, Y.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, Y.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, Y.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var Ve = a(l());
function ar(r) {
  return (0, Ve.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ve.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M4.25 2.25a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H8v2a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 1 9.75v-4a1.5 1.5 0 0 1 1.5-1.5h1.75Z",
    }),
  });
}
var Me = a(l());
function pr(r) {
  return (0, Me.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Me.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m1.25 5.5 2.189 2.189a1.5 1.5 0 0 0 2.122 0L10.5 2.75",
    }),
  });
}
var Ne = a(l());
function lr(r) {
  return (0, Ne.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ne.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var X = a(l());
function cr() {
  return (0, X.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "presentation",
    width: "12",
    height: "12",
    children: [
      (0, X.jsx)("path", {
        d: "M 1.25 4.25 L 1.25 4.25 L 1.25 9 C 1.25 9.966 2.034 10.75 3 10.75 L 9 10.75 C 9.966 10.75 10.75 9.966 10.75 9 L 10.75 5.75 C 10.75 4.922 10.078 4.25 9.25 4.25 L 8 4.25 C 7.448 4.25 7 3.802 7 3.25 L 7 2.75 C 7 1.922 6.328 1.25 5.5 1.25 L 2.75 1.25 C 1.922 1.25 1.25 1.922 1.25 2.75 Z",
        fill: "currentColor",
        fillOpacity: "0.15",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
      (0, X.jsx)("path", {
        d: "M 8.5 4.25 L 1.5 4.25",
        fill: "transparent",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
    ],
  });
}
var J = a(l());
function ur(r) {
  return (0, J.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, J.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, J.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M4.25 4.25v3.5h3.5",
      }),
    ],
  });
}
var ee = a(l());
function dr(r) {
  return (0, ee.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, ee.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ee.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var te = a(l());
function mr(r) {
  return (0, te.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, te.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M9 .75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M3 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5",
      }),
      (0, te.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M4.5 7.5 6 6l1.5-1.5",
      }),
    ],
  });
}
var re = a(l());
function fr(r) {
  return (0, re.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, re.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, re.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var Ge = a(l());
function hr(r) {
  return (0, Ge.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Ge.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.293 1.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414L6.707 10.95a1 1 0 0 1-1.414 0L1.05 6.707a1 1 0 0 1 0-1.414Z",
    }),
  });
}
var oe = a(l());
function gr(r) {
  return (0, oe.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, oe.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
      }),
      (0, oe.jsx)("path", {
        fill: "currentColor",
        d: "M6 4.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6 4.5",
      }),
    ],
  });
}
var De = a(l());
function yr(r) {
  return (0, De.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, De.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var Oe = a(l());
function Be(r) {
  return (0, Oe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Oe.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
    }),
  });
}
var ne = a(l());
function Cr(r) {
  return (0, ne.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, ne.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ne.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M1.5 6h9" }),
    ],
  });
}
var ie = a(l());
function kr(r) {
  return (0, ie.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, ie.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ie.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M6 2v8" }),
    ],
  });
}
var se = a(l());
function vr(r) {
  return (0, se.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...r,
    children: [
      (0, se.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, se.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2M10.25 6c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var ae = a(l());
function xr(r) {
  return (0, ae.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, ae.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ae.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M2 6h8M5 2v3.5M7 6.5V10",
      }),
    ],
  });
}
var pe = a(l());
function br(r) {
  return (0, pe.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: [
      (0, pe.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, pe.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var Fe = a(l());
function Sr(r) {
  return (0, Fe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, Fe.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m6 .775 1.94 2.83 3.291.971-2.093 2.719.095 3.43L6 9.575l-3.233 1.15.095-3.43L.769 4.576l3.291-.971Z",
    }),
  });
}
var z = a(l());
function wr(r) {
  return (0, z.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...r,
    children: [
      (0, z.jsx)("path", {
        d: "M 5.5 2.5 C 5.5 1.672 6.172 1 7 1 C 7.916 1 9.084 1 10 1 C 10.828 1 11.5 1.672 11.5 2.5 C 11.5 4.388 11.5 7.612 11.5 9.5 C 11.5 10.328 10.828 11 10 11 C 9.084 11 7.916 11 7 11 C 6.172 11 5.5 10.328 5.5 9.5 C 5.5 7.612 5.5 4.388 5.5 2.5 Z",
      }),
      (0, z.jsx)("path", { d: "M 3 3 L 3 9" }),
      (0, z.jsx)("path", { d: "M 0.5 4.5 L 0.5 7.5" }),
    ],
  });
}
var _e = a(l());
function Pr(r) {
  return (0, _e.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...r,
    children: (0, _e.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.148 1.884a1 1 0 0 1 1.704 0l4.21 6.842a1 1 0 0 1-.852 1.524H1.79a1 1 0 0 1-.852-1.524Z",
    }),
  });
}
var ri = {
  component: Ot,
  label: ur,
  checkbox: pr,
  radio: gr,
  breakpoint: ir,
  grid: Bt,
  masonry: dr,
  frame: lr,
  "frame-round": Be,
  stack: Cr,
  switch: wr,
  "stack-horizontal": kr,
  "stack-with-data": vr,
  "stack-wrap-horizontal": xr,
  "stack-wrap-vertical": br,
  form: Te,
  "form-container": Te,
  "form-input": zt,
  "form-select": Ut,
  text: Zt,
  svg: Le,
  path: mr,
  placeholder: fr,
  boolean: ar,
  star: Sr,
  polygon: hr,
  oval: Be,
  overlay: $t,
  rectangle: yr,
  image: Le,
  group: cr,
  "collection-item": sr,
  "view-box": or,
  vector: Pr,
  shader: Ft,
};
var S = a(U(), 1);
function Er(r, e) {
  return e === null ? !1 : r > e;
}
function Qr(r, e) {
  let t = ye(r),
    o = ye(e);
  if (r <= e || t !== o) return t;
  let c = (s) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: s,
      roundingMode: "ceil",
    }).format(r);
  for (let s of [2, 1]) {
    let i = c(s);
    if (i !== o) return i;
  }
  return t;
}
function Ir(r, e, t = "Please select fewer days.") {
  let o = Qr(r, e),
    c = ye(e);
  return `This period has ${o} events, exceeding the ${c} limit. ${t}`;
}
function ve(r, e, t) {
  return { source: r, rangeDays: Nt(e.startDate, e.endDate), eventCount: t };
}
function Lr(r, e, t) {
  $("analytics_export_start", ve(r, e, t));
}
function Tr(r, e, t) {
  $("analytics_export_success", ve(r, e, t));
}
function Ar(r, e, t) {
  $("analytics_export_cancel", ve(r, e, t));
}
function Rr(r, e, t, o) {
  $("analytics_export_fail", { ...ve(r, e, t), reason: o });
}
var Z = a(U(), 1);
function Vr(r, e) {
  if (r === e) return r;
  if (e > r) {
    let t = Math.max(1, Math.ceil((e - r) / 6));
    return Math.min(r + t, e);
  }
  return e;
}
function Mr({ transferredEvents: r, totalEvents: e, isComplete: t }) {
  return t ? 1 : e <= 0 ? 0 : Math.min(r / e, 0.99);
}
function Nr({ phase: r, totalEvents: e, transferredEvents: t }) {
  let o = r === "complete" ? e : t,
    [c, s] = (0, Z.useState)(0);
  ((0, Z.useEffect)(() => {
    r === "inactive" && s(0);
  }, [r]),
    (0, Z.useEffect)(() => {
      r === "complete" && s(e);
    }, [r, e]),
    (0, Z.useEffect)(() => {
      if (r !== "exporting") return;
      let k = () => {
        s((n) => Vr(n, o));
      };
      k();
      let p = window.setInterval(k, 100);
      return () => window.clearInterval(p);
    }, [r, o]));
  let i =
    r === "inactive"
      ? 0
      : Mr({ transferredEvents: c, totalEvents: e, isComplete: r === "complete" });
  return { displayedEventCount: c, progress: i };
}
var Gr = ue("useAnalyticsExport");
function Dr(r) {
  return r instanceof we && r.status === 403;
}
function Yr(r) {
  return Dr(r)
    ? "Analytics export is not available on this plan."
    : r instanceof ge
      ? r.message
      : "Something went wrong while exporting. Please try again.";
}
function Xr(r) {
  return r instanceof ge
    ? "incomplete"
    : r instanceof we && r.status === Lt.Forbidden
      ? "entitlement"
      : "unknown";
}
function ki(r, e, t, o, c) {
  let [s, i] = (0, S.useState)("idle"),
    [k, p] = (0, S.useState)(0),
    [n, R] = (0, S.useState)(),
    [E, v] = (0, S.useState)(0),
    [g, x] = (0, S.useState)(0),
    [T, N] = (0, S.useState)("inactive"),
    [A, G] = (0, S.useState)(),
    [V, W] = (0, S.useState)(),
    { displayedEventCount: F, progress: C } = Nr({
      phase: T,
      totalEvents: E,
      transferredEvents: g,
    }),
    f = (0, S.useRef)(),
    h = (0, S.useRef)(!1),
    u = (0, S.useRef)(!1);
  (0, S.useEffect)(() => () => f.current?.abort(), []);
  let M = e?.startDate,
    d = e?.endDate;
  (0, S.useEffect)(() => {
    if (!M || !d) {
      i("idle");
      return;
    }
    let w = new AbortController();
    return (
      i("loading"),
      R(void 0),
      Mt(r, { startDate: M, endDate: d }, w.signal)
        .then(({ eventCount: I }) => {
          if (w.signal.aborted) return;
          v(I);
          let j = t !== null && Er(I, t);
          i(j ? "over_limit" : "ready");
        })
        .catch((I) => {
          w.signal.aborted || Pe(I) || (Gr.reportError(I), i("error"));
        }),
      () => w.abort()
    );
  }, [M, d, r, t, k]);
  let b = (0, S.useCallback)(() => p((w) => w + 1), []),
    B = (0, S.useCallback)(
      (w) => {
        !o || !u.current || ((u.current = !1), Ar(o, w, E));
      },
      [o, E]
    ),
    le = (0, S.useCallback)(async () => {
      if (!M || !d || s !== "ready" || h.current) return;
      let w = { startDate: M, endDate: d };
      ((h.current = !0), G(void 0), W(void 0), x(0));
      let D = new AbortController();
      ((f.current = D), (u.current = !1), o && (Lr(o, w, E), (u.current = !0)));
      try {
        let I = At() ? await Rt(w, D.signal) : void 0,
          j = performance.now();
        return (
          N("exporting"),
          await Vt(r, w, { signal: D.signal, writable: I, onTransferredEvents: x }),
          D.signal.aborted
            ? (B(w), "aborted")
            : (W(performance.now() - j),
              N("complete"),
              o && u.current && ((u.current = !1), Tr(o, w, E)),
              "complete")
        );
      } catch (I) {
        return D.signal.aborted || (N("inactive"), Pe(I))
          ? (B(w), "aborted")
          : (!Dr(I) && !(I instanceof ge) && Gr.reportError(I),
            o && u.current && ((u.current = !1), Rr(o, w, E, Xr(I))),
            G(Yr(I)),
            "failed");
      } finally {
        f.current === D && (h.current = !1);
      }
    }, [r, M, d, s, o, E, B]),
    ce = (0, S.useCallback)(() => {
      (f.current?.abort(),
        (h.current = !1),
        N("inactive"),
        x(0),
        G(void 0),
        W(void 0),
        M && d && B({ startDate: M, endDate: d }));
    }, [M, d, B]),
    K;
  return (
    s === "over_limit" && t !== null
      ? (K = Ir(E, t, c))
      : s === "error" && (K = n ?? "Could not estimate export size for this range. Try again."),
    {
      volumeCheck: s,
      volumeMessage: K,
      retryVolumeCheck: b,
      totalEvents: E,
      phase: T,
      errorMessage: A,
      exportDurationMs: V,
      setErrorMessage: G,
      displayedEventCount: F,
      progress: C,
      start: le,
      cancel: ce,
    }
  );
}
var P = a(U());
var Or = "p1j5whaq",
  wi = "i190xtw4",
  Pi = "sptrpar",
  Ei = "s1laaeki",
  Ii = "ir4tltr",
  Li = "pvix4vs",
  Ti = "i1tmo59k",
  Ai = "e1ojgdqj",
  Ri = "i1wtmfop",
  Vi = "slyvz40",
  Mi = "h166ubuf",
  Ni = "p1797vmk",
  Br = "d13gkfvk",
  Fr = "ltrjzs0";
var O = a(l()),
  eo = ["bottom", "top"];
function Hi({ enabled: r, defaultOpen: e }) {
  let [t, o] = (0, P.useState)(null),
    [c, s] = (0, P.useState)(e),
    i = (0, P.useCallback)(() => {
      r && (s(!0), t?.setAttribute("aria-expanded", "true"));
    }, [r, t]),
    k = (0, P.useCallback)(() => {
      (s(!1), t?.removeAttribute("aria-expanded"));
    }, [t]);
  return { anchorElement: t, setAnchorElement: o, isPopoverOpen: c, open: i, close: k };
}
function Wi(r) {
  return (0, P.useMemo)(() => {
    let e = new Map();
    return (r.forEach((t) => _r(t, e)), e);
  }, [r]);
}
function _r(r, e) {
  if (r.type === "section") {
    r.items.forEach((t) => _r(t, e));
    return;
  }
  e.set(r.value, r);
}
function Ki() {
  let [r, e] = (0, P.useState)(-1),
    [t, o] = (0, P.useState)("nearest-edge"),
    c = (0, P.useCallback)((s, i) => {
      (e(s), o(i));
    }, []);
  return { scrollToIndex: r, scrollToAlignment: t, scrollItemIntoView: c };
}
function ji({ inputRef: r, focusHandler: e, initialInputValue: t, changeHandler: o }) {
  (0, P.useLayoutEffect)(() => {
    let i = r.current;
    i && (i.focus(), e());
  }, [e, r]);
  let c = P.default.useRef(!1);
  return (
    (0, P.useLayoutEffect)(() => {
      c.current || ((c.current = !0), t && o(t, !1, () => {}));
    }),
    {
      handleInputChange: (0, P.useCallback)(
        (i, k, p, n) => {
          k || o(i, k, p, n);
        },
        [o]
      ),
    }
  );
}
function Ui({
  anchorElement: r,
  isOpen: e,
  menuClassName: t,
  menuWidth: o,
  menuMinWidth: c,
  alignSelf: s = "start",
  attachTo: i = eo,
  onClose: k,
  children: p,
}) {
  let [n, R] = (0, P.useState)(0);
  (0, P.useLayoutEffect)(() => {
    if (!r) return;
    let v = () => {
      let x = r.getBoundingClientRect().height;
      R(x);
    };
    v();
    let g = new ResizeObserver(v);
    return (g.observe(r), () => g.disconnect());
  }, [r]);
  let E = (0, P.useMemo)(
    () =>
      r
        ? { x: H.values.popoverAnchorInset, y: -(n - H.values.popoverAnchorInset) }
        : { x: 0, y: 0 },
    [r, n]
  );
  return !e || !r
    ? null
    : (0, O.jsx)(Dt, {
        className: fe(Or, t),
        style: { width: o, minWidth: c },
        showArrow: !1,
        focusTrapEnabled: !1,
        anchor: r,
        alignSelf: s,
        attachTo: i,
        offset: E,
        animateAppear: !1,
        backdropEnabled: !0,
        onClose: k,
        children: p,
      });
}
function zi({
  listBoxId: r,
  showList: e,
  large: t,
  displayItems: o,
  checkedItems: c,
  highlightedIndex: s,
  scrollToIndex: i,
  scrollToAlignment: k,
  onSelect: p,
  onHighlight: n,
  stickySectionHeaders: R,
  noSearchResultsEnabled: E,
  isOpen: v,
  flatList: g,
}) {
  let x = E && v && g.length === 0,
    T = e && !x;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      T && (0, O.jsx)("div", { className: Br }),
      T &&
        (0, O.jsx)("div", {
          id: r,
          role: "listbox",
          className: Fr,
          children: (0, O.jsx)(Wt, {
            large: t,
            items: o,
            checkedItems: c,
            highlightedIndex: s,
            scrollToIndex: i,
            scrollToAlignment: k,
            onSelect: p,
            onHighlight: n,
            shrinkCompletionLabel: !0,
            stickySectionHeaders: R,
          }),
        }),
      x && (0, O.jsx)(Kt, { className: Ht, icon: null, title: void 0, body: "No search results" }),
    ],
  });
}
function Zi(r) {
  r.target instanceof HTMLInputElement || r.preventDefault();
}
export {
  Go as a,
  Re as b,
  er as c,
  Xt as d,
  Uo as e,
  $o as f,
  pr as g,
  lo as h,
  Xo as i,
  ir as j,
  sr as k,
  or as l,
  ri as m,
  go as n,
  ki as o,
  wi as p,
  Pi as q,
  Ei as r,
  Ii as s,
  Li as t,
  Ti as u,
  Ai as v,
  Ri as w,
  Vi as x,
  Mi as y,
  Ni as z,
  eo as A,
  Hi as B,
  Wi as C,
  Ki as D,
  ji as E,
  Ui as F,
  zi as G,
  Zi as H,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-RZ3V3DLU.mjs.map
