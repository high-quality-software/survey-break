﻿if (!window.console) var console = {
    log: function () { }
};
(function (e) {
    e.fn.columns = function (n) {
        var r = [],
            i = Array.prototype.slice.call(arguments, 1);
        typeof n == "string" ? this.each(function () {
            var t = e.data(this, "columns");
            if (typeof t == "undefined" || !e.isFunction(t[n])) return e.error('No such method "' + n + '" for Columns');
            var s = t[n].apply(t, i);
            s !== undefined && s !== t && r.push(s)
        }) : this.each(function () {
            e.data(this, "columns") || e.data(this, "columns", new t(this, n))
        });
        return r.length === 0 ? this.data("columns") : r.length === 1 ? r[0] : r
    };
    var t = function (t, n) {
        this.$el = e(t);
        n && e.extend(this, n);
        this.VERSION = "2.2.2";
        this.sort = function () {
            function n(e, n, r) {
                n = n ? -1 : 1;
                return function (i, s) {
                    i = i[e];
                    s = s[e];
                    if (t.test(i) && t.test(s)) {
                        i = new Date(i);
                        i = Date.parse(i);
                        s = new Date(s);
                        s = Date.parse(s)
                    } else if (typeof r != "undefined") {
                        i = r(i);
                        s = r(s)
                    }
                    return i < s ? n * -1 : i > s ? n * 1 : 0
                }
            }
            var e = this,
                t = /^(Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|September|Oct|October|Nov|November|Dec|December|(0?\d{1})|(10|11|12))(-|\s|\/|\.)(0?[1-9]|(1|2)[0-9]|3(0|1))(-|\s|\/|\.|,\s)(19|20)?\d\d$/i;
            e.total && e.sortBy && typeof e.data[0][e.sortBy] != "undefined" && e.data.sort(n(e.sortBy, e.reverse))
        };
        this.filter = function () {
            var t = this,
                n = t.searchableFields.length;
            if (t.query) {
                var r = new RegExp(t.query, "gi");
                t.data = e.grep(t.data, function (e) {
                    for (var i = 0; i < n; i++)
                        if (typeof e[t.searchableFields[i]] == "string") {
                            if (e[t.searchableFields[i]].match(r)) return !0
                        } else if (typeof e[t.searchableFields[i]] == "number" && e[t.searchableFields[i]] == t.query) return !0;
                    return !1
                })
            }
            t.total = t.data.length
        };
        this.paginate = function () {
            var e = this;
            e.pages = Math.ceil(e.data.length / e.size);
            e.page = e.page <= e.pages ? e.page : 1;
            e.setRange();
            e.data = e.data.slice(e.range.start - 1, e.range.end)
        };
        this.condition = function () {
            var e = this,
                t = [];
            if (e.schema) {
                var n = e.data.length,
                    r = e.schema.length;
                for (var i = 0; i < n; i++) {
                    var s = e.data[i],
                        o = {};
                    for (var u = 0; u < r; u++) {
                        var a = e.schema[u];
                        if (a.condition && !a.condition(s[a.key])) {
                            o = null;
                            break
                        }
                        o[a.key] = s[a.key]
                    }
                    o && t.push(o)
                }
                e.data = t
            }
        };
        this.chevron = function (e, t) {
            return Mustache.render(e, t)
        };
        this.create = function () {
            function n() {
                t.thead = [];
                e.each(t.schema, function (n, r) {
                    if (!r.hide) {
                        var i = {};
                        e.inArray(r.key, t.sortableFields) === -1 ? i.notSortable = !0 : t.sortBy === r.key ? t.reverse ? i.sortedDown = !0 : i.sortedUp = !0 : i.sortable = !0;
                        i.key = r.key;
                        i.header = r.header;
                        if (r.key != "ID") {
                            t.thead.push(i)
                        }
                    }
                })
            }

            function r(n, r) {
                var i = [];
                if (r.Note == undefined) {
                    n % 2 === 0 ? i.push('<tr onclick="GetForms(event,\'' + r.ID + '\')" data-columns-row-id="' + n + '" class="' + t.evenRowClass + '">') : i.push('<tr onclick="GetForms(event,\'' + r.ID + '\')" data-columns-row-id="' + n + '" class="' + t.oddRowClass + '">');
                } else {
                    n % 2 === 0 ? i.push('<tr onclick="GetNote(event,\'' + r.ID + '\')" data-columns-row-id="' + n + '" class="' + t.evenRowClass + '">') : i.push('<tr onclick="GetNote(event,\'' + r.ID + '\')" data-columns-row-id="' + n + '" class="' + t.oddRowClass + '">');
                }
                e.each(t.schema, function (e, n) {
                    n.hide || (n.template ? i.push("<td>" + t.chevron(n.template, r) + "</td>") : (n.key != "ID") ? i.push("<td>" + r[n.key] + "</td>"): i.push(""))
                });
                i.push("</tr>");
                return i
            }

            function i() {
                var n = [];
                n.push("<select>");
                e.each(t.showRows, function (e, r) {
                    var i = '<option value="' + r + '"';
                    r === t.size && (i += 'selected="selected"');
                    i += ">" + r + "</option>";
                    n.push(i)
                });
                n.push("</select>");
                t.showRowsMenu = n.join("")
            }

            function s() {
                t.rows = [];
                t.total ? e.each(t.data, function (e, i) {
                    e === 0 && n();
                    t.rows.push(r(e, i).join(""))
                }) : t.rows.push('<tr class="' + t.evenRowClass + '"><td colspan="' + t.schema.length + '"><em>No Results</em></td>')
            }
            var t = this;
            t.resetData();
            t.searching && t.filter();
            t.sorting && t.sort();
            t.paginating && t.paginate();
            s();
            i();
            var o = {
                prevPage: t.page - 1,
                nextPage: t.page + 1,
                prevPageExists: t.pageExists(t.page - 1),
                nextPageExists: t.pageExists(t.page + 1),
                resultRange: t.range,
                tableTotal: t.total,
                showRowsMenu: t.showRowsMenu,
                rows: t.rows,
                headers: t.thead,
                query: t.query,
                search: t.search,
                table: t.table
            };
            e.extend(t.view, o);
            t.plugins && e.each(t.plugins, function (e, n) {
                typeof ColumnsPlugins != "undefined" && typeof ColumnsPlugins[n] != "undefined" && ColumnsPlugins[n].create.call(t)
            });
            if (t.search) {
                t.$el.html(t.chevron(t.template, t.view));
                t.search = !1
            } else {
                e("[data-columns-table]", t.$el).remove();
                t.$el.append(t.chevron(t.template, t.view))
            }
            return !0
        };
        this.init = function () {
            function n() {
                t.schema = [];
                e.each(t.data[0], function (e) {
                    t.schema.push({
                        header: e,
                        key: e
                    })
                })
            }

            function r() {
                t.searchableFields = [];
                e.each(t.data[0], function (e) {
                    t.searchableFields.push(e)
                })
            }

            function i() {
                t.sortableFields = [];
                e.each(t.data[0], function (e) {
                    t.sortableFields.push(e)
                })
            }

            function s() {
                e.ajax({
                    url: t.templateFile,
                    async: !1,
                    success: function (e) {
                        t.template = e
                    },
                    error: function () {
                        e.error("Template could not be found.")
                    }
                })
            }
            var t = this;
            if (e.isArray(t.data)) {
                t.master = [];
                t.view = {};
                t.$el.addClass("columns");
                t.$el.on("click", ".ui-table-sortable", function (n) {
                    var r = e(this).data("columns-sortby");
                    t.sortBy === r && (t.reverse = t.reverse ? !1 : !0);
                    t.sortBy = r;
                    t.sortHandler(n)
                });
                t.$el.on("click", ".ui-table-control-next, .ui-table-control-prev", function (n) {
                    t.page = e(this).data("columns-page");
                    t.pageHandler(n)
                });
                t.$el.on("keyup", ".ui-table-search", function (n) {
                    t.query = e(this).val();
                    t.searchHandler(n)
                });
                t.$el.on("change", ".ui-table-size select", function (n) {
                    t.size = parseInt(e(this).val());
                    t.sizeHandler(n)
                });
                t.plugins && e.each(t.plugins, function (e, n) {
                    typeof ColumnsPlugins != "undefined" && typeof ColumnsPlugins[n] != "undefined" && ColumnsPlugins[n].init.call(t)
                });
                t.conditioning && t.condition();
                t.schema || n();
                t.searchableFields || r();
                t.sortableFields || i();
                t.templateFile && s();
                e.extend(t.master, t.data);
                t.create()
            } else e.error('The "data" parameter must be an array.')
        };
        this.init()
    };
    t.prototype = {
        evenRowClass: "ui-table-rows-even",
        oddRowClass: "ui-table-rows-odd",
        liveSearch: !0,
        page: 1,
        pages: 1,
        plugins: null,
        query: null,
        reverse: !1,
        pagination: !0,
        schema: null,
        search: !0,
        searchableFields: null,
        showRows: [5, 10, 25, 50],
        size: 5,
        sortableFields: null,
        sortBy: null,
        table: !0,
        templateFile: null,
        template: '<!-- Search Box: Only rendered while search is true --> {{#search}} <div class="ui-columns-search"> <input class="ui-table-search" placeholder="Search" type="text" name="query" data-columns-search="true" value="{{query}}" /> </div> {{/search}} <!-- Search Box: Only rendered while search is true --> <!-- Columns Table: Only rendered while table is true --> {{#table}} <div class="ui-columns-table" data-columns-table="true"> <table class="ui-table"> <!-- Columns Table Head: Headers have 4 possible states (sortable, notSortable, sortedUp, sortedDown) --> <thead> {{#headers}} {{#sortable}} <th class="ui-table-sortable" data-columns-sortby="{{key}}">{{header}}</th> {{/sortable}} {{#notSortable}} <th class="">{{header}}</th> {{/notSortable}} {{#sortedUp}} <th class="ui-table-sort-up ui-table-sortable" data-columns-sortby="{{key}}">{{header}} <span class="ui-arrow">&#x25B2;</span></th> {{/sortedUp}} {{#sortedDown}} <th class="ui-table-sort-down ui-table-sortable" data-columns-sortby="{{key}}">{{header}} <span class="ui-arrow">&#x25BC;</span></th> {{/sortedDown}} {{/headers}} </thead> <!-- Columns Table Head: Headers have 4 possible states (sortable, notSortable, sortedUp, sortedDown) --> <!-- Columns Table Body: Table columns are rendered outside of this template  --> <tbody> {{#rows}} {{{.}}} {{/rows}} </tbody> <!-- Columns Table Body: Table columns are rendered outside of this template  --> </table> <!-- Columns Controls  --> <div class="ui-table-footer"> <span class="ui-table-size">Show rows: {{{showRowsMenu}}}</span> <span class="ui-table-results">Results: <strong>{{resultRange.start}} &ndash; {{resultRange.end}}</strong> of <strong>{{tableTotal}}</strong> </span> <span class="ui-table-controls"> {{#prevPageExists}} <span class="ui-table-control-prev" data-columns-page="{{prevPage}}"> <img src="images/arrow-left.png"> </span> {{/prevPageExists}} {{^prevPageExists}} <span class="ui-table-control-disabled"> <img src="images/arrow-left.png"> </span> {{/prevPageExists}} {{#nextPageExists}} <span class="ui-table-control-next" data-columns-page="{{nextPage}}"> <img src="images/arrow-right.png"> </span> {{/nextPageExists}} {{^nextPageExists}} <span class="ui-table-control-disabled"> <img src="images/arrow-right.png"> </span> {{/nextPageExists}} </span> </div> <!-- Columns Controls  --> </div> {{/table}} <!-- Columns Table: Only rendered while table is true -->',
        conditioning: !0,
        paginating: !0,
        searching: !0,
        sorting: !0,
        pageHandler: function () {
            this.create()
        },
        searchHandler: function (e) {
            this.liveSearch ? this.create() : e.keyCode == "13" && this.create()
        },
        sizeHandler: function () {
            this.create()
        },
        sortHandler: function () {
            this.page = 1;
            this.create()
        },
        destroy: function () {
            this.$el.data("columns", null);
            this.$el.empty();
            return !0
        },
        getObject: function () {
            return this
        },
        getPage: function () {
            return this.page
        },
        getQuery: function () {
            return this.query
        },
        getRange: function () {
            return this.range
        },
        getRows: function () {
            return this.rows
        },
        getShowRowsMenu: function () {
            return this.showRowsMenu
        },
        getTemplate: function () {
            return this.template
        },
        getThead: function () {
            return this.thead
        },
        getTotal: function () {
            return this.total
        },
        getVersion: function () {
            return this.VERSION
        },
        getView: function () {
            return this.view
        },
        gotoPage: function (e) {
            if (this.pageExists(e)) {
                this.page = e;
                this.create();
                return !0
            }
            return !1
        },
        pageExists: function (e) {
            return e > 0 && e <= this.pages ? !0 : !1
        },
        resetData: function (e) {
            this.data = this.master.slice(0);
            return this.data
        },
        setMaster: function (t) {
            if (e.isArray(t)) {
                this.master = t;
                return !0
            }
            return !1
        },
        setPage: function (e) {
            this.page = this.pageExists(e) ? e : this.page;
            return this.page
        },
        setRange: function () {
            var e = (this.page - 1) * this.size,
                t = e + this.size < this.total ? e + this.size : this.total;
            this.range = {
                start: e + 1,
                end: t
            }
        },
        setTotal: function (e) {
            this.total = e;
            return !0
        },
        startTime: null,
        endTime: null,
        startTimer: function () {
            var e = new Date;
            this.startTime = e.getTime()
        },
        endTimer: function () {
            var e = new Date;
            this.endTime = e.getTime()
        },
        getTimer: function () {
            console.log((this.endTime - this.startTime) / 1e3)
        }
    }
})(jQuery);
(function (e, t) {
    e.Mustache = t({})
})(this, function (e) {
    function r(e) {
        return typeof e == "function"
    }

    function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function o(e, t) {
        return s.call(e, t)
    }

    function a(e) {
        return !o(u, e)
    }

    function l(e) {
        return String(e).replace(/[&<>"'\/]/g, function (e) {
            return f[e]
        })
    }

    function m(t, r) {
        function m() {
            if (f && !l)
                while (u.length) delete o[u.pop()];
            else u = [];
            f = !1;
            l = !1
        }

        function x(e) {
            typeof e == "string" && (e = e.split(h, 2));
            if (!n(e) || e.length !== 2) throw new Error("Invalid tags: " + e);
            w = new RegExp(i(e[0]) + "\\s*");
            E = new RegExp("\\s*" + i(e[1]));
            S = new RegExp("\\s*" + i("}" + e[1]))
        }
        if (!t) return [];
        var s = [],
            o = [],
            u = [],
            f = !1,
            l = !1,
            w, E, S;
        x(r || e.tags);
        var T = new b(t),
            N, C, k, L, A, O;
        while (!T.eos()) {
            N = T.pos;
            k = T.scanUntil(w);
            if (k)
                for (var M = 0, _ = k.length; M < _; ++M) {
                    L = k.charAt(M);
                    a(L) ? u.push(o.length) : l = !0;
                    o.push(["text", L, N, N + 1]);
                    N += 1;
                    L === "\n" && m()
                }
            if (!T.scan(w)) break;
            f = !0;
            C = T.scan(v) || "name";
            T.scan(c);
            if (C === "=") {
                k = T.scanUntil(p);
                T.scan(p);
                T.scanUntil(E)
            } else if (C === "{") {
                k = T.scanUntil(S);
                T.scan(d);
                T.scanUntil(E);
                C = "&"
            } else k = T.scanUntil(E);
            if (!T.scan(E)) throw new Error("Unclosed tag at " + T.pos);
            A = [C, k, N, T.pos];
            o.push(A);
            if (C === "#" || C === "^") s.push(A);
            else if (C === "/") {
                O = s.pop();
                if (!O) throw new Error('Unopened section "' + k + '" at ' + N);
                if (O[1] !== k) throw new Error('Unclosed section "' + O[1] + '" at ' + N)
            } else C === "name" || C === "{" || C === "&" ? l = !0 : C === "=" && x(k)
        }
        O = s.pop();
        if (O) throw new Error('Unclosed section "' + O[1] + '" at ' + T.pos);
        return y(g(o))
    }

    function g(e) {
        var t = [],
            n, r;
        for (var i = 0, s = e.length; i < s; ++i) {
            n = e[i];
            if (n)
                if (n[0] === "text" && r && r[0] === "text") {
                    r[1] += n[1];
                    r[3] = n[3]
                } else {
                    t.push(n);
                    r = n
                }
        }
        return t
    }

    function y(e) {
        var t = [],
            n = t,
            r = [],
            i, s;
        for (var o = 0, u = e.length; o < u; ++o) {
            i = e[o];
            switch (i[0]) {
                case "#":
                case "^":
                    n.push(i);
                    r.push(i);
                    n = i[4] = [];
                    break;
                case "/":
                    s = r.pop();
                    s[5] = i[2];
                    n = r.length > 0 ? r[r.length - 1][4] : t;
                    break;
                default:
                    n.push(i)
            }
        }
        return t
    }

    function b(e) {
        this.string = e;
        this.tail = e;
        this.pos = 0
    }

    function w(e, t) {
        this.view = e == null ? {} : e;
        this.cache = {
            ".": this.view
        };
        this.parent = t
    }

    function E() {
        this.cache = {}
    }
    var t = Object.prototype.toString,
        n = Array.isArray || function (e) {
            return t.call(e) === "[object Array]"
        },
        s = RegExp.prototype.test,
        u = /\S/,
        f = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        c = /\s*/,
        h = /\s+/,
        p = /\s*=/,
        d = /\s*\}/,
        v = /#|\^|\/|>|\{|&|=|!/;
    b.prototype.eos = function () {
        return this.tail === ""
    };
    b.prototype.scan = function (e) {
        var t = this.tail.match(e);
        if (!t || t.index !== 0) return "";
        var n = t[0];
        this.tail = this.tail.substring(n.length);
        this.pos += n.length;
        return n
    };
    b.prototype.scanUntil = function (e) {
        var t = this.tail.search(e),
            n;
        switch (t) {
            case -1:
                n = this.tail;
                this.tail = "";
                break;
            case 0:
                n = "";
                break;
            default:
                n = this.tail.substring(0, t);
                this.tail = this.tail.substring(t)
        }
        this.pos += n.length;
        return n
    };
    w.prototype.push = function (e) {
        return new w(e, this)
    };
    w.prototype.lookup = function (e) {
        var t = this.cache,
            n;
        if (e in t) n = t[e];
        else {
            var i = this,
                s, o;
            while (i) {
                if (e.indexOf(".") > 0) {
                    n = i.view;
                    s = e.split(".");
                    o = 0;
                    while (n != null && o < s.length) n = n[s[o++]]
                } else n = i.view[e];
                if (n != null) break;
                i = i.parent
            }
            t[e] = n
        }
        r(n) && (n = n.call(this.view));
        return n
    };
    E.prototype.clearCache = function () {
        this.cache = {}
    };
    E.prototype.parse = function (e, t) {
        var n = this.cache,
            r = n[e];
        r == null && (r = n[e] = m(e, t));
        return r
    };
    E.prototype.render = function (e, t, n) {
        var r = this.parse(e),
            i = t instanceof w ? t : new w(t);
        return this.renderTokens(r, i, n, e)
    };
    E.prototype.renderTokens = function (t, i, s, o) {
        function f(e) {
            return a.render(e, i, s)
        }
        var u = "",
            a = this,
            l, c;
        for (var h = 0, p = t.length; h < p; ++h) {
            l = t[h];
            switch (l[0]) {
                case "#":
                    c = i.lookup(l[1]);
                    if (!c) continue;
                    if (n(c))
                        for (var d = 0, v = c.length; d < v; ++d) u += this.renderTokens(l[4], i.push(c[d]), s, o);
                    else if (typeof c == "object" || typeof c == "string") u += this.renderTokens(l[4], i.push(c), s, o);
                    else if (r(c)) {
                        if (typeof o != "string") throw new Error("Cannot use higher-order sections without the original template");
                        c = c.call(i.view, o.slice(l[3], l[5]), f);
                        c != null && (u += c)
                    } else u += this.renderTokens(l[4], i, s, o);
                    break;
                case "^":
                    c = i.lookup(l[1]);
                    if (!c || n(c) && c.length === 0) u += this.renderTokens(l[4], i, s, o);
                    break;
                case ">":
                    if (!s) continue;
                    c = r(s) ? s(l[1]) : s[l[1]];
                    c != null && (u += this.renderTokens(this.parse(c), i, s, c));
                    break;
                case "&":
                    c = i.lookup(l[1]);
                    c != null && (u += c);
                    break;
                case "name":
                    c = i.lookup(l[1]);
                    c != null && (u += e.escape(c));
                    break;
                case "text":
                    u += l[1]
            }
        }
        return u
    };
    e.name = "mustache.js";
    e.version = "0.8.1";
    e.tags = ["{{", "}}"];
    var S = new E;
    e.clearCache = function () {
        return S.clearCache()
    };
    e.parse = function (e, t) {
        return S.parse(e, t)
    };
    e.render = function (e, t, n) {
        return S.render(e, t, n)
    };
    e.to_html = function (t, n, i, s) {
        var o = e.render(t, n, i);
        if (!r(s)) return o;
        s(o)
    };
    e.escape = l;
    e.Scanner = b;
    e.Context = w;
    e.Writer = E;
    return e
});
