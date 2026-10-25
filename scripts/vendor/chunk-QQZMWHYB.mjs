import { c as x } from "./chunk-WLHSDIGQ.mjs";
var g = x((L, _) => {
  "use strict";
  var w = Object.prototype.hasOwnProperty,
    u = "~";
  function y() {}
  Object.create && ((y.prototype = Object.create(null)), new y().__proto__ || (u = !1));
  function P(o, e, t) {
    ((this.fn = o), (this.context = e), (this.once = t || !1));
  }
  function d(o, e, t, r, c) {
    if (typeof t != "function") throw new TypeError("The listener must be a function");
    var i = new P(t, r || o, c),
      s = u ? u + e : e;
    return (
      o._events[s]
        ? o._events[s].fn
          ? (o._events[s] = [o._events[s], i])
          : o._events[s].push(i)
        : ((o._events[s] = i), o._eventsCount++),
      o
    );
  }
  function m(o, e) {
    --o._eventsCount === 0 ? (o._events = new y()) : delete o._events[e];
  }
  function l() {
    ((this._events = new y()), (this._eventsCount = 0));
  }
  l.prototype.eventNames = function () {
    var e = [],
      t,
      r;
    if (this._eventsCount === 0) return e;
    for (r in (t = this._events)) w.call(t, r) && e.push(u ? r.slice(1) : r);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  };
  l.prototype.listeners = function (e) {
    var t = u ? u + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var c = 0, i = r.length, s = new Array(i); c < i; c++) s[c] = r[c].fn;
    return s;
  };
  l.prototype.listenerCount = function (e) {
    var t = u ? u + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  };
  l.prototype.emit = function (e, t, r, c, i, s) {
    var a = u ? u + e : e;
    if (!this._events[a]) return !1;
    var n = this._events[a],
      p = arguments.length,
      h,
      f;
    if (n.fn) {
      switch ((n.once && this.removeListener(e, n.fn, void 0, !0), p)) {
        case 1:
          return (n.fn.call(n.context), !0);
        case 2:
          return (n.fn.call(n.context, t), !0);
        case 3:
          return (n.fn.call(n.context, t, r), !0);
        case 4:
          return (n.fn.call(n.context, t, r, c), !0);
        case 5:
          return (n.fn.call(n.context, t, r, c, i), !0);
        case 6:
          return (n.fn.call(n.context, t, r, c, i, s), !0);
      }
      for (f = 1, h = new Array(p - 1); f < p; f++) h[f - 1] = arguments[f];
      n.fn.apply(n.context, h);
    } else {
      var C = n.length,
        v;
      for (f = 0; f < C; f++)
        switch ((n[f].once && this.removeListener(e, n[f].fn, void 0, !0), p)) {
          case 1:
            n[f].fn.call(n[f].context);
            break;
          case 2:
            n[f].fn.call(n[f].context, t);
            break;
          case 3:
            n[f].fn.call(n[f].context, t, r);
            break;
          case 4:
            n[f].fn.call(n[f].context, t, r, c);
            break;
          default:
            if (!h) for (v = 1, h = new Array(p - 1); v < p; v++) h[v - 1] = arguments[v];
            n[f].fn.apply(n[f].context, h);
        }
    }
    return !0;
  };
  l.prototype.on = function (e, t, r) {
    return d(this, e, t, r, !1);
  };
  l.prototype.once = function (e, t, r) {
    return d(this, e, t, r, !0);
  };
  l.prototype.removeListener = function (e, t, r, c) {
    var i = u ? u + e : e;
    if (!this._events[i]) return this;
    if (!t) return (m(this, i), this);
    var s = this._events[i];
    if (s.fn) s.fn === t && (!c || s.once) && (!r || s.context === r) && m(this, i);
    else {
      for (var a = 0, n = [], p = s.length; a < p; a++)
        (s[a].fn !== t || (c && !s[a].once) || (r && s[a].context !== r)) && n.push(s[a]);
      n.length ? (this._events[i] = n.length === 1 ? n[0] : n) : m(this, i);
    }
    return this;
  };
  l.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = u ? u + e : e), this._events[t] && m(this, t))
        : ((this._events = new y()), (this._eventsCount = 0)),
      this
    );
  };
  l.prototype.off = l.prototype.removeListener;
  l.prototype.addListener = l.prototype.on;
  l.prefixed = u;
  l.EventEmitter = l;
  typeof _ < "u" && (_.exports = l);
});
function b(o) {
  let e = o.annotations?.framerComponentPresetProps;
  return e
    ? new Set(
        e
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      )
    : new Set();
}
function A(o, e) {
  if (!o) return {};
  let t = e === "onlyPresets",
    r = b(o);
  if (r.size === 0) return t ? {} : o.properties;
  let c = {};
  for (let i in o.properties) {
    if (r.has(i) !== t) continue;
    let a = o.properties[i];
    a && (c[i] = a);
  }
  return c;
}
export { g as a, b, A as c };
//# sourceMappingURL=https://app.framerstatic.com/chunk-QQZMWHYB.mjs.map
