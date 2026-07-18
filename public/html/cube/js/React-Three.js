"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8160], {
        4703: (e, t, n) => {
            e.exports = n(41047)
        },
        33286: (e, t) => {
            function n(e, t) {
                var n = e.length;
                for (e.push(t); 0 < n;) {
                    var r = n - 1 >>> 1,
                        o = e[r];
                    if (0 < i(o, t)) e[r] = t, e[n] = o, n = r;
                    else break
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function o(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    for (var r = 0, o = e.length, a = o >>> 1; r < a;) {
                        var l = 2 * (r + 1) - 1,
                            s = e[l],
                            c = l + 1,
                            u = e[c];
                        if (0 > i(s, n)) c < o && 0 > i(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[l] = n, r = l);
                        else if (c < o && 0 > i(u, n)) e[r] = u, e[c] = n, r = c;
                        else break
                    }
                }
                return t
            }

            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
                var a, l = performance;
                t.unstable_now = function() {
                    return l.now()
                }
            } else {
                var s = Date,
                    c = s.now();
                t.unstable_now = function() {
                    return s.now() - c
                }
            }
            var u = [],
                p = [],
                d = 1,
                f = null,
                h = 3,
                m = !1,
                v = !1,
                b = !1,
                g = "function" == typeof setTimeout ? setTimeout : null,
                y = "function" == typeof clearTimeout ? clearTimeout : null,
                w = "undefined" != typeof setImmediate ? setImmediate : null;

            function j(e) {
                for (var t = r(p); null !== t;) {
                    if (null === t.callback) o(p);
                    else if (t.startTime <= e) o(p), t.sortIndex = t.expirationTime, n(u, t);
                    else break;
                    t = r(p)
                }
            }

            function E(e) {
                if (b = !1, j(e), !v)
                    if (null !== r(u)) v = !0, _();
                    else {
                        var t = r(p);
                        null !== t && k(E, t.startTime - e)
                    }
            }
            var P = !1,
                C = -1,
                O = 5,
                S = -1;

            function M() {
                return !(t.unstable_now() - S < O)
            }

            function x() {
                if (P) {
                    var e = t.unstable_now();
                    S = e;
                    var n = !0;
                    try {
                        e: {
                            v = !1,
                            b && (b = !1, y(C), C = -1),
                            m = !0;
                            var i = h;
                            try {
                                t: {
                                    for (j(e), f = r(u); null !== f && !(f.expirationTime > e && M());) {
                                        var l = f.callback;
                                        if ("function" == typeof l) {
                                            f.callback = null, h = f.priorityLevel;
                                            var s = l(f.expirationTime <= e);
                                            if (e = t.unstable_now(), "function" == typeof s) {
                                                f.callback = s, j(e), n = !0;
                                                break t
                                            }
                                            f === r(u) && o(u), j(e)
                                        } else o(u);
                                        f = r(u)
                                    }
                                    if (null !== f) n = !0;
                                    else {
                                        var c = r(p);
                                        null !== c && k(E, c.startTime - e), n = !1
                                    }
                                }
                                break e
                            }
                            finally {
                                f = null, h = i, m = !1
                            }
                        }
                    }
                    finally {
                        n ? a() : P = !1
                    }
                }
            }
            if ("function" == typeof w) a = function() {
                w(x)
            };
            else if ("undefined" != typeof MessageChannel) {
                var T = new MessageChannel,
                    A = T.port2;
                T.port1.onmessage = x, a = function() {
                    A.postMessage(null)
                }
            } else a = function() {
                g(x, 0)
            };

            function _() {
                P || (P = !0, a())
            }

            function k(e, n) {
                C = g(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                v || m || (v = !0, _())
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, o, i) {
                var a = t.unstable_now();
                switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? a + i : a, e) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 0x3fffffff;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return l = i + l, e = {
                    id: d++,
                    callback: o,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: l,
                    sortIndex: -1
                }, i > a ? (e.sortIndex = i, n(p, e), null === r(u) && e === r(p) && (b ? (y(C), C = -1) : b = !0, k(E, i - a))) : (e.sortIndex = l, n(u, e), v || m || (v = !0, _())), e
            }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        33587: (e, t, n) => {
            let r, o, i, a, l;
            n.d(t, {
                A: () => ec,
                B: () => N,
                C: () => eu,
                E: () => H,
                a: () => z,
                b: () => R,
                c: () => eR,
                d: () => eD,
                e: () => ew,
                f: () => eG,
                i: () => L,
                u: () => D
            });
            var s = n(89103),
                c = n(43195),
                u = n.t(c, 2),
                p = n(99828),
                d = n(4703);
            let f = e => {
                    let t, n = new Set,
                        r = (e, r) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), n.forEach(n => n(t, e))
                            }
                        },
                        o = () => t,
                        i = {
                            setState: r,
                            getState: o,
                            getInitialState: () => a,
                            subscribe: e => (n.add(e), () => n.delete(e))
                        },
                        a = t = e(r, o, i);
                    return i
                },
                h = e => e ? f(e) : f,
                {
                    useSyncExternalStoreWithSelector: m
                } = d,
                v = e => e,
                b = (e, t) => {
                    let n = h(e),
                        r = (e, r = t) => (function(e, t = v, n) {
                            let r = m(e.subscribe, e.getState, e.getInitialState, t, n);
                            return c.useDebugValue(r), r
                        })(n, e, r);
                    return Object.assign(r, n), r
                },
                g = (e, t) => e ? b(e, t) : b;
            var y = n(90033),
                w = n.n(y),
                j = n(58541);
            let E = e => "object" == typeof e && "function" == typeof e.then,
                P = [];

            function C(e, t, n = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = e.length;
                if (t.length !== r) return !1;
                for (let o = 0; o < r; o++)
                    if (!n(e[o], t[o])) return !1;
                return !0
            }

            function O(e, t = null, n = !1, r = {}) {
                for (let o of (null === t && (t = [e]), P))
                    if (C(t, o.keys, o.equal)) {
                        if (n) return;
                        if (Object.prototype.hasOwnProperty.call(o, "error")) throw o.error;
                        if (Object.prototype.hasOwnProperty.call(o, "response")) return r.lifespan && r.lifespan > 0 && (o.timeout && clearTimeout(o.timeout), o.timeout = setTimeout(o.remove, r.lifespan)), o.response;
                        if (!n) throw o.promise
                    } let o = {
                    keys: t,
                    equal: r.equal,
                    remove: () => {
                        let e = P.indexOf(o); - 1 !== e && P.splice(e, 1)
                    },
                    promise: (E(e) ? e : e(...t)).then(e => {
                        o.response = e, r.lifespan && r.lifespan > 0 && (o.timeout = setTimeout(o.remove, r.lifespan))
                    }).catch(e => o.error = e)
                };
                if (P.push(o), !n) throw o.promise
            }
            let S = (e, t, n) => O(e, t, !1, n),
                M = (e, t, n) => void O(e, t, !0, n),
                x = e => {
                    if (void 0 === e || 0 === e.length) P.splice(0, P.length);
                    else {
                        let t = P.find(t => C(e, t.keys, t.equal));
                        t && t.remove()
                    }
                };
            var T = n(50987),
                A = n(98607);

            function _(e) {
                let t = e.root;
                for (; t.getState().previousRoot;) t = t.getState().previousRoot;
                return t
            }
            n(75521), u.act;
            let k = e => e && e.isOrthographicCamera,
                L = e => e && e.hasOwnProperty("current"),
                I = e => null != e && ("string" == typeof e || "number" == typeof e || e.isColor),
                R = ((e, t) => "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || (null == (t = window.navigator) ? void 0 : t.product) === "ReactNative"))() ? c.useLayoutEffect : c.useEffect;

            function z(e) {
                let t = c.useRef(e);
                return R(() => void(t.current = e), [e]), t
            }

            function D() {
                let e = (0, A.u5)(),
                    t = (0, A.y3)();
                return c.useMemo(() => ({
                    children: n
                }) => {
                    let r = (0, A.Nz)(e, !0, e => e.type === c.StrictMode) ? c.StrictMode : c.Fragment;
                    return (0, T.jsx)(r, {
                        children: (0, T.jsx)(t, {
                            children: n
                        })
                    })
                }, [e, t])
            }

            function N({
                set: e
            }) {
                return R(() => (e(new Promise(() => null)), () => e(!1)), [e]), null
            }
            let H = (e => ((e = class extends c.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }).getDerivedStateFromError = () => ({
                error: !0
            }), e))();

            function F(e) {
                var t;
                let n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
                return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
            }

            function V(e) {
                var t;
                return null == (t = e.__r3f) ? void 0 : t.root.getState()
            }
            let U = {
                    obj: e => e === Object(e) && !U.arr(e) && "function" != typeof e,
                    fun: e => "function" == typeof e,
                    str: e => "string" == typeof e,
                    num: e => "number" == typeof e,
                    boo: e => "boolean" == typeof e,
                    und: e => void 0 === e,
                    nul: e => null === e,
                    arr: e => Array.isArray(e),
                    equ(e, t, {
                        arrays: n = "shallow",
                        objects: r = "reference",
                        strict: o = !0
                    } = {}) {
                        let i;
                        if (typeof e != typeof t || !!e != !!t) return !1;
                        if (U.str(e) || U.num(e) || U.boo(e)) return e === t;
                        let a = U.obj(e);
                        if (a && "reference" === r) return e === t;
                        let l = U.arr(e);
                        if (l && "reference" === n) return e === t;
                        if ((l || a) && e === t) return !0;
                        for (i in e)
                            if (!(i in t)) return !1;
                        if (a && "shallow" === n && "shallow" === r) {
                            for (i in o ? t : e)
                                if (!U.equ(e[i], t[i], {
                                        strict: o,
                                        objects: "reference"
                                    })) return !1
                        } else
                            for (i in o ? t : e)
                                if (e[i] !== t[i]) return !1;
                        if (U.und(i)) {
                            if (l && 0 === e.length && 0 === t.length || a && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                            if (e !== t) return !1
                        }
                        return !0
                    }
                },
                Y = ["children", "key", "ref"];

            function q(e, t, n, r) {
                let o = null == e ? void 0 : e.__r3f;
                return !o && (o = {
                    root: t,
                    type: n,
                    parent: null,
                    children: [],
                    props: function(e) {
                        let t = {};
                        for (let n in e) Y.includes(n) || (t[n] = e[n]);
                        return t
                    }(r),
                    object: e,
                    eventCount: 0,
                    handlers: {},
                    isHidden: !1
                }, e && (e.__r3f = o)), o
            }

            function B(e, t) {
                let n = e[t];
                if (!t.includes("-")) return {
                    root: e,
                    key: t,
                    target: n
                };
                for (let o of (n = e, t.split("-"))) {
                    var r;
                    t = o, e = n, n = null == (r = n) ? void 0 : r[t]
                }
                return {
                    root: e,
                    key: t,
                    target: n
                }
            }
            let X = /-\d+$/;

            function Z(e, t) {
                if (U.str(t.props.attach)) {
                    if (X.test(t.props.attach)) {
                        let n = t.props.attach.replace(X, ""),
                            {
                                root: r,
                                key: o
                            } = B(e.object, n);
                        Array.isArray(r[o]) || (r[o] = [])
                    }
                    let {
                        root: n,
                        key: r
                    } = B(e.object, t.props.attach);
                    t.previousAttach = n[r], n[r] = t.object
                } else U.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object))
            }

            function W(e, t) {
                if (U.str(t.props.attach)) {
                    let {
                        root: n,
                        key: r
                    } = B(e.object, t.props.attach), o = t.previousAttach;
                    void 0 === o ? delete n[r] : n[r] = o
                } else null == t.previousAttach || t.previousAttach(e.object, t.object);
                delete t.previousAttach
            }
            let K = [...Y, "args", "dispose", "attach", "object", "onUpdate", "dispose"],
                G = new Map,
                $ = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"],
                Q = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;

            function J(e, t) {
                var n, r;
                let o = e.__r3f,
                    i = o && _(o).getState(),
                    a = null == o ? void 0 : o.eventCount;
                for (let n in t) {
                    let a = t[n];
                    if (K.includes(n)) continue;
                    if (o && Q.test(n)) {
                        "function" == typeof a ? o.handlers[n] = a : delete o.handlers[n], o.eventCount = Object.keys(o.handlers).length;
                        continue
                    }
                    if (void 0 === a) continue;
                    let {
                        root: l,
                        key: c,
                        target: u
                    } = B(e, n);
                    u instanceof s.Layers && a instanceof s.Layers ? u.mask = a.mask : u instanceof s.Color && I(a) ? u.set(a) : null !== u && "object" == typeof u && "function" == typeof u.set && "function" == typeof u.copy && null != a && a.constructor && u.constructor === a.constructor ? u.copy(a) : null !== u && "object" == typeof u && "function" == typeof u.set && Array.isArray(a) ? "function" == typeof u.fromArray ? u.fromArray(a) : u.set(...a) : null !== u && "object" == typeof u && "function" == typeof u.set && "number" == typeof a ? "function" == typeof u.setScalar ? u.setScalar(a) : u.set(a) : (l[c] = a, i && !i.linear && $.includes(c) && null != (r = l[c]) && r.isTexture && l[c].format === s.RGBAFormat && l[c].type === s.UnsignedByteType && (l[c].colorSpace = s.SRGBColorSpace))
                }
                if (null != o && o.parent && null != i && i.internal && null != (n = o.object) && n.isObject3D && a !== o.eventCount) {
                    let e = o.object,
                        t = i.internal.interaction.indexOf(e);
                    t > -1 && i.internal.interaction.splice(t, 1), o.eventCount && null !== e.raycast && i.internal.interaction.push(e)
                }
                return o && void 0 === o.props.attach && (o.object.isBufferGeometry ? o.props.attach = "geometry" : o.object.isMaterial && (o.props.attach = "material")), o && ee(o), e
            }

            function ee(e) {
                var t;
                if (!e.parent) return;
                null == e.props.onUpdate || e.props.onUpdate(e.object);
                let n = null == (t = e.root) || null == t.getState ? void 0 : t.getState();
                n && 0 === n.internal.frames && n.invalidate()
            }

            function et(e, t) {
                e.manual || (k(e) ? (e.left = -(t.width / 2), e.right = t.width / 2, e.top = t.height / 2, e.bottom = -(t.height / 2)) : e.aspect = t.width / t.height, e.updateProjectionMatrix())
            }
            let en = e => null == e ? void 0 : e.isObject3D;

            function er(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
            }

            function eo(e, t, n, r) {
                let o = n.get(t);
                o && (n.delete(t), 0 === n.size && (e.delete(r), o.target.releasePointerCapture(r)))
            }
            let ei = e => !!(null != e && e.render),
                ea = c.createContext(null),
                el = (e, t) => {
                    let n = g((n, r) => {
                            let o, i = new s.Vector3,
                                a = new s.Vector3,
                                l = new s.Vector3;

                            function u(e = r().camera, t = a, n = r().size) {
                                let {
                                    width: o,
                                    height: s,
                                    top: c,
                                    left: p
                                } = n, d = o / s;
                                t.isVector3 ? l.copy(t) : l.set(...t);
                                let f = e.getWorldPosition(i).distanceTo(l);
                                if (k(e)) return {
                                    width: o / e.zoom,
                                    height: s / e.zoom,
                                    top: c,
                                    left: p,
                                    factor: 1,
                                    distance: f,
                                    aspect: d
                                }; {
                                    let t = 2 * Math.tan(e.fov * Math.PI / 180 / 2) * f,
                                        n = o / s * t;
                                    return {
                                        width: n,
                                        height: t,
                                        top: c,
                                        left: p,
                                        factor: o / n,
                                        distance: f,
                                        aspect: d
                                    }
                                }
                            }
                            let p = e => n(t => ({
                                    performance: {
                                        ...t.performance,
                                        current: e
                                    }
                                })),
                                d = new s.Vector2;
                            return {
                                set: n,
                                get: r,
                                gl: null,
                                camera: null,
                                raycaster: null,
                                events: {
                                    priority: 1,
                                    enabled: !0,
                                    connected: !1
                                },
                                scene: null,
                                xr: null,
                                invalidate: (t = 1) => e(r(), t),
                                advance: (e, n) => t(e, n, r()),
                                legacy: !1,
                                linear: !1,
                                flat: !1,
                                controls: null,
                                clock: new s.Clock,
                                pointer: d,
                                mouse: d,
                                frameloop: "always",
                                onPointerMissed: void 0,
                                performance: {
                                    current: 1,
                                    min: .5,
                                    max: 1,
                                    debounce: 200,
                                    regress: () => {
                                        let e = r();
                                        o && clearTimeout(o), e.performance.current !== e.performance.min && p(e.performance.min), o = setTimeout(() => p(r().performance.max), e.performance.debounce)
                                    }
                                },
                                size: {
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0
                                },
                                viewport: {
                                    initialDpr: 0,
                                    dpr: 0,
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0,
                                    aspect: 0,
                                    distance: 0,
                                    factor: 0,
                                    getCurrentViewport: u
                                },
                                setEvents: e => n(t => ({
                                    ...t,
                                    events: {
                                        ...t.events,
                                        ...e
                                    }
                                })),
                                setSize: (e, t, o = 0, i = 0) => {
                                    let l = r().camera,
                                        s = {
                                            width: e,
                                            height: t,
                                            top: o,
                                            left: i
                                        };
                                    n(e => ({
                                        size: s,
                                        viewport: {
                                            ...e.viewport,
                                            ...u(l, a, s)
                                        }
                                    }))
                                },
                                setDpr: e => n(t => {
                                    let n = F(e);
                                    return {
                                        viewport: {
                                            ...t.viewport,
                                            dpr: n,
                                            initialDpr: t.viewport.initialDpr || n
                                        }
                                    }
                                }),
                                setFrameloop: (e = "always") => {
                                    let t = r().clock;
                                    t.stop(), t.elapsedTime = 0, "never" !== e && (t.start(), t.elapsedTime = 0), n(() => ({
                                        frameloop: e
                                    }))
                                },
                                previousRoot: void 0,
                                internal: {
                                    interaction: [],
                                    hovered: new Map,
                                    subscribers: [],
                                    initialClick: [0, 0],
                                    initialHits: [],
                                    capturedMap: new Map,
                                    lastEvent: c.createRef(),
                                    active: !1,
                                    frames: 0,
                                    priority: 0,
                                    subscribe: (e, t, n) => {
                                        let o = r().internal;
                                        return o.priority = o.priority + +(t > 0), o.subscribers.push({
                                            ref: e,
                                            priority: t,
                                            store: n
                                        }), o.subscribers = o.subscribers.sort((e, t) => e.priority - t.priority), () => {
                                            let n = r().internal;
                                            null != n && n.subscribers && (n.priority = n.priority - (t > 0), n.subscribers = n.subscribers.filter(t => t.ref !== e))
                                        }
                                    }
                                }
                            }
                        }),
                        r = n.getState(),
                        o = r.size,
                        i = r.viewport.dpr,
                        a = r.camera;
                    return n.subscribe(() => {
                        let {
                            camera: e,
                            size: t,
                            viewport: r,
                            gl: l,
                            set: s
                        } = n.getState();
                        if (t.width !== o.width || t.height !== o.height || r.dpr !== i) {
                            o = t, i = r.dpr, et(e, t), r.dpr > 0 && l.setPixelRatio(r.dpr);
                            let n = "undefined" != typeof HTMLCanvasElement && l.domElement instanceof HTMLCanvasElement;
                            l.setSize(t.width, t.height, n)
                        }
                        e !== a && (a = e, s(t => ({
                            viewport: {
                                ...t.viewport,
                                ...t.viewport.getCurrentViewport(e)
                            }
                        })))
                    }), n.subscribe(t => e(t)), n
                };

            function es() {
                let e = c.useContext(ea);
                if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
                return e
            }

            function ec(e = e => e, t) {
                return es()(e, t)
            }

            function eu(e, t = 0) {
                let n = es(),
                    r = n.getState().internal.subscribe,
                    o = z(e);
                return R(() => r(o, t, n), [t, r, n]), null
            }
            let ep = new WeakMap,
                ed = e => {
                    var t;
                    return "function" == typeof e && (null == e || null == (t = e.prototype) ? void 0 : t.constructor) === e
                };

            function ef(e, t) {
                return function(n, ...r) {
                    let o;
                    return ed(n) ? (o = ep.get(n)) || (o = new n, ep.set(n, o)) : o = n, e && e(o), Promise.all(r.map(e => new Promise((n, r) => o.load(e, e => {
                        en(null == e ? void 0 : e.scene) && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {},
                                meshes: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material), e.isMesh && !t.meshes[e.name] && (t.meshes[e.name] = e)
                            }), t
                        }(e.scene)), n(e)
                    }, t, t => r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))
                }
            }

            function eh(e, t, n, r) {
                let o = Array.isArray(t) ? t : [t],
                    i = S(ef(n, r), [e, ...o], {
                        equal: U.equ
                    });
                return Array.isArray(t) ? i : i[0]
            }
            eh.preload = function(e, t, n) {
                let r = Array.isArray(t) ? t : [t];
                return M(ef(n), [e, ...r])
            }, eh.clear = function(e, t) {
                return x([e, ...Array.isArray(t) ? t : [t]])
            };
            let em = {},
                ev = /^three(?=[A-Z])/,
                eb = e => `${e[0].toUpperCase()}${e.slice(1)}`,
                eg = 0,
                ey = e => "function" == typeof e;

            function ew(e) {
                if (ey(e)) {
                    let t = `${eg++}`;
                    return em[t] = e, t
                }
                Object.assign(em, e)
            }

            function ej(e, t) {
                let n = eb(e),
                    r = em[n];
                if ("primitive" !== e && !r) throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                if ("primitive" === e && !t.object) throw Error("R3F: Primitives without 'object' are invalid!");
                if (void 0 !== t.args && !Array.isArray(t.args)) throw Error("R3F: The args prop must be an array!")
            }

            function eE(e) {
                if (e.isHidden) {
                    var t;
                    e.props.attach && null != (t = e.parent) && t.object ? Z(e.parent, e) : en(e.object) && !1 !== e.props.visible && (e.object.visible = !0), e.isHidden = !1, ee(e)
                }
            }

            function eP(e, t, n) {
                let r = t.root.getState();
                if (e.parent || e.object === r.scene) {
                    if (!t.object) {
                        var o, i;
                        let e = em[eb(t.type)];
                        t.object = null != (o = t.props.object) ? o : new e(...null != (i = t.props.args) ? i : []), t.object.__r3f = t
                    }
                    if (J(t.object, t.props), t.props.attach) Z(e, t);
                    else if (en(t.object) && en(e.object)) {
                        let r = e.object.children.indexOf(null == n ? void 0 : n.object);
                        if (n && -1 !== r) {
                            let n = e.object.children.indexOf(t.object); - 1 !== n ? (e.object.children.splice(n, 1), e.object.children.splice(n < r ? r - 1 : r, 0, t.object)) : (t.object.parent = e.object, e.object.children.splice(r, 0, t.object), t.object.dispatchEvent({
                                type: "added"
                            }), e.object.dispatchEvent({
                                type: "childadded",
                                child: t.object
                            }))
                        } else e.object.add(t.object)
                    }
                    for (let e of t.children) eP(t, e);
                    ee(t)
                }
            }

            function eC(e, t) {
                t && (t.parent = e, e.children.push(t), eP(e, t))
            }

            function eO(e, t, n) {
                if (!t || !n) return;
                t.parent = e;
                let r = e.children.indexOf(n); - 1 !== r ? e.children.splice(r, 0, t) : e.children.push(t), eP(e, t, n)
            }

            function eS(e) {
                if ("function" == typeof e.dispose) {
                    let t = () => {
                        try {
                            e.dispose()
                        } catch {}
                    };
                    "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? t() : (0, j.unstable_scheduleCallback)(j.unstable_IdlePriority, t)
                }
            }

            function eM(e, t, n) {
                if (!t) return;
                t.parent = null;
                let r = e.children.indexOf(t); - 1 !== r && e.children.splice(r, 1), t.props.attach ? W(e, t) : en(t.object) && en(e.object) && (e.object.remove(t.object), function(e, t) {
                    let {
                        internal: n
                    } = e.getState();
                    n.interaction = n.interaction.filter(e => e !== t), n.initialHits = n.initialHits.filter(e => e !== t), n.hovered.forEach((e, r) => {
                        (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                    }), n.capturedMap.forEach((e, r) => {
                        eo(n.capturedMap, t, e, r)
                    })
                }(_(t), t.object));
                let o = null !== t.props.dispose && !1 !== n;
                for (let e = t.children.length - 1; e >= 0; e--) {
                    let n = t.children[e];
                    eM(t, n, o)
                }
                t.children.length = 0, delete t.object.__r3f, o && "primitive" !== t.type && "Scene" !== t.object.type && eS(t.object), void 0 === n && ee(t)
            }
            let ex = [],
                eT = () => {},
                eA = {},
                e_ = 0,
                ek = function(e) {
                    let t = w()(e);
                    return t.injectIntoDevTools({
                        bundleType: 0,
                        rendererPackageName: "@react-three/fiber",
                        version: c.version
                    }), t
                }({
                    isPrimaryRenderer: !1,
                    warnsIfNotActing: !1,
                    supportsMutation: !0,
                    supportsPersistence: !1,
                    supportsHydration: !1,
                    createInstance: function(e, t, n) {
                        var r;
                        return ej(e = eb(e) in em ? e : e.replace(ev, ""), t), "primitive" === e && null != (r = t.object) && r.__r3f && delete t.object.__r3f, q(t.object, n, e, t)
                    },
                    removeChild: eM,
                    appendChild: eC,
                    appendInitialChild: eC,
                    insertBefore: eO,
                    appendChildToContainer(e, t) {
                        let n = e.getState().scene.__r3f;
                        t && n && eC(n, t)
                    },
                    removeChildFromContainer(e, t) {
                        let n = e.getState().scene.__r3f;
                        t && n && eM(n, t)
                    },
                    insertInContainerBefore(e, t, n) {
                        let r = e.getState().scene.__r3f;
                        t && n && r && eO(r, t, n)
                    },
                    getRootHostContext: () => eA,
                    getChildHostContext: () => eA,
                    commitUpdate(e, t, n, r, o) {
                        var i, a, l;
                        ej(t, r);
                        let s = !1;
                        if ("primitive" === e.type && n.object !== r.object || (null == (i = r.args) ? void 0 : i.length) !== (null == (a = n.args) ? void 0 : a.length) ? s = !0 : null != (l = r.args) && l.some((e, t) => {
                                var r;
                                return e !== (null == (r = n.args) ? void 0 : r[t])
                            }) && (s = !0), s) ex.push([e, {
                            ...r
                        }, o]);
                        else {
                            let t = function(e, t) {
                                let n = {};
                                for (let r in t)
                                    if (!K.includes(r) && !U.equ(t[r], e.props[r]))
                                        for (let e in n[r] = t[r], t) e.startsWith(`${r}-`) && (n[e] = t[e]);
                                for (let r in e.props) {
                                    if (K.includes(r) || t.hasOwnProperty(r)) continue;
                                    let {
                                        root: o,
                                        key: i
                                    } = B(e.object, r);
                                    if (o.constructor && 0 === o.constructor.length) {
                                        let e = function(e) {
                                            let t = G.get(e.constructor);
                                            try {
                                                t || (t = new e.constructor, G.set(e.constructor, t))
                                            } catch (e) {}
                                            return t
                                        }(o);
                                        U.und(e) || (n[i] = e[i])
                                    } else n[i] = 0
                                }
                                return n
                            }(e, r);
                            Object.keys(t).length && (Object.assign(e.props, t), J(e.object, t))
                        }(null === o.sibling || (4 & o.flags) == 0) && function() {
                            for (let [e] of ex) {
                                let t = e.parent;
                                if (t)
                                    for (let n of (e.props.attach ? W(t, e) : en(e.object) && en(t.object) && t.object.remove(e.object), e.children)) n.props.attach ? W(e, n) : en(n.object) && en(e.object) && e.object.remove(n.object);
                                e.isHidden && eE(e), e.object.__r3f && delete e.object.__r3f, "primitive" !== e.type && eS(e.object)
                            }
                            for (let [r, o, i] of ex) {
                                r.props = o;
                                let a = r.parent;
                                if (a) {
                                    let o = em[eb(r.type)];
                                    r.object = null != (e = r.props.object) ? e : new o(...null != (t = r.props.args) ? t : []), r.object.__r3f = r;
                                    var e, t, n = r.object;
                                    for (let e of [i, i.alternate])
                                        if (null !== e)
                                            if ("function" == typeof e.ref) {
                                                null == e.refCleanup || e.refCleanup();
                                                let t = e.ref(n);
                                                "function" == typeof t && (e.refCleanup = t)
                                            } else e.ref && (e.ref.current = n);
                                    for (let e of (J(r.object, r.props), r.props.attach ? Z(a, r) : en(r.object) && en(a.object) && a.object.add(r.object), r.children)) e.props.attach ? Z(r, e) : en(e.object) && en(r.object) && r.object.add(e.object);
                                    ee(r)
                                }
                            }
                            ex.length = 0
                        }()
                    },
                    finalizeInitialChildren: () => !1,
                    commitMount() {},
                    getPublicInstance: e => null == e ? void 0 : e.object,
                    prepareForCommit: () => null,
                    preparePortalMount: e => q(e.getState().scene, e, "", {}),
                    resetAfterCommit: () => {},
                    shouldSetTextContent: () => !1,
                    clearContainer: () => !1,
                    hideInstance: function(e) {
                        if (!e.isHidden) {
                            var t;
                            e.props.attach && null != (t = e.parent) && t.object ? W(e.parent, e) : en(e.object) && (e.object.visible = !1), e.isHidden = !0, ee(e)
                        }
                    },
                    unhideInstance: eE,
                    createTextInstance: eT,
                    hideTextInstance: eT,
                    unhideTextInstance: eT,
                    scheduleTimeout: "function" == typeof setTimeout ? setTimeout : void 0,
                    cancelTimeout: "function" == typeof clearTimeout ? clearTimeout : void 0,
                    noTimeout: -1,
                    getInstanceFromNode: () => null,
                    beforeActiveInstanceBlur() {},
                    afterActiveInstanceBlur() {},
                    detachDeletedInstance() {},
                    prepareScopeUpdate() {},
                    getInstanceFromScope: () => null,
                    shouldAttemptEagerTransition: () => !1,
                    trackSchedulerEvent: () => {},
                    resolveEventType: () => null,
                    resolveEventTimeStamp: () => -1.1,
                    requestPostPaintCallback() {},
                    maySuspendCommit: () => !1,
                    preloadInstance: () => !0,
                    startSuspendingCommit() {},
                    suspendInstance() {},
                    waitForCommitToBeReady: () => null,
                    NotPendingTransition: null,
                    HostTransitionContext: c.createContext(null),
                    setCurrentUpdatePriority(e) {
                        e_ = e
                    },
                    getCurrentUpdatePriority: () => e_,
                    resolveUpdatePriority() {
                        var e;
                        if (0 !== e_) return e_;
                        switch ("undefined" != typeof window && (null == (e = window.event) ? void 0 : e.type)) {
                            case "click":
                            case "contextmenu":
                            case "dblclick":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointerup":
                                return p.DiscreteEventPriority;
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerenter":
                            case "pointerleave":
                            case "wheel":
                                return p.ContinuousEventPriority;
                            default:
                                return p.DefaultEventPriority
                        }
                    },
                    resetFormInstance() {}
                }),
                eL = new Map,
                eI = {
                    objects: "shallow",
                    strict: !1
                };

            function eR(e) {
                let t, n, r = eL.get(e),
                    o = null == r ? void 0 : r.fiber,
                    i = null == r ? void 0 : r.store;
                r && console.warn("R3F.createRoot should only be called once!");
                let a = "function" == typeof reportError ? reportError : console.error,
                    l = i || el(eZ, eW),
                    c = o || ek.createContainer(l, p.ConcurrentRoot, null, !1, null, "", a, a, a, null);
                r || eL.set(e, {
                    fiber: c,
                    store: l
                });
                let u = !1,
                    d = null;
                return {
                    async configure(r = {}) {
                        var o, i;
                        let a;
                        d = new Promise(e => a = e);
                        let {
                            gl: c,
                            size: p,
                            scene: f,
                            events: h,
                            onCreated: m,
                            shadows: v = !1,
                            linear: b = !1,
                            flat: g = !1,
                            legacy: y = !1,
                            orthographic: w = !1,
                            frameloop: j = "always",
                            dpr: E = [1, 2],
                            performance: P,
                            raycaster: C,
                            camera: O,
                            onPointerMissed: S
                        } = r, M = l.getState(), x = M.gl;
                        if (!M.gl) {
                            let t = {
                                    canvas: e,
                                    powerPreference: "high-performance",
                                    antialias: !0,
                                    alpha: !0
                                },
                                n = "function" == typeof c ? await c(t) : c;
                            x = ei(n) ? n : new s.WebGLRenderer({
                                ...t,
                                ...c
                            }), M.set({
                                gl: x
                            })
                        }
                        let T = M.raycaster;
                        T || M.set({
                            raycaster: T = new s.Raycaster
                        });
                        let {
                            params: A,
                            ..._
                        } = C || {};
                        if (U.equ(_, T, eI) || J(T, {
                                ..._
                            }), U.equ(A, T.params, eI) || J(T, {
                                params: {
                                    ...T.params,
                                    ...A
                                }
                            }), !M.camera || M.camera === n && !U.equ(n, O, eI)) {
                            n = O;
                            let e = null == O ? void 0 : O.isCamera,
                                t = e ? O : w ? new s.OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new s.PerspectiveCamera(75, 0, .1, 1e3);
                            !e && (t.position.z = 5, O && (J(t, O), !t.manual && ("aspect" in O || "left" in O || "right" in O || "bottom" in O || "top" in O) && (t.manual = !0, t.updateProjectionMatrix())), M.camera || null != O && O.rotation || t.lookAt(0, 0, 0)), M.set({
                                camera: t
                            }), T.camera = t
                        }
                        if (!M.scene) {
                            let e;
                            null != f && f.isScene ? q(e = f, l, "", {}) : (q(e = new s.Scene, l, "", {}), f && J(e, f)), M.set({
                                scene: e
                            })
                        }
                        h && !M.events.handlers && M.set({
                            events: h(l)
                        });
                        let k = function(e, t) {
                            if (!t && "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                                let {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: o
                                } = e.parentElement.getBoundingClientRect();
                                return {
                                    width: t,
                                    height: n,
                                    top: r,
                                    left: o
                                }
                            }
                            return !t && "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                                width: e.width,
                                height: e.height,
                                top: 0,
                                left: 0
                            } : {
                                width: 0,
                                height: 0,
                                top: 0,
                                left: 0,
                                ...t
                            }
                        }(e, p);
                        if (U.equ(k, M.size, eI) || M.setSize(k.width, k.height, k.top, k.left), E && M.viewport.dpr !== F(E) && M.setDpr(E), M.frameloop !== j && M.setFrameloop(j), M.onPointerMissed || M.set({
                                onPointerMissed: S
                            }), P && !U.equ(P, M.performance, eI) && M.set(e => ({
                                performance: {
                                    ...e.performance,
                                    ...P
                                }
                            })), !M.xr) {
                            let e = (e, t) => {
                                    let n = l.getState();
                                    "never" !== n.frameloop && eW(e, !0, n, t)
                                },
                                t = () => {
                                    let t = l.getState();
                                    t.gl.xr.enabled = t.gl.xr.isPresenting, t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null), t.gl.xr.isPresenting || eZ(t)
                                },
                                n = {
                                    connect() {
                                        let e = l.getState().gl;
                                        e.xr.addEventListener("sessionstart", t), e.xr.addEventListener("sessionend", t)
                                    },
                                    disconnect() {
                                        let e = l.getState().gl;
                                        e.xr.removeEventListener("sessionstart", t), e.xr.removeEventListener("sessionend", t)
                                    }
                                };
                            "function" == typeof(null == (o = x.xr) ? void 0 : o.addEventListener) && n.connect(), M.set({
                                xr: n
                            })
                        }
                        if (x.shadowMap) {
                            let e = x.shadowMap.enabled,
                                t = x.shadowMap.type;
                            if (x.shadowMap.enabled = !!v, U.boo(v)) x.shadowMap.type = s.PCFSoftShadowMap;
                            else if (U.str(v)) {
                                let e = {
                                    basic: s.BasicShadowMap,
                                    percentage: s.PCFShadowMap,
                                    soft: s.PCFSoftShadowMap,
                                    variance: s.VSMShadowMap
                                };
                                x.shadowMap.type = null != (i = e[v]) ? i : s.PCFSoftShadowMap
                            } else U.obj(v) && Object.assign(x.shadowMap, v);
                            (e !== x.shadowMap.enabled || t !== x.shadowMap.type) && (x.shadowMap.needsUpdate = !0)
                        }
                        return s.ColorManagement.enabled = !y, u || (x.outputColorSpace = b ? s.LinearSRGBColorSpace : s.SRGBColorSpace, x.toneMapping = g ? s.NoToneMapping : s.ACESFilmicToneMapping), M.legacy !== y && M.set(() => ({
                            legacy: y
                        })), M.linear !== b && M.set(() => ({
                            linear: b
                        })), M.flat !== g && M.set(() => ({
                            flat: g
                        })), !c || U.fun(c) || ei(c) || U.equ(c, x, eI) || J(x, c), t = m, u = !0, a(), this
                    },
                    render(n) {
                        return u || d || this.configure(), d.then(() => {
                            ek.updateContainer((0, T.jsx)(ez, {
                                store: l,
                                children: n,
                                onCreated: t,
                                rootElement: e
                            }), c, null, () => void 0)
                        }), l
                    },
                    unmount() {
                        eD(e)
                    }
                }
            }

            function ez({
                store: e,
                children: t,
                onCreated: n,
                rootElement: r
            }) {
                return R(() => {
                    let t = e.getState();
                    t.set(e => ({
                        internal: {
                            ...e.internal,
                            active: !0
                        }
                    })), n && n(t), e.getState().events.connected || null == t.events.connect || t.events.connect(r)
                }, []), (0, T.jsx)(ea.Provider, {
                    value: e,
                    children: t
                })
            }

            function eD(e, t) {
                let n = eL.get(e),
                    r = null == n ? void 0 : n.fiber;
                if (r) {
                    let o = null == n ? void 0 : n.store.getState();
                    o && (o.internal.active = !1), ek.updateContainer(null, r, null, () => {
                        o && setTimeout(() => {
                            try {
                                null == o.events.disconnect || o.events.disconnect(), null == (n = o.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(), null == (i = o.gl) || null == i.forceContextLoss || i.forceContextLoss(), null != (a = o.gl) && a.xr && o.xr.disconnect();
                                var n, r, i, a, l = o.scene;
                                for (let e in "Scene" !== l.type && (null == l.dispose || l.dispose()), l) {
                                    let t = l[e];
                                    (null == t ? void 0 : t.type) !== "Scene" && (null == t || null == t.dispose || t.dispose())
                                }
                                eL.delete(e), t && t(e)
                            } catch (e) {}
                        }, 500)
                    })
                }
            }
            let eN = new Set,
                eH = new Set,
                eF = new Set;

            function eV(e, t) {
                if (e.size)
                    for (let {
                            callback: n
                        } of e.values()) n(t)
            }

            function eU(e, t) {
                switch (e) {
                    case "before":
                        return eV(eN, t);
                    case "after":
                        return eV(eH, t);
                    case "tail":
                        return eV(eF, t)
                }
            }

            function eY(e, t, n) {
                let i = t.clock.getDelta();
                "never" === t.frameloop && "number" == typeof e && (i = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), r = t.internal.subscribers;
                for (let e = 0; e < r.length; e++)(o = r[e]).ref.current(o.store.getState(), i, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }
            let eq = !1,
                eB = !1;

            function eX(e) {
                for (let n of (a = requestAnimationFrame(eX), eq = !0, i = 0, eU("before", e), eB = !0, eL.values())) {
                    var t;
                    (l = n.store.getState()).internal.active && ("always" === l.frameloop || l.internal.frames > 0) && !(null != (t = l.gl.xr) && t.isPresenting) && (i += eY(e, l))
                }
                if (eB = !1, eU("after", e), 0 === i) return eU("tail", e), eq = !1, cancelAnimationFrame(a)
            }

            function eZ(e, t = 1) {
                var n;
                if (!e) return eL.forEach(e => eZ(e.store.getState(), t));
                (null == (n = e.gl.xr) || !n.isPresenting) && e.internal.active && "never" !== e.frameloop && (t > 1 ? e.internal.frames = Math.min(60, e.internal.frames + t) : eB ? e.internal.frames = 2 : e.internal.frames = 1, eq || (eq = !0, requestAnimationFrame(eX)))
            }

            function eW(e, t = !0, n, r) {
                if (t && eU("before", e), n) eY(e, n, r);
                else
                    for (let t of eL.values()) eY(e, t.store.getState());
                t && eU("after", e)
            }
            let eK = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function eG(e) {
                let {
                    handlePointer: t
                } = function(e) {
                    function t(e) {
                        return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
                            var n;
                            return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
                        }))
                    }

                    function n(t) {
                        let {
                            internal: n
                        } = e.getState();
                        for (let e of n.hovered.values())
                            if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                                let r = e.eventObject.__r3f;
                                if (n.hovered.delete(er(e)), null != r && r.eventCount) {
                                    let n = r.handlers,
                                        o = {
                                            ...e,
                                            intersections: t
                                        };
                                    null == n.onPointerOut || n.onPointerOut(o), null == n.onPointerLeave || n.onPointerLeave(o)
                                }
                            }
                    }

                    function r(e, t) {
                        for (let n = 0; n < t.length; n++) {
                            let r = t[n].__r3f;
                            null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
                        }
                    }
                    return {
                        handlePointer: function(o) {
                            switch (o) {
                                case "onPointerLeave":
                                case "onPointerCancel":
                                    return () => n([]);
                                case "onLostPointerCapture":
                                    return t => {
                                        let {
                                            internal: r
                                        } = e.getState();
                                        "pointerId" in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
                                            r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId), n([]))
                                        })
                                    }
                            }
                            return function(i) {
                                let {
                                    onPointerMissed: a,
                                    internal: l
                                } = e.getState();
                                l.lastEvent.current = i;
                                let c = "onPointerMove" === o,
                                    u = "onClick" === o || "onContextMenu" === o || "onDoubleClick" === o,
                                    p = function(t, n) {
                                        let r = e.getState(),
                                            o = new Set,
                                            i = [],
                                            a = n ? n(r.internal.interaction) : r.internal.interaction;
                                        for (let e = 0; e < a.length; e++) {
                                            let t = V(a[e]);
                                            t && (t.raycaster.camera = void 0)
                                        }
                                        r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                                        let l = a.flatMap(function(e) {
                                            let n = V(e);
                                            if (!n || !n.events.enabled || null === n.raycaster.camera) return [];
                                            if (void 0 === n.raycaster.camera) {
                                                var r;
                                                null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()), void 0 === n.raycaster.camera && (n.raycaster.camera = null)
                                            }
                                            return n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []
                                        }).sort((e, t) => {
                                            let n = V(e.object),
                                                r = V(t.object);
                                            return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                                        }).filter(e => {
                                            let t = er(e);
                                            return !o.has(t) && (o.add(t), !0)
                                        });
                                        for (let e of (r.events.filter && (l = r.events.filter(l, r)), l)) {
                                            let t = e.object;
                                            for (; t;) {
                                                var s;
                                                null != (s = t.__r3f) && s.eventCount && i.push({
                                                    ...e,
                                                    eventObject: t
                                                }), t = t.parent
                                            }
                                        }
                                        if ("pointerId" in t && r.internal.capturedMap.has(t.pointerId))
                                            for (let e of r.internal.capturedMap.get(t.pointerId).values()) o.has(er(e.intersection)) || i.push(e.intersection);
                                        return i
                                    }(i, c ? t : void 0),
                                    d = u ? function(t) {
                                        let {
                                            internal: n
                                        } = e.getState(), r = t.offsetX - n.initialClick[0], o = t.offsetY - n.initialClick[1];
                                        return Math.round(Math.sqrt(r * r + o * o))
                                    }(i) : 0;
                                "onPointerDown" === o && (l.initialClick = [i.offsetX, i.offsetY], l.initialHits = p.map(e => e.eventObject)), u && !p.length && d <= 2 && (r(i, l.interaction), a && a(i)), c && n(p), ! function(e, t, r, o) {
                                    if (e.length) {
                                        let i = {
                                            stopped: !1
                                        };
                                        for (let a of e) {
                                            let l = V(a.object);
                                            if (l || a.object.traverseAncestors(e => {
                                                    let t = V(e);
                                                    if (t) return l = t, !1
                                                }), l) {
                                                let {
                                                    raycaster: c,
                                                    pointer: u,
                                                    camera: p,
                                                    internal: d
                                                } = l, f = new s.Vector3(u.x, u.y, 0).unproject(p), h = e => {
                                                    var t, n;
                                                    return null != (t = null == (n = d.capturedMap.get(e)) ? void 0 : n.has(a.eventObject)) && t
                                                }, m = e => {
                                                    let n = {
                                                        intersection: a,
                                                        target: t.target
                                                    };
                                                    d.capturedMap.has(e) ? d.capturedMap.get(e).set(a.eventObject, n) : d.capturedMap.set(e, new Map([
                                                        [a.eventObject, n]
                                                    ])), t.target.setPointerCapture(e)
                                                }, v = e => {
                                                    let t = d.capturedMap.get(e);
                                                    t && eo(d.capturedMap, a.eventObject, t, e)
                                                }, b = {};
                                                for (let e in t) {
                                                    let n = t[e];
                                                    "function" != typeof n && (b[e] = n)
                                                }
                                                let g = {
                                                    ...a,
                                                    ...b,
                                                    pointer: u,
                                                    intersections: e,
                                                    stopped: i.stopped,
                                                    delta: r,
                                                    unprojectedPoint: f,
                                                    ray: c.ray,
                                                    camera: p,
                                                    stopPropagation() {
                                                        let r = "pointerId" in t && d.capturedMap.get(t.pointerId);
                                                        (!r || r.has(a.eventObject)) && (g.stopped = i.stopped = !0, d.hovered.size && Array.from(d.hovered.values()).find(e => e.eventObject === a.eventObject) && n([...e.slice(0, e.indexOf(a)), a]))
                                                    },
                                                    target: {
                                                        hasPointerCapture: h,
                                                        setPointerCapture: m,
                                                        releasePointerCapture: v
                                                    },
                                                    currentTarget: {
                                                        hasPointerCapture: h,
                                                        setPointerCapture: m,
                                                        releasePointerCapture: v
                                                    },
                                                    nativeEvent: t
                                                };
                                                if (o(g), !0 === i.stopped) break
                                            }
                                        }
                                    }
                                }(p, i, d, function(e) {
                                    let t = e.eventObject,
                                        n = t.__r3f;
                                    if (!(null != n && n.eventCount)) return;
                                    let a = n.handlers;
                                    if (c) {
                                        if (a.onPointerOver || a.onPointerEnter || a.onPointerOut || a.onPointerLeave) {
                                            let t = er(e),
                                                n = l.hovered.get(t);
                                            n ? n.stopped && e.stopPropagation() : (l.hovered.set(t, e), null == a.onPointerOver || a.onPointerOver(e), null == a.onPointerEnter || a.onPointerEnter(e))
                                        }
                                        null == a.onPointerMove || a.onPointerMove(e)
                                    } else {
                                        let n = a[o];
                                        n ? (!u || l.initialHits.includes(t)) && (r(i, l.interaction.filter(e => !l.initialHits.includes(e))), n(e)) : u && l.initialHits.includes(t) && r(i, l.interaction.filter(e => !l.initialHits.includes(e)))
                                    }
                                })
                            }
                        }
                    }
                }(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, n) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(2 * (e.offsetY / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(eK).reduce((e, n) => ({
                        ...e,
                        [n]: t(n)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: n,
                            internal: r
                        } = e.getState();
                        null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
                    },
                    connect: t => {
                        let {
                            set: n,
                            events: r
                        } = e.getState();
                        if (null == r.disconnect || r.disconnect(), n(e => ({
                                events: {
                                    ...e.events,
                                    connected: t
                                }
                            })), r.handlers)
                            for (let e in r.handlers) {
                                let n = r.handlers[e],
                                    [o, i] = eK[e];
                                t.addEventListener(o, n, {
                                    passive: i
                                })
                            }
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: n
                        } = e.getState();
                        if (n.connected) {
                            if (n.handlers)
                                for (let e in n.handlers) {
                                    let t = n.handlers[e],
                                        [r] = eK[e];
                                    n.connected.removeEventListener(r, t)
                                }
                            t(e => ({
                                events: {
                                    ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
        },
        41047: (e, t, n) => {
            var r = n(43195),
                o = n(42869),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = o.useSyncExternalStore,
                l = r.useRef,
                s = r.useEffect,
                c = r.useMemo,
                u = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
                var p = l(null);
                if (null === p.current) {
                    var d = {
                        hasValue: !1,
                        value: null
                    };
                    p.current = d
                } else d = p.current;
                var f = a(e, (p = c(function() {
                    function e(e) {
                        if (!s) {
                            if (s = !0, a = e, e = r(e), void 0 !== o && d.hasValue) {
                                var t = d.value;
                                if (o(t, e)) return l = t
                            }
                            return l = e
                        }
                        if (t = l, i(a, e)) return t;
                        var n = r(e);
                        return void 0 !== o && o(t, n) ? (a = e, t) : (a = e, l = n)
                    }
                    var a, l, s = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, n, r, o]))[0], p[1]);
                return s(function() {
                    d.hasValue = !0, d.value = f
                }, [f]), u(f), f
            }
        },
        42869: (e, t, n) => {
            e.exports = n(81408)
        },
        58541: (e, t, n) => {
            e.exports = n(33286)
        },
        67631: (e, t, n) => {
            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            n.d(t, {
                N: () => y
            });
            var o = n(33587),
                i = n(43195),
                a = n(89103),
                l = Object.defineProperty,
                s = (e, t, n) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                c = (e, t, n) => (s(e, "symbol" != typeof t ? t + "" : t, n), n);
            class u {
                constructor() {
                    c(this, "_listeners")
                }
                addEventListener(e, t) {
                    void 0 === this._listeners && (this._listeners = {});
                    let n = this._listeners;
                    void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
                }
                hasEventListener(e, t) {
                    if (void 0 === this._listeners) return !1;
                    let n = this._listeners;
                    return void 0 !== n[e] && -1 !== n[e].indexOf(t)
                }
                removeEventListener(e, t) {
                    if (void 0 === this._listeners) return;
                    let n = this._listeners[e];
                    if (void 0 !== n) {
                        let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                    }
                }
                dispatchEvent(e) {
                    if (void 0 === this._listeners) return;
                    let t = this._listeners[e.type];
                    if (void 0 !== t) {
                        e.target = this;
                        let n = t.slice(0);
                        for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
                        e.target = null
                    }
                }
            }
            var p = Object.defineProperty,
                d = (e, t, n) => t in e ? p(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                f = (e, t, n) => (d(e, "symbol" != typeof t ? t + "" : t, n), n);
            let h = new a.Ray,
                m = new a.Plane,
                v = Math.cos(Math.PI / 180 * 70),
                b = (e, t) => (e % t + t) % t;
            class g extends u {
                constructor(e, t) {
                    super(), f(this, "object"), f(this, "domElement"), f(this, "enabled", !0), f(this, "target", new a.Vector3), f(this, "minDistance", 0), f(this, "maxDistance", 1 / 0), f(this, "minZoom", 0), f(this, "maxZoom", 1 / 0), f(this, "minPolarAngle", 0), f(this, "maxPolarAngle", Math.PI), f(this, "minAzimuthAngle", -1 / 0), f(this, "maxAzimuthAngle", 1 / 0), f(this, "enableDamping", !1), f(this, "dampingFactor", .05), f(this, "enableZoom", !0), f(this, "zoomSpeed", 1), f(this, "enableRotate", !0), f(this, "rotateSpeed", 1), f(this, "enablePan", !0), f(this, "panSpeed", 1), f(this, "screenSpacePanning", !0), f(this, "keyPanSpeed", 7), f(this, "zoomToCursor", !1), f(this, "autoRotate", !1), f(this, "autoRotateSpeed", 2), f(this, "reverseOrbit", !1), f(this, "reverseHorizontalOrbit", !1), f(this, "reverseVerticalOrbit", !1), f(this, "keys", {
                        LEFT: "ArrowLeft",
                        UP: "ArrowUp",
                        RIGHT: "ArrowRight",
                        BOTTOM: "ArrowDown"
                    }), f(this, "mouseButtons", {
                        LEFT: a.MOUSE.ROTATE,
                        MIDDLE: a.MOUSE.DOLLY,
                        RIGHT: a.MOUSE.PAN
                    }), f(this, "touches", {
                        ONE: a.TOUCH.ROTATE,
                        TWO: a.TOUCH.DOLLY_PAN
                    }), f(this, "target0"), f(this, "position0"), f(this, "zoom0"), f(this, "_domElementKeyEvents", null), f(this, "getPolarAngle"), f(this, "getAzimuthalAngle"), f(this, "setPolarAngle"), f(this, "setAzimuthalAngle"), f(this, "getDistance"), f(this, "getZoomScale"), f(this, "listenToKeyEvents"), f(this, "stopListenToKeyEvents"), f(this, "saveState"), f(this, "reset"), f(this, "update"), f(this, "connect"), f(this, "dispose"), f(this, "dollyIn"), f(this, "dollyOut"), f(this, "getScale"), f(this, "setScale"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => u.phi, this.getAzimuthalAngle = () => u.theta, this.setPolarAngle = e => {
                        let t = b(e, 2 * Math.PI),
                            r = u.phi;
                        r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let o = Math.abs(t - r);
                        2 * Math.PI - o < o && (t < r ? t += 2 * Math.PI : r += 2 * Math.PI), p.phi = t - r, n.update()
                    }, this.setAzimuthalAngle = e => {
                        let t = b(e, 2 * Math.PI),
                            r = u.theta;
                        r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let o = Math.abs(t - r);
                        2 * Math.PI - o < o && (t < r ? t += 2 * Math.PI : r += 2 * Math.PI), p.theta = t - r, n.update()
                    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = e => {
                        e.addEventListener("keydown", ee), this._domElementKeyEvents = e
                    }, this.stopListenToKeyEvents = () => {
                        this._domElementKeyEvents.removeEventListener("keydown", ee), this._domElementKeyEvents = null
                    }, this.saveState = () => {
                        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
                    }, this.reset = () => {
                        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(r), n.update(), s = l.NONE
                    }, this.update = (() => {
                        let t = new a.Vector3,
                            o = new a.Vector3(0, 1, 0),
                            i = new a.Quaternion().setFromUnitVectors(e.up, o),
                            f = i.clone().invert(),
                            b = new a.Vector3,
                            y = new a.Quaternion,
                            w = 2 * Math.PI;
                        return function() {
                            let j = n.object.position;
                            i.setFromUnitVectors(e.up, o), f.copy(i).invert(), t.copy(j).sub(n.target), t.applyQuaternion(i), u.setFromVector3(t), n.autoRotate && s === l.NONE && I(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (u.theta += p.theta * n.dampingFactor, u.phi += p.phi * n.dampingFactor) : (u.theta += p.theta, u.phi += p.phi);
                            let E = n.minAzimuthAngle,
                                P = n.maxAzimuthAngle;
                            isFinite(E) && isFinite(P) && (E < -Math.PI ? E += w : E > Math.PI && (E -= w), P < -Math.PI ? P += w : P > Math.PI && (P -= w), E <= P ? u.theta = Math.max(E, Math.min(P, u.theta)) : u.theta = u.theta > (E + P) / 2 ? Math.max(E, u.theta) : Math.min(P, u.theta)), u.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, u.phi)), u.makeSafe(), !0 === n.enableDamping ? n.target.addScaledVector(g, n.dampingFactor) : n.target.add(g), n.zoomToCursor && A || n.object.isOrthographicCamera ? u.radius = V(u.radius) : u.radius = V(u.radius * d), t.setFromSpherical(u), t.applyQuaternion(f), j.copy(n.target).add(t), n.object.matrixAutoUpdate || n.object.updateMatrix(), n.object.lookAt(n.target), !0 === n.enableDamping ? (p.theta *= 1 - n.dampingFactor, p.phi *= 1 - n.dampingFactor, g.multiplyScalar(1 - n.dampingFactor)) : (p.set(0, 0, 0), g.set(0, 0, 0));
                            let C = !1;
                            if (n.zoomToCursor && A) {
                                let r = null;
                                if (n.object instanceof a.PerspectiveCamera && n.object.isPerspectiveCamera) {
                                    let e = t.length();
                                    r = V(e * d);
                                    let o = e - r;
                                    n.object.position.addScaledVector(x, o), n.object.updateMatrixWorld()
                                } else if (n.object.isOrthographicCamera) {
                                    let e = new a.Vector3(T.x, T.y, 0);
                                    e.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / d)), n.object.updateProjectionMatrix(), C = !0;
                                    let o = new a.Vector3(T.x, T.y, 0);
                                    o.unproject(n.object), n.object.position.sub(o).add(e), n.object.updateMatrixWorld(), r = t.length()
                                } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
                                null !== r && (n.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position) : (h.origin.copy(n.object.position), h.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(h.direction)) < v ? e.lookAt(n.target) : (m.setFromNormalAndCoplanarPoint(n.object.up, n.target), h.intersectPlane(m, n.target))))
                            } else n.object instanceof a.OrthographicCamera && n.object.isOrthographicCamera && (C = 1 !== d) && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / d)), n.object.updateProjectionMatrix());
                            return d = 1, A = !1, !!(C || b.distanceToSquared(n.object.position) > c || 8 * (1 - y.dot(n.object.quaternion)) > c) && (n.dispatchEvent(r), b.copy(n.object.position), y.copy(n.object.quaternion), C = !1, !0)
                        }
                    })(), this.connect = e => {
                        n.domElement = e, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", et), n.domElement.addEventListener("pointerdown", G), n.domElement.addEventListener("pointercancel", Q), n.domElement.addEventListener("wheel", J)
                    }, this.dispose = () => {
                        var e, t, r, o, i, a;
                        n.domElement && (n.domElement.style.touchAction = "auto"), null == (e = n.domElement) || e.removeEventListener("contextmenu", et), null == (t = n.domElement) || t.removeEventListener("pointerdown", G), null == (r = n.domElement) || r.removeEventListener("pointercancel", Q), null == (o = n.domElement) || o.removeEventListener("wheel", J), null == (i = n.domElement) || i.ownerDocument.removeEventListener("pointermove", $), null == (a = n.domElement) || a.ownerDocument.removeEventListener("pointerup", Q), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", ee)
                    };
                    let n = this,
                        r = {
                            type: "change"
                        },
                        o = {
                            type: "start"
                        },
                        i = {
                            type: "end"
                        },
                        l = {
                            NONE: -1,
                            ROTATE: 0,
                            DOLLY: 1,
                            PAN: 2,
                            TOUCH_ROTATE: 3,
                            TOUCH_PAN: 4,
                            TOUCH_DOLLY_PAN: 5,
                            TOUCH_DOLLY_ROTATE: 6
                        },
                        s = l.NONE,
                        c = 1e-6,
                        u = new a.Spherical,
                        p = new a.Spherical,
                        d = 1,
                        g = new a.Vector3,
                        y = new a.Vector2,
                        w = new a.Vector2,
                        j = new a.Vector2,
                        E = new a.Vector2,
                        P = new a.Vector2,
                        C = new a.Vector2,
                        O = new a.Vector2,
                        S = new a.Vector2,
                        M = new a.Vector2,
                        x = new a.Vector3,
                        T = new a.Vector2,
                        A = !1,
                        _ = [],
                        k = {};

                    function L() {
                        return Math.pow(.95, n.zoomSpeed)
                    }

                    function I(e) {
                        n.reverseOrbit || n.reverseHorizontalOrbit ? p.theta += e : p.theta -= e
                    }

                    function R(e) {
                        n.reverseOrbit || n.reverseVerticalOrbit ? p.phi += e : p.phi -= e
                    }
                    let z = (() => {
                            let e = new a.Vector3;
                            return function(t, n) {
                                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), g.add(e)
                            }
                        })(),
                        D = (() => {
                            let e = new a.Vector3;
                            return function(t, r) {
                                !0 === n.screenSpacePanning ? e.setFromMatrixColumn(r, 1) : (e.setFromMatrixColumn(r, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), g.add(e)
                            }
                        })(),
                        N = (() => {
                            let e = new a.Vector3;
                            return function(t, r) {
                                let o = n.domElement;
                                if (o && n.object instanceof a.PerspectiveCamera && n.object.isPerspectiveCamera) {
                                    let i = n.object.position;
                                    e.copy(i).sub(n.target);
                                    let a = e.length();
                                    z(2 * t * (a *= Math.tan(n.object.fov / 2 * Math.PI / 180)) / o.clientHeight, n.object.matrix), D(2 * r * a / o.clientHeight, n.object.matrix)
                                } else o && n.object instanceof a.OrthographicCamera && n.object.isOrthographicCamera ? (z(t * (n.object.right - n.object.left) / n.object.zoom / o.clientWidth, n.object.matrix), D(r * (n.object.top - n.object.bottom) / n.object.zoom / o.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
                            }
                        })();

                    function H(e) {
                        n.object instanceof a.PerspectiveCamera && n.object.isPerspectiveCamera || n.object instanceof a.OrthographicCamera && n.object.isOrthographicCamera ? d = e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
                    }

                    function F(e) {
                        if (!n.zoomToCursor || !n.domElement) return;
                        A = !0;
                        let t = n.domElement.getBoundingClientRect(),
                            r = e.clientX - t.left,
                            o = e.clientY - t.top,
                            i = t.width,
                            a = t.height;
                        T.x = r / i * 2 - 1, T.y = -(o / a * 2) + 1, x.set(T.x, T.y, 1).unproject(n.object).sub(n.object.position).normalize()
                    }

                    function V(e) {
                        return Math.max(n.minDistance, Math.min(n.maxDistance, e))
                    }

                    function U(e) {
                        y.set(e.clientX, e.clientY)
                    }

                    function Y(e) {
                        E.set(e.clientX, e.clientY)
                    }

                    function q() {
                        if (1 == _.length) y.set(_[0].pageX, _[0].pageY);
                        else {
                            let e = .5 * (_[0].pageX + _[1].pageX),
                                t = .5 * (_[0].pageY + _[1].pageY);
                            y.set(e, t)
                        }
                    }

                    function B() {
                        if (1 == _.length) E.set(_[0].pageX, _[0].pageY);
                        else {
                            let e = .5 * (_[0].pageX + _[1].pageX),
                                t = .5 * (_[0].pageY + _[1].pageY);
                            E.set(e, t)
                        }
                    }

                    function X() {
                        let e = _[0].pageX - _[1].pageX,
                            t = _[0].pageY - _[1].pageY,
                            n = Math.sqrt(e * e + t * t);
                        O.set(0, n)
                    }

                    function Z(e) {
                        if (1 == _.length) w.set(e.pageX, e.pageY);
                        else {
                            let t = er(e),
                                n = .5 * (e.pageX + t.x),
                                r = .5 * (e.pageY + t.y);
                            w.set(n, r)
                        }
                        j.subVectors(w, y).multiplyScalar(n.rotateSpeed);
                        let t = n.domElement;
                        t && (I(2 * Math.PI * j.x / t.clientHeight), R(2 * Math.PI * j.y / t.clientHeight)), y.copy(w)
                    }

                    function W(e) {
                        if (1 == _.length) P.set(e.pageX, e.pageY);
                        else {
                            let t = er(e),
                                n = .5 * (e.pageX + t.x),
                                r = .5 * (e.pageY + t.y);
                            P.set(n, r)
                        }
                        C.subVectors(P, E).multiplyScalar(n.panSpeed), N(C.x, C.y), E.copy(P)
                    }

                    function K(e) {
                        var t;
                        let r = er(e),
                            o = e.pageX - r.x,
                            i = e.pageY - r.y,
                            a = Math.sqrt(o * o + i * i);
                        S.set(0, a), M.set(0, Math.pow(S.y / O.y, n.zoomSpeed)), t = M.y, H(d / t), O.copy(S)
                    }

                    function G(e) {
                        var t, r, i;
                        !1 !== n.enabled && (0 === _.length && (null == (t = n.domElement) || t.ownerDocument.addEventListener("pointermove", $), null == (r = n.domElement) || r.ownerDocument.addEventListener("pointerup", Q)), i = e, _.push(i), "touch" === e.pointerType ? function(e) {
                            switch (en(e), _.length) {
                                case 1:
                                    switch (n.touches.ONE) {
                                        case a.TOUCH.ROTATE:
                                            if (!1 === n.enableRotate) return;
                                            q(), s = l.TOUCH_ROTATE;
                                            break;
                                        case a.TOUCH.PAN:
                                            if (!1 === n.enablePan) return;
                                            B(), s = l.TOUCH_PAN;
                                            break;
                                        default:
                                            s = l.NONE
                                    }
                                    break;
                                case 2:
                                    switch (n.touches.TWO) {
                                        case a.TOUCH.DOLLY_PAN:
                                            if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                            n.enableZoom && X(), n.enablePan && B(), s = l.TOUCH_DOLLY_PAN;
                                            break;
                                        case a.TOUCH.DOLLY_ROTATE:
                                            if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                            n.enableZoom && X(), n.enableRotate && q(), s = l.TOUCH_DOLLY_ROTATE;
                                            break;
                                        default:
                                            s = l.NONE
                                    }
                                    break;
                                default:
                                    s = l.NONE
                            }
                            s !== l.NONE && n.dispatchEvent(o)
                        }(e) : function(e) {
                            let t;
                            switch (e.button) {
                                case 0:
                                    t = n.mouseButtons.LEFT;
                                    break;
                                case 1:
                                    t = n.mouseButtons.MIDDLE;
                                    break;
                                case 2:
                                    t = n.mouseButtons.RIGHT;
                                    break;
                                default:
                                    t = -1
                            }
                            switch (t) {
                                case a.MOUSE.DOLLY:
                                    if (!1 === n.enableZoom) return;
                                    F(e), O.set(e.clientX, e.clientY), s = l.DOLLY;
                                    break;
                                case a.MOUSE.ROTATE:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enablePan) return;
                                        Y(e), s = l.PAN
                                    } else {
                                        if (!1 === n.enableRotate) return;
                                        U(e), s = l.ROTATE
                                    }
                                    break;
                                case a.MOUSE.PAN:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enableRotate) return;
                                        U(e), s = l.ROTATE
                                    } else {
                                        if (!1 === n.enablePan) return;
                                        Y(e), s = l.PAN
                                    }
                                    break;
                                default:
                                    s = l.NONE
                            }
                            s !== l.NONE && n.dispatchEvent(o)
                        }(e))
                    }

                    function $(e) {
                        !1 !== n.enabled && ("touch" === e.pointerType ? function(e) {
                            switch (en(e), s) {
                                case l.TOUCH_ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    Z(e), n.update();
                                    break;
                                case l.TOUCH_PAN:
                                    if (!1 === n.enablePan) return;
                                    W(e), n.update();
                                    break;
                                case l.TOUCH_DOLLY_PAN:
                                    if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                    n.enableZoom && K(e), n.enablePan && W(e), n.update();
                                    break;
                                case l.TOUCH_DOLLY_ROTATE:
                                    if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                    n.enableZoom && K(e), n.enableRotate && Z(e), n.update();
                                    break;
                                default:
                                    s = l.NONE
                            }
                        }(e) : function(e) {
                            if (!1 !== n.enabled) switch (s) {
                                case l.ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    w.set(e.clientX, e.clientY), j.subVectors(w, y).multiplyScalar(n.rotateSpeed);
                                    let t = n.domElement;
                                    t && (I(2 * Math.PI * j.x / t.clientHeight), R(2 * Math.PI * j.y / t.clientHeight)), y.copy(w), n.update();
                                    break;
                                case l.DOLLY:
                                    var r, o;
                                    if (!1 === n.enableZoom) return;
                                    (S.set(e.clientX, e.clientY), M.subVectors(S, O), M.y > 0) ? (r = L(), H(d / r)) : M.y < 0 && (o = L(), H(d * o)), O.copy(S), n.update();
                                    break;
                                case l.PAN:
                                    if (!1 === n.enablePan) return;
                                    P.set(e.clientX, e.clientY), C.subVectors(P, E).multiplyScalar(n.panSpeed), N(C.x, C.y), E.copy(P), n.update()
                            }
                        }(e))
                    }

                    function Q(e) {
                        var t, r, o;
                        (function(e) {
                            delete k[e.pointerId];
                            for (let t = 0; t < _.length; t++)
                                if (_[t].pointerId == e.pointerId) return void _.splice(t, 1)
                        })(e), 0 === _.length && (null == (t = n.domElement) || t.releasePointerCapture(e.pointerId), null == (r = n.domElement) || r.ownerDocument.removeEventListener("pointermove", $), null == (o = n.domElement) || o.ownerDocument.removeEventListener("pointerup", Q)), n.dispatchEvent(i), s = l.NONE
                    }

                    function J(e) {
                        if (!1 !== n.enabled && !1 !== n.enableZoom && (s === l.NONE || s === l.ROTATE)) {
                            var t, r;
                            e.preventDefault(), n.dispatchEvent(o), (F(e), e.deltaY < 0) ? (t = L(), H(d * t)) : e.deltaY > 0 && (r = L(), H(d / r)), n.update(), n.dispatchEvent(i)
                        }
                    }

                    function ee(e) {
                        if (!1 !== n.enabled && !1 !== n.enablePan) {
                            let t = !1;
                            switch (e.code) {
                                case n.keys.UP:
                                    N(0, n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.BOTTOM:
                                    N(0, -n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.LEFT:
                                    N(n.keyPanSpeed, 0), t = !0;
                                    break;
                                case n.keys.RIGHT:
                                    N(-n.keyPanSpeed, 0), t = !0
                            }
                            t && (e.preventDefault(), n.update())
                        }
                    }

                    function et(e) {
                        !1 !== n.enabled && e.preventDefault()
                    }

                    function en(e) {
                        let t = k[e.pointerId];
                        void 0 === t && (t = new a.Vector2, k[e.pointerId] = t), t.set(e.pageX, e.pageY)
                    }

                    function er(e) {
                        return k[(e.pointerId === _[0].pointerId ? _[1] : _[0]).pointerId]
                    }
                    this.dollyIn = (e = L()) => {
                        H(d * e), n.update()
                    }, this.dollyOut = (e = L()) => {
                        H(d / e), n.update()
                    }, this.getScale = () => d, this.setScale = e => {
                        H(e), n.update()
                    }, this.getZoomScale = () => L(), void 0 !== t && this.connect(t), this.update()
                }
            }
            let y = i.forwardRef(({
                makeDefault: e,
                camera: t,
                regress: n,
                domElement: a,
                enableDamping: l = !0,
                keyEvents: s = !1,
                onChange: c,
                onStart: u,
                onEnd: p,
                ...d
            }, f) => {
                let h = (0, o.A)(e => e.invalidate),
                    m = (0, o.A)(e => e.camera),
                    v = (0, o.A)(e => e.gl),
                    b = (0, o.A)(e => e.events),
                    y = (0, o.A)(e => e.setEvents),
                    w = (0, o.A)(e => e.set),
                    j = (0, o.A)(e => e.get),
                    E = (0, o.A)(e => e.performance),
                    P = t || m,
                    C = a || b.connected || v.domElement,
                    O = i.useMemo(() => new g(P), [P]);
                return (0, o.C)(() => {
                    O.enabled && O.update()
                }, -1), i.useEffect(() => (s && O.connect(!0 === s ? C : s), O.connect(C), () => void O.dispose()), [s, C, n, O, h]), i.useEffect(() => {
                    let e = e => {
                            h(), n && E.regress(), c && c(e)
                        },
                        t = e => {
                            u && u(e)
                        },
                        r = e => {
                            p && p(e)
                        };
                    return O.addEventListener("change", e), O.addEventListener("start", t), O.addEventListener("end", r), () => {
                        O.removeEventListener("start", t), O.removeEventListener("end", r), O.removeEventListener("change", e)
                    }
                }, [c, u, p, O, h, y]), i.useEffect(() => {
                    if (e) {
                        let e = j().controls;
                        return w({
                            controls: O
                        }), () => w({
                            controls: e
                        })
                    }
                }, [e, O]), i.createElement("primitive", r({
                    ref: f,
                    object: O,
                    enableDamping: l
                }, d))
            })
        },
        70731: (e, t, n) => {
            var r = n(68051);
            n.o(r, "useParams") && n.d(t, {
                useParams: function() {
                    return r.useParams
                }
            }), n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), n.o(r, "useSearchParams") && n.d(t, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            })
        },
        72279: (e, t, n) => {
            n.d(t, {
                Hl: () => d
            });
            var r = n(33587),
                o = n(43195),
                i = n(89103);

            function a(e, t) {
                let n;
                return (...r) => {
                    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t)
                }
            }
            let l = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                s = (e, t) => l.every(n => e[n] === t[n]);
            var c = n(98607),
                u = n(50987);

            function p({
                ref: e,
                children: t,
                fallback: n,
                resize: l,
                style: c,
                gl: p,
                events: d = r.f,
                eventSource: f,
                eventPrefix: h,
                shadows: m,
                linear: v,
                flat: b,
                legacy: g,
                orthographic: y,
                frameloop: w,
                dpr: j,
                performance: E,
                raycaster: P,
                camera: C,
                scene: O,
                onPointerMissed: S,
                onCreated: M,
                ...x
            }) {
                o.useMemo(() => (0, r.e)(i), []);
                let T = (0, r.u)(),
                    [A, _] = function({
                        debounce: e,
                        scroll: t,
                        polyfill: n,
                        offsetSize: r
                    } = {
                        debounce: 0,
                        scroll: !1,
                        offsetSize: !1
                    }) {
                        var i, l, c;
                        let u = n || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                        if (!u) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                        let [p, d] = (0, o.useState)({
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0,
                            bottom: 0,
                            right: 0,
                            x: 0,
                            y: 0
                        }), f = (0, o.useRef)({
                            element: null,
                            scrollContainers: null,
                            resizeObserver: null,
                            lastBounds: p,
                            orientationHandler: null
                        }), h = e ? "number" == typeof e ? e : e.scroll : null, m = e ? "number" == typeof e ? e : e.resize : null, v = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => (v.current = !0, () => void(v.current = !1)));
                        let [b, g, y] = (0, o.useMemo)(() => {
                            let e = () => {
                                if (!f.current.element) return;
                                let {
                                    left: e,
                                    top: t,
                                    width: n,
                                    height: o,
                                    bottom: i,
                                    right: a,
                                    x: l,
                                    y: c
                                } = f.current.element.getBoundingClientRect(), u = {
                                    left: e,
                                    top: t,
                                    width: n,
                                    height: o,
                                    bottom: i,
                                    right: a,
                                    x: l,
                                    y: c
                                };
                                f.current.element instanceof HTMLElement && r && (u.height = f.current.element.offsetHeight, u.width = f.current.element.offsetWidth), Object.freeze(u), v.current && !s(f.current.lastBounds, u) && d(f.current.lastBounds = u)
                            };
                            return [e, m ? a(e, m) : e, h ? a(e, h) : e]
                        }, [d, r, h, m]);

                        function w() {
                            f.current.scrollContainers && (f.current.scrollContainers.forEach(e => e.removeEventListener("scroll", y, !0)), f.current.scrollContainers = null), f.current.resizeObserver && (f.current.resizeObserver.disconnect(), f.current.resizeObserver = null), f.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", f.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", f.current.orientationHandler))
                        }

                        function j() {
                            f.current.element && (f.current.resizeObserver = new u(y), f.current.resizeObserver.observe(f.current.element), t && f.current.scrollContainers && f.current.scrollContainers.forEach(e => e.addEventListener("scroll", y, {
                                capture: !0,
                                passive: !0
                            })), f.current.orientationHandler = () => {
                                y()
                            }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", f.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", f.current.orientationHandler))
                        }
                        return i = y, l = !!t, (0, o.useEffect)(() => {
                            if (l) return window.addEventListener("scroll", i, {
                                capture: !0,
                                passive: !0
                            }), () => void window.removeEventListener("scroll", i, !0)
                        }, [i, l]), c = g, (0, o.useEffect)(() => (window.addEventListener("resize", c), () => void window.removeEventListener("resize", c)), [c]), (0, o.useEffect)(() => {
                            w(), j()
                        }, [t, y, g]), (0, o.useEffect)(() => w, []), [e => {
                            e && e !== f.current.element && (w(), f.current.element = e, f.current.scrollContainers = function e(t) {
                                let n = [];
                                if (!t || t === document.body) return n;
                                let {
                                    overflow: r,
                                    overflowX: o,
                                    overflowY: i
                                } = window.getComputedStyle(t);
                                return [r, o, i].some(e => "auto" === e || "scroll" === e) && n.push(t), [...n, ...e(t.parentElement)]
                            }(e), j())
                        }, p, b]
                    }({
                        scroll: !0,
                        debounce: {
                            scroll: 50,
                            resize: 0
                        },
                        ...l
                    }),
                    k = o.useRef(null),
                    L = o.useRef(null);
                o.useImperativeHandle(e, () => k.current);
                let I = (0, r.a)(S),
                    [R, z] = o.useState(!1),
                    [D, N] = o.useState(!1);
                if (R) throw R;
                if (D) throw D;
                let H = o.useRef(null);
                (0, r.b)(() => {
                    let e = k.current;
                    _.width > 0 && _.height > 0 && e && (H.current || (H.current = (0, r.c)(e)), async function() {
                        await H.current.configure({
                            gl: p,
                            scene: O,
                            events: d,
                            shadows: m,
                            linear: v,
                            flat: b,
                            legacy: g,
                            orthographic: y,
                            frameloop: w,
                            dpr: j,
                            performance: E,
                            raycaster: P,
                            camera: C,
                            size: _,
                            onPointerMissed: (...e) => null == I.current ? void 0 : I.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(f ? (0, r.i)(f) ? f.current : f : L.current), h && e.setEvents({
                                    compute: (e, t) => {
                                        let n = e[h + "X"],
                                            r = e[h + "Y"];
                                        t.pointer.set(n / t.size.width * 2 - 1, -(2 * (r / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == M || M(e)
                            }
                        }), H.current.render((0, u.jsx)(T, {
                            children: (0, u.jsx)(r.E, {
                                set: N,
                                children: (0, u.jsx)(o.Suspense, {
                                    fallback: (0, u.jsx)(r.B, {
                                        set: z
                                    }),
                                    children: null != t ? t : null
                                })
                            })
                        }))
                    }())
                }), o.useEffect(() => {
                    let e = k.current;
                    if (e) return () => (0, r.d)(e)
                }, []);
                let F = f ? "none" : "auto";
                return (0, u.jsx)("div", {
                    ref: L,
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: F,
                        ...c
                    },
                    ...x,
                    children: (0, u.jsx)("div", {
                        ref: A,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: (0, u.jsx)("canvas", {
                            ref: k,
                            style: {
                                display: "block"
                            },
                            children: n
                        })
                    })
                })
            }

            function d(e) {
                return (0, u.jsx)(c.Af, {
                    children: (0, u.jsx)(p, {
                        ...e
                    })
                })
            }
            n(99828), n(90033), n(58541)
        },
        81408: (e, t, n) => {
            var r = n(43195),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = r.useState,
                a = r.useEffect,
                l = r.useLayoutEffect,
                s = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }
            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    u = r[1];
                return l(function() {
                    o.value = n, o.getSnapshot = t, c(o) && u({
                        inst: o
                    })
                }, [e, n, t]), a(function() {
                    return c(o) && u({
                        inst: o
                    }), e(function() {
                        c(o) && u({
                            inst: o
                        })
                    })
                }, [e]), s(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
        },
        90033: (e, t, n) => {
            e.exports = n(23365)
        },
        91362: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(50987),
                o = n(43195);

            function i({
                id: e,
                host: t,
                repo: i,
                repoId: a,
                category: l,
                categoryId: s,
                mapping: c,
                term: u,
                strict: p,
                reactionsEnabled: d,
                emitMetadata: f,
                inputPosition: h,
                theme: m,
                lang: v,
                loading: b
            }) {
                let [g, y] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    g || n.e(7825).then(n.bind(n, 27825)).then(() => y(!0))
                }, []), g ? (0, r.jsx)("giscus-widget", {
                    id: e,
                    host: t,
                    repo: i,
                    repoid: a,
                    category: l,
                    categoryid: s,
                    mapping: c,
                    term: u,
                    strict: p,
                    reactionsenabled: d,
                    emitmetadata: f,
                    inputposition: h,
                    theme: m,
                    lang: v,
                    loading: b
                }) : null
            }
        },
        95741: (e, t) => {
            t.ConcurrentRoot = 1, t.ContinuousEventPriority = 8, t.DefaultEventPriority = 32, t.DiscreteEventPriority = 2
        },
        98607: (e, t, n) => {
            n.d(t, {
                Af: () => l,
                Nz: () => o,
                u5: () => s,
                y3: () => p
            });
            var r = n(43195);

            function o(e, t, n) {
                if (!e) return;
                if (!0 === n(e)) return e;
                let r = t ? e.return : e.child;
                for (; r;) {
                    let e = o(r, t, n);
                    if (e) return e;
                    r = t ? null : r.sibling
                }
            }

            function i(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }(() => {
                var e, t;
                return "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || (null == (t = window.navigator) ? void 0 : t.product) === "ReactNative")
            })() ? r.useLayoutEffect: r.useEffect;
            let a = i(r.createContext(null));
            class l extends r.Component {
                render() {
                    return r.createElement(a.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }

            function s() {
                let e = r.useContext(a);
                if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                let t = r.useId();
                return r.useMemo(() => {
                    for (let n of [e, null == e ? void 0 : e.alternate]) {
                        if (!n) continue;
                        let e = o(n, !1, e => {
                            let n = e.memoizedState;
                            for (; n;) {
                                if (n.memoizedState === t) return !0;
                                n = n.next
                            }
                        });
                        if (e) return e
                    }
                }, [e, t])
            }
            let c = Symbol.for("react.context"),
                u = e => null !== e && "object" == typeof e && "$$typeof" in e && e.$$typeof === c;

            function p() {
                let e = function() {
                    let e = s(),
                        [t] = r.useState(() => new Map);
                    t.clear();
                    let n = e;
                    for (; n;) {
                        let e = n.type;
                        u(e) && e !== a && !t.has(e) && t.set(e, r.use(i(e))), n = n.return
                    }
                    return t
                }();
                return r.useMemo(() => Array.from(e.keys()).reduce((t, n) => o => r.createElement(t, null, r.createElement(n.Provider, {
                    ...o,
                    value: e.get(n)
                })), e => r.createElement(l, {
                    ...e
                })), [e])
            }
        },
        99828: (e, t, n) => {
            e.exports = n(95741)
        }
    }
]);