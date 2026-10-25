import { u as Be, z as Me } from "./chunk-TLJ63ERR.mjs";
import { a as We } from "./chunk-NRQG4RJP.mjs";
import {
  g as a,
  h as _e,
  i as c,
  j as ve,
  k as Re,
  l as be,
  m as Ce,
  n as Ee,
  o as ke,
  p as we,
  q as Ie,
  r as de,
  s as w,
} from "./chunk-VEB6EOI6.mjs";
import { a as Fe } from "./chunk-M3TB4JOC.mjs";
import { a as le } from "./chunk-VOXQOAXT.mjs";
import { a as zt } from "./chunk-QQZMWHYB.mjs";
import { b as D, i as Oe } from "./chunk-HATSOH2K.mjs";
import { m as B } from "./chunk-I5EFRSXX.mjs";
import { e as Ht } from "./chunk-WLHSDIGQ.mjs";
function Le(e) {
  return {
    version: 56,
    root: c(e.root, (o) => {
      if (o.__class === "RootNode") {
        let r = { homeNodeId: null, ...o };
        return a(r, void 0);
      }
      return a(o, void 0);
    }),
  };
}
function Ut(e) {
  return "replicaInfo" in e;
}
function y(e, t, o) {
  if (!e.replicaInfo) return;
  let r = { ...e.replicaInfo, overrides: { ...e.replicaInfo.overrides } };
  e.replicaInfo = r;
  let i = Object.keys(r.overrides);
  for (let s of i) {
    let { originalNode: d, upstreamOverrides: l } = De(s, r.master, {}, t);
    d &&
      o(
        d,
        (p, m) => (m in l ? l[m] : p[m]),
        (p, m, u) => {
          r.overrides[s] = u(r.overrides[s], `${e.id}_${d.id}`);
        }
      );
  }
}
function De(e, t, o, r) {
  if (!e) return { originalNode: void 0, upstreamOverrides: o };
  let i = r[e];
  if (i) return { originalNode: i, upstreamOverrides: o };
  let s = r[t];
  if (!s) return { originalNode: void 0, upstreamOverrides: o };
  let d = Ae(s, (m) => e.startsWith(m.id));
  if (!d || !Ut(d) || !d.replicaInfo) return { originalNode: void 0, upstreamOverrides: o };
  let { replicaInfo: l } = d;
  for (let m in l.overrides) {
    if (!e.endsWith(m)) continue;
    let { _deleted: u, ...N } = l.overrides[m] ?? {};
    if (Array.isArray(u)) for (let x of u) x in o || (o[x] = void 0);
    for (let x in N) x in o || (o[x] = N[x]);
  }
  let p = e.slice(d.id.length);
  return De(p, l.master, o, r);
}
function $t(e) {
  return Array.isArray(e.children) && e.children.length > 0;
}
function Ae(e, t) {
  if (t(e)) return e;
  if ($t(e))
    for (let o of e.children) {
      let r = Ae(o, t);
      if (r) return r;
    }
}
function f(e, ...t) {
  for (let o of t) delete e[o];
  return e;
}
function Ge(e) {
  return {
    version: 57,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "ShapeContainerNode": {
          let i = ce(o),
            s = f(
              { ...o, ...i },
              "navigationTarget",
              "navigationTransition",
              "navigationTransitionDirection",
              "navigationTransitionBackdropColor"
            );
          return (s.__class === "FrameNode" && y(s, r, Yt), a(s, void 0));
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Yt(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "ShapeContainerNode": {
      o(e, void 0, (r) => {
        let {
            navigationTarget: i,
            navigationTransition: s,
            navigationTransitionBackdropColor: d,
            navigationTransitionDirection: l,
            _deleted: p,
            ...m
          } = r,
          u = m,
          N = p || [];
        if (i !== void 0 || s || d || l) {
          let x = {
              navigationTarget: t(e, "navigationTarget"),
              navigationTransition: t(e, "navigationTransition"),
              navigationTransitionDirection: t(e, "navigationTransitionDirection"),
              navigationTransitionBackdropColor: t(e, "navigationTransitionBackdropColor"),
            },
            h = ce(x),
            g = { ...x, ...r },
            T = ce(g);
          T ? (u.onTap = T.onTap) : h && !N.includes("onTap") && N.push("onTap");
        }
        return (N.length && (u._deleted = N), u);
      });
      break;
    }
  }
}
function ce(e) {
  if (!e.navigationTarget) return;
  let t = {
    identifier: "action-migrate-1",
    actionIdentifier: "framer/useNavigate",
    controls: {
      type: { type: "segmentedenum", value: "next" },
      target: { type: "componentinstance", value: "" },
      transition: { type: "enum", value: "magicMotion" },
      appearsFrom: { type: "segmentedenum", value: "right" },
      backdropColor: { type: "color", value: "rgba(4,4,15,.4)" },
      animation: {
        type: "transition",
        value: {
          type: "spring",
          ease: [0.44, 0, 0.56, 1],
          duration: 0.3,
          delay: 0,
          stiffness: 500,
          damping: 60,
          mass: 1,
        },
      },
    },
  };
  return (
    e.navigationTarget === "@Previous"
      ? (t.controls.type.value = "previous")
      : (t.controls.target.value = e.navigationTarget),
    (t.controls.transition.value = e.navigationTransition),
    (t.controls.appearsFrom.value = Kt(e.navigationTransitionDirection)),
    (t.controls.backdropColor.value = e.navigationTransitionBackdropColor),
    { onTap: [t] }
  );
}
function Kt(e) {
  switch (e) {
    case "right":
      return "left";
    case "up":
      return "bottom";
    case "down":
      return "top";
    default:
      return "right";
  }
}
function He(e) {
  return {
    version: 58,
    root: c(e.root, (o) =>
      o.__class !== "TextNode" ? a(o, void 0) : a({ clip: !0, ...o }, void 0)
    ),
  };
}
function U(e) {
  switch (e) {
    case 1:
    case 0:
    case -1:
      return !0;
    default:
      return !1;
  }
}
function ze(e) {
  return {
    version: 59,
    root: c(e.root, (o) => {
      if (o.__class !== "CodeComponentNode") return a(o, void 0);
      if (o.codeComponentIdentifier !== "framer/Stack") return a(o, void 0);
      let r = o.codeComponentProps ?? {},
        i = f(
          {
            ...o,
            __class: "FrameNode",
            stackEnabled: !0,
            stackDirection: qt(r.direction),
            stackDistribution: Zt(r.distribution),
            stackAlignment: Jt(r.alignment),
            stackGap: H(r.gap),
            padding: H(r.padding),
            paddingPerSide: Qt(r.paddingPerSide),
            paddingTop: H(r.paddingTop),
            paddingRight: H(r.paddingRight),
            paddingBottom: H(r.paddingBottom),
            paddingLeft: H(r.paddingLeft),
            blendingEnabled: 0,
          },
          "codeComponentIdentifier",
          "codeComponentPackageVersion",
          "codeComponentProps",
          "replicaInfo",
          "originalid"
        );
      return a(i, void 0);
    }),
  };
}
function qt(e) {
  switch (e) {
    case "horizontal":
    case "vertical":
      return e;
    default:
      return "horizontal";
  }
}
function Zt(e) {
  switch (e) {
    case "start":
    case "center":
    case "end":
    case "space-between":
    case "space-around":
    case "space-evenly":
      return e;
    default:
      return "start";
  }
}
function Jt(e) {
  switch (e) {
    case "start":
    case "center":
    case "end":
      return e;
    default:
      return "center";
  }
}
function H(e, t = 0) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Qt(e, t = !1) {
  return e === !0 || e === !1 ? e : t;
}
function Ue(e) {
  return {
    version: 60,
    root: c(e.root, (o) => {
      if (o.__class !== "CodeComponentNode") return a(o, void 0);
      let r = f({ ...o, originalid: null }, "replicaInfo");
      return a(r, void 0);
    }),
  };
}
function $e(e) {
  return {
    version: 61,
    root: c(e.root, (o) =>
      o.__class !== "TextNode" ? a(o, void 0) : a({ ...o, textVerticalAlignment: "top" }, void 0)
    ),
  };
}
function Ye(e) {
  return {
    version: 62,
    root: c(e.root, (o) => {
      let r = { lastDuplicatedFromId: null, duplicatedFromId: null, ...o };
      return a(r, void 0);
    }),
  };
}
function Ke(e) {
  return {
    version: 63,
    root: c(e.root, (o) => {
      let r = null;
      o.duplicatedFromId &&
        ((r = [o.duplicatedFromId]),
        o.lastDuplicatedFromId &&
          o.lastDuplicatedFromId !== o.duplicatedFromId &&
          r.push(o.lastDuplicatedFromId));
      let i = f({ duplicatedFrom: r, ...o }, "duplicatedFromId", "lastDuplicatedFromId");
      return a(i, void 0);
    }),
  };
}
function je(e) {
  return {
    version: 64,
    root: c(e.root, (o) => {
      if (o.__class === "FrameNode") {
        let r = or(o) ? rr(o.deviceType) : null,
          i = f({ framePreset: r, ...o }, "deviceType");
        return a(i, void 0);
      }
      if (o.__class === "ShapeContainerNode") {
        let r = f({ ...o }, "deviceType");
        return a(r, void 0);
      }
      if (o.__class === "CodeComponentNode") {
        let r = f({ ...o }, "deviceType");
        return a(r, void 0);
      }
      return a(o, void 0);
    }),
  };
}
var er = "deviceType";
function or(e) {
  return er in e;
}
var tr = {
  "framer/FramerAppleWatch38": "AppleWatch_38",
  "framer/FramerAppleWatch42": "AppleWatch_42",
  "framer/FramerSonySmartWatch": null,
  "framer/FramerAppleIPhoneSE": "iPhone_320_568",
  "framer/FramerAppleIPhone8": "iPhone_375_667",
  "framer/FramerAppleIPhone8Plus": "iPhone_414_736",
  "framer/FramerAppleIPhoneXR": "iPhone_414_896",
  "framer/FramerAppleIPhoneXS": "iPhone_375_812",
  "framer/FramerAppleIPhoneXSMax": "iPhone_414_896_pro",
  "framer/FramerGooglePixel2": null,
  "framer/FramerGooglePixel2XL": null,
  "framer/FramerGooglePixel3": "GooglePixel_411_822",
  "framer/FramerGooglePixel3XL": "GooglePixel_411_846",
  "framer/FramerSamsungNote5": null,
  "framer/FramerSamsungGalaxyS9": null,
  "framer/FramerAppleIPadAir": "iPad_768_1024",
  "framer/FramerAppleIPadMini": "iPad_768_1024",
  "framer/FramerAppleIPadPro": "iPad_1024_1366",
  "framer/FramerGoogleNexusTablet": null,
  "framer/FramerMicrosoftSurfacePro3": "Surface_1440_960",
  "framer/FramerMicrosoftSurfacePro4": "Surface_1368_912",
  "framer/FramerAppleIMac": "iMac_2560_1440",
  "framer/FramerAppleThunderboltDisplay": null,
  "framer/FramerAppleMacBook": null,
  "framer/FramerAppleMacBookAir": "MacBook_1440_900",
  "framer/FramerAppleMacBookPro": "MacBook_1440_900_pro",
  "framer/FramerDellXPS": "DellXPS_1920_1080",
  "framer/FramerMicrosoftSurfaceBook": "SurfaceBook_1500_1000",
  "framer/FramerSonyW850C": "SonyTV_1280_720",
  "framer/FramerStoreArtwork": "PackageArtwork_800_600",
  "framer/FramerStoreIcon": "PackageIcon_50_50",
};
function rr(e) {
  return tr[e] || null;
}
function Xe(e) {
  return {
    version: 65,
    root: c(e.root, (o) =>
      o.__class === "RootNode" ? a({ disableBackdropFilters: !1, ...o }, void 0) : a(o, void 0)
    ),
  };
}
function qe(e) {
  return {
    version: 66,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "CodeComponentNode":
        case "SVGNode":
        case "TextNode":
        case "PathNode":
        case "RectangleShapeNode":
        case "OvalShapeNode":
        case "PolygonShapeNode":
        case "StarShapeNode": {
          let r = f({ ...o }, "children");
          return a(r, void 0);
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Ze(e) {
  return {
    version: 67,
    root: c(e.root, (o) =>
      o.__class === "FrameNode" ? a({ overlayGrid: void 0, ...o }, void 0) : a(o, void 0)
    ),
  };
}
function Qe(e) {
  return {
    version: 68,
    root: c(e.root, (o) => {
      if (o.__class !== "TextNode") return a(o, void 0);
      if (!ar(o)) return a(o, void 0);
      let r = nr(o.styledText),
        i = { ...o, styledText: r };
      return a(i, void 0);
    }),
  };
}
function nr(e) {
  if (typeof e != "object") return e;
  let t = e;
  for (let o of t.blocks) {
    for (let r of o.inlineStyleRanges) r.style = Je(r.style);
    o.data.emptyStyle && (o.data.emptyStyle = o.data.emptyStyle.map(Je));
  }
  return t;
}
function Je(e) {
  return e.startsWith("UNDERLINE")
    ? "TEXTDECORATION:underline"
    : e.startsWith("STRIKETHROUGH")
      ? "TEXTDECORATION:line-through"
      : e;
}
function ir(e) {
  return !!e && typeof e == "object";
}
function ar(e) {
  return (
    ir(e) &&
    "styledText" in e &&
    typeof e.styledText == "object" &&
    !!e.styledText &&
    "blocks" in e.styledText
  );
}
function eo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 69, root: a(t, void 0) };
  let o = oo(t),
    r = [],
    i = [];
  for (let l of t.children ?? []) {
    let p = r;
    (l.__class !== "PageNode" &&
      typeof l.isExternalMaster != "string" &&
      ((l = { ...l, parentid: o }), (p = i)),
      p.push(l));
  }
  let s = {
      __class: "PageNode",
      id: o,
      name: "Page 1",
      children: i,
      homeNodeId: t.homeNodeId ?? null,
      guidesX: t.guidesX ?? [],
      guidesY: t.guidesY ?? [],
    },
    d = f({ ...t, children: [s, ...r] }, "homeNodeId", "guidesX", "guidesY");
  return { version: 69, root: a(d, void 0) };
}
function oo(e) {
  return e.id + "-page";
}
function J(e) {
  if (!e) return;
  let t = [];
  return (
    e.forEach((o) => {
      let { enabled: r, ...i } = o;
      r && t.push(i);
    }),
    t.length > 0 ? { boxShadows: t } : void 0
  );
}
function ue(e) {
  if (!e) return;
  let t = [];
  return (
    e.forEach((o) => {
      let { enabled: r, ...i } = o;
      r && t.push(i);
    }),
    t.length > 0 ? { shadows: t } : void 0
  );
}
function j(e) {
  if (e.blurEnabled === 1)
    switch (e.blurType) {
      case "background":
        return { backgroundBlur: e.blur };
      case "layer":
        return { blur: e.blur };
    }
}
function X(e) {
  let t = {};
  return (
    e.brightnessEnabled === 1 && (t.brightness = e.brightness),
    e.contrastEnabled === 1 && (t.contrast = e.contrast),
    e.grayScaleEnabled === 1 && (t.grayscale = e.grayscale),
    e.hueRotateEnabled === 1 && (t.hueRotate = e.hueRotate),
    e.invertEnabled === 1 && (t.invert = e.invert),
    e.saturateEnabled === 1 && (t.saturate = e.saturate),
    e.sepiaEnabled === 1 && (t.sepia = e.sepia),
    t
  );
}
function to(e) {
  switch (e.borderEnabled) {
    case 1:
      return { borderEnabled: !0 };
    case 0:
    case -1:
      return { borderEnabled: !1 };
    default:
      return;
  }
}
function sr(e) {
  switch (e.strokeEnabled) {
    case 1:
      return { strokeEnabled: !0 };
    case 0:
    case -1:
      return { strokeEnabled: !1 };
    default:
      return;
  }
}
function ro({ blendingMode: e }) {
  return !e || e === "normal" ? void 0 : { blendingMode: e };
}
function dr(e) {
  return Array.isArray(e);
}
function lr(e) {
  return typeof e == "object" && e !== null;
}
function cr(e) {
  return e === !0 || e === !1;
}
var pr = "type",
  ur = "enabled";
function mr(e) {
  return !lr(e) || typeof e[pr] != "string" ? !1 : cr(e[ur]);
}
function fr(e) {
  return dr(e) ? e.every(mr) : !1;
}
function so(e, t) {
  let o = { ...e },
    r = Object.keys(o);
  for (let i of r) {
    let s = o[i];
    if (!fr(s)) continue;
    let d = [];
    ((o[i] = d),
      s.forEach((l, p) => {
        let { enabled: m, ...u } = l;
        m && d.push({ ...u, id: `migrated_array_value_${t}_${i}_${p}` });
      }));
  }
  return o;
}
function Q(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function A(e, t) {
  e.includes(t) || e.push(t);
}
function no(e, t) {
  t && (e.blendingMode = t);
}
function io(e, t) {
  switch (t) {
    case 1:
      e.borderEnabled = !0;
      break;
    case 0:
    case -1:
      e.borderEnabled = !1;
      break;
  }
}
function Nr(e, t) {
  switch (t) {
    case 1:
      e.strokeEnabled = !0;
      break;
    case 0:
    case -1:
      e.strokeEnabled = !1;
      break;
  }
}
function pe(e, t, o) {
  if (!t) return;
  let r = "boxShadows";
  if (o.includes(r)) return;
  let i = J(t);
  i?.boxShadows ? (e.boxShadows = i.boxShadows) : A(o, r);
}
function ao(e, t, o) {
  if (!t) return;
  let r = "shadows";
  if (o.includes(r)) return;
  let i = ue(t);
  i?.shadows ? (e.shadows = i.shadows) : A(o, r);
}
function q(e, t, o, { blur: r, blurEnabled: i, blurType: s }, d) {
  let l = "blur",
    p = "backgroundBlur",
    m = "blurEnabled",
    u = "blurType",
    N = d.indexOf(m),
    x = d.indexOf(u),
    h = [N, x].filter((_) => _ !== -1);
  if (h.length > 0) {
    (h.sort((_, F) => F - _),
      h.forEach((_) => {
        d.splice(_, 1);
      }),
      d.includes(l) || d.push(l),
      d.includes(p) || d.push(p));
    return;
  }
  if (!(U(i) || !!s || Q(r))) return;
  let T = { blur: o(t, l), blurEnabled: o(t, m), blurType: o(t, u) },
    v = U(i) ? i : T.blurEnabled,
    V = s || T.blurType,
    E = Q(r) ? r : T.blur,
    k = v === 1;
  switch (V) {
    case "layer":
      (k ? (e.blur = E) : A(d, "blur"), A(d, "backgroundBlur"));
      break;
    case "background":
      (k ? (e.backgroundBlur = E) : A(d, "backgroundBlur"), A(d, "blur"));
  }
}
function Z(e, t, o, r, i) {
  function s(d, l) {
    let p = i.indexOf(l);
    if (p >= 0) {
      (i.splice(p, 1), i.includes(d) || i.push(d));
      return;
    }
    let m = r[l],
      u = r[d];
    if (!(U(m) || Q(u))) return { isOverridden: !1 };
    let x = U(m) ? m : o(t, l),
      h = Q(u) ? u : o(t, d);
    x === 1 ? (e[d] = h) : A(i, d);
  }
  (s("brightness", "brightnessEnabled"),
    s("contrast", "contrastEnabled"),
    s("grayscale", "grayScaleEnabled"),
    s("hueRotate", "hueRotateEnabled"),
    s("invert", "invertEnabled"),
    s("saturate", "saturateEnabled"),
    s("sepia", "sepiaEnabled"));
}
function xr(e, t, o) {
  switch (e.__class) {
    case "FrameNode": {
      o(e, void 0, (r) => {
        let {
            borderEnabled: i,
            boxShadows: s,
            blendingMode: d,
            blendingEnabled: l,
            blur: p,
            blurEnabled: m,
            blurType: u,
            brightnessEnabled: N,
            contrastEnabled: x,
            grayScaleEnabled: h,
            hueRotateEnabled: g,
            invertEnabled: T,
            saturateEnabled: v,
            sepiaEnabled: V,
            brightness: E,
            contrast: k,
            grayscale: _,
            hueRotate: F,
            invert: M,
            saturate: L,
            sepia: R,
            _deleted: b,
            ...P
          } = r,
          S = P,
          z = b || [];
        return (
          no(S, d),
          io(S, i),
          pe(S, s, z),
          q(S, e, t, { blur: p, blurEnabled: m, blurType: u }, z),
          Z(
            S,
            e,
            t,
            {
              brightnessEnabled: N,
              contrastEnabled: x,
              grayScaleEnabled: h,
              hueRotateEnabled: g,
              invertEnabled: T,
              saturateEnabled: v,
              sepiaEnabled: V,
              brightness: E,
              contrast: k,
              grayscale: _,
              hueRotate: F,
              invert: M,
              saturate: L,
              sepia: R,
            },
            z
          ),
          z.length && (S._deleted = z),
          S
        );
      });
      break;
    }
    case "CodeComponentNode": {
      o(e, void 0, (r, i) => {
        let {
            borderEnabled: s,
            boxShadows: d,
            blur: l,
            blurEnabled: p,
            blurType: m,
            brightnessEnabled: u,
            contrastEnabled: N,
            grayScaleEnabled: x,
            hueRotateEnabled: h,
            invertEnabled: g,
            saturateEnabled: T,
            sepiaEnabled: v,
            brightness: V,
            contrast: E,
            grayscale: k,
            hueRotate: _,
            invert: F,
            saturate: M,
            sepia: L,
            _deleted: R,
            ...b
          } = r,
          P = b,
          S = R || [];
        return (
          r.codeComponentProps && (P.codeComponentProps = so(r.codeComponentProps, i)),
          io(P, s),
          pe(P, d, S),
          q(P, e, t, { blur: l, blurEnabled: p, blurType: m }, S),
          Z(
            P,
            e,
            t,
            {
              brightnessEnabled: u,
              contrastEnabled: N,
              grayScaleEnabled: x,
              hueRotateEnabled: h,
              invertEnabled: g,
              saturateEnabled: T,
              sepiaEnabled: v,
              brightness: V,
              contrast: E,
              grayscale: k,
              hueRotate: _,
              invert: F,
              saturate: M,
              sepia: L,
            },
            S
          ),
          S.length && (P._deleted = S),
          P
        );
      });
      break;
    }
    case "TextNode": {
      o(e, void 0, (r) => {
        let {
            shadows: i,
            blur: s,
            blurEnabled: d,
            blurType: l,
            brightnessEnabled: p,
            contrastEnabled: m,
            grayScaleEnabled: u,
            hueRotateEnabled: N,
            invertEnabled: x,
            saturateEnabled: h,
            sepiaEnabled: g,
            brightness: T,
            contrast: v,
            grayscale: V,
            hueRotate: E,
            invert: k,
            saturate: _,
            sepia: F,
            _deleted: M,
            ...L
          } = r,
          R = L,
          b = M || [];
        return (
          ao(R, i, b),
          q(R, e, t, { blur: s, blurEnabled: d, blurType: l }, b),
          Z(
            R,
            e,
            t,
            {
              brightnessEnabled: p,
              contrastEnabled: m,
              grayScaleEnabled: u,
              hueRotateEnabled: N,
              invertEnabled: x,
              saturateEnabled: h,
              sepiaEnabled: g,
              brightness: T,
              contrast: v,
              grayscale: V,
              hueRotate: E,
              invert: k,
              saturate: _,
              sepia: F,
            },
            b
          ),
          b.length && (R._deleted = b),
          R
        );
      });
      break;
    }
    case "SVGNode": {
      o(e, void 0, (r) => {
        let {
            shadows: i,
            blendingMode: s,
            blendingEnabled: d,
            blur: l,
            blurEnabled: p,
            blurType: m,
            brightnessEnabled: u,
            contrastEnabled: N,
            grayScaleEnabled: x,
            hueRotateEnabled: h,
            invertEnabled: g,
            saturateEnabled: T,
            sepiaEnabled: v,
            brightness: V,
            contrast: E,
            grayscale: k,
            hueRotate: _,
            invert: F,
            saturate: M,
            sepia: L,
            _deleted: R,
            ...b
          } = r,
          P = b,
          S = R || [];
        return (
          no(P, s),
          ao(P, i, S),
          q(P, e, t, { blur: l, blurEnabled: p, blurType: m }, S),
          Z(
            P,
            e,
            t,
            {
              brightnessEnabled: u,
              contrastEnabled: N,
              grayScaleEnabled: x,
              hueRotateEnabled: h,
              invertEnabled: g,
              saturateEnabled: T,
              sepiaEnabled: v,
              brightness: V,
              contrast: E,
              grayscale: k,
              hueRotate: _,
              invert: F,
              saturate: M,
              sepia: L,
            },
            S
          ),
          S.length && (P._deleted = S),
          P
        );
      });
      break;
    }
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, (r) => {
        let { boxShadows: i, strokeEnabled: s, _deleted: d, ...l } = r,
          p = l,
          m = d || [];
        return (Nr(p, s), pe(p, i, m), m.length && (p._deleted = m), p);
      });
      break;
    }
  }
}
function lo(e) {
  return {
    version: 70,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = {
            ...f(
              { ...o },
              "borderEnabled",
              "boxShadows",
              "blendingMode",
              "blendingEnabled",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...X(o),
            ...j(o),
            ...ro(o),
            ...J(o.boxShadows),
            ...to(o),
          };
          return (y(i, r, xr), a(i, void 0));
        }
        case "CodeComponentNode": {
          let i = {
            ...f(
              { ...o },
              "borderEnabled",
              "boxShadows",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...X(o),
            ...j(o),
            ...J(o.boxShadows),
            ...to(o),
            codeComponentProps: so(o.codeComponentProps, o.id),
          };
          return a(i, void 0);
        }
        case "TextNode": {
          let i = {
            ...f(
              { ...o },
              "shadows",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...X(o),
            ...j(o),
            ...ue(o.shadows),
          };
          return a(i, void 0);
        }
        case "SVGNode": {
          let i = {
            ...f(
              { ...o },
              "shadows",
              "blendingMode",
              "blendingEnabled",
              "blur",
              "blurEnabled",
              "blurType",
              "brightnessEnabled",
              "contrastEnabled",
              "grayScaleEnabled",
              "hueRotateEnabled",
              "invertEnabled",
              "saturateEnabled",
              "sepiaEnabled",
              "brightness",
              "contrast",
              "grayscale",
              "hueRotate",
              "invert",
              "saturate",
              "sepia"
            ),
            ...X(o),
            ...j(o),
            ...ro(o),
            ...ue(o.shadows),
          };
          return a(i, void 0);
        }
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = { ...f({ ...o }, "boxShadows", "strokeEnabled"), ...J(o.boxShadows), ...sr(o) };
          return a(i, void 0);
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function hr(e) {
  return "id" in e;
}
function co(e, t) {
  return e.map((o, r) => (hr(o) ? o : { ...o, id: `s-${t}-${r}` }));
}
function po(e, t) {
  return e ? { boxShadows: co(e, t) } : void 0;
}
function uo(e, t) {
  return e ? { shadows: co(e, t) } : void 0;
}
function gr(e, t) {
  let { boxShadows: o, ...r } = e;
  return { ...r, ...po(o, t) };
}
function Tr(e, t) {
  let { shadows: o, ...r } = e;
  return { ...r, ...uo(o, t) };
}
function yr(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "CodeComponentNode":
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, gr);
      break;
    }
    case "TextNode":
    case "SVGNode": {
      o(e, void 0, Tr);
      break;
    }
  }
}
function mo(e) {
  return {
    version: 71,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "CodeComponentNode":
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = { ...f({ ...o }, "boxShadows"), ...po(o.boxShadows, o.id) };
          return (i.__class === "FrameNode" && y(i, r, yr), a(i, void 0));
        }
        case "TextNode":
        case "SVGNode": {
          let i = { ...f({ ...o }, "shadows"), ...uo(o.shadows, o.id) };
          return a(i, void 0);
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function fo(e) {
  return { version: 72, root: e.root };
}
function No(e) {
  return { version: 73, root: e.root };
}
var xo = Array.isArray,
  ho = (e) =>
    typeof e == "object" && "keys" in e && typeof e.keys == "function" ? e.keys() : Object.keys(e);
function me(e, t, o) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    let r = xo(e),
      i = xo(t),
      s,
      d,
      l;
    if (r && i) {
      if (((d = e.length), d !== t.length)) return !1;
      for (s = d; s-- !== 0;) if ((!o && e[s] !== t[s]) || (o && !me(e[s], t[s], !0))) return !1;
      return !0;
    }
    if (r !== i) return !1;
    let p = e instanceof Date,
      m = t instanceof Date;
    if (p !== m) return !1;
    if (p && m) return e.getTime() === t.getTime();
    let u = e instanceof RegExp,
      N = t instanceof RegExp;
    if (u !== N) return !1;
    if (u && N) return e.toString() === t.toString();
    if (typeof e.equals == "function" && typeof t.equals == "function") return e.equals(t);
    let x = ho(e);
    if (((d = x.length), d !== ho(t).length)) return !1;
    for (s = d; s-- !== 0;) if (!Object.hasOwn(t, x[s])) return !1;
    for (s = d; s-- !== 0;)
      if (
        ((l = x[s]),
        !(l === "_owner" && e.$$typeof) && ((!o && e[l] !== t[l]) || (o && !me(e[l], t[l], !0))))
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
function go(e, t, o = !0) {
  try {
    return me(e, t, o);
  } catch (r) {
    if (Sr(r))
      return (
        console.warn("Warning: isEqual does not handle circular references.", r.name, r.message),
        !1
      );
    throw r;
  }
}
function Sr(e) {
  return e instanceof Error
    ? !!(e.message.match(/stack|recursion/i) || ("number" in e && e.number === -2146828260))
    : !1;
}
function To(e) {
  return {
    version: 74,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = { ...o };
          return (y(i, r, _r), a(i, void 0));
        }
        case "CodeComponentNode": {
          let i = Pr(o);
          return a(i, void 0);
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
var yo = "$control__";
function Pr(e) {
  if (!Rr(e)) return e;
  let t = Vr(e.codeComponentProps);
  return f({ ...e, ...t }, "codeComponentProps");
}
function Vr(e) {
  let t = {};
  for (let o in e) t[`${yo}${o}`] = { type: null, value: e[o] };
  return t;
}
function _r(e, t, o) {
  e.__class === "CodeComponentNode" &&
    o(e, void 0, (r) => {
      let { codeComponentProps: i, _deleted: s, ...d } = r,
        l = d,
        p = s ? s.filter((N) => N !== "codeComponentProps") : [],
        m = t(e, "codeComponentProps");
      if (!i || !m) return l;
      let u = Array.from(new Set([...Object.keys(i), ...Object.keys(m)]));
      for (let N of u) {
        let x = m[N],
          h = i[N];
        go(x, h) || (l[`${yo}${N}`] = { type: null, value: h });
      }
      return (p.length > 0 && (l._deleted = p), l);
    });
}
var vr = "codeComponentProps";
function Rr(e) {
  return vr in e;
}
function So(e) {
  return {
    version: 75,
    root: c(e.root, (o) => (o.__class === "FrameNode" ? a(Cr(o), void 0) : a(o, void 0))),
  };
}
var br = [
  "iPad_834_1112",
  "GooglePixel_411_822",
  "GooglePixel_411_846",
  "Twitter_1024_512",
  "Twitter_1500_500",
  "Facebook_1200_630",
  "Facebook_820_312",
  "Instagram_1080_1080",
  "Instagram_1080_1920",
  "Youtube_2560_1440",
  "Youtube_1280_720",
  "LinkedIn_1584_396",
  "Dribbble_1600_1200",
];
function Cr(e) {
  if (e.framePreset) {
    let t = { ...e };
    return (br.includes(e.framePreset) ? (t.framePreset = null) : (t.isScreen = !0), t);
  } else return e;
}
function Po(e) {
  return { version: 76, root: c(e.root, (o) => a(o, void 0)) };
}
function Vo(e) {
  return { version: 77, root: c(e.root, (o) => a(o, void 0)) };
}
function _o(e) {
  return {
    version: 78,
    root: c(e.root, (o) => (o.__class === "TextNode" ? a(Er(o), void 0) : a(o, void 0))),
  };
}
function Er(e) {
  let t = f({ ...e }, "autoSize");
  return (
    (e.autoSize || typeof e.autoSize > "u") &&
      ((t.widthType = 2),
      (t.heightType = 2),
      typeof e.left == "number" && typeof e.right == "number" && (t.right = null),
      typeof e.top == "number" && typeof e.bottom == "number" && (t.bottom = null)),
    t
  );
}
function vo(e) {
  return {
    version: 79,
    root: c(e.root, (o) => {
      if (o.__class === "TextNode") {
        let r = kr(o);
        return a(r, void 0);
      }
      return a(o, void 0);
    }),
  };
}
function kr(e) {
  return {
    font: "Inter",
    textColor: "rgb(0, 0, 0)",
    fontSize: 16,
    letterSpacing: 0,
    textTransform: "none",
    textDecoration: "none",
    lineHeight: [1.2, "em"],
    textAlignment: "start",
    linkTextDecoration: "underline",
    ...e,
  };
}
function bo(e) {
  return {
    version: 80,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "TextNode":
          try {
            return a(Dr(o), void 0);
          } catch {
            return a(o, void 0);
          }
        case "ShapeContainerNode":
          return a(Fr(o), void 0);
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Fr(e) {
  return { ...e, contentHash: Ir(e) };
}
function wr(e) {
  return Lr(e, Br);
}
function Ir(e) {
  return Mr(wr(e));
}
var Or = { top: !0, left: !0, centerAnchorX: !0, centerAnchorY: !0 },
  Wr = {
    cache: !0,
    mutable: !0,
    update: !0,
    id: !0,
    parentid: !0,
    originalid: !0,
    locked: !0,
    name: !0,
    previewSettings: !0,
    duplicatedFrom: !0,
    contentHash: !0,
  };
function Br(e, t, o) {
  if (
    t &&
    !(o.__class === "ShapeContainerNode" && Or[e]) &&
    !Wr[e] &&
    !e.startsWith("on") &&
    !e.startsWith("export")
  )
    return t;
}
function Mr(e) {
  let r = e.length & 3,
    i = e.length - r,
    s = 0,
    d = 0;
  for (; d < i;) {
    let p =
      (e.charCodeAt(d) & 255) |
      ((e.charCodeAt(++d) & 255) << 8) |
      ((e.charCodeAt(++d) & 255) << 16) |
      ((e.charCodeAt(++d) & 255) << 24);
    (++d,
      (p = ((p & 65535) * 3432918353 + ((((p >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (p = (p << 15) | (p >>> 17)),
      (p = ((p & 65535) * 461845907 + ((((p >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (s ^= p),
      (s = (s << 13) | (s >>> 19)));
    let m = ((s & 65535) * 5 + ((((s >>> 16) * 5) & 65535) << 16)) & 4294967295;
    s = (m & 65535) + 27492 + ((((m >>> 16) + 58964) & 65535) << 16);
  }
  let l = 0;
  return (
    r >= 3 && (l ^= (e.charCodeAt(d + 2) & 255) << 16),
    r >= 2 && (l ^= (e.charCodeAt(d + 1) & 255) << 8),
    r >= 1 &&
      ((l ^= e.charCodeAt(d) & 255),
      (l = ((l & 65535) * 3432918353 + ((((l >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (l = (l << 15) | (l >>> 17)),
      (l = ((l & 65535) * 461845907 + ((((l >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (s ^= l)),
    (s ^= e.length),
    (s ^= s >>> 16),
    (s = ((s & 65535) * 2246822507 + ((((s >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (s ^= s >>> 13),
    (s = ((s & 65535) * 3266489909 + ((((s >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (s ^= s >>> 16),
    s >>> 0
  );
}
function Ne(e, t, o) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let r = typeof e;
  if (r === "string") return t.push(JSON.stringify(e));
  if (r !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++) (Ne(e[s], t, o), t.push(","));
    return;
  }
  let i = Object.keys(e).sort();
  for (let s = 0, d = i.length; s < d; s++) {
    let l = i[s];
    if (l === void 0) continue;
    let p = e[l];
    (o && ((p = o(l, p, e)), p === void 0)) || (t.push(l), t.push(":"), Ne(p, t, o), t.push(","));
  }
}
function Lr(e, t) {
  let o = [];
  return (Ne(e, o, t), o.join(""));
}
function Dr(e) {
  let t = new Set(),
    o = {},
    r = { ...e._styledText, ...e.styledText },
    i = r.blocks[0];
  if (i) {
    let s = i.data.emptyStyle ?? [];
    for (let d of s)
      for (let l of Ar) {
        if (!d.startsWith(l.draftPrefix)) continue;
        let p = l.draftPrefix.length,
          m = d.slice(p),
          u = l.parseValue(m),
          N = e[l.nodeKey];
        (N !== void 0 && !l.isDefault(N)) || ((o[l.nodeKey] = u), t.add(d));
      }
  }
  return (
    (r.blocks = r.blocks.map((s) => {
      let d = s.inlineStyleRanges.filter((l) => !t.has(l.style));
      return { ...s, inlineStyleRanges: d, data: s.data };
    })),
    { ...e, ...o, styledText: r }
  );
}
var Ar = [
  {
    nodeKey: "font",
    draftPrefix: "FONT:",
    parseValue: Ro,
    isDefault(e) {
      return e === "Inter";
    },
  },
  {
    nodeKey: "textColor",
    draftPrefix: "COLOR:",
    parseValue: Ro,
    isDefault(e) {
      return e === "rgb(0, 0, 0)";
    },
  },
  {
    nodeKey: "fontSize",
    draftPrefix: "SIZE:",
    parseValue(e) {
      return fe(e) ?? 0;
    },
    isDefault(e) {
      return e === 16;
    },
  },
  {
    nodeKey: "letterSpacing",
    draftPrefix: "LETTERSPACING:",
    parseValue(e) {
      return fe(e) ?? 0;
    },
    isDefault(e) {
      return e === 0;
    },
  },
  {
    nodeKey: "textTransform",
    draftPrefix: "TEXTTRANSFORM:",
    parseValue(e) {
      return ((e = e.toLowerCase()), Gr(e) ? e : "none");
    },
    isDefault(e) {
      return e === "none";
    },
  },
  {
    nodeKey: "textDecoration",
    draftPrefix: "TEXTDECORATION:",
    parseValue(e) {
      return ((e = e.toLowerCase()), Hr(e) ? e : "none");
    },
    isDefault(e) {
      return e === "none";
    },
  },
  {
    nodeKey: "lineHeight",
    draftPrefix: "LINEHEIGHT:",
    parseValue(e) {
      let [, t, o] = /([\d.]+)(px|em|%)?/u.exec(e) ?? [],
        r = [1.2, "em"];
      if (t === void 0) return r;
      let i = fe(t),
        s = o ?? "em";
      return i !== void 0 ? [i, s] : r;
    },
    isDefault(e) {
      return e[0] === 1.2 && e[1] === "em";
    },
  },
  {
    nodeKey: "textAlignment",
    draftPrefix: "ALIGN:",
    parseValue(e) {
      return ((e = e.toLowerCase()), zr(e) ? e : "start");
    },
    isDefault(e) {
      return e === "start";
    },
  },
];
function Ro(e) {
  return e;
}
function fe(e) {
  let t = parseFloat(e);
  if (Number.isFinite(t)) return t;
}
function Gr(e) {
  return ["capitalize", "uppercase", "lowercase", "none"].includes(e);
}
function Hr(e) {
  return ["underline", "line-through", "none"].includes(e);
}
function zr(e) {
  return ["start", "left", "center", "right"].includes(e);
}
function Co(e) {
  return {
    version: 81,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "PageNode": {
          let i = { ...f({ ...o }, "__class"), __class: "CanvasPageNode" };
          return a(i, void 0);
        }
        case "CanvasComponentNode":
          if (o.variantType === "breakpoint") {
            let i = {
              ...f({ ...o }, "__class", "variantType", "originalSymbolId", "variables"),
              __class: "WebPageNode",
            };
            return a(i, void 0);
          } else {
            let i = {
              ...f({ ...o }, "__class", "variantType", "pagePath", "webMetadata", "customHTML"),
              __class: "SmartComponentNode",
            };
            return a(i, void 0);
          }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Eo(e) {
  return {
    version: 82,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "TextNode":
          return a(f({ ...o, ...xe(o) }, "clip"), void 0);
        case "FrameNode": {
          let i = f({ ...o, ...xe(o) }, "clip");
          return (y(i, r, jr), a(i, void 0));
        }
        case "CodeComponentNode":
          return a(Yr(o), void 0);
        default:
          return a(o, void 0);
      }
    }),
  };
}
function ko(e) {
  return e ? "hidden" : "visible";
}
function xe(e) {
  let t = {};
  return (e.overflow === void 0 && e.clip !== void 0 && (t.overflow = ko(e.clip)), t);
}
var Ur = "$control__",
  $r = "framer/Page";
function Fo(e, t) {
  let o = {};
  return (
    t === $r && e.clip !== void 0 && (o[`${Ur}overflow`] = { type: "string", value: ko(e.clip) }),
    f({ ...e, ...o }, "clip")
  );
}
var Yr = (e) => Fo(e, e.codeComponentIdentifier),
  Kr = (e) => (t) => Fo(t, e.codeComponentIdentifier);
function jr(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "TextNode":
      o(e, void 0, (r) => f({ ...r, ...xe(r) }, "clip"));
      break;
    case "CodeComponentNode":
      o(e, void 0, Kr(e));
      break;
  }
}
function wo(e) {
  return {
    version: 83,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "TextNode":
          return a({ ...o, overflow: o.overflow ?? "hidden" }, void 0);
        case "FrameNode":
          return a({ ...o, overflow: o.overflow ?? "hidden" }, void 0);
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Io(e) {
  return { version: 84, root: e.root };
}
function Oo(e) {
  return {
    version: 85,
    root: c(e.root, (o) => (o.__class === "FrameNode" ? a(qr(o), void 0) : a(o, void 0))),
  };
}
var Xr = new Set([
  "Android_360_640",
  "MacBook_1440_900_pro",
  "MacBook_Pro_16_1536_960",
  "iMac_215_2048_1152",
]);
function qr(e) {
  if (e.framePreset) {
    let t = { ...e };
    return (Xr.has(e.framePreset) && (t.framePreset = null), t);
  } else return e;
}
function Bo(e) {
  return {
    version: 86,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
          return a(Zr(o), void 0);
        case "TextNode":
          return a(Wo(o), void 0);
        case "CodeComponentNode":
          return a(Wo(o), void 0);
        default:
          return a(o, void 0);
      }
    }),
  };
}
function Wo(e) {
  return e.positionStickyEnabled ? { ...e, zIndex: e.zIndex ?? 1 } : { ...e };
}
function Zr(e) {
  return e.positionStickyEnabled || e.positionFixedEnabled
    ? { ...e, zIndex: e.zIndex ?? 1 }
    : { ...e };
}
function Mo(e) {
  return {
    version: 87,
    root: c(e.root, (o) =>
      o.__class === "RichTextNode" ? a({ ...o, paragraphSpacing: 0 }, void 0) : a(o, void 0)
    ),
  };
}
function Lo(e) {
  return {
    version: 88,
    root: c(e.root, (o, r) => {
      if (o.__class === "FrameNode") {
        let i = f({ ...o, ...Do(o) }, "stackEnabled", "gridEnabled", "stackGap", "gridGap");
        return (y(i, r, Jr), a(i, void 0));
      } else return a(o, void 0);
    }),
  };
}
function Do(e, t, o) {
  let r = o ?? e.gridEnabled,
    i = t ?? e.stackEnabled,
    s = {};
  return (
    r
      ? (e.gridEnabled && (s.layout = "grid"), e.gridGap !== void 0 && (s.gap = e.gridGap))
      : i &&
        (e.stackEnabled && (s.layout = "stack"), e.stackGap !== void 0 && (s.gap = e.stackGap)),
    s
  );
}
function Jr(e, t, o) {
  e.__class === "FrameNode" &&
    o(e, void 0, (r) =>
      f(
        { ...r, ...Do(r, t(e, "stackEnabled"), t(e, "gridEnabled")) },
        "stackEnabled",
        "gridEnabled",
        "stackGap",
        "gridGap"
      )
    );
}
function Ao(e) {
  return {
    version: 89,
    root: c(e.root, (o, r) => {
      if (o.__class === "ShapeContainerNode") {
        let i = f(
          { ...o },
          "onTap",
          "onTapStart",
          "onMouseDown",
          "onClick",
          "onMouseUp",
          "onMouseEnter",
          "onMouseLeave",
          "onWheel",
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onAppear",
          "onKeyDown"
        );
        return (y(i, r, Qr), a(i, void 0));
      } else return a(o, void 0);
    }),
  };
}
function Qr(e, t, o) {
  e.__class === "ShapeContainerNode" &&
    o(e, void 0, (r) =>
      f(
        r,
        "onTap",
        "onTapStart",
        "onMouseDown",
        "onClick",
        "onMouseUp",
        "onMouseEnter",
        "onMouseLeave",
        "onWheel",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onAppear",
        "onKeyDown"
      )
    );
}
function Go(e) {
  return { version: 90, root: c(e.root, (o) => a(o, void 0)) };
}
function Ho(e) {
  return { version: 91, root: c(e.root, (o) => a(o, void 0)) };
}
function zo(e) {
  return {
    version: 92,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode": {
          let i = f({ ...o, ...ee(o) }, "positionFixedEnabled", "positionStickyEnabled");
          return (y(i, r, en), a(i, void 0));
        }
        case "TextNode":
          return a(f({ ...o, ...ee(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        case "RichTextNode":
          return a(f({ ...o, ...ee(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        case "CodeComponentNode":
          return a(f({ ...o, ...ee(o) }, "positionFixedEnabled", "positionStickyEnabled"), void 0);
        default:
          return a(o, void 0);
      }
    }),
  };
}
function ee(e) {
  if (e.position !== void 0) return {};
  let t = {};
  return (
    e.positionFixedEnabled
      ? (t.position = "fixed")
      : e.positionStickyEnabled && (t.position = "sticky"),
    t
  );
}
function oe(e) {
  let t = {};
  if (e.position !== void 0) return {};
  if (e.positionFixedEnabled) t.position = "fixed";
  else if (e.positionStickyEnabled) t.position = "sticky";
  else if (e.positionFixedEnabled === !1 || e.positionStickyEnabled === !1) {
    let o = e._deleted ?? [];
    t._deleted = [...o, "position"];
  }
  return t;
}
function en(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
      o(e, void 0, (r) => f({ ...r, ...oe(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "TextNode":
      o(e, void 0, (r) => f({ ...r, ...oe(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "RichTextNode":
      o(e, void 0, (r) => f({ ...r, ...oe(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
    case "CodeComponentNode":
      o(e, void 0, (r) => f({ ...r, ...oe(r) }, "positionFixedEnabled", "positionStickyEnabled"));
      break;
  }
}
function Uo(e) {
  return { version: 93, root: c(e.root, (o) => a(o, void 0)) };
}
var $o = "colorStyles";
function Yo(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 94, root: a(t, void 0) };
  let o = [];
  t.tokensIndex?.forEach((i) => {
    let s = t.tokens?.[i];
    if (!s) return;
    let d = {
      __class: "ColorStyleTokenNode",
      light: s.value,
      id: s.id,
      name: s.name,
      parentid: $o,
    };
    (s.valueDark && (d.dark = s.valueDark), o.push(d));
  });
  let r = { __class: "ColorStyleTokenListNode", id: $o, children: o, parentid: t.id };
  return {
    version: 94,
    root: a(f({ ...t, children: [...(t.children ?? []), r] }, "tokens", "tokensIndex"), void 0),
  };
}
function Ko(e) {
  return {
    version: 95,
    root: c(e.root, (o) => {
      if (o.__class === "FrameNode") {
        let r = { ...o, ...on(o) };
        return a(r, void 0);
      } else return a(o, void 0);
    }),
  };
}
function on(e) {
  if (!e.isBreakpoint) return {};
  let t = {};
  return (e.radius === 0 && (t.radius = void 0), t);
}
function jo(e) {
  return { version: 96, root: c(e.root, (o) => a(o, void 0)) };
}
function Xo(e) {
  let t = [];
  Jo(t, e.root);
  let o = c(e.root, (r, i) => {
    switch (r.__class) {
      case "FrameNode": {
        let s = { ...r };
        return (y(s, i, rn), a(s, void 0));
      }
      case "RichTextNode": {
        let s = tn(r);
        return a(s, void 0);
      }
      case "TextStylesPresetNode": {
        let s = qo(r);
        return a(s, void 0);
      }
      case "TextLinkStylesPresetNode": {
        let s = Zo(r);
        return a(s, void 0);
      }
      case "TextStylesPresetsListNode":
      case "TextLinkStylesPresetsListNode":
        return null;
    }
    return a(r, void 0);
  });
  if (!o) throw new Error("Invalid root node");
  return { version: 97, root: an(t, o) };
}
function tn(e) {
  return f(
    {
      ...e,
      stylePresetHeading1: e.stylesPresetHeading1 ?? "stylesPresetHeading1",
      stylePresetHeading2: e.stylesPresetHeading2 ?? "stylesPresetHeading2",
      stylePresetHeading3: e.stylesPresetHeading3 ?? "stylesPresetHeading3",
      stylePresetParagraph: e.stylesPresetParagraph ?? "stylesPresetParagraph",
      stylePresetLink: e.stylesPresetLink ?? "stylesPresetLink",
    },
    "stylesPresetHeading1",
    "stylesPresetHeading2",
    "stylesPresetHeading3",
    "stylesPresetParagraph",
    "stylesPresetLink"
  );
}
function rn(e, t, o) {
  e.__class === "RichTextNode" &&
    o(e, void 0, (r) => {
      let {
          stylesPresetHeading1: i,
          stylesPresetHeading2: s,
          stylesPresetHeading3: d,
          stylesPresetParagraph: l,
          stylesPresetLink: p,
          ...m
        } = r,
        u = { ...m };
      return (
        i && (u.stylePresetHeading1 = i),
        s && (u.stylePresetHeading2 = s),
        d && (u.stylePresetHeading3 = d),
        l && (u.stylePresetParagraph = l),
        p && (u.stylePresetLink = p),
        u
      );
    });
}
function nn(e) {
  return Array.isArray(e.children) && e.children.length > 0;
}
function qo(e) {
  return { ...e, __class: "TextStylePresetNode", parentid: "stylePresets" };
}
function Zo(e) {
  return { ...e, __class: "LinkStylePresetNode", parentid: "stylePresets" };
}
function Jo(e, t) {
  switch (t.__class) {
    case "TextStylesPresetNode": {
      let o = qo(t);
      e.push(o);
      break;
    }
    case "TextLinkStylesPresetNode": {
      let o = Zo(t);
      e.push(o);
      break;
    }
  }
  if (nn(t)) for (let o of t.children) Jo(e, o);
}
function an(e, t) {
  if (t.__class !== "RootNode" || !t.children || e.length === 0) return t;
  let o = {
    __class: "StylePresetsListNode",
    id: "stylePresets",
    children: e,
    parentid: t.id,
    name: null,
  };
  return { ...t, children: [...t.children, o] };
}
function Qo(e) {
  return { version: 98, root: c(e.root, (o) => a(o, void 0)) };
}
function sn(e) {
  return "id" in e;
}
function dn(e, t) {
  return e.map((o, r) => (sn(o) ? o : { ...o, id: `gradient-stop-${t}-${r}` }));
}
function et(e, t) {
  return dn(e, t);
}
function ot(e, t) {
  return e ? { ...e, stops: et(e.stops, t) } : void 0;
}
function tt(e, t) {
  return e ? { ...e, stops: et(e.stops, t) } : void 0;
}
function rt(e) {
  return {
    version: 99,
    root: c(e.root, (o, r) => {
      switch (o.__class) {
        case "FrameNode":
        case "CodeComponentNode":
        case "ShapeContainerNode":
        case "SVGNode":
        case "BooleanShapeNode":
        case "OvalShapeNode":
        case "PathNode":
        case "PolygonShapeNode":
        case "RectangleShapeNode":
        case "StarShapeNode": {
          let i = {
            ...f({ ...o }, "fillLinearGradient", "fillRadialGradient"),
            fillLinearGradient: ot(o.fillLinearGradient, o.id),
            fillRadialGradient: tt(o.fillRadialGradient, o.id),
          };
          return (i.__class === "FrameNode" && y(i, r, ln), a(i, void 0));
        }
        default:
          return a(o, void 0);
      }
    }),
  };
}
function ln(e, t, o) {
  switch (e.__class) {
    case "FrameNode":
    case "CodeComponentNode":
    case "ShapeContainerNode":
    case "SVGNode":
    case "BooleanShapeNode":
    case "OvalShapeNode":
    case "PathNode":
    case "PolygonShapeNode":
    case "RectangleShapeNode":
    case "StarShapeNode": {
      o(e, void 0, cn);
      break;
    }
  }
}
function cn(e, t) {
  let { fillLinearGradient: o, fillRadialGradient: r, ...i } = e,
    s = i,
    d = o ? { fillLinearGradient: ot(o, t) } : void 0,
    l = r ? { fillRadialGradient: tt(r, t) } : void 0;
  return { ...s, ...d, ...l };
}
var pn = "routeSegmentRoot";
function nt(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 100, root: a(t, void 0) };
  if (t.children?.find((s) => s.__class === "RouteSegmentRootNode"))
    return { version: 100, root: a(t, void 0) };
  let r = t.homePageNodeId,
    i = { __class: "RouteSegmentRootNode", id: pn, children: [], parentid: t.id };
  for (let s of t.children ?? []) {
    if (s.__class !== "WebPageNode") continue;
    let d = s;
    if (d.dataIdentifier || d.id === r) continue;
    let l = d.pagePath?.trim(),
      p = l?.split("/").filter(Boolean) ?? [];
    if ((l?.endsWith("/") && p.push(""), !p || p.length === 0)) continue;
    let m = i;
    p.forEach((u, N) => {
      let x = N === p.length - 1,
        h = m.children.find((T) => T.segment === u),
        g = h && x;
      if (!h || (g && h.webPageId)) {
        let T = {
          __class: "RouteSegmentNode",
          id: `${d.id}${N}`,
          children: [],
          parentid: m.id,
          segment: u,
          webPageId: x ? d.id : void 0,
        };
        (m.children.push(T), (m = T));
      } else (g && (h.webPageId = d.id), (m = h));
    });
  }
  return { version: 100, root: a(f({ ...t, children: [...(t.children ?? []), i] }), void 0) };
}
var he = "routeSegmentRoot";
function it(e) {
  let t = e.root;
  if (t.__class !== "RootNode" || !te(t)) return { version: 101, root: a(t, void 0) };
  let o = un(t);
  if (mn(o, t.id)) return { version: 101, root: a(t, void 0) };
  let { routeSegmentRootUnderTreeRoot: r, webPagesSupportsRouteSegmentIdToPath: i } = o,
    s = Tn(r, i, t),
    d = c(e.root, (l) => (l.__class === "RouteSegmentRootNode" ? null : a(l, void 0)));
  if (!d) throw new Error("Invalid root node");
  return { version: 101, root: Pn(s, d) };
}
function un(e) {
  let t = e.children?.find((d) => d.__class === "RouteSegmentRootNode" && d.id === he),
    o = e.homePageNodeId,
    r = {},
    i = [];
  function s(d) {
    let l = yn(d),
      p = d.id === o;
    return (
      d.__class === "WebPageNode" && !l && !p && (r[d.id] = d.pagePath),
      Sn(d) ? !0 : d.__class === "RouteSegmentRootNode" ? (i.push(d), !0) : !1
    );
  }
  return (
    re(e, s),
    {
      routeSegmentRootUnderTreeRoot: t,
      routeSegmentRootNodes: i,
      webPagesSupportsRouteSegmentIdToPath: r,
    }
  );
}
function mn(e, t) {
  let { routeSegmentRootNodes: o, webPagesSupportsRouteSegmentIdToPath: r } = e;
  if (o.length !== 1) return !1;
  let i = o[0];
  if (!i || i.id !== he || i.parentid !== t) return !1;
  let s = fn(i),
    d = Object.keys(r);
  return s.length !== d.length ? !1 : JSON.stringify(s.sort()) === JSON.stringify(d.sort());
}
function fn(e) {
  let t = [];
  return (
    re(e, (o) =>
      o.__class !== "RouteSegmentNode" ? !0 : (o.webPageId && t.push(o.webPageId), !1)
    ),
    t
  );
}
function Nn(e) {
  if (!e) return;
  let t = {};
  return (re(e, (o) => (o.__class !== "RouteSegmentNode" ? !0 : (at(t, o, ""), !1))), t);
}
function xn(e) {
  return /^\d+$/u.test(e);
}
function hn(e, t) {
  let o = e.split(t),
    r = o.length;
  if (r === 1) return null;
  let i = o[r - 1];
  if (typeof i != "string" || i.length === 0 || !xn(i)) return null;
  let s = Number(i);
  return typeof s != "number" ? null : (o.pop(), { value: o.join(t), suffixCount: s });
}
function gn(e, t) {
  let o = 1,
    r = !0,
    i = "-",
    s = hn(e, i);
  s && ((e = s.value), (o = s.suffixCount), (r = !1));
  let d = o === 1 && r ? e : `${e}${i}${o}`;
  for (; t.has(d);) (o++, (d = `${e}${i}${o}`));
  return d;
}
function Tn(e, t, o) {
  let r = { __class: "RouteSegmentRootNode", id: he, children: [], parentid: o.id },
    i = Nn(e),
    s = new Set(
      [...Object.values(i ?? {}), ...Object.values(t)].filter((d) => typeof d == "string")
    );
  for (let [d, l] of Object.entries(t)) {
    let p = i?.[d] ?? l ?? gn("/page", s);
    s.add(p);
    let m = p?.trim(),
      u = m?.split("/").filter(Boolean) ?? [];
    if ((m?.endsWith("/") && u.push(""), !u || u.length === 0)) continue;
    let N = r;
    u.forEach((x, h) => {
      let g = h === u.length - 1,
        T = N.children?.find((V) => V.segment === x),
        v = T && g;
      if (!T || (v && T.webPageId)) {
        let V = {
          __class: "RouteSegmentNode",
          id: `${d}${h}`,
          children: [],
          parentid: N.id,
          segment: x,
          webPageId: g ? d : void 0,
        };
        (N.children.push(V), (N = V));
      } else (v && (T.webPageId = d), (N = T));
    });
  }
  return r;
}
function at(e, t, o) {
  if ((t.webPageId && !(t.webPageId in e) && (e[t.webPageId] = `${o}/${t.segment}`), !!te(t)))
    for (let r of t.children) at(e, r, `${o}/${t.segment}`);
}
function yn(e) {
  return "dataIdentifier" in e && !!e.dataIdentifier;
}
function Sn(e) {
  return "originalid" in e && !!e.originalid;
}
function te(e) {
  return "children" in e && Array.isArray(e.children) && e.children.length > 0;
}
function re(e, t) {
  if (te(e))
    for (let o of e.children) {
      let r = t(o);
      !te(o) || r || re(o, t);
    }
}
function Pn(e, t) {
  return t.__class !== "RootNode" || !t.children ? t : { ...t, children: [...t.children, e] };
}
function st(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 102, root: a(t, void 0) };
  let o = t.children?.find((r) => r.__class === "RouteSegmentRootNode");
  if (!o || !Vn(o)) throw new Error("RouteSegmentRootNode not found");
  for (let r of t.children ?? []) {
    if (r.__class !== "WebPageNode") continue;
    let i = r;
    i.dataIdentifier && i.id !== t.homePageNodeId && Rn(o, i);
  }
  return { version: 102, root: a(t, void 0) };
}
function Vn(e) {
  return e.__class === "RouteSegmentRootNode";
}
function _n(e) {
  let t = e?.trim(),
    o = t?.split("/").filter(Boolean) ?? [];
  return (t?.endsWith("/") && o.push(""), o);
}
function vn(e, t, o) {
  if ((t.children || (t.children = []), o)) {
    let r = kn(t.children, (i) => i.dataIdentifier !== void 0);
    r > -1 ? t.children.splice(r + 1, 0, e) : t.children?.unshift(e);
  } else t.children?.push(e);
}
function Rn(e, t) {
  let o = _n(t.pagePath);
  if (!o || o.length === 0) return;
  let r = e;
  o.forEach((i, s) => {
    let d = s === o.length - 1,
      l = r.children?.find((u) => u.segment === i),
      p = En(i) ? t.dataIdentifier : void 0,
      m = l && d;
    if (!l || (m && l.webPageId)) {
      let u = {
        __class: "RouteSegmentNode",
        id: `${t.id}${s}`,
        children: [],
        parentid: r.id,
        segment: i,
        webPageId: d ? t.id : void 0,
        dataIdentifier: p,
      };
      (r.children || (r.children = []), vn(u, r, !!p), (r = u));
    } else
      m
        ? ((l.webPageId = t.id), (l.dataIdentifier = p), (r = l))
        : ((l.dataIdentifier = p), (r = l));
  });
}
var bn = ":([a-z]\\w*)",
  Cn = new RegExp(bn, "gi");
function En(e) {
  return e.match(Cn) !== null;
}
function kn(e, t) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r !== void 0 && t(r)) return o;
  }
  return -1;
}
function dt(e) {
  return { version: 103, root: c(e.root, (o) => a(o, void 0)) };
}
function $(e) {
  return Number.isFinite(e);
}
function ne(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function lt(e) {
  return (
    e.styleAppearEffectEnabled && e.styleAppearEffectTrigger === "onMount" && e.enterEffectEnabled
  );
}
function ct(e) {
  return (
    e.styleAppearEffectEnabled &&
    e.styleAppearEffectTrigger === "onMount" &&
    e.styleAppearEffectLocked === !1 &&
    e.exitEffectEnabled
  );
}
function pt(e) {
  return e.whileTapEnabled;
}
function ut(e) {
  return e.whileHoverEnabled;
}
function ie(e) {
  return $(e) ? e : 0;
}
function wn(e) {
  return $(e.rotation) && ct(e) ? ie(e.exitEffectRotate) + e.rotation : e.exitEffectRotate;
}
function In(e) {
  return $(e.rotation) && lt(e) ? ie(e.enterEffectRotate) + e.rotation : e.enterEffectRotate;
}
function On(e) {
  return $(e.rotation) && pt(e) ? ie(e.whileTapRotate) + e.rotation : e.whileTapRotate;
}
function Wn(e) {
  return $(e.rotation) && ut(e) ? ie(e.whileHoverRotate) + e.rotation : e.whileHoverRotate;
}
function Bn(e) {
  if (ne(e.rotation) && ut(e)) return !0;
}
function Mn(e) {
  if (ne(e.rotation) && pt(e)) return !0;
}
function Ln(e) {
  if (ne(e.rotation) && ct(e)) return !0;
}
function Dn(e) {
  if (ne(e.rotation) && lt(e)) return !0;
}
function mt(e) {
  return {
    version: 104,
    root: c(e.root, (o) => {
      switch (o.__class) {
        case "FrameNode":
        case "RichTextNode":
        case "CodeComponentNode": {
          let r = {
            ...f(
              { ...o },
              "enterEffectRotate",
              "exitEffectRotate",
              "whileTapRotate",
              "whileHoverRotate"
            ),
            exitEffectRotate: wn(o),
            enterEffectRotate: In(o),
            whileTapRotate: On(o),
            whileHoverRotate: Wn(o),
            whileHoverRotateAdditiveDynamicValue: Bn(o),
            whileTapRotateAdditiveDynamicValue: Mn(o),
            exitEffectRotateAdditiveDynamicValue: Ln(o),
            enterEffectRotateAdditiveDynamicValue: Dn(o),
          };
          return a(r, void 0);
        }
        case "SmartComponentNode":
        case "CanvasPageNode":
          return _e;
        default:
          return a(o, void 0);
      }
    }),
  };
}
function ft(e) {
  let t = [],
    o = c(e.root, (r) => {
      switch (r.__class) {
        case "StylePresetsListNode":
        case "ComponentPresetsListNode":
          return (t.push(...r.children), null);
      }
      return a(r, void 0);
    });
  if (!o) throw new Error("Invalid root node");
  return { version: 105, root: An(o, t) };
}
function An(e, t) {
  if (e.__class !== "RootNode" || !e.children || t.length === 0) return e;
  let o = {
    __class: "PresetsListNode",
    id: "presets",
    parentid: e.id,
    name: null,
    duplicatedFrom: null,
    visible: !1,
    originalid: null,
    children: t.map(Gn),
  };
  return { ...e, children: [...e.children, o] };
}
function Gn(e) {
  return { ...e, parentid: "presets" };
}
function Nt(e) {
  return { version: 106, root: c(e.root, (o) => a(o, void 0)) };
}
function xt(e) {
  return {
    version: 107,
    root: c(e.root, (o) =>
      o.__class === "TextStylePresetNode"
        ? a({ ...o, textStrokeWidth: "initial", textStrokeColor: "initial" }, void 0)
        : a(o, void 0)
    ),
  };
}
function ht(e) {
  let t = c(e.root, (o) =>
    o.__class === "FormButtonNode" || o.__class === "FormContainerNode" ? null : a(o, void 0)
  );
  if (!t) throw new Error("Invalid root node");
  return { version: 108, root: t };
}
function gt(e) {
  return { version: 109, root: c(e.root, (o) => a(o, void 0)) };
}
function Tt(e) {
  return { version: 110, root: c(e.root, (o) => a(o, void 0)) };
}
var I = "entityRoot",
  Hn = "blockquoteStyleEntityRoot",
  zn = "cmsStyleEntityRoot",
  Un = "codeFileEntityRoot",
  $n = "codeStyleEntityRoot",
  Yn = "colorStyleTokenEntityRoot",
  Kn = "componentInstanceEntityRoot",
  jn = "linkStyleEntityRoot",
  Xn = "textStyleEntityRoot";
function yt(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 111, root: a(t, void 0) };
  if (t.children?.find((x) => x.__class === "EntityRootNode"))
    return { version: 111, root: a(t, void 0) };
  let r = { __class: "BlockquoteEntityTypeRootNode", id: Hn, children: [], parentid: I },
    i = { __class: "CMSEntityTypeRootNode", id: zn, children: [], parentid: I },
    s = { __class: "CodeFileEntityTypeRootNode", id: Un, children: [], parentid: I },
    d = { __class: "ColorEntityTypeRootNode", id: Yn, children: [], parentid: I },
    l = { __class: "ComponentEntityTypeRootNode", id: Kn, children: [], parentid: I },
    N = {
      __class: "EntityRootNode",
      id: I,
      children: [
        r,
        i,
        s,
        d,
        l,
        { __class: "InlineCodeEntityTypeRootNode", id: $n, children: [], parentid: I },
        { __class: "LinkEntityTypeRootNode", id: jn, children: [], parentid: I },
        { __class: "TextEntityTypeRootNode", id: Xn, children: [], parentid: I },
      ],
      parentid: t.id,
    };
  for (let x of t.children ?? [])
    if (x.__class === "SmartComponentNode") ge(l, x);
    else if (x.__class === "LocalModulesListNode")
      for (let h of x.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && (ge(l, g), ge(s, g, !0));
      }
  return { version: 111, root: a({ ...t, children: [...(t.children ?? []), N] }, void 0) };
}
function ge(e, t, o = !1, r = "") {
  let i = t.name;
  t.__class === "LocalModuleNode" && (i = t.save.name);
  let s = i?.trim().split("/").filter(Boolean) ?? [];
  if (s.length < 2) return;
  let d = e;
  s.forEach((l, p) => {
    if (p === s.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = qn(d, l);
      if (u) d = u;
      else {
        let N = {
          __class: "EntityFolderNode",
          id: `entity-folder-${r}${l}`,
          name: l,
          parentid: d.id,
          children: [],
        };
        (d.children.push(N), (d = N));
      }
      r += l + "-";
    }
  });
}
function qn(e, t) {
  for (let o of e.children) if (o.__class === "EntityFolderNode" && o.name === t) return o;
}
var O = "entityRoot",
  Zn = "blockquoteStyleEntityRoot",
  Jn = "cmsStyleEntityRoot",
  Qn = "codeFileEntityRoot",
  ei = "codeStyleEntityRoot",
  oi = "colorStyleTokenEntityRoot",
  ti = "componentInstanceEntityRoot",
  ri = "linkStyleEntityRoot",
  ni = "textStyleEntityRoot";
function Pt(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 112, root: a(t, void 0) };
  let o = { __class: "BlockquoteEntityTypeRootNode", id: Zn, children: [], parentid: O },
    r = { __class: "CMSEntityTypeRootNode", id: Jn, children: [], parentid: O },
    i = { __class: "CodeFileEntityTypeRootNode", id: Qn, children: [], parentid: O },
    s = { __class: "ColorEntityTypeRootNode", id: oi, children: [], parentid: O },
    d = { __class: "ComponentEntityTypeRootNode", id: ti, children: [], parentid: O },
    u = {
      __class: "EntityRootNode",
      id: O,
      children: [
        o,
        r,
        i,
        s,
        d,
        { __class: "InlineCodeEntityTypeRootNode", id: ei, children: [], parentid: O },
        { __class: "LinkEntityTypeRootNode", id: ri, children: [], parentid: O },
        { __class: "TextEntityTypeRootNode", id: ni, children: [], parentid: O },
      ],
      parentid: t.id,
    };
  for (let x of t.children ?? [])
    if (x.__class === "SmartComponentNode") St(d, x);
    else if (x.__class === "LocalModulesListNode")
      for (let h of x.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && St(i, g, !0);
      }
  let N = t.children?.filter((x) => x.__class !== "EntityRootNode") ?? [];
  return { version: 112, root: a({ ...t, children: [...N, u] }, void 0) };
}
function St(e, t, o = !1) {
  let r = t.name;
  t.__class === "LocalModuleNode" && (r = t.save.name);
  let i = r?.trim().split("/").filter(Boolean) ?? [];
  if (i.length < 2) return;
  let s = "",
    d = e;
  i.forEach((l, p) => {
    if (p === i.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = d.children.find((N) => N.__class === "EntityFolderNode" && N.name === l);
      if (u) d = u;
      else {
        let N = {
          __class: "EntityFolderNode",
          id: `entity-folder-${s}${l}`,
          name: l,
          parentid: d.id,
          children: [],
        };
        (d.children.push(N), (d = N));
      }
      s += l + "-";
    }
  });
}
var W = "entityRoot",
  ii = "blockquoteStyleEntityRoot",
  ai = "cmsStyleEntityRoot",
  si = "codeFileEntityRoot",
  di = "codeStyleEntityRoot",
  li = "colorStyleTokenEntityRoot",
  ci = "componentInstanceEntityRoot",
  pi = "linkStyleEntityRoot",
  ui = "textStyleEntityRoot";
function _t(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { version: 113, root: a(t, void 0) };
  let o = { __class: "BlockquoteEntityTypeRootNode", id: ii, children: [], parentid: W },
    r = { __class: "CMSEntityTypeRootNode", id: ai, children: [], parentid: W },
    i = { __class: "CodeFileEntityTypeRootNode", id: si, children: [], parentid: W },
    s = { __class: "ColorEntityTypeRootNode", id: li, children: [], parentid: W },
    d = { __class: "ComponentEntityTypeRootNode", id: ci, children: [], parentid: W },
    u = {
      __class: "EntityRootNode",
      id: W,
      children: [
        o,
        r,
        i,
        s,
        d,
        { __class: "InlineCodeEntityTypeRootNode", id: di, children: [], parentid: W },
        { __class: "LinkEntityTypeRootNode", id: pi, children: [], parentid: W },
        { __class: "TextEntityTypeRootNode", id: ui, children: [], parentid: W },
      ],
      parentid: t.id,
    };
  for (let x of t.children ?? [])
    if (x.__class === "SmartComponentNode") Vt(d, x);
    else if (x.__class === "LocalModulesListNode")
      for (let h of x.children ?? []) {
        if (h.__class !== "LocalModuleNode") continue;
        let g = h;
        g.save.type === "codeFile" && Vt(i, g, !0);
      }
  let N = t.children?.filter((x) => x.__class !== "EntityRootNode") ?? [];
  return { version: 113, root: a({ ...t, children: [...N, u] }, void 0) };
}
function Vt(e, t, o = !1) {
  let r = t.name;
  t.__class === "LocalModuleNode" && (r = t.save.name);
  let i = r?.trim().split("/").filter(Boolean) ?? [];
  if (i.length < 2) return;
  let s = e.id,
    d = e;
  i.forEach((l, p) => {
    if (p === i.length - 1) {
      let u = {
        __class: "EntityReferenceNode",
        id: o ? `entity-ref-code-file-${t.id}` : `entity-ref-${t.id}`,
        parentid: d.id,
      };
      d.children.push(u);
    } else {
      let u = d.children.find((x) => x.__class === "EntityFolderNode" && x.name === l),
        N = be(l);
      if (u) d = u;
      else {
        let x = {
          __class: "EntityFolderNode",
          id: `entity-folder-${s}-${N}`,
          name: l,
          parentid: d.id,
          children: [],
        };
        (d.children.push(x), (d = x));
      }
      s += "-" + N;
    }
  });
}
function vt(e) {
  return { version: 114, root: c(e.root, (o) => a(o, void 0)) };
}
function Rt(e) {
  return { version: 115, root: c(e.root, (o) => a(o, void 0)) };
}
var Et = "customCodeScope";
function kt(e) {
  let t = [],
    o = c(e.root, (i) => {
      switch (i.__class) {
        case "CustomCodeScopeNode":
          return null;
        case "RootNode": {
          t.push(...bt(i));
          let s = f({ ...i }, "customHTML", "pluginCustomHTML");
          return a(s, void 0);
        }
        case "WebPageNode": {
          t.push(...bt(i));
          let s = f({ ...i }, "customHTML");
          return a(s, void 0);
        }
        default:
          return a(i, void 0);
      }
    });
  if (!o) throw new Error("Invalid root node");
  let r = { __class: "CustomCodeScopeNode", id: Et, children: t, parentid: o.id };
  return { version: 116, root: mi(r, o) };
}
function mi(e, t) {
  return t.__class !== "RootNode" || !t.children ? t : { ...t, children: [...t.children, e] };
}
function bt(e) {
  let t = e.__class === "WebPageNode" ? e.id : void 0,
    o = typeof e.customHTML == "object" ? e.customHTML : null,
    r =
      e.__class === "RootNode" && typeof e.pluginCustomHTML == "object" ? e.pluginCustomHTML : null,
    i = [];
  for (let s in o) {
    let d = s,
      l = o[d];
    l && i.push(Ct({ code: l, placement: d, disabled: !1, managedByPlugin: void 0, pageId: t }));
  }
  for (let s in r) {
    let d = s,
      l = r[d];
    for (let p in l) {
      let m = p,
        u = l[m];
      u?.html &&
        i.push(
          Ct({ code: u.html, placement: m, disabled: u.disabled, managedByPlugin: d, pageId: t })
        );
    }
  }
  return i;
}
function Ct({ code: e, placement: t, disabled: o, managedByPlugin: r, pageId: i }) {
  let s = `legacy-${t}`;
  return (
    i && (s += `-${i}`),
    r && (s += `-plugin-${r}`),
    {
      __class: "CustomCodeNode",
      id: s,
      name: "Custom Code (Legacy)",
      parentid: Et,
      managedByPlugin: r,
      placement: t,
      disabled: o,
      code: e,
      pageIds: i ? [i] : void 0,
      loadMode: "once",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
}
function Ft(e) {
  return { version: 121, root: c(e.root, (o) => a(o, void 0)) };
}
function wt(e) {
  return { version: 123, root: c(e.root, (o) => a(o, void 0)) };
}
var Te = "styledText";
function Ot(e) {
  return {
    version: 126,
    root: c(e.root, (o) => {
      let r = o.__class === "TextNode" ? o.styledText : void 0,
        i = r === void 0 || typeof r == "string" ? void 0 : It(r),
        s = "replicaInfo" in o ? o.replicaInfo : void 0,
        d = s?.overrides,
        l;
      for (let [m, u] of d ? Object.entries(d) : []) {
        if (!fi(u)) continue;
        let N = u[Te];
        N === void 0 || typeof N == "string" || ((l ??= { ...d }), (l[m] = { ...u, [Te]: It(N) }));
      }
      if (i === void 0 && l === void 0) return a(o, void 0);
      let p = {
        ...o,
        ...(i === void 0 ? {} : { [Te]: i }),
        ...(l === void 0 ? {} : { replicaInfo: { ...s, overrides: l } }),
      };
      return a(p, void 0);
    }),
  };
}
function It(e) {
  let t = e;
  return JSON.stringify({
    blocks: t.blocks.map((o) => ({
      text: o.text,
      type: o.type,
      key: o.key,
      inlineStyleRanges: o.inlineStyleRanges,
      depth: o.depth,
      data: o.data,
      entityRanges: o.entityRanges,
    })),
    entityMap: t.entityMap,
  });
}
function fi(e) {
  return typeof e == "object" && e !== null;
}
function Wt(e) {
  let t = e.root;
  if (t.__class !== "RootNode") return { ...e, version: 127 };
  let o = t.children?.flatMap((r) =>
    r.__class !== "EntityRootNode" ? [r] : r.children.map((i) => ({ ...i, parentid: t.id }))
  );
  return { ...e, version: 127, root: { ...t, children: o } };
}
function ae(e) {
  let t = e.version;
  switch (t) {
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
    case 126:
    case 127:
      return !0;
    default: {
      let o = t;
      return !1;
    }
  }
}
function Y(e) {
  return Bt(e) && typeof e.version == "number" && Bt(e.root);
}
function Bt(e) {
  return typeof e == "object" && e !== null;
}
function Mt(e) {
  throw new Error("Absurd! This should not happen.");
}
function C(e, t) {
  if (!e) throw new Error(t ? `assert: ${t}` : "assert");
}
function Pa(e) {
  switch (e.version) {
    case 55:
      e = Le(e);
    case 56:
      e = Ge(e);
    case 57:
      e = He(e);
    case 58:
      e = ze(e);
    case 59:
      e = Ue(e);
    case 60:
      e = $e(e);
    case 61:
      e = Ye(e);
    case 62:
      e = Ke(e);
    case 63:
      e = je(e);
    case 64:
      e = Xe(e);
    case 65:
      e = qe(e);
    case 66:
      e = Ze(e);
    case 67:
      e = Qe(e);
    case 68:
      e = eo(e);
    case 69:
      e = lo(e);
    case 70:
      e = mo(e);
    case 71:
      e = fo(e);
    case 72:
      e = No(e);
    case 73:
      e = To(e);
    case 74:
      e = So(e);
    case 75:
      e = Po(e);
    case 76:
      e = Vo(e);
    case 77:
      e = _o(e);
    case 78:
      e = vo(e);
    case 79:
      e = bo(e);
    case 80:
      e = Co(e);
    case 81:
      e = Eo(e);
    case 82:
      e = wo(e);
    case 83:
      e = Io(e);
    case 84:
      e = Oo(e);
    case 85:
      e = Bo(e);
    case 86:
      e = Mo(e);
    case 87:
      e = Lo(e);
    case 88:
      e = Ao(e);
    case 89:
      e = Go(e);
    case 90:
      e = Ho(e);
    case 91:
      e = zo(e);
    case 92:
      e = Uo(e);
    case 93:
      e = Yo(e);
    case 94:
      e = Ko(e);
    case 95:
      e = jo(e);
    case 96:
      e = Xo(e);
    case 97:
      e = Qo(e);
    case 98:
      e = rt(e);
    case 99:
      e = nt(e);
    case 100:
      e = it(e);
    case 101:
      e = st(e);
    case 102:
      e = dt(e);
    case 103:
      e = mt(e);
    case 104:
      e = ft(e);
    case 105:
      e = Nt(e);
    case 106:
      e = xt(e);
    case 107:
      e = ht(e);
    case 108:
      e = gt(e);
    case 109:
      e = Tt(e);
    case 110:
      e = yt(e);
    case 111:
      e = Pt(e);
    case 112:
      e = _t(e);
    case 113:
      e = vt(e);
    case 114:
      e = Rt(e);
    case 115:
      e = kt(e);
    case 116:
      e = ve(e);
    case 117:
      e = Re(e);
    case 118:
      e = Ce(e);
    case 119:
      e = Ee(e);
    case 120:
      e = Ft(e);
    case 121:
      e = ke(e);
    case 122:
      e = wt(e);
    case 123:
      e = we(e);
    case 124:
      e = Ie(e);
    case 125:
      e = Ot(e);
    case 126:
      e = Wt(e);
    case 127:
      return e;
    default:
      return Mt(e);
  }
}
function ye(e) {
  return (
    C(Y(e), "'treeJson' is not a valid Tree"),
    C(ae(e), `'treeJson' is not migratable, received version is: ${e.version}`),
    Pa(e)
  );
}
var Lt = 55;
function _a(e, t) {
  if (typeof t != "number" || t < 123 || !D(e) || !Array.isArray(e.children)) return;
  let o = e.children.find((r) => D(r) && r.__class === "LocalModulesListNode");
  if (!(!D(o) || !Array.isArray(o.children)))
    for (let r of o.children)
      !D(r) || r.__class !== "LocalModuleNode" || !D(r.save) || (r.save = new Fe(r.save));
}
function va(e, t) {
  let { root: o, version: r } = t;
  (C(typeof o.id == "string", "Document root has no id"),
    _a(o, r),
    e.importObject(o.id, o),
    e.setVersion(r),
    e.setRoot(o.id));
}
function Ra(e) {
  C(
    e.table.version === Be,
    `Can't migrate the tree of a format ${e.table.version} document, migrate its format first`
  );
  let t = e.getVersion();
  if (t === void 0) throw new Error("Tree schema version does not exist in store.");
  for (let o = t; o < w; o++) {
    let r = o + 1,
      i = `m${o}_${r}`,
      s = de[i];
    if (!s) throw new Error(`Tree schema migration "${i}" does not exist.`);
    We(e, s);
  }
  return t < w ? (e.setVersion(w), { migrated: !0, from: t, to: w }) : { migrated: !1, version: t };
}
function ba(e) {
  let t = e.root.id;
  C(typeof t == "string", "Document root has no ID");
  let o = Me("", void 0),
    r =
      e.root.__class === "RootNode"
        ? e.root
        : { id: Oe(), __class: "RootNode", children: [e.root] };
  (o.batch(() => va(o, { version: e.version, root: r })), Ra(o));
  let i = o.getObject(t);
  return (
    C(i, `Root object with ID "${t}" not found after migration`),
    { ...i, parentid: e.root.parentid ?? null }
  );
}
function Va(e) {
  (C(Y(e), "'treeJson' is not a valid Tree"),
    C(
      e.version >= Lt && e.version <= w,
      `'treeJson' is not migratable, received version is: ${e.version}`
    ));
  let t = ae(e) ? ye(e) : e;
  if (t.version === w) return t;
  let o = t.root;
  C(D(o), "Document root is not an object");
  let r = ba({ version: t.version, root: o });
  return { version: w, root: r };
}
function Dt(e) {
  B.isApiPlugin && performance.mark(`framer-loading-${e}`);
}
var Se = Ht(zt(), 1);
function Ca() {
  return typeof window > "u" || !window["__perf-start-time"]
    ? performance.now()
    : window["__perf-start-time"];
}
var Ea = Ca(),
  At = () => performance.now() - Ea,
  Lm = {
    init: "Init",
    dataLoad: "Data Load",
    documentBytesReady: "Document Bytes Ready",
    buildStore: "Build Store",
    addedRows: "Added Rows",
    wsConnection: "WS Connection",
    wsTreeInitMessages: "WS Tree Init",
    parsingInit: "Parsing Init",
    parsingRootNode: "Parsing Root Node",
    parsingReplicasExpansion: "Parsing Replicas",
    parsingFirstPage: "Parsing first page",
    loadInitialScopes: "Load initial scopes",
    processInitialRemoteUpdates: "Process initial remote updates",
    parsingResume: "Parsing Resume",
    sandboxLoad: "Canvas Sandbox",
    sandboxReady: "Canvas Resources",
    sandboxServicesReady: "Sandbox Services",
    sandboxCanvasFirstRender: "Canvas First Render",
    sandboxFramerDefaultModulesLoad: "Framer Default Modules",
    sandboxFirstModulesLoad: "First Modules Load",
    fontsLoad: "Web Fonts",
    modulesLoad: "Modules",
    modulesStorageStart: "Modules Storage Start",
    modulesStorageInit: "Modules Storage Init",
    modulesStorageFirstPublish: "Modules Storage First Publish",
    sandboxModulesListReceived: "Sandbox Modules List Received",
    sandboxFirstBatchEvaluated: "Sandbox First Batch Evaluated",
    sandboxEvaluateModulesEnd: "Sandbox Evaluate Modules End",
    sandboxExternalModulesIdle: "Sandbox External Modules Idle",
    sandboxRenderingPhaseNormal: "Sandbox Rendering Phase Normal",
    sandboxTrackerIdle: "Sandbox Tracker Idle",
    sandboxScopeLoadingDebounceEnter: "Sandbox Scope Loading Debounce Enter",
    editorIsLoadingModulesIdle: "Editor isLoadingModules = false",
    showUI: "UI Shown",
  },
  Pe = class {
    marks = {};
    dynamicMarks = [];
    isComplete = !1;
    handlePerformanceMark(t, o) {
      if (t in this.marks) {
        B.isDebugBuild && console.warn("Performance mark already exists", t);
        return;
      }
      ((this.marks[t] = o), t === "showUI" && (this.isComplete = !0));
    }
    handleDynamicMark(t) {
      this.dynamicMarks.push(t);
    }
  },
  Ve = class extends Se.default {
    marksStore = new Pe();
    loadingInfoValue;
    constructor() {
      (super(),
        this.on("performance:mark", this.marksStore.handlePerformanceMark.bind(this.marksStore)),
        this.on(
          "performance:dynamicMark",
          this.marksStore.handleDynamicMark.bind(this.marksStore)
        ));
    }
    currentMarks() {
      return { ...this.marksStore.marks };
    }
    currentDynamicMarks() {
      return [...this.marksStore.dynamicMarks];
    }
    isComplete() {
      return this.marksStore.isComplete;
    }
    setLoadingInfo(t) {
      ((this.loadingInfoValue = t), this.emit("loading:info", t));
    }
    getLoadingInfo() {
      return this.loadingInfoValue;
    }
    wsInitialUpdatesValue;
    setWsInitialUpdates(t) {
      ((this.wsInitialUpdatesValue = t), this.emit("ws:init", t));
    }
    initialModuleLoadStatsValue;
    setInitialModuleLoadStats(t) {
      this.initialModuleLoadStatsValue = t;
    }
    getInitialModuleLoadStats() {
      return this.initialModuleLoadStatsValue;
    }
    ttfbValue;
    ttfbResolved = !1;
    getNavigationEntry() {
      let t = performance.getEntriesByType("navigation")[0];
      return t instanceof PerformanceNavigationTiming ? t : void 0;
    }
    getTtfb() {
      if (this.ttfbResolved) return this.ttfbValue;
      this.ttfbResolved = !0;
      let t = this.getNavigationEntry();
      return (t && (this.ttfbValue = Math.round(t.responseStart - t.startTime)), this.ttfbValue);
    }
  },
  Gt = B.isTest || B.isAutomation || B.isE2E,
  G = Gt ? null : new Ve();
function K() {
  return Gt
    ? !1
    : !G && B.isDebugBuild
      ? (console.error("PerformanceEmitter not initialized"), !1)
      : !0;
}
var se = 0;
function Dm(e, t = At()) {
  if ((Dt(e), !K())) return;
  let o = performance.now(),
    r = G?.isComplete() ? "post-loading" : "loading";
  (le(e, se, o, r), (se = o), G?.emit("performance:mark", e, t));
}
function Am(e, t, o = At()) {
  if (!K()) return;
  let r = performance.now();
  (le(e, se, r, "post-loading"),
    (se = r),
    G?.emit("performance:dynamicMark", { name: e, label: t, value: o }));
}
function Gm(e) {
  K() && G?.setLoadingInfo(e);
}
function Hm(e) {
  K() && G?.setWsInitialUpdates(e);
}
function zm(e) {
  K() && G?.setInitialModuleLoadStats(e);
}
export {
  oo as a,
  Y as b,
  C as c,
  Va as d,
  Se as e,
  Ea as f,
  Lm as g,
  G as h,
  Dm as i,
  Am as j,
  Gm as k,
  Hm as l,
  zm as m,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-CRAOT5IF.mjs.map
