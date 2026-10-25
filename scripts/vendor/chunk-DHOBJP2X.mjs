import { a as ge } from "./chunk-DUPSS7EC.mjs";
import { b as Q } from "./chunk-ABHAING4.mjs";
import { b as ve, c as Ve } from "./chunk-6DZNOMKZ.mjs";
import { a as Ce, b as ye, c as Ie, d as be } from "./chunk-NGV2E4JE.mjs";
import { j as L, t as ue, u as fe, v as pe } from "./chunk-HX5WLUEV.mjs";
import { ea as le, fa as de } from "./chunk-VEB6EOI6.mjs";
import { Gb as me } from "./chunk-CFC4BE4R.mjs";
import { e as F } from "./chunk-CLJEEL44.mjs";
import { c as S } from "./chunk-UXIFL63N.mjs";
import { aa as ce } from "./chunk-GQATECY2.mjs";
import { Et as se, Rx as N, eq as ae } from "./chunk-UDNVJCNV.mjs";
import {
  Ar as W,
  Dr as j,
  En as je,
  Gr as z,
  Ir as O,
  Vp as k,
  Wn as M,
  bf as P,
  cq as ie,
  eb as w,
  fb as Y,
  lm as re,
  qb as Z,
  sb as $,
  tl as A,
  tm as ne,
  wm as D,
  xb as ee,
  zb as x,
} from "./chunk-KHAT6QH3.mjs";
import { h as oe } from "./chunk-TXCWPKWI.mjs";
import { Af as E } from "./chunk-VED5QBJM.mjs";
import { a as R } from "./chunk-2FCXHKEL.mjs";
import { b, n as te } from "./chunk-Y3GZLMBF.mjs";
import { a as X } from "./chunk-SWYZG2NI.mjs";
import { b as h } from "./chunk-4JY5UMT2.mjs";
import { e as y } from "./chunk-WLHSDIGQ.mjs";
var B = y(X(), 1);
var he = y(X(), 1),
  Se = y(je(), 1);
var Re = y(R(), 1);
function ze(t, e) {
  return { ...w(t, e), transformTemplate: Y(t) };
}
function Oe(t) {
  if (!(t.width === "auto" && t.height === "auto")) return t.width ?? "auto";
}
function Qe(t) {
  return ((t.__fromCanvasComponent = !0), (t.width = Oe(t)), t);
}
var xe = { [se]: !0 };
Object.freeze(xe);
function Te({
  node: t,
  combinedValueMap: e,
  frameProps: o,
  getCodeComponentProps: r,
  renderVectorWithIdentifier: i,
}) {
  let n = P(t.dynamicVectorSetIdentifier)
      ? t.resolveValue("dynamicVectorSetIdentifier", e)
      : t.codeComponentIdentifier,
    s = L(n) ? n?.identifier : b(n) && x(n) ? n : void 0,
    a = x(s),
    l = o.id ?? oe(t.id),
    d = t.isVisible(),
    f = (0, he.useRef)(null);
  Z({ id: l, _needsMeasure: o._needsMeasure, visible: d }, f);
  let [u] = $(Qe(o));
  return !s || !n || !d
    ? null
    : a
      ? i(s, () => ({
          ...xe,
          ...ze(o.center, u),
          ...r(),
          ref: f,
          id: l,
          style: u,
          "data-framer-component-type": "Frame",
        }))
      : (0, Se.isValidElementType)(n)
        ? (0, Re.jsx)(n, {
            ...r(),
            ...w(void 0, u),
            ref: f,
            id: l,
            style: u,
            "data-framer-component-type": "Frame",
          })
        : null;
}
var m = y(R(), 1);
function Pe(t) {
  return B.default.forwardRef((e, o) => {
    let r = Q(),
      [i, n] = F(r, t);
    switch (i.status) {
      case "loading":
        return (0, m.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, m.jsx)(S, {}),
        });
      case "error":
        return (0, m.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, m.jsx)(S, { error: { title: i.title, message: i.message } }),
        });
      default: {
        let s = i.definition.class;
        return (0, m.jsx)(n, { children: (0, m.jsx)(s, { ...e, ref: o }) });
      }
    }
  });
}
var Be = B.default.forwardRef(function ({ tracker: e, identifier: o, getProps: r }, i) {
  let [n, s] = F(e.modulesRuntime, o),
    { id: a, style: l, className: d, ...f } = r();
  switch (n.status) {
    case "loading":
      return (
        a && e.trackLoading(a),
        (0, m.jsx)(E.div, { className: d, style: l, children: (0, m.jsx)(S, {}) })
      );
    case "error":
      return (
        a && e.trackLoaded(a),
        (0, m.jsx)(E.div, {
          className: d,
          style: l,
          children: (0, m.jsx)(S, { error: { title: n.title, message: n.message } }),
        })
      );
    default: {
      let u = n.definition.class;
      return (
        a && e.trackLoaded(a),
        (0, m.jsx)(s, {
          children: (0, m.jsx)(u, {
            ref: i,
            ...f,
            id: a,
            style: l,
            "data-framer-component-type": "Frame",
          }),
        })
      );
    }
  }
});
function Ke({ identifier: t }) {
  let e = Q();
  return (F(e, t), null);
}
function It({ tracker: t, node: e, activeLocale: o, combinedValueMap: r, frameProps: i }) {
  return Te({
    node: e,
    combinedValueMap: r,
    frameProps: i,
    getCodeComponentProps() {
      return e.getCodeComponentProps(
        t.componentLoader,
        Ve(),
        r,
        o,
        t.createFetchDataValueResolver(e)
      );
    },
    renderVectorWithIdentifier(n, s) {
      let a = P(e.dynamicVectorSetIdentifier)
          ? e.resolveValue("dynamicVectorSetIdentifier", r)
          : e.codeComponentIdentifier,
        l = L(a) ? a.identifier : a;
      return (0, m.jsxs)(m.Fragment, {
        children: [
          l !== e.codeComponentIdentifier &&
          x(e.codeComponentIdentifier) &&
          ee(e.codeComponentIdentifier)
            ? (0, m.jsx)(Ke, { identifier: e.codeComponentIdentifier })
            : null,
          (0, m.jsx)(Be, { tracker: t, getProps: s, identifier: n }),
        ],
      });
    },
  });
}
var K = class {
  constructor(e, o, r, i, n) {
    this.tree = e;
    this.componentLoader = o;
    this.collectionNode = r;
    this.locale = i;
    this.visibility = n;
    let s = Ce(r.variables),
      a = r.getSlugVariable(),
      l = r.getPropertyControls(e, o),
      d = Object.entries(l),
      f = {
        id: { type: "string", isNullable: !1 },
        [z]: { type: "date", isNullable: !0 },
        [O]: { type: "date", isNullable: !0 },
        [W]: { type: "string", isNullable: !0 },
        [j]: { type: "string", isNullable: !0 },
      };
    for (let [c, p] of d) {
      let V = be(p);
      V && (f[c] = V);
    }
    this.schema = f;
    let u = r.getSortedChildren(n, "group-drafts"),
      C = i ? u.filter((c) => le(c, i.id) !== "exclude") : u,
      T = new Map(),
      I = new Set();
    for (let c of re(e, "includeDrafts")) (T.set(c.id, c), I.add(c.id));
    for (let c = 0; c < C.length; c++) {
      let p = C.at(c);
      if (!p) continue;
      let V;
      if (i) {
        let g = de(p, i, A, I);
        V = T.get(g) ?? T.get(A);
      }
      let H = C[c - 1],
        U = C[c + 1],
        G = {
          id: { type: "string", value: p.id },
          [z]: p.createdAt ? { type: "date", value: new Date(p.createdAt).toISOString() } : null,
          [O]: p.updatedAt ? { type: "date", value: new Date(p.updatedAt).toISOString() } : null,
          [W]: H ? { type: "string", value: H.id } : null,
          [j]: U ? { type: "string", value: U.id } : null,
        };
      for (let [g, q] of d) {
        let J = ye(g, q, s, l, p);
        if (!J) continue;
        let ke = g === a?.id ? i : V,
          We = Ie({ control: q, controlProp: J, resolvers: this.resolvers, locale: ke });
        G[g] = We ?? null;
      }
      let Ae = { pointer: String(c), data: G };
      this.items.push(Ae);
    }
  }
  tree;
  componentLoader;
  collectionNode;
  locale;
  visibility;
  schema;
  items = [];
  indexes = [];
  assetResolver = ve();
  usedComponents = new Map();
  resolvers = {
    resolveColor: (e) => e,
    resolveFile: (e) => this.assetResolver(e),
    resolveImage: (e, o) => {
      let r = this.assetResolver(e);
      if (!te(r)) return { src: r, ...o };
    },
    resolveLink: (e) => me(this.tree, e),
    resolveRichTextPointer: (e) => e,
    resolveVectorSetItemPointer: (e) => e,
  };
  resolveRichText(e) {
    h(D(e), "Pointer must be rich text");
    for (let o of He(e)) {
      let r = this.componentLoader.reactComponentForIdentifier(o);
      r && this.usedComponents.set(o, r);
    }
    return ce(e, {
      componentLoader: this.componentLoader,
      resolveVectorSetItem: (o) => Pe(o),
      tree: this.tree,
    });
  }
  resolveVectorSetItem(e) {
    return e;
  }
  async scanItems() {
    return this.items;
  }
  async resolveItems(e) {
    return e.map((o) => {
      let r = Number(o),
        i = this.items[r];
      return (h(i, "Item must exist"), i);
    });
  }
  compareItems(e, o) {
    return Number(e.pointer) - Number(o.pointer);
  }
};
function He(t) {
  if (b(t)) return N(t);
  let e = new Set();
  return (
    M(t, {
      module(o) {
        e.add(o.identifier);
      },
    }),
    e
  );
}
var De = new WeakMap();
function Me(t, e, o, r, i) {
  let n = De.get(o) ?? [];
  De.set(o, n);
  let s = n.findIndex((d) => d.visibility === i && d.locale === r),
    a = n[s];
  if (a && Ue(a, e)) return a;
  let l = new K(t, e, o, r, i);
  return (s >= 0 ? (n[s] = l) : n.push(l), l);
}
function Ue(t, e) {
  for (let [o, r] of t.usedComponents) if (e.reactComponentForIdentifier(o) !== r) return !1;
  return !0;
}
var Ne = new WeakMap();
function Le(t, e) {
  let o = Ne.get(e);
  if (o) return o;
  let r = new Set();
  r.add("id");
  let i = ge(t, e),
    n = e.getPrimaryId();
  for (let s of i) s.providerId === n && r.add(s.id);
  return (Ne.set(e, r), r);
}
function eo(t, e) {
  let o = ae(e);
  (t.limit?.type === "LiteralValue" &&
    typeof t.limit.value == "number" &&
    (o = Math.min(o, t.limit.value)),
    (t.limit = { type: "LiteralValue", value: o }));
}
function Fe(t, e, o, r, i, n = "public-only") {
  let s = ne(t, r);
  if (s) return (s.linkTo(o.id), Me(t, e, s, i, n));
  let a = e.dataForIdentifier(r);
  return (h(a, "Data definition not found"), a.class);
}
function to(t, e, o, r, i, n, s, a = "public-only") {
  let l = new Set(),
    d = ue(r),
    f = Le(t, r),
    u = new Set(f),
    C = pe(o, u, l, d, (I) => Fe(t, e, i, I, n, a));
  return {
    from: fe(r.dataIdentifier, o, l, d, (I) => Fe(t, e, i, I, n, a)),
    select: C,
    where: {
      type: "BinaryOperation",
      operator: "==",
      left: { type: "Identifier", name: "id", collection: d },
      right: { type: "LiteralValue", value: s },
    },
    limit: { type: "LiteralValue", value: 1 },
  };
}
var v = new WeakMap();
function Ee(t, e) {
  return t && e
    ? "with-localized-and-initial-values"
    : t
      ? "with-localized-values"
      : e
        ? "with-initial-values"
        : "default";
}
function qe(t, e, o, r, i) {
  let n = Ee(o, r),
    s = i ? v.get(t)?.[n] : void 0;
  if (s) return s;
  let a = new Set();
  for (let l of e) {
    if (k(l)) {
      let d = t.getControlProp(l.id);
      d?.type === "richtext" ? we(d, a, o) : r && _(l.initialValue, a);
      continue;
    }
    ie(l) && Je(t.getControlProp(l.id), l, a, o);
  }
  if (i) {
    let l = v.get(t) ?? {};
    ((l[n] = a), v.set(t, l));
  }
  return a;
}
function we(t, e, o) {
  if (t?.type === "richtext" && (_(t.value, e), !!o))
    for (let r of Object.values(t.valueLocalized ?? {})) _(r?.value, e);
}
function Je(t, e, o, r) {
  if (t?.type !== "array") return;
  let i = e.itemVariables.filter(k);
  if (i.length !== 0) {
    for (let n of t.value) if (n.value) for (let s of i) we(n.value[s.id], o, r);
  }
}
function _(t, e) {
  if (D(t)) for (let o of Xe(t)) e.add(o);
}
function Xe(t) {
  if (b(t)) return N(t);
  let e = new Set();
  return (
    M(t, {
      module(o) {
        e.add(o.identifier);
      },
    }),
    e
  );
}
function oo(t, e = { includeLocalizedValues: !1, includeVariableInitialValues: !1, useCache: !0 }) {
  let o = e.includeLocalizedValues === !0,
    r = e.includeVariableInitialValues === !0,
    i = e.useCache !== !1 && e.collectionItems === void 0,
    n = Ee(o, r),
    s = i ? v.get(t)?.[n] : void 0;
  if (s) return s;
  let a = new Set(),
    l = e.collectionItems ?? t.getUnsortedChildren();
  for (let d of l) {
    let f = qe(d, t.variables, o, r, i);
    for (let u of f) a.add(u);
  }
  if (i) {
    let d = v.get(t) ?? {};
    ((d[n] = a), v.set(t, d));
  }
  return a;
}
export { Te as a, Pe as b, It as c, Le as d, eo as e, Fe as f, to as g, oo as h };
//# sourceMappingURL=https://app.framerstatic.com/chunk-DHOBJP2X.mjs.map
