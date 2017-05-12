window.Messenger = (function() {
    var D = "[CODE_VERIFY]",
    A = "postMessage" in window;
    function C(G, E) {
        var F = "";
        if (arguments.length < 2) {
            F = "target error - target and name are both required"
        } else {
            if (typeof G != "object") {
                F = "target error - target itself must be window object"
            } else {
                if (typeof E != "string") {
                    F = "target error - target name must be string type"
                }
            }
        }
        if (F) {
            throw new Error(F)
        }
        this.target = G;
        this.name = E
    }
    if (A) {
        C.prototype.send = function(E) {
            this.target.postMessage(E, "*")
        }
    } else {
        C.prototype.send = function(F) {
            var E = window.navigator[D + this.name];
            if (typeof E == "function") {
                E(F, window)
            } else {
                throw new Error("target callback function is not defined")
            }
        }
    }
    function B(F, E) {
        this.targets = {};
        this.name = F;
        this.listenFunc = [];
        D = E || D;
        if (typeof D !== "string") {
            D = D.toString()
        }
        this.initListen()
    }
    B.prototype.addTarget = function(G, E) {
        var F = new C(G, E);
        this.targets[E] = F
    };
    B.prototype.initListen = function() {
        var F = this;
        var E = function(H) {
            if (typeof H == "object" && H.data) {
                H = H.data
            }
            for (var G = 0; G < F.listenFunc.length; G++) {
                F.listenFunc[G](H)
            }
        };
        if (A) {
            if ("addEventListener" in document) {
                window.addEventListener("message", E, false)
            } else {
                if ("attachEvent" in document) {
                    window.attachEvent("onmessage", E)
                }
            }
        } else {
            window.navigator[D + this.name] = E
        }
    };
    B.prototype.listen = function(E) {
        this.listenFunc.push(E)
    };
    B.prototype.clear = function() {
        this.listenFunc = []
    };
    B.prototype.send = function(G) {
        var E = this.targets,
        F;
        for (F in E) {
            if (E.hasOwnProperty(F)) {
                E[F].send(G)
            }
        }
    };
    return B
})();