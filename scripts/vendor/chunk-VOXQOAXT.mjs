import { m } from "./chunk-I5EFRSXX.mjs";
import { g as n } from "./chunk-VHFKZWVR.mjs";
var t = n();
function a(r, o, e, i) {
  m.isTest ||
    (m.debugPerformance &&
      (e || (e = performance.now()),
      e >= o &&
        (t
          ? console.timeStamp(r, o, e, i)
          : (performance.measure(r, { start: o, end: e, detail: { devtool: { track: i } } }),
            performance.clearMeasures(r)))));
}
export { a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-VOXQOAXT.mjs.map
