var BJ_REPORT = (function(E) {
    if (E.BJ_REPORT) {
        return E.BJ_REPORT
    }
    var M = [];
    var J = {
        id: 0,
        uin: 0,
        url: "",
        combo: 1,
        ext: {},
        level: 4,
        ignore: [],
        random: 1,
        delay: 1000,
        submit: null
    };
    var O = function(R, Q) {
        return Object.prototype.toString.call(R) === "[object " + (Q || "Object") + "]"
    };
    var A = function(R) {
        var Q = typeof R;
        return Q === "object" && !!R
    };
    var I = function(Q) {
        if (Q === null) {
            return true
        }
        if (O(Q, "Number")) {
            return false
        }
        return ! Q
    };
    var P = E.onerror;
    E.onerror = function(V, U, Q, T, S) {
        var R = V;
        if (S && S.stack) {
            R = H(S)
        }
        if (O(R, "Event")) {
            R += R.type ? ("--" + R.type + "--" + (R.target ? (R.target.tagName + "::" + R.target.src) : "")) : ""
        }
        G.push({
            msg: R,
            target: U,
            rowNum: Q,
            colNum: T
        });
        B();
        P && P.apply(E, arguments)
    };
    var K = function(S) {
        try {
            if (S.stack) {
                var R = S.stack.match("https?://[^\n]+");
                R = R ? R[0] : "";
                var U = R.match(":(\\d+):(\\d+)");
                if (!U) {
                    U = [0, 0, 0]
                }
                var Q = H(S);
                return {
                    msg: Q,
                    rowNum: U[1],
                    colNum: U[2],
                    target: R.replace(U[0], "")
                }
            } else {
                return S
            }
        } catch(T) {
            return S
        }
    };
    var H = function(R) {
        var Q = R.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, "");
        var S = R.toString();
        if (Q.indexOf(S) < 0) {
            Q = S + "@" + Q
        }
        return Q
    };
    var N = function(R, Q) {
        var W = [];
        var V = [];
        var X = [];
        if (A(R)) {
            R.level = R.level || J.level;
            for (var S in R) {
                var U = R[S];
                if (!I(U)) {
                    if (A(U)) {
                        try {
                            U = JSON.stringify(U)
                        } catch(T) {
                            U = "[BJ_REPORT detect value stringify error] " + T.toString()
                        }
                    }
                    X.push(S + ":" + U);
                    W.push(S + "=" + encodeURIComponent(U));
                    V.push(S + "[" + Q + "]=" + encodeURIComponent(U))
                }
            }
        }
        return [V.join("&"), X.join(","), W.join("&")]
    };
    var F = [];
    var D = function(R) {
        if (J.submit) {
            J.submit(R)
        } else {
            var Q = new Image();
            F.push(Q);
            Q.src = R
        }
    };
    var L = [];
    var C = 0;
    var B = function(U) {
        if (!J.report) {
            return
        }
        while (M.length) {
            var R = false;
            var W = M.shift();
            var Q = N(W, L.length);
            if (O(J.ignore, "Array")) {
                for (var T = 0,
                S = J.ignore.length; T < S; T++) {
                    var X = J.ignore[T];
                    if ((O(X, "RegExp") && X.test(Q[1])) || (O(X, "Function") && X(W, Q[1]))) {
                        R = true;
                        break
                    }
                }
            }
            if (!R) {
                if (J.combo) {
                    L.push(Q[0])
                } else {
                    D(J.report + Q[2] + "&_t=" + ( + new Date))
                }
                J.onReport && (J.onReport(J.id, W))
            }
        }
        var V = L.length;
        if (V) {
            var Y = function() {
                clearTimeout(C);
                D(J.report + L.join("&") + "&count=" + V + "&_t=" + ( + new Date));
                C = 0;
                L = []
            };
            if (U) {
                Y()
            } else {
                if (!C) {
                    C = setTimeout(Y, J.delay)
                }
            }
        }
    };
    var G = {
        push: function(Q) {
            if (Math.random() >= J.random) {
                return G
            }
            M.push(A(Q) ? K(Q) : {
                msg: Q
            });
            B();
            return G
        },
        report: function(Q) {
            Q && G.push(Q);
            B(true);
            return G
        },
        info: function(Q) {
            if (!Q) {
                return G
            }
            if (A(Q)) {
                Q.level = 2
            } else {
                Q = {
                    msg: Q,
                    level: 2
                }
            }
            G.push(Q);
            return G
        },
        debug: function(Q) {
            if (!Q) {
                return G
            }
            if (A(Q)) {
                Q.level = 1
            } else {
                Q = {
                    msg: Q,
                    level: 1
                }
            }
            G.push(Q);
            return G
        },
        init: function(Q) {
            if (A(Q)) {
                for (var R in Q) {
                    J[R] = Q[R]
                }
            }
            var S = parseInt(J.id, 10);
            if (S) {
                J.report = (J.url || "//badjs2.qq.com/badjs") + "?id=" + S + "&uin=" + parseInt(J.uin || (document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10) + "&from=" + encodeURIComponent(location.href) + "&ext=" + JSON.stringify(J.ext) + "&"
            }
            return G
        },
        __onerror__: E.onerror
    };
    typeof console !== "undefined" && console.error && setTimeout(function() {
        var Q = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
        Q && console.error("BJ_ERROR", decodeURIComponent(Q).replace(/(:\d+:\d+)\s*/g, "$1\n"))
    },
    0);
    return G
} (window));
if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
        exports = module.exports = BJ_REPORT
    }
    exports.BJ_REPORT = BJ_REPORT
}; (function() {
    BJ_REPORT.init({
        id: 1056,
        combo: 1,
        delay: 100,
        random: 0.1,
        level: 4
    });
})(); !
function() {
    function n(n, t, o) {
        o = o || window;
        var r = o[n];
        r && (o[n] = function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return t.apply(o, n),
            r.apply(o, n)
        })
    }
    function t(n) {
        if (e.set(n), "undefined" != typeof TDC && TDC.setData) {
            var t = e.get();
            TDC.setData({
                jshook: t
            })
        }
    }
    function o(t) {
        for (var o in t) if (t.hasOwnProperty(o)) {
            var r = t[o];
            o.indexOf("_") > -1 ? (o = o.substring(1), n(o, r, document)) : n(o, r, window)
        }
    }
    function r() {
        var r = {
            alert: function() {
                t(1)
            },
            _createEvent: function() {
                t(2)
            }
        };
        o(r);
        var e = ["log", "debug", "error", "info"];
        if (window.console) for (var i = 0; i < e.length; i++) {
            var a = e[i];
            n(a,
            function() {
                t(0)
            },
            window.console)
        }
    }
    var e = function() {
        function n(n) {
            o |= 1 << n
        }
        function t() {
            return o
        }
        var o = 0;
        return {
            set: n,
            get: t
        }
    } ();
    try {
        r()
    } catch(i) {}
} ();