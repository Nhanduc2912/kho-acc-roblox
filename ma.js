}, function(c, d) {
    n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d)
          , g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function(b, c, d) {
            var e;
            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
    }
})
}),
n.fn.extend({
bind: function(a, b, c) {
    return this.on(a, null, b, c)
},
unbind: function(a, b) {
    return this.off(a, null, b)
},
delegate: function(a, b, c, d) {
    return this.on(b, a, c, d)
},
undelegate: function(a, b, c) {
    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
}
}),
n.fn.size = function() {
return this.length
}
,
n.fn.andSelf = n.fn.addBack,
"function" == typeof define && define.amd && define("jquery", [], function() {
return n
});
var nc = a.jQuery
, oc = a.$;
return n.noConflict = function(b) {
return a.$ === n && (a.$ = oc),
b && a.jQuery === n && (a.jQuery = nc),
n
}
,
b || (a.jQuery = a.$ = n),
n
});
