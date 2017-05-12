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