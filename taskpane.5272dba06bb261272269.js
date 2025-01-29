/*! For license information please see taskpane.5272dba06bb261272269.js.LICENSE.txt */
(() => {
    "use strict";
    var e, t, n, r, o, a = {
            14385: e => {
                e.exports = function(e, t) {
                    return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
                }
            },
            98362: (e, t, n) => {
                e.exports = n.p + "assets/logo-filled.png"
            },
            60947: (e, t, n) => {
                e.exports = n.p + "fdb58264fb885a02976a.js"
            },
            58394: (e, t, n) => {
                e.exports = n.p + "dfdaaa4bf146369082c6.css"
            }
        },
        i = {};

    function c(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var n = i[e] = {
            exports: {}
        };
        return a[e](n, n.exports, c), n.exports
    }
    c.m = a, c.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return c.d(t, {
            a: t
        }), t
    }, c.d = (e, t) => {
        for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), c.p = "https://actuelia.sharepoint.com/sites/Planning/Documents%20partages/Planning%2020_01/Planning%20Actuelia/", c.b = document.baseURI || self.location.href, (() => {
        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e(t)
        }

        function t() {
            t = function() {
                return r
            };
            var n, r = {},
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                c = "function" == typeof Symbol ? Symbol : {},
                s = c.iterator || "@@iterator",
                u = c.asyncIterator || "@@asyncIterator",
                l = c.toStringTag || "@@toStringTag";

            function f(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                f({}, "")
            } catch (n) {
                f = function(e, t, n) {
                    return e[t] = n
                }
            }

            function d(e, t, n, r) {
                var o = t && t.prototype instanceof x ? t : x,
                    a = Object.create(o.prototype),
                    c = new A(r || []);
                return i(a, "_invoke", {
                    value: S(e, n, c)
                }), a
            }

            function g(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            r.wrap = d;
            var p = "suspendedStart",
                h = "suspendedYield",
                y = "executing",
                v = "completed",
                m = {};

            function x() {}

            function b() {}

            function w() {}
            var E = {};
            f(E, s, (function() {
                return this
            }));
            var k = Object.getPrototypeOf,
                L = k && k(k(N([])));
            L && L !== o && a.call(L, s) && (E = L);
            var I = w.prototype = x.prototype = Object.create(E);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    f(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(t, n) {
                function r(o, i, c, s) {
                    var u = g(t[o], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg,
                            f = l.value;
                        return f && "object" == e(f) && a.call(f, "__await") ? n.resolve(f.__await).then((function(e) {
                            r("next", e, c, s)
                        }), (function(e) {
                            r("throw", e, c, s)
                        })) : n.resolve(f).then((function(e) {
                            l.value = e, c(l)
                        }), (function(e) {
                            return r("throw", e, c, s)
                        }))
                    }
                    s(u.arg)
                }
                var o;
                i(this, "_invoke", {
                    value: function(e, t) {
                        function a() {
                            return new n((function(n, o) {
                                r(e, t, n, o)
                            }))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                })
            }

            function S(e, t, r) {
                var o = p;
                return function(a, i) {
                    if (o === y) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === a) throw i;
                        return {
                            value: n,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = _(c, r);
                            if (s) {
                                if (s === m) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === p) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = y;
                        var u = g(e, t, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? v : h, u.arg === m) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = v, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function _(e, t) {
                var r = t.method,
                    o = e.iterator[r];
                if (o === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = n, _(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                var a = g(o, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, m;
                var i = a.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
            }

            function M(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function j(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(M, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var r = t[s];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            i = function e() {
                                for (; ++o < t.length;)
                                    if (a.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                throw new TypeError(e(t) + " is not iterable")
            }
            return b.prototype = w, i(I, "constructor", {
                value: w,
                configurable: !0
            }), i(w, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = f(w, l, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }, r.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, f(e, l, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, r.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), f(O.prototype, u, (function() {
                return this
            })), r.AsyncIterator = O, r.async = function(e, t, n, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(d(e, t, n, o), a);
                return r.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), f(I, l, "Generator"), f(I, s, (function() {
                return this
            })), f(I, "toString", (function() {
                return "[object Generator]"
            })), r.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, r.values = N, A.prototype = {
                constructor: A,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(j), !e)
                        for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(r, o) {
                        return c.type = "throw", c.arg = e, t.next = r, o && (t.method = "next", t.arg = n), !!o
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            c = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = a.call(i, "catchLoc"),
                                u = a.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = n), m
                }
            }, r
        }

        function n(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function r(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(o, a) {
                    var i = e.apply(t, r);

                    function c(e) {
                        n(i, o, a, c, s, "next", e)
                    }

                    function s(e) {
                        n(i, o, a, c, s, "throw", e)
                    }
                    c(void 0)
                }))
            }
        }

        function o() {
            return a.apply(this, arguments)
        }

        function a() {
            return a = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, c, s, u, l, f, d;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, r = n.workbook, o = r.worksheets.getActiveWorksheet(), e.next = 5, o.load("name");
                                            case 5:
                                                return e.next = 7, n.sync();
                                            case 7:
                                                return o.protection.unprotect(), o.getRange().format.protection.locked = !0, a = o.getRange("B:B").getUsedRange(), e.next = 12, a.load("rowCount");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (ve.debug && console.log("nb val colonne B :", a.rowCount), "2. Planning - Consultant" !== o.name) {
                                                    e.next = 32;
                                                    break
                                                }
                                                if (i = a.rowCount - 9, ve.debug && console.log("nbMissions :", i), o.getRange("B2:B3").format.protection.locked = !1, !(i > 0)) {
                                                    e.next = 32;
                                                    break
                                                }
                                                return c = o.getRange("E10"), s = o.getCell(9 + i, 81), e.next = 26, c.load("address");
                                            case 26:
                                                return e.next = 28, s.load("address");
                                            case 28:
                                                return e.next = 30, n.sync();
                                            case 30:
                                                o.getRange(c.address + ":" + s.address).format.protection.locked = !1;
                                            case 32:
                                                if ("2. Planning - Missions" !== o.name) {
                                                    e.next = 60;
                                                    break
                                                }
                                                return e.next = 35, a.load("values");
                                            case 35:
                                                return e.next = 37, n.sync();
                                            case 37:
                                                return ve.debug && (console.log("val colonne B :", a.values.flat()), console.log("val colonne B :", a.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })))), u = a.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 3, ve.debug && console.log("nb Consultants :", u), l = o.getRange("B2"), e.next = 44, l.load("values");
                                            case 44:
                                                return e.next = 46, n.sync();
                                            case 46:
                                                if (l.format.protection.locked = !1, "00 - Congés/jours fériés" === l.values[0][0]) {
                                                    e.next = 60;
                                                    break
                                                }
                                                return f = o.getRange("E9"), d = o.getCell(7 + u, 81), e.next = 52, f.load("address");
                                            case 52:
                                                return e.next = 54, d.load("address");
                                            case 54:
                                                return e.next = 56, n.sync();
                                            case 56:
                                                ve.debug && console.log("Plage à débloquer :", f.address + ":" + d.address), o.getRange(f.address + ":" + d.address).format.protection.locked = !1;
                                            case 60:
                                                return o.protection.protect(), ve.debug && console.log("Feuille", o.name, "protégée"), e.next = 65, n.sync();
                                            case 65:
                                                ve.debug = !0;
                                            case 66:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de formatProtection :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), a.apply(this, arguments)
        }

        function i() {
            return s.apply(this, arguments)
        }

        function s() {
            return s = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, c, s, u, l, f, d, g, p, h, y, v, m, x, b, w, E, k;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, r = n.workbook, (o = r.worksheets.getItem("2. Planning - Missions")).protection.unprotect(), a = r.names.getItem("Modif_Missions").getRange(), e.next = 7, a.load("address, formatConditions, rowIndex, rowCount, columnCount");
                                            case 7:
                                                return e.next = 9, n.sync();
                                            case 9:
                                                return i = o.getCell(a.rowIndex + a.rowCount - 1, a.columnCount + 3), e.next = 12, i.load("address");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                return c = a.conditionalFormats, e.next = 17, c.load("items");
                                            case 17:
                                                return e.next = 19, n.sync();
                                            case 19:
                                                return s = "B".concat(a.rowIndex + 1, ":").concat(i.address), ve.debug && (console.log("modifMissionsRange :", a.address), console.log("globalVar.debug sRange: ", s)), u = o.getRange(s), e.next = 24, u.load("address");
                                            case 24:
                                                return e.next = 26, n.sync();
                                            case 26:
                                                l = c.items.length, f = 0;
                                            case 28:
                                                if (!(f < l)) {
                                                    e.next = 48;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(f, " sur ").concat(l)), d = c.getItemAt(f), e.next = 34, n.sync();
                                            case 34:
                                                return ve.debug && (console.log("Format condition", d), console.log("Ancienne plage :", d.address)), d.setRanges(u), e.next = 38, n.sync();
                                            case 38:
                                                return g = d.getRanges(), e.next = 41, g.load("address");
                                            case 41:
                                                return e.next = 43, n.sync();
                                            case 43:
                                                ve.debug && console.log("Nouvelle plage :", g.address);
                                            case 45:
                                                f++, e.next = 28;
                                                break;
                                            case 48:
                                                return p = r.names.getItemOrNullObject("Nb_Consultants"), e.next = 51, p.load("value");
                                            case 51:
                                                return e.next = 53, n.sync();
                                            case 53:
                                                if (p.isNullObject) {
                                                    e.next = 57;
                                                    break
                                                }
                                                h = p.value, e.next = 58;
                                                break;
                                            case 57:
                                                throw new Error("Le nom 'nbConsultants' n'existe pas dans le classeur");
                                            case 58:
                                                return ve.debug && console.log("nbConsultants cabinet:", h), y = o.getRange("B:B").getUsedRange(), e.next = 62, y.load("values");
                                            case 62:
                                                return e.next = 64, n.sync();
                                            case 64:
                                                return v = y.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 3, ve.debug && (console.log("val colonne B :", y.values.flat()), console.log("val colonne B :", y.values.flat().filter((function(e) {
                                                    return "" !== e
                                                }))), console.log("nb Consultants mission:", v)), m = o.getRange("C".concat(9)), x = o.getRange("C".concat(8 + h)), e.next = 70, m.load("address");
                                            case 70:
                                                return e.next = 72, x.load("address");
                                            case 72:
                                                return e.next = 74, n.sync();
                                            case 74:
                                                return b = o.getRange(m.address + ":" + x.address), ve.debug && console.log("Plage à cacher :", m.address + ":" + x.address), e.next = 79, b.load("address, rowIndex, rowCount");
                                            case 79:
                                                return e.next = 81, n.sync();
                                            case 81:
                                                if (o.getRange("".concat(b.rowIndex + 1, ":").concat(b.rowIndex + b.rowCount - 1)).rowHidden = !1, !(v < h)) {
                                                    e.next = 102;
                                                    break
                                                }
                                                return w = o.getRange("C".concat(9 + v)), E = o.getRange("C".concat(9 + h)), e.next = 88, w.load("address");
                                            case 88:
                                                return e.next = 90, E.load("address");
                                            case 90:
                                                return e.next = 92, n.sync();
                                            case 92:
                                                return k = o.getRange(w.address + ":" + E.address), ve.debug && console.log("Plage à cacher :", w.address + ":" + E.address), e.next = 97, k.load("address, rowIndex, rowCount");
                                            case 97:
                                                return e.next = 99, n.sync();
                                            case 99:
                                                ve.debug && (console.log("adresse rangeToHide", k.address), console.log("rangetohide.entireRow", k.entireRow)), o.getRange("".concat(k.rowIndex + 1, ":").concat(k.rowIndex + k.rowCount - 1)).rowHidden = !0;
                                            case 102:
                                                return e.next = 104, n.sync();
                                            case 104:
                                                return o.getRange("B3").select(), o.protection.protect(), e.next = 109, n.sync();
                                            case 109:
                                                ve.debug = !0;
                                            case 110:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de formatMissions :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), s.apply(this, arguments)
        }

        function u() {
            return l.apply(this, arguments)
        }

        function l() {
            return l = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, c, s, u, l, f, d, g, p;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, r = n.workbook, o = r.worksheets.getItem("2. Planning - Consultant"), a = r.names.getItem("Modif_Consultant").getRange(), e.next = 6, a.load("address, conditionalFormats, rowIndex, rowCount, columnCount");
                                            case 6:
                                                return e.next = 8, n.sync();
                                            case 8:
                                                return ve.debug && console.log("Modif_Consultant :", a.address, "\nFormats conditionnels :", a.conditionalFormats), i = a.conditionalFormats, e.next = 13, i.load("items");
                                            case 13:
                                                return e.next = 15, n.sync();
                                            case 15:
                                                return c = o.getCell(a.rowIndex + a.rowCount - 1, a.columnCount + 3), e.next = 18, c.load("address");
                                            case 18:
                                                return e.next = 20, n.sync();
                                            case 20:
                                                return s = "B".concat(a.rowIndex + 1, ":").concat(c.address), ve.debug && (console.log("modifMissionsRange :", a.address), console.log("globalVar.debug sRange: ", s)), u = o.getRange(s), e.next = 25, u.load("address");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                l = i.items.length, ve.debug && console.log("Nombre de formats conditionnels trouvés : ".concat(l)), f = 0;
                                            case 31:
                                                if (!(f < l)) {
                                                    e.next = 59;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(f, " sur ").concat(l)), d = i.getItemAt(f), e.next = 37, n.sync();
                                            case 37:
                                                return e.next = 39, n.sync();
                                            case 39:
                                                if (!ve.debug) {
                                                    e.next = 46;
                                                    break
                                                }
                                                return g = d.getRanges(), e.next = 43, g.load("address");
                                            case 43:
                                                return e.next = 45, n.sync();
                                            case 45:
                                                console.log("Ancienne plage :", g.address);
                                            case 46:
                                                return d.setRanges(u), e.next = 49, n.sync();
                                            case 49:
                                                if (!ve.debug) {
                                                    e.next = 56;
                                                    break
                                                }
                                                return p = d.getRanges(), e.next = 53, p.load("address");
                                            case 53:
                                                return e.next = 55, n.sync();
                                            case 55:
                                                console.log("Nouvelle plage :", p.address);
                                            case 56:
                                                f++, e.next = 31;
                                                break;
                                            case 59:
                                                return e.next = 61, n.sync();
                                            case 61:
                                                ve.debug && console.log("Format_Consultants appliqué avec succès."), ve.debug = !0;
                                            case 64:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de formatConsultants :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), l.apply(this, arguments)
        }

        function f(e, t) {
            return d.apply(this, arguments)
        }

        function d() {
            return d = r(t().mark((function e(n, o) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(r) {
                                    var a, i, c, s, u, l, f, d, g, p, h;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, a = r.workbook, (i = a.worksheets.getItem(n)).protection.unprotect(), c = i.getRange("C".concat(o, ":XFD").concat(o)).getUsedRange(), e.next = 7, c.load("values");
                                            case 7:
                                                return e.next = 9, r.sync();
                                            case 9:
                                                return ve.debug && console.log("Ligne semaine val", c.values.flat()), s = a.names.getItem("Aujourdhui").getRange(), e.next = 13, s.load("values");
                                            case 13:
                                                return e.next = 15, r.sync();
                                            case 15:
                                                if (ve.debug && console.log("Date :", s.values[0][0]), u = s.values[0][0], l = c.values.flat().filter((function(e) {
                                                        return "" !== e
                                                    })), f = l.findIndex((function(e) {
                                                        return e === u
                                                    })) - 2, ve.debug && console.log("Nombre de semaines (colonnes) à masquer", f), !(f >= 0)) {
                                                    e.next = 52;
                                                    break
                                                }
                                                return d = i.getCell(0, f + 3), g = i.getCell(0, 4), e.next = 25, d.load("address");
                                            case 25:
                                                return e.next = 27, g.load("address");
                                            case 27:
                                                return e.next = 29, r.sync();
                                            case 29:
                                                if (p = i.getRange("".concat(d.address, ":").concat(g.address)), !ve.debug) {
                                                    e.next = 36;
                                                    break
                                                }
                                                return e.next = 33, p.load("address");
                                            case 33:
                                                return e.next = 35, r.sync();
                                            case 35:
                                                console.log("Colonnes à masquer :", p.address);
                                            case 36:
                                                return e.next = 38, p.load("columnIndex, columnCount");
                                            case 38:
                                                return e.next = 40, r.sync();
                                            case 40:
                                                if (ve.debug && (console.log("adresse rangeToHide", p.address), console.log("rangetohide.entireColumn", p.entireColumn)), h = i.getRangeByIndexes(0, p.columnIndex, 1, p.columnCount), !ve.debug) {
                                                    e.next = 49;
                                                    break
                                                }
                                                return e.next = 45, h.load("address");
                                            case 45:
                                                return e.next = 47, r.sync();
                                            case 47:
                                                console.log("Adresse de la plage à masquer :", h.address), console.log("entireColumn", h);
                                            case 49:
                                                return h.columnHidden = !0, e.next = 52, r.sync();
                                            case 52:
                                                return i.protection.protect({
                                                    allowFiltering: !0
                                                }), e.next = 55, r.sync();
                                            case 55:
                                                ve.debug = !0;
                                            case 56:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de formatSemaine :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), d.apply(this, arguments)
        }

        function g(e) {
            return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, g(e)
        }

        function p() {
            p = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof x ? t : x,
                    i = Object.create(a.prototype),
                    c = new A(r || []);
                return o(i, "_invoke", {
                    value: S(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                h = "suspendedYield",
                y = "executing",
                v = "completed",
                m = {};

            function x() {}

            function b() {}

            function w() {}
            var E = {};
            u(E, i, (function() {
                return this
            }));
            var k = Object.getPrototypeOf,
                L = k && k(k(N([])));
            L && L !== n && r.call(L, i) && (E = L);
            var I = w.prototype = x.prototype = Object.create(E);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == g(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function S(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === y) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = _(c, r);
                            if (s) {
                                if (s === m) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = y;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? v : h, u.arg === m) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = v, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function _(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, _(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, m;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
            }

            function M(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function j(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(M, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(g(t) + " is not iterable")
            }
            return b.prototype = w, o(I, "constructor", {
                value: w,
                configurable: !0
            }), o(w, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = u(w, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, u(e, s, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), u(O.prototype, c, (function() {
                return this
            })), t.AsyncIterator = O, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), u(I, s, "Generator"), u(I, i, (function() {
                return this
            })), u(I, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = N, A.prototype = {
                constructor: A,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: N(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), m
                }
            }, t
        }

        function h(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function y(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        h(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        h(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function v() {
            return m.apply(this, arguments)
        }

        function m() {
            return m = y(p().mark((function e() {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = y(p().mark((function e(t) {
                                    var n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Activation de la feuille 2. Planning - Consultant"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 7, o();
                                            case 7:
                                                return e.next = 9, u();
                                            case 9:
                                                return e.next = 11, f("2. Planning - Consultant", 5);
                                            case 11:
                                                return n.screenUpdating = !0, e.next = 14, t.sync();
                                            case 14:
                                                ve.debug = !0;
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningConsultant :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), m.apply(this, arguments)
        }

        function x(e, t, n) {
            return b.apply(this, arguments)
        }

        function b() {
            return b = y(p().mark((function e(t, n, r) {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug = !1, ve.debug && (console.log("Fonction modifPlanningConsultant exécutée."), console.log("modifPlanningConsultant appelée avec :", t, n, r)), e.next = 5, Excel.run(function() {
                                var e = y(p().mark((function e(o) {
                                    var a, i, c, s, u, l, f, d, g, h, y, v, m, x, b, w;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Début de la fonction modifPlanningConsultant"), a = o.workbook, i = a.worksheets.getActiveWorksheet(), c = a.names.getItemOrNullObject("Nb_Missions_Max"), e.next = 7, i.load("name");
                                            case 7:
                                                return e.next = 9, c.load("value");
                                            case 9:
                                                return e.next = 11, o.sync();
                                            case 11:
                                                if (c.isNullObject) {
                                                    e.next = 15;
                                                    break
                                                }
                                                s = c.value, e.next = 16;
                                                break;
                                            case 15:
                                                throw new Error("Le nom 'Nb_Missions_Max' n'existe pas dans le classeur");
                                            case 16:
                                                return e.next = 18, t.load("address, values");
                                            case 18:
                                                return e.next = 20, o.sync();
                                            case 20:
                                                return ve.debug && (console.log("Feuille de calcul chargée :", i.name), console.log("Valeur de Nb_Missions_Max :", s), console.log("Adresse de la plage modifiée :", t), console.log("Numéro de la première ligne modifiée :", n + 1)), u = i.getRange("B2"), e.next = 24, u.load("values");
                                            case 24:
                                                return e.next = 26, o.sync();
                                            case 26:
                                                return ve.debug && console.log("Valeur de la cellule B2 chargée :", u.values[0][0]), l = u.values[0][0], f = a.worksheets.getItem(l), e.next = 32, f.load("name");
                                            case 32:
                                                return e.next = 34, o.sync();
                                            case 34:
                                                ve.debug && console.log("Feuille du consultant", f.name, "chargée"), d = t.values.flat(), ve.debug && console.log("Nombre de jours renseigné :", d), ve.debug && console.log("Nombre de colonnes modifiées :", t.columnCount, "\nNombres de lignes modifiées :", t.rowCount), g = 0;
                                            case 42:
                                                if (!(g < t.rowCount)) {
                                                    e.next = 71;
                                                    break
                                                }
                                                if (ve.debug && console.log("Traitement de la ligne ".concat(g + 1, " sur ").concat(t.rowCount)), "" === (h = d[g])) {
                                                    e.next = 68;
                                                    break
                                                }
                                                return ve.debug && console.log("Nombre de jour non vide pour la ligne :", g, "\nNombre de jour :", h), y = i.getCell(n + g, 2), e.next = 52, y.load("values");
                                            case 52:
                                                return v = i.getCell(n + g, 1), e.next = 55, v.load("values");
                                            case 55:
                                                return m = f.getRange("C7:C" + (parseInt(s) + 6)), e.next = 58, m.load("values");
                                            case 58:
                                                return e.next = 60, o.sync();
                                            case 60:
                                                if (ve.debug && console.log("Nom Mission :", y.values[0][0]), x = m.values.flat(), ve.debug && console.log("Valeurs aplaties de la plage C7:C :", x), -1 !== (b = x.indexOf(y.values[0][0])))
                                                    for (ve.debug && console.log("Index trouvé pour la mission :", b), w = 0; w < t.columnCount; w++) f.getRange("D7").getCell(b, r + w - 3).values = [
                                                        [h]
                                                    ];
                                                else ve.debug && console.log("Aucun index trouvé pour la mission.");
                                                Ee(y.values[0][0], v.values[0][0], l);
                                            case 68:
                                                g++, e.next = 42;
                                                break;
                                            case 71:
                                                return t.clear(Excel.ClearApplyTo.contents), ve.debug && console.log("Contenu de la plage modifiée supprimé :", t.address), e.next = 76, o.sync();
                                            case 76:
                                                return ve.debug && console.log("Calcul déclenché après modification de la feuille", i.name), e.next = 80, o.sync();
                                            case 80:
                                                ve.debug = !0;
                                            case 81:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de la modification du planning : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), b.apply(this, arguments)
        }

        function w(e) {
            return E.apply(this, arguments)
        }

        function E() {
            return E = y(p().mark((function e(t) {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ve.debug && console.log("Fonction ChgtFeuilleConsultant exécutée \nevent :", t), "ThisLocalAddin" != t.triggerSource) {
                                e.next = 6;
                                break
                            }
                            return ve.debug && console.log("Modification stopée car pas demandée par l'utilisateur"), e.abrupt("return");
                        case 6:
                            if (!ve.isProcessing) {
                                e.next = 10;
                                break
                            }
                            return ve.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 10:
                            return ve.isProcessing = !0, e.next = 13, Excel.run(function() {
                                var e = y(p().mark((function e(n) {
                                    var r, a, i, c, s, l, f, d, g;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Détection de modification dans la feuille", ve.nbExecModifConsultant++, "fois"), r = n.workbook, a = r.worksheets.getActiveWorksheet(), i = "2. Planning - Consultant", c = n.workbook.worksheets.getItem(i), ve.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), c.onChanged.remove(w), e.prev = 9, e.next = 12, a.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (ve.debug && console.log("Feuille active :", a.name), a.name !== i) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return s = a.getRange(t.address), l = r.names.getItem("Modif_Consultant").getRange(), e.next = 21, n.sync();
                                            case 21:
                                                return e.next = 23, s.load("rowIndex, columnIndex, rowCount, columnCount, columnCount, address");
                                            case 23:
                                                return e.next = 25, l.load("rowIndex, columnIndex, rowCount, columnCount");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                if (f = s.rowIndex >= l.rowIndex && s.rowIndex + s.rowCount <= l.rowIndex + l.rowCount && s.columnIndex >= l.columnIndex && s.columnIndex + s.columnCount <= l.columnIndex + l.columnCount, ve.debug && console.log("Flag Modif dans le tableau :", f), !f) {
                                                    e.next = 44;
                                                    break
                                                }
                                                return d = a.getRange(t.address), e.next = 34, d.load("address, values, rowIndex, columnIndex, rowCount, columnCount");
                                            case 34:
                                                return e.next = 36, n.sync();
                                            case 36:
                                                return ve.debug && console.log("Modification détectée dans la plage Modif_Consultant sur la cellule :", d.address), e.next = 40, x(d, d.rowIndex, d.columnIndex);
                                            case 40:
                                                return e.next = 42, n.sync();
                                            case 42:
                                                return e.next = 44, Excel.run(function() {
                                                    var e = y(p().mark((function e(t) {
                                                        return p().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 44:
                                                if (!(s.address.includes("B2") | s.address.includes("B3"))) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return ve.debug && console.log("Modification détectée dans la plage B2:B3"), e.next = 49, Excel.run(function() {
                                                    var e = y(p().mark((function e(t) {
                                                        return p().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 49:
                                                return e.next = 51, o();
                                            case 51:
                                                return e.next = 53, u();
                                            case 53:
                                                return g = r.application, e.next = 56, g.load("calculationState");
                                            case 56:
                                                return e.next = 58, n.sync();
                                            case 58:
                                                ve.debug && console.log("calculationState =", g.calculationState);
                                            case 59:
                                                if ("Done" === g.calculationState) {
                                                    e.next = 66;
                                                    break
                                                }
                                                return e.next = 62, new Promise((function(e) {
                                                    return setTimeout(e, 1e3)
                                                }));
                                            case 62:
                                                return e.next = 64, n.sync();
                                            case 64:
                                                e.next = 59;
                                                break;
                                            case 66:
                                                ve.debug = !0, e.next = 73;
                                                break;
                                            case 69:
                                                e.prev = 69, e.t0 = e.catch(9), ve.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 73:
                                                return e.prev = 73, ve.debug && console.log("Réactivation du gestionnaire onChanged"), c.onChanged.add(w), e.next = 79, n.sync();
                                            case 79:
                                                return ve.isProcessing = !1, ve.debug = !0, e.finish(73);
                                            case 82:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 69, 73, 82]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), ve.isProcessing = !1, ve.debug = !0
                            }));
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), E.apply(this, arguments)
        }

        function k(e) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, k(e)
        }

        function L() {
            L = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    c = new A(r || []);
                return o(i, "_invoke", {
                    value: S(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                E = w && w(w(N([])));
            E && E !== n && r.call(E, i) && (b = E);
            var I = x.prototype = v.prototype = Object.create(b);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == k(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function S(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = _(c, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function _(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, _(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function M(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function j(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(M, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(k(t) + " is not iterable")
            }
            return m.prototype = x, o(I, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, s, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), u(O.prototype, c, (function() {
                return this
            })), t.AsyncIterator = O, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), u(I, s, "Generator"), u(I, i, (function() {
                return this
            })), u(I, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = N, A.prototype = {
                constructor: A,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: N(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function I(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function C(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        I(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        I(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function O() {
            return S.apply(this, arguments)
        }

        function S() {
            return S = C(L().mark((function e() {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = C(L().mark((function e(t) {
                                    var n;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Activation de la feuille 2. Planning - Missions"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 7, o();
                                            case 7:
                                                return e.next = 9, i();
                                            case 9:
                                                return e.next = 11, f("2. Planning - Missions", 5);
                                            case 11:
                                                return n.screenUpdating = !0, e.next = 14, t.sync();
                                            case 14:
                                                ve.debug = !0;
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningMission :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), S.apply(this, arguments)
        }

        function _(e, t, n) {
            return M.apply(this, arguments)
        }

        function M() {
            return M = C(L().mark((function e(t, n, r) {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug && (console.log("Fonction modifPlanningMission exécutée."), console.log("modifPlanningMission appelée avec :", t, n, r)), e.next = 3, Excel.run(function() {
                                var e = C(L().mark((function e(o) {
                                    var a, i, c, s, u, l, f, d, g, p, h, y, v, m, x, b;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Début de la fonction modifPlanningMission"), a = o.workbook, i = a.worksheets.getActiveWorksheet(), c = a.names.getItemOrNullObject("Nb_Missions_Max"), e.next = 7, i.load("name");
                                            case 7:
                                                return e.next = 9, c.load("value");
                                            case 9:
                                                return e.next = 11, o.sync();
                                            case 11:
                                                if (c.isNullObject) {
                                                    e.next = 15;
                                                    break
                                                }
                                                s = c.value, e.next = 16;
                                                break;
                                            case 15:
                                                throw new Error("Le nom 'Nb_Missions_Max' n'existe pas dans le classeur");
                                            case 16:
                                                return e.next = 18, t.load("address, values");
                                            case 18:
                                                return e.next = 20, o.sync();
                                            case 20:
                                                return ve.debug && (console.log("Feuille de calcul chargée :", i.name), console.log("Valeur de Nb_Missions_Max :", s), console.log("Adresse de la plage modifiée :", t), console.log("Numéro de la première ligne modifiée :", n + 1)), u = i.getRange("B2"), e.next = 24, u.load("values");
                                            case 24:
                                                return e.next = 26, o.sync();
                                            case 26:
                                                l = u.values[0][0], ve.debug && console.log("Valeur de la cellule B2 chargée :", u.values[0][0]), f = t.values.flat(), ve.debug && console.log("Nombre de jours renseigné :", f), d = 0;
                                            case 33:
                                                if (!(d < t.rowCount)) {
                                                    e.next = 75;
                                                    break
                                                }
                                                if (ve.debug && console.log("Traitement de la ligne ".concat(d + 1, " sur ").concat(t.rowCount)), "" === (g = f[d])) {
                                                    e.next = 72;
                                                    break
                                                }
                                                return ve.debug && console.log("Nombre de jour non vide pour la ligne :", d, "\nNombre de jour :", g), p = i.getCell(n + d, 2), e.next = 43, p.load("values");
                                            case 43:
                                                return e.next = 45, o.sync();
                                            case 45:
                                                return ve.debug && console.log("Nom du consultant :", p.values[0][0]), h = a.worksheets.getItem(p.values[0][0]), e.next = 50, h.load("name");
                                            case 50:
                                                return e.next = 52, o.sync();
                                            case 52:
                                                return ve.debug && console.log("Feuille du consultant", h.name, "chargée"), y = i.getCell(n + d, 1), e.next = 57, y.load("values");
                                            case 57:
                                                return e.next = 59, o.sync();
                                            case 59:
                                                return ve.debug && console.log("Nom Mission :", l, "Cellule :", n + d, 2), v = h.getRange("C7:C" + (parseInt(s) + 6)), e.next = 64, v.load("values");
                                            case 64:
                                                return e.next = 66, o.sync();
                                            case 66:
                                                if (m = v.values.flat(), ve.debug && console.log("Valeurs aplaties de la plage C7:C :", m), -1 !== (x = m.indexOf(l)))
                                                    for (ve.debug && console.log("Index trouvé pour la mission :", x), b = 0; b < t.columnCount; b++) h.getRange("D7").getCell(x, r + b - 3).values = [
                                                        [g]
                                                    ];
                                                else ve.debug && console.log("Aucun index trouvé pour la mission.");
                                                Ee(l, y.values[0][0], p.values[0][0]);
                                            case 72:
                                                d++, e.next = 33;
                                                break;
                                            case 75:
                                                return e.next = 77, o.sync();
                                            case 77:
                                                return t.clear(Excel.ClearApplyTo.contents), ve.debug && console.log("Contenu de la plage modifiée supprimé :", t.address), ve.debug && console.log("Calcul déclenché après modification de la feuille", i.name), e.next = 84, o.sync();
                                            case 84:
                                                ve.debug = !0;
                                            case 85:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de la modification du planning mission: " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), M.apply(this, arguments)
        }

        function j(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return A = C(L().mark((function e(t) {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ve.debug && console.log("Fonction ChgtFeuilleMission exécutée."), "ThisLocalAddin" != t.triggerSource) {
                                e.next = 6;
                                break
                            }
                            return ve.debug && console.log("Modification stopée car pas demandée par l'utilisateur"), e.abrupt("return");
                        case 6:
                            if (!ve.isProcessing) {
                                e.next = 10;
                                break
                            }
                            return ve.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 10:
                            return ve.isProcessing = !0, e.next = 13, Excel.run(function() {
                                var e = C(L().mark((function e(n) {
                                    var r, a, c, s, u, l, f, d, g;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Détection de modification dans la feuille", ve.nbExecModifMission++, "fois"), r = n.workbook, a = r.worksheets.getActiveWorksheet(), c = "2. Planning - Missions", s = n.workbook.worksheets.getItem(c), ve.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), s.onChanged.remove(j), e.prev = 9, e.next = 12, a.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (ve.debug && console.log("Feuille active :", a.name), a.name !== c) {
                                                    e.next = 51;
                                                    break
                                                }
                                                return u = a.getRange(t.address), l = r.names.getItem("Modif_Missions").getRange(), e.next = 21, n.sync();
                                            case 21:
                                                return e.next = 23, u.load("rowIndex, columnIndex, rowCount, columnCount, columnCount, address");
                                            case 23:
                                                return e.next = 25, l.load("rowIndex, columnIndex, rowCount, columnCount");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                if (f = u.rowIndex >= l.rowIndex && u.rowIndex + u.rowCount <= l.rowIndex + l.rowCount && u.columnIndex >= l.columnIndex && u.columnIndex + u.columnCount <= l.columnIndex + l.columnCount, ve.debug && console.log("Flag Modif dans le tableau :", f), !f) {
                                                    e.next = 42;
                                                    break
                                                }
                                                return d = a.getRange(t.address), e.next = 34, d.load("address, values, rowIndex, columnIndex, rowCount, columnCount");
                                            case 34:
                                                return e.next = 36, n.sync();
                                            case 36:
                                                return e.next = 38, _(d, d.rowIndex, d.columnIndex);
                                            case 38:
                                                return e.next = 40, n.sync();
                                            case 40:
                                                return e.next = 42, Excel.run(function() {
                                                    var e = C(L().mark((function e(t) {
                                                        return L().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 42:
                                                if (!t.address.includes("B2")) {
                                                    e.next = 51;
                                                    break
                                                }
                                                return ve.debug && console.log("Modification détectée dans la plage B2"), e.next = 47, Excel.run(function() {
                                                    var e = C(L().mark((function e(t) {
                                                        return L().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 47:
                                                return e.next = 49, o();
                                            case 49:
                                                return e.next = 51, i();
                                            case 51:
                                                return g = r.application, e.next = 54, g.load("calculationState");
                                            case 54:
                                                return e.next = 56, n.sync();
                                            case 56:
                                                ve.debug && console.log("calculationState =", g.calculationState);
                                            case 57:
                                                if ("Done" === g.calculationState) {
                                                    e.next = 67;
                                                    break
                                                }
                                                return e.next = 60, new Promise((function(e) {
                                                    return setTimeout(e, 500)
                                                }));
                                            case 60:
                                                return e.next = 62, g.load("calculationState");
                                            case 62:
                                                return e.next = 64, n.sync();
                                            case 64:
                                                ve.debug && console.log("calculationState en attente", g.calculationState), e.next = 57;
                                                break;
                                            case 67:
                                                ve.debug = !0, e.next = 74;
                                                break;
                                            case 70:
                                                e.prev = 70, e.t0 = e.catch(9), ve.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 74:
                                                return e.prev = 74, ve.debug && console.log("Réactivation du gestionnaire onChanged"), s.onChanged.add(j), e.next = 80, n.sync();
                                            case 80:
                                                return ve.debug = !0, ve.isProcessing = !1, e.finish(74);
                                            case 83:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 70, 74, 83]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), ve.isProcessing = !1, ve.debug = !0
                            }));
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), A.apply(this, arguments)
        }

        function N(e) {
            return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, N(e)
        }

        function P() {
            P = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    c = new M(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                E = w && w(w(j([])));
            E && E !== n && r.call(E, i) && (b = E);
            var k = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == N(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = O(c, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function M(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(S, this), this.reset(!0)
            }

            function j(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(N(t) + " is not iterable")
            }
            return m.prototype = x, o(k, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, c, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(k), u(k, s, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = j, M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function R(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function F(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        R(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        R(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function B() {
            return T.apply(this, arguments)
        }

        function T() {
            return T = F(P().mark((function e() {
                return P().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = F(P().mark((function e(t) {
                                    var n, r, o, a, i, c, s;
                                    return P().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return console.log("Activation de la feuille 3. Planning - Global"), n = t.workbook, t.application.calculate(), r = n.names.getItem("Recap_2").getRange(), e.next = 8, t.sync();
                                            case 8:
                                                return o = r.conditionalFormats, e.next = 11, o.load("items");
                                            case 11:
                                                return e.next = 13, t.sync();
                                            case 13:
                                                a = o.items.length, i = 0;
                                            case 15:
                                                if (!(i < a)) {
                                                    e.next = 35;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(i, " sur ").concat(a)), c = o.getItemAt(i), e.next = 21, t.sync();
                                            case 21:
                                                return ve.debug && (console.log("Format condition", c), console.log("Ancienne plage :", c.address)), c.setRanges(r), e.next = 25, t.sync();
                                            case 25:
                                                return s = c.getRanges(), e.next = 28, s.load("address");
                                            case 28:
                                                return e.next = 30, t.sync();
                                            case 30:
                                                ve.debug && console.log("Nouvelle plage :", s.address);
                                            case 32:
                                                i++, e.next = 15;
                                                break;
                                            case 35:
                                                return e.next = 37, t.sync();
                                            case 37:
                                                ve.debug = !0;
                                            case 38:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningGlobal :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), T.apply(this, arguments)
        }

        function G(e) {
            return U.apply(this, arguments)
        }

        function U() {
            return U = F(P().mark((function e(t) {
                return P().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ve.debug && console.log("Fonction ChgtFeuilleGlobal exécutée"), !ve.isProcessing) {
                                e.next = 6;
                                break
                            }
                            return ve.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 6:
                            return ve.isProcessing = !0, e.next = 9, Excel.run(function() {
                                var e = F(P().mark((function e(n) {
                                    var r, o, a, i, c, s, u, l, f, d;
                                    return P().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Détection de modification dans la feuille", ve.nbExecModifGlobal++, "fois"), r = n.workbook, o = r.worksheets.getActiveWorksheet(), a = "3. Planning - Global", i = n.workbook.worksheets.getItem(a), ve.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), i.onChanged.remove(G), e.prev = 9, e.next = 12, o.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (ve.debug && console.log("Feuille active :", o.name), o.name !== a) {
                                                    e.next = 52;
                                                    break
                                                }
                                                if (!t.address.includes("B3")) {
                                                    e.next = 52;
                                                    break
                                                }
                                                return ve.debug && console.log("Modification détectée dans la plage B3"), e.next = 22, Excel.run(function() {
                                                    var e = F(P().mark((function e(t) {
                                                        return P().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 22:
                                                return c = r.names.getItem("Recap_2").getRange(), e.next = 25, n.sync();
                                            case 25:
                                                return s = c.conditionalFormats, e.next = 28, s.load("items");
                                            case 28:
                                                return e.next = 30, n.sync();
                                            case 30:
                                                u = s.items.length, l = 0;
                                            case 32:
                                                if (!(l < u)) {
                                                    e.next = 52;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(l, " sur ").concat(u)), f = s.getItemAt(l), e.next = 38, n.sync();
                                            case 38:
                                                return ve.debug && (console.log("Format condition", f), console.log("Ancienne plage :", f.address)), f.setRanges(c), e.next = 42, n.sync();
                                            case 42:
                                                return d = f.getRanges(), e.next = 45, d.load("address");
                                            case 45:
                                                return e.next = 47, n.sync();
                                            case 47:
                                                ve.debug && console.log("Nouvelle plage :", d.address);
                                            case 49:
                                                l++, e.next = 32;
                                                break;
                                            case 52:
                                                ve.debug = !0, e.next = 59;
                                                break;
                                            case 55:
                                                e.prev = 55, e.t0 = e.catch(9), ve.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 59:
                                                return e.prev = 59, ve.debug && console.log("Réactivation du gestionnaire onChanged"), i.onChanged.add(G), e.next = 65, n.sync();
                                            case 65:
                                                return ve.isProcessing = !1, ve.debug = !0, e.finish(59);
                                            case 68:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 55, 59, 68]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), ve.isProcessing = !1, ve.debug = !0
                            }));
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), U.apply(this, arguments)
        }

        function V(e) {
            return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, V(e)
        }

        function J() {
            J = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    c = new M(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                E = w && w(w(j([])));
            E && E !== n && r.call(E, i) && (b = E);
            var k = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == V(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = O(c, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function M(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(S, this), this.reset(!0)
            }

            function j(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(V(t) + " is not iterable")
            }
            return m.prototype = x, o(k, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, c, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(k), u(k, s, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = j, M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function D(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function Y(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        D(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        D(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function q() {
            return W.apply(this, arguments)
        }

        function W() {
            return W = Y(J().mark((function e() {
                return J().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = Y(J().mark((function e(t) {
                                    var n, r, o, a, i, c, s;
                                    return J().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return console.log("Activation de la feuille 3. Planning - Encadrant"), n = t.workbook, t.application.calculate(), r = n.names.getItem("Recap_3").getRange(), e.next = 8, t.sync();
                                            case 8:
                                                return o = r.conditionalFormats, e.next = 11, o.load("items");
                                            case 11:
                                                return e.next = 13, t.sync();
                                            case 13:
                                                a = o.items.length, i = 0;
                                            case 15:
                                                if (!(i < a)) {
                                                    e.next = 35;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(i, " sur ").concat(a)), c = o.getItemAt(i), e.next = 21, t.sync();
                                            case 21:
                                                return ve.debug && (console.log("Format condition", c), console.log("Ancienne plage :", c.address)), c.setRanges(r), e.next = 25, t.sync();
                                            case 25:
                                                return s = c.getRanges(), e.next = 28, s.load("address");
                                            case 28:
                                                return e.next = 30, t.sync();
                                            case 30:
                                                ve.debug && console.log("Nouvelle plage :", s.address);
                                            case 32:
                                                i++, e.next = 15;
                                                break;
                                            case 35:
                                                return e.next = 37, t.sync();
                                            case 37:
                                                ve.debug = !0;
                                            case 38:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningEncadrant :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), W.apply(this, arguments)
        }

        function H(e) {
            return z.apply(this, arguments)
        }

        function z() {
            return z = Y(J().mark((function e(t) {
                return J().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ve.debug && console.log("Fonction ChgtFeuilleEncadrant exécutée"), !ve.isProcessing) {
                                e.next = 6;
                                break
                            }
                            return ve.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 6:
                            return ve.isProcessing = !0, e.next = 9, Excel.run(function() {
                                var e = Y(J().mark((function e(n) {
                                    var r, o, a, i, c, s, u, l, f, d;
                                    return J().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug && console.log("Détection de modification dans la feuille", ve.nbExecModifEncadrant++, "fois"), r = n.workbook, o = r.worksheets.getActiveWorksheet(), a = "3. Planning - Encadrant", i = n.workbook.worksheets.getItem(a), ve.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), i.onChanged.remove(H), e.prev = 9, e.next = 12, o.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (ve.debug && console.log("Feuille active :", o.name), o.name !== a) {
                                                    e.next = 52;
                                                    break
                                                }
                                                if (!(t.address.includes("B2") | t.address.includes("B3"))) {
                                                    e.next = 52;
                                                    break
                                                }
                                                return ve.debug && console.log("Modification détectée dans la plage B2:B3"), e.next = 22, Excel.run(function() {
                                                    var e = Y(J().mark((function e(t) {
                                                        return J().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.abrupt("return", t.application.calculate());
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }());
                                            case 22:
                                                return c = r.names.getItem("Recap_3").getRange(), e.next = 25, n.sync();
                                            case 25:
                                                return s = c.conditionalFormats, e.next = 28, s.load("items");
                                            case 28:
                                                return e.next = 30, n.sync();
                                            case 30:
                                                u = s.items.length, l = 0;
                                            case 32:
                                                if (!(l < u)) {
                                                    e.next = 52;
                                                    break
                                                }
                                                return ve.debug && console.log("Traitement du format ".concat(l, " sur ").concat(u)), f = s.getItemAt(l), e.next = 38, n.sync();
                                            case 38:
                                                return ve.debug && (console.log("Format condition", f), console.log("Ancienne plage :", f.address)), f.setRanges(c), e.next = 42, n.sync();
                                            case 42:
                                                return d = f.getRanges(), e.next = 45, d.load("address");
                                            case 45:
                                                return e.next = 47, n.sync();
                                            case 47:
                                                ve.debug && console.log("Nouvelle plage :", d.address);
                                            case 49:
                                                l++, e.next = 32;
                                                break;
                                            case 52:
                                                ve.debug = !0, e.next = 59;
                                                break;
                                            case 55:
                                                e.prev = 55, e.t0 = e.catch(9), ve.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 59:
                                                return e.prev = 59, ve.debug && console.log("Réactivation du gestionnaire onChanged"), i.onChanged.add(H), e.next = 65, n.sync();
                                            case 65:
                                                return ve.isProcessing = !1, ve.debug = !0, e.finish(59);
                                            case 68:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 55, 59, 68]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), ve.isProcessing = !1, ve.debug = !0
                            }));
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), z.apply(this, arguments)
        }

        function K(e) {
            return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, K(e)
        }

        function Q(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return X(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? X(e, t) : void 0
                        }
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function X(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function $() {
            $ = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    c = new M(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                E = w && w(w(j([])));
            E && E !== n && r.call(E, i) && (b = E);
            var k = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == K(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = O(c, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function M(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(S, this), this.reset(!0)
            }

            function j(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(K(t) + " is not iterable")
            }
            return m.prototype = x, o(k, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, c, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(k), u(k, s, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = j, M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function Z(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function ee(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        Z(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        Z(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function te(e) {
            return ne.apply(this, arguments)
        }

        function ne() {
            return ne = ee($().mark((function e(t) {
                var n, r, o;
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ve.debug = !0, n = t.target.id, ve.debug && console.log("Id du bouton :", n), "btn-AjoutMission" != n) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6, Excel.run(function() {
                                var e = ee($().mark((function e(t) {
                                    var n, r, o;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.workbook.worksheets.getItem("1. Liste des missions").getRange("B:B").getUsedRange(), e.next = 3, n.load("values");
                                            case 3:
                                                return r = t.workbook.names.getItem("Nb_Missions_Max"), e.next = 6, r.load("value");
                                            case 6:
                                                return e.next = 8, t.sync();
                                            case 8:
                                                o = n.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 1, ve.debug && console.log(n.values.flat()), n.values.flat().includes(0) && (o = 1), ve.debug && console.log("Nb Mission :", o, "nbMissionsMax :", r.value), o < r.value ? (showSection("sec-userForm-AjoutMission"), document.getElementById("input-text-Mission").value = "", document.getElementById("input-text-Mission").placeholder = "Saisissez un texte", re("Liste_Encadrant", "dropdown-Mission"), document.getElementById("btn-validate-AjoutMission").addEventListener("click", te)) : (ve.debug && console.log("Nombre de mission max atteint"), showSection("sec-userForm-AjoutMissionError"), document.getElementById("btn-validate-AjoutMissionError").addEventListener("click", te));
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 6:
                            e.next = 9;
                            break;
                        case 8:
                            "btn-validate-AjoutMission" == n ? (showSection("sec-userForm-SelectionConsultant"), re("Liste_Consultants_Triée", "listbox-SelectionConsultant"), document.getElementById("btn-validate-SelectionConsultant").addEventListener("click", ae)) : "btn-Suppression" == n || "btn-validate-AjoutMissionError" == n ? (showSection("sec-userForm-SuppressionMission"), re("Liste_Missions_Triée", "listbox-SuppressionMission"), document.getElementById("btn-validate-SuppressionMission").addEventListener("click", te)) : "btn-validate-SuppressionMission" == n ? (showSection("sec-userForm-SuppressionMissionInter"), r = document.getElementById("listbox-SuppressionMission").selectedOptions.length, o = "Voulez-vous supprimer " + r + " missions ?", 1 == r && (o = "Voulez-vous supprimer " + r + " mission ?"), document.getElementById("texte-SuppressionMissionInter").innerText = o, document.getElementById("btn-validate-SuppressionMissionInter").addEventListener("click", ce)) : "btn-ModifierAffectationMission" == n ? (showSection("sec-userForm-ModifierAffectationMission"), re("Liste_Consultants_Update", "listbox-AjouterConsultant"), re("Liste_Consultant_Mission", "listbox-EnleverConsultant"), document.getElementById("btn-validate-ModifierAffectationMission").addEventListener("click", ue)) : "btn-ModifierAffectationConsultant" == n ? (showSection("sec-userForm-ModifierAffectationConsultant"), re("Liste_Missions_Update2", "listbox-AjouterMission"), re("Liste_Mission_Consultant", "listbox-EnleverMission"), document.getElementById("btn-validate-ModifierAffectationConsultant").addEventListener("click", fe)) : n.includes("btn-return") ? (ve.debug && console.log("Bouton retour"), handleSheetChange()) : (ve.debug = !1, console.error("Aucune action définie pour ", n));
                        case 9:
                            ve.debug = !1;
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ne.apply(this, arguments)
        }

        function re(e, t) {
            return oe.apply(this, arguments)
        }

        function oe() {
            return oe = ee($().mark((function e(t, n) {
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Excel.run(function() {
                                var e = ee($().mark((function e(r) {
                                    var o, a, i;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !0, ve.debug && console.log("Ajout des options pour :", n, "à partir de la liste", t), (o = r.workbook.names.getItem(t).getRange()).load("values"), e.next = 6, r.sync();
                                            case 6:
                                                ve.debug && console.log("Valeurs de ", t, ":", o.values), (a = document.getElementById(n)).innerHTML = "", o.values.forEach((function(e) {
                                                    if (e[0]) {
                                                        var t = document.createElement("option");
                                                        t.value = e[0], t.textContent = e[0], a.appendChild(t)
                                                    }
                                                })), n.includes("listbox") || ((i = document.createElement("option")).value = "", i.textContent = "Sélectionnez une option", i.selected = !0, i.disabled = !0, a.insertBefore(i, a.firstChild));
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            e.prev = 5, e.t0 = e.catch(0), console.error("Erreur lors du chargement de la liste", t, " :", e.t0);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 5]
                ])
            }))), oe.apply(this, arguments)
        }

        function ae() {
            return ie.apply(this, arguments)
        }

        function ie() {
            return ie = ee($().mark((function e() {
                var t, n, r;
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug = !0, ve.debug && console.log("Lancement fonction nouvelleMission"), t = document.getElementById("input-text-Mission").value, n = document.getElementById("dropdown-Mission").value, r = Array.from(document.getElementById("listbox-SelectionConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), ve.debug && console.log("nomMission :", t, "\nnomEncadrant :", n, "\nlsConsultants :", r), e.next = 8, Excel.run(function() {
                                var e = ee($().mark((function e(o) {
                                    var a, i, c, s, u, l, f, d;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return o.application.screenUpdating = !1, a = o.workbook.worksheets.getItem("1. Liste des missions"), i = o.workbook.worksheets.getItem("Affectation des consultants"), c = o.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, c.load("values");
                                            case 6:
                                                return s = o.workbook.names.getItem("Nb_Missions_Max"), e.next = 9, s.load("value");
                                            case 9:
                                                return u = o.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 12, u.load("values");
                                            case 12:
                                                return e.next = 14, o.sync();
                                            case 14:
                                                return l = c.values.length + 3, c.values.flat().includes(0) && (l = c.values.flat().findIndex((function(e) {
                                                    return 0 === e
                                                })) + 3), a.protection.unprotect(), e.next = 19, o.sync();
                                            case 19:
                                                return ve.debug && console.log("index nouvelle mission", l), a.getCell(l, 1).values = [
                                                    [t]
                                                ], a.getCell(l, 2).values = [
                                                    [n]
                                                ], e.next = 24, o.sync();
                                            case 24:
                                                f = $().mark((function e() {
                                                    var t, n;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = r[d], n = u.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, ve.debug && console.log("nom :", t, "\nrangeConsultant", u.values.flat(), "indexName :", n), i.getCell(l, n + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), d = 0;
                                            case 26:
                                                if (!(d < r.length)) {
                                                    e.next = 31;
                                                    break
                                                }
                                                return e.delegateYield(f(), "t0", 28);
                                            case 28:
                                                d++, e.next = 26;
                                                break;
                                            case 31:
                                                return a.protection.protect(), i.calculate(), e.next = 35, o.sync();
                                            case 35:
                                                o.application.screenUpdating = !0, ve.debug = !0, showSection("sec-userForm-AjoutMissionOk"), document.getElementById("texte-AjoutMissionOK").innerText = "Nom : " + t + "\nEncadrant : " + n + "\nConsultants : " + r;
                                            case 39:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors l'ajout de l'ajout de mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ie.apply(this, arguments)
        }

        function ce() {
            return se.apply(this, arguments)
        }

        function se() {
            return se = ee($().mark((function e() {
                var t;
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug = !0, ve.debug && console.log("Lancement fonction suppressionMission"), t = Array.from(document.getElementById("listbox-SuppressionMission").selectedOptions).map((function(e) {
                                return e.value
                            })), ve.debug && console.log("lsMissionsASuppr", t), e.next = 6, Excel.run(function() {
                                var e = ee($().mark((function e(n) {
                                    var r, o, a, i, c, s;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n.application.screenUpdating = !1, r = n.workbook.worksheets.getItem("Affectation des consultants"), o = n.workbook.worksheets.getItem("1. Liste des missions"), a = n.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, a.load("values");
                                            case 6:
                                                return i = n.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 9, i.load("values");
                                            case 9:
                                                return e.next = 11, n.sync();
                                            case 11:
                                                c = $().mark((function e() {
                                                    var c, u, l, f, d, g, p, h, y, v;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return c = t[s], u = a.values.flat().findIndex((function(e) {
                                                                    return e === c
                                                                })) + 1, ve.debug && console.log("Nom mission :", c, "\nindexMission :", u), l = r.getRangeByIndexes(u + 2, 3, 1, i.values.length), e.next = 6, l.load("values");
                                                            case 6:
                                                                return e.next = 8, n.sync();
                                                            case 8:
                                                                f = l.values.flat().map((function(e, t) {
                                                                    return "" != e ? t : -1
                                                                })).filter((function(e) {
                                                                    return -1 != e
                                                                })), d = f.map((function(e) {
                                                                    return i.values.flat()[e]
                                                                })), ve.debug && console.log("rangeAffectation", l.values.flat(), "\nlsIndex", f, "\nlsConsultants", d), g = Q(d), e.prev = 12, g.s();
                                                            case 14:
                                                                if ((p = g.n()).done) {
                                                                    e.next = 33;
                                                                    break
                                                                }
                                                                return h = p.value, ve.debug && console.log("constName", h), y = n.workbook.worksheets.getItem(h), e.next = 20, n.sync();
                                                            case 20:
                                                                return v = y.getRangeByIndexes(u + 5, 4, 1, 78), e.next = 23, v.load("values");
                                                            case 23:
                                                                return e.next = 25, n.sync();
                                                            case 25:
                                                                if (ve.debug && console.log("rangeNbJoursMissions", v.values.flat()), 0 == v.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 31;
                                                                    break
                                                                }
                                                                return v.values = [Array(78).fill("")], e.next = 31, n.sync();
                                                            case 31:
                                                                e.next = 14;
                                                                break;
                                                            case 33:
                                                                e.next = 38;
                                                                break;
                                                            case 35:
                                                                e.prev = 35, e.t0 = e.catch(12), g.e(e.t0);
                                                            case 38:
                                                                return e.prev = 38, g.f(), e.finish(38);
                                                            case 41:
                                                                return l.values = [Array(i.values.length).fill("")], o.protection.unprotect(), o.getRangeByIndexes(u + 2, 1, 1, 2).values = [Array(2).fill("")], o.protection.protect(), e.next = 47, n.sync();
                                                            case 47:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [12, 35, 38, 41]
                                                    ])
                                                })), s = 0;
                                            case 13:
                                                if (!(s < t.length)) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.delegateYield(c(), "t0", 15);
                                            case 15:
                                                s++, e.next = 13;
                                                break;
                                            case 18:
                                                n.application.calculate(), n.application.screenUpdating = !0, ve.debug = !0, showSection("sec-userForm-SuppressionMissionOk"), document.getElementById("texte-SuppressionMissionOk").innerText = "Nom : " + t;
                                            case 23:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors l'ajout de l'ajout de mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), se.apply(this, arguments)
        }

        function ue() {
            return le.apply(this, arguments)
        }

        function le() {
            return le = ee($().mark((function e() {
                var t, n;
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug = !0, ve.debug && console.log("Lancement fonction affectationMission"), t = Array.from(document.getElementById("listbox-AjouterConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), n = Array.from(document.getElementById("listbox-EnleverConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), ve.debug && console.log("lsConsultantsAAjouter", t, "\nlsConsultantsASuppr", n), e.next = 7, Excel.run(function() {
                                var e = ee($().mark((function e(r) {
                                    var o, a, i, c, s, u, l, f, d, g, p, h;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r.application.screenUpdating = !1, o = r.workbook.worksheets.getItem("Affectation des consultants"), a = r.workbook.worksheets.getItem("2. Planning - Missions"), i = r.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, i.load("values");
                                            case 6:
                                                return c = r.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 9, c.load("values");
                                            case 9:
                                                return e.next = 11, r.sync();
                                            case 11:
                                                return s = a.getCell(1, 1), e.next = 14, s.load("values");
                                            case 14:
                                                return e.next = 16, r.sync();
                                            case 16:
                                                u = i.values.flat().findIndex((function(e) {
                                                    return e === s.values[0][0]
                                                })) + 1, ve.debug && console.log("Nom de la mission :", s.values[0][0], "indexMission", u), l = Q(t), e.prev = 19, d = $().mark((function e() {
                                                    var t, n;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = f.value, ve.debug && console.log("constName à ajouter", t), n = c.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, o.getCell(u + 2, n + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), l.s();
                                            case 22:
                                                if ((f = l.n()).done) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return e.delegateYield(d(), "t0", 24);
                                            case 24:
                                                e.next = 22;
                                                break;
                                            case 26:
                                                e.next = 31;
                                                break;
                                            case 28:
                                                e.prev = 28, e.t1 = e.catch(19), l.e(e.t1);
                                            case 31:
                                                return e.prev = 31, l.f(), e.finish(31);
                                            case 34:
                                                g = Q(n), e.prev = 35, h = $().mark((function e() {
                                                    var t, n, a, i;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t = p.value, ve.debug && console.log("constName à suppr", t), n = r.workbook.worksheets.getItem(t), e.next = 5, r.sync();
                                                            case 5:
                                                                return a = n.getRangeByIndexes(u + 5, 4, 1, 78), e.next = 8, a.load("values");
                                                            case 8:
                                                                return e.next = 10, r.sync();
                                                            case 10:
                                                                if (ve.debug && console.log("rangeNbJoursMissions", a.values.flat()), 0 == a.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 16;
                                                                    break
                                                                }
                                                                return a.values = [Array(78).fill("")], e.next = 16, r.sync();
                                                            case 16:
                                                                i = c.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, o.getCell(u + 2, i + 2).values = [
                                                                    [""]
                                                                ];
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), g.s();
                                            case 38:
                                                if ((p = g.n()).done) {
                                                    e.next = 42;
                                                    break
                                                }
                                                return e.delegateYield(h(), "t2", 40);
                                            case 40:
                                                e.next = 38;
                                                break;
                                            case 42:
                                                e.next = 47;
                                                break;
                                            case 44:
                                                e.prev = 44, e.t3 = e.catch(35), g.e(e.t3);
                                            case 47:
                                                return e.prev = 47, g.f(), e.finish(47);
                                            case 50:
                                                return e.next = 52, r.sync();
                                            case 52:
                                                return r.application.calculate(), e.next = 55, r.sync();
                                            case 55:
                                                return e.next = 57, formatMissions();
                                            case 57:
                                                return e.next = 59, formatProtection();
                                            case 59:
                                                r.application.screenUpdating = !0, ve.debug = !0, showSection("sec-userForm-AffectationMissionOk"), document.getElementById("texte-AffectationMissionOk").innerText = "Consultant(s) ajouté(s) : " + t + "\nConsultant(s) retiré(s) : " + n;
                                            case 63:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [19, 28, 31, 34],
                                        [35, 44, 47, 50]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors l'ajout de la modification de l'affectation à la mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), le.apply(this, arguments)
        }

        function fe() {
            return de.apply(this, arguments)
        }

        function de() {
            return de = ee($().mark((function e() {
                var t, n;
                return $().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return ve.debug && console.log("Lancement fonction affectationConsultant"), ve.debug && console.log("Lancement fonction affectationMission"), t = Array.from(document.getElementById("listbox-AjouterMission").selectedOptions).map((function(e) {
                                return e.value
                            })), n = Array.from(document.getElementById("listbox-EnleverMission").selectedOptions).map((function(e) {
                                return e.value
                            })), ve.debug && console.log("lsMissionsAAjouter", t, "lsMissionsASuppr", n), e.next = 7, Excel.run(function() {
                                var e = ee($().mark((function e(r) {
                                    var o, a, i, c, s, u, l, f, d, g, p, h, y;
                                    return $().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r.application.screenUpdating = !1, o = r.workbook.worksheets.getItem("Affectation des consultants"), a = r.workbook.worksheets.getItem("2. Planning - Consultant"), i = r.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, i.load("values");
                                            case 6:
                                                return c = r.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 9, c.load("values");
                                            case 9:
                                                return e.next = 11, r.sync();
                                            case 11:
                                                return s = a.getCell(1, 1), e.next = 14, s.load("values");
                                            case 14:
                                                return e.next = 16, r.sync();
                                            case 16:
                                                u = s.values[0][0], l = c.values.flat().findIndex((function(e) {
                                                    return e === u
                                                })) + 1, ve.debug && console.log("Nom de la mission :", u, "indexMission", l), f = Q(t), e.prev = 20, g = $().mark((function e() {
                                                    var t, n;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = d.value, ve.debug && console.log("missionName à ajouter :", t), n = i.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, o.getCell(n + 2, l + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), f.s();
                                            case 23:
                                                if ((d = f.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.delegateYield(g(), "t0", 25);
                                            case 25:
                                                e.next = 23;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t1 = e.catch(20), f.e(e.t1);
                                            case 32:
                                                return e.prev = 32, f.f(), e.finish(32);
                                            case 35:
                                                p = Q(n), e.prev = 36, y = $().mark((function e() {
                                                    var t, n, a, c;
                                                    return $().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t = h.value, ve.debug && console.log("missionName à suppr", t), n = i.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, a = r.workbook.worksheets.getItem(u), e.next = 6, r.sync();
                                                            case 6:
                                                                return c = a.getRangeByIndexes(n + 5, 4, 1, 78), e.next = 9, c.load("values");
                                                            case 9:
                                                                return e.next = 11, r.sync();
                                                            case 11:
                                                                if (ve.debug && console.log("rangeNbJoursMissions", c.values.flat()), 0 == c.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 18;
                                                                    break
                                                                }
                                                                return ve.debug && console.log("val a supprimer"), c.values = [Array(78).fill("")], e.next = 18, r.sync();
                                                            case 18:
                                                                o.getCell(n + 2, l + 2).values = [
                                                                    [""]
                                                                ];
                                                            case 19:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), p.s();
                                            case 39:
                                                if ((h = p.n()).done) {
                                                    e.next = 43;
                                                    break
                                                }
                                                return e.delegateYield(y(), "t2", 41);
                                            case 41:
                                                e.next = 39;
                                                break;
                                            case 43:
                                                e.next = 48;
                                                break;
                                            case 45:
                                                e.prev = 45, e.t3 = e.catch(36), p.e(e.t3);
                                            case 48:
                                                return e.prev = 48, p.f(), e.finish(48);
                                            case 51:
                                                return e.next = 53, r.sync();
                                            case 53:
                                                return r.application.calculate(), e.next = 56, r.sync();
                                            case 56:
                                                return e.next = 58, formatConsultants();
                                            case 58:
                                                return e.next = 60, formatProtection();
                                            case 60:
                                                r.application.screenUpdating = !0, ve.debug = !0, showSection("sec-userForm-AffectationConsultantOk"), document.getElementById("texte-AffectationConsultantOk").innerText = "Mission(s) ajoutée(s) : " + t + "\nMission(s) retirée(s) : " + n;
                                            case 64:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [20, 29, 32, 35],
                                        [36, 45, 48, 51]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors l'ajout de la modification de l'affectation du consultant : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), de.apply(this, arguments)
        }

        function ge(e) {
            return ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ge(e)
        }

        function pe() {
            pe = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                c = a.asyncIterator || "@@asyncIterator",
                s = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    c = new M(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, c)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                E = w && w(w(j([])));
            E && E !== n && r.call(E, i) && (b = E);
            var k = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, c) {
                    var s = f(e[o], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            l = u.value;
                        return l && "object" == ge(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, c)
                        }), (function(e) {
                            n("throw", e, i, c)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, c)
                        }))
                    }
                    c(s.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var c = r.delegate;
                        if (c) {
                            var s = O(c, r);
                            if (s) {
                                if (s === y) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function M(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(S, this), this.reset(!0)
            }

            function j(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(ge(t) + " is not iterable")
            }
            return m.prototype = x, o(k, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, s, "GeneratorFunction")), e.prototype = Object.create(k), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, c, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(k), u(k, s, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = j, M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            c = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function he(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }

        function ye(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        he(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        he(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }
        c.d({}, {
            T: () => Ee,
            D: () => ve
        });
        var ve = {
            debug: !0,
            isProcessing: !1,
            nbExecModifConsultant: 1,
            nbExecModifMission: 1,
            nbExecModifEncadrant: 1,
            nbExecModifGlobal: 1
        };

        function me() {
            return me = ye(pe().mark((function e() {
                return pe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ye(pe().mark((function e(t) {
                                    var n, r, o;
                                    return pe().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (ve.debug && console.log("Initialisation du classeur : Désactivation du calcul automatique"), t.application.calculationMode = Excel.CalculationMode.manual, !ve.debug) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return n = t.application, e.next = 7, n.load("calculationState");
                                            case 7:
                                                return e.next = 9, t.sync();
                                            case 9:
                                                console.log("calculationState initial", n.calculationState);
                                            case 10:
                                                return r = t.workbook, ve.debug && console.log(r), r.worksheets.onActivated.add(xe), o = r.worksheets.getActiveWorksheet(), e.next = 16, o.load("name");
                                            case 16:
                                                return e.next = 18, t.sync();
                                            case 18:
                                                return we(o.name), e.next = 21, t.sync();
                                            case 21:
                                                ve.debug && console.log("Calcul automatique désactivé");
                                            case 23:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de l'initialisation du classeur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), me.apply(this, arguments)
        }

        function xe(e) {
            return be.apply(this, arguments)
        }

        function be() {
            return be = ye(pe().mark((function e(t) {
                return pe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ye(pe().mark((function e(t) {
                                    var n;
                                    return pe().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.workbook.worksheets.getActiveWorksheet(), e.next = 3, n.load("name");
                                            case 3:
                                                return e.next = 5, t.sync();
                                            case 5:
                                                we(n.name);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), be.apply(this, arguments)
        }

        function we(e) {
            ve.debug;
            try {
                document.querySelectorAll("section").forEach((function(e) {
                    e.style.display = "none"
                })), "1. Liste des missions" === e ? (document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex") : "2. Planning - Missions" === e ? (document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationMission").style.display = "flex") : "2. Planning - Consultant" === e && (document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationConsultant").style.display = "flex")
            } catch (e) {
                console.error("Erreur lors de la mise à jour du volet :", e)
            }
        }

        function Ee(e, t, n) {
            return ke.apply(this, arguments)
        }

        function ke() {
            return ke = ye(pe().mark((function e(t, n, r) {
                return pe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ye(pe().mark((function e(o) {
                                    var a, i, c, s, u, l, f;
                                    return pe().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, a = o.workbook, i = a.worksheets.getItem("Suivi Modif"), e.next = 5, i.load("name");
                                            case 5:
                                                return c = i.getRange("A:A").getUsedRange(), e.next = 8, c.load("rowCount");
                                            case 8:
                                                return e.next = 10, o.sync();
                                            case 10:
                                                return s = c.rowCount + 1, ve.debug && console.log("Nombre de lignes utilisées dans wsSuivi :", s), i.getCell(s - 1, 0).values = [
                                                    [t]
                                                ], i.getCell(s - 1, 1).values = [
                                                    [n]
                                                ], i.getCell(s - 1, 2).values = [
                                                    [r]
                                                ], u = "Utilisateur inconnu", ve.debug && console.log("Office.context :", Office.context), Office.context && Office.context.user && Office.context.user.displayName ? u = Office.context.user.displayName : console.warn("Impossible de récupérer le nom de l'utilisateur."), e.next = 21, o.sync();
                                            case 21:
                                                i.getCell(s - 1, 3).values = [
                                                    [u]
                                                ], l = new Date, f = "".concat(String(l.getDate()).padStart(2, "0"), "/").concat(String(l.getMonth() + 1).padStart(2, "0"), "/").concat(l.getFullYear(), " ").concat(String(l.getHours()).padStart(2, "0"), ":").concat(String(l.getMinutes()).padStart(2, "0"), ":").concat(String(l.getSeconds()).padStart(2, "0")), i.getCell(s - 1, 4).values = [
                                                    [f]
                                                ], ve.debug && console.log("Informations de suivi ajoutées pour la ligne :", s), ve.debug = !0;
                                            case 28:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors l'ajout du suivi des modifications : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ke.apply(this, arguments)
        }

        function Le() {
            return Ie.apply(this, arguments)
        }

        function Ie() {
            return Ie = ye(pe().mark((function e() {
                return pe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ye(pe().mark((function e(t) {
                                    var n;
                                    return pe().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, ve.debug && console.log("Activation de la feuille 3. Recap"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, f("3. Recap", 3);
                                            case 8:
                                                return n.screenUpdating = !0, e.next = 11, t.sync();
                                            case 11:
                                                ve.debug = !0;
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationRecap :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Ie.apply(this, arguments)
        }

        function Ce() {
            return Oe.apply(this, arguments)
        }

        function Oe() {
            return Oe = ye(pe().mark((function e() {
                return pe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ye(pe().mark((function e(t) {
                                    var n;
                                    return pe().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return ve.debug = !1, ve.debug && console.log("Activation de la feuille 1. Liste des missions"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, f("1. Liste des missions", 3);
                                            case 8:
                                                return n.screenUpdating = !0, e.next = 11, t.sync();
                                            case 11:
                                                ve.debug = !0;
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                ve.debug = !0, console.error("Erreur lors de l'exécution de ActivationListeMissions :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Oe.apply(this, arguments)
        }
        ve.debug && console.log(ve.isProcessing), Office.onReady((function(e) {
            e.host === Office.HostType.Excel && (ve.debug && console.log("Office est prêt, chargement de la fonction qui se déclenche s'il y a un changement sur le fichier"), function() {
                me.apply(this, arguments)
            }(), Excel.run(function() {
                var e = ye(pe().mark((function e(t) {
                    var n, r, o, a, i, c, s;
                    return pe().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return ve.debug && console.log("Ajout du gestionnaire de boutons."), n = t.workbook.worksheets.getActiveWorksheet(), e.next = 4, n.load("name");
                            case 4:
                                return e.next = 6, t.sync();
                            case 6:
                                ve.debug && console.log("Ajout des gestionnaires de changement pour les feuilles '1. Liste des missions', '2. Planning - Consultant', '2. Planning - Missions', '3. Planning - Encadrant, '3. Planning - Global' et '3. Recap'"), (r = t.workbook.worksheets.getItem("2. Planning - Consultant")).onActivated.add(v), r.onChanged.add(w), ve.debug && console.log("Chargement des fonctions de la feuille", r), (o = t.workbook.worksheets.getItem("2. Planning - Missions")).onActivated.add(O), o.onChanged.add(j), ve.debug && console.log("Chargement des fonctions de la feuille", o), (a = t.workbook.worksheets.getItem("3. Planning - Encadrant")).onActivated.add(q), a.onChanged.add(H), ve.debug && console.log("Chargement des fonctions de la feuille", a), (i = t.workbook.worksheets.getItem("3. Planning - Global")).onActivated.add(B), i.onChanged.add(G), ve.debug && console.log("Chargement des fonctions de la feuille", i), (c = t.workbook.worksheets.getItem("3. Recap")).onActivated.add(Le), ve.debug && console.log("Chargement des fonctions de la feuille", c), (s = t.workbook.worksheets.getItem("1. Liste des missions")).onActivated.add(Ce), ve.debug && console.log("Chargement des fonctions de la feuille", s), ve.debug && console.log("Gestionnaire de changement ajouté.");
                            case 38:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()).catch((function(e) {
                console.error("Erreur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
            })), document.getElementById("btn-AjoutMission").addEventListener("click", te), document.getElementById("btn-Suppression").addEventListener("click", te), document.getElementById("btn-ModifierAffectationMission").addEventListener("click", te), document.getElementById("btn-ModifierAffectationConsultant").addEventListener("click", te), document.querySelectorAll('[id*="btn-return"]').forEach((function(e) {
                e.addEventListener("click", te)
            })))
        }))
    })(), e = c(14385), t = c.n(e), n = new URL(c(60947), c.b), r = new URL(c(58394), c.b), o = new URL(c(98362), c.b), t()(n), t()(r), t()(o)
})();
