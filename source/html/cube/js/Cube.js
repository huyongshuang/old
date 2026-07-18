(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [597], {
        10485: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => b
            });
            var o = a(50987),
                n = a(72279),
                r = a(67631),
                s = a(43195),
                i = a(89103),
                l = a(33587);
            let c = {
                    up: "#FFFFFF",
                    front: "#FF0000",
                    right: "#0000FF",
                    back: "#FFA500",
                    left: "#00FF00",
                    down: "#FFFF00"
                },
                u = {
                    x: {
                        clockwise: {
                            1: {
                                axis: "x",
                                layer: 1,
                                angle: -Math.PI / 2
                            },
                            0: {
                                axis: "x",
                                layer: 0,
                                angle: -Math.PI / 2
                            },
                            "-1": {
                                axis: "x",
                                layer: -1,
                                angle: -Math.PI / 2
                            }
                        },
                        counterclockwise: {
                            1: {
                                axis: "x",
                                layer: 1,
                                angle: Math.PI / 2
                            },
                            0: {
                                axis: "x",
                                layer: 0,
                                angle: Math.PI / 2
                            },
                            "-1": {
                                axis: "x",
                                layer: -1,
                                angle: Math.PI / 2
                            }
                        }
                    },
                    y: {
                        clockwise: {
                            1: {
                                axis: "y",
                                layer: 1,
                                angle: Math.PI / 2
                            },
                            0: {
                                axis: "y",
                                layer: 0,
                                angle: Math.PI / 2
                            },
                            "-1": {
                                axis: "y",
                                layer: -1,
                                angle: Math.PI / 2
                            }
                        },
                        counterclockwise: {
                            1: {
                                axis: "y",
                                layer: 1,
                                angle: -Math.PI / 2
                            },
                            0: {
                                axis: "y",
                                layer: 0,
                                angle: -Math.PI / 2
                            },
                            "-1": {
                                axis: "y",
                                layer: -1,
                                angle: -Math.PI / 2
                            }
                        }
                    },
                    z: {
                        clockwise: {
                            1: {
                                axis: "z",
                                layer: 1,
                                angle: -Math.PI / 2
                            },
                            0: {
                                axis: "z",
                                layer: 0,
                                angle: -Math.PI / 2
                            },
                            "-1": {
                                axis: "z",
                                layer: -1,
                                angle: -Math.PI / 2
                            }
                        },
                        counterclockwise: {
                            1: {
                                axis: "z",
                                layer: 1,
                                angle: Math.PI / 2
                            },
                            0: {
                                axis: "z",
                                layer: 0,
                                angle: Math.PI / 2
                            },
                            "-1": {
                                axis: "z",
                                layer: -1,
                                angle: Math.PI / 2
                            }
                        }
                    }
                },
                d = {
                    front: {
                        right: {
                            up: {
                                axis: "x",
                                isClockwise: !0
                            },
                            down: {
                                axis: "z",
                                isClockwise: !0
                            }
                        },
                        left: {
                            up: {
                                axis: "z",
                                isClockwise: !1
                            },
                            down: {
                                axis: "x",
                                isClockwise: !1
                            }
                        },
                        up: {
                            axis: "z",
                            isClockwise: !1
                        },
                        down: {
                            axis: "z",
                            isClockwise: !0
                        }
                    },
                    right: {
                        right: {
                            up: {
                                axis: "z",
                                isClockwise: !1
                            },
                            down: {
                                axis: "x",
                                isClockwise: !0
                            }
                        },
                        left: {
                            up: {
                                axis: "x",
                                isClockwise: !1
                            },
                            down: {
                                axis: "z",
                                isClockwise: !0
                            }
                        },
                        up: {
                            axis: "z",
                            isClockwise: !1
                        },
                        down: {
                            axis: "z",
                            isClockwise: !0
                        }
                    },
                    back: {
                        right: {
                            up: {
                                axis: "x",
                                isClockwise: !1
                            },
                            down: {
                                axis: "z",
                                isClockwise: !1
                            }
                        },
                        left: {
                            up: {
                                axis: "z",
                                isClockwise: !0
                            },
                            down: {
                                axis: "x",
                                isClockwise: !0
                            }
                        },
                        up: {
                            axis: "z",
                            isClockwise: !0
                        },
                        down: {
                            axis: "z",
                            isClockwise: !1
                        }
                    },
                    left: {
                        right: {
                            up: {
                                axis: "z",
                                isClockwise: !0
                            },
                            down: {
                                axis: "x",
                                isClockwise: !1
                            }
                        },
                        left: {
                            up: {
                                axis: "x",
                                isClockwise: !0
                            },
                            down: {
                                axis: "z",
                                isClockwise: !1
                            }
                        },
                        up: {
                            axis: "z",
                            isClockwise: !0
                        },
                        down: {
                            axis: "z",
                            isClockwise: !1
                        }
                    }
                },
                x = new i.Vector3(4, 4, 4),
                h = new i.Vector3(0, 0, 0);

            function g(e, t, a) {
                if (!t) return;
                let o = Date.now(),
                    n = new i.Matrix4,
                    r = t.angle,
                    s = e.filter(e => {
                        let a = e.position;
                        return "x" === t.axis && .1 > Math.abs(a.x - t.layer) || "y" === t.axis && .1 > Math.abs(a.y - t.layer) || "z" === t.axis && .1 > Math.abs(a.z - t.layer)
                    });
                s.forEach(e => {
                    e.userData.startPosition = e.position.clone(), e.userData.startRotation = e.rotation.clone()
                }), requestAnimationFrame(function e() {
                    let l = Math.min((Date.now() - o) / 200, 1),
                        c = l * (2 - l) * r;
                    s.forEach(e => {
                        switch (t.axis) {
                            case "x":
                                n.makeRotationX(c);
                                break;
                            case "y":
                                n.makeRotationY(c);
                                break;
                            case "z":
                                n.makeRotationZ(c)
                        }
                        e.position.copy(e.userData.startPosition).applyMatrix4(n), e.rotation.setFromRotationMatrix(n.multiply(new i.Matrix4().makeRotationFromEuler(e.userData.startRotation)))
                    }), l < 1 ? requestAnimationFrame(e) : (s.forEach(e => {
                        e.updateMatrix(), delete e.userData.startPosition, delete e.userData.startRotation
                    }), a && a())
                })
            }

            function f(e, t) {
                let a, o = t.y > 0 ? "top" : "bottom";
                switch (Math.floor(e % 360 / 90)) {
                    case 0:
                        a = "front";
                        break;
                    case 1:
                        a = "right";
                        break;
                    case 2:
                        a = "back";
                        break;
                    case 3:
                        a = "left"
                }
                return {
                    viewDirection: a,
                    height: o
                }
            }

            function w(e) {
                let {
                    isScrambling: t,
                    onScrambleComplete: a,
                    isResetting: n,
                    onResetComplete: r,
                    setEnableOrbitControls: w
                } = e, m = (0, s.useRef)(), p = (0, s.useRef)([]), {
                    camera: b,
                    controls: y
                } = (0, l.A)();
                return ! function(e, t, a) {
                    let {
                        camera: o,
                        gl: n,
                        scene: r
                    } = (0, l.A)(), c = (0, s.useRef)({
                        isDragging: !1,
                        startIntersection: null,
                        startX: null,
                        startY: null,
                        currentIntersection: null
                    }), x = e => {
                        let a = n.domElement.getBoundingClientRect(),
                            r = (e.clientX - a.left) / a.width * 2 - 1,
                            s = -(2 * ((e.clientY - a.top) / a.height)) + 1,
                            l = new i.Raycaster;
                        l.setFromCamera(new i.Vector2(r, s), o);
                        let c = t.current.filter(e => null !== e);
                        return l.intersectObjects(c)[0]
                    }, h = (e, t, a, n, r) => {
                        let s = r - a < 0,
                            l = n - t > 0 ? "right" : "left",
                            c = e.face.normal.clone();
                        c.transformDirection(e.object.matrixWorld);
                        let x = e.object.position,
                            h = Math.round(x.y);
                        if (console.log("屏幕横向滑动方向: ".concat(l, " ").concat(s ? "向上" : "向下")), console.log("起始点位置: x=".concat(x.x.toFixed(2), ", y=").concat(x.y.toFixed(2), ", z=").concat(x.z.toFixed(2))), !(Math.abs(c.y) > .5)) return u.y["right" === l ? "clockwise" : "counterclockwise"][h]; {
                            let e = new i.Vector3;
                            o.getWorldPosition(e);
                            let t = (180 * Math.atan2(e.x, e.z) / Math.PI + 360) % 360;
                            console.log("相机角度: ".concat(t.toFixed(2), "度"));
                            let {
                                viewDirection: a,
                                height: n
                            } = f(t, e);
                            console.log("详细视角方向: ".concat(a, " ").concat(n)), "bottom" === n && (l = "right" === l ? "left" : "right");
                            let r = d[a][l][s ? "up" : "down"],
                                c = Math.round(x.x),
                                h = Math.round(x.z),
                                g = "x" === r.axis ? c : h;
                            return u[r.axis][r.isClockwise ? "clockwise" : "counterclockwise"][g]
                        }
                    }, w = (e, t, a, n, r) => {
                        let s = r - a < 0,
                            l = e.face.normal.clone();
                        l.transformDirection(e.object.matrixWorld);
                        let c = e.object.position;
                        console.log("屏幕竖向滑动方向: ".concat(n - t > 0 ? "right" : "left", " ").concat(s ? "向上" : "向下")), console.log("起始点位置: x=".concat(c.x.toFixed(2), ", y=").concat(c.y.toFixed(2), ", z=").concat(c.z.toFixed(2)));
                        let x = new i.Vector3;
                        o.getWorldPosition(x);
                        let {
                            viewDirection: h,
                            height: g
                        } = f((180 * Math.atan2(x.x, x.z) / Math.PI + 360) % 360, x);
                        if (console.log("详细视角方向: ".concat(h, " ").concat(g)), Math.abs(l.x) > .5) {
                            let e = d[h][s ? "up" : "down"],
                                t = Math.round(c.y),
                                a = Math.round(c.z),
                                o = "y" === e.axis ? t : a;
                            return u[e.axis][e.isClockwise ? "clockwise" : "counterclockwise"][o]
                        } {
                            let e = s ? "clockwise" : "counterclockwise";
                            ("back" === h || "right" === h) && (e = "clockwise" === e ? "counterclockwise" : "clockwise"), console.log("Not left right face", s, e);
                            let t = Math.round(c.x);
                            return u.x[e][t]
                        }
                    };
                    (0, s.useEffect)(() => {
                        if (!e.current) return;
                        let o = n.domElement,
                            r = e => {
                                let t = x(e);
                                if (t) {
                                    let o = t.object.position;
                                    console.log("点击方块坐标: x=".concat(o.x.toFixed(2), ", y=").concat(o.y.toFixed(2), ", z=").concat(o.z.toFixed(2))), a(!1), c.current = {
                                        isDragging: !0,
                                        startIntersection: t,
                                        startX: e.clientX,
                                        startY: e.clientY,
                                        currentIntersection: t
                                    }
                                }
                            },
                            s = e => {
                                if (!c.current.isDragging) return;
                                let a = x(e);
                                if (a) {
                                    let o;
                                    c.current.currentIntersection = a;
                                    let n = e.clientX - c.current.startX,
                                        r = e.clientY - c.current.startY,
                                        s = Math.abs(n) > Math.abs(r);
                                    if (5 > Math.abs(n) && 5 > Math.abs(r)) return null;
                                    (o = s ? h(c.current.startIntersection, c.current.startX, c.current.startY, e.clientX, e.clientY) : w(c.current.startIntersection, c.current.startX, c.current.startY, e.clientX, e.clientY)) && (c.current.isDragging = !1, g(t.current, o, () => {
                                        console.log("Move completed:", o)
                                    }))
                                }
                            },
                            i = () => {
                                c.current.isDragging = !1, a(!0)
                            };
                        return o.addEventListener("mousedown", r), o.addEventListener("mousemove", s), o.addEventListener("mouseup", i), o.addEventListener("mouseleave", i), () => {
                            o.removeEventListener("mousedown", r), o.removeEventListener("mousemove", s), o.removeEventListener("mouseup", i), o.removeEventListener("mouseleave", i)
                        }
                    }, [o, n, r, e, t, a])
                }(m, p, w), (0, s.useEffect)(() => {
                    if (t) return function(e, t) {
                        let a = Object.values(u).flatMap(e => Object.values(e).flatMap(e => Object.values(e))),
                            o = 0,
                            n = setInterval(() => {
                                o < 20 && g(e, a[Math.floor(Math.random() * a.length)], () => {
                                    20 == ++o && t && (clearInterval(n), t())
                                })
                            }, 250);
                        return () => clearInterval(n)
                    }(p.current, a)
                }, [t]), (0, s.useEffect)(() => {
                    n && (! function(e, t, a) {
                        if (e.forEach((e, t) => {
                                let a = Math.floor(t / 9) - 1,
                                    o = Math.floor(t % 9 / 3) - 1;
                                e.position.set(a, o, t % 3 - 1), e.rotation.set(0, 0, 0), e.updateMatrix()
                            }), t && a) {
                            let e = t.position.clone(),
                                o = a.target.clone(),
                                n = Date.now();
                            ! function r() {
                                let s = Math.min((Date.now() - n) / 1e3, 1),
                                    i = s * (2 - s);
                                t.position.lerpVectors(e, x, i), a.target.lerpVectors(o, h, i), a.update(), s < 1 && requestAnimationFrame(r)
                            }()
                        }
                    }(p.current, b, y), r())
                }, [n, b, y]), (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("group", {
                        ref: m,
                        children: [(0, o.jsxs)("mesh", {
                            position: [0, 0, 0],
                            renderOrder: 1,
                            children: [(0, o.jsx)("boxGeometry", {
                                args: [3, 3, 3]
                            }), (0, o.jsx)("meshBasicMaterial", {
                                color: "#000000",
                                depthWrite: !1
                            })]
                        }), [...Array(27)].map((e, t) => {
                            let a = Math.floor(t / 9) - 1,
                                n = Math.floor(t % 9 / 3) - 1,
                                r = t % 3 - 1;
                            return (0, o.jsxs)("mesh", {
                                ref: e => p.current[t] = e,
                                position: [a, n, r],
                                renderOrder: 2,
                                children: [(0, o.jsx)("boxGeometry", {
                                    args: [.95, .95, .95]
                                }), [new i.MeshBasicMaterial({
                                    color: 1 === a ? c.right : "#000000",
                                    transparent: 1 !== a,
                                    opacity: +(1 === a)
                                }), new i.MeshBasicMaterial({
                                    color: -1 === a ? c.left : "#000000",
                                    transparent: -1 !== a,
                                    opacity: +(-1 === a)
                                }), new i.MeshBasicMaterial({
                                    color: 1 === n ? c.up : "#000000",
                                    transparent: 1 !== n,
                                    opacity: +(1 === n)
                                }), new i.MeshBasicMaterial({
                                    color: -1 === n ? c.down : "#000000",
                                    transparent: -1 !== n,
                                    opacity: +(-1 === n)
                                }), new i.MeshBasicMaterial({
                                    color: 1 === r ? c.front : "#000000",
                                    transparent: 1 !== r,
                                    opacity: +(1 === r)
                                }), new i.MeshBasicMaterial({
                                    color: -1 === r ? c.back : "#000000",
                                    transparent: -1 !== r,
                                    opacity: +(-1 === r)
                                })].map((e, t) => (0, o.jsx)("primitive", {
                                    object: e,
                                    attach: "material-".concat(t)
                                }, t))]
                            }, t)
                        })]
                    })
                })
            }
            var m = a(89011),
                p = a(11524);

            function b() {
                let [e, t] = (0, s.useState)(null), [a, l] = (0, s.useState)(!1), [c, u] = (0, s.useState)(!1), [d, x] = (0, s.useState)(!0), {
                    t: h
                } = (0, m.s)();
                return (0, o.jsxs)("div", {
                    className: "w-full flex flex-col lg:flex-row",
                    children: [(0, o.jsx)("div", {
                        className: "h-[70vh] lg:w-4/5 relative flex items-center justify-center",
                        children: (0, o.jsx)("div", {
                            className: "w-full lg:w-4/5 h-full relative bg-gradient-to-br rounded-lg shadow-inner border border-gray-400 bg-gray-200",
                            children: (0, o.jsxs)(n.Hl, {
                                camera: {
                                    position: [6, 6, 6],
                                    fov: 40,
                                    near: .1,
                                    far: 1e3
                                },
                                gl: {
                                    antialias: !0,
                                    toneMapping: i.NoToneMapping,
                                    outputColorSpace: "srgb",
                                    preserveDrawingBuffer: !0
                                },
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                },
                                children: [(0, o.jsx)(w, {
                                    currentMove: e,
                                    isScrambling: a,
                                    isResetting: c,
                                    onScrambleComplete: () => {
                                        l(!1), t(null)
                                    },
                                    onResetComplete: () => {
                                        u(!1), t(null)
                                    },
                                    setEnableOrbitControls: x
                                }), (0, o.jsx)(r.N, {
                                    makeDefault: !0,
                                    enablePan: !1,
                                    enableZoom: !1,
                                    enableRotate: d,
                                    minDistance: 8,
                                    maxDistance: 8,
                                    enableDamping: !0,
                                    dampingFactor: .05,
                                    mouseButtons: {
                                        LEFT: i.MOUSE.ROTATE,
                                        MIDDLE: null,
                                        RIGHT: null
                                    },
                                    touches: {
                                        ONE: i.TOUCH.ROTATE,
                                        TWO: null
                                    }
                                })]
                            })
                        })
                    }), (0, o.jsx)("div", {
                        className: "lg:w-1/5 p-4 overflow-y-auto",
                        children: (0, o.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, o.jsx)("button", {
                                className: "w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400",
                                onClick: () => l(!0),
                                disabled: a || c || null !== e,
                                children: h("scramble")
                            }), (0, o.jsx)("button", {
                                className: "w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400",
                                onClick: () => u(!0),
                                disabled: a || c || null !== e,
                                children: h("reset")
                            }), (0, o.jsx)("div", {
                                className: "hidden mt-4 md:relative md:block w-full bg-gray-100",
                                children: (0, o.jsx)(p.SideAdComponent, {
                                    format: "vertical"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        11524: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                AdComponent: () => i,
                SideAdComponent: () => s
            });
            var o = a(50987),
                n = a(43195);

            function r(e) {
                let {
                    slot: t,
                    className: a,
                    format: r = "rectangle"
                } = e, s = (0, n.useRef)(!1);
                return (0, n.useEffect)(() => {
                    if (!s.current) try {
                        (window.adsbygoogle = window.adsbygoogle || []).push({}), s.current = !0
                    } catch (e) {
                        console.error("Ad error:", e)
                    }
                }, []), (0, o.jsx)("div", {
                    className: "relative ".concat(a || ""),
                    children: (0, o.jsx)("ins", {
                        className: "adsbygoogle",
                        style: {
                            display: "block"
                        },
                        "data-ad-client": "ca-pub-7746897490519544",
                        "data-ad-slot": t,
                        "data-ad-format": r,
                        "data-full-width-responsive": "false"
                    })
                })
            }

            function s(e) {
                let {
                    className: t,
                    format: a
                } = e;
                return (0, o.jsx)(r, {
                    slot: "7437487022",
                    format: a,
                    className: "overflow-hidden ".concat(t || "")
                })
            }

            function i(e) {
                let {
                    format: t
                } = e;
                return (0, o.jsx)(r, {
                    slot: "4833706118",
                    format: t
                })
            }
        },
        71328: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => i
            });
            var o = a(50987);
            a(43195);
            var n = a(91362);

            function r(e) {
                let {
                    lang: t
                } = e;
                return (0, o.jsx)(n.A, {
                    repo: "selfboot/ai_gallery",
                    repoId: "R_kgDOMPPfdQ",
                    category: "Q&A",
                    categoryId: "DIC_kwDOMPPfdc4Chkvp",
                    mapping: "pathname",
                    reactionsEnabled: "1",
                    emitMetadata: "0",
                    inputPosition: "top",
                    theme: "light",
                    lang: t
                })
            }
            let s = {
                zh: "zh-CN",
                en: "en"
            };

            function i(e) {
                let {
                    lang: t
                } = e;
                return (0, o.jsx)("div", {
                    className: "mt-8",
                    children: (0, o.jsx)(r, {
                        lang: s[t] || "en"
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [7774, 2269, 6921, 8160, 7683, 2860, 7358], () => t(16395)), _N_E = e.O()
    }
]);