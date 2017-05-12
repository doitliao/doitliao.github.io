!
function(e) {
    function t(i) {
        if (r[i]) return r[i].exports;
        var a = r[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(a.exports, a, a.exports, t),
        a.loaded = !0,
        a.exports
    }
    var r = {};
    return t.m = e,
    t.c = r,
    t.p = "",
    t(0)
} ([function(e, t, r) {
    r(1);
    var i = r(2),
    a = r(3),
    n = "TDC_bfp",
    o = function() {
        if (!i.get(n)) {
            var e = "A" + (new a).get(),
            t = new Date;
            t.setTime(t.getTime() + 31104e7),
            i.set(n, e, t, null, "/"),
            "undefined" != typeof TDC && TDC.setData && TDC.setData({
                btokenid: e
            })
        }
    } ();
    window.Fingerprint2Main = o
},
function(module, exports) {
    "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(e) {
            return e < 10 ? "0" + e: e
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(e) {
            return rx_escapable.lastIndex = 0,
            rx_escapable.test(e) ? '"' + e.replace(rx_escapable,
            function(e) {
                var t = meta[e];
                return "string" == typeof t ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + e + '"'
        }
        function str(e, t) {
            var r, i, a, n, o, s = gap,
            h = t[e];
            switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(e)), "function" == typeof rep && (h = rep.call(t, e, h)), typeof h) {
            case "string":
                return quote(h);
            case "number":
                return isFinite(h) ? String(h) : "null";
            case "boolean":
            case "null":
                return String(h);
            case "object":
                if (!h) return "null";
                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(h)) {
                    for (n = h.length, r = 0; r < n; r += 1) o[r] = str(r, h) || "null";
                    return a = 0 === o.length ? "[]": gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]": "[" + o.join(",") + "]",
                    gap = s,
                    a
                }
                if (rep && "object" == typeof rep) for (n = rep.length, r = 0; r < n; r += 1)"string" == typeof rep[r] && (i = rep[r], a = str(i, h), a && o.push(quote(i) + (gap ? ": ": ":") + a));
                else for (i in h) Object.prototype.hasOwnProperty.call(h, i) && (a = str(i, h), a && o.push(quote(i) + (gap ? ": ": ":") + a));
                return a = 0 === o.length ? "{}": gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}": "{" + o.join(",") + "}",
                gap = s,
                a
            }
        }
        var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        },
        Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        JSON.stringify = function(e, t, r) {
            var i;
            if (gap = "", indent = "", "number" == typeof r) for (i = 0; i < r; i += 1) indent += " ";
            else "string" == typeof r && (indent = r);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var r, i, a = e[t];
                if (a && "object" == typeof a) for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = walk(a, r), void 0 !== i ? a[r] = i: delete a[r]);
                return reviver.call(e, t, a)
            }
            var j;
            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous,
            function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
            })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            },
            "") : j;
            throw new SyntaxError("JSON.parse")
        })
    } ()
},
function(e, t) {
    var r = {
        set: function(e, t, r, i, a, n) {
            var o = encodeURIComponent,
            s = o(e) + "=" + o(t);
            r && r instanceof Date && (s += "; expires=" + r.toGMTString()),
            a && (s += "; path=" + a),
            i && (s += "; domain=" + a),
            n && (s += "; secure"),
            document.cookie = s
        },
        get: function(e) {
            var t = document.cookie,
            r = encodeURIComponent(e),
            i = t.indexOf(r),
            a = null;
            if (i > -1) {
                var n = t.indexOf(";", i);
                n == -1 && (n = t.length),
                a = t.substring(i + r.length + 1, n)
            }
            return a
        },
        unset: function(e, t, r, i) {
            this.set(e, "", new Date(0), r, t, i)
        }
    };
    e.exports = r
},
function(e, t) {
    var r = navigator,
    i = window;
    Array.prototype.pop = function() {
        if (this.length) {
            var e = this[this.length - 1];
            return this.length--,
            e
        }
    },
    safeParseJSON = function(e) {
        try {
            return JSON.parse(e)
        } catch(t) {
            return ! 1
        }
    },
    LanguageDetector = function() {
        function e() {
            this.names = safeParseJSON('[ "Latin", "Chinese", "Arabic", "Devanagari", "Cyrillic", "Bengali/Assamese", "Kana", "Gurmukhi", "Javanese", "Hangul", "Telugu", "Tamil", "Malayalam", "Burmese", "Thai", "Sundanese", "Kannada", "Gujarati", "Lao", "Odia", "Ge-ez", "Sinhala", "Armenian", "Khmer", "Greek", "Lontara", "Hebrew", "Tibetan", "Georgian", "Modern Yi", "Mongolian", "Tifinagh", "Syriac", "Thaana", "Inuktitut", "Cherokee" ]'),
            this.codes = safeParseJSON("[[76,97,116,105,110], [27721,23383], [1575,1604,1593,1585,1576,1610,1577], [2342,2375,2357,2344,2366,2327,2352,2368], [1050,1080,1088,1080,1083,1080,1094,1072], [2476,2494,2434,2482,2494,32,47,32,2437,2488,2478,2496,2479,2492,2494], [20206,21517], [2583,2625,2608,2606,2625,2582,2624], [43415,43438], [54620,44544], [3108,3142,3122,3137,3095,3137], [2980,2990,3007,2996,3021], [3374,3378,3375,3390,3379,3330], [4121,4156,4116,4154,4121,4140], [3652,3607,3618], [7070,7077,7060,7082,7059], [3221,3240,3277,3240,3233], [2711,2753,2716,2736,2750,2724,2752], [3749,3762,3751], [2825,2852,2893,2837,2867], [4877,4821,4829], [3523,3538,3458,3524,3517], [1344,1377,1397,1400,1409], [6017,6098,6040,6082,6042], [917,955,955,951,957,953,954,972], [6674,6682,6664,6673], [1488,1500,1508,1489,1497,1514], [3926,3964,3921,3851], [4325,4304,4320,4311,4323,4314,4312], [41352,41760], [6190,6179,6185,6189,6179,6191], [11612,11593,11580,11593,11599,11568,11606], [1808,1834,1825,1821,1808], [1931,1960,1928,1964,1920,1960], [5123,5316,5251,5198,5200,5222], [5091,5043,5033], [55295, 7077]]"),
            this.fontSize = 9,
            this.fontFace = "Verdana",
            this.extraHeigth = 15,
            this.results = []
        }
        return e.prototype.begin = function() {
            var e, t, r, i, a, n, o, s, h, l, u, c, g, d, p, f, m, T, S, E, M, x, A, C, v, b, _, w;
            for (v = 0, this.widths = [], this.heights = [], this.support = [], this.test_div = document.createElement("div"), document.body.appendChild(this.test_div), this.test_div.id = "WritingTest", M = this.codes, a = 0, h = M.length; a < h; a++) {
                for (t = M[a], this.height = [], this.width = [], this.div = document.createElement("div"), this.test_div.appendChild(this.div), v += 1, this.div.id = v, this.div.style.display = "inline-block", n = 0, l = t.length; n < l; n++) e = t[n],
                this.div.innerHTML = "<font face = '" + this.fontFace + "' size = " + this.fontSize + ">&#" + e + "</font>",
                this.height.push(document.getElementById(v).clientHeight),
                this.width.push(document.getElementById(v).clientWidth);
                for (this.div.innerHTML = "", o = 0, u = t.length; o < u; o++) e = t[o],
                this.div.innerHTML += "<font face = '" + this.fontFace + "' size = " + this.fontSize + ">&#" + e + "</font>";
                this.test_div.innerHTML += this.height + ";" + this.width + "<br>",
                this.heights.push(this.height),
                this.widths.push(this.width)
            }
            for (this.tw = this.widths.pop(), this.sw1 = this.tw[0], this.sw2 = this.tw[1], this.sh = this.heights.pop()[0], x = this.heights, s = 0, c = x.length; s < c; s++) {
                for (i = x[s], this.passed = 0, m = 0, g = i.length; m < g; m++) if (r = i[m], r !== this.sh) {
                    this.support.push(!0),
                    this.passed = 1;
                    break
                }
                0 === this.passed && this.support.push(!1)
            }
            for (this.writing_scripts_index = 0, A = this.widths, T = 0, d = A.length; T < d; T++) {
                for (w = A[T], S = 0, p = w.length; S < p; S++) _ = w[S],
                this.support[this.writing_scripts_index] === !1 && _ !== this.sw1 && _ !== this.sw2 && (this.support[this.writing_scripts_index] = !0);
                this.writing_scripts_index += 1
            }
            for (this.res = [], this.writing_scripts_index = 0, C = this.support, E = 0, f = C.length; E < f; E++) b = C[E],
            this.test_div.innerHTML += this.names[this.writing_scripts_index] + ": " + b + " <br>",
            b === !0 && this.res.push(this.names[this.writing_scripts_index]),
            this.writing_scripts_index += 1;
            return document.body.removeChild(this.test_div),
            this.res.join(";")
        },
        e
    } ();
    var a = function(e) {
        var t = Array.prototype.map;
        this.map = function(e, r, i) {
            var a = [];
            if (null == e) return a;
            if (t && e.map === t) return e.map(r, i);
            for (var n = 0; n < e.length; n++) a[a.length] = r.call(i, e[n], n, e);
            return a
        };
        var r = {
            extendedJsFonts: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(e, r)
    };
    a.prototype = {
        extend: function(e, t) {
            if (null == e) return t;
            for (var r in e) null != e[r] && t[r] !== e[r] && (t[r] = e[r]);
            return t
        },
        get: function() {
            try {
                var e = this,
                t = [],
                a = document;
                return t.push(r.userAgent),
                t.push(r.language || r.userLanguage || r.browserLanguage || r.systemLanguage || ""),
                t.push(screen.colorDepth),
                t.push(e.getScreenResolutionRatio()),
                t.push(e.getAvailableScreenResolutionRatio()),
                t.push(e.getHardwareConcurrency()),
                t.push((new Date).getTimezoneOffset()),
                t.push(e.hasSessionStorage()),
                t.push(e.hasLocalStorage()),
                t.push( !! i.indexedDB),
                a && a.body ? t.push(typeof a.body.addBehavior) : t.push("undefined"),
                t.push(typeof i.openDatabase),
                t.push(e.getNavigatorCpuClass()),
                t.push(e.getNavigatorPlatform()),
                t.push(e.getDoNotTrack()),
                t.push(e.getPluginsString()),
                e.isCanvasSupported() && t.push(e.getCanvasFingerprint()),
                e.isWebGlSupported() && t.push(e.getWebGlFingerprint(t)),
                t.push(e.getAdBlock()),
                t.push(e.getTouchSupport()),
                t.push(e.jsFontsKey()),
                t.push(e.audioFingerPrinting()),
                t.push((new LanguageDetector).begin()),
                e.x64hash128(t.join("###"), 31)
            } catch(n) {}
        },
        x64Add: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var r = [0, 0, 0, 0];
            return r[3] += e[3] + t[3],
            r[2] += r[3] >>> 16,
            r[3] &= 65535,
            r[2] += e[2] + t[2],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[1] += e[1] + t[1],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[0] += e[0] + t[0],
            r[0] &= 65535,
            [r[0] << 16 | r[1], r[2] << 16 | r[3]]
        },
        x64Multiply: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var r = [0, 0, 0, 0];
            return r[3] += e[3] * t[3],
            r[2] += r[3] >>> 16,
            r[3] &= 65535,
            r[2] += e[2] * t[3],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[2] += e[3] * t[2],
            r[1] += r[2] >>> 16,
            r[2] &= 65535,
            r[1] += e[1] * t[3],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[1] += e[2] * t[2],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[1] += e[3] * t[1],
            r[0] += r[1] >>> 16,
            r[1] &= 65535,
            r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
            r[0] &= 65535,
            [r[0] << 16 | r[1], r[2] << 16 | r[3]]
        },
        x64Rotl: function(e, t) {
            return t %= 64,
            32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function(e, t) {
            return t %= 64,
            0 === t ? e: t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [4283543511, 3981806797]),
            e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [3301882366, 444984403]),
            e = this.x64Xor(e, [0, e[0] >>> 1])
        },
        x64hash128: function(e, t) {
            e = e || "",
            t = t || 0;
            for (var r = e.length % 16,
            i = e.length - r,
            a = [0, t], n = [0, t], o = [0, 0], s = [0, 0], h = [2277735313, 289559509], l = [1291169091, 658871167], u = 0; u < i; u += 16) o = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24],
            s = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24],
            o = this.x64Multiply(o, h),
            o = this.x64Rotl(o, 31),
            o = this.x64Multiply(o, l),
            a = this.x64Xor(a, o),
            a = this.x64Rotl(a, 27),
            a = this.x64Add(a, n),
            a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 1390208809]),
            s = this.x64Multiply(s, l),
            s = this.x64Rotl(s, 33),
            s = this.x64Multiply(s, h),
            n = this.x64Xor(n, s),
            n = this.x64Rotl(n, 31),
            n = this.x64Add(n, a),
            n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 944331445]);
            switch (o = [0, 0], s = [0, 0], r) {
            case 15:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
            case 14:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
            case 13:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
            case 12:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
            case 11:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
            case 10:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
            case 9:
                s = this.x64Xor(s, [0, e.charCodeAt(u + 8)]),
                s = this.x64Multiply(s, l),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, h),
                n = this.x64Xor(n, s);
            case 8:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
            case 7:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
            case 6:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
            case 5:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
            case 4:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
            case 3:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
            case 2:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
            case 1:
                o = this.x64Xor(o, [0, e.charCodeAt(u)]),
                o = this.x64Multiply(o, h),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, l),
                a = this.x64Xor(a, o)
            }
            return a = this.x64Xor(a, [0, e.length]),
            n = this.x64Xor(n, [0, e.length]),
            a = this.x64Add(a, n),
            n = this.x64Add(n, a),
            a = this.x64Fmix(a),
            n = this.x64Fmix(n),
            a = this.x64Add(a, n),
            n = this.x64Add(n, a),
            ("00000000" + (a[0] >>> 0).toString(16)).slice( - 8) + ("00000000" + (a[1] >>> 0).toString(16)).slice( - 8) + ("00000000" + (n[0] >>> 0).toString(16)).slice( - 8) + ("00000000" + (n[1] >>> 0).toString(16)).slice( - 8)
        },
        hasLocalStorage: function() {
            try {
                return !! i.localStorage
            } catch(e) {
                return ! 0
            }
        },
        hasSessionStorage: function() {
            try {
                return !! i.sessionStorage
            } catch(e) {
                return ! 0
            }
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? navigator.cpuClass: "unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? navigator.platform: "unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? navigator.doNotTrack: navigator.msDoNotTrack ? navigator.msDoNotTrack: window.doNotTrack ? window.doNotTrack: "unknown"
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return ! (!e.getContext || !e.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported()) return ! 1;
            var e, t = document.createElement("canvas");
            try {
                e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch(r) {
                e = !1
            }
            return !! window.WebGLRenderingContext && !!e
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === r.appName || !("Netscape" !== r.appName || !/Trident/.test(r.userAgent))
        },
        getPluginsString: function() {
            return this.isIE() ? this.getIEPluginsString() : this.getRegularPluginsString()
        },
        getRegularPluginsString: function() {
            for (var e = [], t = 0, r = navigator.plugins.length; t < r; t++) e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            })),
            this.map(e,
            function(e) {
                var t = this.map(e,
                function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            },
            this).join(";")
        },
        getIEPluginsString: function() {
            var e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                e = this.map(t,
                function(e) {
                    try {
                        return new ActiveXObject(e),
                        e
                    } catch(t) {
                        return null
                    }
                }).join(";")
            }
            return navigator.plugins && (e = e.concat(this.getRegularPluginsString())),
            e
        },
        pluginsShouldBeSorted: function() {
            for (var e = !1,
            t = 0,
            r = this.options.sortPluginsFor.length; t < r; t++) {
                var i = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(i)) {
                    e = !0;
                    break
                }
            }
            return e
        },
        getScreenResolutionRatio: function() {
            var e = screen.height > screen.width ? screen.height / screen.width: screen.width / screen.height;
            return e = e.toFixed(1)
        },
        getAvailableScreenResolutionRatio: function() {
            var e = screen.availHeight > screen.availWidth ? screen.availHeight / screen.availWidth: screen.availWidth / screen.availHeight;
            return e = e.toFixed(1)
        },
        getHardwareConcurrency: function() {
            return r.hardwareConcurrency ? r.hardwareConcurrency: "unknown"
        },
        getCanvasFingerprint: function() {
            var e = [],
            t = document.createElement("canvas");
            t.width = 2e3,
            t.height = 200,
            t.style.display = "inline";
            var r = t.getContext("2d");
            return r.rect(0, 0, 10, 10),
            r.rect(2, 2, 6, 6),
            e.push("canvas winding:" + (r.isPointInPath(5, 5, "evenodd") === !1 ? "yes": "no")),
            r.textBaseline = "alphabetic",
            r.fillStyle = "#f60",
            r.fillRect(125, 1, 62, 20),
            r.fillStyle = "#069",
            this.options.dontUseFakeFontInCanvas ? r.font = "11pt Arial": r.font = "11pt no-real-font-123",
            r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            r.fillStyle = "rgba(102, 204, 0, 0.2)",
            r.font = "18pt Arial",
            r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            r.globalCompositeOperation = "multiply",
            r.fillStyle = "rgb(255,0,255)",
            r.beginPath(),
            r.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(0,255,255)",
            r.beginPath(),
            r.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(255,255,0)",
            r.beginPath(),
            r.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            r.closePath(),
            r.fill(),
            r.fillStyle = "rgb(255,0,255)",
            r.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            r.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            r.fill("evenodd"),
            t.toDataURL()
        },
        getWebglCanvas: function() {
            var e = document.createElement("canvas"),
            t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch(r) {}
            return t || (t = null),
            t
        },
        getWebGlFingerprint: function(e) {
            var t, r = function(e) {
                return t.clearColor(0, 0, 0, 1),
                t.enable(t.DEPTH_TEST),
                t.depthFunc(t.LEQUAL),
                t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
                "[" + e[0] + ", " + e[1] + "]"
            },
            i = function(e) {
                var t, r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                return r ? (t = e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
            };
            if (t = this.getWebglCanvas(), !t) return null;
            t.getExtension("WEBGL_debug_renderer_info") ? e.push(t.getParameter(t.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)) : e.push("undefined");
            var a = [],
            n = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
            o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
            s = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, s);
            var h = new Float32Array([ - .2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            t.bufferData(t.ARRAY_BUFFER, h, t.STATIC_DRAW),
            s.itemSize = 3,
            s.numItems = 3;
            var l = t.createProgram(),
            u = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(u, n),
            t.compileShader(u);
            var c = t.createShader(t.FRAGMENT_SHADER);
            t.shaderSource(c, o),
            t.compileShader(c),
            t.attachShader(l, u),
            t.attachShader(l, c),
            t.linkProgram(l),
            t.useProgram(l),
            l.vertexPosAttrib = t.getAttribLocation(l, "attrVertex"),
            l.offsetUniform = t.getUniformLocation(l, "uniformOffset"),
            t.enableVertexAttribArray(l.vertexPosArray),
            t.vertexAttribPointer(l.vertexPosAttrib, s.itemSize, t.FLOAT, !1, 0, 0),
            t.uniform2f(l.offsetUniform, 1, 1),
            t.drawArrays(t.TRIANGLE_STRIP, 0, s.numItems),
            null != t.canvas && a.push(t.canvas.toDataURL()),
            a.push("extensions:" + t.getSupportedExtensions().join(";")),
            a.push("webgl aliased line width range:" + r(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))),
            a.push("webgl aliased point size range:" + r(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))),
            a.push("webgl alpha bits:" + t.getParameter(t.ALPHA_BITS)),
            a.push("webgl antialiasing:" + (t.getContextAttributes().antialias ? "yes": "no")),
            a.push("webgl blue bits:" + t.getParameter(t.BLUE_BITS)),
            a.push("webgl depth bits:" + t.getParameter(t.DEPTH_BITS)),
            a.push("webgl green bits:" + t.getParameter(t.GREEN_BITS)),
            a.push("webgl max anisotropy:" + i(t)),
            a.push("webgl max combined texture image units:" + t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max cube map texture size:" + t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)),
            a.push("webgl max fragment uniform vectors:" + t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)),
            a.push("webgl max render buffer size:" + t.getParameter(t.MAX_RENDERBUFFER_SIZE)),
            a.push("webgl max texture image units:" + t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max texture size:" + t.getParameter(t.MAX_TEXTURE_SIZE)),
            a.push("webgl max varying vectors:" + t.getParameter(t.MAX_VARYING_VECTORS)),
            a.push("webgl max vertex attribs:" + t.getParameter(t.MAX_VERTEX_ATTRIBS)),
            a.push("webgl max vertex texture image units:" + t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max vertex uniform vectors:" + t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)),
            a.push("webgl max viewport dims:" + r(t.getParameter(t.MAX_VIEWPORT_DIMS))),
            a.push("webgl red bits:" + t.getParameter(t.RED_BITS)),
            a.push("webgl renderer:" + t.getParameter(t.RENDERER)),
            a.push("webgl shading language version:" + t.getParameter(t.SHADING_LANGUAGE_VERSION)),
            a.push("webgl stencil bits:" + t.getParameter(t.STENCIL_BITS)),
            a.push("webgl vendor:" + t.getParameter(t.VENDOR)),
            a.push("webgl version:" + t.getParameter(t.VERSION));
            try {
                var g = t.getExtension("WEBGL_debug_renderer_info");
                g ? (a.push("webgl unmasked vendor:" + t.getParameter(g.UNMASKED_VENDOR_WEBGL)), a.push("webgl unmasked renderer:" + t.getParameter(g.UNMASKED_RENDERER_WEBGL))) : "undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not have the extension WEBGL_debug_renderer_info")
            } catch(d) {}
            return t.getShaderPrecisionFormat ? (a.push("webgl vertex shader high float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision), a.push("webgl vertex shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMin), a.push("webgl vertex shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).rangeMax), a.push("webgl vertex shader medium float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision), a.push("webgl vertex shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMin), a.push("webgl vertex shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).rangeMax), a.push("webgl vertex shader low float precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).precision), a.push("webgl vertex shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMin), a.push("webgl vertex shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT).rangeMax), a.push("webgl fragment shader high float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision), a.push("webgl fragment shader high float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMin), a.push("webgl fragment shader high float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).rangeMax), a.push("webgl fragment shader medium float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision), a.push("webgl fragment shader medium float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMin), a.push("webgl fragment shader medium float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).rangeMax), a.push("webgl fragment shader low float precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).precision), a.push("webgl fragment shader low float precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMin), a.push("webgl fragment shader low float precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT).rangeMax), a.push("webgl vertex shader high int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).precision), a.push("webgl vertex shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMin), a.push("webgl vertex shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT).rangeMax), a.push("webgl vertex shader medium int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).precision), a.push("webgl vertex shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMin), a.push("webgl vertex shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT).rangeMax), a.push("webgl vertex shader low int precision:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).precision), a.push("webgl vertex shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMin), a.push("webgl vertex shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT).rangeMax), a.push("webgl fragment shader high int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).precision), a.push("webgl fragment shader high int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMin), a.push("webgl fragment shader high int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT).rangeMax), a.push("webgl fragment shader medium int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).precision), a.push("webgl fragment shader medium int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMin), a.push("webgl fragment shader medium int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT).rangeMax), a.push("webgl fragment shader low int precision:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).precision), a.push("webgl fragment shader low int precision rangeMin:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMin), a.push("webgl fragment shader low int precision rangeMax:" + t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT).rangeMax), a.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), a.join("~"))
        },
        audioFingerPrinting: function() {
            try {
                var e = new(window.AudioContext || window.webkitAudioContext),
                t = (e.createOscillator(), e.createAnalyser(), e.createGain(), e.createScriptProcessor(4096, 1, 1), e.destination);
                return e.sampleRate.toString() + "_" + t.maxChannelCount + "_" + t.numberOfInputs + "_" + t.numberOfOutputs + "_" + t.channelCount + "_" + t.channelCountMode + "_" + t.channelInterpretation
            } catch(r) {
                return "not supported"
            }
        },
        getAdBlock: function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;",
            e.className = "adsbox";
            var t = !1;
            try {
                document.body.appendChild(e),
                t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                document.body.removeChild(e)
            } catch(r) {
                t = !1
            }
            return t
        },
        getTouchSupport: function() {
            var e = 0;
            "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints: "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            var t = "ontouchstart" in window;
            return [e, t].join(";")
        },
        jsFontsKey: function(e) {
            var t = this,
            r = ["monospace", "sans-serif", "serif"],
            i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
            a = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
            t.options.extendedJsFonts && (i = i.concat(a)),
            i = i.concat(t.options.userDefinedFonts);
            var n = "mmmmmmmmmmlli",
            o = "72px",
            s = document.getElementsByTagName("body")[0],
            h = document.createElement("div"),
            l = document.createElement("div"),
            u = {},
            c = {},
            g = function() {
                var e = document.createElement("span");
                return e.style.position = "absolute",
                e.style.left = "-9999px",
                e.style.fontSize = o,
                e.style.lineHeight = "normal",
                e.innerHTML = n,
                e
            },
            d = function(e, t) {
                var r = g();
                return r.style.fontFamily = "'" + e + "'," + t,
                r
            },
            p = function() {
                for (var e = [], t = 0, i = r.length; t < i; t++) {
                    var a = g();
                    a.style.fontFamily = r[t],
                    h.appendChild(a),
                    e.push(a)
                }
                return e
            },
            f = function() {
                for (var e = {},
                t = 0,
                a = i.length; t < a; t++) {
                    for (var n = [], o = 0, s = r.length; o < s; o++) {
                        var h = d(i[t], r[o]);
                        l.appendChild(h),
                        n.push(h)
                    }
                    e[i[t]] = n
                }
                return e
            },
            m = function(e) {
                for (var t = !1,
                i = 0; i < r.length; i++) if (t = e[i].offsetWidth !== u[r[i]] || e[i].offsetHeight !== c[r[i]]) return t;
                return t
            },
            T = p();
            s.appendChild(h);
            for (var S = 0,
            E = r.length; S < E; S++) u[r[S]] = T[S].offsetWidth,
            c[r[S]] = T[S].offsetHeight;
            var M = f();
            s.appendChild(l);
            for (var x = [], A = 0, C = i.length; A < C; A++) m(M[i[A]]) && x.push(i[A]);
            return s.removeChild(l),
            s.removeChild(h),
            x.join(";")
        }
    },
    e.exports = a
}]);