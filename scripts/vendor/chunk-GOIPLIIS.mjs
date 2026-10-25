import { b as m, h as y, n as C, q as S } from "./chunk-Y3GZLMBF.mjs";
import { a as v } from "./chunk-EQBCTBZ3.mjs";
import { a as E } from "./chunk-UZNETSBG.mjs";
import { b as p } from "./chunk-4JY5UMT2.mjs";
var u = typeof window < "u" && !("Deno" in globalThis) ? window.location.hostname : void 0,
  P = !!(u && ["web.framerlocal.com", "localhost", "127.0.0.1", "[::1]"].includes(u)),
  b = (() => {
    if (!u) return;
    if (P) return { main: u, previewLink: void 0 };
    let n = /^(([^.]+\.)?beta\.)?((?:development\.)?framer\.com)$/u,
      e = u.match(n);
    if (e?.[3]) return { previewLink: e[2] && e[0], main: e[3] };
  })(),
  N = {
    hosts: b,
    isDevelopment: b?.main === "development.framer.com",
    isProduction: b?.main === "framer.com",
    isLocal: P,
  },
  V = /^(?:[a-z]+:\/\/)?(?:[^@/]*@)?(\[[^\]]+\]|[^:/\s?#]+)/iu,
  F = new Set(["localhost", "127.0.0.1", "[::1]"]);
function ee(n) {
  return ((n.includes(":") || n.includes("/")) && (n = V.exec(n)?.[1] ?? ""), F.has(n));
}
function c(n) {
  let o = n.length & 3,
    i = n.length - o,
    r = 0,
    a = 0;
  for (; a < i;) {
    let l =
      (n.charCodeAt(a) & 255) |
      ((n.charCodeAt(++a) & 255) << 8) |
      ((n.charCodeAt(++a) & 255) << 16) |
      ((n.charCodeAt(++a) & 255) << 24);
    (++a,
      (l = ((l & 65535) * 3432918353 + ((((l >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (l = (l << 15) | (l >>> 17)),
      (l = ((l & 65535) * 461845907 + ((((l >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (r ^= l),
      (r = (r << 13) | (r >>> 19)));
    let x = ((r & 65535) * 5 + ((((r >>> 16) * 5) & 65535) << 16)) & 4294967295;
    r = (x & 65535) + 27492 + ((((x >>> 16) + 58964) & 65535) << 16);
  }
  let s = 0;
  return (
    o >= 3 && (s ^= (n.charCodeAt(a + 2) & 255) << 16),
    o >= 2 && (s ^= (n.charCodeAt(a + 1) & 255) << 8),
    o >= 1 &&
      ((s ^= n.charCodeAt(a) & 255),
      (s = ((s & 65535) * 3432918353 + ((((s >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (s = (s << 15) | (s >>> 17)),
      (s = ((s & 65535) * 461845907 + ((((s >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (r ^= s)),
    (r ^= n.length),
    (r ^= r >>> 16),
    (r = ((r & 65535) * 2246822507 + ((((r >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 13),
    (r = ((r & 65535) * 3266489909 + ((((r >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function R(n, e) {
  let t = new Set(n);
  return (t.add("on"), t.add("off"), { variants: [...t], value: e });
}
var U = {};
function oe(n) {
  return U[n];
}
function B(n) {
  let e = {};
  for (let t in n) {
    let o = n[t];
    if (typeof o == "object") ((e[t] = o.value), (U[t] = o.variants));
    else if (typeof o == "string") e[t] = o;
    else throw Error(`Invalid experiment value: ${o}`);
  }
  return e;
}
var w = B({
    addViewBox: "off",
    advancedAgentControls: "off",
    advancedHostingFirewall: "on",
    "agent-2026-w25": "on",
    "agent-2026-w26": "on",
    "agent-2026-w28": "on",
    "agent-2026-w29": "on",
    "agent-2026-w30": "on",
    "agent-2026-w31": "on",
    "agent-2026-w32": "on",
    "agent-2026-w37": "off",
    "agent-2026-w38": "off",
    agentAlphaModels: "on",
    agentBandwidthInsights: "on",
    agentBranchScriptApi: "on",
    agentContextRow: "on",
    agentControls: "off",
    agentEffortSelect: "on",
    agentFramerConvertTriggers: "off",
    agentGeneratedShaders: "off",
    agentGPT6SolLunaViaOpenRouter: "off",
    agenticAnalyticsV2: "off",
    agentIconSetIds: "on",
    agentIntegrationProfound: "off",
    agentIntegrations: "off",
    agentLocalization: "off",
    agentModelSpecificChecklist: "on",
    agentNodeAttributeChangeTracking: "off",
    agentRating: "off",
    agentScriptComponentLookup: "on",
    agentSkills: "on",
    agentStyleOnSelect: "off",
    agentTerraLunaViaOpenRouter: "on",
    agentTsdocApi: "off",
    agentUseAnthropicMessagesAPI: "off",
    agentUseAnthropicServerSideCompaction: "on",
    agentUseOpenAIResponsesAPI: "off",
    agentUseOpenAIServerSideCompaction: "off",
    agentVersionHistory: "off",
    agentVisionImagePixelLimit: "on",
    aiCreditsIntroExperiment: "off",
    alignLocalizationAiModelPicker: "off",
    analyticsFunnelGroupBy: "off",
    analyticsRedesign: "off",
    apps: "off",
    appShortcutsWhileEditingText: "on",
    ariaProperties: "on",
    automations: "off",
    bulkHierarchyRehydrate: "off",
    canvasPerfImperativeCamera: "off",
    canvasPerfSkipSelectionPostProcess: "off",
    canvasRepeatSelection: "off",
    canvasSwitch: "off",
    carouselEffect: "off",
    checkoutDrawer: "off",
    checkServerSideRouter: "on",
    clientModuleIds: "off",
    cmsCodeGenWorker: "off",
    cmsMultiplayerCursors: "on",
    cmsSqlite: "off",
    cmsTablePlaceholderRow: "on",
    codeLinkPlugin: "off",
    codingAgentModelSelect: "off",
    collectionLocalModuleImportMapEntries: "off",
    componentRichTextContentOverlay: "on",
    componentSlotsAreChildNodes: "off",
    confirmInviteSeats: "off",
    crdtTreeEditUndo: "off",
    dataTreeOnlyWrite: "off",
    debugEditWhileLoadingRuntimeChecks: "off",
    deferCastleUntilLoaded: "off",
    deferModulesUntilImported: "off",
    deferNonVisibleModuleEvaluation: "off",
    deferPreviewModulesUntilRequested: "off",
    disableHoverOnMobile: "off",
    domainsRedesign: "off",
    dummyTest: "off",
    earlyProjectSocket: "on",
    editorBarDisableFrameAncestorsSecurity: "off",
    effectsInDesignPages: "off",
    externalVectorIcons: "on",
    F1KeyboardCreditsWidget: "off",
    fastLargeSelection: "off",
    fastLocalization: "off",
    fastPreview: "off",
    fastPreviewLazy: "off",
    fastTreeLibrary: "on",
    fixedSizeImageSrcset: "off",
    granularPermissions: "off",
    harness2: "off",
    imageGeneration: "off",
    importMapPruning: "off",
    invoke: "off",
    jsonRichTextStorage: R(["cms", "canvas,cms"], "cms"),
    layersVirtualization: "off",
    layoutScroll: "off",
    lazySmartComponentLocales: "on",
    liveZoomStepScaleFactor: "on",
    localCacheSyncWorker: "off",
    localizationModelUpdate: "off",
    localizationProgressSummaries: "off",
    localizationTreeControls: "off",
    localizationUiUpdate: "off",
    localizationWaitsForAllModules: "off",
    localizedLinks: "off",
    locationControl: "off",
    locationTriggerConditions: "off",
    motionDivToDiv: "off",
    motionValues: "off",
    newAssetPanel: "off",
    newQuickActions: "off",
    noNodeSetters: "off",
    objectVariables: "off",
    paneEdgeDoubleClickReset: "off",
    passkeys: "off",
    pathRadiusSmoothing: "on",
    persistDataTreeAcrossFrames: R(["persistOnWrite"], "off"),
    pinnedWorkspaces: "off",
    preloadLoaderScheduling: "on",
    preventVariableDeletion: "on",
    previewSharing: "off",
    prioritizedInitialModuleEvaluation: "on",
    projectAuditSkill: "off",
    publishingRecoveryProgress: "off",
    publishStaleModuleErrors: "off",
    quietCanvasImageUploads: "off",
    raindropSelfDiagnostics: "on",
    rebaseBranches: "off",
    reconnectInPlace: "off",
    recoverStaleModules: "off",
    richTextBlockSelection: "on",
    richTextVideoModule: "on",
    scopedComponentElementIds: "on",
    scrollRestoration: "on",
    showCanonicalUrlAsDefault: "off",
    siteCustomLogin: "off",
    siteFramerLogin: "off",
    skipPublishingLocalesFallingBackToDraft: "on",
    slabLatestMap: "off",
    smartComponentResolvesOwnDefaults: "off",
    synchronousNavigationOnDesktop: "off",
    syncProcessWhenReady: "off",
    textBalanceRequiresWrap: "off",
    transientLocalModuleTreeData: "off",
    translateAllProgressToast: "off",
    translationTransforms: "off",
    treeStoreReadsUpdaterTree: "off",
    unifiedStackActions: "off",
    verifyTreeOnCommit: "off",
    yieldOnTap: "off",
    yieldThirdPartyScripts: "on",
  }),
  z = [
    "agentIntegrationProfound",
    "agentIntegrations",
    "dataTreeOnlyWrite",
    "deferModulesUntilImported",
    "deferNonVisibleModuleEvaluation",
    "deferPreviewModulesUntilRequested",
    "granularPermissions",
    "invoke",
    "jsonRichTextStorage",
    "noNodeSetters",
    "treeStoreReadsUpdaterTree",
  ];
function re(n) {
  return z.includes(n);
}
var T = {
    agentGeneratedShaders: "on",
    analyticsRedesign: "on",
    bulkHierarchyRehydrate: "on",
    cmsCodeGenWorker: "on",
    codeLinkPlugin: "on",
    codingAgentModelSelect: "on",
    crdtTreeEditUndo: "on",
    debugEditWhileLoadingRuntimeChecks: "on",
    deferModulesUntilImported: "on",
    fastLargeSelection: "on",
    fastLocalization: "on",
    jsonRichTextStorage: "canvas,cms",
    layersVirtualization: "on",
    layoutScroll: "on",
    localizationModelUpdate: "on",
    localizationUiUpdate: "on",
    locationTriggerConditions: "on",
    noNodeSetters: "on",
    persistDataTreeAcrossFrames: "on",
    quietCanvasImageUploads: "on",
    slabLatestMap: "on",
    smartComponentResolvesOwnDefaults: "on",
    syncProcessWhenReady: "on",
    unifiedStackActions: "on",
  },
  I = {
    addViewBox: "on",
    "agent-2026-w37": "on",
    "agent-2026-w38": "on",
    agentControls: "on",
    agentFramerConvertTriggers: "on",
    agenticAnalyticsV2: "on",
    agentIntegrationProfound: "on",
    agentIntegrations: "on",
    agentLocalization: "on",
    agentStyleOnSelect: "on",
    agentTsdocApi: "on",
    agentVersionHistory: "on",
    alignLocalizationAiModelPicker: "on",
    automations: "on",
    canvasPerfImperativeCamera: "on",
    canvasPerfSkipSelectionPostProcess: "on",
    checkoutDrawer: "on",
    clientModuleIds: "on",
    deferNonVisibleModuleEvaluation: "on",
    disableHoverOnMobile: "on",
    effectsInDesignPages: "on",
    harness2: "on",
    imageGeneration: "on",
    localCacheSyncWorker: "on",
    localizedLinks: "on",
    motionDivToDiv: "on",
    newQuickActions: "on",
    paneEdgeDoubleClickReset: "on",
    passkeys: "on",
    pinnedWorkspaces: "on",
    projectAuditSkill: "on",
    recoverStaleModules: "on",
    synchronousNavigationOnDesktop: "on",
    textBalanceRequiresWrap: "on",
    translateAllProgressToast: "on",
    translationTransforms: "on",
    treeStoreReadsUpdaterTree: "on",
    verifyTreeOnCommit: "on",
    yieldOnTap: "on",
  },
  k = {
    agentFramerConvertTriggers: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !1,
      channels: ["beta"],
      variant: "on",
    },
    agenticAnalyticsV2: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !1,
      channels: ["beta"],
      variant: "on",
    },
    cmsCodeGenWorker: {
      sample: 0.1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    crdtTreeEditUndo: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    harness2: [
      {
        sample: 1,
        scope: "Team",
        includeEnterprise: !0,
        channels: ["beta"],
        dependencies: { localCacheSyncWorker: "on" },
        variant: "on",
      },
      {
        sample: 0.1,
        scope: "Team",
        includeEnterprise: !0,
        channels: ["stable"],
        dependencies: { localCacheSyncWorker: "on" },
        variant: "on",
      },
    ],
    imageGeneration: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !0,
      channels: ["beta"],
      variant: "on",
    },
    slabLatestMap: {
      sample: 0.1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    syncProcessWhenReady: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
  };
function A() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for("Symbol.dispose"),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
var d = !1,
  g = class {
    activeConfig;
    activeOverrides = [];
    initialConfig;
    listeners = new Map();
    assertOnUse;
    updated;
    #e;
    constructor(e, { assertIfUsedBeforeUpdate: t = !1 } = {}) {
      ((this.initialConfig = G(e)),
        (this.activeConfig = { ...this.initialConfig }),
        (this.assertOnUse = !1),
        (this.updated = new Promise((o) => {
          this.#e = o;
        })));
    }
    addListener(e, t) {
      let o = this.listeners.get(e);
      (o || ((o = new Set()), this.listeners.set(e, o)), o.add(t));
    }
    get(e) {
      this.assertOnUse &&
        p(d, () => `Tried to read state of ${e} before update, await on .updated first`);
      for (let t = this.activeOverrides.length - 1; t >= 0; t--) {
        let o = this.activeOverrides[t][e];
        if (m(o)) return o;
      }
      return this.activeConfig[e];
    }
    getInitial(e) {
      return this.initialConfig[e];
    }
    is(e, t) {
      this.assertOnUse &&
        p(d, () => `Tried to read state of ${e} before update, await on .updated first`);
      let o = this.isActiveByOverrides(e, t);
      return C(o) ? this.activeConfig[e] === t : o;
    }
    isOn(e) {
      return (
        this.assertOnUse &&
          p(d, () => `Tried to read the state of ${e} before update, await on .updated first`),
        this.is(e, "on")
      );
    }
    getVariantName(e) {
      this.assertOnUse &&
        p(d, () => `Tried to read the state of ${e} before update, await on .updated first`);
      let t = this.get(e);
      return t === "on" || t === "off" ? e : `${e}_${t}`;
    }
    async didUpdateAndIsOn(e) {
      return (await this.updated, this.isOn(e));
    }
    overrideForTest(e) {
      let t = this.assertOnUse;
      ((this.assertOnUse = !1), this.activeOverrides.push(e));
      let o = !1,
        i = Object.assign(
          () => {
            if (!o) {
              if (this.activeOverrides.pop() !== e)
                throw Error("Something went wrong with experiment overrides");
              ((o = !0), (this.assertOnUse = t));
            }
          },
          {
            [A()]() {
              i();
            },
          }
        );
      return i;
    }
    removeListener(e, t) {
      this.listeners.get(e)?.delete(t);
    }
    update(e) {
      this.assertOnUse = !1;
      for (let t in e) {
        let o = L(e[t]);
        if (!m(o) || o === this.activeConfig[t]) continue;
        this.activeConfig[t] = o;
        let i = this.listeners.get(t);
        i && i.forEach((r) => r(o, t));
      }
      this.#e && (this.#e(), (this.#e = void 0));
    }
    withOverridesForTest(e, t) {
      let o = this.overrideForTest(e);
      try {
        return (this.signalForTests(e), t());
      } finally {
        (o(), this.signalForTests(e));
      }
    }
    signalForTests(e) {
      for (let t in e) {
        let o = this.listeners.get(t);
        if (!o) continue;
        let i = this.get(t);
        o.forEach((r) => r(i, t));
      }
    }
    isActiveByOverrides(e, t) {
      for (let o = this.activeOverrides.length - 1; o >= 0; o--) {
        let i = this.activeOverrides[o];
        if (e in i) return i[e] === t;
      }
    }
    serialize() {
      let e = {};
      for (let t in this.activeConfig) e[t] = this.get(t);
      return e;
    }
    diffFromInitial() {
      let e = {};
      for (let t in this.initialConfig) {
        let o = this.get(t);
        this.initialConfig[t] !== o && (e[t] = o);
      }
      return e;
    }
  };
function L(n) {
  return typeof n == "boolean" ? (n ? "on" : "off") : n;
}
function G(n) {
  let e = {};
  for (let t in n) e[t] = L(n[t]);
  return e;
}
function ce(n, e) {
  d = !0;
  try {
    return n.get(e);
  } finally {
    d = !1;
  }
}
var H = 4294967295,
  f = {
    hashes: { Project: null, Team: null, User: null },
    isEnterprise: { Project: null, Team: null, User: null },
    channel: null,
  };
function he(n) {
  ((f.isEnterprise.Project = n.license.type === "enterpriseSite"), (f.hashes.Project = c(n.id)));
}
function M(n) {
  ((f.isEnterprise.User = n.spaces.some((e) => e.license?.type === "enterprise")),
    (f.hashes.User = c(n.id)));
}
function xe(n, e) {
  ((f.isEnterprise.Team = e === "enterprise"), (f.hashes.Team = c(n)));
}
function ve(n) {
  f.channel = n;
}
function K(n, { sample: e, scope: t, variant: o, includeEnterprise: i, channels: r }) {
  if (r)
    if (f.channel) {
      if (!r.includes(f.channel)) return !1;
    } else return !1;
  let a = e * H,
    s = c(n),
    l = c(o);
  return S(f.hashes[t]) || S(f.isEnterprise[t]) || (!i && f.isEnterprise[t])
    ? !1
    : (f.hashes[t] ^ s ^ l) >>> 0 < a;
}
function j(n = k) {
  let e = {};
  return (
    Object.keys(n).forEach((t) => {
      if (!n[t]) return;
      let o = y(n[t]) ? n[t] : [n[t]];
      for (let i of o) {
        if (!K(t, i)) continue;
        e[t] = i.variant;
        let r = i.dependencies ?? [];
        if (y(r)) for (let a of r) e[a] = i.variant;
        else Object.assign(e, r);
        break;
      }
    }),
    e
  );
}
typeof window < "u" && window.framerUser && M(window.framerUser);
var h = new g(Y());
h.update(W());
var q = [];
function Ee() {
  let n = {};
  for (let e of q) n[`experiment_${e}`] = h.isOn(e);
  return n;
}
function O() {
  if (typeof window > "u") return "experiments";
  let n = v(window)?.channel;
  return n ? `experiments-${n}` : "experiments";
}
function D() {
  let n = {};
  if (typeof window > "u") return {};
  let e = v(window);
  if (!e) return n;
  let { channel: t, override: o } = e,
    i = o === "tunnel" && N.isDevelopment;
  return (
    (t === "alpha" || t === "local" || i) && Object.assign(n, T, I),
    t === "beta" && Object.assign(n, T),
    n
  );
}
function J() {
  let n = {};
  try {
    let e = JSON.parse(localStorage[O()] || "{}");
    Object.assign(n, e);
  } catch {}
  return n;
}
function _() {
  if (typeof window > "u") return {};
  if (!Q(window)) return {};
  try {
    return JSON.parse(window.experiments);
  } catch {}
  return {};
}
function Q(n) {
  return "experiments" in n && m(n.experiments);
}
function X() {
  let n = {};
  if (typeof window > "u") return {};
  for (let e of new URLSearchParams(window?.location.search).getAll("experiment")) {
    let [t, o = "on"] = e.split("=");
    n[t] = o;
  }
  return n;
}
function Z() {
  let n = X();
  try {
    let e = { ...JSON.parse(sessionStorage.getItem("experiments") || "{}"), ...n };
    return (
      Object.keys(n).length > 0 && sessionStorage.setItem("experiments", JSON.stringify(e)),
      e
    );
  } catch {
    return n;
  }
}
function Y() {
  return { ...w, ...D() };
}
function Ce({ resetStorage: n, resetSession: e } = {}) {
  if (!(typeof window > "u")) {
    if ((n && localStorage.removeItem(O()), e)) {
      sessionStorage.removeItem("experiments");
      let t = new URL(window.location.href);
      (t.searchParams.delete("experiment"),
        window.history.replaceState(window.history.state, "", t.href));
    }
    h.update({ ...w, ...W() });
  }
}
function W() {
  return { ...j(), ...D(), ...J(), ..._(), ...Z() };
}
typeof window < "u" && window.localStorage.removeItem("useThemeLogo");
function Pe(n) {
  let e = O(),
    t = {};
  try {
    t = JSON.parse(localStorage[e] || "{}");
  } catch {}
  let o = { ...t, ...n };
  for (let i of E(o)) h.getInitial(i) === o[i] && delete o[i];
  try {
    Object.keys(o).length === 0
      ? localStorage.removeItem(e)
      : localStorage.setItem(e, JSON.stringify(o));
  } catch {}
}
export {
  oe as a,
  w as b,
  re as c,
  T as d,
  I as e,
  k as f,
  N as g,
  ee as h,
  A as i,
  g as j,
  ce as k,
  c as l,
  he as m,
  xe as n,
  ve as o,
  h as p,
  Ee as q,
  Y as r,
  Ce as s,
  Pe as t,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-GOIPLIIS.mjs.map
