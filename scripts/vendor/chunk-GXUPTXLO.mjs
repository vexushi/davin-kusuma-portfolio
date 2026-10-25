import { i as U } from "./chunk-MYSAMYRY.mjs";
import { c as f, d as L, f as T } from "./chunk-2BVRJ33D.mjs";
import { r as h, t as C } from "./chunk-KBPGUKJ2.mjs";
import { c as g } from "./chunk-4JY5UMT2.mjs";
function A(e, s, r) {
  if (s.pages > (r.maxPages ?? 1 / 0)) return "pages";
  if (s.cmsCollections > (r.maxCmsCollections ?? 1 / 0)) return "cmsCollections";
  if (s.cmsItems > (r.maxCmsItems ?? 1 / 0)) return "cmsItems";
  if (s.locales > (r.maxLocales ?? 1 / 0)) return "locales";
  if (s.editors > (r.maxEditors ?? 1 / 0)) return "editors";
  if (e !== "freeSite" && s.abTests > (r.maxAbTests ?? 1 / 0)) return "abTests";
  let t = r.maxBandwidthInGB ?? 1 / 0,
    { previousMonth: o, twoMonthsAgo: l, currentMonth: n } = s.bandwidthInGB,
    a = o > t && l > t,
    u = o > t && n > t;
  if ((a || u) && !(U === t)) return "bandwidth";
}
var b = {
  pages: "You currently have more pages than this plan allows for.",
  cmsCollections: "You currently have more CMS collections than this plan allows for.",
  cmsItems: "You currently have more CMS items than this plan allows for.",
  locales: "You currently have more locales than this plan allows for.",
  editors: "You currently have more editors in your project than this plan allows for.",
  abTests: "You currently have more A/B tests in your project than this plan allows for.",
  bandwidth: "Your current bandwidth usage exceeds this plan\u2019s limit.",
};
function E(e) {
  return b[e];
}
function O({ isEnterprise: e, count: s, maxLimit: r, selfServeMax: t }) {
  return e ? 3 : s <= r ? 1 : s <= t ? 0 : 2;
}
var w = ((i) => (
  (i.fileUploadLimitInMB = "fileUploadLimitInMB"),
  (i.pages = "pages"),
  (i.cmsCollections = "cmsCollections"),
  (i.cmsItems = "cmsItems"),
  (i.localeAddon = "localeAddon"),
  (i.abTests = "abTests"),
  (i.trackingEventsLimit = "trackingEventsLimit"),
  (i.translatableWords = "translatableWords"),
  (i.bandwidthInGB = "bandwidthInGB"),
  (i.analyticsRangeInDays = "analyticsRangeInDays"),
  (i.staticFiles = "staticFiles"),
  (i.aiCredits = "aiCredits"),
  (i.canUseFunnels = "canUseFunnels"),
  (i.canUseTriggers = "canUseTriggers"),
  (i.canInviteEditors = "canInviteEditors"),
  (i.canInviteProjectEditors = "canInviteProjectEditors"),
  (i.canPublishToCustomDomain = "canPublishToCustomDomain"),
  (i.canUseBranching = "canUseBranching"),
  (i.canUseCustomCanonicalUrl = "canUseCustomCanonicalUrl"),
  (i.canUseCustomHeaders = "canUseCustomHeaders"),
  (i.canUseFirewall = "canUseFirewall"),
  (i.canUseCustomLocaleRegions = "canUseCustomLocaleRegions"),
  (i.canUseEditorPermissions = "canUseEditorPermissions"),
  (i.canUseInternalRewrites = "canUseInternalRewrites"),
  (i.canUsePasswordProtection = "canUsePasswordProtection"),
  (i.canUseRedirects = "canUseRedirects"),
  (i.canUseStagingEnvironment = "canUseStagingEnvironment"),
  (i.canUseUTMTracking = "canUseUTMTracking"),
  (i.canUseWellKnown = "canUseWellKnown"),
  (i.customDomainRecoverUpsell = "customDomainRecoverUpsell"),
  (i.domainToBuyUpsell = "domainToBuyUpsell"),
  i
))(w || {});
function S(e) {
  return e in w;
}
function j(e, s) {
  return e !== null ? e : s.abTests > 0 ? "abTests" : null;
}
function m(e, s, r) {
  return e.find(({ resourceLimits: t }) => (t[r] ?? 1 / 0) > (s[r] ?? 1 / 0))?.licenseType ?? null;
}
function c(e, s, r) {
  return e.find(({ featureFlags: t }) => t[s] === r)?.licenseType ?? null;
}
function D(e, s, r, t, o) {
  let n = r
    .filter(({ licenseType: a }) => T(a, s) && f(a) && a !== "basicSite2025")
    .filter(({ resourceLimits: a, licenseType: u }) => !A(s, o, a) && !L(u));
  switch (e) {
    case "pages":
      return m(n, t, "pages");
    case "fileUploadLimitInMB":
      return m(n, t, "fileUploadLimitInMB");
    case "staticFiles":
      return m(n, t, "staticFiles");
    case "cmsCollections":
      return m(n, t, "cmsCollections");
    case "cmsItems":
      return m(n, t, "cmsItems");
    case "canUseEditorPermissions":
      return c(n, "canUseEditorPermissions", "on");
    case "canPublishToCustomDomain":
    case "customDomainRecoverUpsell":
    case "domainToBuyUpsell":
      return c(n, "canPublishToCustomDomain", "on");
    case "canInviteEditors":
    case "canInviteProjectEditors":
      return m(n, t, "maxEditors");
    case "translatableWords":
    case "localeAddon":
      return m(n, t, "maxLocales");
    case "canUseBranching":
      return c(n, "canUseBranching", "on");
    case "canUseUTMTracking":
      return c(n, "canUseUTMTracking", "on");
    case "canUseFunnels":
      return c(n, "canUseFunnels", "upsell");
    case "canUseTriggers":
      return c(n, "canUseTriggers", "upsell");
    case "abTests":
      return m(n, t, "maxAbTests");
    case "trackingEventsLimit":
      return m(n, t, "maxTrackingEventsLimit");
    case "canUseRedirects":
      return c(n, "canUseRedirects", "on");
    case "canUseInternalRewrites":
      return c(n, "canUseInternalRewrites", "on");
    case "canUseCustomHeaders":
      return c(n, "canUseCustomHeaders", "on");
    case "canUseCustomCanonicalUrl":
      return c(n, "canUseCustomCanonicalUrl", "upsell");
    case "canUseFirewall":
      return c(n, "canUseFirewall", "on");
    case "canUseCustomLocaleRegions":
      return c(n, "canUseCustomLocaleRegions", "on");
    case "canUsePasswordProtection":
      return c(n, "canUsePasswordProtection", "on");
    case "canUseStagingEnvironment":
      return c(n, "canUseStagingEnvironment", "on");
    case "canUseWellKnown":
      return c(n, "canUseWellKnown", "on");
    case "analyticsRangeInDays":
      return m(n, t, "analyticsRangeInDays");
    case "bandwidthInGB":
      return m(n, t, "bandwidthInGB");
    case "aiCredits":
      return m(n, t, "aiCredits");
  }
}
var p = class extends Error {
  code;
  data;
  constructor(s) {
    let r = "Failed to upload";
    (s?.error?.message && (r = s.error.message),
      super(r),
      typeof s?.code == "number" && (this.code = s.code),
      typeof s?.data == "object" && s.data && (this.data = s.data));
  }
};
async function K(e, s = 200, r = "image/png", t) {
  let o = Math.min(s / e.naturalWidth, s / e.naturalHeight);
  if (o >= 1) return null;
  let l = document.createElement("canvas");
  ((l.width = Math.floor(e.naturalWidth * o)), (l.height = Math.floor(e.naturalHeight * o)));
  let n = l.getContext("2d");
  if (!n) throw Error("Failed to create context");
  return (
    n.drawImage(e, 0, 0, l.width, l.height),
    new Promise((a, u) => {
      l.toBlob(
        (d) => {
          if (!d) {
            u(Error("Failed to create Blob"));
            return;
          }
          a(d);
        },
        r,
        t
      );
    })
  );
}
function N(e) {
  let s = URL.createObjectURL(e),
    r = new Image();
  return new Promise((t, o) => {
    ((r.onerror = (l) => {
      (URL.revokeObjectURL(s), o(l));
    }),
      (r.onload = () => {
        (URL.revokeObjectURL(s), t(r));
      }),
      (r.src = s));
  });
}
function W(e, s, r) {
  let t = new XMLHttpRequest();
  return (
    (t.withCredentials = !0),
    r && (t.upload.onprogress = (o) => r(o.loaded / o.total)),
    new Promise((o, l) => {
      ((t.onload = () => {
        let n;
        try {
          n = JSON.parse(t.responseText);
        } catch {}
        if (t.status < 200 || t.status > 299 || n?.error) {
          l(new p(n));
          return;
        }
        o(n);
      }),
        (t.onerror = () => {
          l(new p());
        }),
        t.open("POST", e),
        h.withAuthorizationHeader({ headers: C }).then(({ headers: n }) => {
          if (n) {
            let u = typeof n.entries == "function" ? n.entries() : Object.entries(n);
            for (let [d, y] of u) t.setRequestHeader(d, y);
          }
          let a = new FormData();
          for (let [u, d] of Object.entries(s))
            Array.isArray(d)
              ? a.set(u, ...d)
              : d instanceof File
                ? a.set(u, d, d.name)
                : a.set(u, d);
          t.send(a);
        }));
    })
  );
}
var P = {
  locale: "Locale",
  advancedAnalytics: "Convert",
  customProxySetup: "Advanced hosting",
  bandwidth: "Bandwidth",
  pages: "Pages",
  cmsCollections: "CMS collections",
  cmsItems: "CMS items",
};
function X(e) {
  return e === "advancedAnalytics" || e === "customProxySetup";
}
var z = (e) => P[e];
function J(e) {
  return e ? e in P : !1;
}
var x = { aiCredits: "Monthly credits", contentEditors: "Content editor seat" };
function Q(e) {
  return x[e];
}
function Z(e) {
  return e ? e in x : !1;
}
function $(e) {
  return e === "month" ? "content_editors_monthly" : "content_editors_yearly";
}
function ee(e) {
  switch (e) {
    case "aiCredits":
      return !1;
    case "contentEditors":
      return !0;
    default:
      g(e);
  }
}
export {
  X as a,
  z as b,
  J as c,
  Q as d,
  Z as e,
  $ as f,
  ee as g,
  A as h,
  E as i,
  O as j,
  S as k,
  j as l,
  D as m,
  p as n,
  K as o,
  N as p,
  W as q,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-GXUPTXLO.mjs.map
