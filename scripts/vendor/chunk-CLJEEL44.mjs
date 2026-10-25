import { Ci as B, xi as j } from "./chunk-UDNVJCNV.mjs";
import { Hb as C, xb as b, yb as c } from "./chunk-KHAT6QH3.mjs";
import { a as P, c as K } from "./chunk-SMHMQ5IL.mjs";
import { a as V } from "./chunk-2FCXHKEL.mjs";
import { a as y } from "./chunk-SWYZG2NI.mjs";
import { b as A, c as N } from "./chunk-4JY5UMT2.mjs";
import { i as W } from "./chunk-WBI6GGAG.mjs";
import { e as S } from "./chunk-WLHSDIGQ.mjs";
var H = S(y());
function $(e) {
  let t = /(.*?\.[tj]sx?)_.*/.exec(e);
  return t?.[1] ? t[1] : e;
}
function q(e, t, n) {
  let r = n?.file ?? $(e);
  return {
    class: Q(t),
    depth: e.startsWith(".") || c(e) ? 0 : 1,
    error: t,
    file: r,
    identifier: e,
    name: O(r),
    packageIdentifier: "<unknown>",
    properties: {},
    type: "component",
    update: 0,
    ...n,
  };
}
function O(e) {
  return e.startsWith("./") ? e.slice(2) : e;
}
function Q(e) {
  return class extends H.default.Component {
    render() {
      throw e;
    }
  };
}
var g = S(y(), 1);
function _(e) {
  let t = (0, g.useCallback)((r) => e.subscribeToFastRefreshCommit(r), [e]),
    n = (0, g.useCallback)(() => e.fastRefreshCommitId, [e]);
  return (0, g.useSyncExternalStore)(t, n, n);
}
function X(e, t, n) {
  if (e === t) return !0;
  if (!n) return !1;
  let r = n(e);
  return r !== void 0 && r === n(t);
}
function U(e) {
  return e.evaluationResultChanged
    ? e.next === void 0
      ? { action: "keep" }
      : e.mounted === void 0
        ? { action: "swap", reason: "initial" }
        : e.kind !== "fast-refresh"
          ? { action: "swap", reason: "not-fast-refresh" }
          : e.fastRefreshResult
            ? e.fastRefreshResult.error !== void 0
              ? { action: "swap", reason: "refresh-failed" }
              : X(e.mounted, e.next, e.getFamilyByType)
                ? { action: "keep" }
                : { action: "swap", reason: "different-family" }
            : { action: "swap", reason: "no-refresh-result" }
    : { action: "keep" };
}
function G() {
  if (!(typeof window > "u")) return window.reactRefreshRuntime?.getFamilyByType;
}
var s = S(y(), 1),
  Y = S(V(), 1),
  m = W("useModuleState");
function we(e, t) {
  let [n, r] = (0, s.useState)(() => k(t, e)),
    o = (0, s.useRef)(n);
  o.current = n;
  let a = K(
      (d) => {
        let i = typeof d == "function" ? d(o.current) : d;
        ((o.current = i), r(i));
      },
      [r]
    ),
    u = _(e),
    x = (0, s.useRef)(u),
    l = (0, s.useRef)(u);
  l.current = u;
  let M = (0, s.useRef)(t && c(t) ? e.getLocalModuleExports(t) : void 0),
    z = (0, s.useCallback)(
      ({ children: d }) =>
        (0, Y.jsx)(I, {
          moduleIdentifier: t,
          modulesRuntime: e,
          commitId: l.current,
          setInternalState: a,
          children: d,
        }),
      [t, e, a]
    );
  return (
    s.default.useEffect(() => {
      if (u === x.current) return;
      x.current = u;
      let d = o.current;
      if (!t || d.status !== "error" || d.moduleIdentifier !== t) return;
      let i = k(t, e);
      (a(i), i.status !== "error" && m.debug("error cleared", { commitId: u }));
    }, [u, t, e, a]),
    s.default.useEffect(() => {
      if (!t) return;
      if (n.moduleIdentifier && t !== n.moduleIdentifier) {
        let i = k(t, e);
        a(i);
      }
      if (c(t))
        return (
          (M.current = e.getLocalModuleExports(t)),
          e.subscribeToLocalModuleExports(t, (i, p, ae, J) => {
            let L = i !== M.current;
            if (((M.current = i), p === "fast-refresh")) {
              let f = o.current,
                h = v(i, t, e.componentLoader, p, e.isReloadingLocalModules),
                T = U({
                  mounted: f.status === "success" ? f.definition.class : void 0,
                  next: h.status === "success" ? h.definition.class : void 0,
                  evaluationResultChanged: L,
                  kind: p,
                  fastRefreshResult: J,
                  getFamilyByType: G(),
                }),
                R = h;
              (T.action === "keep"
                ? (m.trace("consumer kept", { module: t }),
                  (!L || h.status !== "success" || Z(f, h, t)) && (R = f))
                : m.debug("consumer remount", { module: t, reason: T.reason }),
                R !== f && a(R));
            } else {
              let f = v(i, t, e.componentLoader, p, e.isReloadingLocalModules);
              a(f);
            }
          })
        );
      b(t) &&
        a((i) =>
          i.status === "loading" || i.moduleIdentifier !== t ? i : E(i.definition, t, "server")
        );
      let d = !0;
      return (
        ne(t, e)
          .then((i) => {
            if (!d) return;
            let p = E(i, t, "server");
            a(p);
          })
          .catch(m.reportError),
        () => {
          d = !1;
        }
      );
    }, [t, e, a]),
    [n, z]
  );
}
function k(e, t) {
  if (!e) return { status: "inactive", moduleIdentifier: e, definition: void 0 };
  if (c(e)) {
    let n = t.getLocalModuleExports(e),
      r = t.getEvaluatedModule(e)?.kind ?? "server";
    return v(n, e, t.componentLoader, r, t.isReloadingLocalModules);
  } else if (b(e)) {
    let n = t.componentLoader.componentForIdentifier(e) ?? t.componentLoader.errorForIdentifier(e);
    return n ? E(n, e, "server") : { status: "loading", moduleIdentifier: e };
  }
  N(e);
}
function Z(e, t, n) {
  return (
    e.status === "success" &&
    t.status === "success" &&
    e.moduleIdentifier === n &&
    ee(e.definition.annotations, t.definition.annotations) &&
    te(e.definition.properties, t.definition.properties)
  );
}
function ee(e, t) {
  return (
    e?.framerContractVersion === t?.framerContractVersion &&
    e?.framerSupportedLayoutHeight === t?.framerSupportedLayoutHeight &&
    e?.framerSupportedLayoutWidth === t?.framerSupportedLayoutWidth &&
    e?.framerIntrinsicHeight === t?.framerIntrinsicHeight &&
    e?.framerIntrinsicWidth === t?.framerIntrinsicWidth
  );
}
function te(e, t) {
  return P(F(e), F(t));
}
function F(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    r &&
      (r.type === "object"
        ? (t[n] = { ...F(r.controls), ...r.defaultValue })
        : "defaultValue" in r && (t[n] = r.defaultValue));
  }
  return t;
}
async function ne(e, t) {
  let n = C(e);
  await t.ensureExternalModuleLoaded(n).catch(m.reportError);
  let r = t.componentLoader.componentForIdentifier(e) ?? t.componentLoader.errorForIdentifier(e);
  return (A(r, () => `expected either component or error definition to be present for ${e}`), r);
}
function v(e, t, n, r, o) {
  if (!e) return { status: "loading", moduleIdentifier: t, kind: void 0 };
  let a = n.renderableComponentForIdentifier(t);
  if (a) return E(a, t, r);
  if (o) return { status: "loading", moduleIdentifier: t, kind: void 0 };
  let u = n.errorForIdentifier(t);
  return E(u, t, r);
}
function E(e, t, n) {
  if (!e) {
    e = q(t, "Unknown");
    let { title: r, message: o } = w(e, void 0);
    return {
      status: "error",
      moduleIdentifier: t,
      title: r,
      message: o,
      definition: void 0,
      kind: void 0,
    };
  }
  if (B(e)) {
    let { title: r, message: o } = w(e, void 0);
    return {
      status: "error",
      title: r,
      message: o,
      moduleIdentifier: t,
      definition: void 0,
      kind: void 0,
    };
  }
  if (!j(e)) throw new Error(`AssertionError: unexpected definition: ${e.type}`);
  return { status: "success", definition: e, moduleIdentifier: t, kind: n };
}
function w(e, t) {
  let n = e && "error" in e ? e.error : t instanceof Error ? t.message : "" + t,
    r = re(e),
    o = n.match(/^Unable to resolve specifier '(?<specifier>[^']*)'/u);
  o &&
    o.groups?.specifier &&
    ((n = `Unable to resolve '${o.groups.specifier}'
You may need to reload your tab`),
    (r = void 0));
  let a = n.match(/blob:https?:\/\/[^\s"')]+/u);
  return (a?.[0] && (n = n.replace(a[0], "<module url>")), { message: n, title: r });
}
var D = "Error";
function re(e) {
  if (!e) return D;
  let { identifier: t, file: n, name: r } = e,
    o = C(t);
  return oe(o, n, r);
}
function oe(e, t, n) {
  return c(e) ? (e.type === "codeFile" ? `Error in ${ie(t)}` : n ? `Error in ${n}` : D) : D;
}
function ie(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
var I = class extends s.default.PureComponent {
  state = { hasError: !1 };
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  setRuntimeError(t) {
    let { moduleIdentifier: n, modulesRuntime: r, setInternalState: o } = this.props,
      a = n
        ? (r.componentLoader.componentForIdentifier(n) ?? r.componentLoader.errorForIdentifier(n))
        : void 0,
      { title: u, message: x } = w(a, t);
    (o((l) =>
      l.status === "inactive"
        ? l
        : {
            status: "error",
            moduleIdentifier: l.moduleIdentifier,
            definition: void 0,
            title: u,
            message: x,
            kind: void 0,
          }
    ),
      this.setState({ hasError: !1 }));
  }
  componentDidCatch(t) {
    (m.debug("error caught", { message: t.message, commitId: this.props.commitId }),
      this.setRuntimeError(t));
  }
  render() {
    return this.state?.hasError ? null : this.props.children;
  }
};
export { q as a, U as b, G as c, _ as d, we as e, ne as f, re as g, oe as h };
//# sourceMappingURL=https://app.framerstatic.com/chunk-CLJEEL44.mjs.map
