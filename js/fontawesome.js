window.FontAwesomeKitConfig = {
    "asyncLoading": {
        "enabled": true
    },
    "autoA11y": {
        "enabled": true
    },
    "baseUrl": "https://kit-pro.fontawesome.com",
    "license": "pro",
    "method": "css",
    "minify": {
        "enabled": true
    },
    "v4shim": {
        "enabled": true
    },
    "version": "latest"
};
! function () {
    ! function () {
        if (!(void 0 === window.Element || "classList" in document.documentElement)) {
            var e, t, n, i = Array.prototype,
                o = i.push,
                a = i.splice,
                s = i.join;
            r.prototype = {
                add: function (e) {
                    this.contains(e) || (o.call(this, e), this.el.className = this.toString())
                },
                contains: function (e) {
                    return -1 != this.el.className.indexOf(e)
                },
                item: function (e) {
                    return this[e] || null
                },
                remove: function (e) {
                    if (this.contains(e)) {
                        for (var t = 0; t < this.length && this[t] != e; t++);
                        a.call(this, t, 1), this.el.className = this.toString()
                    }
                },
                toString: function () {
                    return s.call(this, " ")
                },
                toggle: function (e) {
                    return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
                }
            }, window.DOMTokenList = r, e = Element.prototype, t = "classList", n = function () {
                return new r(this)
            }, Object.defineProperty ? Object.defineProperty(e, t, {
                get: n
            }) : e.__defineGetter__(t, n)
        }

        function r(e) {
            for (var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < t.length; n++) o.call(this, t[n])
        }
    }();

    function f(e) {
        var t, n, i, o;
        prefixesArray = e || ["fa"], prefixesSelectorString = "." + Array.prototype.join.call(e, ",."), t = document.querySelectorAll(prefixesSelectorString), Array.prototype.forEach.call(t, function (e) {
            n = e.getAttribute("title"), e.setAttribute("aria-hidden", "true"), i = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only"), n && i && ((o = document.createElement("span")).innerHTML = n, o.classList.add("sr-only"), e.parentNode.insertBefore(o, e.nextSibling))
        })
    }
    var e, t, u = function (e) {
            var t = document.createElement("link");
            t.href = e, t.media = "all", t.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(t)
        },
        m = function (e) {
            ! function (e, t, n) {
                var i, o = window.document,
                    a = o.createElement("link");
                if (t) i = t;
                else {
                    var s = (o.body || o.getElementsByTagName("head")[0]).childNodes;
                    i = s[s.length - 1]
                }
                var r = o.styleSheets;
                a.rel = "stylesheet", a.href = e, a.media = "only x",
                    function e(t) {
                        if (o.body) return t();
                        setTimeout(function () {
                            e(t)
                        })
                    }(function () {
                        i.parentNode.insertBefore(a, t ? i : i.nextSibling)
                    });
                var l = function (e) {
                    for (var t = a.href, n = r.length; n--;)
                        if (r[n].href === t) return e();
                    setTimeout(function () {
                        l(e)
                    })
                };

                function c() {
                    a.addEventListener && a.removeEventListener("load", c), a.media = n || "all"
                }
                a.addEventListener && a.addEventListener("load", c), (a.onloadcssdefined = l)(c)
            }(e)
        },
        n = function (e, t) {
            var n = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
                i = t && void 0 !== t.async ? t.async : void 0,
                o = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
                a = document.createElement("script"),
                s = document.scripts[0];
            a.src = e, void 0 !== o && a.setAttribute("data-auto-a11y", o ? "true" : "false"), n && (a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)), i && a.setAttributeNode(document.createAttribute("defer")), s.parentNode.appendChild(a)
        };

    function h(e, t) {
        var n = t && t.shim ? e.license + "-v4-shims" : e.license,
            i = t && t.minify ? ".min" : "";
        return e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/" + e.method + "/" + n + i + "." + e.method
    }
    try {
        if (window.FontAwesomeKitConfig) {
            var i = window.FontAwesomeKitConfig;
            "js" === i.method && (t = {
                async: (e = i).asyncLoading.enabled,
                autoA11y: e.autoA11y.enabled
            }, "pro" === e.license && (t.autoFetchSvg = !0, t.fetchSvgFrom = e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/svgs"), e.v4shim.enabled && n(h(e, {
                shim: !0,
                minify: e.minify.enabled
            })), n(h(e, {
                minify: e.minify.enabled
            }), t)), "css" === i.method && function (e) {
                var t, n, i, o, a, s, r, l, c = f.bind(f, ["fa", "fab", "fas", "far", "fal"]);
                e.autoA11y.enabled && (n = c, o = [], a = document, s = a.documentElement.doScroll, r = "DOMContentLoaded", (l = (s ? /^loaded|^c/ : /^loaded|^i|^c/).test(a.readyState)) || a.addEventListener(r, i = function () {
                    for (a.removeEventListener(r, i), l = 1; i = o.shift();) i()
                }), l ? setTimeout(n, 0) : o.push(n), t = c, "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, {
                    childList: !0,
                    subtree: !0
                })), e.v4shim.enabled && (e.asyncLoading.enabled ? m(h(e, {
                    shim: !0,
                    minify: e.minify.enabled
                })) : u(h(e, {
                    shim: !0,
                    minify: e.minify.enabled
                })));
                var d = h(e, {
                    minify: e.minify.enabled
                });
                e.asyncLoading.enabled ? m(d) : u(d)
            }(i)
        }
    } catch (e) {}
}();