import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  g as p,
  h as m,
  i as h,
  n as g,
  r as _,
  t as v,
  w as y,
  y as b,
} from "./react.Dlpel5Rf.mjs";
import {
  $ as x,
  B as S,
  G as C,
  H as w,
  J as T,
  L as E,
  R as D,
  W as O,
  X as k,
  at as A,
  c as j,
  d as M,
  dt as N,
  i as P,
  o as F,
  pt as I,
  q as L,
  rt as R,
  u as z,
  z as B,
} from "./framer.v3y4Hoe9.mjs";
async function V({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: u,
  contentLocaleId: p,
  shouldResolveInitialRouteContentState: m = !1,
}) {
  let g = W[e].page.preload();
  (T({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    L(J));
  let _ = f(z, {
    children: f(F, {
      children: f(M, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        canonicalPathVariables: r,
        routes: W,
        collectionUtils: K,
        serverDatabaseClient: q,
        framerSiteId: J,
        notFoundPage: S(() => import(`./SitesNotFoundPage.js@1.4.EUgBPcMZ.mjs`)),
        isReducedMotion: void 0,
        localeId: i,
        locales: G,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://davinkusuma.framer.website`,
        EditorBar:
          s === void 0
            ? void 0
            : (() => {
                if (X) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return S(async () => {
                  s.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: x, useLocaleInfo: R, useRouter: A },
                    react: {
                      createElement: f,
                      Fragment: o,
                      memo: c,
                      useCallback: a,
                      useEffect: b,
                      useRef: d,
                      useState: l,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new j(
          () => import("./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.CvAQ6EBT.mjs")
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: p,
      }),
    }),
    value: { routes: {} },
  });
  return (await g, _);
}
function H() {
  Y && s.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || s.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    H(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = O(W, r)));
    else {
      O(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = E(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = V({
      routeId: r,
      localeId: a,
      contentLocaleId: o,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    s !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          o = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          s.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: J,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: s.location.href,
              hostname: s.location.hostname || null,
              pathname: s.location.pathname || null,
              hash: s.location.hash || null,
              search: s.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await I({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (N(`framer-rewrite-breakpoints`, () => {
          (C(u), s.__framer_onRewriteBreakpoints?.(u));
        }),
        (X ? (e) => e() : i)(() => {
          (w(), k(), v(t, p, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y, X;
e(() => {
  if (
    (n(),
    B(),
    y(),
    u(),
    g(),
    (W = {
      augiA20Il: {
        elements: {},
        page: S(() => import("./Nx_SpystONbWTIZDom5PAMRTEhaYz2iivEL4hEwZeS0.CPivZfOf.mjs")),
        path: `/`,
      },
      M_jvSiMT7: {
        elements: {},
        page: S(() => import("./6k5fffVFJXX0_i6fczR6jKBF1fqMjNeRtR8i4sDPY2s.DfaO466b.mjs")),
        path: `/cat-notes`,
      },
      xs_Q6y_ZJ: {
        elements: {},
        page: S(() => import("./smsPHV_eCjD9jPoSxVreKV2Up279ZmkYHkDDQhUx9IY.CO7Rmdqx.mjs")),
        path: `/get-flagged`,
      },
      zkz0NFwtf: {
        elements: {},
        page: S(() => import("./NSVE2JQzfcqSyiU7kbmX8PMPBlpJX4O7e9QM9qKegb8.CER5V-z1.mjs")),
        path: `/kaimera`,
      },
      BK0u9435y: {
        elements: {},
        page: S(() => import("./K6Rb1DSHPg-NCkPqHDhZfuyh25J3ywybinLKyry90DY.CHDASLig.mjs")),
        path: `/what-stays-behind`,
      },
      CWb0qR9SC: {
        elements: {},
        page: S(() => import("./dLQ7enzIEFvCJZIOME2SN8nlG2Z8bj7YFiXyC4dTrx8.Wn-iRAv0.mjs")),
        path: `/kopycut`,
      },
    }),
    (G = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {}),
    (q = void 0),
    (J = `05dac3734af740a4936ae7af974f0eb1992f49ff195df7519cae3a1afdb4037c`),
    (Y = typeof document < `u`),
    (X = Y && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(r.userAgent)),
    Y)
  ) {
    ((s.__framer_importFromPackage = (e, t) => () =>
      f(P, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (s.__framer_events = s.__framer_events || []),
      D());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.6pCC7MsS.mjs.map
