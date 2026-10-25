import { e as Ie, f as De } from "./chunk-SJGLNBUK.mjs";
import { jj as z, kj as Be, mj as x } from "./chunk-3W5IVLGF.mjs";
import { a as Te } from "./chunk-I6Y2BWR3.mjs";
import { a as _, b as F, e as Pe, h as Le, i as A } from "./chunk-JRJIXEN6.mjs";
import { a as ye, b as Se, c as ve, d as k, e as be, f as we } from "./chunk-A4O3G3FW.mjs";
import { e as ge, f as me, h as q, i as m, k as D } from "./chunk-CRAOT5IF.mjs";
import { u as $, x as K } from "./chunk-TLJ63ERR.mjs";
import { i as pe } from "./chunk-NQBY5RB6.mjs";
import { Me as ue, Oe as T } from "./chunk-VEB6EOI6.mjs";
import { a as J } from "./chunk-VOXQOAXT.mjs";
import { Wm as ce, qg as de } from "./chunk-UDNVJCNV.mjs";
import { sc as ne, tc as ie } from "./chunk-KHAT6QH3.mjs";
import { a as Y, s as fe } from "./chunk-KBPGUKJ2.mjs";
import { f as he } from "./chunk-NAYFA6AI.mjs";
import { a as h, c as W, d as le } from "./chunk-WOUQLJ5W.mjs";
import { a as Ce } from "./chunk-24G7FGVN.mjs";
import { e as I } from "./chunk-Y3GZLMBF.mjs";
import { b as p } from "./chunk-4JY5UMT2.mjs";
import { m as ae } from "./chunk-I5EFRSXX.mjs";
import { i as b } from "./chunk-WBI6GGAG.mjs";
var je = "last-active-branch:";
function Re(c) {
  return `${je}${c}`;
}
function Ae(c, t) {
  try {
    return c.getItem(t);
  } catch {
    return null;
  }
}
function Ne(c, t, e) {
  try {
    e === null ? c.removeItem(t) : c.setItem(t, e);
  } catch {}
}
function Xe(c) {
  let t = Re(c),
    e = Ae(sessionStorage, t) ?? Ae(localStorage, t);
  return e && e !== h ? e : null;
}
function Oe(c, t) {
  let e = Re(c);
  (Ne(sessionStorage, e, t), Ne(localStorage, e, t === h ? null : t));
}
var We = "local-overlay/",
  Ee = "localOnly",
  ke = class {
    constructor(t) {
      this.mainStore = t;
      (p(t.branchId === h, "branch store registry must be seeded with the main store"),
        (this._activeBranchId = h),
        this.stores.set(h, t));
    }
    mainStore;
    _activeBranchId;
    stores = new Map();
    localOnlyLayers = new Map();
    localOnlyLayerOrder = [];
    localOnlyMetadataRowsByBranchId = new Map();
    reset() {
      for (let t of this.stores.values()) t.base?.detachBranch(t);
      ((this._activeBranchId = h),
        (this.stores = new Map([[h, this.mainStore]])),
        this.localOnlyLayers.clear(),
        (this.localOnlyLayerOrder = []),
        this.localOnlyMetadataRowsByBranchId.clear());
    }
    get activeBranchId() {
      return this._activeBranchId;
    }
    get activeStore() {
      return this.getStore(this.activeBranchId);
    }
    get effectiveViewBranchId() {
      return this.localOnlyLayerOrder.reduce(
        (t, e) => this.localOnlyLayers.get(e)?.branchId ?? t,
        this.activeBranchId
      );
    }
    get hasActiveLocalOnlyBranches() {
      return this.localOnlyLayerOrder.length > 0;
    }
    getStore(t) {
      return (
        this.stores.has(t) || this.resolveMaterializedBranchHierarchy(t),
        this.getOrCreateStore(t)
      );
    }
    peekStore(t) {
      return this.stores.get(t);
    }
    forgetStore(t) {
      p(t !== h, "Cannot forget the main branch store");
      let e = this.stores.get(t);
      (e?.base?.detachBranch(e),
        this.stores.delete(t),
        this._activeBranchId === t && (this._activeBranchId = h));
    }
    evictInactiveStores(t, e) {
      let r = [],
        o = e === void 0 ? void 0 : new Set(e);
      for (let [s, a] of [...this.stores].reverse())
        s === h ||
          s === this._activeBranchId ||
          (o !== void 0 && !o.has(s)) ||
          t(s) ||
          a.permanentError !== null ||
          a.branches.length > 0 ||
          (this.forgetStore(s), r.push(s));
      return r;
    }
    getBranchPath(t = this.activeBranchId) {
      return this.resolveBranchPath(t);
    }
    branchExists(t) {
      try {
        return (this.resolveBranchPath(t), !0);
      } catch {
        return !1;
      }
    }
    findFirstNonDeletedBranch(t) {
      if (!this.branchExists(t)) return h;
      let e = t;
      for (; e !== h;) {
        let r = this.getBaseId(e);
        if (typeof this.mainStore.getObjectKey(e, le) != "number") return e;
        e = r;
      }
      return h;
    }
    resolveBranchHierarchy(t) {
      this.getStore(t).resolveOverlayHierarchy();
    }
    resolveMaterializedBranchHierarchy(t) {
      this.getDeepestMaterializedStore(t)?.resolveOverlayHierarchy();
    }
    switchActiveBranch(t) {
      let e = this.getStore(t);
      return ((this._activeBranchId = t), this.resolveBranchHierarchy(t), e);
    }
    rebaseStore(t) {
      p(t !== h, "Cannot rebase the main branch store");
      let e = [];
      for (let [r, o] of this.stores) (r === t || Ke(o, t)) && e.push([r, o]);
      for (let [r, o] of e) (o.base?.detachBranch(o), this.stores.delete(r));
      this.getDeepestMaterializedStore(this.getBaseId(t))?.resolveOverlayHierarchy();
      for (let [r] of e) this.getOrCreateStore(r);
    }
    rebaseStoresToMatchMetadata() {
      let t = [];
      for (let [e, r] of this.stores)
        e !== h && r.base?.branchId !== this.getBaseId(e) && t.push(e);
      for (let e of t)
        this.stores.get(e)?.base?.branchId !== this.getBaseId(e) && this.rebaseStore(e);
    }
    getLocalOnlyLayer(t) {
      return this.localOnlyLayers.get(t);
    }
    getOrCreateLocalOnlyLayer(t) {
      let e = this.localOnlyLayers.get(t);
      if (e) return e;
      let r = $e(t),
        o = this.activeBranchId;
      this.createLocalOnlyBranchMetadata(r, this.effectiveViewBranchId);
      let s = { key: t, branchId: r, upstreamBranchId: o };
      return (
        this.localOnlyLayers.set(t, s),
        this.localOnlyLayerOrder.push(t),
        this.getStore(r),
        s
      );
    }
    removeLocalOnlyLayer(t) {
      let e = this.localOnlyLayers.get(t);
      if (e)
        return (
          this.localOnlyLayers.delete(t),
          (this.localOnlyLayerOrder = this.localOnlyLayerOrder.filter((r) => r !== t)),
          this.localOnlyMetadataRowsByBranchId.delete(e.branchId),
          this.forgetStore(e.branchId),
          this.rebaseLocalOnlyLayers(),
          e
        );
    }
    dropActiveLocalOnlyLayers() {
      for (let t of this.localOnlyLayers.values())
        (this.localOnlyMetadataRowsByBranchId.delete(t.branchId), this.forgetStore(t.branchId));
      (this.localOnlyLayers.clear(), (this.localOnlyLayerOrder = []));
    }
    clearLocalOnlyLayers() {
      this.dropActiveLocalOnlyLayers();
    }
    getLocalOnlyRows() {
      let t = [];
      for (let e of this.localOnlyLayerOrder) {
        let r = this.localOnlyLayers.get(e);
        if (!r) continue;
        this.localOnlyMetadataRowsByBranchId.get(r.branchId)?.forEach((a) => t.push(a));
        let s = this.getStore(r.branchId);
        for (let a of s.getSerializableRows()) t.push({ ...a, branchId: r.branchId });
      }
      return t;
    }
    isLocalOnlyBranch(t) {
      return this.mainStore.getObjectKey(t, Ee) === !0;
    }
    isLocalOnlyRow(t, e) {
      return this.isLocalOnlyBranch(t.branchId)
        ? !0
        : t.branchId === h && this.isLocalOnlyBranch(e.id);
    }
    getDeepestMaterializedStore(t) {
      let e;
      for (let r of this.getBranchPath(t)) {
        let o = this.stores.get(r);
        o && (e = o);
      }
      return e;
    }
    resolveBranchPath(t) {
      return t === h ? [h] : [...this.resolveBranchPath(this.getBaseId(t)), t];
    }
    getOrCreateStore(t) {
      let e = this.stores.get(t);
      if (e) return e;
      p(t !== h, "main store is missing from branch store registry");
      let o = this.getOrCreateStore(this.getBaseId(t)).branch(t);
      return (this.stores.set(t, o), o);
    }
    getBaseId(t) {
      return pe(this.mainStore, t);
    }
    createLocalOnlyBranchMetadata(t, e) {
      let r = this.mainStore.getObjectKey(t, W);
      p(
        r === void 0 || this.isLocalOnlyBranch(t),
        "Local-only branch id collides with a persisted branch: " + t
      );
      let o = this.mainStore.length;
      this.mainStore.batch(() => {
        this.mainStore.importObject(t, { id: t, [W]: e, [Ee]: !0 });
      });
      let s = this.mainStore.getSerializableRows(o).filter((a) => a.id === t);
      if (s.length > 0) {
        this.localOnlyMetadataRowsByBranchId.set(t, s);
        return;
      }
      this.localOnlyMetadataRowsByBranchId.has(t) ||
        this.localOnlyMetadataRowsByBranchId.set(t, this.getBranchMetadataRows(t));
    }
    getBranchMetadataRows(t) {
      let e = [];
      for (let r of this.mainStore.getSerializableRows()) r.id === t && e.push(r);
      return e;
    }
    rebaseLocalOnlyLayers() {
      this.localOnlyLayerOrder.reduce((t, e) => {
        let r = this.localOnlyLayers.get(e);
        return r
          ? (this.createLocalOnlyBranchMetadata(r.branchId, t),
            this.forgetStore(r.branchId),
            this.getStore(r.branchId),
            r.branchId)
          : t;
      }, this.activeBranchId);
    }
  };
function $e(c) {
  return `${We}${encodeURIComponent(c)}`;
}
function Ke(c, t) {
  for (let e = c.base; e; e = e.base) if (e.branchId === t) return !0;
  return !1;
}
var Fe = 300 * 1024 * 1024,
  P = {
    ASCII: 128,
    TWO_BYTE: 224,
    TWO_BYTE_VALUE: 192,
    THREE_BYTE: 240,
    THREE_BYTE_VALUE: 224,
    FOUR_BYTE: 248,
    FOUR_BYTE_VALUE: 240,
    CONTINUATION: 192,
    CONTINUATION_VALUE: 128,
  },
  Ye = 2155905152,
  C = 4,
  v = {
    QUOTE: 34,
    BACKSLASH: 92,
    OPEN_BRACE: 123,
    CLOSE_BRACE: 125,
    OPEN_BRACKET: 91,
    CLOSE_BRACKET: 93,
    COMMA: 44,
    SPACE: 32,
    TAB: 9,
    NEWLINE: 10,
    CARRIAGE_RETURN: 13,
  },
  B = new Uint8Array(256);
B[v.SPACE] = 1;
B[v.TAB] = 1;
B[v.NEWLINE] = 1;
B[v.CARRIAGE_RETURN] = 1;
var G = class {
    bytes;
    u32View;
    constructor(t) {
      this.bytes = t;
      let e = Math.floor(t.length / C);
      this.u32View = new Uint32Array(t.buffer, t.byteOffset, e);
    }
    scanUtf16UnitsToByteOffset(t, e) {
      if (e === 0) return t;
      let r = this.tryFastAsciiScan(t, e);
      if (r !== null) return r;
      let o = 0,
        s = t;
      for (; o < e && s < this.bytes.length;) {
        let a = this.bytes[s];
        a < P.ASCII
          ? (o++, s++)
          : (a & P.TWO_BYTE) === P.TWO_BYTE_VALUE
            ? (o++, (s += 2))
            : (a & P.THREE_BYTE) === P.THREE_BYTE_VALUE
              ? (o++, (s += 3))
              : (a & P.FOUR_BYTE) === P.FOUR_BYTE_VALUE
                ? ((o += 2), (s += 4))
                : s++;
      }
      return s;
    }
    tryFastAsciiScan(t, e) {
      if (t % C !== 0) return null;
      let r = t / C,
        o = e,
        s = r;
      for (; o >= C && s < this.u32View.length;)
        if ((this.u32View[s] & Ye) === 0) ((o -= C), s++);
        else return null;
      return o === 0 ? s * C : null;
    }
  },
  X = class {
    bytes;
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    childrenKeyBytes = this.encoder.encode(_);
    childrenKeyTable = null;
    constructor(t) {
      this.bytes = t;
    }
    parseJsonSlice(t, e) {
      let r = this.bytes.subarray(t, e),
        o = this.decoder.decode(r);
      return JSON.parse(o);
    }
    parseShallowPage(t, e) {
      return this.parsePageInternal(t, e, !1);
    }
    parseFullPage(t, e) {
      return this.parsePageInternal(t, e, !0);
    }
    parsePageInternal(t, e, r) {
      let o = this.indexOfPattern(this.childrenKeyBytes, t, e);
      if (o === -1) return this.parseJsonSlice(t, e);
      let s = o + this.childrenKeyBytes.length,
        a = this.parseShallowObject(t, s);
      if (r) {
        let i = o + this.childrenKeyBytes.length - 1,
          n = e - 1;
        a.children = this.parseChildrenArray(i, n);
      } else a.children = [];
      return a;
    }
    parseShallowObject(t, e) {
      let r = this.bytes.subarray(t, e),
        o = this.decoder.decode(r) + "]}";
      return JSON.parse(o);
    }
    parseChildrenArray(t, e) {
      return e - t < Fe ? this.parseJsonSlice(t, e) : this.parseChildrenByteLevel(t, e);
    }
    parseChildrenByteLevel(t, e) {
      let r = [],
        o = t + 1;
      for (; o < e && B[this.bytes[o]] === 1;) o++;
      for (; o < e - 1 && this.bytes[o] !== v.CLOSE_BRACKET;) {
        let s = o,
          a = 0,
          i = !1,
          n = !1;
        for (; o < e;) {
          let d = this.bytes[o];
          if (n) n = !1;
          else if (d === v.BACKSLASH) n = !0;
          else if (d === v.QUOTE && !n) i = !i;
          else if (!i) {
            if (d === v.OPEN_BRACE) a++;
            else if (d === v.CLOSE_BRACE && (a--, a === 0)) {
              o++;
              break;
            }
          }
          o++;
        }
        if (o > s)
          if (o - s >= Fe) r.push(this.parsePageInternal(s, o, !0));
          else {
            let l = this.bytes.subarray(s, o),
              y = this.decoder.decode(l),
              E = JSON.parse(y);
            r.push(E);
          }
        o = this.skipCommaAndWhitespace(o, e);
      }
      return r;
    }
    skipCommaAndWhitespace(t, e) {
      for (; t < e;) {
        let r = this.bytes[t];
        if (r === v.COMMA || this.isWhitespace(r)) t++;
        else break;
      }
      return t;
    }
    isWhitespace(t) {
      return B[t] === 1;
    }
    indexOfPattern(t, e, r) {
      if (t.length === 0) return e;
      if (t.length === 1) {
        for (let n = e; n < r; n++) if (this.bytes[n] === t[0]) return n;
        return -1;
      }
      let o;
      t === this.childrenKeyBytes
        ? (this.childrenKeyTable || (this.childrenKeyTable = this.createBadCharTable(t)),
          (o = this.childrenKeyTable))
        : (o = this.createBadCharTable(t));
      let s = r - e,
        a = t.length,
        i = 0;
      for (; i <= s - a;) {
        let n = a - 1;
        for (; n >= 0 && t[n] === this.bytes[e + i + n];) n--;
        if (n < 0) return e + i;
        {
          let d = this.bytes[e + i + n],
            l = o[d] ?? -1;
          i += Math.max(1, n - l);
        }
      }
      return -1;
    }
    createBadCharTable(t) {
      let e = new Int32Array(256);
      e.fill(-1);
      for (let r = 0; r < t.length - 1; r++) {
        let o = t[r];
        o !== void 0 && (e[o] = r);
      }
      return e;
    }
  },
  U = class {
    bytes;
    scanner;
    jsonParser;
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    root;
    version;
    pageLengthsUtf16;
    pageBoundaries = [];
    shallowPages = new Map();
    parsedPages = new Map();
    pageBoundaryMap = new Map();
    dependencies;
    chunkingHints = new Set();
    constructor(t, e = {}) {
      ((this.bytes = t),
        (this.dependencies = e.dependencies ?? []),
        (this.scanner = new G(t)),
        (this.jsonParser = new X(t)));
      let {
        root: r,
        version: o,
        header: s,
        childrenStartByteOffset: a,
      } = this.parseHeaderAndRoot();
      if (
        ((this.root = r),
        (this.version = o),
        (this.pageLengthsUtf16 = s),
        e.mustBeVersion && this.version !== e.mustBeVersion)
      )
        throw new Error(`Version mismatch: expected ${e.mustBeVersion}, got ${this.version}.
                Document version does not match required version.`);
      (this.calculatePageBoundaries(a), e.headerOnly || this.initializeShallowPages());
    }
    parseHeaderAndRoot() {
      let t = this.encoder.encode(_),
        e = this.jsonParser.indexOfPattern(t, 0, this.bytes.length);
      if (e === -1)
        throw new Error(
          `Document format error: '${_}' key not found in ${this.bytes.length} byte document`
        );
      let r = e + t.length,
        o = this.bytes.slice(0, r),
        s = this.decoder.decode(o) + "]}}",
        a = JSON.parse(s);
      if (a.v !== 1)
        throw new Error(`Invalid document version: expected ${1}, got ${a.v}
                Document may be from a different version or corrupted.`);
      if (!a.header || !Array.isArray(a.header))
        throw new Error(`Invalid document header: expected array, got ${typeof a.header}.
                Header contains page length information required for parsing.`);
      if (!a.root || typeof a.root != "object" || !a.root.__class)
        throw new Error(`Invalid document root: missing root object or __class property.
                Root: ${JSON.stringify(a.root).slice(0, 100)}...`);
      return (
        (a.root.children = []),
        {
          root: a.root,
          version: a.version,
          header: a.header,
          childrenStartByteOffset: e + t.length,
        }
      );
    }
    calculatePageBoundaries(t) {
      let e = t;
      for (let r = 0; r < this.pageLengthsUtf16.length; r++) {
        let o = this.pageLengthsUtf16[r],
          s = this.scanner.tryFastAsciiScan(e, o);
        s === null && (s = this.scanner.scanUtf16UnitsToByteOffset(e, o));
        let a = { pageIndex: r, startByteOffset: e, endByteOffset: s, utf16UnitLength: o };
        (this.pageBoundaries.push(a), (e = s + 1));
      }
    }
    initializeShallowPages() {
      for (let t of this.pageBoundaries) {
        let e = this.jsonParser.parseShallowPage(t.startByteOffset, t.endByteOffset);
        (this.shallowPages.set(e.id, e),
          this.pageBoundaryMap.set(e.id, t),
          this.root.children.push(e),
          t.utf16UnitLength > 2e8 && this.chunkingHints.add(e.id));
      }
    }
    parseFullPage(t) {
      if (this.parsedPages.has(t)) return this.parsedPages.get(t) ?? null;
      let e = this.pageBoundaryMap.get(t);
      if (!e) return null;
      let r = this.jsonParser.parseFullPage(e.startByteOffset, e.endByteOffset);
      this.parsedPages.set(t, r);
      let o = this.root.children.findIndex((s) => s.id === t);
      return (o !== -1 && (this.root.children[o] = r), r);
    }
    getPagesToLoad() {
      let t = new Set();
      for (let e of this.shallowPages.keys()) this.parsedPages.has(e) || t.add(e);
      return t;
    }
    getHomePageNodeID() {
      if (Le(this.root, "homePageNodeId") && typeof this.root.homePageNodeId == "string")
        return this.root.homePageNodeId;
    }
    getShallowPages() {
      return Array.from(this.shallowPages.values());
    }
    getShallowPage(t) {
      return this.shallowPages.get(t);
    }
    getParsedPageById(t) {
      let e = this.parsedPages.get(t);
      return e || this.parsePageWithId(t);
    }
    parsePageWithId(t) {
      return this.parsedPages.has(t) ? null : (this.parseFullPage(t) ?? null);
    }
    parseNextPage() {
      for (let [t, e] of this.shallowPages)
        if (!this.parsedPages.has(t)) return this.parseFullPage(t) || void 0;
    }
    getPagesContainingId(t) {
      if (this.shallowPages.has(t)) return [t];
      let e = [],
        r = this.encoder.encode(`"id":"${t}"`);
      for (let [o, s] of this.pageBoundaryMap)
        this.jsonParser.indexOfPattern(r, s.startByteOffset, s.endByteOffset) !== -1 && e.push(o);
      return e;
    }
    parsePagesContainingId(t) {
      let e = this.getPagesContainingId(t),
        r = [];
      for (let o of e) {
        let s = this.parseFullPage(o);
        s && r.push(s);
      }
      return r;
    }
    getPartialDocumentForPageIds(t) {
      for (let r of F) this.parseFullPage(r);
      let e = new Set();
      for (let r of this.dependencies) {
        let o = this.parseFullPage(r);
        o && A(o, o, e, !0);
      }
      for (let r of t) {
        let o = this.parseFullPage(r);
        o && A(o, o, e, !0);
      }
      return (this.parseDependentPages(e), this.root);
    }
    parseDependentPages(t) {
      let e = new Set();
      for (let r of t) {
        if (this.parsedPages.has(r)) continue;
        let o = this.parseFullPage(r);
        if (o) {
          A(o, o, e, !1);
          continue;
        }
        for (let s of this.parsePagesContainingId(r)) A(s, s, e, !1);
      }
      e.size > 0 && this.parseDependentPages(e);
    }
    getChunkingHints() {
      return this.chunkingHints;
    }
  };
var Je = b("DocumentLoader"),
  Q = b("remote:verify"),
  V = class c {
    constructor(t, e, r) {
      this.componentLoader = t;
      this.parser = e;
      this.settings = r;
      ((this.canvasTreeVersion = this.parser.version),
        (this.chunkingHints = this.parser.getChunkingHints()));
    }
    componentLoader;
    parser;
    settings;
    canvasTreeVersion = 0;
    chunkingHints;
    static async createPartialParser(t, e, r) {
      if (typeof t == "string") {
        let o = new Te(t);
        return new c(e, o, r);
      } else {
        let o = new U(t);
        return new c(e, o, r);
      }
    }
    readFirstPage() {
      let t = !1,
        e = [];
      if (
        (this.settings.activeNodeId &&
          (e.push(...this.parser.getPagesContainingId(this.settings.activeNodeId)),
          (t = e.some((r) => x(this.parser.getShallowPage(r))))),
        !t)
      ) {
        let r = this.parser.getShallowPages(),
          { maybeFirstPage: o } = z(r, this.parser.getHomePageNodeID());
        e.push(o.id);
        let s = 0,
          a;
        for (let i of r) {
          if ((ne(i, !0) && s++, s > 1)) break;
          ie(i, !0) && (a ??= i.id);
        }
        s === 1 && a && a !== o.id && e.push(a);
      }
      return (
        Je.debug("loadPartialDocument():", e),
        we(this.parser, this.componentLoader, e, this.settings.treeServices)
      );
    }
    getScopesToLoad() {
      return this.parser.getPagesToLoad();
    }
    getParsedPageById(t) {
      return this.parser.getParsedPageById(t);
    }
    buildPage(t) {
      if (!t) return;
      let e = [],
        r = Q.isLoggingTraceMessages() ? [] : void 0,
        o = T(t, this.parser.root.id, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && k(o, e),
        e.length > 0 &&
          Q.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        r &&
          r.length > 0 &&
          Q.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  };
var Z = b("app");
function St(c, t) {
  let e,
    r = new XMLHttpRequest();
  r.open("GET", c.toString(), !1);
  try {
    (r.send(), (e = JSON.parse(r.responseText)));
  } catch (o) {
    Z.error(`Retrieving document \u201C${c}\u201D failed. (${o})`);
  }
  return ee(e, t);
}
function ze(c) {
  ae.isTest ||
    c.forEach((t) => {
      Z.warn("[repaired]", t);
    });
}
function ee(c, t) {
  let e = [];
  try {
    let r = Se(c, t, e);
    return (ze(e), r);
  } catch (r) {
    throw (ze(e), Z.warn("tree failed to verify:", r), r);
  }
}
var u = b("DocumentLoader"),
  O = 10,
  N = 1e3;
function L(c) {
  return c < 1024 * 0.75
    ? `${Math.round(c)}b`
    : c < 1024 * 1024 * 0.75
      ? `${(c / 1024).toFixed(2)}kb`
      : `${(c / 1024 / 1024).toFixed(2)}Mb`;
}
function S(c) {
  return c < 200
    ? `${c.toFixed(1)}ms`
    : c < 20 * 1e3
      ? `${(c / 1e3).toFixed(3)}s`
      : `${Math.round(c / 1e3)}s`;
}
var H = class extends ge.default {
  constructor(e, r, o, s) {
    super();
    this.componentLoader = e;
    this.treeVersion = r;
    this.documentURL = o;
    this.settings = s;
    ((this.scheduler = new De(s.isUserIdleCallback)),
      u.debug("new:", this.treeVersion, this.documentURL));
  }
  componentLoader;
  treeVersion;
  documentURL;
  settings;
  scheduler;
  activelyLoadingScope = !1;
  retryCount = 0;
  scopesToLoad = new Set();
  prioritizedScopeIds = new Set();
  currentLoadingScope = void 0;
  partialParser;
  canvasTreeVersion = 0;
  documentSize = 0;
  loadedFirstScope = !1;
  loadingDuration = 0;
  parsingDuration = 0;
  debugPaused = !1;
  loadingScopesPaused = !1;
  loadAllDataPriority = 0;
  loadedAllData = !1;
  updatePauseResumeState = () => {
    if (!this.loadedFirstScope) {
      (this.scheduler.fast(), this.scheduler.resume());
      return;
    }
    let e = this.loadAllDataPriority > 0 || this.prioritizedScopeIds.size > 0,
      r = this.loadingScopesPaused || this.debugPaused;
    (e ? this.scheduler.fast() : this.scheduler.slow(),
      e || !r || this.scopesToLoad.size <= 0 ? this.scheduler.resume() : this.scheduler.pause());
  };
  pauseLoadingScopes() {
    this.loadingScopesPaused ||
      ((this.loadingScopesPaused = !0),
      u.debug("pauseLoadingScopes"),
      this.updatePauseResumeState());
  }
  resumeLoadingScopes() {
    this.loadingScopesPaused &&
      ((this.loadingScopesPaused = !1),
      u.debug("resumeLoadingScopes"),
      this.updatePauseResumeState());
  }
  prioritizeLoadingAllData(e) {
    let r = "preload" in e && e.preload;
    if (r) return () => {};
    let o = performance.now(),
      s = this.numberOfScopesToLoad();
    ((this.loadAllDataPriority = Math.max(1, this.loadAllDataPriority + 1)),
      u.debug("prioritizeLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
    let a = r || ("doNotTrack" in e && e.doNotTrack),
      i = !1,
      n = a
        ? void 0
        : this.afterAllDataLoaded(() => {
            if (i) return;
            p("operationName" in e, "operationName is required");
            let y = performance.now() - o;
            he("fulltree_force_load", {
              operationName: e.operationName,
              durationMs: Math.round(y),
              background: e.operationInBackground,
              shallowScopesCount: s,
            });
          }),
      d = this.afterAllDataLoaded(() => {
        if (i) return;
        p(!("preload" in e), "preload should never load all data");
        let l = {
          operationName: e.operationName,
          durationMs: Math.round(performance.now() - o),
          background: e.operationInBackground,
          shallowScopesCount: s,
        };
        u.reportError(new Error("Full tree loaded"), l, { operationName: e.operationName });
      });
    return () => {
      i || ((i = !0), n?.(), d(), this.stopPrioritizingLoadingAllData());
    };
  }
  stopPrioritizingLoadingAllData() {
    ((this.loadAllDataPriority -= 1),
      u.debug("stopPrioritizingLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
  }
  debugPause() {
    this.debugPaused ||
      ((this.debugPaused = !0), u.debug("debugPause"), this.updatePauseResumeState());
  }
  debugResume() {
    this.debugPaused &&
      ((this.debugPaused = !1), u.debug("debugResume"), this.updatePauseResumeState());
  }
  isDebugPaused() {
    return this.debugPaused;
  }
  afterAllDataLoaded(e) {
    if (e) {
      let r = !1,
        o = () => {
          queueMicrotask(() => {
            r || e();
          });
        };
      return this.loadedAllData
        ? (o(),
          () => {
            r = !0;
          })
        : (this.once("loadedAllData", o),
          () => {
            ((r = !0), this.off("loadedAllData", o));
          });
    }
    return this.loadedAllData
      ? Promise.resolve()
      : new Promise((r) => {
          let o = () => {
            queueMicrotask(r);
          };
          this.once("loadedAllData", o);
        });
  }
  tree;
  async start() {
    return this.scheduler.run(async () => {
      (u.debug("start"), m("parsingInit"), this.updatePauseResumeState());
      let e = performance.now(),
        r = await this.loadData();
      ((this.loadingDuration = performance.now() - e), m("documentBytesReady"));
      let o = typeof r == "string" ? r.length : r.byteLength;
      if (
        (D({
          format: r instanceof Uint8Array ? "crdt" : "json",
          strategy: "full-load",
          sources: ["tree-download"],
          snapshotBytes: o,
          snapshotSource: "downloaded",
          cachedRows: 0,
          cachedRowBytes: 0,
          downloadedRows: 0,
          downloadedRowBytes: 0,
        }),
        await this.scheduler.throwIfErrored(),
        !this.settings.partialParsing || (typeof r == "string" && !Pe(r)))
      )
        return this.parseFullDocumentSync(r);
      let s = await this.loadDocumentVersion(r);
      (await this.scheduler.yield(),
        (this.tree = await this.loadFirstTree(s)),
        await this.loadAllScopesAsync());
    });
  }
  async loadAllScopesAsync() {
    ((this.loadedFirstScope = !0),
      this.updatePauseResumeState(),
      await this.scheduler.yield(),
      m("parsingResume"));
    let e;
    for (; (e = this.nextScopeIdToLoad()) !== void 0;)
      (await this.loadScopeAsync(e), this.updatePauseResumeState(), await this.scheduler.yield());
    (await this.emitWrapped(() => {
      (p(this.tree, "tree must have been set"),
        this.tree.setService("loader", void 0),
        (this.loadedAllData = !0),
        this.emit("loadedAllData"));
    }),
      u.debug(
        "done",
        L(this.documentSize),
        "loading:",
        S(this.loadingDuration),
        "parsing:",
        S(this.parsingDuration)
      ));
  }
  async loadData() {
    if (this.settings.loadedData) return this.settings.loadedData;
    u.debug("Document in cache is not up to date. Tree version:", this.treeVersion);
    let e = this.settings.initData,
      r = e?.version === this.treeVersion,
      o = e?.prefetchPromise;
    if ((e && (e.prefetchPromise = void 0), r && o)) {
      u.debug("loadData: prefetch");
      let n = await o;
      if (
        (o
          .then((d) => d.duration)
          .then((d) => {
            m("dataLoad", d);
          })
          .catch(() => {}),
        await this.scheduler.resumeOrThrow(),
        n.buffer)
      ) {
        u.debug("loadData: prefetch bytes parser");
        let d = await n.buffer;
        return (
          await this.scheduler.resumeOrThrow(),
          n.status < 200 || n.status >= 300
            ? this.handleErrorAndRetry(n.status, "Error loading project data")
            : new Uint8Array(d)
        );
      }
      if (n.text) {
        let d = await n.text;
        return (
          await this.scheduler.resumeOrThrow(),
          n.status < 200 || n.status >= 300 ? this.handleErrorAndRetry(n.status, d) : d
        );
      }
    }
    u.debug("loadData: fetch");
    let s;
    this.settings.refreshAccessToken &&
      ((s = await this.settings.refreshAccessToken({})), await this.scheduler.resumeOrThrow());
    let a = await fetch(this.documentURL, s);
    await this.scheduler.resumeOrThrow();
    function i(n) {
      if (!n.body) return !1;
      let d = new URLSearchParams(window.location.search).has("bytes"),
        l = document.cookie.includes("bytes-parser=true"),
        y = parseInt(n.headers.get("Uncompressed-Content-Length") ?? "0", 10) > 2e8;
      return (d && (document.cookie = "bytes-parser=true; path=/;"), d || l || y);
    }
    if ((m("dataLoad"), a.status < 200 || a.status >= 300)) {
      let n = await a.text();
      return this.handleErrorAndRetry(a.status, n);
    }
    if (i(a)) {
      u.debug("loadData: using streaming parser");
      let n = await a.arrayBuffer();
      return new Uint8Array(n);
    } else {
      u.debug("loadData: using text parser");
      let n = await a.text();
      return (await this.scheduler.resumeOrThrow(), n);
    }
  }
  async handleErrorAndRetry(e, r) {
    let o = !1;
    try {
      o = JSON.parse(r).retry;
    } catch {}
    if (o && this.retryCount < O)
      return (
        u.debug("onErrorStatusLoaded, retry:", this.retryCount),
        await this.scheduler.sleep(this.retryCount * N + Math.random() * N),
        (this.retryCount += 1),
        this.loadData()
      );
    throw Error(o ? "Too many retries" : `Fetch Error: ${e} - ${r}`);
  }
  parseFullDocumentSync(e) {
    if (typeof e != "string")
      throw new Error("Full document sync parsing requires string data, not ReadableStream");
    let r = performance.now();
    this.documentSize = e.length;
    let o = JSON.parse(e);
    if (!I(o.version)) throw Error("cannot read document version");
    if (
      ((this.canvasTreeVersion = o.version),
      u.debug(
        "parseFullDocumentSync",
        this.canvasTreeVersion,
        L(this.documentSize),
        S(this.loadingDuration)
      ),
      this.emit("loadedDocumentVersion", o.version),
      this.scheduler.isDone())
    )
      return;
    let s = ee(o, this.componentLoader);
    (this.emit("loadedFirstData", s),
      !this.scheduler.isDone() &&
        (this.emit("loadedAllData"),
        (this.parsingDuration += performance.now() - r),
        m("parsingFirstPage"),
        u.debug(
          "done",
          L(this.documentSize),
          "loading:",
          S(this.loadingDuration),
          "parsing:",
          S(this.parsingDuration)
        )));
  }
  hasLoadedScope(e) {
    if (this.removedByDiff.has(e)) {
      let s = this.tree?.latestTree().get(e);
      return ce(s) && s.isLoaded();
    }
    let r = this.scopesToLoad.has(e),
      o = this.currentLoadingScope?.id === e;
    return !r && !o;
  }
  numberOfScopesToLoad() {
    return this.scopesToLoad.size + (this.currentLoadingScope ? 1 : 0);
  }
  prioritizeLoadingScope(e, r) {
    let o, s;
    if (typeof r == "function") this.addScopeLoadCallback(e, r);
    else if (r && "onLoaded" in r) (this.addScopeLoadCallback(e, r.onLoaded), (s = r));
    else {
      let a = new Ce();
      ((o = a), this.addScopeLoadCallback(e, a.resolve), (s = r));
    }
    if (!s?.preload)
      return (
        this.scopesToLoad.has(e) &&
          (this.prioritizedScopeIds.add(e),
          this.updatePauseResumeState(),
          this.addScopeLoadCallback(e, this.updatePauseResumeState)),
        o
      );
  }
  nextScopeIdToLoad() {
    for (let r of this.prioritizedScopeIds)
      if ((this.prioritizedScopeIds.delete(r), !!this.scopesToLoad.has(r)))
        return (this.scopesToLoad.delete(r), this.scheduler.fast(), r);
    let e = this.loadAllDataPriority > 0;
    this.settings.loadInBackground && !e ? this.scheduler.slow() : this.scheduler.fast();
    for (let r of this.scopesToLoad) return (this.scopesToLoad.delete(r), r);
  }
  async loadDocumentVersion(e) {
    let r = performance.now(),
      o = await V.createPartialParser(e, this.componentLoader, this.settings);
    return (
      typeof e == "string" ? (this.documentSize = e.length) : (this.documentSize = 0),
      (this.canvasTreeVersion = o.canvasTreeVersion),
      (this.parsingDuration += performance.now() - r),
      u.debug(
        "loadDocumentVersion",
        this.canvasTreeVersion,
        typeof e == "string" ? L(this.documentSize) : "stream",
        S(this.loadingDuration)
      ),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let s = performance.now();
        (this.emit("loadedDocumentVersion", this.canvasTreeVersion),
          (this.parsingDuration += performance.now() - s));
      }),
      (this.partialParser = o),
      o
    );
  }
  async loadFirstTree(e) {
    let r = performance.now(),
      o = e.readFirstPage();
    this.scopesToLoad = e.getScopesToLoad();
    for (let s of this.scopesToLoad) {
      let a = o.get(s);
      a && (a.treeState.isShallowLoad = !0);
    }
    return (
      (this.parsingDuration += performance.now() - r),
      u.debug("loadFirstTree", S(this.parsingDuration)),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let s = performance.now();
        (o.setService("loader", this),
          (o.chunkingHints = e.chunkingHints),
          this.emit("loadedFirstData", o),
          m("parsingFirstPage"),
          (this.parsingDuration += performance.now() - s));
      }),
      o
    );
  }
  async loadScopeAsync(e) {
    let r = performance.now();
    (p(!this.currentLoadingScope, "already have a currently loading scope"),
      (this.activelyLoadingScope = !0));
    let o = (this.currentLoadingScope = this.createLoadingScope(e));
    await this.emitWrapped(() => {
      if (
        ((this.activelyLoadingScope = !1),
        (this.currentLoadingScope = void 0),
        this.scheduler.isDone())
      )
        return;
      let s = performance.now(),
        a = o.force(),
        i = a.take();
      if (!i) return;
      this.emit("loadedScope", i);
      let n = performance.now();
      ((this.parsingDuration += a.duration + n - s),
        this.signalScopeLoadCallbacks(i.id),
        u.debug(
          "loadScopeAsync:",
          e,
          S(a.duration),
          "scheduler priority:",
          this.scheduler.currentPriority()
        ),
        J("loadScopeAsync", r, n, "vekter"));
    });
  }
  createLoadingScope(e) {
    return (
      p(this.partialParser, "loadScope before the parser is available"),
      new te(e, this.partialParser)
    );
  }
  reloadScope(e) {
    return (this.scopesToLoad.add(e), this.loadScope(e));
  }
  invalidateScopeForReload(e) {}
  loadScope(e) {
    let r = performance.now();
    if (this.currentLoadingScope?.id === e) {
      let a = this.currentLoadingScope.force();
      return ((this.parsingDuration += a.duration), (this.currentLoadingScope = void 0), a.take());
    }
    if ((this.prioritizedScopeIds.delete(e), !this.scopesToLoad.has(e))) return;
    this.scopesToLoad.delete(e);
    let o = this.createLoadingScope(e).force(),
      s = performance.now();
    return (
      (this.parsingDuration += o.duration + s - r),
      u.debug("loadScope:", e, S(o.duration)),
      this.signalScopeLoadCallbacks(e),
      J("loadScope", r, s, "vekter"),
      o.take()
    );
  }
  loadCallbacksPerScope = new Map();
  addScopeLoadCallback(e, r) {
    if (!r) return;
    if (this.hasLoadedScope(e)) {
      setTimeout(r);
      return;
    }
    let o = this.loadCallbacksPerScope.get(e) ?? [];
    (o.push(r), this.loadCallbacksPerScope.set(e, o));
  }
  signalScopeLoadCallbacks(e) {
    setTimeout(() => {
      let r = this.loadCallbacksPerScope.get(e);
      if (r) {
        for (let o of r) o();
        this.loadCallbacksPerScope.delete(e);
      }
    });
  }
  async emitWrapped(e) {
    (await this.scheduler.resumeOrThrow(),
      this.settings.asyncEventWrapper ? await this.settings.asyncEventWrapper(e) : e());
  }
  async nodeIdsToLoad() {
    let e = performance.now(),
      r = new Set();
    if (!this.partialParser) return r;
    for (let o of this.scopesToLoad) {
      let s = Ie({ batch: !0, continueAfter: "paint" });
      s && (await s);
      let a = this.partialParser.getParsedPageById(o);
      xe(r, a);
    }
    for (let o of this.addedByDiff) r.add(o);
    for (let o of this.removedByDiff) r.delete(o);
    return (u.debug("nodeIdsToLoad", r.size, S(performance.now() - e)), r);
  }
  addedByDiff = new Set();
  removedByDiff = new Set();
  addNodeChanges(e) {
    for (let r of e) {
      let o = r.id;
      r.added
        ? (this.addedByDiff.add(o), this.removedByDiff.delete(o))
        : r.removed && (this.addedByDiff.delete(o), this.removedByDiff.add(o));
    }
  }
};
function xe(c, t) {
  if (t && (c.add(t.id), !!t.children)) for (let e of t.children) xe(c, e);
}
var R = class {
    constructor(t, e) {
      this.node = t;
      this.duration = e;
    }
    node;
    duration;
    take() {
      let t = this.node;
      return ((this.node = void 0), t);
    }
  },
  te = class {
    constructor(t, e) {
      this.id = t;
      this.parser = e;
    }
    id;
    parser;
    data = void 0;
    loadedScope = void 0;
    force() {
      if (this.loadedScope) return this.loadedScope;
      let t = performance.now();
      this.data || (this.data = this.parser.getParsedPageById(this.id));
      let e = this.parser.buildPage(this.data);
      return (
        e && (e.treeState.isShallowLoad = !1),
        (this.loadedScope = new R(e, performance.now() - t)),
        this.loadedScope
      );
    }
  };
function Ue(c) {
  return Map.groupBy(c, (t) => t.branchId ?? h);
}
var re = class {
    constructor(t, e, r) {
      this.id = t;
      this.store = e;
      this.trackSerializedCache = r;
    }
    id;
    store;
    trackSerializedCache;
    loadedScope;
    loadScopeDataFromStore() {
      let t = this.store.getObject(this.id);
      if (!t) {
        f.debug("No object with id " + this.id + " in the store");
        return;
      }
      return t;
    }
    createNodeFromData(t) {
      let e = this.buildPage(t);
      if (e)
        return (
          (e.treeState.isShallowLoad = !1),
          e.treeState.setSerializedCache(e, t),
          this.trackSerializedCache(e),
          e
        );
    }
    force() {
      if (this.loadedScope) return this.loadedScope;
      let t = performance.now(),
        e = this.loadScopeDataFromStore(),
        r = this.createNodeFromData(e),
        o = performance.now() - t;
      return ((this.loadedScope = new R(r, o)), this.loadedScope);
    }
    buildPage(t) {
      if (!t) return;
      let e = [],
        r = f.isLoggingTraceMessages() ? [] : void 0,
        o = T(t, void 0, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && k(o, e),
        e.length > 0 &&
          f.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        r &&
          r.length > 0 &&
          f.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  },
  f = b("CrdtDocumentLoader"),
  Me = class {
    constructor(t, e) {
      this.mainStore = t;
      this.branches = e;
    }
    mainStore;
    branches;
    get store() {
      return this.branches?.activeStore ?? this.mainStore;
    }
    loadSnapshot(t) {
      ((this.branches?.getStore(h) ?? this.mainStore).fromBuffer(t), this.branches?.reset());
    }
    reset() {
      ((this.branches?.getStore(h) ?? this.mainStore).reset(), this.branches?.reset());
    }
    install() {}
  },
  qe = 2,
  Ve = class extends H {
    constructor(e, r, o, s, a, i) {
      super(o, s, a, i);
      this.storeTarget = e;
      this.projectId = r;
    }
    storeTarget;
    projectId;
    parsedIds = new Set();
    serializedScopeNodes = new Set();
    serializedCacheClearScheduled = !1;
    storeTargetInstalled = !1;
    get store() {
      return this.storeTarget.store;
    }
    get branches() {
      return this.storeTarget.branches;
    }
    switchToInitialBranch() {
      if (!this.branches) return;
      let e = this.settings.activeBranchId;
      !e || e === h || this.branches.switchActiveBranch(this.branches.findFirstNonDeletedBranch(e));
    }
    loadFirstCrdtTreeFromStore(e) {
      let r = [],
        s = this.store.getObjectWithShallowChildren(e.rootId, 1);
      p(s, "Root object not found in store");
      let a = [],
        i,
        n = this.settings.activeNodeId,
        d = n ? this.store.getObjectWithShallowChildren(n, 1) : void 0;
      for (; d && d.parentid !== e.rootId;) {
        if (!d.parentid) throw Error("active node has no parent");
        d = this.store.getObjectWithShallowChildren(d.parentid, 1);
      }
      x(d)
        ? a.push(d.id)
        : ((i = z(s.children ?? [], s?.homePageNodeId)), a.push(i.maybeFirstPage.id));
      let l = T(s, null, { extraChecksAndFixes: !0, errors: r, warnings: r });
      p(l, "Unable to load document");
      for (let g of l.children)
        ((g.treeState.isShallowLoad = !0), F.includes(g.id) && a.push(g.id));
      for (let g of a) {
        if (!g) continue;
        let j = this.store.getObject(g);
        if (!j) {
          f.debug("No value for " + g);
          continue;
        }
        let w = T(j);
        (p(w, "Scope node instance could not be created"),
          (w.treeState.isShallowLoad = !1),
          w.treeState.setSerializedCache(w, j),
          this.trackSerializedScopeCache(w));
        let oe = l.children.findIndex((He) => He.id === g);
        (oe >= 0 && l.children.splice(oe, 1, w), this.parsedIds.add(g));
        let se = w;
        g === i?.maybeFirstPage.id &&
          i.firstDesignPage &&
          Be(se, i.firstDesignPage) !== se &&
          a.push(i.firstDesignPage.id);
      }
      ve(l, r);
      for (let g of l.children) this.parsedIds.has(g.id) || this.scopesToLoad.add(g.id);
      if (r.length > 0) for (let g of l.children) g.treeState.serialized = { hadError: !0 };
      let y = ue.createByAdoptingRoot(l, this.settings.treeServices);
      (y.verify(),
        (y = de.treeDidLoad(y, this.componentLoader, []).didNonLinearMove(this.componentLoader)));
      let E = [];
      return (
        ye(y, E) &&
          (E.forEach((g) => {
            (r.push(`${g.id}: code component links itself via ${g.stack}`), be(y, g.id, g.stack));
          }),
          (y = y.commit(this.componentLoader))),
        (y.chunkingHints = this.computeChunkingHints()),
        y.setService("loader", this),
        y
      );
    }
    computeChunkingHints() {
      if (this.documentSize < 0)
        return (
          f.warn("document size not set, skipping chunking hints:", this.documentSize),
          new Set()
        );
      let e = new Set();
      if (this.documentSize < 2e8) return e;
      let r = this.store.getHierarchy(),
        o = r.getRootId();
      if (!o) return e;
      let s = r.sizeWithoutReplicas(),
        a = this.documentSize / s,
        i = r.getChildrenIds(o);
      for (let n of i) r.getSubtreeCount(n) * a * qe > 2e8 && e.add(n);
      return e;
    }
    async loadFirstCrdtTree(e) {
      let r = this.loadFirstCrdtTreeFromStore(e);
      return (
        await this.emitWrapped(() => {
          if (this.scheduler.isDone()) return;
          let o = performance.now();
          (this.storeTarget.install(),
            (this.storeTargetInstalled = !0),
            this.projectId && this.branches && Oe(this.projectId, this.branches.activeBranchId),
            this.emit("loadedFirstData", r),
            m("parsingFirstPage"),
            (this.parsingDuration += performance.now() - o));
        }),
        r
      );
    }
    async createTreeFromBuffer(e) {
      (p(e, "createTreeFromBuffer requires document bytes"), (this.documentSize = e.byteLength));
      let r = K.loadVersionFromBuffer(e);
      if ((this.emit("loadedFormatVersion", r), this.scheduler.isCancelled())) {
        this.storeTarget.reset();
        return;
      }
      try {
        (this.storeTarget.loadSnapshot(e), m("buildStore"), this.switchToInitialBranch());
        let o = this.store.getObject("meta");
        if (!o) throw new Error("Meta field not found");
        if (!I(o.version)) throw Error("cannot read document version");
        if (
          ((this.canvasTreeVersion = o.version),
          f.debug(
            "createTree",
            this.canvasTreeVersion,
            L(this.documentSize),
            S(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", o.version),
          this.scheduler.isCancelled())
        ) {
          this.storeTarget.reset();
          return;
        }
        ((this.tree = await this.loadFirstCrdtTree(o)),
          this.settings.localCache?.storeSnapshot(e, this.treeVersion, {
            syncStrategy: "full-load",
          }),
          (e = void 0),
          await this.loadAllScopesAsync());
      } catch (o) {
        if (this.scheduler.isCancelled()) return;
        throw (this.storeTarget.reset(), o);
      }
    }
    async createTreeFromCachedState(e, r = 0) {
      this.documentSize = e.snapshot.byteLength;
      let o = K.loadVersionFromBuffer(e.snapshot);
      if (o < $)
        return (
          f.reportError(
            "cached binary format is behind current version, falling back to full document load",
            {
              version: this.treeVersion,
              cachedBinaryVersion: o,
              currentBinaryVersion: $,
              documentSize: this.documentSize,
            }
          ),
          this.settings.localCache?.abortAndClearCache(),
          this.storeTarget.reset(),
          !1
        );
      if ((this.emit("loadedFormatVersion", o), this.scheduler.isCancelled()))
        return (this.storeTarget.reset(), !0);
      try {
        (this.storeTarget.loadSnapshot(e.snapshot),
          m("buildStore"),
          e.rows.length > 0 && (this.addCachedRowsToStores(e.rows), m("addedRows")));
        let s = e;
        if (((s.snapshot = void 0), r)) {
          let i = this.store.getHierarchy().computeTreeHash();
          if (r !== i)
            return (
              f.reportCriticalError("hierarchy hash mismatch, falling back to full document load", {
                version: this.treeVersion,
                hierarchyHash: r,
                computedHierarchyHash: i,
                documentSize: this.documentSize,
              }),
              this.settings.localCache?.abortAndClearCache(),
              this.storeTarget.reset(),
              !1
            );
        }
        this.switchToInitialBranch();
        let a = this.store.getObject("meta");
        if (!a) throw new Error("Meta field not found");
        if (!I(a.version)) throw Error("cannot read document version");
        return (
          (this.canvasTreeVersion = a.version),
          f.debug(
            "createTreeFromCachedState",
            this.canvasTreeVersion,
            L(this.documentSize),
            S(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", a.version),
          this.scheduler.isCancelled()
            ? (this.storeTarget.reset(), !0)
            : ((this.tree = await this.loadFirstCrdtTree(a)), await this.loadAllScopesAsync(), !0)
        );
      } catch (s) {
        if (this.scheduler.isCancelled()) return !0;
        throw (this.storeTarget.reset(), s);
      }
    }
    addCachedRowsToStores(e) {
      function* r(n) {
        for (let d of n) for (let l of d.rows) yield l;
      }
      this.branches && p(this.store === this.branches.getStore(h), "main store mismatch");
      let o = Ue(r(e)),
        s = o.get(h);
      if ((s && this.store.addSerializableRows(s), o.delete(h), o.size === 0)) return;
      let a = this.branches;
      p(a, "branch registry is required to load cached branch rows");
      let i = [...o].sort(([n], [d]) => a.getBranchPath(n).length - a.getBranchPath(d).length);
      for (let [n, d] of i) a.getStore(n).addSerializableRows(d);
    }
    async start() {
      await this.scheduler.run(async () => {
        (f.debug("start"), m("parsingInit"), this.updatePauseResumeState());
        let e = [],
          r = performance.now(),
          o = this.settings.localCache;
        if (o && !o.aborted)
          try {
            let i = !!this.settings.initData?.prefetchSyncPromise;
            e.push(i ? "prefetch-sync" : "sync");
            let n = this.settings.initData?.prefetchSyncPromise ?? this.fetchTreeSync();
            (this.settings.initData && delete this.settings.initData.prefetchSyncPromise,
              n
                .then((l) => l.duration)
                .then((l) => m("dataLoad", l))
                .catch(() => {}));
            let d = await o.syncCrdtData(n);
            if (((n = void 0), d && d.version >= this.treeVersion)) {
              if (
                ((this.loadingDuration = performance.now() - r),
                m("documentBytesReady"),
                D({
                  format: "crdt",
                  strategy: d.syncStrategy,
                  sources: e,
                  snapshotBytes: d.snapshot.byteLength,
                  snapshotSource: d.snapshotSource,
                  cacheBackend: d.cacheBackend,
                  cachedRows: d.cachedRows,
                  cachedRowBytes: d.cachedRowBytes,
                  downloadedRows: d.downloadedRows,
                  downloadedRowBytes: d.downloadedRowBytes,
                }),
                await this.scheduler.yield(),
                await this.createTreeFromCachedState(d, d.hierarchyHash))
              )
                return;
              f.warn("local cache failed to create tree, falling back to full document load");
            } else
              d
                ? f.warn(
                    "local cache behind websocket init tree version, falling back to full document load"
                  )
                : f.warn("local cache failed, falling back to full document load");
          } catch (i) {
            if (this.storeTargetInstalled) throw (o.abortAndClearCache(), i);
            f.warn("tree/sync failed, falling back to full document load:", i);
          }
        let s = await this.loadCrdtData(e);
        ((this.loadingDuration = performance.now() - r),
          m("documentBytesReady"),
          D({
            format: "crdt",
            strategy: "full-load",
            sources: e,
            snapshotBytes: s.byteLength,
            snapshotSource: "downloaded",
            cachedRows: 0,
            cachedRowBytes: 0,
            downloadedRows: 0,
            downloadedRowBytes: 0,
          }),
          await this.scheduler.yield());
        let a = this.createTreeFromBuffer(s);
        ((s = void 0), await a);
      });
    }
    startFromStore() {
      let e = this.store.getObject("meta");
      if (!e) throw Error("Meta field not found");
      return (
        (this.tree = this.loadFirstCrdtTreeFromStore(e)),
        this.pauseLoadingScopes(),
        this.scheduler
          .run(async () => {
            await this.loadAllScopesAsync();
          })
          .catch((r) => {
            this.scheduler.isCancelled() || this.emit("error", r);
          }),
        this.tree
      );
    }
    async fetchTreeSync() {
      let e = this.settings.localCache;
      p(e, "fetchTreeSync requires localCache");
      let r = e.getCachedTreeVersion(),
        o = this.settings.initData?.syncURL;
      p(o, "Expected syncURL in tree init data");
      let s = new URL(o);
      s.searchParams.set("version", r.toString());
      let a = performance.now();
      q && !q.isComplete() && (a = me);
      let i;
      this.settings.refreshAccessToken && (i = await this.settings.refreshAccessToken({}));
      let n = await fetch(s, i),
        d = "Sync-Strategy";
      return {
        status: n.status,
        headers: n.headers,
        duration: Promise.resolve(performance.now() - a),
        updates: n.headers.get(d) === "incremental" ? n.json() : void 0,
        snapshot: n.headers.get(d) === "snapshot" ? n.arrayBuffer() : void 0,
      };
    }
    async loadCrdtData(e = []) {
      if (this.settings.loadedData && this.settings.loadedData instanceof Uint8Array)
        return (f.debug("loadData: loadedData"), e.push("loaded-data"), this.settings.loadedData);
      let r = this.settings.initData;
      if ((f.debug("loadData: prefetch"), r?.prefetchPromise)) {
        let s = r.prefetchPromise;
        if ((delete r.prefetchPromise, r.version === this.treeVersion)) {
          e.push("prefetch-tree");
          let a = await s;
          if (
            (a.duration.then((i) => m("dataLoad", i)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.buffer) {
            f.debug("loadData: prefetch bytes parser");
            let i = await a.buffer;
            return (await this.scheduler.yield(), new Uint8Array(i));
          }
        }
      }
      if (r?.prefetchSyncPromise) {
        let s = r.prefetchSyncPromise;
        delete r.prefetchSyncPromise;
        let a = await s;
        if (Number(a.headers.get("Tree-Version")) === this.treeVersion) {
          if (
            (a.duration.then((n) => m("dataLoad", n)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.snapshot) {
            (e.push("prefetch-sync"), f.debug("loadData: prefetch sync snapshot"));
            let n = await a.snapshot;
            return (await this.scheduler.yield(), new Uint8Array(n));
          }
        }
      }
      (e.push("tree-download"), f.debug("loadData: fetch"));
      let o;
      this.settings.refreshAccessToken &&
        ((o = await this.settings.refreshAccessToken({})), await this.scheduler.yield());
      for (let s = 0; s < O; ++s)
        try {
          return await this.downloadTreeData(o);
        } catch (a) {
          if (!(a instanceof Y) || !a.isTemporary || s === O - 1) throw a;
          (f.debug("temporary error loading document, retry:", s),
            await this.scheduler.sleep(s * N + Math.random() * N));
        }
      throw Error(`Failed to fetch project data after attempting ${O} times`);
    }
    async downloadTreeData(e) {
      let { signal: r } = this.scheduler,
        o;
      try {
        o = await fetch(this.documentURL, { ...e, signal: r });
      } catch (a) {
        throw r.aborted ? r.reason : fe(a);
      }
      if (o.status < 200 || o.status >= 300)
        throw new Y({
          isTemporary: !0,
          message: `Failed to download document (status ${o.status})`,
          status: o.status,
          skipSentry: !0,
        });
      await this.scheduler.yield();
      let s = await o.arrayBuffer();
      return (await this.scheduler.yield(), new Uint8Array(s));
    }
    addNodeChanges(e) {
      super.addNodeChanges(e);
      for (let r of e) r.removed && this.parsedIds.delete(r.id);
    }
    invalidateScopeForReload(e) {
      (this.parsedIds.delete(e), this.scopesToLoad.add(e));
      let r = this.tree?.get(e);
      r && r.treeState.clearSerializedCache();
    }
    createLoadingScope(e) {
      return new re(e, this.store, (r) => this.trackSerializedScopeCache(r));
    }
    trackSerializedScopeCache(e) {
      if ((this.serializedScopeNodes.add(e), this.serializedCacheClearScheduled)) return;
      ((this.serializedCacheClearScheduled = !0),
        (this.settings.isUserIdleCallback ?? ((o) => setTimeout(o, 0)))(() =>
          this.clearSerializedScopeCaches()
        ));
    }
    clearSerializedScopeCaches() {
      for (let e of this.serializedScopeNodes) e.treeState.clearSerializedCache();
      (this.serializedScopeNodes.clear(), (this.serializedCacheClearScheduled = !1));
    }
  };
export { Xe as a, Oe as b, ke as c, Ue as d, St as e, ee as f, H as g, Me as h, Ve as i };
//# sourceMappingURL=https://app.framerstatic.com/chunk-NKYA7RIJ.mjs.map
