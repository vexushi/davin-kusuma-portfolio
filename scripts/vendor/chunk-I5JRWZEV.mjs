import {
  E as Ue,
  F as De,
  G as Fe,
  Zb as Ve,
  _b as Ne,
  b as Ce,
  n as Ee,
} from "./chunk-OADL7SUZ.mjs";
import { E as $e, e as Se, h as je, i as Le } from "./chunk-TSXGKMFZ.mjs";
import { va as Te } from "./chunk-ZXUJJV4E.mjs";
import { a as te } from "./chunk-LKTN6764.mjs";
import { p as ke } from "./chunk-Y4S7CDEG.mjs";
import { la as W } from "./chunk-2K43M4W6.mjs";
import { c as we } from "./chunk-TWMIZGIY.mjs";
import { Kj as N, Qi as Ie } from "./chunk-3W5IVLGF.mjs";
import { _ as Re } from "./chunk-DFANM4IW.mjs";
import { c as qe, d as xe } from "./chunk-RM2LMMPT.mjs";
import {
  Ar as ge,
  Dr as Pe,
  Je as D,
  Rk as b,
  Rr as F,
  Tk as de,
  Ud as ne,
  Uk as ue,
  Wk as me,
  af as ce,
  bf as I,
  sc as ie,
} from "./chunk-KHAT6QH3.mjs";
import { c as pe } from "./chunk-TXCWPKWI.mjs";
import { a as We } from "./chunk-T3Y4NA3I.mjs";
import { $ as V } from "./chunk-HOX2J6M7.mjs";
import { d as Me } from "./chunk-6BSMLXLG.mjs";
import { a as he } from "./chunk-K6L5GVTR.mjs";
import { a as Ae } from "./chunk-ABWDV3RU.mjs";
import { r as be, v as r } from "./chunk-KBPGUKJ2.mjs";
import { b as ye } from "./chunk-EWVTS3IL.mjs";
import { a as T } from "./chunk-JMJL2ZVN.mjs";
import { I as le } from "./chunk-KFHAD7KU.mjs";
import { e as L } from "./chunk-GHDF5CG4.mjs";
import { b as ve } from "./chunk-GBWZWM2Q.mjs";
import { c as fe } from "./chunk-2YDXRHM5.mjs";
import { a as ae, b as x } from "./chunk-WRBBN7SY.mjs";
import { a as k } from "./chunk-RNHTTH2C.mjs";
import { a as re } from "./chunk-2FCXHKEL.mjs";
import { b as S, n as j } from "./chunk-Y3GZLMBF.mjs";
import { a as q } from "./chunk-SWYZG2NI.mjs";
import { b as se, c as oe } from "./chunk-4JY5UMT2.mjs";
import { b as C } from "./chunk-I5EFRSXX.mjs";
import { i as ee } from "./chunk-WBI6GGAG.mjs";
import { a as Z } from "./chunk-YRQ7G4QH.mjs";
import { e as w } from "./chunk-WLHSDIGQ.mjs";
async function vt() {
  let n = await be.getAccessToken();
  if (n) return ["framer.bearer.v1", n];
}
function wt(n) {
  let e = ve(),
    t = new URL(e.app);
  return (
    (t.protocol = t.protocol === "http:" ? "ws:" : "wss:"),
    (t.pathname = `/projects/${n}/socket`),
    t.href
  );
}
function Be() {
  he("https://www.framer.com/downloads/");
}
var ze = w(q(), 1),
  rt = {
    type: "add",
    variant: "info",
    action: { title: "Install", onClick: Be },
    primaryText: "Use latest desktop app",
    secondaryText: "to sample colors.",
    key: "install-desktop-app",
    duration: 5e3,
    showCloseButton: "never",
  };
function St({ channel: n, toast: e }) {
  (0, ze.useEffect)(() => {
    if (!n) return;
    let t,
      s = {
        async sampleColor() {
          if (window.EyeDropper) {
            t?.abort();
            let a = new AbortController();
            t = a;
            let i = new window.EyeDropper();
            try {
              return {
                color: (
                  await i.open({ signal: a.signal }).catch((p) => {
                    if (p?.name === "AbortError") return { sRGBHex: void 0 };
                    throw p;
                  })
                ).sRGBHex,
              };
            } finally {
              t === a && (t = void 0);
            }
          }
          return (e(rt), {});
        },
      },
      o = te.on(n).register(s);
    return () => {
      (t?.abort(), o());
    };
  }, [n, e]);
}
var M = w(q(), 1);
var m = w(re(), 1),
  $ = "link",
  Oe = ["*"];
function B(n) {
  return `computed-link-${n}`;
}
var ds = M.default.memo(function ({
  control: e,
  controlKey: t,
  controlProp: s,
  onChange: o,
  onContextMenu: a,
  sortable: i,
  traitTypeKeys: c,
  deleteEnabled: p,
  deleteTitle: A,
  onDelete: E,
  supportsVariables: v = !1,
  supportsComputedValues: R = !1,
  supportsFetchDataValues: H = !1,
  nodeIds: G,
}) {
  let u = fe(),
    _ = (0, M.useMemo)(() => G ?? [], [G]),
    Ke = (0, M.useMemo)(() => Ue(t || pe()), [t]),
    { value: f } = s,
    l = I(f) || b(f) ? f : ae,
    P = (d) => {
      (o(t, (g) => ({ ...g, value: d }), _), Ce(l, d));
    },
    U = (d) => {
      let { defaultValue: g } = e;
      return S(g) ? g : d;
    },
    Je = () => {
      let d = U();
      j(d) && P(d);
    },
    Ye = () => {
      P(void 0);
    },
    Qe = u.scheduler.wrapHandler((d) => {
      let g = e.title || L(t),
        ot = S(l) ? l : U("");
      u.beginUndoGroup();
      let X = Ie({ engine: u, scopeId: d, type: $, name: g, initialValue: ot });
      (X && P(X), u.endUndoGroup());
    }),
    K = u.scheduler.wrapHandler(() => {
      I(l) && P(void 0);
    }),
    Xe = u.scheduler.wrapHandler(() => {
      let d = ne({ type: "link", value: b(f) ? f : void 0 }),
        g = ce("link", d, []);
      return (J(g), g);
    }),
    J = u.scheduler.wrapHandler((d) => {
      (P(d), Re.navigation.presentPopout(B(t)));
    }),
    Ze = i ? void 0 : e.title || L(t),
    Y = U(),
    Q = !D(l) && !b(l),
    et = Ve(u, l),
    tt = nt(u, l),
    st = S(Y) && b(f) && !me(f, ue({ url: Y }));
  return (0, m.jsx)(Te, {
    title: Ze,
    onContextMenu: a,
    onResetToDefault: Je,
    resetToDefaultEnabled: st,
    variableType: N[$],
    allowedFileTypes: Oe,
    variableCreationType: $,
    onCreateVariable: Qe,
    onRemoveDynamicValue: K,
    dynamicValue: I(f) ? f : null,
    onSelectVariable: P,
    traitTypeKeys: c,
    withReorderControl: i,
    reorderColumnCount: 2,
    deleteEnabled: p,
    deleteTitle: A,
    onDelete: E,
    supportsVariables: v,
    supportsComputedValues: R,
    computedValuePopoutId: B(t),
    onSelectComputedValue: J,
    supportsFetchDataValues: H,
    onSelectFetchDataValue: Xe,
    children: I(l)
      ? (0, m.jsx)(Ee, {
          title: e.title || L(t),
          value: l,
          outputControl: e,
          expectedType: N[$],
          allowedFileTypes: Oe,
          popoutId: B(t),
          onRemove: K,
          onChangeDynamicValue: P,
          nodeIds: _,
          supportsComputedValues: R,
          supportsFetchDataValues: H,
          controlReferenceInfo: void 0,
        })
      : (0, m.jsx)($e, {
          id: Ke,
          sortable: i,
          popout: (0, m.jsx)(Ne, {
            link: x(l) ? void 0 : l,
            onChange: P,
            supportsVariables: v,
            supportsPageLinks: it(u),
            supportsSlugVariables: v,
          }),
          navigationTitle: "Link",
          displayDivider: !0,
          title: x(l) ? "Add\u2026" : et,
          previewWithoutWrapper: !0,
          preview: (0, m.jsx)(at, { isSuggestion: Q, icon: tt }),
          onDelete: b(l) ? Ye : void 0,
          titleColor: Q ? T.inputLabel : void 0,
        }),
  });
});
function at({ isSuggestion: n, icon: e }) {
  let t = n ? T.swatchBackgroundPlaceholderForLink : T.swatchBackgroundForLink;
  return (0, m.jsx)("span", {
    style: { display: "flex", marginLeft: 3, color: t },
    children: e ?? (0, m.jsx)(Se, {}),
  });
}
function it(n) {
  if (!ye(n)) return !0;
  let { scopeType: e } = n.stores.scopeStore;
  switch (e) {
    case "CanvasPage":
    case "DesignPage":
      return !1;
    default:
      return !0;
  }
}
function nt(n, e) {
  if (!de(e)) return;
  let { webPageId: t, pathVariables: s } = e;
  if (!s) return;
  let o = n.tree.getNodeWithTrait(t, ie);
  if (!o) return;
  let a = n.componentLoader.dataForIdentifier(o.dataIdentifier);
  if (!a) return;
  let i = a.annotations?.framerSlug;
  if (!i) return;
  let c = s[i];
  if (!D(c)) return;
  let p = F(ge, i);
  if (c.id === p) return (0, m.jsx)(Le, {});
  let A = F(Pe, i);
  if (c.id === A) return (0, m.jsx)(je, {});
}
function z(n) {
  return `${n.ownerType}::${n.key}`;
}
var He = class {
  constructor(e) {
    this.api = e;
    this.assetUpdatesEmitter.emit({});
  }
  api;
  assetUpdatesEmitter = new C();
  currentAssets = new Map();
  lastUpdatedAt = void 0;
  get latestUpdateTimestamp() {
    return this.lastUpdatedAt;
  }
  #e = new we({
    delay: 16,
    maxDelay: 64,
    task: async () => {
      let e = await this.api.getAssets({ updatedFrom: this.lastUpdatedAt });
      (this.lastUpdatedAt === void 0 ? this.updateAll(e.assets) : this.updatePartial(e.assets),
        e.lastUpdatedAt && (this.lastUpdatedAt = e.lastUpdatedAt));
    },
  });
  assetUpdatesStream = this.assetUpdatesEmitter.newStream;
  async refresh() {
    this.#e.debounce();
  }
  async refreshFully() {
    ((this.lastUpdatedAt = void 0), await this.refresh());
  }
  updateAll(e) {
    ((this.currentAssets = new Map(e.map((t) => [z(t), t]))),
      this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) }));
  }
  updatePartial(e) {
    for (let t of e) this.currentAssets.set(z(t), t);
    this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
  }
  addAssets(e) {
    this.updatePartial(e);
  }
  deleteProjectAssets(e) {
    let t = !1;
    for (let s of e) t ||= this.currentAssets.delete(z({ ownerType: "project", key: s }));
    t && this.assetUpdatesEmitter.emit({ assets: Array.from(this.currentAssets.values()) });
  }
  uploadAsset = async (e) => {
    if (!this.api.uploadAsset) throw Error("Asset service is read only");
    let t = await this.api.uploadAsset(e);
    return (await this.refresh(), t);
  };
  duplicateAssets = async (e, t) => {
    if (!this.api.duplicateAssets) throw Error("Asset service is read only");
    let s = await this.api.duplicateAssets(e, t);
    return (this.addAssets(s), s);
  };
  async duplicateModuleAssets(e, t, s) {
    if (!this.api.duplicateModuleAssets) throw Error("Asset service is read only");
    let o = await this.api.duplicateModuleAssets(e, t, s);
    return (this.addAssets(o), o);
  }
  async duplicateWorkspaceAssets(e, t) {
    if (!this.api.duplicateWorkspaceAssets) throw Error("Asset service is read only");
    let s = await this.api.duplicateWorkspaceAssets(e, t);
    this.addAssets(s);
  }
  getAssetByFilename(e) {
    for (let t of this.currentAssets.values()) if (le(t) === e) return t;
  }
};
var Ge = class {
  constructor(e, t) {
    this.api = e;
    this.socket = t;
    t.onMessage(async (s) => {
      if (s.type !== "moduleEvents" || !this.emitter.hasStreams()) return;
      let o = await Promise.all(
        s.value.events.map(async (a) => {
          switch (a.type) {
            case "delete":
              return a;
            case "save":
              return { type: "save", module: await e.getModule({ moduleId: a.id }) };
            default:
              oe(a);
          }
        })
      );
      this.emitter.emit({ events: o });
    });
  }
  api;
  socket;
  emitter = new C();
  notify(e) {
    this.socket.send({ type: "moduleEvents", value: { events: e } });
  }
  async create(e) {
    let t = await this.api.createModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async delete(e) {
    (await this.api.deleteModule(e), this.notify([{ type: "delete", id: e.moduleId }]));
  }
  async restore(e) {
    let t = await this.api.restoreModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async getModuleDependencies(e) {
    return this.api.getModuleDependencies(e);
  }
  async list(e) {
    return this.api.listModules(e);
  }
  async listNamespaces() {
    return this.api.listNamespaces();
  }
  async listPublishedModules(e) {
    return this.api.listPublishedModules(e);
  }
  async lookUpModules(e) {
    return this.api.lookUpModules(e);
  }
  async publish(e) {
    return this.api.publishModule(e);
  }
  async promoteSaves(e) {
    let t = await this.api.promoteModuleSaves(e);
    return (this.notify(t.data.map((s) => ({ type: "save", id: s.id, saveId: s.saveId }))), t);
  }
  async save(e) {
    let t = await this.api.saveModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  async saveBatch(e) {
    let t = await this.api.saveModules(e);
    return (this.notify(t.data.map((s) => ({ type: "save", id: s.id, saveId: s.saveId }))), t);
  }
  async update(e) {
    let t = await this.api.updateModule(e);
    return (this.notify([{ type: "save", id: t.id, saveId: t.saveId }]), t);
  }
  moduleEventsStream(e) {
    return this.emitter.newStream(e);
  }
  async createNamespace(e) {
    return this.api.createNamespace(e);
  }
};
var h = w(q(), 1);
async function _e(n, e, t) {
  let s = `upload${Math.random()}`;
  try {
    t({
      type: "add",
      key: s,
      variant: "progress",
      primaryText: "Uploading remote file\u2026",
      duration: 1 / 0,
      showCloseButton: "never",
    });
    let o = await r.post(n, { url: e });
    return (
      t({
        type: "add",
        key: s,
        variant: "success",
        primaryText: "Your file",
        secondaryText: "has been uploaded.",
        duration: 1e4,
        moveToTop: !0,
      }),
      o
    );
  } catch (o) {
    throw (
      t({
        type: "add",
        key: s,
        variant: "error",
        primaryText: "Error uploading file.",
        secondaryText: "Please try again.",
        duration: 3e4,
        moveToTop: !0,
      }),
      o
    );
  }
}
var y = ee("useAPI"),
  O = class {
    constructor(e, t, s = k) {
      this.socket = e;
      this.projectId = t;
      this.dispatch = s;
    }
    socket;
    projectId;
    dispatch;
    apiBaseURL = Z().api;
    wait(e) {
      r.wait(e);
    }
    getACL() {
      r.get(`/web/projects/${this.projectId}/acl/`, { contentCollaboratorEnabled: !0 })
        .then(({ users: e, invites: t, accessRequests: s }) => {
          let o = e.map((i) => ({ ...i, kind: "user", role: i.role, permissions: i.permissions })),
            a = t.map((i) => ({ ...i, kind: "invite", role: i.role, permissions: i.permissions }));
          this.dispatch({
            type: "resetACL",
            acl: [...o, ...a],
            accessRequests: s.map((i) => ({ ...i, kind: "accessRequest" })),
          });
        })
        .catch((e) => y.error("Failed to get ACL:", e));
    }
    setInitialProject(e) {
      e.then((t) => {
        this.dispatch({ type: "setProject", project: t });
      }).catch((t) => y.error("Failed to set initial project:", t));
    }
    getProject() {
      r.get(`/web/projects/${this.projectId}`, { includeAiCreditLimit: "true" }, void 0, Ae())
        .then((e) => {
          this.dispatch({ type: "setProject", project: e });
        })
        .catch((e) => y.error("Failed to get project:", e));
    }
    async pollProject({ intervalMillis: e, attempts: t, stopCondition: s }) {
      let o = await ke(this.projectId, { intervalMillis: e, attempts: t, stopCondition: s });
      return (
        o.status === 0 &&
          (this.dispatch({ type: "setProject", project: o.project }),
          this.notifyProjectChange("metadata")),
        o
      );
    }
    async invite(e) {
      let t = await De(this.projectId, e);
      return (
        t.status === 0 &&
          (this.dispatch({ type: "updateACL", acl: [t.aclEntry] }),
          this.notifyProjectChange("acl")),
        t
      );
    }
    async removeInvite({ id: e }) {
      (await r.deleteRaw(`/web/projects/${this.projectId}/invites/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateUserPermissions(e) {
      let t = await Fe(this.projectId, e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    async requestAccess(e) {
      let t = await We(e);
      return (this.notifyProjectChange("acl"), t);
    }
    async grantProjectAccessRequest({ id: e }) {
      let t = await qe(e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    async denyProjectAccessRequest({ id: e }) {
      let t = await xe(e);
      return (t.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), t);
    }
    async forceRefreshACL() {
      (this.notifyProjectChange("acl"), this.getACL());
    }
    async removeUserPermissions({ id: e }) {
      (await r.deleteRaw(`/web/projects/${this.projectId}/acl/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateProject(e, t = !0) {
      t && this.dispatch({ type: "updateProject", changes: e });
      try {
        (await Me(this.projectId, e), this.getProject(), this.notifyProjectChange("metadata"));
      } catch (s) {
        throw (y.error("Failed to update project:", s), s);
      }
    }
    async subscribeToNotifications() {
      await r.postRaw(`/web/projects/${this.projectId}/threads/notifications/subscribe`);
    }
    async unsubscribeFromNotifications() {
      await r.postRaw(`/web/projects/${this.projectId}/threads/notifications/unsubscribe`);
    }
    async getAssets(e = {}) {
      let { updatedFrom: t } = e,
        s = `/web/v2/projects/${this.projectId}/assets/`;
      if (t) {
        let a = new URLSearchParams({ updatedFrom: t });
        s += `?${a.toString()}`;
      }
      let o = await r.get(s);
      if (!Array.isArray(o.assets)) {
        let a = new Error("malformed /projects/./assets/ response");
        throw (y.reportError(a, o), a);
      }
      return o;
    }
    async uploadAsset(e, { maxFileSize: t, onExceedsCustomMaxSize: s, onToast: o = k } = {}) {
      let a = new URL(`/web/projects/${this.projectId}/assets`, this.apiBaseURL).href,
        i = await V({
          endpoint: a,
          fieldName: "file",
          file: e,
          onToast: o,
          customMaxSize: t,
          onExceedsCustomMaxSize: s,
        });
      return (i && this.notifyProjectChange("assets"), i);
    }
    async uploadUserAsset(e, { maxFileSize: t, onExceedsCustomMaxSize: s, onToast: o = k } = {}) {
      let a = new URL("/web/users/assets", this.apiBaseURL).href;
      return V({
        endpoint: a,
        fieldName: "file",
        file: e,
        onToast: o,
        customMaxSize: t,
        onExceedsCustomMaxSize: s,
      });
    }
    async uploadAssetByURL(e, t = k) {
      let s = await _e(`/web/projects/${this.projectId}/assets/fetch`, e, t);
      return (s && this.notifyProjectChange("assets"), s);
    }
    async duplicateAssets(e, t) {
      if (this.projectId === t)
        return (y.warn("Attempted to duplicate assets for current project"), []);
      let s = await r.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceProjectId: t,
        keys: e,
      });
      return (s && this.notifyProjectChange("assets"), s.assets);
    }
    async duplicateWorkspaceAssets(e, t) {
      let s = await r.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceTeamId: t,
        keys: e,
      });
      return (s && this.notifyProjectChange("assets"), s.assets);
    }
    async duplicateModuleAssets(e, t, s) {
      let o = { moduleId: e, saveId: t };
      s && s.length > 0 && (o.keys = s);
      let a = await r.post(`/web/projects/${this.projectId}/assets/duplicate-module`, o);
      return (a && this.notifyProjectChange("assets"), a.assets);
    }
    async deleteAssets(e) {
      let t = await r.delete(`/web/projects/${this.projectId}/assets/batch`, { keys: e });
      return (this.notifyProjectChange("assetsInvalidated"), t);
    }
    async createModule(e) {
      let t = new FormData();
      return (
        this.addModuleRequestToForm(e, t),
        await r.postRaw("/modules/v1/modules/", t).then((o) => o.json())
      );
    }
    async deleteModule({ moduleId: e }) {
      await r.deleteRaw(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`);
    }
    async restoreModule({ moduleId: e, name: t }) {
      let s = {};
      return (t !== void 0 && (s.name = t), await r.post(`/modules/v1/modules/${e}/restore`, s));
    }
    async getModule({ moduleId: e, saveId: t }) {
      let s;
      return (
        t ? (s = `/modules/v1/modules/${e}/saves/${t}`) : (s = `/modules/v1/modules/${e}`),
        r.get(s)
      );
    }
    async getModuleDependencies({ moduleId: e, saveId: t }) {
      return r.get(`/modules/v1/modules/${e}/saves/${t}/dependencies/`);
    }
    async listModules({ types: e } = {}) {
      let t = new URLSearchParams();
      if (e) for (let o of e) t.append("type", o);
      return await r.get(`/modules/v1/modules/?${t.toString()}`, { projectId: this.projectId });
    }
    async listNamespaces() {
      return await r.get("/modules/v1/namespaces/");
    }
    async createNamespace(e) {
      return await r.post("/modules/v1/namespaces/", e);
    }
    async listPublishedModules({ namespace: e }) {
      let t = `/modules/v1/modules/namespaces/${encodeURIComponent(e)}/published/`;
      return await r.get(t);
    }
    async lookUpModules(e) {
      return r.post("/modules/v1/modules/batch/lookup/?respectIncludeStatus=true", e);
    }
    async publishModule({ namespace: e, name: t, ...s }) {
      let o = `/modules/v1/namespaces/${encodeURIComponent(e)}/published/${encodeURIComponent(t)}`;
      return await r.post(o, s);
    }
    async updateModule({ moduleId: e, ...t }) {
      return await r.post(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`, t);
    }
    async saveModule(e) {
      let t = new FormData();
      return (
        await this.addModuleRequestToForm(e, t),
        await r
          .postRaw(`/modules/v1/modules/${e.moduleId}/saves/${this.modulesCopyOnWriteParam()}`, t)
          .then((o) => o.json())
      );
    }
    async saveModules({ batch: e }) {
      let t = new FormData();
      return (
        await Promise.all(e.map((o) => this.addModuleRequestToForm(o, t))),
        await r
          .postRaw(`/modules/v1/modules/batch/saves/${this.modulesCopyOnWriteParam()}`, t)
          .then((o) => o.json())
      );
    }
    async promoteModuleSaves({ promotions: e }) {
      return r.post("/modules/v1/modules/batch/promote-saves/", {
        ownerId: this.projectId,
        ownerType: "project",
        promotions: e,
        skipOwnerMismatch: !0,
      });
    }
    async addModuleRequestToForm(e, t) {
      let { files: s, ...o } = e,
        a = t.getAll("metadata").length;
      (W && window.CompressionStream && (o.transferEncoding = "gzip"),
        t.append(
          "metadata",
          JSON.stringify({
            ...o,
            projectId: this.projectId,
            files: s.map(({ content: i, bytes: c, ...p }) => p),
          })
        ),
        await Promise.all(
          s.map(async (i) => {
            let c = i.content ?? i.bytes;
            se(!j(c), "File needs content or bytes");
            let p = new Blob([c]);
            if (W && window.CompressionStream) {
              let A = new window.CompressionStream("gzip"),
                E = p.stream();
              p = await new Response(E.pipeThrough(A)).blob();
              let v = c.length - p.size,
                R = (v / c.length) * 100;
              y.debug("Saved", v, "bytes", `(${R.toFixed(1)}%)`, "compressing", i.name);
            }
            t.append(`files[${a}]`, new File([p], i.name));
          })
        ));
    }
    modulesCopyOnWriteParam() {
      return `?copyOnWrite=${this.projectId}`;
    }
    async requestAgentScreenshot(e) {
      return r.post("/web/agents/screenshot", e);
    }
    async getFileList() {
      return r.getRaw(`/web/vekter/projects/${this.projectId}/files`);
    }
    async getFile(e) {
      return r.getRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async saveFile(e, t) {
      let s = new FormData(),
        o = new File([t], e, { type: "text/plain" });
      return (
        s.set("file", o),
        r.postRaw(`/web/vekter/projects/${this.projectId}/files/${e}`, s, void 0)
      );
    }
    async deleteFile(e) {
      return r.deleteRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async getBuildOutput(e) {
      return r.getRaw(`/web/projects/${this.projectId}/files/${e}`);
    }
    packagesPerPage = 36;
    async getPackage(e) {
      let { fromPublicPackages: t, packageName: s } = e;
      return r.get(`/store/packages${t ? "" : "/private"}/${s}`);
    }
    async deletePackage(e) {
      let { fromPublicPackages: t, packageName: s } = e;
      await r.deleteRaw(`/store/packages${t ? "" : "/private"}/${s}`);
    }
    async getPackageVersionStatus(e) {
      let { isPrivate: t, packageName: s, version: o } = e;
      return r.get(`/store/packages${t ? "/private" : ""}/${s}/version/${o}`);
    }
    async preflightPackage(e) {
      let { fromPublicPackages: t, body: s } = e;
      return r.post(`/store/packages${t ? "" : "/private"}/preflight`, s);
    }
    async findPackage(e) {
      let { fromPublicPackages: t, friendlyName: s, spaceId: o } = e;
      return r.getRaw(`/store/packages${t ? "" : "/private"}/find-by-slugify`, {
        name: s,
        spaceId: o,
      });
    }
    async findPackages(e) {
      let { fromPublicPackages: t, query: s, offset: o, spaceIds: a } = e;
      return r.getRaw(`/store/packages${t ? "" : "/private"}/search`, {
        query: s,
        offset: o,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async favoritePackage(e) {
      let { fromPublicPackages: t, packageName: s } = e;
      return r.postRaw(`/store/packages${t ? "" : "/private"}/${s}/favorite`);
    }
    async unfavoritePackage(e) {
      let { fromPublicPackages: t, packageName: s } = e;
      return r.deleteRaw(`/store/packages${t ? "" : "/private"}/${s}/favorite`);
    }
    async getPackages(e) {
      let { fromPublicPackages: t, section: s, offset: o, spaceIds: a } = e;
      return r.getRaw(`/store/packages${t ? "" : "/private"}/${s || ""}`, {
        offset: o,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async getPopularPackages(e) {
      let { fromPublicPackages: t, offset: s, days: o, spaceIds: a } = e;
      return r.getRaw(`/store/packages${t ? "" : "/private"}/popular`, {
        offset: s,
        days: o,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async getFeaturedPackages(e) {
      let { fromPublicPackages: t, offset: s } = e;
      return r.getRaw(`/store/packages${t ? "" : "/private"}/`, {
        featured: !0,
        offset: s,
        limit: this.packagesPerPage,
      });
    }
    async getPublisherPackages(e) {
      let { publisherId: t, offset: s } = e;
      return r.getRaw(`/store/packages/published-by/${t}`, {
        offset: s,
        limit: this.packagesPerPage,
      });
    }
    async getTrendingPackages() {
      return r.getRaw("/store/packages/trending");
    }
    async getPackagesMetadata(e) {
      return r.post("/store/meta/get-many", e);
    }
    async listPhotos(e) {
      return r.get("/web/unsplash/photos", e);
    }
    async searchPhotos(e) {
      return r.get("/web/unsplash/search/photos", e);
    }
    async getRandomPhoto(e) {
      return r.get("/web/unsplash/photos/random", e);
    }
    async downloadPhoto(e) {
      return r.get(`/web/unsplash/photos/${e.id}/download`);
    }
    async checkControlRequest() {
      return r.get("/auth/analysis/account-sharing");
    }
    async takeControl(e) {
      return r.post("/auth/analysis/account-sharing/take-control", e);
    }
    async linkUserAttachmentAssetToProject(e) {
      (await r.post(`/web/projects/${this.projectId}/assets/duplicate-from-user`, { keys: [e] })) &&
        this.notifyProjectChange("assets");
    }
    notifyProjectChange(e) {
      this.socket.send({ type: "notifyProjectChange", value: { scope: e } });
    }
  };
function Gs(n, e, t) {
  let s = (0, h.useMemo)(() => new O(n, e.projectId, t), [n, e.projectId, t]);
  (0, h.useEffect)(() => {
    s.getACL();
  }, [s]);
  let o = (0, h.useRef)(e);
  return (
    (o.current = e),
    (0, h.useEffect)(
      () =>
        n.onMessage((a) => {
          let i = o.current;
          if (a.type === "join") {
            if (i.aclById[a.id]) return;
          } else if (a.type === "welcome") {
            if (i.acl.length === 0) return;
            let c = !1;
            for (let p of i.activeIds)
              if (!i.aclById[p]) {
                c = !0;
                break;
              }
            if (!c) return;
          } else return;
          s.getACL();
        }),
      [s, n]
    ),
    s
  );
}
export { St as a, ds as b, He as c, Ge as d, O as e, Gs as f, vt as g, wt as h };
//# sourceMappingURL=https://app.framerstatic.com/chunk-I5JRWZEV.mjs.map
