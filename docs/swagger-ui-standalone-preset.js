! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SwaggerUIStandalonePreset = t() : e.SwaggerUIStandalonePreset = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (r[i]) return r[i].exports;
            var n = r[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "/dist", t(0)
    }([function(e, t, r) {
        e.exports = r(1)
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var n = r(2),
            s = i(n);
        r(33);
        var o = r(37),
            a = i(o),
            u = r(40),
            c = i(u),
            l = [a.default, c.default, function() {
                return {
                    components: {
                        StandaloneLayout: s.default
                    }
                }
            }];
        e.exports = l
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            u = r(3),
            c = i(u),
            l = function(e) {
                function t() {
                    return n(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), a(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.getComponent,
                            r = e.specSelectors,
                            i = t("Container"),
                            n = t("Row"),
                            s = t("Col"),
                            o = t("Topbar", !0),
                            a = t("BaseLayout", !0),
                            u = t("onlineValidatorBadge", !0),
                            l = r.loadingStatus();
                        return c.default.createElement(i, {
                            className: "swagger-ui"
                        }, o ? c.default.createElement(o, null) : null, "loading" === l && c.default.createElement("div", {
                            className: "info"
                        }, c.default.createElement("h4", {
                            className: "title"
                        }, "Loading...")), "failed" === l && c.default.createElement("div", {
                            className: "info"
                        }, c.default.createElement("h4", {
                            className: "title"
                        }, "Failed to load spec.")), "failedConfig" === l && c.default.createElement("div", {
                            className: "info",
                            style: {
                                maxWidth: "880px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                textAlign: "center"
                            }
                        }, c.default.createElement("h4", {
                            className: "title"
                        }, "Failed to load config.")), !l || "success" === l && c.default.createElement(a, null), c.default.createElement(n, null, c.default.createElement(s, null, c.default.createElement(u, null))))
                    }
                }]), t
            }(c.default.Component);
        l.propTypes = {
            errSelectors: u.PropTypes.object.isRequired,
            errActions: u.PropTypes.object.isRequired,
            specActions: u.PropTypes.object.isRequired,
            specSelectors: u.PropTypes.object.isRequired,
            layoutSelectors: u.PropTypes.object.isRequired,
            layoutActions: u.PropTypes.object.isRequired,
            getComponent: u.PropTypes.func.isRequired
        }, t.default = l
    }, function(e, t, r) {
        "use strict";
        e.exports = r(4)
    }, function(e, t, r) {
        "use strict";
        var i = r(5),
            n = r(6),
            s = r(19),
            o = r(22),
            a = r(23),
            u = r(25),
            c = r(10),
            l = r(26),
            h = r(31),
            p = r(32),
            f = (r(12), c.createElement),
            d = c.createFactory,
            m = c.cloneElement,
            g = i,
            x = {
                Children: {
                    map: n.map,
                    forEach: n.forEach,
                    count: n.count,
                    toArray: n.toArray,
                    only: p
                },
                Component: s,
                PureComponent: o,
                createElement: f,
                cloneElement: m,
                isValidElement: c.isValidElement,
                PropTypes: l,
                createClass: a.createClass,
                createFactory: d,
                createMixin: function(e) {
                    return e
                },
                DOM: u,
                version: h,
                __spread: g
            };
        e.exports = x
    }, function(e, t) {
        /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
        "use strict";

        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function i() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                var i = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== i.join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    n[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return !1
            }
        }
        var n = Object.getOwnPropertySymbols,
            s = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        e.exports = i() ? Object.assign : function(e, t) {
            for (var i, a, u = r(e), c = 1; c < arguments.length; c++) {
                i = Object(arguments[c]);
                for (var l in i) s.call(i, l) && (u[l] = i[l]);
                if (n) {
                    a = n(i);
                    for (var h = 0; h < a.length; h++) o.call(i, a[h]) && (u[a[h]] = i[a[h]])
                }
            }
            return u
        }
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return ("" + e).replace(b, "$&/")
        }

        function n(e, t) {
            this.func = e, this.context = t, this.count = 0
        }

        function s(e, t, r) {
            var i = e.func,
                n = e.context;
            i.call(n, t, e.count++)
        }

        function o(e, t, r) {
            if (null == e) return e;
            var i = n.getPooled(t, r);
            x(e, s, i), n.release(i)
        }

        function a(e, t, r, i) {
            this.result = e, this.keyPrefix = t, this.func = r, this.context = i, this.count = 0
        }

        function u(e, t, r) {
            var n = e.result,
                s = e.keyPrefix,
                o = e.func,
                a = e.context,
                u = o.call(a, t, e.count++);
            Array.isArray(u) ? c(u, n, r, g.thatReturnsArgument) : null != u && (m.isValidElement(u) && (u = m.cloneAndReplaceKey(u, s + (!u.key || t && t.key === u.key ? "" : i(u.key) + "/") + r)), n.push(u))
        }

        function c(e, t, r, n, s) {
            var o = "";
            null != r && (o = i(r) + "/");
            var c = a.getPooled(t, o, n, s);
            x(e, u, c), a.release(c)
        }

        function l(e, t, r) {
            if (null == e) return e;
            var i = [];
            return c(e, i, null, t, r), i
        }

        function h(e, t, r) {
            return null
        }

        function p(e, t) {
            return x(e, h, null)
        }

        function f(e) {
            var t = [];
            return c(e, t, null, g.thatReturnsArgument), t
        }
        var d = r(7),
            m = r(10),
            g = r(13),
            x = r(16),
            y = d.twoArgumentPooler,
            D = d.fourArgumentPooler,
            b = /\/+/g;
        n.prototype.destructor = function() {
            this.func = null, this.context = null, this.count = 0
        }, d.addPoolingTo(n, y), a.prototype.destructor = function() {
            this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
        }, d.addPoolingTo(a, D);
        var v = {
            forEach: o,
            map: l,
            mapIntoWithKeyPrefixInternal: c,
            count: p,
            toArray: f
        };
        e.exports = v
    }, function(e, t, r) {
        "use strict";
        var i = r(8),
            n = (r(9), function(e) {
                var t = this;
                if (t.instancePool.length) {
                    var r = t.instancePool.pop();
                    return t.call(r, e), r
                }
                return new t(e)
            }),
            s = function(e, t) {
                var r = this;
                if (r.instancePool.length) {
                    var i = r.instancePool.pop();
                    return r.call(i, e, t), i
                }
                return new r(e, t)
            },
            o = function(e, t, r) {
                var i = this;
                if (i.instancePool.length) {
                    var n = i.instancePool.pop();
                    return i.call(n, e, t, r), n
                }
                return new i(e, t, r)
            },
            a = function(e, t, r, i) {
                var n = this;
                if (n.instancePool.length) {
                    var s = n.instancePool.pop();
                    return n.call(s, e, t, r, i), s
                }
                return new n(e, t, r, i)
            },
            u = function(e) {
                var t = this;
                e instanceof t ? void 0 : i("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
            },
            c = 10,
            l = n,
            h = function(e, t) {
                var r = e;
                return r.instancePool = [], r.getPooled = t || l, r.poolSize || (r.poolSize = c), r.release = u, r
            },
            p = {
                addPoolingTo: h,
                oneArgumentPooler: n,
                twoArgumentPooler: s,
                threeArgumentPooler: o,
                fourArgumentPooler: a
            };
        e.exports = p
    }, function(e, t) {
        "use strict";

        function r(e) {
            for (var t = arguments.length - 1, r = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, i = 0; i < t; i++) r += "&args[]=" + encodeURIComponent(arguments[i + 1]);
            r += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var n = new Error(r);
            throw n.name = "Invariant Violation", n.framesToPop = 1, n
        }
        e.exports = r
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r, i, s, o, a, u) {
            if (n(t), !e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [r, i, s, o, a, u],
                        h = 0;
                    c = new Error(t.replace(/%s/g, function() {
                        return l[h++]
                    })), c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        }
        var n = function(e) {};
        e.exports = i
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return void 0 !== e.ref
        }

        function n(e) {
            return void 0 !== e.key
        }
        var s = r(5),
            o = r(11),
            a = (r(12), r(14), Object.prototype.hasOwnProperty),
            u = r(15),
            c = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            },
            l = function(e, t, r, i, n, s, o) {
                var a = {
                    $$typeof: u,
                    type: e,
                    key: t,
                    ref: r,
                    props: o,
                    _owner: s
                };
                return a
            };
        l.createElement = function(e, t, r) {
            var s, u = {},
                h = null,
                p = null,
                f = null,
                d = null;
            if (null != t) {
                i(t) && (p = t.ref), n(t) && (h = "" + t.key), f = void 0 === t.__self ? null : t.__self, d = void 0 === t.__source ? null : t.__source;
                for (s in t) a.call(t, s) && !c.hasOwnProperty(s) && (u[s] = t[s])
            }
            var m = arguments.length - 2;
            if (1 === m) u.children = r;
            else if (m > 1) {
                for (var g = Array(m), x = 0; x < m; x++) g[x] = arguments[x + 2];
                u.children = g
            }
            if (e && e.defaultProps) {
                var y = e.defaultProps;
                for (s in y) void 0 === u[s] && (u[s] = y[s])
            }
            return l(e, h, p, f, d, o.current, u)
        }, l.createFactory = function(e) {
            var t = l.createElement.bind(null, e);
            return t.type = e, t
        }, l.cloneAndReplaceKey = function(e, t) {
            var r = l(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
            return r
        }, l.cloneElement = function(e, t, r) {
            var u, h = s({}, e.props),
                p = e.key,
                f = e.ref,
                d = e._self,
                m = e._source,
                g = e._owner;
            if (null != t) {
                i(t) && (f = t.ref, g = o.current), n(t) && (p = "" + t.key);
                var x;
                e.type && e.type.defaultProps && (x = e.type.defaultProps);
                for (u in t) a.call(t, u) && !c.hasOwnProperty(u) && (void 0 === t[u] && void 0 !== x ? h[u] = x[u] : h[u] = t[u])
            }
            var y = arguments.length - 2;
            if (1 === y) h.children = r;
            else if (y > 1) {
                for (var D = Array(y), b = 0; b < y; b++) D[b] = arguments[b + 2];
                h.children = D
            }
            return l(e.type, p, f, d, m, g, h)
        }, l.isValidElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === u
        }, e.exports = l
    }, function(e, t) {
        "use strict";
        var r = {
            current: null
        };
        e.exports = r
    }, function(e, t, r) {
        "use strict";
        var i = r(13),
            n = i;
        e.exports = n
    }, function(e, t) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var i = function() {};
        i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
            return this
        }, i.thatReturnsArgument = function(e) {
            return e
        }, e.exports = i
    }, function(e, t, r) {
        "use strict";
        var i = !1;
        e.exports = i
    }, function(e, t) {
        "use strict";
        var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = r
    }, function(e, t, r) {
        "use strict";

        function i(e, t) {
            return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36)
        }

        function n(e, t, r, s) {
            var p = typeof e;
            if ("undefined" !== p && "boolean" !== p || (e = null), null === e || "string" === p || "number" === p || "object" === p && e.$$typeof === a) return r(s, e, "" === t ? l + i(e, 0) : t), 1;
            var f, d, m = 0,
                g = "" === t ? l : t + h;
            if (Array.isArray(e))
                for (var x = 0; x < e.length; x++) f = e[x], d = g + i(f, x), m += n(f, d, r, s);
            else {
                var y = u(e);
                if (y) {
                    var D, b = y.call(e);
                    if (y !== e.entries)
                        for (var v = 0; !(D = b.next()).done;) f = D.value, d = g + i(f, v++), m += n(f, d, r, s);
                    else
                        for (; !(D = b.next()).done;) {
                            var w = D.value;
                            w && (f = w[1], d = g + c.escape(w[0]) + h + i(f, 0), m += n(f, d, r, s))
                        }
                } else if ("object" === p) {
                    var E = "",
                        k = String(e);
                    o("31", "[object Object]" === k ? "object with keys {" + Object.keys(e).join(", ") + "}" : k, E)
                }
            }
            return m
        }

        function s(e, t, r) {
            return null == e ? 0 : n(e, "", t, r)
        }
        var o = r(8),
            a = (r(11), r(15)),
            u = r(17),
            c = (r(9), r(18)),
            l = (r(12), "."),
            h = ":";
        e.exports = s
    }, function(e, t) {
        "use strict";

        function r(e) {
            var t = e && (i && e[i] || e[n]);
            if ("function" == typeof t) return t
        }
        var i = "function" == typeof Symbol && Symbol.iterator,
            n = "@@iterator";
        e.exports = r
    }, function(e, t) {
        "use strict";

        function r(e) {
            var t = /[=:]/g,
                r = {
                    "=": "=0",
                    ":": "=2"
                },
                i = ("" + e).replace(t, function(e) {
                    return r[e]
                });
            return "$" + i
        }

        function i(e) {
            var t = /(=0|=2)/g,
                r = {
                    "=0": "=",
                    "=2": ":"
                },
                i = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
            return ("" + i).replace(t, function(e) {
                return r[e]
            })
        }
        var n = {
            escape: r,
            unescape: i
        };
        e.exports = n
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            this.props = e, this.context = t, this.refs = o, this.updater = r || s
        }
        var n = r(8),
            s = r(20),
            o = (r(14), r(21));
        r(9), r(12);
        i.prototype.isReactComponent = {}, i.prototype.setState = function(e, t) {
            "object" != typeof e && "function" != typeof e && null != e ? n("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
        }, i.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
        };
        e.exports = i
    }, function(e, t, r) {
        "use strict";

        function i(e, t) {}
        var n = (r(12), {
            isMounted: function(e) {
                return !1
            },
            enqueueCallback: function(e, t) {},
            enqueueForceUpdate: function(e) {
                i(e, "forceUpdate")
            },
            enqueueReplaceState: function(e, t) {
                i(e, "replaceState")
            },
            enqueueSetState: function(e, t) {
                i(e, "setState")
            }
        });
        e.exports = n
    }, function(e, t, r) {
        "use strict";
        var i = {};
        e.exports = i
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            this.props = e, this.context = t, this.refs = u, this.updater = r || a
        }

        function n() {}
        var s = r(5),
            o = r(19),
            a = r(20),
            u = r(21);
        n.prototype = o.prototype, i.prototype = new n, i.prototype.constructor = i, s(i.prototype, o.prototype), i.prototype.isPureReactComponent = !0, e.exports = i
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e
        }

        function n(e, t) {
            var r = b.hasOwnProperty(t) ? b[t] : null;
            w.hasOwnProperty(t) && ("OVERRIDE_BASE" !== r ? p("73", t) : void 0), e && ("DEFINE_MANY" !== r && "DEFINE_MANY_MERGED" !== r ? p("74", t) : void 0)
        }

        function s(e, t) {
            if (t) {
                "function" == typeof t ? p("75") : void 0, m.isValidElement(t) ? p("76") : void 0;
                var r = e.prototype,
                    i = r.__reactAutoBindPairs;
                t.hasOwnProperty(y) && v.mixins(e, t.mixins);
                for (var s in t)
                    if (t.hasOwnProperty(s) && s !== y) {
                        var o = t[s],
                            a = r.hasOwnProperty(s);
                        if (n(a, s), v.hasOwnProperty(s)) v[s](e, o);
                        else {
                            var l = b.hasOwnProperty(s),
                                h = "function" == typeof o,
                                f = h && !l && !a && t.autobind !== !1;
                            if (f) i.push(s, o), r[s] = o;
                            else if (a) {
                                var d = b[s];
                                !l || "DEFINE_MANY_MERGED" !== d && "DEFINE_MANY" !== d ? p("77", d, s) : void 0, "DEFINE_MANY_MERGED" === d ? r[s] = u(r[s], o) : "DEFINE_MANY" === d && (r[s] = c(r[s], o))
                            } else r[s] = o
                        }
                    }
            } else;
        }

        function o(e, t) {
            if (t)
                for (var r in t) {
                    var i = t[r];
                    if (t.hasOwnProperty(r)) {
                        var n = r in v;
                        n ? p("78", r) : void 0;
                        var s = r in e;
                        s ? p("79", r) : void 0, e[r] = i
                    }
                }
        }

        function a(e, t) {
            e && t && "object" == typeof e && "object" == typeof t ? void 0 : p("80");
            for (var r in t) t.hasOwnProperty(r) && (void 0 !== e[r] ? p("81", r) : void 0, e[r] = t[r]);
            return e
        }

        function u(e, t) {
            return function() {
                var r = e.apply(this, arguments),
                    i = t.apply(this, arguments);
                if (null == r) return i;
                if (null == i) return r;
                var n = {};
                return a(n, r), a(n, i), n
            }
        }

        function c(e, t) {
            return function() {
                e.apply(this, arguments), t.apply(this, arguments)
            }
        }

        function l(e, t) {
            var r = t.bind(e);
            return r
        }

        function h(e) {
            for (var t = e.__reactAutoBindPairs, r = 0; r < t.length; r += 2) {
                var i = t[r],
                    n = t[r + 1];
                e[i] = l(e, n)
            }
        }
        var p = r(8),
            f = r(5),
            d = r(19),
            m = r(10),
            g = (r(24), r(20)),
            x = r(21),
            y = (r(9), r(12), "mixins"),
            D = [],
            b = {
                mixins: "DEFINE_MANY",
                statics: "DEFINE_MANY",
                propTypes: "DEFINE_MANY",
                contextTypes: "DEFINE_MANY",
                childContextTypes: "DEFINE_MANY",
                getDefaultProps: "DEFINE_MANY_MERGED",
                getInitialState: "DEFINE_MANY_MERGED",
                getChildContext: "DEFINE_MANY_MERGED",
                render: "DEFINE_ONCE",
                componentWillMount: "DEFINE_MANY",
                componentDidMount: "DEFINE_MANY",
                componentWillReceiveProps: "DEFINE_MANY",
                shouldComponentUpdate: "DEFINE_ONCE",
                componentWillUpdate: "DEFINE_MANY",
                componentDidUpdate: "DEFINE_MANY",
                componentWillUnmount: "DEFINE_MANY",
                updateComponent: "OVERRIDE_BASE"
            },
            v = {
                displayName: function(e, t) {
                    e.displayName = t
                },
                mixins: function(e, t) {
                    if (t)
                        for (var r = 0; r < t.length; r++) s(e, t[r])
                },
                childContextTypes: function(e, t) {
                    e.childContextTypes = f({}, e.childContextTypes, t)
                },
                contextTypes: function(e, t) {
                    e.contextTypes = f({}, e.contextTypes, t)
                },
                getDefaultProps: function(e, t) {
                    e.getDefaultProps ? e.getDefaultProps = u(e.getDefaultProps, t) : e.getDefaultProps = t
                },
                propTypes: function(e, t) {
                    e.propTypes = f({}, e.propTypes, t)
                },
                statics: function(e, t) {
                    o(e, t)
                },
                autobind: function() {}
            },
            w = {
                replaceState: function(e, t) {
                    this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
                },
                isMounted: function() {
                    return this.updater.isMounted(this)
                }
            },
            E = function() {};
        f(E.prototype, d.prototype, w);
        var k = {
            createClass: function(e) {
                var t = i(function(e, r, i) {
                    this.__reactAutoBindPairs.length && h(this), this.props = e, this.context = r, this.refs = x, this.updater = i || g, this.state = null;
                    var n = this.getInitialState ? this.getInitialState() : null;
                    "object" != typeof n || Array.isArray(n) ? p("82", t.displayName || "ReactCompositeComponent") : void 0, this.state = n
                });
                t.prototype = new E, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], D.forEach(s.bind(null, t)), s(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render ? void 0 : p("83");
                for (var r in b) t.prototype[r] || (t.prototype[r] = null);
                return t
            },
            injection: {
                injectMixin: function(e) {
                    D.push(e)
                }
            }
        };
        e.exports = k
    }, function(e, t, r) {
        "use strict";
        var i = {};
        e.exports = i
    }, function(e, t, r) {
        "use strict";
        var i = r(10),
            n = i.createFactory,
            s = {
                a: n("a"),
                abbr: n("abbr"),
                address: n("address"),
                area: n("area"),
                article: n("article"),
                aside: n("aside"),
                audio: n("audio"),
                b: n("b"),
                base: n("base"),
                bdi: n("bdi"),
                bdo: n("bdo"),
                big: n("big"),
                blockquote: n("blockquote"),
                body: n("body"),
                br: n("br"),
                button: n("button"),
                canvas: n("canvas"),
                caption: n("caption"),
                cite: n("cite"),
                code: n("code"),
                col: n("col"),
                colgroup: n("colgroup"),
                data: n("data"),
                datalist: n("datalist"),
                dd: n("dd"),
                del: n("del"),
                details: n("details"),
                dfn: n("dfn"),
                dialog: n("dialog"),
                div: n("div"),
                dl: n("dl"),
                dt: n("dt"),
                em: n("em"),
                embed: n("embed"),
                fieldset: n("fieldset"),
                figcaption: n("figcaption"),
                figure: n("figure"),
                footer: n("footer"),
                form: n("form"),
                h1: n("h1"),
                h2: n("h2"),
                h3: n("h3"),
                h4: n("h4"),
                h5: n("h5"),
                h6: n("h6"),
                head: n("head"),
                header: n("header"),
                hgroup: n("hgroup"),
                hr: n("hr"),
                html: n("html"),
                i: n("i"),
                iframe: n("iframe"),
                img: n("img"),
                input: n("input"),
                ins: n("ins"),
                kbd: n("kbd"),
                keygen: n("keygen"),
                label: n("label"),
                legend: n("legend"),
                li: n("li"),
                link: n("link"),
                main: n("main"),
                map: n("map"),
                mark: n("mark"),
                menu: n("menu"),
                menuitem: n("menuitem"),
                meta: n("meta"),
                meter: n("meter"),
                nav: n("nav"),
                noscript: n("noscript"),
                object: n("object"),
                ol: n("ol"),
                optgroup: n("optgroup"),
                option: n("option"),
                output: n("output"),
                p: n("p"),
                param: n("param"),
                picture: n("picture"),
                pre: n("pre"),
                progress: n("progress"),
                q: n("q"),
                rp: n("rp"),
                rt: n("rt"),
                ruby: n("ruby"),
                s: n("s"),
                samp: n("samp"),
                script: n("script"),
                section: n("section"),
                select: n("select"),
                small: n("small"),
                source: n("source"),
                span: n("span"),
                strong: n("strong"),
                style: n("style"),
                sub: n("sub"),
                summary: n("summary"),
                sup: n("sup"),
                table: n("table"),
                tbody: n("tbody"),
                td: n("td"),
                textarea: n("textarea"),
                tfoot: n("tfoot"),
                th: n("th"),
                thead: n("thead"),
                time: n("time"),
                title: n("title"),
                tr: n("tr"),
                track: n("track"),
                u: n("u"),
                ul: n("ul"),
                var: n("var"),
                video: n("video"),
                wbr: n("wbr"),
                circle: n("circle"),
                clipPath: n("clipPath"),
                defs: n("defs"),
                ellipse: n("ellipse"),
                g: n("g"),
                image: n("image"),
                line: n("line"),
                linearGradient: n("linearGradient"),
                mask: n("mask"),
                path: n("path"),
                pattern: n("pattern"),
                polygon: n("polygon"),
                polyline: n("polyline"),
                radialGradient: n("radialGradient"),
                rect: n("rect"),
                stop: n("stop"),
                svg: n("svg"),
                text: n("text"),
                tspan: n("tspan")
            };
        e.exports = s
    }, function(e, t, r) {
        "use strict";
        var i = r(10),
            n = i.isValidElement,
            s = r(27);
        e.exports = s(n)
    }, function(e, t, r) {
        "use strict";
        var i = r(28);
        e.exports = function(e) {
            var t = !1;
            return i(e, t)
        }
    }, function(e, t, r) {
        "use strict";
        var i = r(13),
            n = r(9),
            s = r(12),
            o = r(29),
            a = r(30);
        e.exports = function(e, t) {
            function r(e) {
                var t = e && (S && e[S] || e[F]);
                if ("function" == typeof t) return t
            }

            function u(e, t) {
                return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
            }

            function c(e) {
                this.message = e, this.stack = ""
            }

            function l(e) {
                function r(r, i, s, a, u, l, h) {
                    if (a = a || T, l = l || s, h !== o)
                        if (t) n(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        else;
                    return null == i[s] ? r ? new c(null === i[s] ? "The " + u + " `" + l + "` is marked as required " + ("in `" + a + "`, but its value is `null`.") : "The " + u + " `" + l + "` is marked as required in " + ("`" + a + "`, but its value is `undefined`.")) : null : e(i, s, a, u, l)
                }
                var i = r.bind(null, !1);
                return i.isRequired = r.bind(null, !0), i
            }

            function h(e) {
                function t(t, r, i, n, s, o) {
                    var a = t[r],
                        u = E(a);
                    if (u !== e) {
                        var l = k(a);
                        return new c("Invalid " + n + " `" + s + "` of type " + ("`" + l + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."))
                    }
                    return null
                }
                return l(t)
            }

            function p() {
                return l(i.thatReturnsNull)
            }

            function f(e) {
                function t(t, r, i, n, s) {
                    if ("function" != typeof e) return new c("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
                    var a = t[r];
                    if (!Array.isArray(a)) {
                        var u = E(a);
                        return new c("Invalid " + n + " `" + s + "` of type " + ("`" + u + "` supplied to `" + i + "`, expected an array."))
                    }
                    for (var l = 0; l < a.length; l++) {
                        var h = e(a, l, i, n, s + "[" + l + "]", o);
                        if (h instanceof Error) return h
                    }
                    return null
                }
                return l(t)
            }

            function d() {
                function t(t, r, i, n, s) {
                    var o = t[r];
                    if (!e(o)) {
                        var a = E(o);
                        return new c("Invalid " + n + " `" + s + "` of type " + ("`" + a + "` supplied to `" + i + "`, expected a single ReactElement."))
                    }
                    return null
                }
                return l(t)
            }

            function m(e) {
                function t(t, r, i, n, s) {
                    if (!(t[r] instanceof e)) {
                        var o = e.name || T,
                            a = C(t[r]);
                        return new c("Invalid " + n + " `" + s + "` of type " + ("`" + a + "` supplied to `" + i + "`, expected ") + ("instance of `" + o + "`."))
                    }
                    return null
                }
                return l(t)
            }

            function g(e) {
                function t(t, r, i, n, s) {
                    for (var o = t[r], a = 0; a < e.length; a++)
                        if (u(o, e[a])) return null;
                    var l = JSON.stringify(e);
                    return new c("Invalid " + n + " `" + s + "` of value `" + o + "` " + ("supplied to `" + i + "`, expected one of " + l + "."))
                }
                return Array.isArray(e) ? l(t) : i.thatReturnsNull
            }

            function x(e) {
                function t(t, r, i, n, s) {
                    if ("function" != typeof e) return new c("Property `" + s + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
                    var a = t[r],
                        u = E(a);
                    if ("object" !== u) return new c("Invalid " + n + " `" + s + "` of type " + ("`" + u + "` supplied to `" + i + "`, expected an object."));
                    for (var l in a)
                        if (a.hasOwnProperty(l)) {
                            var h = e(a, l, i, n, s + "." + l, o);
                            if (h instanceof Error) return h
                        }
                    return null
                }
                return l(t)
            }

            function y(e) {
                function t(t, r, i, n, s) {
                    for (var a = 0; a < e.length; a++) {
                        var u = e[a];
                        if (null == u(t, r, i, n, s, o)) return null
                    }
                    return new c("Invalid " + n + " `" + s + "` supplied to " + ("`" + i + "`."))
                }
                if (!Array.isArray(e)) return i.thatReturnsNull;
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    if ("function" != typeof n) return s(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", A(n), r), i.thatReturnsNull
                }
                return l(t)
            }

            function D() {
                function e(e, t, r, i, n) {
                    return v(e[t]) ? null : new c("Invalid " + i + " `" + n + "` supplied to " + ("`" + r + "`, expected a ReactNode."))
                }
                return l(e)
            }

            function b(e) {
                function t(t, r, i, n, s) {
                    var a = t[r],
                        u = E(a);
                    if ("object" !== u) return new c("Invalid " + n + " `" + s + "` of type `" + u + "` " + ("supplied to `" + i + "`, expected `object`."));
                    for (var l in e) {
                        var h = e[l];
                        if (h) {
                            var p = h(a, l, i, n, s + "." + l, o);
                            if (p) return p
                        }
                    }
                    return null
                }
                return l(t)
            }

            function v(t) {
                switch (typeof t) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !t;
                    case "object":
                        if (Array.isArray(t)) return t.every(v);
                        if (null === t || e(t)) return !0;
                        var i = r(t);
                        if (!i) return !1;
                        var n, s = i.call(t);
                        if (i !== t.entries) {
                            for (; !(n = s.next()).done;)
                                if (!v(n.value)) return !1
                        } else
                            for (; !(n = s.next()).done;) {
                                var o = n.value;
                                if (o && !v(o[1])) return !1
                            }
                        return !0;
                    default:
                        return !1
                }
            }

            function w(e, t) {
                return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
            }

            function E(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : w(t, e) ? "symbol" : t
            }

            function k(e) {
                if ("undefined" == typeof e || null === e) return "" + e;
                var t = E(e);
                if ("object" === t) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp"
                }
                return t
            }

            function A(e) {
                var t = k(e);
                switch (t) {
                    case "array":
                    case "object":
                        return "an " + t;
                    case "boolean":
                    case "date":
                    case "regexp":
                        return "a " + t;
                    default:
                        return t
                }
            }

            function C(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : T
            }
            var S = "function" == typeof Symbol && Symbol.iterator,
                F = "@@iterator",
                T = "<<anonymous>>",
                B = {
                    array: h("array"),
                    bool: h("boolean"),
                    func: h("function"),
                    number: h("number"),
                    object: h("object"),
                    string: h("string"),
                    symbol: h("symbol"),
                    any: p(),
                    arrayOf: f,
                    element: d(),
                    instanceOf: m,
                    node: D(),
                    objectOf: x,
                    oneOf: g,
                    oneOfType: y,
                    shape: b
                };
            return c.prototype = Error.prototype, B.checkPropTypes = a, B.PropTypes = B, B
        }
    }, function(e, t) {
        "use strict";
        var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = r
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r, i, n) {}
        e.exports = i
    }, function(e, t) {
        "use strict";
        e.exports = "15.5.4"
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return s.isValidElement(e) ? void 0 : n("143"), e
        }
        var n = r(8),
            s = r(10);
        r(9);
        e.exports = i
    }, function(e, t, r) {
        var i = r(34);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        r(36)(i, {});
        i.locals && (e.exports = i.locals)
    }, function(e, t, r) {
        t = e.exports = r(35)(), t.push([e.id, "@charset \"UTF-8\";.swagger-ui html{box-sizing:border-box}.swagger-ui *,.swagger-ui :after,.swagger-ui :before{box-sizing:inherit}.swagger-ui body{margin:0;background:#fafafa}.swagger-ui .wrapper{width:100%;max-width:1460px;margin:0 auto;padding:0 20px}.swagger-ui .opblock-tag-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swagger-ui .opblock-tag{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 20px 10px 10px;cursor:pointer;transition:all .2s;border-bottom:1px solid rgba(59,65,81,.3);-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .opblock-tag:hover{background:rgba(0,0,0,.02)}.swagger-ui .opblock-tag{font-size:24px;margin:0 0 5px;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .opblock-tag.no-desc span{-webkit-box-flex:1;-ms-flex:1;flex:1}.swagger-ui .opblock-tag svg{transition:all .4s}.swagger-ui .opblock-tag small{font-size:14px;font-weight:400;padding:0 10px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .parаmeter__type{font-size:12px;padding:5px 0;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .view-line-link{position:relative;top:3px;width:20px;margin:0 5px;cursor:pointer;transition:all .5s}.swagger-ui .opblock{margin:0 0 15px;border:1px solid #000;border-radius:4px;box-shadow:0 0 3px rgba(0,0,0,.19)}.swagger-ui .opblock.is-open .opblock-summary{border-bottom:1px solid #000}.swagger-ui .opblock .opblock-section-header{padding:8px 20px;background:hsla(0,0%,100%,.8);box-shadow:0 1px 2px rgba(0,0,0,.1)}.swagger-ui .opblock .opblock-section-header,.swagger-ui .opblock .opblock-section-header label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .opblock .opblock-section-header label{font-size:12px;font-weight:700;margin:0;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .opblock .opblock-section-header label span{padding:0 10px 0 0}.swagger-ui .opblock .opblock-section-header h4{font-size:14px;margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .opblock .opblock-summary-method{font-size:14px;font-weight:700;min-width:80px;padding:6px 15px;text-align:center;border-radius:3px;background:#000;text-shadow:0 1px 0 rgba(0,0,0,.1);font-family:Titillium Web,sans-serif;color:#fff}.swagger-ui .opblock .opblock-summary-path,.swagger-ui .opblock .opblock-summary-path__deprecated{font-size:16px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 10px;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .opblock .opblock-summary-path .view-line-link,.swagger-ui .opblock .opblock-summary-path__deprecated .view-line-link{position:relative;top:2px;width:0;margin:0;cursor:pointer;transition:all .5s}.swagger-ui .opblock .opblock-summary-path:hover .view-line-link,.swagger-ui .opblock .opblock-summary-path__deprecated:hover .view-line-link{width:18px;margin:0 5px}.swagger-ui .opblock .opblock-summary-path__deprecated{text-decoration:line-through}.swagger-ui .opblock .opblock-summary-description{font-size:13px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .opblock .opblock-summary{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .opblock.opblock-post{border-color:#49cc90;background:rgba(73,204,144,.1)}.swagger-ui .opblock.opblock-post .opblock-summary-method{background:#49cc90}.swagger-ui .opblock.opblock-post .opblock-summary{border-color:#49cc90}.swagger-ui .opblock.opblock-put{border-color:#fca130;background:rgba(252,161,48,.1)}.swagger-ui .opblock.opblock-put .opblock-summary-method{background:#fca130}.swagger-ui .opblock.opblock-put .opblock-summary{border-color:#fca130}.swagger-ui .opblock.opblock-delete{border-color:#f93e3e;background:rgba(249,62,62,.1)}.swagger-ui .opblock.opblock-delete .opblock-summary-method{background:#f93e3e}.swagger-ui .opblock.opblock-delete .opblock-summary{border-color:#f93e3e}.swagger-ui .opblock.opblock-get{border-color:#61affe;background:rgba(97,175,254,.1)}.swagger-ui .opblock.opblock-get .opblock-summary-method{background:#61affe}.swagger-ui .opblock.opblock-get .opblock-summary{border-color:#61affe}.swagger-ui .opblock.opblock-patch{border-color:#50e3c2;background:rgba(80,227,194,.1)}.swagger-ui .opblock.opblock-patch .opblock-summary-method{background:#50e3c2}.swagger-ui .opblock.opblock-patch .opblock-summary{border-color:#50e3c2}.swagger-ui .opblock.opblock-head{border-color:#9012fe;background:rgba(144,18,254,.1)}.swagger-ui .opblock.opblock-head .opblock-summary-method{background:#9012fe}.swagger-ui .opblock.opblock-head .opblock-summary{border-color:#9012fe}.swagger-ui .opblock.opblock-options{border-color:#0d5aa7;background:rgba(13,90,167,.1)}.swagger-ui .opblock.opblock-options .opblock-summary-method{background:#0d5aa7}.swagger-ui .opblock.opblock-options .opblock-summary{border-color:#0d5aa7}.swagger-ui .opblock.opblock-deprecated{opacity:.6;border-color:#ebebeb;background:hsla(0,0%,92%,.1)}.swagger-ui .opblock.opblock-deprecated .opblock-summary-method{background:#ebebeb}.swagger-ui .opblock.opblock-deprecated .opblock-summary{border-color:#ebebeb}.swagger-ui .opblock .opblock-schemes{padding:8px 20px}.swagger-ui .opblock .opblock-schemes .schemes-title{padding:0 10px 0 0}.swagger-ui .tab{display:-webkit-box;display:-ms-flexbox;display:flex;margin:20px 0 10px;padding:0;list-style:none}.swagger-ui .tab li{font-size:12px;min-width:100px;min-width:90px;padding:0;cursor:pointer;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .tab li:first-of-type{position:relative;padding-left:0}.swagger-ui .tab li:first-of-type:after{position:absolute;top:0;right:6px;width:1px;height:100%;content:\"\";background:rgba(0,0,0,.2)}.swagger-ui .tab li.active{font-weight:700}.swagger-ui .opblock-description-wrapper,.swagger-ui .opblock-title_normal{padding:15px 20px}.swagger-ui .opblock-description-wrapper,.swagger-ui .opblock-description-wrapper h4,.swagger-ui .opblock-title_normal,.swagger-ui .opblock-title_normal h4{font-size:12px;margin:0 0 5px;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .opblock-description-wrapper p,.swagger-ui .opblock-title_normal p{font-size:14px;margin:0;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .execute-wrapper{padding:20px;text-align:right}.swagger-ui .execute-wrapper .btn{width:100%;padding:8px 40px}.swagger-ui .body-param-options{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swagger-ui .body-param-options .body-param-edit{padding:10px 0}.swagger-ui .body-param-options label{padding:8px 0}.swagger-ui .body-param-options label select{margin:3px 0 0}.swagger-ui .responses-inner{padding:20px}.swagger-ui .responses-inner h4,.swagger-ui .responses-inner h5{font-size:12px;margin:10px 0 5px;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .response-col_status{font-size:14px;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .response-col_status .response-undocumented{font-size:11px;font-family:Source Code Pro,monospace;font-weight:600;color:#999}.swagger-ui .response-col_description__inner span{font-size:12px;font-style:italic;display:block;margin:10px 0;padding:10px;border-radius:4px;background:#41444e;font-family:Source Code Pro,monospace;font-weight:600;color:#fff}.swagger-ui .response-col_description__inner span p{margin:0}.swagger-ui .opblock-body pre{font-size:12px;margin:0;padding:10px;word-wrap:break-word;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;white-space:pre-wrap;border-radius:4px;background:#41444e;overflow-wrap:break-word;font-family:Source Code Pro,monospace;font-weight:600;color:#fff}.swagger-ui .opblock-body pre span{color:#fff!important}.swagger-ui .opblock-body pre .headerline{display:block}.swagger-ui .scheme-container{margin:0 0 20px;padding:30px 0;background:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.15)}.swagger-ui .scheme-container .schemes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .scheme-container .schemes>label{font-size:12px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:-20px 15px 0 0;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .scheme-container .schemes>label select{min-width:130px;text-transform:uppercase}.swagger-ui .loading-container{padding:40px 0 60px}.swagger-ui .loading-container .loading{position:relative}.swagger-ui .loading-container .loading:after{font-size:10px;font-weight:700;position:absolute;top:50%;left:50%;content:\"loading\";-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-transform:uppercase;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .loading-container .loading:before{position:absolute;top:50%;left:50%;display:block;width:60px;height:60px;margin:-30px;content:\"\";-webkit-animation:rotation 1s infinite linear,opacity .5s;animation:rotation 1s infinite linear,opacity .5s;opacity:1;border:2px solid rgba(85,85,85,.1);border-top-color:rgba(0,0,0,.6);border-radius:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes rotation{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.swagger-ui .btn{font-size:14px;font-weight:700;padding:5px 23px;transition:all .3s;border:2px solid #888;border-radius:4px;background:transparent;box-shadow:0 1px 2px rgba(0,0,0,.1);font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .btn[disabled]{cursor:not-allowed;opacity:.3}.swagger-ui .btn:hover{box-shadow:0 0 5px rgba(0,0,0,.3)}.swagger-ui .btn.cancel{border-color:#ff6060;font-family:Titillium Web,sans-serif;color:#ff6060}.swagger-ui .btn.authorize{line-height:1;display:inline;color:#49cc90;border-color:#49cc90}.swagger-ui .btn.authorize span{float:left;padding:4px 20px 0 0}.swagger-ui .btn.authorize svg{fill:#49cc90}.swagger-ui .btn.execute{-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;color:#fff;border-color:#4990e2}@-webkit-keyframes pulse{0%{color:#fff;background:#4990e2;box-shadow:0 0 0 0 rgba(73,144,226,.8)}70%{box-shadow:0 0 0 5px rgba(73,144,226,0)}to{color:#fff;background:#4990e2;box-shadow:0 0 0 0 rgba(73,144,226,0)}}@keyframes pulse{0%{color:#fff;background:#4990e2;box-shadow:0 0 0 0 rgba(73,144,226,.8)}70%{box-shadow:0 0 0 5px rgba(73,144,226,0)}to{color:#fff;background:#4990e2;box-shadow:0 0 0 0 rgba(73,144,226,0)}}.swagger-ui .btn-group{display:-webkit-box;display:-ms-flexbox;display:flex;padding:30px}.swagger-ui .btn-group .btn{-webkit-box-flex:1;-ms-flex:1;flex:1}.swagger-ui .btn-group .btn:first-child{border-radius:4px 0 0 4px}.swagger-ui .btn-group .btn:last-child{border-radius:0 4px 4px 0}.swagger-ui .authorization__btn{padding:0 10px;border:none;background:none}.swagger-ui .authorization__btn.locked{opacity:1}.swagger-ui .authorization__btn.unlocked{opacity:.4}.swagger-ui .expand-methods,.swagger-ui .expand-operation{border:none;background:none}.swagger-ui .expand-methods svg,.swagger-ui .expand-operation svg{width:20px;height:20px}.swagger-ui .expand-methods{padding:0 10px}.swagger-ui .expand-methods:hover svg{fill:#444}.swagger-ui .expand-methods svg{transition:all .3s;fill:#777}.swagger-ui button{cursor:pointer;outline:none}.swagger-ui select{font-size:14px;font-weight:700;padding:5px 40px 5px 10px;border:2px solid #41444e;border-radius:4px;background:#f7f7f7 url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+ICAgIDxwYXRoIGQ9Ik0xMy40MTggNy44NTljLjI3MS0uMjY4LjcwOS0uMjY4Ljk3OCAwIC4yNy4yNjguMjcyLjcwMSAwIC45NjlsLTMuOTA4IDMuODNjLS4yNy4yNjgtLjcwNy4yNjgtLjk3OSAwbC0zLjkwOC0zLjgzYy0uMjctLjI2Ny0uMjctLjcwMSAwLS45NjkuMjcxLS4yNjguNzA5LS4yNjguOTc4IDBMMTAgMTFsMy40MTgtMy4xNDF6Ii8+PC9zdmc+) right 10px center no-repeat;background-size:20px;box-shadow:0 1px 2px 0 rgba(0,0,0,.25);font-family:Titillium Web,sans-serif;color:#3b4151;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swagger-ui select[multiple]{margin:5px 0;padding:5px;background:#f7f7f7}.swagger-ui .opblock-body select{min-width:230px}.swagger-ui label{font-size:12px;font-weight:700;margin:0 0 5px;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui input[type=email],.swagger-ui input[type=password],.swagger-ui input[type=search],.swagger-ui input[type=text]{min-width:100px;margin:5px 0;padding:8px 10px;border:1px solid #d9d9d9;border-radius:4px;background:#fff}.swagger-ui input[type=email].invalid,.swagger-ui input[type=password].invalid,.swagger-ui input[type=search].invalid,.swagger-ui input[type=text].invalid{-webkit-animation:shake .4s 1;animation:shake .4s 1;border-color:#f93e3e;background:#feebeb}@-webkit-keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}.swagger-ui textarea{font-size:12px;width:100%;min-height:280px;padding:10px;border:none;border-radius:4px;outline:none;background:hsla(0,0%,100%,.8);font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui textarea:focus{border:2px solid #61affe}.swagger-ui textarea.curl{font-size:12px;min-height:100px;margin:0;padding:10px;resize:none;border-radius:4px;background:#41444e;font-family:Source Code Pro,monospace;font-weight:600;color:#fff}.swagger-ui .checkbox{padding:5px 0 10px;transition:opacity .5s;color:#333}.swagger-ui .checkbox label{display:-webkit-box;display:-ms-flexbox;display:flex}.swagger-ui .checkbox p{font-weight:400!important;font-style:italic;margin:0!important;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .checkbox input[type=checkbox]{display:none}.swagger-ui .checkbox input[type=checkbox]+label>.item{position:relative;top:3px;display:inline-block;width:16px;height:16px;margin:0 8px 0 0;padding:5px;cursor:pointer;border-radius:1px;background:#e8e8e8;box-shadow:0 0 0 2px #e8e8e8;-webkit-box-flex:0;-ms-flex:none;flex:none}.swagger-ui .checkbox input[type=checkbox]+label>.item:active{-webkit-transform:scale(.9);transform:scale(.9)}.swagger-ui .checkbox input[type=checkbox]:checked+label>.item{background:#e8e8e8 url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='8' viewBox='3 7 10 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2341474E' fill-rule='evenodd' d='M6.333 15L3 11.667l1.333-1.334 2 2L11.667 7 13 8.333z'/%3E%3C/svg%3E\") 50% no-repeat}.swagger-ui .dialog-ux{position:fixed;z-index:9999;top:0;right:0;bottom:0;left:0}.swagger-ui .dialog-ux .backdrop-ux{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8)}.swagger-ui .dialog-ux .modal-ux{position:absolute;z-index:9999;top:50%;left:50%;width:100%;min-width:300px;max-width:650px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:1px solid #ebebeb;border-radius:4px;background:#fff;box-shadow:0 10px 30px 0 rgba(0,0,0,.2)}.swagger-ui .dialog-ux .modal-ux-content{overflow-y:auto;max-height:540px;padding:20px}.swagger-ui .dialog-ux .modal-ux-content p{font-size:12px;margin:0 0 5px;color:#41444e;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .dialog-ux .modal-ux-content h4{font-size:18px;font-weight:600;margin:15px 0 0;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .dialog-ux .modal-ux-header{display:-webkit-box;display:-ms-flexbox;display:flex;padding:12px 0;border-bottom:1px solid #ebebeb;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .dialog-ux .modal-ux-header .close-modal{padding:0 10px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swagger-ui .dialog-ux .modal-ux-header h3{font-size:20px;font-weight:600;margin:0;padding:0 20px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .model{font-size:12px;font-weight:300;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .model-toggle{font-size:10px;position:relative;top:6px;display:inline-block;margin:auto .3em;cursor:pointer;transition:-webkit-transform .15s ease-in;transition:transform .15s ease-in;transition:transform .15s ease-in,-webkit-transform .15s ease-in;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.swagger-ui .model-toggle.collapsed{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.swagger-ui .model-toggle:after{display:block;width:20px;height:20px;content:\"\";background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3C/svg%3E\") 50% no-repeat;background-size:100%}.swagger-ui .model-jump-to-path{position:relative;cursor:pointer}.swagger-ui .model-jump-to-path .view-line-link{position:absolute;top:-.4em;cursor:pointer}.swagger-ui .model-title{position:relative}.swagger-ui .model-title:hover .model-hint{visibility:visible}.swagger-ui .model-hint{position:absolute;top:-1.8em;visibility:hidden;padding:.1em .5em;white-space:nowrap;color:#ebebeb;border-radius:4px;background:rgba(0,0,0,.7)}.swagger-ui section.models{margin:30px 0;border:1px solid rgba(59,65,81,.3);border-radius:4px}.swagger-ui section.models.is-open{padding:0 0 20px}.swagger-ui section.models.is-open h4{margin:0 0 5px;border-bottom:1px solid rgba(59,65,81,.3)}.swagger-ui section.models.is-open h4 svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.swagger-ui section.models h4{font-size:16px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;padding:10px 20px 10px 10px;cursor:pointer;transition:all .2s;font-family:Titillium Web,sans-serif;color:#777;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui section.models h4 svg{transition:all .4s}.swagger-ui section.models h4 span{-webkit-box-flex:1;-ms-flex:1;flex:1}.swagger-ui section.models h4:hover{background:rgba(0,0,0,.02)}.swagger-ui section.models h5{font-size:16px;margin:0 0 10px;font-family:Titillium Web,sans-serif;color:#777}.swagger-ui section.models .model-jump-to-path{position:relative;top:5px}.swagger-ui section.models .model-container{margin:0 20px 15px;transition:all .5s;border-radius:4px;background:rgba(0,0,0,.05)}.swagger-ui section.models .model-container:hover{background:rgba(0,0,0,.07)}.swagger-ui section.models .model-container:first-of-type{margin:20px}.swagger-ui section.models .model-container:last-of-type{margin:0 20px}.swagger-ui section.models .model-box{background:none}.swagger-ui .model-box{padding:10px;border-radius:4px;background:rgba(0,0,0,.1)}.swagger-ui .model-box .model-jump-to-path{position:relative;top:4px}.swagger-ui .model-title{font-size:16px;font-family:Titillium Web,sans-serif;color:#555}.swagger-ui span>span.model,.swagger-ui span>span.model .brace-close{padding:0 0 0 10px}.swagger-ui .prop-type{color:#55a}.swagger-ui .prop-enum{display:block}.swagger-ui .prop-format{color:#999}.swagger-ui table{width:100%;padding:0 10px;border-collapse:collapse}.swagger-ui table.model tbody tr td{padding:0;vertical-align:top}.swagger-ui table.model tbody tr td:first-of-type{width:100px;padding:0}.swagger-ui table.headers td{font-size:12px;font-weight:300;vertical-align:middle;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui table tbody tr td{padding:10px 0 0;vertical-align:top}.swagger-ui table tbody tr td:first-of-type{width:20%;padding:10px 0}.swagger-ui table thead tr td,.swagger-ui table thead tr th{font-size:12px;font-weight:700;padding:12px 0;text-align:left;border-bottom:1px solid rgba(59,65,81,.2);font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .parameters-col_description p{font-size:14px;margin:0;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .parameters-col_description input[type=text]{width:100%;max-width:340px}.swagger-ui .parameter__name{font-size:16px;font-weight:400;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .parameter__name.required{font-weight:700}.swagger-ui .parameter__name.required:after{font-size:10px;position:relative;top:-6px;padding:5px;content:\"required\";color:rgba(255,0,0,.6)}.swagger-ui .parameter__in{font-size:12px;font-style:italic;font-family:Source Code Pro,monospace;font-weight:600;color:#888}.swagger-ui .table-container{padding:20px}.swagger-ui .topbar{padding:8px 30px;background-color:black}.swagger-ui .topbar .topbar-wrapper{-ms-flex-align:center;left: -40px;position: relative;}.swagger-ui .topbar .topbar-wrapper,.swagger-ui .topbar a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center}.swagger-ui .topbar a{font-size:1.5em;font-weight:700;max-width:300px;text-decoration:none;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-align:center;font-family:Titillium Web,sans-serif;color:#fff}.swagger-ui .topbar a span{margin:0;padding:0 10px}.swagger-ui .topbar .download-url-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:3;-ms-flex:3;flex:3}.swagger-ui .topbar .download-url-wrapper input[type=text]{width:100%;min-width:350px;margin:0;border:2px solid #547f00;border-radius:4px 0 0 4px;outline:none}.swagger-ui .topbar .download-url-wrapper .download-url-button{font-size:16px;font-weight:700;padding:4px 40px;border:none;border-radius:0 4px 4px 0;background:#547f00;font-family:Titillium Web,sans-serif;color:#fff}.swagger-ui .info{margin:50px 0}.swagger-ui .info hgroup.main{margin:0 0 20px}.swagger-ui .info hgroup.main a{font-size:12px}.swagger-ui .info li,.swagger-ui .info p,.swagger-ui .info table{font-size:14px;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .info h1,.swagger-ui .info h2,.swagger-ui .info h3,.swagger-ui .info h4,.swagger-ui .info h5{font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .info code{padding:3px 5px;border-radius:4px;background:rgba(0,0,0,.05);font-family:Source Code Pro,monospace;font-weight:600;color:#9012fe}.swagger-ui .info a{font-size:14px;transition:all .4s;font-family:Open Sans,sans-serif;color:#4990e2}.swagger-ui .info a:hover{color:#1f69c0}.swagger-ui .info>div{margin:0 0 5px}.swagger-ui .info .base-url{font-size:12px;font-weight:300!important;margin:0;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .info .title{font-size:36px;margin:0;font-family:Open Sans,sans-serif;color:#3b4151}.swagger-ui .info .title small{font-size:10px;position:relative;top:-5px;display:inline-block;margin:0 0 0 5px;padding:2px 4px;vertical-align:super;border-radius:57px;background:#7d8492}.swagger-ui .info .title small pre{margin:0;font-family:Titillium Web,sans-serif;color:#fff}.swagger-ui .auth-btn-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.swagger-ui .auth-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.swagger-ui .auth-wrapper .authorize{padding-right:20px}.swagger-ui .auth-container{margin:0 0 10px;padding:10px 20px;border-bottom:1px solid #ebebeb}.swagger-ui .auth-container:last-of-type{margin:0;padding:10px 20px;border:0}.swagger-ui .auth-container h4{margin:5px 0 15px!important}.swagger-ui .auth-container .wrapper{margin:0;padding:0}.swagger-ui .auth-container input[type=password],.swagger-ui .auth-container input[type=text]{min-width:230px}.swagger-ui .auth-container .errors{font-size:12px;padding:10px;border-radius:4px;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .scopes h2{font-size:14px;font-family:Titillium Web,sans-serif;color:#3b4151}.swagger-ui .scope-def{padding:0 0 20px}.swagger-ui .errors-wrapper{margin:20px;padding:10px 20px;-webkit-animation:scaleUp .5s;animation:scaleUp .5s;border:2px solid #f93e3e;border-radius:4px;background:rgba(249,62,62,.1)}.swagger-ui .errors-wrapper .error-wrapper{margin:0 0 10px}.swagger-ui .errors-wrapper .errors h4{font-size:14px;margin:0;font-family:Source Code Pro,monospace;font-weight:600;color:#3b4151}.swagger-ui .errors-wrapper .errors small{color:#666}.swagger-ui .errors-wrapper hgroup{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swagger-ui .errors-wrapper hgroup h4{font-size:20px;margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:Titillium Web,sans-serif;color:#3b4151}@-webkit-keyframes scaleUp{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scaleUp{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}", ""]);
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var r = this[t];
                    r[2] ? e.push("@media " + r[2] + "{" + r[1] + "}") : e.push(r[1])
                }
                return e.join("")
            }, e.i = function(t, r) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, n = 0; n < this.length; n++) {
                    var s = this[n][0];
                    "number" == typeof s && (i[s] = !0)
                }
                for (n = 0; n < t.length; n++) {
                    var o = t[n];
                    "number" == typeof o[0] && i[o[0]] || (r && !o[2] ? o[2] = r : r && (o[2] = "(" + o[2] + ") and (" + r + ")"), e.push(o))
                }
            }, e
        }
    }, function(e, t, r) {
        function i(e, t) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r],
                    n = f[i.id];
                if (n) {
                    n.refs++;
                    for (var s = 0; s < n.parts.length; s++) n.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++) n.parts.push(c(i.parts[s], t))
                } else {
                    for (var o = [], s = 0; s < i.parts.length; s++) o.push(c(i.parts[s], t));
                    f[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }

        function n(e) {
            for (var t = [], r = {}, i = 0; i < e.length; i++) {
                var n = e[i],
                    s = n[0],
                    o = n[1],
                    a = n[2],
                    u = n[3],
                    c = {
                        css: o,
                        media: a,
                        sourceMap: u
                    };
                r[s] ? r[s].parts.push(c) : t.push(r[s] = {
                    id: s,
                    parts: [c]
                })
            }
            return t
        }

        function s(e, t) {
            var r = g(),
                i = D[D.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? r.insertBefore(t, i.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), D.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                r.appendChild(t)
            }
        }

        function o(e) {
            e.parentNode.removeChild(e);
            var t = D.indexOf(e);
            t >= 0 && D.splice(t, 1)
        }

        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css", s(e, t), t
        }

        function u(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", s(e, t), t
        }

        function c(e, t) {
            var r, i, n;
            if (t.singleton) {
                var s = y++;
                r = x || (x = a(t)), i = l.bind(null, r, s, !1), n = l.bind(null, r, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = u(t), i = p.bind(null, r), n = function() {
                o(r), r.href && URL.revokeObjectURL(r.href)
            }) : (r = a(t), i = h.bind(null, r), n = function() {
                o(r)
            });
            return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i(e = t)
                    } else n()
                }
        }

        function l(e, t, r, i) {
            var n = r ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, n);
            else {
                var s = document.createTextNode(n),
                    o = e.childNodes;
                o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(s, o[t]) : e.appendChild(s)
            }
        }

        function h(e, t) {
            var r = t.css,
                i = t.media;
            t.sourceMap;
            if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = r;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r))
            }
        }

        function p(e, t) {
            var r = t.css,
                i = (t.media, t.sourceMap);
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var n = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(n), s && URL.revokeObjectURL(s)
        }
        var f = {},
            d = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            m = d(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            g = d(function() {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            x = null,
            y = 0,
            D = [];
        e.exports = function(e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var r = n(e);
            return i(r, t),
                function(e) {
                    for (var s = [], o = 0; o < r.length; o++) {
                        var a = r[o],
                            u = f[a.id];
                        u.refs--, s.push(u)
                    }
                    if (e) {
                        var c = n(e);
                        i(c, t)
                    }
                    for (var o = 0; o < s.length; o++) {
                        var u = s[o];
                        if (0 === u.refs) {
                            for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                            delete f[u.id]
                        }
                    }
                }
        };
        var b = function() {
            var e = [];
            return function(t, r) {
                return e[t] = r, e.filter(Boolean).join("\n")
            }
        }()
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return {
                components: {
                    Topbar: s.default
                }
            }
        };
        var n = r(38),
            s = i(n)
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r), i && e(t, i), t
                }
            }(),
            u = r(3),
            c = i(u),
            l = r(39),
            h = i(l),
            p = function(e) {
                function t(e, r) {
                    n(this, t);
                    var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
                    return i.onUrlChange = function(e) {
                        var t = e.target.value;
                        i.setState({
                            url: t
                        })
                    }, i.downloadUrl = function(e) {
                        i.props.specActions.updateUrl(i.state.url), i.props.specActions.download(i.state.url), e.preventDefault()
                    }, i.state = {
                        url: e.specSelectors.url()
                    }, i
                }
                return o(t, e), a(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState({
                            url: e.specSelectors.url()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.getComponent,
                            r = e.specSelectors,
                            i = t("Button"),
                            n = t("Link"),
                            s = "loading" === r.loadingStatus(),
                            o = "failed" === r.loadingStatus(),
                            a = {};
                        return o && (a.color = "red"), s && (a.color = "#aaa"), c.default.createElement("div", {
                            className: "topbar"
                        }, c.default.createElement("div", {
                            className: "wrapper"
                        }, c.default.createElement("div", {
                            className: "topbar-wrapper"
                        }, c.default.createElement(n, {
                            href: "#",
                            title: "RobusTest"
                        }, c.default.createElement("img", {
                            height: "65",
                            width: "224",
                            src: "./logo.png",
                            alt: "RobusTest"
                        }), c.default.createElement("span", null, "")),)))
                    }
                }]), t
            }(c.default.Component);
        t.default = p, p.propTypes = {
            specSelectors: u.PropTypes.object.isRequired,
            specActions: u.PropTypes.object.isRequired,
            getComponent: u.PropTypes.func.isRequired
        }
    }, function(e, t) {
        e.exports = "./logo.png"
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(e) {
            var t = e.fn,
                r = {
                    downloadConfig: function(e) {
                        return function() {
                            var r = t.fetch;
                            return r(e)
                        }
                    },
                    getConfigByUrl: function(e, t) {
                        return function(r) {
                            function i(r) {
                                r instanceof Error || r.status >= 400 ? (n.updateLoadingStatus("failedConfig"), n.updateLoadingStatus("failedConfig"), n.updateUrl(""), console.error(r.statusText + " " + e), t(null)) : t(c(r.text))
                            }
                            var n = r.specActions;
                            if (e) return n.downloadConfig(e).then(i, i)
                        }
                    }
                },
                i = {
                    getLocalConfig: function() {
                        return c(u.default)
                    }
                };
            return {
                statePlugins: {
                    spec: {
                        actions: r,
                        selectors: i
                    }
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n;
        var s = r(41),
            o = i(s),
            a = r(76),
            u = i(a),
            c = function(e, t) {
                try {
                    return o.default.safeLoad(e)
                } catch (e) {
                    return t && t.errActions.newThrownErr(new Error(e)), {}
                }
            }
    }, function(e, t, r) {
        "use strict";
        var i = r(42);
        e.exports = i
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return function() {
                throw new Error("Function " + e + " is deprecated and cannot be used.")
            }
        }
        var n = r(43),
            s = r(75);
        e.exports.Type = r(49), e.exports.Schema = r(48), e.exports.FAILSAFE_SCHEMA = r(52), e.exports.JSON_SCHEMA = r(51), e.exports.CORE_SCHEMA = r(50), e.exports.DEFAULT_SAFE_SCHEMA = r(47), e.exports.DEFAULT_FULL_SCHEMA = r(70), e.exports.load = n.load, e.exports.loadAll = n.loadAll, e.exports.safeLoad = n.safeLoad, e.exports.safeLoadAll = n.safeLoadAll, e.exports.dump = s.dump, e.exports.safeDump = s.safeDump, e.exports.YAMLException = r(45), e.exports.MINIMAL_SCHEMA = r(52), e.exports.SAFE_SCHEMA = r(47), e.exports.DEFAULT_SCHEMA = r(70), e.exports.scan = i("scan"), e.exports.parse = i("parse"), e.exports.compose = i("compose"), e.exports.addConstructor = i("addConstructor")
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return 10 === e || 13 === e
        }

        function n(e) {
            return 9 === e || 32 === e
        }

        function s(e) {
            return 9 === e || 32 === e || 10 === e || 13 === e
        }

        function o(e) {
            return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
        }

        function a(e) {
            var t;
            return 48 <= e && e <= 57 ? e - 48 : (t = 32 | e, 97 <= t && t <= 102 ? t - 97 + 10 : -1)
        }

        function u(e) {
            return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0
        }

        function c(e) {
            return 48 <= e && e <= 57 ? e - 48 : -1
        }

        function l(e) {
            return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e ? "\t" : 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
        }

        function h(e) {
            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320)
        }

        function p(e, t) {
            this.input = e, this.filename = t.filename || null, this.schema = t.schema || Y, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = []
        }

        function f(e, t) {
            return new j(t, new X(e.filename, e.input, e.position, e.line, e.position - e.lineStart))
        }

        function d(e, t) {
            throw f(e, t)
        }

        function m(e, t) {
            e.onWarning && e.onWarning.call(null, f(e, t))
        }

        function g(e, t, r, i) {
            var n, s, o, a;
            if (t < r) {
                if (a = e.input.slice(t, r), i)
                    for (n = 0, s = a.length; n < s; n += 1) o = a.charCodeAt(n), 9 === o || 32 <= o && o <= 1114111 || d(e, "expected valid JSON character");
                else Q.test(a) && d(e, "the stream contains non-printable characters");
                e.result += a
            }
        }

        function x(e, t, r, i) {
            var n, s, o, a;
            for (z.isObject(r) || d(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), o = 0, a = n.length; o < a; o += 1) s = n[o], K.call(t, s) || (t[s] = r[s], i[s] = !0)
        }

        function y(e, t, r, i, n, s, o, a) {
            var u, c;
            if (n = String(n), null === t && (t = {}), "tag:yaml.org,2002:merge" === i)
                if (Array.isArray(s))
                    for (u = 0, c = s.length; u < c; u += 1) x(e, t, s[u], r);
                else x(e, t, s, r);
            else e.json || K.call(r, n) || !K.call(t, n) || (e.line = o || e.line, e.position = a || e.position, d(e, "duplicated mapping key")), t[n] = s, delete r[n];
            return t
        }

        function D(e) {
            var t;
            t = e.input.charCodeAt(e.position), 10 === t ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : d(e, "a line break is expected"), e.line += 1, e.lineStart = e.position
        }

        function b(e, t, r) {
            for (var s = 0, o = e.input.charCodeAt(e.position); 0 !== o;) {
                for (; n(o);) o = e.input.charCodeAt(++e.position);
                if (t && 35 === o)
                    do o = e.input.charCodeAt(++e.position); while (10 !== o && 13 !== o && 0 !== o);
                if (!i(o)) break;
                for (D(e), o = e.input.charCodeAt(e.position), s++, e.lineIndent = 0; 32 === o;) e.lineIndent++, o = e.input.charCodeAt(++e.position)
            }
            return r !== -1 && 0 !== s && e.lineIndent < r && m(e, "deficient indentation"), s
        }

        function v(e) {
            var t, r = e.position;
            return t = e.input.charCodeAt(r), !(45 !== t && 46 !== t || t !== e.input.charCodeAt(r + 1) || t !== e.input.charCodeAt(r + 2) || (r += 3, t = e.input.charCodeAt(r), 0 !== t && !s(t)))
        }

        function w(e, t) {
            1 === t ? e.result += " " : t > 1 && (e.result += z.repeat("\n", t - 1))
        }

        function E(e, t, r) {
            var a, u, c, l, h, p, f, d, m, x = e.kind,
                y = e.result;
            if (m = e.input.charCodeAt(e.position), s(m) || o(m) || 35 === m || 38 === m || 42 === m || 33 === m || 124 === m || 62 === m || 39 === m || 34 === m || 37 === m || 64 === m || 96 === m) return !1;
            if ((63 === m || 45 === m) && (u = e.input.charCodeAt(e.position + 1), s(u) || r && o(u))) return !1;
            for (e.kind = "scalar", e.result = "", c = l = e.position, h = !1; 0 !== m;) {
                if (58 === m) {
                    if (u = e.input.charCodeAt(e.position + 1), s(u) || r && o(u)) break
                } else if (35 === m) {
                    if (a = e.input.charCodeAt(e.position - 1), s(a)) break
                } else {
                    if (e.position === e.lineStart && v(e) || r && o(m)) break;
                    if (i(m)) {
                        if (p = e.line, f = e.lineStart, d = e.lineIndent, b(e, !1, -1), e.lineIndent >= t) {
                            h = !0, m = e.input.charCodeAt(e.position);
                            continue
                        }
                        e.position = l, e.line = p, e.lineStart = f, e.lineIndent = d;
                        break
                    }
                }
                h && (g(e, c, l, !1), w(e, e.line - p), c = l = e.position, h = !1), n(m) || (l = e.position + 1), m = e.input.charCodeAt(++e.position)
            }
            return g(e, c, l, !1), !!e.result || (e.kind = x, e.result = y, !1)
        }

        function k(e, t) {
            var r, n, s;
            if (r = e.input.charCodeAt(e.position), 39 !== r) return !1;
            for (e.kind = "scalar", e.result = "", e.position++, n = s = e.position; 0 !== (r = e.input.charCodeAt(e.position));)
                if (39 === r) {
                    if (g(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), 39 !== r) return !0;
                    n = e.position, e.position++, s = e.position
                } else i(r) ? (g(e, n, s, !0), w(e, b(e, !1, t)), n = s = e.position) : e.position === e.lineStart && v(e) ? d(e, "unexpected end of the document within a single quoted scalar") : (e.position++, s = e.position);
            d(e, "unexpected end of the stream within a single quoted scalar")
        }

        function A(e, t) {
            var r, n, s, o, c, l;
            if (l = e.input.charCodeAt(e.position), 34 !== l) return !1;
            for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; 0 !== (l = e.input.charCodeAt(e.position));) {
                if (34 === l) return g(e, r, e.position, !0), e.position++, !0;
                if (92 === l) {
                    if (g(e, r, e.position, !0), l = e.input.charCodeAt(++e.position), i(l)) b(e, !1, t);
                    else if (l < 256 && ne[l]) e.result += se[l], e.position++;
                    else if ((c = u(l)) > 0) {
                        for (s = c, o = 0; s > 0; s--) l = e.input.charCodeAt(++e.position), (c = a(l)) >= 0 ? o = (o << 4) + c : d(e, "expected hexadecimal character");
                        e.result += h(o), e.position++
                    } else d(e, "unknown escape sequence");
                    r = n = e.position
                } else i(l) ? (g(e, r, n, !0), w(e, b(e, !1, t)), r = n = e.position) : e.position === e.lineStart && v(e) ? d(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position)
            }
            d(e, "unexpected end of the stream within a double quoted scalar")
        }

        function C(e, t) {
            var r, i, n, o, a, u, c, l, h, p, f, m = !0,
                g = e.tag,
                x = e.anchor,
                D = {};
            if (f = e.input.charCodeAt(e.position), 91 === f) o = 93, c = !1, i = [];
            else {
                if (123 !== f) return !1;
                o = 125, c = !0, i = {}
            }
            for (null !== e.anchor && (e.anchorMap[e.anchor] = i), f = e.input.charCodeAt(++e.position); 0 !== f;) {
                if (b(e, !0, t), f = e.input.charCodeAt(e.position), f === o) return e.position++, e.tag = g, e.anchor = x, e.kind = c ? "mapping" : "sequence", e.result = i, !0;
                m || d(e, "missed comma between flow collection entries"), h = l = p = null, a = u = !1, 63 === f && (n = e.input.charCodeAt(e.position + 1), s(n) && (a = u = !0, e.position++, b(e, !0, t))), r = e.line, P(e, t, W, !1, !0), h = e.tag, l = e.result, b(e, !0, t), f = e.input.charCodeAt(e.position), !u && e.line !== r || 58 !== f || (a = !0, f = e.input.charCodeAt(++e.position), b(e, !0, t), P(e, t, W, !1, !0), p = e.result), c ? y(e, i, D, h, l, p) : a ? i.push(y(e, null, D, h, l, p)) : i.push(l), b(e, !0, t), f = e.input.charCodeAt(e.position), 44 === f ? (m = !0, f = e.input.charCodeAt(++e.position)) : m = !1
            }
            d(e, "unexpected end of the stream within a flow collection")
        }

        function S(e, t) {
            var r, s, o, a, u = V,
                l = !1,
                h = !1,
                p = t,
                f = 0,
                m = !1;
            if (a = e.input.charCodeAt(e.position), 124 === a) s = !1;
            else {
                if (62 !== a) return !1;
                s = !0
            }
            for (e.kind = "scalar", e.result = ""; 0 !== a;)
                if (a = e.input.charCodeAt(++e.position), 43 === a || 45 === a) V === u ? u = 43 === a ? Z : $ : d(e, "repeat of a chomping mode identifier");
                else {
                    if (!((o = c(a)) >= 0)) break;
                    0 === o ? d(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : h ? d(e, "repeat of an indentation width identifier") : (p = t + o - 1, h = !0)
                }
            if (n(a)) {
                do a = e.input.charCodeAt(++e.position); while (n(a));
                if (35 === a)
                    do a = e.input.charCodeAt(++e.position); while (!i(a) && 0 !== a)
            }
            for (; 0 !== a;) {
                for (D(e), e.lineIndent = 0, a = e.input.charCodeAt(e.position);
                    (!h || e.lineIndent < p) && 32 === a;) e.lineIndent++, a = e.input.charCodeAt(++e.position);
                if (!h && e.lineIndent > p && (p = e.lineIndent), i(a)) f++;
                else {
                    if (e.lineIndent < p) {
                        u === Z ? e.result += z.repeat("\n", l ? 1 + f : f) : u === V && l && (e.result += "\n");
                        break
                    }
                    for (s ? n(a) ? (m = !0, e.result += z.repeat("\n", l ? 1 + f : f)) : m ? (m = !1, e.result += z.repeat("\n", f + 1)) : 0 === f ? l && (e.result += " ") : e.result += z.repeat("\n", f) : e.result += z.repeat("\n", l ? 1 + f : f), l = !0, h = !0, f = 0, r = e.position; !i(a) && 0 !== a;) a = e.input.charCodeAt(++e.position);
                    g(e, r, e.position, !1)
                }
            }
            return !0
        }

        function F(e, t) {
            var r, i, n, o = e.tag,
                a = e.anchor,
                u = [],
                c = !1;
            for (null !== e.anchor && (e.anchorMap[e.anchor] = u), n = e.input.charCodeAt(e.position); 0 !== n && 45 === n && (i = e.input.charCodeAt(e.position + 1), s(i));)
                if (c = !0, e.position++, b(e, !0, -1) && e.lineIndent <= t) u.push(null), n = e.input.charCodeAt(e.position);
                else if (r = e.line, P(e, t, q, !1, !0), u.push(e.result), b(e, !0, -1), n = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && 0 !== n) d(e, "bad indentation of a sequence entry");
            else if (e.lineIndent < t) break;
            return !!c && (e.tag = o, e.anchor = a, e.kind = "sequence", e.result = u, !0)
        }

        function T(e, t, r) {
            var i, o, a, u, c, l = e.tag,
                h = e.anchor,
                p = {},
                f = {},
                m = null,
                g = null,
                x = null,
                D = !1,
                v = !1;
            for (null !== e.anchor && (e.anchorMap[e.anchor] = p), c = e.input.charCodeAt(e.position); 0 !== c;) {
                if (i = e.input.charCodeAt(e.position + 1), a = e.line, u = e.position, 63 !== c && 58 !== c || !s(i)) {
                    if (!P(e, r, H, !1, !0)) break;
                    if (e.line === a) {
                        for (c = e.input.charCodeAt(e.position); n(c);) c = e.input.charCodeAt(++e.position);
                        if (58 === c) c = e.input.charCodeAt(++e.position), s(c) || d(e, "a whitespace character is expected after the key-value separator within a block mapping"), D && (y(e, p, f, m, g, null), m = g = x = null), v = !0, D = !1, o = !1, m = e.tag, g = e.result;
                        else {
                            if (!v) return e.tag = l, e.anchor = h, !0;
                            d(e, "can not read an implicit mapping pair; a colon is missed")
                        }
                    } else {
                        if (!v) return e.tag = l, e.anchor = h, !0;
                        d(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
                    }
                } else 63 === c ? (D && (y(e, p, f, m, g, null), m = g = x = null), v = !0, D = !0, o = !0) : D ? (D = !1, o = !0) : d(e, "incomplete explicit mapping pair; a key node is missed"), e.position += 1, c = i;
                if ((e.line === a || e.lineIndent > t) && (P(e, t, G, !0, o) && (D ? g = e.result : x = e.result), D || (y(e, p, f, m, g, x, a, u), m = g = x = null), b(e, !0, -1), c = e.input.charCodeAt(e.position)), e.lineIndent > t && 0 !== c) d(e, "bad indentation of a mapping entry");
                else if (e.lineIndent < t) break
            }
            return D && y(e, p, f, m, g, null), v && (e.tag = l, e.anchor = h, e.kind = "mapping", e.result = p), v
        }

        function B(e) {
            var t, r, i, n, o = !1,
                a = !1;
            if (n = e.input.charCodeAt(e.position), 33 !== n) return !1;
            if (null !== e.tag && d(e, "duplication of a tag property"), n = e.input.charCodeAt(++e.position), 60 === n ? (o = !0, n = e.input.charCodeAt(++e.position)) : 33 === n ? (a = !0, r = "!!", n = e.input.charCodeAt(++e.position)) : r = "!", t = e.position, o) {
                do n = e.input.charCodeAt(++e.position); while (0 !== n && 62 !== n);
                e.position < e.length ? (i = e.input.slice(t, e.position), n = e.input.charCodeAt(++e.position)) : d(e, "unexpected end of the stream within a verbatim tag")
            } else {
                for (; 0 !== n && !s(n);) 33 === n && (a ? d(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(t - 1, e.position + 1), re.test(r) || d(e, "named tag handle cannot contain such characters"), a = !0, t = e.position + 1)), n = e.input.charCodeAt(++e.position);
                i = e.input.slice(t, e.position), te.test(i) && d(e, "tag suffix cannot contain flow indicator characters")
            }
            return i && !ie.test(i) && d(e, "tag name cannot contain such characters: " + i), o ? e.tag = i : K.call(e.tagMap, r) ? e.tag = e.tagMap[r] + i : "!" === r ? e.tag = "!" + i : "!!" === r ? e.tag = "tag:yaml.org,2002:" + i : d(e, 'undeclared tag handle "' + r + '"'), !0
        }

        function N(e) {
            var t, r;
            if (r = e.input.charCodeAt(e.position), 38 !== r) return !1;
            for (null !== e.anchor && d(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !s(r) && !o(r);) r = e.input.charCodeAt(++e.position);
            return e.position === t && d(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0
        }

        function I(e) {
            var t, r, i;
            if (i = e.input.charCodeAt(e.position), 42 !== i) return !1;
            for (i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !s(i) && !o(i);) i = e.input.charCodeAt(++e.position);
            return e.position === t && d(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), e.anchorMap.hasOwnProperty(r) || d(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], b(e, !0, -1), !0
        }

        function P(e, t, r, i, n) {
            var s, o, a, u, c, l, h, p, f = 1,
                m = !1,
                g = !1;
            if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = G === r || q === r, i && b(e, !0, -1) && (m = !0, e.lineIndent > t ? f = 1 : e.lineIndent === t ? f = 0 : e.lineIndent < t && (f = -1)), 1 === f)
                for (; B(e) || N(e);) b(e, !0, -1) ? (m = !0, a = s, e.lineIndent > t ? f = 1 : e.lineIndent === t ? f = 0 : e.lineIndent < t && (f = -1)) : a = !1;
            if (a && (a = m || n), 1 !== f && G !== r || (h = W === r || H === r ? t : t + 1, p = e.position - e.lineStart, 1 === f ? a && (F(e, p) || T(e, p, h)) || C(e, h) ? g = !0 : (o && S(e, h) || k(e, h) || A(e, h) ? g = !0 : I(e) ? (g = !0, null === e.tag && null === e.anchor || d(e, "alias node should not have any properties")) : E(e, h, W === r) && (g = !0, null === e.tag && (e.tag = "?")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === f && (g = a && F(e, p))), null !== e.tag && "!" !== e.tag)
                if ("?" === e.tag) {
                    for (u = 0, c = e.implicitTypes.length; u < c; u += 1)
                        if (l = e.implicitTypes[u], l.resolve(e.result)) {
                            e.result = l.construct(e.result), e.tag = l.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                            break
                        }
                } else K.call(e.typeMap[e.kind || "fallback"], e.tag) ? (l = e.typeMap[e.kind || "fallback"][e.tag], null !== e.result && l.kind !== e.kind && d(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + l.kind + '", not "' + e.kind + '"'), l.resolve(e.result) ? (e.result = l.construct(e.result), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : d(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : d(e, "unknown tag !<" + e.tag + ">");
            return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || g
        }

        function M(e) {
            var t, r, o, a, u = e.position,
                c = !1;
            for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; 0 !== (a = e.input.charCodeAt(e.position)) && (b(e, !0, -1), a = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== a));) {
                for (c = !0, a = e.input.charCodeAt(++e.position), t = e.position; 0 !== a && !s(a);) a = e.input.charCodeAt(++e.position);
                for (r = e.input.slice(t, e.position), o = [], r.length < 1 && d(e, "directive name must not be less than one character in length"); 0 !== a;) {
                    for (; n(a);) a = e.input.charCodeAt(++e.position);
                    if (35 === a) {
                        do a = e.input.charCodeAt(++e.position); while (0 !== a && !i(a));
                        break
                    }
                    if (i(a)) break;
                    for (t = e.position; 0 !== a && !s(a);) a = e.input.charCodeAt(++e.position);
                    o.push(e.input.slice(t, e.position))
                }
                0 !== a && D(e), K.call(ae, r) ? ae[r](e, r, o) : m(e, 'unknown document directive "' + r + '"')
            }
            return b(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, b(e, !0, -1)) : c && d(e, "directives end mark is expected"), P(e, e.lineIndent - 1, G, !1, !0), b(e, !0, -1), e.checkLineBreaks && ee.test(e.input.slice(u, e.position)) && m(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && v(e) ? void(46 === e.input.charCodeAt(e.position) && (e.position += 3, b(e, !0, -1))) : void(e.position < e.length - 1 && d(e, "end of the stream or a document separator is expected"))
        }

        function O(e, t) {
            e = String(e), t = t || {}, 0 !== e.length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
            var r = new p(e, t);
            for (r.input += "\0"; 32 === r.input.charCodeAt(r.position);) r.lineIndent += 1, r.position += 1;
            for (; r.position < r.length - 1;) M(r);
            return r.documents
        }

        function L(e, t, r) {
            var i, n, s = O(e, r);
            for (i = 0, n = s.length; i < n; i += 1) t(s[i])
        }

        function R(e, t) {
            var r = O(e, t);
            if (0 !== r.length) {
                if (1 === r.length) return r[0];
                throw new j("expected a single document in the stream, but found more")
            }
        }

        function U(e, t, r) {
            L(e, t, z.extend({
                schema: J
            }, r))
        }

        function _(e, t) {
            return R(e, z.extend({
                schema: J
            }, t))
        }
        for (var z = r(44), j = r(45), X = r(46), J = r(47), Y = r(70), K = Object.prototype.hasOwnProperty, W = 1, H = 2, q = 3, G = 4, V = 1, $ = 2, Z = 3, Q = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, ee = /[\x85\u2028\u2029]/, te = /[,\[\]\{\}]/, re = /^(?:!|!!|![a-z\-]+!)$/i, ie = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i, ne = new Array(256), se = new Array(256), oe = 0; oe < 256; oe++) ne[oe] = l(oe) ? 1 : 0, se[oe] = l(oe);
        var ae = {
            YAML: function(e, t, r) {
                var i, n, s;
                null !== e.version && d(e, "duplication of %YAML directive"), 1 !== r.length && d(e, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), null === i && d(e, "ill-formed argument of the YAML directive"), n = parseInt(i[1], 10), s = parseInt(i[2], 10), 1 !== n && d(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, 1 !== s && 2 !== s && m(e, "unsupported YAML version of the document")
            },
            TAG: function(e, t, r) {
                var i, n;
                2 !== r.length && d(e, "TAG directive accepts exactly two arguments"), i = r[0], n = r[1], re.test(i) || d(e, "ill-formed tag handle (first argument) of the TAG directive"), K.call(e.tagMap, i) && d(e, 'there is a previously declared suffix for "' + i + '" tag handle'), ie.test(n) || d(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagMap[i] = n
            }
        };
        e.exports.loadAll = L, e.exports.load = R, e.exports.safeLoadAll = U, e.exports.safeLoad = _
    }, function(e, t) {
        "use strict";

        function r(e) {
            return "undefined" == typeof e || null === e
        }

        function i(e) {
            return "object" == typeof e && null !== e
        }

        function n(e) {
            return Array.isArray(e) ? e : r(e) ? [] : [e]
        }

        function s(e, t) {
            var r, i, n, s;
            if (t)
                for (s = Object.keys(t), r = 0, i = s.length; r < i; r += 1) n = s[r], e[n] = t[n];
            return e
        }

        function o(e, t) {
            var r, i = "";
            for (r = 0; r < t; r += 1) i += e;
            return i
        }

        function a(e) {
            return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
        }
        e.exports.isNothing = r, e.exports.isObject = i, e.exports.toArray = n, e.exports.repeat = o, e.exports.isNegativeZero = a, e.exports.extend = s
    }, function(e, t) {
        "use strict";

        function r(e, t) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || "", this.name = "YAMLException", this.reason = e, this.mark = t, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "")
        }
        r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.prototype.toString = function(e) {
            var t = this.name + ": ";
            return t += this.reason || "(unknown reason)", !e && this.mark && (t += " " + this.mark.toString()), t
        }, e.exports = r
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r, i, n) {
            this.name = e, this.buffer = t, this.position = r, this.line = i, this.column = n
        }
        var n = r(44);
        i.prototype.getSnippet = function(e, t) {
            var r, i, s, o, a;
            if (!this.buffer) return null;
            for (e = e || 4, t = t || 75, r = "", i = this.position; i > 0 && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i - 1)) === -1;)
                if (i -= 1, this.position - i > t / 2 - 1) {
                    r = " ... ", i += 5;
                    break
                }
            for (s = "", o = this.position; o < this.buffer.length && "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o)) === -1;)
                if (o += 1, o - this.position > t / 2 - 1) {
                    s = " ... ", o -= 5;
                    break
                }
            return a = this.buffer.slice(i, o), n.repeat(" ", e) + r + a + s + "\n" + n.repeat(" ", e + this.position - i + r.length) + "^"
        }, i.prototype.toString = function(e) {
            var t, r = "";
            return this.name && (r += 'in "' + this.name + '" '), r += "at line " + (this.line + 1) + ", column " + (this.column + 1), e || (t = this.getSnippet(), t && (r += ":\n" + t)), r
        }, e.exports = i
    }, function(e, t, r) {
        "use strict";
        var i = r(48);
        e.exports = new i({
            include: [r(50)],
            implicit: [r(60), r(61)],
            explicit: [r(62), r(67), r(68), r(69)]
        })
    }, function(e, t, r) {
        "use strict";

        function i(e, t, r) {
            var n = [];
            return e.include.forEach(function(e) {
                r = i(e, t, r)
            }), e[t].forEach(function(e) {
                r.forEach(function(t, r) {
                    t.tag === e.tag && t.kind === e.kind && n.push(r)
                }), r.push(e)
            }), r.filter(function(e, t) {
                return n.indexOf(t) === -1
            })
        }

        function n() {
            function e(e) {
                i[e.kind][e.tag] = i.fallback[e.tag] = e
            }
            var t, r, i = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {}
            };
            for (t = 0, r = arguments.length; t < r; t += 1) arguments[t].forEach(e);
            return i
        }

        function s(e) {
            this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach(function(e) {
                if (e.loadKind && "scalar" !== e.loadKind) throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
            }), this.compiledImplicit = i(this, "implicit", []), this.compiledExplicit = i(this, "explicit", []), this.compiledTypeMap = n(this.compiledImplicit, this.compiledExplicit)
        }
        var o = r(44),
            a = r(45),
            u = r(49);
        s.DEFAULT = null, s.create = function() {
            var e, t;
            switch (arguments.length) {
                case 1:
                    e = s.DEFAULT, t = arguments[0];
                    break;
                case 2:
                    e = arguments[0], t = arguments[1];
                    break;
                default:
                    throw new a("Wrong number of arguments for Schema.create function")
            }
            if (e = o.toArray(e), t = o.toArray(t), !e.every(function(e) {
                    return e instanceof s
                })) throw new a("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
            if (!t.every(function(e) {
                    return e instanceof u
                })) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            return new s({
                include: e,
                explicit: t
            })
        }, e.exports = s
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            var t = {};
            return null !== e && Object.keys(e).forEach(function(r) {
                e[r].forEach(function(e) {
                    t[String(e)] = r
                })
            }), t
        }

        function n(e, t) {
            if (t = t || {}, Object.keys(t).forEach(function(t) {
                    if (o.indexOf(t) === -1) throw new s('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
                }), this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
                    return !0
                }, this.construct = t.construct || function(e) {
                    return e
                }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.defaultStyle = t.defaultStyle || null, this.styleAliases = i(t.styleAliases || null), a.indexOf(this.kind) === -1) throw new s('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
        }
        var s = r(45),
            o = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"],
            a = ["scalar", "sequence", "mapping"];
        e.exports = n
    }, function(e, t, r) {
        "use strict";
        var i = r(48);
        e.exports = new i({
            include: [r(51)]
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(48);
        e.exports = new i({
            include: [r(52)],
            implicit: [r(56), r(57), r(58), r(59)]
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(48);
        e.exports = new i({
            explicit: [r(53), r(54), r(55)]
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(49);
        e.exports = new i("tag:yaml.org,2002:str", {
            kind: "scalar",
            construct: function(e) {
                return null !== e ? e : ""
            }
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(49);
        e.exports = new i("tag:yaml.org,2002:seq", {
            kind: "sequence",
            construct: function(e) {
                return null !== e ? e : []
            }
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(49);
        e.exports = new i("tag:yaml.org,2002:map", {
            kind: "mapping",
            construct: function(e) {
                return null !== e ? e : {}
            }
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !0;
            var t = e.length;
            return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
        }

        function n() {
            return null
        }

        function s(e) {
            return null === e
        }
        var o = r(49);
        e.exports = new o("tag:yaml.org,2002:null", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: s,
            represent: {
                canonical: function() {
                    return "~"
                },
                lowercase: function() {
                    return "null"
                },
                uppercase: function() {
                    return "NULL"
                },
                camelcase: function() {
                    return "Null"
                }
            },
            defaultStyle: "lowercase"
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !1;
            var t = e.length;
            return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
        }

        function n(e) {
            return "true" === e || "True" === e || "TRUE" === e
        }

        function s(e) {
            return "[object Boolean]" === Object.prototype.toString.call(e)
        }
        var o = r(49);
        e.exports = new o("tag:yaml.org,2002:bool", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: s,
            represent: {
                lowercase: function(e) {
                    return e ? "true" : "false"
                },
                uppercase: function(e) {
                    return e ? "TRUE" : "FALSE"
                },
                camelcase: function(e) {
                    return e ? "True" : "False"
                }
            },
            defaultStyle: "lowercase"
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102
        }

        function n(e) {
            return 48 <= e && e <= 55
        }

        function s(e) {
            return 48 <= e && e <= 57
        }

        function o(e) {
            if (null === e) return !1;
            var t, r = e.length,
                o = 0,
                a = !1;
            if (!r) return !1;
            if (t = e[o], "-" !== t && "+" !== t || (t = e[++o]), "0" === t) {
                if (o + 1 === r) return !0;
                if (t = e[++o], "b" === t) {
                    for (o++; o < r; o++)
                        if (t = e[o], "_" !== t) {
                            if ("0" !== t && "1" !== t) return !1;
                            a = !0
                        }
                    return a && "_" !== t
                }
                if ("x" === t) {
                    for (o++; o < r; o++)
                        if (t = e[o], "_" !== t) {
                            if (!i(e.charCodeAt(o))) return !1;
                            a = !0
                        }
                    return a && "_" !== t
                }
                for (; o < r; o++)
                    if (t = e[o], "_" !== t) {
                        if (!n(e.charCodeAt(o))) return !1;
                        a = !0
                    }
                return a && "_" !== t
            }
            if ("_" === t) return !1;
            for (; o < r; o++)
                if (t = e[o], "_" !== t) {
                    if (":" === t) break;
                    if (!s(e.charCodeAt(o))) return !1;
                    a = !0
                }
            return !(!a || "_" === t) && (":" !== t || /^(:[0-5]?[0-9])+$/.test(e.slice(o)))
        }

        function a(e) {
            var t, r, i = e,
                n = 1,
                s = [];
            return i.indexOf("_") !== -1 && (i = i.replace(/_/g, "")),
                t = i[0], "-" !== t && "+" !== t || ("-" === t && (n = -1), i = i.slice(1), t = i[0]), "0" === i ? 0 : "0" === t ? "b" === i[1] ? n * parseInt(i.slice(2), 2) : "x" === i[1] ? n * parseInt(i, 16) : n * parseInt(i, 8) : i.indexOf(":") !== -1 ? (i.split(":").forEach(function(e) {
                    s.unshift(parseInt(e, 10))
                }), i = 0, r = 1, s.forEach(function(e) {
                    i += e * r, r *= 60
                }), n * i) : n * parseInt(i, 10)
        }

        function u(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && e % 1 === 0 && !c.isNegativeZero(e)
        }
        var c = r(44),
            l = r(49);
        e.exports = new l("tag:yaml.org,2002:int", {
            kind: "scalar",
            resolve: o,
            construct: a,
            predicate: u,
            represent: {
                binary: function(e) {
                    return "0b" + e.toString(2)
                },
                octal: function(e) {
                    return "0" + e.toString(8)
                },
                decimal: function(e) {
                    return e.toString(10)
                },
                hexadecimal: function(e) {
                    return "0x" + e.toString(16).toUpperCase()
                }
            },
            defaultStyle: "decimal",
            styleAliases: {
                binary: [2, "bin"],
                octal: [8, "oct"],
                decimal: [10, "dec"],
                hexadecimal: [16, "hex"]
            }
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return null !== e && !(!c.test(e) || "_" === e[e.length - 1])
        }

        function n(e) {
            var t, r, i, n;
            return t = e.replace(/_/g, "").toLowerCase(), r = "-" === t[0] ? -1 : 1, n = [], "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : t.indexOf(":") >= 0 ? (t.split(":").forEach(function(e) {
                n.unshift(parseFloat(e, 10))
            }), t = 0, i = 1, n.forEach(function(e) {
                t += e * i, i *= 60
            }), r * t) : r * parseFloat(t, 10)
        }

        function s(e, t) {
            var r;
            if (isNaN(e)) switch (t) {
                case "lowercase":
                    return ".nan";
                case "uppercase":
                    return ".NAN";
                case "camelcase":
                    return ".NaN"
            } else if (Number.POSITIVE_INFINITY === e) switch (t) {
                case "lowercase":
                    return ".inf";
                case "uppercase":
                    return ".INF";
                case "camelcase":
                    return ".Inf"
            } else if (Number.NEGATIVE_INFINITY === e) switch (t) {
                case "lowercase":
                    return "-.inf";
                case "uppercase":
                    return "-.INF";
                case "camelcase":
                    return "-.Inf"
            } else if (a.isNegativeZero(e)) return "-0.0";
            return r = e.toString(10), l.test(r) ? r.replace("e", ".e") : r
        }

        function o(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 !== 0 || a.isNegativeZero(e))
        }
        var a = r(44),
            u = r(49),
            c = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),
            l = /^[-+]?[0-9]+e/;
        e.exports = new u("tag:yaml.org,2002:float", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: o,
            represent: s,
            defaultStyle: "lowercase"
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return null !== e && (null !== a.exec(e) || null !== u.exec(e))
        }

        function n(e) {
            var t, r, i, n, s, o, c, l, h, p, f = 0,
                d = null;
            if (t = a.exec(e), null === t && (t = u.exec(e)), null === t) throw new Error("Date resolve error");
            if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4]) return new Date(Date.UTC(r, i, n));
            if (s = +t[4], o = +t[5], c = +t[6], t[7]) {
                for (f = t[7].slice(0, 3); f.length < 3;) f += "0";
                f = +f
            }
            return t[9] && (l = +t[10], h = +(t[11] || 0), d = 6e4 * (60 * l + h), "-" === t[9] && (d = -d)), p = new Date(Date.UTC(r, i, n, s, o, c, f)), d && p.setTime(p.getTime() - d), p
        }

        function s(e) {
            return e.toISOString()
        }
        var o = r(49),
            a = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
            u = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
        e.exports = new o("tag:yaml.org,2002:timestamp", {
            kind: "scalar",
            resolve: i,
            construct: n,
            instanceOf: Date,
            represent: s
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            return "<<" === e || null === e
        }
        var n = r(49);
        e.exports = new n("tag:yaml.org,2002:merge", {
            kind: "scalar",
            resolve: i
        })
    }, function(e, t, r) {
        function i(e) {
            if (null === e) return !1;
            var t, r, i = 0,
                n = e.length,
                s = c;
            for (r = 0; r < n; r++)
                if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
                    if (t < 0) return !1;
                    i += 6
                }
            return i % 8 === 0
        }

        function n(e) {
            var t, r, i = e.replace(/[\r\n=]/g, ""),
                n = i.length,
                s = c,
                o = 0,
                u = [];
            for (t = 0; t < n; t++) t % 4 === 0 && t && (u.push(o >> 16 & 255), u.push(o >> 8 & 255), u.push(255 & o)), o = o << 6 | s.indexOf(i.charAt(t));
            return r = n % 4 * 6, 0 === r ? (u.push(o >> 16 & 255), u.push(o >> 8 & 255), u.push(255 & o)) : 18 === r ? (u.push(o >> 10 & 255), u.push(o >> 2 & 255)) : 12 === r && u.push(o >> 4 & 255), a ? a.from ? a.from(u) : new a(u) : u
        }

        function s(e) {
            var t, r, i = "",
                n = 0,
                s = e.length,
                o = c;
            for (t = 0; t < s; t++) t % 3 === 0 && t && (i += o[n >> 18 & 63], i += o[n >> 12 & 63], i += o[n >> 6 & 63], i += o[63 & n]), n = (n << 8) + e[t];
            return r = s % 3, 0 === r ? (i += o[n >> 18 & 63], i += o[n >> 12 & 63], i += o[n >> 6 & 63], i += o[63 & n]) : 2 === r ? (i += o[n >> 10 & 63], i += o[n >> 4 & 63], i += o[n << 2 & 63], i += o[64]) : 1 === r && (i += o[n >> 2 & 63], i += o[n << 4 & 63], i += o[64], i += o[64]), i
        }

        function o(e) {
            return a && a.isBuffer(e)
        }
        var a;
        try {
            a = r(63).Buffer
        } catch (e) {}
        var u = r(49),
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
        e.exports = new u("tag:yaml.org,2002:binary", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: o,
            represent: s
        })
    }, function(e, t, r) {
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            "use strict";

            function i() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }

            function n() {
                return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (n() < t) throw new RangeError("Invalid typed array length");
                return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e
            }

            function o(e, t, r) {
                if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return a(this, e, t, r)
            }

            function a(e, t, r, i) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? f(e, t, r, i) : "string" == typeof t ? h(e, t, r) : d(e, t)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function c(e, t, r, i) {
                return u(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof i ? s(e, t).fill(r, i) : s(e, t).fill(r) : s(e, t)
            }

            function l(e, t) {
                if (u(t), e = s(e, t < 0 ? 0 : 0 | m(t)), !o.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function h(e, t, r) {
                if ("string" == typeof r && "" !== r || (r = "utf8"), !o.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | x(t, r);
                e = s(e, i);
                var n = e.write(t, r);
                return n !== i && (e = e.slice(0, n)), e
            }

            function p(e, t) {
                var r = t.length < 0 ? 0 : 0 | m(t.length);
                e = s(e, r);
                for (var i = 0; i < r; i += 1) e[i] = 255 & t[i];
                return e
            }

            function f(e, t, r, i) {
                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (i || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === r && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, r) : new Uint8Array(t, r, i), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = p(e, t), e
            }

            function d(e, t) {
                if (o.isBuffer(t)) {
                    var r = 0 | m(t.length);
                    return e = s(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || V(t.length) ? s(e, 0) : p(e, t);
                    if ("Buffer" === t.type && Q(t.data)) return p(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function m(e) {
                if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                return 0 | e
            }

            function g(e) {
                return +e != e && (e = 0), o.alloc(+e)
            }

            function x(e, t) {
                if (o.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return q(e).length;
                    default:
                        if (i) return K(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function y(e, t, r) {
                var i = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if (r >>>= 0, t >>>= 0, r <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return P(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return T(this, t, r);
                    case "ascii":
                        return N(this, t, r);
                    case "latin1":
                    case "binary":
                        return I(this, t, r);
                    case "base64":
                        return F(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return M(this, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), i = !0
                }
            }

            function D(e, t, r) {
                var i = e[t];
                e[t] = e[r], e[r] = i
            }

            function b(e, t, r, i, n) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (n) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!n) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = o.from(t, i)), o.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, i, n);
                if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, i, n);
                throw new TypeError("val must be string, number or Buffer")
            }

            function v(e, t, r, i, n) {
                function s(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, a /= 2, u /= 2, r /= 2
                }
                var c;
                if (n) {
                    var l = -1;
                    for (c = r; c < a; c++)
                        if (s(e, c) === s(t, l === -1 ? 0 : c - l)) {
                            if (l === -1 && (l = c), c - l + 1 === u) return l * o
                        } else l !== -1 && (c -= c - l), l = -1
                } else
                    for (r + u > a && (r = a - u), c = r; c >= 0; c--) {
                        for (var h = !0, p = 0; p < u; p++)
                            if (s(e, c + p) !== s(t, p)) {
                                h = !1;
                                break
                            }
                        if (h) return c
                    }
                return -1
            }

            function w(e, t, r, i) {
                r = Number(r) || 0;
                var n = e.length - r;
                i ? (i = Number(i), i > n && (i = n)) : i = n;
                var s = t.length;
                if (s % 2 !== 0) throw new TypeError("Invalid hex string");
                i > s / 2 && (i = s / 2);
                for (var o = 0; o < i; ++o) {
                    var a = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(a)) return o;
                    e[r + o] = a
                }
                return o
            }

            function E(e, t, r, i) {
                return G(K(t, e.length - r), e, r, i)
            }

            function k(e, t, r, i) {
                return G(W(t), e, r, i)
            }

            function A(e, t, r, i) {
                return k(e, t, r, i)
            }

            function C(e, t, r, i) {
                return G(q(t), e, r, i)
            }

            function S(e, t, r, i) {
                return G(H(t, e.length - r), e, r, i)
            }

            function F(e, t, r) {
                return 0 === t && r === e.length ? $.fromByteArray(e) : $.fromByteArray(e.slice(t, r))
            }

            function T(e, t, r) {
                r = Math.min(e.length, r);
                for (var i = [], n = t; n < r;) {
                    var s = e[n],
                        o = null,
                        a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                    if (n + a <= r) {
                        var u, c, l, h;
                        switch (a) {
                            case 1:
                                s < 128 && (o = s);
                                break;
                            case 2:
                                u = e[n + 1], 128 === (192 & u) && (h = (31 & s) << 6 | 63 & u, h > 127 && (o = h));
                                break;
                            case 3:
                                u = e[n + 1], c = e[n + 2], 128 === (192 & u) && 128 === (192 & c) && (h = (15 & s) << 12 | (63 & u) << 6 | 63 & c, h > 2047 && (h < 55296 || h > 57343) && (o = h));
                                break;
                            case 4:
                                u = e[n + 1], c = e[n + 2], l = e[n + 3], 128 === (192 & u) && 128 === (192 & c) && 128 === (192 & l) && (h = (15 & s) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l, h > 65535 && h < 1114112 && (o = h))
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), n += a
                }
                return B(i)
            }

            function B(e) {
                var t = e.length;
                if (t <= ee) return String.fromCharCode.apply(String, e);
                for (var r = "", i = 0; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += ee));
                return r
            }

            function N(e, t, r) {
                var i = "";
                r = Math.min(e.length, r);
                for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
                return i
            }

            function I(e, t, r) {
                var i = "";
                r = Math.min(e.length, r);
                for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);
                return i
            }

            function P(e, t, r) {
                var i = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                for (var n = "", s = t; s < r; ++s) n += Y(e[s]);
                return n
            }

            function M(e, t, r) {
                for (var i = e.slice(t, r), n = "", s = 0; s < i.length; s += 2) n += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return n
            }

            function O(e, t, r) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function L(e, t, r, i, n, s) {
                if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > n || t < s) throw new RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw new RangeError("Index out of range")
            }

            function R(e, t, r, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var n = 0, s = Math.min(e.length - r, 2); n < s; ++n) e[r + n] = (t & 255 << 8 * (i ? n : 1 - n)) >>> 8 * (i ? n : 1 - n)
            }

            function U(e, t, r, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var n = 0, s = Math.min(e.length - r, 4); n < s; ++n) e[r + n] = t >>> 8 * (i ? n : 3 - n) & 255
            }

            function _(e, t, r, i, n, s) {
                if (r + i > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function z(e, t, r, i, n) {
                return n || _(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, r, i, 23, 4), r + 4
            }

            function j(e, t, r, i, n) {
                return n || _(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, r, i, 52, 8), r + 8
            }

            function X(e) {
                if (e = J(e).replace(te, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function J(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function Y(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function K(e, t) {
                t = t || 1 / 0;
                for (var r, i = e.length, n = null, s = [], o = 0; o < i; ++o) {
                    if (r = e.charCodeAt(o), r > 55295 && r < 57344) {
                        if (!n) {
                            if (r > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === i) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            n = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189), n = r;
                            continue
                        }
                        r = (n - 55296 << 10 | r - 56320) + 65536
                    } else n && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (n = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return s
            }

            function W(e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }

            function H(e, t) {
                for (var r, i, n, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), i = r >> 8, n = r % 256, s.push(n), s.push(i);
                return s
            }

            function q(e) {
                return $.toByteArray(X(e))
            }

            function G(e, t, r, i) {
                for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
                return n
            }

            function V(e) {
                return e !== e
            }
            var $ = r(64),
                Z = r(65),
                Q = r(66);
            t.Buffer = o, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : i(), t.kMaxLength = n(), o.poolSize = 8192, o._augment = function(e) {
                return e.__proto__ = o.prototype, e
            }, o.from = function(e, t, r) {
                return a(null, e, t, r)
            }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0
            })), o.alloc = function(e, t, r) {
                return c(null, e, t, r)
            }, o.allocUnsafe = function(e) {
                return l(null, e)
            }, o.allocUnsafeSlow = function(e) {
                return l(null, e)
            }, o.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, o.compare = function(e, t) {
                if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, i = t.length, n = 0, s = Math.min(r, i); n < s; ++n)
                    if (e[n] !== t[n]) {
                        r = e[n], i = t[n];
                        break
                    }
                return r < i ? -1 : i < r ? 1 : 0
            }, o.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function(e, t) {
                if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return o.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var i = o.allocUnsafe(t),
                    n = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(i, n), n += s.length
                }
                return i
            }, o.byteLength = x, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) D(this, t, t + 1);
                return this
            }, o.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) D(this, t, t + 3), D(this, t + 1, t + 2);
                return this
            }, o.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) D(this, t, t + 7), D(this, t + 1, t + 6), D(this, t + 2, t + 5), D(this, t + 3, t + 4);
                return this
            }, o.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : y.apply(this, arguments)
            }, o.prototype.equals = function(e) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === o.compare(this, e)
            }, o.prototype.inspect = function() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, o.prototype.compare = function(e, t, r, i, n) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
                if (i >= n && t >= r) return 0;
                if (i >= n) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === e) return 0;
                for (var s = n - i, a = r - t, u = Math.min(s, a), c = this.slice(i, n), l = e.slice(t, r), h = 0; h < u; ++h)
                    if (c[h] !== l[h]) {
                        s = c[h], a = l[h];
                        break
                    }
                return s < a ? -1 : a < s ? 1 : 0
            }, o.prototype.includes = function(e, t, r) {
                return this.indexOf(e, t, r) !== -1
            }, o.prototype.indexOf = function(e, t, r) {
                return b(this, e, t, r, !0)
            }, o.prototype.lastIndexOf = function(e, t, r) {
                return b(this, e, t, r, !1)
            }, o.prototype.write = function(e, t, r, i) {
                if (void 0 === t) i = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                }
                var n = this.length - t;
                if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var s = !1;;) switch (i) {
                    case "hex":
                        return w(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, t, r);
                    case "ascii":
                        return k(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return A(this, e, t, r);
                    case "base64":
                        return C(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, r);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), s = !0
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var ee = 4096;
            o.prototype.slice = function(e, t) {
                var r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
                var i;
                if (o.TYPED_ARRAY_SUPPORT) i = this.subarray(e, t), i.__proto__ = o.prototype;
                else {
                    var n = t - e;
                    i = new o(n, void 0);
                    for (var s = 0; s < n; ++s) i[s] = this[s + e]
                }
                return i
            }, o.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var i = this[e], n = 1, s = 0; ++s < t && (n *= 256);) i += this[e + s] * n;
                return i
            }, o.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var i = this[e + --t], n = 1; t > 0 && (n *= 256);) i += this[e + --t] * n;
                return i
            }, o.prototype.readUInt8 = function(e, t) {
                return t || O(e, 1, this.length), this[e]
            }, o.prototype.readUInt16LE = function(e, t) {
                return t || O(e, 2, this.length), this[e] | this[e + 1] << 8
            }, o.prototype.readUInt16BE = function(e, t) {
                return t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, o.prototype.readUInt32LE = function(e, t) {
                return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, o.prototype.readUInt32BE = function(e, t) {
                return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, o.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var i = this[e], n = 1, s = 0; ++s < t && (n *= 256);) i += this[e + s] * n;
                return n *= 128, i >= n && (i -= Math.pow(2, 8 * t)), i
            }, o.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || O(e, t, this.length);
                for (var i = t, n = 1, s = this[e + --i]; i > 0 && (n *= 256);) s += this[e + --i] * n;
                return n *= 128, s >= n && (s -= Math.pow(2, 8 * t)), s
            }, o.prototype.readInt8 = function(e, t) {
                return t || O(e, 1, this.length), 128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
            }, o.prototype.readInt16LE = function(e, t) {
                t || O(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt16BE = function(e, t) {
                t || O(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt32LE = function(e, t) {
                return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, o.prototype.readInt32BE = function(e, t) {
                return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, o.prototype.readFloatLE = function(e, t) {
                return t || O(e, 4, this.length), Z.read(this, e, !0, 23, 4)
            }, o.prototype.readFloatBE = function(e, t) {
                return t || O(e, 4, this.length), Z.read(this, e, !1, 23, 4)
            }, o.prototype.readDoubleLE = function(e, t) {
                return t || O(e, 8, this.length), Z.read(this, e, !0, 52, 8)
            }, o.prototype.readDoubleBE = function(e, t) {
                return t || O(e, 8, this.length), Z.read(this, e, !1, 52, 8)
            }, o.prototype.writeUIntLE = function(e, t, r, i) {
                if (e = +e, t |= 0, r |= 0, !i) {
                    var n = Math.pow(2, 8 * r) - 1;
                    L(this, e, t, r, n, 0)
                }
                var s = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (s *= 256);) this[t + o] = e / s & 255;
                return t + r
            }, o.prototype.writeUIntBE = function(e, t, r, i) {
                if (e = +e, t |= 0, r |= 0, !i) {
                    var n = Math.pow(2, 8 * r) - 1;
                    L(this, e, t, r, n, 0)
                }
                var s = r - 1,
                    o = 1;
                for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) this[t + s] = e / o & 255;
                return t + r
            }, o.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, o.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
            }, o.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
            }, o.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : U(this, e, t, !0), t + 4
            }, o.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
            }, o.prototype.writeIntLE = function(e, t, r, i) {
                if (e = +e, t |= 0, !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    L(this, e, t, r, n - 1, -n)
                }
                var s = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++s < r && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, o.prototype.writeIntBE = function(e, t, r, i) {
                if (e = +e, t |= 0, !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    L(this, e, t, r, n - 1, -n)
                }
                var s = r - 1,
                    o = 1,
                    a = 0;
                for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, o.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, o.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
            }, o.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
            }, o.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : U(this, e, t, !0), t + 4
            }, o.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
            }, o.prototype.writeFloatLE = function(e, t, r) {
                return z(this, e, t, !0, r)
            }, o.prototype.writeFloatBE = function(e, t, r) {
                return z(this, e, t, !1, r)
            }, o.prototype.writeDoubleLE = function(e, t, r) {
                return j(this, e, t, !0, r)
            }, o.prototype.writeDoubleBE = function(e, t, r) {
                return j(this, e, t, !1, r)
            }, o.prototype.copy = function(e, t, r, i) {
                if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
                var n, s = i - r;
                if (this === e && r < t && t < i)
                    for (n = s - 1; n >= 0; --n) e[n + t] = this[n + r];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (n = 0; n < s; ++n) e[n + t] = this[n + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
                return s
            }, o.prototype.fill = function(e, t, r, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), 1 === e.length) {
                        var n = e.charCodeAt(0);
                        n < 256 && (e = n)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
                var s;
                if ("number" == typeof e)
                    for (s = t; s < r; ++s) this[s] = e;
                else {
                    var a = o.isBuffer(e) ? e : K(new o(e, i).toString()),
                        u = a.length;
                    for (s = 0; s < r - t; ++s) this[s + t] = a[s % u]
                }
                return this
            };
            var te = /[^+\/0-9A-Za-z-_]/g
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function r(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function i(e) {
            return 3 * e.length / 4 - r(e)
        }

        function n(e) {
            var t, i, n, s, o, a, u = e.length;
            o = r(e), a = new l(3 * u / 4 - o), n = o > 0 ? u - 4 : u;
            var h = 0;
            for (t = 0, i = 0; t < n; t += 4, i += 3) s = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], a[h++] = s >> 16 & 255, a[h++] = s >> 8 & 255, a[h++] = 255 & s;
            return 2 === o ? (s = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, a[h++] = 255 & s) : 1 === o && (s = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, a[h++] = s >> 8 & 255, a[h++] = 255 & s), a
        }

        function s(e) {
            return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
        }

        function o(e, t, r) {
            for (var i, n = [], o = t; o < r; o += 3) i = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], n.push(s(i));
            return n.join("")
        }

        function a(e) {
            for (var t, r = e.length, i = r % 3, n = "", s = [], a = 16383, c = 0, l = r - i; c < l; c += a) s.push(o(e, c, c + a > l ? l : c + a));
            return 1 === i ? (t = e[r - 1], n += u[t >> 2], n += u[t << 4 & 63], n += "==") : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], n += u[t >> 10], n += u[t >> 4 & 63], n += u[t << 2 & 63], n += "="), s.push(n), s.join("")
        }
        t.byteLength = i, t.toByteArray = n, t.fromByteArray = a;
        for (var u = [], c = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, f = h.length; p < f; ++p) u[p] = h[p], c[h.charCodeAt(p)] = p;
        c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
    }, function(e, t) {
        t.read = function(e, t, r, i, n) {
            var s, o, a = 8 * n - i - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = -7,
                h = r ? n - 1 : 0,
                p = r ? -1 : 1,
                f = e[t + h];
            for (h += p, s = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; s = 256 * s + e[t + h], h += p, l -= 8);
            for (o = s & (1 << -l) - 1, s >>= -l, l += i; l > 0; o = 256 * o + e[t + h], h += p, l -= 8);
            if (0 === s) s = 1 - c;
            else {
                if (s === u) return o ? NaN : (f ? -1 : 1) * (1 / 0);
                o += Math.pow(2, i), s -= c
            }
            return (f ? -1 : 1) * o * Math.pow(2, s - i)
        }, t.write = function(e, t, r, i, n, s) {
            var o, a, u, c = 8 * s - n - 1,
                l = (1 << c) - 1,
                h = l >> 1,
                p = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = i ? 0 : s - 1,
                d = i ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), t += o + h >= 1 ? p / u : p * Math.pow(2, 1 - h), t * u >= 2 && (o++, u /= 2), o + h >= l ? (a = 0, o = l) : o + h >= 1 ? (a = (t * u - 1) * Math.pow(2, n), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, n), o = 0)); n >= 8; e[r + f] = 255 & a, f += d, a /= 256, n -= 8);
            for (o = o << n | a, c += n; c > 0; e[r + f] = 255 & o, f += d, o /= 256, c -= 8);
            e[r + f - d] |= 128 * m
        }
    }, function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !0;
            var t, r, i, n, s, u = [],
                c = e;
            for (t = 0, r = c.length; t < r; t += 1) {
                if (i = c[t], s = !1, "[object Object]" !== a.call(i)) return !1;
                for (n in i)
                    if (o.call(i, n)) {
                        if (s) return !1;
                        s = !0
                    }
                if (!s) return !1;
                if (u.indexOf(n) !== -1) return !1;
                u.push(n)
            }
            return !0
        }

        function n(e) {
            return null !== e ? e : []
        }
        var s = r(49),
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.toString;
        e.exports = new s("tag:yaml.org,2002:omap", {
            kind: "sequence",
            resolve: i,
            construct: n
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !0;
            var t, r, i, n, s, a = e;
            for (s = new Array(a.length), t = 0, r = a.length; t < r; t += 1) {
                if (i = a[t], "[object Object]" !== o.call(i)) return !1;
                if (n = Object.keys(i), 1 !== n.length) return !1;
                s[t] = [n[0], i[n[0]]]
            }
            return !0
        }

        function n(e) {
            if (null === e) return [];
            var t, r, i, n, s, o = e;
            for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) i = o[t], n = Object.keys(i), s[t] = [n[0], i[n[0]]];
            return s
        }
        var s = r(49),
            o = Object.prototype.toString;
        e.exports = new s("tag:yaml.org,2002:pairs", {
            kind: "sequence",
            resolve: i,
            construct: n
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !0;
            var t, r = e;
            for (t in r)
                if (o.call(r, t) && null !== r[t]) return !1;
            return !0
        }

        function n(e) {
            return null !== e ? e : {}
        }
        var s = r(49),
            o = Object.prototype.hasOwnProperty;
        e.exports = new s("tag:yaml.org,2002:set", {
            kind: "mapping",
            resolve: i,
            construct: n
        })
    }, function(e, t, r) {
        "use strict";
        var i = r(48);
        e.exports = i.DEFAULT = new i({
            include: [r(47)],
            explicit: [r(71), r(72), r(73)]
        })
    }, function(e, t, r) {
        "use strict";

        function i() {
            return !0
        }

        function n() {}

        function s() {
            return ""
        }

        function o(e) {
            return "undefined" == typeof e
        }
        var a = r(49);
        e.exports = new a("tag:yaml.org,2002:js/undefined", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: o,
            represent: s
        })
    }, function(e, t, r) {
        "use strict";

        function i(e) {
            if (null === e) return !1;
            if (0 === e.length) return !1;
            var t = e,
                r = /\/([gim]*)$/.exec(e),
                i = "";
            if ("/" === t[0]) {
                if (r && (i = r[1]), i.length > 3) return !1;
                if ("/" !== t[t.length - i.length - 1]) return !1
            }
            return !0
        }

        function n(e) {
            var t = e,
                r = /\/([gim]*)$/.exec(e),
                i = "";
            return "/" === t[0] && (r && (i = r[1]), t = t.slice(1, t.length - i.length - 1)), new RegExp(t, i)
        }

        function s(e) {
            var t = "/" + e.source + "/";
            return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t
        }

        function o(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }
        var a = r(49);
        e.exports = new a("tag:yaml.org,2002:js/regexp", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: o,
            represent: s
        })
    }, function(e, t, r) {
        function i(e) {
            if (null === e) return !1;
            try {
                var t = "(" + e + ")",
                    r = a.parse(t, {
                        range: !0
                    });
                return "Program" === r.type && 1 === r.body.length && "ExpressionStatement" === r.body[0].type && "FunctionExpression" === r.body[0].expression.type
            } catch (e) {
                return !1
            }
        }

        function n(e) {
            var t, r = "(" + e + ")",
                i = a.parse(r, {
                    range: !0
                }),
                n = [];
            if ("Program" !== i.type || 1 !== i.body.length || "ExpressionStatement" !== i.body[0].type || "FunctionExpression" !== i.body[0].expression.type) throw new Error("Failed to resolve function");
            return i.body[0].expression.params.forEach(function(e) {
                n.push(e.name)
            }), t = i.body[0].expression.body.range, new Function(n, r.slice(t[0] + 1, t[1] - 1))
        }

        function s(e) {
            return e.toString()
        }

        function o(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
        var a;
        try {
            a = r(74)
        } catch (e) {
            "undefined" != typeof window && (a = window.esprima)
        }
        var u = r(49);
        e.exports = new u("tag:yaml.org,2002:js/function", {
            kind: "scalar",
            resolve: i,
            construct: n,
            predicate: o,
            represent: s
        })
    }, function(e, t, r) {
        ! function(t, r) {
            e.exports = r()
        }(this, function() {
            return function(e) {
                function t(i) {
                    if (r[i]) return r[i].exports;
                    var n = r[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                    };
                    return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
                }
                var r = {};
                return t.m = e, t.c = r, t.p = "", t(0)
            }([function(e, t, r) {
                "use strict";

                function i(e, t, r) {
                    var i = null,
                        n = function(e, t) {
                            r && r(e, t), i && i.visit(e, t)
                        },
                        u = "function" == typeof r ? n : null,
                        c = !1;
                    if (t) {
                        c = "boolean" == typeof t.comment && t.comment;
                        var l = "boolean" == typeof t.attachComment && t.attachComment;
                        (c || l) && (i = new s.CommentHandler, i.attach = l, t.comment = !0, u = n)
                    }
                    var h;
                    h = t && "boolean" == typeof t.jsx && t.jsx ? new a.JSXParser(e, t, u) : new o.Parser(e, t, u);
                    var p = h.parseProgram();
                    return c && (p.comments = i.comments), h.config.tokens && (p.tokens = h.tokens), h.config.tolerant && (p.errors = h.errorHandler.errors), p
                }

                function n(e, t, r) {
                    var i, n = new u.Tokenizer(e, t);
                    i = [];
                    try {
                        for (;;) {
                            var s = n.getNextToken();
                            if (!s) break;
                            r && (s = r(s)), i.push(s)
                        }
                    } catch (e) {
                        n.errorHandler.tolerate(e)
                    }
                    return n.errorHandler.tolerant && (i.errors = n.errors()), i
                }
                var s = r(1),
                    o = r(3),
                    a = r(11),
                    u = r(15);
                t.parse = i, t.tokenize = n;
                var c = r(2);
                t.Syntax = c.Syntax, t.version = "3.1.3"
            }, function(e, t, r) {
                "use strict";
                var i = r(2),
                    n = function() {
                        function e() {
                            this.attach = !1, this.comments = [], this.stack = [], this.leading = [], this.trailing = []
                        }
                        return e.prototype.insertInnerComments = function(e, t) {
                            if (e.type === i.Syntax.BlockStatement && 0 === e.body.length) {
                                for (var r = [], n = this.leading.length - 1; n >= 0; --n) {
                                    var s = this.leading[n];
                                    t.end.offset >= s.start && (r.unshift(s.comment), this.leading.splice(n, 1), this.trailing.splice(n, 1))
                                }
                                r.length && (e.innerComments = r)
                            }
                        }, e.prototype.findTrailingComments = function(e, t) {
                            var r = [];
                            if (this.trailing.length > 0) {
                                for (var i = this.trailing.length - 1; i >= 0; --i) {
                                    var n = this.trailing[i];
                                    n.start >= t.end.offset && r.unshift(n.comment)
                                }
                                return this.trailing.length = 0, r
                            }
                            var s = this.stack[this.stack.length - 1];
                            if (s && s.node.trailingComments) {
                                var o = s.node.trailingComments[0];
                                o && o.range[0] >= t.end.offset && (r = s.node.trailingComments, delete s.node.trailingComments)
                            }
                            return r
                        }, e.prototype.findLeadingComments = function(e, t) {
                            for (var r, i = []; this.stack.length > 0;) {
                                var n = this.stack[this.stack.length - 1];
                                if (!(n && n.start >= t.start.offset)) break;
                                r = this.stack.pop().node
                            }
                            if (r) {
                                for (var s = r.leadingComments ? r.leadingComments.length : 0, o = s - 1; o >= 0; --o) {
                                    var a = r.leadingComments[o];
                                    a.range[1] <= t.start.offset && (i.unshift(a), r.leadingComments.splice(o, 1))
                                }
                                return r.leadingComments && 0 === r.leadingComments.length && delete r.leadingComments, i
                            }
                            for (var o = this.leading.length - 1; o >= 0; --o) {
                                var n = this.leading[o];
                                n.start <= t.start.offset && (i.unshift(n.comment), this.leading.splice(o, 1))
                            }
                            return i
                        }, e.prototype.visitNode = function(e, t) {
                            if (!(e.type === i.Syntax.Program && e.body.length > 0)) {
                                this.insertInnerComments(e, t);
                                var r = this.findTrailingComments(e, t),
                                    n = this.findLeadingComments(e, t);
                                n.length > 0 && (e.leadingComments = n), r.length > 0 && (e.trailingComments = r), this.stack.push({
                                    node: e,
                                    start: t.start.offset
                                })
                            }
                        }, e.prototype.visitComment = function(e, t) {
                            var r = "L" === e.type[0] ? "Line" : "Block",
                                i = {
                                    type: r,
                                    value: e.value
                                };
                            if (e.range && (i.range = e.range), e.loc && (i.loc = e.loc), this.comments.push(i), this.attach) {
                                var n = {
                                    comment: {
                                        type: r,
                                        value: e.value,
                                        range: [t.start.offset, t.end.offset]
                                    },
                                    start: t.start.offset
                                };
                                e.loc && (n.comment.loc = e.loc), e.type = r, this.leading.push(n), this.trailing.push(n)
                            }
                        }, e.prototype.visit = function(e, t) {
                            "LineComment" === e.type ? this.visitComment(e, t) : "BlockComment" === e.type ? this.visitComment(e, t) : this.attach && this.visitNode(e, t)
                        }, e
                    }();
                t.CommentHandler = n
            }, function(e, t) {
                "use strict";
                t.Syntax = {
                    AssignmentExpression: "AssignmentExpression",
                    AssignmentPattern: "AssignmentPattern",
                    ArrayExpression: "ArrayExpression",
                    ArrayPattern: "ArrayPattern",
                    ArrowFunctionExpression: "ArrowFunctionExpression",
                    BlockStatement: "BlockStatement",
                    BinaryExpression: "BinaryExpression",
                    BreakStatement: "BreakStatement",
                    CallExpression: "CallExpression",
                    CatchClause: "CatchClause",
                    ClassBody: "ClassBody",
                    ClassDeclaration: "ClassDeclaration",
                    ClassExpression: "ClassExpression",
                    ConditionalExpression: "ConditionalExpression",
                    ContinueStatement: "ContinueStatement",
                    DoWhileStatement: "DoWhileStatement",
                    DebuggerStatement: "DebuggerStatement",
                    EmptyStatement: "EmptyStatement",
                    ExportAllDeclaration: "ExportAllDeclaration",
                    ExportDefaultDeclaration: "ExportDefaultDeclaration",
                    ExportNamedDeclaration: "ExportNamedDeclaration",
                    ExportSpecifier: "ExportSpecifier",
                    ExpressionStatement: "ExpressionStatement",
                    ForStatement: "ForStatement",
                    ForOfStatement: "ForOfStatement",
                    ForInStatement: "ForInStatement",
                    FunctionDeclaration: "FunctionDeclaration",
                    FunctionExpression: "FunctionExpression",
                    Identifier: "Identifier",
                    IfStatement: "IfStatement",
                    ImportDeclaration: "ImportDeclaration",
                    ImportDefaultSpecifier: "ImportDefaultSpecifier",
                    ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                    ImportSpecifier: "ImportSpecifier",
                    Literal: "Literal",
                    LabeledStatement: "LabeledStatement",
                    LogicalExpression: "LogicalExpression",
                    MemberExpression: "MemberExpression",
                    MetaProperty: "MetaProperty",
                    MethodDefinition: "MethodDefinition",
                    NewExpression: "NewExpression",
                    ObjectExpression: "ObjectExpression",
                    ObjectPattern: "ObjectPattern",
                    Program: "Program",
                    Property: "Property",
                    RestElement: "RestElement",
                    ReturnStatement: "ReturnStatement",
                    SequenceExpression: "SequenceExpression",
                    SpreadElement: "SpreadElement",
                    Super: "Super",
                    SwitchCase: "SwitchCase",
                    SwitchStatement: "SwitchStatement",
                    TaggedTemplateExpression: "TaggedTemplateExpression",
                    TemplateElement: "TemplateElement",
                    TemplateLiteral: "TemplateLiteral",
                    ThisExpression: "ThisExpression",
                    ThrowStatement: "ThrowStatement",
                    TryStatement: "TryStatement",
                    UnaryExpression: "UnaryExpression",
                    UpdateExpression: "UpdateExpression",
                    VariableDeclaration: "VariableDeclaration",
                    VariableDeclarator: "VariableDeclarator",
                    WhileStatement: "WhileStatement",
                    WithStatement: "WithStatement",
                    YieldExpression: "YieldExpression"
                }
            }, function(e, t, r) {
                "use strict";
                var i = r(4),
                    n = r(5),
                    s = r(6),
                    o = r(7),
                    a = r(8),
                    u = r(2),
                    c = r(10),
                    l = "ArrowParameterPlaceHolder",
                    h = function() {
                        function e(e, t, r) {
                            void 0 === t && (t = {}), this.config = {
                                range: "boolean" == typeof t.range && t.range,
                                loc: "boolean" == typeof t.loc && t.loc,
                                source: null,
                                tokens: "boolean" == typeof t.tokens && t.tokens,
                                comment: "boolean" == typeof t.comment && t.comment,
                                tolerant: "boolean" == typeof t.tolerant && t.tolerant
                            }, this.config.loc && t.source && null !== t.source && (this.config.source = String(t.source)), this.delegate = r, this.errorHandler = new s.ErrorHandler, this.errorHandler.tolerant = this.config.tolerant, this.scanner = new a.Scanner(e, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = {
                                ")": 0,
                                ";": 0,
                                ",": 0,
                                "=": 0,
                                "]": 0,
                                "||": 1,
                                "&&": 2,
                                "|": 3,
                                "^": 4,
                                "&": 5,
                                "==": 6,
                                "!=": 6,
                                "===": 6,
                                "!==": 6,
                                "<": 7,
                                ">": 7,
                                "<=": 7,
                                ">=": 7,
                                "<<": 8,
                                ">>": 8,
                                ">>>": 8,
                                "+": 9,
                                "-": 9,
                                "*": 11,
                                "/": 11,
                                "%": 11
                            }, this.sourceType = t && "module" === t.sourceType ? "module" : "script", this.lookahead = null, this.hasLineTerminator = !1, this.context = {
                                allowIn: !0,
                                allowYield: !0,
                                firstCoverInitializedNameError: null,
                                isAssignmentTarget: !1,
                                isBindingElement: !1,
                                inFunctionBody: !1,
                                inIteration: !1,
                                inSwitch: !1,
                                labelSet: {},
                                strict: "module" === this.sourceType
                            }, this.tokens = [], this.startMarker = {
                                index: 0,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: 0
                            }, this.lastMarker = {
                                index: 0,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: 0
                            }, this.nextToken(), this.lastMarker = {
                                index: this.scanner.index,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart
                            }
                        }
                        return e.prototype.throwError = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            var n = Array.prototype.slice.call(arguments, 1),
                                s = e.replace(/%(\d)/g, function(e, t) {
                                    return i.assert(t < n.length, "Message reference must be in range"), n[t]
                                }),
                                o = this.lastMarker.index,
                                a = this.lastMarker.lineNumber,
                                u = this.lastMarker.index - this.lastMarker.lineStart + 1;
                            throw this.errorHandler.createError(o, a, u, s)
                        }, e.prototype.tolerateError = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            var n = Array.prototype.slice.call(arguments, 1),
                                s = e.replace(/%(\d)/g, function(e, t) {
                                    return i.assert(t < n.length, "Message reference must be in range"), n[t]
                                }),
                                o = this.lastMarker.index,
                                a = this.scanner.lineNumber,
                                u = this.lastMarker.index - this.lastMarker.lineStart + 1;
                            this.errorHandler.tolerateError(o, a, u, s)
                        }, e.prototype.unexpectedTokenError = function(e, t) {
                            var r, i = t || n.Messages.UnexpectedToken;
                            if (e ? (t || (i = e.type === o.Token.EOF ? n.Messages.UnexpectedEOS : e.type === o.Token.Identifier ? n.Messages.UnexpectedIdentifier : e.type === o.Token.NumericLiteral ? n.Messages.UnexpectedNumber : e.type === o.Token.StringLiteral ? n.Messages.UnexpectedString : e.type === o.Token.Template ? n.Messages.UnexpectedTemplate : n.Messages.UnexpectedToken, e.type === o.Token.Keyword && (this.scanner.isFutureReservedWord(e.value) ? i = n.Messages.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(e.value) && (i = n.Messages.StrictReservedWord))), r = e.type === o.Token.Template ? e.value.raw : e.value) : r = "ILLEGAL", i = i.replace("%0", r), e && "number" == typeof e.lineNumber) {
                                var s = e.start,
                                    a = e.lineNumber,
                                    u = e.start - this.lastMarker.lineStart + 1;
                                return this.errorHandler.createError(s, a, u, i)
                            }
                            var s = this.lastMarker.index,
                                a = this.lastMarker.lineNumber,
                                u = s - this.lastMarker.lineStart + 1;
                            return this.errorHandler.createError(s, a, u, i)
                        }, e.prototype.throwUnexpectedToken = function(e, t) {
                            throw this.unexpectedTokenError(e, t)
                        }, e.prototype.tolerateUnexpectedToken = function(e, t) {
                            this.errorHandler.tolerate(this.unexpectedTokenError(e, t))
                        }, e.prototype.collectComments = function() {
                            if (this.config.comment) {
                                var e = this.scanner.scanComments();
                                if (e.length > 0 && this.delegate)
                                    for (var t = 0; t < e.length; ++t) {
                                        var r = e[t],
                                            i = void 0;
                                        i = {
                                            type: r.multiLine ? "BlockComment" : "LineComment",
                                            value: this.scanner.source.slice(r.slice[0], r.slice[1])
                                        }, this.config.range && (i.range = r.range), this.config.loc && (i.loc = r.loc);
                                        var n = {
                                            start: {
                                                line: r.loc.start.line,
                                                column: r.loc.start.column,
                                                offset: r.range[0]
                                            },
                                            end: {
                                                line: r.loc.end.line,
                                                column: r.loc.end.column,
                                                offset: r.range[1]
                                            }
                                        };
                                        this.delegate(i, n)
                                    }
                            } else this.scanner.scanComments()
                        }, e.prototype.getTokenRaw = function(e) {
                            return this.scanner.source.slice(e.start, e.end)
                        }, e.prototype.convertToken = function(e) {
                            var t;
                            return t = {
                                type: o.TokenName[e.type],
                                value: this.getTokenRaw(e)
                            }, this.config.range && (t.range = [e.start, e.end]), this.config.loc && (t.loc = {
                                start: {
                                    line: this.startMarker.lineNumber,
                                    column: this.startMarker.index - this.startMarker.lineStart
                                },
                                end: {
                                    line: this.scanner.lineNumber,
                                    column: this.scanner.index - this.scanner.lineStart
                                }
                            }), e.regex && (t.regex = e.regex), t
                        }, e.prototype.nextToken = function() {
                            var e = this.lookahead;
                            this.lastMarker.index = this.scanner.index, this.lastMarker.lineNumber = this.scanner.lineNumber, this.lastMarker.lineStart = this.scanner.lineStart, this.collectComments(), this.startMarker.index = this.scanner.index, this.startMarker.lineNumber = this.scanner.lineNumber, this.startMarker.lineStart = this.scanner.lineStart;
                            var t;
                            return t = this.scanner.lex(), this.hasLineTerminator = !(!e || !t) && e.lineNumber !== t.lineNumber, t && this.context.strict && t.type === o.Token.Identifier && this.scanner.isStrictModeReservedWord(t.value) && (t.type = o.Token.Keyword), this.lookahead = t, this.config.tokens && t.type !== o.Token.EOF && this.tokens.push(this.convertToken(t)), e
                        }, e.prototype.nextRegexToken = function() {
                            this.collectComments();
                            var e = this.scanner.scanRegExp();
                            return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(e))), this.lookahead = e, this.nextToken(), e
                        }, e.prototype.createNode = function() {
                            return {
                                index: this.startMarker.index,
                                line: this.startMarker.lineNumber,
                                column: this.startMarker.index - this.startMarker.lineStart
                            }
                        }, e.prototype.startNode = function(e) {
                            return {
                                index: e.start,
                                line: e.lineNumber,
                                column: e.start - e.lineStart
                            }
                        }, e.prototype.finalize = function(e, t) {
                            if (this.config.range && (t.range = [e.index, this.lastMarker.index]), this.config.loc && (t.loc = {
                                    start: {
                                        line: e.line,
                                        column: e.column
                                    },
                                    end: {
                                        line: this.lastMarker.lineNumber,
                                        column: this.lastMarker.index - this.lastMarker.lineStart
                                    }
                                }, this.config.source && (t.loc.source = this.config.source)), this.delegate) {
                                var r = {
                                    start: {
                                        line: e.line,
                                        column: e.column,
                                        offset: e.index
                                    },
                                    end: {
                                        line: this.lastMarker.lineNumber,
                                        column: this.lastMarker.index - this.lastMarker.lineStart,
                                        offset: this.lastMarker.index
                                    }
                                };
                                this.delegate(t, r)
                            }
                            return t
                        }, e.prototype.expect = function(e) {
                            var t = this.nextToken();
                            t.type === o.Token.Punctuator && t.value === e || this.throwUnexpectedToken(t)
                        }, e.prototype.expectCommaSeparator = function() {
                            if (this.config.tolerant) {
                                var e = this.lookahead;
                                e.type === o.Token.Punctuator && "," === e.value ? this.nextToken() : e.type === o.Token.Punctuator && ";" === e.value ? (this.nextToken(), this.tolerateUnexpectedToken(e)) : this.tolerateUnexpectedToken(e, n.Messages.UnexpectedToken)
                            } else this.expect(",")
                        }, e.prototype.expectKeyword = function(e) {
                            var t = this.nextToken();
                            t.type === o.Token.Keyword && t.value === e || this.throwUnexpectedToken(t)
                        }, e.prototype.match = function(e) {
                            return this.lookahead.type === o.Token.Punctuator && this.lookahead.value === e
                        }, e.prototype.matchKeyword = function(e) {
                            return this.lookahead.type === o.Token.Keyword && this.lookahead.value === e
                        }, e.prototype.matchContextualKeyword = function(e) {
                            return this.lookahead.type === o.Token.Identifier && this.lookahead.value === e
                        }, e.prototype.matchAssign = function() {
                            if (this.lookahead.type !== o.Token.Punctuator) return !1;
                            var e = this.lookahead.value;
                            return "=" === e || "*=" === e || "**=" === e || "/=" === e || "%=" === e || "+=" === e || "-=" === e || "<<=" === e || ">>=" === e || ">>>=" === e || "&=" === e || "^=" === e || "|=" === e
                        }, e.prototype.isolateCoverGrammar = function(e) {
                            var t = this.context.isBindingElement,
                                r = this.context.isAssignmentTarget,
                                i = this.context.firstCoverInitializedNameError;
                            this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                            var n = e.call(this);
                            return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = t, this.context.isAssignmentTarget = r, this.context.firstCoverInitializedNameError = i, n
                        }, e.prototype.inheritCoverGrammar = function(e) {
                            var t = this.context.isBindingElement,
                                r = this.context.isAssignmentTarget,
                                i = this.context.firstCoverInitializedNameError;
                            this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
                            var n = e.call(this);
                            return this.context.isBindingElement = this.context.isBindingElement && t, this.context.isAssignmentTarget = this.context.isAssignmentTarget && r, this.context.firstCoverInitializedNameError = i || this.context.firstCoverInitializedNameError, n
                        }, e.prototype.consumeSemicolon = function() {
                            this.match(";") ? this.nextToken() : this.hasLineTerminator || (this.lookahead.type === o.Token.EOF || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.lineNumber = this.startMarker.lineNumber, this.lastMarker.lineStart = this.startMarker.lineStart)
                        }, e.prototype.parsePrimaryExpression = function() {
                            var e, t, r, i, s = this.createNode();
                            switch (this.lookahead.type) {
                                case o.Token.Identifier:
                                    "module" === this.sourceType && "await" === this.lookahead.value && this.tolerateUnexpectedToken(this.lookahead), e = this.finalize(s, new c.Identifier(this.nextToken().value));
                                    break;
                                case o.Token.NumericLiteral:
                                case o.Token.StringLiteral:
                                    this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, n.Messages.StrictOctalLiteral), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), i = this.getTokenRaw(r), e = this.finalize(s, new c.Literal(r.value, i));
                                    break;
                                case o.Token.BooleanLiteral:
                                    this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), r.value = "true" === r.value, i = this.getTokenRaw(r), e = this.finalize(s, new c.Literal(r.value, i));
                                    break;
                                case o.Token.NullLiteral:
                                    this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, r = this.nextToken(), r.value = null, i = this.getTokenRaw(r), e = this.finalize(s, new c.Literal(r.value, i));
                                    break;
                                case o.Token.Template:
                                    e = this.parseTemplateLiteral();
                                    break;
                                case o.Token.Punctuator:
                                    switch (t = this.lookahead.value) {
                                        case "(":
                                            this.context.isBindingElement = !1, e = this.inheritCoverGrammar(this.parseGroupExpression);
                                            break;
                                        case "[":
                                            e = this.inheritCoverGrammar(this.parseArrayInitializer);
                                            break;
                                        case "{":
                                            e = this.inheritCoverGrammar(this.parseObjectInitializer);
                                            break;
                                        case "/":
                                        case "/=":
                                            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.scanner.index = this.startMarker.index, r = this.nextRegexToken(), i = this.getTokenRaw(r), e = this.finalize(s, new c.RegexLiteral(r.value, i, r.regex));
                                            break;
                                        default:
                                            this.throwUnexpectedToken(this.nextToken())
                                    }
                                    break;
                                case o.Token.Keyword:
                                    !this.context.strict && this.context.allowYield && this.matchKeyword("yield") ? e = this.parseIdentifierName() : !this.context.strict && this.matchKeyword("let") ? e = this.finalize(s, new c.Identifier(this.nextToken().value)) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.matchKeyword("function") ? e = this.parseFunctionExpression() : this.matchKeyword("this") ? (this.nextToken(), e = this.finalize(s, new c.ThisExpression)) : this.matchKeyword("class") ? e = this.parseClassExpression() : this.throwUnexpectedToken(this.nextToken()));
                                    break;
                                default:
                                    this.throwUnexpectedToken(this.nextToken())
                            }
                            return e
                        }, e.prototype.parseSpreadElement = function() {
                            var e = this.createNode();
                            this.expect("...");
                            var t = this.inheritCoverGrammar(this.parseAssignmentExpression);
                            return this.finalize(e, new c.SpreadElement(t))
                        }, e.prototype.parseArrayInitializer = function() {
                            var e = this.createNode(),
                                t = [];
                            for (this.expect("["); !this.match("]");)
                                if (this.match(",")) this.nextToken(), t.push(null);
                                else if (this.match("...")) {
                                var r = this.parseSpreadElement();
                                this.match("]") || (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, this.expect(",")), t.push(r)
                            } else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(",");
                            return this.expect("]"), this.finalize(e, new c.ArrayExpression(t))
                        }, e.prototype.parsePropertyMethod = function(e) {
                            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                            var t = this.context.strict,
                                r = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                            return this.context.strict && e.firstRestricted && this.tolerateUnexpectedToken(e.firstRestricted, e.message), this.context.strict && e.stricted && this.tolerateUnexpectedToken(e.stricted, e.message), this.context.strict = t, r
                        }, e.prototype.parsePropertyMethodFunction = function() {
                            var e = !1,
                                t = this.createNode(),
                                r = this.context.allowYield;
                            this.context.allowYield = !1;
                            var i = this.parseFormalParameters(),
                                n = this.parsePropertyMethod(i);
                            return this.context.allowYield = r, this.finalize(t, new c.FunctionExpression(null, i.params, n, e))
                        }, e.prototype.parseObjectPropertyKey = function() {
                            var e = this.createNode(),
                                t = this.nextToken(),
                                r = null;
                            switch (t.type) {
                                case o.Token.StringLiteral:
                                case o.Token.NumericLiteral:
                                    this.context.strict && t.octal && this.tolerateUnexpectedToken(t, n.Messages.StrictOctalLiteral);
                                    var i = this.getTokenRaw(t);
                                    r = this.finalize(e, new c.Literal(t.value, i));
                                    break;
                                case o.Token.Identifier:
                                case o.Token.BooleanLiteral:
                                case o.Token.NullLiteral:
                                case o.Token.Keyword:
                                    r = this.finalize(e, new c.Identifier(t.value));
                                    break;
                                case o.Token.Punctuator:
                                    "[" === t.value ? (r = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : this.throwUnexpectedToken(t);
                                    break;
                                default:
                                    this.throwUnexpectedToken(t)
                            }
                            return r
                        }, e.prototype.isPropertyKey = function(e, t) {
                            return e.type === u.Syntax.Identifier && e.name === t || e.type === u.Syntax.Literal && e.value === t
                        }, e.prototype.parseObjectProperty = function(e) {
                            var t, r, i, s = this.createNode(),
                                a = this.lookahead,
                                u = !1,
                                l = !1,
                                h = !1;
                            a.type === o.Token.Identifier ? (this.nextToken(), r = this.finalize(s, new c.Identifier(a.value))) : this.match("*") ? this.nextToken() : (u = this.match("["), r = this.parseObjectPropertyKey());
                            var p = this.qualifiedPropertyName(this.lookahead);
                            if (a.type === o.Token.Identifier && "get" === a.value && p) t = "get", u = this.match("["), r = this.parseObjectPropertyKey(), this.context.allowYield = !1, i = this.parseGetterMethod();
                            else if (a.type === o.Token.Identifier && "set" === a.value && p) t = "set", u = this.match("["), r = this.parseObjectPropertyKey(), i = this.parseSetterMethod();
                            else if (a.type === o.Token.Punctuator && "*" === a.value && p) t = "init", u = this.match("["), r = this.parseObjectPropertyKey(), i = this.parseGeneratorMethod(), l = !0;
                            else if (r || this.throwUnexpectedToken(this.lookahead), t = "init", this.match(":")) !u && this.isPropertyKey(r, "__proto__") && (e.value && this.tolerateError(n.Messages.DuplicateProtoProperty), e.value = !0), this.nextToken(), i = this.inheritCoverGrammar(this.parseAssignmentExpression);
                            else if (this.match("(")) i = this.parsePropertyMethodFunction(), l = !0;
                            else if (a.type === o.Token.Identifier) {
                                var f = this.finalize(s, new c.Identifier(a.value));
                                if (this.match("=")) {
                                    this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), h = !0;
                                    var d = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                    i = this.finalize(s, new c.AssignmentPattern(f, d))
                                } else h = !0, i = f
                            } else this.throwUnexpectedToken(this.nextToken());
                            return this.finalize(s, new c.Property(t, r, u, i, l, h))
                        }, e.prototype.parseObjectInitializer = function() {
                            var e = this.createNode();
                            this.expect("{");
                            for (var t = [], r = {
                                    value: !1
                                }; !this.match("}");) t.push(this.parseObjectProperty(r)), this.match("}") || this.expectCommaSeparator();
                            return this.expect("}"), this.finalize(e, new c.ObjectExpression(t))
                        }, e.prototype.parseTemplateHead = function() {
                            i.assert(this.lookahead.head, "Template literal must start with a template head");
                            var e = this.createNode(),
                                t = this.nextToken(),
                                r = {
                                    raw: t.value.raw,
                                    cooked: t.value.cooked
                                };
                            return this.finalize(e, new c.TemplateElement(r, t.tail))
                        }, e.prototype.parseTemplateElement = function() {
                            this.lookahead.type !== o.Token.Template && this.throwUnexpectedToken();
                            var e = this.createNode(),
                                t = this.nextToken(),
                                r = {
                                    raw: t.value.raw,
                                    cooked: t.value.cooked
                                };
                            return this.finalize(e, new c.TemplateElement(r, t.tail))
                        }, e.prototype.parseTemplateLiteral = function() {
                            var e = this.createNode(),
                                t = [],
                                r = [],
                                i = this.parseTemplateHead();
                            for (r.push(i); !i.tail;) t.push(this.parseExpression()), i = this.parseTemplateElement(), r.push(i);
                            return this.finalize(e, new c.TemplateLiteral(r, t))
                        }, e.prototype.reinterpretExpressionAsPattern = function(e) {
                            switch (e.type) {
                                case u.Syntax.Identifier:
                                case u.Syntax.MemberExpression:
                                case u.Syntax.RestElement:
                                case u.Syntax.AssignmentPattern:
                                    break;
                                case u.Syntax.SpreadElement:
                                    e.type = u.Syntax.RestElement, this.reinterpretExpressionAsPattern(e.argument);
                                    break;
                                case u.Syntax.ArrayExpression:
                                    e.type = u.Syntax.ArrayPattern;
                                    for (var t = 0; t < e.elements.length; t++) null !== e.elements[t] && this.reinterpretExpressionAsPattern(e.elements[t]);
                                    break;
                                case u.Syntax.ObjectExpression:
                                    e.type = u.Syntax.ObjectPattern;
                                    for (var t = 0; t < e.properties.length; t++) this.reinterpretExpressionAsPattern(e.properties[t].value);
                                    break;
                                case u.Syntax.AssignmentExpression:
                                    e.type = u.Syntax.AssignmentPattern, delete e.operator, this.reinterpretExpressionAsPattern(e.left)
                            }
                        }, e.prototype.parseGroupExpression = function() {
                            var e;
                            if (this.expect("("), this.match(")")) this.nextToken(), this.match("=>") || this.expect("=>"), e = {
                                type: l,
                                params: []
                            };
                            else {
                                var t = this.lookahead,
                                    r = [];
                                if (this.match("...")) e = this.parseRestElement(r), this.expect(")"), this.match("=>") || this.expect("=>"), e = {
                                    type: l,
                                    params: [e]
                                };
                                else {
                                    var i = !1;
                                    if (this.context.isBindingElement = !0, e = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
                                        var n = [];
                                        for (this.context.isAssignmentTarget = !1, n.push(e); this.startMarker.index < this.scanner.length && this.match(",");) {
                                            if (this.nextToken(), this.match("...")) {
                                                this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), n.push(this.parseRestElement(r)), this.expect(")"), this.match("=>") || this.expect("=>"), this.context.isBindingElement = !1;
                                                for (var s = 0; s < n.length; s++) this.reinterpretExpressionAsPattern(n[s]);
                                                i = !0, e = {
                                                    type: l,
                                                    params: n
                                                }
                                            } else n.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                            if (i) break
                                        }
                                        i || (e = this.finalize(this.startNode(t), new c.SequenceExpression(n)))
                                    }
                                    if (!i) {
                                        if (this.expect(")"), this.match("=>") && (e.type === u.Syntax.Identifier && "yield" === e.name && (i = !0, e = {
                                                type: l,
                                                params: [e]
                                            }), !i)) {
                                            if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e.type === u.Syntax.SequenceExpression)
                                                for (var s = 0; s < e.expressions.length; s++) this.reinterpretExpressionAsPattern(e.expressions[s]);
                                            else this.reinterpretExpressionAsPattern(e);
                                            var o = e.type === u.Syntax.SequenceExpression ? e.expressions : [e];
                                            e = {
                                                type: l,
                                                params: o
                                            }
                                        }
                                        this.context.isBindingElement = !1
                                    }
                                }
                            }
                            return e
                        }, e.prototype.parseArguments = function() {
                            this.expect("(");
                            var e = [];
                            if (!this.match(")"))
                                for (;;) {
                                    var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                                    if (e.push(t), this.match(")")) break;
                                    this.expectCommaSeparator()
                                }
                            return this.expect(")"), e
                        }, e.prototype.isIdentifierName = function(e) {
                            return e.type === o.Token.Identifier || e.type === o.Token.Keyword || e.type === o.Token.BooleanLiteral || e.type === o.Token.NullLiteral
                        }, e.prototype.parseIdentifierName = function() {
                            var e = this.createNode(),
                                t = this.nextToken();
                            return this.isIdentifierName(t) || this.throwUnexpectedToken(t), this.finalize(e, new c.Identifier(t.value))
                        }, e.prototype.parseNewExpression = function() {
                            var e = this.createNode(),
                                t = this.parseIdentifierName();
                            i.assert("new" === t.name, "New expression must start with `new`");
                            var r;
                            if (this.match("."))
                                if (this.nextToken(), this.lookahead.type === o.Token.Identifier && this.context.inFunctionBody && "target" === this.lookahead.value) {
                                    var n = this.parseIdentifierName();
                                    r = new c.MetaProperty(t, n)
                                } else this.throwUnexpectedToken(this.lookahead);
                            else {
                                var s = this.isolateCoverGrammar(this.parseLeftHandSideExpression),
                                    a = this.match("(") ? this.parseArguments() : [];
                                r = new c.NewExpression(s, a), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                            }
                            return this.finalize(e, r)
                        }, e.prototype.parseLeftHandSideExpressionAllowCall = function() {
                            var e = this.lookahead,
                                t = this.context.allowIn;
                            this.context.allowIn = !0;
                            var r;
                            for (this.matchKeyword("super") && this.context.inFunctionBody ? (r = this.createNode(), this.nextToken(), r = this.finalize(r, new c.Super), this.match("(") || this.match(".") || this.match("[") || this.throwUnexpectedToken(this.lookahead)) : r = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)
                                if (this.match(".")) {
                                    this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
                                    var i = this.parseIdentifierName();
                                    r = this.finalize(this.startNode(e), new c.StaticMemberExpression(r, i))
                                } else if (this.match("(")) {
                                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !1;
                                var n = this.parseArguments();
                                r = this.finalize(this.startNode(e), new c.CallExpression(r, n))
                            } else if (this.match("[")) {
                                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                                var i = this.isolateCoverGrammar(this.parseExpression);
                                this.expect("]"), r = this.finalize(this.startNode(e), new c.ComputedMemberExpression(r, i))
                            } else {
                                if (this.lookahead.type !== o.Token.Template || !this.lookahead.head) break;
                                var s = this.parseTemplateLiteral();
                                r = this.finalize(this.startNode(e), new c.TaggedTemplateExpression(r, s))
                            }
                            return this.context.allowIn = t, r
                        }, e.prototype.parseSuper = function() {
                            var e = this.createNode();
                            return this.expectKeyword("super"), this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead), this.finalize(e, new c.Super)
                        }, e.prototype.parseLeftHandSideExpression = function() {
                            i.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                            for (var e = this.startNode(this.lookahead), t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);;)
                                if (this.match("[")) {
                                    this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                                    var r = this.isolateCoverGrammar(this.parseExpression);
                                    this.expect("]"), t = this.finalize(e, new c.ComputedMemberExpression(t, r))
                                } else if (this.match(".")) {
                                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");
                                var r = this.parseIdentifierName();
                                t = this.finalize(e, new c.StaticMemberExpression(t, r))
                            } else {
                                if (this.lookahead.type !== o.Token.Template || !this.lookahead.head) break;
                                var n = this.parseTemplateLiteral();
                                t = this.finalize(e, new c.TaggedTemplateExpression(t, n))
                            }
                            return t
                        }, e.prototype.parseUpdateExpression = function() {
                            var e, t = this.lookahead;
                            if (this.match("++") || this.match("--")) {
                                var r = this.startNode(t),
                                    i = this.nextToken();
                                e = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(n.Messages.StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(n.Messages.InvalidLHSInAssignment);
                                var s = !0;
                                e = this.finalize(r, new c.UpdateExpression(i.value, e, s)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                            } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && this.lookahead.type === o.Token.Punctuator && (this.match("++") || this.match("--"))) {
                                this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(n.Messages.StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(n.Messages.InvalidLHSInAssignment), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                                var a = this.nextToken().value,
                                    s = !1;
                                e = this.finalize(this.startNode(t), new c.UpdateExpression(a, e, s))
                            }
                            return e
                        }, e.prototype.parseUnaryExpression = function() {
                            var e;
                            if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                                var t = this.startNode(this.lookahead),
                                    r = this.nextToken();
                                e = this.inheritCoverGrammar(this.parseUnaryExpression), e = this.finalize(t, new c.UnaryExpression(r.value, e)), this.context.strict && "delete" === e.operator && e.argument.type === u.Syntax.Identifier && this.tolerateError(n.Messages.StrictDelete), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                            } else e = this.parseUpdateExpression();
                            return e
                        }, e.prototype.parseExponentiationExpression = function() {
                            var e = this.lookahead,
                                t = this.inheritCoverGrammar(this.parseUnaryExpression);
                            if (t.type !== u.Syntax.UnaryExpression && this.match("**")) {
                                this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                                var r = t,
                                    i = this.isolateCoverGrammar(this.parseExponentiationExpression);
                                t = this.finalize(this.startNode(e), new c.BinaryExpression("**", r, i))
                            }
                            return t
                        }, e.prototype.binaryPrecedence = function(e) {
                            var t, r = e.value;
                            return t = e.type === o.Token.Punctuator ? this.operatorPrecedence[r] || 0 : e.type === o.Token.Keyword && ("instanceof" === r || this.context.allowIn && "in" === r) ? 7 : 0
                        }, e.prototype.parseBinaryExpression = function() {
                            var e = this.lookahead,
                                t = this.inheritCoverGrammar(this.parseExponentiationExpression),
                                r = this.lookahead,
                                i = this.binaryPrecedence(r);
                            if (i > 0) {
                                this.nextToken(), r.prec = i, this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                                for (var n = [e, this.lookahead], s = t, o = this.isolateCoverGrammar(this.parseExponentiationExpression), a = [s, r, o];;) {
                                    if (i = this.binaryPrecedence(this.lookahead), i <= 0) break;
                                    for (; a.length > 2 && i <= a[a.length - 2].prec;) {
                                        o = a.pop();
                                        var u = a.pop().value;
                                        s = a.pop(), n.pop();
                                        var l = this.startNode(n[n.length - 1]);
                                        a.push(this.finalize(l, new c.BinaryExpression(u, s, o)))
                                    }
                                    r = this.nextToken(), r.prec = i, a.push(r), n.push(this.lookahead), a.push(this.isolateCoverGrammar(this.parseExponentiationExpression))
                                }
                                var h = a.length - 1;
                                for (t = a[h], n.pop(); h > 1;) {
                                    var l = this.startNode(n.pop());
                                    t = this.finalize(l, new c.BinaryExpression(a[h - 1].value, a[h - 2], t)), h -= 2
                                }
                            }
                            return t
                        }, e.prototype.parseConditionalExpression = function() {
                            var e = this.lookahead,
                                t = this.inheritCoverGrammar(this.parseBinaryExpression);
                            if (this.match("?")) {
                                this.nextToken();
                                var r = this.context.allowIn;
                                this.context.allowIn = !0;
                                var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                this.context.allowIn = r, this.expect(":");
                                var n = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                t = this.finalize(this.startNode(e), new c.ConditionalExpression(t, i, n)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1
                            }
                            return t
                        }, e.prototype.checkPatternParam = function(e, t) {
                            switch (t.type) {
                                case u.Syntax.Identifier:
                                    this.validateParam(e, t, t.name);
                                    break;
                                case u.Syntax.RestElement:
                                    this.checkPatternParam(e, t.argument);
                                    break;
                                case u.Syntax.AssignmentPattern:
                                    this.checkPatternParam(e, t.left);
                                    break;
                                case u.Syntax.ArrayPattern:
                                    for (var r = 0; r < t.elements.length; r++) null !== t.elements[r] && this.checkPatternParam(e, t.elements[r]);
                                    break;
                                case u.Syntax.YieldExpression:
                                    break;
                                default:
                                    i.assert(t.type === u.Syntax.ObjectPattern, "Invalid type");
                                    for (var r = 0; r < t.properties.length; r++) this.checkPatternParam(e, t.properties[r].value)
                            }
                        }, e.prototype.reinterpretAsCoverFormalsList = function(e) {
                            var t, r = [e];
                            switch (e.type) {
                                case u.Syntax.Identifier:
                                    break;
                                case l:
                                    r = e.params;
                                    break;
                                default:
                                    return null
                            }
                            t = {
                                paramSet: {}
                            };
                            for (var i = 0; i < r.length; ++i) {
                                var s = r[i];
                                s.type === u.Syntax.AssignmentPattern && s.right.type === u.Syntax.YieldExpression && (s.right.argument && this.throwUnexpectedToken(this.lookahead), s.right.type = u.Syntax.Identifier, s.right.name = "yield", delete s.right.argument, delete s.right.delegate), this.checkPatternParam(t, s), r[i] = s
                            }
                            if (this.context.strict || !this.context.allowYield)
                                for (var i = 0; i < r.length; ++i) {
                                    var s = r[i];
                                    s.type === u.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead)
                                }
                            if (t.message === n.Messages.StrictParamDupe) {
                                var o = this.context.strict ? t.stricted : t.firstRestricted;
                                this.throwUnexpectedToken(o, t.message)
                            }
                            return {
                                params: r,
                                stricted: t.stricted,
                                firstRestricted: t.firstRestricted,
                                message: t.message
                            }
                        }, e.prototype.parseAssignmentExpression = function() {
                            var e;
                            if (!this.context.allowYield && this.matchKeyword("yield")) e = this.parseYieldExpression();
                            else {
                                var t = this.lookahead,
                                    r = t;
                                if (e = this.parseConditionalExpression(), e.type === l || this.match("=>")) {
                                    this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
                                    var i = this.reinterpretAsCoverFormalsList(e);
                                    if (i) {
                                        this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead), this.context.firstCoverInitializedNameError = null;
                                        var s = this.context.strict,
                                            o = this.context.allowYield;
                                        this.context.allowYield = !0;
                                        var a = this.startNode(t);
                                        this.expect("=>");
                                        var h = this.match("{") ? this.parseFunctionSourceElements() : this.isolateCoverGrammar(this.parseAssignmentExpression),
                                            p = h.type !== u.Syntax.BlockStatement;
                                        this.context.strict && i.firstRestricted && this.throwUnexpectedToken(i.firstRestricted, i.message), this.context.strict && i.stricted && this.tolerateUnexpectedToken(i.stricted, i.message), e = this.finalize(a, new c.ArrowFunctionExpression(i.params, h, p)), this.context.strict = s, this.context.allowYield = o
                                    }
                                } else if (this.matchAssign()) {
                                    if (this.context.isAssignmentTarget || this.tolerateError(n.Messages.InvalidLHSInAssignment), this.context.strict && e.type === u.Syntax.Identifier) {
                                        var f = e;
                                        this.scanner.isRestrictedWord(f.name) && this.tolerateUnexpectedToken(r, n.Messages.StrictLHSAssignment), this.scanner.isStrictModeReservedWord(f.name) && this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord)
                                    }
                                    this.match("=") ? this.reinterpretExpressionAsPattern(e) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1), r = this.nextToken();
                                    var d = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                    e = this.finalize(this.startNode(t), new c.AssignmentExpression(r.value, e, d)), this.context.firstCoverInitializedNameError = null
                                }
                            }
                            return e
                        }, e.prototype.parseExpression = function() {
                            var e = this.lookahead,
                                t = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            if (this.match(",")) {
                                var r = [];
                                for (r.push(t); this.startMarker.index < this.scanner.length && this.match(",");) this.nextToken(), r.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                t = this.finalize(this.startNode(e), new c.SequenceExpression(r))
                            }
                            return t
                        }, e.prototype.parseStatementListItem = function() {
                            var e = null;
                            if (this.context.isAssignmentTarget = !0, this.context.isBindingElement = !0, this.lookahead.type === o.Token.Keyword) switch (this.lookahead.value) {
                                case "export":
                                    "module" !== this.sourceType && this.tolerateUnexpectedToken(this.lookahead, n.Messages.IllegalExportDeclaration), e = this.parseExportDeclaration();
                                    break;
                                case "import":
                                    "module" !== this.sourceType && this.tolerateUnexpectedToken(this.lookahead, n.Messages.IllegalImportDeclaration), e = this.parseImportDeclaration();
                                    break;
                                case "const":
                                    e = this.parseLexicalDeclaration({
                                        inFor: !1
                                    });
                                    break;
                                case "function":
                                    e = this.parseFunctionDeclaration();
                                    break;
                                case "class":
                                    e = this.parseClassDeclaration();
                                    break;
                                case "let":
                                    e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                                        inFor: !1
                                    }) : this.parseStatement();
                                    break;
                                default:
                                    e = this.parseStatement()
                            } else e = this.parseStatement();
                            return e
                        }, e.prototype.parseBlock = function() {
                            var e = this.createNode();
                            this.expect("{");
                            for (var t = [];;) {
                                if (this.match("}")) break;
                                t.push(this.parseStatementListItem())
                            }
                            return this.expect("}"), this.finalize(e, new c.BlockStatement(t))
                        }, e.prototype.parseLexicalBinding = function(e, t) {
                            var r = this.createNode(),
                                i = [],
                                s = this.parsePattern(i, e);
                            this.context.strict && s.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(s.name) && this.tolerateError(n.Messages.StrictVarName);
                            var o = null;
                            return "const" === e ? this.matchKeyword("in") || this.matchContextualKeyword("of") || (this.expect("="), o = this.isolateCoverGrammar(this.parseAssignmentExpression)) : (!t.inFor && s.type !== u.Syntax.Identifier || this.match("=")) && (this.expect("="), o = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(r, new c.VariableDeclarator(s, o))
                        }, e.prototype.parseBindingList = function(e, t) {
                            for (var r = [this.parseLexicalBinding(e, t)]; this.match(",");) this.nextToken(), r.push(this.parseLexicalBinding(e, t));
                            return r
                        }, e.prototype.isLexicalDeclaration = function() {
                            var e = this.scanner.index,
                                t = this.scanner.lineNumber,
                                r = this.scanner.lineStart;
                            this.collectComments();
                            var i = this.scanner.lex();
                            return this.scanner.index = e, this.scanner.lineNumber = t, this.scanner.lineStart = r, i.type === o.Token.Identifier || i.type === o.Token.Punctuator && "[" === i.value || i.type === o.Token.Punctuator && "{" === i.value || i.type === o.Token.Keyword && "let" === i.value || i.type === o.Token.Keyword && "yield" === i.value
                        }, e.prototype.parseLexicalDeclaration = function(e) {
                            var t = this.createNode(),
                                r = this.nextToken().value;
                            i.assert("let" === r || "const" === r, "Lexical declaration must be either let or const");
                            var n = this.parseBindingList(r, e);
                            return this.consumeSemicolon(), this.finalize(t, new c.VariableDeclaration(n, r))
                        }, e.prototype.parseBindingRestElement = function(e, t) {
                            var r = this.createNode();
                            this.expect("...");
                            var i = this.parsePattern(e, t);
                            return this.finalize(r, new c.RestElement(i))
                        }, e.prototype.parseArrayPattern = function(e, t) {
                            var r = this.createNode();
                            this.expect("[");
                            for (var i = []; !this.match("]");)
                                if (this.match(",")) this.nextToken(), i.push(null);
                                else {
                                    if (this.match("...")) {
                                        i.push(this.parseBindingRestElement(e, t));
                                        break
                                    }
                                    i.push(this.parsePatternWithDefault(e, t)), this.match("]") || this.expect(",")
                                }
                            return this.expect("]"), this.finalize(r, new c.ArrayPattern(i))
                        }, e.prototype.parsePropertyPattern = function(e, t) {
                            var r, i, n = this.createNode(),
                                s = !1,
                                a = !1,
                                u = !1;
                            if (this.lookahead.type === o.Token.Identifier) {
                                var l = this.lookahead;
                                r = this.parseVariableIdentifier();
                                var h = this.finalize(n, new c.Identifier(l.value));
                                if (this.match("=")) {
                                    e.push(l),
                                        a = !0, this.nextToken();
                                    var p = this.parseAssignmentExpression();
                                    i = this.finalize(this.startNode(l), new c.AssignmentPattern(h, p))
                                } else this.match(":") ? (this.expect(":"), i = this.parsePatternWithDefault(e, t)) : (e.push(l), a = !0, i = h)
                            } else s = this.match("["), r = this.parseObjectPropertyKey(), this.expect(":"), i = this.parsePatternWithDefault(e, t);
                            return this.finalize(n, new c.Property("init", r, s, i, u, a))
                        }, e.prototype.parseObjectPattern = function(e, t) {
                            var r = this.createNode(),
                                i = [];
                            for (this.expect("{"); !this.match("}");) i.push(this.parsePropertyPattern(e, t)), this.match("}") || this.expect(",");
                            return this.expect("}"), this.finalize(r, new c.ObjectPattern(i))
                        }, e.prototype.parsePattern = function(e, t) {
                            var r;
                            return this.match("[") ? r = this.parseArrayPattern(e, t) : this.match("{") ? r = this.parseObjectPattern(e, t) : (!this.matchKeyword("let") || "const" !== t && "let" !== t || this.tolerateUnexpectedToken(this.lookahead, n.Messages.UnexpectedToken), e.push(this.lookahead), r = this.parseVariableIdentifier(t)), r
                        }, e.prototype.parsePatternWithDefault = function(e, t) {
                            var r = this.lookahead,
                                i = this.parsePattern(e, t);
                            if (this.match("=")) {
                                this.nextToken();
                                var n = this.context.allowYield;
                                this.context.allowYield = !0;
                                var s = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                this.context.allowYield = n, i = this.finalize(this.startNode(r), new c.AssignmentPattern(i, s))
                            }
                            return i
                        }, e.prototype.parseVariableIdentifier = function(e) {
                            var t = this.createNode(),
                                r = this.nextToken();
                            return r.type === o.Token.Keyword && "yield" === r.value ? (this.context.strict && this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord), this.context.allowYield || this.throwUnexpectedToken(r)) : r.type !== o.Token.Identifier ? this.context.strict && r.type === o.Token.Keyword && this.scanner.isStrictModeReservedWord(r.value) ? this.tolerateUnexpectedToken(r, n.Messages.StrictReservedWord) : (this.context.strict || "let" !== r.value || "var" !== e) && this.throwUnexpectedToken(r) : "module" === this.sourceType && r.type === o.Token.Identifier && "await" === r.value && this.tolerateUnexpectedToken(r), this.finalize(t, new c.Identifier(r.value))
                        }, e.prototype.parseVariableDeclaration = function(e) {
                            var t = this.createNode(),
                                r = [],
                                i = this.parsePattern(r, "var");
                            this.context.strict && i.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(i.name) && this.tolerateError(n.Messages.StrictVarName);
                            var s = null;
                            return this.match("=") ? (this.nextToken(), s = this.isolateCoverGrammar(this.parseAssignmentExpression)) : i.type === u.Syntax.Identifier || e.inFor || this.expect("="), this.finalize(t, new c.VariableDeclarator(i, s))
                        }, e.prototype.parseVariableDeclarationList = function(e) {
                            var t = {
                                    inFor: e.inFor
                                },
                                r = [];
                            for (r.push(this.parseVariableDeclaration(t)); this.match(",");) this.nextToken(), r.push(this.parseVariableDeclaration(t));
                            return r
                        }, e.prototype.parseVariableStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("var");
                            var t = this.parseVariableDeclarationList({
                                inFor: !1
                            });
                            return this.consumeSemicolon(), this.finalize(e, new c.VariableDeclaration(t, "var"))
                        }, e.prototype.parseEmptyStatement = function() {
                            var e = this.createNode();
                            return this.expect(";"), this.finalize(e, new c.EmptyStatement)
                        }, e.prototype.parseExpressionStatement = function() {
                            var e = this.createNode(),
                                t = this.parseExpression();
                            return this.consumeSemicolon(), this.finalize(e, new c.ExpressionStatement(t))
                        }, e.prototype.parseIfStatement = function() {
                            var e, t = this.createNode(),
                                r = null;
                            this.expectKeyword("if"), this.expect("(");
                            var i = this.parseExpression();
                            return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new c.EmptyStatement)) : (this.expect(")"), e = this.parseStatement(), this.matchKeyword("else") && (this.nextToken(), r = this.parseStatement())), this.finalize(t, new c.IfStatement(i, e, r))
                        }, e.prototype.parseDoWhileStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("do");
                            var t = this.context.inIteration;
                            this.context.inIteration = !0;
                            var r = this.parseStatement();
                            this.context.inIteration = t, this.expectKeyword("while"), this.expect("(");
                            var i = this.parseExpression();
                            return this.expect(")"), this.match(";") && this.nextToken(), this.finalize(e, new c.DoWhileStatement(r, i))
                        }, e.prototype.parseWhileStatement = function() {
                            var e, t = this.createNode();
                            this.expectKeyword("while"), this.expect("(");
                            var r = this.parseExpression();
                            if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new c.EmptyStatement);
                            else {
                                this.expect(")");
                                var i = this.context.inIteration;
                                this.context.inIteration = !0, e = this.parseStatement(), this.context.inIteration = i
                            }
                            return this.finalize(t, new c.WhileStatement(r, e))
                        }, e.prototype.parseForStatement = function() {
                            var e, t, r = null,
                                i = null,
                                s = null,
                                o = !0,
                                a = this.createNode();
                            if (this.expectKeyword("for"), this.expect("("), this.match(";")) this.nextToken();
                            else if (this.matchKeyword("var")) {
                                r = this.createNode(), this.nextToken();
                                var l = this.context.allowIn;
                                this.context.allowIn = !1;
                                var h = this.parseVariableDeclarationList({
                                    inFor: !0
                                });
                                if (this.context.allowIn = l, 1 === h.length && this.matchKeyword("in")) {
                                    var p = h[0];
                                    p.init && (p.id.type === u.Syntax.ArrayPattern || p.id.type === u.Syntax.ObjectPattern || this.context.strict) && this.tolerateError(n.Messages.ForInOfLoopInitializer, "for-in"), r = this.finalize(r, new c.VariableDeclaration(h, "var")), this.nextToken(), e = r, t = this.parseExpression(), r = null
                                } else 1 === h.length && null === h[0].init && this.matchContextualKeyword("of") ? (r = this.finalize(r, new c.VariableDeclaration(h, "var")), this.nextToken(), e = r, t = this.parseAssignmentExpression(), r = null, o = !1) : (r = this.finalize(r, new c.VariableDeclaration(h, "var")), this.expect(";"))
                            } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                                r = this.createNode();
                                var f = this.nextToken().value;
                                if (this.context.strict || "in" !== this.lookahead.value) {
                                    var l = this.context.allowIn;
                                    this.context.allowIn = !1;
                                    var h = this.parseBindingList(f, {
                                        inFor: !0
                                    });
                                    this.context.allowIn = l, 1 === h.length && null === h[0].init && this.matchKeyword("in") ? (r = this.finalize(r, new c.VariableDeclaration(h, f)), this.nextToken(), e = r, t = this.parseExpression(), r = null) : 1 === h.length && null === h[0].init && this.matchContextualKeyword("of") ? (r = this.finalize(r, new c.VariableDeclaration(h, f)), this.nextToken(), e = r, t = this.parseAssignmentExpression(), r = null, o = !1) : (this.consumeSemicolon(), r = this.finalize(r, new c.VariableDeclaration(h, f)))
                                } else r = this.finalize(r, new c.Identifier(f)), this.nextToken(), e = r, t = this.parseExpression(), r = null
                            } else {
                                var d = this.lookahead,
                                    l = this.context.allowIn;
                                if (this.context.allowIn = !1, r = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = l, this.matchKeyword("in")) this.context.isAssignmentTarget && r.type !== u.Syntax.AssignmentExpression || this.tolerateError(n.Messages.InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(r), e = r, t = this.parseExpression(), r = null;
                                else if (this.matchContextualKeyword("of")) this.context.isAssignmentTarget && r.type !== u.Syntax.AssignmentExpression || this.tolerateError(n.Messages.InvalidLHSInForLoop), this.nextToken(), this.reinterpretExpressionAsPattern(r), e = r, t = this.parseAssignmentExpression(), r = null, o = !1;
                                else {
                                    if (this.match(",")) {
                                        for (var m = [r]; this.match(",");) this.nextToken(), m.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                        r = this.finalize(this.startNode(d), new c.SequenceExpression(m))
                                    }
                                    this.expect(";")
                                }
                            }
                            "undefined" == typeof e && (this.match(";") || (i = this.parseExpression()), this.expect(";"), this.match(")") || (s = this.parseExpression()));
                            var g;
                            if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), g = this.finalize(this.createNode(), new c.EmptyStatement);
                            else {
                                this.expect(")");
                                var x = this.context.inIteration;
                                this.context.inIteration = !0, g = this.isolateCoverGrammar(this.parseStatement), this.context.inIteration = x
                            }
                            return "undefined" == typeof e ? this.finalize(a, new c.ForStatement(r, i, s, g)) : o ? this.finalize(a, new c.ForInStatement(e, t, g)) : this.finalize(a, new c.ForOfStatement(e, t, g))
                        }, e.prototype.parseContinueStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("continue");
                            var t = null;
                            if (this.lookahead.type === o.Token.Identifier && !this.hasLineTerminator) {
                                t = this.parseVariableIdentifier();
                                var r = "$" + t.name;
                                Object.prototype.hasOwnProperty.call(this.context.labelSet, r) || this.throwError(n.Messages.UnknownLabel, t.name)
                            }
                            return this.consumeSemicolon(), null !== t || this.context.inIteration || this.throwError(n.Messages.IllegalContinue), this.finalize(e, new c.ContinueStatement(t))
                        }, e.prototype.parseBreakStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("break");
                            var t = null;
                            if (this.lookahead.type === o.Token.Identifier && !this.hasLineTerminator) {
                                t = this.parseVariableIdentifier();
                                var r = "$" + t.name;
                                Object.prototype.hasOwnProperty.call(this.context.labelSet, r) || this.throwError(n.Messages.UnknownLabel, t.name)
                            }
                            return this.consumeSemicolon(), null !== t || this.context.inIteration || this.context.inSwitch || this.throwError(n.Messages.IllegalBreak), this.finalize(e, new c.BreakStatement(t))
                        }, e.prototype.parseReturnStatement = function() {
                            this.context.inFunctionBody || this.tolerateError(n.Messages.IllegalReturn);
                            var e = this.createNode();
                            this.expectKeyword("return");
                            var t = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== o.Token.EOF,
                                r = t ? this.parseExpression() : null;
                            return this.consumeSemicolon(), this.finalize(e, new c.ReturnStatement(r))
                        }, e.prototype.parseWithStatement = function() {
                            this.context.strict && this.tolerateError(n.Messages.StrictModeWith);
                            var e = this.createNode();
                            this.expectKeyword("with"), this.expect("(");
                            var t = this.parseExpression();
                            this.expect(")");
                            var r = this.parseStatement();
                            return this.finalize(e, new c.WithStatement(t, r))
                        }, e.prototype.parseSwitchCase = function() {
                            var e, t = this.createNode();
                            this.matchKeyword("default") ? (this.nextToken(), e = null) : (this.expectKeyword("case"), e = this.parseExpression()), this.expect(":");
                            for (var r = [];;) {
                                if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) break;
                                r.push(this.parseStatementListItem())
                            }
                            return this.finalize(t, new c.SwitchCase(e, r))
                        }, e.prototype.parseSwitchStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("switch"), this.expect("(");
                            var t = this.parseExpression();
                            this.expect(")");
                            var r = this.context.inSwitch;
                            this.context.inSwitch = !0;
                            var i = [],
                                s = !1;
                            for (this.expect("{");;) {
                                if (this.match("}")) break;
                                var o = this.parseSwitchCase();
                                null === o.test && (s && this.throwError(n.Messages.MultipleDefaultsInSwitch), s = !0), i.push(o)
                            }
                            return this.expect("}"), this.context.inSwitch = r, this.finalize(e, new c.SwitchStatement(t, i))
                        }, e.prototype.parseLabelledStatement = function() {
                            var e, t = this.createNode(),
                                r = this.parseExpression();
                            if (r.type === u.Syntax.Identifier && this.match(":")) {
                                this.nextToken();
                                var i = r,
                                    s = "$" + i.name;
                                Object.prototype.hasOwnProperty.call(this.context.labelSet, s) && this.throwError(n.Messages.Redeclaration, "Label", i.name), this.context.labelSet[s] = !0;
                                var o = this.parseStatement();
                                delete this.context.labelSet[s], e = new c.LabeledStatement(i, o)
                            } else this.consumeSemicolon(), e = new c.ExpressionStatement(r);
                            return this.finalize(t, e)
                        }, e.prototype.parseThrowStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("throw"), this.hasLineTerminator && this.throwError(n.Messages.NewlineAfterThrow);
                            var t = this.parseExpression();
                            return this.consumeSemicolon(), this.finalize(e, new c.ThrowStatement(t))
                        }, e.prototype.parseCatchClause = function() {
                            var e = this.createNode();
                            this.expectKeyword("catch"), this.expect("("), this.match(")") && this.throwUnexpectedToken(this.lookahead);
                            for (var t = [], r = this.parsePattern(t), i = {}, s = 0; s < t.length; s++) {
                                var o = "$" + t[s].value;
                                Object.prototype.hasOwnProperty.call(i, o) && this.tolerateError(n.Messages.DuplicateBinding, t[s].value), i[o] = !0
                            }
                            this.context.strict && r.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(r.name) && this.tolerateError(n.Messages.StrictCatchVariable), this.expect(")");
                            var a = this.parseBlock();
                            return this.finalize(e, new c.CatchClause(r, a))
                        }, e.prototype.parseFinallyClause = function() {
                            return this.expectKeyword("finally"), this.parseBlock()
                        }, e.prototype.parseTryStatement = function() {
                            var e = this.createNode();
                            this.expectKeyword("try");
                            var t = this.parseBlock(),
                                r = this.matchKeyword("catch") ? this.parseCatchClause() : null,
                                i = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                            return r || i || this.throwError(n.Messages.NoCatchOrFinally), this.finalize(e, new c.TryStatement(t, r, i))
                        }, e.prototype.parseDebuggerStatement = function() {
                            var e = this.createNode();
                            return this.expectKeyword("debugger"), this.consumeSemicolon(), this.finalize(e, new c.DebuggerStatement)
                        }, e.prototype.parseStatement = function() {
                            var e = null;
                            switch (this.lookahead.type) {
                                case o.Token.BooleanLiteral:
                                case o.Token.NullLiteral:
                                case o.Token.NumericLiteral:
                                case o.Token.StringLiteral:
                                case o.Token.Template:
                                case o.Token.RegularExpression:
                                    e = this.parseExpressionStatement();
                                    break;
                                case o.Token.Punctuator:
                                    var t = this.lookahead.value;
                                    e = "{" === t ? this.parseBlock() : "(" === t ? this.parseExpressionStatement() : ";" === t ? this.parseEmptyStatement() : this.parseExpressionStatement();
                                    break;
                                case o.Token.Identifier:
                                    e = this.parseLabelledStatement();
                                    break;
                                case o.Token.Keyword:
                                    switch (this.lookahead.value) {
                                        case "break":
                                            e = this.parseBreakStatement();
                                            break;
                                        case "continue":
                                            e = this.parseContinueStatement();
                                            break;
                                        case "debugger":
                                            e = this.parseDebuggerStatement();
                                            break;
                                        case "do":
                                            e = this.parseDoWhileStatement();
                                            break;
                                        case "for":
                                            e = this.parseForStatement();
                                            break;
                                        case "function":
                                            e = this.parseFunctionDeclaration();
                                            break;
                                        case "if":
                                            e = this.parseIfStatement();
                                            break;
                                        case "return":
                                            e = this.parseReturnStatement();
                                            break;
                                        case "switch":
                                            e = this.parseSwitchStatement();
                                            break;
                                        case "throw":
                                            e = this.parseThrowStatement();
                                            break;
                                        case "try":
                                            e = this.parseTryStatement();
                                            break;
                                        case "var":
                                            e = this.parseVariableStatement();
                                            break;
                                        case "while":
                                            e = this.parseWhileStatement();
                                            break;
                                        case "with":
                                            e = this.parseWithStatement();
                                            break;
                                        default:
                                            e = this.parseExpressionStatement()
                                    }
                                    break;
                                default:
                                    this.throwUnexpectedToken(this.lookahead)
                            }
                            return e
                        }, e.prototype.parseFunctionSourceElements = function() {
                            var e = this.createNode();
                            this.expect("{");
                            var t = this.parseDirectivePrologues(),
                                r = this.context.labelSet,
                                i = this.context.inIteration,
                                n = this.context.inSwitch,
                                s = this.context.inFunctionBody;
                            for (this.context.labelSet = {}, this.context.inIteration = !1, this.context.inSwitch = !1, this.context.inFunctionBody = !0; this.startMarker.index < this.scanner.length && !this.match("}");) t.push(this.parseStatementListItem());
                            return this.expect("}"), this.context.labelSet = r, this.context.inIteration = i, this.context.inSwitch = n, this.context.inFunctionBody = s, this.finalize(e, new c.BlockStatement(t))
                        }, e.prototype.validateParam = function(e, t, r) {
                            var i = "$" + r;
                            this.context.strict ? (this.scanner.isRestrictedWord(r) && (e.stricted = t, e.message = n.Messages.StrictParamName), Object.prototype.hasOwnProperty.call(e.paramSet, i) && (e.stricted = t, e.message = n.Messages.StrictParamDupe)) : e.firstRestricted || (this.scanner.isRestrictedWord(r) ? (e.firstRestricted = t, e.message = n.Messages.StrictParamName) : this.scanner.isStrictModeReservedWord(r) ? (e.firstRestricted = t, e.message = n.Messages.StrictReservedWord) : Object.prototype.hasOwnProperty.call(e.paramSet, i) && (e.stricted = t, e.message = n.Messages.StrictParamDupe)), "function" == typeof Object.defineProperty ? Object.defineProperty(e.paramSet, i, {
                                value: !0,
                                enumerable: !0,
                                writable: !0,
                                configurable: !0
                            }) : e.paramSet[i] = !0
                        }, e.prototype.parseRestElement = function(e) {
                            var t = this.createNode();
                            this.expect("...");
                            var r = this.parsePattern(e);
                            return this.match("=") && this.throwError(n.Messages.DefaultRestParameter), this.match(")") || this.throwError(n.Messages.ParameterAfterRestParameter), this.finalize(t, new c.RestElement(r))
                        }, e.prototype.parseFormalParameter = function(e) {
                            for (var t = [], r = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t), i = 0; i < t.length; i++) this.validateParam(e, t[i], t[i].value);
                            return e.params.push(r), !this.match(")")
                        }, e.prototype.parseFormalParameters = function(e) {
                            var t;
                            if (t = {
                                    params: [],
                                    firstRestricted: e
                                }, this.expect("("), !this.match(")"))
                                for (t.paramSet = {}; this.startMarker.index < this.scanner.length && this.parseFormalParameter(t);) this.expect(",");
                            return this.expect(")"), {
                                params: t.params,
                                stricted: t.stricted,
                                firstRestricted: t.firstRestricted,
                                message: t.message
                            }
                        }, e.prototype.parseFunctionDeclaration = function(e) {
                            var t = this.createNode();
                            this.expectKeyword("function");
                            var r = this.match("*");
                            r && this.nextToken();
                            var i, s = null,
                                o = null;
                            if (!e || !this.match("(")) {
                                var a = this.lookahead;
                                s = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(a.value) && this.tolerateUnexpectedToken(a, n.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(a.value) ? (o = a, i = n.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(a.value) && (o = a, i = n.Messages.StrictReservedWord)
                            }
                            var u = this.context.allowYield;
                            this.context.allowYield = !r;
                            var l = this.parseFormalParameters(o),
                                h = l.params,
                                p = l.stricted;
                            o = l.firstRestricted, l.message && (i = l.message);
                            var f = this.context.strict,
                                d = this.parseFunctionSourceElements();
                            return this.context.strict && o && this.throwUnexpectedToken(o, i), this.context.strict && p && this.tolerateUnexpectedToken(p, i), this.context.strict = f, this.context.allowYield = u, this.finalize(t, new c.FunctionDeclaration(s, h, d, r))
                        }, e.prototype.parseFunctionExpression = function() {
                            var e = this.createNode();
                            this.expectKeyword("function");
                            var t = this.match("*");
                            t && this.nextToken();
                            var r, i, s = null,
                                o = this.context.allowYield;
                            if (this.context.allowYield = !t, !this.match("(")) {
                                var a = this.lookahead;
                                s = this.context.strict || t || !this.matchKeyword("yield") ? this.parseVariableIdentifier() : this.parseIdentifierName(), this.context.strict ? this.scanner.isRestrictedWord(a.value) && this.tolerateUnexpectedToken(a, n.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(a.value) ? (i = a, r = n.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(a.value) && (i = a, r = n.Messages.StrictReservedWord)
                            }
                            var u = this.parseFormalParameters(i),
                                l = u.params,
                                h = u.stricted;
                            i = u.firstRestricted, u.message && (r = u.message);
                            var p = this.context.strict,
                                f = this.parseFunctionSourceElements();
                            return this.context.strict && i && this.throwUnexpectedToken(i, r), this.context.strict && h && this.tolerateUnexpectedToken(h, r), this.context.strict = p, this.context.allowYield = o, this.finalize(e, new c.FunctionExpression(s, l, f, t))
                        }, e.prototype.parseDirective = function() {
                            var e = this.lookahead,
                                t = null,
                                r = this.createNode(),
                                i = this.parseExpression();
                            return i.type === u.Syntax.Literal && (t = this.getTokenRaw(e).slice(1, -1)), this.consumeSemicolon(), this.finalize(r, t ? new c.Directive(i, t) : new c.ExpressionStatement(i))
                        }, e.prototype.parseDirectivePrologues = function() {
                            for (var e = null, t = [];;) {
                                var r = this.lookahead;
                                if (r.type !== o.Token.StringLiteral) break;
                                var i = this.parseDirective();
                                t.push(i);
                                var s = i.directive;
                                if ("string" != typeof s) break;
                                "use strict" === s ? (this.context.strict = !0, e && this.tolerateUnexpectedToken(e, n.Messages.StrictOctalLiteral)) : !e && r.octal && (e = r)
                            }
                            return t
                        }, e.prototype.qualifiedPropertyName = function(e) {
                            switch (e.type) {
                                case o.Token.Identifier:
                                case o.Token.StringLiteral:
                                case o.Token.BooleanLiteral:
                                case o.Token.NullLiteral:
                                case o.Token.NumericLiteral:
                                case o.Token.Keyword:
                                    return !0;
                                case o.Token.Punctuator:
                                    return "[" === e.value
                            }
                            return !1
                        }, e.prototype.parseGetterMethod = function() {
                            var e = this.createNode();
                            this.expect("("), this.expect(")");
                            var t = !1,
                                r = {
                                    params: [],
                                    stricted: null,
                                    firstRestricted: null,
                                    message: null
                                },
                                i = this.context.allowYield;
                            this.context.allowYield = !1;
                            var n = this.parsePropertyMethod(r);
                            return this.context.allowYield = i, this.finalize(e, new c.FunctionExpression(null, r.params, n, t))
                        }, e.prototype.parseSetterMethod = function() {
                            var e = this.createNode(),
                                t = {
                                    params: [],
                                    firstRestricted: null,
                                    paramSet: {}
                                },
                                r = !1,
                                i = this.context.allowYield;
                            this.context.allowYield = !1, this.expect("("), this.match(")") ? this.tolerateUnexpectedToken(this.lookahead) : this.parseFormalParameter(t), this.expect(")");
                            var n = this.parsePropertyMethod(t);
                            return this.context.allowYield = i, this.finalize(e, new c.FunctionExpression(null, t.params, n, r))
                        }, e.prototype.parseGeneratorMethod = function() {
                            var e = this.createNode(),
                                t = !0,
                                r = this.context.allowYield;
                            this.context.allowYield = !0;
                            var i = this.parseFormalParameters();
                            this.context.allowYield = !1;
                            var n = this.parsePropertyMethod(i);
                            return this.context.allowYield = r, this.finalize(e, new c.FunctionExpression(null, i.params, n, t))
                        }, e.prototype.isStartOfExpression = function() {
                            var e = !0,
                                t = this.lookahead.value;
                            switch (this.lookahead.type) {
                                case o.Token.Punctuator:
                                    e = "[" === t || "(" === t || "{" === t || "+" === t || "-" === t || "!" === t || "~" === t || "++" === t || "--" === t || "/" === t || "/=" === t;
                                    break;
                                case o.Token.Keyword:
                                    e = "class" === t || "delete" === t || "function" === t || "let" === t || "new" === t || "super" === t || "this" === t || "typeof" === t || "void" === t || "yield" === t
                            }
                            return e
                        }, e.prototype.parseYieldExpression = function() {
                            var e = this.createNode();
                            this.expectKeyword("yield");
                            var t = null,
                                r = !1;
                            if (!this.hasLineTerminator) {
                                var i = this.context.allowYield;
                                this.context.allowYield = !1, r = this.match("*"), r ? (this.nextToken(), t = this.parseAssignmentExpression()) : this.isStartOfExpression() && (t = this.parseAssignmentExpression()), this.context.allowYield = i
                            }
                            return this.finalize(e, new c.YieldExpression(t, r))
                        }, e.prototype.parseClassElement = function(e) {
                            var t, r, i, s = this.lookahead,
                                a = this.createNode(),
                                u = !1,
                                l = !1,
                                h = !1;
                            if (this.match("*")) this.nextToken();
                            else {
                                u = this.match("["), r = this.parseObjectPropertyKey();
                                var p = r;
                                "static" === p.name && (this.qualifiedPropertyName(this.lookahead) || this.match("*")) && (s = this.lookahead, h = !0, u = this.match("["), this.match("*") ? this.nextToken() : r = this.parseObjectPropertyKey())
                            }
                            var f = this.qualifiedPropertyName(this.lookahead);
                            return s.type === o.Token.Identifier ? "get" === s.value && f ? (t = "get", u = this.match("["), r = this.parseObjectPropertyKey(), this.context.allowYield = !1, i = this.parseGetterMethod()) : "set" === s.value && f && (t = "set", u = this.match("["), r = this.parseObjectPropertyKey(), i = this.parseSetterMethod()) : s.type === o.Token.Punctuator && "*" === s.value && f && (t = "init", u = this.match("["), r = this.parseObjectPropertyKey(), i = this.parseGeneratorMethod(), l = !0), !t && r && this.match("(") && (t = "init", i = this.parsePropertyMethodFunction(), l = !0), t || this.throwUnexpectedToken(this.lookahead), "init" === t && (t = "method"), u || (h && this.isPropertyKey(r, "prototype") && this.throwUnexpectedToken(s, n.Messages.StaticPrototype), !h && this.isPropertyKey(r, "constructor") && ("method" === t && l && !i.generator || this.throwUnexpectedToken(s, n.Messages.ConstructorSpecialMethod), e.value ? this.throwUnexpectedToken(s, n.Messages.DuplicateConstructor) : e.value = !0, t = "constructor")), this.finalize(a, new c.MethodDefinition(r, u, i, t, h))
                        }, e.prototype.parseClassElementList = function() {
                            var e = [],
                                t = {
                                    value: !1
                                };
                            for (this.expect("{"); !this.match("}");) this.match(";") ? this.nextToken() : e.push(this.parseClassElement(t));
                            return this.expect("}"), e
                        }, e.prototype.parseClassBody = function() {
                            var e = this.createNode(),
                                t = this.parseClassElementList();
                            return this.finalize(e, new c.ClassBody(t))
                        }, e.prototype.parseClassDeclaration = function(e) {
                            var t = this.createNode(),
                                r = this.context.strict;
                            this.context.strict = !0, this.expectKeyword("class");
                            var i = e && this.lookahead.type !== o.Token.Identifier ? null : this.parseVariableIdentifier(),
                                n = null;
                            this.matchKeyword("extends") && (this.nextToken(), n = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                            var s = this.parseClassBody();
                            return this.context.strict = r, this.finalize(t, new c.ClassDeclaration(i, n, s))
                        }, e.prototype.parseClassExpression = function() {
                            var e = this.createNode(),
                                t = this.context.strict;
                            this.context.strict = !0, this.expectKeyword("class");
                            var r = this.lookahead.type === o.Token.Identifier ? this.parseVariableIdentifier() : null,
                                i = null;
                            this.matchKeyword("extends") && (this.nextToken(), i = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                            var n = this.parseClassBody();
                            return this.context.strict = t, this.finalize(e, new c.ClassExpression(r, i, n))
                        }, e.prototype.parseProgram = function() {
                            for (var e = this.createNode(), t = this.parseDirectivePrologues(); this.startMarker.index < this.scanner.length;) t.push(this.parseStatementListItem());
                            return this.finalize(e, new c.Program(t, this.sourceType))
                        }, e.prototype.parseModuleSpecifier = function() {
                            var e = this.createNode();
                            this.lookahead.type !== o.Token.StringLiteral && this.throwError(n.Messages.InvalidModuleSpecifier);
                            var t = this.nextToken(),
                                r = this.getTokenRaw(t);
                            return this.finalize(e, new c.Literal(t.value, r))
                        }, e.prototype.parseImportSpecifier = function() {
                            var e, t, r = this.createNode();
                            return this.lookahead.type === o.Token.Identifier ? (e = this.parseVariableIdentifier(), t = e, this.matchContextualKeyword("as") && (this.nextToken(), t = this.parseVariableIdentifier())) : (e = this.parseIdentifierName(), t = e, this.matchContextualKeyword("as") ? (this.nextToken(), t = this.parseVariableIdentifier()) : this.throwUnexpectedToken(this.nextToken())), this.finalize(r, new c.ImportSpecifier(t, e))
                        }, e.prototype.parseNamedImports = function() {
                            this.expect("{");
                            for (var e = []; !this.match("}");) e.push(this.parseImportSpecifier()), this.match("}") || this.expect(",");
                            return this.expect("}"), e
                        }, e.prototype.parseImportDefaultSpecifier = function() {
                            var e = this.createNode(),
                                t = this.parseIdentifierName();
                            return this.finalize(e, new c.ImportDefaultSpecifier(t))
                        }, e.prototype.parseImportNamespaceSpecifier = function() {
                            var e = this.createNode();
                            this.expect("*"), this.matchContextualKeyword("as") || this.throwError(n.Messages.NoAsAfterImportNamespace), this.nextToken();
                            var t = this.parseIdentifierName();
                            return this.finalize(e, new c.ImportNamespaceSpecifier(t))
                        }, e.prototype.parseImportDeclaration = function() {
                            this.context.inFunctionBody && this.throwError(n.Messages.IllegalImportDeclaration);
                            var e = this.createNode();
                            this.expectKeyword("import");
                            var t, r = [];
                            if (this.lookahead.type === o.Token.StringLiteral) t = this.parseModuleSpecifier();
                            else {
                                if (this.match("{") ? r = r.concat(this.parseNamedImports()) : this.match("*") ? r.push(this.parseImportNamespaceSpecifier()) : this.isIdentifierName(this.lookahead) && !this.matchKeyword("default") ? (r.push(this.parseImportDefaultSpecifier()), this.match(",") && (this.nextToken(), this.match("*") ? r.push(this.parseImportNamespaceSpecifier()) : this.match("{") ? r = r.concat(this.parseNamedImports()) : this.throwUnexpectedToken(this.lookahead))) : this.throwUnexpectedToken(this.nextToken()), !this.matchContextualKeyword("from")) {
                                    var i = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                                    this.throwError(i, this.lookahead.value)
                                }
                                this.nextToken(), t = this.parseModuleSpecifier()
                            }
                            return this.consumeSemicolon(), this.finalize(e, new c.ImportDeclaration(r, t))
                        }, e.prototype.parseExportSpecifier = function() {
                            var e = this.createNode(),
                                t = this.parseIdentifierName(),
                                r = t;
                            return this.matchContextualKeyword("as") && (this.nextToken(), r = this.parseIdentifierName()), this.finalize(e, new c.ExportSpecifier(t, r))
                        }, e.prototype.parseExportDeclaration = function() {
                            this.context.inFunctionBody && this.throwError(n.Messages.IllegalExportDeclaration);
                            var e = this.createNode();
                            this.expectKeyword("export");
                            var t;
                            if (this.matchKeyword("default"))
                                if (this.nextToken(), this.matchKeyword("function")) {
                                    var r = this.parseFunctionDeclaration(!0);
                                    t = this.finalize(e, new c.ExportDefaultDeclaration(r))
                                } else if (this.matchKeyword("class")) {
                                var r = this.parseClassDeclaration(!0);
                                t = this.finalize(e, new c.ExportDefaultDeclaration(r))
                            } else {
                                this.matchContextualKeyword("from") && this.throwError(n.Messages.UnexpectedToken, this.lookahead.value);
                                var r = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                                this.consumeSemicolon(), t = this.finalize(e, new c.ExportDefaultDeclaration(r))
                            } else if (this.match("*")) {
                                if (this.nextToken(), !this.matchContextualKeyword("from")) {
                                    var i = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                                    this.throwError(i, this.lookahead.value)
                                }
                                this.nextToken();
                                var s = this.parseModuleSpecifier();
                                this.consumeSemicolon(), t = this.finalize(e, new c.ExportAllDeclaration(s))
                            } else if (this.lookahead.type === o.Token.Keyword) {
                                var r = void 0;
                                switch (this.lookahead.value) {
                                    case "let":
                                    case "const":
                                        r = this.parseLexicalDeclaration({
                                            inFor: !1
                                        });
                                        break;
                                    case "var":
                                    case "class":
                                    case "function":
                                        r = this.parseStatementListItem();
                                        break;
                                    default:
                                        this.throwUnexpectedToken(this.lookahead)
                                }
                                t = this.finalize(e, new c.ExportNamedDeclaration(r, [], null))
                            } else {
                                var a = [],
                                    u = null,
                                    l = !1;
                                for (this.expect("{"); !this.match("}");) l = l || this.matchKeyword("default"), a.push(this.parseExportSpecifier()), this.match("}") || this.expect(",");
                                if (this.expect("}"), this.matchContextualKeyword("from")) this.nextToken(), u = this.parseModuleSpecifier(), this.consumeSemicolon();
                                else if (l) {
                                    var i = this.lookahead.value ? n.Messages.UnexpectedToken : n.Messages.MissingFromClause;
                                    this.throwError(i, this.lookahead.value)
                                } else this.consumeSemicolon();
                                t = this.finalize(e, new c.ExportNamedDeclaration(null, a, u))
                            }
                            return t
                        }, e
                    }();
                t.Parser = h
            }, function(e, t) {
                "use strict";

                function r(e, t) {
                    if (!e) throw new Error("ASSERT: " + t)
                }
                t.assert = r
            }, function(e, t) {
                "use strict";
                t.Messages = {
                    UnexpectedToken: "Unexpected token %0",
                    UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                    UnexpectedNumber: "Unexpected number",
                    UnexpectedString: "Unexpected string",
                    UnexpectedIdentifier: "Unexpected identifier",
                    UnexpectedReserved: "Unexpected reserved word",
                    UnexpectedTemplate: "Unexpected quasi %0",
                    UnexpectedEOS: "Unexpected end of input",
                    NewlineAfterThrow: "Illegal newline after throw",
                    InvalidRegExp: "Invalid regular expression",
                    UnterminatedRegExp: "Invalid regular expression: missing /",
                    InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                    InvalidLHSInForIn: "Invalid left-hand side in for-in",
                    InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                    MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                    NoCatchOrFinally: "Missing catch or finally after try",
                    UnknownLabel: "Undefined label '%0'",
                    Redeclaration: "%0 '%1' has already been declared",
                    IllegalContinue: "Illegal continue statement",
                    IllegalBreak: "Illegal break statement",
                    IllegalReturn: "Illegal return statement",
                    StrictModeWith: "Strict mode code may not include a with statement",
                    StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                    StrictVarName: "Variable name may not be eval or arguments in strict mode",
                    StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                    StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                    StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                    StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                    StrictDelete: "Delete of an unqualified identifier in strict mode.",
                    StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                    StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictReservedWord: "Use of future reserved word in strict mode",
                    TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                    ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                    DefaultRestParameter: "Unexpected token =",
                    DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                    ConstructorSpecialMethod: "Class constructor may not be an accessor",
                    DuplicateConstructor: "A class may only have one constructor",
                    StaticPrototype: "Classes may not have static property named prototype",
                    MissingFromClause: "Unexpected token",
                    NoAsAfterImportNamespace: "Unexpected token",
                    InvalidModuleSpecifier: "Unexpected token",
                    IllegalImportDeclaration: "Unexpected token",
                    IllegalExportDeclaration: "Unexpected token",
                    DuplicateBinding: "Duplicate binding %0",
                    ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer"
                }
            }, function(e, t) {
                "use strict";
                var r = function() {
                    function e() {
                        this.errors = [], this.tolerant = !1
                    }
                    return e.prototype.recordError = function(e) {
                        this.errors.push(e)
                    }, e.prototype.tolerate = function(e) {
                        if (!this.tolerant) throw e;
                        this.recordError(e)
                    }, e.prototype.constructError = function(e, t) {
                        var r = new Error(e);
                        try {
                            throw r
                        } catch (e) {
                            Object.create && Object.defineProperty && (r = Object.create(e), Object.defineProperty(r, "column", {
                                value: t
                            }))
                        } finally {
                            return r
                        }
                    }, e.prototype.createError = function(e, t, r, i) {
                        var n = "Line " + t + ": " + i,
                            s = this.constructError(n, r);
                        return s.index = e, s.lineNumber = t, s.description = i, s
                    }, e.prototype.throwError = function(e, t, r, i) {
                        throw this.createError(e, t, r, i)
                    }, e.prototype.tolerateError = function(e, t, r, i) {
                        var n = this.createError(e, t, r, i);
                        if (!this.tolerant) throw n;
                        this.recordError(n)
                    }, e
                }();
                t.ErrorHandler = r
            }, function(e, t) {
                "use strict";
                ! function(e) {
                    e[e.BooleanLiteral = 1] = "BooleanLiteral", e[e.EOF = 2] = "EOF",
                        e[e.Identifier = 3] = "Identifier", e[e.Keyword = 4] = "Keyword", e[e.NullLiteral = 5] = "NullLiteral", e[e.NumericLiteral = 6] = "NumericLiteral", e[e.Punctuator = 7] = "Punctuator", e[e.StringLiteral = 8] = "StringLiteral", e[e.RegularExpression = 9] = "RegularExpression", e[e.Template = 10] = "Template"
                }(t.Token || (t.Token = {}));
                var r = t.Token;
                t.TokenName = {}, t.TokenName[r.BooleanLiteral] = "Boolean", t.TokenName[r.EOF] = "<end>", t.TokenName[r.Identifier] = "Identifier", t.TokenName[r.Keyword] = "Keyword", t.TokenName[r.NullLiteral] = "Null", t.TokenName[r.NumericLiteral] = "Numeric", t.TokenName[r.Punctuator] = "Punctuator", t.TokenName[r.StringLiteral] = "String", t.TokenName[r.RegularExpression] = "RegularExpression", t.TokenName[r.Template] = "Template"
            }, function(e, t, r) {
                "use strict";

                function i(e) {
                    return "0123456789abcdef".indexOf(e.toLowerCase())
                }

                function n(e) {
                    return "01234567".indexOf(e)
                }
                var s = r(4),
                    o = r(5),
                    a = r(9),
                    u = r(7),
                    c = function() {
                        function e(e, t) {
                            this.source = e, this.errorHandler = t, this.trackComment = !1, this.length = e.length, this.index = 0, this.lineNumber = e.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = []
                        }
                        return e.prototype.eof = function() {
                            return this.index >= this.length
                        }, e.prototype.throwUnexpectedToken = function(e) {
                            void 0 === e && (e = o.Messages.UnexpectedTokenIllegal), this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e)
                        }, e.prototype.tolerateUnexpectedToken = function() {
                            this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, o.Messages.UnexpectedTokenIllegal)
                        }, e.prototype.skipSingleLineComment = function(e) {
                            var t, r, i;
                            for (this.trackComment && (t = [], r = this.index - e, i = {
                                    start: {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart - e
                                    },
                                    end: {}
                                }); !this.eof();) {
                                var n = this.source.charCodeAt(this.index);
                                if (++this.index, a.Character.isLineTerminator(n)) {
                                    if (this.trackComment) {
                                        i.end = {
                                            line: this.lineNumber,
                                            column: this.index - this.lineStart - 1
                                        };
                                        var s = {
                                            multiLine: !1,
                                            slice: [r + e, this.index - 1],
                                            range: [r, this.index - 1],
                                            loc: i
                                        };
                                        t.push(s)
                                    }
                                    return 13 === n && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t
                                }
                            }
                            if (this.trackComment) {
                                i.end = {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart
                                };
                                var s = {
                                    multiLine: !1,
                                    slice: [r + e, this.index],
                                    range: [r, this.index],
                                    loc: i
                                };
                                t.push(s)
                            }
                            return t
                        }, e.prototype.skipMultiLineComment = function() {
                            var e, t, r;
                            for (this.trackComment && (e = [], t = this.index - 2, r = {
                                    start: {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart - 2
                                    },
                                    end: {}
                                }); !this.eof();) {
                                var i = this.source.charCodeAt(this.index);
                                if (a.Character.isLineTerminator(i)) 13 === i && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
                                else if (42 === i) {
                                    if (47 === this.source.charCodeAt(this.index + 1)) {
                                        if (this.index += 2, this.trackComment) {
                                            r.end = {
                                                line: this.lineNumber,
                                                column: this.index - this.lineStart
                                            };
                                            var n = {
                                                multiLine: !0,
                                                slice: [t + 2, this.index - 2],
                                                range: [t, this.index],
                                                loc: r
                                            };
                                            e.push(n)
                                        }
                                        return e
                                    }++this.index
                                } else ++this.index
                            }
                            if (this.trackComment) {
                                r.end = {
                                    line: this.lineNumber,
                                    column: this.index - this.lineStart
                                };
                                var n = {
                                    multiLine: !0,
                                    slice: [t + 2, this.index],
                                    range: [t, this.index],
                                    loc: r
                                };
                                e.push(n)
                            }
                            return this.tolerateUnexpectedToken(), e
                        }, e.prototype.scanComments = function() {
                            var e;
                            this.trackComment && (e = []);
                            for (var t = 0 === this.index; !this.eof();) {
                                var r = this.source.charCodeAt(this.index);
                                if (a.Character.isWhiteSpace(r)) ++this.index;
                                else if (a.Character.isLineTerminator(r)) ++this.index, 13 === r && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t = !0;
                                else if (47 === r)
                                    if (r = this.source.charCodeAt(this.index + 1), 47 === r) {
                                        this.index += 2;
                                        var i = this.skipSingleLineComment(2);
                                        this.trackComment && (e = e.concat(i)), t = !0
                                    } else {
                                        if (42 !== r) break;
                                        this.index += 2;
                                        var i = this.skipMultiLineComment();
                                        this.trackComment && (e = e.concat(i))
                                    }
                                else if (t && 45 === r) {
                                    if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2)) break;
                                    this.index += 3;
                                    var i = this.skipSingleLineComment(3);
                                    this.trackComment && (e = e.concat(i))
                                } else {
                                    if (60 !== r) break;
                                    if ("!--" !== this.source.slice(this.index + 1, this.index + 4)) break;
                                    this.index += 4;
                                    var i = this.skipSingleLineComment(4);
                                    this.trackComment && (e = e.concat(i))
                                }
                            }
                            return e
                        }, e.prototype.isFutureReservedWord = function(e) {
                            switch (e) {
                                case "enum":
                                case "export":
                                case "import":
                                case "super":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, e.prototype.isStrictModeReservedWord = function(e) {
                            switch (e) {
                                case "implements":
                                case "interface":
                                case "package":
                                case "private":
                                case "protected":
                                case "public":
                                case "static":
                                case "yield":
                                case "let":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, e.prototype.isRestrictedWord = function(e) {
                            return "eval" === e || "arguments" === e
                        }, e.prototype.isKeyword = function(e) {
                            switch (e.length) {
                                case 2:
                                    return "if" === e || "in" === e || "do" === e;
                                case 3:
                                    return "var" === e || "for" === e || "new" === e || "try" === e || "let" === e;
                                case 4:
                                    return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                                case 5:
                                    return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                                case 6:
                                    return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                                case 7:
                                    return "default" === e || "finally" === e || "extends" === e;
                                case 8:
                                    return "function" === e || "continue" === e || "debugger" === e;
                                case 10:
                                    return "instanceof" === e;
                                default:
                                    return !1
                            }
                        }, e.prototype.codePointAt = function(e) {
                            var t = this.source.charCodeAt(e);
                            if (t >= 55296 && t <= 56319) {
                                var r = this.source.charCodeAt(e + 1);
                                if (r >= 56320 && r <= 57343) {
                                    var i = t;
                                    t = 1024 * (i - 55296) + r - 56320 + 65536
                                }
                            }
                            return t
                        }, e.prototype.scanHexEscape = function(e) {
                            for (var t = "u" === e ? 4 : 2, r = 0, n = 0; n < t; ++n) {
                                if (this.eof() || !a.Character.isHexDigit(this.source.charCodeAt(this.index))) return "";
                                r = 16 * r + i(this.source[this.index++])
                            }
                            return String.fromCharCode(r)
                        }, e.prototype.scanUnicodeCodePointEscape = function() {
                            var e = this.source[this.index],
                                t = 0;
                            for ("}" === e && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++], a.Character.isHexDigit(e.charCodeAt(0)));) t = 16 * t + i(e);
                            return (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(), a.Character.fromCodePoint(t)
                        }, e.prototype.getIdentifier = function() {
                            for (var e = this.index++; !this.eof();) {
                                var t = this.source.charCodeAt(this.index);
                                if (92 === t) return this.index = e, this.getComplexIdentifier();
                                if (t >= 55296 && t < 57343) return this.index = e, this.getComplexIdentifier();
                                if (!a.Character.isIdentifierPart(t)) break;
                                ++this.index
                            }
                            return this.source.slice(e, this.index)
                        }, e.prototype.getComplexIdentifier = function() {
                            var e = this.codePointAt(this.index),
                                t = a.Character.fromCodePoint(e);
                            this.index += t.length;
                            var r;
                            for (92 === e && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, r = this.scanUnicodeCodePointEscape()) : (r = this.scanHexEscape("u"), e = r.charCodeAt(0), r && "\\" !== r && a.Character.isIdentifierStart(e) || this.throwUnexpectedToken()), t = r); !this.eof() && (e = this.codePointAt(this.index), a.Character.isIdentifierPart(e));) r = a.Character.fromCodePoint(e), t += r, this.index += r.length, 92 === e && (t = t.substr(0, t.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, r = this.scanUnicodeCodePointEscape()) : (r = this.scanHexEscape("u"), e = r.charCodeAt(0), r && "\\" !== r && a.Character.isIdentifierPart(e) || this.throwUnexpectedToken()), t += r);
                            return t
                        }, e.prototype.octalToDecimal = function(e) {
                            var t = "0" !== e,
                                r = n(e);
                            return !this.eof() && a.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (t = !0, r = 8 * r + n(this.source[this.index++]), "0123".indexOf(e) >= 0 && !this.eof() && a.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (r = 8 * r + n(this.source[this.index++]))), {
                                code: r,
                                octal: t
                            }
                        }, e.prototype.scanIdentifier = function() {
                            var e, t = this.index,
                                r = 92 === this.source.charCodeAt(t) ? this.getComplexIdentifier() : this.getIdentifier();
                            return e = 1 === r.length ? u.Token.Identifier : this.isKeyword(r) ? u.Token.Keyword : "null" === r ? u.Token.NullLiteral : "true" === r || "false" === r ? u.Token.BooleanLiteral : u.Token.Identifier, {
                                type: e,
                                value: r,
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: t,
                                end: this.index
                            }
                        }, e.prototype.scanPunctuator = function() {
                            var e = {
                                    type: u.Token.Punctuator,
                                    value: "",
                                    lineNumber: this.lineNumber,
                                    lineStart: this.lineStart,
                                    start: this.index,
                                    end: this.index
                                },
                                t = this.source[this.index];
                            switch (t) {
                                case "(":
                                case "{":
                                    "{" === t && this.curlyStack.push("{"), ++this.index;
                                    break;
                                case ".":
                                    ++this.index, "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2, t = "...");
                                    break;
                                case "}":
                                    ++this.index, this.curlyStack.pop();
                                    break;
                                case ")":
                                case ";":
                                case ",":
                                case "[":
                                case "]":
                                case ":":
                                case "?":
                                case "~":
                                    ++this.index;
                                    break;
                                default:
                                    t = this.source.substr(this.index, 4), ">>>=" === t ? this.index += 4 : (t = t.substr(0, 3), "===" === t || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t || "**=" === t ? this.index += 3 : (t = t.substr(0, 2), "&&" === t || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t || "**" === t ? this.index += 2 : (t = this.source[this.index], "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index)))
                            }
                            return this.index === e.start && this.throwUnexpectedToken(), e.end = this.index, e.value = t, e
                        }, e.prototype.scanHexLiteral = function(e) {
                            for (var t = ""; !this.eof() && a.Character.isHexDigit(this.source.charCodeAt(this.index));) t += this.source[this.index++];
                            return 0 === t.length && this.throwUnexpectedToken(), a.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                                type: u.Token.NumericLiteral,
                                value: parseInt("0x" + t, 16),
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: e,
                                end: this.index
                            }
                        }, e.prototype.scanBinaryLiteral = function(e) {
                            for (var t, r = ""; !this.eof() && (t = this.source[this.index], "0" === t || "1" === t);) r += this.source[this.index++];
                            return 0 === r.length && this.throwUnexpectedToken(), this.eof() || (t = this.source.charCodeAt(this.index), (a.Character.isIdentifierStart(t) || a.Character.isDecimalDigit(t)) && this.throwUnexpectedToken()), {
                                type: u.Token.NumericLiteral,
                                value: parseInt(r, 2),
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: e,
                                end: this.index
                            }
                        }, e.prototype.scanOctalLiteral = function(e, t) {
                            var r = "",
                                i = !1;
                            for (a.Character.isOctalDigit(e.charCodeAt(0)) ? (i = !0, r = "0" + this.source[this.index++]) : ++this.index; !this.eof() && a.Character.isOctalDigit(this.source.charCodeAt(this.index));) r += this.source[this.index++];
                            return i || 0 !== r.length || this.throwUnexpectedToken(), (a.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || a.Character.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), {
                                type: u.Token.NumericLiteral,
                                value: parseInt(r, 8),
                                octal: i,
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: t,
                                end: this.index
                            }
                        }, e.prototype.isImplicitOctalLiteral = function() {
                            for (var e = this.index + 1; e < this.length; ++e) {
                                var t = this.source[e];
                                if ("8" === t || "9" === t) return !1;
                                if (!a.Character.isOctalDigit(t.charCodeAt(0))) return !0
                            }
                            return !0
                        }, e.prototype.scanNumericLiteral = function() {
                            var e = this.index,
                                t = this.source[e];
                            s.assert(a.Character.isDecimalDigit(t.charCodeAt(0)) || "." === t, "Numeric literal must start with a decimal digit or a decimal point");
                            var r = "";
                            if ("." !== t) {
                                if (r = this.source[this.index++], t = this.source[this.index], "0" === r) {
                                    if ("x" === t || "X" === t) return ++this.index, this.scanHexLiteral(e);
                                    if ("b" === t || "B" === t) return ++this.index, this.scanBinaryLiteral(e);
                                    if ("o" === t || "O" === t) return this.scanOctalLiteral(t, e);
                                    if (t && a.Character.isOctalDigit(t.charCodeAt(0)) && this.isImplicitOctalLiteral()) return this.scanOctalLiteral(t, e)
                                }
                                for (; a.Character.isDecimalDigit(this.source.charCodeAt(this.index));) r += this.source[this.index++];
                                t = this.source[this.index]
                            }
                            if ("." === t) {
                                for (r += this.source[this.index++]; a.Character.isDecimalDigit(this.source.charCodeAt(this.index));) r += this.source[this.index++];
                                t = this.source[this.index]
                            }
                            if ("e" === t || "E" === t)
                                if (r += this.source[this.index++], t = this.source[this.index], "+" !== t && "-" !== t || (r += this.source[this.index++]), a.Character.isDecimalDigit(this.source.charCodeAt(this.index)))
                                    for (; a.Character.isDecimalDigit(this.source.charCodeAt(this.index));) r += this.source[this.index++];
                                else this.throwUnexpectedToken();
                            return a.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
                                type: u.Token.NumericLiteral,
                                value: parseFloat(r),
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: e,
                                end: this.index
                            }
                        }, e.prototype.scanStringLiteral = function() {
                            var e = this.index,
                                t = this.source[e];
                            s.assert("'" === t || '"' === t, "String literal must starts with a quote"), ++this.index;
                            for (var r = !1, i = ""; !this.eof();) {
                                var n = this.source[this.index++];
                                if (n === t) {
                                    t = "";
                                    break
                                }
                                if ("\\" === n)
                                    if (n = this.source[this.index++], n && a.Character.isLineTerminator(n.charCodeAt(0))) ++this.lineNumber, "\r" === n && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                                    else switch (n) {
                                        case "u":
                                        case "x":
                                            if ("{" === this.source[this.index]) ++this.index, i += this.scanUnicodeCodePointEscape();
                                            else {
                                                var o = this.scanHexEscape(n);
                                                o || this.throwUnexpectedToken(), i += o
                                            }
                                            break;
                                        case "n":
                                            i += "\n";
                                            break;
                                        case "r":
                                            i += "\r";
                                            break;
                                        case "t":
                                            i += "\t";
                                            break;
                                        case "b":
                                            i += "\b";
                                            break;
                                        case "f":
                                            i += "\f";
                                            break;
                                        case "v":
                                            i += "\v";
                                            break;
                                        case "8":
                                        case "9":
                                            i += n, this.tolerateUnexpectedToken();
                                            break;
                                        default:
                                            if (n && a.Character.isOctalDigit(n.charCodeAt(0))) {
                                                var c = this.octalToDecimal(n);
                                                r = c.octal || r, i += String.fromCharCode(c.code)
                                            } else i += n
                                    } else {
                                        if (a.Character.isLineTerminator(n.charCodeAt(0))) break;
                                        i += n
                                    }
                            }
                            return "" !== t && (this.index = e, this.throwUnexpectedToken()), {
                                type: u.Token.StringLiteral,
                                value: i,
                                octal: r,
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: e,
                                end: this.index
                            }
                        }, e.prototype.scanTemplate = function() {
                            var e = "",
                                t = !1,
                                r = this.index,
                                i = "`" === this.source[r],
                                n = !1,
                                s = 2;
                            for (++this.index; !this.eof();) {
                                var c = this.source[this.index++];
                                if ("`" === c) {
                                    s = 1, n = !0, t = !0;
                                    break
                                }
                                if ("$" === c) {
                                    if ("{" === this.source[this.index]) {
                                        this.curlyStack.push("${"), ++this.index, t = !0;
                                        break
                                    }
                                    e += c
                                } else if ("\\" === c)
                                    if (c = this.source[this.index++], a.Character.isLineTerminator(c.charCodeAt(0))) ++this.lineNumber, "\r" === c && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
                                    else switch (c) {
                                        case "n":
                                            e += "\n";
                                            break;
                                        case "r":
                                            e += "\r";
                                            break;
                                        case "t":
                                            e += "\t";
                                            break;
                                        case "u":
                                        case "x":
                                            if ("{" === this.source[this.index]) ++this.index, e += this.scanUnicodeCodePointEscape();
                                            else {
                                                var l = this.index,
                                                    h = this.scanHexEscape(c);
                                                h ? e += h : (this.index = l, e += c)
                                            }
                                            break;
                                        case "b":
                                            e += "\b";
                                            break;
                                        case "f":
                                            e += "\f";
                                            break;
                                        case "v":
                                            e += "\v";
                                            break;
                                        default:
                                            "0" === c ? (a.Character.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral), e += "\0") : a.Character.isOctalDigit(c.charCodeAt(0)) ? this.throwUnexpectedToken(o.Messages.TemplateOctalLiteral) : e += c
                                    } else a.Character.isLineTerminator(c.charCodeAt(0)) ? (++this.lineNumber, "\r" === c && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e += "\n") : e += c
                            }
                            return t || this.throwUnexpectedToken(), i || this.curlyStack.pop(), {
                                type: u.Token.Template,
                                value: {
                                    cooked: e,
                                    raw: this.source.slice(r + 1, this.index - s)
                                },
                                head: i,
                                tail: n,
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: r,
                                end: this.index
                            }
                        }, e.prototype.testRegExp = function(e, t) {
                            var r = "￿",
                                i = e,
                                n = this;
                            t.indexOf("u") >= 0 && (i = i.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e, t, i) {
                                var s = parseInt(t || i, 16);
                                return s > 1114111 && n.throwUnexpectedToken(o.Messages.InvalidRegExp), s <= 65535 ? String.fromCharCode(s) : r
                            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, r));
                            try {
                                RegExp(i)
                            } catch (e) {
                                this.throwUnexpectedToken(o.Messages.InvalidRegExp)
                            }
                            try {
                                return new RegExp(e, t)
                            } catch (e) {
                                return null
                            }
                        }, e.prototype.scanRegExpBody = function() {
                            var e = this.source[this.index];
                            s.assert("/" === e, "Regular expression literal must start with a slash");
                            for (var t = this.source[this.index++], r = !1, i = !1; !this.eof();)
                                if (e = this.source[this.index++], t += e, "\\" === e) e = this.source[this.index++], a.Character.isLineTerminator(e.charCodeAt(0)) && this.throwUnexpectedToken(o.Messages.UnterminatedRegExp), t += e;
                                else if (a.Character.isLineTerminator(e.charCodeAt(0))) this.throwUnexpectedToken(o.Messages.UnterminatedRegExp);
                            else if (r) "]" === e && (r = !1);
                            else {
                                if ("/" === e) {
                                    i = !0;
                                    break
                                }
                                "[" === e && (r = !0)
                            }
                            i || this.throwUnexpectedToken(o.Messages.UnterminatedRegExp);
                            var n = t.substr(1, t.length - 2);
                            return {
                                value: n,
                                literal: t
                            }
                        }, e.prototype.scanRegExpFlags = function() {
                            for (var e = "", t = ""; !this.eof();) {
                                var r = this.source[this.index];
                                if (!a.Character.isIdentifierPart(r.charCodeAt(0))) break;
                                if (++this.index, "\\" !== r || this.eof()) t += r, e += r;
                                else if (r = this.source[this.index], "u" === r) {
                                    ++this.index;
                                    var i = this.index;
                                    if (r = this.scanHexEscape("u"))
                                        for (t += r, e += "\\u"; i < this.index; ++i) e += this.source[i];
                                    else this.index = i, t += "u", e += "\\u";
                                    this.tolerateUnexpectedToken()
                                } else e += "\\", this.tolerateUnexpectedToken()
                            }
                            return {
                                value: t,
                                literal: e
                            }
                        }, e.prototype.scanRegExp = function() {
                            var e = this.index,
                                t = this.scanRegExpBody(),
                                r = this.scanRegExpFlags(),
                                i = this.testRegExp(t.value, r.value);
                            return {
                                type: u.Token.RegularExpression,
                                value: i,
                                literal: t.literal + r.literal,
                                regex: {
                                    pattern: t.value,
                                    flags: r.value
                                },
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: e,
                                end: this.index
                            }
                        }, e.prototype.lex = function() {
                            if (this.eof()) return {
                                type: u.Token.EOF,
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: this.index,
                                end: this.index
                            };
                            var e = this.source.charCodeAt(this.index);
                            return a.Character.isIdentifierStart(e) ? this.scanIdentifier() : 40 === e || 41 === e || 59 === e ? this.scanPunctuator() : 39 === e || 34 === e ? this.scanStringLiteral() : 46 === e ? a.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : a.Character.isDecimalDigit(e) ? this.scanNumericLiteral() : 96 === e || 125 === e && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e >= 55296 && e < 57343 && a.Character.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator()
                        }, e
                    }();
                t.Scanner = c
            }, function(e, t) {
                "use strict";
                var r = {
                    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                };
                t.Character = {
                    fromCodePoint: function(e) {
                        return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023))
                    },
                    isWhiteSpace: function(e) {
                        return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(e) >= 0
                    },
                    isLineTerminator: function(e) {
                        return 10 === e || 13 === e || 8232 === e || 8233 === e
                    },
                    isIdentifierStart: function(e) {
                        return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 92 === e || e >= 128 && r.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e))
                    },
                    isIdentifierPart: function(e) {
                        return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || 92 === e || e >= 128 && r.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e))
                    },
                    isDecimalDigit: function(e) {
                        return e >= 48 && e <= 57
                    },
                    isHexDigit: function(e) {
                        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                    },
                    isOctalDigit: function(e) {
                        return e >= 48 && e <= 55
                    }
                }
            }, function(e, t, r) {
                "use strict";
                var i = r(2),
                    n = function() {
                        function e(e) {
                            this.type = i.Syntax.ArrayExpression, this.elements = e
                        }
                        return e
                    }();
                t.ArrayExpression = n;
                var s = function() {
                    function e(e) {
                        this.type = i.Syntax.ArrayPattern, this.elements = e
                    }
                    return e
                }();
                t.ArrayPattern = s;
                var o = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ArrowFunctionExpression, this.id = null, this.params = e, this.body = t, this.generator = !1, this.expression = r
                    }
                    return e
                }();
                t.ArrowFunctionExpression = o;
                var a = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.AssignmentExpression, this.operator = e, this.left = t, this.right = r
                    }
                    return e
                }();
                t.AssignmentExpression = a;
                var u = function() {
                    function e(e, t) {
                        this.type = i.Syntax.AssignmentPattern, this.left = e, this.right = t
                    }
                    return e
                }();
                t.AssignmentPattern = u;
                var c = function() {
                    function e(e, t, r) {
                        var n = "||" === e || "&&" === e;
                        this.type = n ? i.Syntax.LogicalExpression : i.Syntax.BinaryExpression, this.operator = e, this.left = t, this.right = r
                    }
                    return e
                }();
                t.BinaryExpression = c;
                var l = function() {
                    function e(e) {
                        this.type = i.Syntax.BlockStatement, this.body = e
                    }
                    return e
                }();
                t.BlockStatement = l;
                var h = function() {
                    function e(e) {
                        this.type = i.Syntax.BreakStatement, this.label = e
                    }
                    return e
                }();
                t.BreakStatement = h;
                var p = function() {
                    function e(e, t) {
                        this.type = i.Syntax.CallExpression, this.callee = e, this.arguments = t
                    }
                    return e
                }();
                t.CallExpression = p;
                var f = function() {
                    function e(e, t) {
                        this.type = i.Syntax.CatchClause, this.param = e, this.body = t
                    }
                    return e
                }();
                t.CatchClause = f;
                var d = function() {
                    function e(e) {
                        this.type = i.Syntax.ClassBody, this.body = e
                    }
                    return e
                }();
                t.ClassBody = d;
                var m = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ClassDeclaration, this.id = e, this.superClass = t, this.body = r
                    }
                    return e
                }();
                t.ClassDeclaration = m;
                var g = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ClassExpression, this.id = e, this.superClass = t, this.body = r
                    }
                    return e
                }();
                t.ClassExpression = g;
                var x = function() {
                    function e(e, t) {
                        this.type = i.Syntax.MemberExpression, this.computed = !0, this.object = e, this.property = t
                    }
                    return e
                }();
                t.ComputedMemberExpression = x;
                var y = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ConditionalExpression, this.test = e, this.consequent = t, this.alternate = r
                    }
                    return e
                }();
                t.ConditionalExpression = y;
                var D = function() {
                    function e(e) {
                        this.type = i.Syntax.ContinueStatement, this.label = e
                    }
                    return e
                }();
                t.ContinueStatement = D;
                var b = function() {
                    function e() {
                        this.type = i.Syntax.DebuggerStatement
                    }
                    return e
                }();
                t.DebuggerStatement = b;
                var v = function() {
                    function e(e, t) {
                        this.type = i.Syntax.ExpressionStatement, this.expression = e, this.directive = t
                    }
                    return e
                }();
                t.Directive = v;
                var w = function() {
                    function e(e, t) {
                        this.type = i.Syntax.DoWhileStatement, this.body = e, this.test = t
                    }
                    return e
                }();
                t.DoWhileStatement = w;
                var E = function() {
                    function e() {
                        this.type = i.Syntax.EmptyStatement
                    }
                    return e
                }();
                t.EmptyStatement = E;
                var k = function() {
                    function e(e) {
                        this.type = i.Syntax.ExportAllDeclaration, this.source = e
                    }
                    return e
                }();
                t.ExportAllDeclaration = k;
                var A = function() {
                    function e(e) {
                        this.type = i.Syntax.ExportDefaultDeclaration, this.declaration = e
                    }
                    return e
                }();
                t.ExportDefaultDeclaration = A;
                var C = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ExportNamedDeclaration, this.declaration = e, this.specifiers = t, this.source = r
                    }
                    return e
                }();
                t.ExportNamedDeclaration = C;
                var S = function() {
                    function e(e, t) {
                        this.type = i.Syntax.ExportSpecifier, this.exported = t, this.local = e
                    }
                    return e
                }();
                t.ExportSpecifier = S;
                var F = function() {
                    function e(e) {
                        this.type = i.Syntax.ExpressionStatement, this.expression = e
                    }
                    return e
                }();
                t.ExpressionStatement = F;
                var T = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ForInStatement, this.left = e, this.right = t, this.body = r, this.each = !1
                    }
                    return e
                }();
                t.ForInStatement = T;
                var B = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.ForOfStatement, this.left = e, this.right = t, this.body = r
                    }
                    return e
                }();
                t.ForOfStatement = B;
                var N = function() {
                    function e(e, t, r, n) {
                        this.type = i.Syntax.ForStatement, this.init = e, this.test = t, this.update = r, this.body = n
                    }
                    return e
                }();
                t.ForStatement = N;
                var I = function() {
                    function e(e, t, r, n) {
                        this.type = i.Syntax.FunctionDeclaration, this.id = e, this.params = t, this.body = r, this.generator = n, this.expression = !1
                    }
                    return e
                }();
                t.FunctionDeclaration = I;
                var P = function() {
                    function e(e, t, r, n) {
                        this.type = i.Syntax.FunctionExpression, this.id = e, this.params = t, this.body = r, this.generator = n, this.expression = !1
                    }
                    return e
                }();
                t.FunctionExpression = P;
                var M = function() {
                    function e(e) {
                        this.type = i.Syntax.Identifier, this.name = e
                    }
                    return e
                }();
                t.Identifier = M;
                var O = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.IfStatement, this.test = e, this.consequent = t, this.alternate = r
                    }
                    return e
                }();
                t.IfStatement = O;
                var L = function() {
                    function e(e, t) {
                        this.type = i.Syntax.ImportDeclaration, this.specifiers = e, this.source = t
                    }
                    return e
                }();
                t.ImportDeclaration = L;
                var R = function() {
                    function e(e) {
                        this.type = i.Syntax.ImportDefaultSpecifier, this.local = e
                    }
                    return e
                }();
                t.ImportDefaultSpecifier = R;
                var U = function() {
                    function e(e) {
                        this.type = i.Syntax.ImportNamespaceSpecifier, this.local = e
                    }
                    return e
                }();
                t.ImportNamespaceSpecifier = U;
                var _ = function() {
                    function e(e, t) {
                        this.type = i.Syntax.ImportSpecifier, this.local = e, this.imported = t
                    }
                    return e
                }();
                t.ImportSpecifier = _;
                var z = function() {
                    function e(e, t) {
                        this.type = i.Syntax.LabeledStatement, this.label = e, this.body = t
                    }
                    return e
                }();
                t.LabeledStatement = z;
                var j = function() {
                    function e(e, t) {
                        this.type = i.Syntax.Literal, this.value = e, this.raw = t
                    }
                    return e
                }();
                t.Literal = j;
                var X = function() {
                    function e(e, t) {
                        this.type = i.Syntax.MetaProperty, this.meta = e, this.property = t
                    }
                    return e
                }();
                t.MetaProperty = X;
                var J = function() {
                    function e(e, t, r, n, s) {
                        this.type = i.Syntax.MethodDefinition, this.key = e, this.computed = t, this.value = r, this.kind = n, this.static = s
                    }
                    return e
                }();
                t.MethodDefinition = J;
                var Y = function() {
                    function e(e, t) {
                        this.type = i.Syntax.NewExpression, this.callee = e, this.arguments = t
                    }
                    return e
                }();
                t.NewExpression = Y;
                var K = function() {
                    function e(e) {
                        this.type = i.Syntax.ObjectExpression, this.properties = e
                    }
                    return e
                }();
                t.ObjectExpression = K;
                var W = function() {
                    function e(e) {
                        this.type = i.Syntax.ObjectPattern, this.properties = e
                    }
                    return e
                }();
                t.ObjectPattern = W;
                var H = function() {
                    function e(e, t) {
                        this.type = i.Syntax.Program, this.body = e, this.sourceType = t
                    }
                    return e
                }();
                t.Program = H;
                var q = function() {
                    function e(e, t, r, n, s, o) {
                        this.type = i.Syntax.Property, this.key = t, this.computed = r, this.value = n, this.kind = e, this.method = s, this.shorthand = o
                    }
                    return e
                }();
                t.Property = q;
                var G = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.Literal, this.value = e, this.raw = t, this.regex = r
                    }
                    return e
                }();
                t.RegexLiteral = G;
                var V = function() {
                    function e(e) {
                        this.type = i.Syntax.RestElement, this.argument = e
                    }
                    return e
                }();
                t.RestElement = V;
                var $ = function() {
                    function e(e) {
                        this.type = i.Syntax.ReturnStatement, this.argument = e
                    }
                    return e
                }();
                t.ReturnStatement = $;
                var Z = function() {
                    function e(e) {
                        this.type = i.Syntax.SequenceExpression, this.expressions = e
                    }
                    return e
                }();
                t.SequenceExpression = Z;
                var Q = function() {
                    function e(e) {
                        this.type = i.Syntax.SpreadElement, this.argument = e
                    }
                    return e
                }();
                t.SpreadElement = Q;
                var ee = function() {
                    function e(e, t) {
                        this.type = i.Syntax.MemberExpression, this.computed = !1, this.object = e, this.property = t
                    }
                    return e
                }();
                t.StaticMemberExpression = ee;
                var te = function() {
                    function e() {
                        this.type = i.Syntax.Super
                    }
                    return e
                }();
                t.Super = te;
                var re = function() {
                    function e(e, t) {
                        this.type = i.Syntax.SwitchCase, this.test = e, this.consequent = t
                    }
                    return e
                }();
                t.SwitchCase = re;
                var ie = function() {
                    function e(e, t) {
                        this.type = i.Syntax.SwitchStatement, this.discriminant = e, this.cases = t
                    }
                    return e
                }();
                t.SwitchStatement = ie;
                var ne = function() {
                    function e(e, t) {
                        this.type = i.Syntax.TaggedTemplateExpression, this.tag = e, this.quasi = t
                    }
                    return e
                }();
                t.TaggedTemplateExpression = ne;
                var se = function() {
                    function e(e, t) {
                        this.type = i.Syntax.TemplateElement, this.value = e, this.tail = t
                    }
                    return e
                }();
                t.TemplateElement = se;
                var oe = function() {
                    function e(e, t) {
                        this.type = i.Syntax.TemplateLiteral, this.quasis = e, this.expressions = t
                    }
                    return e
                }();
                t.TemplateLiteral = oe;
                var ae = function() {
                    function e() {
                        this.type = i.Syntax.ThisExpression
                    }
                    return e
                }();
                t.ThisExpression = ae;
                var ue = function() {
                    function e(e) {
                        this.type = i.Syntax.ThrowStatement, this.argument = e
                    }
                    return e
                }();
                t.ThrowStatement = ue;
                var ce = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.TryStatement, this.block = e, this.handler = t, this.finalizer = r
                    }
                    return e
                }();
                t.TryStatement = ce;
                var le = function() {
                    function e(e, t) {
                        this.type = i.Syntax.UnaryExpression, this.operator = e, this.argument = t, this.prefix = !0
                    }
                    return e
                }();
                t.UnaryExpression = le;
                var he = function() {
                    function e(e, t, r) {
                        this.type = i.Syntax.UpdateExpression, this.operator = e, this.argument = t, this.prefix = r
                    }
                    return e
                }();
                t.UpdateExpression = he;
                var pe = function() {
                    function e(e, t) {
                        this.type = i.Syntax.VariableDeclaration, this.declarations = e, this.kind = t
                    }
                    return e
                }();
                t.VariableDeclaration = pe;
                var fe = function() {
                    function e(e, t) {
                        this.type = i.Syntax.VariableDeclarator, this.id = e, this.init = t
                    }
                    return e
                }();
                t.VariableDeclarator = fe;
                var de = function() {
                    function e(e, t) {
                        this.type = i.Syntax.WhileStatement, this.test = e, this.body = t
                    }
                    return e
                }();
                t.WhileStatement = de;
                var me = function() {
                    function e(e, t) {
                        this.type = i.Syntax.WithStatement, this.object = e, this.body = t
                    }
                    return e
                }();
                t.WithStatement = me;
                var ge = function() {
                    function e(e, t) {
                        this.type = i.Syntax.YieldExpression, this.argument = e, this.delegate = t
                    }
                    return e
                }();
                t.YieldExpression = ge
            }, function(e, t, r) {
                "use strict";

                function i(e) {
                    var t;
                    switch (e.type) {
                        case l.JSXSyntax.JSXIdentifier:
                            var r = e;
                            t = r.name;
                            break;
                        case l.JSXSyntax.JSXNamespacedName:
                            var n = e;
                            t = i(n.namespace) + ":" + i(n.name);
                            break;
                        case l.JSXSyntax.JSXMemberExpression:
                            var s = e;
                            t = i(s.object) + "." + i(s.property)
                    }
                    return t
                }
                var n, s = this && this.__extends || function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    },
                    o = r(9),
                    a = r(7),
                    u = r(3),
                    c = r(12),
                    l = r(13),
                    h = r(10),
                    p = r(14);
                ! function(e) {
                    e[e.Identifier = 100] = "Identifier", e[e.Text = 101] = "Text"
                }(n || (n = {})), a.TokenName[n.Identifier] = "JSXIdentifier", a.TokenName[n.Text] = "JSXText";
                var f = function(e) {
                    function t(t, r, i) {
                        e.call(this, t, r, i)
                    }
                    return s(t, e), t.prototype.parsePrimaryExpression = function() {
                        return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this)
                    }, t.prototype.startJSX = function() {
                        this.scanner.index = this.startMarker.index, this.scanner.lineNumber = this.startMarker.lineNumber, this.scanner.lineStart = this.startMarker.lineStart
                    }, t.prototype.finishJSX = function() {
                        this.nextToken()
                    }, t.prototype.reenterJSX = function() {
                        this.startJSX(), this.expectJSX("}"), this.config.tokens && this.tokens.pop()
                    }, t.prototype.createJSXNode = function() {
                        return this.collectComments(), {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }, t.prototype.createJSXChildNode = function() {
                        return {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }, t.prototype.scanXHTMLEntity = function(e) {
                        for (var t = "&", r = !0, i = !1, n = !1, s = !1; !this.scanner.eof() && r && !i;) {
                            var a = this.scanner.source[this.scanner.index];
                            if (a === e) break;
                            if (i = ";" === a, t += a, ++this.scanner.index, !i) switch (t.length) {
                                case 2:
                                    n = "#" === a;
                                    break;
                                case 3:
                                    n && (s = "x" === a, r = s || o.Character.isDecimalDigit(a.charCodeAt(0)), n = n && !s);
                                    break;
                                default:
                                    r = r && !(n && !o.Character.isDecimalDigit(a.charCodeAt(0))), r = r && !(s && !o.Character.isHexDigit(a.charCodeAt(0)))
                            }
                        }
                        if (r && i && t.length > 2) {
                            var u = t.substr(1, t.length - 2);
                            n && u.length > 1 ? t = String.fromCharCode(parseInt(u.substr(1), 10)) : s && u.length > 2 ? t = String.fromCharCode(parseInt("0" + u.substr(1), 16)) : n || s || !c.XHTMLEntities[u] || (t = c.XHTMLEntities[u])
                        }
                        return t
                    }, t.prototype.lexJSX = function() {
                        var e = this.scanner.source.charCodeAt(this.scanner.index);
                        if (60 === e || 62 === e || 47 === e || 58 === e || 61 === e || 123 === e || 125 === e) {
                            var t = this.scanner.source[this.scanner.index++];
                            return {
                                type: a.Token.Punctuator,
                                value: t,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: this.scanner.index - 1,
                                end: this.scanner.index
                            }
                        }
                        if (34 === e || 39 === e) {
                            for (var r = this.scanner.index, i = this.scanner.source[this.scanner.index++], s = ""; !this.scanner.eof();) {
                                var u = this.scanner.source[this.scanner.index++];
                                if (u === i) break;
                                s += "&" === u ? this.scanXHTMLEntity(i) : u
                            }
                            return {
                                type: a.Token.StringLiteral,
                                value: s,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: r,
                                end: this.scanner.index
                            }
                        }
                        if (46 === e) {
                            var c = this.scanner.source.charCodeAt(this.scanner.index + 1),
                                l = this.scanner.source.charCodeAt(this.scanner.index + 2),
                                t = 46 === c && 46 === l ? "..." : ".",
                                r = this.scanner.index;
                            return this.scanner.index += t.length, {
                                type: a.Token.Punctuator,
                                value: t,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: r,
                                end: this.scanner.index
                            }
                        }
                        if (96 === e) return {
                            type: a.Token.Template,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: this.scanner.index,
                            end: this.scanner.index
                        };
                        if (o.Character.isIdentifierStart(e) && 92 !== e) {
                            var r = this.scanner.index;
                            for (++this.scanner.index; !this.scanner.eof();) {
                                var u = this.scanner.source.charCodeAt(this.scanner.index);
                                if (o.Character.isIdentifierPart(u) && 92 !== u) ++this.scanner.index;
                                else {
                                    if (45 !== u) break;
                                    ++this.scanner.index
                                }
                            }
                            var h = this.scanner.source.slice(r, this.scanner.index);
                            return {
                                type: n.Identifier,
                                value: h,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: r,
                                end: this.scanner.index
                            }
                        }
                        this.scanner.throwUnexpectedToken()
                    }, t.prototype.nextJSXToken = function() {
                        this.collectComments(), this.startMarker.index = this.scanner.index, this.startMarker.lineNumber = this.scanner.lineNumber, this.startMarker.lineStart = this.scanner.lineStart;
                        var e = this.lexJSX();
                        return this.lastMarker.index = this.scanner.index, this.lastMarker.lineNumber = this.scanner.lineNumber, this.lastMarker.lineStart = this.scanner.lineStart, this.config.tokens && this.tokens.push(this.convertToken(e)), e
                    }, t.prototype.nextJSXText = function() {
                        this.startMarker.index = this.scanner.index, this.startMarker.lineNumber = this.scanner.lineNumber, this.startMarker.lineStart = this.scanner.lineStart;
                        for (var e = this.scanner.index, t = ""; !this.scanner.eof();) {
                            var r = this.scanner.source[this.scanner.index];
                            if ("{" === r || "<" === r) break;
                            ++this.scanner.index, t += r, o.Character.isLineTerminator(r.charCodeAt(0)) && (++this.scanner.lineNumber, "\r" === r && "\n" === this.scanner.source[this.scanner.index] && ++this.scanner.index, this.scanner.lineStart = this.scanner.index)
                        }
                        this.lastMarker.index = this.scanner.index, this.lastMarker.lineNumber = this.scanner.lineNumber, this.lastMarker.lineStart = this.scanner.lineStart;
                        var i = {
                            type: n.Text,
                            value: t,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: e,
                            end: this.scanner.index
                        };
                        return t.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(i)), i
                    }, t.prototype.peekJSXToken = function() {
                        var e = this.scanner.index,
                            t = this.scanner.lineNumber,
                            r = this.scanner.lineStart;
                        this.scanner.scanComments();
                        var i = this.lexJSX();
                        return this.scanner.index = e, this.scanner.lineNumber = t, this.scanner.lineStart = r, i
                    }, t.prototype.expectJSX = function(e) {
                        var t = this.nextJSXToken();
                        t.type === a.Token.Punctuator && t.value === e || this.throwUnexpectedToken(t)
                    }, t.prototype.matchJSX = function(e) {
                        var t = this.peekJSXToken();
                        return t.type === a.Token.Punctuator && t.value === e
                    }, t.prototype.parseJSXIdentifier = function() {
                        var e = this.createJSXNode(),
                            t = this.nextJSXToken();
                        return t.type !== n.Identifier && this.throwUnexpectedToken(t), this.finalize(e, new p.JSXIdentifier(t.value))
                    }, t.prototype.parseJSXElementName = function() {
                        var e = this.createJSXNode(),
                            t = this.parseJSXIdentifier();
                        if (this.matchJSX(":")) {
                            var r = t;
                            this.expectJSX(":");
                            var i = this.parseJSXIdentifier();
                            t = this.finalize(e, new p.JSXNamespacedName(r, i))
                        } else if (this.matchJSX("."))
                            for (; this.matchJSX(".");) {
                                var n = t;
                                this.expectJSX(".");
                                var s = this.parseJSXIdentifier();
                                t = this.finalize(e, new p.JSXMemberExpression(n, s))
                            }
                        return t
                    }, t.prototype.parseJSXAttributeName = function() {
                        var e, t = this.createJSXNode(),
                            r = this.parseJSXIdentifier();
                        if (this.matchJSX(":")) {
                            var i = r;
                            this.expectJSX(":");
                            var n = this.parseJSXIdentifier();
                            e = this.finalize(t, new p.JSXNamespacedName(i, n))
                        } else e = r;
                        return e
                    }, t.prototype.parseJSXStringLiteralAttribute = function() {
                        var e = this.createJSXNode(),
                            t = this.nextJSXToken();
                        t.type !== a.Token.StringLiteral && this.throwUnexpectedToken(t);
                        var r = this.getTokenRaw(t);
                        return this.finalize(e, new h.Literal(t.value, r))
                    }, t.prototype.parseJSXExpressionAttribute = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("{"), this.finishJSX(), this.match("}") && this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                        var t = this.parseAssignmentExpression();
                        return this.reenterJSX(), this.finalize(e, new p.JSXExpressionContainer(t))
                    }, t.prototype.parseJSXAttributeValue = function() {
                        return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute()
                    }, t.prototype.parseJSXNameValueAttribute = function() {
                        var e = this.createJSXNode(),
                            t = this.parseJSXAttributeName(),
                            r = null;
                        return this.matchJSX("=") && (this.expectJSX("="), r = this.parseJSXAttributeValue()), this.finalize(e, new p.JSXAttribute(t, r))
                    }, t.prototype.parseJSXSpreadAttribute = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
                        var t = this.parseAssignmentExpression();
                        return this.reenterJSX(), this.finalize(e, new p.JSXSpreadAttribute(t))
                    }, t.prototype.parseJSXAttributes = function() {
                        for (var e = []; !this.matchJSX("/") && !this.matchJSX(">");) {
                            var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                            e.push(t)
                        }
                        return e
                    }, t.prototype.parseJSXOpeningElement = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("<");
                        var t = this.parseJSXElementName(),
                            r = this.parseJSXAttributes(),
                            i = this.matchJSX("/");
                        return i && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new p.JSXOpeningElement(t, i, r))
                    }, t.prototype.parseJSXBoundaryElement = function() {
                        var e = this.createJSXNode();
                        if (this.expectJSX("<"), this.matchJSX("/")) {
                            this.expectJSX("/");
                            var t = this.parseJSXElementName();
                            return this.expectJSX(">"), this.finalize(e, new p.JSXClosingElement(t))
                        }
                        var r = this.parseJSXElementName(),
                            i = this.parseJSXAttributes(),
                            n = this.matchJSX("/");
                        return n && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e, new p.JSXOpeningElement(r, n, i))
                    }, t.prototype.parseJSXEmptyExpression = function() {
                        var e = this.createJSXChildNode();
                        return this.collectComments(), this.lastMarker.index = this.scanner.index, this.lastMarker.lineNumber = this.scanner.lineNumber, this.lastMarker.lineStart = this.scanner.lineStart, this.finalize(e, new p.JSXEmptyExpression)
                    }, t.prototype.parseJSXExpressionContainer = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("{");
                        var t;
                        return this.matchJSX("}") ? (t = this.parseJSXEmptyExpression(), this.expectJSX("}")) : (this.finishJSX(), t = this.parseAssignmentExpression(), this.reenterJSX()), this.finalize(e, new p.JSXExpressionContainer(t))
                    }, t.prototype.parseJSXChildren = function() {
                        for (var e = []; !this.scanner.eof();) {
                            var t = this.createJSXChildNode(),
                                r = this.nextJSXText();
                            if (r.start < r.end) {
                                var i = this.getTokenRaw(r),
                                    n = this.finalize(t, new p.JSXText(r.value, i));
                                e.push(n)
                            }
                            if ("{" !== this.scanner.source[this.scanner.index]) break;
                            var s = this.parseJSXExpressionContainer();
                            e.push(s)
                        }
                        return e
                    }, t.prototype.parseComplexJSXElement = function(e) {
                        for (var t = []; !this.scanner.eof();) {
                            e.children = e.children.concat(this.parseJSXChildren());
                            var r = this.createJSXChildNode(),
                                n = this.parseJSXBoundaryElement();
                            if (n.type === l.JSXSyntax.JSXOpeningElement) {
                                var s = n;
                                if (s.selfClosing) {
                                    var o = this.finalize(r, new p.JSXElement(s, [], null));
                                    e.children.push(o)
                                } else t.push(e), e = {
                                    node: r,
                                    opening: s,
                                    closing: null,
                                    children: []
                                }
                            }
                            if (n.type === l.JSXSyntax.JSXClosingElement) {
                                e.closing = n;
                                var a = i(e.opening.name),
                                    u = i(e.closing.name);
                                if (a !== u && this.tolerateError("Expected corresponding JSX closing tag for %0", a), !(t.length > 0)) break;
                                var o = this.finalize(e.node, new p.JSXElement(e.opening, e.children, e.closing));
                                e = t.pop(), e.children.push(o)
                            }
                        }
                        return e
                    }, t.prototype.parseJSXElement = function() {
                        var e = this.createJSXNode(),
                            t = this.parseJSXOpeningElement(),
                            r = [],
                            i = null;
                        if (!t.selfClosing) {
                            var n = this.parseComplexJSXElement({
                                node: e,
                                opening: t,
                                closing: i,
                                children: r
                            });
                            r = n.children, i = n.closing
                        }
                        return this.finalize(e, new p.JSXElement(t, r, i))
                    }, t.prototype.parseJSXRoot = function() {
                        this.config.tokens && this.tokens.pop(), this.startJSX();
                        var e = this.parseJSXElement();
                        return this.finishJSX(), e
                    }, t
                }(u.Parser);
                t.JSXParser = f
            }, function(e, t) {
                "use strict";
                t.XHTMLEntities = {
                    quot: '"',
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    nbsp: " ",
                    iexcl: "¡",
                    cent: "¢",
                    pound: "£",
                    curren: "¤",
                    yen: "¥",
                    brvbar: "¦",
                    sect: "§",
                    uml: "¨",
                    copy: "©",
                    ordf: "ª",
                    laquo: "«",
                    not: "¬",
                    shy: "­",
                    reg: "®",
                    macr: "¯",
                    deg: "°",
                    plusmn: "±",
                    sup2: "²",
                    sup3: "³",
                    acute: "´",
                    micro: "µ",
                    para: "¶",
                    middot: "·",
                    cedil: "¸",
                    sup1: "¹",
                    ordm: "º",
                    raquo: "»",
                    frac14: "¼",
                    frac12: "½",
                    frac34: "¾",
                    iquest: "¿",
                    Agrave: "À",
                    Aacute: "Á",
                    Acirc: "Â",
                    Atilde: "Ã",
                    Auml: "Ä",
                    Aring: "Å",
                    AElig: "Æ",
                    Ccedil: "Ç",
                    Egrave: "È",
                    Eacute: "É",
                    Ecirc: "Ê",
                    Euml: "Ë",
                    Igrave: "Ì",
                    Iacute: "Í",
                    Icirc: "Î",
                    Iuml: "Ï",
                    ETH: "Ð",
                    Ntilde: "Ñ",
                    Ograve: "Ò",
                    Oacute: "Ó",
                    Ocirc: "Ô",
                    Otilde: "Õ",
                    Ouml: "Ö",
                    times: "×",
                    Oslash: "Ø",
                    Ugrave: "Ù",
                    Uacute: "Ú",
                    Ucirc: "Û",
                    Uuml: "Ü",
                    Yacute: "Ý",
                    THORN: "Þ",
                    szlig: "ß",
                    agrave: "à",
                    aacute: "á",
                    acirc: "â",
                    atilde: "ã",
                    auml: "ä",
                    aring: "å",
                    aelig: "æ",
                    ccedil: "ç",
                    egrave: "è",
                    eacute: "é",
                    ecirc: "ê",
                    euml: "ë",
                    igrave: "ì",
                    iacute: "í",
                    icirc: "î",
                    iuml: "ï",
                    eth: "ð",
                    ntilde: "ñ",
                    ograve: "ò",
                    oacute: "ó",
                    ocirc: "ô",
                    otilde: "õ",
                    ouml: "ö",
                    divide: "÷",
                    oslash: "ø",
                    ugrave: "ù",
                    uacute: "ú",
                    ucirc: "û",
                    uuml: "ü",
                    yacute: "ý",
                    thorn: "þ",
                    yuml: "ÿ",
                    OElig: "Œ",
                    oelig: "œ",
                    Scaron: "Š",
                    scaron: "š",
                    Yuml: "Ÿ",
                    fnof: "ƒ",
                    circ: "ˆ",
                    tilde: "˜",
                    Alpha: "Α",
                    Beta: "Β",
                    Gamma: "Γ",
                    Delta: "Δ",
                    Epsilon: "Ε",
                    Zeta: "Ζ",
                    Eta: "Η",
                    Theta: "Θ",
                    Iota: "Ι",
                    Kappa: "Κ",
                    Lambda: "Λ",
                    Mu: "Μ",
                    Nu: "Ν",
                    Xi: "Ξ",
                    Omicron: "Ο",
                    Pi: "Π",
                    Rho: "Ρ",
                    Sigma: "Σ",
                    Tau: "Τ",
                    Upsilon: "Υ",
                    Phi: "Φ",
                    Chi: "Χ",
                    Psi: "Ψ",
                    Omega: "Ω",
                    alpha: "α",
                    beta: "β",
                    gamma: "γ",
                    delta: "δ",
                    epsilon: "ε",
                    zeta: "ζ",
                    eta: "η",
                    theta: "θ",
                    iota: "ι",
                    kappa: "κ",
                    lambda: "λ",
                    mu: "μ",
                    nu: "ν",
                    xi: "ξ",
                    omicron: "ο",
                    pi: "π",
                    rho: "ρ",
                    sigmaf: "ς",
                    sigma: "σ",
                    tau: "τ",
                    upsilon: "υ",
                    phi: "φ",
                    chi: "χ",
                    psi: "ψ",
                    omega: "ω",
                    thetasym: "ϑ",
                    upsih: "ϒ",
                    piv: "ϖ",
                    ensp: " ",
                    emsp: " ",
                    thinsp: " ",
                    zwnj: "‌",
                    zwj: "‍",
                    lrm: "‎",
                    rlm: "‏",
                    ndash: "–",
                    mdash: "—",
                    lsquo: "‘",
                    rsquo: "’",
                    sbquo: "‚",
                    ldquo: "“",
                    rdquo: "”",
                    bdquo: "„",
                    dagger: "†",
                    Dagger: "‡",
                    bull: "•",
                    hellip: "…",
                    permil: "‰",
                    prime: "′",
                    Prime: "″",
                    lsaquo: "‹",
                    rsaquo: "›",
                    oline: "‾",
                    frasl: "⁄",
                    euro: "€",
                    image: "ℑ",
                    weierp: "℘",
                    real: "ℜ",
                    trade: "™",
                    alefsym: "ℵ",
                    larr: "←",
                    uarr: "↑",
                    rarr: "→",
                    darr: "↓",
                    harr: "↔",
                    crarr: "↵",
                    lArr: "⇐",
                    uArr: "⇑",
                    rArr: "⇒",
                    dArr: "⇓",
                    hArr: "⇔",
                    forall: "∀",
                    part: "∂",
                    exist: "∃",
                    empty: "∅",
                    nabla: "∇",
                    isin: "∈",
                    notin: "∉",
                    ni: "∋",
                    prod: "∏",
                    sum: "∑",
                    minus: "−",
                    lowast: "∗",
                    radic: "√",
                    prop: "∝",
                    infin: "∞",
                    ang: "∠",
                    and: "∧",
                    or: "∨",
                    cap: "∩",
                    cup: "∪",
                    int: "∫",
                    there4: "∴",
                    sim: "∼",
                    cong: "≅",
                    asymp: "≈",
                    ne: "≠",
                    equiv: "≡",
                    le: "≤",
                    ge: "≥",
                    sub: "⊂",
                    sup: "⊃",
                    nsub: "⊄",
                    sube: "⊆",
                    supe: "⊇",
                    oplus: "⊕",
                    otimes: "⊗",
                    perp: "⊥",
                    sdot: "⋅",
                    lceil: "⌈",
                    rceil: "⌉",
                    lfloor: "⌊",
                    rfloor: "⌋",
                    loz: "◊",
                    spades: "♠",
                    clubs: "♣",
                    hearts: "♥",
                    diams: "♦",
                    lang: "⟨",
                    rang: "⟩"
                }
            }, function(e, t) {
                "use strict";
                t.JSXSyntax = {
                    JSXAttribute: "JSXAttribute",
                    JSXClosingElement: "JSXClosingElement",
                    JSXElement: "JSXElement",
                    JSXEmptyExpression: "JSXEmptyExpression",
                    JSXExpressionContainer: "JSXExpressionContainer",
                    JSXIdentifier: "JSXIdentifier",
                    JSXMemberExpression: "JSXMemberExpression",
                    JSXNamespacedName: "JSXNamespacedName",
                    JSXOpeningElement: "JSXOpeningElement",
                    JSXSpreadAttribute: "JSXSpreadAttribute",
                    JSXText: "JSXText"
                }
            }, function(e, t, r) {
                "use strict";
                var i = r(13),
                    n = function() {
                        function e(e) {
                            this.type = i.JSXSyntax.JSXClosingElement, this.name = e
                        }
                        return e
                    }();
                t.JSXClosingElement = n;
                var s = function() {
                    function e(e, t, r) {
                        this.type = i.JSXSyntax.JSXElement, this.openingElement = e, this.children = t, this.closingElement = r
                    }
                    return e
                }();
                t.JSXElement = s;
                var o = function() {
                    function e() {
                        this.type = i.JSXSyntax.JSXEmptyExpression
                    }
                    return e
                }();
                t.JSXEmptyExpression = o;
                var a = function() {
                    function e(e) {
                        this.type = i.JSXSyntax.JSXExpressionContainer, this.expression = e
                    }
                    return e
                }();
                t.JSXExpressionContainer = a;
                var u = function() {
                    function e(e) {
                        this.type = i.JSXSyntax.JSXIdentifier, this.name = e
                    }
                    return e
                }();
                t.JSXIdentifier = u;
                var c = function() {
                    function e(e, t) {
                        this.type = i.JSXSyntax.JSXMemberExpression, this.object = e, this.property = t
                    }
                    return e
                }();
                t.JSXMemberExpression = c;
                var l = function() {
                    function e(e, t) {
                        this.type = i.JSXSyntax.JSXAttribute, this.name = e, this.value = t
                    }
                    return e
                }();
                t.JSXAttribute = l;
                var h = function() {
                    function e(e, t) {
                        this.type = i.JSXSyntax.JSXNamespacedName, this.namespace = e, this.name = t
                    }
                    return e
                }();
                t.JSXNamespacedName = h;
                var p = function() {
                    function e(e, t, r) {
                        this.type = i.JSXSyntax.JSXOpeningElement, this.name = e, this.selfClosing = t, this.attributes = r
                    }
                    return e
                }();
                t.JSXOpeningElement = p;
                var f = function() {
                    function e(e) {
                        this.type = i.JSXSyntax.JSXSpreadAttribute, this.argument = e
                    }
                    return e
                }();
                t.JSXSpreadAttribute = f;
                var d = function() {
                    function e(e, t) {
                        this.type = i.JSXSyntax.JSXText, this.value = e, this.raw = t
                    }
                    return e
                }();
                t.JSXText = d
            }, function(e, t, r) {
                "use strict";
                var i = r(8),
                    n = r(6),
                    s = r(7),
                    o = function() {
                        function e() {
                            this.values = [], this.curly = this.paren = -1
                        }
                        return e.prototype.beforeFunctionExpression = function(e) {
                            return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e) >= 0
                        }, e.prototype.isRegexStart = function() {
                            var e = this.values[this.values.length - 1],
                                t = null !== e;
                            switch (e) {
                                case "this":
                                case "]":
                                    t = !1;
                                    break;
                                case ")":
                                    var r = this.values[this.paren - 1];
                                    t = "if" === r || "while" === r || "for" === r || "with" === r;
                                    break;
                                case "}":
                                    if (t = !1, "function" === this.values[this.curly - 3]) {
                                        var i = this.values[this.curly - 4];
                                        t = !!i && !this.beforeFunctionExpression(i)
                                    } else if ("function" === this.values[this.curly - 4]) {
                                        var n = this.values[this.curly - 5];
                                        t = !n || !this.beforeFunctionExpression(n)
                                    }
                            }
                            return t
                        }, e.prototype.push = function(e) {
                            e.type === s.Token.Punctuator || e.type === s.Token.Keyword ? ("{" === e.value ? this.curly = this.values.length : "(" === e.value && (this.paren = this.values.length), this.values.push(e.value)) : this.values.push(null)
                        }, e
                    }(),
                    a = function() {
                        function e(e, t) {
                            this.errorHandler = new n.ErrorHandler, this.errorHandler.tolerant = !!t && ("boolean" == typeof t.tolerant && t.tolerant), this.scanner = new i.Scanner(e, this.errorHandler), this.scanner.trackComment = !!t && ("boolean" == typeof t.comment && t.comment), this.trackRange = !!t && ("boolean" == typeof t.range && t.range), this.trackLoc = !!t && ("boolean" == typeof t.loc && t.loc), this.buffer = [], this.reader = new o
                        }
                        return e.prototype.errors = function() {
                            return this.errorHandler.errors
                        }, e.prototype.getNextToken = function() {
                            if (0 === this.buffer.length) {
                                var e = this.scanner.scanComments();
                                if (this.scanner.trackComment)
                                    for (var t = 0; t < e.length; ++t) {
                                        var r = e[t],
                                            i = void 0,
                                            n = this.scanner.source.slice(r.slice[0], r.slice[1]);
                                        i = {
                                            type: r.multiLine ? "BlockComment" : "LineComment",
                                            value: n
                                        }, this.trackRange && (i.range = r.range), this.trackLoc && (i.loc = r.loc), this.buffer.push(i)
                                    }
                                if (!this.scanner.eof()) {
                                    var o = void 0;
                                    this.trackLoc && (o = {
                                        start: {
                                            line: this.scanner.lineNumber,
                                            column: this.scanner.index - this.scanner.lineStart
                                        },
                                        end: {}
                                    });
                                    var a = void 0;
                                    a = "/" === this.scanner.source[this.scanner.index] ? this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.scanPunctuator() : this.scanner.lex(), this.reader.push(a);
                                    var u = void 0;
                                    u = {
                                        type: s.TokenName[a.type],
                                        value: this.scanner.source.slice(a.start, a.end)
                                    }, this.trackRange && (u.range = [a.start, a.end]), this.trackLoc && (o.end = {
                                        line: this.scanner.lineNumber,
                                        column: this.scanner.index - this.scanner.lineStart
                                    }, u.loc = o), a.regex && (u.regex = a.regex), this.buffer.push(u)
                                }
                            }
                            return this.buffer.shift()
                        }, e
                    }();
                t.Tokenizer = a
            }])
        })
    }, function(e, t, r) {
        "use strict";

        function i(e, t) {
            var r, i, n, s, o, a, u;
            if (null === t) return {};
            for (r = {}, i = Object.keys(t), n = 0, s = i.length; n < s; n += 1) o = i[n], a = String(t[o]), "!!" === o.slice(0, 2) && (o = "tag:yaml.org,2002:" + o.slice(2)), u = e.compiledTypeMap.fallback[o], u && O.call(u.styleAliases, a) && (a = u.styleAliases[a]), r[o] = a;
            return r
        }

        function n(e) {
            var t, r, i;
            if (t = e.toString(16).toUpperCase(), e <= 255) r = "x", i = 2;
            else if (e <= 65535) r = "u", i = 4;
            else {
                if (!(e <= 4294967295)) throw new N("code point within a string may not be greater than 0xFFFFFFFF");
                r = "U", i = 8
            }
            return "\\" + r + B.repeat("0", i - t.length) + t
        }

        function s(e) {
            this.schema = e.schema || I, this.indent = Math.max(1, e.indent || 2), this.skipInvalid = e.skipInvalid || !1, this.flowLevel = B.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = i(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
        }

        function o(e, t) {
            for (var r, i = B.repeat(" ", t), n = 0, s = -1, o = "", a = e.length; n < a;) s = e.indexOf("\n", n), s === -1 ? (r = e.slice(n), n = a) : (r = e.slice(n, s + 1), n = s + 1), r.length && "\n" !== r && (o += i), o += r;
            return o
        }

        function a(e, t) {
            return "\n" + B.repeat(" ", e.indent * t)
        }

        function u(e, t) {
            var r, i, n;
            for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
                if (n = e.implicitTypes[r], n.resolve(t)) return !0;
            return !1
        }

        function c(e) {
            return e === U || e === L
        }

        function l(e) {
            return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111
        }

        function h(e) {
            return l(e) && 65279 !== e && e !== W && e !== Z && e !== Q && e !== te && e !== ie && e !== q && e !== j
        }

        function p(e) {
            return l(e) && 65279 !== e && !c(e) && e !== H && e !== V && e !== q && e !== W && e !== Z && e !== Q && e !== te && e !== ie && e !== j && e !== J && e !== K && e !== _ && e !== re && e !== G && e !== Y && e !== z && e !== X && e !== $ && e !== ee
        }

        function f(e, t, r, i, n) {
            var s, o, a = !1,
                u = !1,
                f = i !== -1,
                d = -1,
                m = p(e.charCodeAt(0)) && !c(e.charCodeAt(e.length - 1));
            if (t)
                for (s = 0; s < e.length; s++) {
                    if (o = e.charCodeAt(s), !l(o)) return le;
                    m = m && h(o)
                } else {
                    for (s = 0; s < e.length; s++) {
                        if (o = e.charCodeAt(s), o === R) a = !0, f && (u = u || s - d - 1 > i && " " !== e[d + 1], d = s);
                        else if (!l(o)) return le;
                        m = m && h(o)
                    }
                    u = u || f && s - d - 1 > i && " " !== e[d + 1]
                }
            return a || u ? " " === e[0] && r > 9 ? le : u ? ce : ue : m && !n(e) ? oe : ae
        }

        function d(e, t, r, i) {
            e.dump = function() {
                function n(t) {
                    return u(e, t)
                }
                if (0 === t.length) return "''";
                if (!e.noCompatMode && se.indexOf(t) !== -1) return "'" + t + "'";
                var s = e.indent * Math.max(1, r),
                    a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s),
                    c = i || e.flowLevel > -1 && r >= e.flowLevel;
                switch (f(t, c, e.indent, a, n)) {
                    case oe:
                        return t;
                    case ae:
                        return "'" + t.replace(/'/g, "''") + "'";
                    case ue:
                        return "|" + m(t, e.indent) + g(o(t, s));
                    case ce:
                        return ">" + m(t, e.indent) + g(o(x(t, a), s));
                    case le:
                        return '"' + D(t, a) + '"';
                    default:
                        throw new N("impossible error: invalid scalar style")
                }
            }()
        }

        function m(e, t) {
            var r = " " === e[0] ? String(t) : "",
                i = "\n" === e[e.length - 1],
                n = i && ("\n" === e[e.length - 2] || "\n" === e),
                s = n ? "+" : i ? "" : "-";
            return r + s + "\n"
        }

        function g(e) {
            return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
        }

        function x(e, t) {
            for (var r, i, n = /(\n+)([^\n]*)/g, s = function() {
                    var r = e.indexOf("\n");
                    return r = r !== -1 ? r : e.length, n.lastIndex = r, y(e.slice(0, r), t)
                }(), o = "\n" === e[0] || " " === e[0]; i = n.exec(e);) {
                var a = i[1],
                    u = i[2];
                r = " " === u[0], s += a + (o || r || "" === u ? "" : "\n") + y(u, t), o = r
            }
            return s
        }

        function y(e, t) {
            if ("" === e || " " === e[0]) return e;
            for (var r, i, n = / [^ ]/g, s = 0, o = 0, a = 0, u = ""; r = n.exec(e);) a = r.index, a - s > t && (i = o > s ? o : a, u += "\n" + e.slice(s, i), s = i + 1), o = a;
            return u += "\n", u += e.length - s > t && o > s ? e.slice(s, o) + "\n" + e.slice(o + 1) : e.slice(s), u.slice(1)
        }

        function D(e) {
            for (var t, r, i = "", s = 0; s < e.length; s++) t = e.charCodeAt(s), r = ne[t], i += !r && l(t) ? e[s] : r || n(t);
            return i
        }

        function b(e, t, r) {
            var i, n, s = "",
                o = e.tag;
            for (i = 0, n = r.length; i < n; i += 1) A(e, t, r[i], !1, !1) && (0 !== i && (s += ", "), s += e.dump);
            e.tag = o, e.dump = "[" + s + "]"
        }

        function v(e, t, r, i) {
            var n, s, o = "",
                u = e.tag;
            for (n = 0, s = r.length; n < s; n += 1) A(e, t + 1, r[n], !0, !0) && (i && 0 === n || (o += a(e, t)), o += e.dump && R === e.dump.charCodeAt(0) ? "-" : "- ", o += e.dump);
            e.tag = u, e.dump = o || "[]"
        }

        function w(e, t, r) {
            var i, n, s, o, a, u = "",
                c = e.tag,
                l = Object.keys(r);
            for (i = 0, n = l.length; i < n; i += 1) a = "", 0 !== i && (a += ", "), s = l[i], o = r[s], A(e, t, s, !1, !1) && (e.dump.length > 1024 && (a += "? "), a += e.dump + ": ", A(e, t, o, !1, !1) && (a += e.dump, u += a));
            e.tag = c, e.dump = "{" + u + "}"
        }

        function E(e, t, r, i) {
            var n, s, o, u, c, l, h = "",
                p = e.tag,
                f = Object.keys(r);
            if (e.sortKeys === !0) f.sort();
            else if ("function" == typeof e.sortKeys) f.sort(e.sortKeys);
            else if (e.sortKeys) throw new N("sortKeys must be a boolean or a function");
            for (n = 0, s = f.length; n < s; n += 1) l = "", i && 0 === n || (l += a(e, t)), o = f[n], u = r[o], A(e, t + 1, o, !0, !0, !0) && (c = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024, c && (l += e.dump && R === e.dump.charCodeAt(0) ? "?" : "? "), l += e.dump, c && (l += a(e, t)), A(e, t + 1, u, !0, c) && (l += e.dump && R === e.dump.charCodeAt(0) ? ":" : ": ", l += e.dump, h += l));
            e.tag = p, e.dump = h || "{}"
        }

        function k(e, t, r) {
            var i, n, s, o, a, u;
            for (n = r ? e.explicitTypes : e.implicitTypes, s = 0, o = n.length; s < o; s += 1)
                if (a = n[s], (a.instanceOf || a.predicate) && (!a.instanceOf || "object" == typeof t && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
                    if (e.tag = r ? a.tag : "?", a.represent) {
                        if (u = e.styleMap[a.tag] || a.defaultStyle, "[object Function]" === M.call(a.represent)) i = a.represent(t, u);
                        else {
                            if (!O.call(a.represent, u)) throw new N("!<" + a.tag + '> tag resolver accepts not "' + u + '" style');
                            i = a.represent[u](t, u)
                        }
                        e.dump = i
                    }
                    return !0
                }
            return !1
        }

        function A(e, t, r, i, n, s) {
            e.tag = null, e.dump = r, k(e, r, !1) || k(e, r, !0);
            var o = M.call(e.dump);
            i && (i = e.flowLevel < 0 || e.flowLevel > t);
            var a, u, c = "[object Object]" === o || "[object Array]" === o;
            if (c && (a = e.duplicates.indexOf(r), u = a !== -1), (null !== e.tag && "?" !== e.tag || u || 2 !== e.indent && t > 0) && (n = !1), u && e.usedDuplicates[a]) e.dump = "*ref_" + a;
            else {
                if (c && u && !e.usedDuplicates[a] && (e.usedDuplicates[a] = !0), "[object Object]" === o) i && 0 !== Object.keys(e.dump).length ? (E(e, t, e.dump, n), u && (e.dump = "&ref_" + a + e.dump)) : (w(e, t, e.dump), u && (e.dump = "&ref_" + a + " " + e.dump));
                else if ("[object Array]" === o) i && 0 !== e.dump.length ? (v(e, t, e.dump, n), u && (e.dump = "&ref_" + a + e.dump)) : (b(e, t, e.dump), u && (e.dump = "&ref_" + a + " " + e.dump));
                else {
                    if ("[object String]" !== o) {
                        if (e.skipInvalid) return !1;
                        throw new N("unacceptable kind of an object to dump " + o)
                    }
                    "?" !== e.tag && d(e, e.dump, t, s)
                }
                null !== e.tag && "?" !== e.tag && (e.dump = "!<" + e.tag + "> " + e.dump)
            }
            return !0
        }

        function C(e, t) {
            var r, i, n = [],
                s = [];
            for (S(e, n, s), r = 0, i = s.length; r < i; r += 1) t.duplicates.push(n[s[r]]);
            t.usedDuplicates = new Array(i)
        }

        function S(e, t, r) {
            var i, n, s;
            if (null !== e && "object" == typeof e)
                if (n = t.indexOf(e), n !== -1) r.indexOf(n) === -1 && r.push(n);
                else if (t.push(e), Array.isArray(e))
                for (n = 0, s = e.length; n < s; n += 1) S(e[n], t, r);
            else
                for (i = Object.keys(e), n = 0, s = i.length; n < s; n += 1) S(e[i[n]], t, r)
        }

        function F(e, t) {
            t = t || {};
            var r = new s(t);
            return r.noRefs || C(e, r), A(r, 0, e, !0, !0) ? r.dump + "\n" : ""
        }

        function T(e, t) {
            return F(e, B.extend({
                schema: P
            }, t))
        }
        var B = r(44),
            N = r(45),
            I = r(70),
            P = r(47),
            M = Object.prototype.toString,
            O = Object.prototype.hasOwnProperty,
            L = 9,
            R = 10,
            U = 32,
            _ = 33,
            z = 34,
            j = 35,
            X = 37,
            J = 38,
            Y = 39,
            K = 42,
            W = 44,
            H = 45,
            q = 58,
            G = 62,
            V = 63,
            $ = 64,
            Z = 91,
            Q = 93,
            ee = 96,
            te = 123,
            re = 124,
            ie = 125,
            ne = {};
        ne[0] = "\\0", ne[7] = "\\a", ne[8] = "\\b", ne[9] = "\\t", ne[10] = "\\n", ne[11] = "\\v", ne[12] = "\\f", ne[13] = "\\r", ne[27] = "\\e", ne[34] = '\\"', ne[92] = "\\\\", ne[133] = "\\N", ne[160] = "\\_", ne[8232] = "\\L", ne[8233] = "\\P";
        var se = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
            oe = 1,
            ae = 2,
            ue = 3,
            ce = 4,
            le = 5;
        e.exports.dump = F, e.exports.safeDump = T
    }, function(e, t) {
        e.exports = '---\nurl: "http://petstore.swagger.io/v2/swagger.json"\ndom_id: "#swagger-ui"\nvalidatorUrl: "https://online.swagger.io/validator"\noauth2RedirectUrl: "http://localhost:3200/oauth2-redirect.html"\n'
    }])
});
//# sourceMappingURL=swagger-ui-standalone-preset.js.map
