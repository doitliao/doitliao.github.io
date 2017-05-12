!
function(t, e) {
    var n = e(t);
    "undefined" != typeof define && (define.cmd || define.amd) && define(function() {
        return n
    })
} (window,
function(t) {
    function e(e) {
        var n = 0;
        j = !1;
        for (var c = 0; c < e.length; c++) {
            var o = t.document.createElement("script");
            o.type = "text/javascript",
            o.async = !0,
            o.src = e[c],
            o.onload = o.onreadystatechange = function() {
                "undefined" != typeof this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (j = ++n >= e.length, j && (E(), E = function() {}))
            },
            t.document.getElementsByTagName("head").item(0).appendChild(o)
        }
    }
    function n() {
        if ("undefined" == typeof JSON.stringify || "undefined" == typeof Messenger || "undefined" == typeof AqSCode) return void(t.console && t.console.log("script onload not ready"));
        S && S.lang && ("2052" == S.lang || "1033" == S.lang) && ($ = S.lang);
        var e = p({
            ele: _,
            src: b[0],
            domain: y,
            s_type: b[1],
            slide_src: b[2],
            s_type_suffix: m,
            uin: g,
            lang: $
        },
        S || {});
        q = new AqSCode(e),
        q.listen(k),
        q.start(w),
        q.end(C)
    }
    function c() {
        return q.getTicket()
    }
    function o(t, e, c) {
        "function" == typeof e ? (k = e, S = c) : (S = e, S.callback && "function" == typeof S.callback ? k = S.callback: "function" == typeof c && (k = c)),
        S && S.start && "[object Function]" == Object.prototype.toString.call(S.start) && (w = function() {
            S.start && S.start(),
            s.start()
        }),
        S && S.end && "[object Function]" == Object.prototype.toString.call(S.end) && (C = function() {
            S.end && S.end(),
            s.end()
        }),
        _ = t,
        j ? n() : E = n
    }
    function a(t) {
        q && q.refresh && q.refresh(t)
    }
    function i() {
        q && q.destroy && q.destroy()
    }
    function r(t) {
        var e = new AqSCode({
            ele: t,
            src: b[0]
        });
        return e
    }
    var d = {
        add: function(e, n, c) {
            t.document.addEventListener ? e.addEventListener(n, c, !1) : t.document.attachEvent ? e.attachEvent("on" + n, c) : e["on" + n] = c
        },
        remove: function(e, n, c) {
            t.document.removeEventListener ? e.removeEventListener(n, c, !1) : t.document.detachEvent ? e.detachEvent("on" + n, c) : e["on" + n] = null
        }
    },
    p = function(t, e, n) {
        n = n || !1;
        var c = {};
        for (var o in e) t[o] = e[o];
        if (n) {
            for (var o in t) c[o] = t[o];
            return c
        }
        return t
    },
    s = {
        id: 0,
        start: function() {
            this.id || (d.add(t.document, "click", a), this.id = 1)
        },
        end: function() {
            d.remove(t.document, "click", a),
            this.id = 0
        }
    },
    u = "https",
    l = "https://captcha.gtimg.com/2",
    f = "inner",
    h = "https" == u ? "https://ssl.captcha.qq.com": "http://captcha.qq.com",
    v = "https" == u ? "https://captcha.guard.qcloud.com": "http://captcha.guard.qcloud.com",
    y = "inner" == f ? h: v;
    l = "" != l ? l: y;
    var m = "?aid=1600001048&asig=&captype=7&protocol=https&clientype=2&disturblevel=1&apptype=1&curenv=inner",
    g = "510124997",
    $ = "";
    "1033" != $ && ($ = "2052");
    var b = [y + "/template/new_placeholder.html" + m, y + "/cap_union_new_gettype" + m, y + "/template/new_slide_placeholder.html" + m],
    j = !1,
    E = function() {};
    e([l + "/json2.js", l + "/TCapMsg.js", l + "/TCapIframe.js?v=1.0"]);
    var _, q, S, k = function() {},
    w = function() {
        s.start()
    },
    C = function() {
        s.end()
    };
    return t.capInit = o,
    t.capGetTicket = c,
    t.capRefresh = a,
    t.capDestroy = i,
    t.CapObj = r,
    {
        capInit: o,
        capGetTicket: c,
        capRefresh: a,
        capDestroy: i
    }
});