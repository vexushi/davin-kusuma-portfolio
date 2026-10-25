import { b as A, c as F, d as _, e as R, f as w, h as S, j as k } from "./chunk-NQBY5RB6.mjs";
import { a as N, b as O, g as D, h, j as x, k as K, l as I } from "./chunk-M3TB4JOC.mjs";
import { b as y, i as E } from "./chunk-HATSOH2K.mjs";
import { a as l, b as p } from "./chunk-WOUQLJ5W.mjs";
import { b as o, c as M } from "./chunk-4JY5UMT2.mjs";
var f = class {
  generate() {
    return E();
  }
};
function B(n, e, t = {}, r = new f()) {
  let i = new b(n, t, r);
  return (n.branchId !== l && i.inheritReaddedNodes(), e(i), i.getDiffs());
}
var C = { parentid: !0, children: !0, id: !0 },
  v = class {
    nodeIds = [];
    enter(e) {
      this.nodeIds.push(e);
    }
    exit(e) {
      let t = this.nodeIds.pop();
      o(t === e, () => `Left ${e} while ${t} was in progress`);
    }
    getCurrentNodeId() {
      return this.nodeIds.at(-1);
    }
  },
  b = class {
    constructor(e, t, r) {
      this.store = e;
      this.sharedData = t;
      this.idGenerator = r;
    }
    store;
    sharedData;
    idGenerator;
    diffs = [];
    visitedNodes = new v();
    nodes() {
      return new m(this.store, this.visitedNodes);
    }
    addNode(e, t, r) {
      o(this.isMainBranch(), "Nodes can only be added on the main branch");
      let i = this.getAddedNodeParentIds(),
        s = t;
      for (let a = i.get(s); a !== void 0; a = i.get(s)) s = a;
      (this.assertIsNodeId(s),
        this.validateNodeEdit(s, () => "add node"),
        this.assertInMigratedTree(t));
      let d = e.id === void 0 ? this.generateRandomId() : e.id;
      if (
        (o(typeof d == "string", "Adding a node without a valid id"),
        o(!("parentid" in e), "New node data cannot contain parentid"),
        o(!("children" in e), "New node data cannot contain children"),
        o(
          !this.store.getHierarchy().inTree(d) && !this.getAddedNodeParentIds().has(d),
          () => `Node ${d} already exists`
        ),
        this.nodeExistsAnywhere(d))
      ) {
        this.getReaddedNodeIds().add(d);
        for (let a of this.store.getChildrenIds(d)) this.diffs.push({ type: "removeNode", id: a });
      }
      return (
        this.getAddedNodeParentIds().set(d, t),
        this.diffs.push({ type: "addNode", node: { ...e, id: d }, parentId: t, position: r }),
        d
      );
    }
    moveNode(e, t, r) {
      (this.assertIsNodeId(e),
        this.getAddedNodeParentIds().has(t) || this.assertIsNodeId(t),
        this.validateNodeEdit(e, () => `move node ${e}`),
        o(
          this.getMigratedParentId(e) !== void 0,
          () => `Node ${e} has no parent and cannot be moved`
        ),
        o(t !== p && !this.store.table.branches.has(t), "Cannot move a node into branch data"),
        o(
          this.store.isMaterializableNode(t) || this.getAddedNodeParentIds().has(t),
          () => `Parent ${t} does not exist`
        ),
        this.assertNoCycle(e, t),
        this.assertInMigratedTree(t),
        this.store.hasOwnOverridingRow(e, "parentid") &&
          (o(
            this.getParentIdWrites().get(e) !== h,
            () => `Node ${e} was removed by this migration and cannot be moved`
          ),
          this.getParentIdWrites().set(e, t),
          this.diffs.push({ type: "moveNode", id: e, parentId: t, position: r })));
    }
    removeNode(e) {
      (this.assertIsNodeId(e), this.validateNodeEdit(e, () => `remove node ${e}`));
      let t = this.getMigratedParentId(e);
      t !== h &&
        (o(t !== void 0, () => `Node ${e} has no parent and cannot be removed`),
        this.store.hasOwnOverridingRow(e, "parentid") &&
          (o(
            !this.getParentIdWrites().has(e),
            () => `Node ${e} was moved by this migration and cannot be removed`
          ),
          this.getParentIdWrites().set(e, h),
          this.diffs.push({ type: "removeNode", id: e })));
    }
    getMigratedParentId(e) {
      for (let i = this.store; i !== void 0; i = i.base) {
        let s = this.sharedData.parentIdWritesByBranchId?.get(i.branchId)?.get(e);
        if (s !== void 0) return s;
        if (i.hasOwnOverridingRow(e, "parentid")) break;
      }
      let t = this.getAddedNodeParentIds().get(e);
      if (t !== void 0) return t;
      let r = this.store.getParentId(e);
      return r === h ? void 0 : r;
    }
    getParentIdWrites() {
      this.sharedData.parentIdWritesByBranchId === void 0 &&
        (this.sharedData.parentIdWritesByBranchId = new Map());
      let e = this.store.branchId,
        t = this.sharedData.parentIdWritesByBranchId.get(e);
      return (
        t === void 0 && ((t = new Map()), this.sharedData.parentIdWritesByBranchId.set(e, t)),
        t
      );
    }
    assertInMigratedTree(e) {
      let t = this.store.getRoot(),
        r = new Set(),
        i = e;
      for (; i !== void 0 && i !== h && !r.has(i);) {
        if (i === t) return;
        (r.add(i), (i = this.getMigratedParentId(i)));
      }
      throw new Error(`Parent ${e} is not in the tree`);
    }
    assertNoCycle(e, t) {
      let r = this.store.getRoot(),
        i = new Set(),
        s = t;
      for (; s !== void 0 && s !== h && !i.has(s);) {
        if ((o(s !== e, () => `Moving ${e} into ${t} would create a cycle`), s === r)) return;
        (i.add(s), (s = this.getMigratedParentId(s)));
      }
    }
    generateRandomId() {
      let e = this.idGenerator.generate();
      for (; this.nodeExistsAnywhere(e);) e = this.idGenerator.generate();
      return e;
    }
    nodeExistsAnywhere(e) {
      return (
        this.getChildBranchNodeIdsSnapshot().has(e) ||
        this.store.getObjectKey(e, "id") !== void 0 ||
        this.getAddedNodeParentIds().has(e)
      );
    }
    getAddedNodeParentIds() {
      return (
        this.sharedData.addedNodeParentIds || (this.sharedData.addedNodeParentIds = new Map()),
        this.sharedData.addedNodeParentIds
      );
    }
    getReaddedNodeIds() {
      return (
        this.sharedData.readdedNodeIds || (this.sharedData.readdedNodeIds = new Set()),
        this.sharedData.readdedNodeIds
      );
    }
    inheritReaddedNodes() {
      let e = this.sharedData.readdedNodeIds;
      if (e !== void 0)
        for (let t of e) {
          (o(!this.store.getHierarchy().inTree(t), () => `Node ${t} already exists`),
            this.store.getBranchOwnWriteIndex().getOwnWriteSummary(t) !== void 0 &&
              this.diffs.push({ type: "inheritNode", id: t }));
          for (let r of this.store.getChildrenIds(t))
            this.store.hasOwnOverridingRow(r, "parentid") &&
              this.diffs.push({ type: "removeNode", id: r });
        }
    }
    getChildBranchNodeIdsSnapshot() {
      if (this.sharedData.childBranchNodeIdsSnapshot !== void 0)
        return this.sharedData.childBranchNodeIdsSnapshot;
      let e = new Set();
      for (let [t, r] of this.store.table.branches) {
        if (t === l) continue;
        let i = r.columns;
        for (let s = 0; s < i.length; s++) i.key.get(s) === "parentid" && e.add(i.id.get(s));
      }
      return ((this.sharedData.childBranchNodeIdsSnapshot = e), e);
    }
    writeField(e, t, r) {
      (this.validateWrite([e], t),
        this.diffs.push({ type: "writeField", id: e, key: t, value: r }));
    }
    writeNestedField(e, t, r) {
      (this.validateWrite(e, t),
        this.diffs.push({ type: "writeNestedField", path: e, key: t, value: r }));
    }
    validateWrite(e, t) {
      o(!(t in C), () => `Cannot write "${t}"`);
      let r = e[0];
      this.validateNodeEdit(r, () => `write "${e.join(".")}.${t}"`);
    }
    validateNodeEdit(e, t) {
      (o(e !== p, "Cannot edit branch data"),
        o(!this.store.table.branches.has(e), "Cannot edit branch data"));
      let r = this.visitedNodes.getCurrentNodeId();
      (o(r !== void 0, () => `Attempting to ${t()} with no iteration in progress`),
        o(e === r, () => `Attempting to ${t()} while visiting ${r}`));
    }
    assertIsNodeId(e) {
      o(
        F(this.store.getHierarchy(), e) === e,
        () =>
          `"${e}" is not a Node ID. For an override entry use the *OverrideField methods. Nested path writes are not supported.`
      );
    }
    addField(e, t, r) {
      (this.assertIsNodeId(e),
        this.store.hasOwnRow(e, "id") &&
          (o(!this.ownsField(e, t), () => `Node ${e} already has ${t}`), this.writeField(e, t, r)));
    }
    updateField(e, t, r) {
      (this.assertIsNodeId(e),
        this.ownsField(e, t) &&
          this.writeField(e, t, this.keepAtomicObjects(this.store.getCurrentValue(e, t), r)));
    }
    deleteField(e, t) {
      (this.assertIsNodeId(e), this.ownsField(e, t) && this.writeField(e, t, h));
    }
    renameField(e, t, r) {
      if ((this.assertIsNodeId(e), !!this.hasOwn(e, t))) {
        if ((o(!this.ownsField(e, r), () => `Node ${e} already has ${r}`), !g(this.store, e, t))) {
          this.store.base !== void 0 &&
            g(this.store.base, e, t) &&
            !this.store.hasOwnOverridingRow(e, r) &&
            this.writeField(e, r, h);
          return;
        }
        (this.writeField(e, t, h),
          this.writeField(
            e,
            r,
            this.keepAtomicObjects(this.store.getCurrentValue(e, t), this.store.getObjectKey(e, t))
          ));
      }
    }
    addOverrideField(e, t, r) {
      let i = u(e),
        s = i[i.length - 1],
        d = i.slice(0, -1).join(".");
      !this.store.hasOwnRow(d, s) ||
        !this.hasOverrideEntry(i) ||
        (o(!this.ownsField(e, t), () => `Override "${e}" already has ${t}`),
        this.writeNestedField(i, t, r));
    }
    updateOverrideField(e, t, r) {
      let i = u(e);
      !this.hasOverrideEntry(i) ||
        !this.ownsField(e, t) ||
        this.writeNestedField(i, t, this.keepAtomicObjects(this.store.getCurrentValue(e, t), r));
    }
    deleteOverrideField(e, t) {
      let r = u(e);
      !this.hasOverrideEntry(r) || !this.ownsField(e, t) || this.writeNestedField(r, t, h);
    }
    renameOverrideField(e, t, r) {
      let i = u(e);
      if (!(!this.hasOverrideEntry(i) || !this.hasOwn(e, t))) {
        if (
          (o(!this.ownsField(e, r), () => `Override "${e}" already has ${r}`), !g(this.store, e, t))
        ) {
          this.store.base !== void 0 &&
            g(this.store.base, e, t) &&
            !this.store.hasOwnOverridingRow(e, r) &&
            this.writeNestedField(i, r, h);
          return;
        }
        (this.writeNestedField(i, t, h),
          this.writeNestedField(
            i,
            r,
            this.keepAtomicObjects(this.store.getCurrentValue(e, t), this.store.getObjectKey(e, t))
          ));
      }
    }
    keepAtomicObjects(e, t) {
      if (t instanceof N) return t;
      if (y(t)) {
        if (O(e)) return new N(t);
        if (!R(e)) return t;
        let i = w(e),
          s;
        for (let [d, a] of Object.entries(t)) {
          let c = this.keepAtomicObjects(this.store.getCurrentValue(i, d), a);
          c !== a && ((s ??= { ...t }), (s[d] = c));
        }
        return s ?? t;
      }
      if (!Array.isArray(t)) return t;
      let r;
      for (let i = 0; i < t.length; i++) {
        let s = t[i],
          d = this.keepAtomicObjects(this.getCurrentArrayItem(e, s, i), s);
        d !== s && ((r ??= [...t]), (r[i] = d));
      }
      return r ?? t;
    }
    getCurrentArrayItem(e, t, r) {
      if (Array.isArray(e)) return e[r];
      if (!_(e) || !y(t)) return;
      let i = this.store.extractIdFromObject?.(t);
      if (i === void 0) {
        let s =
          typeof t.id == "string" ? t.id : typeof t.identifier == "string" ? t.identifier : void 0;
        if (s === void 0) return;
        i = `${w(e)}.${s}`;
      }
      return S(i);
    }
    ownsField(e, t) {
      return g(this.store, e, t) && this.hasOwn(e, t);
    }
    hasOverrideEntry(e) {
      for (let t = 1; t < e.length; t++)
        if (!g(this.store, e.slice(0, t).join("."), e[t])) return !1;
      return !0;
    }
    hasOwn(e, t) {
      return this.store.hasOwnOverridingRow(e, t) ? !0 : this.hasOwnNestedOverridingRow(e, t);
    }
    hasOwnNestedOverridingRow(e, t) {
      if (this.isMainBranch()) return !1;
      let r = A(e, t);
      if (r === void 0) return !1;
      let i = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(r);
      if (!i) return !1;
      let s = `${e}.${t}`,
        d = `${s}.`;
      for (let [a, c] of i.latestPropertyRowIndexByStoreId)
        if (!(a !== s && !a.startsWith(d))) {
          for (let V of c.keys()) if (this.store.hasOwnOverridingRow(a, V)) return !0;
        }
      return !1;
    }
    isMainBranch() {
      return this.getBranchId() === l;
    }
    getBranchId() {
      return this.store.branchId;
    }
    getDiffs() {
      return this.diffs;
    }
  };
function u(n) {
  let e = n.split(".replicaInfo.overrides.");
  o(
    e.length === 2,
    () => `Expected: "{replicaId}.replicaInfo.overrides.{originalId}", got: "${n}"`
  );
  let [t, r] = e;
  return (
    o(t && t.length > 0, () => `Invalid replicaId: "${t}"`),
    o(r && r.length > 0, () => `Invalid originalId: "${r}"`),
    [t, "replicaInfo", "overrides", r]
  );
}
var m = class n {
  constructor(e, t, r = [], i = !1) {
    this.store = e;
    this.visitedNodes = t;
    this.filters = r;
    this.owned = i;
  }
  store;
  visitedNodes;
  filters;
  owned;
  getOne(e) {
    if (
      !(!this.store.getHierarchy().inTree(e) || !this.store.isMaterializableNode(e)) &&
      !(
        this.owned &&
        this.store.branchId !== l &&
        !this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e)
      ) &&
      this.matchesFilters(e, this.filters)
    )
      return $(this.store, e);
  }
  getRoot() {
    let e = this.store.getRoot(),
      t = e === void 0 ? void 0 : this.getOne(e);
    return (o(t !== void 0, "Tree has no available root node"), t);
  }
  visit(e, t) {
    let r = this.getOne(e);
    if (r) {
      this.visitedNodes.enter(e);
      try {
        t(r);
      } finally {
        this.visitedNodes.exit(e);
      }
    }
  }
  where(e, t) {
    let r = [...this.filters, { key: e, value: t }];
    return new n(this.store, this.visitedNodes, r, this.owned);
  }
  own() {
    return new n(this.store, this.visitedNodes, this.filters, !0);
  }
  *[Symbol.iterator]() {
    let e = this.filters.find((r) => r.key === "__class"),
      t = this.filters.filter((r) => r !== e);
    for (let r of this.getNodeIds(e))
      if (this.store.isMaterializableNode(r) && this.matchesFilters(r, t)) {
        this.visitedNodes.enter(r);
        try {
          yield $(this.store, r);
        } finally {
          this.visitedNodes.exit(r);
        }
      }
  }
  getNodeIds(e) {
    let t = e && W(e);
    return this.owned && this.store.branchId !== l
      ? U(this.store, t)
      : t
        ? L(this.store, t)
        : H(this.store);
  }
  matchesFilters(e, t) {
    for (let r of t) {
      let i = this.store.getObjectKey(e, r.key);
      if (r.key === "__class" && Array.isArray(r.value)) {
        if (!r.value.includes(i)) return !1;
      } else if (i !== r.value) return !1;
    }
    return !0;
  }
};
function W(n) {
  return Array.isArray(n.value) ? n.value : typeof n.value == "string" ? [n.value] : [];
}
function* H(n) {
  let e = n.getRoot();
  if (e === void 0) return;
  let t = [e];
  for (; t.length > 0;) {
    let r = t.pop();
    if (r === void 0) continue;
    yield r;
    let i = n.getChildrenIds(r);
    for (let s = i.length - 1; s >= 0; --s) t.push(i[s]);
  }
}
function* L(n, e) {
  let t = n.getIndex(D);
  for (let r of e) yield* t.iterateByClass(r);
}
function* U(n, e) {
  let t = n.getHierarchy();
  for (let r of n.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites())
    t.inTree(r) && ((e && !e.includes(n.getObjectKey(r, "__class"))) || (yield r));
}
function G(n) {
  return n !== I && !(n in C);
}
function P(n) {
  return n !== I;
}
function g(n, e, t) {
  let r = n.getCurrentRawValueOrDoesNotExist(e, t);
  return r !== x && r !== h && r !== K;
}
var q = "replicaInfo.overrides";
function Y(n, e) {
  return {
    id: e,
    get(t) {
      return n.getObjectKey(e, t);
    },
    *keys() {
      for (let t of n.getObjectKeys(e, P)) g(n, e, t) && (yield t);
    },
  };
}
function $(n, e) {
  return {
    id: e,
    get __class() {
      return n.getObjectKey(e, "__class");
    },
    get(t) {
      return n.getObjectKey(e, t);
    },
    *overrides() {
      let t = `${e}.${q}`;
      for (let r of n.getObjectKeys(t, P)) g(n, t, r) && (yield Y(n, `${t}.${r}`));
    },
    *keys() {
      for (let t of n.getObjectKeys(e, G)) g(n, e, t) && (yield t);
    },
    get childrenIds() {
      return n.getChildrenIds(e);
    },
    get parentId() {
      let t = n.getParentId(e);
      return t === h ? void 0 : t;
    },
  };
}
function ue(n, e, t = {}) {
  let r = z(n),
    i = {},
    s = t.idGenerator ?? new f(),
    d = j(n, e, r, i, s);
  T(n, r, d);
}
function z(n) {
  let e = k(n),
    t = new Set(),
    r = [l];
  for (; r.length > 0;) {
    let d = r.pop();
    if (!(d === void 0 || t.has(d))) {
      t.add(d);
      for (let a of e.get(d) ?? []) r.push(a);
    }
  }
  let s = [...e.values()].flat().filter((d) => !t.has(d));
  if (s.length > 0) throw new Error(`Branches have missing bases: ${s.join(", ")}`);
  return e;
}
function j(n, e, t, r, i, s = new Map()) {
  s.set(n.branchId, B(n, e, r, i));
  let d = t.get(n.branchId);
  if (d)
    for (let a of d) {
      let c = n.branch(a);
      (j(c, e, t, r, i, s), n.branches.pop());
    }
  return s;
}
function T(n, e, t) {
  let r = t.get(n.branchId) ?? [];
  n.preservingInheritedValues(() => {
    n.batch(() => {
      for (let s of r)
        switch (s.type) {
          case "addNode":
            n.insertNode({ ...s.node }, s.parentId, s.position);
            break;
          case "moveNode":
            n.moveNode(s.id, s.parentId, s.position);
            break;
          case "removeNode":
            n.removeNode(s.id);
            break;
          case "inheritNode":
            n.inheritNode(s.id);
            break;
          case "writeField":
            n.updateNode(s.id, { [s.key]: s.value });
            break;
          case "writeNestedField":
            n.updateNestedObject(s.path, { [s.key]: s.value });
            break;
          default:
            M(s, "Invalid diff type");
        }
    });
  });
  let i = e.get(n.branchId);
  if (i)
    for (let s of i) {
      let d = n.branch(s);
      (T(d, e, t), n.branches.pop());
    }
}
export { ue as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-NRQG4RJP.mjs.map
