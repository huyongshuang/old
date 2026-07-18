(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160], {
        4550: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => i.a
            });
            var n = r(51399),
                i = r.n(n),
                o = {};
            for (let e in n) "default" !== e && (o[e] = () => n[e]);
            r.d(t, o)
        },
        8373: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasCookie = t.deleteCookie = t.setCookie = t.getCookie = t.getCookies = void 0;
            var o = r(69163),
                a = function() {
                    return "undefined" != typeof window
                },
                s = function(e) {
                    return !!e && "getAll" in e && "set" in e && "function" == typeof e.getAll && "function" == typeof e.set
                },
                l = function(e) {
                    return !!(null == e ? void 0 : e.req) && "cookies" in e.req && s(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies" in e.res && s(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && s(e.cookies())
                },
                c = function(e) {
                    var t = {};
                    return e.getAll().forEach(function(e) {
                        var r = e.name,
                            n = e.value;
                        t[r] = n
                    }), t
                },
                u = function(e) {
                    try {
                        if ("string" == typeof e) return e;
                        return JSON.stringify(e)
                    } catch (t) {
                        return e
                    }
                };
            t.getCookies = function(e) {
                if (l(e)) {
                    if (null == e ? void 0 : e.req) return c(e.req.cookies);
                    if (null == e ? void 0 : e.cookies) return c(e.cookies())
                }
                if (e && (t = e.req), !a()) return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0, o.parse)(t.headers.cookie) : {};
                for (var t, r = {}, n = document.cookie ? document.cookie.split("; ") : [], i = 0, s = n.length; i < s; i++) {
                    var u = n[i].split("="),
                        d = u.slice(1).join("=");
                    r[u[0]] = d
                }
                return r
            }, t.getCookie = function(e, r) {
                var n = (0, t.getCookies)(r)[e];
                if (void 0 !== n) return n ? n.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : n
            }, t.setCookie = function(e, t, r) {
                if (l(r)) {
                    var s, c, d, f = r.req,
                        p = r.res,
                        h = r.cookies,
                        m = i(r, ["req", "res", "cookies"]),
                        g = n({
                            name: e,
                            value: u(t)
                        }, m);
                    f && f.cookies.set(g), p && p.cookies.set(g), h && h().set(g);
                    return
                }
                if (r) {
                    var f = r.req,
                        p = r.res,
                        v = i(r, ["req", "res"]);
                    c = f, d = p, s = v
                }
                var b = (0, o.serialize)(e, u(t), n({
                    path: "/"
                }, s));
                if (a()) document.cookie = b;
                else if (d && c) {
                    var y = d.getHeader("Set-Cookie");
                    if (Array.isArray(y) || (y = y ? [String(y)] : []), d.setHeader("Set-Cookie", y.concat(b)), c && c.cookies) {
                        var w = c.cookies;
                        "" === t ? delete w[e] : w[e] = u(t)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        var w = (0, o.parse)(c.headers.cookie);
                        "" === t ? delete w[e] : w[e] = u(t), c.headers.cookie = Object.entries(w).reduce(function(e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }, "")
                    }
                }
            }, t.deleteCookie = function(e, r) {
                return (0, t.setCookie)(e, "", n(n({}, r), {
                    maxAge: -1
                }))
            }, t.hasCookie = function(e, r) {
                return !!e && (0, t.getCookies)(r).hasOwnProperty(e)
            }
        },
        17833: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => a
            });
            var n = r(50987),
                i = r(43195);
            let o = function() {
                for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t)
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n)
                        } else
                            for (n in t) t[n] && (i && (i += " "), i += n);
                    return i
                }(e)) && (n && (n += " "), n += t);
                return n
            };

            function a(e) {
                let {
                    buttonLabel: t,
                    buttonMobileLabel: r,
                    modalTitle: a,
                    modalDescription: s,
                    helperText: l,
                    closeLabel: c,
                    imageAlt: u,
                    imageSrc: d,
                    className: f,
                    variant: p = "primary"
                } = e, [h, m] = (0, i.useState)(!1), g = (0, i.useId)(), v = (0, i.useId)(), b = (0, i.useId)(), y = (0, i.useCallback)(() => {
                    m(!0)
                }, []), w = (0, i.useCallback)(() => {
                    m(!1)
                }, []);
                (0, i.useEffect)(() => {
                    if (!h) return;
                    let e = e => {
                        "Escape" === e.key && m(!1)
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [h]);
                let x = o("inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", {
                    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-white",
                    light: "bg-white text-blue-600 hover:bg-blue-100 focus-visible:ring-white focus-visible:ring-offset-blue-600/40"
                } [p] || "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-white");
                return (0, n.jsxs)("div", {
                    className: o("relative", f),
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        onClick: y,
                        className: o(x, "w-full sm:w-auto shadow-sm sm:shadow-none"),
                        "aria-haspopup": "dialog",
                        "aria-expanded": h,
                        "aria-controls": h ? b : void 0,
                        children: [(0, n.jsx)("span", {
                            className: "sm:hidden",
                            children: r || t
                        }), (0, n.jsx)("span", {
                            className: "hidden sm:inline",
                            children: t
                        })]
                    }), h ? (0, n.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6",
                        children: [(0, n.jsx)("div", {
                            className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                            onClick: w
                        }), (0, n.jsxs)("div", {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-labelledby": g,
                            "aria-describedby": v,
                            id: b,
                            className: "relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [(0, n.jsx)("h2", {
                                    id: g,
                                    className: "text-xl font-semibold text-gray-900",
                                    children: a
                                }), (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: w,
                                    className: "text-gray-400 transition hover:text-gray-600",
                                    "aria-label": c,
                                    children: (0, n.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "\xd7"
                                    })
                                })]
                            }), (0, n.jsx)("p", {
                                id: v,
                                className: "mt-2 text-sm text-gray-600",
                                children: s
                            }), (0, n.jsx)("div", {
                                className: "mt-5 overflow-hidden rounded-xl border border-dashed border-gray-200 bg-gray-50",
                                children: (0, n.jsx)("img", {
                                    src: d,
                                    alt: u || a,
                                    className: "w-full object-cover",
                                    loading: "lazy"
                                })
                            }), (0, n.jsx)("a", {
                                href: "https://puzzles-game.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-3 block text-center text-sm font-medium text-blue-600 underline hover:text-blue-700",
                                children: "https://puzzles-game.com/"
                            }), (0, n.jsx)("p", {
                                className: "mt-4 text-xs text-gray-500",
                                children: l
                            }), (0, n.jsx)("button", {
                                type: "button",
                                onClick: w,
                                className: "mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100",
                                children: c
                            })]
                        })]
                    }) : null]
                })
            }
        },
        24670: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    html: t,
                    height: r = null,
                    width: o = null,
                    children: a,
                    dataNtpc: s = ""
                } = e;
                return (0, i.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, n.jsxs)(n.Fragment, {
                    children: [a, t ? (0, n.jsx)("div", {
                        style: {
                            height: null != r ? "".concat(r, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            };
            let n = r(50987),
                i = r(43195)
        },
        31326: (e, t, r) => {
            "use strict";
            r.d(t, {
                SpeedInsights: () => f
            });
            var n = r(43195),
                i = r(70731),
                o = r(75521),
                a = () => {
                    window.si || (window.si = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        (window.siq = window.siq || []).push(t)
                    })
                };

            function s() {
                return "development" === function() {
                    return "production"
                }()
            }

            function l(e) {
                return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)"))
            }

            function c(e) {
                (0, n.useEffect)(() => {
                    var t;
                    e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend))
                }, [e.beforeSend]);
                let t = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (t.current) e.route && t.current(e.route);
                    else {
                        var r, n;
                        let i = function() {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if ("undefined" == typeof window || null === t.route) return null;
                            a();
                            let r = t.scriptSrc ? t.scriptSrc : s() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : t.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : t.basePath ? "".concat(t.basePath, "/speed-insights/script.js") : "/_vercel/speed-insights/script.js";
                            if (document.head.querySelector('script[src*="'.concat(r, '"]'))) return null;
                            t.beforeSend && (null == (e = window.si) || e.call(window, "beforeSend", t.beforeSend));
                            let n = document.createElement("script");
                            return n.src = r, n.defer = !0, n.dataset.sdkn = "@vercel/speed-insights" + (t.framework ? "/".concat(t.framework) : ""), n.dataset.sdkv = "1.2.0", t.sampleRate && (n.dataset.sampleRate = t.sampleRate.toString()), t.route && (n.dataset.route = t.route), t.endpoint ? n.dataset.endpoint = t.endpoint : t.basePath && (n.dataset.endpoint = "".concat(t.basePath, "/speed-insights/vitals")), t.dsn && (n.dataset.dsn = t.dsn), s() && !1 === t.debug && (n.dataset.debug = "false"), n.onerror = () => {
                                console.log("[Vercel Speed Insights] Failed to load script from ".concat(r, ". Please check if any content blockers are enabled and try again."))
                            }, document.head.appendChild(n), {
                                setRoute: e => {
                                    n.dataset.route = null != e ? e : void 0
                                }
                            }
                        }({
                            framework: null != (r = e.framework) ? r : "react",
                            basePath: null != (n = e.basePath) ? n : function() {
                                if (void 0 !== o && void 0 !== o.env) return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                            }(),
                            ...e
                        });
                        i && (t.current = i.setRoute)
                    }
                }, [e.route]), null
            }
            var u = () => {
                let e = (0, i.useParams)(),
                    t = (0, i.useSearchParams)() || new URLSearchParams,
                    r = (0, i.usePathname)();
                return e ? function(e, t) {
                    if (!e || !t) return e;
                    let r = e;
                    try {
                        let e = Object.entries(t);
                        for (let [t, n] of e)
                            if (!Array.isArray(n)) {
                                let e = l(n);
                                e.test(r) && (r = r.replace(e, "/[".concat(t, "]")))
                            } for (let [t, n] of e)
                            if (Array.isArray(n)) {
                                let e = l(n.join("/"));
                                e.test(r) && (r = r.replace(e, "/[...".concat(t, "]")))
                            } return r
                    } catch (t) {
                        return e
                    }
                }(r, Object.keys(e).length ? e : Object.fromEntries(t.entries())) : null
            };

            function d(e) {
                let t = u();
                return n.createElement(c, {
                    route: t,
                    ...e,
                    framework: "next",
                    basePath: function() {
                        if (void 0 !== o && void 0 !== o.env) return o.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
                    }()
                })
            }

            function f(e) {
                return n.createElement(n.Suspense, {
                    fallback: null
                }, n.createElement(d, {
                    ...e
                }))
            }
        },
        33610: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => s
            });
            var n = r(50987);
            r(43195);
            var i = r(99302),
                o = r.n(i),
                a = r(70731);

            function s(e) {
                let {
                    children: t,
                    href: r,
                    activeClassName: i,
                    inactiveClassName: s,
                    category: l
                } = e, c = (0, a.usePathname)().split("/")[2] || "";
                return (0, n.jsx)(o(), {
                    href: r,
                    className: c === l ? i : s,
                    children: t
                })
            }
        },
        41095: () => {},
        49267: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = void 0, t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    gtmScriptUrl: r = "https://www.googletagmanager.com/gtm.js",
                    dataLayerName: s = "dataLayer",
                    auth: l,
                    preview: c,
                    dataLayer: u,
                    nonce: d
                } = e;
                a = s;
                let f = "dataLayer" !== s ? "&l=".concat(s) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u ? "w[l].push(".concat(JSON.stringify(u), ")") : "", "\n      })(window,'").concat(s, "');")
                        },
                        nonce: d
                    }), (0, n.jsx)(o.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "".concat(r, "?id=").concat(t).concat(f).concat(l ? "&gtm_auth=".concat(l) : "").concat(c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : ""),
                        nonce: d
                    })]
                })
            };
            let n = r(50987),
                i = r(43195),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r(4550)),
                a = "dataLayer";
            t.sendGTMEvent = (e, t) => {
                let r = t || a;
                window[r] = window[r] || [], window[r].push(e)
            }
        },
        49311: (e, t, r) => {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    debugMode: r,
                    dataLayerName: s = "dataLayer",
                    nonce: l
                } = e;
                return void 0 === n && (n = s), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(s, "'] = window['").concat(s, "'] || [];\n          function gtag(){window['").concat(s, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "' ").concat(r ? ",{ 'debug_mode': true }" : "", ");")
                        },
                        nonce: l
                    }), (0, i.jsx)(a.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                        nonce: l
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (void 0 === n) return void console.warn("@next/third-parties: GA has not been initialized");
                window[n] ? window[n].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(n, " does not exist"))
            };
            let i = r(50987),
                o = r(43195),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r(4550))
        },
        51399: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return b
                },
                handleClientScriptLoad: function() {
                    return m
                },
                initScriptLoader: function() {
                    return g
                }
            });
            let n = r(92927),
                i = r(82364),
                o = r(50987),
                a = n._(r(86842)),
                s = i._(r(43195)),
                l = r(42506),
                c = r(52374),
                u = r(65482),
                d = new Map,
                f = new Set,
                p = e => {
                    if (a.default.preinit) return void e.forEach(e => {
                        a.default.preinit(e, {
                            as: "style"
                        })
                    }); {
                        let t = document.head;
                        e.forEach(e => {
                            let r = document.createElement("link");
                            r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                        })
                    }
                },
                h = e => {
                    let {
                        src: t,
                        id: r,
                        onLoad: n = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: o,
                        children: a = "",
                        strategy: s = "afterInteractive",
                        onError: l,
                        stylesheets: u
                    } = e, h = r || t;
                    if (h && f.has(h)) return;
                    if (d.has(t)) {
                        f.add(h), d.get(t).then(n, l);
                        return
                    }
                    let m = () => {
                            i && i(), f.add(h)
                        },
                        g = document.createElement("script"),
                        v = new Promise((e, t) => {
                            g.addEventListener("load", function(t) {
                                e(), n && n.call(this, t), m()
                            }), g.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            l && l(e)
                        });
                    o ? (g.innerHTML = o.__html || "", m()) : a ? (g.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", m()) : t && (g.src = t, d.set(t, v)), (0, c.setAttributesFromProps)(g, e), "worker" === s && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", s), u && p(u), document.body.appendChild(g)
                };

            function m(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, u.requestIdleCallback)(() => h(e))
                }) : h(e)
            }

            function g(e) {
                e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function v(e) {
                let {
                    id: t,
                    src: r = "",
                    onLoad: n = () => {},
                    onReady: i = null,
                    strategy: c = "afterInteractive",
                    onError: d,
                    stylesheets: p,
                    ...m
                } = e, {
                    updateScripts: g,
                    scripts: v,
                    getIsSsr: b,
                    appDir: y,
                    nonce: w
                } = (0, s.useContext)(l.HeadManagerContext), x = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || r;
                    x.current || (i && e && f.has(e) && i(), x.current = !0)
                }, [i, t, r]);
                let k = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        if (!k.current) {
                            if ("afterInteractive" === c) h(e);
                            else "lazyOnload" === c && ("complete" === document.readyState ? (0, u.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                                (0, u.requestIdleCallback)(() => h(e))
                            }));
                            k.current = !0
                        }
                    }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (g ? (v[c] = (v[c] || []).concat([{
                        id: t,
                        src: r,
                        onLoad: n,
                        onReady: i,
                        onError: d,
                        ...m
                    }]), g(v)) : b && b() ? f.add(t || r) : b && !b() && h(e)), y) {
                    if (p && p.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === c)
                        if (!r) return m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html, delete m.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                            nonce: w,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                    ...m,
                                    id: t
                                }]) + ")"
                            }
                        });
                        else return a.default.preload(r, m.integrity ? {
                            as: "script",
                            integrity: m.integrity,
                            nonce: w,
                            crossOrigin: m.crossOrigin
                        } : {
                            as: "script",
                            nonce: w,
                            crossOrigin: m.crossOrigin
                        }), (0, o.jsx)("script", {
                            nonce: w,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, {
                                    ...m,
                                    id: t
                                }]) + ")"
                            }
                        });
                    "afterInteractive" === c && r && a.default.preload(r, m.integrity ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: w,
                        crossOrigin: m.crossOrigin
                    } : {
                        as: "script",
                        nonce: w,
                        crossOrigin: m.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(v, "__nextScript", {
                value: !0
            });
            let b = v;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        52374: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                n = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function i(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function o(e, t) {
                for (let [o, a] of Object.entries(t)) {
                    if (!t.hasOwnProperty(o) || n.includes(o) || void 0 === a) continue;
                    let s = r[o] || o.toLowerCase();
                    "SCRIPT" === e.tagName && i(s) ? e[s] = !!a : e.setAttribute(s, String(a)), (!1 === a || "SCRIPT" === e.tagName && i(s) && (!a || "false" === a)) && (e.setAttribute(s, ""), e.removeAttribute(s))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        64767: (e, t, r) => {
            Promise.resolve().then(r.t.bind(r, 69706, 23)), Promise.resolve().then(r.bind(r, 49311)), Promise.resolve().then(r.bind(r, 49267)), Promise.resolve().then(r.bind(r, 24670)), Promise.resolve().then(r.bind(r, 31326)), Promise.resolve().then(r.t.bind(r, 99302, 23)), Promise.resolve().then(r.t.bind(r, 51399, 23)), Promise.resolve().then(r.bind(r, 33610)), Promise.resolve().then(r.bind(r, 76198)), Promise.resolve().then(r.bind(r, 17833)), Promise.resolve().then(r.t.bind(r, 41095, 23)), Promise.resolve().then(r.bind(r, 89011))
        },
        65482: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                cancelIdleCallback: function() {
                    return n
                },
                requestIdleCallback: function() {
                    return r
                }
            });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        69163: (e, t) => {
            "use strict";
            t.parse = function(e, t) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                var r = {},
                    i = e.length;
                if (i < 2) return r;
                var o = t && t.decode || u,
                    a = 0,
                    s = 0,
                    d = 0;
                do {
                    if (-1 === (s = e.indexOf("=", a))) break;
                    if (-1 === (d = e.indexOf(";", a))) d = i;
                    else if (s > d) {
                        a = e.lastIndexOf(";", s - 1) + 1;
                        continue
                    }
                    var f = l(e, a, s),
                        p = c(e, s, f),
                        h = e.slice(f, p);
                    if (!n.call(r, h)) {
                        var m = l(e, s + 1, d),
                            g = c(e, d, m);
                        34 === e.charCodeAt(m) && 34 === e.charCodeAt(g - 1) && (m++, g--);
                        var v = e.slice(m, g);
                        r[h] = function(e, t) {
                            try {
                                return t(e)
                            } catch (t) {
                                return e
                            }
                        }(v, o)
                    }
                    a = d + 1
                } while (a < i);
                return r
            }, t.serialize = function(e, t, n) {
                var l = n && n.encode || encodeURIComponent;
                if ("function" != typeof l) throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var c = l(t);
                if (!o.test(c)) throw TypeError("argument val is invalid");
                var u = e + "=" + c;
                if (!n) return u;
                if (null != n.maxAge) {
                    var d = Math.floor(n.maxAge);
                    if (!isFinite(d)) throw TypeError("option maxAge is invalid");
                    u += "; Max-Age=" + d
                }
                if (n.domain) {
                    if (!a.test(n.domain)) throw TypeError("option domain is invalid");
                    u += "; Domain=" + n.domain
                }
                if (n.path) {
                    if (!s.test(n.path)) throw TypeError("option path is invalid");
                    u += "; Path=" + n.path
                }
                if (n.expires) {
                    var f, p = n.expires;
                    if (f = p, "[object Date]" !== r.call(f) || isNaN(p.valueOf())) throw TypeError("option expires is invalid");
                    u += "; Expires=" + p.toUTCString()
                }
                if (n.httpOnly && (u += "; HttpOnly"), n.secure && (u += "; Secure"), n.partitioned && (u += "; Partitioned"), n.priority) switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
                    case "low":
                        u += "; Priority=Low";
                        break;
                    case "medium":
                        u += "; Priority=Medium";
                        break;
                    case "high":
                        u += "; Priority=High";
                        break;
                    default:
                        throw TypeError("option priority is invalid")
                }
                if (n.sameSite) switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                    case !0:
                    case "strict":
                        u += "; SameSite=Strict";
                        break;
                    case "lax":
                        u += "; SameSite=Lax";
                        break;
                    case "none":
                        u += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return u
            };
            var r = Object.prototype.toString,
                n = Object.prototype.hasOwnProperty,
                i = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
                o = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
                a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                s = /^[\u0020-\u003A\u003D-\u007E]*$/;

            function l(e, t, r) {
                do {
                    var n = e.charCodeAt(t);
                    if (32 !== n && 9 !== n) return t
                } while (++t < r);
                return r
            }

            function c(e, t, r) {
                for (; t > r;) {
                    var n = e.charCodeAt(--t);
                    if (32 !== n && 9 !== n) return t + 1
                }
                return r
            }

            function u(e) {
                return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
            }
        },
        69706: () => {},
        70731: (e, t, r) => {
            "use strict";
            var n = r(68051);
            r.o(n, "useParams") && r.d(t, {
                useParams: function() {
                    return n.useParams
                }
            }), r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return n.useSearchParams
                }
            })
        },
        76198: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => a
            });
            var n = r(50987);
            r(43195);
            var i = r(70731),
                o = r(8373);

            function a(e) {
                let {
                    currentLang: t,
                    languageOptions: r
                } = e, a = (0, i.usePathname)();
                return (0, n.jsx)("select", {
                    "aria-label": "Select language",
                    value: t,
                    onChange: e => {
                        let t = e.target.value,
                            r = a.split("/").filter(Boolean);
                        r[0] = String(t);
                        let n = "/".concat(r.map(e => encodeURIComponent(String(e))).join("/"));
                        (0, o.setCookie)("NEXT_LOCALE", t, {
                            maxAge: 31536e3
                        }), window.location.href = n
                    },
                    className: "bg-white text-right text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                    children: Object.entries(r).map(e => {
                        let [t, r] = e;
                        return (0, n.jsx)("option", {
                            value: t,
                            children: r
                        }, t)
                    })
                })
            }
        },
        89011: (e, t, r) => {
            "use strict";
            r.d(t, {
                I18nProvider: () => a,
                s: () => s
            });
            var n = r(50987),
                i = r(43195);
            let o = (0, i.createContext)();

            function a(e) {
                let {
                    children: t,
                    initialDictionary: r
                } = e, [a, s] = (0, i.useState)(r);
                return (0, n.jsx)(o.Provider, {
                    value: {
                        dictionary: a,
                        setDictionary: s,
                        t: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = a[e] || e;
                            return Object.keys(t).forEach(e => {
                                let n = RegExp("{{".concat(e, "}}"), "g");
                                r = r.replace(n, t[e])
                            }), r
                        }
                    },
                    children: t
                })
            }

            function s() {
                let e = (0, i.useContext)(o);
                if (void 0 === e) throw Error("useI18n must be used within an I18nProvider");
                return e
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [5664, 1182, 6921, 7683, 2860, 7358], () => t(64767)), _N_E = e.O()
    }
]);