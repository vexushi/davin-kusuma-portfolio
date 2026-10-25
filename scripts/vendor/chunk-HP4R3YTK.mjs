import { n as m, v as p } from "./chunk-YVU36PW7.mjs";
import { Pk as n, ci as r, ic as o, li as s } from "./chunk-KHAT6QH3.mjs";
import { b as a } from "./chunk-Y3GZLMBF.mjs";
function z(e, l, f, d) {
  let { imageSize: t, originalFilename: c } = l,
    g = a(e.fillImage) ? n(e.fillImage)?.preferredSize : void 0,
    i = {
      fillType: "image",
      fillImage: p(l, d ?? g, f),
      fillImageOriginalName: c,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...F(e),
    };
  if ((r(e) && e.fillEnabled === !1 && (i.fillEnabled = !0), o(e))) {
    let { nonZeroNaturalWidth: u, nonZeroNaturalHeight: h } = m(t);
    ((i.intrinsicWidth = u), (i.intrinsicHeight = h));
  }
  e.set(i);
}
function F(e) {
  if (s(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
export { z as a };
//# sourceMappingURL=https://app.framerstatic.com/chunk-HP4R3YTK.mjs.map
