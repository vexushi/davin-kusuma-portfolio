import {
  Aa as kt,
  C as br,
  Ca as Ar,
  D as Sr,
  Ea as Vr,
  F as hr,
  G as xr,
  L as Rr,
  P as Rt,
  V as Se,
  W as Er,
  a as gr,
  b as vr,
  ia as Fr,
  ja as kr,
  la as $e,
  ta as Pr,
  ua as Et,
  va as Nr,
  wa as Lr,
  ya as Ft,
} from "./chunk-TWMIZGIY.mjs";
import {
  $d as cr,
  Df as Ke,
  Ef as ur,
  Ff as pr,
  Fi as pe,
  N as Jo,
  Rd as lr,
  Wa as Zo,
  Xa as Qo,
  Yd as sr,
  _d as dr,
  ah as Cr,
  ic as ht,
  ii as Tr,
  jc as or,
  kc as rr,
  lc as nr,
  td as te,
  ua as ce,
  ud as ir,
  ug as mr,
  xg as fr,
  yg as yr,
  yj as wr,
} from "./chunk-3W5IVLGF.mjs";
import { c as Dr } from "./chunk-D3BIVQHH.mjs";
import { B as oe } from "./chunk-HX5WLUEV.mjs";
import { b as Ir } from "./chunk-QSYJLG2Y.mjs";
import { Ic as Yo, ha as Go, ja as Ko, ka as $o, xc as qo } from "./chunk-VEB6EOI6.mjs";
import {
  Bd as bt,
  Ed as St,
  Jc as _e,
  ga as Uo,
  ke as Xo,
  pa as Wo,
  qa as jo,
  ud as be,
} from "./chunk-CFC4BE4R.mjs";
import { a as tr } from "./chunk-Y3GGHNCV.mjs";
import { s as Ge } from "./chunk-GQATECY2.mjs";
import {
  Cu as Ho,
  Im as zo,
  Is as Tt,
  Jm as Mo,
  Md as Co,
  Mf as ee,
  Nk as Vo,
  Qm as It,
  Ri as Ro,
  Wm as Oo,
  Xh as So,
  Yb as ft,
  fg as de,
  kb as mt,
  kg as Io,
  kq as Bo,
  kx as We,
  nl as wo,
  qc as Ie,
  rl as Do,
  tj as U,
  tk as Ue,
  uh as To,
  vk as Lo,
  zu as _o,
} from "./chunk-UDNVJCNV.mjs";
import {
  Bi as mo,
  Cc as N,
  Dc as v,
  Eg as Oe,
  Ej as yo,
  Gq as vt,
  Hb as W,
  Jb as co,
  Mh as T,
  Nh as F,
  Oh as Q,
  Qm as ho,
  Rm as xo,
  Sh as J,
  Th as H,
  We as B,
  Wk as Ct,
  Wp as Po,
  Xn as Eo,
  Yc as ct,
  Yn as Fo,
  Zd as pt,
  Zn as ko,
  _c as ut,
  _r as Ao,
  bf as w,
  cq as Be,
  ec as uo,
  gj as fo,
  ic as po,
  ld as ze,
  lm as bo,
  oh as ve,
  ok as go,
  oq as No,
  pc as we,
  sc as V,
  sd as ge,
  tc as Ce,
  tm as Te,
  uc as dt,
  vk as vo,
  wb as lo,
  wj as yt,
  xb as so,
  xc as De,
  yb as K,
  yc as O,
  zb as le,
} from "./chunk-KHAT6QH3.mjs";
import { d as qe } from "./chunk-5Y36GTP3.mjs";
import { c as ue, d as er } from "./chunk-F44HGEZI.mjs";
import { a as He, u as ar, v as xt } from "./chunk-KBPGUKJ2.mjs";
import { b as je } from "./chunk-EWVTS3IL.mjs";
import { f as j } from "./chunk-NAYFA6AI.mjs";
import { g as gt } from "./chunk-SKXRFR7Y.mjs";
import { e as Me } from "./chunk-GHDF5CG4.mjs";
import { a as f, b as E } from "./chunk-WRBBN7SY.mjs";
import { a as D } from "./chunk-SMHMQ5IL.mjs";
import { a as Z } from "./chunk-MSHSIAEI.mjs";
import { p as M } from "./chunk-GOIPLIIS.mjs";
import { b as P, e as Ae, f as ye, k as X, n as z, o as se, q as Ve } from "./chunk-Y3GZLMBF.mjs";
import { b as p, c as x } from "./chunk-4JY5UMT2.mjs";
import { i as io, p as ao } from "./chunk-VHFKZWVR.mjs";
import { b as _, i as no } from "./chunk-WBI6GGAG.mjs";
import { p as oo, q as ro } from "./chunk-WLHSDIGQ.mjs";
async function zr(e, t) {
  if (!t || !e.stores.loadingStore.hasMinimalEditableData) return;
  if (M.isOn("invoke")) {
    (await e.stores.chromeStore.setActiveView({ type: "page", nodeId: t })) &&
      e.stores.siteSettingsStore.close();
    return;
  }
  let o = e.tree.get(t);
  (!dt(o) && !Ce(o) && !V(o)) ||
    (e.stores.codeEditorStore.closeEditor(),
    e.stores.scopeStore.activeId !== t &&
      e.stores.canvasStore.invalidateTransformUntilRendered(() => {
        let r = e.stores.treeStore.getDataTree().get(t);
        (!dt(r) && !Ce(r) && !V(r)) || e.stores.scopeStore.select(t, { keepHistory: !1 });
      }));
}
function La(e, t, o, r, { shouldOpenPage: n = !0, renamedIds: i = new te() } = {}) {
  let a = dr(e, t, o, "duplicate", {
    enterIsolation: !1,
    preferredName: r,
    insertionIndex: e.tree.root.children.findIndex((l) => l.id === t.id) + 1,
    renamedIds: i,
  });
  return (
    e.stores.persistedUserDefaults.newContentAsDraft &&
      a.set({ isDraft: !0, duplicatedFrom: Io(a.duplicatedFrom, t.id) }),
    n && zr(e, a.id),
    a
  );
}
function Jn(e, t, o) {
  let r = new te(),
    n = new Set(
      e.stores.scopeStore
        .getDesignPageNodes()
        .map((s) => s.resolveValue("name"))
        .filter(P)
    ),
    i = _e(o ?? t.resolveValue("name") ?? "Design", n),
    a = t.clone({ name: i, children: new yo() });
  r.set(t.id, a.id);
  let l = [];
  for (let s of t.children) {
    let u = lr(s, new Map(), new Map(), r, !1);
    (l.push(u), r.set(s.id, u.id), a.addChild(u));
  }
  e.tree.insertNode(a, void 0, e.tree.root.children.findIndex((s) => s.id === t.id) + 1);
  for (let s of l) ir(e.tree, e.componentLoader, s, r, !1);
  return (
    Jo(e.tree, t.id, a.id),
    j("design_page_create", { pageId: a.id, source: "duplicate" }),
    a
  );
}
async function Aa(e, t, o) {
  let r = t.isLoaded() ? t : await t.load();
  if (!(!r || !Zn(e, [t.id]))) return Jn(e, r, o);
}
function Zn(e, t) {
  if (!t.length || ce(e, "canDesign")) return !1;
  let o = e.stores.treeStore.getDataTree();
  return t.length === 1 && V(o.get(t[0]))
    ? !e.stores.chromeStore.hasNonDefaultCanvasLocale
    : t.every((r) => Ce(o.get(r)));
}
function ja(e, t) {
  if (!Xo(e)) {
    t.onlyNodesWithFormInputFontStyles = !1;
    return;
  }
  (H("formInputFontFamily", t, e),
    Qn(t, e),
    H("formInputFontColor", t, e),
    H("formInputFontWeight", t, e),
    H("formInputFontStyle", t, e),
    H("formInputFontLineHeight", t, e),
    H("formInputFontLineHeightUnit", t, e),
    (t.formInputFontTextAlignmentDirection = be(
      t.formInputFontTextAlignmentDirection,
      e.formInputFontTextAlignment
    )),
    H("formInputFontTextAlignment", t, e),
    H("formInputFontLetterSpacing", t, e),
    H("formInputFontLetterSpacingUnit", t, e),
    F(t.formInputFontSelector) && (t.formInputFontSelector = new Set()),
    se(e.formInputFontSelector) && t.formInputFontSelector.add(e.formInputFontSelector),
    (t.formInputOpenTypeFontFeatures = Pt(
      t.formInputOpenTypeFontFeatures,
      e.formInputOpenTypeFontFeatures
    )),
    (t.formInputVariationAxes = Nt(t.formInputVariationAxes, e.formInputVariationAxes)));
}
function Qn(e, t) {
  let o = e.formInputFontSize,
    r = e.formInputFontSizeUnit;
  if ((E(o) && E(r)) || z(t.formInputFontSize)) return;
  let [n, i] = Ae(t.formInputFontSize) ? [t.formInputFontSize, "px"] : ve(t.formInputFontSize);
  if (F(r)) e.formInputFontSizeUnit = i;
  else if (J(i, r)) {
    ((e.formInputFontSizeUnit = f), (e.formInputFontSize = f));
    return;
  }
  F(o) ? (e.formInputFontSize = n) : J(n, o) && (e.formInputFontSize = f);
}
function Pt(e, t) {
  let o = new Set(Q(e) ? Object.keys(e) : void 0),
    r = t ?? [],
    n = Q(e) ? e : {};
  for (let i of r) {
    if (!Ie(i)) continue;
    let a = n[i];
    (z(a) && (n[i] = Q(e) ? f : !0), o.delete(i));
  }
  for (let i of o) Ie(i) && (n[i] = f);
  return n;
}
function Nt(e, t) {
  let o = Q(e) ? e : {},
    r = new Set(Object.keys(o));
  if (se(t))
    for (let n in t) {
      let i = o[n];
      (r.delete(n), !E(i) && (z(i) ? (o[n] = t[n]) : i !== t[n] && (o[n] = f)));
    }
  for (let n of r) o[n] = f;
  return o;
}
var ti = {
  borderBottom: f,
  borderLeft: f,
  borderRight: f,
  borderTop: f,
  borderWidth: f,
  borderColor: f,
  borderStyle: f,
  borderPerSide: f,
};
function I(e, t) {
  return E(t) ? f : F(t) ? e : J(e, t) ? f : e;
}
function oi(e, t) {
  return E(t) ? f : F(t) || D(e, t) ? e : f;
}
function ri(e, t, o) {
  return (
    p(Q(e)),
    E(e)
      ? f
      : e.length !== t.length
        ? f
        : (e.forEach((r, n) => {
            let i = t[n];
            p(i);
            let a = r.type;
            switch (a) {
              case "boolean":
              case "color":
              case "date":
              case "enum":
              case "file":
              case "link":
              case "number":
              case "object":
              case "richtext":
              case "string":
              case "transition":
              case "image":
              case "responsiveimage":
              case "scrollsectionref":
              case "customcursor":
              case "border":
              case "cursor":
              case "location":
                me(r, i, o);
                break;
              default:
                x(a);
            }
          }),
          e)
  );
}
function me(e, t, o) {
  switch (e.type) {
    case "array": {
      if ((p(t.type === "array"), p(o.type === "array"), E(e.value))) break;
      if (F(e.value)) {
        if (B(t.value)) {
          e.value = t.value;
          break;
        }
        e.value = t.value.map((r) => si(o.control, r.id));
      }
      if (B(t.value)) {
        e.value = I(t.value, e.value);
        break;
      }
      if (B(e.value)) {
        e.value = f;
        break;
      }
      e.value = ri(e.value, t.value, o.control);
      break;
    }
    case "slot": {
      if ((p(t.type === e.type), E(e.value))) break;
      (p(o.type === "slot"),
        p(!w(t.value), "Slots don't support dynamic values"),
        F(e.value) ? (e.value = t.value) : (e.value = f));
      break;
    }
    case "object":
      if ((p(t.type === e.type), E(e.value))) break;
      if ((p(o.type === "object"), F(e.value)))
        if (t.value === null) e.value = null;
        else {
          e.value = {};
          for (let r in o.controls) {
            let n = o.controls[r];
            p(n);
            let i = li(n);
            i && (e.value[r] = i);
          }
        }
      if (e.value === null || t.value === null) {
        e.value !== t.value && (e.value = f);
        break;
      }
      for (let r in e.value) {
        let n = o.controls[r];
        p(n);
        let i = e.value[r];
        p(i);
        let a = t.value[r];
        (p(
          a,
          "getControlProps(), should have added these if they were missing from the document data"
        ),
          me(i, a, n));
      }
      break;
    case "transition":
      if ((p(t.type === e.type), E(e.value))) break;
      if (F(e.value)) {
        e.value = t.value;
        break;
      }
      if (w(e.value) || w(t.value) || !e.value || !t.value) {
        e.value = I(t.value, e.value);
        break;
      }
      D(e.value, t.value) || (e.value = f);
      break;
    case "responsiveimage":
      if ((p(t.type === "image"), (e.value = I(t.value, e.value)), e.type === "responsiveimage")) {
        let r = P(t.alt) ? t.alt : "";
        e.alt = I(r, e.alt);
        let { positionX: n, positionY: i } = t;
        ((e.positionX = I(n, e.positionX)), (e.positionY = I(i, e.positionY)));
      }
      break;
    case "fusednumber":
      (p(t.type === e.type),
        (e.single = I(t.value.single, e.single)),
        (e.isFused = I(t.isFused, e.isFused)),
        (e.fused[0] = I(t.value.fused[0], e.fused[0])),
        (e.fused[1] = I(t.value.fused[1], e.fused[1])),
        (e.fused[2] = I(t.value.fused[2], e.fused[2])),
        (e.fused[3] = I(t.value.fused[3], e.fused[3])));
      break;
    case "link": {
      if ((p(t.type === e.type), E(e.value))) break;
      if (F(e.value)) {
        e.value = t.value;
        break;
      }
      if (w(e.value) || w(t.value) || !e.value || !t.value) {
        e.value = I(t.value, e.value);
        break;
      }
      if (!Ct(e.value, t.value)) {
        e.value = f;
        break;
      }
      break;
    }
    case "linkrelvalues": {
      if ((p(t.type === e.type), E(e.value))) break;
      if (F(e.value)) {
        e.value = t.value;
        break;
      }
      if (w(e.value) || w(t.value) || !e.value || !t.value) {
        e.value = I(t.value, e.value);
        break;
      }
      D(e.value, t.value) || (e.value = f);
      break;
    }
    case "pagescope":
      if ((p(t.type === e.type), E(e.value))) break;
      if (F(e.value)) {
        e.value = t.value;
        break;
      }
      if (!e.value || !t.value) {
        e.value = I(t.value, e.value);
        break;
      }
      if (!Ct(e.value, t.value)) {
        e.value = f;
        break;
      }
      break;
    case "font": {
      if ((p(o.type === "font"), p(t.type === e.type), E(e.value))) break;
      if (F(e.value)) {
        if (z(t.value)) {
          e.value = t.value;
          break;
        }
        let g = new Set([t.value.fontSelector]),
          b = T,
          h = new Set(),
          A = new Set(),
          R = T,
          G = T,
          $ = T,
          q = T,
          Qt = new Set(),
          eo = {};
        if (o.displayFontSize) {
          let [ae, Y] = ft(t.value.fontSize) ? ve(t.value.fontSize) : [];
          ((b = ae), Y && h.add(Y));
        }
        if (
          (o.displayTextAlignment &&
            ((G = t.value.textAlignment), ($ = be($, t.value.textAlignment))),
          o.controls === "extended")
        ) {
          let [ae, Y] = t.value.lineHeight ?? [];
          ((R = ae), Y && A.add(Y));
          let [Xn, to] = t.value.letterSpacing ?? [];
          ((q = Xn), to && Qt.add(to));
        }
        t.value.openTypeFontFeatures &&
          (eo = (t.value.openTypeFontFeatures ?? []).reduce(
            (ae, Y) => (Ie(Y) && (ae[Y] = !0), ae),
            {}
          ));
        let Yn = t.value.variationAxes ?? {};
        e.value = {
          fontSelector: g,
          lineHeightValue: R,
          lineHeightUnits: A,
          fontSizeValue: b,
          fontSizeUnits: h,
          textAlignment: G,
          textAlignmentDirection: $,
          letterSpacingValue: q,
          letterSpacingUnits: Qt,
          openTypeFontFeatures: eo,
          variationAxes: Yn,
        };
        break;
      }
      if (z(e.value)) {
        z(t.value) || (e.value = f);
        break;
      }
      if (z(t.value)) {
        e.value = f;
        break;
      }
      let {
        fontSelector: r,
        lineHeight: [n, i] = [],
        fontSize: a,
        textAlignment: l,
        letterSpacing: [s, u] = [],
        openTypeFontFeatures: c,
        variationAxes: d,
      } = t.value;
      e.value.fontSelector.add(r);
      let [m, y] = ft(a) ? ve(a) : [],
        C = e.value.fontSizeValue !== m || (!z(y) && !e.value.fontSizeUnits.has(y));
      (o.displayFontSize && C && ((e.value.fontSizeValue = f), y && e.value.fontSizeUnits.add(y)),
        o.displayTextAlignment && e.value.textAlignment !== l && (e.value.textAlignment = f),
        o.displayTextAlignment &&
          (e.value.textAlignmentDirection = be(e.value.textAlignmentDirection ?? T, l)),
        o.controls === "extended" &&
          (e.value.lineHeightValue !== n && (e.value.lineHeightValue = f),
          i && e.value.lineHeightUnits.add(i),
          e.value.letterSpacingValue !== s && (e.value.letterSpacingValue = f),
          u && e.value.letterSpacingUnits.add(u)),
        (e.value.openTypeFontFeatures = Pt(e.value.openTypeFontFeatures, c)),
        (e.value.variationAxes = Nt(e.value.variationAxes, d)));
      break;
    }
    case "customcursor":
    case "scrollsectionref": {
      p(t.type === e.type);
      let r = D(t.value, e.value) ? e.value : t.value;
      e.value = I(r, e.value);
      break;
    }
    case "location": {
      p(t.type === e.type);
      let r = D(t.value, e.value) ? e.value : t.value;
      ((e.value = I(r, e.value)),
        (e.title = I(t.title, e.title)),
        (e.address = I(t.address, e.address)));
      break;
    }
    case "border": {
      if ((p(t.type === e.type), F(e.value))) {
        w(t.value)
          ? (e.value = t.value)
          : Ve(t.value)
            ? (e.value = null)
            : (e.value = { ...t.value });
        break;
      }
      if (w(t.value) || w(e.value) || Ve(t.value) || Ve(e.value)) {
        J(t.value, e.value) && (e.value = ti);
        break;
      }
      let r = e.value;
      ((r.borderTop = I(t.value.borderTop, r.borderTop)),
        (r.borderRight = I(t.value.borderRight, r.borderRight)),
        (r.borderBottom = I(t.value.borderBottom, r.borderBottom)),
        (r.borderLeft = I(t.value.borderLeft, r.borderLeft)),
        (r.borderWidth = I(t.value.borderWidth, r.borderWidth)),
        (r.borderColor = I(t.value.borderColor, r.borderColor)),
        (r.borderStyle = I(t.value.borderStyle, r.borderStyle)));
      break;
    }
    case "boxshadow":
      (p(t.type === e.type), (e.value = Ro(t.value, e.value)));
      break;
    case "multicollectionreference":
      (p(t.type === e.type), (e.value = oi(t.value, e.value)));
      break;
    case "gap": {
      if ((p(t.type === e.type), (e.value = I(t.value, e.value)), !E(e.columnGap))) {
        let r = w(t.value) ? f : Wo(t.value);
        F(e.columnGap) ? (e.columnGap = r) : J(r, e.columnGap) && (e.columnGap = f);
      }
      if (!E(e.rowGap)) {
        let r = w(t.value) ? f : jo(t.value);
        F(e.rowGap) ? (e.rowGap = r) : J(r, e.rowGap) && (e.rowGap = f);
      }
      break;
    }
    case "boolean":
    case "color":
    case "date":
    case "dimension":
    case "enum":
    case "file":
    case "motionvalue":
    case "number":
    case "richtext":
    case "string":
    case "image":
    case "cursor":
    case "padding":
    case "borderradius":
    case "collectionreference":
    case "trackingid":
    case "vectorsetitem":
      (p(t.type === e.type), (e.value = I(t.value, e.value)));
      break;
    default:
  }
}
function fe(e) {
  switch (e.type) {
    case "boolean":
    case "color":
    case "date":
    case "dimension":
    case "enum":
    case "file":
    case "link":
    case "linkrelvalues":
    case "motionvalue":
    case "number":
    case "richtext":
    case "string":
    case "transition":
    case "boxshadow":
    case "image":
    case "object":
      return { type: e.type, value: T };
    case "array":
    case "slot":
    case "font":
    case "pagescope":
    case "scrollsectionref":
    case "customcursor":
    case "border":
    case "cursor":
    case "padding":
    case "borderradius":
    case "collectionreference":
    case "multicollectionreference":
    case "vectorsetitem":
      return { type: e.type, value: T };
    case "location":
      return { type: e.type, value: T, title: T, address: T };
    case "gap":
      return { type: e.type, value: T, columnGap: T, rowGap: T };
    case "trackingid":
      return { type: e.type, value: T, trackingIdAIPrompt: T };
    case "fusednumber":
      return { type: "fusednumber", isFused: T, single: T, fused: [T, T, T, T] };
    case "responsiveimage":
      return { type: "responsiveimage", value: T, alt: T, positionX: T, positionY: T };
    case "eventhandler":
    case "changehandler":
      return null;
    default:
      return null;
  }
}
function sl(e, t) {
  let o = fe(t);
  return (p(o?.type === "responsiveimage"), e && me(o, e, t), o);
}
var ni = {
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
  link: !0,
  date: !0,
  object: !0,
  array: !0,
  fusednumber: !0,
  font: !0,
  pagescope: !0,
  scrollsectionref: !0,
  customcursor: !0,
  border: !0,
  cursor: !0,
  boxshadow: !0,
  gap: !0,
  padding: !0,
  borderradius: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  trackingid: !0,
  location: !0,
  vectorsetitem: !0,
};
function ii(e) {
  return Object.hasOwn(ni, e);
}
function ai(e) {
  return ii(e.type);
}
function li(e) {
  let t = fe(e);
  return t ? (p(ai(t)), t) : null;
}
function si(e, t) {
  let o = fe(e);
  p(o);
  let r = o;
  return ((r.id = t), r);
}
function dl(e, t) {
  let o = {};
  for (let r in e) {
    let n = e[r];
    if (!n) continue;
    let i = fe(n);
    i && (o[r] = i);
  }
  for (let r of t)
    for (let n in r) {
      let i = e[n];
      if ((p(i), i.type === "eventhandler")) continue;
      let a = o[n];
      p(a, "Each control prop should have a corresponding reduced control prop");
      let l = r[n];
      (p(l), me(a, l, i));
    }
  return o;
}
function At(e) {
  if (mo(e)) return { reference: e.repeatArray, isNodeLevelRepeat: !0 };
  if (Uo(e)) return { reference: e.dataRepeaterArray, isNodeLevelRepeat: !1 };
}
function Nl(e, t, o, r, n, i, a, l) {
  if (!r.cache.getRenderInstance(n)) return;
  let s = e.getNode(i.providerId);
  if (!s) return;
  if (ee(s)) {
    let h = l ?? It(e, r, n),
      A = Lt(h, s)?.renderId ?? s.id,
      R = Or(A, h, o);
    return R ? mi(e, t, o, i, a, R) : void 0;
  }
  let u = At(s);
  if (!u) return;
  let c = u.reference,
    d = e.getNodeWithTrait(c.providerId, ee);
  if (!d) return;
  let m = l ?? It(e, r, n),
    y = Lt(m, s),
    C = di(s, y, m, o, u.isNodeLevelRepeat);
  if (!C) return;
  let g = Lt(m, d)?.renderId ?? d.id,
    b = Or(g, m, o);
  if (b && i.id && pt(a))
    return Wr(
      e,
      t,
      {
        type: "arrayItemField",
        collectionItemId: b,
        arrayVariableId: c.id,
        arrayItemId: C,
        variableId: i.id,
      },
      a
    );
}
function Lt(e, t) {
  return e.find((o) => o.node.id === t.id);
}
function di(e, t, o, r, n) {
  if (n) {
    if (!t) return;
    let a = e.cache.getRenderInstance(t.renderId);
    if (!a?.parentRenderId || !a.repeaterItemId) return;
    let l = Vo(a.parentRenderId, e.id);
    return r.getItemIds(l)?.includes(a.repeaterItemId) ? a.repeaterItemId : void 0;
  }
  let i = t?.renderId ?? e.id;
  return Ur(o, r.getItemIds(i));
}
function Or(e, t, o) {
  let r = o.getItemIds(e),
    n = Ur(t, r);
  if (n) return n;
  if (r?.length === 1) return r[0];
}
function Ur(e, t) {
  if (t)
    for (let o of e) {
      let r = o.node.cache.getRenderInstance(o.renderId)?.repeaterItemId;
      if (r && t.includes(r)) return r;
    }
}
function Wr(e, t, o, r) {
  let n = e.getNodeWithTrait(o.collectionItemId, v);
  if (!n) return;
  let i = e.getNodeWithTrait(n.parentid, N);
  if (i)
    return o.type === "collectionField"
      ? ui({
          tree: e,
          componentLoader: t,
          collectionNode: i,
          collectionItemNode: n,
          target: o,
          variableType: r,
        })
      : o.type === "arrayItemField"
        ? pt(r)
          ? ci({
              tree: e,
              componentLoader: t,
              collectionNode: i,
              collectionItemNode: n,
              target: o,
              variableType: r,
            })
          : void 0
        : x(o);
}
function ci({
  tree: e,
  componentLoader: t,
  collectionNode: o,
  collectionItemNode: r,
  target: n,
  variableType: i,
}) {
  let a = o.getVariable(n.arrayVariableId);
  if (!a || !Be(a) || (o.managedByPlugin && !a.userEditable)) return;
  let l = a.itemVariables.find((b) => b.id === n.variableId);
  if (!l || l.type === "divider" || !jr(l, i)) return;
  let u = o.getPropertyControls(e, t)[n.arrayVariableId];
  if (u?.type !== "array" || u.control.type !== "object") return;
  let c = u.control.controls[n.variableId];
  if (!c || No(c.type) !== i) return;
  let d = r.getControlProp(n.arrayVariableId);
  if (d?.type !== "array" || !X(d.value)) return;
  let m = d.value.find((b) => b.id === n.arrayItemId);
  if (!m || m.type !== "object" || !m.value) return;
  let y = m.value[n.variableId],
    { controlProp: C, reducedControlProp: g } = Hr(c, y);
  if (_r(C, i))
    return (
      p(g, "Reduced control prop should not be null when a collection control prop is present"),
      {
        collectionNode: o,
        collectionItemNode: r,
        variableDefinition: l,
        controlDescription: c,
        rawControlProp: y,
        controlProp: C,
        reducedControlProp: g,
        target: n,
      }
    );
}
function ui({
  tree: e,
  componentLoader: t,
  collectionNode: o,
  collectionItemNode: r,
  target: n,
  variableType: i,
}) {
  let l = o.getPropertyControls(e, t)[n.variableId];
  if (!l) return;
  let s = o.getVariable(n.variableId);
  if (!s) return;
  let u = r.getControlProp(n.variableId),
    { controlProp: c, reducedControlProp: d } = Hr(l, u);
  if (
    _r(c, i) &&
    (p(d, "Reduced control prop should not be null when a collection control prop is present"),
    !(o.managedByPlugin && !s.userEditable) && jr(s, i))
  )
    return {
      collectionNode: o,
      collectionItemNode: r,
      variableDefinition: s,
      controlDescription: l,
      rawControlProp: u,
      controlProp: c,
      reducedControlProp: d,
      target: n,
    };
}
function jr(e, t) {
  return e.type === t;
}
function _r(e, t) {
  return oe(e) && e.type === t;
}
function Ll(e, t) {
  return pi(e, { ...e.controlProp, value: t });
}
function pi(e, t) {
  let { target: o } = e,
    r = e.collectionItemNode.treeState.tree()?.current(e.collectionItemNode);
  if (!r) return !1;
  if (o.type === "collectionField") return (r.setControlProp(o.variableId, t), !0);
  if (o.type === "arrayItemField") {
    let n = r.getControlProp(o.arrayVariableId);
    if (n?.type !== "array" || !X(n.value)) return !1;
    let i = !1,
      a = n.value.map((l) =>
        l.id !== o.arrayItemId || l.type !== "object" || !l.value
          ? l
          : ((i = !0), { ...l, value: { ...l.value, [o.variableId]: t } })
      );
    return i ? (r.setControlProp(o.arrayVariableId, { ...n, value: a }), !0) : !1;
  }
  return x(o);
}
function mi(e, t, o, r, n, i) {
  let a = r.id;
  if (!a) return;
  let l = e.getNodeWithTrait(r.providerId, ee);
  if (!l) return;
  let s = l.dataIdentifier;
  if (!K(s)) return;
  let u = Te(e, s);
  if (!u) return;
  i ??= pe(l, o);
  let c = e.getNodeWithTrait(i, v);
  if (!c || c.parentid !== u.id) return;
  let d = Ao(e, o, a, c, u);
  return (
    d && ((c = d.collectionItemNode), (u = d.collectionNode), (a = d.variableId)),
    Wr(e, t, { type: "collectionField", collectionItemId: c.id, variableId: a }, n)
  );
}
var Br = new WeakMap();
function Hr(e, t) {
  let o = Br.get(e);
  if (o && o.rawControlProp === t) {
    let { controlProp: i, reducedControlProp: a } = o;
    return { controlProp: i, reducedControlProp: a };
  }
  let r = U(e, t),
    n = fe(e);
  return (
    n && r && me(n, r, e),
    Br.set(e, { rawControlProp: t, controlProp: r, reducedControlProp: n }),
    { controlProp: r, reducedControlProp: n }
  );
}
function Dl(e, t) {
  let o = (n) => e.reactComponentForIdentifier(n)?.properties ?? null;
  if (!M.isOn("harness2")) return { getPropertyControls: o };
  let r = new Map();
  return {
    getPropertyControls(n) {
      let i = o(n);
      if (i) return i;
      let a = r.get(n);
      if (a !== void 0) return a;
      let l = fi(n, t);
      return (r.set(n, l), l);
    },
  };
}
function fi(e, t) {
  let o = W(e);
  if (!o || !le(o)) return null;
  let r = t.resolvePropertyControls({ instanceIdentifier: o.value });
  return r === void 0 ? null : he(r);
}
function he(e) {
  let t = {};
  for (let o in e) {
    let r = e[o];
    if (!r) continue;
    let { hidden: n, ...i } = r;
    t[o] = i;
  }
  return t;
}
var Gr = ["loader", "tree-first", "tree-only"];
function Kr(e) {
  return Gr.find((t) => t === e);
}
var Vt =
  typeof window > "u"
    ? void 0
    : Kr(new URLSearchParams(window.location.search).get("__l10nControlMode"));
function $r(e) {
  Vt = e;
}
function zt() {
  return M.isOn("harness2");
}
function ne() {
  return zt() ? Vt || (M.isOn("localizationTreeControls") ? "tree-first" : "loader") : "loader";
}
function qr() {
  return Gr;
}
function Yr(e) {
  return Kr(e);
}
var L = {
    treeHits: 0,
    treeMisses: 0,
    loaderFallbacks: 0,
    loaderPreferred: 0,
    kindMismatches: [],
    annotationRefusals: [],
  },
  wt = new Set(),
  Dt = new Set();
function Xr() {
  return {
    ...L,
    kindMismatches: [...L.kindMismatches],
    annotationRefusals: [...L.annotationRefusals],
  };
}
function Jr() {
  ((L.treeHits = 0),
    (L.treeMisses = 0),
    (L.loaderFallbacks = 0),
    (L.loaderPreferred = 0),
    (L.kindMismatches.length = 0),
    (L.annotationRefusals.length = 0),
    wt.clear(),
    Dt.clear());
}
function Zr() {
  L.treeHits++;
}
function Qr() {
  L.treeMisses++;
}
function en() {
  L.loaderFallbacks++;
}
function tn() {
  L.loaderPreferred++;
}
function on(e, t) {
  wt.has(e) || (wt.add(e), L.kindMismatches.push({ identifier: e, loaderType: t }));
}
function Mt(e) {
  Dt.has(e) || (Dt.add(e), L.annotationRefusals.push(e));
}
var Ot = Symbol("annotationRefusal");
function rn(e) {
  if (!e) return;
  let t = {};
  for (let o in e) {
    let r = e[o];
    r !== void 0 && (t[o] = P(r) ? r : JSON.stringify(r));
  }
  return t;
}
var yi = new Set(["canvasComponent", "layoutTemplate", "collection", "draftCollection", "vector"]);
function Ci(e) {
  return e.kind !== "localModuleExport" || e.exportSpecifier !== "default" ? !1 : yi.has(e.type);
}
var nn = new WeakMap();
function gi(e) {
  let t = 0;
  for (let o = e; o; o = o.base) t += o.length;
  return t;
}
function vi(e) {
  let t = e.manifest,
    o = gi(e),
    r = nn.get(e);
  if (r && r.branchManifest === t && r.rowCount === o) return r.answers;
  let n = new Map();
  return (nn.set(e, { branchManifest: t, rowCount: o, answers: n }), n);
}
function xe(e) {
  throw new Error(
    `${e} is not available on the localization tree-controls loader: it is read-only`
  );
}
var Bt = class extends vr {
  constructor(o, r, n, i) {
    super();
    this.loader = o;
    this.tree = r;
    this.store = n;
    this.mode = i;
  }
  loader;
  tree;
  store;
  mode;
  componentForIdentifier(o) {
    let r = this.loader.componentForIdentifier(o),
      n = this.treeAnswer(o);
    return (
      n ? Zr() : Qr(),
      n && r && r.type !== n.definition.type && on(o, r.type),
      this.mode === "tree-only"
        ? (n?.definition ?? null)
        : n && this.preferTreeAnswer(n, r !== null)
          ? n.definition
          : (n ? tn() : r && en(), r)
    );
  }
  getDefinitionHash(o) {
    let r = this.treeAnswer(o);
    if (this.mode === "tree-only") return r?.hash ?? 0;
    let n = this.loader.getDefinitionHash(o);
    return r && this.preferTreeAnswer(r, n !== 0) ? r.hash : n;
  }
  preferTreeAnswer(o, r) {
    return o.derivedFromDocument || !r;
  }
  reactComponentForIdentifier(o) {
    let r = this.loader.componentForIdentifier(o);
    return r && r.type !== "component" ? null : super.reactComponentForIdentifier(o);
  }
  trackEntityReads(o, r) {
    return this.loader.trackEntityReads(o, r);
  }
  dataForIdentifier(o) {
    return this.loader.dataForIdentifier(o);
  }
  getAllEntities() {
    return this.loader.getAllEntities();
  }
  getAllLocalModules() {
    return this.loader.getAllLocalModules();
  }
  getData() {
    return this.loader.getData();
  }
  errorForIdentifier(o) {
    return this.loader.errorForIdentifier(o);
  }
  updateEntity() {
    xe("updateEntity");
  }
  deleteEntity() {
    xe("deleteEntity");
  }
  setModuleRevision() {
    xe("setModuleRevision");
  }
  testing = {
    setEntity: () => xe("testing.setEntity"),
    clearEntities: () => xe("testing.clearEntities"),
  };
  treeAnswer(o) {
    let r = vi(this.store),
      n = r.get(o);
    if (n === Ot) return (Mt(o), null);
    if (n !== void 0) return n;
    let i = this.resolveFromTree(o);
    return (r.set(o, i), i === Ot ? (Mt(o), null) : i);
  }
  resolveFromTree(o) {
    let r = W(o);
    if (!r || !le(r)) return null;
    let n = M.isOn("harness2"),
      i = hr({ identifier: r.value }, this.store, { enabled: n });
    if (i === void 0) return null;
    let a = this.moduleNodeFacts(r);
    if (a === null) return Ot;
    let { name: l, annotations: s } = a,
      u = Sr(r.value, this.store);
    if (u !== void 0 && u !== "hook" && u !== "component") return null;
    let c = {
        depth: 0,
        file: "",
        identifier: r.value,
        packageIdentifier: "",
        annotations: s,
        update: 0,
      },
      m = (u === "hook"
        ? {
            ...c,
            name: br(r.value, this.store) ?? l ?? "Unknown",
            type: "hook",
            properties: he(i),
            outputs: he(xr({ identifier: r.value }, this.store, { enabled: n }) ?? {}),
          }
        : void 0) ?? { ...c, name: l ?? "Unknown", type: "component", properties: he(i) };
    return { hash: gr(m), definition: m, derivedFromDocument: Ci(r) };
  }
  moduleNodeFacts(o) {
    switch (o.kind) {
      case "localModuleExport": {
        let r = this.tree.getNodeWithTrait(o.localId, Do),
          n = rn(r?.save.annotations?.[o.exportSpecifier]);
        if (o.type === "codeFile") return { name: r?.getName(), annotations: n };
        let i = this.store.getObjectKey(o.localIdName, "name");
        return { name: (P(i) && i) || r?.getName(), annotations: n };
      }
      case "externalModuleExport": {
        let r = this.tree.getNodeWithTrait(o.moduleId, ge);
        if (!r) return null;
        let n = W(r.codeComponentIdentifier);
        return n?.kind === "externalModuleExport" &&
          n.saveId === o.saveId &&
          n.exportSpecifier === o.exportSpecifier
          ? { name: r.getName(), annotations: rn(r.annotations) }
          : null;
      }
    }
  }
};
function Ye(e) {
  return ne() !== "loader";
}
function Xe(e, t) {
  let o = ne();
  return o === "loader" ? e : new Bt(e, t.getDataTree(), t.updater.store, o);
}
typeof window < "u" &&
  (window.__l10nControlsHooks = {
    mode: ne,
    setMode(e) {
      let t = Yr(e);
      if (!t)
        throw new Error(
          `Unknown localization tree-controls mode: ${e}. One of ${qr().join(", ")}.`
        );
      if (t !== "loader" && !zt())
        throw new Error(
          `Cannot force ${t}: the harness2 experiment is off, so nothing stores controls.`
        );
      return ($r(t), t);
    },
    stats: Xr,
    reset: Jr,
    wrap: Xe,
    walk: Vr,
    trackLookups: Se,
  });
var an = new WeakMap();
function ln(e) {
  let t = an.get(e);
  return t || ((t = { loadedRevision: -1, promise: void 0 }), an.set(e, t), t);
}
function Ii() {
  return M.isOn("deferNonVisibleModuleEvaluation") && M.isOn("localizationWaitsForAllModules");
}
function sn(e) {
  if (
    !Ii() ||
    e.localizationComponentLoaderPolicy === "authoritative" ||
    (ne() === "tree-only" && Ye(e.stores.treeStore))
  )
    return "ready";
  let { modulesStore: t } = e.stores,
    o = e.stores.treeStore.getDataTree().get(wo);
  return t.localModules.size === 0 && !o?.children?.length
    ? "ready"
    : tr(t.localModuleEvaluationMode)
      ? ln(t).loadedRevision >= t.revision && !t.hasPendingLocalModuleEvaluations
        ? "ready"
        : "load-all"
      : e.componentLoader.modulesRevision >= t.revision && !t.hasPendingLocalModuleEvaluations
        ? "ready"
        : "wait-for-revision";
}
function Ee(e) {
  return sn(e) !== "ready";
}
function is(e) {
  return !Ye(e.stores.treeStore) && Ee(e);
}
async function Ti(e, t) {
  if (!t) return e;
  t?.throwIfAborted();
  let o = () => {},
    r = new Promise((n, i) => {
      ((o = () => i(t.reason)), t.addEventListener("abort", o, { once: !0 }));
    });
  try {
    await Promise.race([e, r]);
  } finally {
    t.removeEventListener("abort", o);
  }
}
function ie(e) {
  let t = Ye(e.stores.treeStore);
  return e.localizationComponentLoaderPolicy === "authoritative"
    ? {
        componentLoader: Xe(e.componentLoader, e.stores.treeStore),
        usesTreeControls: t,
        needsFallbackBeforeRead: !1,
      }
    : {
        componentLoader: Xe(e.componentLoader, e.stores.treeStore),
        usesTreeControls: t,
        needsFallbackBeforeRead: !t && Ee(e),
      };
}
async function Re(e, t) {
  let { modulesStore: o } = e.stores,
    r = ln(o);
  if (!Ee(e)) {
    t?.throwIfAborted();
    return;
  }
  let n;
  for (; (n = sn(e)) !== "ready";) {
    if (!r.promise) {
      let i = n,
        l = (
          i === "load-all"
            ? or(e.componentLoader, o, "localization")
            : rr(e.componentLoader, o, "localization")
        )
          .then(() => {
            i === "load-all" && (r.loadedRevision = e.componentLoader.modulesRevision);
          })
          .finally(() => {
            r.promise === l && (r.promise = void 0);
          });
      r.promise = l;
    }
    await Ti(r.promise, t);
  }
}
async function as(e, t) {
  let o = ie(e);
  return (o.needsFallbackBeforeRead && (await Re(e, t)), t?.throwIfAborted(), o.componentLoader);
}
function dn(e) {
  return e.unresolvedLocalizableCount > 0;
}
function cn(e, t) {
  return dn(t) && Ee(e);
}
async function un(e, t, o = e.signal) {
  var s = [];
  try {
    let r = ie(e);
    r.needsFallbackBeforeRead && (await Re(e, o));
    o?.throwIfAborted();
    let n = oo(s, Er());
    let i = e.componentLoader.activeBundleHash;
    let a = await t(r.componentLoader);
    if (!r.usesTreeControls || ne() === "tree-only" || !dn(n.lookups)) return a;
    let l = Ee(e);
    l && (await Re(e, o));
    if (!l && i === e.componentLoader.activeBundleHash) return a;
    o?.throwIfAborted();
    return await t(ie(e).componentLoader);
  } catch (u) {
    var c = u,
      d = !0;
  } finally {
    ro(s, c, d);
  }
}
function pn(e, t, o = !0) {
  e.scheduler.processWhenReady(() => {
    let {
      overlayStore: r,
      selectionStore: n,
      scopeStore: i,
      canvasStore: a,
      persistedUserDefaults: l,
    } = e.stores;
    i.selectByNode(t.id);
    let s = mt(t) ? t : e.tree.getNodeWithTrait(t.cache.overlayAncestorId, mt);
    if ((s ? r.showOverlay(n, s, s.parentid) : r.hideAll(), n.set(t.id), o)) {
      let u = Mo(e.tree, [t]);
      a.zoomToCenter(u, { animated: l.animateOnZoom, maxZoom: 1 });
    }
  });
}
var Fe = no("unlinking");
async function bi(e, t, o) {
  let { codeEditorStore: r, selectionStore: n, treeStore: i } = e.stores;
  r.closeEditor();
  let [a] = n.nodes;
  if (n.nodes.length === 1 && O(a) && a.codeComponentIdentifier === t) return !0;
  let l;
  for (let s of i.query().whereClass(We).iterate())
    if (s.codeComponentIdentifier === t) {
      l = s;
      break;
    }
  return l
    ? (pn(e, l), !0)
    : (ue({
        type: "add",
        variant: "info",
        key: "add-component-instance-to-edit-in-plugin",
        primaryText: "Add component to canvas",
        secondaryText: `to edit in ${o.name}.`,
      }),
      !1);
}
async function Je(e, t, o) {
  return (await bi(e, t, o)) ? (e.stores.pluginStore.openPlugin(o, e, { mode: "canvas" }), !0) : !1;
}
function Ze(e, t) {
  let o = e.componentForIdentifier(t);
  if (o) return o;
  let r = W(t);
  return !K(r) || !le(r) ? null : e.componentForIdentifier(lo(r));
}
var Si = 0;
async function Qe(e, t, o = Si) {
  if (o === 0) {
    let n = W(t),
      i = Ke(e.stores.treeStore, e.stores.modulesStore, e.stores.pluginStore, n);
    if (i && (await Je(e, t, i))) return;
  }
  let r = Ze(e.componentLoader, t);
  r && e.stores.codeEditorStore.editFile(r.file);
}
async function mn(
  e,
  {
    identifier: t,
    info: o,
    instance: r,
    enterIsolation: n,
    codeComponentIsolationMode: i,
    scheduleTreeUpdate: a = (l) => e.scheduler.processWhenReadyAsync(l),
  }
) {
  let l = o.module.baseURL + o.module.files.source,
    u = await (await fetch(l)).text(),
    [c, d] = await Promise.all([Tr(u), e.stores.modulesStore.getModuleDependencies(t)]);
  if (c.ok) {
    let g = new Map();
    for (let h of c.value.relative) {
      let A = To(h.specifier, `${o.module.type}/`);
      if (!A) {
        Fe.warn("Failed to normalize relative import", h.specifier);
        continue;
      }
      let R = g.get(A) ?? [];
      (R.push(h), g.set(A, R));
    }
    let b;
    for (let h of d.imports) {
      if (h.type !== "local") continue;
      let A = `${h.moduleType}/${h.moduleName}`,
        R = g.get(A);
      if (!R) {
        Fe.warn("Unable to get source location of import", A, "when unlinking");
        continue;
      }
      for (let G of R) {
        b ||
          (b = u.split(`
`));
        let $ = G.specifierLine,
          q = b[$];
        (p(q !== void 0, "Import source line must exist"),
          (b[$] = q.replace(JSON.stringify(G.specifier), JSON.stringify(h.importURL))));
      }
    }
    b &&
      (u = b.join(`
`));
  }
  let y = await e.stores.modulesStore
      .forType("codeFile")
      .createWithUniqueName({
        name: o.module.name,
        source: u,
        metadata: { pluginId: o.module.metadata.pluginId },
      }),
    C = co(t, y).value;
  return (
    r &&
      (await a(() => {
        let g = e.tree.get(r.getPrimaryId());
        g && g.set({ codeComponentIdentifier: C });
      })),
    n && (e.stores.chromeStore.activateContentPanelTab("Assets"), Qe(e, C, i)),
    C
  );
}
var fn = { canvasComponent: cr, codeFile: mn };
function jt(e) {
  return P(e) ? e in fn : !1;
}
async function _t(
  e,
  {
    identifier: t,
    moduleType: o,
    instance: r,
    enterIsolation: n = !0,
    codeComponentIsolationMode: i,
    renamedIds: a = new te(),
    isAutoDetach: l = !1,
    scheduleTreeUpdate: s,
  }
) {
  if (!jt(o)) throw Error(`Cannot import external module of type ${o}`);
  let [u] = await e.stores.modulesStore.preloadExternalModules([t]);
  p(u, "external module must exist on preload");
  let c = {
      identifier: t,
      info: u,
      instance: r,
      enterIsolation: n,
      codeComponentIsolationMode: i,
      renamedIds: a,
      isAutoDetach: l,
      scheduleTreeUpdate: s,
    },
    d = fn[o],
    m = await d(e, c);
  if (!z(m))
    return !P(m) && we(m)
      ? { ...u, codeComponentIdentifier: m.instanceIdentifier, node: m }
      : { ...u, codeComponentIdentifier: m, node: void 0 };
}
var Wt = new Set();
async function Ht(e, t) {
  let { instance: o, withUnlinkModal: r, ...n } = t,
    i = Ge(e.stores.treeStore.tree, t.identifier),
    a = e.stores.insertSidebarStore.getEditBehavior(t.identifier.moduleId);
  if (r && a !== "autoUnlink" && (!i || Ir.isOn("openPrimaryForBuiltInModules"))) {
    e.stores.modalStore.set({
      type: "UnlinkComponent",
      source: "edit_action",
      ...n,
      nodeId: o?.id,
    });
    return;
  }
  if (Wt.has(t.identifier)) return;
  Wt.add(t.identifier);
  let l = t.skipUndoGroup !== !0;
  l &&
    e.scheduler.process(() => {
      e.beginUndoGroup();
    });
  try {
    return (await _t(e, { instance: o, enterIsolation: a !== "autoDetach", ...n }))
      ?.codeComponentIdentifier;
  } catch (s) {
    (Fe.reportError(s),
      ue({
        type: "add",
        variant: "error",
        primaryText: "Failed to unlink",
        secondaryText: "component.",
        key: "external-component-unlink-error",
      }));
  } finally {
    (l &&
      e.scheduler.processWhenReady(() => {
        e.endUndoGroup();
      }),
      Wt.delete(t.identifier));
  }
}
async function yn(e, t) {
  let { instance: o, moduleType: r, enterIsolation: n, codeComponentIsolationMode: i } = t,
    a = t.scheduleTreeUpdate ?? ((c) => e.scheduler.processWhenReadyAsync(c));
  if (!O(o)) return;
  let l = await Ht(e, { ...t, enterIsolation: !1 });
  if (!l) return;
  await nr(e.componentLoader, [l], e.stores.modulesStore, "component-unlinking");
  let s = e.componentLoader.componentForIdentifier(l);
  if (!s) return;
  let u = yr(s);
  u &&
    (await a(() => {
      if (
        (e.stores.treeStore
          .query()
          .whereClass(We)
          .whereNodeIsLoaded()
          .asArray()
          .forEach((d) => {
            if (
              !u ||
              u.id === d.id ||
              d.codeComponentIdentifier !== o.codeComponentIdentifier ||
              Oe(d) ||
              !mr(d, { allowLockedNodes: !0 })
            )
              return;
            let m = e.cloneNode(u, !1, !1);
            fr(e, [d], m);
          }),
        !!n)
      )
        if (r === "canvasComponent") {
          let d = _o(l);
          d && e.stores.scopeStore.select(d, { keepHistory: !1 });
        } else r === "codeFile" && Qe(e, l, i);
    }));
}
function Cn(e, t, o) {
  if (ce(e, "canDesign")) return;
  let n = e.tree.getNodeWithTrait(t, ge)?.annotation("framerVector");
  if (!Ue(n)) return;
  let i = n.set.moduleId,
    l = e.tree.getNodeWithTrait(i, ge)?.annotation("framerVectorSet");
  Lo(l) &&
    e.stores.modalStore.set({
      type: "EditVector",
      source: "edit_action",
      vectorSetNodeId: i,
      moduleId: t,
      itemCount: l.items.length,
      instanceNodeId: o,
    });
}
function Id(e) {
  let t = e.collectionItemId;
  switch (e.type) {
    case "collectionField":
      return { nodeId: t, controlKey: e.variableId, steps: [] };
    case "arrayItemField":
      return {
        nodeId: t,
        controlKey: e.arrayVariableId,
        steps: [
          { type: "arrayItem", id: e.arrayItemId },
          { type: "objectProperty", key: e.variableId },
        ],
      };
    default:
      return x(e);
  }
}
function gn(e, t, { nodeId: o, controlKey: r, steps: n }) {
  let i = In(e, t, o, r);
  for (let a of n) {
    if (!i) return;
    i = Kt(t, i, a);
  }
  return i;
}
function vn(e, t, o) {
  let r = gn(e, t, o);
  return r?.type === "richtext" ? r : void 0;
}
function Td(e, t, o, r) {
  let n = [];
  for (let i of o) {
    let a = gn(e, t, i);
    if (a?.type !== "array" || B(a.value)) continue;
    let l = a.value[r];
    if (!l) continue;
    let s = { type: "arrayItem", id: l.id };
    n.push({ ...i, steps: [...i.steps, s] });
  }
  return n;
}
function bd(e, t, { nodeId: o, controlKey: r, steps: n }) {
  let i = e.getNodeWithTrait(o, de)?.getControlPropSourceIdentifier(),
    a = ke(t, i, r),
    l = In(e, t, o, r);
  for (let s of n) {
    switch (s.type) {
      case "arrayItem":
        a = a?.type === "array" ? a.control : void 0;
        break;
      case "objectProperty":
        a = a?.type === "object" ? a.controls[s.key] : void 0;
        break;
      case "richTextEmbed":
        ((i = l ? Tn(l, s.embedId)?.identifier : void 0), (a = ke(t, i, s.controlKey)));
        break;
      default:
        x(s);
    }
    if (((l = l && Kt(t, l, s)), !l)) return;
  }
  if (!(!a || !i)) return { control: a, componentIdentifier: i };
}
function Sd({ controlKey: e, steps: t }) {
  let o = t.findLast((r) => r.type !== "arrayItem");
  switch (o?.type) {
    case void 0:
      return Me(e);
    case "objectProperty":
      return Me(o.key);
    case "richTextEmbed":
      return Me(o.controlKey);
    default:
      return x(o);
  }
}
function hd(e, t, o) {
  let { componentLoader: r } = e,
    { nodeId: n, controlKey: i, steps: a } = t,
    l = e.tree.get(n);
  if (!l) return;
  if (v(l)) {
    let y = l.getControlProp(i),
      C = Gt(r, y, a, o);
    if (D(y, C)) return;
    C ? oe(C) && l.setControlProp(i, C) : l.clearControlProps([i]);
    return;
  }
  if (!de(l)) return;
  let s = ke(r, l.getControlPropSourceIdentifier(), i);
  if (!s) return;
  let u = U(s, l.getRawControlProp(i)) ?? void 0,
    c = Gt(r, u, a, o),
    d = U(s, c) ?? void 0;
  if (D(u, d)) return;
  let m = V(l) && D(U(s, void 0), d);
  (e.setEditReason("component_property"), l.setControlProp(i, m ? void 0 : d));
}
function ke(e, t, o) {
  if (!t) return;
  let r = e.reactComponentForIdentifier(t);
  if (r) return r.properties[o];
}
function In(e, t, o, r) {
  let n = e.get(o);
  if (!n) return;
  if (v(n)) return n.getControlProp(r);
  if (!de(n)) return;
  let i = ke(t, n.getControlPropSourceIdentifier(), r);
  if (i) return U(i, n.getRawControlProp(r)) ?? void 0;
}
function Kt(e, t, o) {
  switch (o.type) {
    case "arrayItem":
      return t.type !== "array" || B(t.value) ? void 0 : t.value.find((r) => r.id === o.id);
    case "objectProperty":
      return t.type !== "object" ? void 0 : t.value?.[o.key];
    case "richTextEmbed": {
      let r = Tn(t, o.embedId);
      if (!r) return;
      let n = ke(e, r.identifier, o.controlKey);
      return n ? (U(n, r.props[o.controlKey]) ?? void 0) : void 0;
    }
    default:
      return x(o);
  }
}
function Gt(e, t, o, r) {
  let [n, ...i] = o;
  if (!n) return r;
  if (!t) return;
  let a = Kt(e, t, n);
  return !a && i.length > 0 ? t : Ei(t, n, Gt(e, a, i, r));
}
function Ei(e, t, o) {
  switch (t.type) {
    case "arrayItem": {
      if (e.type !== "array" || B(e.value) || !o) return e;
      let r = { ...o, id: t.id };
      if (!ho(r)) return e;
      let n = e.value.map((i) => (i.id === t.id ? r : i));
      return { ...e, value: n };
    }
    case "objectProperty": {
      if (e.type !== "object") return e;
      let { [t.key]: r, ...n } = e.value ?? {};
      return { ...e, value: o ? { ...n, [t.key]: o } : n };
    }
    case "richTextEmbed": {
      if (e.type !== "richtext" || !yt(e.value)) return e;
      let r = Fo(e.value, {
        module: (n) => {
          if (!bn(n, t.embedId)) return n;
          let { [t.controlKey]: i, ...a } = n.props;
          return { ...n, props: o ? { ...a, [t.controlKey]: o } : a };
        },
      });
      return { ...e, value: r };
    }
    default:
      return x(t);
  }
}
function Tn(e, t) {
  if (e.type !== "richtext" || !yt(e.value)) return null;
  let o = Eo(e.value, { module: (r) => bn(r, t) });
  return o?.type === "module" ? o : null;
}
function bn(e, t) {
  return ko(e) === t;
}
function rt(e) {
  return e?.type === "componentRichTextContent";
}
function zd(e) {
  switch (e.type) {
    case "existing":
    case "privateDraft":
    case "arrayItem":
      return !0;
    case "componentRichTextContent":
      return !1;
    default:
      x(e);
  }
}
function nt(e) {
  return e.type === "existing" || e.type === "privateDraft";
}
function Md({ stackElement: e, tree: t }) {
  if (!e || rt(e)) return null;
  let o = t.getNodeWithTrait(e.collectionId, N);
  if (o) return o;
  let r = e.type === "arrayItem" ? e.collectionItemId : e.itemId,
    n = t.getNodeWithTrait(r, v);
  return n?.parentid ? t.getNodeWithTrait(n.parentid, N) : null;
}
function Fi({ treeStore: e, stackElement: t }) {
  if (!t || rt(t)) return null;
  if (t.type === "existing" || t.type === "privateDraft")
    return e.tree.getNodeWithTrait(t.itemId, v);
  if (t.type === "arrayItem") return e.tree.getNodeWithTrait(t.collectionItemId, v) ?? null;
  x(t);
}
function Od({ treeStore: e, stackElement: t }) {
  return !t || !$t(t) ? null : Fi({ treeStore: e, stackElement: t });
}
function Bd(e) {
  return e.findLast(nt) ?? null;
}
function Ud(e) {
  return e.find(nt) ?? null;
}
function Wd(e) {
  return e.reduce((t, o) => (nt(o) ? t + 1 : t), 0);
}
function jd(e, t = []) {
  let o = e.stores.selectionStore.ids.length === 1 ? e.stores.selectionStore.ids.at(0) : void 0,
    r = ki(e, t),
    n = r.at(0);
  if (rt(n)) return r;
  let i = e.tree.getNodeWithTrait(o, v),
    a = i && ot(e, i) ? i : null;
  if (a) {
    if (!n) return [hn(e, a)];
    if (n.type === "existing")
      return n.itemId === a.id
        ? r
        : (p(r.length === 1, "Must dismiss overlay stack before changing selection"), [hn(e, a)]);
    if (n.type === "privateDraft") {
      if (n.itemId === a.id) return r;
      throw new Error("Must save private draft item stack before selecting a collection item");
    }
    if (n.type === "arrayItem") return r;
    x(n);
  }
  if (!n || n.type === "privateDraft") return r;
  if (n.type === "existing")
    return e.stores.chromeStore.mainView !== 2
      ? r
      : (p(r.length === 1, "Must dismiss overlay stack before de-selecting collection item"), []);
  if (n.type === "arrayItem") return r;
  x(n);
}
function ki(e, t) {
  let o = [];
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    if (!n) continue;
    if (rt(n)) {
      if (!n.controlPropPaths.some((s) => vn(e.tree, e.componentLoader, s))) break;
      o.push(n);
      continue;
    }
    if (n.type === "existing") {
      let l = e.tree.getNodeWithTrait(n.itemId, v);
      l && tt(e, l)
        ? (n = et(e, l, { saveAction: n.saveAction, showErrors: !1 }))
        : l?.parentid &&
          n.collectionId !== l.parentid &&
          (n = et(e, l, { saveAction: n.saveAction, showErrors: !1 }));
    }
    if (n.type === "privateDraft") {
      let l = e.tree.getNodeWithTrait(n.itemId, v);
      l && ot(e, l) && !tt(e, l) && (n = et(e, l, { saveAction: n.saveAction, showErrors: !1 }));
    }
    let i = o.at(-1) ?? null;
    if (!Pi(e, n, i) || (r > 0 && $t(n) && !n.saveAction)) break;
    o.push(n);
  }
  return o;
}
function Pi(e, t, o) {
  if (t.type === "existing") {
    let r = e.tree.getNodeWithTrait(t.itemId, v);
    return r ? !!r.parentid && ot(e, r) : !1;
  }
  if (t.type === "privateDraft") {
    let r = e.tree.getNodeWithTrait(t.itemId, v);
    return r ? r.parentid === t.collectionId && tt(e, r) : !1;
  }
  if (t.type === "arrayItem") {
    if (
      !o ||
      !nt(o) ||
      o.itemId !== t.collectionItemId ||
      ($t(o) && o.collectionId !== t.collectionId)
    )
      return !1;
    let r = e.tree.getNodeWithTrait(t.collectionId, N);
    if (!r) return !1;
    let n = e.tree.getNodeWithTrait(t.collectionItemId, v);
    if (!n || !ot(e, n) || (n.parentid && n.parentid !== t.collectionId)) return !1;
    let i = r.getVariable(t.arrayFieldId);
    if (!i || !Be(i)) return !1;
    let a = n.getControlProp(t.arrayFieldId);
    return !a || !xo(a) || !X(a.value)
      ? !1
      : a.value.some(({ type: l, id: s }) => l === "object" && s === t.arrayItemId);
  }
  x(t);
}
function tt(e, t) {
  return Zo(t, { currentUserId: e.stores.sessionStore.user.id });
}
function ot(e, t) {
  return Qo(t, { currentUserId: e.stores.sessionStore.user.id });
}
function $t(e) {
  return e.type === "privateDraft";
}
function hn(e, t) {
  return et(e, t, { showErrors: !1 });
}
function et(e, t, o) {
  if (t.parentid && tt(e, t)) {
    let n = {
      collectionId: t.parentid,
      itemId: t.id,
      showErrors: o.showErrors,
      type: "privateDraft",
    };
    return (o.saveAction && (n.saveAction = o.saveAction), n);
  }
  p(t.parentid, "Existing collection item must have a parent collection");
  let r = { collectionId: t.parentid, itemId: t.id, type: "existing" };
  return (o.saveAction && (r.saveAction = o.saveAction), r);
}
function xn(e) {
  let { newContentAsDraft: t } = e.stores.persistedUserDefaults;
  return !(!t || e.stores.publishStore.publishStatus === 1);
}
function Yt(e) {
  return ie(e).componentLoader;
}
function Ni(e, t, o) {
  let r = e.reactComponentForIdentifier(t.codeComponentIdentifier);
  if (!r) return;
  let n = r.properties[o.controlPropKey];
  return n ? (U(n, t.getRawControlProp(o.controlPropKey)) ?? void 0) : void 0;
}
function Li(e, t, o) {
  if (!vo(t)) return;
  let r = e.reactComponentForIdentifier(t.layoutTemplateIdentifier);
  if (!r) return;
  let n = r.properties[o.controlPropKey];
  return n ? (U(n, t.getRawControlProp(o.controlPropKey)) ?? void 0) : void 0;
}
function Ai(e, t, o, r) {
  let a = e.getNodeParent(o).getPropertyControls(e, t)[r.controlPropKey];
  if (!a) return;
  let l = o.getControlProp(r.controlPropKey);
  return U(a, l) ?? void 0;
}
function kn(e, t, o, r) {
  if (V(o, !0)) return Li(t, o, r);
  if (v(o)) return Ai(e, t, o, r);
  if (O(o)) return Ni(t, o, r);
}
function Pe(e, t, o, r) {
  let n = kn(e, t, o, r);
  if (!n) return;
  if (!r.ancestorControlKeyPath) return n;
  let i = Rt(r.ancestorControlKeyPath);
  for (let a of i) {
    if (!n) return;
    if ((p(n.type === a.type), n.type === "object")) {
      if ((p(a.type === "object"), !ye(n.value))) return;
      n = n.value[a.key];
    } else if (n.type === "array") {
      if ((p(a.type === "array"), !X(n.value))) return;
      n = n.value.find((l) => l.id === a.id);
    } else {
      return;
    }
  }
  return n;
}
function k(e, t) {
  e.set(t, void 0, !1, !1);
}
function Rn(e, t, o) {
  k(e, { [fo(t)]: o });
}
function Ne(e, t, o, r, n) {
  if (!r.ancestorControlKeyPath) {
    de(o)
      ? Rn(o, r.controlPropKey, n)
      : v(o)
        ? (p(oe(n), "Invalid control prop"), o.setControlProp(r.controlPropKey, n))
        : x(o, "Unsupported node");
    return;
  }
  p(V(o, !0) || O(o) || v(o));
  function i(u) {
    if (u) return u.type === "array" || u.type === "object" ? { ...u } : (p(u.type === n.type), n);
  }
  let a = i(kn(e, t, o, r));
  if (!a) return;
  let l = Rt(r.ancestorControlKeyPath),
    s = a;
  for (let u of l) {
    if (!s) return;
    if ((p(s.type === u.type), s.type === "object")) {
      if ((p(u.type === "object", "Current control should be of type Object"), !ye(s.value)))
        return;
      let c = s.value[u.key],
        d = i(c);
      if (!d) return;
      ((s.value = { ...s.value, [u.key]: d }), (s = d));
    } else if (s.type === "array") {
      if ((p(u.type === "array", "Current control should be of type Array"), !X(s.value))) return;
      let c = s.value.find((m) => m.id === u.id),
        d = i(c);
      if (!d) return;
      ((s.value = s.value.map((m) => (m.id === d.id ? d : m))), (s = d));
    } else {
      return;
    }
  }
  V(o, !0) || O(o)
    ? Rn(o, r.controlPropKey, a)
    : v(o)
      ? (p(oe(a), "Invalid control prop"), o.setControlProp(r.controlPropKey, a))
      : x(o, "Unsupported node");
}
function S(e, t, o, r) {
  let n = t ? t[e] : void 0,
    i = r(n, o);
  if (!(!t && !i)) {
    if (!i) {
      p(t);
      let a = Object.keys(t),
        l = a.length;
      if (l === 0 || (l === 1 && a[0] === e)) return;
      let s = { ...t };
      return (delete s[e], s);
    }
    return { ...t, [e]: i };
  }
}
function qt(e, t, o, r, n) {
  function i(a) {
    function l(s) {
      return s.name === r.type;
    }
    return {
      ...a,
      transforms: a.transforms.map((s) => (s.id !== r.transformId || !l(s) ? s : n(s))),
    };
  }
  if (De(o) && B(o.textContent)) {
    let a = i(o.textContent);
    k(o, { textContent: a });
    return;
  }
  if (ct(o) && B(o.formInputPlaceholder)) {
    let a = i(o.formInputPlaceholder);
    k(o, { formInputPlaceholder: a });
    return;
  }
  if (O(o)) {
    let a = Yt(e),
      l = Pe(t, a, o, r);
    if (!l || (p(l.type === "string"), !B(l.value))) return;
    let s = { ...l };
    ((s.value = i(l.value)), Ne(t, a, o, r, s));
  }
}
function Pn(e, t, o, r, n, i) {
  e.scheduler.process(() => {
    let a = e.stores.treeStore.getDataTree(),
      l = Yt(e),
      s = a.get(t.nodeId),
      u = t.type;
    switch (u) {
      case "string":
      case "richtext":
      case "link": {
        if (!v(s) && !O(s) && !V(s)) return;
        let c = Pe(a, l, s, t);
        if (!c) break;
        p(u === c.type);
        let d = { ...c },
          m = S(o.id, c.valueLocalized, "default", n);
        ((d.valueLocalized = m), Ne(a, l, s, t, d));
        break;
      }
      case "slug": {
        if (!v(s)) return;
        let c = Pe(a, l, s, t);
        p(c?.type === "string", "expected slug control type to be a ControlType.String");
        let d = { ...c },
          m = S(o.id, c.valueLocalized, "default", n);
        ((d.valueLocalized = m), Ne(a, l, s, t, d));
        break;
      }
      case "image": {
        if (!v(s) && !O(s) && !V(s)) return;
        let c = Pe(a, l, s, t);
        if (!c) break;
        p(u === c.type);
        let d = { ...c };
        if (r === "imageSrc" || r === "all") {
          let m = S(o.id, c.valueLocalized, "imageSrc", n);
          d.valueLocalized = m;
        }
        if (r === "default" || r === "all") {
          let m = S(o.id, c.altLocalized, "default", n);
          d.altLocalized = m;
        }
        Ne(a, l, s, t, d);
        break;
      }
      case "enum": {
        if (!N(s)) return;
        let c = s.variables.map((d) => {
          if (d.id !== t.variableId) return d;
          p(d.type === t.type);
          let m = d.cases.map((y) => {
            if (y.id !== t.enumCaseId) return y;
            let C = S(o.id, y.nameLocalized, "default", n);
            return { ...y, nameLocalized: C };
          });
          return { ...d, cases: m };
        });
        k(s, { variables: c });
        break;
      }
      case "RootNode":
      case "WebPageNode": {
        if (!qo(s)) return;
        let c = t.key === "title" ? "titleLocalized" : "descriptionLocalized",
          d = s[c],
          m = S(o.id, d, "default", n);
        k(s, { [c]: m });
        break;
      }
      case "RichTextNode": {
        if (!De(s)) return;
        let c = S(o.id, s.htmlLocalized, "default", n);
        (k(s, { htmlLocalized: c }), Tt(s) && je(e) && St(e, bt(e, [s.id])).catch(_));
        break;
      }
      case "FrameNode": {
        if (!po(s)) return;
        if (r === "imageSrc" || r === "all") {
          let c = S(o.id, s.fillImageLocalized, "imageSrc", n);
          k(s, { fillImageLocalized: c });
        }
        if (r === "default" || r === "all") {
          let c = S(o.id, s.altAttributeLocalized, "default", n);
          k(s, { altAttributeLocalized: c });
        }
        break;
      }
      case "nodeLink": {
        if (!Bo(s)) break;
        let c = S(o.id, s.linkLocalized, "default", n);
        k(s, { linkLocalized: c });
        break;
      }
      case "prefix":
      case "suffix": {
        if (!s) break;
        qt(e, a, s, t, (c) => {
          let d = { ...c },
            m = S(o.id, c.valueLocalized, "default", n);
          return ((d.valueLocalized = m), d);
        });
        break;
      }
      case "convertFromBoolean": {
        if (!s) break;
        qt(e, a, s, t, (c) => {
          let d = { ...c };
          return (
            t.property === "truthy" &&
              (d.truthyLocalized = S(o.id, c.truthyLocalized, "default", n)),
            t.property === "falsy" && (d.falsyLocalized = S(o.id, c.falsyLocalized, "default", n)),
            t.property === "fallback" &&
              c.fallback &&
              (d.fallback = {
                ...c.fallback,
                valueLocalized: S(o.id, c.fallback.valueLocalized, "default", n),
              }),
            d
          );
        });
        break;
      }
      case "convertFromEnum": {
        if (!s) break;
        qt(e, a, s, t, (c) => {
          let d = { ...c };
          return t.isDefaultCase
            ? ((d.defaultLocalized = S(o.id, c.defaultLocalized, "default", n)), d)
            : ((d.cases = c.cases.map((m) => {
                if (m.id !== t.caseId) return m;
                let y = { ...m },
                  C = S(o.id, m.toLocalized, "default", n);
                return ((y.toLocalized = C), y);
              })),
              d);
        });
        break;
      }
      case "FormPlainTextInputNode": {
        if (!ct(s)) return;
        k(s, {
          formInputPlaceholderLocalized: S(o.id, s.formInputPlaceholderLocalized, "default", n),
        });
        break;
      }
      case "FormSelectNode": {
        if (!ut(s) || !s.formSelectOptions) return;
        let { optionId: c } = t,
          d = s.formSelectOptions.map((m) => {
            if (m.id !== c) return m;
            let y = S(o.id, m.titleLocalized, "default", n);
            return { ...m, titleLocalized: y };
          });
        k(s, { formSelectOptions: d });
        break;
      }
      case "formSelectGenericOption": {
        if (!ut(s)) return;
        let { key: c } = t;
        switch (c) {
          case "allItemsLabel": {
            let d = S(o.id, s.allItemsLabelLocalized, "default", n);
            k(s, { allItemsLabelLocalized: d });
            break;
          }
          case "booleanTrueLabel": {
            let d = S(o.id, s.booleanTrueLabelLocalized, "default", n);
            k(s, { booleanTrueLabelLocalized: d });
            break;
          }
          case "booleanFalseLabel": {
            let d = S(o.id, s.booleanFalseLabelLocalized, "default", n);
            k(s, { booleanFalseLabelLocalized: d });
            break;
          }
          default:
            x(c);
        }
        break;
      }
      case "RouteSegmentNode": {
        if (!ze(s)) return;
        let c = s.segmentLocalized,
          d = S(o.id, c, "default", n);
        k(s, { segmentLocalized: d });
        break;
      }
      default:
    }
  }, i);
}
function Vi(e, t, o, r, n) {
  e.scheduler.process(() => {
    let i = e.stores.treeStore.getDataTree(),
      a = Yt(e),
      l = i.get(t.nodeId),
      s = t.type;
    if (kr(t)) {
      if (!v(l) && !O(l) && !V(l)) return;
      let u = Pe(i, a, l, t);
      if (!u) return;
      p(u.type === "richtext");
      let c = structuredClone(u);
      ((c.valueLocalized = S(o.id, u.valueLocalized, "default", r)), Ne(i, a, l, t, c));
    } else {
      (p(s === "RichTextNode"), p(De(l)));
      let u = S(o.id, l.htmlLocalized, "default", r);
      (k(l, { htmlLocalized: u }), Tt(l) && je(e) && St(e, bt(e, [l.id])).catch(_));
    }
  }, n);
}
function En(
  e,
  t,
  o,
  r,
  n,
  {
    needsReview: i,
    generatedByAI: a,
    pluginId: l,
    pluginMode: s,
    ignoreTracking: u,
    trackingSource: c,
  }
) {
  let d = { value: e, hash: wi(t, o), lastEdited: Date.now() };
  i && (d.needsReview = !0);
  let m = D(n?.value, e);
  return (
    (a || (m && n?.generatedByAI)) && (d.generatedByAI = !0),
    l || se(s)
      ? (p(l && se(s), "Cannot set only pluginId or pluginMode"),
        (d.pluginId = l),
        (d.pluginMode = s))
      : m &&
        n?.pluginId &&
        ((d.pluginId = n.pluginId), n.pluginMode && (d.pluginMode = n.pluginMode)),
    u ||
      j(n ? "localized_value_update" : "localized_value_create", {
        code: r.code,
        valueLength: typeof e == "string" ? e.length : 0,
        generatedByAI: !!d.generatedByAI,
        source: c,
      }),
    d
  );
}
function wi(e, t) {
  switch (t) {
    case "default":
      return e.hash;
    case "imageSrc":
      return (p($e(e)), e.imageHash);
    default:
      x(t);
  }
}
function Di(e, t) {
  if (!t.draft) return;
  let o = e.stores.localizationStore.progressPerLocale[t.id];
  !Ae(o) ||
    o === 1 ||
    e.scheduler.runBeforeNextFrame(() => {
      e.stores.localizationStore.getCurrentExactProgressForLocale(e, t.id, {
        recomputeStaleScopes: !0,
      }) === 1 &&
        (e.stores.modalStore.stack.some(({ type: n }) => n === "BatchTranslate") ||
          e.stores.localizationStore.batchTranslationState?.localeIds.has(t.id) ||
          e.stores.modalStore.set({ type: "LocaleReady", activeLocale: t, source: "automatic" }));
    });
}
function zi(e, t) {
  if (!e.stores.chromeStore.isPreviewingLocaleOnCanvas) return;
  let o = e.stores.treeStore.getDataTree().get(t.nodeId);
  if (!N(o) && !v(o)) return;
  let r = N(o) ? o.id : o.parentid;
  r && e.stores.codeGenerationStore.updateComponent(r).catch(_);
}
function Fn(e, t, o) {
  je(e) && (Di(e, o), zi(e, t));
}
function Nn(e, t, o, r, n) {
  let {
    needsReview: i,
    generatedByAI: a,
    pluginId: l,
    pluginMode: s,
    ignoreTracking: u,
    target: c = "default",
    trackingSource: d,
    preserveExistingTextType: m,
    eventType: y,
  } = n;
  if (t !== null && typeof t != "string") {
    (Vi(
      e,
      o,
      r,
      (C) =>
        En(t, o, c, r, C, {
          needsReview: i,
          generatedByAI: a,
          pluginId: l,
          pluginMode: s,
          ignoreTracking: u,
          trackingSource: d,
        }),
      y
    ),
      Fn(e, o, r));
    return;
  }
  (Pn(
    e,
    o,
    r,
    c,
    (C) => {
      let g = En(t, o, c, r, C, {
        needsReview: i,
        generatedByAI: a,
        pluginId: l,
        pluginMode: s,
        ignoreTracking: u,
        trackingSource: d,
      });
      if (
        (c === "imageSrc" &&
          ("imageFocalPoint" in n
            ? n.imageFocalPoint && (g.imageFocalPoint = n.imageFocalPoint)
            : C?.imageFocalPoint && (g.imageFocalPoint = C.imageFocalPoint)),
        m)
      )
        if (c === "default") {
          let b = o.localizedValues[r.id],
            h = b?.value ?? null;
          (p(h === t, "The text type can only be preserved when the source value is unchanged"),
            b?.type && (g.type = b.type));
        } else c === "imageSrc" || x(c);
      else Fr(o) && (g.type = "rich-text");
      return g;
    },
    y
  ),
    Fn(e, o, r));
}
function Ln(e, t) {
  let o = e.localizedValues[t.id];
  return o ? o.value : null;
}
function vc(e, t, o, r) {
  let n = "default",
    i = Ln(t, o),
    a = t.localizedValues[o.id];
  if ($e(t)) {
    let l = t.imageLocalizedValues[o.id];
    l && ((n = "imageSrc"), (i = l.value), (a = l));
  }
  (Nn(e, i, t, o, {
    needsReview: !0,
    ignoreTracking: !0,
    target: n,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    j("localized_value_request_review", {
      code: o.code,
      valueLength: typeof i == "string" ? i.length : 0,
      generatedByAI: !!a?.generatedByAI,
      source: r,
    }));
}
function Ic(e, t, o, { trackingSource: r, ignoreTracking: n }) {
  let i = "default",
    a = Ln(t, o),
    l = t.localizedValues[o.id];
  if ($e(t)) {
    let s = t.imageLocalizedValues[o.id];
    s && ((i = "imageSrc"), (a = s.value), (l = s));
  }
  (Nn(e, a, t, o, {
    ignoreTracking: !0,
    target: i,
    trackingSource: r,
    preserveExistingTextType: !0,
  }),
    n ||
      j("localized_value_approve", {
        code: o.code,
        valueLength: typeof a == "string" ? a.length : 0,
        generatedByAI: !!l?.generatedByAI,
        source: r,
      }));
}
function Tc(e, t, o, { target: r, ignoreTracking: n, trackingSource: i, eventType: a }) {
  Pn(
    e,
    t,
    o,
    r,
    (l) => {
      let s = l?.value;
      n ||
        j("localized_value_clear", {
          code: o.code,
          valueLength: typeof s == "string" ? s.length : 0,
          generatedByAI: !!l?.generatedByAI,
          source: i,
        });
    },
    a
  );
}
function An(e) {
  (e instanceof Error && e.name === "AbortError") ||
    (e instanceof ht && e.callSite === "localization" && e.wasTimeout) ||
    _(e);
}
async function xc(e, t) {
  return t.aborted || !(e instanceof ht && e.callSite === "localization" && e.wasTimeout)
    ? !1
    : new Promise((o) => {
        let r = setTimeout(n, 1e3, !0);
        function n(a) {
          (clearTimeout(r), t.removeEventListener("abort", i), o(a));
        }
        function i() {
          n(!1);
        }
        t.addEventListener("abort", i, { once: !0 });
      });
}
function wn(e, t, o) {
  let { treeStore: r } = t.stores,
    n = [];
  if (Oo(e, !0) && !e.isLoaded()) return n;
  let i = r.getDataTree(),
    a = i.root.locales;
  if (!a || a.length === 0) return n;
  let l = i.getCanvasScopeNodeFor(e),
    s = l && Rr(l) ? l : null,
    u = !1;
  if (s) {
    let d = n.length;
    (Et(i, o, s, e, a, n, "canvasHtmlAsTextContentIfPossible", void 0, void 0), (u = n.length > d));
  }
  if ((uo(e) && Pr(i, o, e, e, a, n), v(e))) {
    let d = i.getNodeWithTrait(e.parentid, N);
    if (!d) return n;
    let m = kt(a, d);
    Ft(i, o, d, e, a, n, m);
  }
  ze(e) && i.root.translatePagePaths === "yes" && Ar(i, e, e, a, bo(i, "includeDrafts"), n);
  let c = new Set();
  if (
    (Yo(i, e, "excludeInherited", "readsRawNodeData", void 0, (d) => {
      if (!d.providerId) return;
      let m = i.get(d.providerId);
      if (!m) return;
      let y, C, g;
      if (ee(m) && vt(m)) {
        if (((y = Te(i, m.dataIdentifier)), !y)) return;
        let R = pe(m, r.sandboxRepeaterData);
        if (((C = i.get(R)), !v(C))) return;
        g = Nr(C.id, d.id);
      } else {
        let R = At(m);
        if (!R) return;
        let G = i.getNodeWithTrait(R.reference.providerId, ee);
        if (!vt(G) || ((y = Te(i, G.dataIdentifier)), !y)) return;
        let $ = pe(G, r.sandboxRepeaterData);
        if (((C = i.get($)), !v(C))) return;
        let q = pe(m, r.sandboxRepeaterData);
        if (!q) return;
        g = Lr({
          type: "arrayItemField",
          collectionItemId: C.id,
          arrayVariableId: R.reference.id,
          arrayItemId: q,
          variableId: d.id,
        });
      }
      if (c.has(g)) return;
      c.add(g);
      let b = kt(a, y),
        h = [];
      Ft(i, o, y, C, a, h, b);
      let A = h.find(({ keyPath: R }) => R === g);
      A && n.push(A);
    }),
    !u && s && Oe(e))
  ) {
    let d = i.getNode(e.getPrimaryId());
    d && Et(i, o, s, d, a, n, "canvasHtmlAsTextContentIfPossible", void 0, void 0);
  }
  return n;
}
function Vn(e) {
  Re(e)
    .then(() => e.scheduler.signalChanges("ActiveBundle"))
    .catch(An);
}
function _c(e, t) {
  let o = ie(t);
  if (o.needsFallbackBeforeRead) {
    Vn(t);
    return;
  }
  let r = Se(() => wn(e, t, o.componentLoader));
  if (cn(t, r.lookups)) {
    Vn(t);
    return;
  }
  return r.result;
}
async function Hc(e, t) {
  let o = new Map();
  for (let r of await Promise.all(e.map((n) => Mi(n, t)))) for (let n of r) o.set(n.keyPath, n);
  return o;
}
async function Mi(e, t) {
  return (await Oi(e, t)).sources;
}
function Oi(e, t) {
  return un(t, (o) => {
    let n = t.stores.treeStore.getDataTree().get(e.id),
      { result: i, lookups: a } = Se(() => (n ? wn(n, t, o) : []));
    return { sources: i, hasUnresolvedModules: a.unresolvedLocalizableCount > 0 };
  });
}
function Dn(e, t, o, r) {
  t.stores.canvasStore.invalidateTransformUntilRendered(() => {
    try {
      (t.stores.scopeStore.select(e, r), t.stores.codeEditorStore.closeEditor());
    } catch {
      (j("open_primary_component_fail", {}),
        ue({
          type: "add",
          variant: "error",
          key: "invalid-deep-link",
          primaryText: "Primary component",
          secondaryText: "has been deleted.",
          duration: 1e4,
        }));
      return;
    }
    if (!o) return;
    let n = t.tree.getNode(o);
    n &&
      t.tree.getScopeNodeFor(n)?.id === e &&
      (t.stores.selectionStore.set(n.id),
      t.stores.canvasStore.zoomToCenter(zo(t.tree, n), { animated: !1, maxZoom: 1 }));
  });
}
function Bi(e, t) {
  let o = e.stores.insertSidebarStore.getEditBehavior(t.moduleId),
    r = Ge(e.stores.treeStore.tree, t),
    n = e.componentLoader.componentForIdentifier(t.value)?.annotations;
  return (r && o === "block") || go(n, "framerDisableUnlink");
}
function zn(e, t, o, r) {
  let n = W(e),
    i = ce(t, "canDesign"),
    { includeAccelerator: a = !0 } = r;
  if (K(n) && n.type === "shader") {
    let d = t.stores.modulesStore.getModuleEntryByLocalId(n.localId)?.name;
    return d
      ? [
          {
            label: `${i ? "View" : "Edit"} ${gt("Code")}`,
            click: () => t.stores.codeEditorStore.editFile(d),
          },
        ]
      : Z();
  }
  if (K(n) && (n.type === "canvasComponent" || n.type === "screen" || n.type === "vector"))
    return [
      {
        label: i ? "View" : "Edit",
        accelerator: a ? qe.fakeSelectChildren : void 0,
        click: () => {
          if (n.type === "vector") {
            let m = t.stores.modulesStore
              .forType("vector")
              .getByStableName(n.localIdName)
              ?.annotations(null, "default")?.framerVector;
            if (!Ue(m)) return;
            let { set: y } = m;
            Dn(y.id, t, n.localIdName, r);
            return;
          }
          let [, d] = n.localId.split("/");
          d && Dn(d, t, o, r);
        },
      },
    ];
  if (so(n) && n.kind === "externalModuleExport") {
    if (r.node?.isVectorInstance)
      return sr(t, e)
        ? Z()
        : [
            {
              label: "Edit",
              accelerator: a ? qe.fakeSelectChildren : void 0,
              click: () => Cn(t, n.moduleId, r.node?.id),
              enabled: !i,
            },
          ];
    let d = t.stores.insertSidebarStore.getEditBehavior(n.moduleId),
      m = t.stores.treeStore.tree.get(n.moduleId),
      C = r.externalModuleType === "canvasComponent" && m?.ownerId === "1h0OTH9KlHTd4pyc9CLt";
    if (Bi(t, n)) return Z();
    if (!jt(r.externalModuleType)) return Z();
    let { node: g, withUnlinkModal: b, externalModuleType: h } = r;
    return g && d === "autoDetach"
      ? [
          {
            label: "Detach instance",
            enabled: !i,
            click: async () => {
              (t.beginUndoGroup(),
                er(
                  {
                    key: "auto-detach",
                    progress: {
                      variant: "progress",
                      primaryText: "Detaching component",
                      secondaryText: "instance\u2026",
                    },
                    error: {
                      variant: "error",
                      primaryText: "Failed to detach",
                      secondaryText: "component instance.",
                    },
                  },
                  async () => {
                    await Ui(g, t, n, h);
                  }
                ).catch(_),
                t.endUndoGroup());
            },
          },
        ]
      : C
        ? [
            {
              label: "Edit",
              accelerator: a ? qe.fakeSelectChildren : void 0,
              click: () => {
                yn(t, { identifier: n, moduleType: h, instance: g, enterIsolation: !0 }).catch(_);
              },
              enabled: !i,
            },
          ]
        : [
            {
              label: "Unlink",
              click: () => {
                Ht(t, {
                  identifier: n,
                  moduleType: h,
                  instance: g,
                  withUnlinkModal: b,
                  enterIsolation: !0,
                }).catch(_);
              },
              enabled: !i,
            },
          ];
  }
  let l = Ze(t.componentLoader, e);
  if (l?.type !== "component" || l.depth !== 0) return Z();
  let s = r.keepHistory
      ? void 0
      : () => {
          t.stores.scopeStore.goBack();
        },
    u = Ke(t.stores.treeStore, t.stores.modulesStore, t.stores.pluginStore, n);
  return [
    ...(u && pr(t.stores.modulesStore, n) && !i && K(e)
      ? [
          {
            label: ur(u),
            click: () => {
              (s?.(), Je(t, e, u));
            },
          },
        ]
      : []),
    {
      label: `${i ? "View" : "Edit"} ${gt("Code")}`,
      click: () => {
        (s?.(), t.stores.codeEditorStore.editFile(l.file));
      },
      enabled: K(e),
    },
  ];
}
async function Ui(e, t, o, r) {
  let n = new te(),
    i = await _t(t, {
      identifier: o,
      moduleType: r,
      instance: e,
      renamedIds: n,
      isAutoDetach: !0,
      enterIsolation: !1,
    });
  if (!i) return null;
  let { node: a } = i;
  return we(a)
    ? t.scheduler.processWhenReadyAsync(() => {
        let l = Cr.detachSmartComponentOrWebPageInstance(t, e.draftOrCurrent(), a, n);
        return (l && t.stores.selectionStore.set(l.id), l);
      })
    : null;
}
function Mn(e) {
  return e?.find((o) => o.enabled !== !1)?.click;
}
function Wi(e, t, o) {
  return zn(e, t, null, o);
}
function yu(e, t, o) {
  return Mn(Wi(e, t, o));
}
function ji(
  e,
  t,
  { withUnlinkModal: o = !0, externalModuleType: r, activateContentPanel: n } = {}
) {
  let i = Ho(t.tree, e);
  return zn(e.codeComponentIdentifier, t, i, {
    keepHistory: !0,
    node: e,
    withUnlinkModal: o,
    externalModuleType: r,
    activateContentPanel: n,
  });
}
function Cu(e, t, o = {}) {
  return Mn(ji(e, t, o));
}
function Fu(e) {
  e.engine.scheduler.processWhenReady(() => {
    _i(e);
  });
}
function _i({ collectionId: e, engine: t, saveAction: o, source: r }) {
  let n = t.tree.getNodeWithTrait(e, N);
  p(n, "Collection needs to exist to allow creation of new item");
  let i = t.stores.selectionStore.ids[0],
    a = t.tree.getNodeWithTrait(i, N);
  (a && a.id !== n.id && p(o, "saveAction is required when creating a nested private draft item"),
    Hi({ collection: n, engine: t, saveAction: o }),
    j("collection_record_create", { source: r }));
}
function Hi({ collection: e, engine: t, saveAction: o }) {
  let r = Gi(t, e, 0);
  t.stores.contentManagementStore.openPrivateDraftCollectionItem({
    collectionId: e.id,
    itemId: r.id,
    saveAction: o,
  });
}
function Gi(e, t, o) {
  let r = e.stores.sessionStore.user.id,
    n = Ki(t, r);
  if (n) return n;
  let i = $o.create({ privateToUserId: r, ...Go(e.tree.root.locales ?? Z()) });
  return (e.stores.scopeStore.insertNode(i, t.id, o), qi(t, i), xn(e) && i.set({ isDraft: !0 }), i);
}
function Ki(e, t) {
  let o,
    r = 0;
  for (let n of e.children) {
    if (n.privateToUserId !== t) continue;
    let i = $i(n);
    (!o || i > r) && ((o = n), (r = i));
  }
  return o;
}
function $i(e) {
  if (!e.createdAt) return 0;
  let t = new Date(e.createdAt).getTime();
  return Number.isNaN(t) ? 0 : t;
}
function qi(e, t) {
  let o = Yi(t);
  for (let r of e.variables)
    r.type === "date" &&
      t.setControlProp(r.id, { type: "date", value: Xt(o, r.options?.displayTime) });
}
function Yi(e) {
  if (!e.createdAt) return new Date();
  let t = new Date(e.createdAt);
  return Number.isNaN(t.getTime()) ? new Date() : t;
}
function Xt(e, t) {
  return t
    ? new Date(
        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), 0, 0)
      ).toJSON()
    : new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())).toJSON();
}
function Vu({ variables: e, collectionItem: t }) {
  if (!t.hasData()) return !1;
  for (let o of e) {
    if (o.type === "divider") continue;
    let r = t.getControlProp(o.id);
    if (!(!r || !Ko(r.value)) && !Xi(t, r, o)) return !0;
  }
  return !1;
}
function Xi(e, t, o) {
  if (o.type !== "date" || t.type !== "date" || !P(t.value) || !e.createdAt) return !1;
  let r = new Date(e.createdAt);
  return Number.isNaN(r.getTime()) ? !1 : t.value === Xt(r, o.options?.displayTime);
}
function On(e, t) {
  let o = So(e);
  return o.length ? _e(o, t, { withDash: !0 }) : "";
}
function _u(e, t, o, r) {
  for (let n of e.variables) {
    if (n.type === "divider" || !Po(n)) continue;
    let i = r?.get(n.id) ?? t.getControlProp(n.id);
    if ((!i || !P(i.value) || !i.value.length) && n.associatedStringVariable) {
      let l = r?.get(n.associatedStringVariable) ?? t.getControlProp(n.associatedStringVariable);
      if (l && P(l.value)) {
        let s = On(l.value, (u) => wr(o.get(n.id), u, t.id));
        if (s.length)
          return (
            t.setControlProp(n.id, { type: "string", value: s }),
            { changedControlProp: n.id }
          );
      }
    }
  }
  return !1;
}
var Ji = io() && navigator.userAgent.includes("Version/16"),
  Ku = window.CompressionStream && !Ji;
function it(e) {
  let t = 0,
    o = !1,
    r = (i) => {
      let a = i;
      return (e && (a -= 1), Math.max(0, a));
    },
    n = () => t + (o ? 1 : 0);
  return {
    addText(i) {
      if (!i) return r(n());
      for (let a = 0; a < i.length; a++)
        i[a] ===
        `
`
          ? (t++, (o = !1))
          : (o = !0);
      return r(n());
    },
    finish() {
      return (o && (t++, (o = !1)), r(t));
    },
  };
}
var Jt = "text/csv;charset=utf-8",
  Zi = "X-Next-Cursor",
  Qi = 1e4,
  at = 4,
  ea = 500,
  lt = class extends Error {
    name = "AnalyticsExportIncompleteError";
  };
function ta(e) {
  return e.headers.get(Zi)?.trim() || void 0;
}
function Un(e) {
  return e === 429 || e >= 500;
}
function Wn(e) {
  let t = e.status ?? 0;
  return t >= 400 && t < 500 && t !== 429 ? !1 : Un(t);
}
function oa(e) {
  if (!Wn(e)) {
    let { message: t, status: o, data: r, code: n, ref: i, skipSentry: a } = e;
    return new He({
      message: t,
      status: o,
      data: r,
      code: n,
      ref: i,
      isTemporary: !1,
      skipSentry: a,
    });
  }
  return e;
}
async function ra(e) {
  let t = e.statusText || "Analytics export request failed",
    o = {};
  try {
    let n = await e.text();
    if (n)
      try {
        let i = JSON.parse(n);
        (typeof i.error?.message == "string" && (t = i.error.message), ye(i.data) && (o = i.data));
      } catch {
        t = n;
      }
  } catch {}
  let r = e.status;
  return new He({ message: t, status: r, data: o, isTemporary: Un(r) });
}
async function na(e, t, o) {
  let r = `/web/analytics/${e}/events-export`;
  for (let n = 0; n < at; n++) {
    if (n > 0) {
      if (o?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
      await Co(n, ea);
    }
    try {
      let i = await xt.getRaw(r, t, o);
      if (i.ok) return i;
      let a = await ra(i);
      if (!a.isTemporary || n === at - 1) throw a;
    } catch (i) {
      if (ar(i)) throw i;
      if (i instanceof He) {
        let a = oa(i);
        if (!Wn(a) || n === at - 1) throw a;
        continue;
      }
      if (n === at - 1) throw i;
    }
  }
  throw new Error("Analytics export page fetch exhausted retries");
}
async function* ia(e, { startDate: t, endDate: o }, r, n) {
  let i,
    a = !0,
    l = new Set();
  for (let s = 0; s < Qi; s++) {
    n?.(s + 1);
    let u = await na(e, { startDate: t, endDate: o, includeHeader: a, cursor: i }, r);
    yield u;
    let c = ta(u);
    if (!c) return;
    if (l.has(c))
      throw new lt("Export pagination repeated; try again or use a smaller date range.");
    (l.add(c), (i = c), (a = !1));
  }
  throw new lt("Export is too large to download in one file. Try a smaller date range.");
}
async function jn(e, t, o, r) {
  let n = 0,
    i = 0;
  for await (let a of ia(e, t, o.signal, o.onPageStarted)) {
    let l = i,
      u = await r(a, n === 0, (c) => {
        o.onTransferredEvents?.(l + c);
      });
    ((i += u), n++, o.onPageComplete?.(n, i));
  }
}
async function aa(e, t, o) {
  let r = [],
    n = Hn(t);
  return (
    await jn(e, t, o, async (i, a, l) => {
      let s = await i.text();
      r.push(new Blob([s], { type: Jt }));
      let u = it(a);
      u.addText(s);
      let c = u.finish();
      return (l(c), c);
    }),
    { blob: new Blob(r, { type: Jt }), filename: n }
  );
}
function _n() {
  let e = globalThis.showSaveFilePicker;
  return typeof e == "function" ? e.bind(globalThis) : void 0;
}
function la() {
  return !ao() && _n() !== void 0;
}
async function sa(e, t) {
  if (t?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  let o = _n();
  if (!o) throw new Error("File System Access API is not available");
  let r = await o({
    suggestedName: Hn(e),
    types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
  });
  if (t?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  return r.createWritable();
}
async function np(e, t, o = {}) {
  if (la()) {
    await da(e, t, o);
    return;
  }
  let { blob: r, filename: n } = await aa(e, t, o);
  Dr(r, n);
}
async function da(e, t, o) {
  let r = o.writable;
  r || (r = await sa(t, o.signal));
  try {
    (await jn(e, t, o, async (n, i, a) =>
      ca({ response: n, writable: r, includesHeader: i, onPageProgress: a })
    ),
      p(r),
      await r.close());
  } catch (n) {
    throw (await r?.abort().catch(() => {}), n);
  }
}
async function ca({ response: e, writable: t, includesHeader: o, onPageProgress: r }) {
  if (!e.body) {
    let s = await e.text(),
      u = new Blob([s], { type: Jt });
    await t.write(u);
    let c = it(o);
    c.addText(s);
    let d = c.finish();
    return (r(d), d);
  }
  let n = e.body.getReader(),
    i = new TextDecoder(),
    a = it(o);
  for (;;) {
    let { done: s, value: u } = await n.read();
    if (s) break;
    (await t.write(u), r(a.addText(i.decode(u, { stream: !0 }))));
  }
  a.addText(i.decode());
  let l = a.finish();
  return (r(l), l);
}
function Bn(e) {
  let [t, o, r] = e.split("-");
  return `${r}-${o}-${t.slice(-2)}`;
}
function Hn({ startDate: e, endDate: t }) {
  let o = Bn(e),
    r = Bn(t);
  return `Analytics Export \u2014 ${o} \u2192 ${r}.csv`;
}
async function ip(e, { startDate: t, endDate: o }, r) {
  return await xt.get(`/web/analytics/${e}/events-export-count`, { startDate: t, endDate: o }, r);
}
var Gn = "2024-11-01",
  ua = /^\d{4}-\d{2}-\d{2}$/,
  pa = 1440 * 60 * 1e3;
function sp(e, t) {
  return !(e === void 0 || (e !== null && e <= 0) || t === void 0 || (t !== null && t <= 0));
}
function dp(e) {
  return e === null ? null : e === void 0 || e <= 0 ? 0 : e;
}
function ma(e = new Date()) {
  return qn(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())));
}
function cp(e, t = new Date()) {
  if (e === null) return Gn;
  let o = ma(t);
  if (e === void 0 || e <= 0) return o;
  let r = Le(o, -(e - 1));
  return st(r, Gn, o);
}
function st(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
function fa(e, t, o) {
  return e < Le(t, -o);
}
function Le(e, t) {
  let o = new Date(Zt(e));
  return (o.setUTCDate(o.getUTCDate() + t), qn(o));
}
function Kn(e) {
  return e === null ? null : e - 1;
}
function up(e, t, o) {
  let { fromDay: r } = $n({ ...o, fromDay: e, toDay: t });
  return { fromDay: r };
}
function pp(e, t, o, r) {
  return $n({ ...r, fromDay: e, toDay: st(o, e, r.maxExportDay) });
}
function mp(e, t, o) {
  if (!ua.test(e)) throw new Error(`${o} expected '${t}' to be a UTC calendar day (YYYY-MM-DD).`);
  let r = new Date(`${e}T00:00:00.000Z`);
  if (Number.isNaN(r.getTime()) || r.toISOString().slice(0, 10) !== e)
    throw new Error(`${o} expected '${t}' to be a valid UTC calendar day.`);
}
function fp(e, t, o, r) {
  if (o === null) return;
  let n = o - 1,
    i = Le(t, -n);
  if (e < i) throw new Error(r);
}
function $n({ fromDay: e, toDay: t, minDay: o, maxExportDay: r, maxExportInclusiveDays: n }) {
  let i = t > r ? r : t,
    a = st(e, o, i),
    l = Kn(n);
  return (
    l !== null && fa(a, i, l) && ((a = Le(i, -l)), a < o && (a = o)),
    { fromDay: a, toDay: i }
  );
}
function yp(e, t, o, r) {
  return e > t
    ? { canExport: !1, message: "The start date must be before the end date." }
    : e > r || t > r
      ? { canExport: !1, message: "Export dates must be on or before today (UTC)." }
      : e < o
        ? {
            canExport: !1,
            message: `The selected range is outside your analytics retention. Earliest available date is ${o} (UTC).`,
          }
        : { canExport: !0 };
}
function Cp(e, t, o, r) {
  let n = st(e, t, o),
    i = t,
    a = Kn(r);
  if (a !== null) {
    let l = Le(e, -a);
    l > i && (i = l);
  }
  return (i > n && (i = n), { min: i, max: n });
}
function Zt(e) {
  let [t, o, r] = e.split("-").map(Number);
  return (p(t && o && r, "day must be a valid yyyy-MM-dd string"), Date.UTC(t, o - 1, r));
}
function qn(e) {
  let t = e.getUTCFullYear(),
    o = String(e.getUTCMonth() + 1).padStart(2, "0"),
    r = String(e.getUTCDate()).padStart(2, "0");
  return `${t}-${o}-${r}`;
}
function gp(e, t) {
  let o = Zt(e),
    r = Zt(t);
  return Math.floor((r - o) / pa) + 1;
}
export {
  ja as a,
  me as b,
  fe as c,
  sl as d,
  dl as e,
  Nl as f,
  Wr as g,
  Ll as h,
  pi as i,
  mi as j,
  An as k,
  xc as l,
  Dl as m,
  Ii as n,
  Ee as o,
  is as p,
  ie as q,
  Re as r,
  as as s,
  cn as t,
  un as u,
  _c as v,
  Hc as w,
  Mi as x,
  Oi as y,
  Ze as z,
  pn as A,
  jt as B,
  _t as C,
  Ht as D,
  yn as E,
  Dn as F,
  Bi as G,
  Ui as H,
  Wi as I,
  yu as J,
  ji as K,
  Cu as L,
  Id as M,
  vn as N,
  Td as O,
  bd as P,
  Sd as Q,
  hd as R,
  rt as S,
  zd as T,
  nt as U,
  Md as V,
  Fi as W,
  Od as X,
  Bd as Y,
  Ud as Z,
  Wd as _,
  jd as $,
  ki as aa,
  $t as ba,
  xn as ca,
  Fu as da,
  _i as ea,
  Gi as fa,
  Ki as ga,
  qi as ha,
  Vu as ia,
  On as ja,
  _u as ka,
  Ku as la,
  lt as ma,
  la as na,
  sa as oa,
  np as pa,
  Hn as qa,
  ip as ra,
  sp as sa,
  dp as ta,
  ma as ua,
  cp as va,
  Le as wa,
  up as xa,
  pp as ya,
  mp as za,
  fp as Aa,
  $n as Ba,
  yp as Ca,
  Cp as Da,
  gp as Ea,
  Nn as Fa,
  vc as Ga,
  Ic as Ha,
  Tc as Ia,
  zr as Ja,
  La as Ka,
  Jn as La,
  Aa as Ma,
  Zn as Na,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-2K43M4W6.mjs.map
