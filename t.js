[
// 1. 
function(t, e, n) {
        var o = n(1),
            i = n(2),
            a = n(5),
            s = n(18),
            r = n(8),
            c = n(3),
            p = "",
            l = "noborder";
        o(function() {
            var t = new i;
            p && t.set("color", "#" + p),
                "noborder" != l && t.addBorder(),
                s.init(t),
                a.init(),
                o("#title").html(c.c2),
                o("#change_pic").html(c.c5),
                o("#feedback").html(c.c4),
                o("#main_word").html(c.c3),
                o("#slide_bkg").html(c.puzzle1),
                setTimeout(function() {
                        r.send()
                    },
                    1e3)
        })
    },
// 2.
    function(t, e) {
        t.exports = jQuery
    },
// 3.
    function(t, e, n) {
        function o(t) {
            this.opts = i.extend(a, t || {})
        }
        var i = n(1),
            a = {
                color: "#1a79ff",
                color_e: "#b3b3b3",
                borderEle: i(".container_wrap"),
                fontEles: [i(".radio"), i(".tip")],
                bgEles: [i(".btn_primary")]
            };
        o.prototype.addBorder = function() {
                this.opts.borderEle.addClass("cap_container")
            },
            o.prototype.addBorderTop = function() {
                this.opts.borderEle.addClass("cap_container_top cap_container_shadow")
            },
            o.prototype.dealEvents = function(t) {
                t.css("color", this.opts.color)
            },
            o.prototype.unDealEvents = function(t) {
                t.css("color", this.opts.color_e)
            },
            o.prototype.setElements = function() {
                for (var t = this.opts.color,
                        e = this.opts.fontEles,
                        n = 0; n < e.length; n++) e[n].each(function() {
                    i(this).css("color", t)
                });
                for (var o = this.opts.bgEles,
                        a = 0; a < o.length; a++) o[a].each(function() {
                    i(this).css({
                        background: t,
                        "border-color": t
                    })
                })
            },
            o.prototype.set = function(t, e) {
                t in this.opts && (this.opts[t] = e)
            },
            t.exports = o
    },
// 4.
    function(t, e) {
        t.exports = captcha
    },
// 5. 
,
// 6.
    function(t, e, n) {
        var o = n(1),
            i = {
                _check: function() {
                    return "maxLength" in document.createElement("textarea")
                },
                init: function() {
                    this._check() || this.fix()
                },
                fix: function() {
                    o("textarea[maxlength]").each(function(t, e) {
                        var n = o(this),
                            i = parseInt(n.attr("maxlength"), 10);
                        i > 0 && n.keyup(function() {
                            var t = n.val();
                            t.length > i && (t = t.substring(0, i)),
                                n.val(t)
                        })
                    })
                }
            };
        t.exports = i
    },
// 7.
 , 
// 8.
,
// 9.
    function(t, e) {
        var n = !!window.ActiveXObject,
            o = {
                timePoints: [],
                flag1: 21406,
                flag2: 1,
                flag3: 1,
                push: function(t, e) {
                    this.timePoints[t] = e
                },
                set: function(t, e, n) {
                    this.flag1 = t,
                        this.flag2 = e,
                        this.flag3 = n
                },
                send: function(t) {
                    var e = [];
                    if (t) e.push(t + "=" + this.timePoints[t]);
                    else {
                        if (!n && window.performance && window.performance.timing) {
                            var o = window.performance.timing;
                            this.timePoints[20] = o.loadEventEnd - o.navigationStart,
                                this.timePoints[21] = o.domComplete - o.responseEnd,
                                this.timePoints[22] = o.domainLookupEnd - o.domainLookupStart,
                                this.timePoints[23] = o.responseStart - o.navigationStart,
                                this.timePoints[24] = o.connectEnd - o.connectStart
                        }
                        for (var i = 0; 33 > i; i++) "undefined" != typeof this.timePoints[i] && e.push(i + "=" + this.timePoints[i])
                    }
                    var a, s = "flag1=" + this.flag1 + "&flag2=" + this.flag2 + "&flag3=" + this.flag3 + "&" + e.join("&");
                    a = -1 == window.location.href.indexOf("https") ? "http://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(s) : "https://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(s),
                        imgSendTimePoint = new Image,
                        imgSendTimePoint.src = a
                }
            };
        t.exports = o
    },
// 10.
    function(t, e) {
        var n = function(t) {
            var e = {
                id: "",
                time: t,
                start: function(t) {
                    this.end();
                    var e = this.time,
                        n = this;
                    this.id = setTimeout(function() {
                            t(n)
                        },
                        e)
                },
                end: function() {
                    clearTimeout(this.id)
                }
            };
            return e
        };
        t.exports = n
    },
// 11.
    function(t, e) {
        function n(t) {
            "undefined" != typeof TDC && TDC.setData && TDC.setData(t)
        }

        function o() {
            "undefined" != typeof TDC && TDC.clearTc && TDC.clearTc()
        }

        function i() {
            var t = "";
            return "undefined" != typeof TDC && TDC.getData && (t = TDC.getData(!0)),
                t
        }
        t.exports = {
            setData: n,
            getData: i,
            clearData: o
        }
    },
// 12.
    function(t, e, n) {
        var o = n(1),
            i = {
                header: o(".container_head"),
                hideTitle: function() {
                    this.header.find(".title").hide()
                },
                showTitle: function() {
                    this.header.find(".title").show()
                },
                setTitle: function(t) {
                    this.header.find(".title").html(t)
                },
                show: function(t) {
                    this.header.show()
                },
                init: function(t) {
                    this.header.find(".icon_close").on("mouseenter mouseleave click",
                        function(e) {
                            var n = o(this);
                            "mouseenter" == e.type && t.theme && t.theme.dealEvents(n),
                                "mouseleave" == e.type && t.theme && t.theme.unDealEvents(n),
                                "click" == e.type && t.close && t.close()
                        })
                }
            };
        t.exports = i
    },
// 13.
 , 
// 14.
, 
// 15.
,
// 16.
 ,
// 17.
    function(t, e, n) {
        var o = n(1),
            i = function() {
                function t() {
                    o(document).on("mousemove touchmove", r),
                        o(document).on("mouseup touchend", s)
                }

                function e() {
                    o(document).off("mousemove touchmove"),
                        o(document).off("mouseup touchend")
                }

                function n(t) {
                    return t.originalEvent.touches[0]
                }

                function i() {
                    _ = !1
                }

                function a(e) {
                    _ && (g = !0, ele_l = p.offset().left, ele_t = p.offset().top, u = e.pageX - ele_l, f = e.pageY - ele_t, "touchstart" == e.type && (u = n(e).clientX - ele_l, f = n(e).clientY - ele_t), t(), b.start())
                }

                function s(t) {
                    g = !1,
                        e(),
                        b.stop(m)
                }

                function r(t) {
                    var e = t.pageX,
                        o = t.pageY,
                        i = {},
                        a = t.pageX - u - h,
                        r = t.pageY - f - d;
                    "touchmove" == t.type && (e = n(t).clientX, o = n(t).clientY, a = n(t).clientX - u - h, r = n(t).clientY - f - d);
                    var c = $container.width() - p.width(),
                        l = $container.height() - p.height();
                    return w && y && (0 > a || 0 > r || a > c || r > l) ? void s(t) : (0 > a && (a = 0), a > c && (a = c), 0 > r && (r = 0), r > l && (r = l), m.left = a, m.top = r, i.left = e, i.top = o, b.draging(m, i), p.css(m), t.stopPropagation(), !1)
                }

                function c() {
                    p.css(l)
                }
                var p, l = {},
                    u = 0,
                    f = 0,
                    h = 0,
                    d = 0,
                    m = {},
                    g = !1,
                    v = !!window.ActiveXObject,
                    w = v && (8 == document.documentMode || 7 == document.documentMode),
                    y = !1,
                    _ = !0,
                    b = {
                        stop: function() {},
                        start: function() {},
                        draging: function() {}
                    },
                    D = function(t) {
                        b = o.extend(b, t || {}),
                            p = b.ele,
                            $container = b.container,
                            h = $container.offset().left,
                            d = $container.offset().top,
                            y = b.bubble || !1,
                            l.left = p.css("left"),
                            l.top = p.css("top"),
                            p.on("mousedown touchstart", a),
                            p[0].dispatchEvent = null
                    },
                    x = {
                        init: D,
                        goBack: c,
                        stop: s,
                        cancel: i,
                        hasMouseDown: function() {
                            return g
                        }
                    };
                return x
            };
        t.exports = i
    },
// 18.
    function(t, e) {
        function n() {
            p = c = +new Date
        }

        function o(t, e) {
            var n = +new Date;
            r.length < s && r.push({
                x: Math.floor(t),
                y: Math.floor(e),
                t: n - c
            })
        }

        function i() {
            r.length = 0
        }

        function a(t) {
            for (var e, n = [], o = 0; o < t.length; o++) {
                var i = t[o];
                n.push(0 == o ? [i.x, i.y, i.t] : [i.x - e.x, i.y - e.y, Number((i.t - e.t).toFixed(3))]),
                    e = i
            }
            return n
        }
        var s = 300,
            r = [],
            c = +new Date,
            p = +new Date;
        t.exports = {
            start: n,
            end: i,
            push: o,
            getData: function() {
                return a(r)
            }
        }
    },
// 19.
    function(t, e, n) {
        function o(t) {
            s.addTarget(window.parent, "parent"),
                i.init({
                    theme: t,
                    success: function(t) {
                        try {
                            var e = {
                                message: {
                                    type: 3,
                                    ticket: t.ticket,
                                    randstr: t.randstr
                                }
                            };
                            s.targets.parent.send(JSON.stringify(e))
                        } catch (n) {}
                    }
                }),
                a.init({
                    theme: t,
                    close: function() {
                        try {
                            var t = {
                                message: {
                                    type: 6
                                }
                            };
                            s.targets.parent.send(JSON.stringify(t))
                        } catch (e) {}
                    }
                }),
                "popup" == r && (t.addBorderTop(), a.show());
            var e = document.createElement("script");
            e.type = "text/javascript",
                "inner" == c ? e.src = "//tajs.qq.com/stats?sId=55818628" : e.src = "//tajs.qq.com/stats?sId=57126461",
                document.getElementsByTagName("head").item(0).appendChild(e)
        }
        var i = (n(1), n(9), n(19)),
            a = n(11),
            s = new Messenger("securityCode"),
            r = "embed",
            c = "inner";
        t.exports = {
            init: o
        }
    },
// 20.
    function(t, e, n) {
        function o(t) {
            "popup" == k ? m(".container_wrap").css("height", "268px") : "point" == k && m(".container_wrap").css("height", "228px"),
                j.success = t.success,
                r(t.theme),
                l(M, T || 0)
        }

        function i(t, e, n) {
            var o = new Image;
            o.onload = function() {
                    e(o)
                },
                o.onerror = n ||
                function() {},
                o.src = t
        }

        function a() {
            var t = location.search.substr(1),
                e = new Object;
            if (t.length > 0)
                for (var n = t.split("&"), o = 0; o < n.length; o++) {
                    var i = n[o].split("=");
                    e[i[0]] = i[1]
                }
            return e
        }

        function s(t, e) {
            e.src = "/cap_transparent.gif",
                e.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t + "', sizingMethod='scale')"
        }

        function r(t) {
            function e() {
                i.animate({
                    left: "0px"
                }, {
                    step: function(t, e) {
                        o.width(t + a),
                            s.css("left", t),
                            0 == t && (s.css("visibility", "hidden"), p.css("visibility", "hidden"), r.show(), m(".slide_bkg").removeClass("error").text(captcha.puzzle1))
                    }
                })
            }
            var n = new g,
                o = m(".slide_bar"),
                i = m("#slide_bar_head"),
                a = i.width(),
                s = m("#slideBlock"),
                r = m("#totalBlock"),
                p = m(".oripic"),
                l = m("#tip_point"),
                f = [r.offset().left, r.offset().top, x];
            y.setData({
                    coordinate: f,
                    clientType: E
                }),
                n.init({
                    ele: i,
                    container: m("#slide"),
                    draging: function(t, e) {
                        w.push(e.left, e.top),
                            o.width(t.left + a),
                            s.css("left", t.left)
                    },
                    stop: function(t) {
                        var n = [{
                                left: Math.floor(t.left / x),
                                top: Math.floor(T)
                            }],
                            o = w.getData();
                        y.setData({
                                slideValue: o
                            }),
                            u(n,
                                function() {
                                    e(),
                                        w.end()
                                })
                    },
                    start: function() {
                        w.start(),
                            r.hide(),
                            l.hide(),
                            s.css("visibility", "visible"),
                            p.css("visibility", "visible")
                    }
                }),
                m("#reload").on("click",
                    function() {
                        c(),
                            B++,
                            y.clearData(),
                            m(".slide_bkg").html(captcha.puzzle1).removeClass("error")
                    }),
                m(document).on("mouseleave",
                    function() {
                        n.hasMouseDown() && n.stop()
                    }),
                m(".captcha_icon").on("mouseenter mouseleave mousedown",
                    function(e) {
                        var n = m(this).find(".tip"),
                            o = m(this).find("a");
                        "mouseenter" == e.type && (t.dealEvents(o), n.show()),
                            ("mouseleave" == e.type || "mousedown" == e.type) && (o.css("color", "#ccc"), n.hide())
                    })
        }

        function c() {
            var t;
            t = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
            var e = Date.parse(new Date);
            m.ajax({
                type: "GET",
                url: "/cap_union_new_getsig" + t,
                dataType: "json",
                success: function(t) {
                    var n = Date.parse(new Date);
                    v.push(26, Math.floor(n - e)),
                        v.send(),
                        C = t && t.chlg ? JSON.stringify(t.chlg) : "",
                        t && t.vsig && (M = t.vsig, l(t.vsig, parseInt(t.inity, 10)))
                }
            })
        }

        function p(t, e, n, o, i) {
            var a = Number(new Date) + (o || 2e3);
            i = i || 100,
                function s() {
                    t() ? e() : Number(new Date) < a ? setTimeout(s, i) : n(new Error("timed out for " + t + ": " + arguments))
                }()
        }

        function l(t, e) {
            var n;
            n = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
            var o = Date.parse(new Date),
                a = "/cap_union_new_getcapbysig" + n + "&vsig=" + t + "&img_index=1";
            i(a,
                function() {
                    var t = Date.parse(new Date);
                    v.push(25, Math.floor(t - o)),
                        m(".img.big").attr("src", a)
                },
                function() {
                    m("#capInfo").html(captcha.c7),
                        m(".img.big").attr("src", "/tx_m_fail.jpg")
                });
            var r = "/cap_union_new_getcapbysig" + n + "&vsig=" + t + "&img_index=2";
            i(r,
                function(t) {
                    var n = Date.parse(new Date);
                    v.push(28, Math.floor(n - o)),
                        m("#slideBlock").attr("src", r),
                        p(function() {
                                return t.height > 10
                            },
                            function() {
                                var n = Math.floor(t.height * x);
                                m("#slideBlock").css({
                                        height: n,
                                        width: n,
                                        top: e * x
                                    }),
                                    T = e
                            },
                            function() {},
                            5e3, 200),
                        b && s(r, m("#slideBlock")[0])
                },
                function() {
                    m("#capInfo").html(captcha.c7),
                        m("#slideBlock").attr("src", "/tx_m_fail_x.jpg"),
                        m("#slideBlock").css({
                            height: 54,
                            width: 54,
                            top: e * x
                        })
                });
            var c = "/cap_union_new_getcapbysig" + n + "&vsig=" + t + "&img_index=0";
            i(c,
                function() {
                    m("#totalBlock").attr("src", c),
                        m(".img.big").css("_filter", 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + c + '" ,sizingMethod="crop")')
                },
                function() {})
        }

        function u(t, e) {
            for (var n = "",
                    o = 0; o < t.length; o++) n += Math.floor(t[o].left) + "," + Math.floor(t[o].top) + ";";
            var i;
            i = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random(),
                y.setData({
                    trycnt: ++$,
                    refreshcnt: B
                });
            var s = y.getData(!0),
                r = Date.parse(new Date),
                p = 0;
            if ("string" == typeof C && "" != C) {
                C = C.replace(/&quot;/g, '"'),
                    C = C.replace(/&apos;/g, "'");
                var l;
                try {
                    l = JSON.parse(C)
                } catch (u) {}
                if ("object" == typeof l && "string" == typeof l.randstr && ("string" == typeof l.M || "number" == typeof l.M) && "string" == typeof l.ans) {
                    l.ans = l.ans.toLowerCase(),
                        l.M = parseInt(l.M);
                    for (var f = 0; f < l.M && 1e3 > f; f++) {
                        var h = l.randstr + f,
                            g = md5(h);
                        if (l.ans == g.toLowerCase()) {
                            p = f;
                            break
                        }
                    }
                }
            }
            var w = a() || {},
                _ = m.extend(w, {
                    subcapclass: "9",
                    vsig: M,
                    ans: n,
                    cdata: p,
                    "aacdae": s,
                    websig: "e209e85614d26ed232f30b8a1f97bc12"
                });
            D = !0;
            var b = m(".slide_bkg"),
                x = m.ajax({
                    type: "POST",
                    url: "/cap_union_new_verify?random=" + +new Date,
                    timeout: 5e3,
                    data: _,
                    dataType: "json",
                    cache: !1,
                    success: function(t) {
                        D = !1;
                        var n = Date.parse(new Date);
                        v.push(27, Math.floor(n - r)),
                            v.send(),
                            t && 0 == t.errorCode ? (d(), j.success(t)) : (9 == t.errorCode ? (b.addClass("error"), b.html(captcha.slide2), c()) : 50 == t.errorCode ? (b.addClass("error"), b.html(captcha.puzzle2)) : (c(), b.removeClass("error"), b.html(captcha.puzzle1)), e())
                    },
                    complete: function(t, n) {
                        D = !1,
                            "timeout" == n && (x.abort(), c(), b.html(captcha.c8), e()),
                            "abort" == n && (x.abort(), c(), b.html(captcha.slide4), e())
                    }
                })
        }

        function f() {
            m(".capachArea").show(),
                m("#showFB, .tip").css("zoom", 1)
        }

        function h() {
            m(".capachArea").hide(),
                m("#showFB, .tip").css("zoom", 0)
        }

        function d() {
            m(".opArea, .big.img, #slideBlock, #tip_point, .operates").hide(),
                m("#totalBlock, .tip_success").show()
        }
        var m = n(1),
            g = n(16),
            v = n(8),
            w = n(17),
            y = n(10),
            _ = !!window.ActiveXObject,
            b = _ && !window.XMLHttpRequest,
            D = !1,
            x = .5,
            M = "c01hWfmI1-n4hgyLaE9-qZa7ZfM-B-iX9_w8RRtI7uBapBPcw-jLY37VlpnvfYuIs8pili98NbJZSq9ZogLjyvBoGy4zwCJr-gRHXO6hLVqP0rxlNXgryXcUkQjy5arRv4NU0VMasp3FofQyssV7-LjJo7SNZxgfxbfAoWREl3DRiJtNMd-5DZW3A**",
            T = Number("10"),
            k = "embed",
            C = "{&quot;randstr&quot;:&quot;FHlQ&quot;,&quot;M&quot;:&quot;50&quot;,&quot;ans&quot;:&quot;03ad5fd8e608f86551f5400d100a4bbd&quot;}",
            E = "2",
            B = 0,
            $ = 0,
            j = {
                success: function() {},
                showFeedback: function() {}
            },
            z = "inner";
        "inner" == z ? -1 == window.location.href.indexOf("https") ? v.set(21406, 1, 4) : v.set(21408, 1, 4) : -1 == window.location.href.indexOf("https") ? v.set(21407, 1, 4) : v.set(21412, 1, 4),
            t.exports = {
                init: o,
                show: f,
                hide: h,
                getVsig: function() {
                    return M
                }
            }
    }
]