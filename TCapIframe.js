!
function(t) {
    function e(t, e, i) {
        if (t.indexOf("?") != -1) {
            var s = new RegExp("(\\?|&" + e + ")=[^&]*");
            t = s.test(t) ? t.replace(s, "$1=" + i) : t + "&" + e + "=" + i
        } else t = t + "?" + e + "=" + i;
        return t
    }
    function i(t, i) {
        for (var s in i) t = e(t, encodeURIComponent(s), encodeURIComponent(i[s]));
        return t
    }
    function s(t) {
        return o || (o = this.init(t))
    }
    function n(t) {
        t.src = "about:blank",
        t.parentNode && t.parentNode.removeChild(t),
        t.onload = null
    }
    function r(t, e) {
        return t = parseInt(t, 10),
        e = parseInt(e, 10),
        1 != t && 2 != t || 1 != e ? 1 != t && 2 != t || 4 != e ? 1 != t && 2 != t || 7 != e ? 1 != t && 2 != t || 8 != e ? 1 != t && 2 != t || 9 != e ? v["char"] : v.slidePuzzle: v.slide: v.coordinate: v.piece: v.click
    }
    var o, h = !!window.ActiveXObject,
    c = h && 8 == document.documentMode,
    a = {
        preTrigerPoint: "preTrigerPoint",
        securityCode: "securityCode"
    },
    d = function(t, e) {
        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
    },
    p = function(t) {
        return function(e) {
            return Object.prototype.toString.call(e) == "[object " + t + "]"
        }
    },
    u = p("Object"),
    l = p("Function"),
    g = function(t, e) {
        if (t && e) {
            if (u(e)) {
                for (var i in e) t.style[i] = e[i];
                return e
            }
            return d(t, e)
        }
    },
    f = function(t) {
        if ("undefined" != typeof t.offsetParent) {
            for (var e = 0,
            i = 0; t; t = t.offsetParent) {
                var s = d(t, "borderLeftWidth");
                s = s && s.indexOf("px") > -1 ? parseInt(s, 10) : 0;
                var n = d(t, "borderTopWidth");
                n = n && n.indexOf("px") > -1 ? parseInt(n, 10) : 0,
                c && (s = n = 0),
                e += t.offsetLeft + s,
                i += t.offsetTop + n
            }
            return [e, i]
        }
        return [t.x, t.y]
    },
    m = function(t) {
        var e = g(t, "width"),
        i = g(t, "height");
        return [parseInt(e, 10), parseInt(i, 10)]
    },
    y = function(t, e, i) {
        i = i || !1;
        var s = {};
        for (var n in e) t[n] = e[n];
        if (i) {
            for (var n in t) s[n] = t[n];
            return s
        }
        return t
    },
    w = function(t) {
        var e = window.document.getElementsByTagName("script")[0],
        s = window.document.createElement("script"),
        n = t.callback || "callback",
        r = "_aq_" + Math.floor(1e6 * Math.random()),
        o = window[r] = t.success ||
        function() {},
        h = t.url,
        c = {};
        c[n] = r,
        t.data && (c = y(c, t.data)),
        h = i(h, c),
        s.async = t.async || !0,
        s.src = h,
        s.onload = function() {
            s && e.parentNode && e.parentNode.removeChild(s),
            o = null
        },
        e.parentNode.insertBefore(s, e)
    },
    v = {
        "char": {
            btn_width: 298,
            height: 152,
            width: 300
        },
        click: {
            btn_width: 326,
            height: 483,
            width: 328
        },
        coordinate: {
            btn_width: 298,
            width: 300,
            height: 277
        },
        piece: {
            height: 516,
            btn_width: 362,
            width: 366
        },
        slide: {
            height: 260,
            width: 300,
            btn_width: 298
        },
        slidePuzzle: {
            height: 232,
            width: 300,
            btn_width: 298
        },
        "default": {
            btn_width: 350
        }
    },
    b = {
        minHeight: 40,
        minWidth: 230
    },
    C = {
        height: 40,
        width: 300
    },
    P = {
        height: 300,
        width: 400
    },
    S = {
        type: "point",
        ele: document.body,
        src: "",
        uin: "",
        capcd: "",
        lang: "2052",
        startFn: function() {},
        endFn: function() {}
    };
    s.prototype = {
        init: function(t) {
            return this.opts = y(S, t || {}),
            this.initOptions(),
            this.listenFunc = [],
            this.msg = new Messenger("parent"),
            this.initListener(),
            this.create(),
            this
        },
        initOptions: function() {
            this.ele = this.opts.ele,
            this.src = this.opts.src,
            this.ticket = "",
            this.randstr = "",
            this.sizeSC = y({},
            P),
            this.securityIframe = "",
            this.opts.firstvrytype && 2 == this.opts.firstvrytype && (this.src = this.opts.slide_src)
        },
        create: function() {
            var t = this;
            switch (this.opts.type) {
            case "point":
                this.createPreTrigerPoint();
                break;
            case "embed":
                w({
                    url:
                    i(t.opts.s_type, {
                        uid: this.opts.uin,
                        cap_cd: this.opts.capcd,
                        lang: this.opts.lang
                    }),
                    success: function(e) {
                        var s = r(e.capclass, e.subcapclass),
                        n = t.opts.domain + "/" + e.src + t.opts.s_type_suffix + "&sess=" + e.sess;
                        n = i(n, {
                            noBorder: "noborder"
                        }),
                        t.createSecurityCode(n, s, t.opts.ele)
                    }
                });
                break;
            case "popup":
                w({
                    url:
                    i(t.opts.s_type, {
                        uid: this.opts.uin,
                        cap_cd: this.opts.capcd,
                        lang: this.opts.lang
                    }),
                    success: function(e) {
                        var s = r(e.capclass, e.subcapclass),
                        n = t.opts.domain + "/" + e.src + t.opts.s_type_suffix + "&sess=" + e.sess;
                        n = i(n, {
                            showtype: "popup"
                        }),
                        t.createSecurityCode(n, {
                            width: s.width,
                            height: s.height + 40
                        },
                        document.body)
                    }
                })
            }
        },
        createPreTrigerPoint: function() {
            this.wrap = "",
            this.preTrigerPoint && this.nullIframe(!0);
            var t = document.createElement("div"),
            e = document.createElement("iframe");
            e.setAttribute("frameborder", "0", 0),
            e.setAttribute("border", "0"),
            e.marginheight = 0,
            e.marginwidth = 0,
            e.setAttribute("marginheight", "0", 0),
            e.setAttribute("marginwidth", "0", 0),
            e.scrolling = "no";
            var s = d(this.ele, "width"),
            n = d(this.ele, "height");
            s && "auto" != s ? parseInt(s, 10) < b.minWidth ? this.clientW = b.minWidth + "px": this.clientW = s: this.clientW = "100%",
            !n || "auto" == n || parseInt(n, 10) < b.minHeight ? this.clientH = b.minHeight + "px": this.clientH = n;
            var r = {
                width: this.clientW,
                height: this.clientH,
                border: "none",
                position: "relative",
                minHeight: b.minHeight + "px",
                minWidth: b.minWidth + "px",
                zIndex: 10
            };
            if (this.opts.firstvrytype && 2 == this.opts.firstvrytype && (this.clientW = C.width + "px", this.clientH = C.height + "px", r = {
                width: this.clientW,
                height: this.clientH,
                border: "none",
                position: "relative",
                minHeight: this.clientH,
                minWidth: this.clientW,
                zIndex: 10
            }), g(e, r), this.src) {
                this.opts.themeColor && (this.src = i(this.src, {
                    color: this.opts.themeColor
                }));
                var o = 0;
                this.clientH.length > 2 && (o = this.clientH.substr(0, this.clientH.length - 2)),
                this.src = i(this.src, {
                    uid: this.opts.uin,
                    cap_cd: this.opts.capcd,
                    height: o,
                    lang: this.opts.lang,
                    rnd: Math.floor(1e6 * Math.random())
                }),
                e.src = this.src
            }
            this.preTrigerPoint = e,
            this.wrap = t,
            this.wrap.appendChild(this.preTrigerPoint),
            this.ele.appendChild(this.wrap),
            this.initPreTriggerPointTarget()
        },
        initListener: function() {
            var t = this;
            this.listenResize(),
            this.msg.listen(function(e) {
                try {
                    var i = JSON.parse(e)
                } catch(s) {
                    return
                }
                i = i.message;
                var n = i.type;
                switch (n) {
                case 0:
                    return void t.collapsePreTriggerPoint();
                case 1:
                    return void(i.size && t.setSCheight(parseInt(i.size.height, 10)));
                case 2:
                    return void t.send2preTriggerPoint();
                case 3:
                    if (t.opts.startFn(), i && i.ticket) {
                        t.ticket = i.ticket,
                        t.randstr = i.randstr;
                        for (var o = 0,
                        h = t.listenFunc.length; o < h; o++)"embed" == t.opts.type && t.opts.keepOpen ? (t.listenFunc[o]({
                            ret: 0,
                            ticket: i.ticket,
                            randstr: i.randstr
                        }), t.opts.endFn()) : t.closeSecurityCode(function() {
                            t.listenFunc[o]({
                                ret: 0,
                                ticket: i.ticket,
                                randstr: i.randstr
                            })
                        });
                        t.listenFunc.length || ("embed" == t.opts.type && t.opts.keepOpen ? t.opts.endFn() : t.closeSecurityCode());
                        var c = parseInt(t.clientW, 10) > b.minWidth ? parseInt(t.clientW, 10) : b.minWidth;
                        t.send2preTriggerPoint(JSON.stringify({
                            message: {
                                width: c - 2,
                                type: "reduce"
                            }
                        }))
                    } else {
                        if (i && i.src) {
                            var a = r(i.captype, i.subcaptype);
                            t.createSecurityCode(i.src, a, document.body),
                            g(t.preTrigerPoint, {
                                width: a.btn_width + 2 + "px"
                            }),
                            t.send2preTriggerPoint(JSON.stringify({
                                message: {
                                    width: a.btn_width,
                                    type: "expand"
                                }
                            }))
                        }
                        t.securityIframe && t.setPosition(t.securityIframe)
                    }
                    return;
                case 4:
                    return void t.send2securityCode(JSON.stringify({
                        message:
                        {
                            type:
                            i.task
                        }
                    }));
                case 5:
                    return void t.send2preTriggerPoint(JSON.stringify({
                        message:
                        {
                            type:
                            i.task
                        }
                    }));
                case 6:
                    return void t.closeSecurityCode();
                case 7:
                    g(t.preTrigerPoint, {
                        width: i.size.btn_width + 2 + "px"
                    });
                    var d = {
                        height: i.size.height + "px",
                        width: i.size.width + "px"
                    };
                    return g(t.securityIframe, d),
                    void t.setPosition(t.securityIframe)
                }
            })
        },
        initPreTriggerPointTarget: function() {
            this.msg.addTarget(this.preTrigerPoint.contentWindow, a.preTrigerPoint)
        },
        createSecurityCode: function(t, e, s) {
            this.sizeSC.height = e && e.height ? e.height: this.sizeSC.height,
            this.sizeSC.width = e && e.width ? e.width: this.sizeSC.width;
            var n = this;
            if (this.opts.themeColor && (t = i(t, {
                color: this.opts.themeColor
            })), this.opts.type && (t = i(t, {
                showtype: this.opts.type
            })), t = i(t, {
                uid: this.opts.uin,
                cap_cd: this.opts.capcd,
                lang: this.opts.lang,
                rnd: Math.floor(1e6 * Math.random())
            }), this.hasSecurityCode()) {
                this.securityIframe.src = t;
                var r = {
                    height: this.sizeSC.height + "px",
                    width: this.sizeSC.width + "px"
                };
                return g(this.securityIframe, r),
                void this.setPosition(n.securityIframe)
            }
            var o = document.createElement("iframe");
            o.setAttribute("frameborder", "0", 0),
            o.setAttribute("border", "0"),
            o.marginheight = 0,
            o.marginwidth = 0,
            o.setAttribute("marginheight", "0", 0),
            o.setAttribute("marginwidth", "0", 0);
            var r = {
                width: this.sizeSC.width + "px",
                height: this.sizeSC.height + "px",
                border: "0px",
                position: "embed" == this.opts.type ? "relative": "absolute",
                left: "0px",
                top: "0px",
                zIndex: 1e4
            };
            g(o, r),
            this.securityIframe = o,
            s.appendChild(o),
            o.src = t,
            this.setPosition(o),
            this.initSecurityCodeTarget()
        },
        hasSecurityCode: function() {
            var t = !!this.securityIframe && this.securityIframe;
            return t
        },
        initSecurityCodeTarget: function() {
            this.msg.addTarget(this.securityIframe.contentWindow, a.securityCode)
        },
        destroy: function() {
            o && (this.closeSecurityCode(), this.listenFunc = [], this.msg.clear(), this.clearContainer(), this.ele = "", o = "")
        },
        refresh: function(t) {
            o && (this.closeSecurityCode(), this.clearContainer(), this.initOptions(), t && u(t) && (t.uin && (this.opts.uin = t.uin), t.capcd && (this.opts.capcd = t.capcd)), this.create())
        },
        clearContainer: function() {
            "popup" != this.opts.type && this.ele && (this.ele.innerHTML = "")
        },
        setSrc: function(t) {
            this.tpl.src = t
        },
        listen: function(t) {
            this.listenFunc.push(t)
        },
        clear: function() {
            this.listenFunc.length = 0
        },
        send2preTriggerPoint: function(t) {
            if ("point" == this.opts.type) {
                var e = a.preTrigerPoint;
                this.msg.targets[e].send(t)
            }
        },
        send2securityCode: function(t) {
            var e = a.securityCode;
            this.msg.targets[e].send(t)
        },
        setSCheight: function(t) {
            g(this.securityIframe, {
                height: t + "px"
            }),
            this.sizeSC.height = t,
            this.setPosition(this.securityIframe)
        },
        getPTPpos: function() {
            return f(this.preTrigerPoint)
        },
        getSCsize: function() {
            return [this.sizeSC.width, this.sizeSC.height]
        },
        getPTPsize: function() {
            return m(this.preTrigerPoint)
        },
        setPosition: function(t) {
            if ("embed" != this.opts.type) {
                var e = 0,
                i = 0;
                if ("popup" == this.opts.type) {
                    var s = this.getSCsize(),
                    n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    e = (r - s[1]) / 2,
                    i = (n - s[0]) / 2
                }
                if ("point" == this.opts.type) {
                    var o = this.getPTPpos(),
                    h = this.getPTPsize();
                    e = o[1] + h[1],
                    i = o[0]
                }
                return g(t, {
                    top: e + "px",
                    left: i + "px"
                })
            }
        },
        closeSecurityCode: function(t) {
            this.opts.endFn(),
            this.securityIframe && this.nullIframe(),
            l(t) && t(),
            window.CollectGarbage && window.CollectGarbage()
        },
        listenResize: function() {
            var t = this;
            window.onresize = function() {
                t.securityIframe && t.setPosition(t.securityIframe)
            }
        },
        getTicket: function() {
            return {
                ticket: this.ticket,
                randstr: this.randstr
            }
        },
        collapsePreTriggerPoint: function() {
            c || g(this.preTrigerPoint, {
                width: this.clientW
            })
        },
        start: function(t) {
            this.opts.startFn = t
        },
        end: function(t) {
            this.opts.endFn = t
        },
        nullIframe: function(t) {
            return t ? (n(this.preTrigerPoint), void(this.preTrigerPoint = null)) : (n(this.securityIframe), void(this.securityIframe = null))
        }
    },
    t.AqSCode = s
} (window);